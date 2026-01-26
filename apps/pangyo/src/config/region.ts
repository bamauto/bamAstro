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
        // 롱테일 키워드 (검색 커버리지 확대용)
        longTailKeywords?: string[];
        // 위치 기반 키워드 (지역 SEO 강화용)
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
        // 지역 특성 설명
        areaCharacter: string;
        // 주요 고객층
        targetCustomers: string;
        // 교통 특징
        transportFeature: string;
        // 주변 비즈니스
        nearbyBusiness: string[];
        // 지역만의 장점
        uniqueAdvantages: string[];
        // 추천 이용 시간대
        recommendedTime: string;
        // 가격대 특징
        pricingNote: string;
        // 업종별 특화 설명
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
    slug: string;       // pangyo-station-guide
    name: string;       // 판교역 가이드
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

// 판교 설정
export const region: RegionConfig = {
    id: 'pangyo',
    name: '판교',
    nameEn: 'Pangyo',
    domain: 'new-karaoke.com',

    phone: '010-2626-4833',
    phoneFormatted: '010-2626-4833',
    kakaoId: '@pbsewoo',
    kakaoLink: 'http://qr.kakao.com/talk/jMlvTnRecn1PgP4S9gqME2itU7g-',
    telegramId: '@pbsewoo',
    telegramLink: 'https://t.me/pbsewoo',
    email: 'ymimi9512@gmail.com',

    address: {
        street: '판교역·판교테크노밸리 일대',
        city: '성남시 분당구',
        cityEn: 'Seongnam-si Bundang-gu',
        region: '경기도',
        regionEn: 'Gyeonggi-do',
    },
    geo: {
        lat: 37.3947,
        lng: 127.1112,
    },

    landmarks: ['판교테크노밸리', '네이버 본사', '카카오 본사', '알파돔시티'],
    nearbyStations: ['판교역', '정자역', '수내역', '미금역'],

    seo: {
        mainKeyword: '판교 유흥',
        mainKeywords: [
            '판교 유흥',
            '판교 가라오케',
            '판교 하이퍼블릭',
            '판교 셔츠룸',
            '판교 룸살롱',
            '판교 기모노룸',
            '판교 호빠'
        ],
        description: '판교역·판교테크노밸리 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 추천 업소, 예약 팁 총정리. IT기업 회식·비즈니스 접대 전문. 서우실장 24시간 무료 상담.',
        homeTitle: '판교 유흥 완벽 가이드 | 가라오케·하이퍼블릭·셔츠룸 추천 | 서우실장',
        homeDescription: '판교역·판교테크노밸리 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 프로 에티켓, 추천 업소 총정리. IT기업 회식·비즈니스 전문. ★ 서우실장 무료 상담',
        blogListTitle: '판교 유흥 가이드 블로그 | 프로 팁·에티켓·2026 트렌드 | 서우실장',
        blogListDescription: '판교 유흥 전문가가 알려주는 실전 팁과 에티켓. 15년 경력 서우실장의 인사이더 정보, 가라오케·하이퍼블릭 이용 가이드, 2026 최신 트렌드 총정리.',
        naverVerification: '',
        googleVerification: '',
        longTailKeywords: [
            "판교역 유흥 추천",
            "판교테크노밸리 가라오케 예약",
            "판교역 셔츠룸 저렴한곳",
            "판교 룸살롱 추천",
            "네이버 본사 근처 회식",
            "카카오 본사 근처 유흥",
            "판교 하이퍼블릭 가격",
            "판교 가라오케 가격비교",
            "판교역 기모노룸 가격",
            "판교 호빠 추천",
            "판교 당일예약 가능 가라오케",
            "판교 IT기업 회식",
            "판교역 도보 5분 유흥",
            "정자역 가라오케",
            "판교 스타트업 회식 장소",
            "판교 팀빌딩 장소",
            "판교 펀딩 파티",
            "판교 야근 후 회식",
            "판교 가성비 유흥",
            "판교 프리미엄 셔츠룸",
            "알파돔시티 가라오케",
            "판교 조용한 룸살롱",
            "판교 2차 하이퍼블릭",
            "판교 퇴근 후 술자리",
            "판교 직장인 회식"
        ],
        locationKeywords: [
            "판교역",
            "정자역",
            "수내역",
            "미금역",
            "판교테크노밸리",
            "알파돔시티",
            "판교동",
            "삼평동",
            "백현동",
            "네이버 본사",
            "카카오 본사",
            "엔씨소프트",
            "넥슨코리아",
            "크래프톤",
            "분당구"
        ],
    },

    pricing: {
        minRoomCharge: 200000,
        minTC: 120000,
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
            slug: 'pangyo-highpublic-guide',
            subtitle: '프라이빗 / 시크릿',
            description: 'IT 대기업 임원진의 비즈니스 접대 명소. 판교테크노밸리 중심부에서 강남급 프리미엄 서비스를 경험하세요.',
            image: '/images/venues/hyperpublic_main.webp',
            minPrice: 200000,
            keywords: ['판교 하이퍼블릭', '판교역 하이퍼블릭'],
        },
        {
            id: 'karaoke',
            name: '가라오케',
            slug: 'pangyo-karaoke-guide',
            subtitle: '프리미엄 가라오케',
            description: '네이버·카카오 팀 회식의 성지. 최신 음향과 넓은 파티룸으로 IT기업 대규모 팀빌딩에 최적화되어 있습니다.',
            image: '/images/venues/karaoke_main.webp',
            minPrice: 180000,
            keywords: ['판교 가라오케', '판교역 노래방'],
        },
        {
            id: 'shirtsroom',
            name: '셔츠룸',
            slug: 'pangyo-shirtsroom-guide',
            subtitle: '캐주얼 라운지',
            description: '스타트업 대표와 개발자들의 가벼운 네트워킹 장소. 트렌디한 분위기에서 편안한 비즈니스 대화를 즐기세요.',
            image: '/images/venues/shirtsroom_main.webp',
            minPrice: 180000,
            keywords: ['판교 셔츠룸', '판교역 셔츠룸'],
        },
        {
            id: 'kimonoroom',
            name: '기모노룸',
            slug: 'pangyo-kimono-room-guide',
            subtitle: '이색 체험',
            description: '해외 바이어 접대에 최적화된 일본식 프리미엄 공간. 글로벌 IT기업의 외국인 손님 접대에 인기입니다.',
            image: '/images/venues/kimono_main.webp',
            minPrice: 220000,
            keywords: ['판교 기모노룸', '이색 테마'],
        },
        {
            id: 'roomsalon',
            name: '룸살롱',
            slug: 'pangyo-room-salon-guide',
            subtitle: '하이엔드 비즈니스',
            description: 'IT대기업 CEO와 투자자들의 VIP 접대 공간. 중요한 딜 클로징과 투자 미팅에 격조 높은 환경을 제공합니다.',
            image: '/images/venues/roomsalon_main.webp',
            minPrice: 280000,
            keywords: ['판교 룸살롱', '판교 비즈니스'],
        },
        {
            id: 'hostbar',
            name: '호빠',
            slug: 'pangyo-hostbar-guide',
            subtitle: '여성 전용',
            description: 'IT업계 여성 임원과 개발자들을 위한 안전한 프라이빗 공간. 세련된 호스트들의 품격 있는 서비스를 경험하세요.',
            image: '/images/venues/hostbar_main.webp',
            minPrice: 180000,
            keywords: ['판교 호빠', '판교 호스트바'],
        },
    ],

    areaGuides: [
        { slug: 'pangyo-station-guide', name: '판교역 가이드' },
        { slug: 'pangyo-jeongja-guide', name: '정자역 가이드' },
        { slug: 'pangyo-techvalley-guide', name: '판교테크노밸리 가이드' },
    ],

    localContent: {
        areaCharacter: `판교는 대한민국 IT산업의 심장부로, 네이버·카카오·엔씨소프트·넥슨 등 국내 최대 IT기업들이 밀집한 '한국의 실리콘밸리'입니다. 판교테크노밸리를 중심으로 1,500개 이상의 IT·스타트업 기업이 입주해 있으며, 젊고 트렌디한 2030 IT 직장인들이 주요 고객층을 형성합니다. 강남과 분당 사이에 위치하여 강남의 화려함과 분당의 쾌적함을 동시에 갖추고 있으며, IT기업 특유의 자유로운 팀 문화와 수평적 조직 분위기가 유흥 문화에도 반영되어 있습니다. 펀딩 성공 파티, 팀빌딩 행사, 해외 바이어 접대 등 IT업계 특화 이벤트 수요가 많으며, 저녁 시간대 야근 후 퇴근 직장인들의 가벼운 회식 문화도 활발합니다. 신분당선과 경강선 개통으로 강남에서 15분, 수원에서 30분 접근 가능한 우수한 교통 입지를 자랑합니다.`,
        targetCustomers: `판교의 핵심 고객층은 네이버·카카오·엔씨소프트·넥슨 등 대형 IT기업 임직원과 판교테크노밸리 스타트업 대표 및 개발자들입니다. 높은 연봉과 자유로운 기업 문화를 바탕으로 품질 높은 서비스에 대한 기대가 높으며, SNS 친화적이고 트렌디한 경험을 선호합니다. 해외 투자자 및 바이어 접대 수요도 많아 글로벌 스탠다드의 서비스가 요구되며, 여성 IT직군 종사자 비율이 높아 호빠 등 여성 고객 대상 서비스 수요도 꾸준합니다.`,
        transportFeature: `판교역(신분당선, 경강선)에서 도보 5분 거리에 주요 유흥가가 위치해 있어, 강남역에서 15분, 광교에서 20분이면 도착 가능합니다. 판교테크노밸리 내 무료 셔틀버스 운행과 알파돔시티 대형 지하주차장으로 차량 방문도 편리합니다. 야근이 많은 IT기업 특성상 심야 대리운전 서비스가 잘 발달해 있으며, 정자역과 수내역을 통한 분당선 접근도 용이합니다.`,
        nearbyBusiness: [
            '네이버 본사 (IT 대기업 임직원 핵심 고객)',
            '카카오 본사 (IT 대기업 팀 회식 수요)',
            '엔씨소프트 본사 (게임업계 회식)',
            '넥슨코리아 (게임업계 고객)',
            '크래프톤 (펍지 개발사)',
            '알파돔시티 (복합업무시설)',
            '판교테크노밸리 1,500개 스타트업'
        ],
        uniqueAdvantages: [
            'IT기업 팀 문화에 최적화된 프라이빗 공간',
            '펀딩 파티·팀빌딩 등 스타트업 이벤트 특화',
            '해외 바이어 접대를 위한 글로벌 스탠다드 서비스',
            '신분당선 판교역 도보 5분 접근성',
            '강남 대비 10-15% 저렴한 합리적 가격대',
            '야근 후 당일 예약 가능한 유연한 운영'
        ],
        recommendedTime: `평일 저녁 8시~11시가 IT기업 퇴근 후 회식 수요로 가장 활발하며, 야근 문화 특성상 평일 심야 시간대(11시 이후)에도 수요가 있습니다. 목요일과 금요일이 성수기이며, 분기 말 펀딩 파티나 팀빌딩 시즌에는 주중에도 예약이 집중됩니다. 주말에는 분당 지역 거주 IT직장인들의 여유로운 모임이 많습니다.`,
        pricingNote: `판교 지역은 IT기업 직원들의 높은 구매력을 반영하여 분당과 비슷하거나 약간 높은 가격대를 형성하고 있습니다. 다만 강남 대비 10-15% 합리적인 가격으로, 동일한 품질 대비 가성비가 뛰어납니다. 스타트업 팀 회식을 위한 단체 할인 패키지가 잘 발달해 있으며, 법인카드 결제와 간편결제 시스템이 완비되어 IT기업 회식 정산에 편리합니다.`,
        venueDescriptions: {
            highpublic: `판교테크노밸리 중심부에 위치한 하이퍼블릭은 네이버·카카오 등 IT대기업 임원진의 비즈니스 접대 장소로 최고의 인기를 누리고 있습니다. 모던하고 세련된 인테리어와 최신 음향 시설을 갖추고 있으며, IT기업 특유의 트렌디한 분위기를 반영한 프리미엄 서비스를 제공합니다. 프라이빗한 룸 구조로 중요한 투자 미팅이나 파트너십 협상에도 적합하며, 해외 바이어 접대를 위한 영어 가능 스태프도 상주합니다. 판교역 도보 5분 거리로 야근 후 당일 예약도 가능한 유연한 운영 방식이 장점입니다.`,
            karaoke: `판교역 인근 가라오케는 네이버·카카오 팀 회식의 '성지'로 불리며, IT기업 대규모 팀빌딩에 최적화된 넓은 파티룸을 보유하고 있습니다. 최신 음향 장비와 수만 곡의 노래 라이브러리, 인스타그래머블한 조명 시스템으로 젊은 IT 직장인들의 사진 욕구를 충족시킵니다. 분기별 펀딩 성공 파티나 신규 프로젝트 런칭 파티 등 스타트업 특화 이벤트 패키지를 운영하며, 법인카드 결제와 전자영수증 발행이 원활합니다. 야근이 많은 IT기업 특성을 반영해 평일 심야 시간대에도 예약이 가능합니다.`,
            shirtsroom: `판교 셔츠룸은 스타트업 대표와 개발자들이 가볍게 네트워킹하는 '제2의 회의실'로 활용되고 있습니다. 캐주얼하고 편안한 분위기에서 비즈니스 아이디어를 교환하거나 투자 논의를 이어가기에 적합하며, IT업계의 수평적 문화를 반영한 부담 없는 서비스가 특징입니다. 강남의 고급 셔츠룸보다 15% 이상 저렴하면서도 트렌디한 인테리어와 서비스 품질을 자랑합니다. 스타트업 팀 회식 패키지와 법인카드 결제 시스템이 잘 갖춰져 있어 IT기업 소규모 팀 모임에 인기가 높습니다.`,
            roomsalon: `판교 룸살롱은 IT대기업 CEO, VC 투자자, 대형 거래 파트너 접대를 위한 최상위 비즈니스 공간입니다. 억 단위 투자 유치나 M&A 협상 등 중요한 딜 클로징 자리에 격조 높은 환경을 제공하며, 철저한 프라이버시 보호로 민감한 비즈니스 대화에 적합합니다. 숙련된 매니저진과 와인 소믈리에 서비스, 해외 바이어를 위한 영어 가능 스태프가 상주합니다. 강남 최상급 룸살롱에 준하는 서비스를 10-15% 합리적인 가격에 제공하여, IT업계 VIP들의 단골 접대 장소로 자리잡고 있습니다.`,
            kimonoroom: `판교 기모노룸은 해외 바이어와 외국인 투자자 접대에 특화된 이색 프리미엄 공간입니다. 일본식 정통 서비스와 고급 인테리어로 글로벌 IT기업의 외국인 손님들에게 한국적이면서도 이국적인 경험을 선사합니다. 영어와 일본어 가능 스태프가 상주하여 언어 장벽 없이 편안한 접대가 가능하며, 기모노 의상을 착용한 서비스로 SNS 인증샷 명소로도 유명합니다. 글로벌 게임사 미팅이나 해외 투자사 접대 등 IT업계 특화 수요에 맞춘 맞춤형 패키지를 운영합니다.`,
            hostbar: `판교 호빠는 IT업계 여성 임원, 개발자, 디자이너들을 위한 안전하고 세련된 프라이빗 공간입니다. 여성 비율이 높은 IT기업 특성을 반영하여, 카카오·네이버 여성 직원들의 단골 장소로 알려져 있습니다. 젊고 매너 있는 호스트들이 IT업계 트렌드와 테크 이야기를 공유하며 편안한 대화를 이끌어가며, 철저한 프라이버시 보호와 여성 전용 안전 시스템을 갖추고 있습니다. 여성 스타트업 대표들의 네트워킹 모임이나 IT업계 여성 커뮤니티 행사 장소로도 활용됩니다.`
        }
    },
};
