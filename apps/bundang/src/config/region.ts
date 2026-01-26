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
    slug: string;       // bundang-seohyeon-guide
    name: string;       // 서현역 가이드
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

// 분당 설정
export const region: RegionConfig = {
    id: 'bundang',
    name: '분당',
    nameEn: 'Bundang',
    domain: 'hikaraoke.com',

    phone: '010-2626-4833',
    phoneFormatted: '010-2626-4833',
    kakaoId: '@pbsewoo',
    kakaoLink: 'http://qr.kakao.com/talk/jMlvTnRecn1PgP4S9gqME2itU7g-',
    telegramId: '@pbsewoo',
    telegramLink: 'https://t.me/pbsewoo',
    email: 'ymimi9512@gmail.com',

    address: {
        street: '서현역·정자역 일대',
        city: '성남시 분당구',
        cityEn: 'Bundang-gu, Seongnam-si',
        region: '경기도',
        regionEn: 'Gyeonggi-do',
    },
    geo: {
        lat: 37.3595,
        lng: 127.1086,
    },

    landmarks: ['서현역 먹자골목', '정자역 카페거리', '야탑역 상권', '판교 테크노밸리'],
    nearbyStations: ['서현역', '정자역', '야탑역', '수내역', '미금역', '판교역'],

    seo: {
        mainKeyword: '분당 유흥',
        mainKeywords: [
            '분당 유흥',
            '분당 가라오케',
            '분당 하이퍼블릭',
            '분당 퍼블릭',
            '분당 셔츠룸',
            '분당 룸살롱',
            '분당 호빠'
        ],
        description: '분당 서현역·정자역 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 추천 업소, 예약 팁 총정리. 회식·데이트·비즈니스 접대 전문. 서우실장 24시간 무료 상담.',
        // SEO 최적화 메타 태그 (50-60자 Title, 150-160자 Description)
        homeTitle: '분당 유흥 완벽 가이드 | 가라오케·하이퍼블릭·셔츠룸 추천 | 서우실장',
        homeDescription: '서현역·정자역 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 프로 에티켓, 추천 업소 총정리. 회식·데이트·비즈니스 전문. ★ 서우실장 무료 상담',
        blogListTitle: '분당 유흥 가이드 블로그 | 프로 팁·에티켓·2026 트렌드 | 서우실장',
        blogListDescription: '분당 유흥 전문가가 알려주는 실전 팁과 에티켓. 15년 경력 서우실장의 인사이더 정보, 가라오케·하이퍼블릭 이용 가이드, 2026 최신 트렌드 총정리.',
        naverVerification: '',
        googleVerification: '',
        // 롱테일 키워드 (Long-tail Keywords) - SEO 에이전트 분석 기반 확장
        longTailKeywords: [
            // 가격/예약 관련
            '분당 가라오케 가격',
            '분당 가라오케 예약',
            '분당 가라오케 추천',
            '분당 하이퍼블릭 가격',
            '분당 하이퍼블릭 예약',
            '분당 하이퍼블릭 초보자',
            '서현역 가라오케 추천',
            '정자역 유흥 가격',
            '서현동 가라오케',
            '분당 룸살롱 가격',
            '분당 접대 장소 추천',
            '분당 회식 장소 2차',
            // 초보자/가이드 관련
            '분당 유흥 초보자 가이드',
            '분당 가라오케 팁',
            '분당 하이퍼블릭 에티켓',
            '분당 유흥 예절',
            // 시간대/상황별
            '분당 회사원 저녁 유흥',
            '분당 2차 추천',
            '분당 직장인 술자리',
            '분당 퇴근 후 유흥',
            '분당 데이트 장소',
            // 가격대별
            '분당 가성비 유흥',
            '분당 가라오케 싼곳',
            // IT기업 특화 (판교테크노밸리)
            '판교 IT기업 회식',
            '네이버 직원 분당 유흥',
            '카카오 직원 분당 회식',
            '판교테크노밸리 접대',
            // 음성 검색 대응 (질문형 LSI)
            '분당 가라오케 어디가 좋아요',
            '분당에서 회식 2차 어디로',
            '판교에서 분당 가깝나요',
            // 비교 키워드
            '분당 vs 강남 유흥',
            '분당 수원 대비 가격',
            '서현역 정자역 유흥 차이',
            // 시간대별
            '분당 야간 유흥',
            '분당 새벽 영업 가라오케',
            '분당 금요일 밤 예약',
            // 프리미엄
            '분당 프리미엄 가라오케',
            '분당 VIP 접대장소',
        ],
        // 위치 기반 키워드 (Location Keywords) - 지역 SEO 강화
        locationKeywords: [
            '서현역 유흥',
            '정자역 가라오케',
            '야탑역 하이퍼블릭',
            '수내역 룸살롱',
            '미금역 유흥',
            '판교역 가라오케',
            '서현동 접대',
            '분당구 룸',
            // 역 인근 변형 추가
            '서현역 근처 가라오케',
            '정자역 근처 하이퍼블릭',
            '서현역 도보 유흥',
            '정자동 유흥가',
            '야탑역 가라오케',
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
            slug: 'bundang-highpublic-guide',
            subtitle: '프라이빗 / 시크릿',
            description: '판교테크노밸리 IT 임원들의 비즈니스 접대 명소. 서현역·정자역에서 도보 거리, 프라이빗 룸에서 조용한 비즈니스 미팅이 가능합니다.',
            image: '/images/venues/hyperpublic_main.webp',
            minPrice: 180000,
            keywords: ['분당 하이퍼블릭', '서현역 하이퍼블릭'],
        },
        {
            id: 'karaoke',
            name: '가라오케',
            slug: 'bundang-karaoke-guide',
            subtitle: '프리미엄 가라오케',
            description: '판교·분당 IT 직장인들의 회식 핫플레이스. 최신 음향 시스템과 신도시 감성의 럭셔리 인테리어로 특별한 밤을 선사합니다.',
            image: '/images/venues/karaoke_main.webp',
            minPrice: 150000,
            keywords: ['분당 가라오케', '정자역 노래방'],
        },
        {
            id: 'shirtsroom',
            name: '셔츠룸',
            slug: 'bundang-shirtsroom-guide',
            subtitle: '캐주얼 라운지',
            description: '젊은 IT 스타트업 종사자들에게 인기. 강남보다 합리적인 가격에 트렌디한 분위기에서 편안한 네트워킹을 즐기세요.',
            image: '/images/venues/shirtsroom_main.webp',
            minPrice: 160000,
            keywords: ['분당 셔츠룸', '서현동 셔츠룸'],
        },
        {
            id: 'kimonoroom',
            name: '기모노룸',
            slug: 'bundang-kimono-room-guide',
            subtitle: '이색 체험',
            description: '일본식 테마와 정통 서비스로 이색 체험을 원하는 고객에게 추천. 해외 바이어 접대나 특별한 기념일에 적합합니다.',
            image: '/images/venues/kimono_main.webp',
            minPrice: 200000,
            keywords: ['분당 기모노룸', '이색 테마'],
        },
        {
            id: 'roomsalon',
            name: '룸살롱',
            slug: 'bundang-room-salon-guide',
            subtitle: '하이엔드 비즈니스',
            description: '네이버·카카오 임원급 VIP 접대 공간. 정자역 인근 고급 업소는 프라이버시와 품격을 중시하는 비즈니스 고객에게 최적입니다.',
            image: '/images/venues/roomsalon_main.webp',
            minPrice: 250000,
            keywords: ['분당 룸싸롱', '분당 비즈니스'],
        },
        {
            id: 'hostbar',
            name: '호빠',
            slug: 'bundang-hostbar-guide',
            subtitle: '여성 전용',
            description: '분당 신도시 여성 전문직을 위한 프라이빗 라운지. 안전하고 세련된 환경에서 스트레스를 해소하세요.',
            image: '/images/venues/hostbar_main.webp',
            minPrice: 150000,
            keywords: ['분당 호빠', '분당 호스트바'],
        },
    ],

    areaGuides: [
        { slug: 'bundang-seohyeon-guide', name: '서현역 가이드' },
        { slug: 'bundang-jeongja-guide', name: '정자역 가이드' },
        { slug: 'bundang-yatap-guide', name: '야탑역 가이드' },
    ],

    // 분당 특화 콘텐츠 (구글 중복 방지)
    localContent: {
        areaCharacter: '경기도 대표 신도시로 IT/벤처 기업 밀집 지역. 판교 테크노밸리와 인접하여 젊은 IT 종사자들의 접대 및 회식 수요가 높습니다.',
        targetCustomers: 'IT 스타트업 임원, 벤처 기업 대표, 판교 테크노밸리 직장인, 분당 거주 전문직',
        transportFeature: '분당선·신분당선 환승역으로 강남 20분, 판교 5분 접근. 경부고속도로 인근으로 자차 이용객 접근성 최상.',
        nearbyBusiness: ['네이버', '카카오', 'NHN', '엔씨소프트', 'SK C&C', '삼성SDS', '판교 스타트업 캠퍼스'],
        uniqueAdvantages: [
            '판교 IT 기업 접대 특화',
            '강남 대비 합리적인 가격',
            '쾌적한 신도시 환경',
            '주차 편리한 업소 다수',
            '고급 아파트 밀집지역 프라이버시 보장'
        ],
        recommendedTime: '평일 저녁 7-10시 판교 퇴근 시간대가 가장 붐빕니다. 금요일 밤은 예약 필수.',
        pricingNote: '강남 대비 10-20% 저렴하면서 시설은 동급입니다. 가성비와 퀄리티를 모두 원하는 분께 추천합니다.',
        venueDescriptions: {
            highpublic: '분당 하이퍼블릭은 판교 IT 기업 임원들의 비즈니스 접대 핫플입니다. 서현역 인근 깔끔한 시설과 프라이빗 룸이 특징입니다.',
            karaoke: '분당 가라오케는 최신 음향 시스템과 넓은 파티룸이 강점입니다. 정자역 카페거리 인근에 20인 이상 수용 가능한 대형 룸이 있습니다.',
            shirtsroom: '분당 셔츠룸은 IT 직장인들이 부담 없이 즐기기 좋은 캐주얼한 분위기입니다. 야탑역 인근에 가성비 좋은 업소들이 밀집해 있습니다.',
            roomsalon: '분당 룸살롱은 강남에서 이전해온 고급 업소들이 많습니다. 조용하고 프라이빗한 분위기를 원하는 VIP 고객에게 인기입니다.',
            kimonoroom: '분당 기모노룸은 일본식 정통 서비스를 분당에서 즐길 수 있습니다. 해외 바이어 접대나 이색 체험을 원하는 고객에게 추천합니다.',
            hostbar: '분당 호빠는 여성 고객 전용으로 서현역 인근에 위치합니다. 세련된 분위기와 친절한 서비스가 특징입니다.'
        },
    },
};
