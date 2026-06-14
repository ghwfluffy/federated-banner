var H=Object.defineProperty;var U=(o,i,n)=>i in o?H(o,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[i]=n;var c=(o,i,n)=>U(o,typeof i!="symbol"?i+"":i,n);(function(){"use strict";const o="ghwiz-federated-banner",i=`
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
`;function n(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function f(e){const r=((e==null?void 0:e.avatarFallback)||(e==null?void 0:e.displayName)||(e==null?void 0:e.username)||"GH").trim(),t=r.split(/[\s._-]+/).filter(Boolean);return t.length>=2?`${t[0][0]??""}${t[1][0]??""}`.toUpperCase()||"GH":(t[0]??r).slice(0,2).toUpperCase()||"GH"}function u(e,r="icon"){return e==="bell"?`<svg class="${r}" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.3 21a2 2 0 0 0 3.4 0"></path>
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
    </svg>`:e==="external-link"?`<svg class="${r}" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 3h6v6"></path>
      <path d="M10 14 21 3"></path>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    </svg>`:`<span aria-hidden="true">${n((e||"?").slice(0,2).toUpperCase())}</span>`}function w(e){return e==null||e===""?"":`<span class="action-badge">${n(String(e))}</span>`}function v(e){const r=n(e.label),t=u(e.icon||e.id),a=w(e.badge);if(e.href&&!e.disabled){const s=e.external?' target="_blank" rel="noreferrer"':"";return`<a class="icon-action" href="${n(e.href)}"${s} data-menu-close="true" aria-label="${r}" title="${r}">${t}${a}</a>`}return`<button class="icon-action" type="button" data-action="${n(e.id)}"${e.disabled?" disabled":""} aria-label="${r}" title="${r}">${t}${a}</button>`}function x(e){const r=n(e.label),t=e.external||e.externalIndicator?u("external-link","icon item-external-icon"):"";if(e.href&&!e.disabled){const a=e.external?' target="_blank" rel="noreferrer"':"";return`<a class="menu-link${e.danger?" danger":""}" href="${n(e.href)}"${a} data-menu-close="true"><span class="item-label">${r}</span>${t}</a>`}return`<button class="menu-button${e.danger?" danger":""}" type="button" data-action="${n(e.id)}"${e.disabled?" disabled":""}><span class="item-label">${r}</span>${t}</button>`}class y extends HTMLElement{constructor(){super(...arguments);c(this,"openMenu",null);c(this,"_sites",[]);c(this,"_user",null);c(this,"_actionItems",[]);c(this,"_appItems",[]);c(this,"_accountItems",[])}static get observedAttributes(){return["app-name","app-url","brand-label","current-app-slug","account-settings-url","show-sign-out"]}set sites(t){this._sites=Array.isArray(t)?t:[],this.render()}get sites(){return this._sites}set user(t){this._user=t??null,this.render()}get user(){return this._user}set actionItems(t){this._actionItems=Array.isArray(t)?t:[],this.render()}get actionItems(){return this._actionItems}set appItems(t){this._appItems=Array.isArray(t)?t:[],this.render()}get appItems(){return this._appItems}set accountItems(t){this._accountItems=Array.isArray(t)?t:[],this.render()}get accountItems(){return this._accountItems}connectedCallback(){this.shadowRoot||this.attachShadow({mode:"open"}),this.render()}attributeChangedCallback(){this.render()}attr(t,a=""){return this.getAttribute(t)??a}boolAttr(t,a=!0){const s=this.getAttribute(t);return s===null?a:s!=="false"}closeMenus(){this.openMenu=null,this.render()}emitAction(t){this.dispatchEvent(new CustomEvent("federated-banner-action",{bubbles:!0,composed:!0,detail:{action:t}}))}bindEvents(){var a,s;const t=this.shadowRoot;t&&((a=t.querySelector("[data-toggle-apps]"))==null||a.addEventListener("click",()=>{this.openMenu=this.openMenu==="apps"?null:"apps",this.render()}),(s=t.querySelector("[data-toggle-account]"))==null||s.addEventListener("click",()=>{this.openMenu=this.openMenu==="account"?null:"account",this.render()}),t.querySelectorAll("[data-action]").forEach(l=>{l.addEventListener("click",()=>{const d=l.dataset.action;d&&(this.closeMenus(),this.emitAction(d))})}),t.querySelectorAll("[data-menu-close]").forEach(l=>{l.addEventListener("click",()=>this.closeMenus())}))}render(){var m,g,b;if(!this.shadowRoot)return;const t=this.attr("app-name","GHWIZ"),a=this.attr("app-url","#"),s=this.attr("brand-label","GHWIZ"),l=this.attr("current-app-slug",""),d=this.attr("account-settings-url","#"),z=this.boolAttr("show-sign-out",!0),k=((m=this._user)==null?void 0:m.displayName)||((g=this._user)==null?void 0:g.username)||"Account",M=(b=this._user)!=null&&b.avatarUrl?`<img src="${n(this._user.avatarUrl)}" alt="">`:n(f(this._user)),h=this._sites.length>0,_=h?this._sites.map(p=>`
          <a class="menu-link" href="${n(p.baseUrl)}" ${p.slug===l?'aria-current="page"':""} data-menu-close="true">
            <span class="item-label">${n(p.name)}</span>
            ${p.description?`<span class="item-description">${n(p.description)}</span>`:""}
          </a>
        `).join(""):"",A=this._actionItems.map(v).join(""),I=d==="#"?[]:[{id:"account-settings",label:"Account Settings",href:d,externalIndicator:l!=="federated-services"}],E=z?[{id:"sign-out",label:"Sign Out",danger:!0}]:[],S=[...I,...this._accountItems,...this._appItems,...E].map(x).join("");this.shadowRoot.innerHTML=`
      <style>${i}</style>
      <header class="banner">
        <a class="brand" href="${n(a)}">
          <span class="brand-mark">GH</span>
          <span class="brand-text">
            <span class="brand-system">${n(s)}</span>
            <span class="brand-app">${n(t)}</span>
          </span>
        </a>
        <div class="actions">
          ${A}
          ${h?`<div class="menu-wrap">
            <button class="trigger" type="button" data-toggle-apps aria-expanded="${this.openMenu==="apps"}">
              <span>Apps</span><span class="caret" aria-hidden="true">v</span>
            </button>
            ${this.openMenu==="apps"?`<div class="menu apps-menu"><div class="menu-heading">Switch App</div>${_}</div>`:""}
          </div>`:""}
          <div class="menu-wrap">
            <button class="trigger" type="button" data-toggle-account aria-expanded="${this.openMenu==="account"}">
              <span class="avatar">${M}</span>
              <span class="user-name">${n(k)}</span>
              <span class="caret" aria-hidden="true">v</span>
            </button>
            ${this.openMenu==="account"?`<div class="menu"><div class="menu-heading">Account</div>${S}</div>`:""}
          </div>
        </div>
      </header>
    `,this.bindEvents()}}function $(e=o){typeof window>"u"||window.customElements.get(e)||window.customElements.define(e,y)}$()})();
