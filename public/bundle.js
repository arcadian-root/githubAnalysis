/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./public/client/index.js */1);


/***/ },
/* 1 */
/*!********************************!*\
  !*** ./public/client/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _d = __webpack_require__(/*! ./../../lib/d3 */ 2);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _jquery = __webpack_require__(/*! jquery */ 3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _statChartBuilder = __webpack_require__(/*! ./../assets/statChartBuilder */ 4);
	
	var _statChartBuilder2 = _interopRequireDefault(_statChartBuilder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// mock data
	// arr[0]: average fork # (y)
	// arr[1]: followers # (x)
	var mockForkData = [[100, 300], [200, 500], [400, 100], [500, 1600], [1800, 1000], [500, 10100], [1500, 10500], [1300, 10200], [1200, 3000], [200, 10600], [500, 100], [50, 4000], [25, 10], [900, 17511], [50, 10000], [30, 11500], [2000, 10000], [2000, 10000], [2000, 10000], [2000, 100], [2000, 100], [2000, 1000], [2, 1], [4, 2], [6, 3], [8, 4], [10, 5], [1300, 18000]];
	
	(0, _statChartBuilder2.default)('d3Graph', 'graph1', mockForkData, 25000, 'Followers', 2000, 'Average Fork');
	
	(0, _statChartBuilder2.default)('d3Graph2', 'graph2', [[1, 2], [100, 200], [1000, 2000], [10000, 20000]], 30000, undefined, 15000);
	
	_jquery2.default.ajax({
	  method: 'GET',
	  url: 'https://api.github.com/search/users?q=followers:%3E700&sort=followers'
	}).done(function (data) {
	  var topUsers = [];
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = data.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var users = _step.value;
	
	      console.log(users.login);
	      _jquery2.default.ajax({
	        method: 'GET',
	        url: 'https://api.github.com/users/' + users.login
	      }).done(function (user) {
	        topUsers.push(user);
	        console.log(user.followers);
	        console.log(topUsers);
	      });
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	});

/***/ },
/* 2 */
/*!*******************!*\
  !*** ./lib/d3.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};!function(t,n){"object"==( false?"undefined":_typeof(exports))&&"undefined"!=typeof module?n(exports): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):n(t.d3={});}(undefined,function(t){"use strict";function n(t,n){return n>t?-1:t>n?1:t>=n?0:NaN;}function e(t){return 1===t.length&&(t=r(t)),{left:function left(n,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=n.length);i>r;){var a=r+i>>>1;t(n[a],e)<0?r=a+1:i=a;}return r;},right:function right(n,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=n.length);i>r;){var a=r+i>>>1;t(n[a],e)>0?i=a:r=a+1;}return r;}};}function r(t){return function(e,r){return n(t(e),r);};}function i(t,n){return t>n?-1:n>t?1:n>=t?0:NaN;}function a(t){return null===t?NaN:+t;}function o(t,n){var e,r,i=t.length,o=0,u=0,s=-1,c=0;if(1===arguments.length)for(;++s<i;){isNaN(e=a(t[s]))||(r=e-o,o+=r/++c,u+=r*(e-o));}else for(;++s<i;){isNaN(e=a(n(t[s],s,t)))||(r=e-o,o+=r/++c,u+=r*(e-o));}return c>1?u/(c-1):void 0;}function u(){var t=o.apply(this,arguments);return t?Math.sqrt(t):t;}function s(t,n){var e,r,i,a=-1,o=t.length;if(1===arguments.length){for(;++a<o;){if(null!=(r=t[a])&&r>=r){e=i=r;break;}}for(;++a<o;){null!=(r=t[a])&&(e>r&&(e=r),r>i&&(i=r));}}else{for(;++a<o;){if(null!=(r=n(t[a],a,t))&&r>=r){e=i=r;break;}}for(;++a<o;){null!=(r=n(t[a],a,t))&&(e>r&&(e=r),r>i&&(i=r));}}return[e,i];}function c(t){return function(){return t;};}function h(t){return t;}function f(t,n,e){(i=arguments.length)<3&&(e=1,2>i&&(n=t,t=0));for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),a=new Array(i);++r<i;){a[r]=t+r*e;}return a;}function l(t,n,e){var r=d(t,n,e);return f(Math.ceil(t/r)*r,Math.floor(n/r)*r+r/2,r);}function d(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),a=r/i;return a>=Io?i*=10:a>=Jo?i*=5:a>=Ro&&(i*=2),t>n?-i:i;}function _(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1;}function g(t){return+t;}function m(){function t(t){var i,a,o=t.length,u=new Array(o);for(i=0;o>i;++i){u[i]=+n(t[i],i,t);}var s=e(u),c=+s[0],h=+s[1],f=r(u,c,h);Array.isArray(f)||(f=l(c,h,+f));var d=f.length;for(i=0;d>i;++i){f[i]=+f[i];}for(;f[0]<=c;){f.shift(),--d;}for(;f[d-1]>=h;){f.pop(),--d;}var _,g=new Array(d+1);for(i=0;d>=i;++i){_=g[i]=[],_.x0=i>0?f[i-1]:c,_.x1=d>i?f[i]:h;}for(i=0;o>i;++i){a=u[i],a>=c&&h>=a&&g[Lo(f,a,0,d)].push(t[i]);}return g;}var n=h,e=s,r=_;return t.value=function(e){return arguments.length?(n="function"==typeof e?e:c(+e),t):n;},t.domain=function(n){return arguments.length?(e="function"==typeof n?n:c([+n[0],+n[1]]),t):e;},t.thresholds=function(n){return arguments.length?(r="function"==typeof n?n:c(Array.isArray(n)?Array.prototype.map.call(n,g):+n),t):r;},t;}function p(t,n,e){if(arguments.length<3&&(e=a),r=t.length){if((n=+n)<=0||2>r)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),u=+e(t[o],o,t),s=+e(t[o+1],o+1,t);return u+(s-u)*(i-o);}}function y(t,e,r){return t.sort(n),Math.ceil((r-e)/(2*(p(t,.75)-p(t,.25))*Math.pow(t.length,-1/3)));}function b(t,n,e){return Math.ceil((e-n)/(3.5*u(t)*Math.pow(t.length,-1/3)));}function v(t,n){var e,r,i=-1,a=t.length;if(1===arguments.length){for(;++i<a;){if(null!=(r=t[i])&&r>=r){e=r;break;}}for(;++i<a;){null!=(r=t[i])&&r>e&&(e=r);}}else{for(;++i<a;){if(null!=(r=n(t[i],i,t))&&r>=r){e=r;break;}}for(;++i<a;){null!=(r=n(t[i],i,t))&&r>e&&(e=r);}}return e;}function x(t,n){var e,r=0,i=t.length,o=-1,u=i;if(1===arguments.length)for(;++o<i;){isNaN(e=a(t[o]))?--u:r+=e;}else for(;++o<i;){isNaN(e=a(n(t[o],o,t)))?--u:r+=e;}return u?r/u:void 0;}function M(t,e){var r,i=[],o=t.length,u=-1;if(1===arguments.length)for(;++u<o;){isNaN(r=a(t[u]))||i.push(r);}else for(;++u<o;){isNaN(r=a(e(t[u],u,t)))||i.push(r);}return p(i.sort(n),.5);}function w(t){for(var n,e,r,i=t.length,a=-1,o=0;++a<i;){o+=t[a].length;}for(e=new Array(o);--i>=0;){for(r=t[i],n=r.length;--n>=0;){e[--o]=r[n];}}return e;}function T(t,n){var e,r,i=-1,a=t.length;if(1===arguments.length){for(;++i<a;){if(null!=(r=t[i])&&r>=r){e=r;break;}}for(;++i<a;){null!=(r=t[i])&&e>r&&(e=r);}}else{for(;++i<a;){if(null!=(r=n(t[i],i,t))&&r>=r){e=r;break;}}for(;++i<a;){null!=(r=n(t[i],i,t))&&e>r&&(e=r);}}return e;}function S(t){for(var n,e=0,r=t.length-1,i=t[0],a=new Array(0>r?0:r);r>e;){a[e]=[n=i,i=t[++e]];}return a;}function k(t,n){for(var e=n.length,r=new Array(e);e--;){r[e]=t[n[e]];}return r;}function N(t,e){if(r=t.length){var r,i,a=0,o=0,u=t[o];for(e||(e=n);++a<r;){(e(i=t[a],u)<0||0!==e(u,u))&&(u=i,o=a);}return 0===e(u,u)?o:void 0;}}function A(t,n,e){(a=arguments.length)<3&&(e=t.length,2>a&&(n=0));for(var r,i,a=e-n;a;){i=Math.random()*a--|0,r=t[a+n],t[a+n]=t[i+n],t[i+n]=r;}return t;}function C(t,n){var e,r=0,i=t.length,a=-1;if(1===arguments.length)for(;++a<i;){(e=+t[a])&&(r+=e);}else for(;++a<i;){(e=+n(t[a],a,t))&&(r+=e);}return r;}function D(t){if(!(i=t.length))return[];for(var n=-1,e=T(t,F),r=new Array(e);++n<e;){for(var i,a=-1,o=r[n]=new Array(i);++a<i;){o[a]=t[a][n];}}return r;}function F(t){return t.length;}function E(){return D(arguments);}function P(){}function O(t,n){var e=new P();if(t instanceof P)t.each(function(t,n){e.set(n,t);});else if(Array.isArray(t)){var r,i=-1,a=t.length;if(1===arguments.length)for(;++i<a;){e.set(i,t[i]);}else for(;++i<a;){e.set(n(r=t[i],i,t),r);}}else if(t)for(var o in t){e.set(o,t[o]);}return e;}function H(){function t(n,i,o,u){if(i>=a.length)return r?r(n):e?n.sort(e):n;for(var s,c,h,f=-1,l=n.length,d=a[i++],_=O(),g=o();++f<l;){(h=_.get(s=d(c=n[f])+""))?h.push(c):_.set(s,[c]);}return _.each(function(n,e){u(g,e,t(n,i,o,u));}),g;}function n(t,e){if(e>=a.length)return t;var r=[],i=o[e++];return t.each(function(t,i){r.push({key:i,values:n(t,e)});}),i?r.sort(function(t,n){return i(t.key,n.key);}):r;}var e,r,i,a=[],o=[];return i={object:function object(n){return t(n,0,j,Y);},map:function map(n){return t(n,0,q,z);},entries:function entries(e){return n(t(e,0,q,z),0);},key:function key(t){return a.push(t),i;},sortKeys:function sortKeys(t){return o[a.length-1]=t,i;},sortValues:function sortValues(t){return e=t,i;},rollup:function rollup(t){return r=t,i;}};}function j(){return{};}function Y(t,n,e){t[n]=e;}function q(){return O();}function z(t,n,e){t.set(n,e);}function L(){}function U(t,n){var e=new L();if(t instanceof L)t.each(function(t){e.add(t);});else if(t){var r,i=-1,a=t.length;if(1===arguments.length)for(;++i<a;){e.add(t[i]);}else for(;++i<a;){e.add(n(r=t[i],i,t));}}return e;}function I(t){var n=[];for(var e in t){n.push(e);}return n;}function J(t){var n=[];for(var e in t){n.push(t[e]);}return n;}function R(t){var n=[];for(var e in t){n.push({key:e,value:t[e]});}return n;}function B(t,n){var e=arguments.length;return e?1===e?(n=+t,t=0):(t=+t,n=+n-t):(t=0,n=1),function(){return Math.random()*n+t;};}function X(t,n){var e=arguments.length;return e?1===e?(t=+t,n=1):(t=+t,n=+n):(t=0,n=1),function(){var e,r,i;do{e=2*Math.random()-1,r=2*Math.random()-1,i=e*e+r*r;}while(!i||i>1);return t+n*e*Math.sqrt(-2*Math.log(i)/i);};}function W(){var t=X.apply(this,arguments);return function(){return Math.exp(t());};}function $(t){return function(){for(var n=0,e=0;t>e;++e){n+=Math.random();}return n;};}function V(t){var n=$(t);return function(){return n()/t;};}function Z(t){return function(){return-Math.log(1-Math.random())/t;};}function G(t,n){return function(e){return t(e,n);};}function K(t,n,e){return function(r){return t(r,n,e);};}function Q(t,n){return n=Wo.call(n),n[0]=null,function(e){return n[0]=e,t.apply(null,n);};}function tt(t,n,e){switch(arguments.length){case 1:return t;case 2:return G(t,n);case 3:return K(t,n,e);default:return Q(t,arguments);}}function nt(t){return+t;}function et(t){return t*t;}function rt(t){return t*(2-t);}function it(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2;}function at(t){return t*t*t;}function ot(t){return--t*t*t+1;}function ut(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2;}function st(t,n){return null==n&&(n=3),Math.pow(t,n);}function ct(t,n){return null==n&&(n=3),1-Math.pow(1-t,n);}function ht(t,n){return null==n&&(n=3),((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2;}function ft(t){return 1-Math.cos(t*Vo);}function lt(t){return Math.sin(t*Vo);}function dt(t){return(1-Math.cos($o*t))/2;}function _t(t){return Math.pow(2,10*t-10);}function gt(t){return 1-Math.pow(2,-10*t);}function mt(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2;}function pt(t){return 1-Math.sqrt(1-t*t);}function yt(t){return Math.sqrt(1- --t*t);}function bt(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2;}function vt(t){return 1-xt(1-t);}function xt(t){return Zo>t?au*t*t:Ko>t?au*(t-=Go)*t+Qo:nu>t?au*(t-=tu)*t+eu:au*(t-=ru)*t+iu;}function Mt(t){return((t*=2)<=1?1-xt(1-t):xt(t-1)+1)/2;}function wt(t,n){return n=null==n?1.70158:+n,t*t*((n+1)*t-n);}function Tt(t,n){return n=null==n?1.70158:+n,--t*t*((n+1)*t+n)+1;}function St(t,n){return n=null==n?1.70158:+n,((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2;}function kt(t,n,e){return n=null==n?1:Math.max(1,n),e=(null==e?.3:e)/ou,n*Math.pow(2,10*--t)*Math.sin((e*Math.asin(1/n)-t)/e);}function Nt(t,n,e){return n=null==n?1:Math.max(1,n),e=(null==e?.3:e)/ou,1-n*Math.pow(2,-10*t)*Math.sin((+t+e*Math.asin(1/n))/e);}function At(t,n,e){n=null==n?1:Math.max(1,n),e=(null==e?.3:e)/ou;var r=e*Math.asin(1/n);return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((r-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((r+t)/e))/2;}function Ct(){this._x0=this._y0=this._x1=this._y1=null,this._=[];}function Dt(){return new Ct();}function Ft(t){return function(){return t;};}function Et(t){return t.innerRadius;}function Pt(t){return t.outerRadius;}function Ot(t){return t.startAngle;}function Ht(t){return t.endAngle;}function jt(t){return t&&t.padAngle;}function Yt(t){return t>=1?du:-1>=t?-du:Math.asin(t);}function qt(t,n,e,r,i,a,o,u){var s=e-t,c=r-n,h=o-i,f=u-a,l=(h*(n-a)-f*(t-i))/(f*s-h*c);return[t+l*s,n+l*c];}function zt(t,n,e,r,i,a,o){var u=t-e,s=n-r,c=(o?a:-a)/Math.sqrt(u*u+s*s),h=c*s,f=-c*u,l=t+h,d=n+f,_=e+h,g=r+f,m=(l+_)/2,p=(d+g)/2,y=_-l,b=g-d,v=y*y+b*b,x=i-a,M=l*g-_*d,w=(0>b?-1:1)*Math.sqrt(Math.max(0,x*x*v-M*M)),T=(M*b-y*w)/v,S=(-M*y-b*w)/v,k=(M*b+y*w)/v,N=(-M*y+b*w)/v,A=T-m,C=S-p,D=k-m,F=N-p;return A*A+C*C>D*D+F*F&&(T=k,S=N),{cx:T,cy:S,x01:-h,y01:-f,x11:T*(i/x-1),y11:S*(i/x-1)};}function Lt(){function t(){var t,c,h=+n.apply(this,arguments),f=+e.apply(this,arguments),l=a.apply(this,arguments)-du,d=o.apply(this,arguments)-du,_=Math.abs(d-l),g=d>l;if(s||(s=t=Dt()),h>f&&(c=f,f=h,h=c),f>fu){if(_>_u-fu)s.moveTo(f*Math.cos(l),f*Math.sin(l)),s.arc(0,0,f,l,d,!g),h>fu&&(s.moveTo(h*Math.cos(d),h*Math.sin(d)),s.arc(0,0,h,d,l,g));else{var m=l,p=d,y=l,b=d,v=_,x=_,M=u.apply(this,arguments)/2,w=M>fu&&(i?+i.apply(this,arguments):Math.sqrt(h*h+f*f)),T=Math.min(Math.abs(f-h)/2,+r.apply(this,arguments)),S=T,k=T;if(w>fu){var N=Yt(w/h*Math.sin(M)),A=Yt(w/f*Math.sin(M));(v-=2*N)>fu?(N*=g?1:-1,y+=N,b-=N):(v=0,y=b=(l+d)/2),(x-=2*A)>fu?(A*=g?1:-1,m+=A,p-=A):(x=0,m=p=(l+d)/2);}var C=f*Math.cos(m),D=f*Math.sin(m),F=h*Math.cos(b),E=h*Math.sin(b);if(T>fu){var P=f*Math.cos(p),O=f*Math.sin(p),H=h*Math.cos(y),j=h*Math.sin(y);if(lu>_){var Y=v>fu?qt(C,D,H,j,P,O,F,E):[F,E],q=C-Y[0],z=D-Y[1],L=P-Y[0],U=O-Y[1],I=1/Math.sin(Math.acos((q*L+z*U)/(Math.sqrt(q*q+z*z)*Math.sqrt(L*L+U*U)))/2),J=Math.sqrt(Y[0]*Y[0]+Y[1]*Y[1]);S=Math.min(T,(h-J)/(I-1)),k=Math.min(T,(f-J)/(I+1));}}if(x>fu){if(k>fu){var R=zt(H,j,C,D,f,k,g),B=zt(P,O,F,E,f,k,g);s.moveTo(R.cx+R.x01,R.cy+R.y01),T>k?s.arc(R.cx,R.cy,k,Math.atan2(R.y01,R.x01),Math.atan2(B.y01,B.x01),!g):(s.arc(R.cx,R.cy,k,Math.atan2(R.y01,R.x01),Math.atan2(R.y11,R.x11),!g),s.arc(0,0,f,Math.atan2(R.cy+R.y11,R.cx+R.x11),Math.atan2(B.cy+B.y11,B.cx+B.x11),!g),s.arc(B.cx,B.cy,k,Math.atan2(B.y11,B.x11),Math.atan2(B.y01,B.x01),!g));}else s.moveTo(C,D),s.arc(0,0,f,m,p,!g);}else s.moveTo(C,D);if(h>fu&&v>fu){if(S>fu){var R=zt(F,E,P,O,h,-S,g),B=zt(C,D,H,j,h,-S,g);s.lineTo(R.cx+R.x01,R.cy+R.y01),T>S?s.arc(R.cx,R.cy,S,Math.atan2(R.y01,R.x01),Math.atan2(B.y01,B.x01),!g):(s.arc(R.cx,R.cy,S,Math.atan2(R.y01,R.x01),Math.atan2(R.y11,R.x11),!g),s.arc(0,0,h,Math.atan2(R.cy+R.y11,R.cx+R.x11),Math.atan2(B.cy+B.y11,B.cx+B.x11),g),s.arc(B.cx,B.cy,S,Math.atan2(B.y11,B.x11),Math.atan2(B.y01,B.x01),!g));}else s.arc(0,0,h,b,y,g);}else s.lineTo(F,E);}}else s.moveTo(0,0);return s.closePath(),t?(s=null,t+""||null):void 0;}var n=Et,e=Pt,r=Ft(0),i=null,a=Ot,o=Ht,u=jt,s=null,c=null;return t.centroid=function(){var t=(+n.apply(this,arguments)+ +e.apply(this,arguments))/2,r=(+a.apply(this,arguments)+ +o.apply(this,arguments))/2-lu/2;return[Math.cos(r)*t,Math.sin(r)*t];},t.innerRadius=function(e){return arguments.length?(n="function"==typeof e?e:Ft(+e),t):n;},t.outerRadius=function(n){return arguments.length?(e="function"==typeof n?n:Ft(+n),t):e;},t.cornerRadius=function(n){return arguments.length?(r="function"==typeof n?n:Ft(+n),t):r;},t.padRadius=function(n){return arguments.length?(i=null==n?null:"function"==typeof n?n:Ft(+n),t):i;},t.startAngle=function(n){return arguments.length?(a="function"==typeof n?n:Ft(+n),t):a;},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:Ft(+n),t):o;},t.padAngle=function(n){return arguments.length?(u="function"==typeof n?n:Ft(+n),t):u;},t.context=function(n){return arguments.length?(s=c=null==n?null:n,t):s;},t;}function Ut(t,n){return n.length<2?t:(n=gu.call(n),n[0]=null,function(e){return n[0]=e,t.apply(null,n);});}function It(t){this._context=t;}function Jt(t){return new It(t);}function Rt(t){return t[0];}function Bt(t){return t[1];}function Xt(){function t(t){var c,h,f,l,d,_=t.length,g=!1,m=new Array(_),p=new Array(_);for(o||(s=u(d=Dt())),c=0;_>=c;++c){if(!(_>c&&a(l=t[c],c,t))===g)if(g=!g)h=c,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),f=c-1;f>=h;--f){s.point(m[f],p[f]);}s.lineEnd(),s.areaEnd();}g&&(m[c]=+n(l,c,t),p[c]=+r(l,c,t),s.point(e?+e(l,c,t):m[c],i?+i(l,c,t):p[c]));}return d?(s=null,d+""||null):void 0;}var n=Rt,e=null,r=Ft(0),i=Bt,a=Ft(!0),o=null,u=Jt,s=null;return t.x=function(r){return arguments.length?(n="function"==typeof r?r:Ft(+r),e=null,t):n;},t.x0=function(e){return arguments.length?(n="function"==typeof e?e:Ft(+e),t):n;},t.x1=function(n){return arguments.length?(e=null==n?null:"function"==typeof n?n:Ft(+n),t):e;},t.y=function(n){return arguments.length?(r="function"==typeof n?n:Ft(+n),i=null,t):r;},t.y0=function(n){return arguments.length?(r="function"==typeof n?n:Ft(+n),t):r;},t.y1=function(n){return arguments.length?(i=null==n?null:"function"==typeof n?n:Ft(+n),t):i;},t.defined=function(n){return arguments.length?(a="function"==typeof n?n:Ft(!!n),t):a;},t.curve=function(n){return arguments.length?(u=Ut(n,arguments),null!=o&&(s=u(o)),t):u;},t.context=function(n){return arguments.length?(null==n?o=s=null:s=u(o=n),t):o;},t;}function Wt(){function t(t){var u,s,c,h=t.length,f=!1;for(i||(o=a(c=Dt())),u=0;h>=u;++u){!(h>u&&r(s=t[u],u,t))===f&&((f=!f)?o.lineStart():o.lineEnd()),f&&o.point(+n(s,u,t),+e(s,u,t));}return c?(o=null,c+""||null):void 0;}var n=Rt,e=Bt,r=Ft(!0),i=null,a=Jt,o=null;return t.x=function(e){return arguments.length?(n="function"==typeof e?e:Ft(+e),t):n;},t.y=function(n){return arguments.length?(e="function"==typeof n?n:Ft(+n),t):e;},t.defined=function(n){return arguments.length?(r="function"==typeof n?n:Ft(!!n),t):r;},t.curve=function(n){return arguments.length?(a=Ut(n,arguments),null!=i&&(o=a(i)),t):a;},t.context=function(n){return arguments.length?(null==n?i=o=null:o=a(i=n),t):i;},t;}function $t(t,n){return t>n?-1:n>t?1:n>=t?0:NaN;}function Vt(t){return t;}function Zt(){function t(t){for(var u,s,c=t.length,h=0,f=new Array(c),l=new Array(c),d=+i.apply(this,arguments),_=Math.min(_u,Math.max(-_u,a.apply(this,arguments)-d)),g=Math.min(Math.abs(_)/c,o.apply(this,arguments)),m=g*(0>_?-1:1),p=0;c>p;++p){(s=l[f[p]=p]=+n(t[p],p,t))>0&&(h+=s);}null!=e?f.sort(function(t,n){return e(l[t],l[n]);}):null!==r&&f.sort(function(n,e){return r(t[n],t[e]);});for(var y,p=0,b=h?(_-c*m)/h:0;c>p;++p,d=u){y=f[p],s=l[y],u=d+(s>0?s*b:0)+m,l[y]={data:t[y],index:p,value:s,startAngle:d,endAngle:u,padAngle:g};}return l;}var n=Vt,e=$t,r=null,i=Ft(0),a=Ft(_u),o=Ft(0);return t.value=function(e){return arguments.length?(n="function"==typeof e?e:Ft(+e),t):n;},t.sortValues=function(n){return arguments.length?(e=n,r=null,t):e;},t.sort=function(n){return arguments.length?(r=n,e=null,t):r;},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:Ft(+n),t):i;},t.endAngle=function(n){return arguments.length?(a="function"==typeof n?n:Ft(+n),t):a;},t.padAngle=function(n){return arguments.length?(o="function"==typeof n?n:Ft(+n),t):o;},t;}function Gt(t){this._curve=t;}function Kt(t,n){function e(n){return new Gt(t(n));}return t=Ut(t,n),e._curve=t,e;}function Qt(){var t=Xt(),n=t.curve;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.curve=function(t){return arguments.length?n(Kt(t,arguments)):n()._curve;},t.curve(Jt);}function tn(){var t=Wt(),n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(Kt(t,arguments)):n()._curve;},t.curve(Jt);}function nn(){function t(){var t;return r||(r=t=Dt()),n.apply(this,arguments).draw(r,+e.apply(this,arguments)),t?(r=null,t+""||null):void 0;}var n=Ft(Pu),e=Ft(64),r=null;return t.type=function(e){return arguments.length?(n="function"==typeof e?e:Ft(e),t):n;},t.size=function(n){return arguments.length?(e="function"==typeof n?n:Ft(+n),t):e;},t.context=function(n){return arguments.length?(r=null==n?null:n,t):r;},t;}function en(){}function rn(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6);}function an(t){this._context=t;}function on(t){return new an(t);}function un(t){this._context=t;}function sn(t){return new un(t);}function cn(t){this._context=t;}function hn(t){return new cn(t);}function fn(t,n){this._basis=on(t),this._beta=n;}function ln(t,n){return null==n?new fn(t,.85):1===(n=+n)?on(t):new fn(t,n);}function dn(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2);}function _n(t,n){this._context=t,this._k=n;}function gn(t,n){return new _n(t,(null==n?1:1-n)/6);}function mn(t,n){this._context=t,this._k=n;}function pn(t,n){return new mn(t,(null==n?1:1-n)/6);}function yn(t,n){this._context=t,this._k=n;}function bn(t,n){return new yn(t,(null==n?1:1-n)/6);}function vn(t,n,e){var r=t._x1,i=t._y1,a=t._x2,o=t._y2;if(t._l01_a>fu){var u=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,s=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*u-t._x0*t._l12_2a+t._x2*t._l01_2a)/s,i=(i*u-t._y0*t._l12_2a+t._y2*t._l01_2a)/s;}if(t._l23_a>fu){var c=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,h=3*t._l23_a*(t._l23_a+t._l12_a);a=(a*c+t._x1*t._l23_2a-n*t._l12_2a)/h,o=(o*c+t._y1*t._l23_2a-e*t._l12_2a)/h;}t._context.bezierCurveTo(r,i,a,o,t._x2,t._y2);}function xn(t,n){this._context=t,this._alpha=n;}function Mn(t,n){return(n=null==n?.5:+n)?new xn(t,n):gn(t,0);}function wn(t,n){this._context=t,this._alpha=n;}function Tn(t,n){return(n=null==n?.5:+n)?new wn(t,n):pn(t,0);}function Sn(t,n){this._context=t,this._alpha=n;}function kn(t,n){return(n=null==n?.5:+n)?new Sn(t,n):bn(t,0);}function Nn(t){this._context=t;}function An(t){return new Nn(t);}function Cn(t){return 0>t?-1:1;}function Dn(t,n,e){var r=t._x1-t._x0,i=n-t._x1,a=(t._y1-t._y0)/r,o=(e-t._y1)/i,u=(a*i+o*r)/(r+i);return(Cn(a)+Cn(o))*Math.min(Math.abs(a),Math.abs(o),.5*Math.abs(u))||0;}function Fn(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n;}function En(t,n,e){var r=t._x0,i=t._y0,a=t._x1,o=t._y1,u=(a-r)/3;t._context.bezierCurveTo(r+u,i+u*n,a-u,o-u*e,a,o);}function Pn(t){this._context=t;}function On(t){return new Pn(t);}function Hn(t){this._context=t;}function jn(t){var n,e,r=t.length-1,i=new Array(r),a=new Array(r),o=new Array(r);for(i[0]=0,a[0]=2,o[0]=t[0]+2*t[1],n=1;r-1>n;++n){i[n]=1,a[n]=4,o[n]=4*t[n]+2*t[n+1];}for(i[r-1]=2,a[r-1]=7,o[r-1]=8*t[r-1]+t[r],n=1;r>n;++n){e=i[n]/a[n-1],a[n]-=e,o[n]-=e*o[n-1];}for(i[r-1]=o[r-1]/a[r-1],n=r-2;n>=0;--n){i[n]=(o[n]-i[n+1])/a[n];}for(a[r-1]=(t[r]+i[r-1])/2,n=0;r-1>n;++n){a[n]=2*t[n+1]-i[n+1];}return[i,a];}function Yn(t){return new Hn(t);}function qn(t,n){this._context=t,this._t=n;}function zn(t){return new qn(t,.5);}function Ln(t){return new qn(t,0);}function Un(t){return new qn(t,1);}function In(t,n){if((r=t.length)>1)for(var e,r,i=1,a=t[n[0]],o=a.length;r>i;++i){e=a,a=t[n[i]];for(var u=0;o>u;++u){a[u][1]+=a[u][0]=isNaN(e[u][1])?e[u][0]:e[u][1];}}}function Jn(t){for(var n=t.length,e=new Array(n);--n>=0;){e[n]=n;}return e;}function Rn(t,n){return t[n];}function Bn(){function t(t){for(var a=n.apply(this,arguments),o=t.length,u=a.length,s=new Array(u),c=0;u>c;++c){for(var h,f=a[c],l=s[c]=new Array(o),d=0;o>d;++d){l[d]=h=[0,+i(t[d],f,d,t)],h.data=t[d];}l.key=f;}for(var c=0,_=e(s);u>c;++c){s[_[c]].index=c;}return r(s,_),s;}var n=Ft([]),e=Jn,r=In,i=Rn;return t.keys=function(e){return arguments.length?(n="function"==typeof e?e:Ft(Hu.call(e)),t):n;},t.value=function(n){return arguments.length?(i="function"==typeof n?n:Ft(+n),t):i;},t.order=function(n){return arguments.length?(e=null==n?orderDefault:"function"==typeof n?n:Ft(Hu.call(n)),t):e;},t.offset=function(n){return arguments.length?(r=null==n?offsetZero:n,t):r;},t;}function Xn(t,n){if((e=t.length)>0){for(var e,r=0,i=t[0].length;i>r;++r){for(var a=0,o=0;e>a;++a){o+=t[a][r][1]||0;}if(o)for(var a=0;e>a;++a){t[a][r][1]/=o;}}In(t,n);}}function Wn(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],a=i.length;a>r;++r){for(var o=0,u=0;e>o;++o){u+=t[o][r][1]||0;}i[r][1]+=i[r][0]=-u/2;}In(t,n);}}function $n(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,a=0,o=1;r>o;++o){for(var u=0,s=0,c=0;i>u;++u){for(var h=t[n[u]],f=h[o][1]||0,l=h[o-1][1]||0,d=(f-l)/2,_=0;u>_;++_){var g=t[n[_]],m=g[o][1]||0,p=g[o-1][1]||0;d+=m-p;}s+=f,c+=d*f;}e[o-1][1]+=e[o-1][0]=a,s&&(a-=c/s);}e[o-1][1]+=e[o-1][0]=a,In(t,n);}}function Vn(t){var n=t.map(Zn);return Jn(t).sort(function(t,e){return n[t]-n[e];});}function Zn(t){for(var n,e=0,r=-1,i=t.length;++r<i;){(n=+t[r][1])&&(e+=n);}return e;}function Gn(t){return Vn(t).reverse();}function Kn(t){var n,e,r=t.length,i=t.map(Zn),a=Jn(t).sort(function(t,n){return i[n]-i[t];}),o=0,u=0,s=[],c=[];for(n=0;r>n;++n){e=a[n],u>o?(o+=i[e],s.push(e)):(u+=i[e],c.push(e));}return c.reverse().concat(s);}function Qn(t){return Jn(t).reverse();}function te(){}function ne(t){var n;return t=(t+"").trim().toLowerCase(),(n=qu.exec(t))?(n=parseInt(n[1],16),new ie(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n)):(n=zu.exec(t))?ee(parseInt(n[1],16)):(n=Lu.exec(t))?new ie(n[1],n[2],n[3]):(n=Uu.exec(t))?new ie(255*n[1]/100,255*n[2]/100,255*n[3]/100):(n=Iu.exec(t))?new oe(n[1],n[2]/100,n[3]/100):Ju.hasOwnProperty(t)?ee(Ju[t]):null;}function ee(t){return new ie(t>>16&255,t>>8&255,255&t);}function re(t,n,e){return 1===arguments.length&&(t instanceof te||(t=ne(t)),t?(t=t.rgb(),e=t.b,n=t.g,t=t.r):t=n=e=NaN),new ie(t,n,e);}function ie(t,n,e){this.r=+t,this.g=+n,this.b=+e;}function ae(t,n,e){if(1===arguments.length)if(t instanceof oe)e=t.l,n=t.s,t=t.h;else if(t instanceof te||(t=ne(t)),t){if(t instanceof oe)return t;t=t.rgb();var r=t.r/255,i=t.g/255,a=t.b/255,o=Math.min(r,i,a),u=Math.max(r,i,a),s=u-o;e=(u+o)/2,s?(n=.5>e?s/(u+o):s/(2-u-o),t=r===u?(i-a)/s+6*(a>i):i===u?(a-r)/s+2:(r-i)/s+4,t*=60):(t=NaN,n=e>0&&1>e?0:t);}else t=n=e=NaN;return new oe(t,n,e);}function oe(t,n,e){this.h=+t,this.s=+n,this.l=+e;}function ue(t,n,e){return 255*(60>t?n+(e-n)*t/60:180>t?e:240>t?n+(e-n)*(240-t)/60:n);}function se(t,n,e){if(1===arguments.length)if(t instanceof ce)e=t.b,n=t.a,t=t.l;else if(t instanceof ge){var r=t.h*Xu;e=Math.sin(r)*t.c,n=Math.cos(r)*t.c,t=t.l;}else{t instanceof ie||(t=re(t));var i=de(t.r),a=de(t.g),e=de(t.b),o=he((.4124564*i+.3575761*a+.1804375*e)/Vu),u=he((.2126729*i+.7151522*a+.072175*e)/Zu),s=he((.0193339*i+.119192*a+.9503041*e)/Gu);e=200*(u-s),n=500*(o-u),t=116*u-16;}return new ce(t,n,e);}function ce(t,n,e){this.l=+t,this.a=+n,this.b=+e;}function he(t){return t>ns?Math.pow(t,1/3):t/ts+Ku;}function fe(t){return t>Qu?t*t*t:ts*(t-Ku);}function le(t){return 255*(.0031308>=t?12.92*t:1.055*Math.pow(t,1/2.4)-.055);}function de(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);}function _e(t,n,e){return 1===arguments.length&&(t instanceof ge?(e=t.l,n=t.c,t=t.h):(t instanceof ce||(t=se(t)),e=t.l,n=Math.sqrt(t.a*t.a+t.b*t.b),t=Math.atan2(t.b,t.a)*Wu,0>t&&(t+=360))),new ge(t,n,e);}function ge(t,n,e){this.h=+t,this.c=+n,this.l=+e;}function me(t,n,e){if(1===arguments.length)if(t instanceof pe)e=t.l,n=t.s,t=t.h;else{t instanceof ie||(t=re(t));var r=t.r/255,i=t.g/255,a=t.b/255;e=(fs*a+cs*r-hs*i)/(fs+cs-hs);var o=a-e,u=(ss*(i-e)-os*o)/us;n=Math.sqrt(u*u+o*o)/(ss*e*(1-e)),t=n?Math.atan2(u,o)*Wu-120:NaN,0>t&&(t+=360);}return new pe(t,n,e);}function pe(t,n,e){this.h=+t,this.s=+n,this.l=+e;}function ye(t,n){t=re(t),n=re(n);var e=t.r,r=t.g,i=t.b,a=n.r-e,o=n.g-r,u=n.b-i;return function(n){return t.r=e+a*n,t.g=r+o*n,t.b=i+u*n,t+"";};}function be(t,n){var e,r=[],i=[],a=t?t.length:0,o=n?n.length:0,u=Math.min(a,o);for(e=0;u>e;++e){r.push(Se(t[e],n[e]));}for(;a>e;++e){i[e]=t[e];}for(;o>e;++e){i[e]=n[e];}return function(t){for(e=0;u>e;++e){i[e]=r[e](t);}return i;};}function ve(t,n){return t=+t,n-=t,function(e){return t+n*e;};}function xe(t,n){var e,r={},i={};(null===t||"object"!=(typeof t==="undefined"?"undefined":_typeof(t)))&&(t={}),(null===n||"object"!=(typeof n==="undefined"?"undefined":_typeof(n)))&&(n={});for(e in t){e in n?r[e]=Se(t[e],n[e]):i[e]=t[e];}for(e in n){e in t||(i[e]=n[e]);}return function(t){for(e in r){i[e]=r[e](t);}return i;};}function Me(t){return function(){return t;};}function we(t){return function(n){return t(n)+"";};}function Te(t,n){var e,r,i,a=_s.lastIndex=gs.lastIndex=0,o=-1,u=[],s=[];for(t+="",n+="";(e=_s.exec(t))&&(r=gs.exec(n));){(i=r.index)>a&&(i=n.slice(a,i),u[o]?u[o]+=i:u[++o]=i),(e=e[0])===(r=r[0])?u[o]?u[o]+=r:u[++o]=r:(u[++o]=null,s.push({i:o,x:ve(e,r)})),a=gs.lastIndex;}return a<n.length&&(i=n.slice(a),u[o]?u[o]+=i:u[++o]=i),u.length<2?s[0]?we(s[0].x):Me(n):(n=s.length,function(t){for(var e,r=0;n>r;++r){u[(e=s[r]).i]=e.x(t);}return u.join("");});}function Se(t,n){for(var e,r=ms.length;--r>=0&&!(e=ms[r](t,n));){}return e;}function ke(t,n){return t=+t,n-=t,function(e){return Math.round(t+n*e);};}function Ne(t){ds||(ds=document.createElementNS("http://www.w3.org/2000/svg","g")),t&&(ds.setAttribute("transform",t),n=ds.transform.baseVal.consolidate());var n,e=n?n.matrix:ys,r=[e.a,e.b],i=[e.c,e.d],a=Ce(r),o=Ae(r,i),u=Ce(De(i,r,-o))||0;r[0]*i[1]<i[0]*r[1]&&(r[0]*=-1,r[1]*=-1,a*=-1,o*=-1),this.rotate=(a?Math.atan2(r[1],r[0]):Math.atan2(-i[0],i[1]))*ps,this.translate=[e.e,e.f],this.scale=[a,u],this.skew=u?Math.atan2(o,u)*ps:0;}function Ae(t,n){return t[0]*n[0]+t[1]*n[1];}function Ce(t){var n=Math.sqrt(Ae(t,t));return n&&(t[0]/=n,t[1]/=n),n;}function De(t,n,e){return t[0]+=e*n[0],t[1]+=e*n[1],t;}function Fe(t){return t.length?t.pop()+",":"";}function Ee(t,n,e,r){if(t[0]!==n[0]||t[1]!==n[1]){var i=e.push("translate(",null,",",null,")");r.push({i:i-4,x:ve(t[0],n[0])},{i:i-2,x:ve(t[1],n[1])});}else(n[0]||n[1])&&e.push("translate("+n+")");}function Pe(t,n,e,r){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),r.push({i:e.push(Fe(e)+"rotate(",null,")")-2,x:ve(t,n)})):n&&e.push(Fe(e)+"rotate("+n+")");}function Oe(t,n,e,r){t!==n?r.push({i:e.push(Fe(e)+"skewX(",null,")")-2,x:ve(t,n)}):n&&e.push(Fe(e)+"skewX("+n+")");}function He(t,n,e,r){if(t[0]!==n[0]||t[1]!==n[1]){var i=e.push(Fe(e)+"scale(",null,",",null,")");r.push({i:i-4,x:ve(t[0],n[0])},{i:i-2,x:ve(t[1],n[1])});}else(1!==n[0]||1!==n[1])&&e.push(Fe(e)+"scale("+n+")");}function je(t,n){var e=[],r=[];return t=new Ne(t),n=new Ne(n),Ee(t.translate,n.translate,e,r),Pe(t.rotate,n.rotate,e,r),Oe(t.skew,n.skew,e,r),He(t.scale,n.scale,e,r),t=n=null,function(t){for(var n,i=-1,a=r.length;++i<a;){e[(n=r[i]).i]=n.x(t);}return e.join("");};}function Ye(t){return((t=Math.exp(t))+1/t)/2;}function qe(t){return((t=Math.exp(t))-1/t)/2;}function ze(t){return((t=Math.exp(2*t))-1)/(t+1);}function Le(t,n){var e,r,i=t[0],a=t[1],o=t[2],u=n[0],s=n[1],c=n[2],h=u-i,f=s-a,l=h*h+f*f;if(Ms>l)r=Math.log(c/o)/bs,e=function e(t){return[i+t*h,a+t*f,o*Math.exp(bs*t*r)];};else{var d=Math.sqrt(l),_=(c*c-o*o+xs*l)/(2*o*vs*d),g=(c*c-o*o-xs*l)/(2*c*vs*d),m=Math.log(Math.sqrt(_*_+1)-_),p=Math.log(Math.sqrt(g*g+1)-g);r=(p-m)/bs,e=function e(t){var n=t*r,e=Ye(m),u=o/(vs*d)*(e*ze(bs*n+m)-qe(m));return[i+u*h,a+u*f,o*e/Ye(bs*n+m)];};}return e.duration=1e3*r,e;}function Ue(t,n){var e=t-n;return e>180||-180>e?e-360*Math.round(e/360):e;}function Ie(t,n){t=ae(t),n=ae(n);var e=isNaN(t.h)?n.h:t.h,r=isNaN(t.s)?n.s:t.s,i=t.l,a=isNaN(n.h)?0:Ue(n.h,e),o=isNaN(n.s)?0:n.s-r,u=n.l-i;return function(n){return t.h=e+a*n,t.s=r+o*n,t.l=i+u*n,t+"";};}function Je(t,n){t=ae(t),n=ae(n);var e=isNaN(t.h)?n.h:t.h,r=isNaN(t.s)?n.s:t.s,i=t.l,a=isNaN(n.h)?0:n.h-e,o=isNaN(n.s)?0:n.s-r,u=n.l-i;return function(n){return t.h=e+a*n,t.s=r+o*n,t.l=i+u*n,t+"";};}function Re(t,n){t=se(t),n=se(n);var e=t.l,r=t.a,i=t.b,a=n.l-e,o=n.a-r,u=n.b-i;return function(n){return t.l=e+a*n,t.a=r+o*n,t.b=i+u*n,t+"";};}function Be(t,n){t=_e(t),n=_e(n);var e=isNaN(t.h)?n.h:t.h,r=isNaN(t.c)?n.c:t.c,i=t.l,a=isNaN(n.h)?0:Ue(n.h,e),o=isNaN(n.c)?0:n.c-r,u=n.l-i;return function(n){return t.h=e+a*n,t.c=r+o*n,t.l=i+u*n,t+"";};}function Xe(t,n){t=_e(t),n=_e(n);var e=isNaN(t.h)?n.h:t.h,r=isNaN(t.c)?n.c:t.c,i=t.l,a=isNaN(n.h)?0:n.h-e,o=isNaN(n.c)?0:n.c-r,u=n.l-i;return function(n){return t.h=e+a*n,t.c=r+o*n,t.l=i+u*n,t+"";};}function We(t,n,e){arguments.length<3&&(e=1),t=me(t),n=me(n);var r=isNaN(t.h)?n.h:t.h,i=isNaN(t.s)?n.s:t.s,a=t.l,o=isNaN(n.h)?0:Ue(n.h,r),u=isNaN(n.s)?0:n.s-i,s=n.l-a;return function(n){return t.h=r+o*n,t.s=i+u*n,t.l=a+s*Math.pow(n,e),t+"";};}function $e(t,n,e){arguments.length<3&&(e=1),t=me(t),n=me(n);var r=isNaN(t.h)?n.h:t.h,i=isNaN(t.s)?n.s:t.s,a=t.l,o=isNaN(n.h)?0:n.h-r,u=isNaN(n.s)?0:n.s-i,s=n.l-a;return function(n){return t.h=r+o*n,t.s=i+u*n,t.l=a+s*Math.pow(n,e),t+"";};}function Ve(t,n){return n=ws.call(n),n[0]=null,n.unshift(null),function(e,r){return n[0]=e,n[1]=r,t.apply(null,n);};}function Ze(t){return 1===arguments.length?t:Ve(t,arguments);}function Ge(){return new Ke(arguments);}function Ke(t){function n(t){var n=(t+="").indexOf("."),e=t;if(n>=0?t=t.slice(0,n):e+=".",t&&!o.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e};}function e(t){return function(){for(var n,e,r=o[t],i=-1,a=r.length;++i<a;){(e=(n=r[i]).value)&&e.apply(this,arguments);}return s;};}var r,i=-1,a=t.length,o={},u={},s=this;for(s.on=function(t,e){if(t=n(t),arguments.length<2)return(e=u[t.name])&&e.value;if(t.type){var r,i=o[t.type],a=u[t.name];a&&(a.value=null,r=i.indexOf(a),o[t.type]=i=i.slice(0,r).concat(i.slice(r+1)),delete u[t.name]),e&&(e={value:e},u[t.name]=e,i.push(e));}else if(null==e)for(var c in o){if(e=u[c+t.name]){e.value=null;var i=o[c],r=i.indexOf(e);o[c]=i.slice(0,r).concat(i.slice(r+1)),delete u[e.name];}}return s;};++i<a;){if(r=t[i]+"",!r||r in s)throw new Error("illegal or duplicate type: "+r);o[r]=[],s[r]=e(r);}}function Qe(t){return new rr(t);}function tr(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]";}).join(",")+"}");}function nr(t,n){var e=tr(t);return function(r,i){return n(e(r),i,t);};}function er(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t){r in n||e.push(n[r]=r);}}),e;}function rr(t){function n(n){return n.map(e).join(t);}function e(t){return r.test(t)?'"'+t.replace(/\"/g,'""')+'"':t;}var r=new RegExp('["'+t+"\n]"),i=t.charCodeAt(0);this.parse=function(t,n){var e,r,i=this.parseRows(t,function(t,i){return e?e(t,i-1):(r=t,void(e=n?nr(t,n):tr(t)));});return i.columns=r,i;},this.parseRows=function(t,n){function e(){if(h>=c)return u;if(a)return a=!1,o;var n=h;if(34===t.charCodeAt(n)){for(var e=n;e++<c;){if(34===t.charCodeAt(e)){if(34!==t.charCodeAt(e+1))break;++e;}}h=e+2;var r=t.charCodeAt(e+1);return 13===r?(a=!0,10===t.charCodeAt(e+2)&&++h):10===r&&(a=!0),t.slice(n+1,e).replace(/""/g,'"');}for(;c>h;){var r=t.charCodeAt(h++),s=1;if(10===r)a=!0;else if(13===r)a=!0,10===t.charCodeAt(h)&&(++h,++s);else if(r!==i)continue;return t.slice(n,h-s);}return t.slice(n);}for(var r,a,o={},u={},s=[],c=t.length,h=0,f=0;(r=e())!==u;){for(var l=[];r!==o&&r!==u;){l.push(r),r=e();}n&&null==(l=n(l,f++))||s.push(l);}return s;},this.format=function(n,r){return arguments.length<2&&(r=er(n)),[r.map(e).join(t)].concat(n.map(function(n){return r.map(function(t){return e(n[t]);}).join(t);})).join("\n");},this.formatRows=function(t){return t.map(n).join("\n");};}function ir(t,n){function e(){var t,n=c.status;if(!n&&or(c)||n>=200&&300>n||304===n){if(a)try{t=a.call(r,c);}catch(e){return void u.error.call(r,e);}else t=c;u.load.call(r,t);}else u.error.call(r,c);}var r,i,a,o,u=Ge("beforesend","progress","load","error"),s=O(),c=new XMLHttpRequest(),h=0;return"undefined"==typeof XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(t)||(c=new XDomainRequest()),"onload"in c?c.onload=c.onerror=c.ontimeout=e:c.onreadystatechange=function(){c.readyState>3&&e();},c.onprogress=function(t){u.progress.call(r,t);},r={header:function header(t,n){return t=(t+"").toLowerCase(),arguments.length<2?s.get(t):(null==n?s.remove(t):s.set(t,n+""),r);},mimeType:function mimeType(t){return arguments.length?(i=null==t?null:t+"",r):i;},responseType:function responseType(t){return arguments.length?(o=t,r):o;},timeout:function timeout(t){return arguments.length?(h=+t,r):h;},response:function response(t){return a=t,r;},get:function get(t,n){return r.send("GET",t,n);},post:function post(t,n){return r.send("POST",t,n);},send:function send(n,e,a){return a||"function"!=typeof e||(a=e,e=null),a&&1===a.length&&(a=ar(a)),c.open(n,t,!0),null==i||s.has("accept")||s.set("accept",i+",*/*"),c.setRequestHeader&&s.each(function(t,n){c.setRequestHeader(n,t);}),null!=i&&c.overrideMimeType&&c.overrideMimeType(i),null!=o&&(c.responseType=o),h>0&&(c.timeout=h),a&&r.on("error",a).on("load",function(t){a(null,t);}),u.beforesend.call(r,c),c.send(null==e?null:e),r;},abort:function abort(){return c.abort(),r;},on:function on(){var t=u.on.apply(u,arguments);return t===u?r:t;}},n?r.get(n):r;}function ar(t){return function(n,e){t(null==n?e:null);};}function or(t){var n=t.responseType;return n&&"text"!==n?t.response:t.responseText;}function ur(t,n){return function(e,r){var i=ir(e).mimeType(t).response(n);return r?i.get(r):i;};}function sr(t,n){return function(e,r,i){arguments.length<3&&(i=r,r=null);var a=ir(e).mimeType(t);return a.row=function(t){return arguments.length?a.response(cr(n,r=t)):r;},a.row(r),i?a.get(i):a;};}function cr(t,n){return function(e){return t.parse(e.responseText,n);};}function hr(t,n,e){this.id=++js,this.restart(t,n,e);}function fr(t,n,e){return new hr(t,n,e);}function lr(t){t=null==t?Date.now():+t,++Os;try{for(var n,e=Ts;e;){t>=e.time&&(n=e.callback)(t-e.time,t),e=e.next;}}finally{--Os;}}function dr(){Os=Hs=0;try{lr();}finally{for(var t,n=Ts,e=1/0;n;){n.callback?(e>n.time&&(e=n.time),n=(t=n).next):n=t?t.next=n.next:Ts=n.next;}Ss=t,_r(e);}}function _r(t){if(!Os){Hs&&(Hs=clearTimeout(Hs));var n=t-Date.now();n>24?1/0>t&&(Hs=setTimeout(dr,n)):(Os=1,qs(dr));}}function gr(t,n,e,r){function i(n){return t(n=new Date(+n)),n;}return i.floor=i,i.round=function(e){var r=new Date(+e),i=new Date(e-1);return t(r),t(i),n(i,1),i-e>e-r?r:i;},i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),e;},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t;},i.range=function(e,r,i){var a=[];if(e=new Date(e-1),r=new Date(+r),i=null==i?1:Math.floor(i),!(r>e&&i>0))return a;for(n(e,1),t(e),r>e&&a.push(new Date(+e));n(e,i),t(e),r>e;){a.push(new Date(+e));}return a;},i.filter=function(e){return gr(function(n){for(;t(n),!e(n);){n.setTime(n-1);}},function(t,r){for(;--r>=0;){for(;n(t,1),!e(t);){}}});},e&&(i.count=function(n,r){return zs.setTime(+n),Ls.setTime(+r),t(zs),t(Ls),Math.floor(e(zs,Ls));},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t===0;}:function(n){return i.count(0,n)%t===0;}):i:null;}),i;}function mr(t){return gr(function(n){n.setHours(0,0,0,0),n.setDate(n.getDate()-(n.getDay()+7-t)%7);},function(t,n){t.setDate(t.getDate()+7*n);},function(t,n){return(n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/6048e5;});}function pr(t){return gr(function(n){n.setUTCHours(0,0,0,0),n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7);},function(t,n){t.setUTCDate(t.getUTCDate()+7*n);},function(t,n){return(n-t)/6048e5;});}function yr(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)];}function br(t){return t=yr(Math.abs(t)),t?t[1]:NaN;}function vr(t,n){return function(e,r){for(var i=e.length,a=[],o=0,u=t[0],s=0;i>0&&u>0&&(s+u+1>r&&(u=Math.max(1,r-s)),a.push(e.substring(i-=u,i+u)),!((s+=u+1)>r));){u=t[o=(o+1)%t.length];}return a.reverse().join(n);};}function xr(t,n){var e=yr(t,n);if(!e)return t+"";var r=e[0],i=e[1],a=i-(Is=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,o=r.length;return a===o?r:a>o?r+new Array(a-o+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+yr(t,Math.max(0,n+a-1))[0];}function Mr(t,n){var e=yr(t,n);if(!e)return t+"";var r=e[0],i=e[1];return 0>i?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0");}function wr(t,n){t=t.toPrecision(n);t:for(var e,r=t.length,i=1,a=-1;r>i;++i){switch(t[i]){case".":a=e=i;break;case"0":0===a&&(a=i),e=i;break;case"e":break t;default:a>0&&(a=0);}}return a>0?t.slice(0,a)+t.slice(e+1):t;}function Tr(t){return new Sr(t);}function Sr(t){if(!(n=Wc.exec(t)))throw new Error("invalid format: "+t);var n,e=n[1]||" ",r=n[2]||">",i=n[3]||"-",a=n[4]||"",o=!!n[5],u=n[6]&&+n[6],s=!!n[7],c=n[8]&&+n[8].slice(1),h=n[9]||"";"n"===h?(s=!0,h="g"):Xc[h]||(h=""),(o||"0"===e&&"="===r)&&(o=!0,e="0",r="="),this.fill=e,this.align=r,this.sign=i,this.symbol=a,this.zero=o,this.width=u,this.comma=s,this.precision=c,this.type=h;}function kr(t){return t;}function Nr(t){function n(t){function n(t){var n=_,i=g;if("c"===d)i=m(t)+i,t="";else{t=+t;var s=(0>t||0>1/t)&&(t*=-1,!0);if(t=m(t,l),s){var y,b=-1,v=t.length;for(s=!1;++b<v;){if(y=t.charCodeAt(b),y>48&&58>y||"x"===d&&y>96&&103>y||"X"===d&&y>64&&71>y){s=!0;break;}}}if(n=(s?"("===u?u:"-":"-"===u||"("===u?"":u)+n,i=i+("s"===d?$c[8+Is/3]:"")+(s&&"("===u?")":""),p)for(var y,b=-1,v=t.length;++b<v;){if(y=t.charCodeAt(b),48>y||y>57){i=(46===y?a+t.slice(b+1):t.slice(b))+i,t=t.slice(0,b);break;}}}f&&!c&&(t=r(t,1/0));var x=n.length+t.length+i.length,M=h>x?new Array(h-x+1).join(e):"";switch(f&&c&&(t=r(M+t,M.length?h-i.length:1/0),M=""),o){case"<":return n+t+i+M;case"=":return n+M+t+i;case"^":return M.slice(0,x=M.length>>1)+n+t+i+M.slice(x);}return M+n+t+i;}t=Tr(t);var e=t.fill,o=t.align,u=t.sign,s=t.symbol,c=t.zero,h=t.width,f=t.comma,l=t.precision,d=t.type,_="$"===s?i[0]:"#"===s&&/[boxX]/.test(d)?"0"+d.toLowerCase():"",g="$"===s?i[1]:/[%p]/.test(d)?"%":"",m=Xc[d],p=!d||/[defgprs%]/.test(d);return l=null==l?d?6:12:/[gprs]/.test(d)?Math.max(1,Math.min(21,l)):Math.max(0,Math.min(20,l)),n.toString=function(){return t+"";},n;}function e(t,e){var r=n((t=Tr(t),t.type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(br(e)/3))),a=Math.pow(10,-i),o=$c[8+i/3];return function(t){return r(a*t)+o;};}var r=t.grouping&&t.thousands?vr(t.grouping,t.thousands):kr,i=t.currency,a=t.decimal;return{format:n,formatPrefix:e};}function Ar(t){return Math.max(0,-br(Math.abs(t)));}function Cr(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(br(n)/3)))-br(Math.abs(t)));}function Dr(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,br(n)-br(t))+1;}function Fr(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n;}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L);}function Er(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n;}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L));}function Pr(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0};}function Or(t){function n(t,n){return function(e){var r,i,a,o=[],u=-1,s=0,c=t.length;for(e instanceof Date||(e=new Date(+e));++u<c;){37===t.charCodeAt(u)&&(o.push(t.slice(s,u)),null!=(i=vh[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(a=n[r])&&(r=a(e,i)),o.push(r),s=u+1);}return o.push(t.slice(s,u)),o.join("");};}function e(t,n){return function(e){var i=Pr(1900),a=r(i,t,e+="",0);if(a!=e.length)return null;if("p"in i&&(i.H=i.H%12+12*i.p),"W"in i||"U"in i){"w"in i||(i.w="W"in i?1:0);var o="Z"in i?Er(Pr(i.y)).getUTCDay():n(Pr(i.y)).getDay();i.m=0,i.d="W"in i?(i.w+6)%7+7*i.W-(o+5)%7:i.w+7*i.U-(o+6)%7;}return"Z"in i?(i.H+=i.Z/100|0,i.M+=i.Z%100,Er(i)):n(i);};}function r(t,n,e,r){for(var i,a,o=0,u=n.length,s=e.length;u>o;){if(r>=s)return-1;if(i=n.charCodeAt(o++),37===i){if(i=n.charAt(o++),a=I[i in vh?n.charAt(o++):i],!a||(r=a(t,e,r))<0)return-1;}else if(i!=e.charCodeAt(r++))return-1;}return r;}function i(t,n,e){var r=D.exec(n.slice(e));return r?(t.p=F[r[0].toLowerCase()],e+r[0].length):-1;}function a(t,n,e){var r=O.exec(n.slice(e));return r?(t.w=H[r[0].toLowerCase()],e+r[0].length):-1;}function o(t,n,e){var r=E.exec(n.slice(e));return r?(t.w=P[r[0].toLowerCase()],e+r[0].length):-1;}function u(t,n,e){var r=q.exec(n.slice(e));return r?(t.m=z[r[0].toLowerCase()],e+r[0].length):-1;}function s(t,n,e){var r=j.exec(n.slice(e));return r?(t.m=Y[r[0].toLowerCase()],e+r[0].length):-1;}function c(t,n,e){return r(t,M,n,e);}function h(t,n,e){return r(t,w,n,e);}function f(t,n,e){return r(t,T,n,e);}function l(t){return N[t.getDay()];}function d(t){return k[t.getDay()];}function _(t){return C[t.getMonth()];}function g(t){return A[t.getMonth()];}function m(t){return S[+(t.getHours()>=12)];}function p(t){return N[t.getUTCDay()];}function y(t){return k[t.getUTCDay()];}function b(t){return C[t.getUTCMonth()];}function v(t){return A[t.getUTCMonth()];}function x(t){return S[+(t.getUTCHours()>=12)];}var M=t.dateTime,w=t.date,T=t.time,S=t.periods,k=t.days,N=t.shortDays,A=t.months,C=t.shortMonths,D=Yr(S),F=qr(S),E=Yr(k),P=qr(k),O=Yr(N),H=qr(N),j=Yr(A),Y=qr(A),q=Yr(C),z=qr(C),L={a:l,A:d,b:_,B:g,c:null,d:Qr,e:Qr,H:ti,I:ni,j:ei,L:ri,m:ii,M:ai,p:m,S:oi,U:ui,w:si,W:ci,x:null,X:null,y:hi,Y:fi,Z:li,"%":Ni},U={a:p,A:y,b:b,B:v,c:null,d:di,e:di,H:_i,I:gi,j:mi,L:pi,m:yi,M:bi,p:x,S:vi,U:xi,w:Mi,W:wi,x:null,X:null,y:Ti,Y:Si,Z:ki,"%":Ni},I={a:a,A:o,b:u,B:s,c:c,d:Xr,e:Xr,H:$r,I:$r,j:Wr,L:Gr,m:Br,M:Vr,p:i,S:Zr,U:Lr,w:zr,W:Ur,x:h,X:f,y:Jr,Y:Ir,Z:Rr,"%":Kr};return L.x=n(w,L),L.X=n(T,L),L.c=n(M,L),U.x=n(w,U),U.X=n(T,U),U.c=n(M,U),{format:function format(t){var e=n(t+="",L);return e.toString=function(){return t;},e;},parse:function parse(t){var n=e(t+="",Fr);return n.toString=function(){return t;},n;},utcFormat:function utcFormat(t){var e=n(t+="",U);return e.toString=function(){return t;},e;},utcParse:function utcParse(t){var n=e(t,Er);return n.toString=function(){return t;},n;}};}function Hr(t,n,e){var r=0>t?"-":"",i=(r?-t:t)+"",a=i.length;return r+(e>a?new Array(e-a+1).join(n)+i:i);}function jr(t){return t.replace(wh,"\\$&");}function Yr(t){return new RegExp("^(?:"+t.map(jr).join("|")+")","i");}function qr(t){for(var n={},e=-1,r=t.length;++e<r;){n[t[e].toLowerCase()]=e;}return n;}function zr(t,n,e){var r=xh.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1;}function Lr(t,n,e){var r=xh.exec(n.slice(e));return r?(t.U=+r[0],e+r[0].length):-1;}function Ur(t,n,e){var r=xh.exec(n.slice(e));return r?(t.W=+r[0],e+r[0].length):-1;}function Ir(t,n,e){var r=xh.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1;}function Jr(t,n,e){var r=xh.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1;}function Rr(t,n,e){var r=/^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1;}function Br(t,n,e){var r=xh.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1;}function Xr(t,n,e){var r=xh.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1;}function Wr(t,n,e){var r=xh.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1;}function $r(t,n,e){var r=xh.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1;}function Vr(t,n,e){var r=xh.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1;}function Zr(t,n,e){var r=xh.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1;}function Gr(t,n,e){var r=xh.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1;}function Kr(t,n,e){var r=Mh.exec(n.slice(e,e+1));return r?e+r[0].length:-1;}function Qr(t,n){return Hr(t.getDate(),n,2);}function ti(t,n){return Hr(t.getHours(),n,2);}function ni(t,n){return Hr(t.getHours()%12||12,n,2);}function ei(t,n){return Hr(1+Xs.count(nc(t),t),n,3);}function ri(t,n){return Hr(t.getMilliseconds(),n,3);}function ii(t,n){return Hr(t.getMonth()+1,n,2);}function ai(t,n){return Hr(t.getMinutes(),n,2);}function oi(t,n){return Hr(t.getSeconds(),n,2);}function ui(t,n){return Hr(Ws.count(nc(t),t),n,2);}function si(t){return t.getDay();}function ci(t,n){return Hr($s.count(nc(t),t),n,2);}function hi(t,n){return Hr(t.getFullYear()%100,n,2);}function fi(t,n){return Hr(t.getFullYear()%1e4,n,4);}function li(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+Hr(n/60|0,"0",2)+Hr(n%60,"0",2);}function di(t,n){return Hr(t.getUTCDate(),n,2);}function _i(t,n){return Hr(t.getUTCHours(),n,2);}function gi(t,n){return Hr(t.getUTCHours()%12||12,n,2);}function mi(t,n){return Hr(1+ac.count(_c(t),t),n,3);}function pi(t,n){return Hr(t.getUTCMilliseconds(),n,3);}function yi(t,n){return Hr(t.getUTCMonth()+1,n,2);}function bi(t,n){return Hr(t.getUTCMinutes(),n,2);}function vi(t,n){return Hr(t.getUTCSeconds(),n,2);}function xi(t,n){return Hr(oc.count(_c(t),t),n,2);}function Mi(t){return t.getUTCDay();}function wi(t,n){return Hr(uc.count(_c(t),t),n,2);}function Ti(t,n){return Hr(t.getUTCFullYear()%100,n,2);}function Si(t,n){return Hr(t.getUTCFullYear()%1e4,n,4);}function ki(){return"+0000";}function Ni(){return"%";}function Ai(t){return t.toISOString();}function Ci(t){var n=new Date(t);return isNaN(n)?null:n;}function Di(){function t(t){var a=t+"",o=n.get(a);if(!o){if(i!==ef)return i;n.set(a,o=e.push(t));}return r[(o-1)%r.length];}var n=O(),e=[],r=[],i=ef;return t.domain=function(r){if(!arguments.length)return e.slice();e=[],n=O();for(var i,a,o=-1,u=r.length;++o<u;){n.has(a=(i=r[o])+"")||n.set(a,e.push(i));}return t;},t.range=function(n){return arguments.length?(r=nf.call(n),t):r.slice();},t.unknown=function(n){return arguments.length?(i=n,t):i;},t.copy=function(){return Di().domain(e).range(r).unknown(i);},t;}function Fi(){function t(){var t=i().length,r=o[1]<o[0],l=o[r-0],d=o[1-r];n=(d-l)/Math.max(1,t-s+2*c),u&&(n=Math.floor(n)),l+=(d-l-n*(t-s))*h,e=n*(1-s),u&&(l=Math.round(l),e=Math.round(e));var _=f(t).map(function(t){return l+n*t;});return a(r?_.reverse():_);}var n,e,r=Di().unknown(void 0),i=r.domain,a=r.range,o=[0,1],u=!1,s=0,c=0,h=.5;return delete r.unknown,r.domain=function(n){return arguments.length?(i(n),t()):i();},r.range=function(n){return arguments.length?(o=[+n[0],+n[1]],t()):o.slice();},r.rangeRound=function(n){return o=[+n[0],+n[1]],u=!0,t();},r.bandwidth=function(){return e;},r.step=function(){return n;},r.round=function(n){return arguments.length?(u=!!n,t()):u;},r.padding=function(n){return arguments.length?(s=c=Math.max(0,Math.min(1,n)),t()):s;},r.paddingInner=function(n){return arguments.length?(s=Math.max(0,Math.min(1,n)),t()):s;},r.paddingOuter=function(n){return arguments.length?(c=Math.max(0,Math.min(1,n)),t()):c;},r.align=function(n){return arguments.length?(h=Math.max(0,Math.min(1,n)),t()):h;},r.copy=function(){return Fi().domain(i()).range(o).round(u).paddingInner(s).paddingOuter(c).align(h);},t();}function Ei(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return Ei(n());},t;}function Pi(){return Ei(Fi().paddingInner(1));}function Oi(t){return function(){return t;};}function Hi(t){return+t;}function ji(t,n){return(n-=t=+t)?function(e){return(e-t)/n;}:Oi(n);}function Yi(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return n>=t?0:t>=e?1:r(t);};};}function qi(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return 0>=t?n:t>=1?e:r(t);};};}function zi(t,n,e,r){var i=t[0],a=t[1],o=n[0],u=n[1];return i>a?(i=e(a,i),o=r(u,o)):(i=e(i,a),o=r(o,u)),function(t){return o(i(t));};}function Li(t,n,e,r){var i=Math.min(t.length,n.length)-1,a=new Array(i),o=new Array(i),u=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<i;){a[u]=e(t[u],t[u+1]),o[u]=r(n[u],n[u+1]);}return function(n){var e=Lo(t,n,1,i)-1;return o[e](a[e](n));};}function Ui(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp());}function Ii(t,n){function e(){var e=Math.min(o.length,u.length)>2?Li:zi;return i=e(o,u,c?Yi(t):t,s),a=e(u,o,ji,c?qi(n):n),r;}function r(t){return i(+t);}var i,a,o=rf,u=rf,s=Se,c=!1;return r.invert=function(t){return a(+t);},r.domain=function(t){return arguments.length?(o=tf.call(t,Hi),e()):o.slice();},r.range=function(t){return arguments.length?(u=nf.call(t),e()):u.slice();},r.rangeRound=function(t){return u=nf.call(t),s=ke,e();},r.clamp=function(t){return arguments.length?(c=!!t,e()):c;},r.interpolate=function(t){return arguments.length?(s=Ze.apply(null,arguments),e()):s;},e();}function Ji(t,n,e){var r=t[0],i=t[t.length-1],a=d(r,i,null==n?10:n);if(null==e)e=",."+Ar(a)+"f";else switch(e=Tr(e),e.type){case"s":var o=Math.max(Math.abs(r),Math.abs(i));return null==e.precision&&(e.precision=Cr(a,o)),bh(e,o);case"":case"e":case"g":case"p":case"r":null==e.precision&&(e.precision=Dr(a,Math.max(Math.abs(r),Math.abs(i)))-("e"===e.type));break;case"f":case"%":null==e.precision&&(e.precision=Ar(a)-2*("%"===e.type));}return yh(e);}function Ri(t){var n=t.domain;return t.ticks=function(t){var e=n();return l(e[0],e[e.length-1],null==t?10:t);},t.tickFormat=function(t,e){return Ji(n(),t,e);},t.nice=function(e){var r=n(),i=r.length-1,a=null==e?10:e,o=r[0],u=r[i],s=d(o,u,a);return s&&(s=d(Math.floor(o/s)*s,Math.ceil(u/s)*s,a),r[0]=Math.floor(o/s)*s,r[i]=Math.ceil(u/s)*s,n(r)),t;},t;}function Bi(){var t=Ii(ji,ve);return t.copy=function(){return Ui(t,Bi());},Ri(t);}function Xi(){function t(t){return+t;}var n=[0,1];return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=tf.call(e,Hi),t):n.slice();},t.copy=function(){return Xi().domain(n);},Ri(t);}function Wi(t,n){t=t.slice();var e,r=0,i=t.length-1,a=t[r],o=t[i];return a>o&&(e=r,r=i,i=e,e=a,a=o,o=e),t[r]=n.floor(a),t[i]=n.ceil(o),t;}function $i(t,n){return(n=Math.log(n/t))?function(e){return Math.log(e/t)/n;}:Oi(n);}function Vi(t,n){return 0>t?function(e){return-Math.pow(-n,e)*Math.pow(-t,1-e);}:function(e){return Math.pow(n,e)*Math.pow(t,1-e);};}function Zi(t){return isFinite(t)?+("1e"+t):0>t?0:t;}function Gi(t){return 10===t?Zi:t===Math.E?Math.exp:function(n){return Math.pow(t,n);};}function Ki(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t;});}function Qi(t){return function(n){return-t(-n);};}function ta(){function t(){return i=Ki(r),a=Gi(r),e()[0]<0&&(i=Qi(i),a=Qi(a)),n;}var n=Ii($i,Vi).domain([1,10]),e=n.domain,r=10,i=Ki(10),a=Gi(10);return n.base=function(n){return arguments.length?(r=+n,t()):r;},n.domain=function(n){return arguments.length?(e(n),t()):e();},n.nice=function(){return e(Wi(e(),{floor:function floor(t){return a(Math.floor(i(t)));},ceil:function ceil(t){return a(Math.ceil(i(t)));}}));},n.ticks=function(t){var n,o=e(),u=o[0],s=o[o.length-1];(n=u>s)&&(d=u,u=s,s=d);var c,h,f,d=i(u),_=i(s),g=null==t?10:+t,m=[];if(!(r%1)&&g>_-d){if(d=Math.round(d)-1,_=Math.round(_)+1,u>0){for(;_>d;++d){for(h=1,c=a(d);r>h;++h){if(f=c*h,!(u>f)){if(f>s)break;m.push(f);}}}}else for(;_>d;++d){for(h=r-1,c=a(d);h>=1;--h){if(f=c*h,!(u>f)){if(f>s)break;m.push(f);}}}n&&m.reverse();}else m=l(d,_,Math.min(_-d,g)).map(a);return m;},n.tickFormat=function(t,e){if(null==e?e=10===r?af:of:"function"!=typeof e&&(e=yh(e)),null==t)return e;var o=Math.max(1,r*t/n.ticks().length);return function(t){var n=t/a(Math.round(i(t)));return r-.5>n*r&&(n*=r),o>=n?e(t):"";};},n.copy=function(){return Ui(n,ta().base(r));},n;}function na(t,n){return 0>t?-Math.pow(-t,n):Math.pow(t,n);}function ea(){function t(t,n){return(n=na(n,e)-(t=na(t,e)))?function(r){return(na(r,e)-t)/n;}:Oi(n);}function n(t,n){return n=na(n,e)-(t=na(t,e)),function(r){return na(t+n*r,1/e);};}var e=1,r=Ii(t,n),i=r.domain;return r.exponent=function(t){return arguments.length?(e=+t,i(i())):e;},r.copy=function(){return Ui(r,ea().exponent(e));},Ri(r);}function ra(){return ea().exponent(.5);}function ia(){function t(){var t=0,n=Math.max(1,i.length);for(a=new Array(n-1);++t<n;){a[t-1]=p(r,t/n);}return e;}function e(t){return isNaN(t=+t)?void 0:i[Lo(a,t)];}var r=[],i=[],a=[];return e.invertExtent=function(t){var n=i.indexOf(t);return 0>n?[NaN,NaN]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]];},e.domain=function(e){if(!arguments.length)return r.slice();r=[];for(var i,a=0,o=e.length;o>a;++a){i=e[a],null==i||isNaN(i=+i)||r.push(i);}return r.sort(n),t();},e.range=function(n){return arguments.length?(i=nf.call(n),t()):i.slice();},e.quantiles=function(){return a.slice();},e.copy=function(){return ia().domain(r).range(i);},e;}function aa(){function t(t){return t>=t?o[Lo(a,t,0,i)]:void 0;}function n(){var n=-1;for(a=new Array(i);++n<i;){a[n]=((n+1)*r-(n-i)*e)/(i+1);}return t;}var e=0,r=1,i=1,a=[.5],o=[0,1];return t.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n()):[e,r];},t.range=function(t){return arguments.length?(i=(o=nf.call(t)).length-1,n()):o.slice();},t.invertExtent=function(t){var n=o.indexOf(t);return 0>n?[NaN,NaN]:1>n?[e,a[0]]:n>=i?[a[i-1],r]:[a[n-1],a[n]];},t.copy=function(){return aa().domain([e,r]).range(o);},Ri(t);}function oa(){function t(t){return t>=t?e[Lo(n,t,0,r)]:void 0;}var n=[.5],e=[0,1],r=1;return t.domain=function(i){return arguments.length?(n=nf.call(i),r=Math.min(n.length,e.length-1),t):n.slice();},t.range=function(i){return arguments.length?(e=nf.call(i),r=Math.min(n.length,e.length-1),t):e.slice();},t.invertExtent=function(t){var r=e.indexOf(t);return[n[r-1],n[r]];},t.copy=function(){return oa().domain(n).range(e);},t;}function ua(t){return new Date(t);}function sa(t,n,e,r,i,a,o,u,s){function c(u){return(o(u)<u?g:a(u)<u?m:i(u)<u?p:r(u)<u?y:n(u)<u?e(u)<u?b:v:t(u)<u?x:M)(u);}function h(n,e,r,i){if(null==n&&(n=10),"number"==typeof n){var a=Math.abs(r-e)/n,o=_f(w,a);o===w.length?(i=d(e/df,r/df,n),n=t):o?(o=w[a/w[o-1][2]<w[o][2]/a?o-1:o],i=o[1],n=o[0]):(i=d(e,r,n),n=u);}return null==i?n:n.every(i);}var f=Ii(ji,ve),l=f.invert,_=f.domain,g=s(".%L"),m=s(":%S"),p=s("%I:%M"),y=s("%I %p"),b=s("%a %d"),v=s("%b %d"),x=s("%B"),M=s("%Y"),w=[[o,1,uf],[o,5,5*uf],[o,15,15*uf],[o,30,30*uf],[a,1,sf],[a,5,5*sf],[a,15,15*sf],[a,30,30*sf],[i,1,cf],[i,3,3*cf],[i,6,6*cf],[i,12,12*cf],[r,1,hf],[r,2,2*hf],[e,1,ff],[n,1,lf],[n,3,3*lf],[t,1,df]];return f.invert=function(t){return new Date(l(t));},f.domain=function(t){return arguments.length?_(t):_().map(ua);},f.nice=function(t,n){var e=_();return(t=h(t,e[0],e[e.length-1],n))?_(Wi(e,t)):f;},f.ticks=function(t,n){var e,r=_(),i=r[0],a=r[r.length-1],o=i>a;return o&&(e=i,i=a,a=e),e=h(t,i,a,n),e=e?e.range(i,a+1):[],o?e.reverse():e;},f.tickFormat=function(t){return null==t?c:s(t);},f.copy=function(){return Ui(f,sa(t,n,e,r,i,a,o,u,s));},f;}function ca(){return sa(nc,tc,Ws,Xs,Bs,Rs,Js,Us,Vh).domain([new Date(2e3,0,1),new Date(2e3,0,2)]);}function ha(){return sa(_c,dc,oc,ac,ic,rc,ec,Dc,Gh).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]);}function fa(t){return t.match(/.{6}/g).map(function(t){return"#"+t;});}function la(){return Di().range(fa("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));}function da(){return Di().range(fa("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"));}function _a(){return Di().range(fa("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"));}function ga(){return Di().range(fa("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"));}function ma(){return Bi().interpolate($e).range([me(300,.5,0),me(-240,.5,1)]);}function pa(t){function n(n){var a=(n-e)/(r-e);return t(i?Math.max(0,Math.min(1,a)):a);}var e=0,r=1,i=!1;return n.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n):[e,r];},n.clamp=function(t){return arguments.length?(i=!!t,n):i;},n.copy=function(){return pa(t).domain([e,r]).clamp(i);},Ri(n);}function ya(t){(0>t||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return yf.h=360*t-100,yf.s=1.5-1.5*n,yf.l=.8-.9*n,yf+"";}function ba(){return pa(bf);}function va(){return pa(vf);}function xa(){return pa(ya);}function Ma(t){var n=pa(function(n){return t[Math.round(n*t.length-n)];}).clamp(!0);return delete n.clamp,n;}function wa(){return Ma(xf);}function Ta(){return Ma(Mf);}function Sa(){return Ma(wf);}function ka(){return Ma(Tf);}function Na(t){return t.replace(Sf,"\\$&");}function Aa(t,n,e){function r(){for(var r=c,a=arguments.length>>1,u=new Array(a);--a>=0;){r=r[arguments[(a<<1)+1]],u[a]=a?r._parent:r;}var h=Ca(n,u,arguments);o&&(h=Da(h)),i.call(this),this.addEventListener(t,this[s]=h,h._capture=e),h._listener=n;}function i(){var n=this[s];n&&(this.removeEventListener(t,n,n._capture),delete this[s]);}function a(){var n,e=new RegExp("^__on([^.]+)"+Na(t)+"$");for(var r in this){if(n=r.match(e)){var i=this[r];this.removeEventListener(n[1],i,i._capture),delete this[r];}}}var o,u=arguments.length,s="__on"+t,c=this._root;return 2>u?(u=this.node()[s])&&u._listener:(3>u&&(e=!1),(u=t.indexOf("."))>0&&(t=t.slice(0,u)),(o=kf.hasOwnProperty(t))&&(t=kf[t]),this.each(n?u?r:Fa:u?i:a));}function Ca(n,e,r){return function(i){for(var a=e.length,o=t.event;--a>=0;){r[a<<1]=e[a].__data__;}t.event=i;try{n.apply(e[0],r);}finally{t.event=o;}};}function Da(t){return function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t(n);};}function Fa(){}function Ea(){for(var n,e=t.event;n=e.sourceEvent;){e=n;}return e;}function Pa(t){return t&&(t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView);}function Oa(t,n){function e(){return Ha(this,t,n);}function r(){return Ha(this,t,n.apply(this,arguments));}return this.each("function"==typeof n?r:e);}function Ha(t,n,e){var r=Pa(t),i=r.CustomEvent;i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i);}function ja(t){return arguments.length?this.property("__data__",t):this.node().__data__;}function Ya(){return this.each(function(){var t=this.parentNode;t&&t.removeChild(this);});}function qa(t){var n=t.indexOf(":"),e=t;return n>=0&&"xmlns"!==(e=t.slice(0,n))&&(t=t.slice(n+1)),Af.hasOwnProperty(e)?{space:Af[e],local:t}:t;}function za(t){return function(){return this.querySelector(t);};}function La(t,n){function e(){return this.appendChild(t.apply(this,arguments));}function r(){return this.insertBefore(t.apply(this,arguments),n.apply(this,arguments)||null);}return"function"!=typeof t&&(t=Ua(t)),this.select(arguments.length<2?e:("function"!=typeof n&&(n=za(n)),r));}function Ua(t){function n(){var n=this.ownerDocument,e=this.namespaceURI;return e?n.createElementNS(e,t):n.createElement(t);}function e(){return this.ownerDocument.createElementNS(t.space,t.local);}return t=qa(t),t.local?e:n;}function Ia(t){function n(){this.innerHTML=t;}function e(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n;}return arguments.length?(null==t&&(t=""),this.each("function"==typeof t?e:n)):this.node().innerHTML;}function Ja(t){function n(){this.textContent=t;}function e(){var n=t.apply(this,arguments);this.textContent=null==n?"":n;}return arguments.length?(null==t&&(t=""),this.each("function"==typeof t?e:n)):this.node().textContent;}function Ra(t,n){function e(){for(var e=-1;++e<i;){t[e](this,n);}}function r(){for(var e=-1,r=n.apply(this,arguments);++e<i;){t[e](this,r);}}t=(t+"").trim().split(/^|\s+/);var i=t.length;if(arguments.length<2){var a=this.node(),o=-1;if(n=a.classList){for(;++o<i;){if(!n.contains(t[o]))return!1;}}else for(n=a.getAttribute("class");++o<i;){if(!Wa(t[o]).test(n))return!1;}return!0;}return t=t.map(Ba),this.each("function"==typeof n?r:e);}function Ba(t){var n;return function(e,r){if(i=e.classList)return r?i.add(t):i.remove(t);n||(n=Wa(t));var i=e.getAttribute("class")||"";r?(n.lastIndex=0,n.test(i)||e.setAttribute("class",Xa(i+" "+t))):e.setAttribute("class",Xa(i.replace(n," ")));};}function Xa(t){return t.trim().replace(/\s+/g," ");}function Wa(t){return new RegExp("(?:^|\\s+)"+Na(t)+"(?:\\s+|$)","g");}function $a(t,n){function e(){delete this[t];}function r(){this[t]=n;}function i(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e;}return arguments.length<2?this.node()[t]:this.each(null==n?e:"function"==typeof n?i:r);}function Va(t,n,e){function r(){this.style.removeProperty(t);}function i(){this.style.setProperty(t,n,e);}function a(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e);}var o=arguments.length;return 2>o?Pa(o=this.node()).getComputedStyle(o,null).getPropertyValue(t):(3>o&&(e=""),this.each(null==n?r:"function"==typeof n?a:i));}function Za(t,n){function e(){this.removeAttribute(t);}function r(){this.removeAttributeNS(t.space,t.local);}function i(){this.setAttribute(t,n);}function a(){this.setAttributeNS(t.space,t.local,n);}function o(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e);}function u(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e);}if(t=qa(t),arguments.length<2){var s=this.node();return t.local?s.getAttributeNS(t.space,t.local):s.getAttribute(t);}return this.each(null==n?t.local?r:e:"function"==typeof n?t.local?u:o:t.local?a:i);}function Ga(t){function n(e,i){var a,o=-1,u=e.length;if(--i)for(var s=2*i,c=s+1;++o<u;){(a=e[o])&&(r[s]=a._parent.__data__,r[c]=o,n(a,i));}else for(;++o<u;){(a=e[o])&&(r[0]=a.__data__,r[1]=o,t.apply(a,r));}}var e=this._depth,r=new Array(e);return n(this._root,e),this;}function Ka(){return!this.node();}function Qa(){var t=0;return this.each(function(){++t;}),t;}function to(){return no(this._root,this._depth);}function no(t,n){var e,r=-1,i=t.length;if(--n){for(;++r<i;){if((e=t[r])&&(e=no(e,n)))return e;}}else for(;++r<i;){if(e=t[r])return e;}}function eo(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this;}),t;}function ro(){var t=arguments[0];return t.apply(arguments[0]=this,arguments),this;}function io(t){return t._root=ao(t._root,t._depth);}function ao(t,n){var e,r=-1,i=t.length;if(--n)for(;++r<i;){(e=t[r])&&(t[r]=ao(e,n));}else if(!Array.isArray(t)){for(var a=new Array(i);++r<i;){a[r]=t[r];}a._parent=t._parent,t=a;}return t;}function oo(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e;}function e(t,r){if(--r)for(var i,a=-1,o=t.length;++a<o;){(i=t[a])&&e(i,r);}else t.sort(n);}return t||(t=uo),e(io(this),this._depth),this.order();}function uo(t,n){return n>t?-1:t>n?1:t>=n?0:NaN;}function so(){return co(this._root,this._depth),this;}function co(t,n){var e,r,i=t.length;if(--n)for(;--i>=0;){(e=t[i])&&co(e,n);}else for(r=t[--i];--i>=0;){(e=t[i])&&(r&&r!==e.nextSibling&&r.parentNode.insertBefore(e,r),r=e);}}function ho(t){return new Mo(fo(io(t),t._depth),t._depth);}function fo(t,n){var e,r=-1,i=t.length,a=new Array(i);if(--n)for(;++r<i;){(e=t[r])&&(a[r]=fo(e,n));}return a._parent=t._parent,a;}function lo(){return this._exit||(this._exit=ho(this));}function _o(){return this._enter||(this._enter=ho(this),this._enter._update=this),this._enter;}function go(t){return function(){return t;};}function mo(t,n){function e(n,r,i,a){var o,u,h=-1;if(a--){var f=2*a,l=f+1;for(o=n.length;++h<o;){(u=n[h])&&(s[f]=u._parent.__data__,s[l]=h,e(u,r[h],i[h],a));}}else{var d,_=0;for(c(n,r,i,t.apply(n._parent,s)),o=n.length;++h<o;){if(d=r[h]){for(h>=_&&(_=h+1);!(u=n[_])&&++_<o;){}d._next=u||null;}}}}function r(t,n,e,r){var i,a=0,o=t.length,u=r.length,s=Math.min(o,u);for(n.length=0,n.length=u,e.length=0,e.length=o;s>a;++a){(i=t[a])?i.__data__=r[a]:n[a]=new po(t._parent,r[a]);}for(;u>a;++a){n[a]=new po(t._parent,r[a]);}for(;o>a;++a){(i=t[a])&&(e[a]=t[a]);}t.length=u;}function i(t,e,r,i){var a,o,u,c=i.length,h=t.length,f={},l=new Array(2).concat(s),d=new Array(h);for(e.length=0,e.length=c,r.length=0,r.length=h,a=0;h>a;++a){(o=t[a])&&(l[0]=o.__data__,l[1]=a,d[a]=u=Cf+n.apply(o,l),f[u]?r[a]=o:f[u]=o);}for(t.length=0,t.length=c,a=0;c>a;++a){l[0]=i[a],l[1]=a,u=Cf+n.apply(t._parent,l),(o=f[u])?o!==!0&&(t[a]=o,o.__data__=i[a]):e[a]=new po(t._parent,i[a]),f[u]=!0;}for(a=0;h>a;++a){(o=f[d[a]])!==!0&&(r[a]=o);}}if(!t){var a=new Array(this.size()),o=-1;return this.each(function(t){a[++o]=t;}),a;}var u=this._depth-1,s=new Array(2*u),c=n?i:r,h=this.enter(),f=this.exit();return"function"!=typeof t&&(t=go(t)),e(this._root,h._root,f._root,u),this;}function po(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n;}function yo(t){function n(e,i){var a,o,u=-1,s=e.length;if(--i){var c=2*i,h=c+1;for(o=new Array(s);++u<s;){(a=e[u])&&(r[c]=a._parent.__data__,r[h]=u,o[u]=n(a,i));}}else for(o=[];++u<s;){(a=e[u])&&(r[0]=a.__data__,r[1]=u,t.apply(a,r)&&o.push(a));}return o._parent=e._parent,o;}var e=this._depth,r=new Array(2*e);return"function"!=typeof t&&(t=Df(t)),new Mo(n(this._root,e),e);}function bo(t){function n(e,i){var a,o,u=-1,s=e.length,c=new Array(s);if(--i)for(var h=2*i,f=h+1;++u<s;){(a=e[u])&&(r[h]=a._parent.__data__,r[f]=u,c[u]=n(a,i));}else for(;++u<s;){(a=e[u])&&(r[0]=a.__data__,r[1]=u,c[u]=o=t.apply(a,r),o._parent=a);}return c._parent=e._parent,c;}var e=this._depth,r=new Array(2*e);return"function"!=typeof t&&(t=vo(t)),new Mo(n(this._root,e),e+1);}function vo(t){return function(){return this.querySelectorAll(t);};}function xo(t){function n(e,i,a){var o,u,s=-1,c=e.length,h=new Array(c);if(--a)for(var f=2*a,l=f+1;++s<c;){(o=e[s])&&(r[f]=o._parent.__data__,r[l]=s,h[s]=n(o,i&&i[s],a));}else for(;++s<c;){(o=e[s])&&(r[0]=o.__data__,r[1]=s,(u=t.apply(o,r))&&("__data__"in o&&(u.__data__=o.__data__),i&&(i[s]=u,delete e[s]),h[s]=u));}return h._parent=e._parent,h;}var e=this._depth,r=new Array(2*e);return"function"!=typeof t&&(t=za(t)),new Mo(n(this._root,this._update&&this._update._root,e),e);}function Mo(t,n){this._root=t,this._depth=n,this._enter=this._update=this._exit=null;}function wo(){return new Mo([document.documentElement],1);}function To(t){return new Mo(["string"==typeof t?document.querySelector(t):t],1);}function So(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>Pf){var i=defaultView(t);if(i.scrollX||i.scrollY){e=To(i.document.body).append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var a=e.node().getScreenCTM();Pf=!(a.f||a.e),e.remove();}}return Pf?(r.x=n.pageX,r.y=n.pageY):(r.x=n.clientX,r.y=n.clientY),r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y];}var o=t.getBoundingClientRect();return[n.clientX-o.left-t.clientLeft,n.clientY-o.top-t.clientTop];}function ko(t,n){return arguments.length<2&&(n=Ea()),n.changedTouches&&(n=n.changedTouches[0]),So(t,n);}function No(t){return new Mo("string"==typeof t?document.querySelectorAll(t):t,1);}function Ao(t,n,e){arguments.length<3&&(e=n,n=Ea().changedTouches);for(var r,i=0,a=n?n.length:0;a>i;++i){if((r=n[i]).identifier===e)return So(t,r);}return null;}function Co(t,n){arguments.length<2&&(n=Ea().touches);for(var e=0,r=n?n.length:0,i=new Array(r);r>e;++e){i[e]=So(t,n[e]);}return i;}function Do(t){return t;}function Fo(t,n,e){t.attr("transform",function(t){var r=n(t);return isFinite(r)||(r=e(t)),"translate("+r+",0)";});}function Eo(t,n,e){t.attr("transform",function(t){var r=n(t);return isFinite(r)||(r=e(t)),"translate(0,"+r+")";});}function Po(t){function n(n){n.each(function(){var n,c=To(this),h=this.__axis__||e,f=this.__axis__=e.copy(),l=null==i?f.ticks?f.ticks.apply(f,r):f.domain():i,d=null==a?f.tickFormat?f.tickFormat.apply(f,r):Do:a,_=c.selectAll(".tick").data(l,f),g=_.enter().append("g",".domain").attr("class","tick").style("opacity",Hf),m=_.exit().style("opacity",Hf).remove(),p=_.order().style("opacity",1),y=Math.max(o,0)+s,b=f.range(),v=c.selectAll(".domain").data([0]),x=v.enter().append("path").attr("class","domain");g.append("line"),g.append("text");var M,w,T,S,k=g.select("line"),N=p.select("line"),A=_.select("text").text(d),C=g.select("text"),D=p.select("text"),F=t===jf||t===zf?-1:1;if(t===zf||t===Yf?(n=Eo,M="y",T="x",w="y2",S="x2",A.attr("dy",".32em").style("text-anchor",0>F?"end":"start"),x.attr("d","M"+F*u+","+b[0]+"H0V"+b[1]+"H"+F*u)):(n=Fo,M="x",T="y",w="x2",S="y2",A.attr("dy",0>F?"0em":".71em").style("text-anchor","middle"),x.attr("d","M"+b[0]+","+F*u+"V0H"+b[1]+"V"+F*u)),k.attr(S,F*o),C.attr(T,F*y),N.attr(w,0).attr(S,F*o),D.attr(M,0).attr(T,F*y),f.bandwidth){var E=f,P=E.bandwidth()/2;f=function f(t){return E(t)+P;};}g.call(n,h,f),p.call(n,f,f),m.call(n,f,h);});}var e=Bi(),r=[],i=null,a=null,o=6,u=6,s=3;return n.scale=function(t){return arguments.length?(e=t,n):e;},n.ticks=function(){return r=Of.call(arguments),n;},n.tickArguments=function(t){return arguments.length?(r=null==t?[]:Of.call(t),n):r.slice();},n.tickValues=function(t){return arguments.length?(i=null==t?null:Of.call(t),n):i&&i.slice();},n.tickFormat=function(t){return arguments.length?(a=t,n):a;},n.tickSize=function(t){return arguments.length?(o=u=+t,n):o;},n.tickSizeInner=function(t){return arguments.length?(o=+t,n):o;},n.tickSizeOuter=function(t){return arguments.length?(u=+t,n):u;},n.tickPadding=function(t){return arguments.length?(s=+t,n):s;},n;}function Oo(){return Po(jf);}function Ho(){return Po(Yf);}function jo(){return Po(qf);}function Yo(){return Po(zf);}var qo="4.0.0-alpha.4",zo=e(n),Lo=zo.right,Uo=zo.left,Io=Math.sqrt(50),Jo=Math.sqrt(10),Ro=Math.sqrt(2),Bo="$";P.prototype=O.prototype={has:function has(t){return Bo+t in this;},get:function get(t){return this[Bo+t];},set:function set(t,n){return this[Bo+t]=n,this;},remove:function remove(t){var n=Bo+t;return n in this&&delete this[n];},clear:function clear(){for(var t in this){t[0]===Bo&&delete this[t];}},keys:function keys(){var t=[];for(var n in this){n[0]===Bo&&t.push(n.slice(1));}return t;},values:function values(){var t=[];for(var n in this){n[0]===Bo&&t.push(this[n]);}return t;},entries:function entries(){var t=[];for(var n in this){n[0]===Bo&&t.push({key:n.slice(1),value:this[n]});}return t;},size:function size(){var t=0;for(var n in this){n[0]===Bo&&++t;}return t;},empty:function empty(){for(var t in this){if(t[0]===Bo)return!1;}return!0;},each:function each(t){for(var n in this){n[0]===Bo&&t(this[n],n.slice(1),this);}}};var Xo=O.prototype;L.prototype=U.prototype={has:Xo.has,add:function add(t){return t+="",this[Bo+t]=t,this;},remove:Xo.remove,clear:Xo.clear,values:Xo.keys,size:Xo.size,empty:Xo.empty,each:Xo.each};var Wo=Array.prototype.slice,$o=Math.PI,Vo=$o/2,Zo=4/11,Go=6/11,Ko=8/11,Qo=.75,tu=9/11,nu=10/11,eu=.9375,ru=21/22,iu=63/64,au=1/Zo/Zo,ou=2*Math.PI,uu=Math.PI,su=2*uu,cu=1e-6,hu=su-cu;Ct.prototype=Dt.prototype={moveTo:function moveTo(t,n){this._.push("M",this._x0=this._x1=+t,",",this._y0=this._y1=+n);},closePath:function closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._.push("Z"));},lineTo:function lineTo(t,n){this._.push("L",this._x1=+t,",",this._y1=+n);},quadraticCurveTo:function quadraticCurveTo(t,n,e,r){this._.push("Q",+t,",",+n,",",this._x1=+e,",",this._y1=+r);},bezierCurveTo:function bezierCurveTo(t,n,e,r,i,a){this._.push("C",+t,",",+n,",",+e,",",+r,",",this._x1=+i,",",this._y1=+a);},arcTo:function arcTo(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var a=this._x1,o=this._y1,u=e-t,s=r-n,c=a-t,h=o-n,f=c*c+h*h;if(0>i)throw new Error("negative radius: "+i);if(null===this._x1)this._.push("M",this._x1=t,",",this._y1=n);else if(f>cu){if(Math.abs(h*u-s*c)>cu&&i){var l=e-a,d=r-o,_=u*u+s*s,g=l*l+d*d,m=Math.sqrt(_),p=Math.sqrt(f),y=i*Math.tan((uu-Math.acos((_+f-g)/(2*m*p)))/2),b=y/p,v=y/m;Math.abs(b-1)>cu&&this._.push("L",t+b*c,",",n+b*h),this._.push("A",i,",",i,",0,0,",+(h*l>c*d),",",this._x1=t+v*u,",",this._y1=n+v*s);}else this._.push("L",this._x1=t,",",this._y1=n);}else;},arc:function arc(t,n,e,r,i,a){t=+t,n=+n,e=+e;var o=e*Math.cos(r),u=e*Math.sin(r),s=t+o,c=n+u,h=1^a,f=a?r-i:i-r;if(0>e)throw new Error("negative radius: "+e);null===this._x1?this._.push("M",s,",",c):(Math.abs(this._x1-s)>cu||Math.abs(this._y1-c)>cu)&&this._.push("L",s,",",c),e&&(f>hu?this._.push("A",e,",",e,",0,1,",h,",",t-o,",",n-u,"A",e,",",e,",0,1,",h,",",this._x1=s,",",this._y1=c):(0>f&&(f=f%su+su),this._.push("A",e,",",e,",0,",+(f>=uu),",",h,",",this._x1=t+e*Math.cos(i),",",this._y1=n+e*Math.sin(i))));},rect:function rect(t,n,e,r){this._.push("M",this._x0=this._x1=+t,",",this._y0=this._y1=+n,"h",+e,"v",+r,"h",-e,"Z");},toString:function toString(){return this._.join("");}};var fu=1e-12,lu=Math.PI,du=lu/2,_u=2*lu,gu=Array.prototype.slice;It.prototype={areaStart:function areaStart(){this._line=0;},areaEnd:function areaEnd(){this._line=NaN;},lineStart:function lineStart(){this._point=0;},lineEnd:function lineEnd(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function point(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n);}}},Gt.prototype={areaStart:function areaStart(){this._curve.areaStart();},areaEnd:function areaEnd(){this._curve.areaEnd();},lineStart:function lineStart(){this._curve.lineStart();},lineEnd:function lineEnd(){this._curve.lineEnd();},point:function point(t,n){t-=du,this._curve.point(n*Math.cos(t),n*Math.sin(t));}};var mu=-.5,pu=Math.sqrt(3)/2,yu=1/Math.sqrt(12),bu=3*(yu/2+1),vu={draw:function draw(t,n){var e=Math.sqrt(n/bu),r=e/2,i=e*yu,a=r,o=e*yu+e,u=-a,s=o;t.moveTo(r,i),t.lineTo(a,o),t.lineTo(u,s),t.lineTo(mu*r-pu*i,pu*r+mu*i),t.lineTo(mu*a-pu*o,pu*a+mu*o),t.lineTo(mu*u-pu*s,pu*u+mu*s),t.lineTo(mu*r+pu*i,mu*i-pu*r),t.lineTo(mu*a+pu*o,mu*o-pu*a),t.lineTo(mu*u+pu*s,mu*s-pu*u),t.closePath();}},xu=Math.sqrt(3),Mu={draw:function draw(t,n){var e=-Math.sqrt(n/(3*xu));t.moveTo(0,2*e),t.lineTo(-xu*e,-e),t.lineTo(xu*e,-e),t.closePath();}},wu=.8908130915292852,Tu=Math.sin(lu/10)/Math.sin(7*lu/10),Su=Math.sin(_u/10)*Tu,ku=-Math.cos(_u/10)*Tu,Nu={draw:function draw(t,n){var e=Math.sqrt(n*wu),r=Su*e,i=ku*e;t.moveTo(0,-e),t.lineTo(r,i);for(var a=1;5>a;++a){var o=_u*a/5,u=Math.cos(o),s=Math.sin(o);t.lineTo(s*e,-u*e),t.lineTo(u*r-s*i,s*r+u*i);}t.closePath();}},Au={draw:function draw(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e);}},Cu=Math.sqrt(1/3),Du=2*Cu,Fu={draw:function draw(t,n){var e=Math.sqrt(n/Du),r=e*Cu;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath();}},Eu={draw:function draw(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath();}},Pu={draw:function draw(t,n){var e=Math.sqrt(n/lu);t.moveTo(e,0),t.arc(0,0,e,0,_u);}},Ou=[Pu,Eu,Fu,Au,Nu,Mu,vu];an.prototype={areaStart:function areaStart(){this._line=0;},areaEnd:function areaEnd(){this._line=NaN;},lineStart:function lineStart(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0;},lineEnd:function lineEnd(){switch(this._point){case 3:rn(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function point(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:rn(this,t,n);}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n;}},un.prototype={areaStart:en,areaEnd:en,lineStart:function lineStart(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0;},lineEnd:function lineEnd(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);}},point:function point(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:rn(this,t,n);}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n;}},cn.prototype={areaStart:function areaStart(){this._line=0;},areaEnd:function areaEnd(){this._line=NaN;},lineStart:function lineStart(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0;},lineEnd:function lineEnd(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function point(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:rn(this,t,n);}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n;}},fn.prototype={lineStart:function lineStart(){this._x=[],this._y=[],this._basis.lineStart();},lineEnd:function lineEnd(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],a=n[0],o=t[e]-i,u=n[e]-a,s=-1;++s<=e;){r=s/e,this._basis.point(this._beta*t[s]+(1-this._beta)*(i+r*o),this._beta*n[s]+(1-this._beta)*(a+r*u));}this._x=this._y=null,this._basis.lineEnd();},point:function point(t,n){this._x.push(+t),this._y.push(+n);}},_n.prototype={areaStart:function areaStart(){this._line=0;},areaEnd:function areaEnd(){this._line=NaN;},lineStart:function lineStart(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0;},lineEnd:function lineEnd(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:dn(this,this._x1,this._y1);}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function point(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:dn(this,t,n);}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n;}},mn.prototype={areaStart:en,areaEnd:en,lineStart:function lineStart(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0;},lineEnd:function lineEnd(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);}},point:function point(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:dn(this,t,n);}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n;}},yn.prototype={areaStart:function areaStart(){this._line=0;},areaEnd:function areaEnd(){this._line=NaN;},lineStart:function lineStart(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0;},lineEnd:function lineEnd(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function point(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:dn(this,t,n);}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n;}},xn.prototype={areaStart:function areaStart(){this._line=0;},areaEnd:function areaEnd(){this._line=NaN;},lineStart:function lineStart(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0;},lineEnd:function lineEnd(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this,this._x2,this._y2);}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function point(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha));}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:vn(this,t,n);}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n;}},wn.prototype={areaStart:en,areaEnd:en,lineStart:function lineStart(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0;},lineEnd:function lineEnd(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);}},point:function point(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha));}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:vn(this,t,n);}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n;}},Sn.prototype={areaStart:function areaStart(){this._line=0;},areaEnd:function areaEnd(){this._line=NaN;},lineStart:function lineStart(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0;},lineEnd:function lineEnd(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function point(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha));}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:vn(this,t,n);}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n;}},Nn.prototype={areaStart:en,areaEnd:en,lineStart:function lineStart(){this._point=0;},lineEnd:function lineEnd(){this._point&&this._context.closePath();},point:function point(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n));}},Pn.prototype={areaStart:function areaStart(){this._line=0;},areaEnd:function areaEnd(){this._line=NaN;},lineStart:function lineStart(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0;},lineEnd:function lineEnd(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:En(this,this._t0,Fn(this,this._t0));}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function point(t,n){var e=NaN;if(t=+t,n=+n,t!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,En(this,Fn(this,e=Dn(this,t,n)),e);break;default:En(this,this._t0,e=Dn(this,t,n));}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e;}}},Hn.prototype={areaStart:function areaStart(){this._line=0;},areaEnd:function areaEnd(){this._line=NaN;},lineStart:function lineStart(){this._x=[],this._y=[];},lineEnd:function lineEnd(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=jn(t),i=jn(n),a=0,o=1;e>o;++a,++o){this._context.bezierCurveTo(r[0][a],i[0][a],r[1][a],i[1][a],t[o],n[o]);}(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null;},point:function point(t,n){this._x.push(+t),this._y.push(+n);}},qn.prototype={areaStart:function areaStart(){this._line=0;},areaEnd:function areaEnd(){this._line=NaN;},lineStart:function lineStart(){this._x=this._y=NaN,this._point=0;},lineEnd:function lineEnd(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line;},point:function point(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:var e=t>this._x?this._t:1-this._t;if(0>=e)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else if(e>=1)this._context.lineTo(t,this._y),this._context.lineTo(t,n);else{var r=(this._x+t)*e;this._context.lineTo(r,this._y),this._context.lineTo(r,n);}}this._x=t,this._y=n;}};var Hu=Array.prototype.slice,ju=.7,Yu=1/ju,qu=/^#([0-9a-f]{3})$/,zu=/^#([0-9a-f]{6})$/,Lu=/^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/,Uu=/^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Iu=/^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/,Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};ne.prototype=te.prototype={displayable:function displayable(){return this.rgb().displayable();},toString:function toString(){return this.rgb()+"";}};var Ru=re.prototype=ie.prototype=new te();Ru.brighter=function(t){return t=null==t?Yu:Math.pow(Yu,t),new ie(this.r*t,this.g*t,this.b*t);},Ru.darker=function(t){return t=null==t?ju:Math.pow(ju,t),new ie(this.r*t,this.g*t,this.b*t);},Ru.rgb=function(){return this;},Ru.displayable=function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255;},Ru.toString=function(){var t=Math.round(this.r),n=Math.round(this.g),e=Math.round(this.b);return"#"+(isNaN(t)||0>=t?"00":16>t?"0"+t.toString(16):t>=255?"ff":t.toString(16))+(isNaN(n)||0>=n?"00":16>n?"0"+n.toString(16):n>=255?"ff":n.toString(16))+(isNaN(e)||0>=e?"00":16>e?"0"+e.toString(16):e>=255?"ff":e.toString(16));};var Bu=ae.prototype=oe.prototype=new te();Bu.brighter=function(t){return t=null==t?Yu:Math.pow(Yu,t),new oe(this.h,this.s,this.l*t);},Bu.darker=function(t){return t=null==t?ju:Math.pow(ju,t),new oe(this.h,this.s,this.l*t);},Bu.rgb=function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(.5>e?e:1-e)*n,i=2*e-r;return new ie(ue(t>=240?t-240:t+120,i,r),ue(t,i,r),ue(120>t?t+240:t-120,i,r));},Bu.displayable=function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1;};var Xu=Math.PI/180,Wu=180/Math.PI,$u=18,Vu=.95047,Zu=1,Gu=1.08883,Ku=4/29,Qu=6/29,ts=3*Qu*Qu,ns=Qu*Qu*Qu,es=se.prototype=ce.prototype=new te();es.brighter=function(t){return new ce(this.l+$u*(null==t?1:t),this.a,this.b);},es.darker=function(t){return new ce(this.l-$u*(null==t?1:t),this.a,this.b);},es.rgb=function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return t=Zu*fe(t),n=Vu*fe(n),e=Gu*fe(e),new ie(le(3.2404542*n-1.5371385*t-.4985314*e),le(-.969266*n+1.8760108*t+.041556*e),le(.0556434*n-.2040259*t+1.0572252*e));};var rs=_e.prototype=ge.prototype=new te();rs.brighter=function(t){return new ge(this.h,this.c,this.l+$u*(null==t?1:t));},rs.darker=function(t){return new ge(this.h,this.c,this.l-$u*(null==t?1:t));},rs.rgb=function(){return se(this).rgb();};var is=-.14861,as=1.78277,os=-.29227,us=-.90649,ss=1.97294,cs=ss*us,hs=ss*as,fs=as*os-us*is,ls=me.prototype=pe.prototype=new te();ls.brighter=function(t){return t=null==t?Yu:Math.pow(Yu,t),new pe(this.h,this.s,this.l*t);},ls.darker=function(t){return t=null==t?ju:Math.pow(ju,t),new pe(this.h,this.s,this.l*t);},ls.rgb=function(){var t=isNaN(this.h)?0:(this.h+120)*Xu,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new ie(255*(n+e*(is*r+as*i)),255*(n+e*(os*r+us*i)),255*(n+e*(ss*r)));};var ds,_s=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,gs=new RegExp(_s.source,"g"),ms=[function(t,n){var e,r=typeof n==="undefined"?"undefined":_typeof(n);return("string"===r?(e=ne(n))?(n=e,ye):Te:n instanceof ne?ye:Array.isArray(n)?be:"object"===r&&isNaN(n)?xe:ve)(t,n);}],ps=180/Math.PI,ys={a:1,b:0,c:0,d:1,e:0,f:0},bs=Math.SQRT2,vs=2,xs=4,Ms=1e-12,ws=Array.prototype.slice;Ge.prototype=Ke.prototype,Qe.prototype=rr.prototype;var Ts,Ss,ks=Qe(","),Ns=Qe("  "),As=ur("text/html",function(t){return document.createRange().createContextualFragment(t.responseText);}),Cs=ur("application/json",function(t){return JSON.parse(t.responseText);}),Ds=ur("text/plain",function(t){return t.responseText;}),Fs=ur("application/xml",function(t){var n=t.responseXML;if(!n)throw new Error("parse error");return n;}),Es=sr("text/csv",ks),Ps=sr("text/tab-separated-values",Ns),Os=0,Hs=0,js=0,Ys={},qs="undefined"!=typeof window&&(window.requestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame)||function(t){return setTimeout(t,17);};hr.prototype=fr.prototype={restart:function restart(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?Date.now():+e)+(null==n?0:+n);var r=this.id,i=Ys[r];i?(i.callback=t,i.time=e):(i={next:null,callback:t,time:e},Ss?Ss.next=i:Ts=i,Ys[r]=Ss=i),_r();},stop:function stop(){var t=this.id,n=Ys[t];n&&(n.callback=null,n.time=1/0,delete Ys[t],_r());}};var zs=new Date(),Ls=new Date(),Us=gr(function(){},function(t,n){t.setTime(+t+n);},function(t,n){return n-t;});Us.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?gr(function(n){n.setTime(Math.floor(n/t)*t);},function(n,e){n.setTime(+n+e*t);},function(n,e){return(e-n)/t;}):Us:null;};var Is,Js=gr(function(t){t.setMilliseconds(0);},function(t,n){t.setTime(+t+1e3*n);},function(t,n){return(n-t)/1e3;},function(t){return t.getSeconds();}),Rs=gr(function(t){t.setSeconds(0,0);},function(t,n){t.setTime(+t+6e4*n);},function(t,n){return(n-t)/6e4;},function(t){return t.getMinutes();}),Bs=gr(function(t){t.setMinutes(0,0,0);},function(t,n){t.setTime(+t+36e5*n);},function(t,n){return(n-t)/36e5;},function(t){return t.getHours();}),Xs=gr(function(t){t.setHours(0,0,0,0);},function(t,n){t.setDate(t.getDate()+n);},function(t,n){return(n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5;},function(t){return t.getDate()-1;}),Ws=mr(0),$s=mr(1),Vs=mr(2),Zs=mr(3),Gs=mr(4),Ks=mr(5),Qs=mr(6),tc=gr(function(t){t.setHours(0,0,0,0),t.setDate(1);},function(t,n){t.setMonth(t.getMonth()+n);},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear());},function(t){return t.getMonth();}),nc=gr(function(t){t.setHours(0,0,0,0),t.setMonth(0,1);},function(t,n){t.setFullYear(t.getFullYear()+n);},function(t,n){return n.getFullYear()-t.getFullYear();},function(t){return t.getFullYear();}),ec=gr(function(t){t.setUTCMilliseconds(0);},function(t,n){t.setTime(+t+1e3*n);},function(t,n){return(n-t)/1e3;},function(t){return t.getUTCSeconds();}),rc=gr(function(t){t.setUTCSeconds(0,0);},function(t,n){t.setTime(+t+6e4*n);},function(t,n){return(n-t)/6e4;},function(t){return t.getUTCMinutes();}),ic=gr(function(t){t.setUTCMinutes(0,0,0);},function(t,n){t.setTime(+t+36e5*n);},function(t,n){return(n-t)/36e5;},function(t){return t.getUTCHours();}),ac=gr(function(t){t.setUTCHours(0,0,0,0);},function(t,n){t.setUTCDate(t.getUTCDate()+n);},function(t,n){return(n-t)/864e5;},function(t){return t.getUTCDate()-1;}),oc=pr(0),uc=pr(1),sc=pr(2),cc=pr(3),hc=pr(4),fc=pr(5),lc=pr(6),dc=gr(function(t){t.setUTCHours(0,0,0,0),t.setUTCDate(1);},function(t,n){t.setUTCMonth(t.getUTCMonth()+n);},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear());},function(t){return t.getUTCMonth();}),_c=gr(function(t){t.setUTCHours(0,0,0,0),t.setUTCMonth(0,1);},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n);},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear();},function(t){return t.getUTCFullYear();}),gc=Us.range,mc=Js.range,pc=Rs.range,yc=Bs.range,bc=Xs.range,vc=Ws.range,xc=$s.range,Mc=Vs.range,wc=Zs.range,Tc=Gs.range,Sc=Ks.range,kc=Qs.range,Nc=Ws.range,Ac=tc.range,Cc=nc.range,Dc=Us,Fc=gc,Ec=ec.range,Pc=rc.range,Oc=ic.range,Hc=ac.range,jc=oc.range,Yc=uc.range,qc=sc.range,zc=cc.range,Lc=hc.range,Uc=fc.range,Ic=lc.range,Jc=oc.range,Rc=dc.range,Bc=_c.range,Xc={"":wr,"%":function _(t,n){return(100*t).toFixed(n);},b:function b(t){return Math.round(t).toString(2);},c:function c(t){return t+"";},d:function d(t){return Math.round(t).toString(10);},e:function e(t,n){return t.toExponential(n);},f:function f(t,n){return t.toFixed(n);},g:function g(t,n){return t.toPrecision(n);},o:function o(t){return Math.round(t).toString(8);},p:function p(t,n){return Mr(100*t,n);},r:Mr,s:xr,X:function X(t){return Math.round(t).toString(16).toUpperCase();},x:function x(t){return Math.round(t).toString(16);}},Wc=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;Sr.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type;};var $c=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],Vc=Nr({decimal:".",thousands:",",grouping:[3],currency:["$",""]}),Zc=Nr({decimal:",",thousands:".",grouping:[3],currency:[""," €"]}),Gc=Nr({decimal:",",thousands:" ",grouping:[3],currency:[""," Kč"]}),Kc=Nr({decimal:",",thousands:"'",grouping:[3],currency:[""," CHF"]}),Qc=Nr({decimal:",",thousands:".",grouping:[3],currency:[""," €"]}),th=Nr({decimal:".",thousands:",",grouping:[3],currency:["$",""]}),nh=Nr({decimal:".",thousands:",",grouping:[3],currency:["£",""]}),eh=Nr({decimal:",",thousands:".",grouping:[3],currency:[""," €"]}),rh=Nr({decimal:",",thousands:" ",grouping:[3],currency:[""," €"]}),ih=Nr({decimal:",",thousands:" ",grouping:[3],currency:["","$"]}),ah=Nr({decimal:",",thousands:".",grouping:[3],currency:[""," €"]}),oh=Nr({decimal:".",thousands:",",grouping:[3],currency:["₪",""]}),uh=Nr({decimal:",",thousands:" ",grouping:[3],currency:[""," Ft"]}),sh=Nr({decimal:",",thousands:".",grouping:[3],currency:["€",""]}),ch=Nr({decimal:".",thousands:",",grouping:[3],currency:["","円"]}),hh=Nr({decimal:".",thousands:",",grouping:[3],currency:["₩",""]}),fh=Nr({decimal:",",thousands:".",grouping:[3],currency:[""," ден."]}),lh=Nr({decimal:",",thousands:".",grouping:[3],currency:["€ ",""]}),dh=Nr({decimal:",",thousands:".",grouping:[3],currency:["","zł"]}),_h=Nr({decimal:",",thousands:".",grouping:[3],currency:["R$",""]}),gh=Nr({decimal:",",thousands:" ",grouping:[3],currency:[""," руб."]}),mh=Nr({decimal:",",thousands:" ",grouping:[3],currency:["","SEK"]}),ph=Nr({decimal:".",thousands:",",grouping:[3],currency:["¥",""]}),yh=Vc.format,bh=Vc.formatPrefix,vh={"-":"",_:" ",0:"0"},xh=/^\s*\d+/,Mh=/^%/,wh=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,Th=Or({dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),Sh=Or({dateTime:"%A, %e de %B de %Y, %X",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],shortDays:["dg.","dl.","dt.","dc.","dj.","dv.","ds."],months:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"],shortMonths:["gen.","febr.","març","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."]}),kh=Or({dateTime:"%A, der %e. %B %Y, %X",date:"%d.%m.%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],shortDays:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],shortMonths:["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]}),Nh=Or({dateTime:"%A, der %e. %B %Y, %X",date:"%d.%m.%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],shortDays:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],shortMonths:["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]}),Ah=Or({dateTime:"%a %b %e %X %Y",date:"%Y-%m-%d",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),Ch=Or({dateTime:"%a %e %b %X %Y",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}),Dh=Or({dateTime:"%A, %e de %B de %Y, %X",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],shortDays:["dom","lun","mar","mié","jue","vie","sáb"],months:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],shortMonths:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"]}),Fh=Or({dateTime:"%A, %-d. %Bta %Y klo %X",date:"%-d.%-m.%Y",time:"%H:%M:%S",periods:["a.m.","p.m."],days:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"],shortDays:["Su","Ma","Ti","Ke","To","Pe","La"],months:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"],shortMonths:["Tammi","Helmi","Maalis","Huhti","Touko","Kesä","Heinä","Elo","Syys","Loka","Marras","Joulu"]}),Eh=Or({dateTime:"%a %e %b %Y %X",date:"%Y-%m-%d",time:"%H:%M:%S",periods:["",""],days:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],shortDays:["dim","lun","mar","mer","jeu","ven","sam"],months:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],shortMonths:["jan","fév","mar","avr","mai","jui","jul","aoû","sep","oct","nov","déc"]}),Ph=Or({dateTime:"%A, le %e %B %Y, %X",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],shortDays:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],months:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],shortMonths:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."]}),Oh=Or({dateTime:"%A, %e ב%B %Y %X",date:"%d.%m.%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"],shortDays:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],months:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],shortMonths:["ינו׳","פבר׳","מרץ","אפר׳","מאי","יוני","יולי","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"]}),Hh=Or({dateTime:"%Y. %B %-e., %A %X",date:"%Y. %m. %d.",time:"%H:%M:%S",periods:["de.","du."],days:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],shortDays:["V","H","K","Sze","Cs","P","Szo"],months:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"],shortMonths:["jan.","feb.","már.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."]}),jh=Or({dateTime:"%A %e %B %Y, %X",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"],shortDays:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],shortMonths:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"]}),Yh=Or({dateTime:"%Y %b %e %a %X",date:"%Y/%m/%d",time:"%H:%M:%S",periods:["AM","PM"],days:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],shortDays:["日","月","火","水","木","金","土"],months:["睦月","如月","弥生","卯月","皐月","水無月","文月","葉月","長月","神無月","霜月","師走"],shortMonths:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}),qh=Or({dateTime:"%Y/%m/%d %a %X",date:"%Y/%m/%d",time:"%H:%M:%S",periods:["오전","오후"],days:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],shortDays:["일","월","화","수","목","금","토"],months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],shortMonths:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]}),zh=Or({dateTime:"%A, %e %B %Y г. %X",date:"%d.%m.%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["недела","понеделник","вторник","среда","четврток","петок","сабота"],shortDays:["нед","пон","вто","сре","чет","пет","саб"],months:["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"],shortMonths:["јан","фев","мар","апр","мај","јун","јул","авг","сеп","окт","ное","дек"]}),Lh=Or({dateTime:"%a %e %B %Y %T",date:"%d-%m-%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],shortDays:["zo","ma","di","wo","do","vr","za"],months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],shortMonths:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"]}),Uh=Or({dateTime:"%A, %e %B %Y, %X",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],shortDays:["Niedz.","Pon.","Wt.","Śr.","Czw.","Pt.","Sob."],months:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],shortMonths:["Stycz.","Luty","Marz.","Kwie.","Maj","Czerw.","Lipc.","Sierp.","Wrz.","Paźdz.","Listop.","Grudz."]}),Ih=Or({dateTime:"%A, %e de %B de %Y. %X",date:"%d/%m/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]}),Jh=Or({dateTime:"%A, %e %B %Y г. %X",date:"%d.%m.%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],shortDays:["вс","пн","вт","ср","чт","пт","сб"],months:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],shortMonths:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"]}),Rh=Or({dateTime:"%A den %d %B %Y %X",date:"%Y-%m-%d",time:"%H:%M:%S",periods:["fm","em"],days:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],shortDays:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],shortMonths:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"]}),Bh=Or({dateTime:"%a %b %e %X %Y",date:"%Y/%-m/%-d",time:"%H:%M:%S",periods:["上午","下午"],days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],shortDays:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]}),Xh="%Y-%m-%dT%H:%M:%S.%LZ",Wh=Date.prototype.toISOString?Ai:Th.utcFormat(Xh),$h=+new Date("2000-01-01T00:00:00.000Z")?Ci:Th.utcParse(Xh),Vh=Th.format,Zh=Th.parse,Gh=Th.utcFormat,Kh=Th.utcParse,Qh=Array.prototype,tf=Qh.map,nf=Qh.slice,ef={},rf=[0,1],af=yh(".0e"),of=yh(","),uf=1e3,sf=60*uf,cf=60*sf,hf=24*cf,ff=7*hf,lf=30*hf,df=365*hf,_f=e(function(t){return t[2];}).right,gf=me(-100,.75,.35),mf=me(80,1.5,.8),pf=me(260,.75,.35),yf=me(),bf=$e(gf,mf),vf=$e(pf,mf),xf=fa("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"),Mf=fa("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"),wf=fa("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"),Tf=fa("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"),Sf=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,kf={};if(t.event=null,"undefined"!=typeof document){var Nf=document.documentElement;"onmouseenter"in Nf||(kf={mouseenter:"mouseover",mouseleave:"mouseout"});}var Af={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Cf="$";po.prototype={appendChild:function appendChild(t){return this._parent.insertBefore(t,this._next);},insertBefore:function insertBefore(t,n){return this._parent.insertBefore(t,n||this._next);},querySelector:function querySelector(t){return this._parent.querySelector(t);}};var Df=function Df(t){return function(){return this.matches(t);};};if("undefined"!=typeof document){var Ff=document.documentElement;if(!Ff.matches){var Ef=Ff.webkitMatchesSelector||Ff.msMatchesSelector||Ff.mozMatchesSelector||Ff.oMatchesSelector;Df=function Df(t){return function(){return Ef.call(this,t);};};}}Mo.prototype=wo.prototype={select:xo,selectAll:bo,filter:yo,data:mo,enter:_o,exit:lo,order:so,sort:oo,call:ro,nodes:eo,node:to,size:Qa,empty:Ka,each:Ga,attr:Za,style:Va,property:$a,classed:Ra,text:Ja,html:Ia,append:La,remove:Ya,datum:ja,on:Aa,dispatch:Oa};var Pf="undefined"!=typeof navigator&&/WebKit/.test(navigator.userAgent)?-1:0,Of=Array.prototype.slice,Hf=1e-6,jf={},Yf={},qf={},zf={};t.version=qo,t.bisect=Lo,t.bisectRight=Lo,t.bisectLeft=Uo,t.ascending=n,t.bisector=e,t.descending=i,t.deviation=u,t.extent=s,t.histogram=m,t.thresholdFreedmanDiaconis=y,t.thresholdScott=b,t.thresholdSturges=_,t.max=v,t.mean=x,t.median=M,t.merge=w,t.min=T,t.pairs=S,t.permute=k,t.quantile=p,t.range=f,t.scan=N,t.shuffle=A,t.sum=C,t.ticks=l,t.transpose=D,t.variance=o,t.zip=E,t.entries=R,t.keys=I,t.values=J,t.map=O,t.set=U,t.nest=H,t.randomUniform=B,t.randomNormal=X,t.randomLogNormal=W,t.randomBates=V,t.randomIrwinHall=$,t.randomExponential=Z,t.easeBind=tt,t.easeLinearIn=nt,t.easeLinearOut=nt,t.easeLinearInOut=nt,t.easeQuadIn=et,t.easeQuadOut=rt,t.easeQuadInOut=it,t.easeCubicIn=at,t.easeCubicOut=ot,t.easeCubicInOut=ut,t.easePolyIn=st,t.easePolyOut=ct,t.easePolyInOut=ht,t.easeSinIn=ft,t.easeSinOut=lt,t.easeSinInOut=dt,t.easeExpIn=_t,t.easeExpOut=gt,t.easeExpInOut=mt,t.easeCircleIn=pt,t.easeCircleOut=yt,t.easeCircleInOut=bt,t.easeBounceIn=vt,t.easeBounceOut=xt,t.easeBounceInOut=Mt,t.easeBackIn=wt,t.easeBackOut=Tt,t.easeBackInOut=St,t.easeElasticIn=kt,t.easeElasticOut=Nt,t.easeElasticInOut=At,t.path=Dt,t.arc=Lt,t.area=Xt,t.line=Wt,t.pie=Zt,t.radialArea=Qt,t.radialLine=tn,t.symbol=nn,t.symbols=Ou,t.symbolCircle=Pu,t.symbolCross=Eu,t.symbolDiamond=Fu,t.symbolSquare=Au,t.symbolStar=Nu,t.symbolTriangle=Mu,t.symbolWye=vu,t.curveBasisClosed=sn,t.curveBasisOpen=hn,t.curveBasis=on,t.curveBundle=ln,t.curveCardinalClosed=pn,t.curveCardinalOpen=bn,t.curveCardinal=gn,t.curveCatmullRomClosed=Tn,t.curveCatmullRomOpen=kn,t.curveCatmullRom=Mn,t.curveLinearClosed=An,t.curveLinear=Jt,t.curveMonotone=On,t.curveNatural=Yn,t.curveStep=zn,t.curveStepAfter=Un,t.curveStepBefore=Ln,t.stack=Bn,t.stackOffsetExpand=Xn,t.stackOffsetNone=In,t.stackOffsetSilhouette=Wn,t.stackOffsetWiggle=$n,t.stackOrderAscending=Vn,t.stackOrderDescending=Gn,t.stackOrderInsideOut=Kn,t.stackOrderNone=Jn,t.stackOrderReverse=Qn,t.color=ne,t.rgb=re,t.hsl=ae,t.lab=se,t.hcl=_e,t.cubehelix=me,t.interpolateBind=Ze,t.interpolate=Se,t.interpolators=ms,t.interpolateArray=be,t.interpolateNumber=ve,t.interpolateObject=xe,t.interpolateRound=ke,t.interpolateString=Te,t.interpolateTransform=je,t.interpolateZoom=Le,t.interpolateRgb=ye,t.interpolateHsl=Ie,t.interpolateHslLong=Je,t.interpolateLab=Re,t.interpolateHcl=Be,t.interpolateHclLong=Xe,t.interpolateCubehelix=We,t.interpolateCubehelixLong=$e,t.dispatch=Ge,t.dsv=Qe,t.csv=ks,t.tsv=Ns,t.request=ir,t.requestHtml=As,t.requestJson=Cs,t.requestText=Ds,t.requestXml=Fs,t.requestCsv=Es,t.requestTsv=Ps,t.timer=fr,t.timerFlush=lr,t.timeInterval=gr,t.timeMillisecond=Us,t.timeMilliseconds=gc,t.timeSecond=Js,t.timeSeconds=mc,t.timeMinute=Rs,t.timeMinutes=pc,t.timeHour=Bs,t.timeHours=yc,t.timeDay=Xs,t.timeDays=bc,t.timeWeek=Ws,t.timeWeeks=Nc,t.timeSunday=Ws,t.timeSundays=vc,t.timeMonday=$s,t.timeMondays=xc,t.timeTuesday=Vs,t.timeTuesdays=Mc,t.timeWednesday=Zs,t.timeWednesdays=wc,t.timeThursday=Gs,t.timeThursdays=Tc,t.timeFriday=Ks,t.timeFridays=Sc,t.timeSaturday=Qs,t.timeSaturdays=kc,t.timeMonth=tc,t.timeMonths=Ac,t.timeYear=nc,t.timeYears=Cc,t.utcMillisecond=Dc,t.utcMilliseconds=Fc,t.utcSecond=ec,t.utcSeconds=Ec,t.utcMinute=rc,t.utcMinutes=Pc,t.utcHour=ic,t.utcHours=Oc,t.utcDay=ac,t.utcDays=Hc,t.utcWeek=oc,t.utcWeeks=Jc,t.utcSunday=oc,t.utcSundays=jc,t.utcMonday=uc,t.utcMondays=Yc,t.utcTuesday=sc,t.utcTuesdays=qc,t.utcWednesday=cc,t.utcWednesdays=zc,t.utcThursday=hc,t.utcThursdays=Lc,t.utcFriday=fc,t.utcFridays=Uc,t.utcSaturday=lc,t.utcSaturdays=Ic,t.utcMonth=dc,t.utcMonths=Rc,t.utcYear=_c,t.utcYears=Bc,t.format=yh,t.formatPrefix=bh,t.formatLocale=Nr,t.formatCaEs=Zc,t.formatCsCz=Gc,t.formatDeCh=Kc,t.formatDeDe=Qc,t.formatEnCa=th,t.formatEnGb=nh,t.formatEnUs=Vc,t.formatEsEs=eh,t.formatFiFi=rh,t.formatFrCa=ih,t.formatFrFr=ah,t.formatHeIl=oh,t.formatHuHu=uh,t.formatItIt=sh,t.formatJaJp=ch,t.formatKoKr=hh,t.formatMkMk=fh,t.formatNlNl=lh,t.formatPlPl=dh,t.formatPtBr=_h,t.formatRuRu=gh,t.formatSvSe=mh,t.formatZhCn=ph,t.formatSpecifier=Tr,t.precisionFixed=Ar,t.precisionPrefix=Cr,t.precisionRound=Dr,t.timeFormat=Vh,t.timeParse=Zh,t.utcFormat=Gh,t.utcParse=Kh,t.isoFormat=Wh,t.isoParse=$h,t.timeFormatLocale=Or,t.timeFormatCaEs=Sh,t.timeFormatDeCh=kh,t.timeFormatDeDe=Nh,t.timeFormatEnCa=Ah,t.timeFormatEnGb=Ch,t.timeFormatEnUs=Th,t.timeFormatEsEs=Dh,t.timeFormatFiFi=Fh,t.timeFormatFrCa=Eh,t.timeFormatFrFr=Ph,t.timeFormatHeIl=Oh,t.timeFormatHuHu=Hh,t.timeFormatItIt=jh,t.timeFormatJaJp=Yh,t.timeFormatKoKr=qh,t.timeFormatMkMk=zh,t.timeFormatNlNl=Lh,t.timeFormatPlPl=Uh,t.timeFormatPtBr=Ih,t.timeFormatRuRu=Jh,t.timeFormatSvSe=Rh,t.timeFormatZhCn=Bh,t.scaleBand=Fi,t.scalePoint=Pi,t.scaleIdentity=Xi,t.scaleLinear=Bi,t.scaleLog=ta,t.scaleOrdinal=Di,t.scaleImplicit=ef,t.scalePow=ea,t.scaleSqrt=ra,t.scaleQuantile=ia,t.scaleQuantize=aa,t.scaleThreshold=oa,t.scaleTime=ca,t.scaleUtc=ha,t.scaleCategory10=la,t.scaleCategory20b=da,t.scaleCategory20c=_a,t.scaleCategory20=ga,t.scaleCubehelix=ma,t.scaleRainbow=xa,t.scaleWarm=ba,t.scaleCool=va,t.scaleViridis=wa,t.scaleMagma=Ta,t.scaleInferno=Sa,t.scalePlasma=ka,t.mouse=ko,t.namespace=qa,t.namespaces=Af,t.requote=Na,t.select=To,t.selectAll=No,t.selection=wo,t.touch=Ao,t.touches=Co,t.axisTop=Oo,t.axisRight=Ho,t.axisBottom=jo,t.axisLeft=Yo;});

/***/ },
/* 3 */
/*!*********************************!*\
  !*** ./~/jquery/dist/jquery.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.0.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-06-09T18:02Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	
	
		function DOMEval( code, doc ) {
			doc = doc || document;
	
			var script = doc.createElement( "script" );
	
			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	
	
	var
		version = "3.0.0",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||
	
				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||
	
					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( /*jshint -W002 */ value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList.then( fn );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
	
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) ),
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support: IE <=9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox <=42
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
	
			// If we already have the right measurement, avoid augmentation
			4 :
	
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* jshint -W083 */
				anim.done( function() {
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;
	
		} else {
			opt.duration = typeof opt.duration === "number" ?
				opt.duration : opt.duration in jQuery.fx.speeds ?
					jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
	
						// Handle most common string cases
						ret.replace( rreturn, "" ) :
	
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in uncached url if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rts, "" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win, rect, doc,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			rect = elem.getBoundingClientRect();
	
			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;
	
				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}
	
			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	jQuery.parseJSON = JSON.parse;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	return jQuery;
	} ) );


