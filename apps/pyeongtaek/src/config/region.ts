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
    slug: string;       // pyeongtaek-station-guide
    name: string;       // 평택역 가이드
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

// 평택 설정
export const region: RegionConfig = {
    id: 'pyeongtaek',
    name: '평택',
    nameEn: 'Pyeongtaek',
    domain: 'korea-karaoke.com',

    phone: '010-2626-4833',
    phoneFormatted: '010-2626-4833',
    kakaoId: '@pbsewoo',
    kakaoLink: 'http://qr.kakao.com/talk/jMlvTnRecn1PgP4S9gqME2itU7g-',
    telegramId: '@pbsewoo',
    telegramLink: 'https://t.me/pbsewoo',
    email: 'ymimi9512@gmail.com',

    address: {
        street: '평택역·송탄·고덕 일대',
        city: '평택시',
        cityEn: 'Pyeongtaek-si',
        region: '경기도',
        regionEn: 'Gyeonggi-do',
    },
    geo: {
        lat: 36.9921,
        lng: 127.0857,
    },

    landmarks: ['평택역 상권', '송탄 지산동', '고덕국제신도시', '평택지제역'],
    nearbyStations: ['평택역', '평택지제역', '송탄역', '서정리역'],

    seo: {
        mainKeyword: '평택 가라오케',
        mainKeywords: [
            '평택 가라오케',
            '평택 유흥',
            '평택 하이퍼블릭',
            '평택 셔츠룸',
            '평택 룸살롱',
            '평택 기모노룸',
            '평택 호빠',
            '송탄 가라오케',
            '고덕 유흥'
        ],
        description: '평택역·송탄·고덕 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 추천 업소, 예약 팁 총정리. 회식·데이트·비즈니스 접대 전문. 서우실장 24시간 무료 상담.',
        naverVerification: '',
        googleVerification: '',
        longTailKeywords: [
            "평택역 유흥가 추천",
            "송탄 가라오케 예약",
            "평택 셔츠룸 저렴한곳",
            "고덕신도시 룸살롱 추천",
            "평택지제역 근처 노래방",
            "평택 하이퍼블릭 가격",
            "평택 가라오케 가격비교",
            "송탄 기모노룸 가격",
            "평택 호빠 저렴이",
            "평택 당일예약 가능 가라오케",
            "삼성전자 평택 회식",
            "평택역 도보 유흥",
            "송탄 지산동 가라오케",
            "고덕 직장인 회식",
            "평택 프리미엄 셔츠룸",
            "SRT 평택지제역 유흥",
            "평택 2차 하이퍼블릭",
            "송탄 미군부대 근처 유흥",
            "평택항 회식장소",
            "평택 조용한 룸살롱"
        ],
        locationKeywords: [
            "평택역",
            "평택지제역",
            "송탄역",
            "서정리역",
            "송탄",
            "지산동",
            "고덕국제신도시",
            "삼성전자 평택",
            "평택항",
            "평택시청",
            "평택호",
            "안중",
            "오산"
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
            slug: 'pyeongtaek-highpublic-guide',
            subtitle: '프라이빗 / 시크릿',
            description: '평택역·송탄 중심 프라이빗 라운지',
            image: '/images/venues/hyperpublic_main.webp',
            minPrice: 150000,
            keywords: ['평택 하이퍼블릭', '송탄 하이퍼블릭'],
        },
        {
            id: 'karaoke',
            name: '가라오케',
            slug: 'pyeongtaek-karaoke-guide',
            subtitle: '프리미엄 가라오케',
            description: '최신 음향 시설과 럭셔리 룸에서 즐기는 파티',
            image: '/images/venues/karaoke_main.webp',
            minPrice: 120000,
            keywords: ['평택 가라오케', '송탄 노래방'],
        },
        {
            id: 'shirtsroom',
            name: '셔츠룸',
            slug: 'pyeongtaek-shirtsroom-guide',
            subtitle: '캐주얼 라운지',
            description: '편안한 분위기에서 즐기는 캐주얼 비즈니스 클럽',
            image: '/images/venues/shirtsroom_main.webp',
            minPrice: 140000,
            keywords: ['평택 셔츠룸', '송탄 셔츠룸'],
        },
        {
            id: 'kimonoroom',
            name: '기모노룸',
            slug: 'pyeongtaek-kimono-room-guide',
            subtitle: '이색 체험',
            description: '이국적인 테마와 특별한 경험을 선사하는 공간',
            image: '/images/venues/kimono_main.webp',
            minPrice: 180000,
            keywords: ['평택 기모노룸', '이색 테마'],
        },
        {
            id: 'roomsalon',
            name: '룸살롱',
            slug: 'pyeongtaek-room-salon-guide',
            subtitle: '하이엔드 비즈니스',
            description: '성공적인 비즈니스를 위한 격조 높은 공간',
            image: '/images/venues/roomsalon_main.webp',
            minPrice: 200000,
            keywords: ['평택 룸싸롱', '평택 비즈니스'],
        },
        {
            id: 'hostbar',
            name: '호빠',
            slug: 'pyeongtaek-hostbar-guide',
            subtitle: '여성 전용',
            description: '여성 고객만을 위한 프라이빗 엔터테인먼트',
            image: '/images/venues/hostbar_main.webp',
            minPrice: 120000,
            keywords: ['평택 호빠', '평택 호스트바'],
        },
    ],

    areaGuides: [
        { slug: 'pyeongtaek-station-guide', name: '평택역 가이드' },
        { slug: 'pyeongtaek-songtan-guide', name: '송탄 가이드' },
        { slug: 'pyeongtaek-godeok-guide', name: '고덕신도시 가이드' },
    ],

    localContent: {
        areaCharacter: `평택은 경기 남부의 핵심 산업도시로, 삼성전자 평택캠퍼스(세계 최대 반도체 공장)와 평택항, 미군기지(캠프 험프리스)가 위치한 국제적인 도시입니다. 송탄 지산동은 오랜 역사를 가진 평택의 대표 유흥가로, 미군 문화와 한국 유흥 문화가 독특하게 융합된 특색을 지닙니다. 최근에는 SRT 평택지제역과 고덕국제신도시 개발로 새로운 프리미엄 상권이 형성되고 있어, 전통적인 송탄 유흥가와 신도시형 프리미엄 업소가 공존합니다. 삼성전자 평택캠퍼스의 수만 명 임직원과 협력업체 직원들이 핵심 고객층을 형성하며, 평택항 물류업체와 미군 관련 종사자들의 수요도 꾸준합니다.`,
        targetCustomers: `평택의 주요 고객층은 삼성전자 평택캠퍼스 임직원과 협력업체 직원들이 압도적 다수를 차지합니다. 평택항 물류·무역업체 종사자, 평택시청 및 지역 공무원, 고덕신도시 입주 기업 직원들도 중요한 수요층입니다. 캠프 험프리스 주한미군과 관련 업종 종사자들의 독특한 수요도 있으며, 오산·안성·천안 등 인근 도시에서 방문하는 고객들도 많습니다.`,
        transportFeature: `SRT 평택지제역에서 서울 수서역까지 30분, 부산까지 2시간으로 전국 접근성이 우수합니다. 1호선 평택역과 송탄역이 있어 수도권 전철 이용도 편리하며, 경부고속도로·서해안고속도로·평택제천고속도로가 교차하는 교통 요충지입니다. 삼성전자 평택캠퍼스에서 송탄 유흥가까지 차량 15분, 고덕신도시까지 10분 거리로 직장인 접근성이 뛰어납니다.`,
        nearbyBusiness: [
            '삼성전자 평택캠퍼스 (세계 최대 반도체 공장)',
            '캠프 험프리스 (주한미군 기지)',
            '평택항 (물류·무역 허브)',
            '고덕국제신도시 (첨단산업단지)',
            '평택시청 (행정기관)',
            'LG디스플레이 파주-평택 라인',
            '평택호관광단지 (관광·레저)'
        ],
        uniqueAdvantages: [
            '삼성전자 평택캠퍼스 수만 명 임직원 배후 수요',
            '수원·분당 대비 20~30% 저렴한 합리적 가격대',
            'SRT 평택지제역 도보권, 서울 30분 접근성',
            '송탄 전통 유흥가와 고덕 신도시 프리미엄 업소 공존',
            '24시간 운영 업소 다수, 교대근무 직장인 맞춤'
        ],
        recommendedTime: `평일 저녁 7시~11시가 삼성전자 퇴근 후 회식 수요로 가장 활발하며, 금요일 저녁이 주간 최고 성수기입니다. 삼성전자 교대근무 특성상 새벽 시간대(2시~5시)에도 퇴근 후 방문 고객이 있어 24시간 운영 업소가 많습니다. 주말에는 고덕신도시 주민과 외부 방문객 중심으로 오후 6시부터 활기를 띱니다.`,
        pricingNote: `평택은 수원·분당 대비 20~30% 저렴한 가격 경쟁력이 강점입니다. 삼성전자 임직원 대상 법인카드 결제와 영수증 처리가 원활하며, 대규모 단체 예약 시 특별 할인 혜택을 제공하는 업소가 많습니다. 송탄 지역은 오랜 경쟁으로 가성비가 뛰어나고, 고덕신도시는 신규 오픈 업소들의 프로모션 혜택이 풍부합니다.`,
        venueDescriptions: {
            highpublic: `평택·송탄 지역의 하이퍼블릭은 삼성전자 평택캠퍼스 임직원들의 비즈니스 접대와 회식 장소로 각광받는 프리미엄 유흥 공간입니다. 송탄 지산동의 전통적인 업소들은 오랜 노하우와 합리적인 가격으로 단골 고객층이 두텁고, 고덕신도시에는 최신 시설의 하이엔드 업소들이 새롭게 오픈하고 있습니다. 프라이빗한 룸 구조로 중요한 거래처 미팅에도 적합하며, 수원·분당 대비 20~30% 저렴하면서도 서비스 품질은 동등한 수준입니다. SRT 평택지제역 인근 업소는 서울에서 오는 거래처 손님 접대에도 편리합니다.`,
            karaoke: `평택역과 송탄 일대의 가라오케는 삼성전자 직원들과 지역 기업인들의 회식 2차 장소로 인기가 높습니다. 최신 음향 장비와 넓은 룸을 갖추고 있으면서도 수도권 대비 합리적인 가격대를 유지해 가성비가 뛰어납니다. 삼성전자 교대근무 특성을 고려해 24시간 운영하는 업소가 많아, 야간·새벽 시간대에도 이용이 가능합니다. 단체 예약 시 대형 파티룸과 VIP룸을 선택할 수 있으며, 법인카드 결제와 깔끔한 영수증 처리로 기업 회식에 최적화되어 있습니다.`,
            shirtsroom: `평택 셔츠룸은 삼성전자 임직원들의 가벼운 회식과 네트워킹 장소로 사랑받는 캐주얼 유흥 공간입니다. 부담스럽지 않은 가격대에서 편안한 분위기의 서비스를 제공하며, 젊은 직장인들 사이에서 특히 인기가 높습니다. 송탄 지역의 셔츠룸은 오랜 운영 경험으로 서비스 품질이 안정적이고, 고덕신도시에는 트렌디한 인테리어의 신규 업소들이 오픈하고 있습니다. 평일 저녁 퇴근 후 시간대에 예약이 집중되므로, 원하는 시간에 이용하려면 사전 예약을 권장합니다.`,
            roomsalon: `평택 비즈니스 접대의 정점인 룸살롱은 삼성전자 임원급과 평택항 무역업체 대표들의 중요한 거래처 미팅 장소입니다. 고급스러운 인테리어와 숙련된 서비스진이 특징이며, 분당·강남급의 품격 있는 접대가 가능합니다. VIP 전용 룸과 프라이버시 보호 시스템이 잘 갖춰져 있어 민감한 비즈니스 논의에도 적합합니다. 삼성전자 협력업체 미팅이나 해외 바이어 접대 등 중요한 비즈니스 자리에서 신뢰받는 공간으로, 사전 예약 시 맞춤형 서비스를 제공합니다.`,
            kimonoroom: `평택의 기모노룸은 미군기지와 인접한 국제도시 특성을 살린 이색 체험 공간입니다. 일본식 전통 테마와 현대적 편의시설을 조화롭게 갖추고 있으며, 외국인 고객들에게도 특별한 문화 체험을 제공합니다. 기모노 의상을 착용한 서비스와 정통 일본식 인테리어로 이국적 분위기를 연출하면서도, 가격은 강남의 유사 업소 대비 30% 저렴합니다. SNS 인증샷 명소로도 알려져 있어 젊은 층의 방문이 늘고 있으며, 단체 예약 시 특별 패키지도 운영합니다.`,
            hostbar: `평택 지역 여성 고객들을 위한 호스트바는 안전하고 프라이빗한 환경에서 스트레스를 해소할 수 있는 프리미엄 공간입니다. 삼성전자 여성 임직원, 평택시청 여직원, 의료·교육계 여성 종사자들이 주요 고객층이며, 세련된 호스트들의 매너 있는 서비스가 특징입니다. 분당·수원의 호스트바보다 합리적인 가격대로 부담 없이 정기적으로 방문할 수 있으며, 철저한 프라이버시 보호와 여성 전용 안전 시스템으로 혼자 방문하는 고객도 안심할 수 있습니다.`
        }
    },
};
