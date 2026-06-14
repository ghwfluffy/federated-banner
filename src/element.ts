import type { FederatedBannerMenuItem, FederatedBannerSite, FederatedBannerUser } from "./types";

const elementName = "ghwiz-federated-banner";

const styles = `
:host {
  display: block;
  color-scheme: light;
  --ghwiz-banner-bg: #ffffff;
  --ghwiz-banner-text: #172033;
  --ghwiz-banner-muted: #657189;
  --ghwiz-banner-border: #dbe2ee;
  --ghwiz-banner-accent: #2563eb;
  --ghwiz-banner-danger: #b42318;
  --ghwiz-banner-menu-bg: #ffffff;
  --ghwiz-banner-shadow: 0 14px 32px rgba(15, 23, 42, 0.12);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
*, *::before, *::after { box-sizing: border-box; }
.banner {
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.65rem clamp(1rem, 3vw, 1.5rem);
  background: var(--ghwiz-banner-bg);
  border-bottom: 1px solid var(--ghwiz-banner-border);
  color: var(--ghwiz-banner-text);
  position: relative;
  z-index: 20;
}
.brand {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: inherit;
  text-decoration: none;
}
.brand-mark {
  width: 2.15rem;
  height: 2.15rem;
  display: inline-grid;
  place-items: center;
  border: 1px solid var(--ghwiz-banner-border);
  border-radius: 8px;
  color: #ffffff;
  background: #172033;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0;
}
.brand-text {
  min-width: 0;
  display: grid;
  gap: 0.1rem;
}
.brand-system {
  color: var(--ghwiz-banner-muted);
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
}
.brand-app {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--ghwiz-banner-text);
  font-size: 1rem;
  font-weight: 760;
  line-height: 1.15;
}
.actions {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
}
button {
  font: inherit;
}
.icon-action {
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  display: inline-grid;
  place-items: center;
  flex: 0 0 auto;
  border: 1px solid var(--ghwiz-banner-border);
  border-radius: 8px;
  background: #f8fafc;
  color: var(--ghwiz-banner-text);
  text-decoration: none;
  cursor: pointer;
}
.icon-action:hover,
.icon-action:focus-visible {
  border-color: #aab7ca;
  outline: 0;
  background: #eef4ff;
}
.icon-action:disabled {
  cursor: default;
  opacity: 0.55;
}
.icon {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.action-badge {
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  min-width: 1.15rem;
  height: 1.15rem;
  padding: 0 0.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--ghwiz-banner-bg);
  border-radius: 999px;
  background: var(--ghwiz-banner-danger);
  color: #ffffff;
  font-size: 0.68rem;
  font-weight: 800;
  line-height: 1;
}
.trigger {
  min-height: 2.4rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--ghwiz-banner-border);
  border-radius: 8px;
  background: #f8fafc;
  color: var(--ghwiz-banner-text);
  padding: 0.35rem 0.65rem;
  cursor: pointer;
}
.trigger:hover,
.trigger:focus-visible {
  border-color: #aab7ca;
  outline: 0;
}
.caret {
  color: var(--ghwiz-banner-muted);
  font-size: 0.8rem;
}
.avatar {
  width: 1.85rem;
  height: 1.85rem;
  flex: 0 0 auto;
  display: inline-grid;
  place-items: center;
  overflow: hidden;
  border-radius: 999px;
  background: #e8eef8;
  color: #172033;
  font-size: 0.75rem;
  font-weight: 800;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.user-name {
  max-width: 12rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 650;
}
.menu-wrap {
  position: relative;
}
.menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  width: min(22rem, calc(100vw - 2rem));
  max-height: min(28rem, calc(100vh - 6rem));
  overflow: auto;
  display: grid;
  gap: 0.25rem;
  padding: 0.45rem;
  border: 1px solid var(--ghwiz-banner-border);
  border-radius: 8px;
  background: var(--ghwiz-banner-menu-bg);
  box-shadow: var(--ghwiz-banner-shadow);
}
.apps-menu {
  width: min(25rem, calc(100vw - 2rem));
}
.menu-heading {
  padding: 0.45rem 0.55rem 0.2rem;
  color: var(--ghwiz-banner-muted);
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
}
.menu-link,
.menu-button {
  width: 100%;
  min-height: 2.35rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.1rem;
  align-items: center;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--ghwiz-banner-text);
  text-align: left;
  text-decoration: none;
  padding: 0.55rem;
  cursor: pointer;
}
.menu-link:hover,
.menu-button:hover,
.menu-link:focus-visible,
.menu-button:focus-visible {
  outline: 0;
  background: #eef4ff;
}
.menu-link[aria-current="page"] {
  background: #e7efff;
  color: #1d4ed8;
}
.menu-button:disabled {
  cursor: default;
  opacity: 0.55;
}
.menu-button.danger {
  color: var(--ghwiz-banner-danger);
}
.item-label {
  font-size: 0.92rem;
  font-weight: 680;
}
.item-external-icon {
  width: 0.92rem;
  height: 0.92rem;
  color: var(--ghwiz-banner-muted);
}
.item-description {
  grid-column: 1 / -1;
  color: var(--ghwiz-banner-muted);
  font-size: 0.78rem;
  line-height: 1.25;
}
.empty {
  padding: 0.75rem 0.55rem;
  color: var(--ghwiz-banner-muted);
  font-size: 0.86rem;
}
@media (max-width: 700px) {
  .banner {
    min-height: 3.5rem;
    padding: 0.55rem 0.75rem;
    gap: 0.5rem;
  }
  .brand-system {
    display: none;
  }
  .brand-app {
    max-width: min(9.5rem, 34vw);
    font-size: 0.94rem;
  }
  .brand-mark {
    width: 2rem;
    height: 2rem;
  }
  .user-name {
    display: none;
  }
  .trigger {
    min-height: 2.25rem;
    padding: 0.3rem 0.5rem;
  }
  .icon-action {
    width: 2.25rem;
    height: 2.25rem;
  }
  .menu {
    position: fixed;
    top: 4.1rem;
    left: 0.75rem;
    right: 0.75rem;
    width: auto;
    max-height: calc(100vh - 5.25rem);
  }
  .apps-menu {
    width: auto;
  }
}
`;

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function initialsFromUser(user: FederatedBannerUser | null): string {
  const source = (user?.avatarFallback || user?.displayName || user?.username || "GH").trim();
  const parts = source.split(/[\s._-]+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase() || "GH";
  }
  return (parts[0] ?? source).slice(0, 2).toUpperCase() || "GH";
}

