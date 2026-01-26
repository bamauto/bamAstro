export interface RegionConfig {
    // 기본 정보
    id: string;
    name: string;
    nameEn: string;
    domain: string;

    // 연락처
    phone: string;
    phoneFormatted: string;
    kakaoId: string;
    kakaoLink: string;
    telegramId: string;
    telegramLink: string;
    email: string;

    // 위치 정보
    address: {
        street: string;
        city: string;
        cityEn: string;
        region: string;
        regionEn: string;
    };
    geo: {
        lat: number;
        lng: number;
    };

    // 랜드마크 (SEO 키워드)
    landmarks: string[];
    nearbyStations: string[];

    // SEO
    seo: {
        mainKeyword: string;
        mainKeywords: string[];
        description: string;
        naverVerification?: string;
        googleVerification?: string;
        longTailKeywords?: string[];
        locationKeywords?: string[];
    };

    // 가격 정보
    pricing: {
        minRoomCharge: number;
        minTC: number;
        currency: string;
    };

    // 영업시간
    businessHours: {
        open: string;
        close: string;
    };

    // 업소 타입
    venueTypes: VenueType[];

    // 지역별 가이드 (선택)
    areaGuides?: AreaGuide[];

    // 지역 특화 콘텐츠 (구글 중복 방지용)
    localContent: {
        areaCharacter: string;
        targetCustomers: string;
        transportFeature: string;
        nearbyBusiness: string[];
        uniqueAdvantages: string[];
        recommendedTime: string;
        pricingNote: string;
        venueDescriptions: {
            highpublic: string;
            karaoke: string;
            shirtsroom: string;
            roomsalon: string;
            kimonoroom: string;
            hostbar: string;
        };
    };
}

export interface AreaGuide {
    slug: string;
    name: string;
}

export interface VenueType {
    id: string;
    name: string;
    slug: string;
    subtitle: string;
    description: string;
    image: string;
    minPrice: number;
    keywords: string[];
}

