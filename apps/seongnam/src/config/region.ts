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
    slug: string;       // seongnam-pangyo-guide
    name: string;       // 판교 가이드
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

// 성남 설정
export const region: RegionConfig = {
    id: 'seongnam',
    name: '성남',
    nameEn: 'Seongnam',
    domain: 'new-karaoke.net',

    phone: '010-2626-4833',
    phoneFormatted: '010-2626-4833',
    kakaoId: '@pbsewoo',
    kakaoLink: 'http://qr.kakao.com/talk/jMlvTnRecn1PgP4S9gqME2itU7g-',
    telegramId: '@pbsewoo',
    telegramLink: 'https://t.me/pbsewoo',
    email: 'ymimi9512@gmail.com',

    address: {
        street: '판교역·정자역·야탑역 일대',
        city: '성남시',
        cityEn: 'Seongnam-si',
        region: '경기도',
        regionEn: 'Gyeonggi-do',
    },
    geo: {
        lat: 37.4200,
        lng: 127.1267,
    },

    landmarks: ['판교테크노밸리', '모란시장', '야탑역 먹자골목', '분당 신도시', '성남시청'],
    nearbyStations: ['판교역', '모란역', '야탑역', '정자역', '성남시청역', '복정역'],

    seo: {
        mainKeyword: '성남 가라오케',
        mainKeywords: [
            '성남 가라오케',
            '성남 유흥',
            '성남 하이퍼블릭',
            '성남 셔츠룸',
            '성남 룸살롱',
            '성남 기모노룸',
            '성남 호빠'
        ],
        description: '성남 판교·정자·야탑 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 추천 업소, 예약 팁 총정리. 회식·데이트·비즈니스 접대 전문. 서우실장 24시간 무료 상담.',
        // SEO 최적화 메타 태그 (50-60자 Title, 150-160자 Description)
        homeTitle: '성남 유흥 완벽 가이드 | 가라오케·하이퍼블릭·셔츠룸 | 서우실장',
        homeDescription: '성남 판교·분당선 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 프로 에티켓, IT기업 접대 추천 업소. ★ 서우실장 무료 상담',
        blogListTitle: '성남 유흥 가이드 블로그 | 프로 팁·에티켓·2026 | 서우실장',
        blogListDescription: '성남 유흥 전문가가 알려주는 실전 팁과 에티켓. 15년 경력 서우실장의 인사이더 정보, 가라오케·하이퍼블릭 이용 가이드, 2026 최신 트렌드 총정리.',
        naverVerification: '',
        googleVerification: '',
        longTailKeywords: [
            "성남 판교테크노밸리 가라오케",
            "성남 네이버 카카오 회식",
            "판교역 가라오케 예약",
            "정자역 가라오케 가격",
            "야탑 유흥거리",
            "성남 하이퍼블릭 가격",
            "판교 IT기업 회식장소",
            "분당선 가라오케",
            "신분당선 가라오케",
            "성남 셔츠룸 저렴한곳",
            "성남 고소득 직장인 술집",
            "성남 당일예약 가능 가라오케",
            "판교 강남대비 저렴이",
            "성남 판교 야탑 기모노룸",
            "정자역 근처 유흥",
            "모란역 가라오케",
            "신흥동 유흥거리",
            "태평동 호빠",
            "성남 프리미엄 셔츠룸",
            "성남 여성 호스트바",
            "IT기업 임직원 회식 성남",
            "네이버 본사 근처 유흥",
            "카카오 판교 회식",
            "성남 당일 예약 노래방",
            "성남 2차 하이퍼블릭"
        ],
        locationKeywords: [
            "판교역",
            "정자역",
            "야탑역",
            "판교테크노밸리",
            "분당선",
            "신분당선",
            "8호선",
            "모란역",
            "신흥동",
            "태평동",
            "정자동",
            "야탑동",
            "분당구",
            "수정구",
            "중원구"
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
            slug: 'seongnam-highpublic-guide',
            subtitle: '프라이빗 / 시크릿',
            description: '판교테크노밸리 IT기업 임직원 접대 명소. 정자역·야탑역 일대에서 강남급 서비스를 합리적인 가격에 경험하세요.',
            image: '/images/venues/hyperpublic_main.webp',
            minPrice: 180000,
            keywords: ['성남 하이퍼블릭', '판교 하이퍼블릭'],
        },
        {
            id: 'karaoke',
            name: '가라오케',
            slug: 'seongnam-karaoke-guide',
            subtitle: '프리미엄 가라오케',
            description: '경기 남부 IT밸리 최대 규모의 프리미엄 가라오케. 분당선·신분당선 접근성으로 네이버·카카오 회식과 모임에 최적화되어 있습니다.',
            image: '/images/venues/karaoke_main.webp',
            minPrice: 150000,
            keywords: ['성남 가라오케', '판교 노래방'],
        },
        {
            id: 'shirtsroom',
            name: '셔츠룸',
            slug: 'seongnam-shirtsroom-guide',
            subtitle: '캐주얼 라운지',
            description: '판교·정자 IT직장인들의 가벼운 회식 명소. 강남 대비 30% 저렴한 가격에 편안한 분위기에서 네트워킹을 즐기세요.',
            image: '/images/venues/shirtsroom_main.webp',
            minPrice: 160000,
            keywords: ['성남 셔츠룸', '분당 셔츠룸'],
        },
        {
            id: 'kimonoroom',
            name: '기모노룸',
            slug: 'seongnam-kimono-room-guide',
            subtitle: '이색 체험',
            description: '판교테크노밸리 근무 후 특별한 문화 체험. 일본식 정통 서비스와 이국적 인테리어로 잊지 못할 밤을 선사합니다.',
            image: '/images/venues/kimono_main.webp',
            minPrice: 200000,
            keywords: ['성남 기모노룸', '이색 테마'],
        },
        {
            id: 'roomsalon',
            name: '룸살롱',
            slug: 'seongnam-room-salon-guide',
            subtitle: '하이엔드 비즈니스',
            description: '판교 IT기업 VIP 고객을 위한 격조 높은 비즈니스 공간. 네이버·카카오 임원진 접대에 최적입니다.',
            image: '/images/venues/roomsalon_main.webp',
            minPrice: 250000,
            keywords: ['성남 룸싸롱', '성남 비즈니스'],
        },
        {
            id: 'hostbar',
            name: '호빠',
            slug: 'seongnam-hostbar-guide',
            subtitle: '여성 전용',
            description: '성남 여성 IT전문직을 위한 안전한 프라이빗 공간. 세련된 호스트들의 품격 있는 서비스로 특별한 시간을 보내세요.',
            image: '/images/venues/hostbar_main.webp',
            minPrice: 150000,
            keywords: ['성남 호빠', '성남 호스트바'],
        },
    ],

    areaGuides: [
        { slug: 'seongnam-pangyo-guide', name: '판교 가이드' },
        { slug: 'seongnam-jeongja-guide', name: '정자역 가이드' },
        { slug: 'seongnam-yatap-guide', name: '야탑역 가이드' },
    ],

    localContent: {
        areaCharacter: `성남은 판교테크노밸리를 중심으로 한국 IT산업의 심장부로, 네이버·카카오·엔씨소프트 등 국내 대표 IT기업들이 밀집해 있는 첨단 도시입니다. 분당구·수정구·중원구로 구성되며, 분당선·신분당선·8호선이 교차하는 우수한 대중교통 인프라를 자랑합니다. 젊은 고소득 IT직장인들이 주요 고객층을 형성하며, 판교역·정자역·야탑역 일대에 세련된 유흥 시설이 밀집해 있습니다. 강남이나 분당 신도시 대비 20~30% 저렴한 가격대로 동일한 수준의 서비스를 제공하는 것이 최대 강점이며, IT기업 특유의 자유로운 문화와 어우러진 캐주얼한 분위기가 특징입니다. 모란시장과 야탑역 먹자골목은 가성비 좋은 2차 장소로도 인기가 높습니다.`,
        targetCustomers: `성남의 주요 고객층은 네이버·카카오·엔씨소프트·스마일게이트 등 판교테크노밸리 IT기업 임직원이 핵심을 이룹니다. 분당 신도시 거주 30~40대 고소득 직장인과 성남시청 공무원, 분당차병원·분당서울대병원 의료진도 주요 고객층입니다. 스타트업 창업자와 벤처캐피탈 투자자들의 비즈니스 미팅 수요도 꾸준하며, IT업계 특유의 야근 후 가벼운 회식 문화가 활발합니다.`,
        transportFeature: `판교역에서 도보 5분 거리에 주요 유흥가가 위치해 있어 신분당선과 분당선의 환승 편리함을 최대한 활용할 수 있습니다. 경부고속도로 판교IC와 분당-수서간고속도로가 인접해 있어 차량 이용 시 강남에서 20분, 분당에서 10분이면 도착 가능합니다. 야탑역과 모란역 주변에도 대형 주차 시설이 잘 갖춰져 있어 차량 방문객에게도 편리합니다.`,
        nearbyBusiness: [
            '네이버 본사 (IT 임직원 회식 수요)',
            '카카오 판교오피스 (기업 접대)',
            '엔씨소프트 (게임사 직원)',
            '판교테크노밸리 (IT 스타트업 밀집)',
            '분당서울대병원 (의료진 고객)',
            '분당차병원 (전문의 고객)',
            '성남시청 (공무원 고객)'
        ],
        uniqueAdvantages: [
            '강남 대비 25%, 분당 대비 15% 저렴한 합리적 가격대',
            '판교역 도보 5분, 신분당선·분당선 환승역 접근성',
            'IT기업 특화 서비스, 자유로운 분위기',
            '당일 예약 가능률 85% 이상, 유연한 예약 시스템',
            '네이버·카카오 등 IT기업 임직원 단골 업소 다수'
        ],
        recommendedTime: `평일 저녁 7시~11시가 IT기업 야근 후 회식 수요로 가장 활발하며, 수요일과 목요일 밤이 성수기입니다. IT업계 특성상 금요일보다 평일 후반이 더 붐비는 편이며, 주말에는 분당 거주민과 가족 단위 모임이 중심입니다.`,
        pricingNote: `성남 지역은 강남 대비 25%, 분당 신도시 대비 15% 저렴한 가격 경쟁력이 최대 강점입니다. IT기업 임직원들의 합리적인 소비 성향에 맞춘 가성비 좋은 요금제를 제공하며, 법인카드 결제와 영수증 처리가 원활한 업소가 많습니다. 단체 예약 시 추가 할인 혜택과 IT기업 임직원 우대 프로그램도 운영됩니다.`,
        venueDescriptions: {
            highpublic: `판교역·정자역 일대에 위치한 하이퍼블릭은 IT기업 밀집 지역의 프리미엄 유흥 공간으로, 네이버·카카오 임직원들의 비즈니스 접대 장소로 인기가 높습니다. 강남 수준의 세련된 인테리어와 서비스를 합리적인 가격에 제공하며, IT업계 특유의 자유로운 분위기와 프라이빗한 룸 구조가 특징입니다. 신분당선과 분당선 환승역 접근성이 우수하고, 법인카드 결제가 원활해 기업 회식에 최적화되어 있습니다. 당일 예약도 가능한 유연한 운영 방식으로 야근 후 급한 회식에도 대응합니다.`,
            karaoke: `판교테크노밸리에서 도보 10분 거리의 가라오케는 최신 곡 업데이트와 고급 음향 장비를 갖춘 현대적 시설로, IT기업 개발자와 젊은 직장인들에게 특히 인기가 높습니다. 강남이나 분당의 고급 노래방과 동일한 수준의 시설을 20~25% 저렴한 가격에 이용할 수 있어 가성비가 뛰어나며, 팀 빌딩과 프로젝트 성공 기념 파티 장소로 많이 이용됩니다. 프라이빗 룸과 대형 파티룸 등 다양한 규모의 공간을 보유하고 있어 10명 이상 단체 모임에도 적합합니다.`,
            shirtsroom: `정자역과 야탑역 사이에 위치한 셔츠룸은 IT직장인들의 캐주얼한 회식 문화에 최적화된 가성비 좋은 유흥 공간입니다. 스타트업 창업자와 벤처투자자들의 네트워킹 장소로 인기가 높으며, 부담스럽지 않은 분위기에서 편안한 대화와 비즈니스 미팅이 가능합니다. IT업계 특유의 자유로운 드레스코드와 분위기를 존중하며, 강남 대비 30% 이상 저렴한 가격대를 유지합니다. 분당선 접근성이 우수하고 근처 주차 시설이 잘 갖춰져 있어 편리합니다.`,
            roomsalon: `성남 비즈니스 접대의 중심인 룸살롱은 네이버·카카오·엔씨소프트 임원진들의 중요한 거래처 접대 장소로, 고급스러운 인테리어와 프라이빗한 공간 구성이 특징입니다. IT기업 특유의 세련된 이미지에 맞는 현대적 시설과 숙련된 매니저 서비스로 중요한 비즈니스 자리에서 신뢰를 얻을 수 있습니다. 강남 대비 합리적인 가격대를 유지하면서도 서비스 품질은 뒤떨어지지 않으며, 법인카드 결제와 세금계산서 발행이 원활합니다. 사전 예약 시 맞춤형 서비스와 특별 할인 혜택을 받을 수 있습니다.`,
            kimonoroom: `판교테크노밸리 근무자들에게 특별한 문화 체험을 제공하는 기모노룸은, 일상에서 벗어난 이색적인 경험을 원하는 IT직장인들에게 인기가 높습니다. 기모노 의상을 착용한 서비스와 일본식 인테리어로 이국적 분위기를 연출하면서도, 가격은 강남의 유사 업소 대비 25% 저렴해 접근성이 좋습니다. SNS 인증샷 명소로도 알려져 있으며, IT업계 특유의 새로운 경험을 추구하는 문화와 잘 맞아떨어집니다. 단체 이벤트와 팀 빌딩 프로그램도 운영합니다.`,
            hostbar: `성남 지역 여성 IT전문직들을 위한 호스트바는 안전하고 편안한 분위기에서 스트레스를 해소할 수 있는 프리미엄 공간입니다. 네이버·카카오 여성 개발자와 디자이너, 병원 의료진들이 주요 고객층이며, 세련된 호스트들의 매너 있는 서비스와 현대적인 인테리어가 특징입니다. 강남이나 분당의 유명 호스트바보다 20~25% 합리적인 가격대로, IT업계 여성들의 정기적인 스트레스 해소 장소로 자리잡고 있습니다. 철저한 프라이버시 보호와 여성 전용 안전 시스템으로 혼자 방문하는 고객도 안심할 수 있습니다.`
        }
    },
};
