export interface FederatedBannerUser {
    displayName?: string | null;
    username?: string | null;
    avatarUrl?: string | null;
    avatarFallback?: string | null;
    isAdmin?: boolean;
}
export interface FederatedBannerSite {
    slug: string;
    name: string;
    baseUrl: string;
    description?: string | null;
    icon?: string | null;
}
export interface FederatedBannerMenuItem {
    id: string;
    label: string;
    href?: string | null;
    icon?: string | null;
    badge?: string | number | null;
    disabled?: boolean;
    danger?: boolean;
    external?: boolean;
    externalIndicator?: boolean;
}
export interface GhwizFederatedSiteConfig {
    authBaseUrl?: string | null;
    goalsBaseUrl?: string | null;
    moneyPlannerBaseUrl?: string | null;
    agentBaseUrl?: string | null;
    apartmentGateBaseUrl?: string | null;
    fileShareBaseUrl?: string | null;
}
//# sourceMappingURL=types.d.ts.map