function iconMarkup(icon: string | null | undefined, className = "icon"): string {
  if (icon === "bell") {
    return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.3 21a2 2 0 0 0 3.4 0"></path>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
    </svg>`;
  }
  if (icon === "external-link") {
    return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 3h6v6"></path>
      <path d="M10 14 21 3"></path>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    </svg>`;
  }
  return `<span aria-hidden="true">${escapeHtml((icon || "?").slice(0, 2).toUpperCase())}</span>`;
}

function badgeMarkup(value: string | number | null | undefined): string {
  if (value === null || value === undefined || value === "") {
    return "";
  }
  return `<span class="action-badge">${escapeHtml(String(value))}</span>`;
}

function actionMarkup(item: FederatedBannerMenuItem): string {
  const label = escapeHtml(item.label);
  const icon = iconMarkup(item.icon || item.id);
  const badge = badgeMarkup(item.badge);
  if (item.href && !item.disabled) {
    const target = item.external ? ' target="_blank" rel="noreferrer"' : "";
    return `<a class="icon-action" href="${escapeHtml(item.href)}"${target} data-menu-close="true" aria-label="${label}" title="${label}">${icon}${badge}</a>`;
  }
  return `<button class="icon-action" type="button" data-action="${escapeHtml(item.id)}"${item.disabled ? " disabled" : ""} aria-label="${label}" title="${label}">${icon}${badge}</button>`;
}

