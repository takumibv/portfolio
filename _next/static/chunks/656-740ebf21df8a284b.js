(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{4184:function(e,t){var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var s in n)o.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},1752:function(e,t,n){e.exports=n(6949)},1551:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(c){s=!0,r=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=n(7294))&&i.__esModule?i:{default:i},s=n(1003),c=n(880),l=n(9246);var u={};function h(e,t,n,o){if(e&&s.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;u[t+"%"+n+(r?"%"+r:"")]=!0}}var p=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),i=a.default.useMemo((function(){var t=r(s.resolveHref(o,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?s.resolveHref(o,e.as):i||n}}),[o,e.href,e.as]),p=i.href,m=i.as,d=e.children,f=e.replace,b=e.shallow,g=e.scroll,y=e.locale;"string"===typeof d&&(d=a.default.createElement("a",null,d));var v=(t=a.default.Children.only(d))&&"object"===typeof t&&t.ref,E=r(l.useIntersection({rootMargin:"200px"}),2),w=E[0],j=E[1],P=a.default.useCallback((function(e){w(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,w]);a.default.useEffect((function(){var e=j&&n&&s.isLocalURL(p),t="undefined"!==typeof y?y:o&&o.locale,r=u[p+"%"+m+(t?"%"+t:"")];e&&!r&&h(o,p,m,{locale:t})}),[m,p,j,y,n,o]);var A={ref:P,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,i,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),t[r?"replace":"push"](n,o,{shallow:i,locale:c,scroll:a}))}(e,o,p,m,f,b,g,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(p)&&h(o,p,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var x="undefined"!==typeof y?y:o&&o.locale,L=o&&o.isLocaleDomain&&s.getDomainLocale(m,x,o&&o.locales,o&&o.domainLocales);A.href=L||s.addBasePath(s.addLocale(m,x,o&&o.defaultLocale))}return a.default.cloneElement(t,A)};t.default=p},9246:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(c){s=!0,r=c}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,o=e.disabled||!s,u=i.useRef(),h=r(i.useState(!1),2),p=h[0],m=h[1],d=r(i.useState(t?t.current:null),2),f=d[0],b=d[1],g=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),o||p||e&&e.tagName&&(u.current=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));o?t=c.get(o):(t=c.get(n),l.push(n));if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:i,elements:r}),t}(n),r=o.id,i=o.observer,a=o.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(r);var t=l.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:f,rootMargin:n}))}),[o,f,n,p]);return i.useEffect((function(){if(!s&&!p){var e=a.requestIdleCallback((function(){return m(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[p]),i.useEffect((function(){t&&b(t.current)}),[t]),[g,p]};var i=n(7294),a=n(4686),s="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)},9365:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var o=n(9477);const r={type:"change"},i={type:"start"},a={type:"end"};class s extends o.pBf{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.RsA.ROTATE,MIDDLE:o.RsA.DOLLY,RIGHT:o.RsA.PAN},this.touches={ONE:o.QmN.ROTATE,TWO:o.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",X),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",X),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(r),n.update(),c=s.NONE},this.update=function(){const t=new o.Pa4,i=(new o._fP).setFromUnitVectors(e.up,new o.Pa4(0,1,0)),a=i.clone().invert(),f=new o.Pa4,b=new o._fP,g=new o.Pa4,y=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(i),u.setFromVector3(t),n.autoRotate&&c===s.NONE&&O(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(u.theta+=h.theta*n.dampingFactor,u.phi+=h.phi*n.dampingFactor):(u.theta+=h.theta,u.phi+=h.phi);let o=n.minAzimuthAngle,v=n.maxAzimuthAngle;return isFinite(o)&&isFinite(v)&&(o<-Math.PI?o+=y:o>Math.PI&&(o-=y),v<-Math.PI?v+=y:v>Math.PI&&(v-=y),u.theta=o<=v?Math.max(o,Math.min(v,u.theta)):u.theta>(o+v)/2?Math.max(o,u.theta):Math.min(v,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),u.radius*=p,u.radius=Math.max(n.minDistance,Math.min(n.maxDistance,u.radius)),!0===n.enableDamping?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),t.setFromSpherical(u),t.applyQuaternion(a),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),m.set(0,0,0)),p=1,!!(d||f.distanceToSquared(n.object.position)>l||8*(1-b.dot(n.object.quaternion))>l||g.distanceToSquared(n.target)>0)&&(n.dispatchEvent(r),f.copy(n.object.position),b.copy(n.object.quaternion),g.copy(n.target),d=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",G),n.domElement.removeEventListener("pointerdown",V),n.domElement.removeEventListener("pointercancel",K),n.domElement.removeEventListener("wheel",Z),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",K),null!==n._domElementKeyEvents&&(n._domElementKeyEvents.removeEventListener("keydown",X),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=s.NONE;const l=1e-6,u=new o.$V,h=new o.$V;let p=1;const m=new o.Pa4;let d=!1;const f=new o.FM8,b=new o.FM8,g=new o.FM8,y=new o.FM8,v=new o.FM8,E=new o.FM8,w=new o.FM8,j=new o.FM8,P=new o.FM8,A=[],x={};function L(){return Math.pow(.95,n.zoomSpeed)}function O(e){h.theta-=e}function M(e){h.phi-=e}const T=function(){const e=new o.Pa4;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),m.add(e)}}(),I=function(){const e=new o.Pa4;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),m.add(e)}}(),N=function(){const e=new o.Pa4;return function(t,o){const r=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let a=e.length();a*=Math.tan(n.object.fov/2*Math.PI/180),T(2*t*a/r.clientHeight,n.object.matrix),I(2*o*a/r.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(T(t*(n.object.right-n.object.left)/n.object.zoom/r.clientWidth,n.object.matrix),I(o*(n.object.top-n.object.bottom)/n.object.zoom/r.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function S(e){n.object.isPerspectiveCamera?p/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(e){n.object.isPerspectiveCamera?p*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(e){f.set(e.clientX,e.clientY)}function C(e){y.set(e.clientX,e.clientY)}function _(){if(1===A.length)f.set(A[0].pageX,A[0].pageY);else{const e=.5*(A[0].pageX+A[1].pageX),t=.5*(A[0].pageY+A[1].pageY);f.set(e,t)}}function F(){if(1===A.length)y.set(A[0].pageX,A[0].pageY);else{const e=.5*(A[0].pageX+A[1].pageX),t=.5*(A[0].pageY+A[1].pageY);y.set(e,t)}}function z(){const e=A[0].pageX-A[1].pageX,t=A[0].pageY-A[1].pageY,n=Math.sqrt(e*e+t*t);w.set(0,n)}function U(e){if(1==A.length)b.set(e.pageX,e.pageY);else{const t=$(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);b.set(n,o)}g.subVectors(b,f).multiplyScalar(n.rotateSpeed);const t=n.domElement;O(2*Math.PI*g.x/t.clientHeight),M(2*Math.PI*g.y/t.clientHeight),f.copy(b)}function Y(e){if(1===A.length)v.set(e.pageX,e.pageY);else{const t=$(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);v.set(n,o)}E.subVectors(v,y).multiplyScalar(n.panSpeed),N(E.x,E.y),y.copy(v)}function D(e){const t=$(e),o=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(o*o+r*r);j.set(0,i),P.set(0,Math.pow(j.y/w.y,n.zoomSpeed)),S(P.y),w.copy(j)}function V(e){!1!==n.enabled&&(0===A.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",H),n.domElement.addEventListener("pointerup",K)),function(e){A.push(e)}(e),"touch"===e.pointerType?function(e){switch(B(e),A.length){case 1:switch(n.touches.ONE){case o.QmN.ROTATE:if(!1===n.enableRotate)return;_(),c=s.TOUCH_ROTATE;break;case o.QmN.PAN:if(!1===n.enablePan)return;F(),c=s.TOUCH_PAN;break;default:c=s.NONE}break;case 2:switch(n.touches.TWO){case o.QmN.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&z(),n.enablePan&&F(),c=s.TOUCH_DOLLY_PAN;break;case o.QmN.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&z(),n.enableRotate&&_(),c=s.TOUCH_DOLLY_ROTATE;break;default:c=s.NONE}break;default:c=s.NONE}c!==s.NONE&&n.dispatchEvent(i)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.RsA.DOLLY:if(!1===n.enableZoom)return;!function(e){w.set(e.clientX,e.clientY)}(e),c=s.DOLLY;break;case o.RsA.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;C(e),c=s.PAN}else{if(!1===n.enableRotate)return;k(e),c=s.ROTATE}break;case o.RsA.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;k(e),c=s.ROTATE}else{if(!1===n.enablePan)return;C(e),c=s.PAN}break;default:c=s.NONE}c!==s.NONE&&n.dispatchEvent(i)}(e))}function H(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(B(e),c){case s.TOUCH_ROTATE:if(!1===n.enableRotate)return;U(e),n.update();break;case s.TOUCH_PAN:if(!1===n.enablePan)return;Y(e),n.update();break;case s.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&D(e),n.enablePan&&Y(e)}(e),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&D(e),n.enableRotate&&U(e)}(e),n.update();break;default:c=s.NONE}}(e):function(e){switch(c){case s.ROTATE:if(!1===n.enableRotate)return;!function(e){b.set(e.clientX,e.clientY),g.subVectors(b,f).multiplyScalar(n.rotateSpeed);const t=n.domElement;O(2*Math.PI*g.x/t.clientHeight),M(2*Math.PI*g.y/t.clientHeight),f.copy(b),n.update()}(e);break;case s.DOLLY:if(!1===n.enableZoom)return;!function(e){j.set(e.clientX,e.clientY),P.subVectors(j,w),P.y>0?S(L()):P.y<0&&R(L()),w.copy(j),n.update()}(e);break;case s.PAN:if(!1===n.enablePan)return;!function(e){v.set(e.clientX,e.clientY),E.subVectors(v,y).multiplyScalar(n.panSpeed),N(E.x,E.y),y.copy(v),n.update()}(e)}}(e))}function K(e){!function(e){delete x[e.pointerId];for(let t=0;t<A.length;t++)if(A[t].pointerId==e.pointerId)return void A.splice(t,1)}(e),0===A.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",K)),n.dispatchEvent(a),c=s.NONE}function Z(e){!1!==n.enabled&&!1!==n.enableZoom&&c===s.NONE&&(e.preventDefault(),n.dispatchEvent(i),function(e){e.deltaY<0?R(L()):e.deltaY>0&&S(L()),n.update()}(e),n.dispatchEvent(a))}function X(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function G(e){!1!==n.enabled&&e.preventDefault()}function B(e){let t=x[e.pointerId];void 0===t&&(t=new o.FM8,x[e.pointerId]=t),t.set(e.pageX,e.pageY)}function $(e){const t=e.pointerId===A[0].pointerId?A[1]:A[0];return x[t.pointerId]}n.domElement.addEventListener("contextmenu",G),n.domElement.addEventListener("pointerdown",V),n.domElement.addEventListener("pointercancel",K),n.domElement.addEventListener("wheel",Z,{passive:!1}),this.update()}}},7011:function(e,t,n){"use strict";n.d(t,{L:function(){return b}});var o=n(9477);const r=/^[og]\s*(.+)?/,i=/^mtllib /,a=/^usemtl /,s=/^usemap /,c=/\s+/,l=new o.Pa4,u=new o.Pa4,h=new o.Pa4,p=new o.Pa4,m=new o.Pa4,d=new o.Ilk;function f(){const e={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=e,void(this.object.fromDeclaration=!1!==t);const n=this.object&&"function"===typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"===typeof this.object._finalize&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:!1!==t,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(e,t){const n=this._finalize(!1);n&&(n.inherited||n.groupCount<=0)&&this.materials.splice(n.index,1);const o={index:this.materials.length,name:e||"",mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:"",smooth:void 0!==n?n.smooth:this.smooth,groupStart:void 0!==n?n.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){const t={index:"number"===typeof e?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return t.clone=this.clone.bind(t),t}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){const t=this.currentMaterial();if(t&&-1===t.groupEnd&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(let n=this.materials.length-1;n>=0;n--)this.materials[n].groupCount<=0&&this.materials.splice(n,1);return e&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),t}},n&&n.name&&"function"===typeof n.clone){const e=n.clone(0);e.inherited=!0,this.object.materials.push(e)}this.objects.push(this.object)},finalize:function(){this.object&&"function"===typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return 3*(n>=0?n-1:n+t/3)},parseNormalIndex:function(e,t){const n=parseInt(e,10);return 3*(n>=0?n-1:n+t/3)},parseUVIndex:function(e,t){const n=parseInt(e,10);return 2*(n>=0?n-1:n+t/2)},addVertex:function(e,t,n){const o=this.vertices,r=this.object.geometry.vertices;r.push(o[e+0],o[e+1],o[e+2]),r.push(o[t+0],o[t+1],o[t+2]),r.push(o[n+0],o[n+1],o[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const o=this.normals,r=this.object.geometry.normals;r.push(o[e+0],o[e+1],o[e+2]),r.push(o[t+0],o[t+1],o[t+2]),r.push(o[n+0],o[n+1],o[n+2])},addFaceNormal:function(e,t,n){const o=this.vertices,r=this.object.geometry.normals;l.fromArray(o,e),u.fromArray(o,t),h.fromArray(o,n),m.subVectors(h,u),p.subVectors(l,u),m.cross(p),m.normalize(),r.push(m.x,m.y,m.z),r.push(m.x,m.y,m.z),r.push(m.x,m.y,m.z)},addColor:function(e,t,n){const o=this.colors,r=this.object.geometry.colors;void 0!==o[e]&&r.push(o[e+0],o[e+1],o[e+2]),void 0!==o[t]&&r.push(o[t+0],o[t+1],o[t+2]),void 0!==o[n]&&r.push(o[n+0],o[n+1],o[n+2])},addUV:function(e,t,n){const o=this.uvs,r=this.object.geometry.uvs;r.push(o[e+0],o[e+1]),r.push(o[t+0],o[t+1]),r.push(o[n+0],o[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,o,r,i,a,s,c){const l=this.vertices.length;let u=this.parseVertexIndex(e,l),h=this.parseVertexIndex(t,l),p=this.parseVertexIndex(n,l);if(this.addVertex(u,h,p),this.addColor(u,h,p),void 0!==a&&""!==a){const e=this.normals.length;u=this.parseNormalIndex(a,e),h=this.parseNormalIndex(s,e),p=this.parseNormalIndex(c,e),this.addNormal(u,h,p)}else this.addFaceNormal(u,h,p);if(void 0!==o&&""!==o){const e=this.uvs.length;u=this.parseUVIndex(o,e),h=this.parseUVIndex(r,e),p=this.parseUVIndex(i,e),this.addUV(u,h,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,o=e.length;n<o;n++){const o=this.parseVertexIndex(e[n],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,o=this.uvs.length;for(let r=0,i=e.length;r<i;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,i=t.length;r<i;r++)this.addUVLine(this.parseUVIndex(t[r],o))}};return e.startObject("",!1),e}class b extends o.aNw{constructor(e){super(e),this.materials=null}load(e,t,n,r){const i=this,a=new o.hH6(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,(function(n){try{t(i.parse(n))}catch(o){r?r(o):console.error(o),i.manager.itemError(e)}}),n,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new f;-1!==e.indexOf("\r\n")&&(e=e.replace(/\r\n/g,"\n")),-1!==e.indexOf("\\\n")&&(e=e.replace(/\\\n/g,""));const n=e.split("\n");let l=[];for(let o=0,h=n.length;o<h;o++){const e=n[o].trimStart();if(0===e.length)continue;const u=e.charAt(0);if("#"!==u)if("v"===u){const n=e.split(c);switch(n[0]){case"v":t.vertices.push(parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3])),n.length>=7?(d.setRGB(parseFloat(n[4]),parseFloat(n[5]),parseFloat(n[6])).convertSRGBToLinear(),t.colors.push(d.r,d.g,d.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3]));break;case"vt":t.uvs.push(parseFloat(n[1]),parseFloat(n[2]))}}else if("f"===u){const n=e.slice(1).trim().split(c),o=[];for(let e=0,t=n.length;e<t;e++){const t=n[e];if(t.length>0){const e=t.split("/");o.push(e)}}const r=o[0];for(let e=1,i=o.length-1;e<i;e++){const n=o[e],i=o[e+1];t.addFace(r[0],n[0],i[0],r[1],n[1],i[1],r[2],n[2],i[2])}}else if("l"===u){const n=e.substring(1).trim().split(" ");let o=[];const r=[];if(-1===e.indexOf("/"))o=n;else for(let e=0,t=n.length;e<t;e++){const t=n[e].split("/");""!==t[0]&&o.push(t[0]),""!==t[1]&&r.push(t[1])}t.addLineGeometry(o,r)}else if("p"===u){const n=e.slice(1).trim().split(" ");t.addPointGeometry(n)}else if(null!==(l=r.exec(e))){const e=(" "+l[0].slice(1).trim()).slice(1);t.startObject(e)}else if(a.test(e))t.object.startMaterial(e.substring(7).trim(),t.materialLibraries);else if(i.test(e))t.materialLibraries.push(e.substring(7).trim());else if(s.test(e))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if("s"===u){if(l=e.split(" "),l.length>1){const e=l[1].trim().toLowerCase();t.object.smooth="0"!==e&&"off"!==e}else t.object.smooth=!0;const n=t.object.currentMaterial();n&&(n.smooth=t.object.smooth)}else{if("\0"===e)continue;console.warn('THREE.OBJLoader: Unexpected line: "'+e+'"')}}t.finalize();const u=new o.ZAu;u.materialLibraries=[].concat(t.materialLibraries);if(!0===!(1===t.objects.length&&0===t.objects[0].geometry.vertices.length))for(let r=0,i=t.objects.length;r<i;r++){const e=t.objects[r],n=e.geometry,i=e.materials,a="Line"===n.type,s="Points"===n.type;let c=!1;if(0===n.vertices.length)continue;const l=new o.u9r;l.setAttribute("position",new o.a$l(n.vertices,3)),n.normals.length>0&&l.setAttribute("normal",new o.a$l(n.normals,3)),n.colors.length>0&&(c=!0,l.setAttribute("color",new o.a$l(n.colors,3))),!0===n.hasUVIndices&&l.setAttribute("uv",new o.a$l(n.uvs,2));const h=[];for(let r=0,u=i.length;r<u;r++){const e=i[r],n=e.name+"_"+e.smooth+"_"+c;let l=t.materials[n];if(null!==this.materials)if(l=this.materials.create(e.name),!a||!l||l instanceof o.nls){if(s&&l&&!(l instanceof o.UY4)){const e=new o.UY4({size:10,sizeAttenuation:!1});o.F5T.prototype.copy.call(e,l),e.color.copy(l.color),e.map=l.map,l=e}}else{const e=new o.nls;o.F5T.prototype.copy.call(e,l),e.color.copy(l.color),l=e}void 0===l&&(l=a?new o.nls:s?new o.UY4({size:1,sizeAttenuation:!1}):new o.xoR,l.name=e.name,l.flatShading=!e.smooth,l.vertexColors=c,t.materials[n]=l),h.push(l)}let p;if(h.length>1){for(let e=0,t=i.length;e<t;e++){const t=i[e];l.addGroup(t.groupStart,t.groupCount,e)}p=a?new o.ejS(l,h):s?new o.woe(l,h):new o.Kj0(l,h)}else p=a?new o.ejS(l,h[0]):s?new o.woe(l,h[0]):new o.Kj0(l,h[0]);p.name=e.name,u.add(p)}else if(t.vertices.length>0){const e=new o.UY4({size:1,sizeAttenuation:!1}),n=new o.u9r;n.setAttribute("position",new o.a$l(t.vertices,3)),t.colors.length>0&&void 0!==t.colors[0]&&(n.setAttribute("color",new o.a$l(t.colors,3)),e.vertexColors=!0);const r=new o.woe(n,e);u.add(r)}return u}}}}]);