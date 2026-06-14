(function(i,a){typeof exports=="object"&&typeof module<"u"?a(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],a):(i=typeof globalThis<"u"?globalThis:i||self,a(i.GhwizFederatedBanner={},i.Vue))})(this,function(i,a){"use strict";var C=Object.defineProperty;var O=(i,a,u)=>a in i?C(i,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[a]=u;var c=(i,a,u)=>O(i,typeof a!="symbol"?a+"":a,u);const u="ghwiz-federated-banner",z=`
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
`;function s(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function k(e){const n=((e==null?void 0:e.avatarFallback)||(e==null?void 0:e.displayName)||(e==null?void 0:e.username)||"GH").trim(),t=n.split(/[\s._-]+/).filter(Boolean);return t.length>=2?`${t[0][0]??""}${t[1][0]??""}`.toUpperCase()||"GH":(t[0]??n).slice(0,2).toUpperCase()||"GH"}function g(e,n="icon"){return e==="bell"?`<svg class="${n}" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.3 21a2 2 0 0 0 3.4 0"></path>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
    </svg>`:e==="external-link"?`<svg class="${n}" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 3h6v6"></path>
      <path d="M10 14 21 3"></path>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    </svg>`:`<span aria-hidden="true">${s((e||"?").slice(0,2).toUpperCase())}</span>`}function A(e){return e==null||e===""?"":`<span class="action-badge">${s(String(e))}</span>`}function I(e){const n=s(e.label),t=g(e.icon||e.id),r=A(e.badge);if(e.href&&!e.disabled){const o=e.external?' target="_blank" rel="noreferrer"':"";return`<a class="icon-action" href="${s(e.href)}"${o} data-menu-close="true" aria-label="${n}" title="${n}">${t}${r}</a>`}return`<button class="icon-action" type="button" data-action="${s(e.id)}"${e.disabled?" disabled":""} aria-label="${n}" title="${n}">${t}${r}</button>`}function S(e){const n=s(e.label),t=e.external||e.externalIndicator?g("external-link","icon item-external-icon"):"";if(e.href&&!e.disabled){const r=e.external?' target="_blank" rel="noreferrer"':"";return`<a class="menu-link${e.danger?" danger":""}" href="${s(e.href)}"${r} data-menu-close="true"><span class="item-label">${n}</span>${t}</a>`}return`<button class="menu-button${e.danger?" danger":""}" type="button" data-action="${s(e.id)}"${e.disabled?" disabled":""}><span class="item-label">${n}</span>${t}</button>`}class b extends HTMLElement{constructor(){super(...arguments);c(this,"openMenu",null);c(this,"_sites",[]);c(this,"_user",null);c(this,"_actionItems",[]);c(this,"_appItems",[]);c(this,"_accountItems",[])}static get observedAttributes(){return["app-name","app-url","brand-label","current-app-slug","account-settings-url","show-sign-out"]}set sites(t){this._sites=Array.isArray(t)?t:[],this.render()}get sites(){return this._sites}set user(t){this._user=t??null,this.render()}get user(){return this._user}set actionItems(t){this._actionItems=Array.isArray(t)?t:[],this.render()}get actionItems(){return this._actionItems}set appItems(t){this._appItems=Array.isArray(t)?t:[],this.render()}get appItems(){return this._appItems}set accountItems(t){this._accountItems=Array.isArray(t)?t:[],this.render()}get accountItems(){return this._accountItems}connectedCallback(){this.shadowRoot||this.attachShadow({mode:"open"}),this.render()}attributeChangedCallback(){this.render()}attr(t,r=""){return this.getAttribute(t)??r}boolAttr(t,r=!0){const o=this.getAttribute(t);return o===null?r:o!=="false"}closeMenus(){this.openMenu=null,this.render()}emitAction(t){this.dispatchEvent(new CustomEvent("federated-banner-action",{bubbles:!0,composed:!0,detail:{action:t}}))}bindEvents(){var r,o;const t=this.shadowRoot;t&&((r=t.querySelector("[data-toggle-apps]"))==null||r.addEventListener("click",()=>{this.openMenu=this.openMenu==="apps"?null:"apps",this.render()}),(o=t.querySelector("[data-toggle-account]"))==null||o.addEventListener("click",()=>{this.openMenu=this.openMenu==="account"?null:"account",this.render()}),t.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.action;d&&(this.closeMenus(),this.emitAction(d))})}),t.querySelectorAll("[data-menu-close]").forEach(l=>{l.addEventListener("click",()=>this.closeMenus())}))}render(){var y,x,$;if(!this.shadowRoot)return;const t=this.attr("app-name","GHWIZ"),r=this.attr("app-url","#"),o=this.attr("brand-label","GHWIZ"),l=this.attr("current-app-slug",""),d=this.attr("account-settings-url","#"),m=this.boolAttr("show-sign-out",!0),B=((y=this._user)==null?void 0:y.displayName)||((x=this._user)==null?void 0:x.username)||"Account",E=($=this._user)!=null&&$.avatarUrl?`<img src="${s(this._user.avatarUrl)}" alt="">`:s(k(this._user)),v=this._sites.length>0,F=v?this._sites.map(h=>`
          <a class="menu-link" href="${s(h.baseUrl)}" ${h.slug===l?'aria-current="page"':""} data-menu-close="true">
            <span class="item-label">${s(h.name)}</span>
            ${h.description?`<span class="item-description">${s(h.description)}</span>`:""}
          </a>
        `).join(""):"",G=this._actionItems.map(I).join(""),j=d==="#"?[]:[{id:"account-settings",label:"Account Settings",href:d,externalIndicator:l!=="federated-services"}],H=m?[{id:"sign-out",label:"Sign Out",danger:!0}]:[],L=[...j,...this._accountItems,...this._appItems,...H].map(S).join("");this.shadowRoot.innerHTML=`
      <style>${z}</style>
      <header class="banner">
        <a class="brand" href="${s(r)}">
          <span class="brand-mark">GH</span>
          <span class="brand-text">
            <span class="brand-system">${s(o)}</span>
            <span class="brand-app">${s(t)}</span>
          </span>
        </a>
        <div class="actions">
          ${G}
          ${v?`<div class="menu-wrap">
            <button class="trigger" type="button" data-toggle-apps aria-expanded="${this.openMenu==="apps"}">
              <span>Apps</span><span class="caret" aria-hidden="true">v</span>
            </button>
            ${this.openMenu==="apps"?`<div class="menu apps-menu"><div class="menu-heading">Switch App</div>${F}</div>`:""}
          </div>`:""}
          <div class="menu-wrap">
            <button class="trigger" type="button" data-toggle-account aria-expanded="${this.openMenu==="account"}">
              <span class="avatar">${E}</span>
              <span class="user-name">${s(B)}</span>
              <span class="caret" aria-hidden="true">v</span>
            </button>
            ${this.openMenu==="account"?`<div class="menu"><div class="menu-heading">Account</div>${L}</div>`:""}
          </div>
        </div>
      </header>
    `,this.bindEvents()}}function f(e=u){typeof window>"u"||window.customElements.get(e)||window.customElements.define(e,b)}function w(e){const n=(e??"").trim();return n===""||n==="#"?"":n.replace(/\/+$/,"")||"/"}function p(e,n,t,r){const o=w(t);return o?{slug:e,name:n,baseUrl:o,description:r}:null}function M(e){const n=w(e);return n?`${n}?tab=account-settings`:"#"}function _(e){return[p("federated-services","Federated Services",e.authBaseUrl,"Account settings and federated service administration."),p("goals","Goal Tracker",e.goalsBaseUrl,"Goals, metrics, dashboards, and progress widgets."),p("money-planner","Fluffynomics",e.moneyPlannerBaseUrl,"Accounts, expenses, contracts, investments, and net worth."),p("agent","AI Assistant",e.agentBaseUrl,"Assistant tasks, mailbox workflows, and audited agent activity."),p("apartment-gate","Apartment Gate",e.apartmentGateBaseUrl,"Protected apartment gate and door controls."),p("file-share","File Share",e.fileShareBaseUrl,"Uploads, expiring share links, and revocation.")].filter(n=>n!==null)}const U=a.defineComponent({name:"FederatedBanner",props:{appName:{type:String,required:!0},appUrl:{type:String,default:"#"},brandLabel:{type:String,default:"GHWIZ"},currentAppSlug:{type:String,required:!0},accountSettingsUrl:{type:String,default:"#"},showSignOut:{type:Boolean,default:!0},user:{type:Object,default:null},sites:{type:Array,default:()=>[]},actionItems:{type:Array,default:()=>[]},appItems:{type:Array,default:()=>[]},accountItems:{type:Array,default:()=>[]}},emits:{action:e=>!0,signOut:()=>!0},setup(e,{emit:n}){const t=a.ref(null);function r(){t.value&&(t.value.user=e.user,t.value.sites=e.sites,t.value.actionItems=e.actionItems,t.value.appItems=e.appItems,t.value.accountItems=e.accountItems)}function o(l){var m;const d=(m=l.detail)==null?void 0:m.action;if(d){if(d==="sign-out"){n("signOut");return}n("action",d)}}return a.onMounted(()=>{var l;f(),r(),(l=t.value)==null||l.addEventListener("federated-banner-action",o)}),a.onBeforeUnmount(()=>{var l;(l=t.value)==null||l.removeEventListener("federated-banner-action",o)}),a.watch(()=>[e.user,e.sites,e.actionItems,e.appItems,e.accountItems],r,{deep:!0}),()=>a.h("ghwiz-federated-banner",{ref:t,"app-name":e.appName,"app-url":e.appUrl,"brand-label":e.brandLabel,"current-app-slug":e.currentAppSlug,"account-settings-url":e.accountSettingsUrl,"show-sign-out":e.showSignOut?"true":"false"})}});i.FederatedBanner=U,i.GhwizFederatedBannerElement=b,i.accountSettingsUrl=M,i.createGhwizFederatedSites=_,i.defineFederatedBannerElement=f,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