// 수지 설정
export const region: RegionConfig = {
    id: 'suji',
    name: '수지',
    nameEn: 'Suji',
    domain: 'hot-karaoke.com',

    phone: '010-2626-4833',
    phoneFormatted: '010-2626-4833',
    kakaoId: '@pbsewoo',
    kakaoLink: 'http://qr.kakao.com/talk/jMlvTnRecn1PgP4S9gqME2itU7g-',
    telegramId: '@pbsewoo',
    telegramLink: 'https://t.me/pbsewoo',
    email: 'ymimi9512@gmail.com',

    address: {
        street: '수지구 동천동·성복동 일대',
        city: '용인시',
        cityEn: 'Yongin-si',
        region: '경기도',
        regionEn: 'Gyeonggi-do',
    },
    geo: {
        lat: 37.3219,
        lng: 127.0977,
    },

    landmarks: ['수지구청 먹자골목', '동천역 상권', '성복역 유흥가'],
    nearbyStations: ['수지구청역', '동천역', '성복역', '신봉역'],

    seo: {
        mainKeyword: '수지 가라오케',
        mainKeywords: [
            '수지 가라오케',
            '수지 유흥',
            '수지 하이퍼블릭',
            '수지 셔츠룸',
            '수지 룸살롱',
            '수지 기모노룸',
            '수지 호빠'
        ],
        description: '수지구청역·동천역·성복역 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 추천 업소, 예약 팁 총정리. 회식·데이트·비즈니스 접대 전문. 서우실장 24시간 무료 상담.',
        // SEO 최적화 메타 태그 (50-60자 Title, 150-160자 Description)
        homeTitle: '수지 유흥 완벽 가이드 | 가라오케·하이퍼블릭·셔츠룸 추천 | 서우실장',
        homeDescription: '수지구청역·동천역 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 프로 에티켓, 추천 업소 총정리. 회식·데이트·비즈니스 전문. ★ 서우실장 무료 상담',
        blogListTitle: '수지 유흥 가이드 블로그 | 프로 팁·에티켓·2026 트렌드 | 서우실장',
        blogListDescription: '수지 유흥 전문가가 알려주는 실전 팁과 에티켓. 15년 경력 서우실장의 인사이더 정보, 가라오케·하이퍼블릭 이용 가이드, 2026 최신 트렌드 총정리.',
        naverVerification: '',
        googleVerification: '',
        longTailKeywords: [
            "수지구청역 유흥",
            "동천역 가라오케 예약",
            "수지 셔츠룸 저렴한곳",
            "성복역 룸살롱 추천",
            "수지 하이퍼블릭 가격",
            "수지 가라오케 가격비교",
            "수지구청역 기모노룸 가격",
            "수지 호빠 저렴이",
            "수지 당일예약 가능 가라오케",
            "수지 분당 대비 가격",
            "동천역 도보 5분 유흥",
            "수지구 먹자골목 가라오케",
            "성복동 유흥거리",
            "신봉역 근처 회식",
            "수지 대학생 가라오케",
            "단국대학교 근처 유흥",
            "수지 직장인 회식",
            "삼성전자 기흥사업장 회식",
            "수지 당일예약 노래방",
            "수지 프리미엄 셔츠룸",
            "동천역 인생샷 카라오케",
            "수지 조용한 룸살롱",
            "수지 2차 하이퍼블릭",
            "죽전역 유흥",
            "용인 수지 가라오케"
        ],
        locationKeywords: [
            "수지구청역",
            "동천역",
            "성복역",
            "신봉역",
            "죽전역",
            "수지구",
            "동천동",
            "성복동",
            "풍덕천동",
            "죽전동",
            "신봉동",
            "삼성전자 기흥",
            "단국대학교",
            "용인시",
            "분당 인근"
        ],
    },

    pricing: {
        minRoomCharge: 180000,
        minTC: 100000,
        currency: 'KRW',
    },

    businessHours: {
        open: '18:00',
        close: '06:00',
    },

    venueTypes: [
        {
            id: 'highpublic',
            name: '하이퍼블릭',
            slug: 'suji-highpublic-guide',
            subtitle: '프라이빗 / 시크릿',
            description: '삼성전자 기흥캠퍼스·분당 인근 고소득 전문직을 위한 프리미엄 라운지. 수지구청역 도보권에서 프라이빗한 비즈니스 접대가 가능합니다.',
            image: '/images/venues/hyperpublic_main.webp',
            minPrice: 180000,
            keywords: ['수지 하이퍼블릭', '동천역 하이퍼블릭'],
        },
        {
            id: 'karaoke',
            name: '가라오케',
            slug: 'suji-karaoke-guide',
            subtitle: '프리미엄 가라오케',
            description: '용인 수지 직장인들의 회식 핫플레이스. 분당과 인접한 입지에서 최신 음향 시설과 쾌적한 환경을 제공합니다.',
            image: '/images/venues/karaoke_main.webp',
            minPrice: 150000,
            keywords: ['수지 가라오케', '동천역 노래방'],
        },
        {
            id: 'shirtsroom',
            name: '셔츠룸',
            slug: 'suji-shirtsroom-guide',
            subtitle: '캐주얼 라운지',
            description: '수지구 젊은 전문직들에게 인기. 분당 대비 합리적인 가격에 쾌적한 신도시 분위기에서 가벼운 네트워킹을 즐기세요.',
            image: '/images/venues/shirtsroom_main.webp',
            minPrice: 160000,
            keywords: ['수지 셔츠룸', '성복역 셔츠룸'],
        },
        {
            id: 'kimonoroom',
            name: '기모노룸',
            slug: 'suji-kimono-room-guide',
            subtitle: '이색 체험',
            description: '수지에서 만나는 이색 문화 체험 공간. 일본식 테마와 정통 서비스로 특별한 기념일이나 해외 바이어 접대에 추천합니다.',
            image: '/images/venues/kimono_main.webp',
            minPrice: 200000,
            keywords: ['수지 기모노룸', '이색 테마'],
        },
        {
            id: 'roomsalon',
            name: '룸살롱',
            slug: 'suji-room-salon-guide',
            subtitle: '하이엔드 비즈니스',
            description: '삼성전자 기흥·분당 VIP 고객을 위한 품격 있는 비즈니스 공간. 용인 수지 상류층의 중요 접대에 적합합니다.',
            image: '/images/venues/roomsalon_main.webp',
            minPrice: 250000,
            keywords: ['수지 룸싸롱', '수지 비즈니스'],
        },
        {
            id: 'hostbar',
            name: '호빠',
            slug: 'suji-hostbar-guide',
            subtitle: '여성 전용',
            description: '여성 고객만을 위한 프라이빗 엔터테인먼트',
            image: '/images/venues/hostbar_main.webp',
            minPrice: 150000,
            keywords: ['수지 호빠', '수지 호스트바'],
        },
    ],

    areaGuides: [
        { slug: 'suji-gucheong-guide', name: '수지구청역 가이드' },
        { slug: 'suji-dongcheon-guide', name: '동천역 가이드' },
        { slug: 'suji-seongbok-guide', name: '성복역 가이드' },
    ],

    localContent: {
        areaCharacter: '수지는 용인시의 핵심 주거·상업 지구로, 분당과 인접하면서도 독자적인 프리미엄 상권을 형성하고 있습니다. 신분당선 개통으로 강남까지 20분대 접근성을 확보하면서 분당의 세련된 유흥 문화가 자연스럽게 유입되었습니다. 수지구청역, 동천역, 성복역을 중심으로 고급 유흥 시설이 밀집해 있으며, 주변 IT기업과 삼성전자 기흥사업장 직원들의 비즈니스 접대 수요가 높습니다. 분당보다 한 단계 합리적인 가격대를 유지하면서도 서비스 품질은 동급 이상을 제공하는 것이 수지 유흥가의 핵심 경쟁력입니다.',
        targetCustomers: '수지의 주요 고객층은 삼성전자 기흥사업장 임직원, SK하이닉스 직원, 수지구 거주 전문직 종사자들이 핵심입니다. 분당·판교 IT기업 직원들이 분당보다 합리적인 가격을 찾아 방문하는 경우도 많습니다. 단국대학교 학생들과 젊은 직장인층의 캐주얼한 모임 수요도 꾸준하며, 용인시 전역에서 프리미엄 유흥을 즐기려는 고객들이 모여듭니다.',
        transportFeature: '신분당선 수지구청역, 동천역, 성복역이 도보권에 위치해 강남까지 20분, 판교까지 10분 접근이 가능합니다. 용인서울고속도로와 영동고속도로 접근성이 우수해 수원, 분당, 서울 강남에서 차량으로 20~30분이면 도착합니다. 각 역 주변에 대형 공영주차장이 있어 차량 이용객도 편리하게 방문할 수 있습니다.',
        nearbyBusiness: [
            '삼성전자 기흥사업장 (임직원 회식 수요)',
            'SK하이닉스 (반도체 기업 고객)',
            '단국대학교 (대학생 고객층)',
            '분당·판교 IT기업 (직장인 2차 수요)',
            '수지구청 (공무원 고객)',
            '용인시청 (행정 공무원 수요)',
            '강남역 접근권 기업 (신분당선 이용 고객)'
        ],
        uniqueAdvantages: [
            '분당 대비 15~20% 저렴한 합리적 가격대',
            '신분당선 3개역 도보권, 강남 20분 접근성',
            '분당 수준의 세련된 시설과 서비스',
            '당일 예약 가능률 높음, 유연한 운영',
            '주차 편리, 프라이빗한 분위기'
        ],
        recommendedTime: '평일 저녁 7시~10시가 삼성전자, SK하이닉스 등 기업체 회식으로 가장 붐비며, 목요일과 금요일 밤이 최성수기입니다. 주말에는 대학생과 젊은 직장인 중심으로 오후 9시 이후 활기를 띕니다.',
        pricingNote: '수지 지역은 분당 대비 15~20%, 강남 대비 25~30% 저렴한 가격대가 최대 강점입니다. 분당과 동일한 수준의 시설과 서비스를 제공하면서도 합리적인 요금을 유지하고 있어, 가성비를 중시하는 고객들에게 인기가 높습니다.',
        venueDescriptions: {
            highpublic: '수지구청역과 동천역 사이에 위치한 하이퍼블릭은 분당의 세련된 감성을 그대로 옮겨온 프리미엄 유흥 공간입니다. 삼성전자 기흥사업장과 SK하이닉스 임직원들의 비즈니스 접대 장소로 인기가 높으며, 모던한 인테리어와 최신 음향 시스템을 갖추고 있습니다.',
            karaoke: '동천역과 성복역 인근의 가라오케는 최신 음향 장비와 넓은 룸을 갖춘 프리미엄 시설입니다. 단국대학교 학생들과 젊은 직장인들에게 인기가 높으며, 분당 가라오케와 동일한 수준의 서비스를 더 합리적인 가격에 제공합니다.',
            shirtsroom: '수지구 동천동과 성복동에 위치한 셔츠룸은 캐주얼하면서도 세련된 분위기의 비즈니스 클럽입니다. IT기업 중간관리자급과 중소기업 대표들의 가벼운 접대 장소로 인기가 높습니다.',
            roomsalon: '수지 비즈니스 접대의 중심인 룸살롱은 반도체 기업 임원진과 IT기업 고위직들의 중요한 접대 장소입니다. 분당 수준의 고급스러운 인테리어와 숙련된 서비스를 제공합니다.',
            kimonoroom: '수지 지역의 기모노룸은 분당과 차별화된 이색 테마 유흥 공간으로, 일본식 인테리어와 기모노 서비스로 특별한 경험을 제공합니다.',
            hostbar: '수지 지역 여성 고객들을 위한 호스트바는 분당의 세련된 감성을 담은 안전하고 편안한 공간입니다. 삼성전자·SK하이닉스 여성 임직원과 전문직 여성들이 주요 고객층입니다.'
        }
    },
};
