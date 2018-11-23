"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Back=exports.Link=void 0;var _assign=require("babel-runtime/core-js/object/assign"),_assign2=_interopRequireDefault(_assign),_getPrototypeOf=require("babel-runtime/core-js/object/get-prototype-of"),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=require("babel-runtime/helpers/possibleConstructorReturn"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=require("babel-runtime/helpers/inherits"),_inherits3=_interopRequireDefault(_inherits2),_jquery=require("jquery"),_jquery2=_interopRequireDefault(_jquery),_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_CtMobile=require("./CtMobile"),_CtMobile2=_interopRequireDefault(_CtMobile),_Constant=require("./Constant"),_Constant2=_interopRequireDefault(_Constant),_GlobalContext=require("./GlobalContext");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function initial(){var r=this;onHashchange=onHashchange.bind(this),window.addEventListener("hashchange",onHashchange,!1),(0,_jquery2.default)(window.document).on("pageBeforeChange",function(e,t){r.setParameter(t)})}function onHashchange(){var e=window.location.hash;hashChange.call(this,e)}function hashChange(e,r){var a=this,t="";if(e){var i=(t=-1!==e.indexOf("?")?e.substring(1,e.indexOf("?")):e.substring(1)).lastIndexOf("_");if(-1===i)return!1;var n=t.substring(0,i);if(!window.document.querySelector("[data-ct-data-role='page'],#"+n))return!1;a.ctmobile.fireEvent(window.document,"pageBeforeChange",[_CtMobile2.default.getUrlParam(e)])}else{if(a.ctmobile.fireEvent(window.document,"pageBeforeChange",[_CtMobile2.default.getUrlParam(e)]),a.ctmobile.getFirstPage().getPageId()!==a.ctmobile.getFirstPageId())return void a.ctmobile.createPage(a.ctmobile.getId(a.ctmobile.getFirstPageId()),function(e){e.start(_Constant2.default._SLIDEDURATION,function(){a.removeFirstPage()})});t=a.ctmobile.getFirstPage().getId()}if(a.getPageById(t)){if(t===a.getLastPage().getId())return!1;for(var o=a.ctmobile.indexOfById(t),s=a.getHistoryLength()-1;o<s;s--)s===o+1?a.getPageByIndex(s).finish(_Constant2.default._SLIDEDURATION):a.getPageByIndex(s).finish(0)}else a.ctmobile.createPage(t,function(e){e.start(_Constant2.default._SLIDEDURATION,function(){if(r&&r.reload&&1<a.getHistoryLength()){var e=a.getHistoryLength()-2,t=a.getPageByIndex(e);t&&t.finish(0,null,r)}})})}function indexOfHistoryByPageId(e){-1!==e.indexOf("?")&&(e=e.substring(0,e.indexOf("?")));for(var t=-1,r=0,a=this.getHistoryLength();r<a;r++)if(this.getPageByIndex(r).getPageId()===e){t=r;break}return t}var Link=function(e){function t(){return(0,_classCallCheck3.default)(this,t),(0,_possibleConstructorReturn3.default)(this,(t.__proto__||(0,_getPrototypeOf2.default)(t)).apply(this,arguments))}return(0,_inherits3.default)(t,e),(0,_createClass3.default)(t,[{key:"render",value:function(){var u=this,e=this.props,t=e.className,r=void 0===t?"":t,a=e.style,i=void 0===a?{}:a;return _react2.default.createElement(_GlobalContext.Consumer,null,function(l){return _react2.default.createElement("a",{className:r,style:i,onClick:function(){var e=u.props,t=e.pageId,r=void 0===t?"":t,a=e.parameter,i=void 0===a?"":a,n=e.reload,o=void 0===n?l.config.linkCaptureReload:n,s="#"+r+"?pageId="+r+i;l.router.startPage(s,{reload:o})}},u.props.children)})}}]),t}(_react2.default.Component);Link.propTypes={className:_propTypes2.default.string,style:_propTypes2.default.object,pageId:_propTypes2.default.string,parameter:_propTypes2.default.string,reload:_propTypes2.default.bool};var Back=function(e){function t(){return(0,_classCallCheck3.default)(this,t),(0,_possibleConstructorReturn3.default)(this,(t.__proto__||(0,_getPrototypeOf2.default)(t)).apply(this,arguments))}return(0,_inherits3.default)(t,e),(0,_createClass3.default)(t,[{key:"render",value:function(){var t=this,e=this.props,r=e.className,a=void 0===r?"":r,i=e.style,n=void 0===i?{}:i;return _react2.default.createElement(_GlobalContext.Consumer,null,function(e){return _react2.default.createElement("a",{className:a,style:n,onClick:function(){e.router.go(-1)}},t.props.children)})}}]),t}(_react2.default.Component);Back.propTypes={className:_propTypes2.default.string,style:_propTypes2.default.object},exports.Link=Link,exports.Back=Back;var Router=function(){function t(e){(0,_classCallCheck3.default)(this,t),(0,_assign2.default)(this,{ctmobile:e,parameter:null,history:[]}),initial.call(this)}return(0,_createClass3.default)(t,[{key:"startPage",value:function(e,a){var i=this,n="",o="";if(0!==e.indexOf("#")){var t=_CtMobile2.default.getUrlParam(e);n=t.pageId,delete t.pageId;var r=[];for(var s in t)t.hasOwnProperty(s)&&r.push(s+"="+t[s]);o=r.join("&")?"?"+r.join("&"):"",l()}else e=e.substring(1),n=-1!==e.indexOf("?")?(o=e.substring(e.indexOf("?")),e.substring(0,e.indexOf("?"))):e,l();function l(){var e=i.ctmobile.getPageConfigAttribute(n,"mode"),t=void 0;if(-1!==e.toLowerCase().indexOf("single")){var r=indexOfHistoryByPageId.call(i,n);-1===r?(t=-1!==e.indexOf("singleInstance")&&i.ctmobile.getSingleInstance(n)?i.ctmobile.getSingleInstance(n).getId():i.ctmobile.getId(n+o),a&&a.reload?(window.history.replaceState(null,"","#"+t),hashChange.call(i,"#"+t,a)):window.location.hash="#"+t):i.ctmobile.getPageByIndex(r)!==i.getLastPage()?i.go(-(i.getHistoryLength()-1-r)):i.ctmobile.fireEvent(i.getLastPage().getPageDOM(),"pageShow")}else"standard"!==e&&"result"!==e||(t=i.ctmobile.getId(n+o),a&&a.reload?(window.history.replaceState(null,"","#"+t),hashChange.call(i,"#"+t,a)):window.location.hash="#"+t)}}},{key:"go",value:function(e){window.history.go(e)}},{key:"back",value:function(){this.go(-1)}},{key:"setParameter",value:function(e){this.parameter=e}},{key:"getParameter",value:function(){var e=(0,_assign2.default)({},this.parameter);return e.pageId&&delete e.pageId,e}},{key:"getPageById",value:function(e){return this.history[this.ctmobile.indexOfById(e)]}},{key:"getPageByIndex",value:function(e){return this.history[e]}},{key:"getLastPage",value:function(){return this.history[this.history.length-1]}},{key:"getHistoryLength",value:function(){return this.history.length}},{key:"addPage",value:function(e){this.history.push(e)}},{key:"removeFirstPage",value:function(){this.history.shift()}},{key:"removeLastPage",value:function(){this.history.pop()}},{key:"removePageByIndex",value:function(e){this.history.splice(e,1)}}]),t}();exports.default=Router;