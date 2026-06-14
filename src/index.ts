export { defineFederatedBannerElement, GhwizFederatedBannerElement } from "./element";
export { accountSettingsUrl, createGhwizFederatedSites } from "./sites";
import { FederatedBanner as VueFederatedBanner } from "./vue";
export type {
  FederatedBannerMenuItem,
  FederatedBannerSite,
  FederatedBannerUser,
  GhwizFederatedSiteConfig,
} from "./types";

// Keep Vue itself as a peer dependency of the consuming app. The package root
// exposes a loose component type so vendored submodule installs do not need to
// resolve Vue's declarations from this package directory.
export const FederatedBanner: any = VueFederatedBanner;
