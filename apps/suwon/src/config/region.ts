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
    slug: string;       // suwon-station-guide
    name: string;       // 수원역 가이드
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

// 수원 설정
export const region: RegionConfig = {
    id: 'suwon',
    name: '수원',
    nameEn: 'Suwon',
    domain: 'public-karaoke.com',

    phone: '010-2626-4833',
    phoneFormatted: '010-2626-4833',
    kakaoId: '@pbsewoo',
    kakaoLink: 'http://qr.kakao.com/talk/jMlvTnRecn1PgP4S9gqME2itU7g-',
    telegramId: '@pbsewoo',
    telegramLink: 'https://t.me/pbsewoo',
    email: 'ymimi9512@gmail.com',

    address: {
        street: '수원역·팔달문 일대',
        city: '수원시',
        cityEn: 'Suwon-si',
        region: '경기도',
        regionEn: 'Gyeonggi-do',
    },
    geo: {
        lat: 37.2636,
        lng: 127.0286,
    },

    landmarks: ['수원역 로데오거리', '팔달문 먹자골목', '인계동 먹자골목'],
    nearbyStations: ['수원역', '팔달문', '수원시청역', '영통역'],

    seo: {
        mainKeyword: '수원 가라오케',
        mainKeywords: [
            '수원 가라오케',
            '수원 유흥',
            '수원 하이퍼블릭',
            '수원 셔츠룸',
            '수원 룸살롱',
            '수원 기모노룸',
            '수원 호빠'
        ],
        description: '수원역·팔달문·인계동 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 추천 업소, 예약 팁 총정리. 회식·데이트·비즈니스 접대 전문. 서우실장 24시간 무료 상담.',
        naverVerification: '',
        googleVerification: '',
        longTailKeywords: [
            "수원역 로데오거리 유흥",
            "팔달문 가라오케 예약",
            "수원역 셔츠룸 저렴한곳",
            "인계동 룸살롱 추천",
            "수원화성 근처 노래방",
            "수원시청 회식장소",
            "수원 하이퍼블릭 가격",
            "수원 가라오케 가격비교",
            "수원역 기모노룸 가격",
            "수원 호빠 저렴이",
            "수원 당일예약 가능 가라오케",
            "수원 강남 대비 가격",
            "수원역 도보 5분 유흥",
            "인계동 먹자골목 가라오케",
            "팔달구 유흥거리",
            "수원시청 근처 회식",
            "수원 대학생 가라오케",
            "경기대학교 근처 유흥",
            "수원 직장인 회식",
            "삼성전자 수원사업소 회식",
            "수원 당일예약 노래방",
            "수원 프리미엄 셔츠룸",
            "수원역 인생샷 카라오케",
            "수원 조용한 룸살롱",
            "수원 2차 하이퍼블릭"
        ],
        locationKeywords: [
            "수원역",
            "수원시청역",
            "팔달문역",
            "영통역",
            "수원화성",
            "로데오거리",
            "인계동",
            "인계동 먹자골목",
            "팔달구",
            "매교동",
            "수원시청",
            "삼성전자 수원",
            "경기대학교",
            "수원대학교",
            "아주대학교"
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
            slug: 'suwon-highpublic-guide',
            subtitle: '프라이빗 / 시크릿',
            description: '수원역 로데오거리 중심 프라이빗 라운지',
            image: '/images/venues/hyperpublic_main.webp',
            minPrice: 180000,
            keywords: ['수원 하이퍼블릭', '수원역 하이퍼블릭'],
        },
        {
            id: 'karaoke',
            name: '가라오케',
            slug: 'suwon-karaoke-guide',
            subtitle: '프리미엄 가라오케',
            description: '최신 음향 시설과 럭셔리 룸에서 즐기는 파티',
            image: '/images/venues/karaoke_main.webp',
            minPrice: 150000,
            keywords: ['수원 가라오케', '수원역 노래방'],
        },
        {
            id: 'shirtsroom',
            name: '셔츠룸',
            slug: 'suwon-shirtsroom-guide',
            subtitle: '캐주얼 라운지',
            description: '편안한 분위기에서 즐기는 캐주얼 비즈니스 클럽',
            image: '/images/venues/shirtsroom_main.webp',
            minPrice: 160000,
            keywords: ['수원 셔츠룸', '인계동 셔츠룸'],
        },
        {
            id: 'kimonoroom',
            name: '기모노룸',
            slug: 'suwon-kimono-room-guide',
            subtitle: '이색 체험',
            description: '이국적인 테마와 특별한 경험을 선사하는 공간',
            image: '/images/venues/kimono_main.webp',
            minPrice: 200000,
            keywords: ['수원 기모노룸', '이색 테마'],
        },
        {
            id: 'roomsalon',
            name: '룸살롱',
            slug: 'suwon-room-salon-guide',
            subtitle: '하이엔드 비즈니스',
            description: '성공적인 비즈니스를 위한 격조 높은 공간',
            image: '/images/venues/roomsalon_main.webp',
            minPrice: 250000,
            keywords: ['수원 룸싸롱', '수원 비즈니스'],
        },
        {
            id: 'hostbar',
            name: '호빠',
            slug: 'suwon-hostbar-guide',
            subtitle: '여성 전용',
            description: '여성 고객만을 위한 프라이빗 엔터테인먼트',
            image: '/images/venues/hostbar_main.webp',
            minPrice: 150000,
            keywords: ['수원 호빠', '수원 호스트바'],
        },
    ],

    areaGuides: [
        { slug: 'suwon-station-guide', name: '수원역 가이드' },
        { slug: 'suwon-paldalmun-guide', name: '팔달문 가이드' },
        { slug: 'suwon-ingye-guide', name: '인계동 가이드' },
    ],

    localContent: {
        areaCharacter: `수원은 경기 남부를 대표하는 최대 상권으로, 수원역 로데오거리를 중심으로 활발한 유흥 문화가 형성되어 있습니다. 유네스코 세계문화유산 수원화성과 팔달문을 보유한 역사 도시이면서도, 인계동과 로데오거리에는 현대적인 유흥 시설이 밀집해 있어 전통과 현대가 공존하는 특색을 지닙니다. 수원시청 공무원, 삼성전자 수원사업장 직원, 경기대·아주대 학생들이 주요 고객층을 형성하며, 지역 주민들의 일상적인 회식과 모임 장소로 자리잡고 있습니다. 강남이나 분당 대비 30% 가량 저렴한 가격대로 동일한 수준의 서비스를 제공하는 것이 최대 강점이며, 관광객들에게도 합리적인 가격으로 프리미엄 유흥 문화를 경험할 수 있는 기회를 제공합니다. 수원역 중심의 우수한 대중교통 접근성과 경부고속도로 인접성으로 경기 남부 전역에서 방문객이 모여드는 거점 상권입니다.`,
        targetCustomers: `수원의 주요 고객층은 수원시청 및 경기도청 공무원, 삼성전자 수원사업장 임직원, 지역 기반 중소기업 경영진이 핵심을 이룹니다. 경기대학교와 아주대학교 학생들의 젊은 수요층도 활발하며, 수원화성 관광객들의 야간 문화 체험 수요도 꾸준합니다. 성남·용인·안양 등 인근 도시 거주자들이 합리적 가격을 찾아 방문하는 경우도 많습니다.`,
        transportFeature: `수원역에서 도보 5분 거리에 주요 유흥가가 위치해 있어 1호선과 분당선 환승역의 편리함을 최대한 활용할 수 있습니다. 경부고속도로 수원IC가 인접해 있어 차량 이용 시 서울 강남에서 30분, 분당에서 20분이면 도착 가능합니다. 수원역 광장 대형 주차장과 인계동 공영주차장 시설이 잘 갖춰져 있어 차량 방문객에게도 편리합니다.`,
        nearbyBusiness: [
            '수원시청 (공무원 고객 다수)',
            '삼성전자 수원사업장 (임직원 회식 수요)',
            '경기대학교 (대학생 고객층)',
            '아주대학교 및 아주대병원 (의료진 고객)',
            '수원월드컵경기장 (스포츠 이벤트 후 수요)',
            '삼성 디지털시티 (기업 고객)',
            '경기도청 (행정 공무원 수요)'
        ],
        uniqueAdvantages: [
            '강남 대비 30%, 분당 대비 20% 저렴한 합리적 가격대',
            '수원역 도보 5분, 1호선·분당선 환승역 접근성',
            '당일 예약 가능률 80% 이상, 유연한 예약 시스템',
            '지역 밀착형 단골 고객 서비스, 친근한 분위기',
            '수원화성 관광과 연계한 문화 체험 패키지 가능'
        ],
        recommendedTime: `평일 저녁 6시~10시가 수원시청과 기업체 회식 수요로 가장 활발하며, 목요일 밤과 금요일이 주말 분위기로 성수기입니다. 주말에는 관광객과 대학생 중심으로 오후 8시 이후 활기를 띱니다.`,
        pricingNote: `수원 지역은 강남 대비 30%, 분당 대비 20% 저렴한 가격 경쟁력이 최대 강점입니다. 동일한 서비스 품질과 시설 수준을 유지하면서도 지역 상권 특성상 합리적인 요금제를 제공합니다. 2차 이용 시 할인 혜택이나 단골 고객 우대 프로그램이 활발하며, 대학생 그룹은 추가 할인을 받을 수 있는 업소도 많습니다.`,
        venueDescriptions: {
            highpublic: `수원역 로데오거리 중심부에 위치한 하이퍼블릭은 경기 남부 최대 상권의 프리미엄 유흥 공간으로, 강남 수준의 세련된 인테리어와 서비스를 합리적인 가격에 제공합니다. 수원시청 공무원과 삼성전자 임직원들의 비즈니스 접대 장소로 인기가 높으며, 프라이빗한 룸 구조로 중요한 거래처 미팅에도 적합합니다. 최신 음향 시설과 조명 시스템을 갖추고 있으면서도 강남 대비 30% 저렴한 가격대를 유지해 가성비가 뛰어납니다. 수원역 도보 5분 거리로 접근성이 우수하며, 당일 예약도 가능한 유연한 운영 방식이 장점입니다.`,
            karaoke: `수원역에서 도보 5분 거리의 노래방은 최신 곡 업데이트와 고급 음향 장비를 갖춘 현대적 시설로, 경기대·아주대 학생들과 젊은 직장인들에게 특히 인기가 높습니다. 강남이나 분당의 고급 노래방과 동일한 수준의 시설을 20~30% 저렴한 가격에 이용할 수 있어 가성비가 뛰어나며, 당일 예약 가능률이 80% 이상으로 즉흥적인 모임에도 부담 없습니다. 수원화성 관광 후 2차 장소로도 많이 이용되며, 프라이빗 룸과 파티룸 등 다양한 규모의 공간을 보유하고 있습니다. 심야 시간대 할인 이벤트와 단골 고객 우대 프로그램도 운영합니다.`,
            shirtsroom: `팔달문과 인계동 사이에 위치한 셔츠룸은 수원 지역 특유의 캐주얼하고 친근한 분위기를 자랑하는 가성비 최고의 유흥 공간입니다. 지역 기업 임원진과 중소기업 사장님들의 가벼운 접대 장소로 인기가 높으며, 부담스럽지 않은 분위기에서 편안한 대화와 비즈니스 네트워킹이 가능합니다. 강남의 고급 셔츠룸보다 30% 이상 저렴하면서도 서비스 품질은 결코 뒤떨어지지 않으며, 지역 밀착형 단골 관리 시스템으로 재방문율이 높습니다. 수원역 접근성이 우수하고 공영주차장과 가까워 차량 이용객에게도 편리합니다.`,
            roomsalon: `수원 비즈니스 접대의 중심인 룸살롱은 수원시청 공무원과 삼성전자 임직원들의 중요한 거래처 접대 장소로, 고급스러운 인테리어와 프라이빗한 공간 구성이 특징입니다. 경기 남부 최대 상권의 프리미엄 이미지를 대표하면서도 강남 대비 합리적인 가격대를 유지해, 예산 대비 만족도가 높은 접대가 가능합니다. 숙련된 매니저와 체계적인 서비스 시스템으로 중요한 비즈니스 자리에서도 신뢰를 얻을 수 있으며, 수원역 인근 위치로 서울이나 경기 각지에서 오는 거래처 손님을 모시기에도 편리합니다. 사전 예약 시 맞춤형 서비스와 특별 할인 혜택을 받을 수 있습니다.`,
            kimonoroom: `수원화성 관광객들에게 특별한 문화 체험을 제공하는 기모노룸은, 전통 유흥 문화에 일본식 테마를 더한 이색적인 공간입니다. 유네스코 세계문화유산 도시 수원의 문화 관광 이미지와 어우러져 외국인 관광객과 젊은 층에게 독특한 경험을 선사합니다. 기모노 의상을 착용한 서비스와 일본식 인테리어로 이국적 분위기를 연출하면서도, 가격은 강남의 유사 업소 대비 30% 저렴해 접근성이 좋습니다. 수원역 로데오거리 중심부에 위치해 관광 후 2차 코스로 인기가 높으며, SNS 인증샷 명소로도 알려져 있습니다. 단체 관광객을 위한 패키지 상품도 운영합니다.`,
            hostbar: `수원 지역 여성 고객들을 위한 호스트바는 안전하고 편안한 분위기에서 스트레스를 해소할 수 있는 프리미엄 공간입니다. 수원시청 여직원, 병원 의료진, 기업체 여성 임원들이 주요 고객층이며, 세련된 호스트들의 매너 있는 서비스와 고급스러운 인테리어가 특징입니다. 강남이나 분당의 유명 호스트바보다 20~30% 합리적인 가격대로, 부담 없이 정기적으로 방문할 수 있는 가성비를 자랑합니다. 철저한 프라이버시 보호와 여성 전용 안전 시스템으로 혼자 방문하는 고객도 안심할 수 있으며, 단골 고객을 위한 맞춤형 서비스와 이벤트를 정기적으로 운영합니다.`
        }
    },
};
