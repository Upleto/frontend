(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1GNc":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page2",function(){return e("qCLT")}])},Igcr:function(n,t,e){"use strict";var c=e("q1tI"),a=e.n(c),u=e("/MKj"),r=e("qKvR"),o=(a.a.createElement,function(n){var t=n.store,e=n.callbackOnMount,a=n.callbackOnUnmount,u=n.Child;return Object(c.useEffect)((function(){return e(t),function(){a&&a(t)}}),[]),u?Object(r.c)(u,null):null});t.a=function(n){var t=n.callbackOnMount,e=n.callbackOnUnmount,c=n.Child;return function(){return Object(r.c)(u.b.Consumer,null,(function(n){var a=n.store;return Object(r.c)(o,{callbackOnMount:t,callbackOnUnmount:e,store:a,Child:c})}))}}},qCLT:function(n,t,e){"use strict";e.r(t);var c=e("q1tI"),a=e.n(c),u=e("yLiY"),r=e.n(u),o=e("/MKj"),i=e("ntF4"),l=e("Igcr"),b=e("8Rtz"),f=e("hfKm"),s=e.n(f),d=e("2Eek"),v=e.n(d),O=e("XoMD"),p=e.n(O),E=e("Jo+v"),j=e.n(E),h=e("4mXO"),m=e.n(h),_=e("pLtp"),C=e.n(_),k=e("vYYK"),w=e("sLDa"),g=e("HBON");function y(n,t){var e=C()(n);if(m.a){var c=m()(n);t&&(c=c.filter((function(t){return j()(n,t).enumerable}))),e.push.apply(e,c)}return e}function R(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?y(Object(e),!0).forEach((function(t){Object(k.a)(n,t,e[t])})):p.a?v()(n,p()(e)):y(Object(e)).forEach((function(t){s()(n,t,j()(e,t))}))}return n}var A={b:10},D=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.a.UPDATE_B:return Object(g.a)()({},n,t.payload);case w.a.DECREASE_B:return R({},n,{b:n.b-t.payload});default:return n}},K=e("qKvR");e.d(t,"Page",(function(){return q}));a.a.createElement;var M=r()().publicRuntimeConfig,N=M.commonKeyWords,T=M.themeColor,U=function(n){var t,e;return{b:null!==(t=null===n||void 0===n?void 0:null===(e=n.b)||void 0===e?void 0:e.b)&&void 0!==t?t:0}},q=function(){var n=Object(o.d)(U).b,t=Object(o.c)();return Object(K.c)("div",null,Object(K.c)(i.a,{title:"page2",description:"page2",keywords:N,themeColor:T,hrefCanonical:"/page2"}),Object(K.c)("span",null,"Number is: ".concat(n)),Object(K.c)("button",{type:"button",onClick:function(){return t({type:w.a.DECREASE_B,payload:2})}},"minus 2"),Object(K.c)(b.a,{href:"/"},Object(K.c)("a",null,"index")))};t.default=Object(l.a)({callbackOnMount:function(n){n.substitueReducers({b:D})},callbackOnUnmount:function(n){n.removeReducers(["b"])},Child:q})},sLDa:function(n,t,e){"use strict";var c;!function(n){n.INCREASE_A="increase_a",n.DECREASE_B="decrease_b",n.UPDATE_A="update_a",n.UPDATE_B="update_b"}(c||(c={})),t.a=c}},[["1GNc",1,0]]]);