/*! For license information please see 556.bfdfbe22.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[556],{556:function(t,e,r){r.r(e),r.d(e,{default:function(){return b}});var n,o,i,a=r(439),c=r(983),u=r(168),s=r(867),l=s.ZP.div(n||(n=(0,u.Z)(["\n  margin-top: 16px;\n  display: flex;\n  gap: 20px;\n"]))),h=s.ZP.button(o||(o=(0,u.Z)(["\n  margin-top: 10px;\n  padding: 4px 12px;\n  font-size: 16px;\n  background-color: orange;\n  border-radius: 4px;\n"]))),f=r(184),p=function(t){var e=t.movie,r=t.onGoBack,n=e||{},o=n.title,i=n.release_date,a=n.poster_path,c=n.overview,u=n.genres,s=n.vote_average;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h,{type:"button",onClick:r,children:"Go back"}),(0,f.jsxs)(l,{children:[(0,f.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h2",{children:[o,"( ",i.substr(0,4)," )"]}),(0,f.jsxs)("p",{children:["User score: ",Math.round(10*s),"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:c}),(0,f.jsx)("h4",{children:"Genres"}),(0,f.jsx)("ul",{children:u.map((function(t){return(0,f.jsx)("li",{children:t.name},t.id)}))})]})]})]})},d=r(791),v=r(689),y=r(335),g=r(87),m=(0,s.ZP)(g.OL)(i||(i=(0,u.Z)(["\n  text-decoration: none;\n  font-size: 18px;\n\n  &.active {\n    color: orange;\n  }\n"]))),x=function(){return(0,f.jsxs)("div",{children:[(0,f.jsx)("h5",{children:"Additional Information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(m,{to:"cast",children:"Cast"})},"cast"),(0,f.jsx)("li",{children:(0,f.jsx)(m,{to:"reviews",children:"Reviews"})},"reviews")]})]})},w=r(686),j=r.n(w),b=function(){var t,e,r=(0,d.useState)(null),n=(0,a.Z)(r,2),o=n[0],i=n[1],u=(0,v.UO)().movieId,s=(0,d.useState)(!1),l=(0,a.Z)(s,2),h=l[0],g=l[1],m="movie/".concat(u),w=(0,v.TH)(),b=(0,d.useRef)(null!==(t=null===(e=w.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/movies"),L=(0,v.s0)();return(0,d.useEffect)((function(){g(!0),(0,y.r)("".concat(m)).then((function(t){return i(t)})).catch((function(t){t&&j().Notify.failure("Sorry, ".concat(t))})).finally(g(!1))}),[m]),null!==o&&(0,f.jsxs)("div",{children:[(0,f.jsx)(p,{movie:o,onGoBack:function(){L(b.current)}}),(0,f.jsx)(x,{}),h&&(0,f.jsx)(c.a,{}),(0,f.jsx)(d.Suspense,{fallback:(0,f.jsx)(c.a,{}),children:(0,f.jsx)(v.j3,{})})]})}},335:function(t,e,r){r.d(e,{r:function(){return a}});var n=r(861);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(I){s=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=l;var f={};function p(){}function d(){}function v(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(_([])));m&&m!==e&&r.call(m,a)&&(y=m);var x=v.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(n,i,a,c){var u=h(t[n],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=v,n(x,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(j.prototype),s(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,u,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var i="https://api.themoviedb.org/3/";function a(t){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA2ODNkZWUxOWZiZGI0MTNjNjc0OWVlMzhlMTkyNiIsInN1YiI6IjY0ZDhkN2RjZDEwMGI2MDEzOTVkZTBkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9VNX7Ejx-gQqZfpxhKRr_X7cvU3d-SXbYHiDn3nidDU"}},t.next=3,fetch("".concat(i).concat(e),r).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=556.bfdfbe22.chunk.js.map