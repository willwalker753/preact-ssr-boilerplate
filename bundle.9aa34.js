!function(t){function e(e){for(var n,r,o=e[0],u=e[1],l=0,c=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(a&&a(e);c.length;)c.shift()()}function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(t){var e=[];o[t]?e.push(o[t]):0!==o[t]&&{2:1,3:1}[t]&&e.push(o[t]=new Promise((function(e,r){for(var i=({2:"route-about",3:"route-home"}[t]||t)+".chunk."+{2:"a9877",3:"8aeee"}[t]+".css",u=n.p+i,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var a=(s=l[c]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===i||a===u))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){var s;if((a=(s=f[c]).getAttribute("data-href"))===i||a===u)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css";p.onerror=p.onload=function(n){if(p.onerror=p.onload=null,"load"===n.type)e();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||u,c=new Error("Loading CSS chunk "+t+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=l,delete o[t],p.parentNode.removeChild(p),r(c)}},p.href=u,document.head.appendChild(p)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(t){return n.p+""+({2:"route-about",3:"route-home"}[t]||t)+".chunk."+{2:"d9b13",3:"78af1"}[t]+".js"}(t);var a=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}i[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/preact-boilerplate/",n.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var a=l;n(n.s="mdyV")}({QfWi:function(t,e,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t){function e(){var t=a(b.location.hash.substr(1)),e=t.pathname,n=t.search,r=t.hash,o=k.state||{};return[o.idx,d({pathname:void 0===e?"/":e,search:void 0===n?"":n,hash:void 0===r?"":r,state:o.usr||null,key:o.key||"default"})]}function n(){if(C)w.call(C),C=null;else{var t=p.Pop,n=e(),r=n[0];if(w.length){if(null!=r){var o=S-r;o&&(C={action:t,location:n[1],retry:function(){m(-1*o)}},m(o))}}else h(t)}}function o(t){return function(){var t=document.querySelector("base"),e="";if(t&&t.getAttribute("href")){var n=b.location.href,r=n.indexOf("#");e=-1===r?n:n.slice(0,r)}return e}()+"#"+("string"==typeof t?t:c(t))}function f(t,e){return void 0===e&&(e=null),d(r({pathname:P.pathname,hash:"",search:""},"string"==typeof t?a(t):t,{state:e,key:l()}))}function s(t,e){return[{usr:t.state,key:t.key,idx:e},o(t)]}function _(t,e,n){return!w.length||(w.call({action:t,location:e,retry:n}),!1)}function h(t){O=t;var n=e();S=n[0],j.call({action:O,location:P=n[1]})}function m(t){k.go(t)}void 0===t&&(t={});var g=t.window,b=void 0===g?document.defaultView:g,k=b.history,C=null;b.addEventListener(y,n),b.addEventListener("hashchange",(function(){c(e()[1])!==c(P)&&n()}));var O=p.Pop,x=e(),S=x[0],P=x[1],j=u(),w=u();null==S&&k.replaceState(r({},k.state,{idx:S=0}),"");var A={get action(){return O},get location(){return P},createHref:o,push:function t(e,n){var r=p.Push,o=f(e,n);if(_(r,o,(function(){t(e,n)}))){var i=s(o,S+1),u=i[0],l=i[1];try{k.pushState(u,"",l)}catch(t){b.location.assign(l)}h(r)}},replace:function t(e,n){var r=p.Replace,o=f(e,n);if(_(r,o,(function(){t(e,n)}))){var i=s(o,S);k.replaceState(i[0],"",i[1]),h(r)}},go:m,back:function(){m(-1)},forward:function(){m(1)},listen:function(t){return j.push(t)},block:function(t){var e=w.push(t);return 1===w.length&&b.addEventListener(v,i),function(){e(),w.length||b.removeEventListener(v,i)}}};return A}function i(t){t.preventDefault(),t.returnValue=""}function u(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter((function(t){return t!==e}))}},call:function(e){t.forEach((function(t){return t&&t(e)}))}}}function l(){return Math.random().toString(36).substr(2,8)}function c(t){var e=t.pathname,n=void 0===e?"/":e,r=t.search,o=void 0===r?"":r,i=t.hash,u=void 0===i?"":i;return o&&"?"!==o&&(n+="?"===o.charAt(0)?o:"?"+o),u&&"#"!==u&&(n+="#"===u.charAt(0)?u:"#"+u),n}function a(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function f(t,e){if("string"==typeof t.type)return null;var n=t.__;if(n){var r=n.__k;if(r){Array.isArray(r)||(r=[r]);var o=r.indexOf(t);-1===o&&(o=r.length);for(var i=o;i--;){var u=r[i],l=u&&u.__e||f(u,!0);if(l)return l}}return e?void 0:f(n)}}function s(t){function e(){var e=this;_.Component.call(this),n||(this.componentWillMount=function(){t((function(t){n=t&&t.default||t,e.setState({})}))},this.shouldComponentUpdate=function(){return null!=n}),this.render=function(t){if(n)return Object(_.h)(n,t);var r=f(e.__v),o=r&&r.nextSibling||(e.__P||e._parentDom).firstChild;return o&&Object(_.h)(o.localName,{dangerouslySetInnerHTML:O})}}var n;return e.preload=t,(e.prototype=new _.Component).constructor=e,e}n.r(e);var p,_=n("hosL"),h=n("Y3FI");!function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"}(p||(p={}));var d=function(t){return t},v="beforeunload",y="popstate",m="/".concat("preact-boilerplate"),g=n("ox/y"),b="header__OVZyn",k="active__r+Z6z",C=function(){return Object(_.h)("header",{class:b},Object(_.h)("h1",null,"Preact Boilerplate"),Object(_.h)("nav",null,Object(_.h)(g.Link,{activeClassName:k,href:"".concat(m,"/")},"Home"),Object(_.h)(g.Link,{activeClassName:k,href:"".concat(m,"/about")},"About")))},O={},x=s((function(t){n.e(3).then(function(){var e=n("+1Jk");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),S=s((function(t){n.e(2).then(function(){var e=n("ZbNB");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)}));e.default=function(){return Object(_.h)("div",{id:"app"},Object(_.h)(C,null),Object(_.h)(h.Router,{history:o()},Object(_.h)(S,{path:"".concat(m,"/about")}),Object(_.h)(x,{default:!0})))}},Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var f=c[a].split("=");u[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}t=l(t.replace(o,"")),e=l(e||"");for(var s=Math.max(t.length,e.length),p=0;p<s;p++)if(e[p]&&":"===e[p].charAt(0)){var _=e[p].replace(/(^:|[+*?]+$)/g,""),h=(e[p].match(/[+*?]+$/)||y)[0]||"",d=~h.indexOf("+"),v=~h.indexOf("*"),m=t[p]||"";if(!m&&!v&&(h.indexOf("?")<0||d)){r=!1;break}if(u[_]=decodeURIComponent(m),d||v){u[_]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(c).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function c(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function a(){var t;return""+((t=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(t.search||"")}function f(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=g.length;e--;)if(g[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),m&&m[e]?m[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),s(t)}function s(t){for(var e=!1,n=0;n<g.length;n++)!0===g[n].routeTo(t)&&(e=!0);for(var r=b.length;r--;)b[r](t);return e}function p(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return f(e)}}function _(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return p(t.currentTarget||t.target||this),h(t)}function h(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function d(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(p(e))return h(t)}}while(e=e.parentNode)}}n.r(e),n.d(e,"subscribers",(function(){return b})),n.d(e,"getCurrentUrl",(function(){return a})),n.d(e,"route",(function(){return f})),n.d(e,"Router",(function(){return O})),n.d(e,"Route",(function(){return S})),n.d(e,"Link",(function(){return x})),n.d(e,"exec",(function(){return o}));var v=n("hosL"),y={},m=null,g=[],b=[],k={},C=!1,O=function(t){function e(e){t.call(this,e),e.history&&(m=e.history),this.state={url:e.url||a()},C||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){s(a())})),addEventListener("click",d)),C=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){g.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;m&&(this.unlisten=m.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),g.splice(g.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},e}(v.Component),x=function(t){return Object(v.createElement)("a",r({onClick:_},t))},S=function(t){return Object(v.createElement)(t.component,t)};O.subscribers=b,O.getCurrentUrl=a,O.route=f,O.Router=O,O.Route=S,O.Link=x,O.exec=o,e.default=O},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,l={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?U.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===l[i]&&(l[i]=t.defaultProps[i]);return u(t,l,r,o,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++M:o};return null==o&&null!=T.vnode&&T.vnode(i),i}function l(){return{current:null}}function c(t){return t.children}function a(t,e){this.props=t,this.context=e}function f(t,e){if(null==e)return t.__?f(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?f(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function p(t){(!t.__d&&(t.__d=!0)&&D.push(t)&&!_.__r++||N!==T.debounceRendering)&&((N=T.debounceRendering)||setTimeout)(_)}function _(){for(var t;_.__r=D.length;)t=D.sort((function(t,e){return t.__v.__b-e.__v.__b})),D=[],t.some((function(t){var e,n,o,i,u,l;t.__d&&(u=(i=(e=t).__v).__e,(l=e.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,C(l,i,o,e.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?f(i):u,i.__h),O(n,i),i.__e!=u&&s(i)))}))}function h(t,e,n,r,o,i,l,a,s,p){var _,h,v,m,g,b,k,O=r&&r.__k||H,x=O.length;for(n.__k=[],_=0;_<e.length;_++)if(null!=(m=n.__k[_]=null==(m=e[_])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(c,{children:m},null,null,null):m.__b>0?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=O[_])||v&&m.key==v.key&&m.type===v.type)O[_]=void 0;else for(h=0;h<x;h++){if((v=O[h])&&m.key==v.key&&m.type===v.type){O[h]=void 0;break}v=null}C(t,m,v=v||I,o,i,l,a,s,p),g=m.__e,(h=m.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(h,m.__c||g,m)),null!=g?(null==b&&(b=g),"function"==typeof m.type&&m.__k===v.__k?m.__d=s=d(m,s,t):s=y(t,m,v,O,g,s),"function"==typeof n.type&&(n.__d=s)):s&&v.__e==s&&s.parentNode!=t&&(s=f(v))}for(n.__e=b,_=x;_--;)null!=O[_]&&("function"==typeof n.type&&null!=O[_].__e&&O[_].__e==n.__d&&(n.__d=f(r,_+1)),P(O[_],O[_]));if(k)for(_=0;_<k.length;_++)S(k[_],k[++_],k[++_])}function d(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e="function"==typeof r.type?d(r,e,n):y(n,r,r,o,r.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function y(t,e,n,r,o,i){var u,l,c;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),u=null;else{for(l=i,c=0;(l=l.nextSibling)&&c<r.length;c+=2)if(l==o)break t;t.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function m(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||F.test(e)?n:n+"px"}function g(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||m(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||m(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?k:b,i):t.removeEventListener(e,i?k:b,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function b(t){this.l[t.type+!1](T.event?T.event(t):t)}function k(t){this.l[t.type+!0](T.event?T.event(t):t)}function C(t,e,n,o,i,u,l,f,s){var p,_,d,v,y,m,g,b,k,C,O,S,P,w=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(s=n.__h,f=e.__e=n.__e,e.__h=null,u=[f]),(p=T.__b)&&p(e);try{t:if("function"==typeof w){if(b=e.props,k=(p=w.contextType)&&o[p.__c],C=p?k?k.props.value:p.__:o,n.__c?g=(_=e.__c=n.__c).__=_.__E:("prototype"in w&&w.prototype.render?e.__c=_=new w(b,C):(e.__c=_=new a(b,C),_.constructor=w,_.render=j),k&&k.sub(_),_.props=b,_.state||(_.state={}),_.context=C,_.__n=o,d=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=w.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=r({},_.__s)),r(_.__s,w.getDerivedStateFromProps(b,_.__s))),v=_.props,y=_.state,d)null==w.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==w.getDerivedStateFromProps&&b!==v&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(b,C),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(b,_.__s,C)||e.__v===n.__v){_.props=b,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),_.__h.length&&l.push(_);break t}null!=_.componentWillUpdate&&_.componentWillUpdate(b,_.__s,C),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(v,y,m)}))}if(_.context=C,_.props=b,_.__v=e,_.__P=t,O=T.__r,S=0,"prototype"in w&&w.prototype.render)_.state=_.__s,_.__d=!1,O&&O(e),p=_.render(_.props,_.state,_.context);else do{_.__d=!1,O&&O(e),p=_.render(_.props,_.state,_.context),_.state=_.__s}while(_.__d&&++S<25);_.state=_.__s,null!=_.getChildContext&&(o=r(r({},o),_.getChildContext())),d||null==_.getSnapshotBeforeUpdate||(m=_.getSnapshotBeforeUpdate(v,y)),P=null!=p&&p.type===c&&null==p.key?p.props.children:p,h(t,Array.isArray(P)?P:[P],e,n,o,i,u,l,f,s),_.base=e.__e,e.__h=null,_.__h.length&&l.push(_),g&&(_.__E=_.__=null),_.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=x(n.__e,e,n,o,i,u,l,s);(p=T.diffed)&&p(e)}catch(t){e.__v=null,(s||null!=u)&&(e.__e=f,e.__h=!!s,u[u.indexOf(f)]=null),T.__e(t,e,n)}}function O(t,e){T.__c&&T.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){T.__e(t,e.__v)}}))}function x(t,e,n,r,i,u,l,c){var a,s,p,_=n.props,d=e.props,v=e.type,y=0;if("svg"===v&&(i=!0),null!=u)for(;y<u.length;y++)if((a=u[y])&&"setAttribute"in a==!!v&&(v?a.localName===v:3===a.nodeType)){t=a,u[y]=null;break}if(null==t){if(null===v)return document.createTextNode(d);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),u=null,c=!1}if(null===v)_===d||c&&t.data===d||(t.data=d);else{if(u=u&&U.call(t.childNodes),s=(_=n.props||I).dangerouslySetInnerHTML,p=d.dangerouslySetInnerHTML,!c){if(null!=u)for(_={},y=0;y<t.attributes.length;y++)_[t.attributes[y].name]=t.attributes[y].value;(p||s)&&(p&&(s&&p.__html==s.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||g(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||g(t,i,e[i],n[i],r)}(t,d,_,i,c),p)e.__k=[];else if(y=e.props.children,h(t,Array.isArray(y)?y:[y],e,n,r,i&&"foreignObject"!==v,u,l,u?u[0]:n.__k&&f(n,0),c),null!=u)for(y=u.length;y--;)null!=u[y]&&o(u[y]);c||("value"in d&&void 0!==(y=d.value)&&(y!==t.value||"progress"===v&&!y||"option"===v&&y!==_.value)&&g(t,"value",y,_.value,!1),"checked"in d&&void 0!==(y=d.checked)&&y!==t.checked&&g(t,"checked",y,_.checked,!1))}return t}function S(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){T.__e(t,n)}}function P(t,e,n){var r,i;if(T.unmount&&T.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||S(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){T.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&P(r[i],e,"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__e=t.__d=void 0}function j(t,e,n){return this.constructor(t,n)}function w(t,e,n){var r,o,u;T.__&&T.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,u=[],C(e,t=(!r&&n||e).__k=i(c,null,[t]),o||I,I,void 0!==e.ownerSVGElement,!r&&n?[n]:o?null:e.firstChild?U.call(e.childNodes):null,u,!r&&n?n:o?o.__e:e.firstChild,r),O(u,t)}function A(t,e){w(t,e,A)}function E(t,e,n){var o,i,l,c=r({},t.props);for(l in e)"key"==l?o=e[l]:"ref"==l?i=e[l]:c[l]=e[l];return arguments.length>2&&(c.children=arguments.length>3?U.call(arguments,2):n),u(t.type,c,o||t.key,i||t.ref,null)}function L(t,e){var n={__c:e="__cC"+W++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(p)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"render",(function(){return w})),n.d(e,"hydrate",(function(){return A})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return c})),n.d(e,"createRef",(function(){return l})),n.d(e,"isValidElement",(function(){return R})),n.d(e,"Component",(function(){return a})),n.d(e,"cloneElement",(function(){return E})),n.d(e,"createContext",(function(){return L})),n.d(e,"toChildArray",(function(){return v})),n.d(e,"options",(function(){return T}));var U,T,M,R,D,N,W,I={},H=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;U=H.slice,T={__e:function(t,e,n,r){for(var o,i,u;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),u=o.__d),u)return o.__E=o}catch(e){t=e}throw t}},M=0,R=function(t){return null!=t&&void 0===t.constructor},a.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),p(this))},a.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),p(this))},a.prototype.render=c,D=[],_.__r=0,W=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=r.h,i=r.render,u=function(t){return t&&t.default?t.default:t},l=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(l(n.p)+"sw.js"),"function"==typeof u(n("QfWi"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=u(n("QfWi")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var a={preRenderData:e};e.url&&l(e.url);i(o(t,{CLI_DATA:a}),document.body,c)}()}},"ox/y":function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==r(e)&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=n("hosL"),l=n("Y3FI"),c=e.Match=function(t){function e(){for(var e,n,r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return e=n=o(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},o(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+r(e));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){l.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){l.subscribers.splice(l.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,l.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,l.exec)(n,t.path,{})})},e}(u.Component),a=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,u.h)(c,{path:n||r.href},(function(t){return(0,u.h)(l.Link,i({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=a,e.default=c,c.Link=a}});
//# sourceMappingURL=bundle.9aa34.js.map