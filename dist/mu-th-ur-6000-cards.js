/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let r=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(s,t,i)},o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:n,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,g=p.trustedTypes,m=g?g.emptyScript:"",f=p.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!n(t,e),_={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const a=s?.call(this);r?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),r=t.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=s;const a=r.fromAttribute(e,t.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,r=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??y)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==r||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,f?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,w=$.trustedTypes,A=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,k=`<${C}>`,U=document,T=()=>U.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,N="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,I=/>/g,D=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,H=/"/g,L=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Y=new WeakMap,V=U.createTreeWalker(U,129);function G(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const F=(t,e)=>{const i=t.length-1,s=[];let r,a=2===e?"<svg>":3===e?"<math>":"",o=z;for(let e=0;e<i;e++){const i=t[e];let n,c,l=-1,d=0;for(;d<i.length&&(o.lastIndex=d,c=o.exec(i),null!==c);)d=o.lastIndex,o===z?"!--"===c[1]?o=O:void 0!==c[1]?o=I:void 0!==c[2]?(L.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=D):void 0!==c[3]&&(o=D):o===D?">"===c[0]?(o=r??z,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,n=c[1],o=void 0===c[3]?D:'"'===c[3]?H:P):o===H||o===P?o=D:o===O||o===I?o=z:(o=D,r=void 0);const h=o===D&&t[e+1].startsWith("/>")?" ":"";a+=o===z?i+k:l>=0?(s.push(n),i.slice(0,l)+E+i.slice(l)+S+h):i+S+(-2===l?e:h)}return[G(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,a=0;const o=t.length-1,n=this.parts,[c,l]=F(t,e);if(this.el=q.createElement(c,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=V.nextNode())&&n.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=l[a++],i=s.getAttribute(t).split(S),o=/([.?@])?(.*)/.exec(e);n.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?X:"?"===o[1]?tt:"@"===o[1]?et:Q}),s.removeAttribute(t)}else t.startsWith(S)&&(n.push({type:6,index:r}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],T()),V.nextNode(),n.push({type:2,index:++r});s.append(t[e],T())}}}else if(8===s.nodeType)if(s.data===C)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)n.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,s){if(e===B)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const a=R(e)?void 0:e._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=K(t,r._$AS(t,e.values),r,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??U).importNode(e,!0);V.currentNode=s;let r=V.nextNode(),a=0,o=0,n=i[0];for(;void 0!==n;){if(a===n.index){let e;2===n.type?e=new J(r,r.nextSibling,this,t):1===n.type?e=new n.ctor(r,n.name,n.strings,this,t):6===n.type&&(e=new it(r,this,t)),this._$AV.push(e),n=i[++o]}a!==n?.index&&(r=V.nextNode(),a++)}return V.currentNode=U,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),R(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==j&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Y.get(t.strings);return void 0===e&&Y.set(t.strings,e=new q(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new J(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}_$AI(t,e=this,i,s){const r=this.strings;let a=!1;if(void 0===r)t=K(this,t,e,0),a=!R(t)||t!==this._$AH&&t!==B,a&&(this._$AH=t);else{const s=t;let o,n;for(t=r[0],o=0;o<r.length-1;o++)n=K(this,s[i+o],e,o),n===B&&(n=this._$AH[o]),a||=!R(n)||n!==this._$AH[o],n===j?t=j:t!==j&&(t+=(n??"")+r[o+1]),this._$AH[o]=n}a&&!s&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class et extends Q{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??j)===B)return;const i=this._$AH,s=t===j&&i!==j||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==j&&(i===j||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const st=$.litHtmlPolyfillSupport;st?.(q,J),($.litHtmlVersions??=[]).push("3.3.1");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new J(e.insertBefore(T(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const ot=rt.litElementPolyfillSupport;ot?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.1");const nt=a`
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
      `]}render(){if(!this.config||!this.hass)return W``;const t=this.config.entities||[],e=this.config.title||"SYSTEM STATUS",i=this.config.message||"ALL SYSTEMS OPERATIONAL",s=this.config.theme||"green";return W`
      <div class="card ${"green"!==s?`theme-${s}`:""}">
        <div class="card-content">
          <div class="card-header">${e}</div>
          
          <div class="status-grid">
            ${t.map(t=>{const e="string"==typeof t?t:t.entity,i=this.hass.states[e],s="object"==typeof t&&t.name||(i?i.attributes.friendly_name:e);if(!i)return W`
                  <div class="status-item">
                    <span class="status-indicator status-error"></span>
                    <span class="status-label">${s}</span>
                    <span class="status-value">UNAVAILABLE</span>
                  </div>
                `;const r=i.state,a=i.attributes.unit_of_measurement||"";let o="status-ok";return"unavailable"===r||"unknown"===r?o="status-error":"off"!==r&&"closed"!==r&&0!==parseFloat(r)||(o="status-warning"),W`
                <div class="status-item">
                  <span class="status-indicator ${o}"></span>
                  <span class="status-label">${s}</span>
                  <span class="status-value">${r} ${a}</span>
                </div>
              `})}
          </div>

          ${!1!==this.config.show_message?W`
            <div class="system-status">
              <div class="system-status-header">MU/TH/UR 6000 :: STATUS MESSAGE</div>
              <div class="system-message">
                ${i}<span class="blinking-cursor">█</span>
              </div>
            </div>
          `:""}
        </div>
      </div>
    `}setConfig(t){if(!t.entities)throw new Error("You need to define entities");super.setConfig(t)}static getConfigElement(){}static getStubConfig(){return{entities:[],title:"SYSTEM STATUS",message:"ALL SYSTEMS OPERATIONAL",show_message:!0,theme:"green"}}});customElements.define("muthur-sensor-card",class extends ct{static get styles(){return[nt,a`
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
      `]}render(){if(!this.config||!this.hass)return W``;const t=this.config.entity,e=this.hass.states[t];if(!e)return W`
        <div class="card">
          <div class="card-content">
            <div class="card-header">ERROR</div>
            <div class="sensor-display">
              Entity ${t} not found
            </div>
          </div>
        </div>
      `;const i=e.state,s=this.config.name||e.attributes.friendly_name||t,r=this.config.unit||e.attributes.unit_of_measurement||"",a=!1!==this.config.show_graph,o=parseFloat(i),n=this.config.max||100,c=isNaN(o)?0:Math.min(100,o/n*100);return W`
      <div class="card">
        <div class="card-content">
          <div class="card-header">SENSOR DATA</div>
          
          <div class="sensor-display">
            <div class="sensor-name">${s}</div>
            <div class="sensor-value">
              ${i}<span class="sensor-unit">${r}</span>
            </div>
            ${e.attributes.state_class?W`
              <div class="sensor-state">
                STATE: ${e.attributes.state_class.toUpperCase()}
              </div>
            `:""}
          </div>

          ${a&&!isNaN(o)?W`
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
    `}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");super.setConfig(t)}static getConfigElement(){}static getStubConfig(){return{entity:"",name:"",unit:"",show_graph:!0,max:100}}});customElements.define("muthur-button-card",class extends ct{static get styles(){return[nt,a`
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
      `]}render(){if(!this.config||!this.hass)return W``;const t=this.config.title||"TERMINAL CONTROL",e=this.config.buttons||[],i=this.config.columns||1,s=i>1?`button-grid-${Math.min(i,3)}`:"";return W`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          
          <div class="button-container ${s}">
            ${e.map(t=>this.renderButton(t))}
          </div>
        </div>
      </div>
    `}renderButton(t){const e="string"==typeof t?t:t.entity,i=e?this.hass?.states[e]:null,s="object"==typeof t&&t.name||i?.attributes?.friendly_name||"Button",r="object"==typeof t&&t.icon||i?.attributes?.icon||null,a="object"!=typeof t||!1!==t.show_state;return W`
      <button 
        class="muthur-button"
        @click=${()=>this.handleButtonClick(t)}
      >
        <div class="button-content">
          ${r?W`<span class="button-icon">${r}</span>`:""}
          <span>${s}</span>
        </div>
        ${i&&a?W`
          <div class="button-state">
            ${i.state.toUpperCase()}
          </div>
        `:""}
      </button>
    `}handleButtonClick(t){const e="string"==typeof t?t:t.entity,i="object"==typeof t?t.tap_action:null;if(i)this.handleAction(i,e);else if(e){const i=(("object"==typeof t?t.action:null)||"toggle").split(".")[1]||"toggle",s=e.split(".")[0];this.hass.callService(s,i,{entity_id:e})}else if("object"==typeof t&&t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{})}}handleAction(t,e){const i=t.action||"toggle";switch(i){case"navigate":t.navigation_path&&(window.history.pushState(null,"",t.navigation_path),window.dispatchEvent(new CustomEvent("location-changed")));break;case"url":t.url_path&&window.open(t.url_path,"_blank");break;case"more-info":{const i=t.entity||e;if(i){const t=new Event("hass-more-info",{bubbles:!0,composed:!0});t.detail={entityId:i},this.dispatchEvent(t)}}break;case"call-service":if(t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{})}break;case"toggle":if(e){const t=e.split(".")[0];this.hass.callService(t,"toggle",{entity_id:e})}break;case"none":break;default:if(e){const t=e.split(".")[0];this.hass.callService(t,i,{entity_id:e})}}}setConfig(t){if(!t.buttons||!Array.isArray(t.buttons))throw new Error("You need to define buttons as an array");super.setConfig(t)}static getConfigElement(){}static getStubConfig(){return{title:"TERMINAL CONTROL",buttons:[],columns:1}}});customElements.define("muthur-text-card",class extends ct{static get styles(){return[nt,a`
        .text-container {
          padding: 8px 0;
        }

        .text-content {
          font-family: var(--muthur-font-family);
          line-height: 1.6;
          white-space: pre-wrap;
          word-wrap: break-word;
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

        .text-left {
          text-align: left;
          word-wrap: break-word;
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

        /* Typing effect overrides multi-line behavior */
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
      `]}render(){if(!this.config)return W``;const t=this.config.title||"MESSAGE",e=this.config.size||"medium",i=this.config.align||"left",s=!1!==this.config.show_prompt,r=!0===this.config.typing_effect;let a=this.config.content||"";if(this.config.entity&&this.config.state_content&&this.hass){const t=this.hass.states[this.config.entity];if(t){const e=t.state;this.config.state_content[e]?a=this.config.state_content[e]:this.config.state_content.default&&(a=this.config.state_content.default),a=this._replaceTemplates(a,t)}}return W`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          
          <div class="text-container">
            <div class="${`text-content text-${e} text-${i}`} ${s?"terminal-prompt":""} ${r?"typing-effect":""}">
              ${a}
            </div>
          </div>
        </div>
      </div>
    `}_replaceTemplates(t,e){if(!t||!e)return t;let i=t;return i=i.replace(/\{\{state\}\}/g,e.state),e.attributes.friendly_name&&(i=i.replace(/\{\{friendly_name\}\}/g,e.attributes.friendly_name)),e.attributes.unit_of_measurement&&(i=i.replace(/\{\{unit\}\}/g,e.attributes.unit_of_measurement)),i=i.replace(/\{\{attribute\.(\w+)\}\}/g,(t,i)=>e.attributes[i]||t),i}static getConfigElement(){}static getStubConfig(){return{title:"MESSAGE",content:"ENTER YOUR MESSAGE HERE",entity:"",state_content:{},size:"medium",align:"left",show_prompt:!0,typing_effect:!1}}});customElements.define("muthur-gauge-card",class extends ct{static get styles(){return[nt,a`
        .gauge-container {
          text-align: center;
          padding: 24px 16px;
        }

        .gauge-svg {
          width: 200px;
          height: 200px;
          margin: 0 auto;
        }

        .gauge-background {
          fill: none;
          stroke: rgba(0, 255, 65, 0.1);
          stroke-width: 12;
        }

        .gauge-fill {
          fill: none;
          stroke: var(--muthur-primary-color);
          stroke-width: 12;
          stroke-linecap: round;
          transition: stroke-dasharray 0.5s ease;
          filter: drop-shadow(0 0 5px var(--muthur-glow-color));
        }

        .gauge-value {
          font-size: 2em;
          font-weight: bold;
          font-family: var(--muthur-font-family);
          fill: var(--muthur-text-color);
          text-shadow: 0 0 10px var(--muthur-glow-color);
        }

        .gauge-unit {
          font-size: 0.5em;
          opacity: 0.8;
        }

        .gauge-name {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 16px;
        }

        .gauge-range {
          display: flex;
          justify-content: space-between;
          margin-top: 16px;
          padding: 0 20px;
          font-size: 0.85em;
          opacity: 0.7;
        }
      `]}render(){if(!this.config||!this.hass)return W``;const t=this.config.entity,e=this.hass.states[t];if(!e)return W`
        <div class="card">
          <div class="card-content">
            <div class="card-header">ERROR</div>
            <div class="gauge-container">
              Entity ${t} not found
            </div>
          </div>
        </div>
      `;const i=parseFloat(e.state),s=this.config.name||e.attributes.friendly_name||t,r=this.config.unit||e.attributes.unit_of_measurement||"",a=void 0!==this.config.min?this.config.min:0,o=void 0!==this.config.max?this.config.max:100,n=this.config.title||"GAUGE MONITOR",c=(i-a)/(o-a)*100,l=Math.max(0,Math.min(100,c)),d=2*Math.PI*85;return W`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${n}</div>
          
          <div class="gauge-container">
            <svg class="gauge-svg" viewBox="0 0 200 200">
              <circle
                class="gauge-background"
                cx="100"
                cy="100"
                r="${85}"
              />
              <circle
                class="gauge-fill"
                cx="100"
                cy="100"
                r="${85}"
                transform="rotate(-90 100 100)"
                stroke-dasharray="${d}"
                stroke-dashoffset="${d-l/100*d}"
              />
              <text
                class="gauge-value"
                x="100"
                y="95"
                text-anchor="middle"
                dominant-baseline="middle"
              >
                ${i.toFixed(1)}
              </text>
              <text
                class="gauge-value gauge-unit"
                x="100"
                y="115"
                text-anchor="middle"
                dominant-baseline="middle"
              >
                ${r}
              </text>
            </svg>
            
            <div class="gauge-name">${s}</div>
            
            <div class="gauge-range">
              <span>MIN: ${a}</span>
              <span>MAX: ${o}</span>
            </div>
          </div>
        </div>
      </div>
    `}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");super.setConfig(t)}static getConfigElement(){}static getStubConfig(){return{entity:"",name:"",title:"GAUGE MONITOR",unit:"",min:0,max:100}}});customElements.define("muthur-clock-card",class extends ct{static get styles(){return[nt,a`
        .clock-container {
          text-align: center;
          padding: 24px 16px;
        }

        .clock-time {
          font-size: 4em;
          font-weight: bold;
          line-height: 1;
          margin: 16px 0;
          font-family: var(--muthur-font-family);
          text-shadow: 0 0 15px var(--muthur-glow-color);
          letter-spacing: 0.1em;
        }

        .clock-seconds {
          font-size: 0.4em;
          opacity: 0.8;
          margin-left: 0.2em;
        }

        .clock-date {
          font-size: 1.2em;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .clock-timezone {
          font-size: 0.85em;
          opacity: 0.7;
          margin-top: 16px;
        }

        .clock-divider {
          width: 60%;
          margin: 20px auto;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--muthur-border-color),
            transparent
          );
        }
      `]}static get properties(){return{...super.properties,_time:{type:String},_date:{type:String}}}constructor(){super(),this._time="",this._date="",this._updateTime()}connectedCallback(){super.connectedCallback(),this._startClock()}disconnectedCallback(){super.disconnectedCallback(),this._stopClock()}_startClock(){this._updateTime(),this._clockInterval=setInterval(()=>this._updateTime(),1e3)}_stopClock(){this._clockInterval&&clearInterval(this._clockInterval)}_updateTime(){const t=new Date,e=!1!==this.config?.show_seconds,i={hour:"2-digit",minute:"2-digit",hour12:!(!1!==this.config?.format_24h)};e&&(i.second="2-digit"),this._time=t.toLocaleTimeString("en-US",i),this._date=t.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this.requestUpdate()}render(){if(!this.config)return W``;const t=this.config.title||"SYSTEM CHRONOMETER",e=!1!==this.config.show_timezone,i=Intl.DateTimeFormat().resolvedOptions().timeZone;return W`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          
          <div class="clock-container">
            <div class="clock-date">${this._date.toUpperCase()}</div>
            <div class="clock-divider"></div>
            <div class="clock-time">${this._time}</div>
            ${e?W`
              <div class="clock-timezone">${i}</div>
            `:""}
          </div>
        </div>
      </div>
    `}setConfig(t){super.setConfig(t)}static getConfigElement(){}static getStubConfig(){return{title:"SYSTEM CHRONOMETER",show_seconds:!0,show_timezone:!0,format_12h:!1}}});customElements.define("muthur-glance-card",class extends ct{static get styles(){return[nt,a`
        .glance-container {
          padding: 8px 0;
        }

        .glance-grid {
          display: grid;
          gap: 12px;
        }

        .glance-grid-2 {
          grid-template-columns: repeat(2, 1fr);
        }

        .glance-grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        .glance-grid-4 {
          grid-template-columns: repeat(4, 1fr);
        }

        .glance-item {
          padding: 16px 12px;
          background-color: rgba(0, 255, 65, 0.05);
          border: 1px solid var(--muthur-secondary-color);
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .glance-item:hover {
          background-color: rgba(0, 255, 65, 0.1);
          box-shadow: 0 0 10px var(--muthur-glow-color);
          border-color: var(--muthur-primary-color);
        }

        .glance-icon {
          font-size: 2em;
          margin-bottom: 8px;
          filter: grayscale(100%) brightness(1.2) sepia(100%) hue-rotate(60deg) saturate(5);
        }

        .glance-name {
          font-size: 0.75em;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          opacity: 0.9;
        }

        .glance-state {
          font-size: 1.1em;
          font-weight: bold;
          font-family: var(--muthur-font-family);
        }

        .glance-unit {
          font-size: 0.8em;
          opacity: 0.7;
          margin-left: 4px;
        }

        .glance-unavailable {
          opacity: 0.5;
        }
      `]}render(){if(!this.config||!this.hass)return W``;const t=this.config.title||"SYSTEM OVERVIEW",e=this.config.entities||[],i=this.config.columns||3,s=`glance-grid-${Math.min(Math.max(i,2),4)}`;return W`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          
          <div class="glance-container">
            <div class="glance-grid ${s}">
              ${e.map(t=>this._renderEntity(t))}
            </div>
          </div>
        </div>
      </div>
    `}_renderEntity(t){const e="string"==typeof t?t:t.entity,i=this.hass.states[e];if(!i)return W`
        <div class="glance-item glance-unavailable">
          <div class="glance-name">${e}</div>
          <div class="glance-state">UNAVAILABLE</div>
        </div>
      `;const s="object"==typeof t&&t.name||i.attributes.friendly_name||e,r="object"==typeof t&&t.icon||i.attributes.icon||"⚙",a=i.state,o=i.attributes.unit_of_measurement||"";return W`
      <div 
        class="glance-item ${"unavailable"===a||"unknown"===a?"glance-unavailable":""}"
        @click=${()=>this._handleClick(e)}
      >
        <div class="glance-icon">${r}</div>
        <div class="glance-name">${s}</div>
        <div class="glance-state">
          ${a.toUpperCase()}<span class="glance-unit">${o}</span>
        </div>
      </div>
    `}_handleClick(t){const e=new Event("hass-more-info",{bubbles:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}setConfig(t){if(!t.entities||!Array.isArray(t.entities))throw new Error("You need to define entities as an array");super.setConfig(t)}static getConfigElement(){}static getStubConfig(){return{title:"SYSTEM OVERVIEW",entities:[],columns:3}}});customElements.define("muthur-light-card",class extends ct{static get styles(){return[nt,a`
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
      `]}render(){if(!this.config||!this.hass)return W``;const t=this.config.entity,e=this.hass.states[t];if(!e)return W`
        <div class="card">
          <div class="card-content">
            <div class="card-header">ERROR</div>
            <div class="light-container">
              Entity ${t} not found
            </div>
          </div>
        </div>
      `;const i=this.config.name||e.attributes.friendly_name||t,s="on"===e.state,r="unavailable"===e.state,a=e.attributes.brightness,o=e.attributes.supported_color_modes?.includes("brightness")||void 0!==a,n=a?Math.round(a/255*100):0;return W`
      <div class="card">
        <div class="card-content">
          <div class="card-header">ILLUMINATION CONTROL</div>
          
          <div class="light-container ${r?"unavailable":""}">
            <div class="light-header">
              <div class="light-name">${i}</div>
              <button 
                class="light-toggle ${s?"on":""}"
                @click=${()=>this._toggle()}
                ?disabled=${r}
              >
                ${s?"ON":"OFF"}
              </button>
            </div>

            <div class="light-state">
              <div class="light-icon">${s?"💡":"⚫"}</div>
              <div class="light-status">
                <div class="light-status-label">STATUS</div>
                <div class="light-status-value">
                  ${r?"UNAVAILABLE":s?"ACTIVE":"INACTIVE"}
                </div>
              </div>
            </div>

            ${o&&s?W`
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
    `}_toggle(){const t=this.config.entity,e="on"===this.hass.states[t].state?"turn_off":"turn_on";this.hass.callService("light",e,{entity_id:t})}_setBrightness(t){const e=Math.round(t/100*255);this.hass.callService("light","turn_on",{entity_id:this.config.entity,brightness:e})}setConfig(t){if(!t.entity)throw new Error("You need to define an entity");super.setConfig(t)}static getConfigElement(){}static getStubConfig(){return{entity:"",name:""}}});customElements.define("muthur-picture-card",class extends ct{static get styles(){return[nt,a`
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
      `]}static get properties(){return{...super.properties,_imageUrl:{type:String},_loading:{type:Boolean},_error:{type:Boolean},_refreshTimer:{type:Number}}}constructor(){super(),this._imageUrl="",this._loading=!1,this._error=!1,this._refreshTimer=null}connectedCallback(){super.connectedCallback(),this._startAutoRefresh()}disconnectedCallback(){super.disconnectedCallback(),this._stopAutoRefresh()}updated(t){super.updated(t),t.has("config")&&(this._stopAutoRefresh(),this._startAutoRefresh()),(t.has("config")||t.has("hass"))&&this._updateImage()}_startAutoRefresh(){if(!this.config||!this.config.entity)return;const t=this.config.camera_refresh_interval;t&&t>0&&(this._stopAutoRefresh(),this._refreshTimer=setInterval(()=>{this._updateImage()},1e3*t))}_stopAutoRefresh(){this._refreshTimer&&(clearInterval(this._refreshTimer),this._refreshTimer=null)}_updateImage(){if(this.config&&this.hass)if(this.config.entity){const t=this.hass.states[this.config.entity];if(t&&t.attributes.entity_picture){const e=t.attributes.entity_picture,i=e.includes("?")?"&":"?";this._imageUrl=`${e}${i}t=${Date.now()}`,this._error=!1}else this._error=!0,this._imageUrl=""}else this.config.image?(this._imageUrl=this.config.image,this._error=!1):this._error=!0}render(){if(!this.config)return W``;const t=this.config.title||"VISUAL FEED",e=this.config.caption||"",i=!0===this.config.show_timestamp,s=this.config.entity?this.hass?.states[this.config.entity]:null;return this._loading?W`
        <div class="card">
          <div class="card-content">
            <div class="card-header">${t}</div>
            <div class="picture-container">
              <div class="loading">LOADING IMAGE...</div>
            </div>
          </div>
        </div>
      `:this._error||!this._imageUrl?W`
        <div class="card">
          <div class="card-content">
            <div class="card-header">${t}</div>
            <div class="picture-container">
              <div class="error">IMAGE UNAVAILABLE</div>
            </div>
          </div>
        </div>
      `:W`
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

            ${e||s||i?W`
              <div class="picture-info">
                ${e?W`
                  <div class="picture-caption">${e}</div>
                `:""}
                
                ${s?W`
                  <div class="entity-state">
                    <span class="entity-label">STATUS</span>
                    <span class="entity-value">${s.state.toUpperCase()}</span>
                  </div>
                `:""}

                ${i?W`
                  <div class="picture-timestamp">
                    CAPTURED: ${(new Date).toLocaleString("en-US",{hour12:!1,year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}).toUpperCase()}
                  </div>
                `:""}
              </div>
            `:""}

            ${this.config.entity?W`
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
    `}_refreshCamera(){this.config.entity&&(this._loading=!0,this.requestUpdate(),setTimeout(()=>{this._updateImage(),this._loading=!1,this.requestUpdate()},500))}setConfig(t){if(!t.entity&&!t.image)throw new Error("You need to define either an entity (camera) or image URL");super.setConfig(t)}static getConfigElement(){}static getStubConfig(){return{title:"VISUAL FEED",entity:"",image:"",caption:"",show_timestamp:!1,camera_refresh_interval:0}}});customElements.define("muthur-weather-card",class extends ct{static get styles(){return[nt,a`
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
      `]}render(){if(!this.config||!this.hass)return W``;const t=this.config.entity,e=this.hass.states[t];if(!e)return W`
        <div class="card">
          <div class="card-content">
            <div class="card-header">ERROR</div>
            <div class="weather-container">
              Entity ${t} not found
            </div>
          </div>
        </div>
      `;const i=this.config.name||e.attributes.friendly_name||"Weather",s=!1!==this.config.show_forecast;return W`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${i.toUpperCase()}</div>
          
          <div class="weather-container">
            ${this._renderCurrent(e)}
            ${this._renderDetails(e)}
            ${s?this._renderForecast(e):""}
            ${e.attributes.attribution?W`
              <div class="attribution">${e.attributes.attribution}</div>
            `:""}
          </div>
        </div>
      </div>
    `}_renderCurrent(t){const e=t.attributes.temperature,i=this.hass.config.unit_system.temperature,s=t.state,r=this._getWeatherIcon(s);return W`
      <div class="weather-current">
        <div class="weather-icon">${r}</div>
        <div class="weather-main">
          <div class="weather-temp">
            ${e}<span class="weather-temp-unit">${i}</span>
          </div>
          <div class="weather-condition">${s}</div>
        </div>
      </div>
    `}_renderDetails(t){const e=[];if(void 0!==t.attributes.humidity&&e.push({label:"Humidity",value:`${t.attributes.humidity}%`}),void 0!==t.attributes.pressure&&e.push({label:"Pressure",value:`${t.attributes.pressure} ${t.attributes.pressure_unit||"hPa"}`}),void 0!==t.attributes.wind_speed){const i=t.attributes.wind_speed_unit||"km/h";e.push({label:"Wind Speed",value:`${t.attributes.wind_speed} ${i}`})}if(void 0!==t.attributes.wind_bearing){const i=this._getWindDirection(t.attributes.wind_bearing);e.push({label:"Wind Dir",value:i})}if(void 0!==t.attributes.visibility){const i=t.attributes.visibility_unit||"km";e.push({label:"Visibility",value:`${t.attributes.visibility} ${i}`})}return 0===e.length?"":W`
      <div class="weather-details">
        ${e.map(t=>W`
          <div class="weather-detail">
            <div class="weather-detail-label">${t.label}</div>
            <div class="weather-detail-value">${t.value}</div>
          </div>
        `)}
      </div>
    `}_renderForecast(t){const e=t.attributes.forecast;if(!e||0===e.length)return"";const i=this.config.forecast_days||5,s=e.slice(0,i);return W`
      <div class="weather-forecast">
        <div class="forecast-title">FORECAST</div>
        <div class="forecast-grid">
          ${s.map(t=>this._renderForecastDay(t))}
        </div>
      </div>
    `}_renderForecastDay(t){const e=new Date(t.datetime).toLocaleDateString("en-US",{weekday:"short"}).toUpperCase(),i=this._getWeatherIcon(t.condition);return W`
      <div class="forecast-item">
        <div class="forecast-day">${e}</div>
        <div class="forecast-icon">${i}</div>
        <div class="forecast-temp">
          ${t.temperature}°
          ${void 0!==t.templow?W`
            <span class="forecast-temp-low">${t.templow}°</span>
          `:""}
        </div>
      </div>
    `}_getWeatherIcon(t){return{"clear-night":"🌙",cloudy:"☁️",fog:"🌫️",hail:"🌨️",lightning:"⚡","lightning-rainy":"⛈️",partlycloudy:"⛅",pouring:"🌧️",rainy:"🌦️",snowy:"❄️","snowy-rainy":"🌨️",sunny:"☀️",windy:"💨","windy-variant":"🌬️",exceptional:"⚠️"}[t]||"🌡️"}_getWindDirection(t){return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][Math.round(t/22.5)%16]}setConfig(t){if(!t.entity)throw new Error("You need to define a weather entity");super.setConfig(t)}static getConfigElement(){}static getStubConfig(){return{entity:"",name:"",show_forecast:!0,forecast_days:5}}});customElements.define("muthur-alarm-card",class extends ct{static get styles(){return[nt,a`
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
      `]}static get properties(){return{...super.properties,_code:{type:String},_error:{type:String}}}constructor(){super(),this._code="",this._error=""}render(){if(!this.config||!this.hass)return W``;const t=this.config.title||"SECURITY SYSTEM",e=this.hass.states[this.config.entity];if(!e)return W`
        <div class="card">
          <div class="card-content">
            <div class="card-header">${t}</div>
            <div class="error-message">ENTITY UNAVAILABLE</div>
          </div>
        </div>
      `;const i=e.state,s=this._getStateDisplay(i);return W`
      <div class="card">
        <div class="card-content">
          <div class="card-header">${t}</div>
          
          <div class="alarm-container">
            <div class="alarm-status ${i}">
              ${s}
            </div>

            ${!1!==this.config.show_keypad?W`
              <div class="code-display">
                ${this._code?"•".repeat(this._code.length):"ENTER CODE"}
              </div>

              <div class="keypad">
                ${[1,2,3,4,5,6,7,8,9,"CLR",0,"OK"].map(t=>W`
                  <button 
                    class="key"
                    @click=${()=>this._handleKeyPress(t)}
                  >
                    ${t}
                  </button>
                `)}
              </div>
            `:""}

            ${this._error?W`
              <div class="error-message">${this._error}</div>
            `:""}

            <div class="action-buttons">
              ${"disarmed"===i?W`
                <button 
                  class="action-button arm"
                  @click=${()=>this._armAlarm("arm_away")}
                >
                  ARM AWAY
                </button>
                <button 
                  class="action-button arm"
                  @click=${()=>this._armAlarm("arm_home")}
                >
                  ARM HOME
                </button>
              `:W`
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
    `}_getStateDisplay(t){return{disarmed:"DISARMED",armed_away:"ARMED - AWAY",armed_home:"ARMED - HOME",armed_night:"ARMED - NIGHT",armed_vacation:"ARMED - VACATION",armed_custom_bypass:"ARMED - CUSTOM",pending:"PENDING",arming:"ARMING",disarming:"DISARMING",triggered:"⚠ ALARM TRIGGERED ⚠",unavailable:"UNAVAILABLE",unknown:"UNKNOWN"}[t]||t.toUpperCase()}_handleKeyPress(t){if("CLR"===t)this._code="",this._error="";else if("OK"===t){const t=this.hass.states[this.config.entity];if(!t)return;"disarmed"===t.state?this._code="":this._disarmAlarm()}else this._code.length<10&&(this._code+=t.toString(),this._error="");this.requestUpdate()}_armAlarm(t){const e=this._code||void 0;this.hass.callService("alarm_control_panel",`alarm_${t}`,{entity_id:this.config.entity,code:e}).then(()=>{this._code="",this._error="",this.requestUpdate()}).catch(()=>{this._error="INVALID CODE",this._code="",this.requestUpdate()})}_disarmAlarm(){if(!this._code&&!1!==this.config.show_keypad)return this._error="CODE REQUIRED",void this.requestUpdate();this.hass.callService("alarm_control_panel","alarm_disarm",{entity_id:this.config.entity,code:this._code}).then(()=>{this._code="",this._error="",this.requestUpdate()}).catch(()=>{this._error="INVALID CODE",this._code="",this.requestUpdate()})}setConfig(t){if(!t.entity)throw new Error("You need to define an alarm_control_panel entity");super.setConfig(t)}static getConfigElement(){}static getStubConfig(){return{title:"SECURITY SYSTEM",entity:"",show_keypad:!0}}}),window.customCards=window.customCards||[],window.customCards.push({type:"muthur-status-card",name:"MU/TH/UR 6000 Status Card",description:"Display system status in classic MU/TH/UR 6000 terminal style",preview:!0}),window.customCards.push({type:"muthur-sensor-card",name:"MU/TH/UR 6000 Sensor Card",description:"Display sensor data with retro terminal aesthetics",preview:!0}),window.customCards.push({type:"muthur-button-card",name:"MU/TH/UR 6000 Button Card",description:"Control entities with terminal-style buttons",preview:!0}),window.customCards.push({type:"muthur-text-card",name:"MU/TH/UR 6000 Text Card",description:"Display text messages in terminal format",preview:!0}),window.customCards.push({type:"muthur-gauge-card",name:"MU/TH/UR 6000 Gauge Card",description:"Display gauge visualization for numeric sensors",preview:!0}),window.customCards.push({type:"muthur-clock-card",name:"MU/TH/UR 6000 Clock Card",description:"Display current time in terminal format",preview:!0}),window.customCards.push({type:"muthur-glance-card",name:"MU/TH/UR 6000 Glance Card",description:"Compact multi-entity overview in terminal style",preview:!0}),window.customCards.push({type:"muthur-light-card",name:"MU/TH/UR 6000 Light Card",description:"Control lights with terminal-style interface",preview:!0}),window.customCards.push({type:"muthur-picture-card",name:"MU/TH/UR 6000 Picture Card",description:"Display images and camera feeds in terminal style",preview:!0}),window.customCards.push({type:"muthur-weather-card",name:"MU/TH/UR 6000 Weather Card",description:"Display weather information in terminal format",preview:!0}),window.customCards.push({type:"muthur-alarm-card",name:"MU/TH/UR 6000 Alarm Card",description:"Control alarm systems with terminal-style keypad",preview:!0}),console.info("%c MU/TH/UR 6000 CARDS %c v1.1.6 ","color: #00ff41; background: #000; font-weight: bold;","color: #000; background: #00ff41; font-weight: bold;"),console.info("Weyland-Yutani Corporation - Building Better Worlds");
//# sourceMappingURL=mu-th-ur-6000-cards.js.map
