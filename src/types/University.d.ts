export interface UniversityResponse {
    alpha_two_code: string;
    country: string;
    'state-province'?: string;
    domains: string[]
    name: string;
    web_pages: string[];
}

export interface University {
    alpha_two_code: string;
    country: string;
    state_province?: string;
    domains: string[]
    name: string;
    web_pages: string[];
}