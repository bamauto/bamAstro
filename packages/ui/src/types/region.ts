export interface RegionConfig {
    id: string;
    name: string;
    nameEn: string;
    domain: string;
    phone: string;
    phoneFormatted: string;
    kakaoId: string;
    kakaoLink: string;
    telegramId: string;
    telegramLink: string;
    email: string;
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
    landmarks: string[];
    nearbyStations: string[];
    seo: {
        mainKeyword: string;
        mainKeywords: string[];
        description: string;
        naverVerification?: string;
        googleVerification?: string;
    };
    pricing: {
        minRoomCharge: number;
        minTC: number;
        currency: string;
    };
    businessHours: {
        open: string;
        close: string;
    };
    venueTypes: VenueType[];
    areaGuides?: AreaGuide[];
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
