webpackJsonp([0],{425:function(t,e,n){"use strict";var r=n(195),o=n.n(r),u=n(436),a=n.n(u),c=n(438),i=n.n(c),f=n(439),s=n.n(f),l=n(441),p=n.n(l),d=n(440),_=n.n(d),y=n(3),v=n.n(y),h=n(116),m=n.n(h),b=n(119),S=n.n(b),E=n(68),g=(n.n(E),n(73)),O=n.n(g),j=n(433),U=n(451),x=n(455),M=n.n(x),w=function(t){function e(){var t,n,r,o;i()(this,e);for(var u=arguments.length,c=Array(u),f=0;f<u;f++)c[f]=arguments[f];return n=r=p()(this,(t=e.__proto__||a()(e)).call.apply(t,[this].concat(c))),r.displayUserList=function(){var t=r.props.home;return t.get("readyState")&&t.get("readyState")!==j.a&&t.get("readyState")!==j.b?t.get("readyState")===j.c?v.a.createElement("p",null,"Oops, Failed to load list!"):v.a.createElement(U.a,{list:t.get("list")}):v.a.createElement("p",null,"Loading...")},o=n,p()(r,o)}return _()(e,t),s()(e,[{key:"componentDidMount",value:function(){var t=this.props.dispatch;e.fetchData(t)}},{key:"shouldComponentUpdate",value:function(t,e){return S()(this,t,e)}},{key:"render",value:function(){return v.a.createElement("div",{className:M.a.Home},v.a.createElement(O.a,{title:"Home"}),this.displayUserList())}}],[{key:"fetchData",value:function(t){return o.a.all([t(j.d())])}}]),e}(y.Component);w.propTypes={home:m.a.map,dispatch:y.PropTypes.func};var k=function(t){return{home:t.get("home")}};e.default=n.i(E.connect)(k)(w)},430:function(t,e,n){t.exports={default:n(431),__esModule:!0}},431:function(t,e,n){n(432);var r=n(11).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},432:function(t,e,n){var r=n(38);r(r.S+r.F*!n(22),"Object",{defineProperty:n(23).f})},433:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"e",function(){return u}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return s});var r="USERS_INVALID",o="USERS_REQUESTING",u="USERS_SUCCESS",a="USERS_FAILURE",c="https://jsonplaceholder.typicode.com/users",i=function(t){return function(e){return e({type:o}),t.get(c).then(function(t){e({type:u,data:t.data})}).catch(function(t){e({type:a,err:t})})}},f=function(t){var e=t.get("home");return e.get("readyState")!==u},s=function(){return function(t,e,n){return f(e())?t(i(n)):null}}},435:function(t,e,n){t.exports={default:n(442),__esModule:!0}},436:function(t,e,n){t.exports={default:n(443),__esModule:!0}},437:function(t,e,n){t.exports={default:n(444),__esModule:!0}},438:function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},439:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(430),u=r(o);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},440:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(437),u=r(o),a=n(435),c=r(a),i=n(194),f=r(i);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":(0,f.default)(e)));t.prototype=(0,c.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(u.default?(0,u.default)(t,e):t.__proto__=e)}},441:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(194),u=r(o);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,u.default)(e))&&"function"!=typeof e?t:e}},442:function(t,e,n){n(447);var r=n(11).Object;t.exports=function(t,e){return r.create(t,e)}},443:function(t,e,n){n(448),t.exports=n(11).Object.getPrototypeOf},444:function(t,e,n){n(449),t.exports=n(11).Object.setPrototypeOf},445:function(t,e,n){var r=n(38),o=n(11),u=n(39);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*u(function(){n(1)}),"Object",a)}},446:function(t,e,n){var r=n(40),o=n(18),u=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(52)(Function.call,n(196).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return u(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:u}},447:function(t,e,n){var r=n(38);r(r.S,"Object",{create:n(117)})},448:function(t,e,n){var r=n(118),o=n(197);n(445)("getPrototypeOf",function(){return function(t){return o(r(t))}})},449:function(t,e,n){var r=n(38);r(r.S,"Object",{setPrototypeOf:n(446).set})},451:function(t,e,n){"use strict";var r=n(3),o=n.n(r),u=n(116),a=n.n(u),c=n(70),i=(n.n(c),n(454)),f=n.n(i),s=function(t){var e=t.list;return o.a.createElement("div",{className:f.a.UserList},o.a.createElement("h4",null,"User List"),o.a.createElement("ul",null,e.map(function(t){return o.a.createElement("li",{key:t.get("id")},o.a.createElement(c.Link,{to:"/UserInfo/"+t.get("id")},t.get("name")))})))};s.propTypes={list:a.a.list.isRequired},e.a=s},454:function(t,e){t.exports={UserList:"_2Ur9Mj6Xu1bWG45wfzRgeN"}},455:function(t,e){t.exports={Home:"_3vxDHzG2s69HcDtS5kKeX2"}}});