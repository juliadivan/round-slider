(function(){'use strict';function e(e){return t(e)||r(e)||n()}function t(e){if(Array.isArray(e))return e}function r(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function a(e){var t=i(e,"string");return"symbol"==typeof t?t:t+""}function s(e,t,n,a){var s=d();if(a)for(var l=0;l<a.length;l++)s=a[l](s);var c=t(function(e){s.initializeInstanceElements(e,r.elements)},n),r=s.decorateClass(p(c.d.map(o)),e);return s.initializeClassElements(c.F,r.elements),s.runClassFinishers(c.F,r.finishers)}function d(){d=function(){return t};var t={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(r){t.forEach(function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)},this)},this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach(function(n){t.forEach(function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var a="static"===i?e:r;this.defineClassElement(a,t)}},this)},this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach(function(e){this.addElementPlacement(e,i)},this),e.forEach(function(e){if(!c(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)},this),!t)return{elements:r,finishers:n};var a=this.decorateConstructor(r,t);return n.push.apply(n,a.finishers),a.finishers=n,a},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r,n=[],a=[],s=e.decorators,d=s.length-1;0<=d;d--){r=t[e.placement],r.splice(r.indexOf(e.key),1);var o=this.fromElementDescriptor(e),l=this.toElementFinisherExtras((0,s[d])(o)||o);e=l.element,this.addElementPlacement(e,t),l.finisher&&a.push(l.finisher);var p=l.extras;if(p){for(var c=0;c<p.length;c++)this.addElementPlacement(p[c],t);n.push.apply(n,p)}}return{element:e,finishers:a,extras:n}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;0<=n;n--){var a=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[n])(a)||a);if(void 0!==s.finisher&&r.push(s.finisher),void 0!==s.elements){e=s.elements;for(var d=0;d<e.length-1;d++)for(var o=d+1;o<e.length;o++)if(e[d].key===e[o].key&&e[d].placement===e[o].placement)throw new TypeError("Duplicated element ("+e[d].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(t){return void 0===t?void 0:e(t).map(function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t},this)},toElementDescriptor:function(e){var t=e.kind+"";if("method"!=t&&"field"!=t)throw new TypeError("An element descriptor's .kind property must be either \"method\" or \"field\", but a decorator created an element descriptor with .kind \""+t+"\"");var r=a(e.key),n=e.placement+"";if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError("An element descriptor's .placement property must be one of \"static\", \"prototype\" or \"own\", but a decorator created an element descriptor with .placement \""+n+"\"");var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"==t?(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer):this.disallowProperty(e,"initializer","A method descriptor"),s},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),r=m(e,"finisher"),n=this.toElementDescriptors(e.extras);return{element:t,finisher:r,extras:n}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=e.kind+"";if("class"!=t)throw new TypeError("A class descriptor's .kind property must be \"class\", but a decorator created a class descriptor with .kind \""+t+"\"");this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=m(e,"finisher"),n=this.toElementDescriptors(e.elements);return{elements:n,finisher:r}},runClassFinishers:function(e,t){for(var r,n=0;n<t.length;n++)if(r=(0,t[n])(e),void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}return e},disallowProperty:function(e,t,r){if(e[t]!==void 0)throw new TypeError(r+" can't have a ."+t+" property.")}};return t}function o(e){var t,r=a(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function l(e,t){e.descriptor.get===void 0?t.descriptor.set=e.descriptor.set:t.descriptor.get=e.descriptor.get}function p(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},n=0;n<e.length;n++){var a,s=e[n];if(!("method"===s.kind&&(a=t.find(r))))t.push(s);else if(u(s.descriptor)||u(a.descriptor)){if(c(s)||c(a))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");a.descriptor=s.descriptor}else{if(c(s)){if(c(a))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");a.decorators=s.decorators}l(s,a)}}return t}function c(e){return e.decorators&&e.decorators.length}function u(e){return e!==void 0&&(e.value!==void 0||e.writable!==void 0)}function m(e,t){var r=e[t];if(r!==void 0&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function _(e){let t=G.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},G.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(C);return r=t.keyString.get(n),void 0===r&&(r=new T(e,e.getTemplateElement()),t.keyString.set(n,r)),t.stringsArray.set(e.strings,r),r}function h(e,t){const{element:{content:n},parts:r}=e,i=document.createTreeWalker(n,te,null,!1);let a=ne(r),s=r[a],d=-1,o=0;const l=[];for(let n=null;i.nextNode();){d++;const e=i.currentNode;for(e.previousSibling===n&&(n=null),t.has(e)&&(l.push(e),null===n&&(n=e)),null!==n&&o++;s!==void 0&&s.index===d;)s.index=null===n?s.index-o:-1,a=ne(r,a),s=r[a]}l.forEach(e=>e.parentNode.removeChild(e))}function g(e,t,r=null){const{element:{content:i},parts:n}=e;if(null===r||void 0===r)return void i.appendChild(t);const a=document.createTreeWalker(i,te,null,!1);let s=ne(n),d=0,o=-1;for(;a.nextNode();){o++;const e=a.currentNode;for(e===r&&(d=re(t),r.parentNode.insertBefore(t,r));-1!==s&&n[s].index===o;){if(0<d){for(;-1!==s;)n[s].index+=d,s=ne(n,s);return}s=ne(n,s)}}}function y(e){return(t,r)=>r===void 0?xe(e,t):Ee(e,t,r)}function f(e,t=[]){for(let r=0,n=e.length;r<n;r++){const n=e[r];Array.isArray(n)?f(n,t):t.push(n)}return t}const v=new WeakMap,k=e=>"function"==typeof e&&v.has(e),S=window.customElements!==void 0&&window.customElements.polyfillWrapFlushCallback!==void 0,b=(e,t,r=null,i=null)=>{for(;t!==r;){const r=t.nextSibling;e.insertBefore(t,i),t=r}},P=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},x={},E={},C=`{{lit-${(Math.random()+"").slice(2)}}}`,A=`<!--${C}-->`,N=new RegExp(`${C}|${A}`),w="$lit$";class T{constructor(e,t){this.parts=[],this.element=t;const r=[],n=[],i=document.createTreeWalker(t.content,133,null,!1);let a=0,d=-1,o=0;for(const{strings:s,values:{length:l}}=e;o<l;){const e=i.nextNode();if(null===e){i.currentNode=n.pop();continue}if(d++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let n=0;for(let e=0;e<r;e++)V(t[e].name,w)&&n++;for(;0<n--;){const t=s[o],r=I.exec(t)[2],n=r.toLowerCase()+w,i=e.getAttribute(n);e.removeAttribute(n);const a=i.split(N);this.parts.push({type:"attribute",index:d,name:r,strings:a}),o+=a.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(0<=t.indexOf(C)){const n=e.parentNode,a=t.split(N),s=a.length-1;for(let t=0;t<s;t++){let r,i=a[t];if(""===i)r=D();else{const e=I.exec(i);null!==e&&V(e[2],w)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-w.length)+e[3]),r=document.createTextNode(i)}n.insertBefore(r,e),this.parts.push({type:"node",index:++d})}""===a[s]?(n.insertBefore(D(),e),r.push(e)):e.data=a[s],o+=s}}else if(8===e.nodeType)if(e.data===C){const t=e.parentNode;(null===e.previousSibling||d===a)&&(d++,t.insertBefore(D(),e)),a=d,this.parts.push({type:"node",index:d}),null===e.nextSibling?e.data="":(r.push(e),d--),o++}else for(let t=-1;-1!==(t=e.data.indexOf(C,t+1));)this.parts.push({type:"node",index:-1}),o++}for(const i of r)i.parentNode.removeChild(i)}}const V=(e,t)=>{const r=e.length-t.length;return 0<=r&&e.slice(r)===t},z=e=>-1!==e.index,D=()=>document.createComment(""),I=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class L{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const e=S?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let i,a=0,s=0,d=n.nextNode();for(;a<r.length;){if(i=r[a],!z(i)){this.__parts.push(void 0),a++;continue}for(;s<i.index;)s++,"TEMPLATE"===d.nodeName&&(t.push(d),n.currentNode=d.content),null===(d=n.nextNode())&&(n.currentNode=t.pop(),d=n.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(d.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,i.name,i.strings,this.options));a++}return S&&(document.adoptNode(e),customElements.upgrade(e)),e}}class F{constructor(e,t,r,n){this.strings=e,this.values=t,this.type=r,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let n=0;n<e;n++){const e=this.strings[n],i=e.lastIndexOf("<!--");r=(-1<i||r)&&-1===e.indexOf("-->",i+1);const a=I.exec(e);t+=null===a?e+(r?` ${C} `:A):e.substr(0,a.index)+a[1]+a[2]+w+a[3]+C}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class R extends F{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,r=t.firstChild;return t.removeChild(r),b(t,r.firstChild),e}}const O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,H=e=>Array.isArray(e)||!!(e&&e[Symbol.iterator]);class U{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(let n=0;n<r.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new B(this)}_getValue(){const e=this.strings,t=e.length-1;let r="";for(let n=0;n<t;n++){r+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(O(e)||!H(e))r+="string"==typeof e?e:e+"";else for(const n of e)r+="string"==typeof n?n:n+""}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class B{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===x||O(e)&&e===this.value||(this.value=e,!k(e)&&(this.committer.dirty=!0))}commit(){for(;k(this.value);){const e=this.value;this.value=x,e(this)}this.value===x||this.committer.commit()}}class j{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(D()),this.endNode=e.appendChild(D())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=D()),e.__insert(this.endNode=D())}insertAfterPart(e){e.__insert(this.startNode=D()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;k(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=x,e(this)}const e=this.__pendingValue;e===x||(O(e)?e!==this.value&&this.__commitText(e):e instanceof F?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):H(e)?this.__commitIterable(e):e===E?(this.value=E,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value===e||(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e;const r="string"==typeof e?e:e+"";t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof L&&this.value.template===t)this.value.update(e.values);else{const r=new L(t,e.processor,this.options),n=r._clone();r.update(e.values),this.__commitNode(n),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,n=0;for(const i of e)r=t[n],void 0===r&&(r=new j(this.options),t.push(r),0==n?r.appendIntoPart(this):r.insertAfterPart(t[n-1])),r.setValue(i),r.commit(),n++;n<t.length&&(t.length=n,this.clear(r&&r.endNode))}clear(e=this.startNode){P(this.startNode.parentNode,e.nextSibling,this.endNode)}}class q{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;k(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=x,e(this)}if(this.__pendingValue!==x){const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=x}}}class M extends U{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new W(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class W extends B{}let X=!1;try{const e={get capture(){return X=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class Y{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(e){this.__pendingValue=e}commit(){for(;k(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=x,e(this)}if(this.__pendingValue===x)return;const e=this.__pendingValue,t=this.value,r=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive);r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),null!=e&&(null==t||r)&&(this.__options=$(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=x}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const $=e=>e&&(X?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);const J=new class{handleAttributeExpressions(e,t,r,n){const i=t[0];if("."===i){const n=new M(e,t.slice(1),r);return n.parts}if("@"===i)return[new Y(e,t.slice(1),n.eventContext)];if("?"===i)return[new q(e,t.slice(1),r)];const a=new U(e,t,r);return a.parts}handleTextExpression(e){return new j(e)}},G=new Map,K=new WeakMap,Q=(e,t,r)=>{let n=K.get(t);n===void 0&&(P(t,t.firstChild),K.set(t,n=new j(Object.assign({templateFactory:_},r))),n.appendInto(t)),n.setValue(e),n.commit()};(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const Z=(e,...t)=>new F(e,t,"html",J),ee=(e,...t)=>new R(e,t,"svg",J),te=133,re=e=>{let t=11===e.nodeType?0:1;for(const r=document.createTreeWalker(e,te,null,!1);r.nextNode();)t++;return t},ne=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(z(t))return r}return-1},ie=(e,t)=>`${e}--${t}`;let ae=!0;"undefined"==typeof window.ShadyCSS?ae=!1:"undefined"==typeof window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),ae=!1);const se=e=>t=>{const r=ie(t.type,e);let n=G.get(r);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},G.set(r,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const a=t.strings.join(C);if(i=n.keyString.get(a),void 0===i){const r=t.getTemplateElement();ae&&window.ShadyCSS.prepareTemplateDom(r,e),i=new T(t,r),n.keyString.set(a,i)}return n.stringsArray.set(t.strings,i),i},de=["html","svg"],oe=e=>{de.forEach(t=>{const r=G.get(ie(t,e));r!==void 0&&r.keyString.forEach(e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),h(e,r)})})},le=new Set,pe=(e,t,r)=>{le.add(e);const n=!r?document.createElement("template"):r.element,a=t.querySelectorAll("style"),{length:s}=a;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(n,e);const d=document.createElement("style");for(let n=0;n<s;n++){const e=a[n];e.parentNode.removeChild(e),d.textContent+=e.textContent}oe(e);const o=n.content;!r?o.insertBefore(d,o.firstChild):g(r,d,o.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(!!r){o.insertBefore(d,o.firstChild);const e=new Set;e.add(d),h(r,e)}},ce=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,i=K.has(t),a=ae&&11===t.nodeType&&!!t.host,s=a&&!le.has(n),d=s?document.createDocumentFragment():t;if(Q(e,d,Object.assign({templateFactory:se(n)},r)),s){const e=K.get(d);K.delete(d);const r=e.value instanceof L?e.value.template:void 0;pe(n,d,r),P(t,t.firstChild),t.appendChild(d),K.set(t,e)}!i&&a&&window.ShadyCSS.styleElement(t.host)};var ue;window.JSCompiler_renameProperty=e=>e;const me={toAttribute(e,t){return t===Boolean?e?"":null:t===Object||t===Array?null==e?e:JSON.stringify(e):e},fromAttribute(e,t){return t===Boolean?null!==e:t===Number?null===e?null:+e:t===Object||t===Array?JSON.parse(e):e}},_e=(e,t)=>t!==e&&(t===t||e===e),he={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:_e},ge=Promise.resolve(!0),ye=1,fe=4,ve=8,ke=16,Se=32,be="finalized";class Pe extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=ge,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,r)=>{const n=this._attributeNameForProperty(r,t);void 0!==n&&(this._attributeToPropertyMap.set(n,r),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=he){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[r]},set(t){const n=this[e];this[r]=t,this._requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(be)||e.finalize(),this[be]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[])];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=_e){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,n=t.converter||me,i="function"==typeof n?n:n.fromAttribute;return i?i(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,n=t.converter,i=n&&n.toAttribute||me.toAttribute;return i(e,r)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState|=Se,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=he){const n=this.constructor,i=n._attributeNameForProperty(e,r);if(i!==void 0){const e=n._propertyValueToAttribute(t,r);if(e===void 0)return;this._updateState|=ve,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState&=~ve}}_attributeToProperty(e,t){if(this._updateState&ve)return;const r=this.constructor,n=r._attributeToPropertyMap.get(e);if(n!==void 0){const e=r._classProperties.get(n)||he;this._updateState|=ke,this[n]=r._propertyValueFromAttribute(t,e),this._updateState&=~ke}}_requestUpdate(e,t){let r=!0;if(e!==void 0){const n=this.constructor,i=n._classProperties.get(e)||he;n._valueHasChanged(this[e],t,i.hasChanged)?(!this._changedProperties.has(e)&&this._changedProperties.set(e,t),!0===i.reflect&&!(this._updateState&ke)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):r=!1}!this._hasRequestedUpdate&&r&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState|=fe;let e,t;const r=this._updatePromise;this._updatePromise=new Promise((r,n)=>{e=r,t=n});try{await r}catch(t){}this._hasConnected||(await new Promise(e=>this._hasConnectedResolver=e));try{const e=this.performUpdate();null!=e&&(await e)}catch(r){t(r)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Se}get _hasRequestedUpdate(){return this._updateState&fe}get hasUpdated(){return this._updateState&ye}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const r=this._changedProperties;try{t=this.shouldUpdate(r),t&&this.update(r)}catch(r){throw t=!1,r}finally{this._markUpdated()}t&&(!(this._updateState&ye)&&(this._updateState|=ye,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState&=~fe}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&0<this._reflectingProperties.size&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}ue=be,Pe[ue]=!0;const xe=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign({},t,{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Ee=(e,t,r)=>{t.constructor.createProperty(r,e)},Ce="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ae=Symbol();class Ne{constructor(e,t){if(t!==Ae)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Ce?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const we=e=>{if(e instanceof Ne)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},Te=(e,...t)=>{const r=t.reduce((t,r,n)=>t+we(r)+e[n+1],e[0]);return new Ne(r,Ae)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const Ve=e=>e.flat?e.flat(1/0):f(e);class ze extends Pe{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){const r=Ve(e),n=r.reduceRight((e,t)=>(e.add(t),e),new Set);n.forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0===e.length||(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?Ce?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof F&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ze.finalized=!0,ze.render=ce;let De=s(null,function(e,t){var n=Math.cos,i=Math.sin,a=Math.PI;return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[y({type:Number})],key:"value",value:void 0},{kind:"field",decorators:[y({type:Number})],key:"high",value:void 0},{kind:"field",decorators:[y({type:Number})],key:"low",value:void 0},{kind:"field",decorators:[y({type:Number})],key:"min",value(){return 0}},{kind:"field",decorators:[y({type:Number})],key:"max",value(){return 100}},{kind:"field",decorators:[y({type:Number})],key:"step",value(){return 1}},{kind:"field",decorators:[y({type:Number})],key:"radius",value(){return 80}},{kind:"field",decorators:[y({type:Number})],key:"startAngle",value(){return 135}},{kind:"field",decorators:[y({type:Number})],key:"arcLength",value(){return 270}},{kind:"field",decorators:[y({type:Number})],key:"handleSize",value(){return 6}},{kind:"field",decorators:[y({type:Boolean})],key:"disabled",value(){return!1}},{kind:"field",decorators:[y({type:Boolean,reflect:!0})],key:"dragging",value(){return!1}},{kind:"get",key:"_r0",value:function(){return this.radius}},{kind:"get",key:"_rArc",value:function(){return this._r0-1.5*this.handleSize}},{kind:"get",key:"_start",value:function(){return this.startAngle*a/180}},{kind:"get",key:"_len",value:function(){return Math.min(this.arcLength*a/180,2*a-.01)}},{kind:"get",key:"_end",value:function(){return this._start+this._len}},{kind:"get",key:"_isDisabled",value:function(){return this.disabled||!this.value&&!this.high&&!this.low}},{kind:"method",key:"_angleInside",value:function(e){let t=(this.startAngle+this.arcLength/2-e+180+360)%360-180;return t<this.arcLength/2&&t>-this.arcLength/2}},{kind:"method",key:"_getBoundaries",value:function(){var e=Math.max;const t=1.5*this.handleSize;let r=this._r0;this._angleInside(270)||(r=e(-this._rArc*i(this._start)+t,-this._rArc*i(this._end)+t));let a=this._r0;this._angleInside(90)||(a=e(this._rArc*i(this._start)+t,this._rArc*i(this._end)+t));let s=this._r0;this._angleInside(180)||(s=e(-this._rArc*n(this._start)+t,-this._rArc*n(this._end)+t));let d=this._r0;return this._angleInside(0)||(d=e(this._rArc*n(this._start)+t,this._rArc*n(this._end)+t)),{up:r,down:a,left:s,right:d,width:s+d,height:r+a}}},{kind:"method",key:"dragStart",value:function(e){if(!e.target.classList.contains("handle"))return;let t=e.target;t.classList.contains("overflow")&&(t=t.nextElementSibling),t.setAttribute("r",1.5*this.handleSize);const r="high"===t.id?this.low:this.min,n="low"===t.id?this.high:this.max;this._rotation={handle:t,min:r,max:n},this.dragging=!0}},{kind:"method",key:"dragEnd",value:function(){if(this._rotation){const e=this._rotation.handle;e.setAttribute("r",this.handleSize),this._rotation=!1,this.dragging=!1;let t=new CustomEvent("value-changed",{detail:{[e.id]:this[e.id]}});this.dispatchEvent(t),this._reverseOrder=!!(this.low&&this.low>=.99*this.max)}}},{kind:"method",key:"drag",value:function(e){if(!this._rotation)return;e.preventDefault();const t="touchmove"===e.type?e.touches[0].clientX:e.clientX,r="touchmove"===e.type?e.touches[0].clientY:e.clientY,n=this.shadowRoot.querySelector("svg").getBoundingClientRect(),i=this._getBoundaries(),s=t-(n.x+i.left),d=r-(n.y+i.up),o=(Math.atan2(d,s)-this._start+2*a)%(2*a),l=Math.round((o/this._len*(this.max-this.min)+this.min)/this.step)*this.step;if(!(l<this._rotation.min||l>this._rotation.max)){const e=this._rotation.handle;this[e.id]=l;let t=new CustomEvent("value-changing",{detail:{[e.id]:l}});this.dispatchEvent(t)}}},{kind:"method",key:"firstUpdated",value:function(){document.addEventListener("mouseup",this.dragEnd.bind(this)),document.addEventListener("touchend",this.dragEnd.bind(this),{passive:!1}),document.addEventListener("mousemove",this.drag.bind(this)),document.addEventListener("touchmove",this.drag.bind(this),{passive:!1})}},{kind:"method",key:"_renderArc",value:function(e,t){const s=this._rArc;return`
      M ${this._r0+s*n(e)} ${this._r0+s*i(e)}
      A ${s} ${s},
        0,
        ${t-e>a?"1":"0"} 1,
        ${this._r0+s*n(t)} ${this._r0+s*i(t)}
    `}},{kind:"method",key:"_valueFrac",value:function(e){return(this[e]-this.min)/(this.max-this.min)}},{kind:"method",key:"_renderHandle",value:function(e){const t=this._start+this._valueFrac(e)*this._len;return ee`
        <circle
          id=${e}
          class="handle ${e} overflow"
          cx=${this._r0+this._rArc*n(t)}
          cy=${this._r0+this._rArc*i(t)}
          r=${2*this.handleSize}
          style="fill: rgba(0,0,0,0);"
        ></circle>
        <circle
          id=${e}
          class="handle ${e}"
          cx=${this._r0+this._rArc*n(t)}
          cy=${this._r0+this._rArc*i(t)}
          r=${this.handleSize}
        ></circle>
      `}},{kind:"method",key:"render",value:function(){let e,t,r,n;return({up:e,left:t,width:r,height:n}=this._getBoundaries()),Z`
    <div
      @mousedown=${this.dragStart}
      @touchstart=${this.dragStart}
      style="
         height: ${n}px;
         width: ${r}px;
       "
    >
      <svg
        xmln="http://www.w3.org/2000/svg"
        viewBox="${this._r0-t} ${this._r0-e} ${r} ${n}"
      >
        <g class="slider">
          <path
            class="path"
            d=${this._renderArc(this._start,this._end)}
          />
          ${this._isDisabled?"":ee`
          <path
            class="bar"
            d=${this._renderArc(this._start+this._len*(void 0===this.low?0:this._valueFrac("low")),this._start+this._len*(void 0===this.high?this._valueFrac("value"):this._valueFrac("high")))}
          />
          `}
        </g>

        ${this._isDisabled?"":ee`
          <g class="handles">
          ${void 0===this.low?Z`${this._renderHandle("value")}`:this._reverseOrder?Z`${this._renderHandle("high")} ${this._renderHandle("low")}`:Z`${this._renderHandle("low")} ${this._renderHandle("high")}`}
          </g>
          `}
      </svg>
    </div>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return Te`
      div {
        display: inline-block;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 3);
        stroke-linecap: var(--round-slider-linecap, round);
      }
      .path {
        stroke: var(--round-slider-path-color, lightgray);
      }
      .bar {
        stroke: var(--round-slider-bar-color, deepskyblue);
      }
      .handles {
        fill: var(--round-slider-handle-color, var(--round-slider-bar-color, deepskyblue));
      }
      .handles .low {
        fill: var(--round-slider-low-handle-color);
      }
      .handles .high {
        fill: var(--round-slider-high-handle-color);
      }
    `}}]}},ze);customElements.define("round-slider",De)})();