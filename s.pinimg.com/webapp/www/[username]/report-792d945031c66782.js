(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[82619],{672796:function(e,r,t){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/[username]/report"]=function(){return t(711955).Z}},113674:function(e,r,t){"use strict";var n,o,u=t(186656);function a(e,r,t,n,o,u,a){try{var i=e[u](a),s=i.value}catch(e){t(e);return}i.done?r(s):Promise.resolve(s).then(n,o)}var i=(n=regeneratorRuntime.mark(function e(r){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)({url:"/v3/users/".concat(r,"/report_reasons/")});case 2:return t=e.sent,e.abrupt("return",t.resource_response.data);case 4:case"end":return e.stop()}},e)}),o=function(){var e=this,r=arguments;return new Promise(function(t,o){var u=n.apply(e,r);function i(e){a(u,t,o,i,s,"next",e)}function s(e){a(u,t,o,i,s,"throw",e)}i(void 0)})},function(e){return o.apply(this,arguments)});r.Z=i},252929:function(e,r,t){"use strict";var n,o,u=t(186656);function a(e,r,t,n,o,u,a){try{var i=e[u](a),s=i.value}catch(e){t(e);return}i.done?r(s):Promise.resolve(s).then(n,o)}var i=(n=regeneratorRuntime.mark(function e(r,t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)({url:"/v3/users/".concat(r,"/flag/"),method:"POST",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}),o=function(){var e=this,r=arguments;return new Promise(function(t,o){var u=n.apply(e,r);function i(e){a(u,t,o,i,s,"next",e)}function s(e){a(u,t,o,i,s,"throw",e)}i(void 0)})},function(e,r){return o.apply(this,arguments)});r.Z=i},386872:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(499128),o=t(898781),u=t(343341),a=t(515198);function i(){var e=(0,o.ZP)(),r=(0,u.F9)().showToast;return{showErrorToast:function(){r(function(r){var t=r.hideToast;return(0,a.jsx)(n.ZP,{onHide:t,text:e._('Something went wrong.', 'fetchReportingReasons.Toast.Unsuccessful', 'Toast after fetching reporting reasons is unsuccessful')})})},showSuccessToast:function(){r(function(r){var t=r.hideToast;return(0,a.jsx)(n.ZP,{onHide:t,text:e._('Thanks! Your feedback helps us improve Pinterest.', 'userReporting.handleSubmitReport.toast', 'toast after reporting a user successfully')})})}}}},784590:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(76911),o=t(506979),u=t(599689),a=t(886858),i=t(780280),s=t(248327),c=t(718368);function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p={},v=function(e){var r=e.httpStatus;return!r||r>=500};function d(e){var r,t=null!=e?e:{name:"DisabledResource",options:null},d=t.enabledRouteRefresh,h=t.__unstableEnableSuspenseSupport,m=t.headers,y=t.name,_=t.noCache,b=t.options,w=t.schema,g=!e,S=(0,o.useDispatch)(),A=(0,a.Z)(b),x=(0,n.useRef)(null),R=(0,n.useRef)(),P=(0,u.k6)(),k=P&&"POP"!==P.action,Z=function(e){return(e[y]||p)[A]||p},O=(0,o.useSelector)(function(e){return Z(e.resources).nextBookmark}),j=(0,o.useSelector)(function(e){return Z(e.resources).data}),E=(0,o.useSelector)(function(e){return Z(e.resources).auxData}),T=(0,o.useSelector)(function(e){return Z(e.resources).error}),D=(0,o.useSelector)(function(e){return!!Z(e.resources).fetching}),L="object"===f(E)&&"string"==typeof(null==E?void 0:E.pagination_group)?E.pagination_group:void 0,B=!!T||void 0!==j,C=B&&!D&&O===c.q,U=!!(B&&d&&k&&!g),H=function(e){if(Array.isArray(e))return e}(r=(0,n.useState)(U))||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,u,a,i=[],s=!0,c=!1;try{if(u=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=u.call(t)).done)&&(i.push(n.value),i.length!==r);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return i}}(r,2)||function(e,r){if(e){if("string"==typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,r)}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),I=H[0],z=H[1],M=(0,n.useCallback)(function(e,r){x.current=S((0,s.U)(y,{options:b,schema:w,bookmark:e,headers:m,paginationGroup:r}))},[S,y,A,w,m]),N=function(){x.current=S((0,s.b)(y,{options:b,schema:w,headers:m}))},q=(0,i.B)().isBot,F=function(){if(!g&&R.current!==A){var e=void 0===R.current;R.current=A,!B&&!D||e&&T&&v(T)?M():(!q&&_||U)&&N()}};(0,n.useEffect)(function(){h||F()}),h&&F();var K=(0,n.useCallback)(function(){g||(N(),z(!0))},[g,s.b,y,A,m,z]),$=(0,n.useCallback)(function(){!O||C||D||g||M(O,L)},[g,M,O,C,D,L]);if(x.current){if(B&&!D)x.current=null;else if(h)throw x.current}var W=(0,n.useRef)({auxData:void 0,data:void 0,error:void 0,fetchMore:$,isAtEnd:!1,isFetching:!1,isLoaded:!1,isRefreshing:!1,nextBookmark:void 0,refresh:K}),G={auxData:E,data:j,error:T,fetchMore:$,isAtEnd:C,isFetching:D,isLoaded:B,isRefreshing:I,nextBookmark:O,refresh:K};return(0,o.shallowEqual)(G,W.current)||(I&&(W.current.data||!U)&&!(0,o.shallowEqual)(G.data,W.current.data)&&(G.isRefreshing=!1,z(!1)),W.current=G),W.current}},436395:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(599689),o=t(784590);function u(){var e=(0,n.UO)().username;return(0,o.Z)(null==e?null:{name:"UserResource",options:{username:e,field_set_key:"profile"}})}},711955:function(e,r,t){"use strict";t.d(r,{Z:function(){return _}});var n=t(599689),o=t(19121),u=t(436395),a=t(76911),i=t(112690),s=t(113674),c=t(252929),l=t(386872),f=t(829407),p=t(108389),v=t(515198);function d(e,r,t,n,o,u,a){try{var i=e[u](a),s=i.value}catch(e){t(e);return}i.done?r(s):Promise.resolve(s).then(n,o)}function h(e){return function(){var r=this,t=arguments;return new Promise(function(n,o){var u=e.apply(r,t);function a(e){d(u,n,o,a,i,"next",e)}function i(e){d(u,n,o,a,i,"throw",e)}a(void 0)})}}function m(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function y(e){var r,t,o=e.user,u=(0,n.k6)(),d=(0,i.Z)(),y=(0,l.Z)(),_=y.showErrorToast,b=y.showSuccessToast,w=function(e){if(Array.isArray(e))return e}(r=(0,a.useState)(null))||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,u,a,i=[],s=!0,c=!1;try{if(u=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=u.call(t)).done)&&(i.push(n.value),i.length!==r);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return i}}(r,2)||function(e,r){if(e){if("string"==typeof e)return m(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,r)}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),g=w[0],S=w[1],A=function(){u.go(-1)};(0,f.Z)(function(){var e;(e=h(regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)(o.id);case 3:(r=e.sent)?S(r):_(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),_();case 10:case"end":return e.stop()}},e,null,[[0,7]])})),function(){return e.apply(this,arguments)})()});var x=u.location.state,R=(t=h(regeneratorRuntime.mark(function e(r){var t,n,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.reasonKey,n=r.selectedReason,null!=x&&x.viewType&&x.viewParameter&&d({event_type:56,view_type:x.viewType,view_parameter:x.viewParameter,object_id_str:o.id,element:null==n?void 0:n.element_type}),e.prev=2,u={reason:t},e.next=6,(0,c.Z)(o.id,u);case 6:A(),b(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),A(),_();case 14:case"end":return e.stop()}},e,null,[[2,10]])})),function(e){return t.apply(this,arguments)});return(0,v.jsx)(p.Z,{handleSubmitReport:R,reportingReasons:g,objectToReport:{type:"user",id:o.id,viewType:null==x?void 0:x.viewType,viewParameter:null==x?void 0:x.viewParameter}})}var _=function(){var e,r=null!==(e=(0,n.$B)().params.username)&&void 0!==e?e:"",t=(0,u.Z)();return(0,o.Z)().isAuth?t.data&&(0,v.jsx)(y,{user:t.data}):(0,v.jsx)(n.l_,{to:"/".concat(r,"/")})}}},function(e){e.O(0,[97270,8390,99689,26067,17492,48327,63142],function(){return e(e.s=672796)}),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/[username]/report-792d945031c66782.js.map