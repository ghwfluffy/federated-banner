var _=Object.defineProperty;var M=(i,r,n)=>r in i?_(i,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[r]=n;var d=(i,r,n)=>M(i,typeof r!="symbol"?r+"":r,n);(function(){"use strict";const i="ghwiz-federated-banner",r=`
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
`;function n(t){return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function g(t){const o=((t==null?void 0:t.avatarFallback)||(t==null?void 0:t.displayName)||(t==null?void 0:t.username)||"GH").trim(),e=o.split(/[\s._-]+/).filter(Boolean);return e.length>=2?`${e[0][0]??""}${e[1][0]??""}`.toUpperCase()||"GH":(e[0]??o).slice(0,2).toUpperCase()||"GH"}function b(t){const o=n(t.label);if(t.href&&!t.disabled){const e=t.external?' target="_blank" rel="noreferrer"':"";return`<a class="menu-link${t.danger?" danger":""}" href="${n(t.href)}"${e} data-menu-close="true"><span class="item-label">${o}</span></a>`}return`<button class="menu-button${t.danger?" danger":""}" type="button" data-action="${n(t.id)}"${t.disabled?" disabled":""}><span class="item-label">${o}</span></button>`}class f extends HTMLElement{constructor(){super(...arguments);d(this,"openMenu",null);d(this,"_sites",[]);d(this,"_user",null);d(this,"_appItems",[]);d(this,"_accountItems",[])}static get observedAttributes(){return["app-name","app-url","brand-label","current-app-slug","account-settings-url","show-sign-out"]}set sites(e){this._sites=Array.isArray(e)?e:[],this.render()}get sites(){return this._sites}set user(e){this._user=e??null,this.render()}get user(){return this._user}set appItems(e){this._appItems=Array.isArray(e)?e:[],this.render()}get appItems(){return this._appItems}set accountItems(e){this._accountItems=Array.isArray(e)?e:[],this.render()}get accountItems(){return this._accountItems}connectedCallback(){this.shadowRoot||this.attachShadow({mode:"open"}),this.render()}attributeChangedCallback(){this.render()}attr(e,a=""){return this.getAttribute(e)??a}boolAttr(e,a=!0){const s=this.getAttribute(e);return s===null?a:s!=="false"}closeMenus(){this.openMenu=null,this.render()}emitAction(e){this.dispatchEvent(new CustomEvent("federated-banner-action",{bubbles:!0,composed:!0,detail:{action:e}}))}bindEvents(){var a,s;const e=this.shadowRoot;e&&((a=e.querySelector("[data-toggle-apps]"))==null||a.addEventListener("click",()=>{this.openMenu=this.openMenu==="apps"?null:"apps",this.render()}),(s=e.querySelector("[data-toggle-account]"))==null||s.addEventListener("click",()=>{this.openMenu=this.openMenu==="account"?null:"account",this.render()}),e.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{const c=l.dataset.action;c&&(this.closeMenus(),this.emitAction(c))})}),e.querySelectorAll("[data-menu-close]").forEach(l=>{l.addEventListener("click",()=>this.closeMenus())}))}render(){var u,m,h;if(!this.shadowRoot)return;const e=this.attr("app-name","GHWIZ"),a=this.attr("app-url","#"),s=this.attr("brand-label","GHWIZ"),l=this.attr("current-app-slug",""),c=this.attr("account-settings-url","#"),v=this.boolAttr("show-sign-out",!0),x=((u=this._user)==null?void 0:u.displayName)||((m=this._user)==null?void 0:m.username)||"Account",y=(h=this._user)!=null&&h.avatarUrl?`<img src="${n(this._user.avatarUrl)}" alt="">`:n(g(this._user)),z=this._sites.length>0?this._sites.map(p=>`
          <a class="menu-link" href="${n(p.baseUrl)}" ${p.slug===l?'aria-current="page"':""} data-menu-close="true">
            <span class="item-label">${n(p.name)}</span>
            ${p.description?`<span class="item-description">${n(p.description)}</span>`:""}
          </a>
        `).join(""):'<div class="empty">No federated apps are configured.</div>',k=c==="#"?[]:[{id:"account-settings",label:"Account Settings",href:c}],$=v?[{id:"sign-out",label:"Sign Out",danger:!0}]:[],A=[...k,...this._accountItems,...this._appItems,...$].map(b).join("");this.shadowRoot.innerHTML=`
      <style>${r}</style>
      <header class="banner">
        <a class="brand" href="${n(a)}">
          <span class="brand-mark">GH</span>
          <span class="brand-text">
            <span class="brand-system">${n(s)}</span>
            <span class="brand-app">${n(e)}</span>
          </span>
        </a>
        <div class="actions">
          <div class="menu-wrap">
            <button class="trigger" type="button" data-toggle-apps aria-expanded="${this.openMenu==="apps"}">
              <span>Apps</span><span class="caret" aria-hidden="true">v</span>
            </button>
            ${this.openMenu==="apps"?`<div class="menu apps-menu"><div class="menu-heading">Switch App</div>${z}</div>`:""}
          </div>
          <div class="menu-wrap">
            <button class="trigger" type="button" data-toggle-account aria-expanded="${this.openMenu==="account"}">
              <span class="avatar">${y}</span>
              <span class="user-name">${n(x)}</span>
              <span class="caret" aria-hidden="true">v</span>
            </button>
            ${this.openMenu==="account"?`<div class="menu"><div class="menu-heading">Account</div>${A}</div>`:""}
          </div>
        </div>
      </header>
    `,this.bindEvents()}}function w(t=i){typeof window>"u"||window.customElements.get(t)||window.customElements.define(t,f)}w()})();