function itemMarkup(item: FederatedBannerMenuItem): string {
  const label = escapeHtml(item.label);
  const externalIndicator = item.external || item.externalIndicator
    ? iconMarkup("external-link", "icon item-external-icon")
    : "";
  if (item.href && !item.disabled) {
    const target = item.external ? ' target="_blank" rel="noreferrer"' : "";
    return `<a class="menu-link${item.danger ? " danger" : ""}" href="${escapeHtml(item.href)}"${target} data-menu-close="true"><span class="item-label">${label}</span>${externalIndicator}</a>`;
  }
  return `<button class="menu-button${item.danger ? " danger" : ""}" type="button" data-action="${escapeHtml(item.id)}"${item.disabled ? " disabled" : ""}><span class="item-label">${label}</span>${externalIndicator}</button>`;
}

export class GhwizFederatedBannerElement extends HTMLElement {
  private openMenu: "apps" | "account" | null = null;
  private _sites: FederatedBannerSite[] = [];
  private _user: FederatedBannerUser | null = null;
  private _actionItems: FederatedBannerMenuItem[] = [];
  private _appItems: FederatedBannerMenuItem[] = [];
  private _accountItems: FederatedBannerMenuItem[] = [];

  static get observedAttributes(): string[] {
    return [
      "app-name",
      "app-url",
      "brand-label",
      "current-app-slug",
      "account-settings-url",
      "show-sign-out",
    ];
  }

  set sites(value: FederatedBannerSite[] | null | undefined) {
    this._sites = Array.isArray(value) ? value : [];
    this.render();
  }

  get sites(): FederatedBannerSite[] {
    return this._sites;
  }

  set user(value: FederatedBannerUser | null | undefined) {
    this._user = value ?? null;
    this.render();
  }

  get user(): FederatedBannerUser | null {
    return this._user;
  }

  set actionItems(value: FederatedBannerMenuItem[] | null | undefined) {
    this._actionItems = Array.isArray(value) ? value : [];
    this.render();
  }

  get actionItems(): FederatedBannerMenuItem[] {
    return this._actionItems;
  }

  set appItems(value: FederatedBannerMenuItem[] | null | undefined) {
    this._appItems = Array.isArray(value) ? value : [];
    this.render();
  }

  get appItems(): FederatedBannerMenuItem[] {
    return this._appItems;
  }

  set accountItems(value: FederatedBannerMenuItem[] | null | undefined) {
    this._accountItems = Array.isArray(value) ? value : [];
    this.render();
  }

  get accountItems(): FederatedBannerMenuItem[] {
    return this._accountItems;
  }

