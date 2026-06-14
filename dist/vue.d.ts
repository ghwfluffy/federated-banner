import type { FederatedBannerMenuItem, FederatedBannerSite, FederatedBannerUser } from "./types";
export declare const FederatedBanner: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    appName: {
        type: StringConstructor;
        required: true;
    };
    appUrl: {
        type: StringConstructor;
        default: string;
    };
    brandLabel: {
        type: StringConstructor;
        default: string;
    };
    currentAppSlug: {
        type: StringConstructor;
        required: true;
    };
    accountSettingsUrl: {
        type: StringConstructor;
        default: string;
    };
    showSignOut: {
        type: BooleanConstructor;
        default: boolean;
    };
    user: {
        type: () => FederatedBannerUser | null;
        default: null;
    };
    sites: {
        type: () => FederatedBannerSite[];
        default: () => never[];
    };
    appItems: {
        type: () => FederatedBannerMenuItem[];
        default: () => never[];
    };
    accountItems: {
        type: () => FederatedBannerMenuItem[];
        default: () => never[];
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    action: (_action: string) => true;
    signOut: () => true;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    appName: {
        type: StringConstructor;
        required: true;
    };
    appUrl: {
        type: StringConstructor;
        default: string;
    };
    brandLabel: {
        type: StringConstructor;
        default: string;
    };
    currentAppSlug: {
        type: StringConstructor;
        required: true;
    };
    accountSettingsUrl: {
        type: StringConstructor;
        default: string;
    };
    showSignOut: {
        type: BooleanConstructor;
        default: boolean;
    };
    user: {
        type: () => FederatedBannerUser | null;
        default: null;
    };
    sites: {
        type: () => FederatedBannerSite[];
        default: () => never[];
    };
    appItems: {
        type: () => FederatedBannerMenuItem[];
        default: () => never[];
    };
    accountItems: {
        type: () => FederatedBannerMenuItem[];
        default: () => never[];
    };
}>> & Readonly<{
    onAction?: ((_action: string) => any) | undefined;
    onSignOut?: (() => any) | undefined;
}>, {
    appUrl: string;
    brandLabel: string;
    accountSettingsUrl: string;
    showSignOut: boolean;
    user: FederatedBannerUser | null;
    sites: FederatedBannerSite[];
    appItems: FederatedBannerMenuItem[];
    accountItems: FederatedBannerMenuItem[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
//# sourceMappingURL=vue.d.ts.map