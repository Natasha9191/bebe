(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[86011],{634109:function(e,t,r){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/boardsection/[id]/edit"]=function(){return r(259584).Z}},385740:function(e,t,r){"use strict";r.d(t,{BE:function(){return y},Ih:function(){return h},SU:function(){return b},sV:function(){return p}});var o,n=r(76911),i=r(425288),c=r(515198);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var o,n;o=t,n=r[t],(o=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==a(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(o))in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}var f=(0,i.Z)("View"),d=f.Provider,p=f.useHook;function y(){return o}function h(e){var t,r=e.children,i=e.initialState,a=function(e){if(Array.isArray(e))return e}(t=(0,n.useState)(void 0===i?{}:i))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,i,c,a=[],s=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(o=i.call(r)).done)&&(a.push(o.value),a.length!==t);s=!0);}catch(e){l=!0,n=e}finally{try{if(!s&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw n}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=a[0],f=a[1],p=(0,n.useCallback)(function(){o={},f({})},[]),y=(0,n.useCallback)(function(e){o=l(l({},o),e),f(function(t){return l(l({},t),e)})},[]),h=(0,n.useMemo)(function(){return{viewContextData:s,clearViewContextData:p,setViewContextData:y}},[s,y,p]);return(0,c.jsx)(n.Fragment,{children:(0,c.jsx)(d,{value:h,children:r})})}function b(){return p().viewContextData}},425288:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var o=r(76911);function n(e,t){var r="consumer"===t?"".concat(e,"Consumer"):"use".concat(e);return"\n  ".concat(r," must be used within a ").concat(e,"Provider.\n  Please see https://pdocs.pinadmin.com/docs/webapp/docs/testing-jest#createhydra-errors for more information.\n  ")}function i(e,t){var r,i,c=(0,o.createContext)(t),a=((i=(i=e.slice(1)).endsWith("Context")?i:"".concat(i,"Context"),r)?{hocDisplayName:"with".concat(e[0].toUpperCase()).concat(i,"(").concat(r,")")}:{propsDisplayName:"".concat(e[0].toLowerCase()).concat(i),messageDisplayName:"".concat(e[0].toUpperCase()).concat(i)}).messageDisplayName;c.displayName=a;var s=c.Provider,l=function(e){var t=e.children,r=(0,o.useContext)(c);if(void 0===r)throw Error(n(a,"consumer"));return t(r)},u=function(){return(0,o.useContext)(c)};return s.displayName="".concat(a,"Provider"),l.displayName="".concat(a,"Consumer"),{Provider:s,Consumer:l,MaybeConsumer:function(e){return(0,e.children)((0,o.useContext)(c))},useMaybeHook:u,useHook:function(){var e=u();if(void 0===e)throw Error(n(a,"hook"));return e}}}},349700:function(e,t,r){"use strict";r.d(t,{Wc:function(){return s},bF:function(){return u},nk:function(){return a},r7:function(){return f}});var o=r(76911),n=r(515198);function i(e,t,r){return e.split(r).map(function(e){if(e.match(r)){var o=e.replace(/[\{\}]/g,"").trim();if(Object.prototype.hasOwnProperty.call(t,o))return t[o]}return e})}var c=/(\{\{\s*\w+\s*\}\})/g;function a(e,t){return i(e,t,c)}function s(e,t){return i(e,t,c).join("")}var l=/(\{\s*\w+\s*\})/g;function u(e,t){return i(e,t,l)}var f=function(e){var t=e.text;return Array.isArray(t)?t.map(function(e,t){return(0,n.jsx)(o.Fragment,{children:e},t)}):t}},773285:function(e,t,r){"use strict";r.d(t,{F:function(){return i},a:function(){return n}});var o=(0,r(425288).Z)("ExperimentContext"),n=o.Provider,i=o.useHook},780280:function(e,t,r){"use strict";r.d(t,{B:function(){return h},LC:function(){return p},P2:function(){return d},fH:function(){return y},gf:function(){return b}});var o=r(76911),n=r(608832),i=r(239745),c=r(515198);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var o,n;o=t,n=r[t],(o=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==a(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(o))in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}var f=(0,o.createContext)();function d(e){var t,r=e.children,a=e.initialValue,s=function(e){if(Array.isArray(e))return e}(t=(0,o.useState)(a))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,i,c,a=[],s=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(o=i.call(r)).done)&&(a.push(o.value),a.length!==t);s=!0);}catch(e){l=!0,n=e}finally{try{if(!s&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw n}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),d=s[0],p=s[1],y=(0,o.useMemo)(function(){return{requestContext:d,updateRequestContext:function(e){var t=l(l({},d),e);(0,i.Z)(d,e)||p(t),(0,n.J)(t)}}},[d]);return(0,c.jsx)(f.Provider,{value:y,children:r})}var p=function(e){var t=e.children,r=(0,o.useContext)(f);if(!r)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return t(r.requestContext)},y=function(e){var t=e.children,r=(0,o.useContext)(f);if(!r)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return t(r.requestContext)};function h(){var e=(0,o.useContext)(f);if(!e)throw Error("useRequestContext must be used within a RequestContextProvider");return e.requestContext}function b(){var e=(0,o.useContext)(f);if(!e)throw Error("useUpdateRequestContext must be used within a RequestContextProvider");return e.updateRequestContext}},608832:function(e,t,r){"use strict";var o;function n(e){o=e}function i(){return o}r.d(t,{J:function(){return n},l:function(){return i}})},239745:function(e,t,r){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(Object.is(e,t))return!0;if("object"!==o(e)||null===e||"object"!==o(t)||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&r.every(function(r){return e[r]===t[r]})}r.d(t,{Z:function(){return n}})},50286:function(e,t,r){"use strict";r.d(t,{HG:function(){return f},Kf:function(){return c},Mq:function(){return n},Wb:function(){return u},dA:function(){return a},ds:function(){return s},ml:function(){return l}});var o=r(780280);function n(e){var t=e.userAgent,r=t.isMobile;return t.isTablet?"tablet":r?"phone":"desktop"}var i=function(){return n((0,o.B)())},c=function(e){return"phone"===e},a=function(e){return"tablet"===e},s=function(e){return"desktop"===e},l=function(){return c(i())},u=function(){return a(i())},f=function(){return s(i())};t.ZP=i},19121:function(e,t,r){"use strict";r.d(t,{$:function(){return n}});var o=(0,r(425288).Z)("viewer"),n=o.Provider,i=o.useHook;t.Z=i},911623:function(e,t,r){"use strict";var o=r(908390),n=r(121151),i=r(898781),c=r(349700),a=r(515198),s={ARCHIVE:"archive",DELETE:"delete",DELETE_SECTION:"deleteSection",LEAVE:"leave",REMOVE:"remove",UNARCHIVE:"unarchive"};t.Z=function(e){var t,r,l,u,f,d,p,y,h=e.type,b=e.fullName,_=e.isOpen,m=e.onConfirm,v=e.onDismiss,g=(0,i.ZP)();return(0,a.jsx)(n.ZP,{accessibilityModalLabel:"",mobileHideCloseIcon:!0,isOpen:_,onDismiss:v,type:"edit_wraning_modal",children:(0,a.jsx)(o.xu,{padding:3,children:(0,a.jsxs)(o.xu,{marginBottom:2,marginTop:3,children:[(0,a.jsx)(o.xu,{children:(0,a.jsx)(o.X6,{align:"center",overflow:"normal",size:"500",children:(t=h,r=b,l=g,t===s.DELETE?l._('Delete Board?', 'confirmation of the act of deleting a board', 'confirmation of the act of deleting a board'):t===s.LEAVE?l._('Leave this Board?', 'confirmation of the act of leaving a board', 'confirmation of the act of leaving a board'):t===s.REMOVE?(0,c.nk)(l._('Are you sure you want to remove {{ fullName }}?', ' - ', ' -- '),{fullName:r}):t===s.DELETE_SECTION?l._('Delete section?', ' - ', ' -- '):t===s.ARCHIVE?l._('Archive this board?', 'modal heading for board archive confirmation', 'modal heading for board archive confirmation'):t===s.UNARCHIVE?l._('Unarchive this board?', 'modal heading for board unarchive confirmation', 'modal heading for board unarchive confirmation'):null)})}),(0,a.jsx)(o.xu,{marginBottom:8,marginTop:2,children:(0,a.jsx)(o.xv,{align:"center",children:(u=h,f=b,d=g,u===s.LEAVE?d._('If you leave this board, it won\'t show up on your\n    profile and you won\'t be able to save Pins to it anymore.', 'the effect of leaving a board', 'the effect of leaving a board'):u===s.DELETE?d._('You won\'t be able to get it back.', 'the effect of deleting a board', 'the effect of deleting a board'):u===s.DELETE_SECTION?d._('Once you delete a section and all its Pins, you can\'t undo it!', ' - ', ' -- '):u===s.ARCHIVE?(0,c.nk)(d._('If you archive {{ boardName }}, we\'ll hide it from your profile and you won\'t be able to save new Pins to it. If you change your mind, you can unarchive it.', ' - ', ' -- '),{boardName:(0,a.jsx)(o.xv,{inline:!0,weight:"bold",children:f},f)}):u===s.UNARCHIVE?(0,c.nk)(d._('If you unarchive {{ boardName }}, it will show up on your profile and you\'ll be able to save new Pins to it.', ' - ', ' -- '),{boardName:(0,a.jsx)(o.xv,{inline:!0,weight:"bold",children:f},f)}):null)})}),(0,a.jsxs)(o.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{flexDirection:"row-reverse"}},display:"flex",justifyContent:"center",children:[(0,a.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{whiteSpace:"nowrap"}},padding:1,"data-test-id":"confirmButtonContainer",width:"100%",children:(0,a.jsx)(o.zx,{fullWidth:!0,color:"red",onClick:m,size:"lg",text:(p=h,y=g,p===s.DELETE?y._('Delete', ' - ', ' -- '):p===s.LEAVE?y._('Leave board', ' - ', ' -- '):p===s.REMOVE?y._('Remove', ' - ', ' -- '):p===s.DELETE_SECTION?y._('Delete section', ' - ', ' -- '):p===s.ARCHIVE?y._('Archive', 'button label on confirming board archive', 'button label on confirming board archive'):p===s.UNARCHIVE?y._('Unarchive', 'button label on confirming board unarchive', 'button label on confirming board unarchive'):"")})}),(0,a.jsx)(o.xu,{dangerouslySetInlineStyle:{__style:{whiteSpace:"no-wrap"}},padding:1,width:"100%",children:(0,a.jsx)(o.zx,{fullWidth:!0,onClick:v,size:"lg",text:g._('Cancel', ' - ', ' -- ')})})]})]})})})}},259584:function(e,t,r){"use strict";r.d(t,{Z:function(){return E}});var o=r(76911),n=r(506979),i=r(599689),c=r(821463),a=r(908390),s=r(499128),l=r(898781),u=r(313047),f=r(542554),d=r(784590),p=r(343341),y=r(50286),h=r(19121),b=r(876442),_=r(911623),m=r(63552),v=r(678638),g=r(515198);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,j(o.key),o)}}function w(e,t){return(w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function O(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t,r){return(t=j(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){var t=function(e,t){if("object"!==S(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==S(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===S(t)?t:String(t)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(i,e);var t,r,o,n=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=x(i);if(t){var o=x(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return O(e)}(this,e)});function i(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i);for(var e,t,r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return A(O(t=n.call.apply(n,[this].concat(o))),"state",{name:null!==(e=t.props.boardSectionName)&&void 0!==e?e:"",modalOpen:!1}),A(O(t),"onDeleteButtonTouch",function(){return t.setState({modalOpen:!0})}),A(O(t),"onDeleteModalClose",function(){return t.setState({modalOpen:!1})}),A(O(t),"onBoardSectionDelete",function(){var e=t.props,r=e.board,o=e.boardSectionId,n=e.deleteBoardSection,i=e.showToast,c=e.history,a=e.sectionPinCount,l=e.userId,u=null!=r?r:{},f=u.id,d=u.url;n(l,o,f,a).then(function(){i(function(e){var r=e.hideToast;return(0,g.jsx)(s.ZP,{text:t.props.i18n._('Board section deleted', 'User deleted their board section', 'User deleted their board section'),onHide:r})})}).catch(function(){i(function(e){var r=e.hideToast;return(0,g.jsx)(s.ZP,{text:t.props.i18n._('Sorry! There was an error deleting your board section', 'Toast for board section delete error', 'Toast for board section delete error'),onHide:r})})}),d&&c.push("".concat(d))}),A(O(t),"onBackButtonTouch",function(){t.props.history.goBack()}),A(O(t),"onDoneButtonTouch",function(){var e=t.props,r=e.board,o=e.editBoardSection,n=e.boardSectionId,i=e.showToast,c=e.history,a=(null!=r?r:{}).url;o(n,{id:n,title:t.state.name}).then(function(e){if(a){var r;c.push("".concat(a).concat(null!==(r=e.slug)&&void 0!==r?r:"","/"))}i(function(e){var r=e.hideToast;return(0,g.jsx)(s.ZP,{text:t.props.i18n._('Edited board section', 'Toast after user edits their board section', 'Toast after user edits their board section'),onHide:r})})},function(){i(function(e){var r=e.hideToast;return(0,g.jsx)(s.ZP,{text:t.props.i18n._('Sorry! There was an error editing your board', 'Toast for board edit error', 'Toast for board edit error'),onHide:r})})})}),A(O(t),"onNameChange",function(e){var r=e.value;return t.setState({name:r})}),t}return r=[{key:"componentDidUpdate",value:function(e){this.props.boardSectionResource.isFetching||this.props.boardSectionResource.isFetching===e.boardSectionResource.isFetching||this.state.name||!this.props.boardSectionName||this.setState({name:this.props.boardSectionName})}},{key:"render",value:function(){var e=this.state.name,t=this.props,r=t.i18n,o=t.isOwnBoard,n=t.isOwnSection,i=(e||"").trim();return(0,g.jsxs)(f.default,{hasFixedHeader:!0,children:[(0,g.jsx)(u.FixedHeader,{paddingY:3,children:(0,g.jsxs)(a.kC,{alignItems:"center",justifyContent:"between",children:[(0,g.jsx)(a.hU,{accessibilityLabel:this.props.i18n._('Cancel', 'Cancel button for board section edit page', 'Cancel button for board section edit page'),iconColor:"darkGray",icon:"cancel",padding:3,size:"lg",onClick:this.onBackButtonTouch}),(0,g.jsx)(a.X6,{accessibilityLevel:1,size:"300",children:this.props.i18n._('Edit section', 'for edit board page', 'for edit board page')}),(0,g.jsx)(a.zx,{accessibilityLabel:this.props.i18n._('Done', 'Done button accessibility label for board section edit page', 'Done button accessibility label for board section edit page'),disabled:0===i.length,onClick:this.onDoneButtonTouch,color:"red",size:"lg",text:this.props.i18n._('Done', 'Done button for board section edit page', 'Done button for board section edit page')})]})}),(0,g.jsx)(a.xu,{paddingX:2,children:(0,g.jsxs)(a.xu,{paddingY:3,children:[(0,g.jsx)(a.__,{htmlFor:"name",children:(0,g.jsx)(a.xv,{size:"100",children:this.props.i18n._('Section name', 'name tag for board edit page', 'name tag for board edit page')})}),(0,g.jsx)(a.xu,{paddingY:2,children:(0,g.jsx)(a.nv,{errorMessage:i?"":r._('Please enter a valid board section name.', ' - ', ' -- '),id:"name",onChange:this.onNameChange,placeholder:this.props.i18n._('Section name', 'name placeholder for board section edit page', 'name placeholder for board section edit page'),size:"lg",value:e||""})})]})}),(o||n||this.props.canPerformAction)&&(0,g.jsxs)(a.xu,{children:[(0,g.jsxs)(a.xu,{paddingX:2,paddingY:3,children:[(0,g.jsx)(a.xv,{size:"100",children:this.props.i18n._('Actions', 'editBoard.Section.Edit.Actions', 'Title for section Actions on EditSection page')}),(0,g.jsx)(m.Z,{onTouch:this.onDeleteButtonTouch,pressState:"none",children:(0,g.jsx)(a.xu,{paddingY:1,"data-test-id":"deleteBoardSection",children:(0,g.jsx)(a.X6,{accessibilityLevel:2,size:"400",children:this.props.i18n._('Delete section', 'editBoard.Section.Delete.Section', 'Button for deleting a board section')})})})]}),(0,g.jsx)(_.Z,{type:"deleteSection",isOpen:this.state.modalOpen,onConfirm:this.onBoardSectionDelete,onDismiss:this.onDeleteModalClose})]})]})}}],P(i.prototype,r),o&&P(i,o),Object.defineProperty(i,"prototype",{writable:!1}),i}(o.PureComponent),E=function(){var e,t,r,o,a,s,u,f,_=(0,i.k6)(),m=(0,h.Z)(),S=m.isAuth?m.id:"",P=(0,n.useDispatch)(),w=(0,i.$B)(),O=(0,y.ZP)(),x=(0,l.ZP)(),A=null!==(e=w.params.id)&&void 0!==e?e:"",j=(0,p.F9)().showToast,E=(0,d.Z)({name:"BoardSectionResource",options:{section_id:A}}),D=(0,c.bindActionCreators)(v.o4,P),z=(0,c.bindActionCreators)(v.PA,P),R=(0,n.useSelector)(function(e){var t;return null!==(t=e.boardsections[A])&&void 0!==t?t:{}}),T=R.board,k=!!S&&(null==T?void 0:null===(t=T.owner)||void 0===t?void 0:t.id)===S,N=!!S&&(null===(r=R.user)||void 0===r?void 0:r.id)===S,L=(0,b.Z)({action:10,collaboratedByMe:null!==(o=null==T?void 0:T.collaborated_by_me)&&void 0!==o&&o,collaboratorPermissions:null==T?void 0:T.collaborator_permissions,ownerId:null==T?void 0:null===(a=T.owner)||void 0===a?void 0:a.id});return m.isAuth&&"desktop"!==O?(0,g.jsx)(C,{board:T,boardSectionName:null!==(s=R.title)&&void 0!==s?s:"",boardSectionId:null!==(u=R.id)&&void 0!==u?u:"",canPerformAction:L,sectionPinCount:null!==(f=R.pin_count)&&void 0!==f?f:0,boardSectionResource:E,deleteBoardSection:D,editBoardSection:z,history:_,i18n:x,isOwnBoard:k,isOwnSection:N,showToast:j,userId:S}):(0,g.jsx)(i.l_,{to:"/"})}},167678:function(e,t,r){"use strict";r.d(t,{TA:function(){return x}});var o=r(76911),n=r(742897),i=r(539439),c=r(744702),a=r(811602),s=r(727460),l=r(349424),u=r.n(l);function f(e){console.warn("loadable: "+e)}var d=o.createContext(),p={initialChunks:{}},y="PENDING",h="REJECTED",b=function(e){return e};function _(e){var t=e.defaultResolveComponent,r=void 0===t?b:t,l=e.render,f=e.onLoad;function _(e,t){void 0===t&&(t={});var b,_="function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e,m={};function v(e){return t.cacheKey?t.cacheKey(e):_.resolve?_.resolve(e):"static"}function g(e,o,n){var i=t.resolveComponent?t.resolveComponent(e,o):r(e);if(t.resolveComponent&&!(0,s.isValidElementType)(i))throw Error("resolveComponent returned something that is not a React component!");return u()(n,i,{preload:!0}),i}var S=(b=function(e){function r(r){var o;return((o=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:v(r)},function(e,t){if(!e){var r=Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}(!r.__chunkExtractor||_.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor)?(!1===t.ssr||(_.requireAsync(r).catch(function(){return null}),o.loadSync(),r.__chunkExtractor.addChunk(_.chunkName(r))),(0,c.Z)(o)):(!1!==t.ssr&&(_.isReady&&_.isReady(r)||_.chunkName&&p.initialChunks[_.chunkName(r)])&&o.loadSync(),o)}(0,a.Z)(r,e),r.getDerivedStateFromProps=function(e,t){var r=v(e);return(0,i.Z)({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var o=r.prototype;return o.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===h&&this.setCache(),this.state.loading&&this.loadAsync()},o.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},o.componentWillUnmount=function(){this.mounted=!1},o.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},o.getCacheKey=function(){return v(this.props)},o.getCache=function(){return m[this.getCacheKey()]},o.setCache=function(e){void 0===e&&(e=void 0),m[this.getCacheKey()]=e},o.triggerOnLoad=function(){var e=this;f&&setTimeout(function(){f(e.state.result,e.props)})},o.loadSync=function(){if(this.state.loading)try{var e=_.requireSync(this.props),t=g(e,this.props,P);this.state.result=t,this.state.loading=!1}catch(e){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:_.resolve(this.props),chunkName:_.chunkName(this.props),error:e?e.message:e}),this.state.error=e}},o.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then(function(t){var r=g(t,e.props,{Loadable:P});e.safeSetState({result:r,loading:!1},function(){return e.triggerOnLoad()})}).catch(function(t){return e.safeSetState({error:t,loading:!1})}),t},o.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,(0,n.Z)(t,["__chunkExtractor","forwardedRef"])),o=this.getCache();return o||((o=_.requireAsync(r)).status=y,this.setCache(o),o.then(function(){o.status="RESOLVED"},function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:_.resolve(e.props),chunkName:_.chunkName(e.props),error:t?t.message:t}),o.status=h})),o},o.render=function(){var e=this.props,r=e.forwardedRef,o=e.fallback,c=(e.__chunkExtractor,(0,n.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),a=this.state,s=a.error,u=a.loading,f=a.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===y)throw this.loadAsync();if(s)throw s;var d=o||t.fallback||null;return u?d:l({fallback:d,result:f,options:t,props:(0,i.Z)({},c,{ref:r})})},r}(o.Component),function(e){return o.createElement(d.Consumer,null,function(t){return o.createElement(b,Object.assign({__chunkExtractor:t},e))})}),P=o.forwardRef(function(e,t){return o.createElement(S,Object.assign({forwardedRef:t},e))});return P.preload=function(e){_.requireAsync(e)},P.load=function(e){return _.requireAsync(e)},P}return{loadable:_,lazy:function(e,t){return _(e,(0,i.Z)({},t,{suspense:!0}))}}}var m=_({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return o.createElement(t,r)}}),v=m.loadable,g=m.lazy,S=_({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),P=S.loadable,w=S.lazy,O="undefined"!=typeof window;function x(e,t){void 0===e&&(e=function(){});var r=(void 0===t?{}:t).namespace;if(!O)return f("`loadableReady()` must be called in browser only"),e(),Promise.resolve();var o=null;if(O){var n=""+(void 0===r?"":r)+"__LOADABLE_REQUIRED_CHUNKS__",i=document.getElementById(n);if(i){o=JSON.parse(i.textContent);var c=document.getElementById(n+"_ext");if(c)JSON.parse(c.textContent).namedChunks.forEach(function(e){p.initialChunks[e]=!0});else throw Error("loadable-component: @loadable/server does not match @loadable/component")}}if(!o)return f("`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side"),e(),Promise.resolve();var a=!1;return new Promise(function(e){window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[];var t=window.__LOADABLE_LOADED_CHUNKS__,r=t.push.bind(t);function n(){o.every(function(e){return t.some(function(t){return t[0].indexOf(e)>-1})})&&!a&&(a=!0,e())}t.push=function(){r.apply(void 0,arguments),n()},n()}).then(e)}v.lib=P,g.lib=w,t.ZP=v},349424:function(e,t,r){"use strict";var o=r(916731),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function s(e){return o.isMemo(e)?c:a[e.$$typeof]||n}a[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[o.Memo]=c;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(y){var n=p(r);n&&n!==y&&e(t,n,o)}var c=u(r);f&&(c=c.concat(f(r)));for(var a=s(t),h=s(r),b=0;b<c.length;++b){var _=c[b];if(!i[_]&&!(o&&o[_])&&!(h&&h[_])&&!(a&&a[_])){var m=d(r,_);try{l(t,_,m)}catch(e){}}}}return t}},468278:function(e,t){"use strict";/** @license React v16.8.4
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&Symbol.for,n=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,d=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116;function _(e){if("object"===r(e)&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case d:case c:case s:case a:case y:return e;default:switch(e=e&&e.$$typeof){case u:case p:case l:return e;default:return t}}case b:case h:case i:return t}}}function m(e){return _(e)===d}t.typeOf=_,t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=l,t.Element=n,t.ForwardRef=p,t.Fragment=c,t.Lazy=b,t.Memo=h,t.Portal=i,t.Profiler=s,t.StrictMode=a,t.Suspense=y,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===d||e===s||e===a||e===y||"object"===r(e)&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p)},t.isAsyncMode=function(e){return m(e)||_(e)===f},t.isConcurrentMode=m,t.isContextConsumer=function(e){return _(e)===u},t.isContextProvider=function(e){return _(e)===l},t.isElement=function(e){return"object"===r(e)&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return _(e)===p},t.isFragment=function(e){return _(e)===c},t.isLazy=function(e){return _(e)===b},t.isMemo=function(e){return _(e)===h},t.isPortal=function(e){return _(e)===i},t.isProfiler=function(e){return _(e)===s},t.isStrictMode=function(e){return _(e)===a},t.isSuspense=function(e){return _(e)===y}},916731:function(e,t,r){"use strict";e.exports=r(468278)},401426:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o="function"==typeof Symbol&&Symbol.for,n=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,u=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.async_mode"):60111,d=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.suspense_list"):60120,b=o?Symbol.for("react.memo"):60115,_=o?Symbol.for("react.lazy"):60116,m=o?Symbol.for("react.block"):60121,v=o?Symbol.for("react.fundamental"):60117,g=o?Symbol.for("react.responder"):60118,S=o?Symbol.for("react.scope"):60119;function P(e){if("object"===r(e)&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case f:case d:case c:case s:case a:case y:return e;default:switch(e=e&&e.$$typeof){case u:case p:case _:case b:case l:return e;default:return t}}case i:return t}}}function w(e){return P(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=l,t.Element=n,t.ForwardRef=p,t.Fragment=c,t.Lazy=_,t.Memo=b,t.Portal=i,t.Profiler=s,t.StrictMode=a,t.Suspense=y,t.isAsyncMode=function(e){return w(e)||P(e)===f},t.isConcurrentMode=w,t.isContextConsumer=function(e){return P(e)===u},t.isContextProvider=function(e){return P(e)===l},t.isElement=function(e){return"object"===r(e)&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return P(e)===p},t.isFragment=function(e){return P(e)===c},t.isLazy=function(e){return P(e)===_},t.isMemo=function(e){return P(e)===b},t.isPortal=function(e){return P(e)===i},t.isProfiler=function(e){return P(e)===s},t.isStrictMode=function(e){return P(e)===a},t.isSuspense=function(e){return P(e)===y},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===d||e===s||e===a||e===y||e===h||"object"===r(e)&&null!==e&&(e.$$typeof===_||e.$$typeof===b||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p||e.$$typeof===v||e.$$typeof===g||e.$$typeof===S||e.$$typeof===m)},t.typeOf=P},727460:function(e,t,r){"use strict";e.exports=r(401426)},744702:function(e,t,r){"use strict";function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return o}})},232302:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var o=r(439920);function n(e,t,r){return(t=(0,o.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},539439:function(e,t,r){"use strict";function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return o}})},811602:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var o=r(967809);function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,o.Z)(e,t)}},927593:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var o=r(232302);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}},742897:function(e,t,r){"use strict";function o(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,{Z:function(){return o}})},967809:function(e,t,r){"use strict";function o(e,t){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,{Z:function(){return o}})},439920:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var o=r(54406);function n(e){var t=function(e,t){if("object"!=(0,o.Z)(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=(0,o.Z)(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==(0,o.Z)(t)?t:String(t)}},54406:function(e,t,r){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,{Z:function(){return o}})}},function(e){e.O(0,[97270,8390,99689,26067,17492,48327,87976],function(){return e(e.s=634109)}),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/boardsection/[id]/edit-96991c4e38cbaeee.js.map