!function(t){function e(e){for(var n,r,o=e[0],u=e[1],l=0,c=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(a&&a(e);c.length;)c.shift()()}function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(t){var e=[];o[t]?e.push(o[t]):0!==o[t]&&{2:1,3:1}[t]&&e.push(o[t]=new Promise((function(e,r){for(var i=({2:"route-about",3:"route-home"}[t]||t)+".chunk."+{2:"a9877",3:"8aeee"}[t]+".css",u=n.p+i,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var a=(p=l[c]).getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(a===i||a===u))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){var p;if((a=(p=f[c]).getAttribute("data-href"))===i||a===u)return e()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";s.onerror=s.onload=function(n){if(s.onerror=s.onload=null,"load"===n.type)e();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||u,c=new Error("Loading CSS chunk "+t+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,delete o[t],s.parentNode.removeChild(s),r(c)}},s.href=u,document.head.appendChild(s)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(t){return n.p+""+({2:"route-about",3:"route-home"}[t]||t)+".chunk."+{2:"1c42b",3:"78af1"}[t]+".js"}(t);var a=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}i[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/preact-boilerplate/",n.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var a=l;n(n.s="mdyV")}({QfWi:function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return c(t)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){if("string"==typeof t.type)return null;var n=t.__;if(n){var r=n.__k;if(r){Array.isArray(r)||(r=[r]);var o=r.indexOf(t);-1===o&&(o=r.length);for(var i=o;i--;){var u=r[i],l=u&&u.__e||p(u,!0);if(l)return l}}return e?void 0:p(n)}}function s(t){function e(){var e=this;_.Component.call(this),n||(this.componentWillMount=function(){t((function(t){n=t&&t.default||t,e.setState({})}))},this.shouldComponentUpdate=function(){return null!=n}),this.render=function(t){if(n)return Object(_.h)(n,t);var r=p(e.__v),o=r&&r.nextSibling||(e.__P||e._parentDom).firstChild;return o&&Object(_.h)(o.localName,{dangerouslySetInnerHTML:k})}}var n;return e.preload=t,(e.prototype=new _.Component).constructor=e,e}n.r(e);var _=n("hosL"),d=n("Y3FI"),h="/".concat("preact-boilerplate"),y=function(t){function e(){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return f(c(t=a.call.apply(a,[this].concat(n))),"componentWillMount",(function(){var e=t.props.to;Object(d.route)(e,!0)})),f(c(t),"render",(function(){return null})),t}!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(e,t);var n,r,l,a=u(e);return n=e,r&&o(n.prototype,r),l&&o(n,l),Object.defineProperty(n,"prototype",{writable:!1}),n}(_.Component),v=n("ox/y"),m="header__OVZyn",b="active__r+Z6z",g=function(){return Object(_.h)("header",{class:m},Object(_.h)("h1",null,"Preact Boilerplate"),Object(_.h)("nav",null,Object(_.h)(v.Link,{activeClassName:b,href:"".concat(h,"/")},"Home"),Object(_.h)(v.Link,{activeClassName:b,href:"".concat(h,"/about")},"About")))},k={},O=s((function(t){n.e(3).then(function(){var e=n("+1Jk");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),C=s((function(t){n.e(2).then(function(){var e=n("ZbNB");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)}));e.default=function(){var t,e,n;return"undefined"!=typeof window&&(null===(t=window)||void 0===t||null===(e=t.location)||void 0===e||null===(n=e.hash)||void 0===n?void 0:n.length)>0&&(window.location.href=window.location.hash.replace("#!","")),Object(_.h)("div",{id:"app"},Object(_.h)(g,null),Object(_.h)(d.Router,null,Object(_.h)(O,{path:"".concat(h,"/")}),Object(_.h)(C,{path:"".concat(h,"/about")}),Object(_.h)(y,{default:!0,to:"/"})))}},Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var f=c[a].split("=");u[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}t=l(t.replace(o,"")),e=l(e||"");for(var p=Math.max(t.length,e.length),s=0;s<p;s++)if(e[s]&&":"===e[s].charAt(0)){var _=e[s].replace(/(^:|[+*?]+$)/g,""),d=(e[s].match(/[+*?]+$/)||v)[0]||"",h=~d.indexOf("+"),y=~d.indexOf("*"),m=t[s]||"";if(!m&&!y&&(d.indexOf("?")<0||h)){r=!1;break}if(u[_]=decodeURIComponent(m),h||y){u[_]=t.slice(s).map(decodeURIComponent).join("/");break}}else if(e[s]!==t[s]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(c).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function c(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function a(){var t;return""+((t=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(t.search||"")}function f(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=b.length;e--;)if(b[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),m&&m[e]?m[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),p(t)}function p(t){for(var e=!1,n=0;n<b.length;n++)!0===b[n].routeTo(t)&&(e=!0);for(var r=g.length;r--;)g[r](t);return e}function s(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return f(e)}}function _(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return s(t.currentTarget||t.target||this),d(t)}function d(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function h(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(s(e))return d(t)}}while(e=e.parentNode)}}n.r(e),n.d(e,"subscribers",(function(){return g})),n.d(e,"getCurrentUrl",(function(){return a})),n.d(e,"route",(function(){return f})),n.d(e,"Router",(function(){return C})),n.d(e,"Route",(function(){return j})),n.d(e,"Link",(function(){return w})),n.d(e,"exec",(function(){return o}));var y=n("hosL"),v={},m=null,b=[],g=[],k={},O=!1,C=function(t){function e(e){t.call(this,e),e.history&&(m=e.history),this.state={url:e.url||a()},O||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){p(a())})),addEventListener("click",h)),O=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(y.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){b.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;m&&(this.unlisten=m.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),b.splice(b.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(y.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(y.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},e}(y.Component),w=function(t){return Object(y.createElement)("a",r({onClick:_},t))},j=function(t){return Object(y.createElement)(t.component,t)};C.subscribers=g,C.getCurrentUrl=a,C.route=f,C.Router=C,C.Route=j,C.Link=w,C.exec=o,e.default=C},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,l={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?U.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===l[i]&&(l[i]=t.defaultProps[i]);return u(t,l,r,o,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++R:o};return null==o&&null!=T.vnode&&T.vnode(i),i}function l(){return{current:null}}function c(t){return t.children}function a(t,e){this.props=t,this.context=e}function f(t,e){if(null==e)return t.__?f(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?f(t):null}function p(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return p(t)}}function s(t){(!t.__d&&(t.__d=!0)&&D.push(t)&&!_.__r++||N!==T.debounceRendering)&&((N=T.debounceRendering)||setTimeout)(_)}function _(){for(var t;_.__r=D.length;)t=D.sort((function(t,e){return t.__v.__b-e.__v.__b})),D=[],t.some((function(t){var e,n,o,i,u,l;t.__d&&(u=(i=(e=t).__v).__e,(l=e.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,O(l,i,o,e.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?f(i):u,i.__h),C(n,i),i.__e!=u&&p(i)))}))}function d(t,e,n,r,o,i,l,a,p,s){var _,d,y,m,b,g,k,C=r&&r.__k||B,w=C.length;for(n.__k=[],_=0;_<e.length;_++)if(null!=(m=n.__k[_]=null==(m=e[_])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(c,{children:m},null,null,null):m.__b>0?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=C[_])||y&&m.key==y.key&&m.type===y.type)C[_]=void 0;else for(d=0;d<w;d++){if((y=C[d])&&m.key==y.key&&m.type===y.type){C[d]=void 0;break}y=null}O(t,m,y=y||I,o,i,l,a,p,s),b=m.__e,(d=m.ref)&&y.ref!=d&&(k||(k=[]),y.ref&&k.push(y.ref,null,m),k.push(d,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&m.__k===y.__k?m.__d=p=h(m,p,t):p=v(t,m,y,C,b,p),"function"==typeof n.type&&(n.__d=p)):p&&y.__e==p&&p.parentNode!=t&&(p=f(y))}for(n.__e=g,_=w;_--;)null!=C[_]&&("function"==typeof n.type&&null!=C[_].__e&&C[_].__e==n.__d&&(n.__d=f(r,_+1)),x(C[_],C[_]));if(k)for(_=0;_<k.length;_++)j(k[_],k[++_],k[++_])}function h(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e="function"==typeof r.type?h(r,e,n):v(n,r,r,o,r.__e,e));return e}function y(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){y(t,e)})):e.push(t)),e}function v(t,e,n,r,o,i){var u,l,c;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),u=null;else{for(l=i,c=0;(l=l.nextSibling)&&c<r.length;c+=2)if(l==o)break t;t.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function m(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||F.test(e)?n:n+"px"}function b(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||m(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||m(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?k:g,i):t.removeEventListener(e,i?k:g,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function g(t){this.l[t.type+!1](T.event?T.event(t):t)}function k(t){this.l[t.type+!0](T.event?T.event(t):t)}function O(t,e,n,o,i,u,l,f,p){var s,_,h,y,v,m,b,g,k,O,C,j,x,P=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(p=n.__h,f=e.__e=n.__e,e.__h=null,u=[f]),(s=T.__b)&&s(e);try{t:if("function"==typeof P){if(g=e.props,k=(s=P.contextType)&&o[s.__c],O=s?k?k.props.value:s.__:o,n.__c?b=(_=e.__c=n.__c).__=_.__E:("prototype"in P&&P.prototype.render?e.__c=_=new P(g,O):(e.__c=_=new a(g,O),_.constructor=P,_.render=S),k&&k.sub(_),_.props=g,_.state||(_.state={}),_.context=O,_.__n=o,h=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=P.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=r({},_.__s)),r(_.__s,P.getDerivedStateFromProps(g,_.__s))),y=_.props,v=_.state,h)null==P.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==y&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(g,O),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(g,_.__s,O)||e.__v===n.__v){_.props=g,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),_.__h.length&&l.push(_);break t}null!=_.componentWillUpdate&&_.componentWillUpdate(g,_.__s,O),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(y,v,m)}))}if(_.context=O,_.props=g,_.__v=e,_.__P=t,C=T.__r,j=0,"prototype"in P&&P.prototype.render)_.state=_.__s,_.__d=!1,C&&C(e),s=_.render(_.props,_.state,_.context);else do{_.__d=!1,C&&C(e),s=_.render(_.props,_.state,_.context),_.state=_.__s}while(_.__d&&++j<25);_.state=_.__s,null!=_.getChildContext&&(o=r(r({},o),_.getChildContext())),h||null==_.getSnapshotBeforeUpdate||(m=_.getSnapshotBeforeUpdate(y,v)),x=null!=s&&s.type===c&&null==s.key?s.props.children:s,d(t,Array.isArray(x)?x:[x],e,n,o,i,u,l,f,p),_.base=e.__e,e.__h=null,_.__h.length&&l.push(_),b&&(_.__E=_.__=null),_.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=w(n.__e,e,n,o,i,u,l,p);(s=T.diffed)&&s(e)}catch(t){e.__v=null,(p||null!=u)&&(e.__e=f,e.__h=!!p,u[u.indexOf(f)]=null),T.__e(t,e,n)}}function C(t,e){T.__c&&T.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){T.__e(t,e.__v)}}))}function w(t,e,n,r,i,u,l,c){var a,p,s,_=n.props,h=e.props,y=e.type,v=0;if("svg"===y&&(i=!0),null!=u)for(;v<u.length;v++)if((a=u[v])&&"setAttribute"in a==!!y&&(y?a.localName===y:3===a.nodeType)){t=a,u[v]=null;break}if(null==t){if(null===y)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),u=null,c=!1}if(null===y)_===h||c&&t.data===h||(t.data=h);else{if(u=u&&U.call(t.childNodes),p=(_=n.props||I).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!c){if(null!=u)for(_={},v=0;v<t.attributes.length;v++)_[t.attributes[v].name]=t.attributes[v].value;(s||p)&&(s&&(p&&s.__html==p.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||b(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||b(t,i,e[i],n[i],r)}(t,h,_,i,c),s)e.__k=[];else if(v=e.props.children,d(t,Array.isArray(v)?v:[v],e,n,r,i&&"foreignObject"!==y,u,l,u?u[0]:n.__k&&f(n,0),c),null!=u)for(v=u.length;v--;)null!=u[v]&&o(u[v]);c||("value"in h&&void 0!==(v=h.value)&&(v!==t.value||"progress"===y&&!v||"option"===y&&v!==_.value)&&b(t,"value",v,_.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==t.checked&&b(t,"checked",v,_.checked,!1))}return t}function j(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){T.__e(t,n)}}function x(t,e,n){var r,i;if(T.unmount&&T.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||j(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){T.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&x(r[i],e,"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__e=t.__d=void 0}function S(t,e,n){return this.constructor(t,n)}function P(t,e,n){var r,o,u;T.__&&T.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,u=[],O(e,t=(!r&&n||e).__k=i(c,null,[t]),o||I,I,void 0!==e.ownerSVGElement,!r&&n?[n]:o?null:e.firstChild?U.call(e.childNodes):null,u,!r&&n?n:o?o.__e:e.firstChild,r),C(u,t)}function A(t,e){P(t,e,A)}function E(t,e,n){var o,i,l,c=r({},t.props);for(l in e)"key"==l?o=e[l]:"ref"==l?i=e[l]:c[l]=e[l];return arguments.length>2&&(c.children=arguments.length>3?U.call(arguments,2):n),u(t.type,c,o||t.key,i||t.ref,null)}function L(t,e){var n={__c:e="__cC"+W++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(s)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"render",(function(){return P})),n.d(e,"hydrate",(function(){return A})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return c})),n.d(e,"createRef",(function(){return l})),n.d(e,"isValidElement",(function(){return M})),n.d(e,"Component",(function(){return a})),n.d(e,"cloneElement",(function(){return E})),n.d(e,"createContext",(function(){return L})),n.d(e,"toChildArray",(function(){return y})),n.d(e,"options",(function(){return T}));var U,T,R,M,D,N,W,I={},B=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;U=B.slice,T={__e:function(t,e,n,r){for(var o,i,u;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),u=o.__d),u)return o.__E=o}catch(e){t=e}throw t}},R=0,M=function(t){return null!=t&&void 0===t.constructor},a.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),s(this))},a.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),s(this))},a.prototype.render=c,D=[],_.__r=0,W=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=r.h,i=r.render,u=r.hydrate,l=function(t){return t&&t.default?t.default:t},c=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(c(n.p)+"sw.js"),"function"==typeof l(n("QfWi"))){var a=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=l(n("QfWi")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var f={preRenderData:e},p=e.url?c(e.url):"";(u&&p===c(location.pathname)?u:i)(o(t,{CLI_DATA:f}),document.body,a)}()}},"ox/y":function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==r(e)&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=n("hosL"),l=n("Y3FI"),c=e.Match=function(t){function e(){for(var e,n,r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return e=n=o(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},o(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+r(e));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){l.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){l.subscribers.splice(l.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,l.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,l.exec)(n,t.path,{})})},e}(u.Component),a=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,u.h)(c,{path:n||r.href},(function(t){return(0,u.h)(l.Link,i({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=a,e.default=c,c.Link=a}});
//# sourceMappingURL=bundle.99351.js.map