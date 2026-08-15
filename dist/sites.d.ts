import type { FederatedBannerSite, GhwizFederatedSiteConfig } from "./types";
export declare function accountSettingsUrl(authBaseUrl: string | null | undefined): string;
export declare function createGhwizFederatedSites(config: GhwizFederatedSiteConfig): FederatedBannerSite[];
/** Parse a deployment-provided JSON inventory, returning [] for bad input. */
export declare function parseFederatedSites(value: string | null | undefined): FederatedBannerSite[];
//# sourceMappingURL=sites.d.ts.map