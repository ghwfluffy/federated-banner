var z = Object.defineProperty;
var A = (e, n, t) => n in e ? z(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var l = (e, n, t) => A(e, typeof n != "symbol" ? n + "" : n, t);
import { defineComponent as k, ref as $, onMounted as S, onBeforeUnmount as I, watch as U, h as _ } from "vue";
const M = "ghwiz-federated-banner", E = `
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
  grid-template-columns: minmax(0, 1fr);
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
.item-description {
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
  }
  .brand-system {
    display: none;
  }
  .brand-app {
    max-width: 9.5rem;
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
}
`;
function s(e) {
  return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
function B(e) {
  const n = ((e == null ? void 0 : e.avatarFallback) || (e == null ? void 0 : e.displayName) || (e == null ? void 0 : e.username) || "GH").trim(), t = n.split(/[\s._-]+/).filter(Boolean);
  return t.length >= 2 ? `${t[0][0] ?? ""}${t[1][0] ?? ""}`.toUpperCase() || "GH" : (t[0] ?? n).slice(0, 2).toUpperCase() || "GH";
}
function G(e) {
  const n = s(e.label);
  if (e.href && !e.disabled) {
    const t = e.external ? ' target="_blank" rel="noreferrer"' : "";
    return `<a class="menu-link${e.danger ? " danger" : ""}" href="${s(e.href)}"${t} data-menu-close="true"><span class="item-label">${n}</span></a>`;
  }
  return `<button class="menu-button${e.danger ? " danger" : ""}" type="button" data-action="${s(e.id)}"${e.disabled ? " disabled" : ""}><span class="item-label">${n}</span></button>`;
}
class F extends HTMLElement {
  constructor() {
    super(...arguments);
    l(this, "openMenu", null);
    l(this, "_sites", []);
    l(this, "_user", null);
    l(this, "_appItems", []);
    l(this, "_accountItems", []);
  }
  static get observedAttributes() {
    return [
      "app-name",
      "app-url",
      "brand-label",
      "current-app-slug",
      "account-settings-url",
      "show-sign-out"
    ];
  }
  set sites(t) {
    this._sites = Array.isArray(t) ? t : [], this.render();
  }
  get sites() {
    return this._sites;
  }
  set user(t) {
    this._user = t ?? null, this.render();
  }
  get user() {
    return this._user;
  }
  set appItems(t) {
    this._appItems = Array.isArray(t) ? t : [], this.render();
  }
  get appItems() {
    return this._appItems;
  }
  set accountItems(t) {
    this._accountItems = Array.isArray(t) ? t : [], this.render();
  }
  get accountItems() {
    return this._accountItems;
  }
  connectedCallback() {
    this.shadowRoot || this.attachShadow({ mode: "open" }), this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  attr(t, r = "") {
    return this.getAttribute(t) ?? r;
  }
  boolAttr(t, r = !0) {
    const i = this.getAttribute(t);
    return i === null ? r : i !== "false";
  }
  closeMenus() {
    this.openMenu = null, this.render();
  }
  emitAction(t) {
    this.dispatchEvent(new CustomEvent("federated-banner-action", {
      bubbles: !0,
      composed: !0,
      detail: { action: t }
    }));
  }
  bindEvents() {
    var r, i;
    const t = this.shadowRoot;
    t && ((r = t.querySelector("[data-toggle-apps]")) == null || r.addEventListener("click", () => {
      this.openMenu = this.openMenu === "apps" ? null : "apps", this.render();
    }), (i = t.querySelector("[data-toggle-account]")) == null || i.addEventListener("click", () => {
      this.openMenu = this.openMenu === "account" ? null : "account", this.render();
    }), t.querySelectorAll("[data-action]").forEach((a) => {
      a.addEventListener("click", () => {
        const o = a.dataset.action;
        o && (this.closeMenus(), this.emitAction(o));
      });
    }), t.querySelectorAll("[data-menu-close]").forEach((a) => {
      a.addEventListener("click", () => this.closeMenus());
    }));
  }
  render() {
    var p, m, h;
    if (!this.shadowRoot)
      return;
    const t = this.attr("app-name", "GHWIZ"), r = this.attr("app-url", "#"), i = this.attr("brand-label", "GHWIZ"), a = this.attr("current-app-slug", ""), o = this.attr("account-settings-url", "#"), u = this.boolAttr("show-sign-out", !0), b = ((p = this._user) == null ? void 0 : p.displayName) || ((m = this._user) == null ? void 0 : m.username) || "Account", f = (h = this._user) != null && h.avatarUrl ? `<img src="${s(this._user.avatarUrl)}" alt="">` : s(B(this._user)), w = this._sites.length > 0 ? this._sites.map((c) => `
          <a class="menu-link" href="${s(c.baseUrl)}" ${c.slug === a ? 'aria-current="page"' : ""} data-menu-close="true">
            <span class="item-label">${s(c.name)}</span>
            ${c.description ? `<span class="item-description">${s(c.description)}</span>` : ""}
          </a>
        `).join("") : '<div class="empty">No federated apps are configured.</div>', v = o === "#" ? [] : [{ id: "account-settings", label: "Account Settings", href: o }], y = u ? [{ id: "sign-out", label: "Sign Out", danger: !0 }] : [], x = [
      ...v,
      ...this._accountItems,
      ...this._appItems,
      ...y
    ].map(G).join("");
    this.shadowRoot.innerHTML = `
      <style>${E}</style>
      <header class="banner">
        <a class="brand" href="${s(r)}">
          <span class="brand-mark">GH</span>
          <span class="brand-text">
            <span class="brand-system">${s(i)}</span>
            <span class="brand-app">${s(t)}</span>
          </span>
        </a>
        <div class="actions">
          <div class="menu-wrap">
            <button class="trigger" type="button" data-toggle-apps aria-expanded="${this.openMenu === "apps"}">
              <span>Apps</span><span class="caret" aria-hidden="true">v</span>
            </button>
            ${this.openMenu === "apps" ? `<div class="menu apps-menu"><div class="menu-heading">Switch App</div>${w}</div>` : ""}
          </div>
          <div class="menu-wrap">
            <button class="trigger" type="button" data-toggle-account aria-expanded="${this.openMenu === "account"}">
              <span class="avatar">${f}</span>
              <span class="user-name">${s(b)}</span>
              <span class="caret" aria-hidden="true">v</span>
            </button>
            ${this.openMenu === "account" ? `<div class="menu"><div class="menu-heading">Account</div>${x}</div>` : ""}
          </div>
        </div>
      </header>
    `, this.bindEvents();
  }
}
function L(e = M) {
  typeof window > "u" || window.customElements.get(e) || window.customElements.define(e, F);
}
function g(e) {
  const n = (e ?? "").trim();
  return n === "" || n === "#" ? "" : n.replace(/\/+$/, "") || "/";
}
function d(e, n, t, r) {
  const i = g(t);
  return i ? { slug: e, name: n, baseUrl: i, description: r } : null;
}
function O(e) {
  const n = g(e);
  return n ? `${n}?tab=profile` : "#";
}
function q(e) {
  return [
    d("federated-services", "Federated Services", e.authBaseUrl, "Account settings and federated service administration."),
    d("goals", "Goal Tracker", e.goalsBaseUrl, "Goals, metrics, dashboards, and progress widgets."),
    d("money-planner", "Fluffynomics", e.moneyPlannerBaseUrl, "Accounts, expenses, contracts, investments, and net worth."),
    d("agent", "AI Assistant", e.agentBaseUrl, "Assistant tasks, mailbox workflows, and audited agent activity."),
    d("apartment-gate", "Apartment Gate", e.apartmentGateBaseUrl, "Protected apartment gate and door controls."),
    d("file-share", "File Share", e.fileShareBaseUrl, "Uploads, expiring share links, and revocation.")
  ].filter((n) => n !== null);
}
const C = k({
  name: "FederatedBanner",
  props: {
    appName: { type: String, required: !0 },
    appUrl: { type: String, default: "#" },
    brandLabel: { type: String, default: "GHWIZ" },
    currentAppSlug: { type: String, required: !0 },
    accountSettingsUrl: { type: String, default: "#" },
    showSignOut: { type: Boolean, default: !0 },
    user: { type: Object, default: null },
    sites: { type: Array, default: () => [] },
    appItems: { type: Array, default: () => [] },
    accountItems: { type: Array, default: () => [] }
  },
  emits: {
    action: (e) => !0,
    signOut: () => !0
  },
  setup(e, { emit: n }) {
    const t = $(null);
    function r() {
      t.value && (t.value.user = e.user, t.value.sites = e.sites, t.value.appItems = e.appItems, t.value.accountItems = e.accountItems);
    }
    function i(a) {
      var u;
      const o = (u = a.detail) == null ? void 0 : u.action;
      if (o) {
        if (o === "sign-out") {
          n("signOut");
          return;
        }
        n("action", o);
      }
    }
    return S(() => {
      var a;
      L(), r(), (a = t.value) == null || a.addEventListener("federated-banner-action", i);
    }), I(() => {
      var a;
      (a = t.value) == null || a.removeEventListener("federated-banner-action", i);
    }), U(
      () => [e.user, e.sites, e.appItems, e.accountItems],
      r,
      { deep: !0 }
    ), () => _("ghwiz-federated-banner", {
      ref: t,
      "app-name": e.appName,
      "app-url": e.appUrl,
      "brand-label": e.brandLabel,
      "current-app-slug": e.currentAppSlug,
      "account-settings-url": e.accountSettingsUrl,
      "show-sign-out": e.showSignOut ? "true" : "false"
    });
  }
});
export {
  C as FederatedBanner,
  F as GhwizFederatedBannerElement,
  O as accountSettingsUrl,
  q as createGhwizFederatedSites,
  L as defineFederatedBannerElement
};
