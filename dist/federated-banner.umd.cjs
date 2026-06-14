(function(r,a){typeof exports=="object"&&typeof module<"u"?a(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],a):(r=typeof globalThis<"u"?globalThis:r||self,a(r.GhwizFederatedBanner={},r.Vue))})(this,function(r,a){"use strict";var F=Object.defineProperty;var G=(r,a,c)=>a in r?F(r,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[a]=c;var p=(r,a,c)=>G(r,typeof a!="symbol"?a+"":a,c);const c="ghwiz-federated-banner",x=`
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
`;function l(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function z(e){const n=((e==null?void 0:e.avatarFallback)||(e==null?void 0:e.displayName)||(e==null?void 0:e.username)||"GH").trim(),t=n.split(/[\s._-]+/).filter(Boolean);return t.length>=2?`${t[0][0]??""}${t[1][0]??""}`.toUpperCase()||"GH":(t[0]??n).slice(0,2).toUpperCase()||"GH"}function A(e){const n=l(e.label);if(e.href&&!e.disabled){const t=e.external?' target="_blank" rel="noreferrer"':"";return`<a class="menu-link${e.danger?" danger":""}" href="${l(e.href)}"${t} data-menu-close="true"><span class="item-label">${n}</span></a>`}return`<button class="menu-button${e.danger?" danger":""}" type="button" data-action="${l(e.id)}"${e.disabled?" disabled":""}><span class="item-label">${n}</span></button>`}class g extends HTMLElement{constructor(){super(...arguments);p(this,"openMenu",null);p(this,"_sites",[]);p(this,"_user",null);p(this,"_appItems",[]);p(this,"_accountItems",[])}static get observedAttributes(){return["app-name","app-url","brand-label","current-app-slug","account-settings-url","show-sign-out"]}set sites(t){this._sites=Array.isArray(t)?t:[],this.render()}get sites(){return this._sites}set user(t){this._user=t??null,this.render()}get user(){return this._user}set appItems(t){this._appItems=Array.isArray(t)?t:[],this.render()}get appItems(){return this._appItems}set accountItems(t){this._accountItems=Array.isArray(t)?t:[],this.render()}get accountItems(){return this._accountItems}connectedCallback(){this.shadowRoot||this.attachShadow({mode:"open"}),this.render()}attributeChangedCallback(){this.render()}attr(t,s=""){return this.getAttribute(t)??s}boolAttr(t,s=!0){const o=this.getAttribute(t);return o===null?s:o!=="false"}closeMenus(){this.openMenu=null,this.render()}emitAction(t){this.dispatchEvent(new CustomEvent("federated-banner-action",{bubbles:!0,composed:!0,detail:{action:t}}))}bindEvents(){var s,o;const t=this.shadowRoot;t&&((s=t.querySelector("[data-toggle-apps]"))==null||s.addEventListener("click",()=>{this.openMenu=this.openMenu==="apps"?null:"apps",this.render()}),(o=t.querySelector("[data-toggle-account]"))==null||o.addEventListener("click",()=>{this.openMenu=this.openMenu==="account"?null:"account",this.render()}),t.querySelectorAll("[data-action]").forEach(i=>{i.addEventListener("click",()=>{const d=i.dataset.action;d&&(this.closeMenus(),this.emitAction(d))})}),t.querySelectorAll("[data-menu-close]").forEach(i=>{i.addEventListener("click",()=>this.closeMenus())}))}render(){var w,v,y;if(!this.shadowRoot)return;const t=this.attr("app-name","GHWIZ"),s=this.attr("app-url","#"),o=this.attr("brand-label","GHWIZ"),i=this.attr("current-app-slug",""),d=this.attr("account-settings-url","#"),h=this.boolAttr("show-sign-out",!0),I=((w=this._user)==null?void 0:w.displayName)||((v=this._user)==null?void 0:v.username)||"Account",U=(y=this._user)!=null&&y.avatarUrl?`<img src="${l(this._user.avatarUrl)}" alt="">`:l(z(this._user)),_=this._sites.length>0?this._sites.map(m=>`
          <a class="menu-link" href="${l(m.baseUrl)}" ${m.slug===i?'aria-current="page"':""} data-menu-close="true">
            <span class="item-label">${l(m.name)}</span>
            ${m.description?`<span class="item-description">${l(m.description)}</span>`:""}
          </a>
        `).join(""):'<div class="empty">No federated apps are configured.</div>',M=d==="#"?[]:[{id:"account-settings",label:"Account Settings",href:d}],B=h?[{id:"sign-out",label:"Sign Out",danger:!0}]:[],E=[...M,...this._accountItems,...this._appItems,...B].map(A).join("");this.shadowRoot.innerHTML=`
      <style>${x}</style>
      <header class="banner">
        <a class="brand" href="${l(s)}">
          <span class="brand-mark">GH</span>
          <span class="brand-text">
            <span class="brand-system">${l(o)}</span>
            <span class="brand-app">${l(t)}</span>
          </span>
        </a>
        <div class="actions">
          <div class="menu-wrap">
            <button class="trigger" type="button" data-toggle-apps aria-expanded="${this.openMenu==="apps"}">
              <span>Apps</span><span class="caret" aria-hidden="true">v</span>
            </button>
            ${this.openMenu==="apps"?`<div class="menu apps-menu"><div class="menu-heading">Switch App</div>${_}</div>`:""}
          </div>
          <div class="menu-wrap">
            <button class="trigger" type="button" data-toggle-account aria-expanded="${this.openMenu==="account"}">
              <span class="avatar">${U}</span>
              <span class="user-name">${l(I)}</span>
              <span class="caret" aria-hidden="true">v</span>
            </button>
            ${this.openMenu==="account"?`<div class="menu"><div class="menu-heading">Account</div>${E}</div>`:""}
          </div>
        </div>
      </header>
    `,this.bindEvents()}}function b(e=c){typeof window>"u"||window.customElements.get(e)||window.customElements.define(e,g)}function f(e){const n=(e??"").trim();return n===""||n==="#"?"":n.replace(/\/+$/,"")||"/"}function u(e,n,t,s){const o=f(t);return o?{slug:e,name:n,baseUrl:o,description:s}:null}function k(e){const n=f(e);return n?`${n}?tab=profile`:"#"}function S(e){return[u("federated-services","Federated Services",e.authBaseUrl,"Account settings and federated service administration."),u("goals","Goal Tracker",e.goalsBaseUrl,"Goals, metrics, dashboards, and progress widgets."),u("money-planner","Fluffynomics",e.moneyPlannerBaseUrl,"Accounts, expenses, contracts, investments, and net worth."),u("agent","AI Assistant",e.agentBaseUrl,"Assistant tasks, mailbox workflows, and audited agent activity."),u("apartment-gate","Apartment Gate",e.apartmentGateBaseUrl,"Protected apartment gate and door controls."),u("file-share","File Share",e.fileShareBaseUrl,"Uploads, expiring share links, and revocation.")].filter(n=>n!==null)}const $=a.defineComponent({name:"FederatedBanner",props:{appName:{type:String,required:!0},appUrl:{type:String,default:"#"},brandLabel:{type:String,default:"GHWIZ"},currentAppSlug:{type:String,required:!0},accountSettingsUrl:{type:String,default:"#"},showSignOut:{type:Boolean,default:!0},user:{type:Object,default:null},sites:{type:Array,default:()=>[]},appItems:{type:Array,default:()=>[]},accountItems:{type:Array,default:()=>[]}},emits:{action:e=>!0,signOut:()=>!0},setup(e,{emit:n}){const t=a.ref(null);function s(){t.value&&(t.value.user=e.user,t.value.sites=e.sites,t.value.appItems=e.appItems,t.value.accountItems=e.accountItems)}function o(i){var h;const d=(h=i.detail)==null?void 0:h.action;if(d){if(d==="sign-out"){n("signOut");return}n("action",d)}}return a.onMounted(()=>{var i;b(),s(),(i=t.value)==null||i.addEventListener("federated-banner-action",o)}),a.onBeforeUnmount(()=>{var i;(i=t.value)==null||i.removeEventListener("federated-banner-action",o)}),a.watch(()=>[e.user,e.sites,e.appItems,e.accountItems],s,{deep:!0}),()=>a.h("ghwiz-federated-banner",{ref:t,"app-name":e.appName,"app-url":e.appUrl,"brand-label":e.brandLabel,"current-app-slug":e.currentAppSlug,"account-settings-url":e.accountSettingsUrl,"show-sign-out":e.showSignOut?"true":"false"})}});r.FederatedBanner=$,r.GhwizFederatedBannerElement=g,r.accountSettingsUrl=k,r.createGhwizFederatedSites=S,r.defineFederatedBannerElement=b,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
