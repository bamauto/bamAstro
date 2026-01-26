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

// 안양 설정
export const region: RegionConfig = {
    id: 'anyang',
    name: '안양',
    nameEn: 'Anyang',
    domain: 'nextkaraoke.com',

    phone: '010-2626-4833',
    phoneFormatted: '010-2626-4833',
    kakaoId: '@pbsewoo',
    kakaoLink: 'http://qr.kakao.com/talk/jMlvTnRecn1PgP4S9gqME2itU7g-',
    telegramId: '@pbsewoo',
    telegramLink: 'https://t.me/pbsewoo',
    email: 'ymimi9512@gmail.com',

    address: {
        street: '안양역·범계역 일대',
        city: '안양시',
        cityEn: 'Anyang-si',
        region: '경기도',
        regionEn: 'Gyeonggi-do',
    },
    geo: {
        lat: 37.4017,
        lng: 126.9227,
    },

    landmarks: ['안양역 유흥가', '범계역 먹자골목', '평촌 학원가'],
    nearbyStations: ['안양역', '범계역', '인덕원역', '평촌역'],

    seo: {
        mainKeyword: '안양 가라오케',
        mainKeywords: [
            '안양 가라오케',
            '안양 유흥',
            '안양 하이퍼블릭',
            '안양 셔츠룸',
            '안양 룸살롱',
            '안양 기모노룸',
            '안양 호빠'
        ],
        description: '안양역·범계역·평촌 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 추천 업소, 예약 팁 총정리. 회식·데이트·비즈니스 접대 전문. 서우실장 24시간 무료 상담.',
        // SEO 최적화 메타 태그 (50-60자 Title, 150-160자 Description)
        homeTitle: '안양 유흥 완벽 가이드 | 가라오케·하이퍼블릭·셔츠룸 추천 | 서우실장',
        homeDescription: '안양역·범계역·평촌 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 프로 에티켓, 추천 업소 총정리. 회식·데이트·비즈니스 전문. ★ 서우실장 무료 상담',
        blogListTitle: '안양 유흥 가이드 블로그 | 프로 팁·에티켓·2026 트렌드 | 서우실장',
        blogListDescription: '안양 유흥 전문가가 알려주는 실전 팁과 에티켓. 15년 경력 서우실장의 인사이더 정보, 가라오케·하이퍼블릭 이용 가이드, 2026 최신 트렌드 총정리.',
        naverVerification: '',
        googleVerification: '',
        longTailKeywords: [
            "안양역 유흥거리 추천",
            "범계역 가라오케 예약",
            "안양역 셔츠룸 저렴한곳",
            "평촌 룸살롱 추천",
            "안양 하이퍼블릭 가격",
            "범계 회식장소",
            "안양 가라오케 가격비교",
            "안양역 기모노룸 가격",
            "안양 호빠 저렴이",
            "안양 당일예약 가능 가라오케",
            "안양 강남 대비 가격",
            "안양역 도보 5분 유흥",
            "평촌 학원가 가라오케",
            "만안구 유흥거리",
            "동안구 유흥거리",
            "인덕원역 회식장소",
            "안양 대학생 가라오케",
            "안양대학교 근처 유흥",
            "안양 직장인 회식",
            "LS그룹 안양 회식",
            "안양 당일예약 노래방",
            "안양 프리미엄 셔츠룸",
            "범계역 인생샷 카라오케",
            "안양 조용한 룸살롱",
            "안양 2차 하이퍼블릭"
        ],
        locationKeywords: [
            "안양역",
            "범계역",
            "인덕원역",
            "평촌역",
            "관악역",
            "안양1번가",
            "평촌",
            "비산동",
            "관양동",
            "동안구",
            "만안구",
            "안양시청",
            "평촌학원가",
            "안양대학교",
            "성결대학교"
        ],
    },

    pricing: {
        minRoomCharge: 170000,
        minTC: 90000,
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
            slug: 'anyang-highpublic-guide',
            subtitle: '프라이빗 / 시크릿',
            description: '안양·평촌 지역 비즈니스맨들의 접대 명소. 1호선 안양역과 4호선 범계역에서 도보 거리, 강남 대비 합리적 가격이 강점입니다.',
            image: '/images/venues/hyperpublic_main.webp',
            minPrice: 170000,
            keywords: ['안양 하이퍼블릭', '범계역 하이퍼블릭'],
        },
        {
            id: 'karaoke',
            name: '가라오케',
            slug: 'anyang-karaoke-guide',
            subtitle: '프리미엄 가라오케',
            description: '평촌·안양 직장인들의 회식 핫플레이스. 최신 음향 시설과 넓은 파티룸을 갖추고 있어 단체 모임에 적합합니다.',
            image: '/images/venues/karaoke_main.webp',
            minPrice: 140000,
            keywords: ['안양 가라오케', '안양역 노래방'],
        },
        {
            id: 'shirtsroom',
            name: '셔츠룸',
            slug: 'anyang-shirtsroom-guide',
            subtitle: '캐주얼 라운지',
            description: '범계역 인근 젊은 직장인들에게 인기. 부담 없는 가격에 트렌디한 분위기에서 가벼운 네트워킹을 즐기세요.',
            image: '/images/venues/shirtsroom_main.webp',
            minPrice: 150000,
            keywords: ['안양 셔츠룸', '범계 셔츠룸'],
        },
        {
            id: 'kimonoroom',
            name: '기모노룸',
            slug: 'anyang-kimono-room-guide',
            subtitle: '이색 체험',
            description: '안양에서 만나는 이색 문화 체험 공간. 일본식 테마와 정통 서비스로 특별한 기념일이나 접대에 추천합니다.',
            image: '/images/venues/kimono_main.webp',
            minPrice: 190000,
            keywords: ['안양 기모노룸', '이색 테마'],
        },
        {
            id: 'roomsalon',
            name: '룸살롱',
            slug: 'anyang-room-salon-guide',
            subtitle: '하이엔드 비즈니스',
            description: '안양·평촌 지역 VIP 고객을 위한 품격 있는 비즈니스 공간. 안양시청·대기업 고객들의 중요 접대에 적합합니다.',
            image: '/images/venues/roomsalon_main.webp',
            minPrice: 240000,
            keywords: ['안양 룸싸롱', '안양 비즈니스'],
        },
        {
            id: 'hostbar',
            name: '호빠',
            slug: 'anyang-hostbar-guide',
            subtitle: '여성 전용',
            description: '여성 고객만을 위한 프라이빗 엔터테인먼트',
            image: '/images/venues/hostbar_main.webp',
            minPrice: 140000,
            keywords: ['안양 호빠', '안양 호스트바'],
        },
    ],

    areaGuides: [
        { slug: 'anyang-station-guide', name: '안양역 가이드' },
        { slug: 'anyang-beomgye-guide', name: '범계역 가이드' },
        { slug: 'anyang-pyeongchon-guide', name: '평촌 가이드' },
    ],

    localContent: {
        areaCharacter: `안양은 서울과 수원 사이에 위치한 경기 중부의 핵심 상권으로, 안양역과 범계역을 중심으로 활발한 유흥 문화가 형성되어 있습니다. 1호선 안양역과 4호선 범계역의 더블 역세권 이점을 살려 서울 접근성이 뛰어나면서도 강남 대비 35% 저렴한 가격대가 최대 강점입니다. 평촌 학원가와 안양시청 인근 기업체가 밀집해 있어 직장인 회식 수요가 풍부하며, LS그룹 본사와 안양대·성결대 학생층까지 다양한 고객층을 보유하고 있습니다. 관악산 등산객들의 하산 후 2차 장소로도 인기가 높아 주말 유동인구가 풍부합니다.`,
        targetCustomers: `안양의 주요 고객층은 LS그룹 본사 임직원, 안양시청 공무원, 평촌 학원가 강사진이 핵심을 이룹니다. 안양대학교와 성결대학교 학생들의 젊은 수요층도 활발하며, 관악산 등산객들의 하산 후 유흥 수요도 꾸준합니다. 서울 금천구·관악구 거주자들이 합리적 가격을 찾아 방문하는 경우도 많습니다.`,
        transportFeature: `안양역(1호선)과 범계역(4호선)의 더블 역세권으로 서울 강남에서 25분, 신도림에서 15분이면 도착 가능합니다. 경부고속도로 안양IC와 제2경인고속도로 접근성도 우수해 차량 이용객에게도 편리합니다. 안양역 앞 대형 주차장과 범계역 공영주차장이 잘 갖춰져 있습니다.`,
        nearbyBusiness: [
            'LS그룹 본사 (임직원 회식 수요)',
            '안양시청 (공무원 고객 다수)',
            '평촌 학원가 (강사진 수요)',
            '안양대학교 (대학생 고객층)',
            '성결대학교 (대학생 고객층)',
            '관악산 등산로 (주말 등산객)',
            '안양예술공원 (문화 행사 후 수요)'
        ],
        uniqueAdvantages: [
            '강남 대비 35%, 분당 대비 25% 저렴한 합리적 가격대',
            '안양역·범계역 더블 역세권, 서울 25분 접근성',
            '당일 예약 가능률 85% 이상, 유연한 예약 시스템',
            '관악산 등산 후 2차 코스로 인기',
            '평촌 학원가·기업체 밀집으로 꾸준한 수요'
        ],
        recommendedTime: `평일 저녁 6시~10시가 안양시청과 기업체 회식 수요로 가장 활발하며, 목요일 밤과 금요일이 주말 분위기로 성수기입니다. 주말에는 관악산 등산객과 가족 모임 후 방문 고객이 많아 오후 5시부터 활기를 띱니다.`,
        pricingNote: `안양 지역은 강남 대비 35%, 분당 대비 25% 저렴한 가격 경쟁력이 최대 강점입니다. 서울과 인접하면서도 지역 상권 특성상 합리적인 요금제를 제공합니다. 평촌 학원가 강사 및 대학생 그룹은 추가 할인을 받을 수 있는 업소가 많으며, 단골 고객 우대 프로그램이 활발합니다.`,
        venueDescriptions: {
            highpublic: `안양역과 범계역 사이에 위치한 하이퍼블릭은 경기 중부의 프리미엄 유흥 공간으로, 서울 접근성과 합리적 가격을 동시에 갖추고 있습니다. LS그룹 임직원과 안양시청 공무원들의 비즈니스 접대 장소로 인기가 높으며, 프라이빗한 룸 구조로 중요한 거래처 미팅에도 적합합니다. 강남 수준의 세련된 인테리어를 35% 저렴한 가격에 이용할 수 있어 가성비가 뛰어납니다.`,
            karaoke: `범계역에서 도보 3분 거리의 가라오케는 최신 곡 업데이트와 고급 음향 장비를 갖춘 현대적 시설로, 평촌 학원가 강사진과 대학생들에게 특히 인기가 높습니다. 강남 대비 35% 저렴하면서도 시설 수준은 동일하며, 당일 예약 가능률이 85% 이상으로 즉흥적인 모임에도 부담 없습니다.`,
            shirtsroom: `안양역 유흥가에 위치한 셔츠룸은 안양 지역 특유의 캐주얼하고 친근한 분위기를 자랑합니다. 지역 기업 임원진과 중소기업 사장님들의 가벼운 접대 장소로 인기가 높으며, 강남의 고급 셔츠룸보다 35% 이상 저렴합니다. 서울에서 출퇴근하는 직장인들이 퇴근 후 가볍게 들르기 좋은 위치입니다.`,
            roomsalon: `안양 비즈니스 접대의 중심인 룸살롱은 LS그룹과 안양시청 공무원들의 중요한 거래처 접대 장소로, 고급스러운 인테리어와 프라이빗한 공간 구성이 특징입니다. 서울에서 25분 거리이면서도 강남 대비 합리적인 가격대를 유지해 예산 대비 만족도가 높습니다.`,
            kimonoroom: `안양의 기모노룸은 관악산 등산 후 이색 체험을 원하는 고객들에게 특별한 경험을 제공합니다. 기모노 의상을 착용한 서비스와 일본식 인테리어로 이국적 분위기를 연출하면서도, 가격은 강남 대비 35% 저렴합니다. SNS 인증샷 명소로도 알려져 있습니다.`,
            hostbar: `안양 지역 여성 고객들을 위한 호스트바는 안전하고 편안한 분위기에서 스트레스를 해소할 수 있는 프리미엄 공간입니다. 평촌 학원가 여강사, 안양시청 여직원들이 주요 고객층이며, 강남보다 30% 합리적인 가격대로 부담 없이 방문할 수 있습니다.`
        }
    },
};
