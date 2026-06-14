import type { FederatedBannerMenuItem, FederatedBannerSite, FederatedBannerUser } from "./types";
export declare class GhwizFederatedBannerElement extends HTMLElement {
    private openMenu;
    private _sites;
    private _user;
    private _actionItems;
    private _appItems;
    private _accountItems;
    static get observedAttributes(): string[];
    set sites(value: FederatedBannerSite[] | null | undefined);
    get sites(): FederatedBannerSite[];
    set user(value: FederatedBannerUser | null | undefined);
    get user(): FederatedBannerUser | null;
    set actionItems(value: FederatedBannerMenuItem[] | null | undefined);
    get actionItems(): FederatedBannerMenuItem[];
    set appItems(value: FederatedBannerMenuItem[] | null | undefined);
    get appItems(): FederatedBannerMenuItem[];
    set accountItems(value: FederatedBannerMenuItem[] | null | undefined);
    get accountItems(): FederatedBannerMenuItem[];
    connectedCallback(): void;
    attributeChangedCallback(): void;
    private attr;
    private boolAttr;
    private closeMenus;
    private emitAction;
    private bindEvents;
    private render;
}
export declare function defineFederatedBannerElement(name?: string): void;
//# sourceMappingURL=element.d.ts.map