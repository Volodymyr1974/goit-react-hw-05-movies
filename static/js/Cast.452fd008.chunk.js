"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[709],{4952:function(t,n,e){e.d(n,{$p:function(){return x},V0:function(){return _},lg:function(){return y},mC:function(){return d},yK:function(){return g}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u);s().defaults.baseURL="https://api.themoviedb.org/3";var o="99f1057047bac17f2e8e4b1a5230a5c2",i="trending/movie/day",p="search/movie",f="movie/",h="/reviews",l="/credits";function d(){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/".concat(i,"?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/".concat(f).concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/".concat(f).concat(n).concat(h,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/".concat(f).concat(n).concat(l,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/".concat(p,"?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},273:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(885),a=e(6871),c=e(2791),u=e(4952),s="ActorsList_subtitle__LKvnW",o=e(184);function i(t){var n=t.actorName,e=t.character,r=t.photo,a=r?"https://image.tmdb.org/t/p/w200".concat(r):"https://nuft.edu.ua/assets/images/people/no-image.jpg";return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:a,width:"80",alt:""}),(0,o.jsx)("p",{className:s,children:n}),(0,o.jsxs)("p",{className:s,children:[" Character: ",e]})]})}function p(){var t=(0,a.UO)().movieId,n=(0,c.useState)([]),e=(0,r.Z)(n,2),s=e[0],p=e[1];return(0,c.useEffect)((function(){u.$p(t).then((function(t){return p(t.cast)}))}),[t]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{children:s.map((function(t){var n=t.id,e=t.name,r=t.character,a=t.profile_path;return(0,o.jsx)(i,{actorName:e,character:r,photo:a},n)}))})})}}}]);
//# sourceMappingURL=Cast.452fd008.chunk.js.map