/***/ },
/* 4 */
/*!*******************************************!*\
  !*** ./public/assets/statChartBuilder.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _d = __webpack_require__(/*! ./../../lib/d3 */ 2);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _statHandler = __webpack_require__(/*! ./statHandler */ 5);
	
	var _statHandler2 = _interopRequireDefault(_statHandler);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var chart = function chart(target, htmlID, dataSet, xUpper) {
	    var xName = arguments.length <= 4 || arguments[4] === undefined ? 'X' : arguments[4];
	    var yUpper = arguments[5];
	    var yName = arguments.length <= 6 || arguments[6] === undefined ? 'Y' : arguments[6];
	
	    var graph = _d2.default.select('#' + target).append('svg').classed('graph', true).attr('id', htmlID);
	
	    // Calculate the dimension of graph
	    var _graphDimension = document.getElementById(htmlID).getBoundingClientRect();
	    var _graphWidth = _graphDimension.width;
	    var _graphHeight = _graphDimension.height;
	
	    // Define properties of graph
	
	    var _leftMargin = 70;
	    var _bottomMargin = 60;
	    var _topMargin = 60;
	
	    // Define x-axis
	    var x = _d2.default.scaleLinear().domain([0, xUpper]).range([_leftMargin, _graphWidth * 0.9]);
	    var _xLength = _graphWidth * 0.9 - _leftMargin;
	
	    // Append x-axis to graph
	    var xAxis = graph.append("g").attr("class", "axis axis--x").attr("transform", 'translate(0, ' + (_graphHeight - _bottomMargin) + ')').call(_d2.default.axisBottom(x).scale(x));
	
	    // Name x-axis with 'Followers'
	    xAxis.append('text').text(xName).attr('x', _leftMargin + _xLength / 2).attr('y', 40);
	
	    // Define y-axis
	    var _yLength = _graphHeight - _bottomMargin - _topMargin;
	    var y = _d2.default.scaleLinear().domain([0, yUpper]).range([_graphHeight - _bottomMargin, _topMargin]);
	
	    // Append y-axis to graph
	    var yAxis = graph.append("g").attr("class", "axis axis--y").attr("transform", 'translate(' + _leftMargin + ', 0)').call(_d2.default.axisLeft(y).scale(y));
	
	    // Name y-axis
	    yAxis.append("text").attr("class", "axis-title").attr("x", -10).attr("y", 50).text(yName);
	
	    var _xRatio = _xLength / xUpper;
	    var _yRatio = _yLength / yUpper;
	    graph.selectAll('dataPoints').data(dataSet).enter().append('svg:circle').attr('cx', function (data) {
	        return _leftMargin + data[1] * _xRatio;
	    }).attr('cy', function (data) {
	        return _graphHeight - _bottomMargin - data[0] * _yRatio;
	    }).classed('dot', true);
	
	    // compute correlation coefficient
	    var _xCollection = [];
	    var _yCollection = [];
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = dataSet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var data = _step.value;
	
	            _xCollection.push(data[1]);
	            _yCollection.push(data[0]);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    var correlation = _statHandler2.default.correlation(dataSet);
	    console.log('correlation', correlation);
	
	    // compute linear regression attributes
	    var _linearRegression = _statHandler2.default.leastSquares(_xCollection, _yCollection);
	    var x1 = _leftMargin;
	    var x2 = _graphWidth * 0.9;
	    var y1 = _graphHeight - _bottomMargin - _linearRegression.intercept * _yRatio;
	    var y2 = _graphHeight - _bottomMargin - (_linearRegression.intercept + _linearRegression.slope * xUpper) * _yRatio;
	
	    // Draw linear regression line
	    graph.selectAll('graphLine').data([{ x1: x1, x2: x2, y1: y1, y2: y2 }]).enter().append('svg:line')
	    // TODO: set max to _yUpper
	    .attr('x1', function (d) {
	        return d.x1;
	    }).attr('x2', function (d) {
	        return d.x2;
	    }).attr('y1', function (d) {
	        return d.y1;
	    }).attr('y2', function (d) {
	        return d.y2;
	    }).attr('stroke', 'red').attr('stroke-width', 2);
	};
	
	exports.default = chart;

