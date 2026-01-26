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
        homeTitle?: string;
        homeDescription?: string;
        blogListTitle?: string;
        blogListDescription?: string;
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

// 안산 설정
export const region: RegionConfig = {
    id: 'ansan',
    name: '안산',
    nameEn: 'Ansan',
    domain: 'hot-karaoke.net',

    phone: '010-2626-4833',
    phoneFormatted: '010-2626-4833',
    kakaoId: '@pbsewoo',
    kakaoLink: 'http://qr.kakao.com/talk/jMlvTnRecn1PgP4S9gqME2itU7g-',
    telegramId: '@pbsewoo',
    telegramLink: 'https://t.me/pbsewoo',
    email: 'ymimi9512@gmail.com',

    address: {
        street: '안산역·중앙역 일대',
        city: '안산시',
        cityEn: 'Ansan-si',
        region: '경기도',
        regionEn: 'Gyeonggi-do',
    },
    geo: {
        lat: 37.3186,
        lng: 126.8308,
    },

    landmarks: ['안산역 먹자골목', '중앙역 상권', '고잔동 유흥가', '시화호'],
    nearbyStations: ['안산역', '중앙역', '고잔역', '한대앞역', '상록수역'],

    seo: {
        mainKeyword: '안산 유흥',
        mainKeywords: [
            '안산 유흥',
            '안산 가라오케',
            '안산 하이퍼블릭',
            '안산 셔츠룸',
            '안산 룸살롱',
            '안산 기모노룸',
            '안산 호빠'
        ],
        description: '안산역·중앙역 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 추천 업소, 예약 팁 총정리. 회식·데이트·비즈니스 접대 전문. 서우실장 24시간 무료 상담.',
        homeTitle: '안산 유흥 완벽 가이드 | 가라오케·하이퍼블릭·셔츠룸 추천 | 서우실장',
        homeDescription: '안산역·중앙역 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 프로 에티켓, 추천 업소 총정리. 회식·데이트·비즈니스 전문. ★ 서우실장 무료 상담',
        blogListTitle: '안산 유흥 가이드 블로그 | 프로 팁·에티켓·2026 트렌드 | 서우실장',
        blogListDescription: '안산 유흥 전문가가 알려주는 실전 팁과 에티켓. 15년 경력 서우실장의 인사이더 정보, 가라오케·하이퍼블릭 이용 가이드, 2026 최신 트렌드 총정리.',
        naverVerification: '',
        googleVerification: '',
        longTailKeywords: [
            // 기본 키워드
            '안산역 가라오케 예약',
            '중앙역 하이퍼블릭 가격',
            '안산 셔츠룸 저렴한곳',
            '고잔동 룸살롱 추천',
            '안산 당일예약 가라오케',
            '안산역 2차 추천',
            '중앙역 회식장소',
            '안산 직장인 회식',
            '안산 가성비 유흥',
            '안산 프리미엄 가라오케',
            '안산 조용한 룸살롱',
            '상록수역 가라오케',
            // 공단 관련 (산업 특화)
            '반월공단 회식 가라오케',
            '시화공단 접대 룸살롱',
            '반월공단 직장인 유흥',
            '시화공단 회식장소',
            '안산 공단 접대',
            '반월시화공단 가라오케',
            '안산 제조업 회식',
            // 다문화·외국인 관련
            '안산 외국인 가라오케',
            '안산 다문화 유흥',
            '원곡동 가라오케',
            '안산 다문화특구 유흥',
            // 대학 관련
            '한양대 에리카 근처 노래방',
            '한양대 에리카 회식',
            '안산 대학생 가라오케',
            // 가격·가성비
            '안산 경기서부 최저가',
            '안산 수원 대비 저렴',
            '안산 가성비 좋은 유흥',
            // 지역 특화
            '안산 고잔동 유흥가',
            '안산 중앙동 가라오케',
            '시화호 근처 유흥'
        ],
        locationKeywords: [
            '안산역',
            '중앙역',
            '고잔역',
            '한대앞역',
            '상록수역',
            '고잔동',
            '중앙동',
            '단원구',
            '상록구',
            '반월공단',
            '시화공단',
            '한양대 에리카',
            '안산시청'
        ],
    },

    pricing: {
        minRoomCharge: 150000,
        minTC: 80000,
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
            slug: 'ansan-highpublic-guide',
            subtitle: '프라이빗 / 시크릿',
            description: '반월·시화공단 기업인들의 비즈니스 접대 명소. 안산역 중심부에서 강남급 서비스를 경기 서부 최저가에 경험하세요.',
            image: '/images/venues/hyperpublic_main.webp',
            minPrice: 150000,
            keywords: ['안산 하이퍼블릭', '안산역 하이퍼블릭'],
        },
        {
            id: 'karaoke',
            name: '가라오케',
            slug: 'ansan-karaoke-guide',
            subtitle: '프리미엄 가라오케',
            description: '안산 대표 프리미엄 가라오케. 중앙역·고잔역에서 최신 음향과 넓은 파티룸으로 공단 직장인 회식에 최적화되어 있습니다.',
            image: '/images/venues/karaoke_main.webp',
            minPrice: 120000,
            keywords: ['안산 가라오케', '안산역 노래방'],
        },
        {
            id: 'shirtsroom',
            name: '셔츠룸',
            slug: 'ansan-shirtsroom-guide',
            subtitle: '캐주얼 라운지',
            description: '안산 직장인들의 가벼운 회식 핫플레이스. 경기 서부 최고의 가성비로 편안한 네트워킹을 즐기세요.',
            image: '/images/venues/shirtsroom_main.webp',
            minPrice: 130000,
            keywords: ['안산 셔츠룸', '중앙역 셔츠룸'],
        },
        {
            id: 'kimonoroom',
            name: '기모노룸',
            slug: 'ansan-kimono-room-guide',
            subtitle: '이색 체험',
            description: '안산에서 즐기는 이색 문화 체험. 일본식 테마와 이국적 인테리어로 특별한 접대나 기념일에 추천합니다.',
            image: '/images/venues/kimono_main.webp',
            minPrice: 170000,
            keywords: ['안산 기모노룸', '이색 테마'],
        },
        {
            id: 'roomsalon',
            name: '룸살롱',
            slug: 'ansan-room-salon-guide',
            subtitle: '하이엔드 비즈니스',
            description: '반월·시화공단 VIP 고객을 위한 비즈니스 공간. 품격 있는 거래처 접대에 최적입니다.',
            image: '/images/venues/roomsalon_main.webp',
            minPrice: 200000,
            keywords: ['안산 룸싸롱', '안산 비즈니스'],
        },
        {
            id: 'hostbar',
            name: '호빠',
            slug: 'ansan-hostbar-guide',
            subtitle: '여성 전용',
            description: '안산 여성 전문직을 위한 안전한 프라이빗 공간. 세련된 호스트들의 품격 있는 서비스로 특별한 시간을 보내세요.',
            image: '/images/venues/hostbar_main.webp',
            minPrice: 130000,
            keywords: ['안산 호빠', '안산 호스트바'],
        },
    ],

    areaGuides: [
        { slug: 'ansan-station-guide', name: '안산역 가이드' },
        { slug: 'ansan-jungang-guide', name: '중앙역 가이드' },
        { slug: 'ansan-gojan-guide', name: '고잔동 가이드' },
    ],

    localContent: {
        areaCharacter: `안산은 경기 서부를 대표하는 산업도시로, 반월공단과 시화공단을 중심으로 제조업 기반의 탄탄한 유흥 수요가 형성되어 있습니다. 안산역과 중앙역 일대 상권이 발달해 있으며, 고잔동을 중심으로 다양한 유흥 시설이 밀집해 있습니다. 다문화 도시의 특성상 외국인 근로자들도 많이 방문하며, 한양대 에리카 캠퍼스 학생들의 젊은 수요층도 활발합니다. 수원이나 분당 대비 20-30% 저렴한 가격대가 최대 강점으로, 공단 직장인들의 회식과 접대 수요를 충족시키고 있습니다. 4호선 안산선을 통해 서울 사당역까지 40분, 수원까지 30분으로 접근성도 우수합니다.`,
        targetCustomers: `안산의 주요 고객층은 반월공단·시화공단 제조업체 임직원, 안산시청 공무원, 한양대 에리카 학생들이 핵심을 이룹니다. 중소기업 사장님과 공장장들의 비즈니스 접대 수요가 높으며, 대학생들의 젊은 수요층도 활발합니다. 시흥·화성·수원 등 인근 도시에서 합리적 가격을 찾아 방문하는 경우도 많습니다.`,
        transportFeature: `4호선 안산선 안산역·중앙역에서 도보 5분 거리에 주요 유흥가가 위치해 있어 대중교통 이용이 편리합니다. 서해안고속도로 안산IC와 인접해 있어 차량으로 서울 강남에서 40분, 인천에서 30분이면 도착 가능합니다. 안산역·중앙역 인근 공영주차장이 잘 갖춰져 있어 자차 이용객에게도 편리합니다.`,
        nearbyBusiness: [
            '반월공단 (제조업체 회식 수요)',
            '시화공단 (산업단지 접대)',
            '한양대학교 에리카 캠퍼스 (대학생 고객층)',
            '안산시청 (공무원 고객)',
            '안산스마트허브 (IT기업 수요)',
            '시화MTV (미디어밸리)',
            '대부도·시화호 (관광객 수요)'
        ],
        uniqueAdvantages: [
            '수원 대비 20%, 분당 대비 30% 저렴한 경기 서부 최저가',
            '안산역·중앙역 도보 5분, 4호선 접근성 우수',
            '당일 예약 가능률 85% 이상, 유연한 운영',
            '공단 직장인 특화 회식 패키지',
            '대학생 그룹 추가 할인 혜택'
        ],
        recommendedTime: `평일 저녁 6시~10시가 공단 회식 수요로 가장 활발하며, 목요일과 금요일이 성수기입니다. 주말에는 대학생과 젊은 직장인 중심으로 오후 8시 이후 활기를 띱니다.`,
        pricingNote: `안산 지역은 경기 서부 최저가 수준으로, 수원 대비 20%, 분당 대비 30% 저렴합니다. 공단 직장인 대상 단체 할인이 활발하며, 대학생 그룹은 추가 할인을 받을 수 있습니다. 2차 이용 시 할인 혜택과 단골 우대 프로그램이 잘 갖춰져 있습니다.`,
        venueDescriptions: {
            highpublic: `안산역 중심부에 위치한 하이퍼블릭은 반월·시화공단 기업인들의 비즈니스 접대 명소입니다. 경기 서부 최저가 수준이면서도 강남급 서비스와 시설을 자랑하며, 프라이빗 룸에서 중요한 거래처 미팅이 가능합니다. 공단 임원진들의 단골 방문이 많아 비즈니스 분위기가 잘 형성되어 있습니다.`,
            karaoke: `중앙역·고잔역 인근의 프리미엄 가라오케는 최신 음향 장비와 넓은 파티룸을 갖추고 있습니다. 공단 직장인 단체 회식에 최적화되어 있으며, 한양대 에리카 학생들에게도 인기가 높습니다. 당일 예약 가능률이 85% 이상으로 즉흥적인 모임에도 부담 없습니다.`,
            shirtsroom: `안산 직장인들의 가벼운 회식 명소인 셔츠룸은 부담 없는 가격에 편안한 분위기를 제공합니다. 중소기업 사장님들과 공장장들의 네트워킹 장소로 인기가 높으며, 젊은 감각의 인테리어와 트렌디한 서비스가 특징입니다.`,
            roomsalon: `안산 비즈니스 접대의 정점인 룸살롱은 반월·시화공단 VIP 고객들의 중요 접대 장소입니다. 고급스러운 인테리어와 숙련된 서비스진이 특징이며, 경기 서부 최고 수준의 품격 있는 접대가 가능합니다.`,
            kimonoroom: `안산의 기모노룸은 다문화 도시의 특성을 살린 이색 체험 공간입니다. 일본식 정통 서비스와 이국적 인테리어로 특별한 기념일이나 외국인 동료 접대에 적합합니다. SNS 인증샷 명소로도 인기가 높습니다.`,
            hostbar: `안산 여성 전문직을 위한 호스트바는 안전하고 프라이빗한 환경에서 스트레스를 해소할 수 있는 공간입니다. 공단 여성 임원, 병원 의료진들이 주요 고객층이며, 세련된 호스트들의 품격 있는 서비스가 특징입니다.`
        }
    },
};
