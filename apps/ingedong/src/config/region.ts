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
    localContent?: {
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

// 인계동 설정
export const region: RegionConfig = {
    id: 'ingedong',
    name: '인계동',
    nameEn: 'Ingye-dong',
    domain: 'public-karaoke.net',

    phone: '010-2626-4833',
    phoneFormatted: '010-2626-4833',
    kakaoId: '@pbsewoo',
    kakaoLink: 'http://qr.kakao.com/talk/jMlvTnRecn1PgP4S9gqME2itU7g-',
    telegramId: '@pbsewoo',
    telegramLink: 'https://t.me/pbsewoo',
    email: 'ymimi9512@gmail.com',

    address: {
        street: '인계동 먹자골목 일대',
        city: '수원시 팔달구',
        cityEn: 'Paldal-gu, Suwon-si',
        region: '경기도',
        regionEn: 'Gyeonggi-do',
    },
    geo: {
        lat: 37.2653,
        lng: 127.0347,
    },

    landmarks: ['인계동 먹자골목', '수원역 로데오거리', '팔달문', '수원시청'],
    nearbyStations: ['수원역', '수원시청역', '매교역', '고색역'],

    seo: {
        mainKeyword: '인계동 유흥',
        mainKeywords: [
            '인계동 유흥',
            '인계동 하이퍼블릭',
            '인계동 가라오케',
            '인계동 셔츠룸',
            '인계동 룸살롱',
            '인계동 기모노룸',
            '인계동 호빠'
        ],
        description: '인계동 먹자골목·수원역 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 추천 업소, 예약 팁 총정리. 회식·데이트·비즈니스 접대 전문. 서우실장 24시간 무료 상담.',
        naverVerification: '',
        googleVerification: '',
        longTailKeywords: [
            '인계동 먹자골목 가라오케',
            '먹자골목 2차 추천 가라오케',
            '인계동 먹자골목 하이퍼블릭',
            '먹자골목 회식 추천 장소',
            '인계동 최저가 유흥',
            '인계동 가성비 좋은 셔츠룸',
            '수원 최저가 가라오케',
            '인계동 저렴한 노래방 추천',
            '인계동 저가 하이퍼블릭',
            '인계동 대학생 가라오케',
            '인계동 대학생 유흥 추천',
            '대학생 가성비 가라오케 수원',
            '인계동 단체 예약 가라오케',
            '인계동 저렴한 회식 장소',
            '수원역 인계동 유흥',
            '수원시청 근처 가라오케',
            'NC백화점 인근 하이퍼블릭',
            '수원 인계동 가라오케 추천',
            '인계동 24시간 영업 가라오케',
            '인계동 새벽 영업 하이퍼블릭',
            '인계동 당일 예약 가능 셔츠룸',
            '인계동 프라이빗 가라오케',
            '인계동 VIP 셔츠룸',
            '인계동 럭셔리 기모노룸'
        ],
        locationKeywords: [
            '수원역',
            '수원시청역',
            '매교역',
            '고색역',
            '인계동 먹자골목',
            'NC백화점',
            'AK플라자',
            '인계예술공원',
            '수원월드컵경기장',
            '팔달문',
            '수원시청',
            '인계동',
            '팔달구',
            '수원시 중심가',
            '인계동 식당가'
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
            slug: 'ingedong-highpublic-guide',
            subtitle: '프라이빗 / 시크릿',
            description: '인계동 먹자골목 중심 프라이빗 라운지',
            image: '/images/venues/hyperpublic_main.webp',
            minPrice: 180000,
            keywords: ['인계동 하이퍼블릭', '인계동 유흥'],
        },
        {
            id: 'karaoke',
            name: '가라오케',
            slug: 'ingedong-karaoke-guide',
            subtitle: '프리미엄 가라오케',
            description: '최신 음향 시설과 럭셔리 룸에서 즐기는 파티',
            image: '/images/venues/karaoke_main.webp',
            minPrice: 150000,
            keywords: ['인계동 가라오케', '인계동 노래방'],
        },
        {
            id: 'shirtsroom',
            name: '셔츠룸',
            slug: 'ingedong-shirtsroom-guide',
            subtitle: '캐주얼 라운지',
            description: '편안한 분위기에서 즐기는 캐주얼 비즈니스 클럽',
            image: '/images/venues/shirtsroom_main.webp',
            minPrice: 160000,
            keywords: ['인계동 셔츠룸', '인계동 유흥'],
        },
        {
            id: 'kimonoroom',
            name: '기모노룸',
            slug: 'ingedong-kimono-room-guide',
            subtitle: '이색 체험',
            description: '이국적인 테마와 특별한 경험을 선사하는 공간',
            image: '/images/venues/kimono_main.webp',
            minPrice: 200000,
            keywords: ['인계동 기모노룸', '이색 테마'],
        },
        {
            id: 'roomsalon',
            name: '룸살롱',
            slug: 'ingedong-room-salon-guide',
            subtitle: '하이엔드 비즈니스',
            description: '성공적인 비즈니스를 위한 격조 높은 공간',
            image: '/images/venues/roomsalon_main.webp',
            minPrice: 250000,
            keywords: ['인계동 룸싸롱', '인계동 비즈니스'],
        },
        {
            id: 'hostbar',
            name: '호빠',
            slug: 'ingedong-hostbar-guide',
            subtitle: '여성 전용',
            description: '여성 고객만을 위한 프라이빗 엔터테인먼트',
            image: '/images/venues/hostbar_main.webp',
            minPrice: 150000,
            keywords: ['인계동 호빠', '인계동 호스트바'],
        },
    ],

    areaGuides: [
        { slug: 'ingedong-station-guide', name: '수원역 가이드' },
        { slug: 'ingedong-food-alley-guide', name: '인계동 먹자골목 가이드' },
        { slug: 'ingedong-downtown-guide', name: '인계동 중심가 가이드' },
    ],

    // 지역 특화 콘텐츠 (구글 중복 방지용)
    localContent: {
        areaCharacter: '수원시 팔달구의 대표적인 먹자골목과 유흥 중심지. 수원역에서 도보 10분 거리로 접근성이 뛰어나며, 저렴한 가격대와 다양한 업소가 밀집해 있어 대학생부터 직장인까지 폭넓은 연령층이 이용합니다.',
        targetCustomers: '대학생 모임, 직장인 회식, 지역 주민 소모임, 가성비 중시 고객',
        transportFeature: '수원역 5번 출구에서 도보 10분, 수원시청역 도보 15분. 시내버스 7번, 13번, 16번 인계동 정류장 하차. 주차 공간이 협소하여 대중교통 이용 권장.',
        nearbyBusiness: ['NC백화점', '수원시청', 'AK플라자', '인계예술공원', '수원월드컵경기장'],
        uniqueAdvantages: [
            '수원 최대 먹자골목으로 다양한 음식점과 유흥 업소 밀집',
            '강남·분당 대비 20-30% 저렴한 합리적 가격대',
            '수원역·수원시청역 접근성으로 대중교통 이용 편리',
            '24시간 운영 업소 다수로 새벽까지 이용 가능',
        ],
        recommendedTime: '평일 저녁 8-10시, 주말 저녁 7-11시가 가장 활발한 시간대입니다. 금요일·토요일 밤에는 예약 필수이며, 주중 오후 6-7시는 비교적 한적합니다.',
        pricingNote: '수원 최저가 상권으로 강남 대비 30%, 분당 대비 20% 저렴합니다. 대학가와 인접해 가성비를 중시하는 고객층이 주를 이루며, 부담 없이 즐기기 좋은 가격대입니다.',
        venueDescriptions: {
            highpublic: '인계동 하이퍼블릭은 먹자골목 중심부에 위치하며 가성비 좋은 프라이빗 라운지입니다. 룸비 15-18만원대로 수원에서 가장 합리적인 가격에 즐길 수 있습니다.',
            karaoke: '인계동 가라오케는 최신 금영·태진 노래방 시스템을 갖추고 있으며, 룸 개수가 많아 당일 예약도 가능합니다. 대학생 단체 모임 및 직장인 회식에 최적화되어 있습니다.',
            shirtsroom: '인계동 셔츠룸은 캐주얼한 분위기로 20-30대 젊은 층에게 인기가 높습니다. 부담 없는 가격과 편안한 서비스로 2차 장소로 추천합니다.',
            roomsalon: '인계동 룸살롱은 비즈니스보다는 지역 주민 접대 중심으로 운영됩니다. 수원 내 타 지역 대비 저렴하면서도 품질 좋은 서비스를 제공합니다.',
            kimonoroom: '인계동 기모노룸은 소수 업소만 운영되며 이색 테마를 선호하는 고객을 대상으로 합니다. 예약제로 운영되어 사전 문의가 필수입니다.',
            hostbar: '인계동 호빠는 여성 고객 전용으로 주말 저녁에 주로 운영됩니다. 수원 내 여성 유흥 문화의 중심지로 자리 잡고 있습니다.',
        },
    },
};
