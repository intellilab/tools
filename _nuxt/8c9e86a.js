(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{166:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var o=n(7);n(17),n(9),n(86);function r(t,time){var e,n,o,r;function c(){n=null,performance.now()>=e?o():l()}function l(){if(!n){var t=e-performance.now();n=setTimeout(c,t)}}return time=Math.max(0,+time||0),function(){for(var n=this,c=arguments.length,d=new Array(c),f=0;f<c;f++)d[f]=arguments[f];return e=performance.now()+time,o=function(){o=null,r=t.apply(n,d)},l(),r}}function c(t){return{load:function(e){var data=e;try{var n=localStorage.getItem(t);null!=n&&(data=JSON.parse(n))}catch(t){}return data},dump:function(data){localStorage.setItem(t,JSON.stringify(data))}}}window.transformers={import:function(input){var t=JSON.parse(decodeURI(input));Object.entries(t).forEach((function(t){var e=Object(o.a)(t,2),n=e[0],r=e[1];localStorage.setItem(n,r)}))},export:function(){for(var t=localStorage.length,e={},i=0;i<t;i+=1){var n=localStorage.key(i);e[n]=localStorage.getItem(n)}return encodeURI(JSON.stringify(e))}}},168:function(t,e,n){"use strict";e.a={methods:{onVisibilityChange:function(){"visible"===document.visibilityState?this.tracker.track():this.tracker.revoke()}},mounted:function(){var t={track:function(){t.revoke(),t.timer=setTimeout((function(){_hmt.push(["_trackEvent","action","stay"]),t.timer=null}),1e4)},revoke:function(){t.timer&&(clearTimeout(t.timer),t.timer=null)}};t.track(),this.tracker=t,window.addEventListener("visibilitychange",this.onVisibilityChange,!1)},beforeDestroy:function(){var t;null===(t=this.tracker)||void 0===t||t.revoke(),window.removeEventListener("visibilitychange",this.onVisibilityChange,!1)}}},198:function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},t.exports.default=t.exports,t.exports.__esModule=!0,n.apply(this,arguments)}t.exports=n,t.exports.default=t.exports,t.exports.__esModule=!0},213:function(t,e,n){},274:function(t,e,n){t.exports=n(275),n(276)},275:function(t,e,n){"use strict";function o(t){return t&&"object"==typeof t&&"default"in t?t.default:t}var r=o(n(198)),c=o(n(1));function l(template,style,script,t,e,n,o,r,c,l){"boolean"!=typeof o&&(c=r,r=o,o=!1);const d="function"==typeof script?script.options:script;let f;if(template&&template.render&&(d.render=template.render,d.staticRenderFns=template.staticRenderFns,d._compiled=!0,e&&(d.functional=!0)),t&&(d._scopeId=t),n?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=f):style&&(f=o?function(t){style.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){style.call(this,r(t))}),f)if(d.functional){const t=d.render;d.render=function(e,n){return f.call(n),t(e,n)}}else{const t=d.beforeCreate;d.beforeCreate=t?[].concat(t,f):[f]}return script}const d=l({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:t.transition,appear:""},on:{"after-leave":t.onAfterLeave}},[t.visible?n("div",{class:"vl-modal "+t.modalClass},[t.backdrop?n("div",{class:"vl-modal-backdrop "+t.backdropClass,on:{click:t.onBackdropClick}}):t._e(),t._v(" "),t._t("default")],2):t._e()])],1)},staticRenderFns:[]},undefined,{props:{modalClass:{type:String,default:""},backdropClass:{type:String,default:""},transition:{type:String,default:""},visible:{type:Boolean,default:!1},backdrop:{type:[Object,Boolean],default:function(){return{close:!0}}}},methods:{onBackdropClick:function(){(!0===this.backdrop||this.backdrop.close)&&this.$emit("close",{source:"backdrop"})},onAfterLeave:function(){this.$emit("after-leave")}}},undefined,false,undefined,!1,void 0,void 0,void 0);function f(t,e){var data=r({},e,{visible:!0}),n={close:c,"after-leave":function(){if(o){var t=o.$el;t.parentNode.removeChild(t),o.$destroy(),o=null}}},o=new d.Vue({data:data,render:function(e){var o="function"==typeof t?t(e):t;return e(d,{props:data,on:n},[o])}}).$mount();return document.body.appendChild(o.$el),{close:c};function c(){data.visible=!1}}d.Vue=c,d.install=function(t){d.Vue=t,t.prototype.$modal=f,t.component("vl-modal",d)},d.show=f,t.exports=d},276:function(t,e,n){n(277)},277:function(t,e,n){},278:function(t,e,n){"use strict";n(213)},283:function(t,e,n){"use strict";n.r(e);n(44),n(18),n(36);var o=n(15),r=(n(25),n(30),n(3)),c=n(7),l=(n(17),n(86),n(24),n(26),n(87),n(28),n(29),n(9),n(27),n(218)),d=n(176),f="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function h(object,t,e){object.addEventListener?object.addEventListener(t,e,!1):object.attachEvent&&object.attachEvent("on".concat(t),(function(){e(window.event)}))}function v(t,e){for(var n=e.slice(0,e.length-1),i=0;i<n.length;i++)n[i]=t[n[i].toLowerCase()];return n}function m(t){"string"!=typeof t&&(t="");for(var e=(t=t.replace(/\s/g,"")).split(","),n=e.lastIndexOf("");n>=0;)e[n-1]+=",",e.splice(n,1),n=e.lastIndexOf("");return e}for(var y={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"⇪":20,",":188,".":190,"/":191,"`":192,"-":f?173:189,"=":f?61:187,";":f?59:186,"'":222,"[":219,"]":221,"\\":220},C={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},x={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},O={16:!1,18:!1,17:!1,91:!1},_={},w=1;w<20;w++)y["f".concat(w)]=111+w;var k=[],j="all",S=[],code=function(t){return y[t.toLowerCase()]||C[t.toLowerCase()]||t.toUpperCase().charCodeAt(0)};function P(t){j=t||"all"}function I(){return j||"all"}var R=function(t){var e=t.key,n=t.scope,o=t.method,r=t.splitKey,c=void 0===r?"+":r;m(e).forEach((function(t){var e=t.split(c),r=e.length,l=e[r-1],d="*"===l?"*":code(l);if(_[d]){n||(n=I());var f=r>1?v(C,e):[];_[d]=_[d].map((function(t){return(!o||t.method===o)&&t.scope===n&&function(t,e){for(var n=t.length>=e.length?t:e,o=t.length>=e.length?e:t,r=!0,i=0;i<n.length;i++)-1===o.indexOf(n[i])&&(r=!1);return r}(t.mods,f)?{}:t}))}}))};function E(t,e,n){var o;if(e.scope===n||"all"===e.scope){for(var r in o=e.mods.length>0,O)Object.prototype.hasOwnProperty.call(O,r)&&(!O[r]&&e.mods.indexOf(+r)>-1||O[r]&&-1===e.mods.indexOf(+r))&&(o=!1);(0!==e.mods.length||O[16]||O[18]||O[17]||O[91])&&!o&&"*"!==e.shortcut||!1===e.method(t,e)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}function U(t){var e=_["*"],n=t.keyCode||t.which||t.charCode;if(D.filter.call(this,t)){if(93!==n&&224!==n||(n=91),-1===k.indexOf(n)&&229!==n&&k.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(e){var n=x[e];t[e]&&-1===k.indexOf(n)?k.push(n):!t[e]&&k.indexOf(n)>-1?k.splice(k.indexOf(n),1):"metaKey"===e&&t[e]&&3===k.length&&(t.ctrlKey||t.shiftKey||t.altKey||(k=k.slice(k.indexOf(n))))})),n in O){for(var o in O[n]=!0,C)C[o]===n&&(D[o]=!0);if(!e)return}for(var r in O)Object.prototype.hasOwnProperty.call(O,r)&&(O[r]=t[x[r]]);t.getModifierState&&(!t.altKey||t.ctrlKey)&&t.getModifierState("AltGraph")&&(-1===k.indexOf(17)&&k.push(17),-1===k.indexOf(18)&&k.push(18),O[17]=!0,O[18]=!0);var c=I();if(e)for(var i=0;i<e.length;i++)e[i].scope===c&&("keydown"===t.type&&e[i].keydown||"keyup"===t.type&&e[i].keyup)&&E(t,e[i],c);if(n in _)for(var l=0;l<_[n].length;l++)if(("keydown"===t.type&&_[n][l].keydown||"keyup"===t.type&&_[n][l].keyup)&&_[n][l].key){for(var d=_[n][l],f=d.splitKey,h=d.key.split(f),v=[],a=0;a<h.length;a++)v.push(code(h[a]));v.sort().join("")===k.sort().join("")&&E(t,d,c)}}}function D(t,option,e){k=[];var n=m(t),o=[],r="all",element=document,i=0,c=!1,l=!0,d="+";for(void 0===e&&"function"==typeof option&&(e=option),"[object Object]"===Object.prototype.toString.call(option)&&(option.scope&&(r=option.scope),option.element&&(element=option.element),option.keyup&&(c=option.keyup),void 0!==option.keydown&&(l=option.keydown),"string"==typeof option.splitKey&&(d=option.splitKey)),"string"==typeof option&&(r=option);i<n.length;i++)o=[],(t=n[i].split(d)).length>1&&(o=v(C,t)),(t="*"===(t=t[t.length-1])?"*":code(t))in _||(_[t]=[]),_[t].push({keyup:c,keydown:l,scope:r,mods:o,shortcut:n[i],method:e,key:n[i],splitKey:d});void 0!==element&&!function(element){return S.indexOf(element)>-1}(element)&&window&&(S.push(element),h(element,"keydown",(function(t){U(t)})),h(window,"focus",(function(){k=[]})),h(element,"keyup",(function(t){U(t),function(t){var e=t.keyCode||t.which||t.charCode,i=k.indexOf(e);if(i>=0&&k.splice(i,1),t.key&&"meta"===t.key.toLowerCase()&&k.splice(0,k.length),93!==e&&224!==e||(e=91),e in O)for(var n in O[e]=!1,C)C[n]===e&&(D[n]=!1)}(t)})))}var $={setScope:P,getScope:I,deleteScope:function(t,e){var n,i;for(var o in t||(t=I()),_)if(Object.prototype.hasOwnProperty.call(_,o))for(n=_[o],i=0;i<n.length;)n[i].scope===t?n.splice(i,1):i++;I()===t&&P(e||"all")},getPressedKeyCodes:function(){return k.slice(0)},isPressed:function(t){return"string"==typeof t&&(t=code(t)),-1!==k.indexOf(t)},filter:function(t){var e=t.target||t.srcElement,n=e.tagName,o=!0;return!e.isContentEditable&&("INPUT"!==n&&"TEXTAREA"!==n&&"SELECT"!==n||e.readOnly)||(o=!1),o},unbind:function(t){if(t){if(Array.isArray(t))t.forEach((function(t){t.key&&R(t)}));else if("object"==typeof t)t.key&&R(t);else if("string"==typeof t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var r=n[0],c=n[1];"function"==typeof r&&(c=r,r=""),R({key:t,scope:r,method:c,splitKey:"+"})}}else Object.keys(_).forEach((function(t){return delete _[t]}))}};for(var a in $)Object.prototype.hasOwnProperty.call($,a)&&(D[a]=$[a]);if("undefined"!=typeof window){var K=window.hotkeys;D.noConflict=function(t){return t&&window.hotkeys===D&&(window.hotkeys=K),D},window.hotkeys=D}var L=D,N=n(166),A=(n(61),n(62),n(274),{props:{title:{},content:{},readOnly:{}},methods:{onChange:function(t){this.$emit("change",t.target.value)},onClick:function(t){if(this.readOnly){var e=t.target;setTimeout((function(){e.select()}))}},onClose:function(){this.$emit("close")}}}),B=n(37),T={components:{DataModal:Object(B.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal"},[n("div",{staticClass:"modal-overlay",on:{click:t.onClose}}),t._v(" "),n("div",{staticClass:"modal-content"},[n("div",{staticClass:"mb-2",domProps:{textContent:t._s(t.title)}}),t._v(" "),n("div",{staticClass:"mb-2"},[n("textarea",{staticClass:"form-input",attrs:{rows:"10",readOnly:t.readOnly},domProps:{value:t.content},on:{input:t.onChange,click:t.onClick}})]),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null).exports},props:["title","storageKey","activeIndex"],data:function(){return{search:null,snapshots:[],modal:null}},computed:{filtered:function(){var t=this.search,e=this.snapshots.map((function(data,t){return{data:data,index:t}}));return t&&(e=e.filter((function(e){return e.data.name.includes(t)}))),e}},methods:{onRemove:function(t){var e=t.index;this.snapshots.splice(e,1),this.dump()},onPick:function(t){var e=t.index,data=t.data;this.$emit("pick",e,data)},dump:function(){this.storage.dump(this.snapshots)},update:function(t,e){var n=t.name,o={name:n,data:t.data},r=this.snapshots;e>=0&&r.splice(e,1);for(var c=0;c<r.length&&this.compare(r[c].name,n)<0;)c+=1;return r.splice(c,0,o),this.dump(),c},get:function(t){return this.snapshots[t]},onClear:function(){this.search=null},compare:function(t,e){return t="".concat(t||""),e="".concat(e||""),t.localeCompare(e,"zh-CN")},onImport:function(){this.modal={title:"Import data",content:"",message:"",error:!1}},onExport:function(){var content=JSON.stringify(this.snapshots);this.modal={title:"Export data",content:content,readOnly:!0}},onChange:function(t){this.modal.content=t},onClose:function(){this.modal&&(this.modal=null)},importData:function(){var t=this;try{var data=JSON.parse(this.modal.content);if(!Array.isArray(data))throw new Error("Invalid data.");data.forEach((function(e){t.snapshots.push(e)})),this.normalize(),this.modal.message="Data imported successfully.",this.dump()}catch(t){return this.modal.error=!0,this.modal.message="".concat(t),void console.error(t)}this.modal.error=!1},normalize:function(){var t=this;this.snapshots.sort((function(a,b){return t.compare(a.name,b.name)}))}},mounted:function(){this.storage=Object(N.b)(this.storageKey),this.snapshots=this.storage.load([]),this.normalize()}},M=Object(B.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"snapshots"},[n("div",{staticClass:"flex mb-1"},[t._t("title",[n("span",{domProps:{textContent:t._s(t.title)}})]),t._v(" "),n("a",{staticClass:"ml-1 tooltip inline-block",attrs:{href:"#","data-tooltip":"Import"},on:{click:function(e){return e.preventDefault(),t.onImport(e)}}},[n("svg",{staticClass:"upload w-6 h-6",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]),t._v(" "),n("a",{staticClass:"ml-1 tooltip inline-block",attrs:{href:"#","data-tooltip":"Export"},on:{click:function(e){return e.preventDefault(),t.onExport(e)}}},[n("svg",{staticClass:"download w-6 h-6",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])],2),t._v(" "),n("div",{staticClass:"flex flex-col shadow p-2 rounded",staticStyle:{height:"70vh"}},[n("div",{staticClass:"form-group has-icon-right mb-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-input",domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),n("i",{staticClass:"form-icon icon",class:t.search?"icon-cross":"icon-search",on:{click:t.onClear}})]),t._v(" "),t.filtered.length?n("div",{staticClass:"flex-1 overflow-y-auto"},t._l(t.filtered,(function(e){return n("div",{key:e.index,staticClass:"menu-item",class:{active:t.activeIndex===e.index}},[n("div",{staticClass:"flex-1",domProps:{textContent:t._s(e.data.name)},on:{click:function(n){return n.preventDefault(),t.onPick(e)}}}),t._v(" "),n("a",{attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.onRemove(e)}}},[n("svg",{staticClass:"x w-6 h-6",attrs:{viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])})),0):n("div",{staticClass:"flex-1 empty"},[n("div",{staticClass:"empty-title"},[t._v("None")])])]),t._v(" "),t.modal?n("data-modal",{attrs:{title:t.modal.title,content:t.modal.content,readOnly:t.modal.readOnly},on:{change:t.onChange,close:t.onClose}},[t.modal.message?n("span",{staticClass:"mr-2",class:t.modal.error?"text-error":"text-success",domProps:{textContent:t._s(t.modal.message)}}):t._e(),t._v(" "),t.modal.readOnly?t._e():n("button",{staticClass:"btn btn-primary",on:{click:t.importData}},[t._v("Import and merge")]),t._v(" "),n("button",{staticClass:"btn",on:{click:t.onClose}},[t._v("Close")])]):t._e()],1)}),[],!1,null,null,null).exports,V=n(168),J=(n(120),n(89),n(88),n(63),n(16));function z(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function Q(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?z(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):z(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function H(t){if(!t||"object"!==Object(J.a)(t))return t;var e={};return Object.entries(t).forEach((function(t){var n=Object(c.a)(t,2),o=n[0],r=n[1];null!=r&&""!==r&&(e[o]=r)})),e}function F(t){var e;if("url"===(e=null!=t&&t._type?t:t&&"object"===Object(J.a)(t)?{_type:"object",data:t}:{_type:"primitive",data:t})._type){var n=[e.protocol,e.host&&"//",e.host],o=e.pathname||e.path,r=e.query;if("otpauth:"===e.protocol){var c=e.payload||{};c.type&&c.label&&(o="//".concat(encodeURIComponent(c.type),"/").concat(encodeURIComponent(c.label))),r=H(r)}else"vmess:"===e.protocol&&e.payload&&(o="//"+btoa(JSON.stringify(H(e.payload))).replace(/=+$/,""));n.push(o);var l=F(r),d=F(e.hash);return l&&n.push("?",l),d&&n.push("#",d),n.filter(Boolean).join("")}if("object"===e._type&&e.data){var data=e.data;return Array.isArray(data)?data.map(F).map(encodeURIComponent).join(","):Object.keys(e.data).map((function(t){var n=e.data[t];if(null!=n)return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(F(n)))})).filter(Boolean).join("&")}return null==e.data?"":e.data}function X(t){var e,n=!0;try{e=new URL(t)}catch(o){if(n=!1,t.includes("?"))try{e=new URL("rel:"+t)}catch(t){}}if(e){var o={_type:"url"};if(n&&(o.protocol=e.protocol),e.host&&(o.host=e.host),"otpauth:"===e.protocol){var r=e.pathname.match(/^\/\/([^/]*)\/(.*)|$/).map((function(s){return s&&decodeURIComponent(s)})),l=Object(c.a)(r,3),d=l[1],label=l[2];o.payload={type:d||"totp",label:label||""},o.query={secret:"",issuer:"",algorithm:"",digits:"",period:"",counter:""}}else if("vmess:"===e.protocol){if(o.payload={add:"",aid:"",host:"",id:"xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx",net:"ws",path:"/ws",port:"",ps:"example",tls:"",type:"none",v:"2"},e.pathname.startsWith("//"))try{o.payload=Q(Q({},o.payload),JSON.parse(atob(e.pathname.slice(2))))}catch(t){}}else o.pathname=e.pathname;return e.search.length>1&&(o.query=Q(Q({},o.query),X(e.search.slice(1)))),e.hash.length>1&&(o.hash=Q(Q({},o.hash),X(e.hash.slice(1)))),o}return/&|=[^=]/.test(t)?t.split("&").reduce((function(t,e){var n=e.split("="),o=Object(c.a)(n,2),r=o[0],l=o[1];return t[decodeURIComponent(r)]=X(decodeURIComponent(l)),t}),{}):decodeURIComponent(t)}function G(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function W(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?G(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):G(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var Y={mode:"yaml"},Z=Object(N.b)("url-builder/settings"),tt=Z.load({}),et={mixins:[V.a],components:{VlCode:function(){return Promise.all([n.e(2),n.e(14)]).then(n.bind(null,279))},Snapshots:M,QRCanvas:l.a},data:function(){return{content:{},shareContent:null,activeIndex:null,error:null,optionsCodeMirror:Y,optionsQR:null}},watch:{"content.result":"updateQR","content.label":"updateQR"},methods:{updateQR:function(){var t=this.content.result;this.optionsQR={data:t},this.shareContent=null},onUpdated:function(canvas){var label=this.content.label;if(label){var t=canvas.getContext("2d");t.clearRect(0,300,300,40),t.font='24px -apple-system, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',t.fillStyle="dodgerblue",t.textAlign="center",t.fillText(label,150,330)}},onReset:function(){this.activeIndex=-1,this.content={name:null,label:null,config:"",result:null}},onAutoSave:function(){var t=this.content,e=t.name,label=t.label,n=t.config,o=this.activeIndex;tt.autoSaved={name:e,label:label,config:n,activeIndex:o},Z.dump(tt)},onChange:Object(N.a)((function(data){data!==this.cachedData&&(this.cachedData=data,this.content.config=data,this.onUpdate(),this.onAutoSave())}),300),onParse:Object(N.a)((function(){var t=this.$refs.result.value;this.content.result=t;var e=X(t);this.cachedData=d.a.dump(e),this.content.config=this.cachedData,this.onAutoSave()}),300),onUpdate:function(){try{var t=d.a.load(this.content.config);this.content.result=F(t),this.error=null}catch(t){this.error=t.toString(),console.error(t)}},loadData:function(t){var e=t.name,label=t.label,n=t.config,o=t.activeIndex;this.content={name:e,label:label,config:n,result:this.content.result},null!=o&&(this.activeIndex=o),this.onUpdate()},onPick:function(t){this.activeIndex=this.activeIndex===t?-1:t;var e=this.$refs.snapshots.get(this.activeIndex);e&&this.loadData(e.data)},onUpdateIndex:function(t){this.activeIndex=t},onSave:function(t){var e=this.content,n=e.name,o={name:n||"No name",data:{name:n,label:e.label,config:e.config}};this.activeIndex=this.$refs.snapshots.update(o,t?-1:this.activeIndex),this.showToast("Saved")},onShare:function(){var t=window.location,e=t.origin,n=t.pathname,o=t.search,r=this.content,l={name:r.name,label:r.label,result:r.result},d=Object.entries(l).map((function(t){var e=Object(c.a)(t,2),n=e[0],o=e[1];return o&&[n,o].map(encodeURIComponent).join("=")})).filter(Boolean).join("&");d="".concat(d,"&_=");var f="".concat(e).concat(n).concat(o,"#").concat(d);this.shareContent={url:f}},onSelectAll:function(t){t.target.select()},onReady:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="20180930",tt.autoSaved&&t.loadData(tt.autoSaved),t.checkHash(),tt.version!==n){e.next=5;break}return e.abrupt("return");case 5:tt.version=n,Z.dump(tt);case 7:case"end":return e.stop()}}),e)})))()},checkHash:function(){var t=new URLSearchParams(window.location.hash.slice(1)),content={name:t.get("name"),label:t.get("label"),result:t.get("result")};content.result&&(this.activeIndex=-1,this.content=W(W({},this.content),content),this.onParse(),window.location.hash="")}},created:function(){this.onReset()},mounted:function(){var t=this;L.filter=function(){return!0},L("ctrl+s,command+s",(function(e){e.preventDefault(),t.onSave()}))},beforeDestroy:function(){L.unbind("ctrl+s,command+s")},errorCaptured:function(t,e,n){this.trackError(t,{message:"qrcode",c3:JSON.stringify({config:this.content.config,info:n})})}},nt=(n(278),Object(B.a)(et,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("URL Builder")]),t._v(" "),n("section",[n("div",{staticClass:"flex items-start"},[n("div",{staticClass:"flex-1 min-w-0"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"flex-1 min-w-0 mr-4"},[n("div",[t._m(0),t._v(" "),n("vl-code",{staticClass:"t-code",attrs:{value:t.content.config,options:t.optionsCodeMirror},on:{ready:t.onReady,input:t.onChange}})],1)]),t._v(" "),n("div",{staticClass:"flex-1 mr-4"},[n("div",[t._m(1),t._v(" "),n("textarea",{ref:"result",staticClass:"form-input",attrs:{rows:"4"},domProps:{value:t.content.result},on:{input:t.onParse}})]),t._v(" "),n("div",{staticClass:"mt-4"},[n("QRCanvas",{staticClass:"qrcode",attrs:{width:"300",height:t.content.label?340:300,options:t.optionsQR},on:{updated:t.onUpdated}})],1),t._v(" "),t.error?n("div",{staticClass:"mt-2 bg-red-500 text-white",domProps:{textContent:t._s(t.error)}}):t._e()])]),t._v(" "),n("div",{staticClass:"mt-4 mr-4"},[n("label",{staticClass:"mb-1"},[t._v("Label")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.content.label,expression:"content.label"}],staticClass:"form-input",domProps:{value:t.content.label},on:{input:function(e){e.target.composing||t.$set(t.content,"label",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mt-4 mr-4"},[n("label",{staticClass:"mb-1"},[t._v("Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.content.name,expression:"content.name"}],staticClass:"form-input",domProps:{value:t.content.name},on:{input:function(e){e.target.composing||t.$set(t.content,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"mt-4"},[n("button",{staticClass:"mr-2 mb-1",on:{click:t.onReset}},[t._v("Reset")]),t._v(" "),n("button",{staticClass:"mr-2 mb-1",attrs:{disabled:!t.content.config},on:{click:function(e){return t.onSave()}}},[t._v("Save")]),t._v(" "),n("button",{staticClass:"mr-2 mb-1",attrs:{disabled:!t.content.config},on:{click:function(e){return t.onSave(1)}}},[t._v("Save as New")]),t._v(" "),n("button",{staticClass:"mr-2 mb-1",attrs:{disabled:!t.content.config},on:{click:t.onShare}},[t._v("Share")])]),t._v(" "),t.shareContent?n("div",[n("input",{staticClass:"form-input",attrs:{readonly:""},domProps:{value:t.shareContent.url},on:{click:t.onSelectAll}})]):t._e()]),t._v(" "),n("snapshots",{ref:"snapshots",attrs:{title:"Snapshots","active-index":t.activeIndex,"storage-key":"url-builder/snapshots"},on:{pick:t.onPick,update:t.onUpdateIndex}})],1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-1"},[t._v("\n                Parsed data\n                "),n("span",{staticClass:"ml-1 text-sm"},[t._v("(in Yaml)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-1"},[t._v("\n                URL\n                "),n("span",{staticClass:"ml-1 text-sm"},[t._v("(Special protocols like "),n("code",[t._v("otpauth:")]),t._v(", "),n("code",[t._v("vmess:")]),t._v(" are supported)")])])}],!1,null,null,null));e.default=nt.exports}}]);