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
        description: '수원역·팔달문 최고급 가라오케·하이퍼블릭 가이드. 가격·추천·예약·팁. 회식·데이트·접대 완벽 안내.',
        naverVerification: 'YOUR_NAVER_VERIFICATION_CODE',
        googleVerification: 'YOUR_GOOGLE_VERIFICATION_CODE',
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
};