  connectedCallback(): void {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }
    this.render();
  }

  attributeChangedCallback(): void {
    this.render();
  }

  private attr(name: string, fallback = ""): string {
    return this.getAttribute(name) ?? fallback;
  }

  private boolAttr(name: string, fallback = true): boolean {
    const value = this.getAttribute(name);
    if (value === null) {
      return fallback;
    }
    return value !== "false";
  }

  private closeMenus(): void {
    this.openMenu = null;
    this.render();
  }

  private emitAction(action: string): void {
    this.dispatchEvent(new CustomEvent("federated-banner-action", {
      bubbles: true,
      composed: true,
      detail: { action },
    }));
  }

  private bindEvents(): void {
    const root = this.shadowRoot;
    if (!root) {
      return;
    }
    root.querySelector<HTMLButtonElement>("[data-toggle-apps]")?.addEventListener("click", () => {
      this.openMenu = this.openMenu === "apps" ? null : "apps";
      this.render();
    });
    root.querySelector<HTMLButtonElement>("[data-toggle-account]")?.addEventListener("click", () => {
      this.openMenu = this.openMenu === "account" ? null : "account";
      this.render();
    });
    root.querySelectorAll<HTMLButtonElement>("[data-action]").forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.dataset.action;
        if (!action) {
          return;
        }
        this.closeMenus();
        this.emitAction(action);
      });
    });
    root.querySelectorAll<HTMLElement>("[data-menu-close]").forEach((item) => {
      item.addEventListener("click", () => this.closeMenus());
    });
  }

  private render(): void {
    if (!this.shadowRoot) {
      return;
    }
    const appName = this.attr("app-name", "GHWIZ");
    const appUrl = this.attr("app-url", "#");
    const brandLabel = this.attr("brand-label", "GHWIZ");
    const currentSlug = this.attr("current-app-slug", "");
    const accountSettingsUrl = this.attr("account-settings-url", "#");
    const showSignOut = this.boolAttr("show-sign-out", true);
    const userName = this._user?.displayName || this._user?.username || "Account";
    const avatarMarkup = this._user?.avatarUrl
      ? `<img src="${escapeHtml(this._user.avatarUrl)}" alt="">`
      : escapeHtml(initialsFromUser(this._user));
    const hasSites = this._sites.length > 0;
    const appsMenu = hasSites
      ? this._sites.map((site) => `
          <a class="menu-link" href="${escapeHtml(site.baseUrl)}" ${site.slug === currentSlug ? 'aria-current="page"' : ""} data-menu-close="true">
            <span class="item-label">${escapeHtml(site.name)}</span>
            ${site.description ? `<span class="item-description">${escapeHtml(site.description)}</span>` : ""}
          </a>
        `).join("")
      : "";
    const actionButtons = this._actionItems.map(actionMarkup).join("");
    const accountDefaults: FederatedBannerMenuItem[] = accountSettingsUrl === "#"
      ? []
      : [{
        id: "account-settings",
        label: "Account Settings",
        href: accountSettingsUrl,
        externalIndicator: currentSlug !== "federated-services",
      }];
    const signOutItem: FederatedBannerMenuItem[] = showSignOut
      ? [{ id: "sign-out", label: "Sign Out", danger: true }]
      : [];
    const accountMenu = [
      ...accountDefaults,
      ...this._accountItems,
      ...this._appItems,
      ...signOutItem,
    ].map(itemMarkup).join("");

    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <header class="banner">
        <a class="brand" href="${escapeHtml(appUrl)}">
          <span class="brand-mark">GH</span>
          <span class="brand-text">
            <span class="brand-system">${escapeHtml(brandLabel)}</span>
            <span class="brand-app">${escapeHtml(appName)}</span>
          </span>
        </a>
        <div class="actions">
          ${actionButtons}
          ${hasSites ? `<div class="menu-wrap">
            <button class="trigger" type="button" data-toggle-apps aria-expanded="${this.openMenu === "apps"}">
              <span>Apps</span><span class="caret" aria-hidden="true">v</span>
            </button>
            ${this.openMenu === "apps" ? `<div class="menu apps-menu"><div class="menu-heading">Switch App</div>${appsMenu}</div>` : ""}
          </div>` : ""}
          <div class="menu-wrap">
            <button class="trigger" type="button" data-toggle-account aria-expanded="${this.openMenu === "account"}">
              <span class="avatar">${avatarMarkup}</span>
              <span class="user-name">${escapeHtml(userName)}</span>
              <span class="caret" aria-hidden="true">v</span>
            </button>
            ${this.openMenu === "account" ? `<div class="menu"><div class="menu-heading">Account</div>${accountMenu}</div>` : ""}
          </div>
        </div>
      </header>
    `;
    this.bindEvents();
  }
}

export function defineFederatedBannerElement(name = elementName): void {
  if (typeof window === "undefined" || window.customElements.get(name)) {
    return;
  }
  window.customElements.define(name, GhwizFederatedBannerElement);
}
