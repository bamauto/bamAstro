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
    slug: string;       // yongin-giheung-guide
    name: string;       // 기흥역 가이드
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

// 용인 설정
export const region: RegionConfig = {
    id: 'yongin',
    name: '용인',
    nameEn: 'Yongin',
    domain: 'new-hipublic.com',

    phone: '010-2626-4833',
    phoneFormatted: '010-2626-4833',
    kakaoId: '@pbsewoo',
    kakaoLink: 'http://qr.kakao.com/talk/jMlvTnRecn1PgP4S9gqME2itU7g-',
    telegramId: '@pbsewoo',
    telegramLink: 'https://t.me/pbsewoo',
    email: 'ymimi9512@gmail.com',

    address: {
        street: '기흥역·죽전역·수지구청역 일대',
        city: '용인시',
        cityEn: 'Yongin-si',
        region: '경기도',
        regionEn: 'Gyeonggi-do',
    },
    geo: {
        lat: 37.2383,
        lng: 127.1780,
    },

    landmarks: ['에버랜드', '한국민속촌', '수지 로데오거리', '기흥호수공원', '죽전 먹자골목'],
    nearbyStations: ['기흥역', '죽전역', '수지구청역', '구성역', '신갈역', '동천역'],

    seo: {
        mainKeyword: '용인 가라오케',
        mainKeywords: [
            '용인 가라오케',
            '용인 유흥',
            '용인 하이퍼블릭',
            '용인 셔츠룸',
            '용인 룸살롱',
            '용인 기모노룸',
            '용인 호빠'
        ],
        description: '기흥역·죽전역·수지구청역 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 추천 업소, 예약 팁 총정리. 회식·데이트·비즈니스 접대 전문. 서우실장 24시간 무료 상담.',
        // SEO 최적화 메타 태그 (50-60자 Title, 150-160자 Description)
        homeTitle: '용인 유흥 완벽 가이드 | 가라오케·하이퍼블릭·셔츠룸 추천 | 서우실장',
        homeDescription: '기흥역·죽전역 최고급 가라오케·하이퍼블릭 완벽 가이드. 2026년 최신 가격, 프로 에티켓, 추천 업소 총정리. 회식·데이트·비즈니스 전문. ★ 서우실장 무료 상담',
        blogListTitle: '용인 유흥 가이드 블로그 | 프로 팁·에티켓·2026 트렌드 | 서우실장',
        blogListDescription: '용인 유흥 전문가가 알려주는 실전 팁과 에티켓. 15년 경력 서우실장의 인사이더 정보, 가라오케·하이퍼블릭 이용 가이드, 2026 최신 트렌드 총정리.',
        naverVerification: '',
        googleVerification: '',
        longTailKeywords: [
            // 삼성반도체 관련
            "삼성반도체 기흥캠퍼스 회식",
            "삼성전자 화성캠퍼스 유흥",
            "삼성 반도체 직원 가라오케",
            "기흥 삼성 접대",
            // 기흥역 관련
            "기흥역 로데오거리 유흥",
            "기흥역 가라오케 예약",
            "기흥역 셔츠룸 저렴한곳",
            "기흥역 도보 5분 유흥",
            // 죽전역 관련
            "죽전역 가라오케 추천",
            "죽전 먹자골목 유흥",
            "단국대 근처 노래방",
            "죽전 회식장소",
            // 수지구 관련
            "수지구청역 유흥",
            "수지 로데오거리 가라오케",
            "동천역 룸살롱",
            "수지 하이퍼블릭 가격",
            // 가격 비교
            "용인 강남 대비 가격",
            "용인 분당 대비 저렴",
            "용인 최저가 가라오케",
            // 당일예약
            "용인 당일예약 가능 가라오케",
            "기흥 당일 예약 노래방",
            "수지 프리미엄 셔츠룸",
            "용인 24시간 영업 노래방"
        ],
        locationKeywords: [
            "기흥역",
            "죽전역",
            "수지구청역",
            "구성역",
            "신갈역",
            "동천역",
            "분당선",
            "에버라인",
            "수지구",
            "기흥구",
            "처인구",
            "삼성반도체 기흥",
            "단국대학교",
            "명지대학교",
            "에버랜드"
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
            slug: 'yongin-highpublic-guide',
            subtitle: '프라이빗 / 시크릿',
            description: '삼성반도체 기흥캠퍼스 임직원 접대 명소. 기흥역·죽전역 중심부에서 강남급 서비스를 합리적인 가격에 경험하세요.',
            image: '/images/venues/hyperpublic_main.webp',
            minPrice: 180000,
            keywords: ['용인 하이퍼블릭', '기흥역 하이퍼블릭'],
        },
        {
            id: 'karaoke',
            name: '가라오케',
            slug: 'yongin-karaoke-guide',
            subtitle: '프리미엄 가라오케',
            description: '분당선·에버라인 연결 최대 규모의 프리미엄 가라오케. 수지구에서 최신 음향과 넓은 파티룸으로 단체 회식과 모임에 최적화되어 있습니다.',
            image: '/images/venues/karaoke_main.webp',
            minPrice: 150000,
            keywords: ['용인 가라오케', '기흥역 노래방'],
        },
        {
            id: 'shirtsroom',
            name: '셔츠룸',
            slug: 'yongin-shirtsroom-guide',
            subtitle: '캐주얼 라운지',
            description: '삼성반도체 직원들의 가벼운 회식 명소. 강남 대비 30% 저렴한 가격에 편안한 분위기에서 네트워킹을 즐기세요.',
            image: '/images/venues/shirtsroom_main.webp',
            minPrice: 160000,
            keywords: ['용인 셔츠룸', '기흥 셔츠룸'],
        },
        {
            id: 'kimonoroom',
            name: '기모노룸',
            slug: 'yongin-kimono-room-guide',
            subtitle: '이색 체험',
            description: '에버랜드·한국민속촌 관광 후 특별한 문화 체험. 일본식 정통 서비스와 이국적 인테리어로 잊지 못할 밤을 선사합니다.',
            image: '/images/venues/kimono_main.webp',
            minPrice: 200000,
            keywords: ['용인 기모노룸', '이색 테마'],
        },
        {
            id: 'roomsalon',
            name: '룸살롱',
            slug: 'yongin-room-salon-guide',
            subtitle: '하이엔드 비즈니스',
            description: '삼성전자 반도체 VIP 고객을 위한 격조 높은 비즈니스 공간. 기흥·수지 고급 업소는 중요한 거래처 접대에 최적입니다.',
            image: '/images/venues/roomsalon_main.webp',
            minPrice: 250000,
            keywords: ['용인 룸싸롱', '용인 비즈니스'],
        },
        {
            id: 'hostbar',
            name: '호빠',
            slug: 'yongin-hostbar-guide',
            subtitle: '여성 전용',
            description: '용인 여성 전문직을 위한 안전한 프라이빗 공간. 세련된 호스트들의 품격 있는 서비스로 특별한 시간을 보내세요.',
            image: '/images/venues/hostbar_main.webp',
            minPrice: 150000,
            keywords: ['용인 호빠', '용인 호스트바'],
        },
    ],

    areaGuides: [
        { slug: 'yongin-giheung-guide', name: '기흥역 가이드' },
        { slug: 'yongin-jukjeon-guide', name: '죽전역 가이드' },
        { slug: 'yongin-suji-guide', name: '수지 가이드' },
    ],

    localContent: {
        areaCharacter: `용인은 삼성전자 반도체 기흥캠퍼스와 화성캠퍼스를 중심으로 대한민국 반도체 산업의 심장부 역할을 하는 도시입니다. 분당선과 에버라인이 교차하는 기흥역을 중심으로 활발한 유흥 문화가 형성되어 있으며, 에버랜드와 한국민속촌 같은 대형 관광지를 품은 관광 도시이기도 합니다. 수지 신도시의 전문직 종사자, 단국대·명지대 학생들이 주요 고객층을 형성하며, 삼성반도체 직원들의 회식과 접대 수요가 특히 높습니다. 강남이나 분당 대비 30% 가량 저렴한 가격대로 동일한 수준의 서비스를 제공하는 것이 최대 강점이며, 경부고속도로와 분당선 접근성으로 경기 남부 전역에서 방문객이 모여드는 거점 상권입니다.`,
        targetCustomers: `용인의 주요 고객층은 삼성전자 반도체 기흥캠퍼스·화성캠퍼스 임직원, 수지 신도시 전문직 종사자, 지역 기반 IT 기업 경영진이 핵심을 이룹니다. 단국대학교와 명지대학교 학생들의 젊은 수요층도 활발하며, 에버랜드·한국민속촌 관광객들의 야간 문화 체험 수요도 꾸준합니다. 분당·성남 등 인근 도시 거주자들이 합리적 가격을 찾아 방문하는 경우도 많습니다.`,
        transportFeature: `기흥역에서 도보 5분 거리에 주요 유흥가가 위치해 있어 분당선과 에버라인 환승역의 편리함을 최대한 활용할 수 있습니다. 경부고속도로 수원IC·기흥IC가 인접해 있어 차량 이용 시 서울 강남에서 40분, 분당에서 15분이면 도착 가능합니다. 죽전역과 수지구청역 인근에도 주차 시설이 잘 갖춰져 있어 차량 방문객에게도 편리합니다.`,
        nearbyBusiness: [
            '삼성전자 반도체 기흥캠퍼스 (임직원 회식 수요)',
            '삼성전자 화성캠퍼스 (반도체 고객 다수)',
            '단국대학교 죽전캠퍼스 (대학생 고객층)',
            '명지대학교 (대학생 고객층)',
            '에버랜드 (관광객 2차 수요)',
            '한국민속촌 (관광객 2차 수요)',
            '수지 신도시 (전문직 고객)'
        ],
        uniqueAdvantages: [
            '강남 대비 30%, 분당 대비 20% 저렴한 합리적 가격대',
            '기흥역 도보 5분, 분당선·에버라인 환승역 접근성',
            '당일 예약 가능률 85% 이상, 유연한 예약 시스템',
            '삼성반도체 특화 서비스, VIP 접대 경험 풍부',
            '에버랜드·한국민속촌 관광과 연계한 패키지 가능'
        ],
        recommendedTime: `평일 저녁 6시~10시가 삼성반도체와 기업체 회식 수요로 가장 활발하며, 목요일 밤과 금요일이 주말 분위기로 성수기입니다. 주말에는 관광객과 대학생 중심으로 오후 8시 이후 활기를 띱니다.`,
        pricingNote: `용인 지역은 강남 대비 30%, 분당 대비 20% 저렴한 가격 경쟁력이 최대 강점입니다. 동일한 서비스 품질과 시설 수준을 유지하면서도 지역 상권 특성상 합리적인 요금제를 제공합니다. 삼성반도체 직원 특별 할인이나 단골 고객 우대 프로그램이 활발하며, 대학생 그룹은 추가 할인을 받을 수 있는 업소도 많습니다.`,
        venueDescriptions: {
            highpublic: `기흥역 중심부에 위치한 하이퍼블릭은 삼성반도체 임직원들의 프리미엄 접대 공간으로, 강남 수준의 세련된 인테리어와 서비스를 합리적인 가격에 제공합니다. 삼성전자 기흥캠퍼스와 화성캠퍼스 직원들의 비즈니스 접대 장소로 인기가 높으며, 프라이빗한 룸 구조로 중요한 거래처 미팅에도 적합합니다. 최신 음향 시설과 조명 시스템을 갖추고 있으면서도 강남 대비 30% 저렴한 가격대를 유지해 가성비가 뛰어납니다. 기흥역 도보 5분 거리로 접근성이 우수하며, 당일 예약도 가능한 유연한 운영 방식이 장점입니다.`,
            karaoke: `분당선·에버라인 환승역 기흥역에서 도보 5분 거리의 노래방은 최신 곡 업데이트와 고급 음향 장비를 갖춘 현대적 시설로, 단국대·명지대 학생들과 젊은 직장인들에게 특히 인기가 높습니다. 강남이나 분당의 고급 노래방과 동일한 수준의 시설을 20~30% 저렴한 가격에 이용할 수 있어 가성비가 뛰어나며, 당일 예약 가능률이 85% 이상으로 즉흥적인 모임에도 부담 없습니다. 에버랜드 관광 후 2차 장소로도 많이 이용되며, 프라이빗 룸과 파티룸 등 다양한 규모의 공간을 보유하고 있습니다.`,
            shirtsroom: `기흥역과 죽전역 사이에 위치한 셔츠룸은 삼성반도체 직원들의 가벼운 회식 장소로 특히 인기가 높습니다. 지역 기업 임원진과 IT 기업 사장님들의 캐주얼한 접대 장소로도 각광받으며, 부담스럽지 않은 분위기에서 편안한 대화와 비즈니스 네트워킹이 가능합니다. 강남의 고급 셔츠룸보다 30% 이상 저렴하면서도 서비스 품질은 결코 뒤떨어지지 않으며, 삼성 직원 특별 할인 시스템으로 재방문율이 높습니다. 분당선 접근성이 우수하고 주차 시설이 편리해 차량 이용객에게도 좋습니다.`,
            roomsalon: `용인 비즈니스 접대의 중심인 룸살롱은 삼성반도체 임직원들의 중요한 거래처 접대 장소로, 고급스러운 인테리어와 프라이빗한 공간 구성이 특징입니다. 경기 남부 반도체 클러스터의 프리미엄 이미지를 대표하면서도 강남 대비 합리적인 가격대를 유지해, 예산 대비 만족도가 높은 접대가 가능합니다. 숙련된 매니저와 체계적인 서비스 시스템으로 중요한 비즈니스 자리에서도 신뢰를 얻을 수 있으며, 기흥역 인근 위치로 분당이나 경기 각지에서 오는 거래처 손님을 모시기에도 편리합니다.`,
            kimonoroom: `에버랜드·한국민속촌 관광객들에게 특별한 문화 체험을 제공하는 기모노룸은, 전통 유흥 문화에 일본식 테마를 더한 이색적인 공간입니다. 대한민국 대표 테마파크 인근에 위치해 외국인 관광객과 젊은 층에게 독특한 경험을 선사합니다. 기모노 의상을 착용한 서비스와 일본식 인테리어로 이국적 분위기를 연출하면서도, 가격은 강남의 유사 업소 대비 30% 저렴해 접근성이 좋습니다. 기흥역 중심부에 위치해 관광 후 2차 코스로 인기가 높으며, SNS 인증샷 명소로도 알려져 있습니다.`,
            hostbar: `용인 지역 여성 고객들을 위한 호스트바는 안전하고 편안한 분위기에서 스트레스를 해소할 수 있는 프리미엄 공간입니다. 삼성반도체 여직원, 수지 신도시 전문직 여성, 기업체 여성 임원들이 주요 고객층이며, 세련된 호스트들의 매너 있는 서비스와 고급스러운 인테리어가 특징입니다. 강남이나 분당의 유명 호스트바보다 20~30% 합리적인 가격대로, 부담 없이 정기적으로 방문할 수 있는 가성비를 자랑합니다. 철저한 프라이버시 보호와 여성 전용 안전 시스템으로 혼자 방문하는 고객도 안심할 수 있습니다.`
        }
    },
};
