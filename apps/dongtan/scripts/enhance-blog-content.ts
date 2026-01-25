/**
 * 블로그 콘텐츠 향상 스크립트
 *
 * bamastro_blog_posts 테이블의 부실한 콘텐츠를 SEO 최적화된 콘텐츠로 재작성
 *
 * 실행 방법:
 * 1. 미리보기: tsx scripts/enhance-blog-content.ts
 * 2. 실제 적용: APPLY=true tsx scripts/enhance-blog-content.ts
 * 3. 특정 카테고리만: CATEGORY=하이퍼블릭 tsx scripts/enhance-blog-content.ts
 * 4. 배치 크기 조절: BATCH_SIZE=100 tsx scripts/enhance-blog-content.ts
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rrzeapykmyrsiqmkwjcf.supabase.co';
const supabaseKey = 'sb_publishable_PURbxvJKEEW_JSuH4NLHqQ_4QXKY71W';

const supabase = createClient(supabaseUrl, supabaseKey);

// 카테고리별 SEO 키워드
const CATEGORY_KEYWORDS: Record<string, string[]> = {
  '가라오케': [
    '인계동 메칸더 후기', '수원가라오케 2차', '인계동 아우라 후기', '수원 인계동 노래방',
    '인계동 가라오케 가격', '수원가라오케', '수원 플레이 주대', '수원 비스트 후기',
    '수원 핫플레이스 가라오케', '인계동 가라오케 디시', '인계동 가라오케 후기',
    '수원역 가라오케', '인계동 퍼블릭', '가라오케 뜻', '가라오케 가격', '가라오케 노래방 차이',
    '강남 가라오케 가격', '강남 가라오케 디시', '강남 가라오케 순위', '강남 가라오케 후기'
  ],
  '하이퍼블릭': [
    '하이퍼블릭 시스템', '하이퍼블릭 뜻', '하이퍼블릭 2차 디시', '하이퍼블릭 차이',
    '하이퍼블릭 터치', '하이퍼블릭 후기 디시', '하이퍼블릭 퍼블릭 차이', '하이퍼블릭 마무리',
    '하이퍼블릭 쩜오 차이', '하이퍼블릭 주대', '하이퍼블릭 셔츠룸 차이', '하이퍼블릭 나무위키',
    '수원 하이퍼블릭 후기', '수원 하퍼', '인계동 하이퍼블릭', '인계동 하퍼',
    '동탄 하이퍼블릭', '분당 하이퍼블릭', '강남 하이퍼블릭 후기'
  ],
  '셔츠룸': [
    '셔츠룸 하이퍼블릭 차이', '하이퍼블릭 셔츠룸 차이', '동탄 셔츠룸',
    '수원 셔츠룸 가격', '강남 셔츠룸', '분당 셔츠룸', '인계동 셔츠룸'
  ],
  '룸살롱': [
    '강남 룸살롱', '분당룸', '수원 룸살롱', '인계동 룸살롱',
    '분당 룸살롱', '강남 쩜오 가격', '강남 쩜오 시스템'
  ],
  '기모노룸': [
    '기모노룸 시스템', '기모노룸 가격', '강남 기모노룸', '분당 기모노룸',
    '수원 기모노룸', '인계동 기모노룸'
  ],
  '호빠': [
    '호빠 시스템', '호빠 가격', '강남 호빠', '분당 호빠',
    '수원 호빠', '인계동 호빠', '쩜오 노는법', '쩜오 후기'
  ]
};

// 지역별 이름 매핑
const REGION_NAMES: Record<string, { name: string; area: string; station: string; fullName: string }> = {
  gangnam: { name: '강남', area: '강남역', station: '강남역', fullName: '서울 강남' },
  bundang: { name: '분당', area: '서현역', station: '서현역', fullName: '성남시 분당구' },
  suwon: { name: '수원 인계동', area: '인계동', station: '수원역', fullName: '수원시 인계동' },
  ingedong: { name: '인계동', area: '인계동', station: '수원역', fullName: '수원시 인계동' },
  dongtan: { name: '동탄', area: '동탄역', station: '동탄역', fullName: '화성시 동탄' }
};

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  region: string;
}

interface ContentResult {
  title: string;
  content: string;
  excerpt: string;
}

// 제목이 문제가 있는지 확인
function hasBadTitle(title: string): boolean {
  return /#\d+/.test(title);
}

// 콘텐츠가 부실한지 확인
function hasShortContent(content: string): boolean {
  return content.length < 1000;
}

// 포스트가 업데이트 필요한지 확인
function needsUpdate(post: BlogPost): boolean {
  return hasBadTitle(post.title) || hasShortContent(post.content);
}

// SEO 최적화된 제목 생성 (30-60자 보장)
function generateTitle(category: string, region: string, index: number): string {
  const regionInfo = REGION_NAMES[region] || REGION_NAMES.gangnam;

  const titleTemplates: Record<string, string[]> = {
    '가라오케': [
      `${regionInfo.name} 가라오케 완벽 가이드 2025 | 시스템부터 가격까지 총정리`,
      `${regionInfo.name} 가라오케 추천 BEST 5 | 처음 방문자를 위한 필수 정보 모음`,
      `${regionInfo.name} 가라오케 가격 및 시스템 안내 | 2025년 최신 후기 정리`,
      `${regionInfo.name} 가라오케 이용 완벽 꿀팁 | 회식 장소로 인기인 이유는?`,
      `${regionInfo.area} 가라오케 솔직 후기 | 분위기, 서비스, 가격 비교 분석`,
      `${regionInfo.name} 퍼블릭 가라오케란? | 일반 노래방과 다른 점 완벽 정리`,
      `${regionInfo.name} 가라오케 첫 방문 완벽 가이드 | 예약부터 이용 끝까지`,
      `${regionInfo.area} 인기 가라오케 추천 | 직장인 회식 2차 장소 베스트`,
      `${regionInfo.name} 가라오케 시스템 상세 설명 | 초보자도 쉽게 이해하기`,
      `${regionInfo.name} 가라오케 야간 이용 안내 | 영업시간과 주의사항 정리`
    ],
    '하이퍼블릭': [
      `${regionInfo.name} 하이퍼블릭 완벽 정리 2025 | 시스템, 가격, 후기 총정리`,
      `하이퍼블릭이란 무엇인가? ${regionInfo.name} 하이퍼블릭 이용 완벽 가이드`,
      `${regionInfo.name} 하이퍼블릭 vs 퍼블릭 | 차이점과 선택 기준 완벽 비교`,
      `${regionInfo.name} 하이퍼블릭 가격 안내 | 주대와 TC 시스템 상세 설명`,
      `${regionInfo.name} 하이퍼블릭 실제 후기 | 방문 경험과 솔직한 평가`,
      `${regionInfo.area} 하이퍼블릭 추천 베스트 | 분위기 좋은 곳 엄선 리스트`,
      `${regionInfo.name} 하이퍼블릭 첫 방문 가이드 | 알아야 할 모든 것 정리`,
      `하이퍼블릭 뜻과 시스템 완벽 설명 | ${regionInfo.name} 지역 이용 꿀팁`,
      `${regionInfo.name} 하이퍼블릭 예약 방법 안내 | 전화 예약부터 방문까지`,
      `${regionInfo.name} 하이퍼블릭 vs 셔츠룸 | 어떤 곳이 나에게 맞을까?`
    ],
    '셔츠룸': [
      `${regionInfo.name} 셔츠룸 완벽 가이드 2025 | 시스템과 가격 총정리`,
      `${regionInfo.name} 셔츠룸이란? 하이퍼블릭과의 차이점 완벽 비교 분석`,
      `${regionInfo.name} 셔츠룸 가격 안내 | 2025년 최신 업데이트 정보`,
      `${regionInfo.name} 셔츠룸 실제 후기 | 첫 방문자가 꼭 알아야 할 정보`,
      `${regionInfo.area} 셔츠룸 추천 베스트 | 분위기 좋은 곳 엄선 리스트`,
      `${regionInfo.name} 셔츠룸 예약 방법과 이용 꿀팁 | 완벽 정리 가이드`,
      `${regionInfo.name} 셔츠룸 vs 하이퍼블릭 | 나에게 맞는 곳 선택 가이드`,
      `${regionInfo.name} 셔츠룸 시스템 상세 설명 | 초보자를 위한 완벽 가이드`,
      `${regionInfo.name} 셔츠룸 영업시간 안내 | 야간 이용 방법과 주의사항`,
      `${regionInfo.area} 셔츠룸 분위기 리뷰 | 실제 방문 후기와 평가`
    ],
    '룸살롱': [
      `${regionInfo.name} 룸살롱 완벽 가이드 2025 | 시스템과 에티켓 총정리`,
      `${regionInfo.name} 룸살롱 가격 안내 | 주대와 TC 비용 상세 정보`,
      `${regionInfo.name} 룸살롱 첫 방문 완벽 가이드 | 알아야 할 모든 것`,
      `${regionInfo.area} 룸살롱 추천 | 비즈니스 접대 장소로 인기인 이유`,
      `${regionInfo.name} 룸살롱 후기 분석 | 서비스 품질과 분위기 상세 비교`,
      `${regionInfo.name} 룸살롱 예약 방법 안내 | 전화 예약 팁과 주의사항`,
      `${regionInfo.name} 룸살롱 드레스코드 안내 | 방문 전 체크리스트 정리`,
      `${regionInfo.name} 룸살롱 시스템 설명 | 쩜오와의 차이점 완벽 분석`,
      `${regionInfo.area} 고급 룸살롱 추천 | VIP 서비스와 프리미엄 시설`,
      `${regionInfo.name} 룸살롱 영업시간 안내 | 예약 가능 시간대 총정리`
    ],
    '기모노룸': [
      `${regionInfo.name} 기모노룸 완벽 가이드 | 일본식 서비스의 정수를 경험하다`,
      `${regionInfo.name} 기모노룸이란? 시스템과 가격 완벽 총정리 2025`,
      `${regionInfo.name} 기모노룸 가격 안내 | 2025년 최신 정보 업데이트`,
      `${regionInfo.name} 기모노룸 실제 후기 | 특별한 경험담과 솔직 리뷰`,
      `${regionInfo.area} 기모노룸 추천 | 품격 있는 접대 장소 베스트`,
      `${regionInfo.name} 기모노룸 예약 안내 | 방문 전 꼭 알아야 할 필수 정보`,
      `${regionInfo.name} 기모노룸 서비스 소개 | 일반 룸살롱과의 차이점`,
      `${regionInfo.name} 기모노룸 분위기 리뷰 | 일본식 인테리어의 매력`,
      `${regionInfo.name} 기모노룸 이용 에티켓 | 첫 방문자를 위한 가이드`,
      `${regionInfo.area} 프리미엄 기모노룸 | VIP 서비스와 특별한 경험`
    ],
    '호빠': [
      `${regionInfo.name} 호빠 완벽 가이드 2025 | 시스템과 이용 방법 총정리`,
      `${regionInfo.name} 호빠란 무엇인가? 초보자를 위한 상세 설명 가이드`,
      `${regionInfo.name} 호빠 가격 안내 | 주대와 시스템 비용 상세 정보`,
      `${regionInfo.name} 호빠 실제 후기 | 방문 경험담과 솔직한 리뷰`,
      `${regionInfo.area} 호빠 추천 베스트 | 여성들에게 인기인 곳 리스트`,
      `${regionInfo.name} 호빠 예약 방법 안내 | 첫 방문을 위한 완벽 팁`,
      `${regionInfo.name} 호빠 호스트 선택 가이드 | 어떻게 해야 할까?`,
      `${regionInfo.name} 호빠 이용 꿀팁 모음 | 즐거운 시간을 위한 가이드`,
      `${regionInfo.name} 호빠 영업시간 안내 | 언제 방문하면 좋을까?`,
      `${regionInfo.area} 호빠 분위기 리뷰 | 안전하고 즐거운 공간 소개`
    ]
  };

  const templates = titleTemplates[category] || titleTemplates['가라오케'];
  return templates[index % templates.length];
}

// SEO 최적화된 콘텐츠 생성
function generateContent(category: string, region: string, index: number): ContentResult {
  const regionInfo = REGION_NAMES[region] || REGION_NAMES.gangnam;
  const keywords = CATEGORY_KEYWORDS[category] || CATEGORY_KEYWORDS['가라오케'];
  const keyword = keywords[index % keywords.length];

  const title = generateTitle(category, region, index);

  // 카테고리별 상세 콘텐츠 생성
  const content = generateDetailedContent(category, regionInfo, keyword, index);

  // excerpt 생성 (첫 150자)
  const excerpt = content.split('\n')[0].substring(0, 150) + '...';

  return { title, content, excerpt };
}

function generateDetailedContent(
  category: string,
  regionInfo: { name: string; area: string; station: string; fullName: string },
  keyword: string,
  index: number
): string {
  const contentGenerators: Record<string, () => string> = {
    '가라오케': () => generateKaraokeContent(regionInfo, keyword, index),
    '하이퍼블릭': () => generateHyperpublicContent(regionInfo, keyword, index),
    '셔츠룸': () => generateShirtsroomContent(regionInfo, keyword, index),
    '룸살롱': () => generateRoomsalonContent(regionInfo, keyword, index),
    '기모노룸': () => generateKimonoroomContent(regionInfo, keyword, index),
    '호빠': () => generateHostbarContent(regionInfo, keyword, index)
  };

  const generator = contentGenerators[category] || contentGenerators['가라오케'];
  return generator();
}

function generateKaraokeContent(
  regionInfo: { name: string; area: string; station: string; fullName: string },
  keyword: string,
  index: number
): string {
  const variations = [
    {
      intro: `${regionInfo.name} 지역에서 가라오케를 찾고 계신가요? 최근 ${regionInfo.area} 일대에서 프리미엄 가라오케에 대한 관심이 높아지고 있습니다. 일반 노래방과는 차원이 다른 서비스와 시설로 직장인 회식, 친구 모임, 특별한 날의 2차 장소로 각광받고 있죠. 오늘은 ${regionInfo.name} 가라오케의 모든 것을 상세하게 알려드리겠습니다.`,
      system: `가라오케 시스템은 생각보다 간단합니다. 예약 후 방문하면 프라이빗 룸으로 안내받고, 전담 매니저가 배정됩니다. 최신 노래방 기기와 고급 음향 시설이 갖춰져 있어 노래를 부르며 즐거운 시간을 보낼 수 있습니다. 매니저는 분위기를 띄워주고, 음료 서빙과 함께 편안한 자리를 만들어줍니다. 일반 노래방과 달리 서비스 품질이 보장되어 있어 처음 방문하시는 분들도 만족도가 높은 편입니다.`,
      price: `${regionInfo.name} 가라오케 가격은 1인당 15만원에서 25만원 선입니다. 여기에는 기본 주류와 안주, 2시간 이용료가 포함되어 있습니다. 프리미엄 양주를 선택하거나 시간을 연장하면 추가 비용이 발생합니다. 주말보다 평일이 조금 저렴한 편이니 참고하세요. 단체 예약 시 할인이 적용되는 경우도 많으니 예약 시 문의해보시기 바랍니다.`,
      tips: `처음 방문하시는 분들을 위한 꿀팁을 알려드립니다. 첫째, 반드시 예약 후 방문하세요. 인기 있는 곳은 당일 방문이 어려울 수 있습니다. 둘째, 드레스코드를 확인하세요. 대부분 캐주얼 정장이면 무난합니다. 셋째, 예산을 미리 정해두면 부담 없이 즐길 수 있습니다. 넷째, 음주 후 대리운전이나 택시를 이용하시고 안전하게 귀가하세요.`
    },
    {
      intro: `${regionInfo.area}에서 분위기 좋은 2차 장소를 찾는다면 가라오케를 추천드립니다. 단순히 노래만 부르는 곳이 아니라, 프라이빗한 공간에서 음악과 함께 대화를 나눌 수 있는 프리미엄 엔터테인먼트 공간입니다. ${regionInfo.fullName} 지역의 가라오케는 접근성도 좋고 시설도 깔끔해서 많은 분들이 찾고 있습니다.`,
      system: `가라오케는 테이블 서비스 형태로 운영됩니다. 입장 후 원하는 룸을 선택하면 전담 매니저가 배정되어 처음부터 끝까지 자리를 함께합니다. 최신 노래방 기계, 고급 음향 시스템, 분위기 있는 조명까지 완벽한 세팅이 되어 있습니다. 매니저가 노래 선곡도 도와주고, 분위기에 맞게 진행을 해주어 어색함 없이 즐길 수 있습니다.`,
      price: `이용 요금은 시간제와 정액제가 있습니다. ${regionInfo.name} 기준으로 2시간 기본 이용 시 1인당 18만원 내외입니다. 여기에 기본 주류와 과일 안주가 포함됩니다. 연장 시 시간당 추가 요금이 발생하며, 프리미엄 주류 선택 시 별도 비용이 청구됩니다. 법인카드 결제도 가능한 곳이 많아 비즈니스 모임에도 적합합니다.`,
      tips: `가라오케를 제대로 즐기려면 몇 가지를 기억하세요. 예약은 필수이며, 특히 주말에는 최소 하루 전 예약을 권장합니다. 인원수에 맞는 룸 사이즈를 선택하고, 첫 방문이라면 매니저에게 미리 알려주면 더 세심한 서비스를 받을 수 있습니다. 결제 방법도 미리 확인해두시면 좋습니다.`
    },
    {
      intro: `회식 후 2차를 어디로 갈지 고민이신가요? ${regionInfo.name} 가라오케는 직장인들의 회식 문화를 바꾸고 있습니다. 시끄러운 술집 대신 프라이빗한 공간에서 팀원들과 특별한 시간을 보낼 수 있기 때문이죠. ${regionInfo.station} 인근에 위치한 가라오케들은 접근성도 좋아 회식 2차로 최적입니다.`,
      system: `가라오케 이용 시스템을 설명드리겠습니다. 예약 시 인원수와 희망 시간을 알려주시면, 그에 맞는 룸과 매니저가 준비됩니다. 도착 후 안내에 따라 룸으로 이동하면, 이미 테이블 세팅이 완료되어 있습니다. 노래 기계 사용법도 매니저가 친절하게 안내해드립니다. 단체 예약 시에는 여러 룸을 연결해서 사용할 수도 있습니다.`,
      price: `${regionInfo.name} 가라오케의 평균 가격대는 1인 기준 16만원에서 22만원입니다. 단체 예약 시 할인이 적용되는 곳도 있으니 미리 문의해보세요. 음료는 기본 포함이며, 고급 양주 주문 시 병당 20만원에서 50만원 추가됩니다. 10인 이상 단체는 별도 협의가 가능한 곳이 많습니다.`,
      tips: `회식 장소로 가라오케를 선택할 때 팁을 드리자면, 예산을 미리 정해서 예약 시 알려주세요. 단체석 여부, 화장실 접근성, 주차 가능 여부도 확인하면 좋습니다. 그리고 음주 후 대리운전 연락처를 미리 저장해두면 편합니다. 영수증 처리가 필요하다면 예약 시 미리 말씀해주세요.`
    }
  ];

  const v = variations[index % variations.length];

  return `${v.intro}

## ${regionInfo.name} 가라오케 시스템 상세 안내

${v.system}

가라오케의 룸은 크기에 따라 소형(2-4인), 중형(5-8인), 대형(10인 이상)으로 나뉩니다. 인원에 맞는 룸을 선택하면 더 쾌적하게 이용할 수 있습니다. 룸마다 인테리어와 분위기가 다르니 예약 시 선호하는 스타일을 말씀해주시면 맞춤 안내를 받을 수 있습니다.

## ${regionInfo.name} 가라오케 가격 정보

${v.price}

가격 구성을 자세히 살펴보면, 기본 세트에는 룸 이용료, 기본 주류(맥주 또는 소주), 간단한 안주가 포함됩니다. 프리미엄 세트를 선택하면 양주와 고급 안주가 제공됩니다. 연장 요금은 시간당 1인 3-5만원 정도이며, 주말이나 공휴일에는 약간의 추가 요금이 있을 수 있습니다.

## 이용 꿀팁

${v.tips}

## ${regionInfo.name} 가라오케만의 특징

${regionInfo.name} 가라오케만의 특별한 점이 있습니다. ${regionInfo.station} 인근에 위치해 접근성이 뛰어나고, 주변에 맛집과 카페가 많아 1차와 연계하기 좋습니다. 또한 최신 인테리어와 음향 시설로 고객 만족도가 높습니다.

대부분의 업장이 주차 시설을 갖추고 있어 자차 이용이 편리합니다. 다만 음주 후에는 반드시 대리운전을 이용해주세요. 영업시간은 보통 오후 6시부터 새벽 2시까지이며, 주말에는 연장 운영하는 곳도 있습니다. 예약 문의는 오후 3시부터 가능한 곳이 대부분입니다.

## ${regionInfo.name} 가라오케 예약 방법

예약은 전화 또는 카카오톡으로 가능합니다. 예약 시 필요한 정보는 방문 날짜, 시간, 인원수, 희망 룸 타입입니다. 특별한 요청사항(생일, 기념일 등)이 있다면 미리 말씀해주시면 서프라이즈 이벤트도 준비해드립니다. 예약 확정 후 변경이나 취소는 방문 3시간 전까지 연락주시면 됩니다.

## 자주 묻는 질문 (FAQ)

**Q. 처음인데 어떻게 예약하나요?**
A. 전화나 카카오톡으로 예약 가능합니다. 방문 날짜, 시간, 인원수를 알려주시면 됩니다. 특별한 요청사항이 있다면 미리 말씀해주세요.

**Q. 드레스코드가 있나요?**
A. 대부분 캐주얼 정장 수준이면 됩니다. 반바지, 슬리퍼는 피해주시는 것이 좋습니다. 특별한 드레스코드가 있는 곳은 예약 시 안내해드립니다.

**Q. 카드 결제 가능한가요?**
A. 네, 대부분의 업장에서 카드 결제가 가능합니다. 현금 결제 시 할인을 해주는 곳도 있습니다. 법인카드 결제도 가능하니 영수증이 필요하시면 미리 말씀해주세요.

**Q. 2차 후 귀가는 어떻게 하나요?**
A. 대리운전 연결을 도와드립니다. 택시 호출도 가능하며, ${regionInfo.station} 방면 심야버스 노선도 안내받을 수 있습니다. 안전한 귀가를 위해 도움을 드리고 있습니다.

**Q. 단체 예약은 몇 명까지 가능한가요?**
A. 대부분 20-30명까지 가능하며, 대형 단체는 별도 문의해주시면 됩니다. 여러 룸을 연결해서 사용할 수도 있습니다.

## 관련 검색 키워드

${keyword}, ${regionInfo.name} 가라오케 추천, ${regionInfo.area} 가라오케 가격, ${regionInfo.name} 가라오케 시스템, ${regionInfo.name} 회식 장소, ${regionInfo.area} 2차 추천, ${regionInfo.name} 프리미엄 노래방, ${regionInfo.name} 가라오케 후기, ${regionInfo.area} 노래방 추천`;
}

function generateHyperpublicContent(
  regionInfo: { name: string; area: string; station: string; fullName: string },
  keyword: string,
  index: number
): string {
  const variations = [
    {
      intro: `하이퍼블릭이 뭔지 궁금하셨죠? ${regionInfo.name}에서 요즘 가장 핫한 유흥 트렌드가 바로 하이퍼블릭입니다. 일반 퍼블릭보다 한 단계 업그레이드된 서비스와 시스템으로, 새로운 경험을 찾는 분들에게 인기를 끌고 있습니다. 오늘은 ${regionInfo.name} 하이퍼블릭의 모든 것을 상세하게 알려드리겠습니다.`,
      whatIs: `하이퍼블릭은 'Hyper + Public'의 합성어로, 기존 퍼블릭 가라오케보다 향상된 서비스를 제공하는 프리미엄 엔터테인먼트 공간입니다. 매니저의 서비스 퀄리티, 인테리어, 음향 시설 모든 면에서 한 단계 위의 경험을 제공합니다. 쉽게 말해 퍼블릭의 프리미엄 버전이라고 생각하시면 됩니다.`,
      system: `하이퍼블릭 시스템은 TC(Table Charge) 방식으로 운영됩니다. 예약 후 방문하면 프라이빗 룸으로 안내받고, 전담 매니저가 배정됩니다. 매니저 선택권이 있어 원하는 스타일의 매니저를 요청할 수 있습니다. 기본 세트에는 주류, 안주, 룸 이용료가 포함됩니다. 서비스 퀄리티가 높아 처음 방문해도 만족도가 높습니다.`,
      price: `${regionInfo.name} 하이퍼블릭 가격은 1인당 20만원에서 35만원 선입니다. 일반 퍼블릭보다 다소 높지만 그만큼 서비스 퀄리티가 다릅니다. 프리미엄 주류 선택이나 연장 시 추가 비용이 발생합니다. 평일에는 할인 이벤트가 있는 곳도 많으니 미리 문의해보세요.`
    },
    {
      intro: `${regionInfo.area}에서 색다른 밤문화를 경험하고 싶다면 하이퍼블릭을 주목하세요. 퍼블릭과 룸살롱의 장점만을 결합한 새로운 개념의 공간으로, 합리적인 가격에 프리미엄 서비스를 즐길 수 있습니다. ${regionInfo.fullName} 지역의 하이퍼블릭은 시설과 서비스 모두 우수한 편입니다.`,
      whatIs: `하이퍼블릭은 퍼블릭 가라오케의 진화형입니다. 단순히 노래만 부르는 곳이 아니라, 세련된 분위기에서 전문 매니저의 서비스를 받으며 즐거운 시간을 보내는 공간입니다. 최근 젊은 층 사이에서 급격히 인기가 상승하고 있으며, 입문자들에게도 추천할 만한 업종입니다.`,
      system: `이용 방법은 간단합니다. 예약 시 인원과 예산을 말씀해주시면, 그에 맞는 패키지를 안내받습니다. 도착 후 룸으로 이동하면 이미 테이블 세팅이 완료되어 있고, 선택한 매니저가 자리를 함께합니다. 노래 기계는 물론 다양한 테이블 게임도 즐길 수 있습니다. 분위기에 따라 편하게 진행됩니다.`,
      price: `가격대는 패키지에 따라 다양합니다. ${regionInfo.name} 기준 기본 패키지 1인 22만원, 프리미엄 패키지 1인 30만원 선입니다. 주말이나 금요일은 약간의 추가 요금이 있을 수 있으니 예약 시 확인하세요. 단체 할인이 적용되는 곳도 있습니다.`
    },
    {
      intro: `하이퍼블릭과 퍼블릭의 차이가 뭘까요? ${regionInfo.name}에서 처음 방문을 고민하시는 분들이 가장 많이 하는 질문입니다. 간단히 말해 하이퍼블릭은 더 높은 서비스 수준과 프리미엄 시설을 갖춘 업그레이드 버전입니다. 오늘은 그 차이점과 함께 ${regionInfo.name} 하이퍼블릭 이용 방법을 알려드리겠습니다.`,
      whatIs: `일반 퍼블릭이 '즐거운 노래방'이라면, 하이퍼블릭은 '프라이빗 라운지'에 가깝습니다. 인테리어부터 다르고, 매니저 교육 수준도 높으며, 제공되는 음식과 주류의 퀄리티도 상위급입니다. 가격 차이가 있지만 그만한 가치가 있다고 평가받고 있습니다.`,
      system: `하이퍼블릭은 주로 예약제로 운영됩니다. 당일 워크인도 가능하지만, 인기 있는 매니저는 금방 예약이 차기 때문에 미리 연락하는 것을 권장합니다. 시스템상 매니저 지명이 가능하고, 원하지 않으면 랜덤 배정을 받을 수도 있습니다. 처음이라면 랜덤 배정도 괜찮습니다.`,
      price: `${regionInfo.name} 하이퍼블릭의 1인 평균 비용은 25만원입니다. 여기에 기본 주류, 안주, 2시간 이용료가 포함됩니다. 단체 예약이나 평일 이용 시 할인되는 경우도 있으니 문의해보세요. 프리미엄 양주 선택 시 별도 비용이 발생합니다.`
    }
  ];

  const v = variations[index % variations.length];

  return `${v.intro}

## 하이퍼블릭이란 무엇인가?

${v.whatIs}

하이퍼블릭은 2020년대 들어 급격히 성장한 업종입니다. 기존 유흥업소의 딱딱한 이미지를 벗고, 젊고 세련된 분위기로 20-40대 직장인들에게 큰 호응을 얻고 있습니다. 특히 회식 2차, 친구 모임, 기념일 등 다양한 목적으로 방문하는 분들이 많습니다.

## ${regionInfo.name} 하이퍼블릭 시스템 상세 안내

${v.system}

하이퍼블릭의 서비스는 크게 기본 서비스와 프리미엄 서비스로 나뉩니다. 기본 서비스에는 룸 이용, 기본 주류, 매니저 서비스가 포함됩니다. 프리미엄 서비스를 선택하면 고급 양주, VIP 룸, 선택 매니저 지명 등이 추가됩니다. 본인의 예산과 목적에 맞게 선택하시면 됩니다.

## ${regionInfo.name} 하이퍼블릭 가격 안내

${v.price}

가격 구성을 상세히 살펴보면, TC(Table Charge)가 기본이며 여기에 음료비가 포함됩니다. 연장은 시간당 1인 5-8만원 정도이고, 프리미엄 양주는 병당 30-80만원 선입니다. 카드 결제와 현금 결제 모두 가능하며, 법인카드 결제도 됩니다.

## 퍼블릭 vs 하이퍼블릭 상세 비교

많은 분들이 궁금해하시는 퍼블릭과 하이퍼블릭의 차이를 정리해드립니다.

| 구분 | 퍼블릭 | 하이퍼블릭 |
|------|--------|------------|
| 가격대 | 1인 12-18만원 | 1인 20-35만원 |
| 매니저 수준 | 일반 | 프리미엄 |
| 인테리어 | 기본 | 고급/세련된 |
| 음향/조명 | 보통 | 최상급 |
| 서비스 | 기본 | 맞춤형/세심한 |
| 주류 퀄리티 | 표준 | 프리미엄 옵션 |

하이퍼블릭은 가격이 높은 만큼 전체적인 퀄리티가 높습니다. 특별한 날이나 중요한 자리에는 하이퍼블릭을, 가볍게 즐기고 싶을 때는 퍼블릭을 선택하시면 됩니다.

## ${regionInfo.name} 하이퍼블릭 이용 꿀팁

하이퍼블릭을 제대로 즐기려면 몇 가지를 기억하세요. 첫째, 예약은 필수입니다. 인기 있는 곳은 주말 예약이 빨리 차니까요. 둘째, 예산을 미리 말씀해주시면 그에 맞는 패키지를 추천받을 수 있습니다. 셋째, 매니저 스타일 선호도가 있다면 예약 시 알려주세요. 넷째, 첫 방문이라면 솔직하게 말씀해주시면 더 세심한 안내를 받을 수 있습니다.

## 자주 묻는 질문 (FAQ)

**Q. 하이퍼블릭은 2차로 좋은가요?**
A. 네, 1차에서 식사 후 2차로 방문하시는 분들이 많습니다. 분위기 전환에 최적이며, 노래와 대화를 함께 즐길 수 있어 인기가 높습니다.

**Q. 셔츠룸과 하이퍼블릭의 차이는?**
A. 셔츠룸은 매니저 복장이 셔츠 스타일이고 좀 더 캐주얼합니다. 하이퍼블릭은 다양한 컨셉의 복장과 더 프리미엄한 서비스를 제공합니다.

**Q. 처음인데 어색하지 않을까요?**
A. 매니저들이 분위기를 잘 이끌어주기 때문에 처음이라도 편하게 즐기실 수 있습니다. 예약 시 첫 방문임을 알려주시면 더 세심한 안내를 받을 수 있습니다.

**Q. 단체 예약 가능한가요?**
A. 네, 대부분 단체 예약이 가능하고 인원에 따라 룸 사이즈를 조절해드립니다. 10인 이상 단체는 별도 문의해주세요.

**Q. 드레스코드가 있나요?**
A. 대부분 캐주얼 정장이면 됩니다. 반바지나 슬리퍼는 피해주시는 것이 좋습니다.

## 관련 검색 키워드

${keyword}, 하이퍼블릭 뜻, 하이퍼블릭 시스템, ${regionInfo.name} 하이퍼블릭 추천, ${regionInfo.name} 하이퍼블릭 가격, 퍼블릭 하이퍼블릭 차이, ${regionInfo.area} 하이퍼블릭, 하이퍼블릭 후기, ${regionInfo.name} 2차 추천`;
}

function generateShirtsroomContent(
  regionInfo: { name: string; area: string; station: string; fullName: string },
  keyword: string,
  index: number
): string {
  const variations = [
    {
      intro: `${regionInfo.name} 셔츠룸에 대해 알아보고 계신가요? 셔츠룸은 하이퍼블릭이나 룸살롱보다 캐주얼한 분위기에서 부담 없이 즐길 수 있는 공간입니다. 최근 직장인들 사이에서 회식 2차 장소로 인기가 높아지고 있습니다. 오늘은 ${regionInfo.name} 셔츠룸의 모든 것을 상세하게 알려드리겠습니다.`,
      whatIs: `셔츠룸은 말 그대로 매니저가 셔츠 차림으로 서비스하는 공간입니다. 화려한 드레스 대신 깔끔한 셔츠 스타일로 보다 편안하고 자연스러운 분위기를 연출합니다. 가격도 다른 업종 대비 합리적인 편이어서 부담 없이 방문할 수 있습니다.`,
      system: `이용 시스템은 간단합니다. 예약 후 방문하면 룸으로 안내받고, 셔츠 차림의 매니저가 배정됩니다. 노래방 기기가 갖춰져 있어 노래도 부를 수 있고, 대화와 음주를 즐기며 편안한 시간을 보낼 수 있습니다. 분위기가 캐주얼해서 처음 방문해도 편합니다.`
    },
    {
      intro: `하이퍼블릭과 셔츠룸 중 어디로 갈지 고민되시나요? ${regionInfo.name}에서 두 곳 모두 인기지만, 분위기와 가격대가 다릅니다. 셔츠룸은 좀 더 편안하고 부담 없는 선택지입니다. 오늘은 ${regionInfo.name} 셔츠룸에 대해 자세히 알려드리겠습니다.`,
      whatIs: `셔츠룸은 '캐주얼 퍼블릭'이라고 불리기도 합니다. 매니저가 셔츠를 입고 서비스하기 때문에 붙여진 이름이죠. 룸살롱보다 격식이 덜하고, 일반 술집보다는 서비스가 좋은 중간 포지션의 업종입니다. 편안한 분위기를 선호하는 분들에게 추천드립니다.`,
      system: `셔츠룸은 주로 2시간 단위로 이용합니다. 기본 세트에 주류와 안주가 포함되어 있고, 매니저가 분위기를 띄워줍니다. 노래를 부르지 않아도 대화만으로 즐거운 시간을 보낼 수 있습니다. 강요 없이 본인 페이스대로 즐길 수 있어서 좋습니다.`
    }
  ];

  const v = variations[index % variations.length];

  return `${v.intro}

## 셔츠룸이란 무엇인가?

${v.whatIs}

셔츠룸은 젊은 층에게 특히 인기가 높습니다. 딱딱한 분위기보다는 친구처럼 편하게 대화할 수 있는 공간을 원하는 분들이 많이 찾습니다. 회식 2차, 친구 모임, 생일파티 등 다양한 목적으로 이용됩니다.

## ${regionInfo.name} 셔츠룸 시스템 상세 안내

${v.system}

셔츠룸의 서비스는 편안함을 강조합니다. 매니저들도 친근하게 다가와 대화를 이끌어주기 때문에 처음 방문해도 어색하지 않습니다. 노래를 좋아하시면 함께 부르고, 대화를 원하시면 이야기를 나눌 수 있습니다. 본인 스타일대로 즐기시면 됩니다.

## ${regionInfo.name} 셔츠룸 가격 정보

${regionInfo.name} 셔츠룸 가격은 1인당 15만원에서 22만원 선입니다. 하이퍼블릭보다 약간 저렴하고, 일반 노래방보다는 비싼 중간 가격대입니다. 기본 세트에 주류와 안주가 포함되어 있어 추가 비용 부담이 적습니다.

가격 구성을 살펴보면, 기본 세트에 맥주나 소주, 간단한 안주가 포함됩니다. 양주를 원하시면 별도 주문이 가능하고, 연장은 시간당 1인 3-5만원 정도입니다. 평일에는 할인 이벤트가 있는 곳도 있으니 미리 문의해보세요.

## 하이퍼블릭 vs 셔츠룸 상세 비교

| 구분 | 셔츠룸 | 하이퍼블릭 |
|------|--------|------------|
| 가격대 | 1인 15-22만원 | 1인 20-35만원 |
| 분위기 | 캐주얼/편안한 | 세련된/프리미엄 |
| 매니저 복장 | 셔츠 | 다양한 컨셉 |
| 서비스 | 편안함/친근함 | 프리미엄/세심한 |
| 인테리어 | 깔끔한 | 고급스러운 |

가볍고 편하게 즐기고 싶다면 셔츠룸, 특별한 날이나 좀 더 프리미엄한 서비스를 원한다면 하이퍼블릭을 선택하시면 됩니다.

## ${regionInfo.name} 셔츠룸 특징

${regionInfo.area}의 셔츠룸은 접근성이 좋고 시설도 깔끔합니다. ${regionInfo.station} 근처에 위치한 곳이 많아 대중교통 이용이 편리합니다. 주차 시설을 갖춘 곳도 있으니 자차 이용 시 미리 확인하세요.

분위기는 전체적으로 편안합니다. 격식 차릴 필요 없이 일상 복장으로 방문해도 됩니다. 매니저들도 친근하게 대화를 이끌어주어 처음 방문해도 어색하지 않습니다. 영업시간은 대부분 오후 6시부터 새벽 2시까지입니다.

## ${regionInfo.name} 셔츠룸 이용 꿀팁

셔츠룸을 제대로 즐기려면 몇 가지를 기억하세요. 첫째, 예약 후 방문하시면 대기 없이 바로 입장할 수 있습니다. 둘째, 예산을 미리 말씀해주시면 그에 맞는 세트를 추천받을 수 있습니다. 셋째, 첫 방문이라면 매니저에게 알려주시면 더 세심한 안내를 받을 수 있습니다.

## 자주 묻는 질문 (FAQ)

**Q. 셔츠룸은 어떤 분들이 방문하나요?**
A. 주로 회식 2차, 친구 모임, 생일파티 등으로 방문합니다. 부담 없이 즐길 수 있어 다양한 목적으로 이용됩니다.

**Q. 혼자 가도 되나요?**
A. 네, 1인 방문도 가능합니다. 다만 미리 예약하고 가시는 것을 권장합니다. 1인 전용 세트가 있는 곳도 있습니다.

**Q. 드레스코드가 있나요?**
A. 특별한 드레스코드는 없습니다. 캐주얼한 복장으로 편하게 방문하시면 됩니다.

**Q. 노래를 못 부르면 어떡하나요?**
A. 노래를 부르지 않아도 됩니다. 대화만으로도 충분히 즐길 수 있고, 매니저가 분위기를 이끌어줍니다.

**Q. 카드 결제 가능한가요?**
A. 네, 대부분의 업장에서 카드 결제가 가능합니다. 법인카드도 됩니다.

## 관련 검색 키워드

${keyword}, ${regionInfo.name} 셔츠룸 가격, ${regionInfo.name} 셔츠룸 추천, 셔츠룸 하이퍼블릭 차이, ${regionInfo.area} 셔츠룸, ${regionInfo.name} 회식 2차, 셔츠룸 시스템, ${regionInfo.name} 2차 추천`;
}

function generateRoomsalonContent(
  regionInfo: { name: string; area: string; station: string; fullName: string },
  keyword: string,
  index: number
): string {
  return `${regionInfo.name} 룸살롱에 대해 알아보고 계신가요? 룸살롱은 격식 있는 접대나 중요한 비즈니스 자리에서 많이 이용되는 프리미엄 유흥 업종입니다. ${regionInfo.area} 일대에는 다양한 수준의 룸살롱이 운영되고 있으며, 오늘은 그 모든 것을 상세하게 알려드리겠습니다.

## 룸살롱이란 무엇인가?

룸살롱은 프라이빗 룸에서 전담 매니저의 서비스를 받으며 음주와 대화를 즐기는 고급 유흥 업종입니다. 가라오케나 퍼블릭과 달리 노래보다는 대화와 접대에 초점을 맞추고 있습니다. 주로 비즈니스 접대, VIP 모임, 중요한 자리 등에 이용됩니다.

룸살롱은 오랜 역사를 가진 업종으로, 고급 서비스와 프라이버시가 보장되는 공간입니다. 매니저들의 교육 수준이 높고, 대화 스킬과 매너가 우수합니다. 따라서 중요한 비즈니스 자리에서도 신뢰할 수 있는 서비스를 받을 수 있습니다.

## ${regionInfo.name} 룸살롱 시스템 상세 안내

룸살롱은 예약제로 운영됩니다. 방문 전 전화로 인원, 예산, 원하는 서비스 수준을 미리 상담받습니다. 도착하면 VIP 룸으로 안내받고, 선택한 매니저가 배정됩니다. 고급 주류와 안주가 제공되며, 매니저가 세심한 서비스를 제공합니다.

시스템은 크게 TC(Table Charge) 방식과 정액제 방식이 있습니다. TC 방식은 시간당 요금이 부과되고, 정액제는 일정 금액으로 정해진 서비스를 받습니다. 예약 시 원하는 방식을 선택하시면 됩니다.

## ${regionInfo.name} 룸살롱 가격 안내

${regionInfo.name} 룸살롱 가격은 1인당 30만원에서 50만원 이상입니다. 고급 양주 선택, 프리미엄 매니저 지명, 시간 연장 등에 따라 추가 비용이 발생합니다. 비즈니스 접대용으로 법인카드 결제도 가능한 곳이 많습니다.

가격 구성을 살펴보면, 기본 세트에 룸 이용료, 기본 주류, 매니저 서비스가 포함됩니다. 프리미엄 양주는 병당 50만원에서 100만원 이상이고, 연장은 시간당 1인 10만원 내외입니다. 예산에 맞게 패키지를 선택할 수 있습니다.

## 룸살롱 이용 에티켓

룸살롱은 다른 업종보다 격식을 중시합니다. 드레스코드로 정장이나 비즈니스 캐주얼을 권장하고, 매너 있는 행동이 기대됩니다. 처음 방문이라면 예약 시 미리 말씀해주시면 안내를 받을 수 있습니다.

매니저에 대한 존중도 중요합니다. 과도한 신체 접촉이나 무례한 언행은 자제해주세요. 서로 존중하는 분위기에서 더 좋은 시간을 보낼 수 있습니다.

## ${regionInfo.name} 룸살롱 특징

${regionInfo.area}의 룸살롱은 시설과 서비스 퀄리티가 높은 편입니다. ${regionInfo.station} 인근에 위치해 접근성이 좋고, 주차 시설도 잘 갖추어져 있습니다. 프라이버시가 보장되어 중요한 자리에 적합합니다.

## 자주 묻는 질문 (FAQ)

**Q. 룸살롱과 가라오케의 차이점은?**
A. 룸살롱은 대화와 접대 중심, 가라오케는 노래와 유흥 중심입니다. 가격대와 분위기, 서비스 스타일도 다릅니다. 목적에 맞게 선택하시면 됩니다.

**Q. 개인 모임도 가능한가요?**
A. 네, 비즈니스 접대뿐 아니라 개인 모임, 기념일 등도 가능합니다. 예약 시 목적을 말씀해주시면 그에 맞는 안내를 받을 수 있습니다.

**Q. 예약 없이 방문 가능한가요?**
A. 대부분 예약제로 운영되므로 미리 연락하시는 것을 권장합니다. 당일 예약도 가능하지만 원하는 시간이나 매니저를 선택하기 어려울 수 있습니다.

**Q. 드레스코드가 엄격한가요?**
A. 정장이나 비즈니스 캐주얼을 권장합니다. 반바지, 슬리퍼 등은 피해주시는 것이 좋습니다.

**Q. 법인카드 결제 가능한가요?**
A. 네, 대부분의 업장에서 법인카드 결제가 가능합니다. 영수증 처리가 필요하시면 미리 말씀해주세요.

## 관련 검색 키워드

${keyword}, ${regionInfo.name} 룸살롱 가격, ${regionInfo.name} 룸살롱 추천, ${regionInfo.area} 룸살롱, ${regionInfo.name} 접대 장소, 룸살롱 시스템, ${regionInfo.name} 비즈니스 접대, 룸살롱 에티켓`;
}

function generateKimonoroomContent(
  regionInfo: { name: string; area: string; station: string; fullName: string },
  keyword: string,
  index: number
): string {
  return `${regionInfo.name}에서 특별한 경험을 찾고 계신가요? 기모노룸은 일본식 서비스를 경험할 수 있는 독특한 프리미엄 업종입니다. 전통 기모노를 입은 매니저가 일본식 정서로 서비스하는 고급 공간으로, 오늘은 ${regionInfo.name} 기모노룸의 모든 것을 상세하게 알려드리겠습니다.

## 기모노룸이란 무엇인가?

기모노룸은 일본식 룸살롱 컨셉의 업종입니다. 매니저들이 전통 기모노나 유카타를 입고 서비스하며, 인테리어도 일본식으로 꾸며져 있습니다. 차 서비스, 사케 서빙 등 일본 문화를 접목한 특별한 경험을 제공합니다.

기모노룸은 단순한 유흥 공간을 넘어 문화 체험의 요소가 있습니다. 일본식 예절과 분위기를 즐기면서 특별한 시간을 보낼 수 있습니다. 해외 바이어 접대나 특별한 기념일에 인기가 높습니다.

## ${regionInfo.name} 기모노룸 시스템 상세 안내

기모노룸은 완전 예약제로 운영됩니다. 예약 시 원하는 서비스 수준과 매니저 타입을 상담받습니다. 프라이빗 다다미 룸이나 모던한 일본식 룸에서 서비스를 받게 됩니다. 기본 코스에 사케나 일본 위스키, 일본식 안주가 포함됩니다.

서비스 시작 전 따뜻한 물수건과 차 서비스가 제공됩니다. 매니저가 일본식 예절로 인사하고, 사케나 음료를 정성스럽게 따라줍니다. 대화도 정갈하고 품위 있게 진행됩니다.

## ${regionInfo.name} 기모노룸 가격 정보

${regionInfo.name} 기모노룸 가격은 1인당 35만원에서 60만원 선입니다. 프리미엄 사케 선택, 풀코스 서비스, VIP 룸 이용 등에 따라 추가 비용이 발생합니다. 특별한 날이나 중요한 접대 자리에 주로 이용됩니다.

가격 구성을 살펴보면, 기본 코스에 룸 이용료, 사케 또는 일본 위스키, 일본식 안주, 매니저 서비스가 포함됩니다. 프리미엄 사케는 병당 30만원에서 100만원 이상이고, 연장은 시간당 1인 10만원 내외입니다.

## 기모노룸만의 특별한 매력

일반 룸살롱과 다른 점은 분위기와 서비스 스타일입니다. 조용하고 정갈한 일본식 분위기에서 세심한 서비스를 받을 수 있습니다. 매니저들은 일본어 인사와 기본적인 일본 문화 에티켓을 갖추고 있어 특별한 경험을 선사합니다.

인테리어도 다릅니다. 다다미, 장지문, 일본식 조명 등으로 꾸며져 있어 마치 일본에 온 듯한 느낌을 받을 수 있습니다. 음식도 일본식 안주가 제공되어 분위기와 잘 어울립니다.

## ${regionInfo.name} 기모노룸 이용 꿀팁

기모노룸을 제대로 즐기려면 몇 가지를 기억하세요. 첫째, 반드시 예약이 필요합니다. 인기 있는 곳은 예약이 빨리 차니 미리 연락하세요. 둘째, 일본 문화에 대한 기본 이해가 있으면 더 즐겁습니다. 셋째, 정장이나 비즈니스 캐주얼로 방문하시면 분위기에 어울립니다.

## 자주 묻는 질문 (FAQ)

**Q. 기모노룸은 어떤 분들이 이용하나요?**
A. 특별한 날을 기념하거나, 일본 문화에 관심 있는 분들이 많이 찾습니다. 해외 바이어 접대, 기념일, VIP 모임 등에 인기입니다.

**Q. 일본어를 못해도 되나요?**
A. 네, 한국어로 소통 가능합니다. 일본식 서비스 컨셉일 뿐 언어 장벽은 없습니다.

**Q. 예약 방법은?**
A. 전화 예약이 기본이며, 방문 하루 전까지 예약하시는 것을 권장합니다. 특별한 요청사항이 있다면 미리 말씀해주세요.

**Q. 드레스코드가 있나요?**
A. 정장이나 비즈니스 캐주얼을 권장합니다. 분위기에 맞는 복장으로 방문하시면 더 좋은 경험을 할 수 있습니다.

**Q. 법인카드 결제 가능한가요?**
A. 네, 대부분의 업장에서 법인카드 결제가 가능합니다.

## 관련 검색 키워드

${keyword}, ${regionInfo.name} 기모노룸 가격, ${regionInfo.name} 기모노룸 추천, 기모노룸 시스템, ${regionInfo.area} 기모노룸, 일본식 룸살롱, ${regionInfo.name} 특별한 접대, 기모노룸 후기`;
}

function generateHostbarContent(
  regionInfo: { name: string; area: string; station: string; fullName: string },
  keyword: string,
  index: number
): string {
  return `${regionInfo.name} 호빠(호스트바)에 대해 궁금하신가요? 호빠는 여성 고객을 위한 유흥 업종으로, 남성 호스트가 서비스를 제공합니다. 최근 여성들의 밤문화 공간으로 자리 잡으며 인기를 얻고 있습니다. 오늘은 ${regionInfo.name} 호빠의 모든 것을 상세하게 알려드리겠습니다.

## 호빠란 무엇인가?

호빠는 '호스트바'의 줄임말로, 여성 고객을 대상으로 남성 호스트가 서비스하는 업종입니다. 노래, 대화, 게임 등을 함께 즐기며 즐거운 시간을 보낼 수 있습니다. 여성들만의 모임이나 특별한 날에 많이 이용됩니다.

호빠는 여성들이 주체적으로 즐길 수 있는 공간입니다. 호스트들이 분위기를 이끌어주고, 대화와 게임을 통해 즐거운 시간을 보낼 수 있습니다. 최근에는 깔끔하고 세련된 인테리어의 업장이 많아져 방문하기 편해졌습니다.

## ${regionInfo.name} 호빠 시스템 상세 안내

호빠는 예약 후 방문하는 것이 일반적입니다. 도착하면 프라이빗 룸으로 안내받고, 호스트가 배정됩니다. 호스트 선택권이 있어 원하는 스타일의 호스트를 지명할 수 있습니다. 기본 세트에 음료와 안주가 포함되어 있습니다.

시스템은 크게 지명제와 랜덤 배정이 있습니다. 지명제는 원하는 호스트를 미리 선택하는 방식이고, 랜덤은 업장에서 배정해주는 방식입니다. 처음이라면 랜덤으로 시작해보시는 것도 좋습니다.

## ${regionInfo.name} 호빠 가격 안내

${regionInfo.name} 호빠 가격은 1인당 15만원에서 25만원 선입니다. 호스트 지명비, 프리미엄 주류, 시간 연장 등에 따라 추가 비용이 발생합니다. 단체 예약 시 할인되는 경우도 있으니 문의해보세요.

가격 구성을 살펴보면, 기본 세트에 룸 이용료, 기본 음료, 안주, 호스트 서비스가 포함됩니다. 지명비는 1-3만원 정도이고, 연장은 시간당 1인 5만원 내외입니다. 프리미엄 주류는 별도 비용이 있습니다.

## 안전하게 즐기는 방법

호빠는 여성 고객을 위한 공간인 만큼 안전이 중요합니다. 검증된 업장을 선택하고, 지인과 함께 방문하는 것을 권장합니다. 대부분의 업장에서 택시 호출이나 안전귀가 서비스를 제공합니다.

음주는 본인 페이스에 맞게 하시고, 불편한 상황이 생기면 직원에게 말씀해주세요. 대부분의 업장에서 고객 안전을 최우선으로 합니다. CCTV가 설치된 곳이 많아 안전합니다.

## ${regionInfo.name} 호빠 특징

${regionInfo.area}의 호빠는 시설이 깔끔하고 접근성이 좋습니다. ${regionInfo.station} 인근에 위치한 곳이 많아 대중교통 이용이 편리합니다. 최근에는 인테리어가 세련된 곳이 많아 방문하기 편해졌습니다.

## ${regionInfo.name} 호빠 이용 꿀팁

호빠를 제대로 즐기려면 몇 가지를 기억하세요. 첫째, 예약 후 방문하시면 대기 없이 입장할 수 있습니다. 둘째, 처음이라면 지인과 함께 가시는 것을 추천드립니다. 셋째, 예산을 미리 정해두시면 부담 없이 즐길 수 있습니다.

## 자주 묻는 질문 (FAQ)

**Q. 혼자 가도 되나요?**
A. 네, 1인 방문도 가능합니다. 하지만 처음이라면 지인과 함께 가시는 것을 추천드립니다. 편하게 즐기실 수 있습니다.

**Q. 호스트는 어떻게 선택하나요?**
A. 방문 시 프로필을 보고 선택하거나, 예약 시 원하는 타입을 말씀해주시면 추천받을 수 있습니다. 랜덤 배정도 가능합니다.

**Q. 노래를 꼭 불러야 하나요?**
A. 아니요, 노래 없이 대화만 즐겨도 됩니다. 호스트가 분위기에 맞게 진행해줍니다.

**Q. 안전한가요?**
A. 네, 검증된 업장은 고객 안전을 최우선으로 합니다. CCTV 설치, 안전귀가 서비스 등을 제공합니다.

**Q. 카드 결제 가능한가요?**
A. 네, 대부분의 업장에서 카드 결제가 가능합니다.

## 관련 검색 키워드

${keyword}, ${regionInfo.name} 호빠 추천, ${regionInfo.name} 호빠 가격, 호빠 시스템, ${regionInfo.area} 호빠, 쩜오 노는법, ${regionInfo.name} 여성 유흥, 호빠 후기`;
}

// 콘텐츠 검증 (SEO Auditor 역할)
function validateContent(result: ContentResult): { valid: boolean; issues: string[] } {
  const issues: string[] = [];

  // 제목 길이 검증 (25-80자)
  if (result.title.length < 25) {
    issues.push(`제목이 너무 짧음: ${result.title.length}자 (최소 25자)`);
  }
  if (result.title.length > 80) {
    issues.push(`제목이 너무 김: ${result.title.length}자 (최대 80자)`);
  }

  // 콘텐츠 길이 검증 (1000자 이상)
  if (result.content.length < 1000) {
    issues.push(`콘텐츠가 너무 짧음: ${result.content.length}자 (최소 1000자)`);
  }

  // # 패턴 없음 확인
  if (/#\d+/.test(result.title)) {
    issues.push('제목에 번호 패턴(#숫자) 포함됨');
  }

  // excerpt 검증
  if (result.excerpt.length < 50) {
    issues.push(`excerpt가 너무 짧음: ${result.excerpt.length}자`);
  }

  return {
    valid: issues.length === 0,
    issues
  };
}

async function fetchAllPosts(category?: string): Promise<BlogPost[]> {
  const allPosts: BlogPost[] = [];
  const pageSize = 1000;
  let page = 0;
  let hasMore = true;

  while (hasMore) {
    let query = supabase
      .from('bamastro_blog_posts')
      .select('id, title, slug, content, excerpt, category, region')
      .range(page * pageSize, (page + 1) * pageSize - 1)
      .order('created_at', { ascending: true });

    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) {
      console.error('조회 오류:', error.message);
      break;
    }

    if (data && data.length > 0) {
      allPosts.push(...data);
      page++;
      hasMore = data.length === pageSize;
    } else {
      hasMore = false;
    }
  }

  return allPosts;
}

async function main() {
  const applyChanges = process.env.APPLY === 'true';
  const targetCategory = process.env.CATEGORY;
  const batchSize = parseInt(process.env.BATCH_SIZE || '50', 10);

  console.log('=== 블로그 콘텐츠 향상 스크립트 ===\n');
  console.log(applyChanges ? '🔴 실제 적용 모드' : '🟡 미리보기 모드');
  if (targetCategory) {
    console.log(`📁 대상 카테고리: ${targetCategory}`);
  }
  console.log(`📦 배치 크기: ${batchSize}`);
  console.log('');

  // 1. 포스트 조회
  console.log('포스트 조회 중...');
  const allPosts = await fetchAllPosts(targetCategory);
  console.log(`총 ${allPosts.length}개 포스트 조회 완료\n`);

  // 2. 업데이트 필요한 포스트 필터링
  const postsToUpdate = allPosts.filter(needsUpdate);
  console.log(`📊 분석 결과:`);
  console.log(`  ✅ 이미 양호: ${allPosts.length - postsToUpdate.length}개`);
  console.log(`  🔄 업데이트 필요: ${postsToUpdate.length}개\n`);

  if (postsToUpdate.length === 0) {
    console.log('업데이트할 포스트가 없습니다.');
    return;
  }

  // 3. 카테고리별 카운터 초기화
  const categoryCounters: Record<string, number> = {};

  // 4. 미리보기 출력
  console.log('=== 변경 미리보기 (처음 5개) ===\n');

  const previewPosts = postsToUpdate.slice(0, 5);
  for (const post of previewPosts) {
    const category = post.category || '가라오케';
    categoryCounters[category] = (categoryCounters[category] || 0) + 1;

    const newContent = generateContent(category, post.region, categoryCounters[category]);
    const validation = validateContent(newContent);

    console.log(`ID: ${post.id}`);
    console.log(`기존 제목: ${post.title}`);
    console.log(`새 제목: ${newContent.title}`);
    console.log(`기존 콘텐츠 길이: ${post.content.length}자`);
    console.log(`새 콘텐츠 길이: ${newContent.content.length}자`);
    console.log(`검증: ${validation.valid ? '✅ 통과' : '❌ ' + validation.issues.join(', ')}`);
    console.log('---');
  }

  if (!applyChanges) {
    console.log('\n⚠️  미리보기 모드입니다.');
    console.log('실제 적용하려면: APPLY=true tsx scripts/enhance-blog-content.ts');
    return;
  }

  // 5. 실제 적용
  console.log('\n=== 데이터베이스 업데이트 시작 ===\n');

  // 카운터 리셋
  Object.keys(categoryCounters).forEach(k => categoryCounters[k] = 0);

  let successCount = 0;
  let errorCount = 0;
  let skippedCount = 0;

  for (let i = 0; i < postsToUpdate.length; i += batchSize) {
    const batch = postsToUpdate.slice(i, i + batchSize);

    const updates = batch.map(post => {
      const category = post.category || '가라오케';
      categoryCounters[category] = (categoryCounters[category] || 0) + 1;

      const newContent = generateContent(category, post.region, categoryCounters[category]);
      const validation = validateContent(newContent);

      if (!validation.valid) {
        return { post, newContent: null, validation };
      }

      return { post, newContent, validation };
    });

    const results = await Promise.all(
      updates.map(async ({ post, newContent, validation }) => {
        if (!newContent) {
          return { post, success: false, skipped: true, validation };
        }

        const { error } = await supabase
          .from('bamastro_blog_posts')
          .update({
            title: newContent.title,
            content: newContent.content,
            excerpt: newContent.excerpt,
            updated_at: new Date().toISOString()
          })
          .eq('id', post.id);

        return { post, success: !error, skipped: false, error, validation };
      })
    );

    results.forEach(({ post, success, skipped, error, validation }) => {
      if (skipped) {
        console.log(`⏭️  ${post.id}: 검증 실패 - ${validation?.issues.join(', ')}`);
        skippedCount++;
      } else if (success) {
        successCount++;
      } else {
        console.error(`❌ ${post.id}: ${error?.message}`);
        errorCount++;
      }
    });

    const progress = Math.min(i + batchSize, postsToUpdate.length);
    const percent = Math.round(progress / postsToUpdate.length * 100);
    console.log(`진행: ${progress}/${postsToUpdate.length} (${percent}%) - 성공: ${successCount}, 실패: ${errorCount}, 스킵: ${skippedCount}`);

    // Rate limiting
    await new Promise(r => setTimeout(r, 300));
  }

  console.log('\n=== 완료 ===');
  console.log(`✅ 성공: ${successCount}개`);
  console.log(`❌ 실패: ${errorCount}개`);
  console.log(`⏭️  스킵: ${skippedCount}개`);

  console.log('\nDONE');
}

main().catch(console.error);
