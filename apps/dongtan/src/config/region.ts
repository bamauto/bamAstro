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
    slug: string;       // dongtan-station-guide
    name: string;       // 동탄역 가이드
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

// 동탄 설정
export const region: RegionConfig = {
    id: 'dongtan',
    name: '동탄',
    nameEn: 'Dongtan',
    domain: 'best-karaoke.com',

    phone: '010-2626-4833',
    phoneFormatted: '010-2626-4833',
    kakaoId: '@pbsewoo',
    kakaoLink: 'http://qr.kakao.com/talk/jMlvTnRecn1PgP4S9gqME2itU7g-',
    telegramId: '@pbsewoo',
    telegramLink: 'https://t.me/pbsewoo',
    email: 'ymimi9512@gmail.com',

    address: {
        street: '동탄역 일대',
        city: '화성시',
        cityEn: 'Hwaseong-si',
        region: '경기도',
        regionEn: 'Gyeonggi-do',
    },
    geo: {
        lat: 37.2009,
        lng: 127.0981,
    },

    landmarks: ['동탄역 상권', '메타폴리스', '동탄 센트럴파크'],
    nearbyStations: ['동탄역', '동탄2동', '신동탄'],

    seo: {
        mainKeyword: '동탄 가라오케',
        mainKeywords: [
            '동탄 가라오케',
            '동탄 유흥',
            '동탄 하이퍼블릭',
            '동탄 셔츠룸',
            '동탄 룸살롱',
            '동탄 기모노룸',
            '동탄 호빠'
        ],
        description: '동탄역·메타폴리스 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 추천 업소, 예약 팁 총정리. 회식·데이트·비즈니스 접대 전문. 서우실장 24시간 무료 상담.',
        // SEO 최적화 메타 태그 (50-60자 Title, 150-160자 Description)
        homeTitle: '동탄 유흥 완벽 가이드 | 가라오케·하이퍼블릭·셔츠룸 추천 | 서우실장',
        homeDescription: '동탄역·메타폴리스 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 프로 에티켓, 추천 업소 총정리. 회식·데이트·비즈니스 전문. ★ 서우실장 무료 상담',
        blogListTitle: '동탄 유흥 가이드 블로그 | 프로 팁·에티켓·2026 트렌드 | 서우실장',
        blogListDescription: '동탄 유흥 전문가가 알려주는 실전 팁과 에티켓. 15년 경력 서우실장의 인사이더 정보, 가라오케·하이퍼블릭 이용 가이드, 2026 최신 트렌드 총정리.',
        naverVerification: '',
        googleVerification: '',
        longTailKeywords: [
            "동탄역 유흥",
            "동탄 가라오케 예약",
            "동탄역 셔츠룸 저렴한곳",
            "동탄 룸살롱 추천",
            "동탄 하이퍼블릭 가격",
            "동탄 가라오케 가격비교",
            "동탄역 기모노룸 가격",
            "동탄 호빠 저렴이",
            "동탄 당일예약 가능 가라오케",
            "동탄역 도보 5분 유흥",
            "동탄2신도시 가라오케",
            "동탄 직장인 회식",
            "삼성전자 동탄 회식",
            "동탄 당일예약 노래방",
            "동탄 프리미엄 셔츠룸"
        ],
        locationKeywords: [
            "동탄역",
            "동탄2신도시",
            "메타폴리스",
            "동탄 센트럴파크",
            "동탄테크노밸리",
            "삼성전자 동탄",
            "동탄호수공원"
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
            slug: 'dongtan-highpublic-guide',
            subtitle: '프라이빗 / 시크릿',
            description: '삼성전자 동탄캠퍼스 임직원 비즈니스 접대 명소. SRT 동탄역 도보권, 신도시 특유의 현대적 시설에서 프리미엄 서비스를 경험하세요.',
            image: '/images/venues/hyperpublic_main.webp',
            minPrice: 180000,
            keywords: ['동탄 하이퍼블릭', '동탄역 하이퍼블릭'],
        },
        {
            id: 'karaoke',
            name: '가라오케',
            slug: 'dongtan-karaoke-guide',
            subtitle: '프리미엄 가라오케',
            description: '동탄테크노밸리 젊은 직장인들의 회식 핫플레이스. 최신 음향 장비와 신도시 감성의 럭셔리 인테리어가 특징입니다.',
            image: '/images/venues/karaoke_main.webp',
            minPrice: 150000,
            keywords: ['동탄 가라오케', '동탄역 노래방'],
        },
        {
            id: 'shirtsroom',
            name: '셔츠룸',
            slug: 'dongtan-shirtsroom-guide',
            subtitle: '캐주얼 라운지',
            description: 'IT·스타트업 종사자들이 선호하는 캐주얼 라운지. 메타폴리스 저녁 식사 후 가벼운 2차로 제격, 합리적 가격이 강점입니다.',
            image: '/images/venues/shirtsroom_main.webp',
            minPrice: 160000,
            keywords: ['동탄 셔츠룸', '동탄2신도시 셔츠룸'],
        },
        {
            id: 'kimonoroom',
            name: '기모노룸',
            slug: 'dongtan-kimono-room-guide',
            subtitle: '이색 체험',
            description: '신도시 현대 감성에 일본 전통을 접목한 이색 공간. 동탄호수공원 산책 후 특별한 문화 체험을 원하는 분께 추천합니다.',
            image: '/images/venues/kimono_main.webp',
            minPrice: 200000,
            keywords: ['동탄 기모노룸', '이색 테마'],
        },
        {
            id: 'roomsalon',
            name: '룸살롱',
            slug: 'dongtan-room-salon-guide',
            subtitle: '하이엔드 비즈니스',
            description: '삼성전자·현대차 임원급 VIP 접대 공간. SRT로 전국에서 오는 거래처 손님을 모시기에 최적의 프리미엄 비즈니스 장소입니다.',
            image: '/images/venues/roomsalon_main.webp',
            minPrice: 250000,
            keywords: ['동탄 룸싸롱', '동탄 비즈니스'],
        },
        {
            id: 'hostbar',
            name: '호빠',
            slug: 'dongtan-hostbar-guide',
            subtitle: '여성 전용',
            description: '동탄 신도시 여성 전문직을 위한 안전한 프라이빗 공간. 신도시 특성상 프라이버시 보호에 철저하며 편안한 분위기가 특징입니다.',
            image: '/images/venues/hostbar_main.webp',
            minPrice: 150000,
            keywords: ['동탄 호빠', '동탄 호스트바'],
        },
    ],

    areaGuides: [
        { slug: 'dongtan-station-guide', name: '동탄역 가이드' },
        { slug: 'dongtan-metapolis-guide', name: '메타폴리스 가이드' },
        { slug: 'dongtan-centralpark-guide', name: '센트럴파크 가이드' },
    ],

    localContent: {
        areaCharacter: `동탄은 대한민국 대표 신도시로, 동탄2신도시를 중심으로 첨단 인프라와 현대적 상권이 발달한 지역입니다. SRT 동탄역을 중심으로 메타폴리스와 동탄 센트럴파크가 인접해 있으며, 삼성전자 동탄캠퍼스와 동탄테크노밸리에서 근무하는 젊은 전문직 종사자들이 핵심 고객층을 형성합니다. 신도시 특유의 깔끔하고 현대적인 시설이 특징이며, SRT를 통해 서울 강남까지 20분, 부산까지 2시간으로 전국 접근성이 우수합니다. 30~40대 고소득 직장인과 젊은 부부들이 주거하는 지역 특성상, 품격 있는 프리미엄 유흥 문화가 형성되어 있습니다. 동탄호수공원과 센트럴파크 등 쾌적한 환경과 어우러진 야간 문화를 경험할 수 있는 지역입니다.`,
        targetCustomers: `동탄의 주요 고객층은 삼성전자 동탄캠퍼스 임직원, 동탄테크노밸리 IT기업 종사자, 제약·바이오 기업 연구원들이 핵심을 이룹니다. 동탄2신도시에 거주하는 30~40대 고소득 전문직과 자영업자, 그리고 SRT를 통해 방문하는 외부 비즈니스 고객들도 중요한 수요층입니다. 신도시 특성상 품격 있는 접대 문화를 선호하며, 최신 트렌드에 민감한 젊은 고객층이 많습니다.`,
        transportFeature: `SRT 동탄역에서 서울 수서역까지 20분, 부산까지 2시간으로 전국 최고 수준의 접근성을 자랑합니다. 동탄역 상권에서 도보 10분 내 주요 업소들이 밀집해 있으며, 경부고속도로 동탄IC와 인접해 차량 접근도 용이합니다. 대형 복합쇼핑몰 메타폴리스의 지하주차장을 이용하면 주차 걱정 없이 방문할 수 있습니다.`,
        nearbyBusiness: [
            '삼성전자 동탄캠퍼스 (반도체·가전 연구개발)',
            '동탄테크노밸리 (IT·벤처기업 밀집)',
            '한미약품·한독 본사 (제약·바이오 클러스터)',
            '메타폴리스 (대형 복합쇼핑몰)',
            '동탄 센트럴파크 (문화·여가 시설)',
            '화성시청 동탄출장소 (행정기관)',
            'SRT 동탄역 (교통 허브)'
        ],
        uniqueAdvantages: [
            'SRT 동탄역 도보권, 서울 강남 20분 접근성',
            '신도시 특유의 현대적이고 깔끔한 시설',
            '삼성전자·IT기업 종사자 중심의 품격 있는 고객층',
            '메타폴리스 연계 쇼핑·식사·유흥 원스톱 코스',
            '동탄호수공원·센트럴파크 인접 쾌적한 환경'
        ],
        recommendedTime: `평일 저녁 7시~11시가 삼성전자와 테크노밸리 기업 회식으로 가장 활발하며, 금요일 저녁이 주간 최고 성수기입니다. 주말에는 신도시 주민과 SRT 이용 외부 방문객 중심으로 오후 6시부터 활기를 띱니다.`,
        pricingNote: `동탄은 신도시 프리미엄 상권으로 분당과 유사한 가격대를 형성하고 있으며, 강남 대비 10~20% 합리적입니다. 최신 시설과 현대적 서비스를 제공하면서도 경쟁력 있는 가격으로 높은 만족도를 자랑합니다. 기업 법인카드 결제와 영수증 처리가 원활하며, 단체 예약 시 특별 할인 혜택을 제공하는 업소가 많습니다.`,
        venueDescriptions: {
            highpublic: `동탄역 상권 중심부에 위치한 하이퍼블릭은 신도시 특유의 현대적이고 세련된 인테리어를 갖춘 프리미엄 유흥 공간입니다. 삼성전자 동탄캠퍼스 임직원과 테크노밸리 IT기업인들의 비즈니스 접대 장소로 각광받으며, 프라이빗한 룸 구조로 중요한 미팅에도 적합합니다. 최첨단 음향·조명 시스템과 고급 주류 라인업을 갖추고 있으며, 분당·강남 수준의 서비스를 제공합니다. SRT 동탄역 도보 10분 거리로 전국에서 방문하는 거래처 접대에도 편리합니다.`,
            karaoke: `동탄역에서 도보 10분 거리의 프리미엄 가라오케는 최신 음향 장비와 신도시 감성의 럭셔리 인테리어를 갖추고 있습니다. 동탄테크노밸리 젊은 직장인들과 신도시 거주 전문직 고객들에게 인기가 높으며, 최신 곡 업데이트가 빠르고 음질이 뛰어납니다. 메타폴리스 저녁 식사 후 2차 코스로 많이 이용되며, 파티룸부터 VIP룸까지 다양한 규모의 공간을 보유하고 있습니다. 법인카드 결제와 영수증 처리가 깔끔해 기업 회식에 적합합니다.`,
            shirtsroom: `동탄2신도시의 셔츠룸은 신도시 직장인들의 가벼운 회식과 네트워킹 장소로 인기가 높습니다. IT기업과 스타트업 종사자들이 선호하는 캐주얼하면서도 세련된 분위기가 특징이며, 부담스럽지 않은 가격대에서 편안한 대화를 나눌 수 있습니다. 최신 트렌드를 반영한 인테리어와 젊은 감각의 서비스로 30~40대 고객층의 만족도가 높습니다. 메타폴리스 연계 식사·유흥 패키지로 원스톱 코스 이용이 가능합니다.`,
            roomsalon: `동탄 비즈니스 접대의 정점인 룸살롱은 삼성전자 임원급과 테크노밸리 대표들의 중요한 거래처 미팅 장소입니다. 신도시 프리미엄 상권에 걸맞은 고급스러운 인테리어와 숙련된 서비스진이 특징이며, 분당·강남급의 품격 있는 접대가 가능합니다. VIP 전용 룸과 프라이버시 보호 시스템이 잘 갖춰져 있어 민감한 비즈니스 논의에도 적합합니다. SRT 동탄역 인접으로 전국에서 오는 거래처 손님을 모시기에 최적의 위치입니다.`,
            kimonoroom: `동탄의 기모노룸은 신도시의 현대적 감성에 일본식 전통 테마를 접목한 이색 체험 공간입니다. 해외 출장이 잦은 삼성전자·IT기업 임직원들에게 특별한 문화 체험을 제공하며, SNS 인증샷 명소로도 알려져 있습니다. 기모노 의상을 착용한 서비스와 정통 일본식 인테리어로 이국적 분위기를 연출하면서도, 신도시 특유의 깔끔한 시설 관리가 강점입니다. 동탄호수공원 산책 후 2차 코스로도 인기가 높습니다.`,
            hostbar: `동탄 신도시 여성 고객들을 위한 호스트바는 안전하고 프라이빗한 환경에서 스트레스를 해소할 수 있는 프리미엄 공간입니다. 테크노밸리 여성 임원, 제약·바이오 기업 연구원, 신도시 거주 전문직 여성들이 주요 고객층이며, 세련된 호스트들의 매너 있는 서비스가 특징입니다. 신도시 특성상 개인 프라이버시 보호에 철저하며, 혼자 방문하는 고객도 편안하게 이용할 수 있습니다. 여성 전용 안전 시스템과 맞춤형 서비스로 높은 재방문율을 자랑합니다.`
        }
    },
};
