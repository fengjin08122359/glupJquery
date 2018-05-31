/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function (a, b) {
  function cy (a) { return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1 } function cu (a) { if (!cj[a]) { var b = c.body, d = f('<' + a + '>').appendTo(b), e = d.css('display'); d.remove(); if (e === 'none' || e === '') { ck || (ck = c.createElement('iframe'), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck); if (!cl || !ck.createElement)cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? '<!doctype html>' : '') + '<html><body>'), cl.close(); d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, 'display'), b.removeChild(ck) }cj[a] = e } return cj[a] } function ct (a, b) { var c = {}; f.each(cp.concat.apply([], cp.slice(0, b)), function () { c[this] = a }); return c } function cs () { cq = b } function cr () { setTimeout(cs, 0); return cq = f.now() } function ci () { try { return new a.ActiveXObject('Microsoft.XMLHTTP') } catch (b) {} } function ch () { try { return new a.XMLHttpRequest() } catch (b) {} } function cb (a, c) { a.dataFilter && (c = a.dataFilter(c, a.dataType)); var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p; for (g = 1; g < i; g++) { if (g === 1) for (h in a.converters) typeof h === 'string' && (e[h.toLowerCase()] = a.converters[h]); l = k, k = d[g]; if (k === '*')k = l; else if (l !== '*' && l !== k) { m = l + ' ' + k, n = e[m] || e['* ' + k]; if (!n) { p = b; for (o in e) { j = o.split(' '); if (j[0] === l || j[0] === '*') { p = e[j[1] + ' ' + k]; if (p) { o = e[o], o === !0 ? n = p : p === !0 && (n = o); break } } } }!n && !p && f.error('No conversion from ' + m.replace(' ', ' to ')), n !== !0 && (c = n ? n(c) : p(o(c))) } } return c } function ca (a, c, d) { var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k; for (i in g)i in d && (c[g[i]] = d[i]); while (f[0] === '*')f.shift(), h === b && (h = a.mimeType || c.getResponseHeader('content-type')); if (h) for (i in e) if (e[i] && e[i].test(h)) { f.unshift(i); break } if (f[0] in d)j = f[0]; else { for (i in d) { if (!f[0] || a.converters[i + ' ' + f[0]]) { j = i; break }k || (k = i) }j = j || k } if (j) { j !== f[0] && f.unshift(j); return d[j] } } function b_ (a, b, c, d) { if (f.isArray(b))f.each(b, function (b, e) { c || bD.test(a) ? d(a, e) : b_(a + '[' + (typeof e === 'object' ? b : '') + ']', e, c, d) }); else if (!c && f.type(b) === 'object') for (var e in b)b_(a + '[' + e + ']', b[e], c, d); else d(a, b) } function b$ (a, c) { var d, e, g = f.ajaxSettings.flatOptions || {}; for (d in c)c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]); e && f.extend(!0, a, e) } function bZ (a, c, d, e, f, g) { f = f || c.dataTypes[0], g = g || {}, g[f] = !0; var h = a[f], i = 0, j = h ? h.length : 0, k = a === bS, l; for (;i < j && (k || !l); i++)l = h[i](c, d, e), typeof l === 'string' && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g))); (k || !l) && !g['*'] && (l = bZ(a, c, d, e, '*', g)); return l } function bY (a) { return function (b, c) { typeof b !== 'string' && (c = b, b = '*'); if (f.isFunction(c)) { var d = b.toLowerCase().split(bO), e = 0, g = d.length, h, i, j; for (;e < g; e++)h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || '*'), i = a[h] = a[h] || [], i[j ? 'unshift' : 'push'](c) } } } function bB (a, b, c) { var d = b === 'width' ? a.offsetWidth : a.offsetHeight, e = b === 'width' ? 1 : 0, g = 4; if (d > 0) { if (c !== 'border') for (;e < g; e += 2)c || (d -= parseFloat(f.css(a, 'padding' + bx[e])) || 0), c === 'margin' ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, 'border' + bx[e] + 'Width')) || 0; return d + 'px' }d = by(a, b); if (d < 0 || d == null)d = a.style[b]; if (bt.test(d)) return d; d = parseFloat(d) || 0; if (c) for (;e < g; e += 2)d += parseFloat(f.css(a, 'padding' + bx[e])) || 0, c !== 'padding' && (d += parseFloat(f.css(a, 'border' + bx[e] + 'Width')) || 0), c === 'margin' && (d += parseFloat(f.css(a, c + bx[e])) || 0); return d + 'px' } function bo (a) { var b = c.createElement('div'); bh.appendChild(b), b.innerHTML = a.outerHTML; return b.firstChild } function bn (a) { var b = (a.nodeName || '').toLowerCase(); b === 'input' ? bm(a) : b !== 'script' && typeof a.getElementsByTagName !== 'undefined' && f.grep(a.getElementsByTagName('input'), bm) } function bm (a) { if (a.type === 'checkbox' || a.type === 'radio')a.defaultChecked = a.checked } function bl (a) { return typeof a.getElementsByTagName !== 'undefined' ? a.getElementsByTagName('*') : typeof a.querySelectorAll !== 'undefined' ? a.querySelectorAll('*') : [] } function bk (a, b) { var c; b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === 'object' ? b.outerHTML = a.outerHTML : c !== 'input' || a.type !== 'checkbox' && a.type !== 'radio' ? c === 'option' ? b.selected = a.defaultSelected : c === 'input' || c === 'textarea' ? b.defaultValue = a.defaultValue : c === 'script' && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute('_submit_attached'), b.removeAttribute('_change_attached')) } function bj (a, b) { if (b.nodeType === 1 && !!f.hasData(a)) { var c, d, e, g = f._data(a), h = f._data(b, g), i = g.events; if (i) { delete h.handle, h.events = {}; for (c in i) for (d = 0, e = i[c].length; d < e; d++)f.event.add(b, c, i[c][d]) }h.data && (h.data = f.extend({}, h.data)) } } function bi (a, b) { return f.nodeName(a, 'table') ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody')) : a } function U (a) { var b = V.split('|'), c = a.createDocumentFragment(); if (c.createElement) while (b.length)c.createElement(b.pop()); return c } function T (a, b, c) { b = b || 0; if (f.isFunction(b)) return f.grep(a, function (a, d) { var e = !!b.call(a, d, a); return e === c }); if (b.nodeType) return f.grep(a, function (a, d) { return a === b === c }); if (typeof b === 'string') { var d = f.grep(a, function (a) { return a.nodeType === 1 }); if (O.test(b)) return f.filter(b, d, !c); b = f.filter(b, d) } return f.grep(a, function (a, d) { return f.inArray(a, b) >= 0 === c }) } function S (a) { return !a || !a.parentNode || a.parentNode.nodeType === 11 } function K () { return !0 } function J () { return !1 } function n (a, b, c) { var d = b + 'defer', e = b + 'queue', g = b + 'mark', h = f._data(a, d); h && (c === 'queue' || !f._data(a, e)) && (c === 'mark' || !f._data(a, g)) && setTimeout(function () { !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire()) }, 0) } function m (a) { for (var b in a) { if (b === 'data' && f.isEmptyObject(a[b])) continue; if (b !== 'toJSON') return !1 } return !0 } function l (a, c, d) { if (d === b && a.nodeType === 1) { var e = 'data-' + c.replace(k, '-$1').toLowerCase(); d = a.getAttribute(e); if (typeof d === 'string') { try { d = d === 'true' ? !0 : d === 'false' ? !1 : d === 'null' ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d } catch (g) {}f.data(a, c, d) } else d = b } return d } function h (a) { var b = g[a] = {}, c, d; a = a.split(/\s+/); for (c = 0, d = a.length; c < d; c++)b[a[c]] = !0; return b } var c = a.document, d = a.navigator, e = a.location, f = (function () { function J () { if (!e.isReady) { try { c.documentElement.doScroll('left') } catch (a) { setTimeout(J, 1); return }e.ready() } } var e = function (a, b) { return new e.fn.init(a, b, h) }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, n = /^[\],:{}\s]*$/, o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, q = /(?:^|:|,)(?:\s*\[)+/g, r = /(webkit)[ \/]([\w.]+)/, s = /(opera)(?:.*version)?[ \/]([\w.]+)/, t = /(msie) ([\w.]+)/, u = /(mozilla)(?:.*? rv:([\w.]+))?/, v = /-([a-z]|[0-9])/ig, w = /^-ms-/, x = function (a, b) { return (b + '').toUpperCase() }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {}; e.fn = e.prototype = {constructor: e, init: function (a, d, f) { var g, h, j, k; if (!a) return this; if (a.nodeType) { this.context = this[0] = a, this.length = 1; return this } if (a === 'body' && !d && c.body) { this.context = c, this[0] = c.body, this.selector = a, this.length = 1; return this } if (typeof a === 'string') { a.charAt(0) !== '<' || a.charAt(a.length - 1) !== '>' || a.length < 3 ? g = i.exec(a) : g = [null, a, null]; if (g && (g[1] || !d)) { if (g[1]) { d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes); return e.merge(this, a) }h = c.getElementById(g[2]); if (h && h.parentNode) { if (h.id !== g[2]) return f.find(a); this.length = 1, this[0] = h } this.context = c, this.selector = a; return this } return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a) } if (e.isFunction(a)) return f.ready(a); a.selector !== b && (this.selector = a.selector, this.context = a.context); return e.makeArray(a, this) }, selector: '', jquery: '1.7.2', length: 0, size: function () { return this.length }, toArray: function () { return F.call(this, 0) }, get: function (a) { return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a] }, pushStack: function (a, b, c) { var d = this.constructor(); e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === 'find' ? d.selector = this.selector + (this.selector ? ' ' : '') + c : b && (d.selector = this.selector + '.' + b + '(' + c + ')'); return d }, each: function (a, b) { return e.each(this, a, b) }, ready: function (a) { e.bindReady(), A.add(a); return this }, eq: function (a) { a = +a; return a === -1 ? this.slice(a) : this.slice(a, a + 1) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, slice: function () { return this.pushStack(F.apply(this, arguments), 'slice', F.call(arguments).join(',')) }, map: function (a) { return this.pushStack(e.map(this, function (b, c) { return a.call(b, c, b) })) }, end: function () { return this.prevObject || this.constructor(null) }, push: E, sort: [].sort, splice: [].splice}, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () { var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1; typeof i === 'boolean' && (l = i, i = arguments[1] || {}, j = 2), typeof i !== 'object' && !e.isFunction(i) && (i = {}), k === j && (i = this, --j); for (;j < k; j++) if ((a = arguments[j]) != null) for (c in a) { d = i[c], f = a[c]; if (i === f) continue; l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f) } return i }, e.extend({noConflict: function (b) { a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f); return e }, isReady: !1, readyWait: 1, holdReady: function (a) { a ? e.readyWait++ : e.ready(!0) }, ready: function (a) { if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) { if (!c.body) return setTimeout(e.ready, 1); e.isReady = !0; if (a !== !0 && --e.readyWait > 0) return; A.fireWith(c, [e]), e.fn.trigger && e(c).trigger('ready').off('ready') } }, bindReady: function () { if (!A) { A = e.Callbacks('once memory'); if (c.readyState === 'complete') return setTimeout(e.ready, 1); if (c.addEventListener)c.addEventListener('DOMContentLoaded', B, !1), a.addEventListener('load', e.ready, !1); else if (c.attachEvent) { c.attachEvent('onreadystatechange', B), a.attachEvent('onload', e.ready); var b = !1; try { b = a.frameElement == null } catch (d) {}c.documentElement.doScroll && b && J() } } }, isFunction: function (a) { return e.type(a) === 'function' }, isArray: Array.isArray || function (a) { return e.type(a) === 'array' }, isWindow: function (a) { return a != null && a == a.window }, isNumeric: function (a) { return !isNaN(parseFloat(a)) && isFinite(a) }, type: function (a) { return a == null ? String(a) : I[C.call(a)] || 'object' }, isPlainObject: function (a) { if (!a || e.type(a) !== 'object' || a.nodeType || e.isWindow(a)) return !1; try { if (a.constructor && !D.call(a, 'constructor') && !D.call(a.constructor.prototype, 'isPrototypeOf')) return !1 } catch (c) { return !1 } var d; for (d in a);return d === b || D.call(a, d) }, isEmptyObject: function (a) { for (var b in a) return !1; return !0 }, error: function (a) { throw new Error(a) }, parseJSON: function (b) { if (typeof b !== 'string' || !b) return null; b = e.trim(b); if (a.JSON && a.JSON.parse) return a.JSON.parse(b); if (n.test(b.replace(o, '@').replace(p, ']').replace(q, ''))) return (new Function('return ' + b))(); e.error('Invalid JSON: ' + b) }, parseXML: function (c) { if (typeof c !== 'string' || !c) return null; var d, f; try { a.DOMParser ? (f = new DOMParser(), d = f.parseFromString(c, 'text/xml')) : (d = new ActiveXObject('Microsoft.XMLDOM'), d.async = 'false', d.loadXML(c)) } catch (g) { d = b }(!d || !d.documentElement || d.getElementsByTagName('parsererror').length) && e.error('Invalid XML: ' + c); return d }, noop: function () {}, globalEval: function (b) { b && j.test(b) && (a.execScript || function (b) { a.eval.call(a, b) })(b) }, camelCase: function (a) { return a.replace(w, 'ms-').replace(v, x) }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase() }, each: function (a, c, d) { var f, g = 0, h = a.length, i = h === b || e.isFunction(a); if (d) { if (i) { for (f in a) if (c.apply(a[f], d) === !1) break } else for (;g < h;) if (c.apply(a[g++], d) === !1) break } else if (i) { for (f in a) if (c.call(a[f], f, a[f]) === !1) break } else for (;g < h;) if (c.call(a[g], g, a[g++]) === !1) break; return a }, trim: G ? function (a) { return a == null ? '' : G.call(a) } : function (a) { return a == null ? '' : (a + '').replace(k, '').replace(l, '') }, makeArray: function (a, b) { var c = b || []; if (a != null) { var d = e.type(a); a.length == null || d === 'string' || d === 'function' || d === 'regexp' || e.isWindow(a) ? E.call(c, a) : e.merge(c, a) } return c }, inArray: function (a, b, c) { var d; if (b) { if (H) return H.call(b, a, c); d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0; for (;c < d; c++) if (c in b && b[c] === a) return c } return -1 }, merge: function (a, c) { var d = a.length, e = 0; if (typeof c.length === 'number') for (var f = c.length; e < f; e++)a[d++] = c[e]; else while (c[e] !== b)a[d++] = c[e++]; a.length = d; return a }, grep: function (a, b, c) { var d = [], e; c = !!c; for (var f = 0, g = a.length; f < g; f++)e = !!b(a[f], f), c !== e && d.push(a[f]); return d }, map: function (a, c, d) { var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j === 'number' && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a)); if (k) for (;i < j; i++)f = c(a[i], i, d), f != null && (h[h.length] = f); else for (g in a)f = c(a[g], g, d), f != null && (h[h.length] = f); return h.concat.apply([], h) }, guid: 1, proxy: function (a, c) { if (typeof c === 'string') { var d = a[c]; c = a, a = d } if (!e.isFunction(a)) return b; var f = F.call(arguments, 2), g = function () { return a.apply(c, f.concat(F.call(arguments))) }; g.guid = a.guid = a.guid || g.guid || e.guid++; return g }, access: function (a, c, d, f, g, h, i) { var j, k = d == null, l = 0, m = a.length; if (d && typeof d === 'object') { for (l in d)e.access(a, c, l, d[l], 1, h, f); g = 1 } else if (f !== b) { j = i === b && e.isFunction(f), k && (j ? (j = c, c = function (a, b, c) { return j.call(e(a), c) }) : (c.call(a, f), c = null)); if (c) for (;l < m; l++)c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i); g = 1 } return g ? a : k ? c.call(a) : m ? c(a[0], d) : h }, now: function () { return (new Date()).getTime() }, uaMatch: function (a) { a = a.toLowerCase(); var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf('compatible') < 0 && u.exec(a) || []; return {browser: b[1] || '', version: b[2] || '0'} }, sub: function () { function a (b, c) { return new a.fn.init(b, c) }e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) { f && f instanceof e && !(f instanceof a) && (f = a(f)); return e.fn.init.call(this, d, f, b) }, a.fn.init.prototype = a.fn; var b = a(c); return a }, browser: {}}), e.each('Boolean Number String Function Array Date RegExp Object'.split(' '), function (a, b) { I['[object ' + b + ']'] = b.toLowerCase() }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(' ') && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function () { c.removeEventListener('DOMContentLoaded', B, !1), e.ready() } : c.attachEvent && (B = function () { c.readyState === 'complete' && (c.detachEvent('onreadystatechange', B), e.ready()) }); return e }()), g = {}; f.Callbacks = function (a) { a = a ? g[a] || h(a) : {}; var c = [], d = [], e, i, j, k, l, m, n = function (b) { var d, e, g, h, i; for (d = 0, e = b.length; d < e; d++)g = b[d], h = f.type(g), h === 'array' ? n(g) : h === 'function' && (!a.unique || !p.has(g)) && c.push(g) }, o = function (b, f) { f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length; for (;c && m < l; m++) if (c[m].apply(b, f) === !1 && a.stopOnFalse) { e = !0; break }j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1]))) }, p = {add: function () { if (c) { var a = c.length; n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1])) } return this }, remove: function () { if (c) { var b = arguments, d = 0, e = b.length; for (;d < e; d++) for (var f = 0; f < c.length; f++) if (b[d] === c[f]) { j && f <= l && (l--, f <= m && m--), c.splice(f--, 1); if (a.unique) break } } return this }, has: function (a) { if (c) { var b = 0, d = c.length; for (;b < d; b++) if (a === c[b]) return !0 } return !1 }, empty: function () { c = []; return this }, disable: function () { c = d = e = b; return this }, disabled: function () { return !c }, lock: function () { d = b, (!e || e === !0) && p.disable(); return this }, locked: function () { return !d }, fireWith: function (b, c) { d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c)); return this }, fire: function () { p.fireWith(this, arguments); return this }, fired: function () { return !!i }}; return p }; var i = [].slice; f.extend({Deferred: function (a) { var b = f.Callbacks('once memory'), c = f.Callbacks('once memory'), d = f.Callbacks('memory'), e = 'pending', g = {resolve: b, reject: c, notify: d}, h = {done: b.add, fail: c.add, progress: d.add, state: function () { return e }, isResolved: b.fired, isRejected: c.fired, then: function (a, b, c) { i.done(a).fail(b).progress(c); return this }, always: function () { i.done.apply(i, arguments).fail.apply(i, arguments); return this }, pipe: function (a, b, c) { return f.Deferred(function (d) { f.each({done: [a, 'resolve'], fail: [b, 'reject'], progress: [c, 'notify']}, function (a, b) { var c = b[0], e = b[1], g; f.isFunction(c) ? i[a](function () { g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + 'With'](this === i ? d : this, [g]) }) : i[a](d[e]) }) }).promise() }, promise: function (a) { if (a == null)a = h; else for (var b in h)a[b] = h[b]; return a }}, i = h.promise({}), j; for (j in g)i[j] = g[j].fire, i[j + 'With'] = g[j].fireWith; i.done(function () { e = 'resolved' }, c.disable, d.lock).fail(function () { e = 'rejected' }, b.disable, d.lock), a && a.call(i, i); return i }, when: function (a) { function m (a) { return function (b) { e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e) } } function l (a) { return function (c) { b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b) } } var b = i.call(arguments, 0), c = 0, d = b.length, e = Array(d), g = d, h = d, j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(), k = j.promise(); if (d > 1) { for (;c < d; c++)b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g; g || j.resolveWith(j, b) } else j !== a && j.resolveWith(j, d ? [a] : []); return k }}), f.support = (function () { var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement('div'), q = c.documentElement; p.setAttribute('className', 't'), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName('*'), e = p.getElementsByTagName('a')[0]; if (!d || !d.length || !e) return {}; g = c.createElement('select'), h = g.appendChild(c.createElement('option')), i = p.getElementsByTagName('input')[0], b = {leadingWhitespace: p.firstChild.nodeType === 3, tbody: !p.getElementsByTagName('tbody').length, htmlSerialize: !!p.getElementsByTagName('link').length, style: /top/.test(e.getAttribute('style')), hrefNormalized: e.getAttribute('href') === '/a', opacity: /^0.55/.test(e.style.opacity), cssFloat: !!e.style.cssFloat, checkOn: i.value === 'on', optSelected: h.selected, getSetAttribute: p.className !== 't', enctype: !!c.createElement('form').enctype, html5Clone: c.createElement('nav').cloneNode(!0).outerHTML !== '<:nav></:nav>', submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, pixelMargin: !0}, f.boxModel = b.boxModel = c.compatMode === 'CSS1Compat', i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled; try { delete p.test } catch (r) { b.deleteExpando = !1 }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent('onclick', function () { b.noCloneEvent = !1 }), p.cloneNode(!0).fireEvent('onclick')), i = c.createElement('input'), i.value = 't', i.setAttribute('type', 'radio'), b.radioValue = i.value === 't', i.setAttribute('checked', 'checked'), i.setAttribute('name', 't'), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p); if (p.attachEvent) for (n in {submit: 1, change: 1, focusin: 1})m = 'on' + n, o = m in p, o || (p.setAttribute(m, 'return;'), o = typeof p[m] === 'function'), b[n + 'Bubbles'] = o; j.removeChild(p), j = g = h = p = i = null, f(function () { var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName('body')[0]; !u || (m = 1, t = 'padding:0;margin:0;border:', r = 'position:absolute;top:0;left:0;width:1px;height:1px;', s = t + '0;visibility:hidden;', n = "style='" + r + t + '5px solid #000;', q = '<div ' + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + '<table ' + n + "' cellpadding='0' cellspacing='0'>" + '<tr><td></td></tr></table>', d = c.createElement('div'), d.style.cssText = s + 'width:0;height:0;position:static;top:0;margin-top:' + m + 'px', u.insertBefore(d, u.firstChild), p = c.createElement('div'), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName('td'), o = k[0].offsetHeight === 0, k[0].style.display = '', k[1].style.display = 'none', b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = '', l = c.createElement('div'), l.style.width = '0', l.style.marginRight = '0', p.style.width = '2px', p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {marginRight: 0}).marginRight, 10) || 0) === 0), typeof p.style.zoom !== 'undefined' && (p.innerHTML = '', p.style.width = p.style.padding = '1px', p.style.border = 0, p.style.overflow = 'hidden', p.style.display = 'inline', p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = 'block', p.style.overflow = 'visible', p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {doesNotAddBorder: g.offsetTop !== 5, doesAddBorderForTableAndCells: i.offsetTop === 5}, g.style.position = 'fixed', g.style.top = '20px', j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = '', e.style.overflow = 'hidden', e.style.position = 'relative', j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = '1%', b.pixelMargin = (a.getComputedStyle(p, null) || {marginTop: 0}).marginTop !== '1%'), typeof d.style.zoom !== 'undefined' && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j)) }); return b }()); var j = /^(?:\{.*\}|\[.*\])$/, k = /([A-Z])/g; f.extend({cache: {}, uuid: 0, expando: 'jQuery' + (f.fn.jquery + Math.random()).replace(/\D/g, ''), noData: {embed: !0, object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000', applet: !0}, hasData: function (a) { a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando]; return !!a && !m(a) }, data: function (a, c, d, e) { if (f.acceptData(a)) { var g, h, i, j = f.expando, k = typeof c === 'string', l = a.nodeType, m = l ? f.cache : a, n = l ? a[j] : a[j] && j, o = c === 'events'; if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return; n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop)); if (typeof c === 'object' || typeof c === 'function')e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c); g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d); if (o && !h[c]) return g.events; k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h; return i } }, removeData: function (a, b, c) { if (f.acceptData(a)) { var d, e, g, h = f.expando, i = a.nodeType, j = i ? f.cache : a, k = i ? a[h] : h; if (!j[k]) return; if (b) { d = c ? j[k] : j[k].data; if (d) { f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(' '))); for (e = 0, g = b.length; e < g; e++) delete d[b[e]]; if (!(c ? m : f.isEmptyObject)(d)) return } } if (!c) { delete j[k].data; if (!m(j[k])) return }f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null) } }, _data: function (a, b, c) { return f.data(a, b, c, !0) }, acceptData: function (a) { if (a.nodeName) { var b = f.noData[a.nodeName.toLowerCase()]; if (b) return b !== !0 && a.getAttribute('classid') === b } return !0 }}), f.fn.extend({data: function (a, c) { var d, e, g, h, i, j = this[0], k = 0, m = null; if (a === b) { if (this.length) { m = f.data(j); if (j.nodeType === 1 && !f._data(j, 'parsedAttrs')) { g = j.attributes; for (i = g.length; k < i; k++)h = g[k].name, h.indexOf('data-') === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h])); f._data(j, 'parsedAttrs', !0) } } return m } if (typeof a === 'object') return this.each(function () { f.data(this, a) }); d = a.split('.', 2), d[1] = d[1] ? '.' + d[1] : '', e = d[1] + '!'; return f.access(this, function (c) { if (c === b) { m = this.triggerHandler('getData' + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m)); return m === b && d[1] ? this.data(d[0]) : m }d[1] = c, this.each(function () { var b = f(this); b.triggerHandler('setData' + e, d), f.data(this, a, c), b.triggerHandler('changeData' + e, d) }) }, null, c, arguments.length > 1, null, !1) }, removeData: function (a) { return this.each(function () { f.removeData(this, a) }) }}), f.extend({_mark: function (a, b) { a && (b = (b || 'fx') + 'mark', f._data(a, b, (f._data(a, b) || 0) + 1)) }, _unmark: function (a, b, c) { a !== !0 && (c = b, b = a, a = !1); if (b) { c = c || 'fx'; var d = c + 'mark', e = a ? 0 : (f._data(b, d) || 1) - 1; e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, 'mark')) } }, queue: function (a, b, c) { var d; if (a) { b = (b || 'fx') + 'queue', d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c)); return d || [] } }, dequeue: function (a, b) { b = b || 'fx'; var c = f.queue(a, b), d = c.shift(), e = {}; d === 'inprogress' && (d = c.shift()), d && (b === 'fx' && c.unshift('inprogress'), f._data(a, b + '.run', e), d.call(a, function () { f.dequeue(a, b) }, e)), c.length || (f.removeData(a, b + 'queue ' + b + '.run', !0), n(a, b, 'queue')) }}), f.fn.extend({queue: function (a, c) { var d = 2; typeof a !== 'string' && (c = a, a = 'fx', d--); if (arguments.length < d) return f.queue(this[0], a); return c === b ? this : this.each(function () { var b = f.queue(this, a, c); a === 'fx' && b[0] !== 'inprogress' && f.dequeue(this, a) }) }, dequeue: function (a) { return this.each(function () { f.dequeue(this, a) }) }, delay: function (a, b) { a = f.fx ? f.fx.speeds[a] || a : a, b = b || 'fx'; return this.queue(b, function (b, c) { var d = setTimeout(b, a); c.stop = function () { clearTimeout(d) } }) }, clearQueue: function (a) { return this.queue(a || 'fx', []) }, promise: function (a, c) { function m () { --h || d.resolveWith(e, [e]) } typeof a !== 'string' && (c = a, a = b), a = a || 'fx'; var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + 'defer', j = a + 'queue', k = a + 'mark', l; while (g--) if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks('once memory'), !0))h++, l.add(m); m(); return d.promise(c) }}); var o = /[\n\t\r]/g, p = /\s+/, q = /\r/g, r = /^(?:button|input)$/i, s = /^(?:button|input|object|select|textarea)$/i, t = /^a(?:rea)?$/i, u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, v = f.support.getSetAttribute, w, x, y; f.fn.extend({attr: function (a, b) { return f.access(this, f.attr, a, b, arguments.length > 1) }, removeAttr: function (a) { return this.each(function () { f.removeAttr(this, a) }) }, prop: function (a, b) { return f.access(this, f.prop, a, b, arguments.length > 1) }, removeProp: function (a) { a = f.propFix[a] || a; return this.each(function () { try { this[a] = b, delete this[a] } catch (c) {} }) }, addClass: function (a) { var b, c, d, e, g, h, i; if (f.isFunction(a)) return this.each(function (b) { f(this).addClass(a.call(this, b, this.className)) }); if (a && typeof a === 'string') { b = a.split(p); for (c = 0, d = this.length; c < d; c++) { e = this[c]; if (e.nodeType === 1) if (!e.className && b.length === 1)e.className = a; else { g = ' ' + e.className + ' '; for (h = 0, i = b.length; h < i; h++)~g.indexOf(' ' + b[h] + ' ') || (g += b[h] + ' '); e.className = f.trim(g) } } } return this }, removeClass: function (a) { var c, d, e, g, h, i, j; if (f.isFunction(a)) return this.each(function (b) { f(this).removeClass(a.call(this, b, this.className)) }); if (a && typeof a === 'string' || a === b) { c = (a || '').split(p); for (d = 0, e = this.length; d < e; d++) { g = this[d]; if (g.nodeType === 1 && g.className) if (a) { h = (' ' + g.className + ' ').replace(o, ' '); for (i = 0, j = c.length; i < j; i++)h = h.replace(' ' + c[i] + ' ', ' '); g.className = f.trim(h) } else g.className = '' } } return this }, toggleClass: function (a, b) { var c = typeof a, d = typeof b === 'boolean'; if (f.isFunction(a)) return this.each(function (c) { f(this).toggleClass(a.call(this, c, this.className, b), b) }); return this.each(function () { if (c === 'string') { var e, g = 0, h = f(this), i = b, j = a.split(p); while (e = j[g++])i = d ? i : !h.hasClass(e), h[i ? 'addClass' : 'removeClass'](e) } else if (c === 'undefined' || c === 'boolean') this.className && f._data(this, '__className__', this.className), this.className = this.className || a === !1 ? '' : f._data(this, '__className__') || '' }) }, hasClass: function (a) { var b = ' ' + a + ' ', c = 0, d = this.length; for (;c < d; c++) if (this[c].nodeType === 1 && (' ' + this[c].className + ' ').replace(o, ' ').indexOf(b) > -1) return !0; return !1 }, val: function (a) { var c, d, e, g = this[0]; { if (arguments.length) { e = f.isFunction(a); return this.each(function (d) { var g = f(this), h; if (this.nodeType === 1) { e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = '' : typeof h === 'number' ? h += '' : f.isArray(h) && (h = f.map(h, function (a) { return a == null ? '' : a + '' })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()]; if (!c || !('set' in c) || c.set(this, h, 'value') === b) this.value = h } }) } if (g) { c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()]; if (c && 'get' in c && (d = c.get(g, 'value')) !== b) return d; d = g.value; return typeof d === 'string' ? d.replace(q, '') : d == null ? '' : d } } }}), f.extend({valHooks: {option: {get: function (a) { var b = a.attributes.value; return !b || b.specified ? a.value : a.text }}, select: {get: function (a) { var b, c, d, e, g = a.selectedIndex, h = [], i = a.options, j = a.type === 'select-one'; if (g < 0) return null; c = j ? g : 0, d = j ? g + 1 : i.length; for (;c < d; c++) { e = i[c]; if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute('disabled') === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, 'optgroup'))) { b = f(e).val(); if (j) return b; h.push(b) } } if (j && !h.length && i.length) return f(i[g]).val(); return h }, set: function (a, b) { var c = f.makeArray(b); f(a).find('option').each(function () { this.selected = f.inArray(f(this).val(), c) >= 0 }), c.length || (a.selectedIndex = -1); return c }}}, attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0}, attr: function (a, c, d, e) { var g, h, i, j = a.nodeType; if (!!a && j !== 3 && j !== 8 && j !== 2) { if (e && c in f.attrFn) return f(a)[c](d); if (typeof a.getAttribute === 'undefined') return f.prop(a, c, d); i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w)); if (d !== b) { if (d === null) { f.removeAttr(a, c); return } if (h && 'set' in h && i && (g = h.set(a, d, c)) !== b) return g; a.setAttribute(c, '' + d); return d } if (h && 'get' in h && i && (g = h.get(a, c)) !== null) return g; g = a.getAttribute(c); return g === null ? b : g } }, removeAttr: function (a, b) { var c, d, e, g, h, i = 0; if (b && a.nodeType === 1) { d = b.toLowerCase().split(p), g = d.length; for (;i < g; i++)e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ''), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1)) } }, attrHooks: {type: {set: function (a, b) { if (r.test(a.nodeName) && a.parentNode)f.error("type property can't be changed"); else if (!f.support.radioValue && b === 'radio' && f.nodeName(a, 'input')) { var c = a.value; a.setAttribute('type', b), c && (a.value = c); return b } }}, value: {get: function (a, b) { if (w && f.nodeName(a, 'button')) return w.get(a, b); return b in a ? a.value : null }, set: function (a, b, c) { if (w && f.nodeName(a, 'button')) return w.set(a, b, c); a.value = b }}}, propFix: {tabindex: 'tabIndex', readonly: 'readOnly', 'for': 'htmlFor', 'class': 'className', maxlength: 'maxLength', cellspacing: 'cellSpacing', cellpadding: 'cellPadding', rowspan: 'rowSpan', colspan: 'colSpan', usemap: 'useMap', frameborder: 'frameBorder', contenteditable: 'contentEditable'}, prop: function (a, c, d) { var e, g, h, i = a.nodeType; if (!!a && i !== 3 && i !== 8 && i !== 2) { h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]); return d !== b ? g && 'set' in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && 'get' in g && (e = g.get(a, c)) !== null ? e : a[c] } }, propHooks: {tabIndex: {get: function (a) { var c = a.getAttributeNode('tabindex'); return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b }}}}), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {get: function (a, c) { var d, e = f.prop(a, c); return e === !0 || typeof e !== 'boolean' && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b }, set: function (a, b, c) { var d; b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())); return c }}, v || (y = {name: !0, id: !0, coords: !0}, w = f.valHooks.button = {get: function (a, c) { var d; d = a.getAttributeNode(c); return d && (y[c] ? d.nodeValue !== '' : d.specified) ? d.nodeValue : b }, set: function (a, b, d) { var e = a.getAttributeNode(d); e || (e = c.createAttribute(d), a.setAttributeNode(e)); return e.nodeValue = b + '' }}, f.attrHooks.tabindex.set = w.set, f.each(['width', 'height'], function (a, b) { f.attrHooks[b] = f.extend(f.attrHooks[b], {set: function (a, c) { if (c === '') { a.setAttribute(b, 'auto'); return c } }}) }), f.attrHooks.contenteditable = {get: w.get, set: function (a, b, c) { b === '' && (b = 'false'), w.set(a, b, c) }}), f.support.hrefNormalized || f.each(['href', 'src', 'width', 'height'], function (a, c) { f.attrHooks[c] = f.extend(f.attrHooks[c], {get: function (a) { var d = a.getAttribute(c, 2); return d === null ? b : d }}) }), f.support.style || (f.attrHooks.style = {get: function (a) { return a.style.cssText.toLowerCase() || b }, set: function (a, b) { return a.style.cssText = '' + b }}), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {get: function (a) { var b = a.parentNode; b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex); return null }})), f.support.enctype || (f.propFix.enctype = 'encoding'), f.support.checkOn || f.each(['radio', 'checkbox'], function () { f.valHooks[this] = {get: function (a) { return a.getAttribute('value') === null ? 'on' : a.value }} }), f.each(['radio', 'checkbox'], function () { f.valHooks[this] = f.extend(f.valHooks[this], {set: function (a, b) { if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0 }}) }); var z = /^(?:textarea|input|select)$/i, A = /^([^\.]*)?(?:\.(.+))?$/, B = /(?:^|\s)hover(\.\S+)?\b/, C = /^key/, D = /^(?:mouse|contextmenu)|click/, E = /^(?:focusinfocus|focusoutblur)$/, F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, G = function (
      a) { var b = F.exec(a); b && (b[1] = (b[1] || '').toLowerCase(), b[3] = b[3] && new RegExp('(?:^|\\s)' + b[3] + '(?:\\s|$)')); return b }, H = function (a, b) { var c = a.attributes || {}; return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c['class'] || {}).value)) }, I = function (a) { return f.event.special.hover ? a : a.replace(B, 'mouseenter$1 mouseleave$1') }; f.event = {add: function (a, c, d, e, g) { var h, i, j, k, l, m, n, o, p, q, r, s; if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) { d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function (a) { return typeof f !== 'undefined' && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b }, i.elem = a), c = f.trim(I(c)).split(' '); for (k = 0; k < c.length; k++) { l = A.exec(c[k]) || [], m = l[1], n = (l[2] || '').split('.').sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({type: m, origType: l[1], data: e, handler: d, guid: d.guid, selector: g, quick: g && G(g), namespace: n.join('.')}, p), r = j[m]; if (!r) { r = j[m] = [], r.delegateCount = 0; if (!s.setup || s.setup.call(a, e, n, i) === !1)a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent('on' + m, i) }s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0 }a = null } }, global: {}, remove: function (a, b, c, d, e) { var g = f.hasData(a) && f._data(a), h, i, j, k, l, m, n, o, p, q, r, s; if (!!g && !!(o = g.events)) { b = f.trim(I(b || '')).split(' '); for (h = 0; h < b.length; h++) { i = A.exec(b[h]) || [], j = k = i[1], l = i[2]; if (!j) { for (j in o)f.event.remove(a, j + b[h], c, d, !0); continue }p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp('(^|\\.)' + l.split('.').sort().join('\\.(?:.*\\.)?') + '(\\.|$)') : null; for (n = 0; n < r.length; n++)s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === '**' && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s)); r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j]) }f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ['events', 'handle'], !0)) } }, customEvent: {getData: !0, setData: !0, changeData: !0}, trigger: function (c, d, e, g) { if (!e || e.nodeType !== 3 && e.nodeType !== 8) { var h = c.type || c, i = [], j, k, l, m, n, o, p, q, r, s; if (E.test(h + f.event.triggered)) return; h.indexOf('!') >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf('.') >= 0 && (i = h.split('.'), h = i.shift(), i.sort()); if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return; c = typeof c === 'object' ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join('.'), c.namespace_re = c.namespace ? new RegExp('(^|\\.)' + i.join('\\.(?:.*\\.)?') + '(\\.|$)') : null, o = h.indexOf(':') < 0 ? 'on' + h : ''; if (!e) { j = f.cache; for (l in j)j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0); return }c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {}; if (p.trigger && p.trigger.apply(e, d) === !1) return; r = [[e, p.bindType || h]]; if (!g && !p.noBubble && !f.isWindow(e)) { s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null; for (;m; m = m.parentNode)r.push([m, s]), n = m; n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s]) } for (l = 0; l < r.length && !c.isPropagationStopped(); l++)m = r[l][0], c.type = r[l][1], q = (f._data(m, 'events') || {})[c.type] && f._data(m, 'handle'), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault(); c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== 'click' || !f.nodeName(e, 'a')) && f.acceptData(e) && o && e[h] && (h !== 'focus' && h !== 'blur' || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n)); return c.result } }, dispatch: function (c) { c = f.event.fix(c || a.event); var d = (f._data(this, 'events') || {})[c.type] || [], e = d.delegateCount, g = [].slice.call(arguments, 0), h = !c.exclusive && !c.namespace, i = f.event.special[c.type] || {}, j = [], k, l, m, n, o, p, q, r, s, t, u; g[0] = c, c.delegateTarget = this; if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) { if (e && (!c.button || c.type !== 'click')) { n = f(this), n.context = this.ownerDocument || this; for (m = c.target; m != this; m = m.parentNode || this) if (m.disabled !== !0) { p = {}, r = [], n[0] = m; for (k = 0; k < e; k++)s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s); r.length && j.push({elem: m, matches: r}) } }d.length > e && j.push({elem: this, matches: d.slice(e)}); for (k = 0; k < j.length && !c.isPropagationStopped(); k++) { q = j[k], c.currentTarget = q.elem; for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) { s = q.matches[l]; if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace))c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation())) } }i.postDispatch && i.postDispatch.call(this, c); return c.result } }, props: 'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '), fixHooks: {}, keyHooks: {props: 'char charCode key keyCode'.split(' '), filter: function (a, b) { a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode); return a }}, mouseHooks: {props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '), filter: function (a, d) { var e, f, g, h = d.button, i = d.fromElement; a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0); return a }}, fix: function (a) { if (a[f.expando]) return a; var d, e, g = a, h = f.event.fixHooks[a.type] || {}, i = h.props ? this.props.concat(h.props) : this.props; a = f.Event(g); for (d = i.length; d;)e = i[--d], a[e] = g[e]; a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey); return h.filter ? h.filter(a, g) : a }, special: {ready: {setup: f.bindReady}, load: {noBubble: !0}, focus: {delegateType: 'focusin'}, blur: {delegateType: 'focusout'}, beforeunload: {setup: function (a, b, c) { f.isWindow(this) && (this.onbeforeunload = c) }, teardown: function (a, b) { this.onbeforeunload === b && (this.onbeforeunload = null) }}}, simulate: function (a, b, c, d) { var e = f.extend(new f.Event(), c, {type: a, isSimulated: !0, originalEvent: {}}); d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() }}, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function (a, b, c) { a.detachEvent && a.detachEvent('on' + b, c) }, f.Event = function (a, b) { if (!(this instanceof f.Event)) return new f.Event(a, b); a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0 }, f.Event.prototype = {preventDefault: function () { this.isDefaultPrevented = K; var a = this.originalEvent; !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function () { this.isPropagationStopped = K; var a = this.originalEvent; !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = K, this.stopPropagation() }, isDefaultPrevented: J, isPropagationStopped: J, isImmediatePropagationStopped: J}, f.each({mouseenter: 'mouseover', mouseleave: 'mouseout'}, function (a, b) { f.event.special[a] = {delegateType: b, bindType: b, handle: function (a) { var c = this, d = a.relatedTarget, e = a.handleObj, g = e.selector, h; if (!d || d !== c && !f.contains(c, d))a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b; return h }} }), f.support.submitBubbles || (f.event.special.submit = {setup: function () { if (f.nodeName(this, 'form')) return !1; f.event.add(this, 'click._submit keypress._submit', function (a) { var c = a.target, d = f.nodeName(c, 'input') || f.nodeName(c, 'button') ? c.form : b; d && !d._submit_attached && (f.event.add(d, 'submit._submit', function (a) { a._submit_bubble = !0 }), d._submit_attached = !0) }) }, postDispatch: function (a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate('submit', this.parentNode, a, !0)) }, teardown: function () { if (f.nodeName(this, 'form')) return !1; f.event.remove(this, '._submit') }}), f.support.changeBubbles || (f.event.special.change = {setup: function () { if (z.test(this.nodeName)) { if (this.type === 'checkbox' || this.type === 'radio')f.event.add(this, 'propertychange._change', function (a) { a.originalEvent.propertyName === 'checked' && (this._just_changed = !0) }), f.event.add(this, 'click._change', function (a) { this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate('change', this, a, !0)) }); return !1 }f.event.add(this, 'beforeactivate._change', function (a) { var b = a.target; z.test(b.nodeName) && !b._change_attached && (f.event.add(b, 'change._change', function (a) { this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate('change', this.parentNode, a, !0) }), b._change_attached = !0) }) }, handle: function (a) { var b = a.target; if (this !== b || a.isSimulated || a.isTrigger || b.type !== 'radio' && b.type !== 'checkbox') return a.handleObj.handler.apply(this, arguments) }, teardown: function () { f.event.remove(this, '._change'); return z.test(this.nodeName) }}), f.support.focusinBubbles || f.each({focus: 'focusin', blur: 'focusout'}, function (a, b) { var d = 0, e = function (a) { f.event.simulate(b, a.target, f.event.fix(a), !0) }; f.event.special[b] = {setup: function () { d++ === 0 && c.addEventListener(a, e, !0) }, teardown: function () { --d === 0 && c.removeEventListener(a, e, !0) }} }), f.fn.extend({on: function (a, c, d, e, g) { var h, i; if (typeof a === 'object') { typeof c !== 'string' && (d = d || c, c = b); for (i in a) this.on(i, c, d, a[i], g); return this }d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c === 'string' ? (e = d, d = b) : (e = d, d = c, c = b)); if (e === !1)e = J; else if (!e) return this; g === 1 && (h = e, e = function (a) { f().off(a); return h.apply(this, arguments) }, e.guid = h.guid || (h.guid = f.guid++)); return this.each(function () { f.event.add(this, a, e, d, c) }) }, one: function (a, b, c, d) { return this.on(a, b, c, d, 1) }, off: function (a, c, d) { if (a && a.preventDefault && a.handleObj) { var e = a.handleObj; f(a.delegateTarget).off(e.namespace ? e.origType + '.' + e.namespace : e.origType, e.selector, e.handler); return this } if (typeof a === 'object') { for (var g in a) this.off(g, c, a[g]); return this } if (c === !1 || typeof c === 'function')d = c, c = b; d === !1 && (d = J); return this.each(function () { f.event.remove(this, a, d, c) }) }, bind: function (a, b, c) { return this.on(a, null, b, c) }, unbind: function (a, b) { return this.off(a, null, b) }, live: function (a, b, c) { f(this.context).on(a, this.selector, b, c); return this }, die: function (a, b) { f(this.context).off(a, this.selector || '**', b); return this }, delegate: function (a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function (a, b, c) { return arguments.length == 1 ? this.off(a, '**') : this.off(b, a, c) }, trigger: function (a, b) { return this.each(function () { f.event.trigger(a, b, this) }) }, triggerHandler: function (a, b) { if (this[0]) return f.event.trigger(a, b, this[0], !0) }, toggle: function (a) { var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) { var e = (f._data(this, 'lastToggle' + a.guid) || 0) % d; f._data(this, 'lastToggle' + a.guid, e + 1), c.preventDefault(); return b[e].apply(this, arguments) || !1 }; e.guid = c; while (d < b.length)b[d++].guid = c; return this.click(e) }, hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a) }}), f.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (a, b) { f.fn[b] = function (a, c) { c == null && (c = a, a = null); return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks) }), (function () { function x (a, b, c, e, f, g) { for (var h = 0, i = e.length; h < i; h++) { var j = e[h]; if (j) { var k = !1; j = j[a]; while (j) { if (j[d] === c) { k = e[j.sizset]; break } if (j.nodeType === 1) { g || (j[d] = c, j.sizset = h); if (typeof b !== 'string') { if (j === b) { k = !0; break } } else if (m.filter(b, [j]).length > 0) { k = j; break } }j = j[a] }e[h] = k } } } function w (a, b, c, e, f, g) { for (var h = 0, i = e.length; h < i; h++) { var j = e[h]; if (j) { var k = !1; j = j[a]; while (j) { if (j[d] === c) { k = e[j.sizset]; break }j.nodeType === 1 && !g && (j[d] = c, j.sizset = h); if (j.nodeName.toLowerCase() === b) { k = j; break }j = j[a] }e[h] = k } } } var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, d = 'sizcache' + (Math.random() + '').replace('.', ''), e = 0, g = Object.prototype.toString, h = !1, i = !0, j = /\\/g, k = /\r\n/g, l = /\W/; [0, 0].sort(function () { i = !1; return 0 }); var m = function (b, d, e, f) { e = e || [], d = d || c; var h = d; if (d.nodeType !== 1 && d.nodeType !== 9) return []; if (!b || typeof b !== 'string') return e; var i, j, k, l, n, q, r, t, u = !0, v = m.isXML(d), w = [], x = b; do { a.exec(''), i = a.exec(x); if (i) { x = i[3], w.push(i[1]); if (i[2]) { l = i[3]; break } } } while (i);if (w.length > 1 && p.exec(b)) if (w.length === 2 && o.relative[w[0]])j = y(w[0] + w[1], d, f); else { j = o.relative[w[0]] ? [d] : m(w.shift(), d); while (w.length)b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f) } else { !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]); if (d) { n = f ? {expr: w.pop(), set: s(f)} : m.find(w.pop(), w.length === 1 && (w[0] === '~' || w[0] === '+') && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1; while (w.length)q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = '', r == null && (r = d), o.relative[q](k, r, v) } else k = w = [] }k || (k = j), k || m.error(q || b); if (g.call(k) === '[object Array]') if (!u)e.push.apply(e, k); else if (d && d.nodeType === 1) for (t = 0; k[t] != null; t++)k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]); else for (t = 0; k[t] != null; t++)k[t] && k[t].nodeType === 1 && e.push(j[t]); else s(k, e); l && (m(l, h, e, f), m.uniqueSort(e)); return e }; m.uniqueSort = function (a) { if (u) { h = i, a.sort(u); if (h) for (var b = 1; b < a.length; b++)a[b] === a[b - 1] && a.splice(b--, 1) } return a }, m.matches = function (a, b) { return m(a, null, null, b) }, m.matchesSelector = function (a, b) { return m(b, null, null, [a]).length > 0 }, m.find = function (a, b, c) { var d, e, f, g, h, i; if (!a) return []; for (e = 0, f = o.order.length; e < f; e++) { h = o.order[e]; if (g = o.leftMatch[h].exec(a)) { i = g[1], g.splice(1, 1); if (i.substr(i.length - 1) !== '\\') { g[1] = (g[1] || '').replace(j, ''), d = o.find[h](g, b, c); if (d != null) { a = a.replace(o.match[h], ''); break } } } }d || (d = typeof b.getElementsByTagName !== 'undefined' ? b.getElementsByTagName('*') : []); return {set: d, expr: a} }, m.filter = function (a, c, d, e) { var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]); while (a && c.length) { for (h in o.filter) if ((f = o.leftMatch[h].exec(a)) != null && f[2]) { k = o.filter[h], l = f[1], g = !1, f.splice(1, 1); if (l.substr(l.length - 1) === '\\') continue; s === r && (r = []); if (o.preFilter[h]) { f = o.preFilter[h](f, s, d, r, e, t); if (!f)g = i = !0; else if (f === !0) continue } if (f) for (n = 0; (j = s[n]) != null; n++)j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0)); if (i !== b) { d || (s = r), a = a.replace(o.match[h], ''); if (!g) return []; break } } if (a === q) if (g == null)m.error(a); else break; q = a } return s }, m.error = function (a) { throw new Error('Syntax error, unrecognized expression: ' + a) }; var n = m.getText = function (a) { var b, c, d = a.nodeType, e = ''; if (d) { if (d === 1 || d === 9 || d === 11) { if (typeof a.textContent === 'string') return a.textContent; if (typeof a.innerText === 'string') return a.innerText.replace(k, ''); for (a = a.firstChild; a; a = a.nextSibling)e += n(a) } else if (d === 3 || d === 4) return a.nodeValue } else for (b = 0; c = a[b]; b++)c.nodeType !== 8 && (e += n(c)); return e }, o = m.selectors = {order: ['ID', 'NAME', 'TAG'], match: {ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch: {}, attrMap: {'class': 'className', 'for': 'htmlFor'}, attrHandle: {href: function (a) { return a.getAttribute('href') }, type: function (a) { return a.getAttribute('type') }}, relative: {'+': function (a, b) { var c = typeof b === 'string', d = c && !l.test(b), e = c && !d; d && (b = b.toLowerCase()); for (var f = 0, g = a.length, h; f < g; f++) if (h = a[f]) { while ((h = h.previousSibling) && h.nodeType !== 1);a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b }e && m.filter(b, a, !0) }, '>': function (a, b) { var c, d = typeof b === 'string', e = 0, f = a.length; if (d && !l.test(b)) { b = b.toLowerCase(); for (;e < f; e++) { c = a[e]; if (c) { var g = c.parentNode; a[e] = g.nodeName.toLowerCase() === b ? g : !1 } } } else { for (;e < f; e++)c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b); d && m.filter(b, a, !0) } }, '': function (a, b, c) { var d, f = e++, g = x; typeof b === 'string' && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g('parentNode', b, f, a, d, c) }, '~': function (a, b, c) { var d, f = e++, g = x; typeof b === 'string' && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g('previousSibling', b, f, a, d, c) }}, find: {ID: function (a, b, c) { if (typeof b.getElementById !== 'undefined' && !c) { var d = b.getElementById(a[1]); return d && d.parentNode ? [d] : [] } }, NAME: function (a, b) { if (typeof b.getElementsByName !== 'undefined') { var c = [], d = b.getElementsByName(a[1]); for (var e = 0, f = d.length; e < f; e++)d[e].getAttribute('name') === a[1] && c.push(d[e]); return c.length === 0 ? null : c } }, TAG: function (a, b) { if (typeof b.getElementsByTagName !== 'undefined') return b.getElementsByTagName(a[1]) }}, preFilter: {CLASS: function (a, b, c, d, e, f) { a = ' ' + a[1].replace(j, '') + ' '; if (f) return a; for (var g = 0, h; (h = b[g]) != null; g++)h && (e ^ (h.className && (' ' + h.className + ' ').replace(/[\t\n\r]/g, ' ').indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1)); return !1 }, ID: function (a) { return a[1].replace(j, '') }, TAG: function (a, b) { return a[1].replace(j, '').toLowerCase() }, CHILD: function (a) { if (a[1] === 'nth') { a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, ''); var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === 'even' && '2n' || a[2] === 'odd' && '2n+1' || !/\D/.test(a[2]) && '0n+' + a[2] || a[2]); a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0 } else a[2] && m.error(a[0]); a[0] = e++; return a }, ATTR: function (a, b, c, d, e, f) { var g = a[1] = a[1].replace(j, ''); !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || '').replace(j, ''), a[2] === '~=' && (a[4] = ' ' + a[4] + ' '); return a }, PSEUDO: function (b, c, d, e, f) { if (b[1] === 'not') if ((a.exec(b[3]) || '').length > 1 || /^\w/.test(b[3]))b[3] = m(b[3], null, null, c); else { var g = m.filter(b[3], c, d, !0 ^ f); d || e.push.apply(e, g); return !1 } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0; return b }, POS: function (a) { a.unshift(!0); return a }}, filters: {enabled: function (a) { return a.disabled === !1 && a.type !== 'hidden' }, disabled: function (a) { return a.disabled === !0 }, checked: function (a) { return a.checked === !0 }, selected: function (a) { a.parentNode && a.parentNode.selectedIndex; return a.selected === !0 }, parent: function (a) { return !!a.firstChild }, empty: function (a) { return !a.firstChild }, has: function (a, b, c) { return !!m(c[3], a).length }, header: function (a) { return /h\d/i.test(a.nodeName) }, text: function (a) { var b = a.getAttribute('type'), c = a.type; return a.nodeName.toLowerCase() === 'input' && c === 'text' && (b === c || b === null) }, radio: function (a) { return a.nodeName.toLowerCase() === 'input' && a.type === 'radio' }, checkbox: function (a) { return a.nodeName.toLowerCase() === 'input' && a.type === 'checkbox' }, file: function (a) { return a.nodeName.toLowerCase() === 'input' && a.type === 'file' }, password: function (a) { return a.nodeName.toLowerCase() === 'input' && a.type === 'password' }, submit: function (a) { var b = a.nodeName.toLowerCase(); return (b === 'input' || b === 'button') && a.type === 'submit' }, image: function (a) { return a.nodeName.toLowerCase() === 'input' && a.type === 'image' }, reset: function (a) { var b = a.nodeName.toLowerCase(); return (b === 'input' || b === 'button') && a.type === 'reset' }, button: function (a) { var b = a.nodeName.toLowerCase(); return b === 'input' && a.type === 'button' || b === 'button' }, input: function (a) { return /input|select|textarea|button/i.test(a.nodeName) }, focus: function (a) { return a === a.ownerDocument.activeElement }}, setFilters: {first: function (a, b) { return b === 0 }, last: function (a, b, c, d) { return b === d.length - 1 }, even: function (a, b) { return b % 2 === 0 }, odd: function (a, b) { return b % 2 === 1 }, lt: function (a, b, c) { return b < c[3] - 0 }, gt: function (a, b, c) { return b > c[3] - 0 }, nth: function (a, b, c) { return c[3] - 0 === b }, eq: function (a, b, c) { return c[3] - 0 === b }}, filter: {PSEUDO: function (a, b, c, d) { var e = b[1], f = o.filters[e]; if (f) return f(a, c, b, d); if (e === 'contains') return (a.textContent || a.innerText || n([a]) || '').indexOf(b[3]) >= 0; if (e === 'not') { var g = b[3]; for (var h = 0, i = g.length; h < i; h++) if (g[h] === a) return !1; return !0 }m.error(e) }, CHILD: function (a, b) { var c, e, f, g, h, i, j, k = b[1], l = a; switch (k) { case 'only':case 'first':while (l = l.previousSibling) if (l.nodeType === 1) return !1; if (k === 'first') return !0; l = a; case 'last':while (l = l.nextSibling) if (l.nodeType === 1) return !1; return !0; case 'nth':c = b[2], e = b[3]; if (c === 1 && e === 0) return !0; f = b[0], g = a.parentNode; if (g && (g[d] !== f || !a.nodeIndex)) { i = 0; for (l = g.firstChild; l; l = l.nextSibling)l.nodeType === 1 && (l.nodeIndex = ++i); g[d] = f }j = a.nodeIndex - e; return c === 0 ? j === 0 : j % c === 0 && j / c >= 0 } }, ID: function (a, b) { return a.nodeType === 1 && a.getAttribute('id') === b }, TAG: function (a, b) { return b === '*' && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b }, CLASS: function (a, b) { return (' ' + (a.className || a.getAttribute('class')) + ' ').indexOf(b) > -1 }, ATTR: function (a, b) { var c = b[1], d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c), e = d + '', f = b[2], g = b[4]; return d == null ? f === '!=' : !f && m.attr ? d != null : f === '=' ? e === g : f === '*=' ? e.indexOf(g) >= 0 : f === '~=' ? (' ' + e + ' ').indexOf(g) >= 0 : g ? f === '!=' ? e !== g : f === '^=' ? e.indexOf(g) === 0 : f === '$=' ? e.substr(e.length - g.length) === g : f === '|=' ? e === g || e.substr(0, g.length + 1) === g + '-' : !1 : e && d !== !1 }, POS: function (a, b, c, d) { var e = b[2], f = o.setFilters[e]; if (f) return f(a, c, b, d) }}}, p = o.match.POS, q = function (a, b) { return '\\' + (b - 0 + 1) }; for (var r in o.match)o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q)); o.match.globalPOS = p; var s = function (a, b) { a = Array.prototype.slice.call(a, 0); if (b) { b.push.apply(b, a); return b } return a }; try { Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType } catch (t) { s = function (a, b) { var c = 0, d = b || []; if (g.call(a) === '[object Array]')Array.prototype.push.apply(d, a); else if (typeof a.length === 'number') for (var e = a.length; c < e; c++)d.push(a[c]); else for (;a[c]; c++)d.push(a[c]); return d } } var u, v; c.documentElement.compareDocumentPosition ? u = function (a, b) { if (a === b) { h = !0; return 0 } if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1; return a.compareDocumentPosition(b) & 4 ? -1 : 1 } : (u = function (a, b) { if (a === b) { h = !0; return 0 } if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex; var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g; if (g === i) return v(a, b); if (!g) return -1; if (!i) return 1; while (j)e.unshift(j), j = j.parentNode; j = i; while (j)f.unshift(j), j = j.parentNode; c = e.length, d = f.length; for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return v(e[k], f[k]); return k === c ? v(a, f[k], -1) : v(e[k], b, 1) }, v = function (a, b, c) { if (a === b) return c; var d = a.nextSibling; while (d) { if (d === b) return -1; d = d.nextSibling } return 1 }), (function () { var a = c.createElement('div'), d = 'script' + (new Date()).getTime(), e = c.documentElement; a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) { if (typeof c.getElementById !== 'undefined' && !d) { var e = c.getElementById(a[1]); return e ? e.id === a[1] || typeof e.getAttributeNode !== 'undefined' && e.getAttributeNode('id').nodeValue === a[1] ? [e] : b : [] } }, o.filter.ID = function (a, b) { var c = typeof a.getAttributeNode !== 'undefined' && a.getAttributeNode('id'); return a.nodeType === 1 && c && c.nodeValue === b }), e.removeChild(a), e = a = null }()), (function () { var a = c.createElement('div'); a.appendChild(c.createComment('')), a.getElementsByTagName('*').length > 0 && (o.find.TAG = function (a, b) { var c = b.getElementsByTagName(a[1]); if (a[1] === '*') { var d = []; for (var e = 0; c[e]; e++)c[e].nodeType === 1 && d.push(c[e]); c = d } return c }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== 'undefined' && a.firstChild.getAttribute('href') !== '#' && (o.attrHandle.href = function (a) { return a.getAttribute('href', 2) }), a = null }()), c.querySelectorAll && (function () { var a = m, b = c.createElement('div'), d = '__sizzle__'; b.innerHTML = "<p class='TEST'></p>"; if (!b.querySelectorAll || b.querySelectorAll('.TEST').length !== 0) { m = function (b, e, f, g) { e = e || c; if (!g && !m.isXML(e)) { var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b); if (h && (e.nodeType === 1 || e.nodeType === 9)) { if (h[1]) return s(e.getElementsByTagName(b), f); if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f) } if (e.nodeType === 9) { if (b === 'body' && e.body) return s([e.body], f); if (h && h[3]) { var i = e.getElementById(h[3]); if (!i || !i.parentNode) return s([], f); if (i.id === h[3]) return s([i], f) } try { return s(e.querySelectorAll(b), f) } catch (j) {} } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== 'object') { var k = e, l = e.getAttribute('id'), n = l || d, p = e.parentNode, q = /^\s*[+~]/.test(b); l ? n = n.replace(/'/g, '\\$&') : e.setAttribute('id', n), q && p && (e = e.parentNode); try { if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f) } catch (r) {} finally { l || k.removeAttribute('id') } } } return a(b, e, f, g) }; for (var e in a)m[e] = a[e]; b = null } }()), (function () { var a = c.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector; if (b) { var d = !b.call(c.createElement('div'), 'div'), e = !1; try { b.call(c.documentElement, "[test!='']:sizzle") } catch (f) { e = !0 }m.matchesSelector = function (a, c) { c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"); if (!m.isXML(a)) try { if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) { var f = b.call(a, c); if (f || !d || a.document && a.document.nodeType !== 11) return f } } catch (g) {} return m(c, null, null, [a]).length > 0 } } }()), (function () { var a = c.createElement('div'); a.innerHTML = "<div class='test e'></div><div class='test'></div>"; if (!!a.getElementsByClassName && a.getElementsByClassName('e').length !== 0) { a.lastChild.className = 'e'; if (a.getElementsByClassName('e').length === 1) return; o.order.splice(1, 0, 'CLASS'), o.find.CLASS = function (a, b, c) { if (typeof b.getElementsByClassName !== 'undefined' && !c) return b.getElementsByClassName(a[1]) }, a = null } }()), c.documentElement.contains ? m.contains = function (a, b) { return a !== b && (a.contains ? a.contains(b) : !0) } : c.documentElement.compareDocumentPosition ? m.contains = function (a, b) { return !!(a.compareDocumentPosition(b) & 16) } : m.contains = function () { return !1 }, m.isXML = function (a) { var b = (a ? a.ownerDocument || a : 0).documentElement; return b ? b.nodeName !== 'HTML' : !1 }; var y = function (a, b, c) { var d, e = [], f = '', g = b.nodeType ? [b] : b; while (d = o.match.PSEUDO.exec(a))f += d[0], a = a.replace(o.match.PSEUDO, ''); a = o.relative[a] ? a + '*' : a; for (var h = 0, i = g.length; h < i; h++)m(a, g[h], e, c); return m.filter(f, e) }; m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[':'] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains }()); var L = /Until$/, M = /^(?:parents|prevUntil|prevAll)/, N = /,/, O = /^.[^:#\[\.,]*$/, P = Array.prototype.slice, Q = f.expr.match.globalPOS, R = {children: !0, contents: !0, next: !0, prev: !0}; f.fn.extend({find: function (a) { var b = this, c, d; if (typeof a !== 'string') return f(a).filter(function () { for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return !0 }); var e = this.pushStack('', 'find', a), g, h, i; for (c = 0, d = this.length; c < d; c++) { g = e.length, f.find(a, this[c], e); if (c > 0) for (h = g; h < e.length; h++) for (i = 0; i < g; i++) if (e[i] === e[h]) { e.splice(h--, 1); break } } return e }, has: function (a) { var b = f(a); return this.filter(function () { for (var a = 0, c = b.length; a < c; a++) if (f.contains(this, b[a])) return !0 }) }, not: function (a) { return this.pushStack(T(this, a, !1), 'not', a) }, filter: function (a) { return this.pushStack(T(this, a, !0), 'filter', a) }, is: function (a) { return !!a && (typeof a === 'string' ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0) }, closest: function (a, b) { var c = [], d, e, g = this[0]; if (f.isArray(a)) { var h = 1; while (g && g.ownerDocument && g !== b) { for (d = 0; d < a.length; d++)f(g).is(a[d]) && c.push({selector: a[d], elem: g, level: h}); g = g.parentNode, h++ } return c } var i = Q.test(a) || typeof a !== 'string' ? f(a, b || this.context) : 0; for (d = 0, e = this.length; d < e; d++) { g = this[d]; while (g) { if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) { c.push(g); break }g = g.parentNode; if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break } }c = c.length > 1 ? f.unique(c) : c; return this.pushStack(c, 'closest', a) }, index: function (a) { if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1; if (typeof a === 'string') return f.inArray(this[0], f(a)); return f.inArray(a.jquery ? a[0] : a, this) }, add: function (a, b) { var c = typeof a === 'string' ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c); return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d)) }, andSelf: function () { return this.add(this.prevObject) }}), f.each({parent: function (a) { var b = a.parentNode; return b && b.nodeType !== 11 ? b : null }, parents: function (a) { return f.dir(a, 'parentNode') }, parentsUntil: function (a, b, c) { return f.dir(a, 'parentNode', c) }, next: function (a) { return f.nth(a, 2, 'nextSibling') }, prev: function (a) { return f.nth(a, 2, 'previousSibling') }, nextAll: function (a) { return f.dir(a, 'nextSibling') }, prevAll: function (a) { return f.dir(a, 'previousSibling') }, nextUntil: function (a, b, c) { return f.dir(a, 'nextSibling', c) }, prevUntil: function (a, b, c) { return f.dir(a, 'previousSibling', c) }, siblings: function (a) { return f.sibling((a.parentNode || {}).firstChild, a) }, children: function (a) { return f.sibling(a.firstChild) }, contents: function (a) { return f.nodeName(a, 'iframe') ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes) }}, function (a, b) { f.fn[a] = function (c, d) { var e = f.map(this, b, c); L.test(a) || (d = c), d && typeof d === 'string' && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse()); return this.pushStack(e, a, P.call(arguments).join(',')) } }), f.extend({filter: function (a, b, c) { c && (a = ':not(' + a + ')'); return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b) }, dir: function (a, c, d) { var e = [], g = a[c]; while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))g.nodeType === 1 && e.push(g), g = g[c]; return e }, nth: function (a, b, c, d) { b = b || 1; var e = 0; for (;a; a = a[c]) if (a.nodeType === 1 && ++e === b) break; return a }, sibling: function (a, b) { var c = []; for (;a; a = a.nextSibling)a.nodeType === 1 && a !== b && c.push(a); return c }}); var V = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video', W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/, Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i, _ = /<|&#?\w+;/, ba = /<(?:script|style)/i, bb = /<(?:script|object|embed|option|style)/i, bc = new RegExp('<(?:' + V + ')[\\s/>]', 'i'), bd = /checked\s*(?:[^=]|=\s*.checked.)/i, be = /\/(java|ecma)script/i, bf = /^\s*<!(?:\[CDATA\[|\-\-)/, bg = {option: [1, "<select multiple='multiple'>", '</select>'], legend: [1, '<fieldset>', '</fieldset>'], thead: [1, '<table>', '</table>'], tr: [2, '<table><tbody>', '</tbody></table>'], td: [3, '<table><tbody><tr>', '</tr></tbody></table>'], col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'], area: [1, '<map>', '</map>'], _default: [0, '', '']}, bh = U(c); bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, 'div<div>', '</div>']), f.fn.extend({text: function (a) { return f.access(this, function (a) { return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a)) }, null, a, arguments.length) },
    wrapAll: function (a) { if (f.isFunction(a)) return this.each(function (b) { f(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = f(a, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstChild && a.firstChild.nodeType === 1)a = a.firstChild; return a }).append(this) } return this },
    wrapInner: function (a) { if (f.isFunction(a)) return this.each(function (b) { f(this).wrapInner(a.call(this, b)) }); return this.each(function () { var b = f(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) },
    wrap: function (a) { var b = f.isFunction(a); return this.each(function (c) { f(this).wrapAll(b ? a.call(this, c) : a) }) },
    unwrap: function () { return this.parent().each(function () { f.nodeName(this, 'body') || f(this).replaceWith(this.childNodes) }).end() },
    append: function () { return this.domManip(arguments, !0, function (a) { this.nodeType === 1 && this.appendChild(a) }) },
    prepend: function () { return this.domManip(arguments, !0, function (a) { this.nodeType === 1 && this.insertBefore(a, this.firstChild) }) },
    before: function () {
      if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) { this.parentNode.insertBefore(a, this) }); if (arguments.length) {
        var a = f
          .clean(arguments); a.push.apply(a, this.toArray()); return this.pushStack(a, 'before', arguments)
      }
    },
    after: function () { if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) { this.parentNode.insertBefore(a, this.nextSibling) }); if (arguments.length) { var a = this.pushStack(this, 'after', arguments); a.push.apply(a, f.clean(arguments)); return a } },
    remove: function (a, b) { for (var c = 0, d; (d = this[c]) != null; c++) if (!a || f.filter(a, [d]).length)!b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName('*')), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d); return this },
    empty: function () { for (var a = 0, b; (b = this[a]) != null; a++) { b.nodeType === 1 && f.cleanData(b.getElementsByTagName('*')); while (b.firstChild)b.removeChild(b.firstChild) } return this },
    clone: function (a, b) { a = a == null ? !1 : a, b = b == null ? a : b; return this.map(function () { return f.clone(this, a, b) }) },
    html: function (a) { return f.access(this, function (a) { var c = this[0] || {}, d = 0, e = this.length; if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, '') : null; if (typeof a === 'string' && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ['', ''])[1].toLowerCase()]) { a = a.replace(Y, '<$1></$2>'); try { for (;d < e; d++)c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName('*')), c.innerHTML = a); c = 0 } catch (g) {} }c && this.empty().append(a) }, null, a, arguments.length) },
    replaceWith: function (a) { if (this[0] && this[0].parentNode) { if (f.isFunction(a)) return this.each(function (b) { var c = f(this), d = c.html(); c.replaceWith(a.call(this, b, d)) }); typeof a !== 'string' && (a = f(a).detach()); return this.each(function () { var b = this.nextSibling, c = this.parentNode; f(this).remove(), b ? f(b).before(a) : f(c).append(a) }) } return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), 'replaceWith', a) : this },
    detach: function (a) { return this.remove(a, !0) },
    domManip: function (a, c, d) { var e, g, h, i, j = a[0], k = []; if (!f.support.checkClone && arguments.length === 3 && typeof j === 'string' && bd.test(j)) return this.each(function () { f(this).domManip(a, c, d, !0) }); if (f.isFunction(j)) return this.each(function (e) { var g = f(this); a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d) }); if (this[0]) { i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild; if (g) { c = c && f.nodeName(g, 'tr'); for (var l = 0, m = this.length, n = m - 1; l < m; l++)d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h) }k.length && f.each(k, function (a, b) { b.src ? f.ajax({type: 'GET', global: !1, url: b.src, async: !1, dataType: 'script'}) : f.globalEval((b.text || b.textContent || b.innerHTML || '').replace(bf, '/*$0*/')), b.parentNode && b.parentNode.removeChild(b) }) } return this }}), f.buildFragment = function (a, b, d) { var e, g, h, i, j = a[0]; b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j === 'string' && j.length < 512 && i === c && j.charAt(0) === '<' && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1); return {fragment: e, cacheable: g} }, f.fragments = {}, f.each({appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith'}, function (a, b) { f.fn[a] = function (c) { var d = [], e = f(c), g = this.length === 1 && this[0].parentNode; if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) { e[b](this[0]); return this } for (var h = 0, i = e.length; h < i; h++) { var j = (h > 0 ? this.clone(!0) : this).get(); f(e[h])[b](j), d = d.concat(j) } return this.pushStack(d, a, e.selector) } }), f.extend({clone: function (a, b, c) { var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test('<' + a.nodeName + '>') ? a.cloneNode(!0) : bo(a); if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) { bk(a, h), d = bl(a), e = bl(h); for (g = 0; d[g]; ++g)e[g] && bk(d[g], e[g]) } if (b) { bj(a, h); if (c) { d = bl(a), e = bl(h); for (g = 0; d[g]; ++g)bj(d[g], e[g]) } }d = e = null; return h }, clean: function (a, b, d, e) { var g, h, i, j = []; b = b || c, typeof b.createElement === 'undefined' && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c); for (var k = 0, l; (l = a[k]) != null; k++) { typeof l === 'number' && (l += ''); if (!l) continue; if (typeof l === 'string') if (!_.test(l))l = b.createTextNode(l); else { l = l.replace(Y, '<$1></$2>'); var m = (Z.exec(l) || ['', ''])[1].toLowerCase(), n = bg[m] || bg._default, o = n[0], p = b.createElement('div'), q = bh.childNodes, r; b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2]; while (o--)p = p.lastChild; if (!f.support.tbody) { var s = $.test(l), t = m === 'table' && !s ? p.firstChild && p.firstChild.childNodes : n[1] === '<table>' && !s ? p.childNodes : []; for (i = t.length - 1; i >= 0; --i)f.nodeName(t[i], 'tbody') && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i]) }!f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r))) } var u; if (!f.support.appendChecked) if (l[0] && typeof (u = l.length) === 'number') for (i = 0; i < u; i++)bn(l[i]); else bn(l); l.nodeType ? j.push(l) : j = f.merge(j, l) } if (d) { g = function (a) { return !a.type || be.test(a.type) }; for (k = 0; j[k]; k++) { h = j[k]; if (e && f.nodeName(h, 'script') && (!h.type || be.test(h.type)))e.push(h.parentNode ? h.parentNode.removeChild(h) : h); else { if (h.nodeType === 1) { var v = f.grep(h.getElementsByTagName('script'), g); j.splice.apply(j, [k + 1, 0].concat(v)) }d.appendChild(h) } } } return j }, cleanData: function (a) { var b, c, d = f.cache, e = f.event.special, g = f.support.deleteExpando; for (var h = 0, i; (i = a[h]) != null; h++) { if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue; c = i[f.expando]; if (c) { b = d[c]; if (b && b.events) { for (var j in b.events)e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle); b.handle && (b.handle.elem = null) }g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c] } } }}); var bp = /alpha\([^)]*\)/i, bq = /opacity=([^)]*)/, br = /([A-Z]|^ms)/g, bs = /^[\-+]?(?:\d*\.)?\d+$/i, bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, bu = /^([\-+])=([\-+.\de]+)/, bv = /^margin/, bw = {position: 'absolute', visibility: 'hidden', display: 'block'}, bx = ['Top', 'Right', 'Bottom', 'Left'], by, bz, bA; f.fn.css = function (a, c) { return f.access(this, function (a, c, d) { return d !== b ? f.style(a, c, d) : f.css(a, c) }, a, c, arguments.length > 1) }, f.extend({cssHooks: {opacity: {get: function (a, b) { if (b) { var c = by(a, 'opacity'); return c === '' ? '1' : c } return a.style.opacity }}}, cssNumber: {fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {'float': f.support.cssFloat ? 'cssFloat' : 'styleFloat'}, style: function (a, c, d, e) { if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) { var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i]; c = f.cssProps[i] || i; if (d === b) { if (k && 'get' in k && (g = k.get(a, !1, e)) !== b) return g; return j[c] }h = typeof d, h === 'string' && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = 'number'); if (d == null || h === 'number' && isNaN(d)) return; h === 'number' && !f.cssNumber[i] && (d += 'px'); if (!k || !('set' in k) || (d = k.set(a, d)) !== b) try { j[c] = d } catch (l) {} } }, css: function (a, c, d) { var e, g; c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === 'cssFloat' && (c = 'float'); if (g && 'get' in g && (e = g.get(a, !0, d)) !== b) return e; if (by) return by(a, c) }, swap: function (a, b, c) { var d = {}, e, f; for (f in b)d[f] = a.style[f], a.style[f] = b[f]; e = c.call(a); for (f in b)a.style[f] = d[f]; return e }}), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function (a, b) { var c, d, e, g, h = a.style; b = b.replace(br, '-$1').toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === '' && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g); return c }), c.documentElement.currentStyle && (bA = function (a, b) { var c, d, e, f = a.currentStyle && a.currentStyle[b], g = a.style; f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === 'fontSize' ? '1em' : f, f = g.pixelLeft + 'px', g.left = c, d && (a.runtimeStyle.left = d)); return f === '' ? 'auto' : f }), by = bz || bA, f.each(['height', 'width'], function (a, b) { f.cssHooks[b] = {get: function (a, c, d) { if (c) return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () { return bB(a, b, d) }) }, set: function (a, b) { return bs.test(b) ? b + 'px' : b }} }), f.support.opacity || (f.cssHooks.opacity = {get: function (a, b) { return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || '') ? parseFloat(RegExp.$1) / 100 + '' : b ? '1' : '' }, set: function (a, b) { var c = a.style, d = a.currentStyle, e = f.isNumeric(b) ? 'alpha(opacity=' + b * 100 + ')' : '', g = d && d.filter || c.filter || ''; c.zoom = 1; if (b >= 1 && f.trim(g.replace(bp, '')) === '') { c.removeAttribute('filter'); if (d && !d.filter) return }c.filter = bp.test(g) ? g.replace(bp, e) : g + ' ' + e }}), f(function () { f.support.reliableMarginRight || (f.cssHooks.marginRight = {get: function (a, b) { return f.swap(a, {display: 'inline-block'}, function () { return b ? by(a, 'margin-right') : a.style.marginRight }) }}) }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) { var b = a.offsetWidth, c = a.offsetHeight; return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, 'display')) === 'none' }, f.expr.filters.visible = function (a) { return !f.expr.filters.hidden(a) }), f.each({margin: '', padding: '', border: 'Width'}, function (a, b) { f.cssHooks[a + b] = {expand: function (c) { var d, e = typeof c === 'string' ? c.split(' ') : [c], f = {}; for (d = 0; d < 4; d++)f[a + bx[d] + b] = e[d] || e[d - 2] || e[0]; return f }} }); var bC = /%20/g, bD = /\[\]$/, bE = /\r?\n/g, bF = /#.*$/, bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bJ = /^(?:GET|HEAD)$/, bK = /^\/\//, bL = /\?/, bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bN = /^(?:select|textarea)/i, bO = /\s+/, bP = /([?&])_=[^&]*/, bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bR = f.fn.load, bS = {}, bT = {}, bU, bV, bW = ['*/'] + ['*']; try { bU = e.href } catch (bX) { bU = c.createElement('a'), bU.href = '', bU = bU.href }bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({load: function (a, c, d) { if (typeof a !== 'string' && bR) return bR.apply(this, arguments); if (!this.length) return this; var e = a.indexOf(' '); if (e >= 0) { var g = a.slice(e, a.length); a = a.slice(0, e) } var h = 'GET'; c && (f.isFunction(c) ? (d = c, c = b) : typeof c === 'object' && (c = f.param(c, f.ajaxSettings.traditional), h = 'POST')); var i = this; f.ajax({url: a, type: h, dataType: 'html', data: c, complete: function (a, b, c) { c = a.responseText, a.isResolved() && (a.done(function (a) { c = a }), i.html(g ? f('<div>').append(c.replace(bM, '')).find(g) : c)), d && i.each(d, [c, b, a]) }}); return this }, serialize: function () { return f.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { return this.elements ? f.makeArray(this.elements) : this }).filter(function () { return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type)) }).map(function (a, b) { var c = f(this).val(); return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) { return {name: b.name, value: a.replace(bE, '\r\n')} }) : {name: b.name, value: c.replace(bE, '\r\n')} }).get() }}), f.each('ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(' '), function (a, b) { f.fn[b] = function (a) { return this.on(b, a) } }), f.each(['get', 'post'], function (a, c) { f[c] = function (a, d, e, g) { f.isFunction(d) && (g = g || e, e = d, d = b); return f.ajax({type: c, url: a, data: d, success: e, dataType: g}) } }), f.extend({getScript: function (a, c) { return f.get(a, b, c, 'script') }, getJSON: function (a, b, c) { return f.get(a, b, c, 'json') }, ajaxSetup: function (a, b) { b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b); return a }, ajaxSettings: {url: bU, isLocal: bI.test(bV[1]), global: !0, type: 'GET', contentType: 'application/x-www-form-urlencoded; charset=UTF-8', processData: !0, async: !0, accepts: {xml: 'application/xml, text/xml', html: 'text/html', text: 'text/plain', json: 'application/json, text/javascript', '*': bW}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: 'responseXML', text: 'responseText'}, converters: {'* text': a.String, 'text html': !0, 'text json': f.parseJSON, 'text xml': f.parseXML}, flatOptions: {context: !0, url: !0}}, ajaxPrefilter: bY(bS), ajaxTransport: bY(bT), ajax: function (a, c) { function w (a, c, l, m) { if (s !== 2) { s = 2, q && clearTimeout(q), p = b, n = m || '', v.readyState = a > 0 ? 4 : 0; var o, r, u, w = c, x = l ? ca(d, v, l) : b, y, z; if (a >= 200 && a < 300 || a === 304) { if (d.ifModified) { if (y = v.getResponseHeader('Last-Modified'))f.lastModified[k] = y; if (z = v.getResponseHeader('Etag'))f.etag[k] = z } if (a === 304)w = 'notmodified', o = !0; else try { r = cb(d, x), w = 'success', o = !0 } catch (A) { w = 'parsererror', u = A } } else { u = w; if (!w || a)w = 'error', a < 0 && (a = 0) }v.status = a, v.statusText = '' + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger('ajax' + (o ? 'Success' : 'Error'), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger('ajaxComplete', [v, d]), --f.active || f.event.trigger('ajaxStop')) } } typeof a === 'object' && (c = a, a = b), c = c || {}; var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f.Callbacks('once memory'), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {readyState: 0, setRequestHeader: function (a, b) { if (!s) { var c = a.toLowerCase(); a = m[c] = m[c] || a, l[a] = b } return this }, getAllResponseHeaders: function () { return s === 2 ? n : null }, getResponseHeader: function (a) { var c; if (s === 2) { if (!o) { o = {}; while (c = bG.exec(n))o[c[1].toLowerCase()] = c[2] }c = o[a.toLowerCase()] } return c === b ? null : c }, overrideMimeType: function (a) { s || (d.mimeType = a); return this }, abort: function (a) { a = a || 'abort', p && p.abort(a), w(0, a); return this }}; h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) { if (a) { var b; if (s < 2) for (b in a)j[b] = [j[b], a[b]]; else b = a[v.status], v.then(b, b) } return this }, d.url = ((a || d.url) + '').replace(bF, '').replace(bK, bV[1] + '//'), d.dataTypes = f.trim(d.dataType || '*').toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === 'http:' ? 80 : 443)) == (bV[3] || (bV[1] === 'http:' ? 80 : 443)))), d.data && d.processData && typeof d.data !== 'string' && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v); if (s === 2) return !1; t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger('ajaxStart'); if (!d.hasContent) { d.data && (d.url += (bL.test(d.url) ? '&' : '?') + d.data, delete d.data), k = d.url; if (d.cache === !1) { var x = f.now(), y = d.url.replace(bP, '$1_=' + x); d.url = y + (y === d.url ? (bL.test(d.url) ? '&' : '?') + '_=' + x : '') } }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader('Content-Type', d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader('If-Modified-Since', f.lastModified[k]), f.etag[k] && v.setRequestHeader('If-None-Match', f.etag[k])), v.setRequestHeader('Accept', d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== '*' ? ', ' + bW + '; q=0.01' : '') : d.accepts['*']); for (u in d.headers)v.setRequestHeader(u, d.headers[u]); if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) { v.abort(); return !1 } for (u in {success: 1, error: 1, complete: 1})v[u](d[u]); p = bZ(bT, d, c, v); if (!p)w(-1, 'No Transport'); else { v.readyState = 1, t && g.trigger('ajaxSend', [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () { v.abort('timeout') }, d.timeout)); try { s = 1, p.send(l, w) } catch (z) { if (s < 2)w(-1, z); else throw z } } return v }, param: function (a, c) { var d = [], e = function (a, b) { b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b) }; c === b && (c = f.ajaxSettings.traditional); if (f.isArray(a) || a.jquery && !f.isPlainObject(a))f.each(a, function () { e(this.name, this.value) }); else for (var g in a)b_(g, a[g], c, e); return d.join('&').replace(bC, '+') }}), f.extend({active: 0, lastModified: {}, etag: {}}); var cc = f.now(), cd = /(\=)\?(&|$)|\?\?/i; f.ajaxSetup({jsonp: 'callback', jsonpCallback: function () { return f.expando + '_' + cc++ }}), f.ajaxPrefilter('json jsonp', function (b, c, d) { var e = typeof b.data === 'string' && /^application\/x\-www\-form\-urlencoded/.test(b.contentType); if (b.dataTypes[0] === 'jsonp' || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) { var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = '$1' + h + '$2'; b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? '&' : '?') + b.jsonp + '=' + h))), b.url = j, b.data = k, a[h] = function (a) { g = [a] }, d.always(function () { a[h] = i, g && f.isFunction(i) && a[h](g[0]) }), b.converters['script json'] = function () { g || f.error(h + ' was not called'); return g[0] }, b.dataTypes[0] = 'json'; return 'script' } }), f.ajaxSetup({accepts: {script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'}, contents: {script: /javascript|ecmascript/}, converters: {'text script': function (a) { f.globalEval(a); return a }}}), f.ajaxPrefilter('script', function (a) { a.cache === b && (a.cache = !1), a.crossDomain && (a.type = 'GET', a.global = !1) }), f.ajaxTransport('script', function (a) { if (a.crossDomain) { var d, e = c.head || c.getElementsByTagName('head')[0] || c.documentElement; return {send: function (f, g) { d = c.createElement('script'), d.async = 'async', a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) { if (c || !d.readyState || /loaded|complete/.test(d.readyState))d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, 'success') }, e.insertBefore(d, e.firstChild) }, abort: function () { d && d.onload(0, 1) }} } }); var ce = a.ActiveXObject ? function () { for (var a in cg)cg[a](0, 1) } : !1, cf = 0, cg; f.ajaxSettings.xhr = a.ActiveXObject ? function () { return !this.isLocal && ch() || ci() } : ch, (function (a) { f.extend(f.support, {ajax: !!a, cors: !!a && 'withCredentials' in a}) }(f.ajaxSettings.xhr())), f.support.ajax && f.ajaxTransport(function (c) { if (!c.crossDomain || f.support.cors) { var d; return {send: function (e, g) { var h = c.xhr(), i, j; c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async); if (c.xhrFields) for (j in c.xhrFields)h[j] = c.xhrFields[j]; c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e['X-Requested-With'] && (e['X-Requested-With'] = 'XMLHttpRequest'); try { for (j in e)h.setRequestHeader(j, e[j]) } catch (k) {}h.send(c.hasContent && c.data || null), d = function (a, e) { var j, k, l, m, n; try { if (d && (e || h.readyState === 4)) { d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]); if (e)h.readyState !== 4 && h.abort(); else { j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n); try { m.text = h.responseText } catch (a) {} try { k = h.statusText } catch (o) { k = '' }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204) } } } catch (p) { e || g(-1, p) }m && g(j, k, m, l) }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d) }, abort: function () { d && d(0, 1) }} } }); var cj = {}, ck, cl, cm = /^(?:toggle|show|hide)$/, cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, co, cp = [['height', 'marginTop', 'marginBottom', 'paddingTop', 'paddingBottom'], ['width', 'marginLeft', 'marginRight', 'paddingLeft', 'paddingRight'], ['opacity']], cq; f.fn.extend({show: function (a, b, c) { var d, e; if (a || a === 0) return this.animate(ct('show', 3), a, b, c); for (var g = 0, h = this.length; g < h; g++)d = this[g], d.style && (e = d.style.display, !f._data(d, 'olddisplay') && e === 'none' && (e = d.style.display = ''), (e === '' && f.css(d, 'display') === 'none' || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, 'olddisplay', cu(d.nodeName))); for (g = 0; g < h; g++) { d = this[g]; if (d.style) { e = d.style.display; if (e === '' || e === 'none')d.style.display = f._data(d, 'olddisplay') || '' } } return this }, hide: function (a, b, c) { if (a || a === 0) return this.animate(ct('hide', 3), a, b, c); var d, e, g = 0, h = this.length; for (;g < h; g++)d = this[g], d.style && (e = f.css(d, 'display'), e !== 'none' && !f._data(d, 'olddisplay') && f._data(d, 'olddisplay', e)); for (g = 0; g < h; g++) this[g].style && (this[g].style.display = 'none'); return this }, _toggle: f.fn.toggle, toggle: function (a, b, c) { var d = typeof a === 'boolean'; f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () { var b = d ? a : f(this).is(':hidden'); f(this)[b ? 'show' : 'hide']() }) : this.animate(ct('toggle', 3), a, b, c); return this }, fadeTo: function (a, b, c, d) { return this.filter(':hidden').css('opacity', 0).show().end().animate({opacity: b}, a, c, d) }, animate: function (a, b, c, d) { function g () { e.queue === !1 && f._mark(this); var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(':hidden'), g, h, i, j, k, l, m, n, o, p, q; b.animatedProperties = {}; for (i in a) { g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]); if ((k = f.cssHooks[g]) && 'expand' in k) { l = k.expand(a[g]), delete a[g]; for (i in l)i in a || (a[i] = l[i]) } } for (g in a) { h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || 'swing'; if (h === 'hide' && d || h === 'show' && !d) return b.complete.call(this); c && (g === 'height' || g === 'width') && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, 'display') === 'inline' && f.css(this, 'float') === 'none' && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === 'inline' ? this.style.display = 'inline-block' : this.style.zoom = 1)) }b.overflow != null && (this.style.overflow = 'hidden'); for (i in a)j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, 'toggle' + i) || (h === 'toggle' ? d ? 'show' : 'hide' : 0), q ? (f._data(this, 'toggle' + i, q === 'show' ? 'hide' : 'show'), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? '' : 'px'), p !== 'px' && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === '-=' ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, '')); return !0 } var e = f.speed(b, c, d); if (f.isEmptyObject(a)) return this.each(e.complete, [!1]); a = f.extend({}, a); return e.queue === !1 ? this.each(g) : this.queue(e.queue, g) }, stop: function (a, c, d) { typeof a !== 'string' && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || 'fx', []); return this.each(function () { function h (a, b, c) { var e = b[c]; f.removeData(a, c, !0), e.stop(d) } var b, c = !1, e = f.timers, g = f._data(this); d || f._unmark(!0, this); if (a == null) for (b in g)g[b] && g[b].stop && b.indexOf('.run') === b.length - 4 && h(this, g, b); else g[b = a + '.run'] && g[b].stop && h(this, g, b); for (b = e.length; b--;)e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1)); (!d || !c) && f.dequeue(this, a) }) }}), f.each({slideDown: ct('show', 1), slideUp: ct('hide', 1), slideToggle: ct('toggle', 1), fadeIn: {opacity: 'show'}, fadeOut: {opacity: 'hide'}, fadeToggle: {opacity: 'toggle'}}, function (a, b) { f.fn[a] = function (a, c, d) { return this.animate(b, a, c, d) } }), f.extend({speed: function (a, b, c) { var d = a && typeof a === 'object' ? f.extend({}, a) : {complete: c || !c && b || f.isFunction(a) && a, duration: a, easing: c && b || b && !f.isFunction(b) && b}; d.duration = f.fx.off ? 0 : typeof d.duration === 'number' ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default; if (d.queue == null || d.queue === !0)d.queue = 'fx'; d.old = d.complete, d.complete = function (a) { f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this) }; return d }, easing: {linear: function (a) { return a }, swing: function (a) { return -Math.cos(a * Math.PI) / 2 + 0.5 }}, timers: [], fx: function (a, b, c) { this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {} }}), f.fx.prototype = {update: function () { this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this) }, cur: function () { if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop]; var a, b = f.css(this.elem, this.prop); return isNaN(a = parseFloat(b)) ? !b || b === 'auto' ? 0 : b : a }, custom: function (a, c, d) { function h (a) { return e.step(a) } var e = this, g = f.fx; this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? '' : 'px'), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () { f._data(e.elem, 'fxshow' + e.prop) === b && (e.options.hide ? f._data(e.elem, 'fxshow' + e.prop, e.start) : e.options.show && f._data(e.elem, 'fxshow' + e.prop, e.end)) }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval)) }, show: function () { var a = f._data(this.elem, 'fxshow' + this.prop); this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === 'width' || this.prop === 'height' ? 1 : 0, this.cur()), f(this.elem).show() }, hide: function () { this.options.orig[this.prop] = f._data(this.elem, 'fxshow' + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0) }, step: function (a) { var b, c, d, e = cq || cr(), g = !0, h = this.elem, i = this.options; if (a || e >= i.duration + this.startTime) { this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0; for (b in i.animatedProperties)i.animatedProperties[b] !== !0 && (g = !1); if (g) { i.overflow != null && !f.support.shrinkWrapBlocks && f.each(['', 'X', 'Y'], function (a, b) { h.style['overflow' + b] = i.overflow[a] }), i.hide && f(h).hide(); if (i.hide || i.show) for (b in i.animatedProperties)f.style(h, b, i.orig[b]), f.removeData(h, 'fxshow' + b, !0), f.removeData(h, 'toggle' + b, !0); d = i.complete, d && (i.complete = !1, d.call(h)) } return !1 }i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(); return !0 }}, f.extend(f.fx, {tick: function () { var a, b = f.timers, c = 0; for (;c < b.length; c++)a = b[c], !a() && b[c] === a && b.splice(c--, 1); b.length || f.fx.stop() }, interval: 13, stop: function () { clearInterval(co), co = null }, speeds: {slow: 600, fast: 200, _default: 400}, step: {opacity: function (a) { f.style(a.elem, 'opacity', a.now) }, _default: function (a) { a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now }}}), f.each(cp.concat.apply([], cp), function (a, b) { b.indexOf('margin') && (f.fx.step[b] = function (a) { f.style(a.elem, b, Math.max(0, a.now) + a.unit) }) }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) { return f.grep(f.timers, function (b) { return a === b.elem }).length }); var cv, cw = /^t(?:able|d|h)$/i, cx = /^(?:body|html)$/i; 'getBoundingClientRect' in c.documentElement ? cv = function (a, b, c, d) { try { d = a.getBoundingClientRect() } catch (e) {} if (!d || !f.contains(c, a)) return d ? {top: d.top, left: d.left} : {top: 0, left: 0}; var g = b.body, h = cy(b), i = c.clientTop || g.clientTop || 0, j = c.clientLeft || g.clientLeft || 0, k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop, l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft, m = d.top + k - i, n = d.left + l - j; return {top: m, left: n} } : cv = function (a, b, c) { var d, e = a.offsetParent, g = a, h = b.body, i = b.defaultView, j = i ? i.getComputedStyle(a, null) : a.currentStyle, k = a.offsetTop, l = a.offsetLeft; while ((a = a.parentNode) && a !== h && a !== c) { if (f.support.fixedPosition && j.position === 'fixed') break; d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== 'visible' && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d } if (j.position === 'relative' || j.position === 'static')k += h.offsetTop, l += h.offsetLeft; f.support.fixedPosition && j.position === 'fixed' && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft)); return {top: k, left: l} }, f.fn.offset = function (a) { if (arguments.length) return a === b ? this : this.each(function (b) { f.offset.setOffset(this, a, b) }); var c = this[0], d = c && c.ownerDocument; if (!d) return null; if (c === d.body) return f.offset.bodyOffset(c); return cv(c, d, d.documentElement) }, f.offset = {bodyOffset: function (a) { var b = a.offsetTop, c = a.offsetLeft; f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, 'marginTop')) || 0, c += parseFloat(f.css(a, 'marginLeft')) || 0); return {top: b, left: c} }, setOffset: function (a, b, c) { var d = f.css(a, 'position'); d === 'static' && (a.style.position = 'relative'); var e = f(a), g = e.offset(), h = f.css(a, 'top'), i = f.css(a, 'left'), j = (d === 'absolute' || d === 'fixed') && f.inArray('auto', [h, i]) > -1, k = {}, l = {}, m, n; j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), 'using' in b ? b.using.call(a, k) : e.css(k) }}, f.fn.extend({position: function () { if (!this[0]) return null; var a = this[0], b = this.offsetParent(), c = this.offset(), d = cx.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset(); c.top -= parseFloat(f.css(a, 'marginTop')) || 0, c.left -= parseFloat(f.css(a, 'marginLeft')) || 0, d.top += parseFloat(f.css(b[0], 'borderTopWidth')) || 0, d.left += parseFloat(f.css(b[0], 'borderLeftWidth')) || 0; return {top: c.top - d.top, left: c.left - d.left} }, offsetParent: function () { return this.map(function () { var a = this.offsetParent || c.body; while (a && !cx.test(a.nodeName) && f.css(a, 'position') === 'static')a = a.offsetParent; return a }) }}), f.each({scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset'}, function (a, c) { var d = /Y/.test(c); f.fn[a] = function (e) { return f.access(this, function (a, e, g) { var h = cy(a); if (g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e]; h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g }, a, e, arguments.length, null) } }), f.each({Height: 'height', Width: 'width'}, function (a, c) { var d = 'client' + a, e = 'scroll' + a, g = 'offset' + a; f.fn['inner' + a] = function () { var a = this[0]; return a ? a.style ? parseFloat(f.css(a, c, 'padding')) : this[c]() : null }, f.fn['outer' + a] = function (a) { var b = this[0]; return b ? b.style ? parseFloat(f.css(b, c, a ? 'margin' : 'border')) : this[c]() : null }, f.fn[c] = function (a) { return f.access(this, function (a, c, h) { var i, j, k, l; if (f.isWindow(a)) { i = a.document, j = i.documentElement[d]; return f.support.boxModel && j || i.body && i.body[d] || j } if (a.nodeType === 9) { i = a.documentElement; if (i[d] >= i[e]) return i[d]; return Math.max(a.body[e], i[e], a.body[g], i[g]) } if (h === b) { k = f.css(a, c), l = parseFloat(k); return f.isNumeric(l) ? l : k }f(a).css(c, h) }, c, a, arguments.length, null) } }), a.jQuery = a.$ = f, "function" === 'function' && __webpack_require__(0) && __webpack_require__(0).jQuery && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () { return f }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
})(window)


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var ucc = __webpack_require__(8)
var params = __webpack_require__(7)
var baseUrl = ucc.baseUrl
var ajax = function (options, callback) {
  var dfd = new $.Deferred()
  var defaults = {
    url: '',
    dataType: 'json',
    type: 'POST',
    data: {},
    async: true,
    cache: true
  }
  var json = $.extend({}, defaults, options)
  if (!callback) {
    callback = function (data) {
      return data
    }
  }
  $.ajax(json)
    .done(function (data) {
      dfd.resolve(callback(data, 'done'))
    })
    .fail(function (data) {
      dfd.reject(callback(data, 'fail'))
    })
    .always(function (data) {
      dfd.reject(callback(data, 'always'))
    })
  return dfd.promise()
}
exports.ajax = ajax
exports.getLangAndMessageSettings = function () {
  return ajax({
    url: baseUrl + '/echatManager.do',
    data: {
      method: 'getLangAndMessageSettings',
      companyPk: ucc.companyPk
    }
  }, function (e, status) {
    if (status === 'done') {
      ucc.defaultLangPk = e.lang.langPk
      ucc.messageDisplay = e.messageSettings.messageDisply
      ucc.messageContent = e.messageSettings.messageLang ? e.messageSettings.messageLang.content : ''
      ucc.messageTypeList = e.messageSettings.messageTypeList
      ucc.langMap = e.langMap
    } else if (status === 'fail') {
      ucc.defaultLangPk = ''
      ucc.messageDisplay = ''
      ucc.messageContent = ''
      ucc.messageTypeList = ''
      ucc.langMap = {

      }
    }
    return e
  })
}
exports.getSettingsAndService = function () {
  return ajax({
    url: baseUrl + '/echatManager.do',
    data: {
      method: 'getSettingsAndService',
      companyPk: ucc.companyPk,
      codeKey: ucc.codeKey,
      type: ucc.type
    }
  }, function (e, status) {
    if (status === 'done') {
      ucc.ecselfList = e.selfService
      ucc.BasicSetting = e.basiceSetting.BasicSetting
      ucc.ExtraSetting = e.basiceSetting.ExtraSetting
      ucc.OperatorBasicSettings = e.operatorSetting
      ucc.vocabulary = e.vocabulary
      ucc.period = 30
      ucc.isWs = e.isWs
    } else if (status === 'fail') {
      ucc.ecselfList = ''
      ucc.BasicSetting = ''
      ucc.ExtraSetting = ''
      ucc.OperatorBasicSettings = ''
      ucc.vocabulary = ''
      ucc.period = 30
      ucc.isWs = false
    }
    return e
  })
}
exports.getDepartment = function () {
  return ajax({
    url: baseUrl + '/echatManager.do',
    data: {
      method: 'getDepartment',
      companyPk: ucc.companyPk,
      codeKey: ucc.codeKey,
      type: ucc.type
    }
  }, function (e, status) {
    if (status === 'done') {
      ucc.businessList = e
    } else if (status === 'fail') {
      ucc.businessList = []
    }
    return e
  })
}
exports.getVisitosDisplay = function () {
  return ajax({
    url: baseUrl + '/echatManager.do',
    data: {
      method: 'getVisitosDisplay',
      companyPk: ucc.companyPk
    }
  }, function (e, status) {
    if (status === 'done') {
      ucc.tabList = e.tabLists
      ucc.buttonList = e.buttonListJson
      ucc.advertisement = e.advertisement
    } else if (status === 'fail') {
      ucc.tabList = []
      ucc.buttonList = []
      ucc.advertisement = ''
    }
    return e
  })
}
exports.getTmpCode = function () {
  return ajax({
    url: baseUrl + '/echatManager.do',
    data: {
      method: 'getTmpCode',
      companyPk: ucc.companyPk,
      codeKey: ucc.codeKey
    }
  }, function (e, status) {
    if (status === 'done') {
      ucc.aDset = e.aDset
    } else if (status === 'fail') {
      ucc.aDset = {}
    }
    return e
  })
}
exports.initChatId = function (visitorId) {
  return ajax({
    url: baseUrl + '/echatManager.do',
    data: {
      method: 'initChatId',
      companyPk: ucc.companyPk,
      vid: visitorId,
      hjUserData: params['hjUserData'],
      visitorInfo: params['visitorInfo']
    },
    async: false,
    cache: false
  }, function (e, status) {
    if (status === 'done') {

    } else if (status === 'fail') {

    }
    return e
  })
}
exports.getIp = function () {
  return ajax({
    url: baseUrl + '/echatManager.do',
    data: {
      method: 'getIp'
    },
    dataType: 'jsonp',
    async: false
  }, function (e, status) {
    return (typeof returnCitySN === 'object') ? returnCitySN : {
      'cip': '0.0.0.0',
      'cid': '0',
      'cname': '未知地区'
    }
  })
}
exports.generationVisitorsID = function () {
  return ajax({
    url: baseUrl + '/echatManager.do',
    data: {
      method: 'generationVisitorsID',
      companyPk: ucc.companyPk
    },
    async: false
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.getVisitorsName = function (vid) {
  return ajax({
    url: baseUrl + '/echatManager.do',
    data: {
      method: 'getVisitorsName',
      visitorId: vid
    },
    async: false
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.closeEchat = function (chatID, url, opname) {
  return ajax({
    url: baseUrl + '/echat.do',
    data: {
      method: 'closeEchat',
      chatID: chatID,
      url: url,
      opname: opname
    },
    async: false
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.inQueue = function (message, IpStr) {
  return ajax({
    url: baseUrl + '/queue.do',
    data: {
      method: 'inQueue',
      chatID: ucc.chatID,
      companyPk: ucc.companyPk,
      langPk: ucc.defaultLangPk,
      message: message,
      IpStr: IpStr
    }
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return e
    }
  })
}
exports.getBusinessQueue = function (message, businessId, index, isTimeOut) {
  return ajax({
    url: baseUrl + '/queue.do',
    data: {
      method: 'getBusinessQueue',
      chatID: ucc.chatID,
      companyPk: ucc.companyPk,
      langPk: ucc.defaultLangPk,
      message: message,
      businessId: businessId,
      index: index,
      isouttimes: isTimeOut
    }
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return e
    }
  })
}
exports.continueBusinessQueue = function (businessId) {
  return ajax({
    url: baseUrl + '/queue.do',
    data: {
      method: 'continueBusinessQueue',
      chatID: ucc.chatID,
      companyPk: ucc.companyPk,
      langPk: ucc.defaultLangPk,
      businessId: businessId
    },
    async: false
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.readMessage = function (chatId, url) {
  return ajax({
    url: baseUrl + '/echat.do',
    data: {
      method: 'readMessage',
      chatID: chatId,
      url: url
    },
    async: false,
    cache: false
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.getReceivedMID = function (messageId, workGroupName) {
  return ajax({
    url: baseUrl + '/echat.do',
    data: {
      method: 'getReceivedMID',
      'messageId': messageId,
      'workGroupName': workGroupName
    },
    async: false
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.sendMessage = function (chatId, txt, code, url, visitorId) {
  return ajax({
    url: baseUrl + '/echat.do',
    data: {
      method: 'sendMessage',
      chatID: chatId,
      message: txt,
      code: code,
      url: url,
      visitorId: visitorId
    },
    async: false
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.getLangList = function () {
  return ajax({
    url: baseUrl + '/echatManager.do',
    data: {
      method: 'getLangList',
      companyPk: ucc.companyPk,
      langPk: ucc.defaultLangPk
    },
    async: false
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.getLangListByPk = function (langType, langKey) {
  return ajax({
    url: baseUrl + '/echatManager.do',
    data: {
      method: 'getLangListByPk',
      companyPk: ucc.companyPk,
      langPk: ucc.defaultLangPk,
      langType: langType,
      langKey: langKey
    },
    async: false
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.saveMessageBox = function (json) {
  var contentencode = json.content
  try {
    contentencode = encodeURIComponent(encodeURIComponent(contentencode))
  } catch (e) {};
  return ajax({
    url: baseUrl + '/echatManager.do',
    data: {
      method: 'saveMessageBox',
      messageTypePk: json.messageTypePk,
      companyPk: ucc.companyPk,
      name: json.name,
      telephone: json.telephone,
      email: json.email,
      title: json.title,
      content: json.content,
      company: json.company,
      brand: json.brand,
      contentencode: contentencode
    }
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.setVisitorMonitor = function (monitorInfo) {
  var info = monitorInfo
  try {
    info = encodeURIComponent(JSON.stringify(monitorInfo))
  } catch (e) {};
  return ajax({
    url: baseUrl + '/visitorMonitor.do',
    data: {
      method: 'setVisitorMonitor',
      monitorInfo: info
    }
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.getHistoryDialogue = function (page, visitorId) {
  return ajax({
    url: baseUrl + '/historyOperator.do',
    async: false,
    data: {
      method: 'getHistoryDialogue',
      page: page,
      visitorId: visitorId,
      companyPk: ucc.companyPk
    }
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.getLeaveChat = function (visitorId) {
  return ajax({
    url: baseUrl + '/historyOperator.do',
    async: false,
    data: {
      method: 'getLeaveChat',
      visitorId: visitorId
    }
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}

exports.getSatisfaction = function (chatId) {
  return ajax({
    url: baseUrl + '/echatManager.do',
    async: false,
    data: {
      method: 'getSatisfaction',
      companyPk: ucc.companyPk,
      langPk: ucc.defaultLangPk,
      chatID: chatId
    }
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}

exports.saveSatisfaction = function (chatId, json) {
  return ajax({
    url: baseUrl + '/echatManager.do',
    async: false,
    data: {
      method: 'saveSatisfaction',
      companyPk: ucc.companyPk,
      chatID: chatId,
      satisfactionPk: json.satisfactionPk,
      optionPk: json.optionPk,
      satisfactionMemo: json.satisfactionMemo,
      nextSatisfactionPk: json.nextSatisfactionPk,
      rndVar: new Date().getTime()
    }
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.getScreenshotSrc = function (msgStr) {
  return ajax({
    url: baseUrl + '/echatManager.do',
    async: false,
    data: {
      method: 'getScreenshotSrc',
      'sendMsg': msgStr
    },
    dataType: 'text'
  }, function (e, status) {
    if (status === 'done') {
      return e
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.keepTenQA = function (chatID) {
  return ajax({
    url: baseUrl + '/echatManager.do',
    data: {
      method: 'keepTenQA',
      chatId: ucc.chatID
    }
  }, function (e, status) {
    if (status === 'done') {
      return ''
    } else if (status === 'fail') {
      return ''
    }
  })
}
exports.getConfig = function () {
  var dfd = new $.Deferred()
  return  dfd.resolve({
    robot: false,
    businessList: [],
    visiotInformation: false,
    leaveMessage: false,
    satisfaction: false,
    satisfactionType: [],
    workTime: false,
    adv:false,
    normalQuestion: []
  })
}
exports.getPcAppearance = function () {
  var dfd = new $.Deferred()
  return  dfd.resolve({
    title: 'Any800',
    titleLink: 'http://www.baidu.com',
    logo: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
    selectColor: 'blue',
    langType: '1',
    visitorIco: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
    clientIco: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
    robotIco: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
    backgroundImg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
    toolsSelect: [],
    tabConfig: {
      type: 'web',
      link: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
      name: 'web',
    },
    tabConfig: {
      type: 'swiper',
      name: 'swiper',
      list: [{
        index: 0,
        url: '',
        link: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg'
      }, {
        index: 1,
        url: '',
        link: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg'
      }, {
        index: 2,
        url: '',
        link: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg'
      }]
    }
  })
}
exports.getH5Appearance = function () {
  var dfd = new $.Deferred()
  return  dfd.resolve({
    title: 'Any800',
    selectColor: 'blue',
    langType: '1',
    visitorIco: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
    clientIco: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
    robotIco: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
    backgroundImg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3588772980,2454248748&fm=27&gp=0.jpg'
  })
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

if(!!navigator.userAgent.match(/.*iphone.*|.*Linux.*|.*AppleWebKit.*Mobile.*/)){
  if(window.location.href.indexOf("pc.html")>-1){
    window.location.href=window.location.href.replace("pc.html","h5.html");
  }
}else{
  if(window.location.href.indexOf("h5.html")>-1){
    window.location.href=window.location.href.replace("h5.html","pc.html");
  }
}
if (typeof console === 'undefined') {
  console = {}
  console.log = function (e) {}
  console.warn = function (e) {}
  console.error = function (e) {}
  console.debug = function (e) {}
};
jQuery.cookie = function (a, b, c) {
  if (typeof b === 'undefined') {
    var i = null
    if (document.cookie && document.cookie != '') {
      for (var j = document.cookie.split(';'), k = 0; k < j.length; k++) {
        var l = jQuery.trim(j[k])
        if (l.substring(0, a.length + 1) == a + '=') {
          i = decodeURIComponent(l.substring(a.length + 1))
          break
        }
      }
    }
    return i
  }
  c = c || {}, b === null && (b = '', c.expires = -1)
  var d = ''
  if (c.expires && (typeof c.expires === 'number' || c.expires.toUTCString)) {
    var e
    typeof c.expires === 'number' ? (e = new Date(), e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * c.expires)) : e = c.expires, d = '; expires=' + e.toUTCString()
  }
  var f = c.path ? '; path=' + c.path : '',
    g = c.domain ? '; domain=' + c.domain : '',
    h = c.secure ? '; secure' : ''
  document.cookie = [a, '=', encodeURIComponent(b), d, f, g, h].join('')
}
var stringify = (function () {
  function a (a) {
    return /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
      var b = e[a]
      return b || (b = a.charCodeAt(), '\\u00' + Math.floor(b / 16).toString(16) + (b % 16).toString(16))
    })), '"' + a + '"'
  }

  function b (a) {
    var b, c, d, e = ['['],
      f = a.length
    for (c = 0; f > c; c++) {
      switch (d = a[c], typeof d) {
        case 'undefined':
        case 'function':
        case 'unknown':
          break
        default:
          b && e.push(','), e.push(stringify(d)), b = 1
      }
    }
    return e.push(']'), e.join('')
  }

  function c (a) {
    return a < 10 ? '0' + a : a
  }

  function d (a) {
    return '"' + a.getFullYear() + '-' + c(a.getMonth() + 1) + '-' + c(a.getDate()) + 'T' + c(a.getHours()) + ':' + c(a.getMinutes()) + ':' + c(a.getSeconds()) + '"'
  }
  var e = {
    '\b': '\\b',
    '  ': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '"': '\\"',
    '\\': '\\\\'
  }
  return function (c) {
    switch (typeof c) {
      case 'undefined':
        return 'undefined'
      case 'number':
        return isFinite(c) ? String(c) : 'null'
      case 'string':
        return a(c)
      case 'boolean':
        return String(c)
      default:
        if (c === null) return 'null'
        if (c instanceof Array) return b(c)
        if (c instanceof Date) return d(c)
        var e, f, g = ['{'],
          h = stringify
        for (var i in c) {
          if (Object.prototype.hasOwnProperty.call(c, i)) {
            switch (f = c[i], typeof f) {
              case 'undefined':
              case 'unknown':
              case 'function':
                break
              default:
                e && g.push(','), e = 1, g.push(h(i) + ':' + h(f))
            }
          }
        }
        return g.push('}'), g.join('')
    }
  }
}())
JSON = {
  parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function (a) {
    return String(a).evalJSON()
  } || $.parseJSON || $.evalJSON,
  stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || stringify
}
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (elt) {
    var len = this.length >>> 0
    var from = Number(arguments[1]) || 0
    from = (from < 0) ? Math.ceil(from) : Math.floor(from)
    if (from < 0) from += len
    for (; from < len; from++) {
      if (from in this && this[from] === elt) return from
    }
    return -1
  }
}
Array.prototype.insertSort = function (fn) {
  var array = this
  var fun = fn || function (a, b) {
    return b > a
  }
  for (var i = 1, len = array.length; i < len; i++) {
    var key = array[i]
    var j = i - 1
    while (j >= 0 && fun(array[j], key)) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = key
  }
  return array
}
Date.prototype.Format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    'S': this.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  return fmt
}
String.prototype.trim = function () {
  return this.replace(/(^\s*)|(\s*$)/g, '')
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Swiper 2.7.6
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2015, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: February 11, 2015
*/
window.Swiper=function(a,b){"use strict";function c(a,b){return document.querySelectorAll?(b||document).querySelectorAll(a):jQuery(a,b)}function d(a){return"[object Array]"===Object.prototype.toString.apply(a)?!0:!1}function e(){var a=G-J;return b.freeMode&&(a=G-J),b.slidesPerView>D.slides.length&&!b.centeredSlides&&(a=0),0>a&&(a=0),a}function f(){function a(a){var c,d,e=function(){"undefined"!=typeof D&&null!==D&&(void 0!==D.imagesLoaded&&D.imagesLoaded++,D.imagesLoaded===D.imagesToLoad.length&&(D.reInit(),b.onImagesReady&&D.fireCallback(b.onImagesReady,D)))};a.complete?e():(d=a.currentSrc||a.getAttribute("src"),d?(c=new Image,c.onload=e,c.onerror=e,c.src=d):e())}var d=D.h.addEventListener,e="wrapper"===b.eventTarget?D.wrapper:D.container;if(D.browser.ie10||D.browser.ie11?(d(e,D.touchEvents.touchStart,p),d(document,D.touchEvents.touchMove,q),d(document,D.touchEvents.touchEnd,r)):(D.support.touch&&(d(e,"touchstart",p),d(e,"touchmove",q),d(e,"touchend",r)),b.simulateTouch&&(d(e,"mousedown",p),d(document,"mousemove",q),d(document,"mouseup",r))),b.autoResize&&d(window,"resize",D.resizeFix),g(),D._wheelEvent=!1,b.mousewheelControl){if(void 0!==document.onmousewheel&&(D._wheelEvent="mousewheel"),!D._wheelEvent)try{new WheelEvent("wheel"),D._wheelEvent="wheel"}catch(f){}D._wheelEvent||(D._wheelEvent="DOMMouseScroll"),D._wheelEvent&&d(D.container,D._wheelEvent,j)}if(b.keyboardControl&&d(document,"keydown",i),b.updateOnImagesReady){D.imagesToLoad=c("img",D.container);for(var h=0;h<D.imagesToLoad.length;h++)a(D.imagesToLoad[h])}}function g(){var a,d=D.h.addEventListener;if(b.preventLinks){var e=c("a",D.container);for(a=0;a<e.length;a++)d(e[a],"click",n)}if(b.releaseFormElements){var f=c("input, textarea, select",D.container);for(a=0;a<f.length;a++)d(f[a],D.touchEvents.touchStart,o,!0),D.support.touch&&b.simulateTouch&&d(f[a],"mousedown",o,!0)}if(b.onSlideClick)for(a=0;a<D.slides.length;a++)d(D.slides[a],"click",k);if(b.onSlideTouch)for(a=0;a<D.slides.length;a++)d(D.slides[a],D.touchEvents.touchStart,l)}function h(){var a,d=D.h.removeEventListener;if(b.onSlideClick)for(a=0;a<D.slides.length;a++)d(D.slides[a],"click",k);if(b.onSlideTouch)for(a=0;a<D.slides.length;a++)d(D.slides[a],D.touchEvents.touchStart,l);if(b.releaseFormElements){var e=c("input, textarea, select",D.container);for(a=0;a<e.length;a++)d(e[a],D.touchEvents.touchStart,o,!0),D.support.touch&&b.simulateTouch&&d(e[a],"mousedown",o,!0)}if(b.preventLinks){var f=c("a",D.container);for(a=0;a<f.length;a++)d(f[a],"click",n)}}function i(a){var b=a.keyCode||a.charCode;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey)){if(37===b||39===b||38===b||40===b){for(var c=!1,d=D.h.getOffset(D.container),e=D.h.windowScroll().left,f=D.h.windowScroll().top,g=D.h.windowWidth(),h=D.h.windowHeight(),i=[[d.left,d.top],[d.left+D.width,d.top],[d.left,d.top+D.height],[d.left+D.width,d.top+D.height]],j=0;j<i.length;j++){var k=i[j];k[0]>=e&&k[0]<=e+g&&k[1]>=f&&k[1]<=f+h&&(c=!0)}if(!c)return}N?((37===b||39===b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),39===b&&D.swipeNext(),37===b&&D.swipePrev()):((38===b||40===b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),40===b&&D.swipeNext(),38===b&&D.swipePrev())}}function j(a){var c=D._wheelEvent,d=0;if(a.detail)d=-a.detail;else if("mousewheel"===c)if(b.mousewheelControlForceToAxis)if(N){if(!(Math.abs(a.wheelDeltaX)>Math.abs(a.wheelDeltaY)))return;d=a.wheelDeltaX}else{if(!(Math.abs(a.wheelDeltaY)>Math.abs(a.wheelDeltaX)))return;d=a.wheelDeltaY}else d=a.wheelDelta;else if("DOMMouseScroll"===c)d=-a.detail;else if("wheel"===c)if(b.mousewheelControlForceToAxis)if(N){if(!(Math.abs(a.deltaX)>Math.abs(a.deltaY)))return;d=-a.deltaX}else{if(!(Math.abs(a.deltaY)>Math.abs(a.deltaX)))return;d=-a.deltaY}else d=Math.abs(a.deltaX)>Math.abs(a.deltaY)?-a.deltaX:-a.deltaY;if(b.freeMode){var f=D.getWrapperTranslate()+d;if(f>0&&(f=0),f<-e()&&(f=-e()),D.setWrapperTransition(0),D.setWrapperTranslate(f),D.updateActiveSlide(f),0===f||f===-e())return}else(new Date).getTime()-V>60&&(0>d?D.swipeNext():D.swipePrev()),V=(new Date).getTime();return b.autoplay&&D.stopAutoplay(!0),a.preventDefault?a.preventDefault():a.returnValue=!1,!1}function k(a){D.allowSlideClick&&(m(a),D.fireCallback(b.onSlideClick,D,a))}function l(a){m(a),D.fireCallback(b.onSlideTouch,D,a)}function m(a){if(a.currentTarget)D.clickedSlide=a.currentTarget;else{var c=a.srcElement;do{if(c.className.indexOf(b.slideClass)>-1)break;c=c.parentNode}while(c);D.clickedSlide=c}D.clickedSlideIndex=D.slides.indexOf(D.clickedSlide),D.clickedSlideLoopIndex=D.clickedSlideIndex-(D.loopedSlides||0)}function n(a){return D.allowLinks?void 0:(a.preventDefault?a.preventDefault():a.returnValue=!1,b.preventLinksPropagation&&"stopPropagation"in a&&a.stopPropagation(),!1)}function o(a){return a.stopPropagation?a.stopPropagation():a.returnValue=!1,!1}function p(a){if(b.preventLinks&&(D.allowLinks=!0),D.isTouched||b.onlyExternal)return!1;var c=a.target||a.srcElement;document.activeElement&&document.activeElement!==document.body&&document.activeElement!==c&&document.activeElement.blur();var d="input select textarea".split(" ");if(b.noSwiping&&c&&t(c))return!1;if(_=!1,D.isTouched=!0,$="touchstart"===a.type,!$&&"which"in a&&3===a.which)return D.isTouched=!1,!1;if(!$||1===a.targetTouches.length){D.callPlugins("onTouchStartBegin"),!$&&!D.isAndroid&&d.indexOf(c.tagName.toLowerCase())<0&&(a.preventDefault?a.preventDefault():a.returnValue=!1);var e=$?a.targetTouches[0].pageX:a.pageX||a.clientX,f=$?a.targetTouches[0].pageY:a.pageY||a.clientY;D.touches.startX=D.touches.currentX=e,D.touches.startY=D.touches.currentY=f,D.touches.start=D.touches.current=N?e:f,D.setWrapperTransition(0),D.positions.start=D.positions.current=D.getWrapperTranslate(),D.setWrapperTranslate(D.positions.start),D.times.start=(new Date).getTime(),I=void 0,b.moveStartThreshold>0&&(X=!1),b.onTouchStart&&D.fireCallback(b.onTouchStart,D,a),D.callPlugins("onTouchStartEnd")}}function q(a){if(D.isTouched&&!b.onlyExternal&&(!$||"mousemove"!==a.type)){var c=$?a.targetTouches[0].pageX:a.pageX||a.clientX,d=$?a.targetTouches[0].pageY:a.pageY||a.clientY;if("undefined"==typeof I&&N&&(I=!!(I||Math.abs(d-D.touches.startY)>Math.abs(c-D.touches.startX))),"undefined"!=typeof I||N||(I=!!(I||Math.abs(d-D.touches.startY)<Math.abs(c-D.touches.startX))),I)return void(D.isTouched=!1);if(N){if(!b.swipeToNext&&c<D.touches.startX||!b.swipeToPrev&&c>D.touches.startX)return}else if(!b.swipeToNext&&d<D.touches.startY||!b.swipeToPrev&&d>D.touches.startY)return;if(a.assignedToSwiper)return void(D.isTouched=!1);if(a.assignedToSwiper=!0,b.preventLinks&&(D.allowLinks=!1),b.onSlideClick&&(D.allowSlideClick=!1),b.autoplay&&D.stopAutoplay(!0),!$||1===a.touches.length){if(D.isMoved||(D.callPlugins("onTouchMoveStart"),b.loop&&(D.fixLoop(),D.positions.start=D.getWrapperTranslate()),b.onTouchMoveStart&&D.fireCallback(b.onTouchMoveStart,D)),D.isMoved=!0,a.preventDefault?a.preventDefault():a.returnValue=!1,D.touches.current=N?c:d,D.positions.current=(D.touches.current-D.touches.start)*b.touchRatio+D.positions.start,D.positions.current>0&&b.onResistanceBefore&&D.fireCallback(b.onResistanceBefore,D,D.positions.current),D.positions.current<-e()&&b.onResistanceAfter&&D.fireCallback(b.onResistanceAfter,D,Math.abs(D.positions.current+e())),b.resistance&&"100%"!==b.resistance){var f;if(D.positions.current>0&&(f=1-D.positions.current/J/2,D.positions.current=.5>f?J/2:D.positions.current*f),D.positions.current<-e()){var g=(D.touches.current-D.touches.start)*b.touchRatio+(e()+D.positions.start);f=(J+g)/J;var h=D.positions.current-g*(1-f)/2,i=-e()-J/2;D.positions.current=i>h||0>=f?i:h}}if(b.resistance&&"100%"===b.resistance&&(D.positions.current>0&&(!b.freeMode||b.freeModeFluid)&&(D.positions.current=0),D.positions.current<-e()&&(!b.freeMode||b.freeModeFluid)&&(D.positions.current=-e())),!b.followFinger)return;if(b.moveStartThreshold)if(Math.abs(D.touches.current-D.touches.start)>b.moveStartThreshold||X){if(!X)return X=!0,void(D.touches.start=D.touches.current);D.setWrapperTranslate(D.positions.current)}else D.positions.current=D.positions.start;else D.setWrapperTranslate(D.positions.current);return(b.freeMode||b.watchActiveIndex)&&D.updateActiveSlide(D.positions.current),b.grabCursor&&(D.container.style.cursor="move",D.container.style.cursor="grabbing",D.container.style.cursor="-moz-grabbin",D.container.style.cursor="-webkit-grabbing"),Y||(Y=D.touches.current),Z||(Z=(new Date).getTime()),D.velocity=(D.touches.current-Y)/((new Date).getTime()-Z)/2,Math.abs(D.touches.current-Y)<2&&(D.velocity=0),Y=D.touches.current,Z=(new Date).getTime(),D.callPlugins("onTouchMoveEnd"),b.onTouchMove&&D.fireCallback(b.onTouchMove,D,a),!1}}}function r(a){if(I&&D.swipeReset(),!b.onlyExternal&&D.isTouched){D.isTouched=!1,b.grabCursor&&(D.container.style.cursor="move",D.container.style.cursor="grab",D.container.style.cursor="-moz-grab",D.container.style.cursor="-webkit-grab"),D.positions.current||0===D.positions.current||(D.positions.current=D.positions.start),b.followFinger&&D.setWrapperTranslate(D.positions.current),D.times.end=(new Date).getTime(),D.touches.diff=D.touches.current-D.touches.start,D.touches.abs=Math.abs(D.touches.diff),D.positions.diff=D.positions.current-D.positions.start,D.positions.abs=Math.abs(D.positions.diff);var c=D.positions.diff,d=D.positions.abs,f=D.times.end-D.times.start;5>d&&300>f&&D.allowLinks===!1&&(b.freeMode||0===d||D.swipeReset(),b.preventLinks&&(D.allowLinks=!0),b.onSlideClick&&(D.allowSlideClick=!0)),setTimeout(function(){"undefined"!=typeof D&&null!==D&&(b.preventLinks&&(D.allowLinks=!0),b.onSlideClick&&(D.allowSlideClick=!0))},100);var g=e();if(!D.isMoved&&b.freeMode)return D.isMoved=!1,b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),void D.callPlugins("onTouchEnd");if(!D.isMoved||D.positions.current>0||D.positions.current<-g)return D.swipeReset(),b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),void D.callPlugins("onTouchEnd");if(D.isMoved=!1,b.freeMode){if(b.freeModeFluid){var h,i=1e3*b.momentumRatio,j=D.velocity*i,k=D.positions.current+j,l=!1,m=20*Math.abs(D.velocity)*b.momentumBounceRatio;-g>k&&(b.momentumBounce&&D.support.transitions?(-m>k+g&&(k=-g-m),h=-g,l=!0,_=!0):k=-g),k>0&&(b.momentumBounce&&D.support.transitions?(k>m&&(k=m),h=0,l=!0,_=!0):k=0),0!==D.velocity&&(i=Math.abs((k-D.positions.current)/D.velocity)),D.setWrapperTranslate(k),D.setWrapperTransition(i),b.momentumBounce&&l&&D.wrapperTransitionEnd(function(){_&&(b.onMomentumBounce&&D.fireCallback(b.onMomentumBounce,D),D.callPlugins("onMomentumBounce"),D.setWrapperTranslate(h),D.setWrapperTransition(300))}),D.updateActiveSlide(k)}return(!b.freeModeFluid||f>=300)&&D.updateActiveSlide(D.positions.current),b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),void D.callPlugins("onTouchEnd")}H=0>c?"toNext":"toPrev","toNext"===H&&300>=f&&(30>d||!b.shortSwipes?D.swipeReset():D.swipeNext(!0,!0)),"toPrev"===H&&300>=f&&(30>d||!b.shortSwipes?D.swipeReset():D.swipePrev(!0,!0));var n=0;if("auto"===b.slidesPerView){for(var o,p=Math.abs(D.getWrapperTranslate()),q=0,r=0;r<D.slides.length;r++)if(o=N?D.slides[r].getWidth(!0,b.roundLengths):D.slides[r].getHeight(!0,b.roundLengths),q+=o,q>p){n=o;break}n>J&&(n=J)}else n=F*b.slidesPerView;"toNext"===H&&f>300&&(d>=n*b.longSwipesRatio?D.swipeNext(!0,!0):D.swipeReset()),"toPrev"===H&&f>300&&(d>=n*b.longSwipesRatio?D.swipePrev(!0,!0):D.swipeReset()),b.onTouchEnd&&D.fireCallback(b.onTouchEnd,D,a),D.callPlugins("onTouchEnd")}}function s(a,b){return a&&a.getAttribute("class")&&a.getAttribute("class").indexOf(b)>-1}function t(a){var c=!1;do s(a,b.noSwipingClass)&&(c=!0),a=a.parentElement;while(!c&&a.parentElement&&!s(a,b.wrapperClass));return!c&&s(a,b.wrapperClass)&&s(a,b.noSwipingClass)&&(c=!0),c}function u(a,b){var c,d=document.createElement("div");return d.innerHTML=b,c=d.firstChild,c.className+=" "+a,c.outerHTML}function v(a,c,d){function e(){var f=+new Date,l=f-g;h+=i*l/(1e3/60),k="toNext"===j?h>a:a>h,k?(D.setWrapperTranslate(Math.ceil(h)),D._DOMAnimating=!0,window.setTimeout(function(){e()},1e3/60)):(b.onSlideChangeEnd&&("to"===c?d.runCallbacks===!0&&D.fireCallback(b.onSlideChangeEnd,D,j):D.fireCallback(b.onSlideChangeEnd,D,j)),D.setWrapperTranslate(a),D._DOMAnimating=!1)}var f="to"===c&&d.speed>=0?d.speed:b.speed,g=+new Date;if(D.support.transitions||!b.DOMAnimation)D.setWrapperTranslate(a),D.setWrapperTransition(f);else{var h=D.getWrapperTranslate(),i=Math.ceil((a-h)/f*(1e3/60)),j=h>a?"toNext":"toPrev",k="toNext"===j?h>a:a>h;if(D._DOMAnimating)return;e()}D.updateActiveSlide(a),b.onSlideNext&&"next"===c&&d.runCallbacks===!0&&D.fireCallback(b.onSlideNext,D,a),b.onSlidePrev&&"prev"===c&&d.runCallbacks===!0&&D.fireCallback(b.onSlidePrev,D,a),b.onSlideReset&&"reset"===c&&d.runCallbacks===!0&&D.fireCallback(b.onSlideReset,D,a),"next"!==c&&"prev"!==c&&"to"!==c||d.runCallbacks!==!0||w(c)}function w(a){if(D.callPlugins("onSlideChangeStart"),b.onSlideChangeStart)if(b.queueStartCallbacks&&D.support.transitions){if(D._queueStartCallbacks)return;D._queueStartCallbacks=!0,D.fireCallback(b.onSlideChangeStart,D,a),D.wrapperTransitionEnd(function(){D._queueStartCallbacks=!1})}else D.fireCallback(b.onSlideChangeStart,D,a);if(b.onSlideChangeEnd)if(D.support.transitions)if(b.queueEndCallbacks){if(D._queueEndCallbacks)return;D._queueEndCallbacks=!0,D.wrapperTransitionEnd(function(c){D.fireCallback(b.onSlideChangeEnd,c,a)})}else D.wrapperTransitionEnd(function(c){D.fireCallback(b.onSlideChangeEnd,c,a)});else b.DOMAnimation||setTimeout(function(){D.fireCallback(b.onSlideChangeEnd,D,a)},10)}function x(){var a=D.paginationButtons;if(a)for(var b=0;b<a.length;b++)D.h.removeEventListener(a[b],"click",z)}function y(){var a=D.paginationButtons;if(a)for(var b=0;b<a.length;b++)D.h.addEventListener(a[b],"click",z)}function z(a){for(var c,d=a.target||a.srcElement,e=D.paginationButtons,f=0;f<e.length;f++)d===e[f]&&(c=f);b.autoplay&&D.stopAutoplay(!0),D.swipeTo(c)}function A(){ab=setTimeout(function(){b.loop?(D.fixLoop(),D.swipeNext(!0,!0)):D.swipeNext(!0,!0)||(b.autoplayStopOnLast?(clearTimeout(ab),ab=void 0):D.swipeTo(0)),D.wrapperTransitionEnd(function(){"undefined"!=typeof ab&&A()})},b.autoplay)}function B(){D.calcSlides(),b.loader.slides.length>0&&0===D.slides.length&&D.loadSlides(),b.loop&&D.createLoop(),D.init(),f(),b.pagination&&D.createPagination(!0),b.loop||b.initialSlide>0?D.swipeTo(b.initialSlide,0,!1):D.updateActiveSlide(0),b.autoplay&&D.startAutoplay(),D.centerIndex=D.activeIndex,b.onSwiperCreated&&D.fireCallback(b.onSwiperCreated,D),D.callPlugins("onSwiperCreated")}if(!document.body.outerHTML&&document.body.__defineGetter__&&HTMLElement){var C=HTMLElement.prototype;C.__defineGetter__&&C.__defineGetter__("outerHTML",function(){return(new XMLSerializer).serializeToString(this)})}if(window.getComputedStyle||(window.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){for(var c=b||0,d=this.length;d>c;c++)if(this[c]===a)return c;return-1}),(document.querySelectorAll||window.jQuery)&&"undefined"!=typeof a&&(a.nodeType||0!==c(a).length)){var D=this;D.touches={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,diff:0,abs:0},D.positions={start:0,abs:0,diff:0,current:0},D.times={start:0,end:0},D.id=(new Date).getTime(),D.container=a.nodeType?a:c(a)[0],D.isTouched=!1,D.isMoved=!1,D.activeIndex=0,D.centerIndex=0,D.activeLoaderIndex=0,D.activeLoopIndex=0,D.previousIndex=null,D.velocity=0,D.snapGrid=[],D.slidesGrid=[],D.imagesToLoad=[],D.imagesLoaded=0,D.wrapperLeft=0,D.wrapperRight=0,D.wrapperTop=0,D.wrapperBottom=0,D.isAndroid=navigator.userAgent.toLowerCase().indexOf("android")>=0;var E,F,G,H,I,J,K={eventTarget:"wrapper",mode:"horizontal",touchRatio:1,speed:300,freeMode:!1,freeModeFluid:!1,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,slidesPerView:1,slidesPerGroup:1,slidesPerViewFit:!0,simulateTouch:!0,followFinger:!0,shortSwipes:!0,longSwipesRatio:.5,moveStartThreshold:!1,onlyExternal:!1,createPagination:!0,pagination:!1,paginationElement:"span",paginationClickable:!1,paginationAsRange:!0,resistance:!0,scrollContainer:!1,preventLinks:!0,preventLinksPropagation:!1,noSwiping:!1,noSwipingClass:"swiper-no-swiping",initialSlide:0,keyboardControl:!1,mousewheelControl:!1,mousewheelControlForceToAxis:!1,useCSS3Transforms:!0,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,loop:!1,loopAdditionalSlides:0,roundLengths:!1,calculateHeight:!1,cssWidthAndHeight:!1,updateOnImagesReady:!0,releaseFormElements:!0,watchActiveIndex:!1,visibilityFullFit:!1,offsetPxBefore:0,offsetPxAfter:0,offsetSlidesBefore:0,offsetSlidesAfter:0,centeredSlides:!1,queueStartCallbacks:!1,queueEndCallbacks:!1,autoResize:!0,resizeReInit:!1,DOMAnimation:!0,loader:{slides:[],slidesHTMLType:"inner",surroundGroups:1,logic:"reload",loadAllSlides:!1},swipeToPrev:!0,swipeToNext:!0,slideElement:"div",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",wrapperClass:"swiper-wrapper",paginationElementClass:"swiper-pagination-switch",paginationActiveClass:"swiper-active-switch",paginationVisibleClass:"swiper-visible-switch"};b=b||{};for(var L in K)if(L in b&&"object"==typeof b[L])for(var M in K[L])M in b[L]||(b[L][M]=K[L][M]);else L in b||(b[L]=K[L]);D.params=b,b.scrollContainer&&(b.freeMode=!0,b.freeModeFluid=!0),b.loop&&(b.resistance="100%");var N="horizontal"===b.mode,O=["mousedown","mousemove","mouseup"];D.browser.ie10&&(O=["MSPointerDown","MSPointerMove","MSPointerUp"]),D.browser.ie11&&(O=["pointerdown","pointermove","pointerup"]),D.touchEvents={touchStart:D.support.touch||!b.simulateTouch?"touchstart":O[0],touchMove:D.support.touch||!b.simulateTouch?"touchmove":O[1],touchEnd:D.support.touch||!b.simulateTouch?"touchend":O[2]};for(var P=D.container.childNodes.length-1;P>=0;P--)if(D.container.childNodes[P].className)for(var Q=D.container.childNodes[P].className.split(/\s+/),R=0;R<Q.length;R++)Q[R]===b.wrapperClass&&(E=D.container.childNodes[P]);D.wrapper=E,D._extendSwiperSlide=function(a){return a.append=function(){return b.loop?a.insertAfter(D.slides.length-D.loopedSlides):(D.wrapper.appendChild(a),D.reInit()),a},a.prepend=function(){return b.loop?(D.wrapper.insertBefore(a,D.slides[D.loopedSlides]),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()):D.wrapper.insertBefore(a,D.wrapper.firstChild),D.reInit(),a},a.insertAfter=function(c){if("undefined"==typeof c)return!1;var d;return b.loop?(d=D.slides[c+1+D.loopedSlides],d?D.wrapper.insertBefore(a,d):D.wrapper.appendChild(a),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()):(d=D.slides[c+1],D.wrapper.insertBefore(a,d)),D.reInit(),a},a.clone=function(){return D._extendSwiperSlide(a.cloneNode(!0))},a.remove=function(){D.wrapper.removeChild(a),D.reInit()},a.html=function(b){return"undefined"==typeof b?a.innerHTML:(a.innerHTML=b,a)},a.index=function(){for(var b,c=D.slides.length-1;c>=0;c--)a===D.slides[c]&&(b=c);return b},a.isActive=function(){return a.index()===D.activeIndex?!0:!1},a.swiperSlideDataStorage||(a.swiperSlideDataStorage={}),a.getData=function(b){return a.swiperSlideDataStorage[b]},a.setData=function(b,c){return a.swiperSlideDataStorage[b]=c,a},a.data=function(b,c){return"undefined"==typeof c?a.getAttribute("data-"+b):(a.setAttribute("data-"+b,c),a)},a.getWidth=function(b,c){return D.h.getWidth(a,b,c)},a.getHeight=function(b,c){return D.h.getHeight(a,b,c)},a.getOffset=function(){return D.h.getOffset(a)},a},D.calcSlides=function(a){var c=D.slides?D.slides.length:!1;D.slides=[],D.displaySlides=[];for(var d=0;d<D.wrapper.childNodes.length;d++)if(D.wrapper.childNodes[d].className)for(var e=D.wrapper.childNodes[d].className,f=e.split(/\s+/),i=0;i<f.length;i++)f[i]===b.slideClass&&D.slides.push(D.wrapper.childNodes[d]);for(d=D.slides.length-1;d>=0;d--)D._extendSwiperSlide(D.slides[d]);c!==!1&&(c!==D.slides.length||a)&&(h(),g(),D.updateActiveSlide(),D.params.pagination&&D.createPagination(),D.callPlugins("numberOfSlidesChanged"))},D.createSlide=function(a,c,d){c=c||D.params.slideClass,d=d||b.slideElement;var e=document.createElement(d);return e.innerHTML=a||"",e.className=c,D._extendSwiperSlide(e)},D.appendSlide=function(a,b,c){return a?a.nodeType?D._extendSwiperSlide(a).append():D.createSlide(a,b,c).append():void 0},D.prependSlide=function(a,b,c){return a?a.nodeType?D._extendSwiperSlide(a).prepend():D.createSlide(a,b,c).prepend():void 0},D.insertSlideAfter=function(a,b,c,d){return"undefined"==typeof a?!1:b.nodeType?D._extendSwiperSlide(b).insertAfter(a):D.createSlide(b,c,d).insertAfter(a)},D.removeSlide=function(a){if(D.slides[a]){if(b.loop){if(!D.slides[a+D.loopedSlides])return!1;D.slides[a+D.loopedSlides].remove(),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()}else D.slides[a].remove();return!0}return!1},D.removeLastSlide=function(){return D.slides.length>0?(b.loop?(D.slides[D.slides.length-1-D.loopedSlides].remove(),D.removeLoopedSlides(),D.calcSlides(),D.createLoop()):D.slides[D.slides.length-1].remove(),!0):!1},D.removeAllSlides=function(){for(var a=D.slides.length,b=D.slides.length-1;b>=0;b--)D.slides[b].remove(),b===a-1&&D.setWrapperTranslate(0)},D.getSlide=function(a){return D.slides[a]},D.getLastSlide=function(){return D.slides[D.slides.length-1]},D.getFirstSlide=function(){return D.slides[0]},D.activeSlide=function(){return D.slides[D.activeIndex]},D.fireCallback=function(){var a=arguments[0];if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)"function"==typeof a[c]&&a[c](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);else"[object String]"===Object.prototype.toString.call(a)?b["on"+a]&&D.fireCallback(b["on"+a],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]):a(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},D.addCallback=function(a,b){var c,e=this;return e.params["on"+a]?d(this.params["on"+a])?this.params["on"+a].push(b):"function"==typeof this.params["on"+a]?(c=this.params["on"+a],this.params["on"+a]=[],this.params["on"+a].push(c),this.params["on"+a].push(b)):void 0:(this.params["on"+a]=[],this.params["on"+a].push(b))},D.removeCallbacks=function(a){D.params["on"+a]&&(D.params["on"+a]=null)};var S=[];for(var T in D.plugins)if(b[T]){var U=D.plugins[T](D,b[T]);U&&S.push(U)}D.callPlugins=function(a,b){b||(b={});for(var c=0;c<S.length;c++)a in S[c]&&S[c][a](b)},!D.browser.ie10&&!D.browser.ie11||b.onlyExternal||D.wrapper.classList.add("swiper-wp8-"+(N?"horizontal":"vertical")),b.freeMode&&(D.container.className+=" swiper-free-mode"),D.initialized=!1,D.init=function(a,c){var d=D.h.getWidth(D.container,!1,b.roundLengths),e=D.h.getHeight(D.container,!1,b.roundLengths);if(d!==D.width||e!==D.height||a){D.width=d,D.height=e;var f,g,h,i,j,k,l;J=N?d:e;var m=D.wrapper;if(a&&D.calcSlides(c),"auto"===b.slidesPerView){var n=0,o=0;b.slidesOffset>0&&(m.style.paddingLeft="",m.style.paddingRight="",m.style.paddingTop="",m.style.paddingBottom=""),m.style.width="",m.style.height="",b.offsetPxBefore>0&&(N?D.wrapperLeft=b.offsetPxBefore:D.wrapperTop=b.offsetPxBefore),b.offsetPxAfter>0&&(N?D.wrapperRight=b.offsetPxAfter:D.wrapperBottom=b.offsetPxAfter),b.centeredSlides&&(N?(D.wrapperLeft=(J-this.slides[0].getWidth(!0,b.roundLengths))/2,D.wrapperRight=(J-D.slides[D.slides.length-1].getWidth(!0,b.roundLengths))/2):(D.wrapperTop=(J-D.slides[0].getHeight(!0,b.roundLengths))/2,D.wrapperBottom=(J-D.slides[D.slides.length-1].getHeight(!0,b.roundLengths))/2)),N?(D.wrapperLeft>=0&&(m.style.paddingLeft=D.wrapperLeft+"px"),D.wrapperRight>=0&&(m.style.paddingRight=D.wrapperRight+"px")):(D.wrapperTop>=0&&(m.style.paddingTop=D.wrapperTop+"px"),D.wrapperBottom>=0&&(m.style.paddingBottom=D.wrapperBottom+"px")),k=0;var p=0;for(D.snapGrid=[],D.slidesGrid=[],h=0,l=0;l<D.slides.length;l++){f=D.slides[l].getWidth(!0,b.roundLengths),g=D.slides[l].getHeight(!0,b.roundLengths),b.calculateHeight&&(h=Math.max(h,g));var q=N?f:g;if(b.centeredSlides){var r=l===D.slides.length-1?0:D.slides[l+1].getWidth(!0,b.roundLengths),s=l===D.slides.length-1?0:D.slides[l+1].getHeight(!0,b.roundLengths),t=N?r:s;if(q>J){if(b.slidesPerViewFit)D.snapGrid.push(k+D.wrapperLeft),D.snapGrid.push(k+q-J+D.wrapperLeft);else for(var u=0;u<=Math.floor(q/(J+D.wrapperLeft));u++)D.snapGrid.push(0===u?k+D.wrapperLeft:k+D.wrapperLeft+J*u);D.slidesGrid.push(k+D.wrapperLeft)}else D.snapGrid.push(p),D.slidesGrid.push(p);p+=q/2+t/2}else{if(q>J)if(b.slidesPerViewFit)D.snapGrid.push(k),D.snapGrid.push(k+q-J);else if(0!==J)for(var v=0;v<=Math.floor(q/J);v++)D.snapGrid.push(k+J*v);else D.snapGrid.push(k);else D.snapGrid.push(k);D.slidesGrid.push(k)}k+=q,n+=f,o+=g}b.calculateHeight&&(D.height=h),N?(G=n+D.wrapperRight+D.wrapperLeft,b.cssWidthAndHeight&&"height"!==b.cssWidthAndHeight||(m.style.width=n+"px"),b.cssWidthAndHeight&&"width"!==b.cssWidthAndHeight||(m.style.height=D.height+"px")):(b.cssWidthAndHeight&&"height"!==b.cssWidthAndHeight||(m.style.width=D.width+"px"),b.cssWidthAndHeight&&"width"!==b.cssWidthAndHeight||(m.style.height=o+"px"),G=o+D.wrapperTop+D.wrapperBottom)}else if(b.scrollContainer)m.style.width="",m.style.height="",i=D.slides[0].getWidth(!0,b.roundLengths),j=D.slides[0].getHeight(!0,b.roundLengths),G=N?i:j,m.style.width=i+"px",m.style.height=j+"px",F=N?i:j;else{if(b.calculateHeight){for(h=0,j=0,N||(D.container.style.height=""),m.style.height="",l=0;l<D.slides.length;l++)D.slides[l].style.height="",h=Math.max(D.slides[l].getHeight(!0),h),N||(j+=D.slides[l].getHeight(!0));g=h,D.height=g,N?j=g:(J=g,D.container.style.height=J+"px")}else g=N?D.height:D.height/b.slidesPerView,b.roundLengths&&(g=Math.ceil(g)),j=N?D.height:D.slides.length*g;for(f=N?D.width/b.slidesPerView:D.width,b.roundLengths&&(f=Math.ceil(f)),i=N?D.slides.length*f:D.width,F=N?f:g,b.offsetSlidesBefore>0&&(N?D.wrapperLeft=F*b.offsetSlidesBefore:D.wrapperTop=F*b.offsetSlidesBefore),b.offsetSlidesAfter>0&&(N?D.wrapperRight=F*b.offsetSlidesAfter:D.wrapperBottom=F*b.offsetSlidesAfter),b.offsetPxBefore>0&&(N?D.wrapperLeft=b.offsetPxBefore:D.wrapperTop=b.offsetPxBefore),b.offsetPxAfter>0&&(N?D.wrapperRight=b.offsetPxAfter:D.wrapperBottom=b.offsetPxAfter),b.centeredSlides&&(N?(D.wrapperLeft=(J-F)/2,D.wrapperRight=(J-F)/2):(D.wrapperTop=(J-F)/2,D.wrapperBottom=(J-F)/2)),N?(D.wrapperLeft>0&&(m.style.paddingLeft=D.wrapperLeft+"px"),D.wrapperRight>0&&(m.style.paddingRight=D.wrapperRight+"px")):(D.wrapperTop>0&&(m.style.paddingTop=D.wrapperTop+"px"),D.wrapperBottom>0&&(m.style.paddingBottom=D.wrapperBottom+"px")),G=N?i+D.wrapperRight+D.wrapperLeft:j+D.wrapperTop+D.wrapperBottom,parseFloat(i)>0&&(!b.cssWidthAndHeight||"height"===b.cssWidthAndHeight)&&(m.style.width=i+"px"),parseFloat(j)>0&&(!b.cssWidthAndHeight||"width"===b.cssWidthAndHeight)&&(m.style.height=j+"px"),k=0,D.snapGrid=[],D.slidesGrid=[],l=0;l<D.slides.length;l++)D.snapGrid.push(k),D.slidesGrid.push(k),k+=F,parseFloat(f)>0&&(!b.cssWidthAndHeight||"height"===b.cssWidthAndHeight)&&(D.slides[l].style.width=f+"px"),parseFloat(g)>0&&(!b.cssWidthAndHeight||"width"===b.cssWidthAndHeight)&&(D.slides[l].style.height=g+"px")}D.initialized?(D.callPlugins("onInit"),b.onInit&&D.fireCallback(b.onInit,D)):(D.callPlugins("onFirstInit"),b.onFirstInit&&D.fireCallback(b.onFirstInit,D)),D.initialized=!0}},D.reInit=function(a){D.init(!0,a)},D.resizeFix=function(a){D.callPlugins("beforeResizeFix"),D.init(b.resizeReInit||a),b.freeMode?D.getWrapperTranslate()<-e()&&(D.setWrapperTransition(0),D.setWrapperTranslate(-e())):(D.swipeTo(b.loop?D.activeLoopIndex:D.activeIndex,0,!1),b.autoplay&&(D.support.transitions&&"undefined"!=typeof ab?"undefined"!=typeof ab&&(clearTimeout(ab),ab=void 0,D.startAutoplay()):"undefined"!=typeof bb&&(clearInterval(bb),bb=void 0,D.startAutoplay()))),D.callPlugins("afterResizeFix")},D.destroy=function(a){var c=D.h.removeEventListener,d="wrapper"===b.eventTarget?D.wrapper:D.container;if(D.browser.ie10||D.browser.ie11?(c(d,D.touchEvents.touchStart,p),c(document,D.touchEvents.touchMove,q),c(document,D.touchEvents.touchEnd,r)):(D.support.touch&&(c(d,"touchstart",p),c(d,"touchmove",q),c(d,"touchend",r)),b.simulateTouch&&(c(d,"mousedown",p),c(document,"mousemove",q),c(document,"mouseup",r))),b.autoResize&&c(window,"resize",D.resizeFix),h(),b.paginationClickable&&x(),b.mousewheelControl&&D._wheelEvent&&c(D.container,D._wheelEvent,j),b.keyboardControl&&c(document,"keydown",i),b.autoplay&&D.stopAutoplay(),a){D.wrapper.removeAttribute("style");for(var e=0;e<D.slides.length;e++)D.slides[e].removeAttribute("style")}D.callPlugins("onDestroy"),window.jQuery&&window.jQuery(D.container).data("swiper")&&window.jQuery(D.container).removeData("swiper"),window.Zepto&&window.Zepto(D.container).data("swiper")&&window.Zepto(D.container).removeData("swiper"),D=null},D.disableKeyboardControl=function(){b.keyboardControl=!1,D.h.removeEventListener(document,"keydown",i)},D.enableKeyboardControl=function(){b.keyboardControl=!0,D.h.addEventListener(document,"keydown",i)};var V=(new Date).getTime();if(D.disableMousewheelControl=function(){return D._wheelEvent?(b.mousewheelControl=!1,D.h.removeEventListener(D.container,D._wheelEvent,j),!0):!1},D.enableMousewheelControl=function(){return D._wheelEvent?(b.mousewheelControl=!0,D.h.addEventListener(D.container,D._wheelEvent,j),!0):!1},b.grabCursor){var W=D.container.style;W.cursor="move",W.cursor="grab",W.cursor="-moz-grab",W.cursor="-webkit-grab"}D.allowSlideClick=!0,D.allowLinks=!0;var X,Y,Z,$=!1,_=!0;D.swipeNext=function(a,c){"undefined"==typeof a&&(a=!0),!c&&b.loop&&D.fixLoop(),!c&&b.autoplay&&D.stopAutoplay(!0),D.callPlugins("onSwipeNext");var d=D.getWrapperTranslate().toFixed(2),f=d;if("auto"===b.slidesPerView){for(var g=0;g<D.snapGrid.length;g++)if(-d>=D.snapGrid[g].toFixed(2)&&-d<D.snapGrid[g+1].toFixed(2)){f=-D.snapGrid[g+1];break}}else{var h=F*b.slidesPerGroup;f=-(Math.floor(Math.abs(d)/Math.floor(h))*h+h)}return f<-e()&&(f=-e()),f===d?!1:(v(f,"next",{runCallbacks:a}),!0)},D.swipePrev=function(a,c){"undefined"==typeof a&&(a=!0),!c&&b.loop&&D.fixLoop(),!c&&b.autoplay&&D.stopAutoplay(!0),D.callPlugins("onSwipePrev");var d,e=Math.ceil(D.getWrapperTranslate());if("auto"===b.slidesPerView){d=0;for(var f=1;f<D.snapGrid.length;f++){if(-e===D.snapGrid[f]){d=-D.snapGrid[f-1];break}if(-e>D.snapGrid[f]&&-e<D.snapGrid[f+1]){d=-D.snapGrid[f];break}}}else{var g=F*b.slidesPerGroup;d=-(Math.ceil(-e/g)-1)*g}return d>0&&(d=0),d===e?!1:(v(d,"prev",{runCallbacks:a}),!0)},D.swipeReset=function(a){"undefined"==typeof a&&(a=!0),D.callPlugins("onSwipeReset");{var c,d=D.getWrapperTranslate(),f=F*b.slidesPerGroup;-e()}if("auto"===b.slidesPerView){c=0;for(var g=0;g<D.snapGrid.length;g++){if(-d===D.snapGrid[g])return;if(-d>=D.snapGrid[g]&&-d<D.snapGrid[g+1]){c=D.positions.diff>0?-D.snapGrid[g+1]:-D.snapGrid[g];break}}-d>=D.snapGrid[D.snapGrid.length-1]&&(c=-D.snapGrid[D.snapGrid.length-1]),d<=-e()&&(c=-e())}else c=0>d?Math.round(d/f)*f:0,d<=-e()&&(c=-e());return b.scrollContainer&&(c=0>d?d:0),c<-e()&&(c=-e()),b.scrollContainer&&J>F&&(c=0),c===d?!1:(v(c,"reset",{runCallbacks:a}),!0)},D.swipeTo=function(a,c,d){a=parseInt(a,10),D.callPlugins("onSwipeTo",{index:a,speed:c}),b.loop&&(a+=D.loopedSlides);var f=D.getWrapperTranslate();if(!(!isFinite(a)||a>D.slides.length-1||0>a)){var g;return g="auto"===b.slidesPerView?-D.slidesGrid[a]:-a*F,g<-e()&&(g=-e()),g===f?!1:("undefined"==typeof d&&(d=!0),v(g,"to",{index:a,speed:c,runCallbacks:d}),!0)}},D._queueStartCallbacks=!1,D._queueEndCallbacks=!1,D.updateActiveSlide=function(a){if(D.initialized&&0!==D.slides.length){D.previousIndex=D.activeIndex,"undefined"==typeof a&&(a=D.getWrapperTranslate()),a>0&&(a=0);var c;if("auto"===b.slidesPerView){if(D.activeIndex=D.slidesGrid.indexOf(-a),D.activeIndex<0){for(c=0;c<D.slidesGrid.length-1&&!(-a>D.slidesGrid[c]&&-a<D.slidesGrid[c+1]);c++);var d=Math.abs(D.slidesGrid[c]+a),e=Math.abs(D.slidesGrid[c+1]+a);
D.activeIndex=e>=d?c:c+1}}else D.activeIndex=Math[b.visibilityFullFit?"ceil":"round"](-a/F);if(D.activeIndex===D.slides.length&&(D.activeIndex=D.slides.length-1),D.activeIndex<0&&(D.activeIndex=0),D.slides[D.activeIndex]){if(D.calcVisibleSlides(a),D.support.classList){var f;for(c=0;c<D.slides.length;c++)f=D.slides[c],f.classList.remove(b.slideActiveClass),D.visibleSlides.indexOf(f)>=0?f.classList.add(b.slideVisibleClass):f.classList.remove(b.slideVisibleClass);D.slides[D.activeIndex].classList.add(b.slideActiveClass)}else{var g=new RegExp("\\s*"+b.slideActiveClass),h=new RegExp("\\s*"+b.slideVisibleClass);for(c=0;c<D.slides.length;c++)D.slides[c].className=D.slides[c].className.replace(g,"").replace(h,""),D.visibleSlides.indexOf(D.slides[c])>=0&&(D.slides[c].className+=" "+b.slideVisibleClass);D.slides[D.activeIndex].className+=" "+b.slideActiveClass}if(b.loop){var i=D.loopedSlides;D.activeLoopIndex=D.activeIndex-i,D.activeLoopIndex>=D.slides.length-2*i&&(D.activeLoopIndex=D.slides.length-2*i-D.activeLoopIndex),D.activeLoopIndex<0&&(D.activeLoopIndex=D.slides.length-2*i+D.activeLoopIndex),D.activeLoopIndex<0&&(D.activeLoopIndex=0)}else D.activeLoopIndex=D.activeIndex;b.pagination&&D.updatePagination(a)}}},D.createPagination=function(a){if(b.paginationClickable&&D.paginationButtons&&x(),D.paginationContainer=b.pagination.nodeType?b.pagination:c(b.pagination)[0],b.createPagination){var d="",e=D.slides.length,f=e;b.loop&&(f-=2*D.loopedSlides);for(var g=0;f>g;g++)d+="<"+b.paginationElement+' class="'+b.paginationElementClass+'"></'+b.paginationElement+">";D.paginationContainer.innerHTML=d}D.paginationButtons=c("."+b.paginationElementClass,D.paginationContainer),a||D.updatePagination(),D.callPlugins("onCreatePagination"),b.paginationClickable&&y()},D.updatePagination=function(a){if(b.pagination&&!(D.slides.length<1)){var d=c("."+b.paginationActiveClass,D.paginationContainer);if(d){var e=D.paginationButtons;if(0!==e.length){for(var f=0;f<e.length;f++)e[f].className=b.paginationElementClass;var g=b.loop?D.loopedSlides:0;if(b.paginationAsRange){D.visibleSlides||D.calcVisibleSlides(a);var h,i=[];for(h=0;h<D.visibleSlides.length;h++){var j=D.slides.indexOf(D.visibleSlides[h])-g;b.loop&&0>j&&(j=D.slides.length-2*D.loopedSlides+j),b.loop&&j>=D.slides.length-2*D.loopedSlides&&(j=D.slides.length-2*D.loopedSlides-j,j=Math.abs(j)),i.push(j)}for(h=0;h<i.length;h++)e[i[h]]&&(e[i[h]].className+=" "+b.paginationVisibleClass);b.loop?void 0!==e[D.activeLoopIndex]&&(e[D.activeLoopIndex].className+=" "+b.paginationActiveClass):e[D.activeIndex]&&(e[D.activeIndex].className+=" "+b.paginationActiveClass)}else b.loop?e[D.activeLoopIndex]&&(e[D.activeLoopIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass):e[D.activeIndex]&&(e[D.activeIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass)}}}},D.calcVisibleSlides=function(a){var c=[],d=0,e=0,f=0;N&&D.wrapperLeft>0&&(a+=D.wrapperLeft),!N&&D.wrapperTop>0&&(a+=D.wrapperTop);for(var g=0;g<D.slides.length;g++){d+=e,e="auto"===b.slidesPerView?N?D.h.getWidth(D.slides[g],!0,b.roundLengths):D.h.getHeight(D.slides[g],!0,b.roundLengths):F,f=d+e;var h=!1;b.visibilityFullFit?(d>=-a&&-a+J>=f&&(h=!0),-a>=d&&f>=-a+J&&(h=!0)):(f>-a&&-a+J>=f&&(h=!0),d>=-a&&-a+J>d&&(h=!0),-a>d&&f>-a+J&&(h=!0)),h&&c.push(D.slides[g])}0===c.length&&(c=[D.slides[D.activeIndex]]),D.visibleSlides=c};var ab,bb;D.startAutoplay=function(){if(D.support.transitions){if("undefined"!=typeof ab)return!1;if(!b.autoplay)return;D.callPlugins("onAutoplayStart"),b.onAutoplayStart&&D.fireCallback(b.onAutoplayStart,D),A()}else{if("undefined"!=typeof bb)return!1;if(!b.autoplay)return;D.callPlugins("onAutoplayStart"),b.onAutoplayStart&&D.fireCallback(b.onAutoplayStart,D),bb=setInterval(function(){b.loop?(D.fixLoop(),D.swipeNext(!0,!0)):D.swipeNext(!0,!0)||(b.autoplayStopOnLast?(clearInterval(bb),bb=void 0):D.swipeTo(0))},b.autoplay)}},D.stopAutoplay=function(a){if(D.support.transitions){if(!ab)return;ab&&clearTimeout(ab),ab=void 0,a&&!b.autoplayDisableOnInteraction&&D.wrapperTransitionEnd(function(){A()}),D.callPlugins("onAutoplayStop"),b.onAutoplayStop&&D.fireCallback(b.onAutoplayStop,D)}else bb&&clearInterval(bb),bb=void 0,D.callPlugins("onAutoplayStop"),b.onAutoplayStop&&D.fireCallback(b.onAutoplayStop,D)},D.loopCreated=!1,D.removeLoopedSlides=function(){if(D.loopCreated)for(var a=0;a<D.slides.length;a++)D.slides[a].getData("looped")===!0&&D.wrapper.removeChild(D.slides[a])},D.createLoop=function(){if(0!==D.slides.length){D.loopedSlides="auto"===b.slidesPerView?b.loopedSlides||1:Math.floor(b.slidesPerView)+b.loopAdditionalSlides,D.loopedSlides>D.slides.length&&(D.loopedSlides=D.slides.length);var a,c="",d="",e="",f=D.slides.length,g=Math.floor(D.loopedSlides/f),h=D.loopedSlides%f;for(a=0;g*f>a;a++){var i=a;if(a>=f){var j=Math.floor(a/f);i=a-f*j}e+=D.slides[i].outerHTML}for(a=0;h>a;a++)d+=u(b.slideDuplicateClass,D.slides[a].outerHTML);for(a=f-h;f>a;a++)c+=u(b.slideDuplicateClass,D.slides[a].outerHTML);var k=c+e+E.innerHTML+e+d;for(E.innerHTML=k,D.loopCreated=!0,D.calcSlides(),a=0;a<D.slides.length;a++)(a<D.loopedSlides||a>=D.slides.length-D.loopedSlides)&&D.slides[a].setData("looped",!0);D.callPlugins("onCreateLoop")}},D.fixLoop=function(){var a;D.activeIndex<D.loopedSlides?(a=D.slides.length-3*D.loopedSlides+D.activeIndex,D.swipeTo(a,0,!1)):("auto"===b.slidesPerView&&D.activeIndex>=2*D.loopedSlides||D.activeIndex>D.slides.length-2*b.slidesPerView)&&(a=-D.slides.length+D.activeIndex+D.loopedSlides,D.swipeTo(a,0,!1))},D.loadSlides=function(){var a="";D.activeLoaderIndex=0;for(var c=b.loader.slides,d=b.loader.loadAllSlides?c.length:b.slidesPerView*(1+b.loader.surroundGroups),e=0;d>e;e++)a+="outer"===b.loader.slidesHTMLType?c[e]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+e+'">'+c[e]+"</"+b.slideElement+">";D.wrapper.innerHTML=a,D.calcSlides(!0),b.loader.loadAllSlides||D.wrapperTransitionEnd(D.reloadSlides,!0)},D.reloadSlides=function(){var a=b.loader.slides,c=parseInt(D.activeSlide().data("swiperindex"),10);if(!(0>c||c>a.length-1)){D.activeLoaderIndex=c;var d=Math.max(0,c-b.slidesPerView*b.loader.surroundGroups),e=Math.min(c+b.slidesPerView*(1+b.loader.surroundGroups)-1,a.length-1);if(c>0){var f=-F*(c-d);D.setWrapperTranslate(f),D.setWrapperTransition(0)}var g;if("reload"===b.loader.logic){D.wrapper.innerHTML="";var h="";for(g=d;e>=g;g++)h+="outer"===b.loader.slidesHTMLType?a[g]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+g+'">'+a[g]+"</"+b.slideElement+">";D.wrapper.innerHTML=h}else{var i=1e3,j=0;for(g=0;g<D.slides.length;g++){var k=D.slides[g].data("swiperindex");d>k||k>e?D.wrapper.removeChild(D.slides[g]):(i=Math.min(k,i),j=Math.max(k,j))}for(g=d;e>=g;g++){var l;i>g&&(l=document.createElement(b.slideElement),l.className=b.slideClass,l.setAttribute("data-swiperindex",g),l.innerHTML=a[g],D.wrapper.insertBefore(l,D.wrapper.firstChild)),g>j&&(l=document.createElement(b.slideElement),l.className=b.slideClass,l.setAttribute("data-swiperindex",g),l.innerHTML=a[g],D.wrapper.appendChild(l))}}D.reInit(!0)}},B()}};Swiper.prototype={plugins:{},wrapperTransitionEnd:function(a,b){"use strict";function c(h){if(h.target===f&&(a(e),e.params.queueEndCallbacks&&(e._queueEndCallbacks=!1),!b))for(d=0;d<g.length;d++)e.h.removeEventListener(f,g[d],c)}var d,e=this,f=e.wrapper,g=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"];if(a)for(d=0;d<g.length;d++)e.h.addEventListener(f,g[d],c)},getWrapperTranslate:function(a){"use strict";var b,c,d,e,f=this.wrapper;return"undefined"==typeof a&&(a="horizontal"===this.params.mode?"x":"y"),this.support.transforms&&this.params.useCSS3Transforms?(d=window.getComputedStyle(f,null),window.WebKitCSSMatrix?e=new WebKitCSSMatrix("none"===d.webkitTransform?"":d.webkitTransform):(e=d.MozTransform||d.OTransform||d.MsTransform||d.msTransform||d.transform||d.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),b=e.toString().split(",")),"x"===a&&(c=window.WebKitCSSMatrix?e.m41:parseFloat(16===b.length?b[12]:b[4])),"y"===a&&(c=window.WebKitCSSMatrix?e.m42:parseFloat(16===b.length?b[13]:b[5]))):("x"===a&&(c=parseFloat(f.style.left,10)||0),"y"===a&&(c=parseFloat(f.style.top,10)||0)),c||0},setWrapperTranslate:function(a,b,c){"use strict";var d,e=this.wrapper.style,f={x:0,y:0,z:0};3===arguments.length?(f.x=a,f.y=b,f.z=c):("undefined"==typeof b&&(b="horizontal"===this.params.mode?"x":"y"),f[b]=a),this.support.transforms&&this.params.useCSS3Transforms?(d=this.support.transforms3d?"translate3d("+f.x+"px, "+f.y+"px, "+f.z+"px)":"translate("+f.x+"px, "+f.y+"px)",e.webkitTransform=e.MsTransform=e.msTransform=e.MozTransform=e.OTransform=e.transform=d):(e.left=f.x+"px",e.top=f.y+"px"),this.callPlugins("onSetWrapperTransform",f),this.params.onSetWrapperTransform&&this.fireCallback(this.params.onSetWrapperTransform,this,f)},setWrapperTransition:function(a){"use strict";var b=this.wrapper.style;b.webkitTransitionDuration=b.MsTransitionDuration=b.msTransitionDuration=b.MozTransitionDuration=b.OTransitionDuration=b.transitionDuration=a/1e3+"s",this.callPlugins("onSetWrapperTransition",{duration:a}),this.params.onSetWrapperTransition&&this.fireCallback(this.params.onSetWrapperTransition,this,a)},h:{getWidth:function(a,b,c){"use strict";var d=window.getComputedStyle(a,null).getPropertyValue("width"),e=parseFloat(d);return(isNaN(e)||d.indexOf("%")>0||0>e)&&(e=a.offsetWidth-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-left"))-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-right"))),b&&(e+=parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-left"))+parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-right"))),c?Math.ceil(e):e},getHeight:function(a,b,c){"use strict";if(b)return a.offsetHeight;var d=window.getComputedStyle(a,null).getPropertyValue("height"),e=parseFloat(d);return(isNaN(e)||d.indexOf("%")>0||0>e)&&(e=a.offsetHeight-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-top"))-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-bottom"))),b&&(e+=parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-top"))+parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-bottom"))),c?Math.ceil(e):e},getOffset:function(a){"use strict";var b=a.getBoundingClientRect(),c=document.body,d=a.clientTop||c.clientTop||0,e=a.clientLeft||c.clientLeft||0,f=window.pageYOffset||a.scrollTop,g=window.pageXOffset||a.scrollLeft;return document.documentElement&&!window.pageYOffset&&(f=document.documentElement.scrollTop,g=document.documentElement.scrollLeft),{top:b.top+f-d,left:b.left+g-e}},windowWidth:function(){"use strict";return window.innerWidth?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:void 0},windowHeight:function(){"use strict";return window.innerHeight?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:void 0},windowScroll:function(){"use strict";return"undefined"!=typeof pageYOffset?{left:window.pageXOffset,top:window.pageYOffset}:document.documentElement?{left:document.documentElement.scrollLeft,top:document.documentElement.scrollTop}:void 0},addEventListener:function(a,b,c,d){"use strict";"undefined"==typeof d&&(d=!1),a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},removeEventListener:function(a,b,c,d){"use strict";"undefined"==typeof d&&(d=!1),a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)}},setTransform:function(a,b){"use strict";var c=a.style;c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=b},setTranslate:function(a,b){"use strict";var c=a.style,d={x:b.x||0,y:b.y||0,z:b.z||0},e=this.support.transforms3d?"translate3d("+d.x+"px,"+d.y+"px,"+d.z+"px)":"translate("+d.x+"px,"+d.y+"px)";c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=e,this.support.transforms||(c.left=d.x+"px",c.top=d.y+"px")},setTransition:function(a,b){"use strict";var c=a.style;c.webkitTransitionDuration=c.MsTransitionDuration=c.msTransitionDuration=c.MozTransitionDuration=c.OTransitionDuration=c.transitionDuration=b+"ms"},support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){"use strict";return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){"use strict";var a=document.createElement("div").style;return"webkitPerspective"in a||"MozPerspective"in a||"OPerspective"in a||"MsPerspective"in a||"perspective"in a}(),transforms:window.Modernizr&&Modernizr.csstransforms===!0||function(){"use strict";var a=document.createElement("div").style;return"transform"in a||"WebkitTransform"in a||"MozTransform"in a||"msTransform"in a||"MsTransform"in a||"OTransform"in a}(),transitions:window.Modernizr&&Modernizr.csstransitions===!0||function(){"use strict";var a=document.createElement("div").style;return"transition"in a||"WebkitTransition"in a||"MozTransition"in a||"msTransition"in a||"MsTransition"in a||"OTransition"in a}(),classList:function(){"use strict";var a=document.createElement("div");return"classList"in a}()},browser:{ie8:function(){"use strict";var a=-1;if("Microsoft Internet Explorer"===navigator.appName){var b=navigator.userAgent,c=new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);null!==c.exec(b)&&(a=parseFloat(RegExp.$1))}return-1!==a&&9>a}(),ie10:window.navigator.msPointerEnabled,ie11:window.navigator.pointerEnabled}},(window.jQuery||window.Zepto)&&!function(a){"use strict";a.fn.swiper=function(b){var c;return this.each(function(d){var e=a(this),f=new Swiper(e[0],b);d||(c=f),e.data("swiper",f)}),c}}(window.jQuery||window.Zepto), true?module.exports=Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return Swiper});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* getParameter.js 参数信息 */
var getParameter = function () {
  var src = location.href
  // 解析参数并存储到 settings 变量中
  var arg = src.indexOf('?') !== -1 ? src.split('?').pop() : ''
  var settings = {}
  arg.replace(/(\w+)(?:=([^&]*))?/g, function (a, key, value) {
    settings[key] = value
  })
  return settings
}
module.exports = getParameter()


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var baseUrl = document.location.protocol + '//' + location.host + '/any800'
var ucc = {
  companyPk: 'ff808081612620ee016126a0c33f0003',
  codeKey: 1,
  langPk: '',
  type: '',
  baseUrl: baseUrl
}
if (location.hash.slice(1)) {
  var sp = location.hash.slice(1).split('/')
  if (sp[1]) {
    ucc.companyPk = sp[1]
  }
  if (sp[2]) {
    ucc.codeKey = sp[2]
  }
  if (sp[3]) {
    ucc.langPk = sp[3]
  }
}

module.exports = ucc


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6)
__webpack_require__(1)
__webpack_require__(2)
__webpack_require__(3)
__webpack_require__(5)
var ajax = __webpack_require__(4)

ajax.getPcAppearance().done(function(data){
  if(data.tabConfig){
    if(data.tabConfig.type=="swiper"){
      var swiper = new Swiper('.swiper-container',{
        autoplay : 3000,//可选选项，自动滑动
        loop : true,//可选选项，开启循环
      })
      for (var i = 0, len = data.tabConfig.list.length;i < len;i++){
        swiper.appendSlide('<img src="'+ data.tabConfig.list[i].link +'">','swiper-slide','div')
      }
    }else if(data.tabConfig.type=="web"){
      $(".swiper-container .swiper-wrapper").append('<img src="'+ data.tabConfig.link +'">')
    }
    
  }
})

/***/ })
/******/ ]);