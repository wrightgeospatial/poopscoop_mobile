/*! For license information please see 9409.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[9409,3887,2855,2126,669,5617,9616,3744,7062],{3887:(t,e,n)=>{n.r(e),n.d(e,{E:()=>d,a:()=>s,g:()=>l,o:()=>c,q:()=>u,t:()=>f});var r=n(3848),o=n(669),i=n(3744),a=n(7062),c=150,l=function(t){var e=t.actionCount,n=t.actionHeight,r=t.height,o=t.groupCount;return Math.max(e-function(t){var e=t.height,n=t.actionHeight,r=t.groupCount;return Math.floor((e-2*r)/n)}({height:r,actionHeight:n,groupCount:o}),0)},u=function(t){return Array.from(t.querySelectorAll("calcite-action")).filter((function(t){return!t.closest("calcite-action-menu")||t.slot===i.S.trigger}))},s=function(t){var e=t.actionGroups,n=t.expanded,o=t.overflowCount;e.reverse().forEach((function(t){var e=0,i=u(t).reverse();i.forEach((function(t){t.slot===a.S.menuActions&&(t.removeAttribute("slot"),t.textEnabled=n)})),o>0&&i.some((function(t){var n=i.filter((function(t){return!t.slot}));return n.length>1&&i.length>2&&!t.closest("calcite-action-menu")&&(t.textEnabled=!0,t.setAttribute("slot",a.S.menuActions),++e>1&&o--),o<1})),(0,r.f)(t)}))};function f(t){var e=t.parent,n=t.expanded;u(e).filter((function(t){return t.slot!==a.S.menuActions})).forEach((function(t){return t.textEnabled=n})),e.querySelectorAll("calcite-action-group").forEach((function(t){return t.expanded=n}))}var d=function(t){var e=t.expanded,n=t.intlExpand,i=t.intlCollapse,a=t.toggle,c=t.el,l=t.position,u=t.tooltip,s=t.ref,f=t.scale,d="rtl"===(0,o.a)(c),p=e?i:n,h=["chevrons-left","chevrons-right"];d&&h.reverse();var m="end"===function(t,e){var n;return t||(null===(n=e.closest("calcite-shell-panel"))||void 0===n?void 0:n.position)||"start"}(l,c),v=m?h[1]:h[0],b=m?h[0]:h[1],g=(0,r.h)("calcite-action",{icon:e?v:b,onClick:a,ref:function(t){return function(t){var e=t.tooltip,n=t.referenceElement,r=t.expanded,o=t.ref;return e&&(e.referenceElement=!r&&n?n:null),o&&o(n),n}({tooltip:u,referenceElement:t,expanded:e,ref:s})},scale:f,text:p,textEnabled:e});return u?(0,r.h)("calcite-tooltip-manager",null,g):g}},9409:(t,e,n)=>{n.r(e),n.d(e,{calcite_action_bar:()=>p});var r=n(3848),o=n(3887),i=n(669),a=n(9616),c=n(2855),l=n(2126),u=(n(3744),n(7062),function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{l(r.next(t))}catch(t){i(t)}}function c(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){t.done?n(t.value):o(t.value).then(a,c)}l((r=r.apply(t,e||[])).next())}))}),s=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(t){return function(e){return l([t,e])}}function l(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},f="bottom-actions",d="expand-tooltip",p=function(){function t(t){var e=this;(0,r.r)(this,t),this.calciteActionBarToggle=(0,r.c)(this,"calciteActionBarToggle",7),this.expandDisabled=!1,this.expanded=!1,this.overflowActionsDisabled=!1,this.mutationObserver=(0,a.c)("mutation",(function(){var t=e,n=t.el,r=t.expanded;(0,o.t)({parent:n,expanded:r}),e.conditionallyOverflowActions()})),this.resizeObserver=(0,a.c)("resize",(function(t){return e.resizeHandlerEntries(t)})),this.actionMenuOpenChangeHandler=function(t){if(t.detail){var n=t.composedPath();Array.from(e.el.querySelectorAll("calcite-action-group")).forEach((function(t){n.includes(t)||(t.menuOpen=!1)}))}},this.resizeHandlerEntries=function(t){t.forEach(e.resizeHandler)},this.resizeHandler=function(t){var n=t.contentRect.height;e.resize(n)},this.resize=(0,l.d)((function(t){var n,r=e,a=r.el,c=r.expanded,l=r.expandDisabled;if(t){var u=(0,o.q)(a),s=l?u.length:u.length+1,d=Array.from(a.querySelectorAll("calcite-action-group")),p=(0,i.g)(a,f)||!l?d.length+1:d.length,h=(0,o.g)({actionCount:s,actionHeight:null===(n=u[0])||void 0===n?void 0:n.clientHeight,height:t,groupCount:p});(0,o.a)({actionGroups:d,expanded:c,overflowCount:h})}}),o.o),this.conditionallyOverflowActions=function(){e.overflowActionsDisabled||e.overflowActions()},this.toggleExpand=function(){e.expanded=!e.expanded},this.setExpandToggleRef=function(t){e.expandToggleEl=t}}return t.prototype.expandHandler=function(){this.conditionallyOverflowActions()},t.prototype.expandedHandler=function(t){(0,o.t)({parent:this.el,expanded:t}),this.calciteActionBarToggle.emit()},t.prototype.overflowDisabledHandler=function(t){t?this.resizeObserver.disconnect():this.resizeObserver.observe(this.el)},t.prototype.componentDidLoad=function(){this.conditionallyOverflowActions()},t.prototype.connectedCallback=function(){var t,e,n=this.el,r=this.expanded;(0,o.t)({parent:n,expanded:r}),null===(t=this.mutationObserver)||void 0===t||t.observe(n,{childList:!0,subtree:!0}),this.overflowActionsDisabled||null===(e=this.resizeObserver)||void 0===e||e.observe(n),this.conditionallyOverflowActions(),(0,c.c)(this)},t.prototype.disconnectedCallback=function(){var t,e;null===(t=this.mutationObserver)||void 0===t||t.disconnect(),null===(e=this.resizeObserver)||void 0===e||e.disconnect(),(0,c.d)(this)},t.prototype.overflowActions=function(){return u(this,void 0,void 0,(function(){return s(this,(function(t){return this.resize(this.el.clientHeight),[2]}))}))},t.prototype.setFocus=function(t){return u(this,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return"expand-toggle"!==t?[3,2]:[4,(0,i.f)(this.expandToggleEl)];case 1:return e.sent(),[2];case 2:return this.el.focus(),[2]}}))}))},t.prototype.renderBottomActionGroup=function(){var t=this,e=t.expanded,n=t.expandDisabled,a=t.intlExpand,c=t.intlCollapse,l=t.el,u=t.position,s=t.toggleExpand,p=t.scale,h=(0,i.g)(l,d),m=a||"Expand",v=c||"Collapse",b=n?null:(0,r.h)(o.E,{el:l,expanded:e,intlCollapse:v,intlExpand:m,position:u,ref:this.setExpandToggleRef,scale:p,toggle:s,tooltip:h});return(0,i.g)(l,f)||b?(0,r.h)("calcite-action-group",{class:"action-group--bottom",scale:p},(0,r.h)("slot",{name:f}),(0,r.h)("slot",{name:d}),b):null},t.prototype.render=function(){return(0,r.h)(r.H,{onCalciteActionMenuOpenChange:this.actionMenuOpenChangeHandler},(0,r.h)("slot",null),this.renderBottomActionGroup())},Object.defineProperty(t.prototype,"el",{get:function(){return(0,r.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],overflowActionsDisabled:["overflowDisabledHandler"]}},enumerable:!1,configurable:!0}),t}();p.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{pointer-events:auto;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-item-align:stretch;align-self:stretch;max-width:15vw}:host([overflow-actions-disabled]){overflow-y:auto}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-width:0px;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}::slotted(calcite-action-group:last-child){border-bottom-width:0px}.action-group--bottom{-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:0px}"},2855:(t,e,n)=>{n.r(e),n.d(e,{c:()=>l,d:()=>u});var r,o=n(3848),i=n(9616),a=new Set,c={childList:!0};function l(t){r||(r=(0,i.c)("mutation",s)),r.observe(t.el,c)}function u(t){a.delete(t.el),s(r.takeRecords()),r.disconnect();for(var e=0,n=a.entries();e<n.length;e++){var o=n[e][0];r.observe(o,c)}}function s(t){t.forEach((function(t){var e=t.target;(0,o.f)(e)}))}},2126:(t,e,n)=>{n.r(e),n.d(e,{S:()=>a,a:()=>m,b:()=>p,c:()=>h,d:()=>O,f:()=>r,i:()=>g,r:()=>i});var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")(),a=i.Symbol,c=Object.prototype,l=c.hasOwnProperty,u=c.toString,s=a?a.toStringTag:void 0,f=Object.prototype.toString,d=a?a.toStringTag:void 0;function p(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?function(t){var e=l.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[s]=n:delete t[s]),o}(t):function(t){return f.call(t)}(t)}function h(t){return null!=t&&"object"==typeof t}function m(t){return"symbol"==typeof t||h(t)&&"[object Symbol]"==p(t)}var v=/\s/,b=/^\s+/;function g(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var y=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,w=/^0o[0-7]+$/i,k=parseInt;function A(t){if("number"==typeof t)return t;if(m(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=function(t){return t?t.slice(0,function(t){for(var e=t.length;e--&&v.test(t.charAt(e)););return e}(t)+1).replace(b,""):t}(t);var n=x.test(t);return n||w.test(t)?k(t.slice(2),n?2:8):y.test(t)?NaN:+t}var D=function(){return i.Date.now()},E=Math.max,S=Math.min;function O(t,e,n){var r,o,i,a,c,l,u=0,s=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var n=r,i=o;return r=o=void 0,u=e,a=t.apply(i,n)}function h(t){return u=t,c=setTimeout(v,e),s?p(t):a}function m(t){var n=t-l;return void 0===l||n>=e||n<0||f&&t-u>=i}function v(){var t=D();if(m(t))return b(t);c=setTimeout(v,function(t){var n=e-(t-l);return f?S(n,i-(t-u)):n}(t))}function b(t){return c=void 0,d&&r?p(t):(r=o=void 0,a)}function y(){var t=D(),n=m(t);if(r=arguments,o=this,l=t,n){if(void 0===c)return h(l);if(f)return clearTimeout(c),c=setTimeout(v,e),p(l)}return void 0===c&&(c=setTimeout(v,e)),a}return e=A(e)||0,g(n)&&(s=!!n.leading,i=(f="maxWait"in n)?E(A(n.maxWait)||0,e):i,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=l=o=c=void 0},y.flush=function(){return void 0===c?a:b(D())},y}},669:(t,e,n)=>{n.r(e),n.d(e,{C:()=>i,T:()=>a,a:()=>s,b:()=>u,c:()=>v,d:()=>f,e:()=>c,f:()=>g,g:()=>x,h:()=>h,i:()=>b,j:()=>D,k:()=>k,n:()=>l,q:()=>m,s:()=>A});var r=n(6553),o=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))},i={autoTheme:"calcite-theme-auto",darkTheme:"calcite-theme-dark",lightTheme:"calcite-theme-light",rtl:"calcite--rtl"},a={loading:"Loading"};function c(t){return t?t.id=t.id||"".concat(t.tagName.toLowerCase(),"-").concat((0,r.g)()):""}function l(t){return Array.isArray(t)?t:Array.from(t)}function u(t){var e=v(t,".".concat(i.darkTheme,", .").concat(i.lightTheme));return(null==e?void 0:e.classList.contains("calcite-theme-dark"))?"dark":"light"}function s(t){var e=v(t,"[".concat("dir","]"));return e?e.getAttribute("dir"):"ltr"}function f(t,e,n){var r="[".concat(e,"]"),o=t.closest(r);return o?o.getAttribute(e):n}function d(t){return t.getRootNode()}function p(t){return t.host||null}function h(t,e){return function t(n,r){if(!n)return r;n.assignedSlot&&(n=n.assignedSlot);var i=d(n),a=Array.from(i.querySelectorAll(e)).filter((function(t){return!r.includes(t)}));r=o(o([],r,!0),a,!0);var c=p(i);return c?t(c,r):r}(t,[])}function m(t,e){var n=e.selector,r=e.id;return function t(e){if(!e)return null;e.assignedSlot&&(e=e.assignedSlot);var o=d(e),i=r?o.getElementById(r):n?o.querySelector(n):null,a=p(o);return i||(a?t(a):null)}(t)}function v(t,e){return function t(n){return n?n.closest(e)||t(p(d(n))):null}(t)}function b(t){return"function"==typeof(null==t?void 0:t.setFocus)}function g(t){return function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{l(r.next(t))}catch(t){i(t)}}function c(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){t.done?n(t.value):o(t.value).then(a,c)}l((r=r.apply(t,e||[])).next())}))}(this,void 0,void 0,(function(){return function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(t){return function(e){return l([t,e])}}function l(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}(this,(function(e){return t?[2,b(t)?t.setFocus():t.focus()]:[2]}))}))}var y=":not([slot])";function x(t,e,n){e&&!Array.isArray(e)&&"string"!=typeof e&&(n=e,e=null);var r=e?Array.isArray(e)?e.map((function(t){return'[slot="'.concat(t,'"]')})).join(","):'[slot="'.concat(e,'"]'):y;return(null==n?void 0:n.all)?function(t,e,n){var r=e===y?w(t,y):Array.from(t.querySelectorAll(e));r=n&&!1===n.direct?r:r.filter((function(e){return e.parentElement===t})),r=(null==n?void 0:n.matches)?r.filter((function(t){return null==t?void 0:t.matches(n.matches)})):r;var i=null==n?void 0:n.selector;return i?r.map((function(t){return Array.from(t.querySelectorAll(i))})).reduce((function(t,e){return o(o([],t,!0),e,!0)}),[]).filter((function(t){return!!t})):r}(t,r,n):function(t,e,n){var r=e===y?w(t,y)[0]||null:t.querySelector(e);r=n&&!1===n.direct||(null==r?void 0:r.parentElement)===t?r:null,r=(null==n?void 0:n.matches)?(null==r?void 0:r.matches(n.matches))?r:null:r;var o=null==n?void 0:n.selector;return o?null==r?void 0:r.querySelector(o):r}(t,r,n)}function w(t,e){return t?Array.from(t.children||[]).filter((function(t){return null==t?void 0:t.matches(e)})):[]}function k(t,e){return Array.from(t.children).filter((function(t){return t.matches(e)}))}function A(t,e,n){return"string"==typeof e&&""!==e?e:""===e?t[n]:void 0}function D(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}},6553:(t,e,n)=>{n.r(e),n.d(e,{g:()=>r});var r=function(){return[2,1,1,1,3].map((function(t){for(var e="",n=0;n<t;n++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}},9616:(t,e,n)=>{function r(t,e,n){var r=function(t){return"intersection"===t?window.IntersectionObserver:"mutation"===t?window.MutationObserver:window.ResizeObserver}(t);return new r(e,n)}n.r(e),n.d(e,{c:()=>r})},3744:(t,e,n)=>{n.r(e),n.d(e,{C:()=>r,I:()=>i,S:()=>o});var r={menu:"menu",defaultTrigger:"default-trigger"},o={tooltip:"tooltip",trigger:"trigger"},i={menu:"ellipsis"}},7062:(t,e,n)=>{n.r(e),n.d(e,{I:()=>i,S:()=>r,T:()=>o});var r={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},o={more:"More"},i={menu:"ellipsis"}}}]);