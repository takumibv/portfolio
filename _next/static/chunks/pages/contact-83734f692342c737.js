(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&e.push(l);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},1752:function(e,t,r){e.exports=r(6949)},3038:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(1177)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},l=r(1003),u=r(880),s=r(9246);var c={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=u.useRouter(),a=i.default.useMemo((function(){var t=o(l.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,m=e.children,h=e.replace,y=e.shallow,v=e.scroll,b=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var g=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,x=o(s.useIntersection({rootMargin:"200px"}),2),j=x[0],w=x[1],N=i.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);i.default.useEffect((function(){var e=w&&r&&l.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=c[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,w,b,r,n]);var _={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:i}))}(e,n,d,p,h,y,v,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof b?b:n&&n.locale,E=n&&n.isLocaleDomain&&l.getDomainLocale(p,C,n&&n.locales,n&&n.domainLocales);_.href=E||l.addBasePath(l.addLocale(p,C,n&&n.defaultLocale))}return i.default.cloneElement(t,_)};t.default=d},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,c=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],m=o(a.useState(t?t.current:null),2),h=m[0],y=m[1],v=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=u.get(n):(t=u.get(r),s.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),u.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:r}))}),[n,h,r,d]);return a.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&y(t.current)}),[t]),[v,d]};var a=r(7294),i=r(4686),l="undefined"!==typeof IntersectionObserver;var u=new Map,s=[]},1177:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(7737),a=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("main",{id:"about",className:"l-main l-main--child",children:(0,n.jsx)("form",{method:"post",action:"https://docs.google.com/forms/d/1StnTMyI0giSy9R5fYPuJU3n6b0OksjgA0RcdW9C_4Qw/formResponse?",children:(0,n.jsxs)("section",{className:"section pb-0",children:[(0,n.jsx)("div",{className:"container mx-auto",children:(0,n.jsx)("h3",{className:"section__title",children:"CONTACT"})}),(0,n.jsxs)("div",{className:"container mx-auto",children:[(0,n.jsx)("div",{className:"row py-4",children:(0,n.jsxs)("div",{className:"four columns",children:[(0,n.jsx)("h4",{className:"sub-headline mb-2",children:"\u304a\u540d\u524d"}),(0,n.jsx)("input",{type:"text",autoComplete:"name",className:"input-text",name:"entry.1686029864",id:"entry.1686029864",required:!0})]})}),(0,n.jsx)("div",{className:"row py-4",children:(0,n.jsxs)("div",{className:"four columns",children:[(0,n.jsx)("h4",{className:"sub-headline mb-2",children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),(0,n.jsx)("input",{type:"email",autoComplete:"email",className:"input-text",name:"entry.260377274",id:"entry.260377274",required:!0})]})}),(0,n.jsx)("div",{className:"row py-4",children:(0,n.jsxs)("div",{className:"twelve columns",children:[(0,n.jsx)("h4",{className:"sub-headline mb-2",children:"\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9"}),(0,n.jsx)("textarea",{className:"input-textarea",name:"entry.173211727",id:"entry.173211727",cols:10,rows:8,required:!0})]})}),(0,n.jsx)("div",{className:"py-4",children:(0,n.jsx)("input",{className:"button",type:"submit",value:"\u9001\u4fe1"})})]})]})})})})};a.getLayout=function(e){return(0,n.jsx)(o.Z,{title:"works",children:e})},t.default=a},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[584,17,774,888,179],(function(){return t=3038,e(e.s=t);var t}));var t=e.O();_N_E=t}]);