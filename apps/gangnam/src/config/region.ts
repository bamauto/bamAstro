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
    slug: string;       // gangnam-station-guide
    name: string;       // 강남역 가이드
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

// 강남 설정
export const region: RegionConfig = {
    id: 'gangnam',
    name: '강남',
    nameEn: 'Gangnam',
    domain: 'high-karaoke.com',

    phone: '010-2626-4833',
    phoneFormatted: '010-2626-4833',
    kakaoId: '@pbsewoo',
    kakaoLink: 'http://qr.kakao.com/talk/jMlvTnRecn1PgP4S9gqME2itU7g-',
    telegramId: '@pbsewoo',
    telegramLink: 'https://t.me/pbsewoo',
    email: 'ymimi9512@gmail.com',

    address: {
        street: '강남역·역삼동 일대',
        city: '강남구',
        cityEn: 'Gangnam-gu',
        region: '서울특별시',
        regionEn: 'Seoul',
    },
    geo: {
        lat: 37.4979,
        lng: 127.0276,
    },

    landmarks: ['강남역 거리', '역삼동 먹자골목', '논현동 유흥가', '삼성동 코엑스'],
    nearbyStations: ['강남역', '역삼역', '선릉역', '삼성역', '논현역', '신논현역'],

    seo: {
        mainKeyword: '강남 유흥',
        mainKeywords: [
            '강남 유흥',
            '강남 가라오케',
            '강남 하이퍼블릭',
            '강남 셔츠룸',
            '강남 룸살롱',
            '강남 기모노룸',
            '강남 호빠'
        ],
        description: '강남역·역삼역 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 추천 업소, 예약 팁 총정리. 회식·데이트·비즈니스 접대 전문. 서우실장 24시간 무료 상담.',
        // TODO: 실제 검증 코드로 교체 필요
        // 네이버 웹마스터 도구: https://searchadvisor.naver.com/ → 사이트 등록 → HTML 태그 인증
        // 구글 서치 콘솔: https://search.google.com/search-console → 속성 추가 → HTML 태그 인증
        naverVerification: '', // 네이버 서치어드바이저 HTML 태그 content 값 입력
        googleVerification: '', // 구글 서치 콘솔 HTML 태그 content 값 입력
        // 롱테일 키워드 (Long-tail Keywords) - SEO 에이전트 분석 기반 확장
        longTailKeywords: [
            // 가격/예약 관련
            '강남 가라오케 가격',
            '강남 가라오케 예약',
            '강남 가라오케 추천',
            '강남 하이퍼블릭 가격',
            '강남 하이퍼블릭 예약',
            '강남 하이퍼블릭 초보자',
            '강남역 가라오케 추천',
            '강남역 유흥 가격',
            '역삼동 가라오케',
            '강남 룸살롱 가격',
            '강남 접대 장소 추천',
            '강남 회식 장소 2차',
            // 초보자/가이드 관련 (LSI 키워드 추가)
            '강남 유흥 초보자 가이드',
            '강남 가라오케 팁',
            '강남 하이퍼블릭 에티켓',
            '강남 유흥 예절',
            // 시간대/상황별 (의도 기반 키워드 추가)
            '강남 회사원 저녁 유흥',
            '강남 2차 추천',
            '강남 직장인 술자리',
            '강남 퇴근 후 유흥',
            '강남 데이트 장소',
            // 가격대별 (가성비 키워드 추가)
            '강남 가성비 유흥',
            '강남 가라오케 싼곳',
        ],
        // 위치 기반 키워드 (Location Keywords) - 지역 SEO 강화
        locationKeywords: [
            '강남역 유흥',
            '역삼역 가라오케',
            '선릉역 하이퍼블릭',
            '삼성역 룸살롱',
            '논현동 유흥',
            '신논현역 가라오케',
            '테헤란로 접대',
            '강남구 룸',
            // 역 인근 변형 추가 (지역 검색 커버리지 확대)
            '강남역 근처 가라오케',
            '역삼역 근처 하이퍼블릭',
            '강남역 도보 유흥',
            '역삼동 유흥가',
            '논현역 가라오케',
        ],
    },

    pricing: {
        minRoomCharge: 200000,
        minTC: 150000,
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
            slug: 'gangnam-highpublic-guide',
            subtitle: '프라이빗 / 시크릿',
            description: '강남역 중심 프라이빗 라운지',
            image: '/images/venues/hyperpublic_main.webp',
            minPrice: 200000,
            keywords: ['강남 하이퍼블릭', '강남역 하이퍼블릭'],
        },
        {
            id: 'karaoke',
            name: '가라오케',
            slug: 'gangnam-karaoke-guide',
            subtitle: '프리미엄 가라오케',
            description: '최신 음향 시설과 럭셔리 룸에서 즐기는 파티',
            image: '/images/venues/karaoke_main.webp',
            minPrice: 180000,
            keywords: ['강남 가라오케', '강남역 노래방'],
        },
        {
            id: 'shirtsroom',
            name: '셔츠룸',
            slug: 'gangnam-shirtsroom-guide',
            subtitle: '캐주얼 라운지',
            description: '편안한 분위기에서 즐기는 캐주얼 비즈니스 클럽',
            image: '/images/venues/shirtsroom_main.webp',
            minPrice: 180000,
            keywords: ['강남 셔츠룸', '역삼동 셔츠룸'],
        },
        {
            id: 'kimonoroom',
            name: '기모노룸',
            slug: 'gangnam-kimono-room-guide',
            subtitle: '이색 체험',
            description: '이국적인 테마와 특별한 경험을 선사하는 공간',
            image: '/images/venues/kimono_main.webp',
            minPrice: 250000,
            keywords: ['강남 기모노룸', '이색 테마'],
        },
        {
            id: 'roomsalon',
            name: '룸살롱',
            slug: 'gangnam-room-salon-guide',
            subtitle: '하이엔드 비즈니스',
            description: '성공적인 비즈니스를 위한 격조 높은 공간',
            image: '/images/venues/roomsalon_main.webp',
            minPrice: 300000,
            keywords: ['강남 룸싸롱', '강남 비즈니스'],
        },
        {
            id: 'hostbar',
            name: '호빠',
            slug: 'gangnam-hostbar-guide',
            subtitle: '여성 전용',
            description: '여성 고객만을 위한 프라이빗 엔터테인먼트',
            image: '/images/venues/hostbar_main.webp',
            minPrice: 180000,
            keywords: ['강남 호빠', '강남 호스트바'],
        },
    ],

    areaGuides: [
        { slug: 'gangnam-station-guide', name: '강남역 가이드' },
        { slug: 'gangnam-yeoksam-guide', name: '역삼동 가이드' },
        { slug: 'gangnam-nonhyeon-guide', name: '논현동 가이드' },
    ],

    // 강남 특화 콘텐츠 (구글 중복 방지)
    localContent: {
        areaCharacter: '대한민국 최고의 비즈니스·유흥 중심지. 테헤란로 IT/금융 밀집지역으로 평일 저녁 비즈니스 접대 수요가 매우 높습니다.',
        targetCustomers: '대기업 임원, IT 스타트업 CEO, 금융권 VIP, 해외 바이어 접대',
        transportFeature: '2호선·신분당선 환승역으로 서울 전역 30분 내 접근. 수서고속철도(SRT) 연계로 지방 출장객 접근성 최상.',
        nearbyBusiness: ['삼성전자', '네이버', '카카오', 'SK텔레콤', '현대자동차', 'LG전자', '주요 증권사', '법무법인'],
        uniqueAdvantages: [
            '전국 최고 수준의 매니저 퀄리티',
            '24시간 운영 업소 다수',
            '프리미엄 인테리어 및 시설',
            '비즈니스 접대 특화 서비스',
            'VIP 전용 룸 및 발렛파킹'
        ],
        recommendedTime: '평일 저녁 7-9시 비즈니스 타임이 가장 붐빕니다. 새벽 1시 이후 여유로운 분위기.',
        pricingNote: '서울 내 최고가 상권으로 수원·인천 대비 20-30% 높은 가격대입니다. 대신 시설과 서비스 퀄리티가 확실히 다릅니다.',
        venueDescriptions: {
            highpublic: '강남 하이퍼블릭은 테헤란로 대기업 임원들의 비즈니스 접대 1순위입니다. 매직미러 초이스와 프라이빗 룸이 기본이며, 논현동 골목에 숨은 시크릿 라운지들이 특히 인기입니다.',
            karaoke: '강남 가라오케는 최신 JBL 음향과 하만카돈 시스템을 기본 장착합니다. 역삼역 인근 대형 파티룸은 20인 이상 회식에 최적화되어 있습니다.',
            shirtsroom: '강남 셔츠룸은 캐주얼한 분위기에서 부담 없이 즐기기 좋습니다. 신논현역 인근에 2030 직장인 타겟 업소들이 밀집해 있습니다.',
            roomsalon: '강남 룸살롱은 대한민국 유흥업계의 최정상입니다. 청담동·논현동 고급 업소는 재계 인사, 연예인들의 단골입니다.',
            kimonoroom: '강남 기모노룸은 일본식 정통 서비스를 제공합니다. 해외 바이어 접대나 이색 체험을 원하는 고객에게 추천합니다.',
            hostbar: '강남 호빠는 여성 고객 전용으로 청담동·압구정 인근에 위치합니다. 연예인급 외모의 호스트들이 근무합니다.'
        },
    },
};
