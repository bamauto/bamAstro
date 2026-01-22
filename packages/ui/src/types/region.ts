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
        titleSuffix: string;
        mainKeywords: string[];
        description: string;
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