/***/ },
/* 5 */
/*!**************************************!*\
  !*** ./public/assets/statHandler.js ***!
  \**************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Compute average
	var average = function average(arr) {
	  var total = arr.reduce(function (accumulator, num) {
	    return accumulator + num;
	  }, 0);
	  return total / arr.length;
	};
	
	// Compute correlation coefficient
	var correlation = function correlation(xyData) {
	  var _totalX = 0;
	  var _totalY = 0;
	  var _totalXSqrt = 0;
	  var _totalYSqrt = 0;
	  var _totalXY = 0; // x * y
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = xyData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var data = _step.value;
	
	      _totalX += data[1];
	      _totalXSqrt += Math.pow(data[1], 2.0);
	      _totalY += data[0];
	      _totalYSqrt += Math.pow(data[0], 2.0);
	      _totalXY += data[1] * data[0];
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  var _itemNum = xyData.length;
	  var _numerator = _itemNum * _totalXY - _totalX * _totalY;
	  var _demonimator = Math.sqrt((_itemNum * _totalXSqrt - Math.pow(_totalX, 2.0)) * (_itemNum * _totalYSqrt - Math.pow(_totalY, 2.0)));
	  var correlation = _numerator / _demonimator;
	  return correlation;
	};
	
	// Linear regression helper function
	var leastSquares = function leastSquares(xSeries, ySeries) {
	  var reduceSumFunc = function reduceSumFunc(prev, cur) {
	    return prev + cur;
	  };
	
	  var xAverage = average(xSeries);
	  var yAverage = average(ySeries);
	
	  var ssXX = xSeries.map(function (x) {
	    return Math.pow(x - xAverage, 2);
	  }).reduce(reduceSumFunc);
	  var ssYY = ySeries.map(function (y) {
	    return Math.pow(y - yAverage, 2);
	  }).reduce(reduceSumFunc);
	  var ssXY = xSeries.map(function (d, i) {
	    return (d - xAverage) * (ySeries[i] - yAverage);
	  }).reduce(reduceSumFunc);
	
	  var slope = ssXY / ssXX;
	  var intercept = yAverage - xAverage * slope;
	  var rSquare = Math.pow(ssXY, 2) / (ssXX * ssYY);
	
	  return { slope: slope, intercept: intercept, rSquare: rSquare };
	};
	
	exports.default = { average: average, correlation: correlation, leastSquares: leastSquares };

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map