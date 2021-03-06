/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Page = __webpack_require__(1);

	new Page({}).$inject('#app');

	var Page2 = __webpack_require__(11);
	new Page2({}).$inject("#app");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Regular = __webpack_require__(2);
	var tpl = __webpack_require__(3);
	var PageAction = __webpack_require__(4);
	var PageStore = __webpack_require__(10);
	var Page1 = Regular.extend({
	    template: tpl,
	    data: {
	        items:['abc']
	    },
	    init: function(){
	        PageStore.addListener(this._updateView.bind(this));
	    },
	    addItem: function(){
	        // 触发action发送事件
	        PageAction.addItem();
	    },
	    _updateView: function(){
	        // debugger
	        var _tmp = PageStore.getAll();
	        this.data.items = _tmp;
	        this.$update();
	    }
	});

	module.exports = Page1;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Regular=e():t.Regular=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var r=n(1),i=n(7),o=t.exports=n(8),a=o.Parser,s=o.Lexer;r.browser&&(n(24),n(27),n(28),o.dom=n(13)),o.env=r,o.util=n(2),o.parse=function(t,e){e=e||{},(e.BEGIN||e.END)&&(e.BEGIN&&(i.BEGIN=e.BEGIN),e.END&&(i.END=e.END),s.setup());var n=new a(t).parse();return e.stringify?JSON.stringify(n):n}},function(t,e,n){var r=n(2);e.svg=function(){return"undefined"!=typeof document&&document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}(),e.browser="undefined"!=typeof document&&document.nodeType,e.exprCache=r.cache(1e3),e.isRunning=!1},function(t,e,n){(function(e,r){function i(t,e){"undefined"!=typeof console&&console[e||"log"](t)}n(5)();var o=t.exports,a=n(6),s=([].slice,{}.toString),u="undefined"!=typeof window?window:e,c=9999;o.noop=function(){},o.uid=function(){var t=0;return function(){return t++}}(),o.extend=function(t,e,n){for(var r in e)e.hasOwnProperty(r)&&(void 0===t[r]||n===!0)&&(t[r]=e[r]);return t},o.keys=Object.keys?Object.keys:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e},o.some=function(t,e){for(var n=0,r=t.length;r>n;n++)if(e(t[n]))return!0},o.varName="d",o.setName="p_",o.ctxName="c",o.extName="e",o.rWord=/^[\$\w]+$/,o.rSimpleAccessor=/^[\$\w]+(\.[\$\w]+)*$/,o.nextTick="function"==typeof r?r.bind(u):function(t){setTimeout(t,0)},o.prefix="'use strict';var "+o.varName+"="+o.ctxName+".data;"+o.extName+"="+o.extName+"||'';",o.slice=function(t,e,n){for(var r=[],i=e||0,o=n||t.length;o>i;i++)r.push(t[i]);return r},o.typeOf=function(t){return null==t?String(t):s.call(t).slice(8,-1).toLowerCase()},o.makePredicate=function(t,e){function n(t){if(1===t.length)return r+="return str === '"+t[0]+"';";r+="switch(str){";for(var e=0;e<t.length;++e)r+="case '"+t[e]+"':";r+="return true}return false;"}"string"==typeof t&&(t=t.split(" "));var r="",i=[];t:for(var o=0;o<t.length;++o){for(var a=0;a<i.length;++a)if(i[a][0].length===t[o].length){i[a].push(t[o]);continue t}i.push([t[o]])}if(i.length>3){i.sort(function(t,e){return e.length-t.length}),r+="switch(str.length){";for(var o=0;o<i.length;++o){var s=i[o];r+="case "+s[0].length+":",n(s)}r+="}"}else n(t);return new Function("str",r)},o.trackErrorPos=function(){function t(t,e){for(var n=0,r=0,i=t.length;i>r;r++){var o=(t[r]||"").length;if(n+o>e)return{num:r,line:t[r],start:e-r-n,prev:t[r-1],next:t[r+1]};n+=o}}function e(t,e,n,o){var a=t.length,s=e-r;0>s&&(s=0);var u=e+i;u>a&&(u=a);var c=t.slice(s,u),f="["+(n+1)+"] "+(s>0?"..":""),l=a>u?"..":"",h=f+c+l;return o&&(h+="\n"+new Array(e-s+f.length+1).join(" ")+"^^^"),h}var n=/\r\n|[\n\r\u2028\u2029]/g,r=20,i=20;return function(r,i){i>r.length-1&&(i=r.length-1),n.lastIndex=0;var o=r.split(n),a=t(o,i),s=a.start,u=a.num;return(a.prev?e(a.prev,s,u-1)+"\n":"")+e(a.line,s,u,!0)+"\n"+(a.next?e(a.next,s,u+1)+"\n":"")}}();var f=/\((\?\!|\?\:|\?\=)/g;o.findSubCapture=function(t){var e=0,n=0,r=t.length,i=t.match(f);for(i=i?i.length:0;r--;){var o=t.charAt(r);(0===r||"\\"!==t.charAt(r-1))&&("("===o&&e++,")"===o&&n++)}if(e!==n)throw"RegExp: "+t+"'s bracket is not marched";return e-i},o.escapeRegExp=function(t){return t.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,function(t){return"\\"+t})};var l=new RegExp("&(?:(#x[0-9a-fA-F]+)|(#[0-9]+)|("+o.keys(a).join("|")+"));","gi");o.convertEntity=function(t){return(""+t).replace(l,function(t,e,n,r){var i;return i=n?parseInt(n.slice(1),10):e?parseInt(e.slice(2),16):a[r],String.fromCharCode(i)})},o.createObject=Object.create?function(t){return Object.create(t||null)}:function(){function t(){}return function(e){if(!e)return{};t.prototype=e;var n=new t;return t.prototype=null,n}}(),o.createProto=function(t,e){function n(){this.constructor=t}return n.prototype=e,t.prototype=new n},o.removeOne=function(t,e){for(var n=t.length;n--;)if(e(t[n]))return void t.splice(n,1)},o.clone=function(t){if(!t||"object"!=typeof t)return t;if(Array.isArray(t)){for(var e=[],n=0,r=t.length;r>n;n++)e[n]=t[n];return e}var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},o.equals=function(t,e){var n=typeof t;return"number"===n&&"number"==typeof e&&isNaN(t)&&isNaN(e)?!0:t===e};var h=/-([a-z])/g;o.camelCase=function(t){return t.replace(h,function(t,e){return e.toUpperCase()})},o.throttle=function(t,e){var n,r,i,e=e||100,o=null,a=0,s=function(){a=+new Date,o=null,i=t.apply(n,r),n=r=null};return function(){var u=+new Date,c=e-(u-a);return n=this,r=arguments,0>=c||c>e?(clearTimeout(o),o=null,a=u,i=t.apply(n,r),n=r=null):o||(o=setTimeout(s,c)),i}},o.escape=function(){var t=/&/g,e=/</g,n=/>/g,r=/\'/g,i=/\"/g,o=/[&<>\"\']/;return function(a){return o.test(a)?a.replace(t,"&amp;").replace(e,"&lt;").replace(n,"&gt;").replace(r,"&#39;").replace(i,"&quot;"):a}}(),o.cache=function(t){t=t||1e3;var e=[],n={};return{set:function(t,r){return e.length>this.max&&(n[e.shift()]=void 0),void 0===n[t]&&e.push(t),n[t]=r,r},get:function(t){return void 0===t?n:n[t]},max:t,len:function(){return e.length}}},o.handleEvent=function(t,e){var n,r=this;return"expression"===t.type&&(n=t.get),n?function(t){r.$update(function(){var e=this.data;e.$event=t;var i=n(r);i===!1&&t&&t.preventDefault&&t.preventDefault(),e.$event=void 0})}:function(){var e=o.slice(arguments);e.unshift(t),r.$update(function(){r.$emit.apply(r,e)})}},o.once=function(t){var e=0;return function(){0===e++&&t.apply(this,arguments)}},o.fixObjStr=function(t){return 0!==t.trim().indexOf("{")?"{"+t+"}":t},o.map=function(t,e){for(var n=[],r=0,i=t.length;i>r;r++)n.push(e(t[r],r));return n},o.log=i,o.normListener=function(t){var e=[],n=o.typeOf(t);if("array"===n)return t;if("object"===n)for(var r in t)t.hasOwnProperty(r)&&e.push({type:r,listener:t[r]});return e},o.isVoidTag=o.makePredicate("area base br col embed hr img input keygen link menuitem meta param source track wbr r-content"),o.isBooleanAttr=o.makePredicate("selected checked disabled readonly required open autofocus controls autoplay compact loop defer multiple"),o.isExpr=function(t){return t&&"expression"===t.type},o.isGroup=function(t){return t.inject||t.$inject},o.getCompileFn=function(t,e,n){return e.$compile.bind(e,t,n)},o.fixTagAST=function(t,e){if(!t.touched){var n=t.attrs;if(n){var r=n.length;if(r){for(var i=[],a={};r--;){var s=n[r];"type"===s.name&&(s.priority=c+1);var u=e.directive(s.name);u?(s.priority=u.priority||1,s.directive=!0,i.push(s)):"attribute"===s.type&&(a[s.name]=s.value)}i.forEach(function(t){var r=e.directive(t.name),i=r.param;i&&i.length&&(t.param={},i.forEach(function(e){e in a&&(t.param[e]=void 0===a[e]?!0:a[e],o.removeOne(n,function(t){return t.name===e}))}))}),n.sort(function(t,e){var n=t.priority,r=e.priority;return null==n&&(n=c),null==r&&(r=c),r-n}),t.touched=!0}}}},o.findItem=function(t,e){if(t&&t.length)for(var n=t.length;n--;)if(e(t[n]))return t[n]},o.getParamObj=function(t,e){var n={};if(e)for(var r in e)if(e.hasOwnProperty(r)){var i=e[r];n[r]=i&&"expression"===i.type?t.$get(i):i}return n}}).call(e,function(){return this}(),n(3).setImmediate)},function(t,e,n){(function(t,r){function i(t,e){this._id=t,this._clearFn=e}var o=n(4).nextTick,a=Function.prototype.apply,s=Array.prototype.slice,u={},c=0;e.setTimeout=function(){return new i(a.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new i(a.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},e.setImmediate="function"==typeof t?t:function(t){var n=c++,r=arguments.length<2?!1:s.call(arguments,1);return u[n]=!0,o(function(){u[n]&&(r?t.apply(null,r):t.call(null),e.clearImmediate(n))}),n},e.clearImmediate="function"==typeof r?r:function(t){delete u[t]}}).call(e,n(3).setImmediate,n(3).clearImmediate)},function(t,e){function n(t){if(u===setTimeout)return setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function r(t){if(c===clearTimeout)return clearTimeout(t);try{return c(t)}catch(e){try{return c.call(null,t)}catch(e){return c.call(this,t)}}}function i(){p&&l&&(p=!1,l.length?h=l.concat(h):d=-1,h.length&&o())}function o(){if(!p){var t=n(i);p=!0;for(var e=h.length;e;){for(l=h,h=[];++d<e;)l&&l[d].run();d=-1,e=h.length}l=null,p=!1,r(t)}}function a(t,e){this.fun=t,this.array=e}function s(){}var u,c,f=t.exports={};!function(){try{u=setTimeout}catch(t){u=function(){throw new Error("setTimeout is not defined")}}try{c=clearTimeout}catch(t){c=function(){throw new Error("clearTimeout is not defined")}}}();var l,h=[],p=!1,d=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];h.push(new a(t,e)),1!==h.length||p||n(o)},a.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=s,f.addListener=s,f.once=s,f.off=s,f.removeListener=s,f.removeAllListeners=s,f.emit=s,f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e){function n(t,e){for(var n in e)void 0===t[n]&&(t[n]=e[n]);return e}var r=[].slice,i={}.toString;t.exports=function(){n(String.prototype,{trim:function(){return this.replace(/^\s+|\s+$/g,"")}}),n(Array.prototype,{indexOf:function(t,e){e=e||0;for(var n=e,r=this.length;r>n;n++)if(this[n]===t)return n;return-1},forEach:function(t,e){var n=0,r=Object(this),i=r.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(;i>n;){var o;n in r&&(o=r[n],t.call(e,o,n,r)),n++}},filter:function(t,e){var n=Object(this),r=n.length>>>0;if("function"!=typeof t)throw new TypeError;for(var i=[],o=0;r>o;o++)if(o in n){var a=n[o];t.call(e,a,o,n)&&i.push(a)}return i}}),n(Function.prototype,{bind:function(t){var e=this,n=r.call(arguments,1);return function(){var i=n.concat(r.call(arguments));return e.apply(t,i)}}}),n(Array,{isArray:function(t){return"[object Array]"===i.call(t)}})}},function(t,e){var n={quot:34,amp:38,apos:39,lt:60,gt:62,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,copy:169,ordf:170,laquo:171,not:172,shy:173,reg:174,macr:175,deg:176,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,fnof:402,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,bull:8226,hellip:8230,prime:8242,Prime:8243,oline:8254,frasl:8260,weierp:8472,image:8465,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,"int":8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,circ:710,tilde:732,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,permil:8240,lsaquo:8249,rsaquo:8250,euro:8364};t.exports=n},function(t,e){t.exports={BEGIN:"{",END:"}",PRECOMPILE:!1}},function(t,e,n){var r=n(1),i=n(9),o=n(10),a=n(7),s=n(2),u=n(12),c={};if(r.browser){var f=n(13),l=n(15),h=n(19),p=f.doc;c=n(17)}var d=n(20),v=n(21),m=n(22),g=n(23),y=function(t,e){var n=r.isRunning;r.isRunning=!0;var i,a;t=t||{};var u="string"==typeof this.template&&!t.template;e=e||{},t.data=t.data||{},t.computed=t.computed||{},this.data&&s.extend(t.data,this.data),this.computed&&s.extend(t.computed,this.computed);var l,h=this._eventListeners||[];t.events&&(l=s.normListener(t.events),l.length&&(h=h.concat(l)),delete t.events),s.extend(this,t,!0),this.$parent&&this.$parent._append(this),this._children=[],this.$refs={},a=this.template,"string"==typeof a&&a.length<16&&(i=f.find(a))&&(a=i.innerHTML),a&&a.nodeType&&(a=a.innerHTML),"string"==typeof a&&(a=new o(a).parse(),u?this.constructor.prototype.template=a:delete this.template),this.computed=x(this.computed),this.$root=this.$root||this,h&&h.length&&h.forEach(function(t){this.$on(t.type,t.listener)}.bind(this)),this.$emit("$config"),this.config&&this.config(this.data),this.$emit("$afterConfig");var p=this._body;this._body=null,p&&p.ast&&p.ast.length&&(this.$body=s.getCompileFn(p.ast,p.ctx,{outer:this,namespace:e.namespace,extra:e.extra,record:!0})),a&&(this.group=this.$compile(a,{namespace:e.namespace}),c.node(this)),this.$parent||this.$update(),this.$ready=!0,this.$emit("$init"),this.init&&this.init(this.data),this.$emit("$afterInit"),r.isRunning=n,this.devtools&&this.devtools.emit("init",this)},E=window.__REGULAR_DEVTOOLS_GLOBAL_HOOK__;E&&(y.prototype.devtools=E),l&&(l.Regular=y),s.extend(y,{_directives:{__regexp__:[]},_plugins:{},_protoInheritCache:["directive","use"],__after__:function(t,e){var n;if(this.__after__=t.__after__,e.name&&y.component(e.name,this),n=e.template){var r,i;"string"==typeof n&&n.length<16&&(r=f.find(n))&&(n=r),n&&n.nodeType&&((i=f.attr(n,"name"))&&y.component(i,this),n=n.innerHTML),"string"==typeof n&&(this.prototype.template=a.PRECOMPILE?new o(n).parse():n)}e.computed&&(this.prototype.computed=x(e.computed)),y._inheritConfig(this,t)},directive:function(t,e){if(t){var n=typeof t;if("object"===n&&!e){for(var r in t)t.hasOwnProperty(r)&&this.directive(r,t[r]);return this}var i,o=this._directives;if(null!=e)return"function"==typeof e&&(e={link:e}),"string"===n?o[t]=e:(e.regexp=t,o.__regexp__.push(e)),this;if("string"===n){if(i=o[t])return i;for(var a=o.__regexp__,s=0,u=a.length;u>s;s++){i=a[s];var c=i.regexp.test(t);if(c)return i}}}},plugin:function(t,e){var n=this._plugins;return null==e?n[t]:(n[t]=e,this)},use:function(t){return"string"==typeof t&&(t=y.plugin(t)),"function"!=typeof t?this:(t(this,y),this)},config:function(t,e){var n=!1;if("object"==typeof t)for(var r in t)("END"===r||"BEGIN"===r)&&(n=!0),a[r]=t[r];n&&i.setup()},expression:m.expression,Parser:o,Lexer:i,_addProtoInheritCache:function(t,e){if(Array.isArray(t))return t.forEach(y._addProtoInheritCache);var n="_"+t+"s";y._protoInheritCache.push(t),y[n]={},y[t]||(y[t]=function(r,i){var o=this[n];if("object"==typeof r){for(var a in r)r.hasOwnProperty(a)&&this[t](a,r[a]);return this}return null==i?o[r]:(o[r]=e?e(i):i,this)})},_inheritConfig:function(t,e){var n=y._protoInheritCache,r=s.slice(n);return r.forEach(function(n){t[n]=e[n];var r="_"+n+"s";e[r]&&(t[r]=s.createObject(e[r]))}),t}}),u(y),y._addProtoInheritCache("component"),y._addProtoInheritCache("filter",function(t){return"function"==typeof t?{get:t}:t}),d.mixTo(y),v.mixTo(y),y.implement({init:function(){},config:function(){},destroy:function(){this.$emit("$destroy"),this._watchers=null,this.group&&this.group.destroy(!0),this.group=null,this.parentNode=null,this._children=null,this.$root=null,this._handles=null,this.$refs=null;var t=this.$parent;if(t&&t._children){var e=t._children.indexOf(this);t._children.splice(e,1)}this.$parent=null,this.devtools&&this.devtools.emit("destroy",this)},$compile:function(t,e){e=e||{},"string"==typeof t&&(t=new o(t).parse());var n,r=this.__ext__,i=e.record;e.extra&&(this.__ext__=e.extra),i&&this._record();var a=this._walk(t,e);if(i){n=this._release();var s=this;n.length&&(a.ondestroy=function(){s.$unwatch(n)})}return e.extra&&(this.__ext__=r),a},$bind:function(t,e,n){var r=s.typeOf(e);if("expression"===e.type||"string"===r)this._bind(t,e,n);else if("array"===r)for(var i=0,o=e.length;o>i;i++)this._bind(t,e[i]);else if("object"===r)for(var i in e)e.hasOwnProperty(i)&&this._bind(t,i,e[i]);return t.$update(),this},$unbind:function(){},$inject:c.inject,$mute:function(t){t=!!t;var e=t===!1&&this._mute;return this._mute=!!t,e&&this.$update(),this},_bind:function(t,e,n){var r=this;if(!(t&&t instanceof y))throw"$bind() should pass Regular component as first argument";if(!e)throw"$bind() should  pass as least one expression to bind";if(n||(n=e),e=m.expression(e),n=m.expression(n),n.set){var i=this.$watch(e,function(e){t.$update(n,e)});t.$on("$destroy",function(){r.$unwatch(i)})}if(e.set){var o=t.$watch(n,function(t){r.$update(e,t)});this.$on("$destroy",t.$unwatch.bind(t,o))}n.set(t,e.get(this))},_walk:function(t,e){if(Array.isArray(t)){var n=t.length;if(!n)return;for(var r=[],i=0;n>i;i++){var o=this._walk(t[i],e);o&&r.push(o)}return new h(r)}return"string"==typeof t?p.createTextNode(t):l[t.type||"default"].call(this,t,e)},_append:function(t){this._children.push(t),t.$parent=this},_handleEvent:function(t,e,n,r){var i,o=this.constructor,a="function"!=typeof n?s.handleEvent.call(this,n,e):n,u=o.event(e);return u?i=u.call(this,t,a,r):f.on(t,e,a),u?i:function(){f.off(t,e,a)}},_touchExpr:function(t){var e,n=this.__ext__,r={};if("expression"!==t.type||t.touched)return t;if(e=t.get,e||(e=t.get=new Function(s.ctxName,s.extName,s.prefix+"return ("+t.body+")"),t.body=null),r.get=n?function(t){return e(t,n)}:e,t.setbody&&!t.set){var i=t.setbody,o=t.filters,a=this;o&&s.some(o,function(t){return!a._f_(t).set})||(t.set=function(e,n,r){return t.set=new Function(s.ctxName,s.setName,s.extName,s.prefix+i),t.set(e,n,r)}),t.filters=t.setbody=null}return t.set&&(r.set=n?function(e,r){return t.set(e,r,n)}:t.set),r.type="expression",r.touched=!0,r.once=t.once||t.constant,r},_f_:function(t){var e=this.constructor,n=e.filter(t);if(!n)throw Error("filter "+t+" is undefined");return n},_sg_:function(t,e,n){if("undefined"!=typeof n){var r=this.computed,i=r[t];if(i){if("expression"!==i.type||i.get||this._touchExpr(i),i.get)return i.get(this);s.log("the computed '"+t+"' don't define the get function,  get data."+t+" altnately","warn")}}return"undefined"==typeof e||"undefined"==typeof t?void 0:n&&"undefined"!=typeof n[t]?n[t]:e[t]},_ss_:function(t,e,n,r,i){var o,i=this.computed,r=r||"=",a=i?i[t]:null;if("="!==r)switch(o=a?a.get(this):n[t],r){case"+=":e=o+e;break;case"-=":e=o-e;break;case"*=":e=o*e;break;case"/=":e=o/e;break;case"%=":e=o%e}if(a){if(a.set)return a.set(this,e);s.log("the computed '"+t+"' don't define the set function,  assign data."+t+" altnately","warn")}return n[t]=e,e}}),y.prototype.inject=function(){return s.log("use $inject instead of inject","error"),this.$inject.apply(this,arguments)},y.filter(g),t.exports=y;var x=function(){function t(t){return function(e){return t.call(e,e.data)}}function e(t){return function(e,n){return t.call(e,n,e.data),n}}return function(n){if(n){var r,i,o,a={};for(var s in n)r=n[s],o=typeof r,"expression"!==r.type?"string"===o?a[s]=m.expression(r):(i=a[s]={type:"expression"},"function"===o?i.get=t(r):(r.get&&(i.get=t(r.get)),r.set&&(i.set=e(r.set)))):a[s]=r;return a}}}()},function(t,e,n){function r(t){return function(e){return{type:t,value:e}}}function i(t,e){l[f.END]&&(this.markStart=l[f.END],this.markEnd=f.END),this.input=(t||"").trim(),this.opts=e||{},this.map=2!==this.opts.mode?s:u,this.states=["INIT"],e&&e.expression&&(this.states.push("JST"),this.expression=!0)}function o(t){for(var e,n,r={},i=0,o=t.length;o>i;i++)e=t[i],n=e[2]||"INIT",(r[n]||(r[n]={rules:[],links:[]})).rules.push(e);return a(r)}function a(t){function e(t,e){return"string"==typeof h[e]?c.escapeRegExp(h[e]):String(h[e]).slice(1,-1)}var n,i,o,a,s,u,f;for(var l in t){n=t[l],n.curIndex=1,i=n.rules,o=[];for(var p=0,d=i.length;d>p;p++)f=i[p],s=f[0],a=f[1],"string"==typeof a&&(a=r(a)),"regexp"===c.typeOf(s)&&(s=s.toString().slice(1,-1)),s=s.replace(/\{(\w+)\}/g,e),u=c.findSubCapture(s)+1,n.links.push([n.curIndex,u,a]),n.curIndex+=u,o.push(s);n.TRUNK=new RegExp("^(?:("+o.join(")|(")+"))")}return t}var s,u,c=n(2),f=n(7),l={"}":"{","]":"["},h={NAME:/(?:[:_A-Za-z][-\.:_0-9A-Za-z]*)/,IDENT:/[\$_A-Za-z][_0-9A-Za-z\$]*/,SPACE:/[\r\n\t\f ]/},p=/a|(b)/.exec("a"),d=p&&void 0===p[1]?function(t){return void 0!==t}:function(t){return!!t},v=i.prototype;v.lex=function(t){t=(t||this.input).trim();var e,n,r,i,o,a=[];this.input=t,this.marks=0,this.index=0;for(var s=0;t;)s++,o=this.state(),e=this.map[o],n=e.TRUNK.exec(t),n||this.error("Unrecoginized Token"),r=n[0].length,t=t.slice(r),i=this._process.call(this,n,e,t),i&&a.push(i),this.index+=r;return a.push({type:"EOF"}),a},v.error=function(t){throw Error("Parse Error: "+t+":\n"+c.trackErrorPos(this.input,this.index))},v._process=function(t,e,n){for(var r,i=e.links,o=!1,a=i.length,s=0;a>s;s++){var u=i[s],c=u[2],f=u[0];if(d(t[f])){o=!0,c&&(r=c.apply(this,t.slice(f,f+u[1])),r&&(r.pos=this.index));break}}if(!o)switch(n.charAt(0)){case"<":this.enter("TAG");break;default:this.enter("JST")}return r},v.enter=function(t){return this.states.push(t),this},v.state=function(){var t=this.states;return t[t.length-1]},v.leave=function(t){var e=this.states;t&&e[e.length-1]!==t||e.pop()},i.setup=function(){h.END=f.END,h.BEGIN=f.BEGIN,s=o([m.ENTER_JST,m.ENTER_TAG,m.TEXT,m.TAG_NAME,m.TAG_OPEN,m.TAG_CLOSE,m.TAG_PUNCHOR,m.TAG_ENTER_JST,m.TAG_UNQ_VALUE,m.TAG_STRING,m.TAG_SPACE,m.TAG_COMMENT,m.JST_OPEN,m.JST_CLOSE,m.JST_COMMENT,m.JST_EXPR_OPEN,m.JST_IDENT,m.JST_SPACE,m.JST_LEAVE,m.JST_NUMBER,m.JST_PUNCHOR,m.JST_STRING,m.JST_COMMENT]),u=o([m.ENTER_JST2,m.TEXT,m.JST_COMMENT,m.JST_OPEN,m.JST_CLOSE,m.JST_EXPR_OPEN,m.JST_IDENT,m.JST_SPACE,m.JST_LEAVE,m.JST_NUMBER,m.JST_PUNCHOR,m.JST_STRING,m.JST_COMMENT])};var m={ENTER_JST:[/[^\x00<]*?(?={BEGIN})/,function(t){return this.enter("JST"),t?{type:"TEXT",value:t}:void 0}],ENTER_JST2:[/[^\x00]*?(?={BEGIN})/,function(t){return this.enter("JST"),t?{type:"TEXT",value:t}:void 0}],ENTER_TAG:[/[^\x00]*?(?=<[\w\/\!])/,function(t){return this.enter("TAG"),t?{type:"TEXT",value:t}:void 0}],TEXT:[/[^\x00]+/,"TEXT"],TAG_NAME:[/{NAME}/,"NAME","TAG"],TAG_UNQ_VALUE:[/[^\{}&"'=><`\r\n\f\t ]+/,"UNQ","TAG"],TAG_OPEN:[/<({NAME})\s*/,function(t,e){return{type:"TAG_OPEN",value:e}},"TAG"],TAG_CLOSE:[/<\/({NAME})[\r\n\f\t ]*>/,function(t,e){return this.leave(),{type:"TAG_CLOSE",value:e}},"TAG"],TAG_ENTER_JST:[/(?={BEGIN})/,function(){this.enter("JST")},"TAG"],TAG_PUNCHOR:[/[\>\/=&]/,function(t){return">"===t&&this.leave(),{type:t,value:t}},"TAG"],TAG_STRING:[/'([^']*)'|"([^"]*)\"/,function(t,e,n){var r=e||n||"";return{type:"STRING",value:r}},"TAG"],TAG_SPACE:[/{SPACE}+/,null,"TAG"],TAG_COMMENT:[/<\!--([^\x00]*?)--\>/,function(t){this.leave()},"TAG"],JST_OPEN:["{BEGIN}#{SPACE}*({IDENT})",function(t,e){return{type:"OPEN",value:e}},"JST"],JST_LEAVE:[/{END}/,function(t){return this.markEnd===t&&this.expression?{type:this.markEnd,value:this.markEnd}:this.markEnd&&this.marks?(this.marks--,{type:this.markEnd,value:this.markEnd}):(this.firstEnterStart=!1,this.leave("JST"),{type:"END"})},"JST"],JST_CLOSE:[/{BEGIN}\s*\/({IDENT})\s*{END}/,function(t,e){return this.leave("JST"),{type:"CLOSE",value:e}},"JST"],JST_COMMENT:[/{BEGIN}\!([^\x00]*?)\!{END}/,function(){this.leave()},"JST"],JST_EXPR_OPEN:["{BEGIN}",function(t,e){if(t===this.markStart){if(this.expression)return{type:this.markStart,value:this.markStart};if(this.firstEnterStart||this.marks)return this.marks++,this.firstEnterStart=!1,{type:this.markStart,value:this.markStart};this.firstEnterStart=!0}return{type:"EXPR_OPEN",escape:!1}},"JST"],JST_IDENT:["{IDENT}","IDENT","JST"],JST_SPACE:[/[ \r\n\f]+/,null,"JST"],JST_PUNCHOR:[/[=!]?==|[-=><+*\/%\!]?\=|\|\||&&|\@\(|\.\.|[<\>\[\]\(\)\-\|\{}\+\*\/%?:\.!,]/,function(t){return{type:t,value:t}},"JST"],JST_STRING:[/'([^']*)'|"([^"]*)"/,function(t,e,n){return{type:"STRING",value:e||n||""}},"JST"],JST_NUMBER:[/(?:[0-9]*\.[0-9]+|[0-9]+)(e\d+)?/,function(t){return{type:"NUMBER",value:parseFloat(t,10)}},"JST"]};i.setup(),t.exports=i},function(t,e,n){function r(t,e){e=e||{},this.input=t,this.tokens=new u(t,e).lex(),this.pos=0,this.length=this.tokens.length}function i(t,e){return{get:t,set:e}}var o=n(2),a=n(7),s=n(11),u=n(9),c=o.varName,f=o.ctxName,l=o.extName,h=o.makePredicate("STRING IDENT NUMBER"),p=o.makePredicate("true false undefined null this Array Date JSON Math NaN RegExp decodeURI decodeURIComponent encodeURI encodeURIComponent parseFloat parseInt Object"),d=r.prototype;d.parse=function(){this.pos=0;var t=this.program();return"TAG_CLOSE"===this.ll().type&&this.error("You may got a unclosed Tag"),t},d.ll=function(t){t=t||1,0>t&&(t+=1);var e=this.pos+t-1;return e>this.length-1?this.tokens[this.length-1]:this.tokens[e]},d.la=function(t){return(this.ll(t)||"").type},d.match=function(t,e){var n;return(n=this.eat(t,e))?n:(n=this.ll(),void this.error("expect ["+t+(null==e?"":":"+e)+']" -> got "['+n.type+(null==e?"":":"+n.value)+"]",n.pos))},d.error=function(t,e){throw t="\n【 parse failed 】 "+t+":\n\n"+o.trackErrorPos(this.input,"number"==typeof e?e:this.ll().pos||0),new Error(t)},d.next=function(t){t=t||1,this.pos+=t},d.eat=function(t,e){var n=this.ll();if("string"!=typeof t){for(var r=t.length;r--;)if(n.type===t[r])return this.next(),n}else if(n.type===t&&("undefined"==typeof e||n.value===e))return this.next(),n;return!1},d.program=function(){for(var t=[],e=this.ll();"EOF"!==e.type&&"TAG_CLOSE"!==e.type;)t.push(this.statement()),e=this.ll();return t},d.statement=function(){var t=this.ll();switch(t.type){case"NAME":case"TEXT":var e=t.value;for(this.next();t=this.eat(["NAME","TEXT"]);)e+=t.value;return s.text(e);case"TAG_OPEN":return this.xml();case"OPEN":return this.directive();case"EXPR_OPEN":return this.interplation();default:this.error("Unexpected token: "+this.la())}},d.xml=function(){var t,e,n,r;return t=this.match("TAG_OPEN").value,e=this.attrs(),r=this.eat("/"),this.match(">"),r||o.isVoidTag(t)||(n=this.program(),this.eat("TAG_CLOSE",t)||this.error("expect </"+t+"> gotno matched closeTag")),s.element(t,e,n)},d.xentity=function(t){var e,n,r=t.value;if("NAME"===t.type){if(~r.indexOf(".")){var i=r.split(".");r=i[0],n=i[1]}return this.eat("=")&&(e=this.attvalue(n)),s.attribute(r,e,n)}return"if"!==r&&this.error("current version. ONLY RULE #if #else #elseif is valid in tag, the rule #"+r+" is invalid"),this["if"](!0)},d.attrs=function(t){var e;e=t?["NAME"]:["NAME","OPEN"];for(var n,r=[];n=this.eat(e);)r.push(this.xentity(n));return r},d.attvalue=function(t){var e=this.ll();switch(e.type){case"NAME":case"UNQ":case"STRING":this.next();var n=e.value;if(~n.indexOf(a.BEGIN)&&~n.indexOf(a.END)&&"cmpl"!==t){var i=!0,o=new r(n,{mode:2}).parse();if(1===o.length&&"expression"===o[0].type)return o[0];var u=[];o.forEach(function(t){t.constant||(i=!1),u.push(t.body||"'"+t.text.replace(/'/g,"\\'")+"'")}),u="["+u.join(",")+"].join('')",n=s.expression(u,null,i)}return n;case"EXPR_OPEN":return this.interplation();default:this.error("Unexpected token: "+this.la())}},d.directive=function(){var t=this.ll().value;return this.next(),"function"==typeof this[t]?this[t]():void this.error("Undefined directive["+t+"]")},d.interplation=function(){this.match("EXPR_OPEN");var t=this.expression(!0);return this.match("END"),t},d.inc=d.include=function(){var t=this.expression();return this.match("END"),s.template(t)},d["if"]=function(t){var e=this.expression(),n=[],r=[],i=n,o=t?"attrs":"statement";this.match("END");for(var a,u;!(u=this.eat("CLOSE"));)if(a=this.ll(),"OPEN"===a.type)switch(a.value){case"else":i=r,this.next(),this.match("END");break;case"elseif":return this.next(),r.push(this["if"](t)),s["if"](e,n,r);default:i.push(this[o](!0))}else i.push(this[o](!0));return"if"!==u.value&&this.error("Unmatched if directive"),s["if"](e,n,r)},d.list=function(){var t,e,n,r=this.expression(),i=[],o=[],a=i;for(this.match("IDENT","as"),t=this.match("IDENT").value,this.eat("IDENT","by")&&(this.eat("IDENT",t+"_index")?n=!0:(n=this.expression(),n.constant&&(n=!0))),this.match("END");!(e=this.eat("CLOSE"));)this.eat("OPEN","else")?(a=o,this.match("END")):a.push(this.statement());return"list"!==e.value&&this.error("expect list got /"+e.value+" ",e.pos),s.list(r,t,i,o,n)},d.expression=function(){var t;return this.eat("@(")?(t=this.expr(),t.once=!0,this.match(")")):t=this.expr(),t},d.expr=function(){this.depend=[];var t=this.filter(),e=t.get||t,n=t.set;return s.expression(e,n,!this.depend.length,t.filters)},d.filter=function(){var t,e,n,r,a=this.assign(),s=this.eat("|"),u=[],c="t",l=a.set,h="";if(s){l&&(e=[],t=[]),n="(function("+c+"){";do{var p=this.match("IDENT").value;h=c+" = "+f+"._f_('"+p+"' ).get.call( "+o.ctxName+","+c,h+=this.eat(":")?", "+this.arguments("|").join(",")+");":");",u.push(h),l&&(t.push(p),e.unshift(h.replace(" ).get.call"," ).set.call")))}while(s=this.eat("|"));u.push("return "+c),e&&e.push("return "+c),r=n+u.join("")+"})("+a.get+")",e&&(l=l.replace(o.setName,n+e.join("")+"})("+o.setName+")"));var d=i(r,l);return d.filters=t,d}return a},d.assign=function(){var t,e=this.condition();return(t=this.eat(["=","+=","-=","*=","/=","%="]))?(e.set||this.error("invalid lefthand expression in assignment expression"),i(e.set.replace(","+o.setName,","+this.condition().get).replace("'='","'"+t.type+"'"),e.set)):e},d.condition=function(){var t=this.or();return this.eat("?")?i([t.get+"?",this.assign().get,this.match(":").type,this.assign().get].join("")):t},d.or=function(){var t=this.and();return this.eat("||")?i(t.get+"||"+this.or().get):t},d.and=function(){var t=this.equal();return this.eat("&&")?i(t.get+"&&"+this.and().get):t},d.equal=function(){var t,e=this.relation();return(t=this.eat(["==","!=","===","!=="]))?i(e.get+t.type+this.equal().get):e},d.relation=function(){var t,e=this.additive();return(t=this.eat(["<",">",">=","<="])||this.eat("IDENT","in"))?i(e.get+t.value+this.relation().get):e},d.additive=function(){var t,e=this.multive();return(t=this.eat(["+","-"]))?i(e.get+t.value+this.additive().get):e},d.multive=function(){var t,e=this.range();return(t=this.eat(["*","/","%"]))?i(e.get+t.type+this.multive().get):e},d.range=function(){var t,e,n=this.unary();if(t=this.eat("..")){e=this.unary();var r="(function(start,end){var res = [],step=end>start?1:-1; for(var i = start; end>start?i <= end: i>=end; i=i+step){res.push(i); } return res })("+n.get+","+e.get+")";return i(r);
	}return n},d.unary=function(){var t;return(t=this.eat(["+","-","~","!"]))?i("("+t.type+this.unary().get+")"):this.member()},d.member=function(t,e,n,r){var i,a,s,u=!1;if(t)"string"==typeof e&&h(e)?n.push(e):(n&&n.length&&this.depend.push(n),n=null);else{a=this.primary();var p=typeof a;"string"===p?(n=[],n.push(a),e=a,s=l+"."+a,t=f+"._sg_('"+a+"', "+c+", "+l+")",u=!0):"this"===a.get?(t=f,n=["this"]):(n=null,t=a.get)}if(i=this.eat(["[",".","("]))switch(i.type){case".":var d=this.match("IDENT").value;return r=t,"("!==this.la()?t=f+"._sg_('"+d+"', "+t+")":t+="['"+d+"']",this.member(t,d,n,r);case"[":return a=this.assign(),r=t,"("!==this.la()?t=f+"._sg_("+a.get+", "+t+")":t+="["+a.get+"]",this.match("]"),this.member(t,a,n,r);case"(":var v=this.arguments().join(",");return t=t+"("+v+")",this.match(")"),this.member(t,null,n)}n&&n.length&&this.depend.push(n);var m={get:t};return e&&(m.set=f+"._ss_("+(e.get?e.get:"'"+e+"'")+","+o.setName+","+(r?r:o.varName)+", '=', "+(u?1:0)+")"),m},d.arguments=function(t){t=t||")";var e=[];do this.la()!==t&&e.push(this.assign().get);while(this.eat(","));return e},d.primary=function(){var t=this.ll();switch(t.type){case"{":return this.object();case"[":return this.array();case"(":return this.paren();case"STRING":this.next();var e=""+t.value,n=~e.indexOf("'")?'"':"'";return i(n+e+n);case"NUMBER":return this.next(),i(""+t.value);case"IDENT":return this.next(),p(t.value)?i(t.value):t.value;default:this.error("Unexpected Token: "+t.type)}},d.object=function(){for(var t=[this.match("{").type],e=this.eat(["STRING","IDENT","NUMBER"]);e;){t.push("'"+e.value+"'"+this.match(":").type);var n=this.assign().get;t.push(n),e=null,this.eat(",")&&(e=this.eat(["STRING","IDENT","NUMBER"]))&&t.push(",")}return t.push(this.match("}").type),{get:t.join("")}},d.array=function(){var t,e=[this.match("[").type];if(this.eat("]"))e.push("]");else{for(;(t=this.assign())&&(e.push(t.get),this.eat(","));)e.push(",");e.push(this.match("]").type)}return{get:e.join("")}},d.paren=function(){this.match("(");var t=this.filter();return t.get="("+t.get+")",t.set=t.set,this.match(")"),t},t.exports=r},function(t,e){t.exports={element:function(t,e,n){return{type:"element",tag:t,attrs:e,children:n}},attribute:function(t,e,n){return{type:"attribute",name:t,value:e,mdf:n}},"if":function(t,e,n){return{type:"if",test:t,consequent:e,alternate:n}},list:function(t,e,n,r,i){return{type:"list",sequence:t,alternate:r,variable:e,body:n,track:i}},expression:function(t,e,n,r){return{type:"expression",body:t,constant:n||!1,setbody:e||!1,filters:r}},text:function(t){return{type:"text",text:t}},template:function(t){return{type:"template",content:t}}}},function(t,e,n){function r(t,e,n){return function(){var r=this.supr;this.supr=n[t];var i=e.apply(this,arguments);return this.supr=r,i}}function i(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(u[i]&&u[i](e[i],t,n),t[i]=s(e[i])&&s(n[i])&&a.test(e[i])?r(i,e[i],n):e[i])}var o=n(2),a=/xy/.test(function(){"xy"})?/\bsupr\b/:/.*/,s=function(t){return"function"==typeof t},u={events:function(t,e){var n=e._eventListeners||[],r=o.normListener(t);r.length&&(e._eventListeners=n.concat(r)),delete e.events}},c=["data","computed"],f=c.length;t.exports=function l(t){function e(){a.apply(this,arguments)}function n(t){for(var e=f;e--;){var n=c[e];r[n]&&t.hasOwnProperty(n)&&r.hasOwnProperty(n)&&(o.extend(r[n],t[n],!0),delete t[n])}return i(r,t,s),this}t=t||{};var r,a=this,s=a&&a.prototype||{};return"function"==typeof t?(r=t.prototype,t.implement=n,t.extend=l,t):(r=o.createProto(e,s),e.implement=n,e.implement(t),a.__after__&&a.__after__.call(e,a,t),e.extend=l,e)}},function(t,e,n){function r(t){return(""+t).replace(/-\D/g,function(t){return t.charAt(1).toUpperCase()})}function i(t,e){return"change"===e&&u.msie<9&&t&&t.tagName&&"input"===t.tagName.toLowerCase()&&("checkbox"===t.type||"radio"===t.type)?"click":e}function o(t){if(t=t||window.event,t._fixed)return t;this.event=t,this.target=t.target||t.srcElement;var e=this.type=t.type,n=this.button=t.button;if(m.test(e)&&(this.pageX=null!=t.pageX?t.pageX:t.clientX+g.scrollLeft,this.pageY=null!=t.pageX?t.pageY:t.clientY+g.scrollTop,"mouseover"===e||"mouseout"===e)){for(var r=t.relatedTarget||t[("mouseover"===e?"from":"to")+"Element"];r&&3===r.nodeType;)r=r.parentNode;this.relatedTarget=r}("DOMMouseScroll"===e||"mousewheel"===e)&&(this.wheelDelta=t.wheelDelta?t.wheelDelta/120:-(t.detail||0)/3),this.which=t.which||t.keyCode,this.which||void 0===n||(this.which=1&n?1:2&n?3:4&n?2:0),this._fixed=!0}var a,s,u=t.exports,c=n(1),f=n(2),l=n(14),h=document.createElement("div"),p=function(){},d=l.NAMESPACE;u.body=document.body,u.doc=document,u.tNode=h,h.addEventListener?(a=function(t,e,n){t.addEventListener(e,n,!1)},s=function(t,e,n){t.removeEventListener(e,n,!1)}):(a=function(t,e,n){t.attachEvent("on"+e,n)},s=function(t,e,n){t.detachEvent("on"+e,n)}),u.msie=parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase())||[])[1]),isNaN(u.msie)&&(u.msie=parseInt((/trident\/.*; rv:(\d+)/.exec(navigator.userAgent.toLowerCase())||[])[1])),u.find=function(t){if(document.querySelector)try{return document.querySelector(t)}catch(e){}return-1!==t.indexOf("#")?document.getElementById(t.slice(1)):void 0},u.inject=function(t,e,n){if(n=n||"bottom",t){if(Array.isArray(t)){var r=t;t=u.fragment();for(var i=0,o=r.length;o>i;i++)t.appendChild(r[i])}var a,s;switch(n){case"bottom":e.appendChild(t);break;case"top":(a=e.firstChild)?e.insertBefore(t,e.firstChild):e.appendChild(t);break;case"after":(s=e.nextSibling)?s.parentNode.insertBefore(t,s):e.parentNode.appendChild(t);break;case"before":e.parentNode.insertBefore(t,e)}}},u.id=function(t){return document.getElementById(t)},u.create=function(t,e,n){if("svg"===e){if(!c.svg)throw Error("the env need svg support");e=d.svg}return e?document.createElementNS(e,t):document.createElement(t)},u.fragment=function(){return document.createDocumentFragment()};var v={"class":function(t,e){"className"in t&&(!t.namespaceURI||t.namespaceURI===d.html)?t.className=e||"":t.setAttribute("class",e)},"for":function(t,e){"htmlFor"in t?t.htmlFor=e:t.setAttribute("for",e)},style:function(t,e){t.style?t.style.cssText=e:t.setAttribute("style",e)},value:function(t,e){t.value=null!=e?e:""}};u.attr=function(t,e,n){if(f.isBooleanAttr(e)){if("undefined"==typeof n)return t[e]||(t.attributes.getNamedItem(e)||p).specified?e:void 0;n?(t[e]=!0,t.setAttribute(e,e),u.msie&&u.msie<=7&&"checked"===e&&(t.defaultChecked=!0)):(t[e]=!1,t.removeAttribute(e))}else if("undefined"!=typeof n)v[e]?v[e](t,n):null===n?t.removeAttribute(e):t.setAttribute(e,n);else if(t.getAttribute){var r=t.getAttribute(e,2);return null===r?void 0:r}},u.on=function(t,e,n){var r=e.split(" ");return n.real=function(e){var r=new o(e);r.origin=t,n.call(t,r)},r.forEach(function(e){e=i(t,e),a(t,e,n.real)}),u},u.off=function(t,e,n){var r=e.split(" ");n=n.real||n,r.forEach(function(e){e=i(t,e),s(t,e,n)})},u.text=function(){var t={};return u.msie&&u.msie<9?(t[1]="innerText",t[3]="nodeValue"):t[1]=t[3]="textContent",function(e,n){var r=t[e.nodeType];return null==n?r?e[r]:"":void(e[r]=n)}}(),u.html=function(t,e){return"undefined"==typeof e?t.innerHTML:void(t.innerHTML=e)},u.replace=function(t,e){e.parentNode&&e.parentNode.replaceChild(t,e)},u.remove=function(t){t.parentNode&&t.parentNode.removeChild(t)},u.css=function(t,e,n){if("object"==typeof e&&e)for(var i in e)e.hasOwnProperty(i)&&u.css(t,i,e[i]);else{if("undefined"==typeof n){var o;return u.msie<=8&&(o=t.currentStyle&&t.currentStyle[e],""===o&&(o="auto")),o=o||t.style[e],u.msie<=8&&(o=""===o?void 0:o),o}e=r(e),e&&(t.style[e]=n)}},u.addClass=function(t,e){var n=t.className||"";-1===(" "+n+" ").indexOf(" "+e+" ")&&(t.className=n?n+" "+e:e)},u.delClass=function(t,e){var n=t.className||"";t.className=(" "+n+" ").replace(" "+e+" "," ").trim()},u.hasClass=function(t,e){var n=t.className||"";return-1!==(" "+n+" ").indexOf(" "+e+" ")};var m=/^(?:click|dblclick|contextmenu|DOMMouseScroll|mouse(?:\w+))$/,g=document;g=g.compatMode&&"CSS1Compat"!==g.compatMode?g.body:g.documentElement,f.extend(o.prototype,{stop:function(){this.preventDefault().stopPropagation()},preventDefault:function(){return this.event.preventDefault?this.event.preventDefault():this.event.returnValue=!1,this},stopPropagation:function(){return this.event.stopPropagation?this.event.stopPropagation():this.event.cancelBubble=!0,this},stopImmediatePropagation:function(){this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation()}}),u.nextFrame=function(){var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||function(t){clearTimeout(t)};return function(n){var r=t(n);return function(){e(r)}}}();var y;u.nextReflow=u.msie?function(t){return u.nextFrame(function(){y=document.body.offsetWidth,t()})}:u.nextFrame},function(t,e){t.exports={COMPONENT_TYPE:1,ELEMENT_TYPE:2,NAMESPACE:{html:"http://www.w3.org/1999/xhtml",svg:"http://www.w3.org/2000/svg"},OPTIONS:{STABLE_INIT:{stable:!0,init:!0},FORCE_INIT:{force:!0,init:!0},STABLE:{stable:!0},INIT:{init:!0},SYNC:{sync:!0},FORCE:{force:!0}}}},function(t,e,n){function r(t,e,n){for(var r=1;e>=r;r++){var i=n[t+r];i&&i.destroy(!0)}n.splice(t+1,e)}function i(t,e){return"array"===e?t:"object"===e?l.keys(t):[]}function o(t,e,n){for(var r=[],i=0,o=t.length;o>i;i++){var a=this._walk(t[i],{element:e,fromElement:!0,attrs:t,extra:n});a&&r.push(a)}return r}var a=n(16).diffArray,s=n(17),u=n(18),c=(n(11),n(19)),f=n(13),l=n(2),h=n(14),p=h.OPTIONS,d=t.exports={};d.list=function(t,e){function n(n,r,i,a){for(var c=n;r>c;c++){var f=i[c],h=l.createObject(x);o(h,c,f,a);var p=T.$compile(t.body,{extra:h,namespace:E,record:!0,outer:e.outer});p.data=h;var d=s.last(_.get(c));d.parentNode&&u.inject(s.node(p),d,"after"),N.splice(c+1,0,p)}}function o(t,e,n,r){t[w]=e,r?(t[b]=n,t[$]=r[n]):(t[$]=n,t[b]=null)}function f(t,e,n,r){for(var i=t;e>i;i++){var a=_.get(i+1),s=n[i];o(a.data,i,s,r)}}function h(t,e,i,o){var s=0,u=t.length;if(i||0===u&&0===e.length||(i=a(t,e,!0)),i&&i.length){for(var c=0;c<i.length;c++){var l=i[c],h=l.index,p=l.removed,d=l.add,v=p.length;if(S&&v&&d){for(var g=Math.min(v,d),y=0;g>y;)m(t[h],h)!==m(p[0],h)&&(r(h,1,N),n(h,h+1,t,o)),p.shift(),d--,h++,y++;v=p.length}f(s,h,t,o),r(h,v,N),n(h,h+d,t,o),s=h+d-v,s=0>s?0:s}if(u>s)for(var c=s;u>c;c++){var E=_.get(c+1);E.data[w]=c}}}function p(t,e,i){var o=t.length,a=e.length,s=Math.min(o,a);f(0,s,t,i),a>o?r(o,a-o,N):o>a&&n(a,o,t,i)}function v(t,n,r){var o,a=l.typeOf(t),c=l.typeOf(n),f=i(t,a),d=i(n,c),v=f&&f.length,m=d&&d.length;if(!m&&v&&_.get(1)){var g=N.pop();g.destroy&&g.destroy(!0)}if("object"===a&&(o=t),S===!0?p(f,d,o):h(f,d,r,o),!v&&A&&A.length){var w=T.$compile(A,{extra:x,record:!0,outer:e.outer,namespace:E});N.push(w),y.parentNode&&u.inject(s.node(w),y,"after")}}var m,g,y=(d.Regular,document.createComment("Regular list")),E=e.namespace,x=e.extra,T=this,_=new c([y]),N=_.children,w=t.variable+"_index",b=t.variable+"_key",$=t.variable,A=t.alternate,S=t.track;return S&&S!==!0&&(S=this._touchExpr(S),g=l.createObject(x),m=function(t,e){return g[$]=t,g[w]=e,S.get(T,g)}),this.$watch(t.sequence,v,{init:!0,diff:S!==!0,deep:!0}),_},d.template=function(t,e){var n,n,r=t.content,i=document.createComment("inlcude"),o=e.namespace,a=e.extra,s=new c([i]);if(r){var u=this;this.$watch(r,function(t){var r=s.get(1),c=typeof t;r&&(r.destroy(!0),s.children.pop()),t&&(s.push(n="function"===c?t():u.$compile("object"!==c?String(t):t,{record:!0,outer:e.outer,namespace:o,extra:a})),i.parentNode&&n.$inject(i,"before"))},p.INIT)}return s};var v=0;d["if"]=function(t,e){var n,r,i=this,o=e.extra;if(e&&e.element){var a=function(a){a?(r&&s.destroy(r),t.consequent&&(n=i.$compile(t.consequent,{record:!0,element:e.element,extra:o}))):(n&&s.destroy(n),t.alternate&&(r=i.$compile(t.alternate,{record:!0,element:e.element,extra:o})))};return this.$watch(t.test,a,p.FORCE),{destroy:function(){n?s.destroy(n):r&&s.destroy(r)}}}var n,r,f=document.createComment("Regular if"+v++),l=new c;l.push(f);var h=null,d=e.namespace,a=function(a,c){var p=!!a;p!==h&&(h=p,l.children[1]&&(l.children[1].destroy(!0),l.children.pop()),p?t.consequent&&t.consequent.length&&(n=i.$compile(t.consequent,{record:!0,outer:e.outer,namespace:d,extra:o}),l.push(n),f.parentNode&&u.inject(s.node(n),f,"before")):t.alternate&&t.alternate.length&&(r=i.$compile(t.alternate,{record:!0,outer:e.outer,namespace:d,extra:o}),l.push(r),f.parentNode&&u.inject(s.node(r),f,"before")))};return this.$watch(t.test,a,p.FORCE_INIT),l},d.expression=function(t,e){var n=document.createTextNode("");return this.$watch(t,function(t){f.text(n,null==t?"":String(t))},p.STABLE_INIT),n},d.text=function(t,e){var n=t.text,r=document.createTextNode(-1!==n.indexOf("&")?l.convertEntity(n):n);return r};var m=/^on-(.+)$/;d.element=function(t,e){var n,r,i=t.attrs,a=this.constructor,c=t.children,h=e.namespace,p=e.extra,v=t.tag,m=a.component(v);if("r-content"===v)return l.log("r-content is deprecated, use {#inc this.$body} instead (`{#include}` as same)","warn"),this.$body&&this.$body();if(m||"r-component"===v)return e.Component=m,d.component.call(this,t,e);"svg"===v&&(h="svg"),c&&c.length&&(n=this.$compile(c,{outer:e.outer,namespace:h,extra:p})),r=f.create(v,h,i),n&&!l.isVoidTag(v)&&f.inject(s.node(n),r),l.fixTagAST(t,a);var g=o.call(this,i,r,p);return{type:"element",group:n,node:function(){return r},last:function(){return r},destroy:function(t){t?u.remove(r,n?n.destroy.bind(n):l.noop):n&&n.destroy(),g.length&&g.forEach(function(t){t&&("function"==typeof t.destroy?t.destroy():t())})}}},d.component=function(t,e){for(var n,r,i,o,a=t.attrs,u=e.Component,f=this.constructor,h=e.extra,d=e.namespace,v=this,g={},y=0,E=a.length;E>y;y++){var x=a[y],T=this._touchExpr(void 0===x.value?!0:x.value);T.constant&&(T=x.value=T.get(this)),x.value&&x.value.constant===!0&&(T=T.get(this));var _=x.name;if(!x.event){var N=_.match(m);N&&(x.event=N[1])}if("cmpl"===x.mdf&&(T=l.getCompileFn(T,this,{record:!0,namespace:d,extra:h,outer:e.outer})),"is"===_&&!u){i=T;var w=this.$get(T,!0);if(u=f.component(w),"function"!=typeof u)throw new Error("component "+w+" has not registed!")}var b;(b=x.event)?(o=o||{},o[b]=l.handleEvent.call(this,T,b)):(_=x.name=l.camelCase(_),T&&"expression"===T.type?g[_]=T.get(v):g[_]=T,"ref"===_&&null!=T&&(r=T),"isolate"===_&&(n="expression"===T.type?T.get(v):parseInt(T===!0?3:T,10),g.isolate=n))}var $,A={data:g,events:o,$parent:2&n?null:this,$root:this.$root,$outer:e.outer,_body:{ctx:this,ast:t.children}},e={namespace:d,extra:e.extra},S=new u(A,e);r&&this.$refs&&($=u.directive("ref").link,this.$on("$destroy",$.call(this,S,r))),r&&v.$refs&&(v.$refs[r]=S);for(var y=0,E=a.length;E>y;y++){var x=a[y],T=x.value||!0,_=x.name;"expression"!==T.type||x.event||(T=v._touchExpr(T),2&n||this.$watch(T,function(t,e){this.data[t]=e}.bind(S,_),p.SYNC),!T.set||1&n||S.$watch(_,v.$update.bind(v,T),p.INIT))}if(i&&"expression"===i.type){var O=new c;return O.push(S),this.$watch(i,function(t){var e=f.component(t);if(!e)throw new Error("component "+t+" has not registed!");var n=new e(A),i=O.children.pop();O.push(n),n.$inject(s.last(i),"after"),i.destroy(),r&&(v.$refs[r]=n)},p.SYNC),O}return S},d.attribute=function(t,e){var n=t,r=n.name,i=n.value||"",o=i.constant,a=this.constructor,s=a.directive(r),u=e.element,c=this;if(i=this._touchExpr(i),o&&(i=i.get(this)),s&&s.link){var h={attrs:e.attrs,param:l.getParamObj(this,n.param)},d=s.link.call(c,u,i,r,h);return"function"==typeof s.update&&(l.isExpr(i)?this.$watch(i,function(t,e){s.update.call(c,u,t,e,h)}):s.update.call(c,u,i,void 0,h)),"function"==typeof d&&(d={destroy:d}),d}return"expression"===i.type?this.$watch(i,function(t,e){f.attr(u,r,t)},p.STABLE_INIT):l.isBooleanAttr(r)?f.attr(u,r,!0):f.attr(u,r,i),e.fromElement?void 0:{destroy:function(){f.attr(u,r,null)}}}},function(t,e,n){function r(t,e){var n=t.length,r=e.length;if(n!==r)return!0;for(var i=0;n>i;i++)if(t[i]!==e[i])return!0;return!1}function i(t,e){return t===e}function o(t,e,n){for(var r=t.length,o=e.length,n=n||i,a=[],s=0;r>=s;s++)a.push([s]);for(var u=1;o>=u;u++)a[0][u]=u;for(var s=1;r>=s;s++)for(var u=1;o>=u;u++)n(t[s-1],e[u-1])?a[s][u]=a[s-1][u-1]:a[s][u]=Math.min(a[s-1][u]+1,a[s][u-1]+1);return a}function a(t,e,n,i){if(!n)return r(t,e);for(var a=o(e,t,i),s=e.length,u=s,c=t.length,f=c,l=[],h=a[u][f];u>0||f>0;)if(0!==u)if(0!==f){var p=a[u-1][f-1],d=a[u-1][f],v=a[u][f-1],m=Math.min(v,d,p);m===d?(l.unshift(2),u--,h=d):m===p?(p===h?l.unshift(0):(l.unshift(1),h=p),u--,f--):(l.unshift(3),f--,h=v)}else l.unshift(2),u--;else l.unshift(3),f--;var g=0,y=3,E=2,x=1,s=0;c=0;for(var T=[],_={index:null,add:0,removed:[]},u=0;u<l.length;u++)switch(l[u]>0?null===_.index&&(_.index=c):null!=_.index&&(T.push(_),_={index:null,add:0,removed:[]}),l[u]){case g:s++,c++;break;case y:_.add++,c++;break;case E:_.removed.push(e[s]),s++;break;case x:_.add++,_.removed.push(e[s]),s++,c++}return null!=_.index&&T.push(_),T}function s(t,e,n){if(n){var r=u.keys(t),i=u.keys(e);return a(r,i,n,function(n,r){return t[r]===e[n]})}for(var o in t)if(e[o]!==t[o])return!0;for(var s in e)if(e[s]!==t[s])return!0;return!1}var u=n(2);t.exports={diffArray:a,diffObject:s}},function(t,e,n){var r=n(13),i=n(18),o=t.exports={node:function(t){var e,n;if(t){if("function"==typeof t.node)return t.node();if("number"==typeof t.nodeType)return t;if(t.group)return o.node(t.group);if(t=t.children||t,Array.isArray(t)){var r=t.length;if(1===r)return o.node(t[0]);n=[];for(var i=0,r=t.length;r>i;i++)e=o.node(t[i]),Array.isArray(e)?n.push.apply(n,e):e&&n.push(e);return n}}},inject:function(t,e){var n=this,a=o.node(n.group||n);if(t===!1)return i.remove(a),n;if(!a)return n;if("string"==typeof t&&(t=r.find(t)),!t)throw Error("injected node is not found");if(i.inject(a,t,e),n.$emit){var s=n.parentNode,u="after"===e||"before"===e?t.parentNode:t;n.parentNode=u,n.$emit("$inject",t,e,s)}return n},last:function(t){var e=t.children;return"function"==typeof t.last?t.last():"number"==typeof t.nodeType?t:e&&e.length?o.last(e[e.length-1]):t.group?o.last(t.group):void 0},destroy:function(t,e){if(t){if("number"==typeof t.nodeType)return e&&r.remove(t);if("function"==typeof t.destroy)return t.destroy(e);if(Array.isArray(t))for(var n=0,i=t.length;i>n;n++)o.destroy(t[n],e)}}};r.element=function(t,e){if(!t)return e?[]:null;var n=o.node(t);if(1===n.nodeType)return e?[n]:n;for(var r=[],i=0;i<n.length;i++){var a=n[i];if(a&&1===a.nodeType){if(!e)return a;r.push(a)}}return e?r:r[0]}},function(t,e,n){function r(t,e){s.remove(t),e&&e()}function i(t){var e,n=0,r=0,i=0,a=0,s=0,u=5/3;return window.getComputedStyle&&(e=window.getComputedStyle(t),r=o(e[h+"Duration"])||r,i=o(e[h+"Delay"])||i,a=o(e[p+"Duration"])||a,s=o(e[p+"Delay"])||s,n=Math.max(r+i,a+s)),1e3*n*u}function o(t){var e,n=0;return t?(t.split(",").forEach(function(t){e=parseFloat(t),e>n&&(n=e)}),n):0}var a=n(2),s=n(13),u={},c=n(1),f="transitionend",l="animationend",h="transition",p="animation";"ontransitionend"in window||("onwebkittransitionend"in window?(f+=" webkitTransitionEnd",h="webkitTransition"):("onotransitionend"in s.tNode||"Opera"===navigator.appName)&&(f+=" oTransitionEnd",h="oTransition")),"onanimationend"in window||("onwebkitanimationend"in window?(l+=" webkitAnimationEnd",p="webkitAnimation"):"onoanimationend"in s.tNode&&(l+=" oAnimationEnd",p="oAnimation")),u.inject=function(t,e,n,r){if(r=r||a.noop,Array.isArray(t)){for(var i=s.fragment(),o=0,u=0,c=t.length;c>u;u++)i.appendChild(t[u]);s.inject(i,e,n);var f=function(){o++,o===c&&r()};for(c===o&&r(),u=0;c>u;u++)t[u].onenter?t[u].onenter(f):f()}else s.inject(t,e,n),t.onenter?t.onenter(r):r()},u.remove=function(t,e){function n(){i++,i===a&&e&&e()}if(t){var i=0;if(Array.isArray(t))for(var o=0,a=t.length;a>o;o++)u.remove(t[o],n);else"function"==typeof t.onleave?t.onleave(function(){r(t,e)}):r(t,e)}},u.startClassAnimate=function(t,e,n,r){var o,u,h,p;return!l&&!f||c.isRunning?n():(p=4!==r?a.once(function(){h&&clearTimeout(h),2===r&&s.delClass(t,o),3!==r&&s.delClass(t,e),s.off(t,l,p),s.off(t,f,p),n()}):a.once(function(){h&&clearTimeout(h),n()}),2===r?(s.addClass(t,e),o=a.map(e.split(/\s+/),function(t){return t+"-active"}).join(" "),s.nextReflow(function(){s.addClass(t,o),u=i(t),h=setTimeout(p,u)})):4===r?s.nextReflow(function(){s.delClass(t,e),u=i(t),h=setTimeout(p,u)}):s.nextReflow(function(){s.addClass(t,e),u=i(t),h=setTimeout(p,u)}),s.on(t,l,p),s.on(t,f,p),p)},u.startStyleAnimate=function(t,e,n){var r,o,u;return s.nextReflow(function(){s.css(t,e),r=i(t),u=setTimeout(o,r)}),o=a.once(function(){u&&clearTimeout(u),s.off(t,l,o),s.off(t,f,o),n()}),s.on(t,l,o),s.on(t,f,o),o},t.exports=u},function(t,e,n){function r(t){this.children=t||[]}var i=n(2),o=n(17),a=i.extend(r.prototype,{destroy:function(t){o.destroy(this.children,t),this.ondestroy&&this.ondestroy(),this.children=null},get:function(t){return this.children[t]},push:function(t){this.children.push(t)}});a.inject=a.$inject=o.inject,t.exports=r},function(t,e,n){function r(){}var i=n(2),o={$on:function(t,e,n){if("object"==typeof t&&t)for(var r in t)this.$on(r,t[r],e);else{n=n||{};var i,o=this,a=o._handles||(o._handles={}),s=a[t]||(a[t]=[]);n.once&&(i=function(){e.apply(this,arguments),this.$off(t,e)},e.real=i),s.push(i||e)}return this},$off:function(t,e){var n=this;if(n._handles){t||(this._handles={});var r,i=n._handles;if(r=i[t]){if(!e)return i[t]=[],n;e=e.real||e;for(var o=0,a=r.length;a>o;o++)if(e===r[o])return r.splice(o,1),n}return n}},$emit:function(t){var e,n,r,o=this,a=o._handles;if(t){var n=i.slice(arguments,1),r=t;if(!a)return o;if(e=a[r.slice(1)])for(var s=0,u=e.length;u>s;s++)e[s].apply(o,n);if(!(e=a[r]))return o;for(var c=0,u=e.length;u>c;c++)e[c].apply(o,n);return o}},$once:function(t,e){var n=i.slice(arguments);return n.push({once:!0}),this.$on.apply(this,n)}};i.extend(r.prototype,o),r.mixTo=function(t){t="function"==typeof t?t.prototype:t,i.extend(t,o)},t.exports=r},function(t,e,n){function r(){}var i=n(2),o=n(22).expression,a=n(16),s=a.diffArray,u=a.diffObject,c={$watch:function(t,e,n){var r,a,s,u,c=this.__ext__;this._watchers||(this._watchers=[]),this._watchersForStable||(this._watchersForStable=[]),n=n||{},n===!0&&(n={deep:!0});var f=i.uid("w_");if(Array.isArray(t)){for(var l=[],h=0,p=t.length;p>h;h++)l.push(this.$expression(t[h]).get);var d=[];s=function(t){for(var e=!0,n=0,r=l.length;r>n;n++){var o=l[n](t,c);i.equals(o,d[n])||(e=!1,d[n]=i.clone(o))}return e?!1:d}}else"function"==typeof t?r=t.bind(this):(t=this._touchExpr(o(t)),r=t.get,a=t.once);var v={id:f,get:r,fn:e,once:a,force:n.force,diff:n.diff,test:s,deep:n.deep,last:n.sync?r(this):n.last};if(this[n.stable?"_watchersForStable":"_watchers"].push(v),u=this._records&&this._records.length,u&&this._records[u-1].push(v),n.init===!0){var m=this.$phase;this.$phase="digest",this._checkSingleWatch(v),this.$phase=m}return v},$unwatch:function(t){if(this._watchers&&t){var e=this._watchers,n=typeof t;if("object"===n){var r=t.length;if(r)for(;r-->=0;)this.$unwatch(t[r]);else t.removed=!0}else if("number"===n){var o=t;return t=i.findItem(e,function(t){return t.id===o}),t||(t=i.findItem(this._watchersForStable,function(t){return t.id===o})),this.$unwatch(t)}return this}},$expression:function(t){return this._touchExpr(o(t))},$digest:function(){if("digest"!==this.$phase&&!this._mute){this.$phase="digest";for(var t=!1,e=0;t=this._digest();)if(++e>20)throw Error("there may a circular dependencies reaches");var n=this._digest(!0);(e>0||n)&&this.$emit&&(this.$emit("$update"),this.devtools&&this.devtools.emit("flush",this)),this.$phase=null}},_digest:function(t){var e,n,r,i=t?this._watchersForStable:this._watchers,o=!1,a=i&&i.length;if(a)for(var s=0,u=0,c=0;a>c;c++){n=i[c];var f=!n||n.removed;f?u+=1:(r=this._checkSingleWatch(n),r&&(o=!0)),f&&c!==a-1||(u&&(i.splice(s,u),a-=u,c-=u,u=0),s=c+1)}if(e=this._children,e&&e.length)for(var l=0,h=e.length;h>l;l++){var p=e[l];p&&p._digest(t)&&(o=!0)}return o},_checkSingleWatch:function(t){var e=!1;if(t){var n,r,o,a,c,f;if(t.test){var l=t.test(this);l&&(e=!0,t.fn.apply(this,l))}else n=t.get(this),r=t.last,(n!==r||t.force)&&(o=i.typeOf(r),a=i.typeOf(n),c=!0,"object"===a&&"object"===o&&t.deep?(f=u(n,r,t.diff),(f===!0||f.length)&&(e=!0)):"array"!==a||"undefined"!=o&&"array"!==o?(c=i.equals(n,r),(!c||t.force)&&(t.force=null,e=!0)):(f=s(n,t.last||[],t.diff),("array"!==o||f===!0||f.length)&&(e=!0)));return e&&!t.test&&("object"===a&&t.deep||"array"===a?t.last=i.clone(n):t.last=n,t.fn.call(this,n,r,f),t.once&&this.$unwatch(t)),e}},$set:function(t,e){if(null!=t){var n=typeof t;if("string"===n||"expression"===t.type)t=this.$expression(t),t.set(this,e);else if("function"===n)t.call(this,this.data);else for(var r in t)this.$set(r,t[r])}},$get:function(t,e){return e&&"string"==typeof t?t:this.$expression(t).get(this)},$update:function(){var t=this;do{if(t.data.isolate||!t.$parent)break;t=t.$parent}while(t);var e=t.$phase;return t.$phase="digest",this.$set.apply(this,arguments),t.$phase=e,t.$digest(),this},_record:function(){this._records||(this._records=[]),this._records.push([])},_release:function(){return this._records.pop()}};i.extend(r.prototype,c),r.mixTo=function(t){return t="function"==typeof t?t.prototype:t,i.extend(t,c)},t.exports=r},function(t,e,n){var r=n(1).exprCache,i=(n(2),n(10));t.exports={expression:function(t,e){return"string"==typeof t&&(t=t.trim())&&(t=r.get(t)||r.set(t,new i(t,{mode:2,expression:!0}).expression())),t?t:void 0},parse:function(t){return new i(t).parse()}}},function(t,e){var n=t.exports={};n.json={get:function(t){return"undefined"!=typeof JSON?JSON.stringify(t):t},set:function(t){return"undefined"!=typeof JSON?JSON.parse(t):t}},n.last=function(t){return t&&t[t.length-1]},n.average=function(t,e){return t=t||[],t.length?n.total(t,e)/t.length:0},n.total=function(t,e){var n=0;if(t)return t.forEach(function(t){n+=e?t[e]:t}),n}},function(t,e,n){var r=n(2),i=n(13),o=(n(18),n(8)),a=n(14),s=a.NAMESPACE,u=a.OPTIONS,c=u.STABLE,f={deep:!0,stable:!0};n(25),n(26),t.exports={"r-class":function(t,e){"string"==typeof e&&(e=r.fixObjStr(e));var n=t.namespaceURI&&t.namespaceURI!==s.html;this.$watch(e,function(e){var r=n?t.getAttribute("class"):t.className;r=" "+(r||"").replace(/\s+/g," ")+" ";for(var o in e)e.hasOwnProperty(o)&&(r=r.replace(" "+o+" "," "),e[o]===!0&&(r+=o+" "));r=r.trim(),n?i.attr(t,"class",r):t.className=r},f)},"r-style":function(t,e){"string"==typeof e&&(e=r.fixObjStr(e)),this.$watch(e,function(e){for(var n in e)e.hasOwnProperty(n)&&i.css(t,n,e[n])},f)},"r-hide":function(t,e){var n,i=null;r.isExpr(e)||"string"==typeof e?this.$watch(e,function(e){var r=!!e;r!==i&&(i=r,r?t.onleave?n=t.onleave(function(){t.style.display="none",n=null}):t.style.display="none":(n&&n(),t.style.display="",t.onenter&&t.onenter()))},c):e&&(t.style.display="none")},"r-html":function(t,e){this.$watch(e,function(e){e=e||"",i.html(t,e)},{force:!0,stable:!0})},ref:{accept:a.COMPONENT_TYPE+a.ELEMENT_TYPE,link:function(t,e){var n,i=this.$refs||(this.$refs={});return r.isExpr(e)?this.$watch(e,function(e,r){n=e,i[r]===t&&(i[r]=null),n&&(i[n]=t)},c):i[n=e]=t,function(){i[n]=null}}}},o.directive(t.exports)},function(t,e,n){function r(t,e,n){if(n)for(var r,i=t.target;i&&i!==n;){for(var o=0,a=e.length;a>o;o++)r=e[o],r&&r.element===i&&r.fire(t);i=i.parentNode}}var i=n(2),o=n(13),a=n(8);a._addProtoInheritCache("event"),a.directive(/^on-\w+$/,function(t,e,n,r){if(n&&e){var i=n.split("-")[1];return this._handleEvent(t,i,e,r)}}),a.directive(/^(delegate|de)-\w+$/,function(t,e,n){function a(t){r(t,u[c],s.parentNode)}var s=this.$root,u=s._delegates||(s._delegates={});if(n&&e){var c=n.split("-")[1],f=i.handleEvent.call(this,e,c);u[c]||(u[c]=[],s.parentNode?o.on(s.parentNode,c,a):s.$on("$inject",function(t,e,n){var r=this.parentNode;n&&o.off(n,c,a),r&&o.on(this.parentNode,c,a)}),s.$on("$destroy",function(){s.parentNode&&o.off(s.parentNode,c,a),u[c]=null}));var l={element:t,fire:f};return u[c].push(l),function(){var t=u[c];if(t&&t.length)for(var e=0,n=t.length;n>e;e++)t[e]===l&&t.splice(e,1)}}})},function(t,e,n){function r(t,e,n){function r(){e.set(i,this.value),o.last=this.value,i.$update()}var i=this,o=this.$watch(e,function(e){for(var n=t.getElementsByTagName("option"),r=0,i=n.length;i>r;r++)if(n[r].value==e){t.selectedIndex=r;break}},h);return c.on(t,"change",r),void 0===e.get(i)&&t.value&&e.set(i,t.value),function(){c.off(t,"change",r)}}function i(t,e,n){var r,i=n.param,o=i.lazy;"throttle"in i&&(r=i[r]===!0?400:parseInt(i.throttle,10));var a=this,f=this.$watch(e,function(e){t.value!==e&&(t.value=null==e?"":""+e)},h),l=function(t){var n=this;if("cut"===t.type||"paste"===t.type)u.nextTick(function(){var t=n.value;e.set(a,t),f.last=t,a.$update()});else{var r=n.value;e.set(a,r),f.last=r,a.$update()}};if(r&&!o){l=u.throttle(l,r)}return void 0===s&&(s=9!==c.msie&&"oninput"in document.createElement("input")),o?c.on(t,"change",l):s?t.addEventListener("input",l):c.on(t,"paste keyup cut change",l),void 0===e.get(a)&&t.value&&e.set(a,t.value),function(){return o?c.off(t,"change",l):void(s?t.removeEventListener("input",l):c.off(t,"paste keyup cut change",l))}}function o(t,e){var n=this,r=this.$watch(e,function(e){c.attr(t,"checked",!!e)},h),i=function(){var t=this.checked;e.set(n,t),r.last=t,n.$update()};return e.set&&c.on(t,"change",i),void 0===e.get(n)&&e.set(n,!!t.checked),function(){e.set&&c.off(t,"change",i)}}function a(t,e){var n=this,r=(this.$watch(e,function(e){e==t.value?t.checked=!0:t.checked=!1},h),function(){var t=this.value;e.set(n,t),n.$update()});return e.set&&c.on(t,"change",r),void 0===e.get(n)&&t.checked&&e.set(n,t.value),function(){e.set&&c.off(t,"change",r)}}var s,u=n(2),c=n(13),f=n(8),l=n(14).OPTIONS,h=l.STABLE,p={text:i,select:r,checkbox:o,radio:a};f.directive("r-model",{param:["throttle","lazy"],link:function(t,e,n,r){var i=t.tagName.toLowerCase(),o=i;return"input"===o?o=t.type||"text":"textarea"===o&&(o="text"),"string"==typeof e&&(e=this.$expression(e)),p[o]?p[o].call(this,t,e,r):"input"===i?p.text.call(this,t,e,r):void 0}})},function(t,e,n){function r(t){var e,n=[],r=0,i=o.noop,a={type:t,start:function(t){return e=o.uid(),"function"==typeof t&&(i=t),r>0?r=0:a.step(),a.compelete},compelete:function(){e=null,i&&i(),i=o.noop,r=0},step:function(){n[r]&&n[r](a.done.bind(a,e))},done:function(t){t===e&&(r<n.length-1?(r++,a.step()):a.compelete())},push:function(t){n.push(t)}};return a}function i(t,e){function n(t){l&&g.push(l),l=r(t)}function i(t,e){e&&t()}function a(t){return function(){t.onenter=null,t.onleave=null}}var s=this.constructor;o.isExpr(e)&&(e=e.get(this)),e=e.trim();for(var u,l,h,p,d,v,m=e.split(";"),g=[],y=[],E=0,x=m.length;x>E;E++)if(u=m[E],d=u.split(":"),h=d[0]&&d[0].trim(),p=d[1]&&d[1].trim(),h)if(h!==c)if(h!==f){var v=s.animation(h);if(!v||!l)throw Error(v?"you should start with `on` or `event` in animation":"undefined animator 【"+h+"】");l.push(v.call(this,{element:t,done:l.done,param:p}))}else n(p),"leave"===p?(t.onleave=l.start,y.push(a(t))):"enter"===p?(t.onenter=l.start,y.push(a(t))):"on"+p in t?y.push(this._handleEvent(t,p,l.start)):(this.$on(p,l.start),y.push(this.$off.bind(this,p,l.start)));else n("when"),this.$watch(p,i.bind(this,l.start));return y.length?function(){y.forEach(function(t){t()})}:void 0}var o=n(2),a=n(18),s=(n(13),n(8)),u=/\s+/,c="when",f="on";s._addProtoInheritCache("animation"),s.animation({wait:function(t){var e=parseInt(t.param)||0;return function(t){setTimeout(t,e)}},"class":function(t){var e=t.param.split(","),n=e[0]||"",r=parseInt(e[1])||1;return function(e){a.startClassAnimate(t.element,n,e,r)}},call:function(t){var e=this.$expression(t.param).get,n=this;return function(t){e(n),n.$update(),t()}},emit:function(t){var e=t.param,n=e.split(","),r=n[0]||"",i=n[1]?this.$expression(n[1]).get:null;if(!r)throw Error("you shoud specified a eventname in emit command");var o=this;return function(t){o.$emit(r,i?i(o):void 0),t()}},style:function(t){var e,n={},r=t.param,i=r.split(",");
	return i.forEach(function(t){if(t=t.trim()){var r=t.split(u),i=r.shift(),o=r.join(" ");if(!i||!o)throw Error("invalid style in command: style");n[i]=o,e=!0}}),function(r){e?a.startStyleAnimate(t.element,n,r):r()}}}),s.directive("r-animation",i),s.directive("r-anim",i)},function(t,e,n){function r(t){t.implement({$timeout:function(t,e){return e=e||0,setTimeout(function(){t.call(this),this.$update()}.bind(this),e)},$interval:function(t,e){return e=e||1e3/60,setInterval(function(){t.call(this),this.$update()}.bind(this),e)}})}var i=n(8);i.plugin("timeout",r),i.plugin("$timeout",r)}])});

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <h1>Test Fluex</h1>\r\n    {#list items as item}\r\n    <li>{item}</li>\r\n    {/list}\r\n    <button on-click={this.addItem()}>new Item</button>\r\n</div>"

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var AppDispatcher = __webpack_require__(5);

	var Action = {
	    addItem: function (data) {
	        AppDispatcher.dispatch({
	            actionName: 'ADD_ITEM',
	            msg: data
	        })
	    }
	};

	module.exports = Action;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Dispatcher = __webpack_require__(6).Dispatcher;
	var AppDispatcher = new Dispatcher();
	// var Page1Store = require('../stores/page1Storage');


	module.exports = AppDispatcher;



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(7);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(9);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var Regular = __webpack_require__(2);
	var AppDispatcher = __webpack_require__(5);
	var instance;
	var Store = Regular.extend({
	    items: [],
	    getAll: function(){
	        return this.items;
	    },
	    addNewItem: function(){
	        this.items.push("helloworld");

	        this.emitChange();
	    },
	    emitChange: function(){
	        // debugger;
	        this.$emit('add');
	    },
	    addListener: function(callback){
	        // debugger
	        this.$on('add', callback);
	    },
	    removeListener: function(){
	        
	    }
	});
	instance = new Store();
	AppDispatcher.register(function(action){
	    switch(action.actionName){
	        case 'ADD_ITEM':
	            // 注册事件的行为
	            instance.addNewItem();
	            break;
	        default:
	            break;
	    }
	});
	module.exports = instance;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var Regular = __webpack_require__(2);
	var tpl = __webpack_require__(12);
	var Page2Action = __webpack_require__(13);
	var Page2Store = __webpack_require__(14);

	var Page2 = Regular.extend({
	    template: tpl,
	    data:{
	        arr:[]
	    },
	    init: function(){
	        // 异步获取数据
	        Page2Action.getInitData({"url":'/getDates'});

	        // 传递给store数据更新之后的回调函数，更新页面
	        Page2Store.addListener(this._getData.bind(this));

	        // 传递给store数据删除时的回调函数
	        // Page2Store.addListenerDelete(this._getData.bind(this));
	    },
	    _getData: function(){
	        this.data.arr = Page2Store.getAll();
	        this.$update();
	    },
	    delete: function(id){
	        Page2Action.deleteItem(id);
	    }
	});

	module.exports = Page2;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <h1>Page2 Flux</h1>\r\n    {#list arr as item}\r\n        <li>{item} <span on-click={this.delete(item_index)}>删除</span></li>\r\n    {/list}\r\n</div>"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var AppDispatcher = __webpack_require__(5);
	var Action = {
	    getInitData: function(data){
	        AppDispatcher.dispatch({
	            actionName: 'GET_INIT_DATA',
	            data: data
	        });
	    },
	    deleteItem: function(id){
	        AppDispatcher.dispatch({
	            actionName: 'DELETE_ITEM',
	            id: id
	        })
	    }
	};

	module.exports = Action;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var Regular = __webpack_require__(2);
	var AppDispatcher = __webpack_require__(5);


	var instance;
	var Store2 = Regular.extend({
	    data: [],
	    getInitData: function(url){
	        var that = this;
	        var xhr = new XMLHttpRequest();
	        
	        xhr.open('GET', url, true);
	        xhr.onload = function(){
	            var txt = xhr.responseText;
	            // debugger;
	            
	            that.data = JSON.parse(txt).data;
	            that.emitDone();
	        }
	        xhr.send();
	    },
	    getAll: function(){
	        return this.data;
	    },
	    emitDone: function(){
	        this.$emit('done');
	    },
	    addListener: function(callback){
	        this.$on('done', callback);
	    },
	    deleteItem: function(id) {
	        this.data.splice(id, 1);
	        // 数据操作完之后，通知更新view, 回掉函数的方法
	        // this.emitDelete();
	        this.emitDone();
	    },
	    // emitDelete: function(){
	    //     this.$emit('delete');
	    // },
	    // addListenerDelete: function(callback){
	    //     // debugger
	    //     this.$on('delete', callback);
	    // }
	});

	instance = new Store2();
	AppDispatcher.register(function(action){
	    switch(action.actionName){
	        case 'GET_INIT_DATA':
	            // 注册事件的行为
	            instance.getInitData(action.data.url);
	            break;
	        case 'DELETE_ITEM':
	            instance.deleteItem(action.id);
	            break;
	        default:
	            break;
	    }
	});


	module.exports = instance;

/***/ }
/******/ ]);