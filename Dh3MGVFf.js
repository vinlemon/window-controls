const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const o=this.t;if(e&&void 0===t){const e=void 0!==o&&1===o.length;e&&(t=i.get(o)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(o,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new s(i,t,o)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:a,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,m=p.trustedTypes,g=m?m.emptyScript:"",$=p.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},C=(t,e)=>!c(t,e),f={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:C};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){const{get:i,set:s}=a(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const n=i?.call(this);s.call(this,e),this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??f}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const o=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((o,i)=>{if(e)o.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),s=t.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}})(o,this.constructor.elementStyles),o}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(void 0!==i&&!0===o.reflect){const s=(void 0!==o.converter?.toAttribute?o.converter:b).toAttribute(e,o.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){const o=this.constructor,i=o._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=o.getPropertyOptions(i),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i,this[i]=s.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,o){if(void 0!==t){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??C)(this[t],e))return;this.P(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t)!0!==o.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,$?.({ReactiveElement:w}),(p.reactiveElementVersions??=[]).push("2.0.4");const _=globalThis,y=_.trustedTypes,A=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+E,S=`<${k}>`,z=document,H=()=>z.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,M="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,N=/>/g,O=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,B=/"/g,V=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...o)=>({_$litType$:t,strings:e,values:o}))(1),D=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),I=new WeakMap,F=z.createTreeWalker(z,129);function W(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const q=(t,e)=>{const o=t.length-1,i=[];let s,n=2===e?"<svg>":"",r=L;for(let e=0;e<o;e++){const o=t[e];let c,l,a=-1,h=0;for(;h<o.length&&(r.lastIndex=h,l=r.exec(o),null!==l);)h=r.lastIndex,r===L?"!--"===l[1]?r=T:void 0!==l[1]?r=N:void 0!==l[2]?(V.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=O):void 0!==l[3]&&(r=O):r===O?">"===l[0]?(r=s??L,a=-1):void 0===l[1]?a=-2:(a=r.lastIndex-l[2].length,c=l[1],r=void 0===l[3]?O:'"'===l[3]?B:R):r===B||r===R?r=O:r===T||r===N?r=L:(r=O,s=void 0);const d=r===O&&t[e+1].startsWith("/>")?" ":"";n+=r===L?o+S:a>=0?(i.push(c),o.slice(0,a)+x+o.slice(a)+E+d):o+E+(-2===a?e:d)}return[W(t,n+(t[o]||"<?>")+(2===e?"</svg>":"")),i]};class J{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,n=0;const r=t.length-1,c=this.parts,[l,a]=q(t,e);if(this.el=J.createElement(l,o),F.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=F.nextNode())&&c.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(x)){const e=a[n++],o=i.getAttribute(t).split(E),r=/([.?@])?(.*)/.exec(e);c.push({type:1,index:s,name:r[2],strings:o,ctor:"."===r[1]?X:"?"===r[1]?tt:"@"===r[1]?et:Q}),i.removeAttribute(t)}else t.startsWith(E)&&(c.push({type:6,index:s}),i.removeAttribute(t));if(V.test(i.tagName)){const t=i.textContent.split(E),e=t.length-1;if(e>0){i.textContent=y?y.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],H()),F.nextNode(),c.push({type:2,index:++s});i.append(t[e],H())}}}else if(8===i.nodeType)if(i.data===k)c.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(E,t+1));)c.push({type:7,index:s}),t+=E.length-1}s++}}static createElement(t,e){const o=z.createElement("template");return o.innerHTML=t,o}}function K(t,e,o=t,i){if(e===D)return e;let s=void 0!==i?o._$Co?.[i]:o._$Cl;const n=P(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(t),s._$AT(t,o,i)),void 0!==i?(o._$Co??=[])[i]=s:o._$Cl=s),void 0!==s&&(e=K(t,s._$AS(t,e.values),s,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??z).importNode(e,!0);F.currentNode=i;let s=F.nextNode(),n=0,r=0,c=o[0];for(;void 0!==c;){if(n===c.index){let e;2===c.type?e=new G(s,s.nextSibling,this,t):1===c.type?e=new c.ctor(s,c.name,c.strings,this,t):6===c.type&&(e=new ot(s,this,t)),this._$AV.push(e),c=o[++r]}n!==c?.index&&(s=F.nextNode(),n++)}return F.currentNode=z,i}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),P(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==D&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Z&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,i="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=J.createElement(W(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new J(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new G(this.S(H()),this.S(H()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,s){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Z}_$AI(t,e=this,o,i){const s=this.strings;let n=!1;if(void 0===s)t=K(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==D,n&&(this._$AH=t);else{const i=t;let r,c;for(t=s[0],r=0;r<s.length-1;r++)c=K(this,i[o+r],e,r),c===D&&(c=this._$AH[r]),n||=!P(c)||c!==this._$AH[r],c===Z?t=Z:t!==Z&&(t+=(c??"")+s[r+1]),this._$AH[r]=c}n&&!i&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}}class et extends Q{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??Z)===D)return;const o=this._$AH,i=t===Z&&o!==Z||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==Z&&(o===Z||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const it=_.litHtmlPolyfillSupport;it?.(J,G),(_.litHtmlVersions??=[]).push("3.1.3");const st=(t,e,o)=>{const i=o?.renderBefore??e;let s=i._$litPart$;if(void 0===s){const t=o?.renderBefore??null;i._$litPart$=s=new G(e.insertBefore(H(),t),t,void 0,o??{})}return s._$AI(t),s};class nt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=st(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.0.5");const ct=j`
  <svg
    width="10"
    height="1"
    viewBox="0 0 10 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.498047 1.00098C0.429688 1.00098 0.364583 0.987956 0.302734 0.961914C0.244141 0.935872 0.192057 0.900065 0.146484 0.854492C0.100911 0.808919 0.0651042 0.756836 0.0390625 0.698242C0.0130208 0.636393 0 0.571289 0 0.50293C0 0.43457 0.0130208 0.371094 0.0390625 0.3125C0.0651042 0.250651 0.100911 0.19694 0.146484 0.151367C0.192057 0.102539 0.244141 0.0651042 0.302734 0.0390625C0.364583 0.0130208 0.429688 0 0.498047 0H9.50195C9.57031 0 9.63379 0.0130208 9.69238 0.0390625C9.75423 0.0651042 9.80794 0.102539 9.85352 0.151367C9.89909 0.19694 9.9349 0.250651 9.96094 0.3125C9.98698 0.371094 10 0.43457 10 0.50293C10 0.571289 9.98698 0.636393 9.96094 0.698242C9.9349 0.756836 9.89909 0.808919 9.85352 0.854492C9.80794 0.900065 9.75423 0.935872 9.69238 0.961914C9.63379 0.987956 9.57031 1.00098 9.50195 1.00098H0.498047Z"
      fill="currentColor"
      fill-opacity="0.8956"
    />
  </svg>
`,lt=j`
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.47461 10.001C1.2793 10.001 1.09212 9.96191 0.913086 9.88379C0.734049 9.80241 0.576172 9.69499 0.439453 9.56152C0.30599 9.4248 0.198568 9.26693 0.117188 9.08789C0.0390625 8.90885 0 8.72168 0 8.52637V1.47559C0 1.28027 0.0390625 1.0931 0.117188 0.914062C0.198568 0.735026 0.30599 0.578776 0.439453 0.445312C0.576172 0.308594 0.734049 0.201172 0.913086 0.123047C1.09212 0.0416667 1.2793 0.000976562 1.47461 0.000976562H8.52539C8.7207 0.000976562 8.90788 0.0416667 9.08691 0.123047C9.26595 0.201172 9.4222 0.308594 9.55566 0.445312C9.69238 0.578776 9.7998 0.735026 9.87793 0.914062C9.95931 1.0931 10 1.28027 10 1.47559V8.52637C10 8.72168 9.95931 8.90885 9.87793 9.08789C9.7998 9.26693 9.69238 9.4248 9.55566 9.56152C9.4222 9.69499 9.26595 9.80241 9.08691 9.88379C8.90788 9.96191 8.7207 10.001 8.52539 10.001H1.47461ZM8.50098 9C8.56934 9 8.63281 8.98698 8.69141 8.96094C8.75326 8.9349 8.80697 8.89909 8.85254 8.85352C8.89811 8.80794 8.93392 8.75586 8.95996 8.69727C8.986 8.63542 8.99902 8.57031 8.99902 8.50195V1.5C8.99902 1.43164 8.986 1.36816 8.95996 1.30957C8.93392 1.24772 8.89811 1.19401 8.85254 1.14844C8.80697 1.10286 8.75326 1.06706 8.69141 1.04102C8.63281 1.01497 8.56934 1.00195 8.50098 1.00195H1.49902C1.43066 1.00195 1.36556 1.01497 1.30371 1.04102C1.24512 1.06706 1.19303 1.10286 1.14746 1.14844C1.10189 1.19401 1.06608 1.24772 1.04004 1.30957C1.014 1.36816 1.00098 1.43164 1.00098 1.5V8.50195C1.00098 8.57031 1.014 8.63542 1.04004 8.69727C1.06608 8.75586 1.10189 8.80794 1.14746 8.85352C1.19303 8.89909 1.24512 8.9349 1.30371 8.96094C1.36556 8.98698 1.43066 9 1.49902 9H8.50098Z"
      fill="currentColor"
      fill-opacity="0.8956"
    />
  </svg>
`,at=j`
  <svg
    width="10"
    height="11"
    viewBox="0 0 10 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.99902 2.98096C8.99902 2.71077 8.94531 2.45687 8.83789 2.21924C8.73047 1.97835 8.58398 1.77002 8.39844 1.59424C8.21615 1.4152 8.00293 1.27523 7.75879 1.17432C7.5179 1.07015 7.264 1.01807 6.99707 1.01807H2.08496C2.13704 0.868327 2.21029 0.731608 2.30469 0.60791C2.39909 0.484212 2.50814 0.378418 2.63184 0.290527C2.75553 0.202637 2.89062 0.135905 3.03711 0.090332C3.18685 0.0415039 3.34147 0.0170898 3.50098 0.0170898H6.99707C7.41048 0.0170898 7.79948 0.0968424 8.16406 0.256348C8.52865 0.412598 8.84603 0.625814 9.11621 0.895996C9.38965 1.16618 9.60449 1.48356 9.76074 1.84814C9.92025 2.21273 10 2.60173 10 3.01514V6.51611C10 6.67562 9.97559 6.83024 9.92676 6.97998C9.88118 7.12646 9.81445 7.26156 9.72656 7.38525C9.63867 7.50895 9.53288 7.618 9.40918 7.7124C9.28548 7.8068 9.14876 7.88005 8.99902 7.93213V2.98096ZM1.47461 10.0171C1.2793 10.0171 1.09212 9.97803 0.913086 9.8999C0.734049 9.81852 0.576172 9.7111 0.439453 9.57764C0.30599 9.44092 0.198568 9.28304 0.117188 9.104C0.0390625 8.92497 0 8.73779 0 8.54248V3.49365C0 3.29508 0.0390625 3.10791 0.117188 2.93213C0.198568 2.75309 0.30599 2.59684 0.439453 2.46338C0.576172 2.32666 0.732422 2.21924 0.908203 2.14111C1.08724 2.05973 1.27604 2.01904 1.47461 2.01904H6.52344C6.72201 2.01904 6.91081 2.05973 7.08984 2.14111C7.26888 2.21924 7.42513 2.32503 7.55859 2.4585C7.69206 2.59196 7.79785 2.74821 7.87598 2.92725C7.95736 3.10628 7.99805 3.29508 7.99805 3.49365V8.54248C7.99805 8.74105 7.95736 8.92985 7.87598 9.10889C7.79785 9.28467 7.69043 9.44092 7.55371 9.57764C7.42025 9.7111 7.264 9.81852 7.08496 9.8999C6.90918 9.97803 6.72201 10.0171 6.52344 10.0171H1.47461ZM6.49902 9.01611C6.56738 9.01611 6.63086 9.00309 6.68945 8.97705C6.7513 8.95101 6.80501 8.9152 6.85059 8.86963C6.89941 8.82406 6.93685 8.77197 6.96289 8.71338C6.98893 8.65153 7.00195 8.58643 7.00195 8.51807V3.51807C7.00195 3.44971 6.98893 3.3846 6.96289 3.32275C6.93685 3.2609 6.90104 3.20719 6.85547 3.16162C6.8099 3.11605 6.75618 3.08024 6.69434 3.0542C6.63249 3.02816 6.56738 3.01514 6.49902 3.01514H1.49902C1.43066 3.01514 1.36556 3.02816 1.30371 3.0542C1.24512 3.08024 1.19303 3.11768 1.14746 3.1665C1.10189 3.21208 1.06608 3.26579 1.04004 3.32764C1.014 3.38623 1.00098 3.44971 1.00098 3.51807V8.51807C1.00098 8.58643 1.014 8.65153 1.04004 8.71338C1.06608 8.77197 1.10189 8.82406 1.14746 8.86963C1.19303 8.9152 1.24512 8.95101 1.30371 8.97705C1.36556 9.00309 1.43066 9.01611 1.49902 9.01611H6.49902Z"
      fill="currentColor"
      fill-opacity="0.8956"
    />
  </svg>
`,ht=j`
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 5.70898L0.854492 9.85449C0.756836 9.95215 0.639648 10.001 0.50293 10.001C0.359701 10.001 0.239258 9.95378 0.141602 9.85938C0.0472005 9.76172 0 9.64128 0 9.49805C0 9.36133 0.0488281 9.24414 0.146484 9.14648L4.29199 5.00098L0.146484 0.855469C0.0488281 0.757812 0 0.638997 0 0.499023C0 0.430664 0.0130208 0.36556 0.0390625 0.303711C0.0651042 0.241862 0.100911 0.189779 0.146484 0.147461C0.192057 0.101888 0.245768 0.0660807 0.307617 0.0400391C0.369466 0.0139974 0.43457 0.000976562 0.50293 0.000976562C0.639648 0.000976562 0.756836 0.0498047 0.854492 0.147461L5 4.29297L9.14551 0.147461C9.24316 0.0498047 9.36198 0.000976562 9.50195 0.000976562C9.57031 0.000976562 9.63379 0.0139974 9.69238 0.0400391C9.75423 0.0660807 9.80794 0.101888 9.85352 0.147461C9.89909 0.193034 9.9349 0.246745 9.96094 0.308594C9.98698 0.367188 10 0.430664 10 0.499023C10 0.638997 9.95117 0.757812 9.85352 0.855469L5.70801 5.00098L9.85352 9.14648C9.95117 9.24414 10 9.36133 10 9.49805C10 9.56641 9.98698 9.63151 9.96094 9.69336C9.9349 9.75521 9.89909 9.80892 9.85352 9.85449C9.8112 9.90007 9.75911 9.93587 9.69727 9.96191C9.63542 9.98796 9.57031 10.001 9.50195 10.001C9.36198 10.001 9.24316 9.95215 9.14551 9.85449L5 5.70898Z"
      fill="currentColor"
      fill-opacity="0.8956"
    />
  </svg>
`,dt=j`
  <svg
    width="6"
    height="6"
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.7522 4.44381L11.1543 9.04165L15.7494 13.6368C16.0898 13.9771 16.078 14.5407 15.724 14.8947L13.8907 16.728C13.5358 17.0829 12.9731 17.0938 12.6328 16.7534L8.03766 12.1583L3.44437 16.7507C3.10402 17.091 2.54132 17.0801 2.18645 16.7253L0.273257 14.8121C-0.0807018 14.4572 -0.0925004 13.8945 0.247845 13.5542L4.84024 8.96087L0.32499 4.44653C-0.0153555 4.10619 -0.00355681 3.54258 0.350402 3.18862L2.18373 1.35529C2.53859 1.00042 3.1013 0.989533 3.44164 1.32988L7.95689 5.84422L12.5556 1.24638C12.8951 0.906035 13.4587 0.917833 13.8126 1.27179L15.7267 3.18589C16.0807 3.53985 16.0925 4.10346 15.7522 4.44381Z"
      fill="currentColor"
    />
  </svg>
`,ut=j`
  <svg
    width="8"
    height="8"
    viewBox="0 0 17 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_20_2051)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.47211 1.18042H15.4197C15.8052 1.18042 16.1179 1.50551 16.1179 1.90769V3.73242C16.1179 4.13387 15.8052 4.80006 15.4197 4.80006H1.47211C1.08665 4.80006 0.773926 4.47497 0.773926 4.07278V1.90769C0.773926 1.50551 1.08665 1.18042 1.47211 1.18042Z"
        fill="currentColor"
      />
    </g>
  </svg>
`,pt=j`
  <svg
    width="6"
    height="6"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style="transform: rotate(-90deg)"
  >
    <g clip-path="url(#clip0_20_2057)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.53068 0.433838L15.0933 12.0409C15.0933 12.0409 15.0658 5.35028 15.0658 4.01784C15.0658 1.32095 14.1813 0.433838 11.5378 0.433838C10.6462 0.433838 3.53068 0.433838 3.53068 0.433838ZM12.4409 15.5378L0.87735 3.93073C0.87735 3.93073 0.905794 10.6214 0.905794 11.9538C0.905794 14.6507 1.79024 15.5378 4.43291 15.5378C5.32535 15.5378 12.4409 15.5378 12.4409 15.5378Z"
        fill="currentColor"
      />
    </g>
  </svg>
`,mt=n`
  button {
    display: inline-flex;
    cursor: default;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0;
  }
`;class gt extends nt{static styles=[mt,n`
      :host {
        --background-color: #dadada;
        --color: #3d3d3d;
        --hover-background-color: #d1d1d1;
        --active-background-color: #bfbfbf;
        display: flex;
        align-items: center;
        height: auto;
        width: fit-content;
        gap: 13px;
        -webkit-app-region: no-drag;
      }

      @media screen and (prefers-color-scheme: dark) {
        :host {
          --background-color: #373737;
          --color: white;
          --hover-background-color: #424242;
          --active-background-color: #565656;
        }
      }

      button {
        margin: 0;
        aspect-ratio: 1;
        height: 24px;
        width: 24px;
        cursor: default;
        border-radius: 50%;
        background-color: var(--background-color);
        padding: 0;
        color: var(--color);
      }

      button:hover {
        background-color: var(--hover-background-color);
      }

      button:active {
        background-color: var(--active-background-color);
      }

      button svg {
        height: 9px;
        width: 9px;
      }

      button.close svg,
      button.maximize:not(.restore) svg {
        height: 8px;
        width: 8px;
      }
    `];static properties={minimize:{type:Function},maximize:{type:Function},close:{type:Function}};constructor(){super(),this.minimize=()=>{},this.maximize=()=>{},this.close=()=>{}}render(){return j`
      <button class="minimize" @click=${this.minimize}>
        ${ct}
      </button>
      <button
        class=${"maximize "+(this.isMaximized?"restore":"")}
        @click=${this.maximize}
      >
        ${this.isMaximized?at:lt}
      </button>
      <button class="close" @click=${this.close}>${ht}</button>
    `}}class $t extends nt{static styles=[mt,n`
      :host {
        --background-color: #ffffff;
        --color: black;
        --hover-background-color: rgba(0, 0, 0, 0.12);
        --active-background-color: rgba(0, 0, 0, 0.6);
        --background-inactive: #dddddd24;
        --close-bg: #ff544d;
        --close-active-bg: #bf403a;
        --minimize-bg: #ffbd2e;
        --minimize-active-bg: #bf9122;
        --maximize-bg: #28c93f;
        --maximize-active-bg: #1e9930;
        display: flex;
        width: fit-content;
        gap: 8px;
        padding: 1.6px;
        color: var(--color);
        -webkit-app-region: no-drag;
      }

      :host([inactive]) button {
        background-color: var(--background-inactive) !important;
      }

      button * {
        display: none;
      }

      :host(:hover) button:not([disabled]) * {
        display: block;
      }

      button {
        aspect-ratio: 1;
        height: 12px;
        width: 12px;
        cursor: default;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid var(--hover-background-color);
        text-align: center;
        color: var(--active-background-color);
      }

      button:hover {
        color: var(--active-background-color);
      }

      button:active {
        color: var(--active-background-color);
      }

      button.close {
        background-color: var(--close-bg);
      }

      button.close:hover {
        background-color: var(--close-bg);
      }

      button.close:active {
        background-color: var(--close-active-bg);
      }

      button.minimize {
        background-color: var(--minimize-bg);
      }

      button.minimize:hover {
        background-color: var(--minimize-bg);
      }

      button.minimize:active {
        background-color: var(--minimize-active-bg);
      }

      button.maximize {
        background-color: var(--maximize-bg);
      }

      button.maximize:hover {
        background-color: var(--maximize-bg);
      }

      button.maximize:active {
        background-color: var(--maximize-active-bg);
      }
    `];static properties={inactive:{type:Boolean,reflect:!0},minimize:{type:Function},maximize:{type:Function},close:{type:Function}};constructor(){super(),this.inactive=!1,this.minimize=()=>{},this.maximize=()=>{},this.close=()=>{}}render(){return j`
      <button class="close" @click=${this.close}>${dt}</button>
      <button class="minimize" @click=${this.minimize}>${ut}</button>
      <button class="maximize" @click=${this.maximize}>${pt}</button>
    `}}class vt extends nt{static styles=n`
    :host {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
    macos-controls {
      position: absolute;
      top: var(--window-controls-macos-top, 20px);
      left: var(--window-controls-macos-left, 11.2px);
      transform: translateY(-50%);
    }
    gnome-controls {
      position: absolute;
      top: var(--window-controls-gnome-top, 20px);
      right: var(--window-controls-gnome-right, 8px);
      transform: translateY(-50%);
    }
    windows-controls {
      position: absolute;
      top: 0;
      right: 0;
      height: var(--window-controls-windows-height, 40px);
    }
  `;static properties={os:{type:0},inactive:{type:Boolean},minimize:{type:Boolean},maximize:{type:Boolean},close:{type:Boolean}};constructor(){super()}_getControlsTemplate(){switch(this.os){case"macos":return j`<macos-controls
          .inactive=${this.inactive}
          .minimize=${this.minimize}
          .maximize=${this.maximize}
          .close=${this.close}
        ></macos-controls>`;case"windows":return j`<windows-controls
          .minimize=${this.minimize}
          .maximize=${this.maximize}
          .close=${this.close}
        ></windows-controls>`;case"linux":return j`<gnome-controls
          .minimize=${this.minimize}
          .maximize=${this.maximize}
          .close=${this.close}
        ></gnome-controls>`;default:return null}}render(){return this._getControlsTemplate()}}class bt extends nt{static styles=[mt,n`
      :host {
        --background-color: rgba(0, 0, 0, 0.9);
        --color: rgba(0, 0, 0, 0.9);
        --hover-background-color: rgba(0, 0, 0, 0.05);
        --active-background-color: rgba(0, 0, 0, 0.03);
        --close-hover-background-color: #c42b1c;
        --close-hover-color: white;
        --close-active-background-color: rgba(196, 43, 28, 0.9);
        display: flex;
        height: 32px;
        -webkit-app-region: no-drag;
      }

      @media screen and (prefers-color-scheme: dark) {
        :host {
          --color: white;
          --hover-background-color: rgba(255, 255, 255, 0.06);
          --active-background-color: rgba(255, 255, 255, 0.04);
        }
      }

      button {
        width: 46px;
        cursor: default;
        border-radius: 0;
        background-color: transparent;
        color: var(--color);
      }

      button:hover {
        background-color: var(--hover-background-color);
      }

      button:active {
        background-color: var(--active-background-color);
      }

      button.maximize:active {
        background-color: var(--active-background-color);
      }

      button.close:hover {
        background-color: var(--close-hover-background-color);
        color: var(--close-hover-color);
      }

      button.close:active {
        background-color: var(--close-active-background-color);
      }
    `];static properties={minimize:{type:Function},maximize:{type:Function},close:{type:Function}};constructor(){super(),this.minimize=()=>{},this.maximize=()=>{},this.close=()=>{}}render(){return j`
      <button class="minimize" @click=${this.minimize}>
        ${ct}
      </button>
      <button class="maximize" @click=${this.maximize}>
        ${this.isMaximized?at:lt}
      </button>
      <button class="close" @click=${this.close}>${ht}</button>
    `}}window.customElements.define("window-controls",vt),window.customElements.define("windows-controls",bt),window.customElements.define("macos-controls",$t),window.customElements.define("gnome-controls",gt),st(j`
          <table>
            <tr>
              <th>Component</th>
              <th>Preview</th>
              <th>HTML</th>
            </tr>
            <tr>
              <td>Gnome Controls</td>
              <td>
                <gnome-controls></gnome-controls>
              </td>
              <td>${"<gnome-controls></gnome-controls>"}</td>
            </tr>
            <tr>
              <td>MacOS Controls</td>
              <td>
                <macos-controls></macos-controls>
              </td>
              <td>${"<macos-controls></macos-controls>"}</td>
            </tr>
            <tr>
              <td>Windows Controls</td>
              <td>
                <windows-controls></windows-controls>
              </td>
              <td>${"<windows-controls></windows-controls>"}</td>
            </tr>
          </table>

          <div class="example-window">
            <window-controls os="macos"></window-controls>
            <container>
              ${'<window-controls os="macos"></window-controls>'}
            </container>
          </div>
          <div class="example-window">
            <window-controls os="windows"></window-controls>
            <container>
              ${'<window-controls os="windows"></window-controls>'}
            </container>
          </div>
          <div class="example-window">
            <window-controls os="linux"></window-controls>
            <container>
              ${'<window-controls os="linux"></window-controls>'}
            </container>
          </div>
        `,document.querySelector("#demo"));
