(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8oxB":function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var c,f=[],s=!1,l=-1;function d(){s&&c&&(s=!1,c.length?f=c.concat(f):l=-1,f.length&&p())}function p(){if(!s){var e=u(d);s=!0;for(var t=f.length;t;){for(c=f,f=[];++l<t;)c&&c[l].run();l=-1,t=f.length}c=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new h(e,t)),1!==f.length||s||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},CeAt:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),i=r("yLiY"),a=r.n(i),u=r("ntF4"),c=r("Igcr"),f=r("uvEW"),s=r("qKvR"),l=r("/MKj"),d=r("8Rtz"),p=r("snnH"),h=r("sLDa");o.a.createElement;var v={name:"728fgs",styles:"display:flex;flex-flow:column;align-items:center;"},y=Object(l.c)((function(e){var t,r,n;return{redirectTo:null===e||void 0===e?void 0:null===(t=e.loginRegister)||void 0===t?void 0:t.redirectTo,username:null===e||void 0===e?void 0:null===(r=e.loginRegister)||void 0===r?void 0:r.username,password:null===e||void 0===e?void 0:null===(n=e.loginRegister)||void 0===n?void 0:n.password}}),(function(e){return{setUsername:Object(p.a)(e,h.a.UPDATE_USERNAME),setPassword:Object(p.a)(e,h.a.UPDATE_PASSWORD),setRedirectTo:Object(p.a)(e,h.a.UPDATE_LOGIN_REDIRECT_TO)}}))((function(e){var t=e.username,r=e.password,n=e.redirectTo,o=e.setUsername,i=e.setPassword,a=e.setRedirectTo;return Object(s.c)("div",{css:v},Object(s.c)("input",{type:"text",placeholder:"username",value:t,onChange:function(e){return o(e.target.value)}}),Object(s.c)("input",{type:"text",placeholder:"password",value:r,onChange:function(e){return i(e.target.value)}}),Object(s.c)(d.a,{href:n},Object(s.c)("a",{onClick:function(){a("")}},"Login")))}));r.d(t,"Page",(function(){return w}));o.a.createElement;var b=a()().publicRuntimeConfig,g=b.commonKeyWords,m=b.themeColor,w=function(){return Object(s.c)("div",null,Object(s.c)(u.a,{title:"login-register",description:"login-register",keywords:g,themeColor:m,hrefCanonical:"/login-register"}),Object(s.c)(y,null))};t.default=Object(c.a)({callbackOnMount:function(e){e.substitueReducers(f.a)},Child:w})},QvNR:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login-register",function(){return r("CeAt")}])},"V/h/":function(e,t,r){"use strict";(function(e){var r,n="undefined"!==typeof Symbol?Symbol("immer-nothing"):((r={})["immer-nothing"]=!0,r),o="undefined"!==typeof Symbol&&Symbol.for?Symbol.for("immer-draftable"):"__$immer_draftable",i="undefined"!==typeof Symbol&&Symbol.for?Symbol.for("immer-state"):"__$immer_state";function a(e){return!!e&&!!e[i]}function u(e){return!!e&&(function(e){if(!e||"object"!==typeof e)return!1;if(Array.isArray(e))return!0;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||!!e[o]||!!e.constructor[o]||m(e)||O(e))}function c(e){if(e&&e[i])return e[i].base}var f=Object.assign||function(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];return t.forEach((function(t){"object"===typeof t&&null!==t&&Object.keys(t).forEach((function(r){return e[r]=t[r]}))})),e},s="undefined"!==typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:"undefined"!==typeof Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function l(e,t){if(void 0===t&&(t=!1),Array.isArray(e))return e.slice();if(m(e))return new Map(e);if(O(e))return new Set(e);var r=Object.create(Object.getPrototypeOf(e));return s(e).forEach((function(n){if(n!==i){var o=Object.getOwnPropertyDescriptor(e,n),a=o.value;if(o.get){if(!t)throw new Error("Immer drafts cannot have computed properties");a=o.get.call(e)}o.enumerable?r[n]=a:Object.defineProperty(r,n,{value:a,writable:!0,configurable:!0})}})),r}function d(e,t){Array.isArray(e)||m(e)||O(e)?e.forEach((function(r,n){return t(n,r,e)})):s(e).forEach((function(r){return t(r,e[r],e)}))}function p(e,t){var r=Object.getOwnPropertyDescriptor(e,t);return!!r&&r.enumerable}function h(e,t){return m(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function v(e,t){return m(e)?e.get(t):e[t]}function y(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}var b="undefined"!==typeof Symbol,g="undefined"!==typeof Map;function m(e){return g&&e instanceof Map}var w="undefined"!==typeof Set;function O(e){return w&&e instanceof Set}function P(e){var t,r;return(t={})[Symbol.iterator]=function(){return r},t.next=e,r=t}function E(e,t,r){var n="values"!==t;return function(){var t=z(e)[Symbol.iterator]();return P((function(){var e=t.next();if(!e.done){var o=e.value[0],i=r.get(o);e.value=n?[o,i]:i}return e}))}}function j(e){return function(t,r){var n="entries"===r;return function(){var r=z(t)[Symbol.iterator]();return P((function(){var o=r.next();if(!o.done){var i=function(t,r){var n=c(r)||r,o=t.drafts.get(n);if(!o){if(t.finalized||!u(r)||t.finalizing)return r;o=e(r,t),t.drafts.set(n,o),t.modified&&t.copy.add(o)}return o}(t,o.value);o.value=n?[i,i]:i}return o}))}}}function z(e){return e.copy||e.base}function A(e){if(!u(e))return e;if(Array.isArray(e))return e.map(A);if(m(e))return new Map(e);if(O(e))return new Set(e);var t=Object.create(Object.getPrototypeOf(e));for(var r in e)t[r]=A(e[r]);return t}function T(e,t){void 0===t&&(t=!1),!u(e)||a(e)||Object.isFrozen(e)||(O(e)?e.add=e.clear=e.delete=R:m(e)&&(e.set=e.clear=e.delete=R),Object.freeze(e),t&&d(e,(function(e,t){return T(t,!0)})))}function R(){throw new Error("This object has been frozen and should not be mutated")}var k=function(e){this.drafts=[],this.parent=e,this.canAutoFreeze=!0,this.patches=null};function D(e){e[i].revoke()}function x(e,t){var r,n=Array.isArray(e),o=C(e);m(e)?(r=o,Object.defineProperties(r,L),b&&Object.defineProperty(r,Symbol.iterator,J(E))):O(e)?function(e){Object.defineProperties(e,W),b&&Object.defineProperty(e,Symbol.iterator,J(U))}(o):d(o,(function(t){!function(e,t,r){var n=I[t];n?n.enumerable=r:I[t]=n={configurable:!0,enumerable:r,get:function(){return function(e,t){q(e);var r=F(S(e),t);if(e.finalizing)return r;if(r===F(e.base,t)&&u(r))return N(e),e.copy[t]=x(r,e);return r}(this[i],t)},set:function(e){!function(e,t,r){if(q(e),e.assigned[t]=!0,!e.modified){if(y(r,F(S(e),t)))return;M(e),N(e)}e.copy[t]=r}(this[i],t,e)}};Object.defineProperty(e,t,n)}(o,t,n||p(e,t))}));var a=t?t.scope:k.current,c={scope:a,modified:!1,finalizing:!1,finalized:!1,assigned:m(e)?new Map:{},parent:t,base:e,draft:o,drafts:O(e)?new Map:null,copy:null,revoke:_,revoked:!1};return function(e,t,r){Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0})}(o,i,c),a.drafts.push(o),o}function _(){this.revoked=!0}function S(e){return e.copy||e.base}function F(e,t){var r=e[i];if(r&&!r.finalizing){r.finalizing=!0;var n=e[t];return r.finalizing=!1,n}return e[t]}function M(e){e.modified||(e.modified=!0,e.parent&&M(e.parent))}function N(e){e.copy||(e.copy=C(e.base))}function C(e){var t=e&&e[i];if(t){t.finalizing=!0;var r=l(t.draft,!0);return t.finalizing=!1,r}return l(e)}k.prototype.usePatches=function(e){e&&(this.patches=[],this.inversePatches=[],this.patchListener=e)},k.prototype.revoke=function(){this.leave(),this.drafts.forEach(D),this.drafts=null},k.prototype.leave=function(){this===k.current&&(k.current=this.parent)},k.current=null,k.enter=function(){return this.current=new k(this.current)};var I={};var L=K({size:function(e){return S(e).size},has:function(e){return function(t){return S(e).has(t)}},set:function(e){return function(t,r){return S(e).get(t)!==r&&(N(e),M(e),e.assigned.set(t,!0),e.copy.set(t,r)),e.draft}},delete:function(e){return function(t){return N(e),M(e),e.assigned.set(t,!1),e.copy.delete(t),!1}},clear:function(e){return function(){e.copy||N(e),M(e),e.assigned=new Map;for(var t=0,r=S(e).keys();t<r.length;t+=1){var n=r[t];e.assigned.set(n,!1)}return e.copy.clear()}},forEach:function(e,t,r){return function(t){S(e).forEach((function(e,n,o){t(r.get(n),n,o)}))}},get:function(e){return function(t){var r=S(e).get(t);if(e.finalizing||e.finalized||!u(r))return r;if(r!==e.base.get(t))return r;var n=x(r,e);return N(e),e.copy.set(t,n),n}},keys:function(e){return function(){return S(e).keys()}},values:E,entries:E});var U=j(x),W=K({size:function(e){return S(e).size},add:function(e){return function(t){return S(e).has(t)||(M(e),e.copy||N(e),e.copy.add(t)),e.draft}},delete:function(e){return function(t){return M(e),e.copy||N(e),e.copy.delete(t)}},has:function(e){return function(t){return S(e).has(t)}},clear:function(e){return function(){return M(e),e.copy||N(e),e.copy.clear()}},keys:U,entries:U,values:U,forEach:function(e){return function(t,r){for(var n=U(e)(),o=n.next();!o.done;)t.call(r,o.value,o.value,e.draft),o=n.next()}}});function K(e){return Object.keys(e).reduce((function(t,r){var n="size"===r?G:J;return t[r]=n(e[r],r),t}),{})}function G(e){return{get:function(){var t=this[i];return q(t),e(t)}}}function J(e,t){return{get:function(){return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];var o=this[i];return q(o),e(o,t,o.draft).apply(void 0,r)}}}}function q(e){if(!0===e.revoked)throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+JSON.stringify(S(e)))}function B(e){for(var t=e.length-1;t>=0;t--){var r=e[t][i];r.modified||(Array.isArray(r.base)?Q(r)&&M(r):m(r.base)?V(r)&&M(r):O(r.base)?X(r)&&M(r):H(r)&&M(r))}}function H(e){for(var t=e.base,r=e.draft,n=Object.keys(r),o=n.length-1;o>=0;o--){var a=n[o],u=t[a];if(void 0===u&&!h(t,a))return!0;var c=r[a],f=c&&c[i];if(f?f.base!==u:!y(c,u))return!0}return n.length!==Object.keys(t).length}function Q(e){var t=e.draft;if(t.length!==e.base.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}function V(e){var t=e.base,r=e.draft;if(t.size!==r.size)return!0;var n=!1;return r.forEach((function(e,r){n||(n=u(e)?e.modified:e!==t.get(r))})),n}function X(e){var t=e.base,r=e.draft;if(t.size!==r.size)return!0;var n=!1;return r.forEach((function(e,r){n||(n=u(e)?e.modified:!t.has(r))})),n}var Y,$,Z=Object.freeze({willFinalize:function(e,t,r){e.drafts.forEach((function(e){e[i].finalizing=!0})),r?a(t)&&t[i].scope===e&&B(e.drafts):(e.patches&&function e(t){if(!t||"object"!==typeof t)return;var r=t[i];if(!r)return;var n=r.base,o=r.draft,a=r.assigned;if(Array.isArray(t)){if(Q(r)){if(M(r),a.length=!0,o.length<n.length)for(var u=o.length;u<n.length;u++)a[u]=!1;else for(var c=n.length;c<o.length;c++)a[c]=!0;for(var f=0;f<o.length;f++)void 0===a[f]&&e(o[f])}}else Object.keys(o).forEach((function(t){void 0!==n[t]||h(n,t)?a[t]||e(o[t]):(a[t]=!0,M(r))})),Object.keys(n).forEach((function(e){void 0!==o[e]||h(o,e)||(a[e]=!1,M(r))}))}(e.drafts[0]),B(e.drafts))},createProxy:x});function ee(e,t){var r=t?t.scope:k.current,n={scope:r,modified:!1,finalized:!1,assigned:{},parent:t,base:e,draft:null,drafts:{},copy:null,revoke:null},o=n,i=te;Array.isArray(e)?(o=[n],i=re):m(e)?(i=oe,n.drafts=new Map,n.assigned=new Map):O(e)&&(i=ae,n.drafts=new Map);var a=Proxy.revocable(o,i),u=a.revoke,c=a.proxy;return n.draft=c,n.revoke=u,r.drafts.push(c),c}var te={get:function(e,t){if(t===i)return e;var r=e.drafts;if(!e.modified&&h(r,t))return r[t];var n=ue(e)[t];if(e.finalized||!u(n))return n;if(e.modified){if(n!==ce(e.base,t))return n;r=e.copy}return r[t]=ee(n,e)},has:function(e,t){return t in ue(e)},ownKeys:function(e){return Reflect.ownKeys(ue(e))},set:function(e,t,r){if(!e.modified){var n=ce(e.base,t);if(r?y(n,r)||r===e.drafts[t]:y(n,r)&&t in e.base)return!0;fe(e)}return e.assigned[t]=!0,e.copy[t]=r,!0},deleteProperty:function(e,t){return void 0!==ce(e.base,t)||t in e.base?(e.assigned[t]=!1,fe(e)):e.assigned[t]&&delete e.assigned[t],e.copy&&delete e.copy[t],!0},getOwnPropertyDescriptor:function(e,t){var r=ue(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&(n.writable=!0,n.configurable=!Array.isArray(r)||"length"!==t),n},defineProperty:function(){throw new Error("Object.defineProperty() cannot be used on an Immer draft")},getPrototypeOf:function(e){return Object.getPrototypeOf(e.base)},setPrototypeOf:function(){throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft")}},re={};d(te,(function(e,t){re[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),re.deleteProperty=function(e,t){if(isNaN(parseInt(t)))throw new Error("Immer only supports deleting array indices");return te.deleteProperty.call(this,e[0],t)},re.set=function(e,t,r){if("length"!==t&&isNaN(parseInt(t)))throw new Error("Immer only supports setting array indices and the 'length' property");return te.set.call(this,e[0],t,r)};var ne=["ownKeys","has","set","deleteProperty","defineProperty","getOwnPropertyDescriptor","preventExtensions","isExtensible","getPrototypeOf"].reduce((function(e,t){return e[t]=function(e){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];return Reflect[t].apply(Reflect,[ue(e)].concat(r))},e}),{}),oe=se(((Y={})[i]=function(e){return e},Y.size=function(e){return ue(e).size},Y.has=function(e){return function(t){return ue(e).has(t)}},Y.set=function(e){return function(t,r){var n=ue(e);return n.has(t)&&n.get(t)===r||(fe(e),e.assigned.set(t,!0),e.copy.set(t,r)),e.draft}},Y.delete=function(e){return function(t){return!!ue(e).has(t)&&(fe(e),e.assigned.set(t,!1),e.copy.delete(t))}},Y.clear=function(e){return function(){fe(e),e.assigned=new Map;for(var t=0,r=ue(e).keys();t<r.length;t+=1){var n=r[t];e.assigned.set(n,!1)}return e.copy.clear()}},Y.forEach=function(e,t,r){return function(t,n){return ue(e).forEach((function(e,o,i){var a=r.get(o);t.call(n,a,o,i)}))}},Y.get=function(e){return function(t){var r=e[e.modified?"copy":"drafts"];if(r.has(t))return r.get(t);var n=ue(e).get(t);if(e.finalized||!u(n))return n;var o=ee(n,e);return r.set(t,o),o}},Y.keys=function(e){return function(){return ue(e).keys()}},Y.values=E,Y.entries=E,Y[b?Symbol.iterator:"@@iterator"]=E,Y)),ie=j(ee),ae=se((($={})[i]=function(e){return e},$.size=function(e){return ue(e).size},$.has=function(e){return function(t){return ue(e).has(t)}},$.add=function(e){return function(t){return ue(e).has(t)||(fe(e),e.copy.add(t)),e.draft}},$.delete=function(e){return function(t){return fe(e),e.copy.delete(t)}},$.clear=function(e){return function(){return fe(e),e.copy.clear()}},$.forEach=function(e){return function(t,r){for(var n=ie(e)(),o=n.next();!o.done;)t.call(r,o.value,o.value,e.draft),o=n.next()}},$.keys=ie,$.values=ie,$.entries=ie,$[b?Symbol.iterator:"@@iterator"]=ie,$));function ue(e){return e.copy||e.base}function ce(e,t){var r=e[i],n=Reflect.getOwnPropertyDescriptor(r?ue(r):e,t);return n&&n.value}function fe(e){if(!e.modified){e.modified=!0;var t=e.base,r=e.drafts,n=e.parent,o=l(t);O(t)?(i=o,r.forEach((function(e){var t=c(e);t&&i.delete(t),i.add(e)}))):(m(t)?function(e,t){t.forEach((function(t,r){return e.set(r,t)}))}(o,r):f(o,r),e.drafts=null),e.copy=o,n&&fe(n)}var i}function se(e){return Object.assign({},ne,{get:function(t,r,n){return e.hasOwnProperty(r)?e[r](t,r,n):Reflect.get(t,r,n)},setPrototypeOf:function(e){throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft")}})}var le=Object.freeze({willFinalize:function(){},createProxy:ee});function de(e,t,r,n){var o,i,a=e.base,u=e.copy,c=e.assigned;u.length<a.length&&(a=(o=[u,a])[0],u=o[1],r=(i=[n,r])[0],n=i[1]);for(var f=u.length-a.length,s=0;a[s]===u[s]&&s<a.length;)++s;for(var l=a.length;l>s&&a[l-1]===u[l+f-1];)--l;for(var d=s;d<l;++d)if(c[d]&&u[d]!==a[d]){var p=t.concat([d]);r.push({op:"replace",path:p,value:u[d]}),n.push({op:"replace",path:p,value:a[d]})}for(var h=r.length,v=l+f-1;v>=l;--v){var y=t.concat([v]);r[h+v-l]={op:"add",path:y,value:u[v]},n.push({op:"remove",path:y})}}function pe(e,t,r,n){var o=e.base,i=e.copy;d(e.assigned,(function(e,a){var u=v(o,e),c=v(i,e),f=a?h(o,e)?"replace":"add":"remove";if(u!==c||"replace"!==f){var s=t.concat(e);r.push("remove"===f?{op:f,path:s}:{op:f,path:s,value:c}),n.push("add"===f?{op:"remove",path:s}:"remove"===f?{op:"add",path:s,value:u}:{op:"replace",path:s,value:u})}}))}function he(e,t,r,n){for(var o=e.base,i=e.copy,a=0,u=0,c=o;u<c.length;u+=1){var f=c[u];if(!i.has(f)){var s=t.concat([a]);r.push({op:"remove",path:s,value:f}),n.unshift({op:"add",path:s,value:f})}a++}a=0;for(var l=0,d=i;l<d.length;l+=1){var p=d[l];if(!o.has(p)){var h=t.concat([a]);r.push({op:"add",path:h,value:p}),n.unshift({op:"remove",path:h,value:p})}a++}}var ve=function(e,t){for(var r=0,n=t;r<n.length;r+=1){var o=n[r],i=o.path,a=o.op;if(!i.length)throw new Error("Illegal state");for(var u=e,c=0;c<i.length-1;c++)if(!(u=v(u,i[c]))||"object"!==typeof u)throw new Error("Cannot apply patch, path doesn't resolve: "+i.join("/"));var f=A(o.value),s=i[i.length-1];switch(a){case"replace":if(m(u))u.set(s,f);else{if(O(u))throw new Error('Sets cannot have "replace" patches.');u[s]=f}break;case"add":O(u)&&u.delete(o.value),Array.isArray(u)?u.splice(s,0,f):m(u)?u.set(s,f):O(u)?u.add(f):u[s]=f;break;case"remove":Array.isArray(u)?u.splice(s,1):m(u)?u.delete(s):O(u)?u.delete(o.value):delete u[s];break;default:throw new Error("Unsupported patch operation: "+a)}}return e};var ye={useProxies:"undefined"!==typeof Proxy&&"undefined"!==typeof Proxy.revocable&&"undefined"!==typeof Reflect,autoFreeze:"undefined"===typeof e&&"verifyMinified"===function(){}.name,onAssign:null,onDelete:null,onCopy:null},be=function(e){f(this,ye,e),this.setUseProxies(this.useProxies),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)};be.prototype.produce=function(e,t,r){var o,i=this;if("function"===typeof e&&"function"!==typeof t){var a=t;t=e;var c=this;return function(e){var r=this;void 0===e&&(e=a);for(var n=[],o=arguments.length-1;o-- >0;)n[o]=arguments[o+1];return c.produce(e,(function(e){return t.call.apply(t,[r,e].concat(n))}))}}if("function"!==typeof t)throw new Error("The first or second argument to `produce` must be a function");if(void 0!==r&&"function"!==typeof r)throw new Error("The third argument to `produce` must be a function or undefined");if(u(e)){var f=k.enter(),s=this.createProxy(e),l=!0;try{o=t(s),l=!1}finally{l?f.revoke():f.leave()}return"undefined"!==typeof Promise&&o instanceof Promise?o.then((function(e){return f.usePatches(r),i.processResult(e,f)}),(function(e){throw f.revoke(),e})):(f.usePatches(r),this.processResult(o,f))}if((o=t(e))!==n)return void 0===o&&(o=e),this.maybeFreeze(o,!0),o},be.prototype.produceWithPatches=function(e,t,r){var n,o,i=this;if("function"===typeof e)return function(t){for(var r=[],n=arguments.length-1;n-- >0;)r[n]=arguments[n+1];return i.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(r))}))};if(r)throw new Error("A patch listener cannot be passed to produceWithPatches");return[this.produce(e,t,(function(e,t){n=e,o=t})),n,o]},be.prototype.createDraft=function(e){if(!u(e))throw new Error("First argument to `createDraft` must be a plain object, an array, or an immerable object");var t=k.enter(),r=this.createProxy(e);return r[i].isManual=!0,t.leave(),r},be.prototype.finishDraft=function(e,t){var r=e&&e[i];if(!r||!r.isManual)throw new Error("First argument to `finishDraft` must be a draft returned by `createDraft`");if(r.finalized)throw new Error("The given draft is already finalized");var n=r.scope;return n.usePatches(t),this.processResult(void 0,n)},be.prototype.setAutoFreeze=function(e){this.autoFreeze=e},be.prototype.setUseProxies=function(e){this.useProxies=e,f(this,e?le:Z)},be.prototype.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}return a(e)?ve(e,t):this.produce(e,(function(e){return ve(e,t.slice(r+1))}))},be.prototype.processResult=function(e,t){var r=t.drafts[0],o=void 0!==e&&e!==r;if(this.willFinalize(t,e,o),o){if(r[i].modified)throw t.revoke(),new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.");u(e)&&(e=this.finalize(e,null,t),this.maybeFreeze(e)),t.patches&&(t.patches.push({op:"replace",path:[],value:e}),t.inversePatches.push({op:"replace",path:[],value:r[i].base}))}else e=this.finalize(r,[],t);return t.revoke(),t.patches&&t.patchListener(t.patches,t.inversePatches),e!==n?e:void 0},be.prototype.finalize=function(e,t,r){var n=this,o=e[i];if(!o)return Object.isFrozen(e)?e:this.finalizeTree(e,null,r);if(o.scope!==r)return e;if(!o.modified)return this.maybeFreeze(o.base,!0),o.base;if(!o.finalized){if(o.finalized=!0,this.finalizeTree(o.draft,t,r),this.onDelete&&!O(o.base))if(this.useProxies){d(o.assigned,(function(e,t){t||n.onDelete(o,e)}))}else{var a=o.base,u=o.copy;d(a,(function(e){h(u,e)||n.onDelete(o,e)}))}this.onCopy&&this.onCopy(o),this.autoFreeze&&r.canAutoFreeze&&T(o.copy,!1),t&&r.patches&&function(e,t,r,n){(Array.isArray(e.base)?de:O(e.base)?he:pe)(e,t,r,n)}(o,t,r.patches,r.inversePatches)}return o.copy},be.prototype.finalizeTree=function(e,t,r){var n=this,o=e[i];o&&(this.useProxies||(o.copy=l(o.draft,!0)),e=o.copy);var c=!!t&&!!r.patches,f=function(i,s,l){if(s===l)throw Error("Immer forbids circular references");var b=!!o&&l===e,g=O(l);if(a(s)){var w=b&&c&&!g&&!h(o.assigned,i)?t.concat(i):null;if(function(e,t,r){m(e)?e.set(t,r):O(e)?(e.delete(t),e.add(r)):Array.isArray(e)||p(e,t)?e[t]=r:Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0})}(l,i,s=n.finalize(s,w,r)),a(s)&&(r.canAutoFreeze=!1),b&&s===v(o.base,i))return}else{if(b&&y(s,v(o.base,i)))return;u(s)&&!Object.isFrozen(s)&&(d(s,f),n.maybeFreeze(s))}b&&n.onAssign&&!g&&n.onAssign(o,i,s)};return d(e,f),e},be.prototype.maybeFreeze=function(e,t){void 0===t&&(t=!1),this.autoFreeze&&!a(e)&&T(e,t)};var ge=new be,me=ge.produce;ge.produceWithPatches.bind(ge),ge.setAutoFreeze.bind(ge),ge.setUseProxies.bind(ge),ge.applyPatches.bind(ge),ge.createDraft.bind(ge),ge.finishDraft.bind(ge);t.a=me}).call(this,r("8oxB"))},snnH:function(e,t,r){"use strict";t.a=function(e,t){return function(r){return e({type:t,payload:r})}}},uvEW:function(e,t,r){"use strict";var n=r("sLDa"),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.a.UPDATE_RENTER:return t.payload;default:return e}},i=r("V/h/"),a={username:"",password:"",redirectTo:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.a.UPDATE_USERNAME:return Object(i.a)(e,(function(e){e.username=t.payload}));case n.a.UPDATE_PASSWORD:return Object(i.a)(e,(function(e){e.password=t.payload}));case n.a.UPDATE_LOGIN_REDIRECT_TO:return Object(i.a)(e,(function(e){e.redirectTo=t.payload}));default:return e}},c={leaseAgreementLink:"",redirectTo:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.a.UPDATE_LEASE_AGREEMENT_LINK:return Object(i.a)(e,(function(e){e.leaseAgreementLink=t.payload}));case n.a.UPDATE_LEASE_AGREEMENT_REDIRECT_TO:return Object(i.a)(e,(function(e){e.redirectTo=t.payload}));default:return e}},s={redirectTo:""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.a.UPDATE_PAYMENT_REDIRECT_TO:return Object(i.a)(e,(function(e){e.redirectTo=t.payload}));default:return e}};r.d(t,"a",(function(){return d}));var d={renter:o,loginRegister:u,leaseAgreement:f,payment:l}}},[["QvNR",1,0]]]);