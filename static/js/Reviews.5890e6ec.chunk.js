"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[753],{4952:function(n,t,e){e.d(t,{$p:function(){return x},V0:function(){return b},lg:function(){return m},mC:function(){return d},yK:function(){return g}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u);i().defaults.baseURL="https://api.themoviedb.org/3";var o="99f1057047bac17f2e8e4b1a5230a5c2",s="trending/movie/day",p="search/movie",f="movie/",h="/reviews",l="/credits";function d(){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/".concat(s,"?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/".concat(f).concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/".concat(f).concat(t).concat(h,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/".concat(f).concat(t).concat(l,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/".concat(p,"?api_key=").concat(o,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9795:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var r=e(885),a=e(6871),c=e(2791),u=e(4952),i=e(184);function o(n){var t=n.author,e=n.review;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("h2",{children:["Author:",t," "]}),(0,i.jsx)("p",{children:e})]})}function s(){var n=(0,a.UO)().movieId,t=(0,c.useState)(null),e=(0,r.Z)(t,2),s=e[0],p=e[1];if((0,c.useEffect)((function(){u.lg(n).then((function(n){return p(n.results)}))}),[n]),s)return(0,i.jsxs)(i.Fragment,{children:[s.length>0&&(0,i.jsx)("ul",{children:s.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,i.jsx)(o,{author:e,review:r},t)}))}),0===s.length&&(0,i.jsx)("p",{children:"We don`t have any Reviews for this movie"})]})}}}]);
//# sourceMappingURL=Reviews.5890e6ec.chunk.js.map