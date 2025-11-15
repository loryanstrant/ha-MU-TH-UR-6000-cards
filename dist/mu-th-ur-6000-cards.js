/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let s=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=r.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&r.set(i,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new s(r,t,i)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:n,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,g=p.trustedTypes,m=g?g.emptyScript:"",f=p.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!n(t,e),_={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&c(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const a=r?.call(this);s?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(e)i.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of r){const r=document.createElement("style"),s=t.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=r;const a=s.fromAttribute(e,t.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const r=this.constructor,s=this[t];if(i??=r.getPropertyOptions(t),!((i.hasChanged??y)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:s},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==s||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,f?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,w=$.trustedTypes,A=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,k=`<${C}>`,U=document,T=()=>U.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,N="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,D=/>/g,I=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,H=/"/g,L=/^(?:script|style|textarea|title)$/i,Y=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),j=new WeakMap,V=U.createTreeWalker(U,129);function G(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const F=(t,e)=>{const i=t.length-1,r=[];let s,a=2===e?"<svg>":3===e?"<math>":"",o=z;for(let e=0;e<i;e++){const i=t[e];let n,c,l=-1,d=0;for(;d<i.length&&(o.lastIndex=d,c=o.exec(i),null!==c);)d=o.lastIndex,o===z?"!--"===c[1]?o=O:void 0!==c[1]?o=D:void 0!==c[2]?(L.test(c[2])&&(s=RegExp("</"+c[2],"g")),o=I):void 0!==c[3]&&(o=I):o===I?">"===c[0]?(o=s??z,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,n=c[1],o=void 0===c[3]?I:'"'===c[3]?H:P):o===H||o===P?o=I:o===O||o===D?o=z:(o=I,s=void 0);const h=o===I&&t[e+1].startsWith("/>")?" ":"";a+=o===z?i+k:l>=0?(r.push(n),i.slice(0,l)+E+i.slice(l)+S+h):i+S+(-2===l?e:h)}return[G(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class q{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,a=0;const o=t.length-1,n=this.parts,[c,l]=F(t,e);if(this.el=q.createElement(c,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=V.nextNode())&&n.length<o;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(E)){const e=l[a++],i=r.getAttribute(t).split(S),o=/([.?@])?(.*)/.exec(e);n.push({type:1,index:s,name:o[2],strings:i,ctor:"."===o[1]?X:"?"===o[1]?tt:"@"===o[1]?et:Q}),r.removeAttribute(t)}else t.startsWith(S)&&(n.push({type:6,index:s}),r.removeAttribute(t));if(L.test(r.tagName)){const t=r.textContent.split(S),e=t.length-1;if(e>0){r.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],T()),V.nextNode(),n.push({type:2,index:++s});r.append(t[e],T())}}}else if(8===r.nodeType)if(r.data===C)n.push({type:2,index:s});else{let t=-1;for(;-1!==(t=r.data.indexOf(S,t+1));)n.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,r){if(e===B)return e;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const a=R(e)?void 0:e._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),void 0===a?s=void 0:(s=new a(t),s._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(e=K(t,s._$AS(t,e.values),s,r)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??U).importNode(e,!0);V.currentNode=r;let s=V.nextNode(),a=0,o=0,n=i[0];for(;void 0!==n;){if(a===n.index){let e;2===n.type?e=new Z(s,s.nextSibling,this,t):1===n.type?e=new n.ctor(s,n.name,n.strings,this,t):6===n.type&&(e=new it(s,this,t)),this._$AV.push(e),n=i[++o]}a!==n?.index&&(s=V.nextNode(),a++)}return V.currentNode=U,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),R(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new J(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new q(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new Z(this.O(T()),this.O(T()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,r){const s=this.strings;let a=!1;if(void 0===s)t=K(this,t,e,0),a=!R(t)||t!==this._$AH&&t!==B,a&&(this._$AH=t);else{const r=t;let o,n;for(t=s[0],o=0;o<s.length-1;o++)n=K(this,r[i+o],e,o),n===B&&(n=this._$AH[o]),a||=!R(n)||n!==this._$AH[o],n===W?t=W:t!==W&&(t+=(n??"")+s[o+1]),this._$AH[o]=n}a&&!r&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class et extends Q{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??W)===B)return;const i=this._$AH,r=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==W&&(i===W||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const rt=$.litHtmlPolyfillSupport;rt?.(q,Z),($.litHtmlVersions??=[]).push("3.3.1");const st=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let s=r._$litPart$;if(void 0===s){const t=i?.renderBefore??null;r._$litPart$=s=new Z(e.insertBefore(T(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}at._$litElement$=!0,at.finalized=!0,st.litElementHydrateSupport?.({LitElement:at});const ot=st.litElementPolyfillSupport;ot?.({LitElement:at}),(st.litElementVersions??=[]).push("4.2.1");const nt=a`
  :host {
    --muthur-primary-color: #00ff41;
    --muthur-secondary-color: #008f11;
    --muthur-background-color: #000000;
    --muthur-border-color: #00ff41;
    --muthur-text-color: #00ff41;
    --muthur-glow-color: rgba(0, 255, 65, 0.5);
    --muthur-font-family: 'Courier New', 'Monaco', monospace;
    --muthur-scanline-opacity: 0.1;
  }

  .card {
    background-color: var(--muthur-background-color);
    color: var(--muthur-text-color);
    border: 2px solid var(--muthur-border-color);
    box-shadow: 
      0 0 10px var(--muthur-glow-color),
      inset 0 0 20px rgba(0, 255, 65, 0.1);
    padding: 16px;
    border-radius: 4px;
    font-family: var(--muthur-font-family);
    position: relative;
    overflow: hidden;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0px,
      rgba(0, 0, 0, 0) 2px,
      rgba(0, 255, 65, var(--muthur-scanline-opacity)) 2px,
      rgba(0, 255, 65, var(--muthur-scanline-opacity)) 4px
    );
    pointer-events: none;
    z-index: 1;
  }

  .card-content {
    position: relative;
    z-index: 2;
    text-shadow: 0 0 5px var(--muthur-glow-color);
  }

  .card-header {
    font-size: 0.9em;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--muthur-border-color);
    font-weight: bold;
  }

  .card-header::before {
    content: '> ';
    color: var(--muthur-primary-color);
  }

  .blinking-cursor {
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  .status-indicator {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 8px;
    box-shadow: 0 0 5px currentColor;
  }

  .status-ok {
    background-color: var(--muthur-primary-color);
  }

  .status-warning {
    background-color: #ffff00;
  }

  .status-error {
    background-color: #ff0000;
  }

  /* Icon styling to align with green monochrome theme */
  .muthur-icon {
    filter: grayscale(100%) brightness(1.2) sepia(100%) hue-rotate(60deg) saturate(5);
    display: inline-block;
  }
`;class ct extends at{static get properties(){return{hass:{type:Object},config:{type:Object}}}setConfig(t){if(!t)throw new Error("Invalid configuration");this.config=t}getCardSize(){return 3}}customElements.define("muthur-status-card",class extends ct{static get styles(){return[nt,a`
        .status-grid {
          display: grid;
          gap: 12px;
        }

        .status-item {
          display: flex;
          align-items: center;
          padding: 8px;
          background-color: rgba(0, 255, 65, 0.05);
          border-left: 2px solid var(--muthur-border-color);
        }

        .status-label {
          flex: 1;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 0.85em;
          letter-spacing: 1px;
        }

        .status-value {
          font-family: var(--muthur-font-family);
          font-size: 1.1em;
          margin-left: 8px;
        }

        .system-status {
          margin-top: 16px;
          padding: 12px;
          border: 1px solid var(--muthur-secondary-color);
          background-color: rgba(0, 255, 65, 0.03);
        }

        .system-status-header {
          font-size: 0.75em;
          margin-bottom: 8px;
          opacity: 0.8;
        }

        .system-message {
          font-family: var(--muthur-font-family);
          line-height: 1.6;
        }

        /* Red/Warning theme styles */
        .card.theme-red {
          --muthur-primary-color: #ff0000;
          --muthur-secondary-color: #8f0000;
          --muthur-border-color: #ff0000;
          --muthur-text-color: #ff0000;
          --muthur-glow-color: rgba(255, 0, 0, 0.5);
        }

        .card.theme-red .status-item {
          background-color: rgba(255, 0, 0, 0.05);
          border-left-color: #ff0000;
        }

        .card.theme-red .system-status {
          border-color: #8f0000;
          background-color: rgba(255, 0, 0, 0.03);
        }

        /* Yellow/Caution theme styles */
        .card.theme-yellow {
          --muthur-primary-color: #ffff00;
          --muthur-secondary-color: #8f8f00;
          --muthur-border-color: #ffff00;
          --muthur-text-color: #ffff00;
          --muthur-glow-color: rgba(255, 255, 0, 0.5);
        }

        .card.theme-yellow .status-item {
          background-color: rgba(255, 255, 0, 0.05);
          border-left-color: #ffff00;
        }

        .card.theme-yellow .system-status {
          border-color: #8f8f00;
          background-color: rgba(255, 255, 0, 0.03);
        }
      `]}render(){if(!this.config||!this.hass)return Y``;const t=this.config.entities||[],e=this.config.title||"SYSTEM STATUS",i=this.config.message||"ALL SYSTEMS OPERATIONAL",r=this.config.theme||"green";return Y`
      <div class="card ${"green"!==r?`theme-${r}`:""}">
        <div class="card-content">
          <div class="card-header">${e}</div>
          
          <div class="status-grid">
            ${t.map(t=>{const e="string"==typeof t?t:t.entity,i=this.hass.states[e],r="object"==typeof t&&t.name||(i?i.attributes.friendly_name:e);if(!i)return Y`
                  <div class="status-item">
                    <span class="status-indicator status-error"></span>
                    <span class="status-label">${r}</span>
                    <span class="status-value">UNAVAILABLE</span>
                  </div>
                `;const s=i.state,a=i.attributes.unit_of_measurement||"";let o="status-ok";return"unavailable"===s||"unknown"===s?o="status-error":"off"!==s&&"closed"!==s&&0!==parseFloat(s)||(o="status-warning"),Y`
                <div class="status-item">
                  <span class="status-indicator ${o}"></span>
                  <span class="status-label">${r}</span>
                  <span class="status-value">${s} ${a}</span>
                </div>
              `})}
          </div>

          ${!1!==this.config.show_message?Y`
            <div class="system-status">
              <div class="system-status-header">MU/TH/UR 6000 :: STATUS MESSAGE</div>
              <div class="system-message">
                ${i}<span class="blinking-cursor">█</span>
              </div>
            </div>
          `:""}
        </div>
      </div>
    `}setConfig(t){if(!t.entities)throw new Error("You need to define entities");super.setConfig(t)}static getConfigElement(){return document.createElement("muthur-status-card-editor")}static getStubConfig(){return{entities:[],title:"SYSTEM STATUS",message:"ALL SYSTEMS OPERATIONAL",show_message:!0,theme:"green"}}});customElements.define("muthur-sensor-card",class extends ct{static get styles(){return[nt,a`
        .sensor-display {
          text-align: center;
          padding: 24px 16px;
        }

        .sensor-value {
          font-size: 3em;
          font-weight: bold;
          line-height: 1;
          margin: 16px 0;
          font-family: var(--muthur-font-family);
          text-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .sensor-unit {
          font-size: 0.4em;
          margin-left: 8px;
          opacity: 0.8;
        }

        .sensor-name {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .sensor-state {
          font-size: 0.85em;
          opacity: 0.7;
          margin-top: 16px;
        }

        .sensor-graph {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--muthur-secondary-color);
        }

        .graph-bar {
          display: flex;
          align-items: center;
          margin: 8px 0;
        }

        .graph-label {
          width: 100px;
          font-size: 0.75em;
          text-transform: uppercase;
        }

        .graph-fill {
          flex: 1;
          height: 8px;
          background: linear-gradient(
            90deg,
            var(--muthur-primary-color),
            var(--muthur-secondary-color)
          );
          box-shadow: 0 0 5px var(--muthur-glow-color);
          transition: width 0.3s ease;
        }

        .graph-container {
          flex: 1;
          height: 8px;
          background-color: rgba(0, 255, 65, 0.1);
          border: 1px solid var(--muthur-secondary-color);
          position: relative;
          overflow: hidden;
        }
      `]}render(){if(!this.config||!this.hass)return Y``;const t=this.config.entity,e=this.hass.states[t];if(!e)return Y`
        <div class="card">
          <div class="card-content">
            <div class="card-header">ERROR</div>
            <div class="sensor-display">
              Entity ${t} not found
            </div>
          </div>
        </div>
      `;const i=e.state,r=this.config.name||e.attributes.friendly_name||t,s=this.config.unit||e.attributes.unit_of_measurement||"",a=!1!==this.config.show_graph,o=parseFloat(i),n=this.config.max||100,c=isNaN(o)?0:Math.min(100,o/n*100);return Y`
      <div class="card">
        <div class="card-content">
          <div class="card-header">SENSOR DATA</div>
          
          <div class="sensor-display">
            <div class="sensor-name">${r}</div>
            <div class="sensor-value">
              ${i}<span class="sensor-unit">${s}</span>
            </div>
            ${e.attributes.state_class?Y`
              <div class="sensor-state">
                STATE: ${e.attributes.state_class.toUpperCase()}
              </div>
            `:""}
          </div>

          ${a&&!isNaN(o)?Y`
            <div class="sensor-graph">
              <div class="graph-bar">
                <div class="graph-label">LEVEL</div>
                <div class="graph-container">
                  <div class="graph-fill" style="width: ${c}%"></div>
                </div>
              </div>
            </div>
          `:""}
        </div>
      </div>
    `}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");super.setConfig(t)}static getConfigElement(){return document.createElement("muthur-sensor-card-editor")}static getStubConfig(){return{entity:"",name:"",unit:"",show_graph:!0,max:100}}});customElements.define("muthur-button-card",class extends ct{static get styles(){return[nt,a`
        .button-container {
          display: grid;
          gap: 12px;
          padding: 8px 0;
        }

        .muthur-button {
          background: rgba(0, 255, 65, 0.1);
          border: 2px solid var(--muthur-border-color);
          color: var(--muthur-text-color);
          padding: 16px 24px;
          font-family: var(--muthur-font-family);
          font-size: 1em;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          text-shadow: 0 0 5px var(--muthur-glow-color);
        }

        .muthur-button:hover {
          background: rgba(0, 255, 65, 0.2);
          box-shadow: 
            0 0 15px var(--muthur-glow-color),
            inset 0 0 15px var(--muthur-glow-color);
        }

        .muthur-button:active {
          background: rgba(0, 255, 65, 0.3);
          transform: scale(0.98);
        }

        .muthur-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 65, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }

        .muthur-button:hover::before {
          left: 100%;
        }

        .button-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .button-icon {
          font-size: 1.2em;
          filter: grayscale(100%) brightness(1.2) sepia(100%) hue-rotate(60deg) saturate(5);
        }

        .button-state {
          font-size: 0.75em;
          opacity: 0.7;
          margin-top: 4px;
        }

        .button-grid-2 {
          grid-template-columns: repeat(2, 1fr);
        }

        .button-grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }
      `]}render(){if(!this.config||!this.hass)return Y``;const t=this.config.title||"TERMINAL CONTROL",e=this.config.buttons||[],i=this.config.columns||1,r=i>1?`button-grid-${Math.min(i,3)}`:"";return Y`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          
          <div class="button-container ${r}">
            ${e.map(t=>this.renderButton(t))}
          </div>
        </div>
      </div>
    `}renderButton(t){const e=t.entity?this.hass.states[t.entity]:null,i=t.name||(e?e.attributes.friendly_name:"Button"),r=t.icon||(e?e.attributes.icon:null),s=!1!==t.show_state;return Y`
      <button 
        class="muthur-button"
        @click=${()=>this.handleButtonClick(t)}
      >
        <div class="button-content">
          ${r?Y`<span class="button-icon">${r}</span>`:""}
          <span>${i}</span>
        </div>
        ${e&&s?Y`
          <div class="button-state">
            ${e.state.toUpperCase()}
          </div>
        `:""}
      </button>
    `}handleButtonClick(t){if(t.tap_action)this.handleAction(t.tap_action,t.entity);else if(t.entity){const e=(t.action||"toggle").split(".")[1]||"toggle",i=t.entity.split(".")[0];this.hass.callService(i,e,{entity_id:t.entity})}else if(t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{})}}handleAction(t,e){const i=t.action||"toggle";switch(i){case"navigate":t.navigation_path&&(window.history.pushState(null,"",t.navigation_path),window.dispatchEvent(new CustomEvent("location-changed")));break;case"url":t.url_path&&window.open(t.url_path,"_blank");break;case"more-info":{const i=t.entity||e;if(i){const t=new Event("hass-more-info",{bubbles:!0,composed:!0});t.detail={entityId:i},this.dispatchEvent(t)}}break;case"call-service":if(t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{})}break;case"toggle":if(e){const t=e.split(".")[0];this.hass.callService(t,"toggle",{entity_id:e})}break;case"none":break;default:if(e){const t=e.split(".")[0];this.hass.callService(t,i,{entity_id:e})}}}setConfig(t){if(!t.buttons||!Array.isArray(t.buttons))throw new Error("You need to define buttons as an array");super.setConfig(t)}static getConfigElement(){return document.createElement("muthur-button-card-editor")}static getStubConfig(){return{title:"TERMINAL CONTROL",buttons:[],columns:1}}});customElements.define("muthur-text-card",class extends ct{static get styles(){return[nt,a`
        .text-container {
          padding: 8px 0;
        }

        .text-content {
          font-family: var(--muthur-font-family);
          line-height: 1.6;
          white-space: pre-wrap;
        }

        .text-small {
          font-size: 0.85em;
        }

        .text-medium {
          font-size: 1em;
        }

        .text-large {
          font-size: 1.2em;
        }

        .text-center {
          text-align: center;
        }

        .text-right {
          text-align: right;
        }

        .terminal-prompt::before {
          content: '> ';
          color: var(--muthur-primary-color);
        }

        .typing-effect {
          overflow: hidden;
          border-right: 2px solid var(--muthur-primary-color);
          white-space: nowrap;
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: var(--muthur-primary-color); }
        }
      `]}render(){if(!this.config)return Y``;const t=this.config.title||"MESSAGE",e=this.config.size||"medium",i=this.config.align||"left",r=!1!==this.config.show_prompt,s=!0===this.config.typing_effect;let a=this.config.content||"";if(this.config.entity&&this.config.state_content&&this.hass){const t=this.hass.states[this.config.entity];if(t){const e=t.state;this.config.state_content[e]?a=this.config.state_content[e]:this.config.state_content.default&&(a=this.config.state_content.default),a=this._replaceTemplates(a,t)}}return Y`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          
          <div class="text-container">
            <div class="${`text-content text-${e} text-${i}`} ${r?"terminal-prompt":""} ${s?"typing-effect":""}">
              ${a}
            </div>
          </div>
        </div>
      </div>
    `}_replaceTemplates(t,e){if(!t||!e)return t;let i=t;return i=i.replace(/\{\{state\}\}/g,e.state),e.attributes.friendly_name&&(i=i.replace(/\{\{friendly_name\}\}/g,e.attributes.friendly_name)),e.attributes.unit_of_measurement&&(i=i.replace(/\{\{unit\}\}/g,e.attributes.unit_of_measurement)),i=i.replace(/\{\{attribute\.(\w+)\}\}/g,(t,i)=>e.attributes[i]||t),i}static getConfigElement(){return document.createElement("muthur-text-card-editor")}static getStubConfig(){return{title:"MESSAGE",content:"ENTER YOUR MESSAGE HERE",entity:"",state_content:{},size:"medium",align:"left",show_prompt:!0,typing_effect:!1}}});customElements.define("muthur-gauge-card",class extends ct{static get styles(){return[nt,a`
        .gauge-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 16px;
        }

        .gauge-name {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 24px;
          text-align: center;
        }

        .gauge-display {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 16px 0;
        }

        .gauge-svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .gauge-bg {
          fill: none;
          stroke: rgba(0, 255, 65, 0.1);
          stroke-width: 20;
        }

        .gauge-fill {
          fill: none;
          stroke: var(--muthur-primary-color);
          stroke-width: 20;
          stroke-linecap: round;
          transition: stroke-dasharray 0.5s ease;
          filter: drop-shadow(0 0 5px var(--muthur-glow-color));
        }

        .gauge-value {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2.5em;
          font-weight: bold;
          font-family: var(--muthur-font-family);
          text-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .gauge-unit {
          font-size: 0.4em;
          margin-left: 4px;
          opacity: 0.8;
        }

        .gauge-info {
          display: flex;
          justify-content: space-around;
          width: 100%;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--muthur-secondary-color);
        }

        .gauge-stat {
          text-align: center;
          font-size: 0.85em;
        }

        .gauge-stat-label {
          opacity: 0.7;
          margin-bottom: 4px;
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .gauge-stat-value {
          font-weight: bold;
        }
      `]}render(){if(!this.config||!this.hass)return Y``;const t=this.config.entity,e=this.hass.states[t];if(!e)return Y`
        <div class="card">
          <div class="card-content">
            <div class="card-header">ERROR</div>
            <div class="gauge-container">
              Entity ${t} not found
            </div>
          </div>
        </div>
      `;const i=parseFloat(e.state),r=this.config.name||e.attributes.friendly_name||t,s=this.config.unit||e.attributes.unit_of_measurement||"",a=this.config.min||0,o=this.config.max||100,n=this.config.severity||{},c=isNaN(i)?0:Math.min(100,Math.max(0,(i-a)/(o-a)*100));let l="var(--muthur-primary-color)";void 0!==n.red&&i>=n.red?l="#ff0000":void 0!==n.yellow&&i>=n.yellow&&(l="#ffff00");const d=2*Math.PI*90;return Y`
      <div class="card">
        <div class="card-content">
          <div class="card-header">GAUGE MONITOR</div>
          
          <div class="gauge-container">
            <div class="gauge-name">${r}</div>
            
            <div class="gauge-display">
              <svg class="gauge-svg" viewBox="0 0 200 200">
                <circle
                  class="gauge-bg"
                  cx="100"
                  cy="100"
                  r="${90}"
                />
                <circle
                  class="gauge-fill"
                  cx="100"
                  cy="100"
                  r="${90}"
                  style="stroke: ${l}; stroke-dasharray: ${`${c/100*d} ${d}`};"
                />
              </svg>
              <div class="gauge-value">
                ${isNaN(i)?"N/A":i.toFixed(this.config.decimals||1)}
                <span class="gauge-unit">${s}</span>
              </div>
            </div>

            <div class="gauge-info">
              <div class="gauge-stat">
                <div class="gauge-stat-label">MIN</div>
                <div class="gauge-stat-value">${a} ${s}</div>
              </div>
              <div class="gauge-stat">
                <div class="gauge-stat-label">MAX</div>
                <div class="gauge-stat-value">${o} ${s}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");super.setConfig(t)}static getConfigElement(){return document.createElement("muthur-gauge-card-editor")}static getStubConfig(){return{entity:"",name:"",unit:"",min:0,max:100,decimals:1,severity:{}}}});customElements.define("muthur-clock-card",class extends ct{static get properties(){return{...super.properties,_time:{type:String},_date:{type:String}}}static get styles(){return[nt,a`
        .clock-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 16px;
        }

        .clock-title {
          font-size: 1em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 24px;
          opacity: 0.8;
        }

        .clock-display {
          font-size: 3.5em;
          font-weight: bold;
          font-family: var(--muthur-font-family);
          text-shadow: 0 0 15px var(--muthur-glow-color);
          margin: 16px 0;
          letter-spacing: 4px;
        }

        .clock-seconds {
          font-size: 0.6em;
          opacity: 0.8;
        }

        .date-display {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--muthur-secondary-color);
        }

        .date-separator {
          margin: 0 8px;
          opacity: 0.5;
        }

        .timezone-display {
          font-size: 0.85em;
          opacity: 0.7;
          margin-top: 12px;
        }

        .digital-separator {
          animation: blink-separator 1s infinite;
        }

        @keyframes blink-separator {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0.3; }
        }
      `]}constructor(){super(),this._time="",this._date="",this._updateTime()}connectedCallback(){super.connectedCallback(),this._interval=setInterval(()=>this._updateTime(),1e3)}disconnectedCallback(){super.disconnectedCallback(),this._interval&&clearInterval(this._interval)}_updateTime(){const t=new Date,e=!1!==this.config?.format_24h;let i=t.getHours();const r=t.getMinutes(),s=t.getSeconds();let a="";e||(a=i>=12?" PM":" AM",i=i%12||12),this._time=`${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}${a}`,this._seconds=String(s).padStart(2,"0");const o=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"],n=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];if(!1!==this.config?.show_date){const e=o[t.getDay()],i=n[t.getMonth()],r=t.getDate(),s=t.getFullYear();this._date=`${e} // ${i} ${r}, ${s}`}}render(){if(!this.config)return Y``;const t=this.config.title||"SYSTEM TIME",e=!1!==this.config.show_seconds,i=!1!==this.config.show_date,r=!0===this.config.show_timezone,s=Intl.DateTimeFormat().resolvedOptions().timeZone;return Y`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          
          <div class="clock-container">
            <div class="clock-display">
              ${this._time}${e?Y`<span class="digital-separator">:</span><span class="clock-seconds">${this._seconds}</span>`:""}
            </div>

            ${i?Y`
              <div class="date-display">${this._date}</div>
            `:""}

            ${r?Y`
              <div class="timezone-display">${s}</div>
            `:""}
          </div>
        </div>
      </div>
    `}static getConfigElement(){return document.createElement("muthur-clock-card-editor")}static getStubConfig(){return{title:"SYSTEM TIME",format_24h:!0,show_seconds:!0,show_date:!0,show_timezone:!1}}});customElements.define("muthur-glance-card",class extends ct{static get styles(){return[nt,a`
        .glance-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 12px;
          padding: 8px 0;
        }

        .glance-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 12px;
          background-color: rgba(0, 255, 65, 0.05);
          border: 1px solid var(--muthur-secondary-color);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .glance-item:hover {
          background-color: rgba(0, 255, 65, 0.1);
          border-color: var(--muthur-border-color);
          box-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .glance-icon {
          font-size: 2em;
          margin-bottom: 8px;
          filter: grayscale(100%) brightness(1.2) sepia(100%) hue-rotate(60deg) saturate(5);
        }

        .glance-state {
          font-size: 1.4em;
          font-weight: bold;
          margin: 4px 0;
          font-family: var(--muthur-font-family);
          text-shadow: 0 0 5px var(--muthur-glow-color);
        }

        .glance-unit {
          font-size: 0.7em;
          margin-left: 2px;
          opacity: 0.8;
        }

        .glance-name {
          font-size: 0.75em;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-align: center;
          margin-top: 4px;
          opacity: 0.9;
        }

        .glance-indicator {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          box-shadow: 0 0 5px currentColor;
        }

        .columns-2 {
          grid-template-columns: repeat(2, 1fr);
        }

        .columns-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        .columns-4 {
          grid-template-columns: repeat(4, 1fr);
        }

        .columns-5 {
          grid-template-columns: repeat(5, 1fr);
        }
      `]}render(){if(!this.config||!this.hass)return Y``;const t=this.config.title||"SYSTEM GLANCE",e=this.config.entities||[],i=this.config.columns,r=!1!==this.config.show_name;let s="";return i&&i>=2&&i<=5&&(s=`columns-${i}`),Y`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          
          <div class="glance-grid ${s}">
            ${e.map(t=>this.renderEntity(t,r))}
          </div>
        </div>
      </div>
    `}renderEntity(t,e){const i="string"==typeof t?t:t.entity,r=this.hass.states[i];if(!r)return Y`
        <div class="glance-item">
          <div class="glance-state">N/A</div>
          ${e?Y`<div class="glance-name">${i}</div>`:""}
        </div>
      `;const s="object"==typeof t&&t.name||r.attributes.friendly_name||i,a="object"==typeof t&&t.icon||r.attributes.icon||this._getDefaultIcon(r),o=r.state,n=r.attributes.unit_of_measurement||"";let c="var(--muthur-primary-color)";return"unavailable"===o||"unknown"===o?c="#ff0000":"off"!==o&&"closed"!==o||(c="#666666"),Y`
      <div class="glance-item" @click=${()=>this._handleClick(i)}>
        <span class="glance-indicator" style="background-color: ${c};"></span>
        ${a?Y`<div class="glance-icon">${this._renderIcon(a)}</div>`:""}
        <div class="glance-state">
          ${o.toUpperCase()}
          ${n?Y`<span class="glance-unit">${n}</span>`:""}
        </div>
        ${e?Y`<div class="glance-name">${s}</div>`:""}
      </div>
    `}_renderIcon(t){return{"mdi:lightbulb":"💡","mdi:thermometer":"🌡️","mdi:water-percent":"💧","mdi:fan":"🌀","mdi:door":"🚪","mdi:motion-sensor":"🔍","mdi:power":"⚡"}[t]||t}_getDefaultIcon(t){return{light:"💡",switch:"⚡",binary_sensor:"🔍",sensor:"📊",climate:"🌡️",fan:"🌀",cover:"🚪",lock:"🔒"}[t.entity_id.split(".")[0]]||"📍"}_handleClick(t){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}});this.dispatchEvent(e)}setConfig(t){if(!t.entities||!Array.isArray(t.entities))throw new Error("You need to define entities as an array");super.setConfig(t)}static getConfigElement(){return document.createElement("muthur-glance-card-editor")}static getStubConfig(){return{title:"SYSTEM GLANCE",entities:[],columns:null,show_name:!0}}});customElements.define("muthur-light-card",class extends ct{static get styles(){return[nt,a`
        .light-container {
          padding: 8px 0;
        }

        .light-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .light-name {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
          flex: 1;
        }

        .light-toggle {
          background: rgba(0, 255, 65, 0.1);
          border: 2px solid var(--muthur-border-color);
          color: var(--muthur-text-color);
          padding: 12px 24px;
          font-family: var(--muthur-font-family);
          font-size: 1em;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-shadow: 0 0 5px var(--muthur-glow-color);
        }

        .light-toggle:hover {
          background: rgba(0, 255, 65, 0.2);
          box-shadow: 0 0 15px var(--muthur-glow-color);
        }

        .light-toggle.on {
          background: rgba(0, 255, 65, 0.3);
          box-shadow: 0 0 15px var(--muthur-glow-color);
        }

        .light-state {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 16px 0;
          padding: 12px;
          background-color: rgba(0, 255, 65, 0.05);
          border-left: 2px solid var(--muthur-border-color);
        }

        .light-icon {
          font-size: 2em;
          filter: grayscale(100%) brightness(1.2) sepia(100%) hue-rotate(60deg) saturate(5);
        }

        .light-status {
          flex: 1;
        }

        .light-status-label {
          font-size: 0.75em;
          opacity: 0.7;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .light-status-value {
          font-size: 1.2em;
          font-weight: bold;
          font-family: var(--muthur-font-family);
        }

        .brightness-control {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--muthur-secondary-color);
        }

        .brightness-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .brightness-value {
          font-weight: bold;
          font-family: var(--muthur-font-family);
        }

        .brightness-slider {
          width: 100%;
          height: 8px;
          -webkit-appearance: none;
          appearance: none;
          background: rgba(0, 255, 65, 0.1);
          border: 1px solid var(--muthur-secondary-color);
          outline: none;
          cursor: pointer;
        }

        .brightness-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: var(--muthur-primary-color);
          border: 2px solid var(--muthur-border-color);
          cursor: pointer;
          box-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .brightness-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: var(--muthur-primary-color);
          border: 2px solid var(--muthur-border-color);
          cursor: pointer;
          box-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .brightness-bar {
          position: relative;
          height: 8px;
          background: rgba(0, 255, 65, 0.1);
          border: 1px solid var(--muthur-secondary-color);
          margin-top: 8px;
          overflow: hidden;
        }

        .brightness-fill {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: linear-gradient(
            90deg,
            var(--muthur-primary-color),
            var(--muthur-secondary-color)
          );
          box-shadow: 0 0 10px var(--muthur-glow-color);
          transition: width 0.3s ease;
        }

        .color-temp-control {
          margin-top: 16px;
        }

        .unavailable {
          opacity: 0.5;
        }
      `]}render(){if(!this.config||!this.hass)return Y``;const t=this.config.entity,e=this.hass.states[t];if(!e)return Y`
        <div class="card">
          <div class="card-content">
            <div class="card-header">ERROR</div>
            <div class="light-container">
              Entity ${t} not found
            </div>
          </div>
        </div>
      `;const i=this.config.name||e.attributes.friendly_name||t,r="on"===e.state,s="unavailable"===e.state,a=e.attributes.brightness,o=e.attributes.supported_color_modes?.includes("brightness")||void 0!==a,n=a?Math.round(a/255*100):0;return Y`
      <div class="card">
        <div class="card-content">
          <div class="card-header">ILLUMINATION CONTROL</div>
          
          <div class="light-container ${s?"unavailable":""}">
            <div class="light-header">
              <div class="light-name">${i}</div>
              <button 
                class="light-toggle ${r?"on":""}"
                @click=${()=>this._toggle()}
                ?disabled=${s}
              >
                ${r?"ON":"OFF"}
              </button>
            </div>

            <div class="light-state">
              <div class="light-icon">${r?"💡":"⚫"}</div>
              <div class="light-status">
                <div class="light-status-label">STATUS</div>
                <div class="light-status-value">
                  ${s?"UNAVAILABLE":r?"ACTIVE":"INACTIVE"}
                </div>
              </div>
            </div>

            ${o&&r?Y`
              <div class="brightness-control">
                <div class="brightness-label">
                  <span>BRIGHTNESS</span>
                  <span class="brightness-value">${n}%</span>
                </div>
                <input
                  type="range"
                  class="brightness-slider"
                  min="0"
                  max="100"
                  .value=${String(n)}
                  @input=${t=>this._setBrightness(t.target.value)}
                  @change=${t=>this._setBrightness(t.target.value)}
                />
                <div class="brightness-bar">
                  <div class="brightness-fill" style="width: ${n}%"></div>
                </div>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}_toggle(){const t=this.config.entity,e="on"===this.hass.states[t].state?"turn_off":"turn_on";this.hass.callService("light",e,{entity_id:t})}_setBrightness(t){const e=Math.round(t/100*255);this.hass.callService("light","turn_on",{entity_id:this.config.entity,brightness:e})}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");super.setConfig(t)}static getConfigElement(){return document.createElement("muthur-light-card-editor")}static getStubConfig(){return{entity:"",name:""}}});customElements.define("muthur-picture-card",class extends ct{static get styles(){return[nt,a`
        .picture-container {
          padding: 8px 0;
        }

        .picture-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          border: 1px solid var(--muthur-border-color);
          box-shadow: inset 0 0 20px rgba(0, 255, 65, 0.1);
        }

        .picture-image {
          width: 100%;
          height: auto;
          display: block;
          filter: 
            grayscale(100%) 
            brightness(0.8) 
            contrast(1.2)
            sepia(100%)
            hue-rotate(50deg);
          opacity: 0.9;
        }

        .picture-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 0px,
            rgba(0, 0, 0, 0) 2px,
            rgba(0, 255, 65, 0.05) 2px,
            rgba(0, 255, 65, 0.05) 4px
          );
          pointer-events: none;
        }

        .picture-info {
          margin-top: 12px;
          padding: 12px;
          background-color: rgba(0, 255, 65, 0.05);
          border-left: 2px solid var(--muthur-border-color);
        }

        .picture-title {
          font-size: 1em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
          font-weight: bold;
        }

        .picture-caption {
          font-size: 0.85em;
          line-height: 1.4;
          opacity: 0.9;
          font-family: var(--muthur-font-family);
        }

        .picture-timestamp {
          font-size: 0.75em;
          opacity: 0.7;
          margin-top: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .entity-state {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 12px;
          padding: 8px 12px;
          background-color: rgba(0, 255, 65, 0.05);
          border: 1px solid var(--muthur-secondary-color);
        }

        .entity-label {
          flex: 1;
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .entity-value {
          font-weight: bold;
          font-family: var(--muthur-font-family);
        }

        .camera-refresh {
          background: rgba(0, 255, 65, 0.1);
          border: 2px solid var(--muthur-border-color);
          color: var(--muthur-text-color);
          padding: 8px 16px;
          font-family: var(--muthur-font-family);
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          margin-top: 12px;
          width: 100%;
          transition: all 0.3s ease;
        }

        .camera-refresh:hover {
          background: rgba(0, 255, 65, 0.2);
          box-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .loading {
          text-align: center;
          padding: 40px;
          font-size: 1em;
          opacity: 0.7;
        }

        .error {
          text-align: center;
          padding: 40px;
          color: #ff0000;
        }
      `]}static get properties(){return{...super.properties,_imageUrl:{type:String},_loading:{type:Boolean},_error:{type:Boolean},_refreshTimer:{type:Number}}}constructor(){super(),this._imageUrl="",this._loading=!1,this._error=!1,this._refreshTimer=null}connectedCallback(){super.connectedCallback(),this._startAutoRefresh()}disconnectedCallback(){super.disconnectedCallback(),this._stopAutoRefresh()}updated(t){super.updated(t),t.has("config")&&(this._stopAutoRefresh(),this._startAutoRefresh()),(t.has("config")||t.has("hass"))&&this._updateImage()}_startAutoRefresh(){if(!this.config||!this.config.entity)return;const t=this.config.camera_refresh_interval;t&&t>0&&(this._stopAutoRefresh(),this._refreshTimer=setInterval(()=>{this._updateImage()},1e3*t))}_stopAutoRefresh(){this._refreshTimer&&(clearInterval(this._refreshTimer),this._refreshTimer=null)}_updateImage(){if(this.config&&this.hass)if(this.config.entity){const t=this.hass.states[this.config.entity];if(t&&t.attributes.entity_picture){const e=t.attributes.entity_picture.split("?")[0];this._imageUrl=`${e}?t=${Date.now()}`,this._error=!1}}else this.config.image&&(this._imageUrl=this.config.image,this._error=!1)}render(){if(!this.config)return Y``;const t=this.config.title||"VISUAL FEED",e=this.config.caption||"",i=!0===this.config.show_timestamp,r=this.config.entity?this.hass?.states[this.config.entity]:null;return this._loading?Y`
        <div class="card">
          <div class="card-content">
            <div class="card-header">${t}</div>
            <div class="picture-container">
              <div class="loading">LOADING IMAGE...</div>
            </div>
          </div>
        </div>
      `:this._error||!this._imageUrl?Y`
        <div class="card">
          <div class="card-content">
            <div class="card-header">${t}</div>
            <div class="picture-container">
              <div class="error">IMAGE UNAVAILABLE</div>
            </div>
          </div>
        </div>
      `:Y`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          
          <div class="picture-container">
            <div class="picture-wrapper">
              <img 
                class="picture-image" 
                src="${this._imageUrl}" 
                alt="${t}"
                @error=${()=>this._error=!0}
              />
              <div class="picture-overlay"></div>
            </div>

            ${e||r||i?Y`
              <div class="picture-info">
                ${e?Y`
                  <div class="picture-caption">${e}</div>
                `:""}
                
                ${r?Y`
                  <div class="entity-state">
                    <span class="entity-label">STATUS</span>
                    <span class="entity-value">${r.state.toUpperCase()}</span>
                  </div>
                `:""}

                ${i?Y`
                  <div class="picture-timestamp">
                    CAPTURED: ${(new Date).toLocaleString("en-US",{hour12:!1,year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}).toUpperCase()}
                  </div>
                `:""}
              </div>
            `:""}

            ${this.config.entity?Y`
              <button 
                class="camera-refresh"
                @click=${()=>this._refreshCamera()}
              >
                ⟳ REFRESH FEED
              </button>
            `:""}
          </div>
        </div>
      </div>
    `}_refreshCamera(){this.config.entity&&(this._loading=!0,this.requestUpdate(),setTimeout(()=>{this._updateImage(),this._loading=!1,this.requestUpdate()},500))}setConfig(t){if(!t.entity&&!t.image)throw new Error("You need to define either an entity (camera) or image URL");super.setConfig(t)}static getConfigElement(){return document.createElement("muthur-picture-card-editor")}static getStubConfig(){return{title:"VISUAL FEED",entity:"",image:"",caption:"",show_timestamp:!1,camera_refresh_interval:0}}});customElements.define("muthur-weather-card",class extends ct{static get styles(){return[nt,a`
        .weather-container {
          padding: 8px 0;
        }

        .weather-current {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 16px;
          background-color: rgba(0, 255, 65, 0.05);
          border-left: 2px solid var(--muthur-border-color);
          margin-bottom: 16px;
        }

        .weather-icon {
          font-size: 4em;
          line-height: 1;
          filter: grayscale(100%) brightness(1.2) sepia(100%) hue-rotate(60deg) saturate(5);
        }

        .weather-main {
          flex: 1;
        }

        .weather-temp {
          font-size: 3em;
          font-weight: bold;
          font-family: var(--muthur-font-family);
          text-shadow: 0 0 10px var(--muthur-glow-color);
          line-height: 1;
          margin-bottom: 8px;
        }

        .weather-temp-unit {
          font-size: 0.5em;
          margin-left: 4px;
        }

        .weather-condition {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .weather-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
          margin-top: 16px;
        }

        .weather-detail {
          padding: 12px;
          background-color: rgba(0, 255, 65, 0.05);
          border: 1px solid var(--muthur-secondary-color);
        }

        .weather-detail-label {
          font-size: 0.75em;
          opacity: 0.7;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .weather-detail-value {
          font-size: 1.1em;
          font-weight: bold;
          font-family: var(--muthur-font-family);
        }

        .weather-forecast {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--muthur-secondary-color);
        }

        .forecast-title {
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
          opacity: 0.9;
        }

        .forecast-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 8px;
        }

        .forecast-item {
          padding: 12px 8px;
          background-color: rgba(0, 255, 65, 0.03);
          border: 1px solid var(--muthur-secondary-color);
          text-align: center;
        }

        .forecast-day {
          font-size: 0.75em;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.9;
        }

        .forecast-icon {
          font-size: 2em;
          margin: 8px 0;
          filter: grayscale(100%) brightness(1.2) sepia(100%) hue-rotate(60deg) saturate(5);
        }

        .forecast-temp {
          font-size: 0.9em;
          font-family: var(--muthur-font-family);
          font-weight: bold;
        }

        .forecast-temp-low {
          font-size: 0.8em;
          opacity: 0.7;
          margin-left: 4px;
        }

        .attribution {
          font-size: 0.7em;
          opacity: 0.6;
          margin-top: 12px;
          text-align: center;
        }
      `]}render(){if(!this.config||!this.hass)return Y``;const t=this.config.entity,e=this.hass.states[t];if(!e)return Y`
        <div class="card">
          <div class="card-content">
            <div class="card-header">ERROR</div>
            <div class="weather-container">
              Entity ${t} not found
            </div>
          </div>
        </div>
      `;const i=this.config.name||e.attributes.friendly_name||"Weather",r=!1!==this.config.show_forecast;return Y`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${i.toUpperCase()}</div>
          
          <div class="weather-container">
            ${this._renderCurrent(e)}
            ${this._renderDetails(e)}
            ${r?this._renderForecast(e):""}
            ${e.attributes.attribution?Y`
              <div class="attribution">${e.attributes.attribution}</div>
            `:""}
          </div>
        </div>
      </div>
    `}_renderCurrent(t){const e=t.attributes.temperature,i=this.hass.config.unit_system.temperature,r=t.state,s=this._getWeatherIcon(r);return Y`
      <div class="weather-current">
        <div class="weather-icon">${s}</div>
        <div class="weather-main">
          <div class="weather-temp">
            ${e}<span class="weather-temp-unit">${i}</span>
          </div>
          <div class="weather-condition">${r}</div>
        </div>
      </div>
    `}_renderDetails(t){const e=[];if(void 0!==t.attributes.humidity&&e.push({label:"Humidity",value:`${t.attributes.humidity}%`}),void 0!==t.attributes.pressure&&e.push({label:"Pressure",value:`${t.attributes.pressure} ${t.attributes.pressure_unit||"hPa"}`}),void 0!==t.attributes.wind_speed){const i=t.attributes.wind_speed_unit||"km/h";e.push({label:"Wind Speed",value:`${t.attributes.wind_speed} ${i}`})}if(void 0!==t.attributes.wind_bearing){const i=this._getWindDirection(t.attributes.wind_bearing);e.push({label:"Wind Dir",value:i})}if(void 0!==t.attributes.visibility){const i=t.attributes.visibility_unit||"km";e.push({label:"Visibility",value:`${t.attributes.visibility} ${i}`})}return 0===e.length?"":Y`
      <div class="weather-details">
        ${e.map(t=>Y`
          <div class="weather-detail">
            <div class="weather-detail-label">${t.label}</div>
            <div class="weather-detail-value">${t.value}</div>
          </div>
        `)}
      </div>
    `}_renderForecast(t){const e=t.attributes.forecast;if(!e||0===e.length)return"";const i=this.config.forecast_days||5,r=e.slice(0,i);return Y`
      <div class="weather-forecast">
        <div class="forecast-title">FORECAST</div>
        <div class="forecast-grid">
          ${r.map(t=>this._renderForecastDay(t))}
        </div>
      </div>
    `}_renderForecastDay(t){const e=new Date(t.datetime).toLocaleDateString("en-US",{weekday:"short"}).toUpperCase(),i=this._getWeatherIcon(t.condition);return Y`
      <div class="forecast-item">
        <div class="forecast-day">${e}</div>
        <div class="forecast-icon">${i}</div>
        <div class="forecast-temp">
          ${t.temperature}°
          ${void 0!==t.templow?Y`
            <span class="forecast-temp-low">${t.templow}°</span>
          `:""}
        </div>
      </div>
    `}_getWeatherIcon(t){return{"clear-night":"🌙",cloudy:"☁️",fog:"🌫️",hail:"🌨️",lightning:"⚡","lightning-rainy":"⛈️",partlycloudy:"⛅",pouring:"🌧️",rainy:"🌦️",snowy:"❄️","snowy-rainy":"🌨️",sunny:"☀️",windy:"💨","windy-variant":"🌬️",exceptional:"⚠️"}[t]||"🌡️"}_getWindDirection(t){return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.round(t/22.5)%16]}setConfig(t){if(!t.entity)throw new Error("You need to define a weather entity");super.setConfig(t)}static getConfigElement(){return document.createElement("muthur-weather-card-editor")}static getStubConfig(){return{entity:"",name:"",show_forecast:!0,forecast_days:5}}});customElements.define("muthur-alarm-card",class extends ct{static get styles(){return[nt,a`
        .alarm-container {
          padding: 8px 0;
        }

        .alarm-status {
          text-align: center;
          margin-bottom: 16px;
          padding: 16px;
          background-color: rgba(0, 255, 65, 0.1);
          border: 2px solid var(--muthur-border-color);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 1.1em;
          font-weight: bold;
        }

        .alarm-status.armed_away,
        .alarm-status.armed_home,
        .alarm-status.armed_night,
        .alarm-status.armed_vacation,
        .alarm-status.armed_custom_bypass {
          background-color: rgba(255, 0, 0, 0.1);
          border-color: #ff0000;
          color: #ff0000;
          --muthur-text-color: #ff0000;
        }

        .alarm-status.pending,
        .alarm-status.arming {
          background-color: rgba(255, 255, 0, 0.1);
          border-color: #ffff00;
          color: #ffff00;
          --muthur-text-color: #ffff00;
        }

        .alarm-status.triggered {
          background-color: rgba(255, 0, 0, 0.2);
          border-color: #ff0000;
          color: #ff0000;
          --muthur-text-color: #ff0000;
          animation: alarm-flash 0.5s infinite;
        }

        @keyframes alarm-flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .code-display {
          text-align: center;
          margin-bottom: 16px;
          padding: 12px;
          background-color: rgba(0, 255, 65, 0.05);
          border: 1px solid var(--muthur-secondary-color);
          font-family: var(--muthur-font-family);
          font-size: 1.5em;
          letter-spacing: 8px;
          min-height: 2em;
        }

        .keypad {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 16px;
        }

        .key {
          background: rgba(0, 255, 65, 0.1);
          border: 2px solid var(--muthur-border-color);
          color: var(--muthur-text-color);
          padding: 16px;
          font-family: var(--muthur-font-family);
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.2s ease;
          text-shadow: 0 0 5px var(--muthur-glow-color);
        }

        .key:hover {
          background: rgba(0, 255, 65, 0.2);
          box-shadow: 
            0 0 10px var(--muthur-glow-color),
            inset 0 0 10px var(--muthur-glow-color);
        }

        .key:active {
          background: rgba(0, 255, 65, 0.3);
          transform: scale(0.95);
        }

        .action-buttons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .action-button {
          background: rgba(0, 255, 65, 0.1);
          border: 2px solid var(--muthur-border-color);
          color: var(--muthur-text-color);
          padding: 12px;
          font-family: var(--muthur-font-family);
          font-size: 0.9em;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-shadow: 0 0 5px var(--muthur-glow-color);
        }

        .action-button:hover {
          background: rgba(0, 255, 65, 0.2);
          box-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .action-button.arm {
          border-color: #ff0000;
          color: #ff0000;
        }

        .action-button.arm:hover {
          background: rgba(255, 0, 0, 0.2);
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
        }

        .error-message {
          text-align: center;
          padding: 8px;
          color: #ff0000;
          font-size: 0.85em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `]}static get properties(){return{...super.properties,_code:{type:String},_error:{type:String}}}constructor(){super(),this._code="",this._error=""}render(){if(!this.config||!this.hass)return Y``;const t=this.config.title||"SECURITY SYSTEM",e=this.hass.states[this.config.entity];if(!e)return Y`
        <div class="card">
          <div class="card-content">
            <div class="card-header">${t}</div>
            <div class="error-message">ENTITY UNAVAILABLE</div>
          </div>
        </div>
      `;const i=e.state,r=this._getStateDisplay(i);return Y`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          
          <div class="alarm-container">
            <div class="alarm-status ${i}">
              ${r}
            </div>

            ${!1!==this.config.show_keypad?Y`
              <div class="code-display">
                ${this._code?"•".repeat(this._code.length):"ENTER CODE"}
              </div>

              <div class="keypad">
                ${[1,2,3,4,5,6,7,8,9,"CLR",0,"OK"].map(t=>Y`
                  <button 
                    class="key"
                    @click=${()=>this._handleKeyPress(t)}
                  >
                    ${t}
                  </button>
                `)}
              </div>
            `:""}

            ${this._error?Y`
              <div class="error-message">${this._error}</div>
            `:""}

            <div class="action-buttons">
              ${"disarmed"===i?Y`
                <button 
                  class="action-button arm"
                  @click=${()=>this._armAlarm("armed_away")}
                >
                  ARM AWAY
                </button>
                <button 
                  class="action-button arm"
                  @click=${()=>this._armAlarm("armed_home")}
                >
                  ARM HOME
                </button>
              `:Y`
                <button 
                  class="action-button"
                  @click=${()=>this._disarmAlarm()}
                >
                  DISARM
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `}_getStateDisplay(t){return{disarmed:"DISARMED",armed_away:"ARMED - AWAY",armed_home:"ARMED - HOME",armed_night:"ARMED - NIGHT",armed_vacation:"ARMED - VACATION",armed_custom_bypass:"ARMED - CUSTOM",pending:"PENDING",arming:"ARMING",disarming:"DISARMING",triggered:"⚠ ALARM TRIGGERED ⚠",unavailable:"UNAVAILABLE",unknown:"UNKNOWN"}[t]||t.toUpperCase()}_handleKeyPress(t){if("CLR"===t)this._code="",this._error="";else if("OK"===t){const t=this.hass.states[this.config.entity];if(!t)return;"disarmed"===t.state?this._code="":this._disarmAlarm()}else this._code.length<10&&(this._code+=t.toString(),this._error="");this.requestUpdate()}_armAlarm(t){const e=this._code||void 0;this.hass.callService("alarm_control_panel",`alarm_${t}`,{entity_id:this.config.entity,code:e}).then(()=>{this._code="",this._error="",this.requestUpdate()}).catch(()=>{this._error="INVALID CODE",this._code="",this.requestUpdate()})}_disarmAlarm(){if(!this._code&&!1!==this.config.show_keypad)return this._error="CODE REQUIRED",void this.requestUpdate();this.hass.callService("alarm_control_panel","alarm_disarm",{entity_id:this.config.entity,code:this._code}).then(()=>{this._code="",this._error="",this.requestUpdate()}).catch(()=>{this._error="INVALID CODE",this._code="",this.requestUpdate()})}setConfig(t){if(!t.entity)throw new Error("You need to define an alarm_control_panel entity");super.setConfig(t)}static getConfigElement(){return document.createElement("muthur-alarm-card-editor")}static getStubConfig(){return{title:"SECURITY SYSTEM",entity:"",show_keypad:!0}}}),window.customCards=window.customCards||[],window.customCards.push({type:"muthur-status-card",name:"MU/TH/UR 6000 Status Card",description:"Display system status in classic MU/TH/UR 6000 terminal style",preview:!0}),window.customCards.push({type:"muthur-sensor-card",name:"MU/TH/UR 6000 Sensor Card",description:"Display sensor data with retro terminal aesthetics",preview:!0}),window.customCards.push({type:"muthur-button-card",name:"MU/TH/UR 6000 Button Card",description:"Control entities with terminal-style buttons",preview:!0}),window.customCards.push({type:"muthur-text-card",name:"MU/TH/UR 6000 Text Card",description:"Display text messages in terminal format",preview:!0}),window.customCards.push({type:"muthur-gauge-card",name:"MU/TH/UR 6000 Gauge Card",description:"Display gauge visualization for numeric sensors",preview:!0}),window.customCards.push({type:"muthur-clock-card",name:"MU/TH/UR 6000 Clock Card",description:"Display current time in terminal format",preview:!0}),window.customCards.push({type:"muthur-glance-card",name:"MU/TH/UR 6000 Glance Card",description:"Compact multi-entity overview in terminal style",preview:!0}),window.customCards.push({type:"muthur-light-card",name:"MU/TH/UR 6000 Light Card",description:"Control lights with terminal-style interface",preview:!0}),window.customCards.push({type:"muthur-picture-card",name:"MU/TH/UR 6000 Picture Card",description:"Display images and camera feeds in terminal style",preview:!0}),window.customCards.push({type:"muthur-weather-card",name:"MU/TH/UR 6000 Weather Card",description:"Display weather information in terminal format",preview:!0}),window.customCards.push({type:"muthur-alarm-card",name:"MU/TH/UR 6000 Alarm Card",description:"Control alarm systems with terminal-style keypad",preview:!0}),console.info("%c MU/TH/UR 6000 CARDS %c v1.0.0 ","color: #00ff41; background: #000; font-weight: bold;","color: #000; background: #00ff41; font-weight: bold;"),console.info("Weyland-Yutani Corporation - Building Better Worlds");
//# sourceMappingURL=mu-th-ur-6000-cards.js.map
