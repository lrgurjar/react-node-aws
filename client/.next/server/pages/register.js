module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\myproject\\react-node-aws\\client\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeStart = url => nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeComplete = url => nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
next_router__WEBPACK_IMPORTED_MODULE_3___default.a.onRouteChangeError = url => nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
const Layout = ({
  children
}) => {
  const head = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/static/css/styles.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
  const nav = () => __jsx("ul", {
    className: "nav nav-tabs bg-warning",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link text-dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Home"))), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link text-dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Login"))), __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-link text-dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Register"))));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, head(), " ", nav(), " ", __jsx("div", {
    className: "container pt-5 pb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 24
    }
  }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/axios/dist/node/axios.cjs":
/*!************************************************!*\
  !*** ./node_modules/axios/dist/node/axios.cjs ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! Axios v1.20.0 Copyright (c) 2026 Matt Zabriskie and contributors */


var FormData$1 = __webpack_require__(/*! form-data */ "form-data");
var crypto = __webpack_require__(/*! crypto */ "crypto");
var url = __webpack_require__(/*! url */ "url");
var HttpsProxyAgent = __webpack_require__(/*! https-proxy-agent */ "./node_modules/axios/node_modules/https-proxy-agent/dist/index.js");
var http = __webpack_require__(/*! http */ "http");
var https = __webpack_require__(/*! https */ "https");
var http2 = __webpack_require__(/*! http2 */ "http2");
var util = __webpack_require__(/*! util */ "util");
var path = __webpack_require__(/*! path */ "path");
var followRedirects = __webpack_require__(/*! follow-redirects */ "follow-redirects");
var zlib = __webpack_require__(/*! zlib */ "zlib");
var stream = __webpack_require__(/*! stream */ "stream");
var events = __webpack_require__(/*! events */ "events");

/**
 * Create a bound version of a function with a specified `this` context
 *
 * @param {Function} fn - The function to bind
 * @param {*} thisArg - The value to be passed as the `this` parameter
 * @returns {Function} A new function that will call the original function with the specified `this` context
 */
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {
  toString
} = Object.prototype;
const {
  getPrototypeOf
} = Object;
const {
  iterator,
  toStringTag
} = Symbol;

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({
  hasOwnProperty
}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);
const isUnsafeObjectKey = prop => typeof prop === 'string' && (prop === '__proto__' || prop === 'constructor' || prop === 'prototype');

/**
 * Determine whether an inherited object must be treated as a shared-prototype
 * boundary. Cross-realm Object.prototype objects cannot be distinguished
 * reliably from application-created null-prototype objects because their
 * properties are mutable, so all inherited terminal prototypes are excluded
 * as a fail-closed boundary. A null-prototype source still keeps its own
 * properties, as produced by mergeConfig and other safe materialization paths.
 *
 * @param {*} obj The object to inspect
 * @param {*} prototype The object's prototype
 * @param {boolean} source Whether obj is the original traversal source
 *
 * @returns {boolean} True when obj is a safe prototype traversal boundary
 */
const isPrototypeBoundary = (obj, prototype, source) => obj === Object.prototype || !source && prototype === null;

/**
 * Determine whether an object can retain its identity through code paths that
 * add, replace, and remove config properties without bypassing unsafe-key
 * filtering. Immutable objects, unsafe-key-bearing objects, and objects with
 * accessor or restricted data properties must be materialized instead.
 *
 * @param {*} obj The object to inspect
 *
 * @returns {boolean} True when every own property is safe and fully mutable
 */
const isSafeAndFullyMutable = obj => {
  if (!Object.isExtensible(obj)) {
    return false;
  }
  const props = Object.getOwnPropertyNames(obj);
  if (Object.getOwnPropertySymbols) {
    props.push(...Object.getOwnPropertySymbols(obj));
  }
  return props.every(prop => {
    if (isUnsafeObjectKey(prop)) {
      return false;
    }
    const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
    return !!descriptor && descriptor.configurable && descriptor.writable === true;
  });
};

/**
 * Walk the prototype chain (excluding the source realm's Object.prototype)
 * looking for an own `prop`. This distinguishes genuine own/inherited members
 * — including class accessors and template prototypes — from members injected
 * via Object.prototype pollution (e.g. `Object.prototype.username = '...'`),
 * which live on Object.prototype itself and are therefore never matched.
 *
 * @param {*} thing The value whose chain to inspect
 * @param {string|symbol} prop The property key to look for
 *
 * @returns {boolean} True when `prop` is owned below Object.prototype
 */
const hasOwnInPrototypeChain = (thing, prop) => {
  let obj = thing;
  const seen = [];
  while (obj != null) {
    if (seen.indexOf(obj) !== -1) {
      return false;
    }
    seen.push(obj);
    const prototype = getPrototypeOf(obj);
    if (isPrototypeBoundary(obj, prototype, obj === thing)) {
      return false;
    }
    if (hasOwnProperty(obj, prop)) {
      return true;
    }
    obj = prototype;
  }
  return false;
};

/**
 * Read `obj[prop]` only when it is safe from Object.prototype pollution. Own
 * properties and members inherited from a non-Object.prototype source (a class
 * instance or template object) are honored; a value reachable only through a
 * polluted Object.prototype is ignored and `undefined` is returned.
 *
 * @param {*} obj The source object
 * @param {string|symbol} prop The property key to read
 *
 * @returns {*} The resolved value, or undefined when unsafe/absent
 */
const getSafeProp = (obj, prop) => obj != null && hasOwnInPrototypeChain(obj, prop) ? obj[prop] : undefined;

/**
 * Flatten an object and its application-defined prototype chain into a
 * null-prototype object. Members inherited only from the source realm's
 * Object.prototype are deliberately excluded, while class/template members
 * below that boundary are preserved.
 *
 * @param {*} thing The value to flatten
 *
 * @returns {*} A null-prototype copy, or the original value when it is already
 * structurally safe or is not an object
 */
const toSafeFlatObject = thing => {
  if (thing == null || typeof thing !== 'object' && typeof thing !== 'function') {
    return thing;
  }
  const sourcePrototype = getPrototypeOf(thing);
  if (sourcePrototype === null && isSafeAndFullyMutable(thing)) {
    return thing;
  }
  const result = Object.create(null);
  const merged = Object.create(null);
  const seen = [];
  let current = thing;
  while (current != null) {
    if (seen.indexOf(current) !== -1) {
      break;
    }
    seen.push(current);
    const prototype = current === thing ? sourcePrototype : getPrototypeOf(current);
    if (isPrototypeBoundary(current, prototype, current === thing)) {
      break;
    }
    const props = Object.getOwnPropertyNames(current);
    if (Object.getOwnPropertySymbols) {
      props.push(...Object.getOwnPropertySymbols(current));
    }
    for (const prop of props) {
      if (isUnsafeObjectKey(prop)) {
        continue;
      }
      if (!hasOwnProperty(merged, prop)) {
        result[prop] = thing[prop];
        merged[prop] = true;
      }
    }
    current = prototype;
  }
  return result;
};
const kindOf = (cache => thing => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));
const kindOfTest = type => {
  type = type.toLowerCase();
  return thing => kindOf(thing) === type;
};
const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is a non-null object
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {
  isArray
} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction$1 = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = thing => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = val => {
  if (!isObject(val)) {
    return false;
  }
  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || getPrototypeOf(prototype) === null) &&
  // Treat safe own/inherited Symbol.toStringTag or Symbol.iterator members as
  // evidence the value is tagged/iterable, while ignoring members reachable
  // only through shared or terminal prototype boundaries.
  !hasOwnInPrototypeChain(val, toStringTag) && !hasOwnInPrototypeChain(val, iterator);
};

/**
 * Determine if a value is an empty object (safely handles Buffers)
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an empty object, otherwise false
 */
const isEmptyObject = val => {
  // Early return for non-objects or Buffers to prevent RangeError
  if (!isObject(val) || isBuffer(val)) {
    return false;
  }
  try {
    return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
  } catch (e) {
    // Fallback for any other objects that might cause RangeError with Object.keys()
    return false;
  }
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a React Native Blob
 * React Native "blob": an object with a `uri` attribute. Optionally, it can
 * also have a `name` and `type` attribute to specify filename and content type
 *
 * @see https://github.com/facebook/react-native/blob/26684cf3adf4094eb6c405d345a75bf8c7c0bf88/Libraries/Network/FormData.js#L68-L71
 *
 * @param {*} value The value to test
 *
 * @returns {boolean} True if value is a React Native Blob, otherwise false
 */
const isReactNativeBlob = value => {
  return !!(value && typeof value.uri !== 'undefined');
};

/**
 * Determine if environment is React Native
 * ReactNative `FormData` has a non-standard `getParts()` method
 *
 * @param {*} formData The formData to test
 *
 * @returns {boolean} True if environment is React Native, otherwise false
 */
const isReactNative = formData => formData && typeof formData.getParts !== 'undefined';

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a FileList, otherwise false
 */
const isFileList = kindOfTest('FileList');
const isSet = kindOfTest('Set');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = val => isObject(val) && isFunction$1(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function getGlobal() {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  return {};
}
const G = getGlobal();
const FormDataCtor = typeof G.FormData !== 'undefined' ? G.FormData : undefined;
const isFormData = thing => {
  if (!thing) return false;
  if (FormDataCtor && thing instanceof FormDataCtor) return true;
  // Reject plain objects inheriting directly from Object.prototype so prototype-pollution gadgets can't spoof FormData.
  const proto = getPrototypeOf(thing);
  if (!proto || proto === Object.prototype) return false;
  if (!isFunction$1(thing.append)) return false;
  const kind = kindOf(thing);
  return kind === 'formdata' ||
  // detect form-data instance
  kind === 'object' && isFunction$1(thing.toString) && thing.toString() === '[object FormData]';
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');
const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = str => {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array<unknown>} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {
  allOwnKeys = false
} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }
  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Buffer check
    if (isBuffer(obj)) {
      return;
    }

    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

/**
 * Finds a key in an object, case-insensitive, returning the actual key name.
 * Returns null if the object is a Buffer or if no match is found.
 *
 * @param {Object} obj - The object to search.
 * @param {string} key - The key to find (case-insensitive).
 * @returns {?string} The actual key name if found, otherwise null.
 */
function findKey(obj, key) {
  if (isBuffer(obj)) {
    return null;
  }
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== 'undefined') return globalThis;
  return typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : global;
})();
const isContextDefined = context => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * const result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(...objs) {
  const {
    caseless,
    skipUndefined
  } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    // Skip dangerous property names to prevent prototype pollution
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return;
    }

    // findKey lowercases the key, so caseless lookup only applies to strings —
    // symbol keys are identity-matched.
    const targetKey = caseless && typeof key === 'string' && findKey(result, key) || key;
    // Read via own-prop only — a bare `result[targetKey]` walks the prototype
    // chain, so a polluted Object.prototype value could surface here and get
    // copied into the merged result.
    const existing = hasOwnProperty(result, targetKey) ? result[targetKey] : undefined;
    if (isPlainObject(existing) && isPlainObject(val)) {
      result[targetKey] = merge(existing, val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else if (!skipUndefined || !isUndefined(val)) {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = objs.length; i < l; i++) {
    const source = objs[i];
    if (!source || isBuffer(source)) {
      continue;
    }
    forEach(source, assignValue);
    if (typeof source !== 'object' || isArray(source)) {
      continue;
    }
    const symbols = Object.getOwnPropertySymbols(source);
    for (let j = 0; j < symbols.length; j++) {
      const symbol = symbols[j];
      if (propertyIsEnumerable.call(source, symbol)) {
        assignValue(source[symbol], symbol);
      }
    }
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Object} [options]
 * @param {Boolean} [options.allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {
  allOwnKeys
} = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction$1(val)) {
      Object.defineProperty(a, key, {
        // Null-proto descriptor so a polluted Object.prototype.get cannot
        // hijack defineProperty's accessor-vs-data resolution.
        __proto__: null,
        value: bind(val, thisArg),
        writable: true,
        enumerable: true,
        configurable: true
      });
    } else {
      Object.defineProperty(a, key, {
        __proto__: null,
        value: val,
        writable: true,
        enumerable: true,
        configurable: true
      });
    }
  }, {
    allOwnKeys
  });
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = content => {
  if (content.charCodeAt(0) === 0xfeff) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  Object.defineProperty(constructor.prototype, 'constructor', {
    __proto__: null,
    value: constructor,
    writable: true,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(constructor, 'super', {
    __proto__: null,
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};

/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = thing => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator];
  const _iterator = generator.call(obj);
  let result;
  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');
const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};
const {
  propertyIsEnumerable
} = Object.prototype;

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');
const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = obj => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction$1(obj) && ['arguments', 'caller', 'callee'].includes(name)) {
      return false;
    }
    const value = obj[name];
    if (!isFunction$1(value)) return;
    descriptor.enumerable = false;
    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};

/**
 * Converts an array or a delimited string into an object set with values as keys and true as values.
 * Useful for fast membership checks.
 *
 * @param {Array|string} arrayOrString - The array or string to convert.
 * @param {string} delimiter - The delimiter to use if input is a string.
 * @returns {Object} An object with keys from the array or string, values set to true.
 */
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = arr => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop = () => {};
const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === 'FormData' && thing[iterator]);
}

/**
 * Recursively converts an object to a JSON-compatible object, handling circular references and Buffers.
 *
 * @param {Object} obj - The object to convert.
 * @returns {Object} The JSON-compatible object.
 */
const toJSONObject = obj => {
  const visited = new WeakSet();
  const visit = source => {
    if (isObject(source)) {
      if (visited.has(source)) {
        return;
      }

      //Buffer check
      if (isBuffer(source)) {
        return source;
      }
      if (!('toJSON' in source)) {
        // add-on descent / delete-on-ascent: preserves path semantics, so DAG nodes serialise at every occurrence (see #7230).
        visited.add(source);
        let target;
        if (isSet(source)) {
          target = [];
          for (const value of source) {
            const reducedValue = visit(value);
            !isUndefined(reducedValue) && target.push(reducedValue);
          }
        } else {
          target = isArray(source) ? [] : {};
          forEach(source, (value, key) => {
            const reducedValue = visit(value);
            !isUndefined(reducedValue) && (target[key] = reducedValue);
          });
        }
        visited.delete(source);
        return target;
      }
    }
    return source;
  };
  return visit(obj);
};

/**
 * Determines if a value is an async function.
 *
 * @param {*} thing - The value to test.
 * @returns {boolean} True if value is an async function, otherwise false.
 */
const isAsyncFn = kindOfTest('AsyncFunction');

/**
 * Determines if a value is thenable (has then and catch methods).
 *
 * @param {*} thing - The value to test.
 * @returns {boolean} True if value is thenable, otherwise false.
 */
const isThenable = thing => thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

/**
 * Provides a cross-platform setImmediate implementation.
 * Uses native setImmediate if available, otherwise falls back to postMessage or setTimeout.
 *
 * @param {boolean} setImmediateSupported - Whether setImmediate is supported.
 * @param {boolean} postMessageSupported - Whether postMessage is supported.
 * @returns {Function} A function to schedule a callback asynchronously.
 */
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener('message', ({
      source,
      data
    }) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);
    return cb => {
      callbacks.push(cb);
      _global.postMessage(token, '*');
    };
  })(`axios@${Math.random()}`, []) : cb => setTimeout(cb);
})(typeof setImmediate === 'function', isFunction$1(_global.postMessage));

/**
 * Schedules a microtask or asynchronous callback as soon as possible.
 * Uses queueMicrotask if available, otherwise falls back to process.nextTick or _setImmediate.
 *
 * @type {Function}
 */
const asap = typeof queueMicrotask !== 'undefined' ? queueMicrotask.bind(_global) : typeof process !== 'undefined' && process.nextTick || _setImmediate;

// *********************

const isIterable = thing => thing != null && isFunction$1(thing[iterator]);

/**
 * Determine if a value is iterable via an iterator that is NOT sourced solely
 * from a polluted Object.prototype. Use this instead of `isIterable` whenever
 * the iterable comes from untrusted input (e.g. user-supplied header sources),
 * so `Object.prototype[Symbol.iterator] = ...` cannot turn an ordinary object
 * into an attacker-controlled entries iterator.
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value has a non-polluted iterator
 */
const isSafeIterable = thing => thing != null && hasOwnInPrototypeChain(thing, iterator) && isIterable(thing);
var utils$1 = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isEmptyObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isReactNativeBlob,
  isReactNative,
  isBlob,
  isRegExp,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain,
  getSafeProp,
  toSafeFlatObject,
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable,
  isSafeIterable
};

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils$1.toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    const hasKey = utils$1.hasOwnProp(parsed, key);
    if (!key || hasKey && utils$1.hasOwnProp(ignoreDuplicateOf, key)) {
      return;
    }
    if (key === 'set-cookie') {
      if (hasKey) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = hasKey ? parsed[key] + ', ' + val : val;
    }
  });
  return parsed;
};

function trimSPorHTAB(str) {
  let start = 0;
  let end = str.length;
  while (start < end) {
    const code = str.charCodeAt(start);
    if (code !== 0x09 && code !== 0x20) {
      break;
    }
    start += 1;
  }
  while (end > start) {
    const code = str.charCodeAt(end - 1);
    if (code !== 0x09 && code !== 0x20) {
      break;
    }
    end -= 1;
  }
  return start === 0 && end === str.length ? str : str.slice(start, end);
}

// The control-code ranges are intentional: header sanitization strips C0/DEL bytes.
// eslint-disable-next-line no-control-regex
const INVALID_UNICODE_HEADER_VALUE_CHARS = new RegExp('[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+', 'g');
// eslint-disable-next-line no-control-regex
const INVALID_BYTE_STRING_HEADER_VALUE_CHARS = new RegExp('[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+', 'g');
function sanitizeValue(value, invalidChars) {
  if (utils$1.isArray(value)) {
    return value.map(item => sanitizeValue(item, invalidChars));
  }
  return trimSPorHTAB(String(value).replace(invalidChars, ''));
}
const sanitizeHeaderValue = value => sanitizeValue(value, INVALID_UNICODE_HEADER_VALUE_CHARS);
const sanitizeByteStringHeaderValue = value => sanitizeValue(value, INVALID_BYTE_STRING_HEADER_VALUE_CHARS);
function toByteStringHeaderObject(headers) {
  const byteStringHeaders = Object.create(null);
  utils$1.forEach(headers.toJSON(), (value, header) => {
    byteStringHeaders[header] = sanitizeByteStringHeaderValue(value);
  });
  return byteStringHeaders;
}

const $internals$1 = Symbol('internals');
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$1.isArray(value) ? value.map(normalizeValue) : sanitizeHeaderValue(String(value));
}
function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const parameterNameRE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function trimOWS(value) {
  let start = 0;
  let end = value.length;
  while (start < end) {
    const code = value.charCodeAt(start);
    if (code !== 0x09 && code !== 0x20) {
      break;
    }
    start += 1;
  }
  while (end > start) {
    const code = value.charCodeAt(end - 1);
    if (code !== 0x09 && code !== 0x20) {
      break;
    }
    end -= 1;
  }
  return start === 0 && end === value.length ? value : value.slice(start, end);
}
function decodeQuotedString(value) {
  const last = value.length - 1;
  if (last < 1 || value.charCodeAt(0) !== 0x22 || value.charCodeAt(last) !== 0x22) {
    return value;
  }
  let decoded = '';
  for (let i = 1; i < last; i++) {
    const code = value.charCodeAt(i);
    if (code === 0x22) {
      return value;
    }
    if (code === 0x5c) {
      i += 1;
      if (i >= last) {
        return value;
      }
    }
    decoded += value[i];
  }
  return decoded;
}
function parseParameters(value) {
  const parameters = Object.create(null);
  const str = String(value);
  let start = 0;
  let quoted = false;
  let escaped = false;
  function parseParameter(end) {
    const part = trimOWS(str.slice(start, end));
    const equals = part.indexOf('=');
    if (equals < 1) {
      return;
    }
    const name = trimOWS(part.slice(0, equals));
    if (!parameterNameRE.test(name)) {
      return;
    }
    const normalizedName = name.toLowerCase();
    if (normalizedName === '__proto__' || normalizedName === 'constructor' || normalizedName === 'prototype') {
      return;
    }
    const parameterValue = trimOWS(part.slice(equals + 1));
    parameters[normalizedName] = decodeQuotedString(parameterValue);
  }
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (quoted) {
      if (escaped) {
        escaped = false;
      } else if (code === 0x5c) {
        escaped = true;
      } else if (code === 0x22) {
        quoted = false;
      }
    } else if (code === 0x22) {
      quoted = true;
    } else if (code === 0x2c || code === 0x3b) {
      parseParameter(i);
      start = i + 1;
    }
  }
  parseParameter(str.length);
  return parameters;
}
const isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils$1.isFunction(filter)) {
    return filter.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$1.isString(value)) return;
  if (utils$1.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }
  if (utils$1.isRegExp(filter)) {
    return filter.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils$1.toCamelCase(' ' + header);
  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function (arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        return;
      }
      const key = utils$1.findKey(self, lHeader);
      if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {
        self[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils$1.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$1.isObject(header) && utils$1.isSafeIterable(header)) {
      let obj = Object.create(null),
        dest,
        key;
      for (const entry of header) {
        if (!utils$1.isArray(entry)) {
          throw new TypeError('Object iterator must return a key-value pair');
        }
        key = entry[0];
        if (utils$1.hasOwnProp(obj, key)) {
          dest = obj[key];
          obj[key] = utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]];
        } else {
          obj[key] = entry[1];
        }
      }
      setHeaders(obj, valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils$1.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils$1.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$1.findKey(this, header);
      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils$1.findKey(self, _header);
        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];
          deleted = true;
        }
      }
    }
    if (utils$1.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self = this;
    const headers = {};
    utils$1.forEach(this, (value, header) => {
      const key = utils$1.findKey(headers, header);
      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self[header];
      }
      self[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = Object.create(null);
    utils$1.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(', ') : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }
  getSetCookie() {
    const value = this.get('set-cookie');
    return utils$1.isArray(value) ? value : value == null || value === false ? [] : [value];
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static parseParameters(value) {
    return parseParameters(value);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach(target => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals$1] = this[$internals$1] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }
    utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
}
AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils$1.reduceDescriptors(AxiosHeaders.prototype, ({
  value
}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils$1.freezeMethods(AxiosHeaders);

const REDACTED = '[REDACTED ****]';
function hasOwnOrPrototypeToJSON(source) {
  if (utils$1.hasOwnProp(source, 'toJSON')) {
    return true;
  }
  let prototype = Object.getPrototypeOf(source);
  while (prototype && prototype !== Object.prototype) {
    if (utils$1.hasOwnProp(prototype, 'toJSON')) {
      return true;
    }
    prototype = Object.getPrototypeOf(prototype);
  }
  return false;
}

// Build a plain-object snapshot of `config` and replace the value of any key
// (case-insensitive) listed in `redactKeys` with REDACTED. Walks through arrays
// and AxiosHeaders, and short-circuits on circular references.
function redactConfig(config, redactKeys) {
  const lowerKeys = new Set(redactKeys.map(k => String(k).toLowerCase()));
  const seen = [];
  const visit = source => {
    if (source === null || typeof source !== 'object') return source;
    if (utils$1.isBuffer(source)) return source;
    if (seen.indexOf(source) !== -1) return undefined;
    if (source instanceof AxiosHeaders) {
      source = source.toJSON();
    }
    seen.push(source);
    let result;
    if (utils$1.isArray(source)) {
      result = [];
      source.forEach((v, i) => {
        const reducedValue = visit(v);
        if (!utils$1.isUndefined(reducedValue)) {
          result[i] = reducedValue;
        }
      });
    } else {
      if (!utils$1.isPlainObject(source) && hasOwnOrPrototypeToJSON(source)) {
        seen.pop();
        return source;
      }
      result = Object.create(null);
      for (const [key, value] of Object.entries(source)) {
        const reducedValue = lowerKeys.has(key.toLowerCase()) ? REDACTED : visit(value);
        if (!utils$1.isUndefined(reducedValue)) {
          result[key] = reducedValue;
        }
      }
    }
    seen.pop();
    return result;
  };
  return visit(config);
}
function stringifySafely$1(value) {
  try {
    return String(value);
  } catch (err) {
    return '';
  }
}
function aggregateErrorMessage(error) {
  const message = error.errors.map(entry => {
    try {
      return entry && entry.message ? stringifySafely$1(entry.message) : stringifySafely$1(entry);
    } catch (err) {
      return '';
    }
  }).filter(Boolean).join('; ');
  return message || error.name || 'AggregateError';
}
class AxiosError extends Error {
  static from(error, code, config, request, response, customProps) {
    // `AggregateError` (thrown by Node on dual-stack/Happy-Eyeballs connection
    // failures) has an empty `message`; its detail lives in `errors[]`. Without
    // this, the wrapped error surfaces with a blank message (see #6721).
    let message = error.message;
    if (!message && utils$1.isArray(error.errors) && error.errors.length) {
      message = aggregateErrorMessage(error);
    }
    const axiosError = new AxiosError(message, code || error.code, config, request, response);
    // Match native `Error` `cause` semantics: non-enumerable. The wrapped
    // error often carries circular internals (sockets, requests, agents), so
    // an enumerable `cause` makes structured loggers (pino/winston) and any
    // own-property walk throw "Converting circular structure to JSON".
    // Regression from #6982; see #7205. `__proto__: null` mirrors the
    // `message` descriptor below (prototype-pollution-safe descriptor).
    Object.defineProperty(axiosError, 'cause', {
      __proto__: null,
      value: error,
      writable: true,
      enumerable: false,
      configurable: true
    });
    axiosError.name = error.name;

    // Preserve status from the original error if not already set from response
    if (error.status != null && axiosError.status == null) {
      axiosError.status = error.status;
    }
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  }

  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(message, code, config, request, response) {
    super(message);

    // Make message enumerable to maintain backward compatibility
    // The native Error constructor sets message as non-enumerable,
    // but axios < v1.13.3 had it as enumerable
    Object.defineProperty(this, 'message', {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: message,
      enumerable: true,
      writable: true,
      configurable: true
    });
    this.name = 'AxiosError';
    this.isAxiosError = true;
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    if (response) {
      this.response = response;
      this.status = response.status;
    }
  }
  toJSON() {
    // Opt-in redaction: when the request config carries a `redact` array, the
    // value of any matching key (case-insensitive, at any depth) is replaced
    // with REDACTED in the serialized snapshot. Undefined or empty leaves the
    // existing serialization behavior unchanged.
    const config = this.config;
    const redactKeys = config && utils$1.hasOwnProp(config, 'redact') ? config.redact : undefined;
    const serializedConfig = utils$1.isArray(redactKeys) && redactKeys.length > 0 ? redactConfig(config, redactKeys) : utils$1.toJSONObject(config);
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: serializedConfig,
      code: this.code,
      status: this.status
    };
  }
}

// This can be changed to static properties as soon as the parser options in .eslint.cjs are updated.
AxiosError.ERR_BAD_OPTION_VALUE = 'ERR_BAD_OPTION_VALUE';
AxiosError.ERR_BAD_OPTION = 'ERR_BAD_OPTION';
AxiosError.ECONNABORTED = 'ECONNABORTED';
AxiosError.ETIMEDOUT = 'ETIMEDOUT';
AxiosError.ECONNREFUSED = 'ECONNREFUSED';
AxiosError.ERR_NETWORK = 'ERR_NETWORK';
AxiosError.ERR_FR_TOO_MANY_REDIRECTS = 'ERR_FR_TOO_MANY_REDIRECTS';
AxiosError.ERR_DEPRECATED = 'ERR_DEPRECATED';
AxiosError.ERR_BAD_RESPONSE = 'ERR_BAD_RESPONSE';
AxiosError.ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
AxiosError.ERR_CANCELED = 'ERR_CANCELED';
AxiosError.ERR_NOT_SUPPORT = 'ERR_NOT_SUPPORT';
AxiosError.ERR_INVALID_URL = 'ERR_INVALID_URL';
AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED = 'ERR_FORM_DATA_DEPTH_EXCEEDED';

var PlatformBuffer = {
  isBufferAvailable() {
    return typeof Buffer !== 'undefined';
  },
  from(value) {
    return Buffer.from(value);
  }
};

// Default nesting limit shared with the inverse transform (formDataToJSON) so
// the FormData <-> JSON round-trip stays symmetric.
const DEFAULT_FORM_DATA_MAX_DEPTH = 100;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils$1.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils$1.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils$1.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData$1 || FormData)();
  const option = (name, fallback) => {
    const value = utils$1.getSafeProp(options, name);
    return utils$1.isUndefined(value) ? fallback : value;
  };
  const metaTokens = option('metaTokens', true);
  // eslint-disable-next-line no-use-before-define
  const visitor = option('visitor') || defaultVisitor;
  const dots = option('dots', false);
  const indexes = option('indexes', false);
  const _Blob = option('Blob') || typeof Blob !== 'undefined' && Blob;
  const maxDepth = option('maxDepth', DEFAULT_FORM_DATA_MAX_DEPTH);
  const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
  const stack = [];
  if (!utils$1.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }
  function convertValue(value) {
    if (value === null) return '';
    if (utils$1.isDate(value)) {
      return value.toISOString();
    }
    if (utils$1.isBoolean(value)) {
      return value.toString();
    }
    if (!useBlob && utils$1.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }
    if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) {
      if (useBlob && typeof _Blob === 'function') {
        return new _Blob([value]);
      }
      if (PlatformBuffer && PlatformBuffer.isBufferAvailable()) {
        return PlatformBuffer.from(value);
      }
      throw new AxiosError('Blob is not supported. Use a Buffer instead.', AxiosError.ERR_NOT_SUPPORT);
    }
    return value;
  }
  function throwIfMaxDepthExceeded(depth) {
    if (depth > maxDepth) {
      throw new AxiosError('Object is too deeply nested (' + depth + ' levels). Max depth: ' + maxDepth, AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED);
    }
  }
  function stringifyWithDepthLimit(value, depth) {
    if (maxDepth === Infinity) {
      return JSON.stringify(value);
    }
    const ancestors = [];
    return JSON.stringify(value, function limitDepth(_key, currentValue) {
      if (!utils$1.isObject(currentValue)) {
        return currentValue;
      }
      while (ancestors.length && ancestors[ancestors.length - 1] !== this) {
        ancestors.pop();
      }
      ancestors.push(currentValue);
      throwIfMaxDepthExceeded(depth + ancestors.length - 1);
      return currentValue;
    });
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (utils$1.isReactNative(formData) && utils$1.isReactNativeBlob(value)) {
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    if (value && !path && typeof value === 'object') {
      if (utils$1.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = stringifyWithDepthLimit(value, 1);
      } else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, '[]')) && (arr = utils$1.toArray(value))) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils$1.isUndefined(el) || el === null) && formData.append(
          // eslint-disable-next-line no-nested-ternary
          indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + '[]', convertValue(el));
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path, depth = 0) {
    if (utils$1.isUndefined(value)) return;
    throwIfMaxDepthExceeded(depth);
    if (stack.indexOf(value) !== -1) {
      throw new Error('Circular reference detected in ' + path.join('.'));
    }
    stack.push(value);
    utils$1.forEach(value, function each(el, key) {
      const result = !(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key], depth + 1);
      }
    });
    stack.pop();
  }
  if (!utils$1.isObject(obj)) {
    throw new TypeError('data must be an object');
  }
  build(obj);
  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
  const _encode = encoder ? value => encoder.call(this, value, encode$1) : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces URL-encoded forms of `:`, `$`, `,`, and spaces with
 * their plain counterparts (`:`, `$`, `,`, `+`).
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  url = url || '';
  const _options = utils$1.isFunction(options) ? {
    serialize: options
  } : options;

  // Read serializer options pollution-safely: own properties and methods on a
  // class/template prototype are honored, but values injected onto a polluted
  // Object.prototype are ignored.
  const _encode = utils$1.getSafeProp(_options, 'encode') || encode;
  const serializeFn = utils$1.getSafeProp(_options, 'serialize');
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, _options);
  } else {
    serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, _options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }
  return url;
}

const $internals = Symbol('internals');

// `handlers` is public and may be replaced with a nullish value by user code;
// `clear()` has always tolerated that. Treat it as an empty stack rather than
// dereferencing it.
function countHandlers(handlers) {
  return handlers ? handlers.length : 0;
}
function trimHandlers(handlers) {
  if (!handlers) {
    return;
  }
  while (handlers.length && handlers[handlers.length - 1] === null) {
    handlers.pop();
  }
}
function syncHandlerEntries(manager, internals) {
  const handlers = manager.handlers;
  const length = countHandlers(handlers);
  if (handlers !== internals.handlersRef) {
    internals.handlersRef = handlers;
    internals.handlerEntries.clear();
  } else if (length !== internals.handlersLength) {
    if (!length) {
      internals.handlerEntries.clear();
    } else {
      internals.handlerEntries.forEach(function removeStaleEntry(entry, id) {
        if (handlers[entry.index] !== entry.handler) {
          internals.handlerEntries.delete(id);
        }
      });
    }
  }
  internals.handlersLength = length;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
    this[$internals] = {
      handlersRef: this.handlers,
      handlersLength: this.handlers.length,
      handlerEntries: new Map(),
      iterationDepth: 0,
      nextId: 0
    };
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    const handler = {
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    };
    const internals = this[$internals];
    if (this.handlers == null) {
      this.handlers = [];
    }
    syncHandlerEntries(this, internals);
    const id = internals.nextId++;
    this.handlers.push(handler);
    internals.handlerEntries.set(id, {
      handler,
      index: this.handlers.length - 1
    });
    internals.handlersLength = this.handlers.length;
    return id;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(id) {
    const internals = this[$internals];
    syncHandlerEntries(this, internals);
    const entry = internals.handlerEntries.get(id);
    if (entry) {
      internals.handlerEntries.delete(id);

      // Ignore IDs invalidated by clear or direct replacement of handlers.
      if (this.handlers[entry.index] !== entry.handler) {
        return;
      }
      this.handlers[entry.index] = null;

      // Do not reuse an index while forEach is walking its length snapshot.
      if (!internals.iterationDepth) {
        trimHandlers(this.handlers);
        internals.handlersLength = this.handlers.length;
      }
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
      syncHandlerEntries(this, this[$internals]);
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    const internals = this[$internals];
    syncHandlerEntries(this, internals);
    internals.iterationDepth++;
    try {
      utils$1.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    } finally {
      if (! --internals.iterationDepth) {
        syncHandlerEntries(this, internals);
        trimHandlers(this.handlers);
        internals.handlersLength = countHandlers(this.handlers);
      }
    }
  }
}

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false,
  legacyInterceptorReqResOrdering: true,
  advertiseZstdAcceptEncoding: false,
  validateStatusUndefinedResolves: true
};

var URLSearchParams = url.URLSearchParams;

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const DIGIT = '0123456789';
const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {
    length
  } = alphabet;
  const randomValues = new Uint32Array(size);
  crypto.randomFillSync(randomValues);
  for (let i = 0; i < size; i++) {
    str += alphabet[randomValues[i] % length];
  }
  return str;
};
var platform$1 = {
  isNode: true,
  classes: {
    URLSearchParams,
    FormData: FormData$1,
    Blob: typeof Blob !== 'undefined' && Blob || null
  },
  ALPHABET,
  generateString,
  protocols: ['http', 'https', 'file', 'data']
};

const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';
const _navigator = typeof navigator === 'object' && navigator || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== 'undefined' &&
  // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';
})();
const origin = hasBrowserEnv && window.location.href || 'http://localhost';

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  hasBrowserEnv: hasBrowserEnv,
  hasStandardBrowserEnv: hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv: hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin: origin
});

var platform = {
  ...utils,
  ...platform$1
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), {
    visitor: function (value, key, path, helpers) {
      if (platform.isNode && utils$1.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    },
    ...options
  });
}

const MAX_DEPTH = DEFAULT_FORM_DATA_MAX_DEPTH;
function throwIfDepthExceeded(index) {
  if (index > MAX_DEPTH) {
    throw new AxiosError('FormData field is too deeply nested (' + index + ' levels). Max depth: ' + MAX_DEPTH, AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED);
  }
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z] -> ['foo', 'x', 'y', 'z']
  // foo.x.y.z    -> ['foo', 'x', 'y', 'z']
  // A path is split on `.` and on `[...]` groups. A segment — whether written
  // in dot notation or captured inside brackets — may contain any character
  // except `.`, `[` and `]`, so a key like `user-name` or `user name` is kept
  // literal instead of being split (#5402). `.`, `[` and `]` keep their existing
  // meaning, e.g. `foo[bar.baz]` -> ['foo', 'bar', 'baz'] and `[]` is an array push.
  // Excluding `[` from the bracket group also makes the match fail fast at the
  // next `[`, so a malformed name cannot rescan to the end of the string from
  // every unmatched `[` — parsing stays linear in the length of the name.
  const path = [];
  const pattern = /[^.[\]]+|\[([^.[\]]*)]/g;
  let match;
  while ((match = pattern.exec(name)) !== null) {
    throwIfDepthExceeded(path.length);
    path.push(match[0] === '[]' ? '' : match[1] || match[0]);
  }
  return path;
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    throwIfDepthExceeded(index);
    let name = path[index++];
    if (name === '__proto__') return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$1.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils$1.hasOwnProp(target, name)) {
        target[name] = utils$1.isArray(target[name]) ? target[name].concat(value) : [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!utils$1.hasOwnProp(target, name) || !utils$1.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils$1.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
    const obj = {};
    utils$1.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}

const methodList = Object.freeze(['get', 'delete', 'head', 'options', 'post', 'put', 'patch', 'purge', 'link', 'unlink', 'query']);

const own = (obj, key) => obj != null && utils$1.hasOwnProp(obj, key) ? obj[key] : undefined;

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils$1.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$1.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils$1.isObject(data);
    if (isObjectPayload && utils$1.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData = utils$1.isFormData(data);
    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }
    if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (utils$1.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$1.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }
    let isFileList;
    if (isObjectPayload) {
      const formSerializer = own(this, 'formSerializer');
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, formSerializer).toString();
      }
      if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const env = own(this, 'env');
        const _FormData = env && env.FormData;
        return toFormData(isFileList ? {
          'files[]': data
        } : data, _FormData && new _FormData(), formSerializer);
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional = own(this, 'transitional') || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const responseType = own(this, 'responseType');
    const JSONRequested = responseType === 'json';
    if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) {
      return data;
    }
    if (data && utils$1.isString(data) && (forcedJSONParsing && !responseType || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data, own(this, 'parseReviver'));
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, own(this, 'response'));
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};
utils$1.forEach(methodList, method => {
  defaults.headers[method] = {};
});

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults;
  const context = response || config;
  const headers = AxiosHeaders.from(context.headers);
  let data = context.data;
  utils$1.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });
  headers.normalize();
  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

class CanceledError extends AxiosError {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(message, config, request) {
    super(message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
    this.name = 'CanceledError';
    this.__CANCEL__ = true;
  }
}

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError('Request failed with status code ' + response.status, response.status >= 400 && response.status < 500 ? AxiosError.ERR_BAD_REQUEST : AxiosError.ERR_BAD_RESPONSE, response.config, response.request, response));
  }
}

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  if (typeof url !== 'string') {
    return false;
  }
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  if (!relativeURL) {
    return baseURL;
  }
  let end = baseURL.length;
  while (end > 0 && baseURL.charCodeAt(end - 1) === 47) {
    end--;
  }
  return baseURL.slice(0, end) + '/' + relativeURL.replace(/^\/+/, '');
}

const urlParserControlCharacters = /[\t\n\r]/g;

/**
 * Match WHATWG URL preprocessing before checking a URL's protocol.
 *
 * @param {string} url
 *
 * @returns {string}
 */
function normalizeURLForProtocolCheck(url) {
  if (typeof url !== 'string') {
    return url;
  }
  let start = 0;
  while (start < url.length && url.charCodeAt(start) <= 0x20) {
    start++;
  }
  return url.slice(start).replace(urlParserControlCharacters, '');
}

const malformedHttpProtocol = /^https?:(?!\/\/)/i;

// Redact the parts of a URL that can carry secrets before it is embedded in an
// error message. AxiosError.toJSON() serializes `message` verbatim and errors
// are commonly logged, while the opt-in `config.redact` model only cleans
// config keys — it cannot reach the message. Redact only the genuinely
// sensitive substrings — userinfo (credentials), query parameter values and
// fragment contents — with the same REDACTED marker the config redaction uses,
// while keeping the scheme, host, path and parameter names so the offending
// request stays accurately identifiable.
function redactFragment(fragment) {
  if (!fragment) {
    return fragment;
  }
  return fragment.replace(/(^|&)([^=&]*=)?[^&]+/g, (match, separator, parameterName = '') => {
    return `${separator}${parameterName}${REDACTED}`;
  });
}
function redactSensitiveURLParts(url) {
  const redactedURL = url.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${REDACTED}@`);
  const fragmentIndex = redactedURL.indexOf('#');
  const urlWithoutFragment = fragmentIndex === -1 ? redactedURL : redactedURL.slice(0, fragmentIndex);
  const redactedURLWithoutFragment = urlWithoutFragment.replace(/([?&][^=&#]*=)[^&#]*/g, `$1${REDACTED}`);
  if (fragmentIndex === -1) {
    return redactedURLWithoutFragment;
  }
  return `${redactedURLWithoutFragment}#${redactFragment(redactedURL.slice(fragmentIndex + 1))}`;
}
function assertValidHttpProtocolURL(url, config) {
  if (typeof url === 'string') {
    const normalizedURL = normalizeURLForProtocolCheck(url);
    if (malformedHttpProtocol.test(normalizedURL)) {
      throw new AxiosError(`Invalid URL ${JSON.stringify(redactSensitiveURLParts(normalizedURL))}: missing "//" after protocol`, AxiosError.ERR_INVALID_URL, config);
    }
  }
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls, config) {
  assertValidHttpProtocolURL(requestedURL, config);
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls === false)) {
    assertValidHttpProtocolURL(baseURL, config);
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

var DEFAULT_PORTS$1 = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};
function parseUrl(urlString) {
  try {
    return new URL(urlString);
  } catch {
    return null;
  }
}

/**
 * @param {string|object|URL} url - The URL as a string or URL instance, or a
 *   compatible object (such as the result from legacy url.parse).
 * @return {string} The URL of the proxy that should handle the request to the
 *  given URL. If no proxy is set, this will be an empty string.
 */
function getProxyForUrl(url) {
  var parsedUrl = (typeof url === 'string' ? parseUrl(url) : url) || {};
  var proto = parsedUrl.protocol;
  var hostname = parsedUrl.host;
  var port = parsedUrl.port;
  if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
    return ''; // Don't proxy URLs without a valid scheme or host.
  }
  proto = proto.split(':', 1)[0];
  // Stripping ports in this way instead of using parsedUrl.hostname to make
  // sure that the brackets around IPv6 addresses are kept.
  hostname = hostname.replace(/:\d*$/, '');
  port = parseInt(port) || DEFAULT_PORTS$1[proto] || 0;
  if (!shouldProxy(hostname, port)) {
    return ''; // Don't proxy URLs that match NO_PROXY.
  }
  var proxy = getEnv(proto + '_proxy') || getEnv('all_proxy');
  if (proxy && proxy.indexOf('://') === -1) {
    // Missing scheme in proxy, default to the requested URL's scheme.
    proxy = proto + '://' + proxy;
  }
  return proxy;
}

/**
 * Determines whether a given URL should be proxied.
 *
 * @param {string} hostname - The host name of the URL.
 * @param {number} port - The effective port of the URL.
 * @returns {boolean} Whether the given URL should be proxied.
 * @private
 */
function shouldProxy(hostname, port) {
  var NO_PROXY = getEnv('no_proxy').toLowerCase();
  if (!NO_PROXY) {
    return true; // Always proxy if NO_PROXY is not set.
  }
  if (NO_PROXY === '*') {
    return false; // Never proxy if wildcard is set.
  }
  return NO_PROXY.split(/[,\s]/).every(function (proxy) {
    if (!proxy) {
      return true; // Skip zero-length hosts.
    }
    var parsedProxy = proxy.match(/^(.+):(\d+)$/);
    var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
    var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
    if (parsedProxyPort && parsedProxyPort !== port) {
      return true; // Skip if ports don't match.
    }
    if (!/^[.*]/.test(parsedProxyHostname)) {
      // No wildcards, so stop proxying if there is an exact match.
      return hostname !== parsedProxyHostname;
    }
    if (parsedProxyHostname.charAt(0) === '*') {
      // Remove leading wildcard.
      parsedProxyHostname = parsedProxyHostname.slice(1);
    }
    // Stop proxying if the hostname ends with the no_proxy host.
    return !hostname.endsWith(parsedProxyHostname);
  });
}

/**
 * Get the value for an environment variable.
 *
 * @param {string} key - The name of the environment variable.
 * @return {string} The value of the environment variable.
 * @private
 */
function getEnv(key) {
  return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
}

const VERSION = "1.20.0";

function parseProtocol(url) {
  const match = /^([-+\w]{1,25}):(?:\/\/)?/.exec(url);
  return match && match[1] || '';
}

// RFC 2397: data:[<mediatype>][;base64],<data>
// mediatype = type/subtype followed by optional ;name=value parameters
const DATA_URL_PATTERN = /^([^,;/]+\/[^,;/]+)?((?:;[^,;=]+=[^,;]+)*)(;base64)?,([\s\S]*)$/;

/**
 * Parse data uri to a Buffer or Blob
 *
 * @param {String} uri
 * @param {?Boolean} asBlob
 * @param {?Object} options
 * @param {?Function} options.Blob
 *
 * @returns {Buffer|Blob}
 */
function fromDataURI(uri, asBlob, options) {
  const _Blob = options && options.Blob || platform.classes.Blob;
  const protocol = parseProtocol(uri);
  if (asBlob === undefined && _Blob) {
    asBlob = true;
  }
  if (protocol === 'data') {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
    const match = DATA_URL_PATTERN.exec(uri);
    if (!match) {
      throw new AxiosError('Invalid URL', AxiosError.ERR_INVALID_URL);
    }
    const type = match[1];
    const params = match[2];
    const encoding = match[3] ? 'base64' : 'utf8';
    const body = match[4];

    // RFC 2397 section 3: default mediatype is text/plain;charset=US-ASCII
    // Bare `data:,` leaves mime undefined; Blob normalises that to "" per spec.
    let mime = '';
    if (type) {
      mime = params ? type + params : type;
    } else if (params) {
      mime = 'text/plain' + params;
    }
    const buffer = encoding === 'base64' ? Buffer.from(body, 'base64') : Buffer.from(decodeURIComponent(body), encoding);
    if (asBlob) {
      if (!_Blob) {
        throw new AxiosError('Blob is not supported', AxiosError.ERR_NOT_SUPPORT);
      }
      return new _Blob([buffer], {
        type: mime
      });
    }
    return buffer;
  }
  throw new AxiosError('Unsupported protocol ' + protocol, AxiosError.ERR_NOT_SUPPORT);
}

const FORM_DATA_CONTENT_HEADERS = ['content-type', 'content-length'];

/**
 * Apply the headers generated by a FormData implementation to the request headers,
 * honoring the `formDataHeaderPolicy` option: with 'content-only', copy only the
 * content-* headers; otherwise merge all of them.
 *
 * @param {AxiosHeaders} headers - the request headers to mutate
 * @param {Object | null | undefined} formHeaders - headers produced by the FormData implementation
 * @param {String} [policy] - the resolved `formDataHeaderPolicy` config value
 *
 * @returns {void}
 */
function setFormDataHeaders(headers, formHeaders, policy) {
  if (policy !== 'content-only') {
    headers.set(formHeaders);
    return;
  }
  Object.entries(formHeaders || {}).forEach(([key, val]) => {
    if (FORM_DATA_CONTENT_HEADERS.includes(key.toLowerCase())) {
      headers.set(key, val);
    }
  });
}

const kInternals = Symbol('internals');
class AxiosTransformStream extends stream.Transform {
  constructor(options) {
    options = utils$1.toFlatObject(options, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (prop, source) => {
      return !utils$1.isUndefined(source[prop]);
    });
    super({
      readableHighWaterMark: options.chunkSize
    });
    const internals = this[kInternals] = {
      timeWindow: options.timeWindow,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: false,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };
    this.on('newListener', event => {
      if (event === 'progress') {
        if (!internals.isCaptured) {
          internals.isCaptured = true;
        }
      }
    });
  }
  _read(size) {
    const internals = this[kInternals];
    if (internals.onReadCallback) {
      internals.onReadCallback();
    }
    return super._read(size);
  }
  _transform(chunk, encoding, callback) {
    const internals = this[kInternals];
    const maxRate = internals.maxRate;
    const readableHighWaterMark = this.readableHighWaterMark;
    const timeWindow = internals.timeWindow;
    const divider = 1000 / timeWindow;
    const bytesThreshold = maxRate / divider;
    const minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
    const pushChunk = (_chunk, _callback) => {
      const bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes;
      internals.bytes += bytes;
      internals.isCaptured && this.emit('progress', internals.bytesSeen);
      if (this.push(_chunk)) {
        process.nextTick(_callback);
      } else {
        internals.onReadCallback = () => {
          internals.onReadCallback = null;
          process.nextTick(_callback);
        };
      }
    };
    const transformChunk = (_chunk, _callback) => {
      const chunkSize = Buffer.byteLength(_chunk);
      let chunkRemainder = null;
      let maxChunkSize = readableHighWaterMark;
      let bytesLeft;
      let passed = 0;
      if (maxRate) {
        const now = Date.now();
        if (!internals.ts || (passed = now - internals.ts) >= timeWindow) {
          internals.ts = now;
          bytesLeft = bytesThreshold - internals.bytes;
          internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
          passed = 0;
        }
        bytesLeft = bytesThreshold - internals.bytes;
      }
      if (maxRate) {
        if (bytesLeft <= 0) {
          // next time window
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        }
        if (bytesLeft < maxChunkSize) {
          maxChunkSize = bytesLeft;
        }
      }
      if (maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize) {
        chunkRemainder = _chunk.subarray(maxChunkSize);
        _chunk = _chunk.subarray(0, maxChunkSize);
      }
      pushChunk(_chunk, chunkRemainder ? () => {
        process.nextTick(_callback, null, chunkRemainder);
      } : _callback);
    };
    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err) {
        return callback(err);
      }
      if (_chunk) {
        transformChunk(_chunk, transformNextChunk);
      } else {
        callback(null);
      }
    });
  }
}

const {
  asyncIterator
} = Symbol;
const readBlob = async function* (blob) {
  if (blob.stream) {
    yield* blob.stream();
  } else if (blob.arrayBuffer) {
    yield await blob.arrayBuffer();
  } else if (blob[asyncIterator]) {
    yield* blob[asyncIterator]();
  } else {
    yield blob;
  }
};

const BOUNDARY_ALPHABET = platform.ALPHABET.ALPHA_DIGIT + '-_';
const textEncoder = typeof TextEncoder === 'function' ? new TextEncoder() : new util.TextEncoder();
const CRLF = '\r\n';
const CRLF_BYTES = textEncoder.encode(CRLF);
const CRLF_BYTES_COUNT = 2;
class FormDataPart {
  constructor(name, value) {
    const {
      escapeName
    } = this.constructor;
    const isStringValue = utils$1.isString(value);
    let headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ''}${CRLF}`;
    if (isStringValue) {
      value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF));
    } else {
      const safeType = String(value.type || 'application/octet-stream').replace(/[\r\n]/g, '');
      headers += `Content-Type: ${safeType}${CRLF}`;
    }
    this.headers = textEncoder.encode(headers + CRLF);
    this.contentLength = isStringValue ? value.byteLength : value.size;
    this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT;
    this.name = name;
    this.value = value;
  }
  async *encode() {
    yield this.headers;
    const {
      value
    } = this;
    if (utils$1.isTypedArray(value)) {
      yield value;
    } else {
      yield* readBlob(value);
    }
    yield CRLF_BYTES;
  }
  static escapeName(name) {
    return String(name).replace(/[\r\n"]/g, match => ({
      '\r': '%0D',
      '\n': '%0A',
      '"': '%22'
    })[match]);
  }
}
const formDataToStream = (form, headersHandler, options) => {
  const {
    tag = 'form-data-boundary',
    size = 25,
    boundary = tag + '-' + platform.generateString(size, BOUNDARY_ALPHABET)
  } = options || {};
  if (!utils$1.isFormData(form)) {
    throw new TypeError('FormData instance required');
  }
  if (boundary.length < 1 || boundary.length > 70) {
    throw new Error('boundary must be 1-70 characters long');
  }
  const boundaryBytes = textEncoder.encode('--' + boundary + CRLF);
  const footerBytes = textEncoder.encode('--' + boundary + '--' + CRLF);
  let contentLength = footerBytes.byteLength;
  const parts = Array.from(form.entries()).map(([name, value]) => {
    const part = new FormDataPart(name, value);
    contentLength += part.size;
    return part;
  });
  contentLength += boundaryBytes.byteLength * parts.length;
  contentLength = utils$1.toFiniteNumber(contentLength);
  const computedHeaders = {
    'Content-Type': `multipart/form-data; boundary=${boundary}`
  };
  if (Number.isFinite(contentLength)) {
    computedHeaders['Content-Length'] = contentLength;
  }
  headersHandler && headersHandler(computedHeaders);
  return stream.Readable.from(async function* () {
    for (const part of parts) {
      yield boundaryBytes;
      yield* part.encode();
    }
    yield footerBytes;
  }());
};

class ZlibHeaderTransformStream extends stream.Transform {
  __transform(chunk, encoding, callback) {
    this.push(chunk);
    callback();
  }
  _transform(chunk, encoding, callback) {
    if (chunk.length !== 0) {
      this._transform = this.__transform;

      // Add Default Compression headers if no zlib headers are present
      if (chunk[0] !== 120) {
        // Hex: 78
        const header = Buffer.alloc(2);
        header[0] = 120; // Hex: 78
        header[1] = 156; // Hex: 9C
        this.push(header, encoding);
      }
    }
    this.__transform(chunk, encoding, callback);
  }
}

class Http2Sessions {
  constructor() {
    this.sessions = Object.create(null);
  }
  getSession(authority, options) {
    options = Object.assign(Object.create(null), {
      sessionTimeout: 1000
    }, options);
    let authoritySessions = this.sessions[authority];
    if (authoritySessions) {
      let len = authoritySessions.length;
      for (let i = 0; i < len; i++) {
        const [sessionHandle, sessionOptions] = authoritySessions[i];
        if (!sessionHandle.destroyed && !sessionHandle.closed && util.isDeepStrictEqual(sessionOptions, options)) {
          return sessionHandle;
        }
      }
    }
    const session = http2.connect(authority, options);
    let removed;
    let timer;
    const removeSession = () => {
      if (removed) {
        return;
      }
      removed = true;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      let entries = authoritySessions,
        len = entries.length,
        i = len;
      while (i--) {
        if (entries[i][0] === session) {
          if (len === 1) {
            delete this.sessions[authority];
          } else {
            entries.splice(i, 1);
          }
          if (!session.closed) {
            session.close();
          }
          return;
        }
      }
    };
    const originalRequestFn = session.request;
    const {
      sessionTimeout
    } = options;
    if (sessionTimeout != null) {
      let streamsCount = 0;
      session.request = function () {
        const stream = originalRequestFn.apply(this, arguments);
        streamsCount++;
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        stream.once('close', () => {
          if (! --streamsCount) {
            timer = setTimeout(() => {
              timer = null;
              removeSession();
            }, sessionTimeout);
          }
        });
        return stream;
      };
    }
    session.once('close', removeSession);
    session.once('error', removeSession);
    let entry = [session, options];
    authoritySessions ? authoritySessions.push(entry) : authoritySessions = this.sessions[authority] = [entry];
    return session;
  }
}

const callbackify = (fn, reducer) => {
  return utils$1.isAsyncFn(fn) ? function (...args) {
    const cb = args.pop();
    fn.apply(this, args).then(value => {
      try {
        reducer ? cb(null, ...reducer(value)) : cb(null, value);
      } catch (err) {
        cb(err);
      }
    }, cb);
  } : fn;
};

const LOOPBACK_HOSTNAMES = new Set(['localhost', '0.0.0.0']);
const trimTrailingDots = value => {
  let end = value.length;
  while (end && value.charCodeAt(end - 1) === 46) {
    end--;
  }
  return end === value.length ? value : value.slice(0, end);
};
const isIPv4Loopback = host => {
  const parts = host.split('.');
  if (parts.length !== 4) return false;
  if (parts[0] !== '127') return false;
  return parts.every(p => /^\d+$/.test(p) && Number(p) >= 0 && Number(p) <= 255);
};

/**
 * Canonicalize an IPv4 address written in shorthand, octal, or hex form into
 * dotted-decimal. IPv6 addresses and non-IP strings are returned unchanged so
 * the existing IPv4-mapped IPv6 unmap path and the isLoopback path can still
 * see them.
 *
 * Shorthand expansion mirrors Node's URL parser: literal parts fill from the
 * left, the final part fills the remaining octets from the right with
 * zero-padding on the left.
 *   127.1     -> 127.0.0.1
 *   127.0.1   -> 127.0.0.1
 *   1.2.3     -> 1.2.0.3
 *
 * Each octet is parsed with an explicit base: 16 for `0x`/`0X` prefix, 8 for
 * zero-prefixed multi-digit all-`0-7` parts, 10 otherwise. Zero-prefixed
 * decimal-looking parts that contain `8` or `9` are rejected to match Node's
 * URL parser, and the comparison layer falls through to non-bypass if either
 * side rejects the form (fail-safe).
 *
 * Returns the input unchanged on any parse failure, out-of-range octet, or
 * unusual shape (1-part, 5+ parts) so the comparison layer fails closed.
 */
const parseIPv4Octet = text => {
  if (/^0[xX][0-9a-fA-F]+$/.test(text)) {
    const n = parseInt(text.slice(2), 16);
    return Number.isFinite(n) ? n : null;
  }
  if (text.length > 1 && /^0[0-7]+$/.test(text)) {
    const n = parseInt(text, 8);
    return Number.isFinite(n) ? n : null;
  }
  if (text.length > 1 && /^0[0-9]+$/.test(text)) {
    return null;
  }
  if (/^[0-9]+$/.test(text)) {
    const n = parseInt(text, 10);
    return Number.isFinite(n) ? n : null;
  }
  return null;
};
const normalizeIPAddress = host => {
  if (typeof host !== 'string' || !host || host.indexOf(':') !== -1) {
    return host;
  }
  let h = host;
  if (h.charAt(0) === '[' && h.charAt(h.length - 1) === ']') {
    h = h.slice(1, -1);
  }
  h = trimTrailingDots(h);

  // Allowed characters for any IPv4 shape: digits, dot, 'x', 'X', hex digits.
  if (!/^[0-9.xXa-fA-F]+$/.test(h)) return host;
  const parts = h.split('.');

  // No part may be empty (e.g. "127..0.1" or "127.0.0."). Trailing dots are
  // already stripped above; this guards against the empty-middle case.
  if (parts.some(p => p === '')) return host;
  if (parts.length === 4) {
    // Full IPv4 form: each part is an octet.
    const octets = parts.map(parseIPv4Octet);
    if (octets.some(n => n === null || n < 0 || n > 255)) return host;
    return octets.join('.');
  }
  if (parts.length > 4) {
    return host;
  }

  // Shorthand: 1..3 parts. Node's URL parser treats a 1-part input as a 32-bit
  // integer split into octets, which has surprising semantics (e.g. "127" ->
  // "0.0.0.127"). Reject 1-part inputs to keep the helper predictable: the
  // fail-safe returns the input unchanged and the comparison layer falls
  // through to non-bypass.
  if (parts.length === 1) return host;

  // 2..3 parts: literal parts fill from the left, tail fills remaining octets
  // from the right with zero-padding.
  const literalOctets = parts.slice(0, -1);
  const tail = parts[parts.length - 1];
  const tailSlots = 4 - literalOctets.length;

  // Tail is parsed as a full IPv4 number (hex/octal/decimal) and packed
  // low-byte-right into the remaining octets, matching Node's URL parser.
  // e.g. 127.65535 (tail 0xFFFF into 3 slots) -> 127.0.255.255;
  //      127.0x00ff (tail 0xFF into 3 slots) -> 127.0.0.255;
  //      127.0.65535 (tail 0xFFFF into 2 slots) -> 127.0.255.255.
  const tailValue = parseIPv4Octet(tail);
  if (tailValue === null) return host;
  const maxTail = (1 << 8 * tailSlots) - 1;
  if (tailValue < 0 || tailValue > maxTail) return host;
  const tailOctets = new Array(tailSlots).fill(0);
  for (let i = tailSlots - 1, v = tailValue; i >= 0; i--, v >>= 8) {
    tailOctets[i] = v & 0xff;
  }
  const literal = literalOctets.map(parseIPv4Octet);
  if (literal.some(n => n === null || n < 0 || n > 255)) return host;
  return [...literal, ...tailOctets].join('.');
};
const isIPv6ZeroGroup = group => /^0{1,4}$/.test(group);

// The unspecified address (IPv4 0.0.0.0 / IPv6 ::) resolves to the local host
// for outbound connections, so treat it as loopback-equivalent for NO_PROXY
// matching. 0.0.0.0 is covered by LOOPBACK_HOSTNAMES; this handles compressed
// and full IPv6 all-zero forms so both families bypass symmetrically.
const isIPv6Unspecified = host => {
  if (host === '::') return true;
  const compressionIndex = host.indexOf('::');
  if (compressionIndex !== -1) {
    if (compressionIndex !== host.lastIndexOf('::')) return false;
    const left = host.slice(0, compressionIndex);
    const right = host.slice(compressionIndex + 2);
    const leftGroups = left ? left.split(':') : [];
    const rightGroups = right ? right.split(':') : [];
    const explicitGroups = leftGroups.length + rightGroups.length;
    return explicitGroups < 8 && leftGroups.every(isIPv6ZeroGroup) && rightGroups.every(isIPv6ZeroGroup);
  }
  const groups = host.split(':');
  return groups.length === 8 && groups.every(isIPv6ZeroGroup);
};
const isIPv6Loopback = host => {
  // Collapse all-zero groups: any form of ::1 / 0:0:...:0:1
  // First, strip any leading "::" by normalising with Set lookup of common forms,
  // then fall back to structural check.
  if (host === '::1') return true;

  // Check IPv4-mapped IPv6 loopback: ::ffff:<v4-loopback> or ::ffff:<hex-v4-loopback>
  // Node's URL parser normalises ::ffff:127.0.0.1 → ::ffff:7f00:1
  const v4MappedDotted = host.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i);
  if (v4MappedDotted) return isIPv4Loopback(v4MappedDotted[1]);
  const v4MappedHex = host.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
  if (v4MappedHex) {
    const high = parseInt(v4MappedHex[1], 16);
    // High 16 bits must start with 127 (0x7f) — i.e. 0x7f00..0x7fff
    return high >= 0x7f00 && high <= 0x7fff;
  }

  // Full-form ::1 variants: any number of zero groups followed by trailing 1
  // e.g. 0:0:0:0:0:0:0:1, 0000:...:0001
  const groups = host.split(':');
  if (groups.length === 8) {
    for (let i = 0; i < 7; i++) {
      if (!/^0+$/.test(groups[i])) return false;
    }
    return /^0*1$/.test(groups[7]);
  }
  return false;
};
const isLoopback = host => {
  if (!host) return false;
  if (LOOPBACK_HOSTNAMES.has(host)) return true;
  if (isIPv4Loopback(host)) return true;
  if (isIPv6Unspecified(host)) return true;
  return isIPv6Loopback(host);
};
const DEFAULT_PORTS = {
  http: 80,
  https: 443,
  ws: 80,
  wss: 443,
  ftp: 21
};
const parseNoProxyEntry = entry => {
  let entryHost = entry;
  let entryPort = 0;
  if (entryHost.charAt(0) === '[') {
    const bracketIndex = entryHost.indexOf(']');
    if (bracketIndex !== -1) {
      const host = entryHost.slice(1, bracketIndex);
      const rest = entryHost.slice(bracketIndex + 1);
      if (rest.charAt(0) === ':' && /^\d+$/.test(rest.slice(1))) {
        entryPort = Number.parseInt(rest.slice(1), 10);
      }
      return [host, entryPort];
    }
  }
  const firstColon = entryHost.indexOf(':');
  const lastColon = entryHost.lastIndexOf(':');
  if (firstColon !== -1 && firstColon === lastColon && /^\d+$/.test(entryHost.slice(lastColon + 1))) {
    entryPort = Number.parseInt(entryHost.slice(lastColon + 1), 10);
    entryHost = entryHost.slice(0, lastColon);
  }
  return [entryHost, entryPort];
};

// Convert IPv4-mapped IPv6 (::ffff:0:0/96 prefix) to IPv4 dotted form so both
// sides of a NO_PROXY comparison see the same canonical address. Without this,
// `NO_PROXY=192.168.1.5` would not match a request to `http://[::ffff:192.168.1.5]/`
// (Node's URL parser normalises that to `[::ffff:c0a8:105]`), and vice-versa,
// allowing the proxy-bypass policy to be circumvented by using the alternate
// representation. Returns the input unchanged when not IPv4-mapped.
const IPV4_MAPPED_DOTTED_RE = /^(?:::|(?:0{1,4}:){1,4}:|(?:0{1,4}:){5})ffff:(\d+\.\d+\.\d+\.\d+)$/i;
const IPV4_MAPPED_HEX_RE = /^(?:::|(?:0{1,4}:){1,4}:|(?:0{1,4}:){5})ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i;
const unmapIPv4MappedIPv6 = host => {
  if (typeof host !== 'string' || host.indexOf(':') === -1) return host;
  const dotted = host.match(IPV4_MAPPED_DOTTED_RE);
  if (dotted) return dotted[1];
  const hex = host.match(IPV4_MAPPED_HEX_RE);
  if (hex) {
    const high = parseInt(hex[1], 16);
    const low = parseInt(hex[2], 16);
    return `${high >> 8}.${high & 0xff}.${low >> 8}.${low & 0xff}`;
  }
  return host;
};
const IPV4_OCTET_RE = /^(?:0|[1-9]\d{0,2})$/;
const ipv4ToBytes = host => {
  const parts = host.split('.');
  return parts.length === 4 && parts.every(part => IPV4_OCTET_RE.test(part) && Number(part) <= 255) ? parts.map(Number) : null;
};
const IPV6_GROUP_RE = /^[0-9a-f]{1,4}$/i;
const ipv6ToBytes = host => {
  const halves = host.split('::');
  if (halves.length > 2) {
    return null;
  }
  const groups = halves[0] ? halves[0].split(':') : [];
  if (halves.length === 2) {
    const rear = halves[1] ? halves[1].split(':') : [];
    const missing = 8 - groups.length - rear.length;
    if (missing < 1) {
      return null;
    }
    groups.push(...new Array(missing).fill('0'), ...rear);
  }
  if (groups.length !== 8 || groups.some(group => !IPV6_GROUP_RE.test(group))) {
    return null;
  }
  return groups.flatMap(group => {
    const value = Number.parseInt(group, 16);
    return [value >> 8 & 0xff, value & 0xff];
  });
};
const ipToBytes = host => {
  if (typeof host !== 'string' || !host) {
    return null;
  }
  return host.indexOf(':') !== -1 ? ipv6ToBytes(host) : ipv4ToBytes(host);
};
const normalizeNoProxyHost = hostname => {
  if (!hostname) {
    return hostname;
  }
  if (hostname.charAt(0) === '[' && hostname.charAt(hostname.length - 1) === ']') {
    hostname = hostname.slice(1, -1);
  }
  const trimmed = trimTrailingDots(hostname);

  // IPv4 shorthand/octal/hex → dotted-decimal; helper is a no-op for inputs
  // containing ':' (IPv6 and IPv4-mapped IPv6) so we fall through to unmap.
  const ipv4 = normalizeIPAddress(trimmed);
  if (ipv4 !== trimmed) {
    return ipv4;
  }
  return unmapIPv4MappedIPv6(trimmed);
};
const normalizeCidrBase = input => {
  let base = input;
  const startsBracket = base.charAt(0) === '[';
  const endsBracket = base.charAt(base.length - 1) === ']';
  const hasBracket = base.includes('[') || base.includes(']');
  if (startsBracket || endsBracket) {
    if (!startsBracket || !endsBracket) {
      return null;
    }
    base = base.slice(1, -1);
    if (base.indexOf(':') === -1 || base.includes('[') || base.includes(']')) {
      return null;
    }
  } else if (hasBracket) {
    return null;
  }
  if (!base || base.charAt(base.length - 1) === '.') {
    return null;
  }
  const wasIPv6 = base.indexOf(':') !== -1;
  if (wasIPv6) {
    try {
      base = new URL(`http://[${base}]/`).hostname.slice(1, -1);
    } catch (_err) {
      return null;
    }
  } else {
    base = normalizeIPAddress(base);
    if (!ipv4ToBytes(base)) {
      return null;
    }
  }
  return {
    normalized: unmapIPv4MappedIPv6(base),
    wasIPv6
  };
};
const CIDR_ENTRY_RE = /^(.+)\/(0|[1-9]\d{0,2})$/;
const parseCidrEntry = entry => {
  if (entry.indexOf('/') === -1) {
    return undefined;
  }
  const match = CIDR_ENTRY_RE.exec(entry);
  if (!match) {
    return null;
  }
  let prefix = Number(match[2]);
  const parsedBase = normalizeCidrBase(match[1]);
  if (!parsedBase) {
    return null;
  }
  const {
    normalized,
    wasIPv6
  } = parsedBase;
  if (wasIPv6 && normalized.indexOf(':') === -1) {
    if (prefix < 96) {
      return null;
    }
    prefix -= 96;
  }
  const bytes = ipToBytes(normalized);
  if (!bytes || prefix > bytes.length * 8) {
    return null;
  }
  return {
    bytes,
    prefix
  };
};
const isInSubnet = (addressBytes, networkBytes, prefix) => {
  const fullBytes = prefix >> 3;
  for (let i = 0; i < fullBytes; i++) {
    if (addressBytes[i] !== networkBytes[i]) {
      return false;
    }
  }
  const remainingBits = prefix & 7;
  if (remainingBits) {
    const mask = 0xff << 8 - remainingBits & 0xff;
    if ((addressBytes[fullBytes] & mask) !== (networkBytes[fullBytes] & mask)) {
      return false;
    }
  }
  return true;
};
function shouldBypassProxy(location) {
  let parsed;
  try {
    parsed = new URL(location);
  } catch (_err) {
    return false;
  }
  const noProxy = (process.env.no_proxy || process.env.NO_PROXY || '').toLowerCase();
  if (!noProxy) {
    return false;
  }
  if (noProxy === '*') {
    return true;
  }
  const port = Number.parseInt(parsed.port, 10) || DEFAULT_PORTS[parsed.protocol.split(':', 1)[0]] || 0;
  const hostname = normalizeNoProxyHost(parsed.hostname.toLowerCase());
  const hostnameBytes = ipToBytes(hostname);
  return noProxy.split(/[\s,]+/).some(entry => {
    if (!entry) {
      return false;
    }
    if (entry === '*') {
      return true;
    }
    const cidr = parseCidrEntry(entry);
    if (cidr !== undefined) {
      return cidr !== null && !!hostnameBytes && hostnameBytes.length === cidr.bytes.length && isInSubnet(hostnameBytes, cidr.bytes, cidr.prefix);
    }
    let [entryHost, entryPort] = parseNoProxyEntry(entry);
    entryHost = normalizeNoProxyHost(entryHost);
    if (!entryHost) {
      return false;
    }
    if (entryPort && entryPort !== port) {
      return false;
    }
    if (entryHost.charAt(0) === '*') {
      entryHost = entryHost.slice(1);
    }
    if (entryHost.charAt(0) === '.') {
      return hostname.endsWith(entryHost);
    }
    return hostname === entryHost || isLoopback(hostname) && isLoopback(entryHost);
  });
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== undefined ? min : 1000;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Array<Function>}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn(...args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  const flushWith = (...args) => invoke(args);
  return [throttled, flush, flushWith];
}

const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return throttle(e => {
    if (!e || !utils$1.isNumber(e.loaded)) {
      return;
    }
    const rawLoaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const loaded = Math.max(0, total != null ? Math.min(rawLoaded, total) : rawLoaded);
    const progressBytes = Math.max(0, loaded - bytesNotified);
    const rate = _speedometer(progressBytes);
    bytesNotified = Math.max(bytesNotified, loaded);
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };
    listener(data);
  }, freq);
};
const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [loaded => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
const asyncDecorator = (fn, scheduler = utils$1.asap) => (...args) => scheduler(() => fn(...args));

/**
 * Estimate data: URL byte lengths *without* allocating large buffers.
 * - Fetch percent-decodes a base64 body before decoding it.
 * - Node's Buffer.from(body, 'base64') sizes its backing allocation from the
 *   raw body, including ignored characters and content after padding.
 * - Non-base64 data is percent-decoded and then encoded as UTF-8.
 */
const isHexDigit = charCode => charCode >= 48 && charCode <= 57 || charCode >= 65 && charCode <= 70 || charCode >= 97 && charCode <= 102;
const isPercentEncodedByte = (str, i, len) => i + 2 < len && isHexDigit(str.charCodeAt(i + 1)) && isHexDigit(str.charCodeAt(i + 2));
const hexValue = charCode => charCode <= 57 ? charCode - 48 : (charCode & 0xdf) - 55;
const isBase64Char = charCode => charCode >= 65 && charCode <= 90 ||
// A-Z
charCode >= 97 && charCode <= 122 ||
// a-z
charCode >= 48 && charCode <= 57 ||
// 0-9
charCode === 43 ||
// +
charCode === 47 ||
// /
charCode === 45 ||
// - (base64url)
charCode === 95; // _ (base64url)

const isBase64Whitespace = charCode => charCode === 9 || charCode === 10 || charCode === 12 || charCode === 13 || charCode === 32;
const base64Bytes = significant => {
  const groups = Math.floor(significant / 4);
  const remainder = significant % 4;
  return groups * 3 + (remainder === 2 ? 1 : remainder === 3 ? 2 : 0);
};

// Buffer.byteLength(body, 'base64') uses the raw string length as an allocation
// upper bound even when Buffer.from later ignores characters or stops at '='.
const estimateBase64BufferAllocation = body => {
  const len = body.length;
  let padding = 0;
  if (len > 0 && body.charCodeAt(len - 1) === 61 /* '=' */) {
    padding++;
    if (len > 1 && body.charCodeAt(len - 2) === 61 /* '=' */) {
      padding++;
    }
  }
  return Math.floor((len - padding) * 3 / 4);
};
const estimatePercentDecodedBase64Bytes = body => {
  const len = body.length;
  let significant = 0;
  let padding = 0;
  let invalid = false;
  for (let i = 0; i < len; i++) {
    let code = body.charCodeAt(i);
    if (code === 37 /* '%' */ && isPercentEncodedByte(body, i, len)) {
      code = hexValue(body.charCodeAt(i + 1)) * 16 + hexValue(body.charCodeAt(i + 2));
      i += 2;
    }
    if (isBase64Whitespace(code)) {
      continue;
    }
    if (code === 61 /* '=' */) {
      padding++;
      continue;
    }
    if (!isBase64Char(code) || padding > 0) {
      invalid = true;
      continue;
    }
    significant++;
  }

  // Fetch rejects malformed forgiving-base64 input. Returning the raw-size
  // allocation bound keeps that invalid input from becoming a pre-check bypass.
  if (invalid || padding > 2 || padding > 0 && (significant + padding) % 4 !== 0 || significant % 4 === 1) {
    return estimateBase64BufferAllocation(body);
  }
  return base64Bytes(significant);
};
const estimateDataURLBytes = (url, estimateBase64) => {
  if (!url || typeof url !== 'string') return 0;
  if (!url.startsWith('data:')) return 0;
  const comma = url.indexOf(',');
  if (comma < 0) return 0;
  const meta = url.slice(5, comma);
  const body = url.slice(comma + 1);
  const isBase64 = /;base64/i.test(meta);
  if (isBase64) {
    return estimateBase64(body);
  }

  // Compute UTF-8 byte length directly from UTF-16 code units without allocating
  // a byte buffer (TextEncoder.encode would defeat the DoS guard on large bodies).
  // Valid %XX triplets count as one decoded byte; this matches the bytes that
  // decodeURIComponent(body) would produce before Buffer re-encodes the string.
  let bytes = 0;
  for (let i = 0, len = body.length; i < len; i++) {
    const c = body.charCodeAt(i);
    if (c === 37 /* '%' */ && isPercentEncodedByte(body, i, len)) {
      bytes += 1;
      i += 2;
    } else if (c < 0x80) {
      bytes += 1;
    } else if (c < 0x800) {
      bytes += 2;
    } else if (c >= 0xd800 && c <= 0xdbff && i + 1 < len) {
      const next = body.charCodeAt(i + 1);
      if (next >= 0xdc00 && next <= 0xdfff) {
        bytes += 4;
        i++;
      } else {
        bytes += 3;
      }
    } else {
      bytes += 3;
    }
  }
  return bytes;
};

/**
 * Estimate the percent-decoded payload size used by Fetch data: URLs.
 *
 * @param {string} url
 * @returns {number}
 */
function estimateDataURLDecodedBytes(url) {
  // Fetch removes URL fragments before processing a data: URL.
  const fragmentIndex = typeof url === 'string' ? url.indexOf('#') : -1;
  return estimateDataURLBytes(fragmentIndex === -1 ? url : url.slice(0, fragmentIndex), estimatePercentDecodedBase64Bytes);
}

/**
 * Estimate the Buffer backing allocation used by Node's raw base64 decoder.
 *
 * @param {string} url
 * @returns {number}
 */
function estimateDataURLBufferAllocation(url) {
  return estimateDataURLBytes(url, estimateBase64BufferAllocation);
}

const zlibOptions = {
  flush: zlib.constants.Z_SYNC_FLUSH,
  finishFlush: zlib.constants.Z_SYNC_FLUSH
};
const brotliOptions = {
  flush: zlib.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: zlib.constants.BROTLI_OPERATION_FLUSH
};
const zstdOptions = {
  flush: zlib.constants.ZSTD_e_flush,
  finishFlush: zlib.constants.ZSTD_e_flush
};
const isBrotliSupported = utils$1.isFunction(zlib.createBrotliDecompress);
const isZstdSupported = utils$1.isFunction(zlib.createZstdDecompress);
const ACCEPT_ENCODING = 'gzip, compress, deflate' + (isBrotliSupported ? ', br' : '');
const ACCEPT_ENCODING_WITH_ZSTD = ACCEPT_ENCODING + (isZstdSupported ? ', zstd' : '');
const scheduleProgress = typeof process !== 'undefined' && process.nextTick ? process.nextTick.bind(process) : utils$1.asap;
const {
  http: httpFollow,
  https: httpsFollow
} = followRedirects;
const isHttps = /https:?/;

// Symbols used to bind a single 'error' listener to a pooled socket and track
// the request currently owning that socket across keep-alive reuse (issue #10780).
const kAxiosSocketListener = Symbol('axios.http.socketListener');
const kAxiosCurrentReq = Symbol('axios.http.currentReq');

// A shared listener avoids retaining an adapter context for the lifetime of a
// pooled socket. EventEmitter invokes listeners with `this` set to the emitter.
function handleSocketError(err) {
  const current = this[kAxiosCurrentReq];
  if (current && !current.destroyed) {
    current.destroy(err);
  }
}

// Tags HttpsProxyAgent instances installed by setProxy() so the redirect path
// can strip them without clobbering a user-supplied agent that happens to be
// an HttpsProxyAgent.
const kAxiosInstalledTunnel = Symbol('axios.http.installedTunnel');

// Cache of CONNECT-tunneling agents keyed by proxy config so repeat requests
// through the same proxy reuse a single agent (and its socket pool). The
// keyspace is bounded by the set of distinct proxy configs the process uses,
// so unbounded growth is not a concern in practice.
const tunnelingAgentCache = new Map();
const tunnelingAgentCacheUser = new WeakMap();
// Minimum minor versions where Node's HTTP Agent supports native proxyEnv
// handling. Checking the selected agent below also covers startup modes such
// as NODE_OPTIONS=--use-env-proxy and --no-use-env-proxy precedence.
const NODE_NATIVE_ENV_PROXY_SUPPORT = {
  22: 21,
  24: 5
};
function isNodeNativeEnvProxySupported(nodeVersion = process.versions && process.versions.node) {
  if (!nodeVersion) {
    return false;
  }
  const [major, minor] = nodeVersion.split('.').map(part => Number(part));
  if (!Number.isInteger(major) || !Number.isInteger(minor)) {
    return false;
  }
  if (major > 24) {
    return true;
  }
  return NODE_NATIVE_ENV_PROXY_SUPPORT[major] != null && minor >= NODE_NATIVE_ENV_PROXY_SUPPORT[major];
}
function isNodeEnvProxyEnabled(agent, nodeVersion = process.versions && process.versions.node) {
  if (!isNodeNativeEnvProxySupported(nodeVersion)) {
    return false;
  }
  const agentOptions = agent && agent.options;
  return Boolean(agentOptions && utils$1.hasOwnProp(agentOptions, 'proxyEnv') && agentOptions.proxyEnv != null);
}
function getProxyEnvAgent(options, configHttpAgent, configHttpsAgent) {
  return isHttps.test(options.protocol) ? configHttpsAgent || https.globalAgent : configHttpAgent || http.globalAgent;
}
function getTunnelingAgent(agentOptions, userHttpsAgent) {
  const key = agentOptions.protocol + '//' + agentOptions.hostname + ':' + (agentOptions.port || '') + '#' + (agentOptions.auth || '');
  const cache = userHttpsAgent ? tunnelingAgentCacheUser.get(userHttpsAgent) || tunnelingAgentCacheUser.set(userHttpsAgent, new Map()).get(userHttpsAgent) : tunnelingAgentCache;
  let agent = cache.get(key);
  if (agent) return agent;
  // Forward the user's TLS options (custom CA, rejectUnauthorized, client cert,
  // etc.) into the tunneling agent so they apply to the origin TLS upgrade
  // performed after CONNECT. Our proxy fields take precedence on conflict.
  const merged = userHttpsAgent && userHttpsAgent.options ? {
    ...userHttpsAgent.options,
    ...agentOptions
  } : agentOptions;
  agent = new HttpsProxyAgent(merged);
  if (userHttpsAgent && userHttpsAgent.options) {
    const originTLSOptions = {
      ...userHttpsAgent.options
    };
    const callback = agent.callback;
    agent.callback = function axiosTunnelingAgentCallback(req, opts) {
      // HttpsProxyAgent v5 reads callback opts for the post-CONNECT origin TLS upgrade.
      return callback.call(this, req, {
        ...originTLSOptions,
        ...opts
      });
    };
  }
  agent[kAxiosInstalledTunnel] = true;
  cache.set(key, agent);
  return agent;
}
const supportedProtocols = platform.protocols.map(protocol => {
  return protocol + ':';
});

// Node's WHATWG URL parser returns `username` and `password` percent-encoded.
// Decode before composing the `auth` option so credentials such as
// `my%40email.com:pass` are sent as `my@email.com:pass`. Falls back to the
// original value for malformed input so a bad encoding never throws.
const decodeURIComponentSafe$1 = value => {
  if (!utils$1.isString(value)) {
    return value;
  }
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
};
const flushOnFinish = (stream, [throttled, flush]) => {
  stream.on('end', flush).on('error', flush);
  return throttled;
};
const http2Sessions = new Http2Sessions();

/**
 * If the proxy, auth, sensitive header, or config beforeRedirects functions are defined,
 * call them with the options object.
 *
 * @param {Object<string, any>} options - The options object that was passed to the request.
 *
 * @returns {Object<string, any>}
 */
function dispatchBeforeRedirect(options, responseDetails, requestDetails) {
  if (options.beforeRedirects.proxy) {
    options.beforeRedirects.proxy(options);
  }
  if (options.beforeRedirects.auth) {
    options.beforeRedirects.auth(options);
  }
  if (options.beforeRedirects.sensitiveHeaders) {
    options.beforeRedirects.sensitiveHeaders(options, requestDetails);
  }
  if (options.beforeRedirects.config) {
    options.beforeRedirects.config(options, responseDetails, requestDetails);
  }
}
function stripMatchingHeaders(headers, sensitiveSet) {
  if (!headers) {
    return;
  }
  Object.keys(headers).forEach(header => {
    if (sensitiveSet.has(header.toLowerCase())) {
      delete headers[header];
    }
  });
}
function isSameOriginRedirect(redirectOptions, requestDetails) {
  if (!requestDetails) {
    return false;
  }
  try {
    return new URL(requestDetails.url).origin === new URL(redirectOptions.href).origin;
  } catch (e) {
    // If origin comparison fails, treat the redirect as unsafe.
    return false;
  }
}

/**
 * If the proxy or config afterRedirects functions are defined, call them with the options
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} configProxy configuration from Axios options object
 * @param {string} location
 * @param {boolean} [allowEnvProxy=true] whether environment proxy configuration can be used
 *
 * @returns {boolean} whether a proxy applies to the selected transport
 */
function setProxy(options, configProxy, location, isRedirect, configHttpsAgent, configHttpAgent, allowEnvProxy = true) {
  let proxy = configProxy;
  const proxyEnvAgent = getProxyEnvAgent(options, configHttpAgent, configHttpsAgent);
  if (!proxy && proxy !== false && allowEnvProxy && !isNodeEnvProxyEnabled(proxyEnvAgent)) {
    const proxyUrl = getProxyForUrl(location);
    if (proxyUrl) {
      if (!shouldBypassProxy(location)) {
        proxy = new URL(proxyUrl);
      }
    }
  }
  // On redirect re-invocation, strip any stale Proxy-Authorization header carried
  // over from the prior request (e.g. new target no longer uses a proxy, or uses
  // a different proxy). Skip on the initial request so user-supplied headers are
  // preserved. Header names are case-insensitive, so remove every case variant.
  if (isRedirect && options.headers) {
    for (const name of Object.keys(options.headers)) {
      if (name.toLowerCase() === 'proxy-authorization') {
        delete options.headers[name];
      }
    }
  }
  // Strip any tunneling agent we installed for the previous hop so a redirect
  // that drops the proxy or crosses an HTTPS↔HTTP boundary doesn't reuse a
  // stale one. Match on our Symbol marker so a user-supplied HttpsProxyAgent
  // (which won't carry the marker) is left alone.
  if (isRedirect && options.agent && options.agent[kAxiosInstalledTunnel]) {
    options.agent = undefined;
  }
  if (proxy) {
    // Read proxy fields without traversing the prototype chain. URL instances expose
    // username/password/hostname/host/port/protocol via getters on URL.prototype (so
    // direct reads are shielded), but plain object proxies — and the `auth` field
    // (which URL does not expose) — must be guarded so a polluted Object.prototype
    // (e.g. Object.prototype.auth = { username, password }) cannot inject
    // attacker-controlled credentials into the Proxy-Authorization header or
    // redirect proxying to an attacker-controlled host.
    const isProxyURL = proxy instanceof URL;
    const readProxyField = key => isProxyURL || utils$1.hasOwnProp(proxy, key) ? proxy[key] : undefined;
    const proxyUsername = readProxyField('username');
    const proxyPassword = readProxyField('password');
    let proxyAuth = utils$1.hasOwnProp(proxy, 'auth') ? proxy.auth : undefined;

    // Basic proxy authorization
    if (proxyUsername) {
      proxyAuth = (proxyUsername || '') + ':' + (proxyPassword || '');
    }
    if (proxyAuth) {
      // Support proxy auth object form. Read sub-fields via own-prop checks so a
      // plain object inheriting from polluted Object.prototype cannot leak creds.
      const authIsObject = typeof proxyAuth === 'object';
      const authUsername = authIsObject && utils$1.hasOwnProp(proxyAuth, 'username') ? proxyAuth.username : undefined;
      const authPassword = authIsObject && utils$1.hasOwnProp(proxyAuth, 'password') ? proxyAuth.password : undefined;
      const validProxyAuth = Boolean(authUsername || authPassword);
      if (validProxyAuth) {
        proxyAuth = (authUsername || '') + ':' + (authPassword || '');
      } else if (authIsObject) {
        throw new AxiosError('Invalid proxy authorization', AxiosError.ERR_BAD_OPTION, {
          proxy
        });
      }
    }
    const targetIsHttps = isHttps.test(options.protocol);
    if (targetIsHttps) {
      // CONNECT-tunneling path for HTTPS targets. Preserves end-to-end TLS to
      // the origin so the proxy cannot inspect the URL, headers, or body — the
      // behavior already promised by THREATMODEL.md (T-R9). HttpsProxyAgent
      // sends Proxy-Authorization on the CONNECT request only, never on the
      // wrapped TLS request, which is why we don't stamp it onto
      // options.headers here. If the user already supplied an HttpsProxyAgent,
      // they own tunneling end-to-end and we leave them alone; otherwise we
      // install our own tunneling agent and forward their TLS options (if any)
      // so a custom httpsAgent for cert pinning / rejectUnauthorized still
      // applies to the origin TLS upgrade.
      if (!(configHttpsAgent instanceof HttpsProxyAgent)) {
        const proxyHost = readProxyField('hostname') || readProxyField('host');
        const proxyPort = readProxyField('port');
        const rawProxyProtocol = readProxyField('protocol');
        const normalizedProtocol = rawProxyProtocol ? rawProxyProtocol.includes(':') ? rawProxyProtocol : `${rawProxyProtocol}:` : 'http:';
        // Bracket IPv6 literals for URL parsing; URL.hostname strips the
        // brackets again on read so the agent receives the raw form.
        const proxyHostForURL = proxyHost && proxyHost.includes(':') && !proxyHost.startsWith('[') ? `[${proxyHost}]` : proxyHost;
        const proxyURL = new URL(`${normalizedProtocol}//${proxyHostForURL}${proxyPort ? ':' + proxyPort : ''}`);
        const agentOptions = {
          protocol: proxyURL.protocol,
          hostname: proxyURL.hostname.replace(/^\[|\]$/g, ''),
          port: proxyURL.port,
          auth: proxyAuth && typeof proxyAuth === 'string' ? proxyAuth : undefined
        };
        if (proxyURL.protocol === 'https:') {
          agentOptions.ALPNProtocols = ['http/1.1'];
        }
        const tunnelingAgent = getTunnelingAgent(agentOptions, configHttpsAgent);
        // Set both: `options.agent` is consumed by the native https.request path
        // (maxRedirects === 0); `options.agents.https` is consumed by
        // follow-redirects, which ignores `options.agent` when `options.agents`
        // is present.
        options.agent = tunnelingAgent;
        if (options.agents) {
          options.agents.https = tunnelingAgent;
        }
      }
    } else {
      // Forward-proxy mode for plaintext HTTP targets. The request line carries
      // the absolute URL and the proxy sees everything — acceptable for plain
      // HTTP since the wire was already plaintext.
      if (proxyAuth) {
        const base64 = Buffer.from(proxyAuth, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }

      // Preserve a user-supplied Host header (case-insensitive) so callers can override
      // the value forwarded to the proxy; otherwise default to the request URL's host.
      let hasUserHostHeader = false;
      for (const name of Object.keys(options.headers)) {
        if (name.toLowerCase() === 'host') {
          hasUserHostHeader = true;
          break;
        }
      }
      if (!hasUserHostHeader) {
        options.headers.host = options.hostname + (options.port ? ':' + options.port : '');
      }
      const proxyHost = readProxyField('hostname') || readProxyField('host');
      options.hostname = proxyHost;
      // Replace 'host' since options is not a URL object
      options.host = proxyHost;
      options.port = readProxyField('port');
      options.path = location;
      const proxyProtocol = readProxyField('protocol');
      if (proxyProtocol) {
        options.protocol = proxyProtocol.includes(':') ? proxyProtocol : `${proxyProtocol}:`;
      }
    }
  }
  options.beforeRedirects.proxy = function beforeRedirect(redirectOptions) {
    // Configure proxy for redirected request, passing the original config proxy to apply
    // the exact same logic as if the redirected request was performed by axios directly.
    setProxy(redirectOptions, configProxy, redirectOptions.href, true, configHttpsAgent, configHttpAgent, allowEnvProxy);
  };
  return Boolean(proxy || configProxy !== false && allowEnvProxy && isNodeEnvProxyEnabled(proxyEnvAgent));
}
const isHttpAdapterSupported = typeof process !== 'undefined' && utils$1.kindOf(process) === 'process';

// temporary hotfix

const wrapAsync = asyncExecutor => {
  return new Promise((resolve, reject) => {
    let onDone;
    let isDone;
    const done = (value, isRejected) => {
      if (isDone) return;
      isDone = true;
      onDone && onDone(value, isRejected);
    };
    const _resolve = value => {
      done(value);
      resolve(value);
    };
    const _reject = reason => {
      done(reason, true);
      reject(reason);
    };
    asyncExecutor(_resolve, _reject, onDoneHandler => onDone = onDoneHandler).catch(_reject);
  });
};
const resolveFamily = ({
  address,
  family
}) => {
  if (!utils$1.isString(address)) {
    throw new AxiosError('address must be a string', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  return {
    address,
    family: family || (address.indexOf('.') < 0 ? 6 : 4)
  };
};
const buildAddressEntry = (address, family) => resolveFamily(utils$1.isObject(address) ? address : {
  address,
  family
});
const normalizedLookupCache = new WeakMap();
const normalizeLookup = lookup => {
  let normalized = normalizedLookupCache.get(lookup);
  if (normalized) {
    return normalized;
  }
  const callbackLookup = callbackify(lookup, value => utils$1.isArray(value) ? value : [value]);

  // Support opt.all, which is required by current Node.js releases.
  normalized = (hostname, opt, cb) => {
    callbackLookup(hostname, opt, (err, arg0, arg1) => {
      if (err) {
        return cb(err);
      }
      let addresses;
      try {
        addresses = utils$1.isArray(arg0) ? arg0.map(addr => buildAddressEntry(addr)) : [buildAddressEntry(arg0, arg1)];
      } catch (error) {
        return cb(error);
      }
      opt.all ? cb(err, addresses) : cb(err, addresses[0].address, addresses[0].family);
    });
  };
  normalizedLookupCache.set(lookup, normalized);
  return normalized;
};
const http2Transport = {
  request(options, cb) {
    const authority = options.protocol + '//' + options.hostname + ':' + (options.port || (options.protocol === 'https:' ? 443 : 80));
    const {
      http2Options,
      headers
    } = options;
    const session = http2Sessions.getSession(authority, http2Options);
    const {
      HTTP2_HEADER_SCHEME,
      HTTP2_HEADER_METHOD,
      HTTP2_HEADER_PATH,
      HTTP2_HEADER_STATUS
    } = http2.constants;
    const http2Headers = {
      [HTTP2_HEADER_SCHEME]: options.protocol.replace(':', ''),
      [HTTP2_HEADER_METHOD]: options.method,
      [HTTP2_HEADER_PATH]: options.path
    };
    utils$1.forEach(headers, (header, name) => {
      name.charAt(0) !== ':' && (http2Headers[name] = header);
    });
    const req = session.request(http2Headers);
    req.once('response', responseHeaders => {
      const response = req; //duplex

      responseHeaders = Object.assign({}, responseHeaders);
      const status = responseHeaders[HTTP2_HEADER_STATUS];
      delete responseHeaders[HTTP2_HEADER_STATUS];
      response.headers = responseHeaders;
      response.statusCode = +status;
      cb(response);
    });
    return req;
  }
};

/*eslint consistent-return:0*/
var httpAdapter = isHttpAdapterSupported && function httpAdapter(config) {
  return wrapAsync(async function dispatchHttpRequest(resolve, reject, onDone) {
    // Read config pollution-safely: own properties and members inherited from
    // a non-Object.prototype source (e.g. an Object.create(defaults) template)
    // are honored, but values injected onto a polluted Object.prototype are
    // ignored. All behavior-affecting reads in this adapter go through own()
    // so the protection boundary stays consistent.
    const own = key => utils$1.getSafeProp(config, key);
    const transitional = own('transitional') || transitionalDefaults;
    let data = own('data');
    let lookup = own('lookup');
    let family = own('family');
    let httpVersion = own('httpVersion');
    if (httpVersion === undefined) httpVersion = 1;
    const rawHttpVersion = httpVersion;
    let http2Options = own('http2Options');
    const httpAgent = own('httpAgent');
    const httpsAgent = own('httpsAgent');
    const configProxy = own('proxy');
    const responseType = own('responseType');
    const responseEncoding = own('responseEncoding');
    const socketPath = own('socketPath');
    const method = own('method').toUpperCase();
    const maxRedirects = own('maxRedirects');
    const maxBodyLength = own('maxBodyLength');
    const maxContentLength = own('maxContentLength');
    const decompress = own('decompress');
    let isDone;
    let rejected = false;
    let req;
    let connectPhaseTimer;
    try {
      httpVersion = +httpVersion;
    } catch (err) {
      throw new AxiosError('Invalid protocol version: value is not a number', AxiosError.ERR_BAD_OPTION_VALUE, config);
    }
    if (Number.isNaN(httpVersion)) {
      throw new AxiosError(`Invalid protocol version: '${rawHttpVersion}' is not a number`, AxiosError.ERR_BAD_OPTION_VALUE, config);
    }
    if (httpVersion !== 1 && httpVersion !== 2) {
      throw new AxiosError(`Unsupported protocol version '${httpVersion}'`, AxiosError.ERR_BAD_OPTION_VALUE, config);
    }
    const isHttp2 = httpVersion === 2;
    if (lookup) {
      lookup = normalizeLookup(lookup);
    }
    const abortEmitter = new events.EventEmitter();
    function abort(reason) {
      try {
        abortEmitter.emit('abort', !reason || reason.type ? new CanceledError(null, config, req) : reason);
      } catch (err) {
        // ignore emit errors
      }
    }
    function clearConnectPhaseTimer() {
      if (connectPhaseTimer) {
        clearTimeout(connectPhaseTimer);
        connectPhaseTimer = null;
      }
    }
    function createTimeoutError() {
      const configTimeout = own('timeout');
      let timeoutErrorMessage = configTimeout ? 'timeout of ' + configTimeout + 'ms exceeded' : 'timeout exceeded';
      const configTimeoutErrorMessage = own('timeoutErrorMessage');
      if (configTimeoutErrorMessage) {
        timeoutErrorMessage = configTimeoutErrorMessage;
      }
      return new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, req);
    }
    abortEmitter.once('abort', reject);
    const onFinished = () => {
      clearConnectPhaseTimer();
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(abort);
      }
      if (config.signal) {
        config.signal.removeEventListener('abort', abort);
      }
      abortEmitter.removeAllListeners();
    };
    if (config.cancelToken || config.signal) {
      config.cancelToken && config.cancelToken.subscribe(abort);
      if (config.signal) {
        config.signal.aborted ? abort() : config.signal.addEventListener('abort', abort);
      }
    }
    onDone((response, isRejected) => {
      isDone = true;
      clearConnectPhaseTimer();
      if (isRejected) {
        rejected = true;
        onFinished();
        return;
      }
      const {
        data
      } = response;
      if (data instanceof stream.Readable || data instanceof stream.Duplex) {
        const offListeners = stream.finished(data, () => {
          offListeners();
          onFinished();
        });
      } else {
        onFinished();
      }
    });

    // Parse url
    const fullPath = buildFullPath(own('baseURL'), own('url'), own('allowAbsoluteUrls'), config);
    // Unix-socket requests (own socketPath) commonly pass a path-only url
    // like '/foo'; supply a synthetic base so new URL() can still parse it.
    // Use the own-property value (not config.socketPath) so a polluted
    // prototype cannot influence URL base selection.
    const urlBase = socketPath ? 'http://localhost' : platform.hasBrowserEnv ? platform.origin : undefined;
    const parsed = new URL(fullPath, urlBase);
    const protocol = parsed.protocol || supportedProtocols[0];
    if (protocol === 'data:') {
      // Apply the same semantics as HTTP: only enforce if a finite, non-negative cap is set.
      if (maxContentLength > -1) {
        // Use the exact string passed to fromDataURI (the configured url); fall back to fullPath if needed.
        const dataUrl = String(own('url') || fullPath || '');
        const estimated = estimateDataURLBufferAllocation(dataUrl);
        if (estimated > maxContentLength) {
          return reject(new AxiosError('maxContentLength size of ' + maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config));
        }
      }
      let convertedData;
      if (method !== 'GET') {
        return settle(resolve, reject, {
          status: 405,
          statusText: 'method not allowed',
          headers: {},
          config
        });
      }
      try {
        convertedData = fromDataURI(own('url'), responseType === 'blob', {
          Blob: config.env && config.env.Blob
        });
      } catch (err) {
        throw AxiosError.from(err, AxiosError.ERR_BAD_REQUEST, config);
      }
      if (responseType === 'text') {
        convertedData = convertedData.toString(responseEncoding);
        if (!responseEncoding || responseEncoding === 'utf8') {
          convertedData = utils$1.stripBOM(convertedData);
        }
      } else if (responseType === 'stream') {
        convertedData = stream.Readable.from(convertedData);
      }
      return settle(resolve, reject, {
        data: convertedData,
        status: 200,
        statusText: 'OK',
        headers: new AxiosHeaders(),
        config
      });
    }
    if (supportedProtocols.indexOf(protocol) === -1) {
      return reject(new AxiosError('Unsupported protocol ' + protocol, AxiosError.ERR_BAD_REQUEST, config));
    }
    const headers = AxiosHeaders.from(config.headers).normalize();

    // Set User-Agent (required by some servers)
    // See https://github.com/axios/axios/issues/69
    // User-Agent is specified; handle case where no UA header is desired
    // Only set header if it hasn't been set in config
    headers.set('User-Agent', 'axios/' + VERSION, false);
    const {
      onUploadProgress,
      onDownloadProgress
    } = config;
    const maxRate = config.maxRate;
    let maxUploadRate = undefined;
    let maxDownloadRate = undefined;

    // support for spec compliant FormData objects
    if (utils$1.isSpecCompliantForm(data)) {
      const userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
      data = formDataToStream(data, formHeaders => {
        headers.set(formHeaders);
      }, {
        tag: `axios-${VERSION}-boundary`,
        boundary: userBoundary && userBoundary[1] || undefined
      });
      // support for https://www.npmjs.com/package/form-data api
    } else if (utils$1.isFormData(data) && utils$1.isFunction(data.getHeaders) && data.getHeaders !== Object.prototype.getHeaders) {
      setFormDataHeaders(headers, data.getHeaders(), own('formDataHeaderPolicy'));
      if (!headers.hasContentLength()) {
        try {
          const knownLength = await util.promisify(data.getLength).call(data);
          Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
          /*eslint no-empty:0*/
        } catch (e) {}
      }
    } else if (utils$1.isBlob(data) || utils$1.isFile(data)) {
      data.size && headers.setContentType(data.type || 'application/octet-stream');
      headers.setContentLength(data.size || 0);
      data = stream.Readable.from(readBlob(data));
    } else if (data && !utils$1.isStream(data)) {
      if (Buffer.isBuffer(data)) ; else if (utils$1.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils$1.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(new AxiosError('Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream', AxiosError.ERR_BAD_REQUEST, config));
      }

      // Add Content-Length header if data exists
      headers.setContentLength(data.length, false);
      if (maxBodyLength > -1 && data.length > maxBodyLength) {
        return reject(new AxiosError('Request body larger than maxBodyLength limit', AxiosError.ERR_BAD_REQUEST, config));
      }
    }
    const contentLength = utils$1.toFiniteNumber(headers.getContentLength());
    if (utils$1.isArray(maxRate)) {
      maxUploadRate = maxRate[0];
      maxDownloadRate = maxRate[1];
    } else {
      maxUploadRate = maxDownloadRate = maxRate;
    }
    if (data && (onUploadProgress || maxUploadRate)) {
      if (!utils$1.isStream(data)) {
        data = stream.Readable.from(data, {
          objectMode: false
        });
      }
      data = stream.pipeline([data, new AxiosTransformStream({
        maxRate: utils$1.toFiniteNumber(maxUploadRate)
      })], utils$1.noop);
      onUploadProgress && data.on('progress', flushOnFinish(data, progressEventDecorator(contentLength, progressEventReducer(asyncDecorator(onUploadProgress, scheduleProgress), false, 3))));
    }

    // HTTP basic authentication
    let auth = undefined;
    const configAuth = own('auth');
    if (configAuth) {
      const username = utils$1.getSafeProp(configAuth, 'username') || '';
      const password = utils$1.getSafeProp(configAuth, 'password') || '';
      auth = username + ':' + password;
    }
    if (!auth && (parsed.username || parsed.password)) {
      const urlUsername = decodeURIComponentSafe$1(parsed.username);
      const urlPassword = decodeURIComponentSafe$1(parsed.password);
      auth = urlUsername + ':' + urlPassword;
    }
    auth && headers.delete('authorization');
    let path$1;
    try {
      path$1 = buildURL(parsed.pathname + parsed.search, own('params'), own('paramsSerializer')).replace(/^\?/, '');
    } catch (err) {
      return reject(AxiosError.from(err, AxiosError.ERR_BAD_REQUEST, config, null, null, {
        url: own('url'),
        exists: true
      }));
    }
    headers.set('Accept-Encoding', utils$1.hasOwnProp(transitional, 'advertiseZstdAcceptEncoding') && transitional.advertiseZstdAcceptEncoding === true ? ACCEPT_ENCODING_WITH_ZSTD : ACCEPT_ENCODING, false);
    if (isHttp2 && lookup) {
      http2Options = Object.assign(Object.create(null), http2Options, {
        lookup
      });
    }

    // Null-prototype to block prototype pollution gadgets on properties read
    // directly by Node's http.request (e.g. insecureHTTPParser, lookup).
    const options = Object.assign(Object.create(null), {
      path: path$1,
      method: method,
      headers: toByteStringHeaderObject(headers),
      agents: {
        http: httpAgent,
        https: httpsAgent
      },
      auth,
      protocol,
      family,
      beforeRedirect: dispatchBeforeRedirect,
      beforeRedirects: Object.create(null),
      http2Options,
      createConnection: undefined
    });

    // cacheable-lookup integration hotfix
    !utils$1.isUndefined(lookup) && (options.lookup = lookup);
    let proxyApplied = false;
    if (socketPath) {
      if (typeof socketPath !== 'string') {
        return reject(new AxiosError('socketPath must be a string', AxiosError.ERR_BAD_OPTION_VALUE, config));
      }
      const allowedSocketPaths = own('allowedSocketPaths');
      if (allowedSocketPaths != null) {
        const allowed = Array.isArray(allowedSocketPaths) ? allowedSocketPaths : [allowedSocketPaths];
        const resolvedSocket = path.resolve(socketPath);
        const isAllowed = allowed.some(entry => typeof entry === 'string' && path.resolve(entry) === resolvedSocket);
        if (!isAllowed) {
          return reject(new AxiosError(`socketPath "${socketPath}" is not permitted by allowedSocketPaths`, AxiosError.ERR_BAD_OPTION_VALUE, config));
        }
      }
      options.socketPath = socketPath;
    } else {
      options.hostname = parsed.hostname.startsWith('[') ? parsed.hostname.slice(1, -1) : parsed.hostname;
      options.port = parsed.port;
      proxyApplied = setProxy(options, configProxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path, false, httpsAgent, httpAgent,
      // The HTTP/2 transport connects independently of HTTP/1 agents, so it
      // cannot apply either axios-resolved or agent-local environment proxies.
      // Explicit proxy config is still processed and rejected below.
      !isHttp2);
    }
    let transport;
    let isNativeTransport = false;
    // True only for the follow-redirects transport, which applies
    // options.maxBodyLength itself. Every other transport (http2, native
    // http/https, a user-supplied custom transport) needs the explicit
    // byte-counting pipeline below to enforce maxBodyLength on streamed uploads.
    let transportEnforcesMaxBodyLength = false;
    const isHttpsRequest = isHttps.test(options.protocol);
    // Don't clobber a CONNECT-tunneling agent installed by setProxy() for an
    // HTTPS target.
    if (options.agent == null) {
      options.agent = isHttpsRequest ? httpsAgent : httpAgent;
    }
    if (isHttp2) {
      if (proxyApplied) {
        return reject(new AxiosError('HTTP/2 requests with a proxy are not supported', AxiosError.ERR_NOT_SUPPORT, config));
      }
      transport = http2Transport;
    } else {
      const configTransport = own('transport');
      if (configTransport) {
        transport = configTransport;
      } else if (maxRedirects === 0) {
        transport = isHttpsRequest ? https : http;
        isNativeTransport = true;
      } else {
        transportEnforcesMaxBodyLength = true;
        options.sensitiveHeaders = [];
        if (maxRedirects) {
          options.maxRedirects = maxRedirects;
        }
        const configBeforeRedirect = own('beforeRedirect');
        if (configBeforeRedirect) {
          options.beforeRedirects.config = configBeforeRedirect;
        }
        if (auth) {
          // Restore HTTP Basic credentials on same-origin redirects only.
          // follow-redirects >= 1.15.8 strips Authorization on every redirect (see #6929);
          // cross-origin stripping is the documented mitigation for T-R2 in THREATMODEL.md
          // and is preserved by deliberately not restoring on origin change.
          const requestOrigin = parsed.origin;
          const authToRestore = auth;
          options.beforeRedirects.auth = function beforeRedirectAuth(redirectOptions) {
            try {
              if (new URL(redirectOptions.href).origin === requestOrigin) {
                redirectOptions.auth = authToRestore;
              }
            } catch (e) {
              // ignore malformed URL: leaving auth stripped is fail-safe
            }
          };
        }
        const sensitiveHeaders = own('sensitiveHeaders');
        if (sensitiveHeaders != null) {
          if (!utils$1.isArray(sensitiveHeaders)) {
            return reject(new AxiosError('sensitiveHeaders must be an array of strings', AxiosError.ERR_BAD_OPTION_VALUE, config));
          }
          const sensitiveSet = new Set();
          for (const header of sensitiveHeaders) {
            if (!utils$1.isString(header)) {
              return reject(new AxiosError('sensitiveHeaders must be an array of strings', AxiosError.ERR_BAD_OPTION_VALUE, config));
            }
            sensitiveSet.add(header.toLowerCase());
          }
          if (sensitiveSet.size) {
            options.sensitiveHeaders = Array.from(sensitiveSet);
            options.beforeRedirects.sensitiveHeaders = function beforeRedirectSensitiveHeaders(redirectOptions, requestDetails) {
              if (!isSameOriginRedirect(redirectOptions, requestDetails)) {
                stripMatchingHeaders(redirectOptions.headers, sensitiveSet);
              }
            };
          }
        }
        transport = isHttpsRequest ? httpsFollow : httpFollow;
      }
    }

    // Set an explicit maxBodyLength option for transports that inspect it.
    // When maxBodyLength is -1 (default/unlimited), use Infinity so
    // follow-redirects does not fall back to its own 10MB default.
    if (maxBodyLength > -1) {
      options.maxBodyLength = maxBodyLength;
    } else {
      options.maxBodyLength = Infinity;
    }

    // Always set an explicit own value so a polluted
    // Object.prototype.insecureHTTPParser cannot enable the lenient parser
    // through Node's internal options copy
    options.insecureHTTPParser = Boolean(own('insecureHTTPParser'));

    // Create the request
    req = transport.request(options, function handleResponse(res) {
      clearConnectPhaseTimer();
      if (req.destroyed) return;
      const streams = [res];
      const responseLength = utils$1.toFiniteNumber(res.headers['content-length']);
      if (onDownloadProgress || maxDownloadRate) {
        const transformStream = new AxiosTransformStream({
          maxRate: utils$1.toFiniteNumber(maxDownloadRate)
        });
        onDownloadProgress && transformStream.on('progress', flushOnFinish(transformStream, progressEventDecorator(responseLength, progressEventReducer(asyncDecorator(onDownloadProgress, scheduleProgress), true, 3))));
        streams.push(transformStream);
      }

      // decompress the response body transparently if required
      let responseStream = res;

      // return the last request in case of redirects
      const lastRequest = res.req || req;

      // if decompress disabled we should not decompress
      if (decompress !== false && res.headers['content-encoding']) {
        // if no content, but headers still say that it is encoded,
        // remove the header not confuse downstream operations
        if (method === 'HEAD' || res.statusCode === 204) {
          delete res.headers['content-encoding'];
        }
        switch ((res.headers['content-encoding'] || '').toLowerCase()) {
          /*eslint default-case:0*/
          case 'gzip':
          case 'x-gzip':
          case 'compress':
          case 'x-compress':
            // add the unzipper to the body stream processing pipeline
            streams.push(zlib.createUnzip(zlibOptions));

            // remove the content-encoding in order to not confuse downstream operations
            delete res.headers['content-encoding'];
            break;
          case 'deflate':
            streams.push(new ZlibHeaderTransformStream());

            // add the unzipper to the body stream processing pipeline
            streams.push(zlib.createUnzip(zlibOptions));

            // remove the content-encoding in order to not confuse downstream operations
            delete res.headers['content-encoding'];
            break;
          case 'br':
            if (isBrotliSupported) {
              streams.push(zlib.createBrotliDecompress(brotliOptions));
              delete res.headers['content-encoding'];
            }
            break;
          case 'zstd':
            if (isZstdSupported) {
              streams.push(zlib.createZstdDecompress(zstdOptions));
              delete res.headers['content-encoding'];
            }
            break;
        }
      }
      responseStream = streams.length > 1 ? stream.pipeline(streams, utils$1.noop) : streams[0];
      const response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: new AxiosHeaders(res.headers),
        config,
        request: lastRequest
      };
      if (responseType === 'stream') {
        // Enforce maxContentLength on streamed responses; previously this
        // was applied only to buffered responses.
        if (maxContentLength > -1) {
          const limit = maxContentLength;
          const source = responseStream;
          async function* enforceMaxContentLength() {
            let totalResponseBytes = 0;
            for await (const chunk of source) {
              totalResponseBytes += chunk.length;
              if (totalResponseBytes > limit) {
                throw new AxiosError('maxContentLength size of ' + limit + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, lastRequest);
              }
              yield chunk;
            }
          }
          responseStream = stream.Readable.from(enforceMaxContentLength(), {
            objectMode: false
          });
        }
        response.data = responseStream;
        settle(resolve, reject, response);
      } else {
        const responseBuffer = [];
        let totalResponseBytes = 0;
        responseStream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;

          // make sure the content length is not over the maxContentLength if specified
          if (maxContentLength > -1 && totalResponseBytes > maxContentLength) {
            // stream.destroy() emit aborted event before calling reject() on Node.js v16
            rejected = true;
            responseStream.destroy();
            abort(new AxiosError('maxContentLength size of ' + maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
          }
        });
        responseStream.on('aborted', function handlerStreamAborted() {
          if (rejected) {
            return;
          }
          const err = new AxiosError('stream has been aborted', AxiosError.ERR_BAD_RESPONSE, config, lastRequest, response);
          responseStream.destroy(err);
          reject(err);
        });
        responseStream.on('error', function handleStreamError(err) {
          if (rejected) return;
          reject(AxiosError.from(err, null, config, lastRequest, response));
        });
        responseStream.on('end', function handleStreamEnd() {
          try {
            let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            if (responseType !== 'arraybuffer') {
              responseData = responseData.toString(responseEncoding);
              if (!responseEncoding || responseEncoding === 'utf8') {
                responseData = utils$1.stripBOM(responseData);
              }
            }
            response.data = responseData;
          } catch (err) {
            return reject(AxiosError.from(err, null, config, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }
      abortEmitter.once('abort', err => {
        if (!responseStream.destroyed) {
          responseStream.emit('error', err);
          responseStream.destroy();
        }
      });
    });
    abortEmitter.once('abort', err => {
      if (req.close) {
        req.close();
      } else {
        req.destroy(err);
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      reject(AxiosError.from(err, null, config, req));
    });

    // set tcp keep alive to prevent drop connection by peer
    // Track every socket bound to this outer RedirectableRequest so a single
    // 'close' listener can release ownership on all of them. follow-redirects
    // re-emits the 'socket' event for each hop's native request onto the same
    // outer request, so attaching per-request listeners inside this handler
    // would accumulate across hops and trigger MaxListenersExceededWarning at
    // >= 11 redirects. Clearing only the last-bound socket would leave stale
    // kAxiosCurrentReq refs on earlier hop sockets returned to the keep-alive
    // pool, causing an idle-pool 'error' to be attributed to a closed req.
    const boundSockets = new Set();
    req.on('socket', function handleRequestSocket(socket) {
      // default interval of sending ack packet is 1 minute
      // proxy agents (e.g. agent-base) may return a generic Duplex stream
      // that doesn't have setKeepAlive, so guard before calling
      if (typeof socket.setKeepAlive === 'function') {
        socket.setKeepAlive(true, 1000 * 60);
      }

      // Install one shared 'error' listener per socket. The symbol follows the
      // currently-active request as pooled sockets are reassigned (issue #10780).
      if (!socket[kAxiosSocketListener]) {
        socket.on('error', handleSocketError);
        socket[kAxiosSocketListener] = true;
      }
      socket[kAxiosCurrentReq] = req;
      boundSockets.add(socket);
    });
    req.once('close', function clearCurrentReq() {
      clearConnectPhaseTimer();
      for (const socket of boundSockets) {
        if (socket[kAxiosCurrentReq] === req) {
          socket[kAxiosCurrentReq] = null;
        }
      }
      boundSockets.clear();
    });

    // Handle request timeout
    if (own('timeout')) {
      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
      const timeout = parseInt(own('timeout'), 10);
      if (Number.isNaN(timeout)) {
        abort(new AxiosError('error trying to parse `config.timeout` to int', AxiosError.ERR_BAD_OPTION_VALUE, config, req));
        return;
      }
      const handleTimeout = function handleTimeout() {
        if (isDone) return;
        abort(createTimeoutError());
      };
      if (isNativeTransport && timeout > 0) {
        // Native ClientRequest#setTimeout starts from the socket lifecycle and
        // may not fire while TCP connect is still pending. Mirror the
        // follow-redirects wall-clock timer for the maxRedirects === 0 path.
        connectPhaseTimer = setTimeout(handleTimeout, timeout);
      }

      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devouring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(timeout, handleTimeout);
    } else {
      // explicitly reset the socket timeout value for a possible `keep-alive` request
      req.setTimeout(0);
    }

    // Send the request
    if (utils$1.isStream(data)) {
      let ended = false;
      let errored = false;
      data.on('end', () => {
        ended = true;
      });
      data.once('error', err => {
        errored = true;
        req.destroy(err);
      });
      data.on('close', () => {
        if (!ended && !errored) {
          abort(new CanceledError('Request stream has been aborted', config, req));
        }
      });

      // Enforce maxBodyLength for streamed uploads on every transport that
      // does not apply options.maxBodyLength itself (native http/https, http2,
      // and user-supplied custom transports). The follow-redirects transport
      // enforces it on the redirected HTTP/1 path.
      let uploadStream = data;
      if (maxBodyLength > -1 && !transportEnforcesMaxBodyLength) {
        const limit = maxBodyLength;
        let bytesSent = 0;
        uploadStream = stream.pipeline([data, new stream.Transform({
          transform(chunk, _enc, cb) {
            bytesSent += chunk.length;
            if (bytesSent > limit) {
              return cb(new AxiosError('Request body larger than maxBodyLength limit', AxiosError.ERR_BAD_REQUEST, config, req));
            }
            cb(null, chunk);
          }
        })], utils$1.noop);
        uploadStream.on('error', err => {
          if (!req.destroyed) req.destroy(err);
        });
      }
      uploadStream.pipe(req);
    } else {
      data && req.write(data);
      req.end();
    }
  });
};

var isURLSameOrigin = platform.hasStandardBrowserEnv ? ((origin, isMSIE) => url => {
  url = new URL(url, platform.origin);
  return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
})(new URL(platform.origin), platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)) : () => true;

var cookies = platform.hasStandardBrowserEnv ?
// Standard browser envs support document.cookie
{
  write(name, value, expires, path, domain, secure, sameSite) {
    if (typeof document === 'undefined') return;
    const cookie = [`${name}=${encodeURIComponent(value)}`];
    if (utils$1.isNumber(expires)) {
      cookie.push(`expires=${new Date(expires).toUTCString()}`);
    }
    if (utils$1.isString(path)) {
      cookie.push(`path=${path}`);
    }
    if (utils$1.isString(domain)) {
      cookie.push(`domain=${domain}`);
    }
    if (secure === true) {
      cookie.push('secure');
    }
    if (utils$1.isString(sameSite)) {
      cookie.push(`SameSite=${sameSite}`);
    }
    document.cookie = cookie.join('; ');
  },
  read(name) {
    if (typeof document === 'undefined') return null;
    // Match name=value by splitting on the semicolon separator instead of building a
    // RegExp from `name` — interpolating an unescaped string into a RegExp would let
    // metacharacters (e.g. `.+?` in an attacker-influenced cookie name) cause ReDoS or
    // match the wrong cookie. Browsers may serialize cookie pairs as either ";" or
    // "; ", so ignore optional whitespace before each cookie name.
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].replace(/^\s+/, '');
      const eq = cookie.indexOf('=');
      if (eq !== -1 && cookie.slice(0, eq) === name) {
        try {
          return decodeURIComponent(cookie.slice(eq + 1));
        } catch (e) {
          return cookie.slice(eq + 1);
        }
      }
    }
    return null;
  },
  remove(name) {
    this.write(name, '', Date.now() - 86400000, '/');
  }
} :
// Non-standard browser env (web workers, react-native) lack needed support.
{
  write() {},
  read() {
    return null;
  },
  remove() {}
};

const headersToObject = thing => thing instanceof AxiosHeaders ? {
  ...thing
} : thing;
const ownEnumerableKeys = thing => {
  if (Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor) {
    return Object.keys(thing).concat(Object.getOwnPropertySymbols(thing).filter(symbol => Object.getOwnPropertyDescriptor(thing, symbol).enumerable));
  }
  return Object.keys(thing);
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config1 = config1 || {};
  config2 = config2 || {};

  // Use a null-prototype object so that downstream reads such as `config.auth`
  // or `config.baseURL` cannot inherit polluted values from Object.prototype.
  // `hasOwnProperty` is restored as a non-enumerable own slot to preserve
  // ergonomics for user code that relies on it.
  const config = Object.create(null);
  Object.defineProperty(config, 'hasOwnProperty', {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: false,
    writable: true,
    configurable: true
  });
  function getMergedValue(target, source, prop, caseless) {
    if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
      return utils$1.merge.call({
        caseless
      }, target, source);
    } else if (utils$1.isPlainObject(source)) {
      return utils$1.merge({}, source);
    } else if (utils$1.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, prop, caseless) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(a, b, prop, caseless);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a, prop, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils$1.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils$1.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }
  function getMergedTransitionalOption(prop) {
    const transitional2 = utils$1.hasOwnProp(config2, 'transitional') ? config2.transitional : undefined;
    if (!utils$1.isUndefined(transitional2)) {
      if (utils$1.isPlainObject(transitional2)) {
        if (utils$1.hasOwnProp(transitional2, prop)) {
          return transitional2[prop];
        }
      } else {
        return undefined;
      }
    }
    const transitional1 = utils$1.hasOwnProp(config1, 'transitional') ? config1.transitional : undefined;
    if (utils$1.isPlainObject(transitional1) && utils$1.hasOwnProp(transitional1, prop)) {
      return transitional1[prop];
    }
    return undefined;
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (utils$1.hasOwnProp(config2, prop)) {
      return getMergedValue(a, b);
    } else if (utils$1.hasOwnProp(config1, prop)) {
      return getMergedValue(undefined, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutErrorMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    allowedSocketPaths: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
  };
  utils$1.forEach(ownEnumerableKeys({
    ...config1,
    ...config2
  }), function computeConfigValue(prop) {
    if (prop === '__proto__' || prop === 'constructor' || prop === 'prototype') return;
    const merge = utils$1.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
    const a = utils$1.hasOwnProp(config1, prop) ? config1[prop] : undefined;
    const b = utils$1.hasOwnProp(config2, prop) ? config2[prop] : undefined;
    const configValue = merge(a, b, prop);
    utils$1.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
  });
  if (utils$1.hasOwnProp(config2, 'validateStatus') && utils$1.isUndefined(config2.validateStatus) && getMergedTransitionalOption('validateStatusUndefinedResolves') === false) {
    if (utils$1.hasOwnProp(config1, 'validateStatus')) {
      config.validateStatus = getMergedValue(undefined, config1.validateStatus);
    } else {
      delete config.validateStatus;
    }
  }
  return config;
}

/**
 * Encode a UTF-8 string to a Latin-1 byte string for use with btoa().
 * This is a modern replacement for the deprecated unescape(encodeURIComponent(str)) pattern.
 *
 * @param {string} str The string to encode
 *
 * @returns {string} UTF-8 bytes as a Latin-1 string
 */
const encodeUTF8$1 = str => encodeURIComponent(str).replace(/%([0-9A-F]{2})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
function resolveConfig(config) {
  const newConfig = mergeConfig({}, config);

  // Read only own properties to prevent prototype pollution gadgets
  // (e.g. Object.prototype.baseURL = 'https://evil.com').
  const own = key => utils$1.hasOwnProp(newConfig, key) ? newConfig[key] : undefined;
  const data = own('data');
  let withXSRFToken = own('withXSRFToken');
  const xsrfHeaderName = own('xsrfHeaderName');
  const xsrfCookieName = own('xsrfCookieName');
  let headers = own('headers');
  const auth = own('auth');
  const baseURL = own('baseURL');
  const allowAbsoluteUrls = own('allowAbsoluteUrls');
  const url = own('url');
  newConfig.headers = headers = AxiosHeaders.from(headers);
  newConfig.url = buildURL(buildFullPath(baseURL, url, allowAbsoluteUrls, newConfig), own('params'), own('paramsSerializer'));

  // HTTP basic authentication
  if (auth) {
    const username = utils$1.getSafeProp(auth, 'username') || '';
    const password = utils$1.getSafeProp(auth, 'password') || '';
    try {
      headers.set('Authorization', 'Basic ' + btoa(username + ':' + (password ? encodeUTF8$1(password) : '')));
    } catch (e) {
      throw AxiosError.from(e, AxiosError.ERR_BAD_OPTION_VALUE, config);
    }
  }
  if (utils$1.isFormData(data)) {
    const getHeaders = utils$1.getSafeProp(data, 'getHeaders');
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv || utils$1.isReactNative(data)) {
      headers.setContentType(undefined); // browser/web worker/RN handles it
    } else if (utils$1.isFunction(getHeaders)) {
      // Node.js FormData (like form-data package)
      setFormDataHeaders(headers, getHeaders.call(data), own('formDataHeaderPolicy'));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    if (utils$1.isFunction(withXSRFToken)) {
      withXSRFToken = withXSRFToken(newConfig);
    }

    // Strict boolean check — prevents proto-pollution gadgets (e.g. Object.prototype.withXSRFToken = 1)
    // and misconfigurations (e.g. "false") from short-circuiting the same-origin check and leaking
    // the XSRF token cross-origin.
    const shouldSendXSRF = withXSRFToken === true || withXSRFToken == null && isURLSameOrigin(newConfig.url);
    if (shouldSendXSRF) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';
var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders.from(_config.headers).normalize();
    let {
      responseType,
      onUploadProgress,
      onDownloadProgress
    } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload, flushDownloadWithEvent;
    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;
    function onloadend(event) {
      if (!request) {
        return;
      }

      // Status 0 means no response was received, which onerror and onabort normally
      // reject before this runs. Firefox 152 fires only readystatechange and loadend for
      // navigation-canceled requests (https://bugzilla.mozilla.org/show_bug.cgi?id=1505389),
      // leaving settle() to resolve them as an empty success. ECONNABORTED is the error
      // onabort raised on Firefox 151. Reads over file:, which some environments report as
      // status 0 on success, are excluded by the request URL's scheme after browser-style
      // preprocessing, by the page origin's scheme for relative URLs (which inherit it), or
      // by responseURL where implemented.
      if (request.status === 0 && (parseProtocol(normalizeURLForProtocolCheck(_config.url)) || parseProtocol(platform.origin)) !== 'file' && !(request.responseURL && request.responseURL.startsWith('file:'))) {
        reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));
        done();

        // Clean up request
        request = null;
        return;
      }

      // When loadend is still dispatching, flushing with it gives progress
      // listeners a final delivery whose event has a live target. The legacy
      // ready-state fallback has no event, so replay its pending progress.
      // A throwing listener must not block settlement; rethrow asynchronously,
      // matching how listener errors surface on the throttle timer path.
      try {
        if (event) {
          flushDownloadWithEvent && flushDownloadWithEvent(event);
        } else {
          flushDownload && flushDownload();
        }
      } catch (err) {
        setTimeout(() => {
          throw err;
        });
      }

      // A final progress callback can cancel the request synchronously.
      if (!request) {
        return;
      }

      // Prepare the response
      const responseHeaders = AxiosHeaders.from('getAllResponseHeaders' in request && request.getAllResponseHeaders());
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }
    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.startsWith('file:'))) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));
      done();

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError(event) {
      // Browsers deliver a ProgressEvent in XHR onerror
      // (message may be empty; when present, surface it)
      // See https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/error_event
      const msg = event && event.message ? event.message : 'Network Error';
      const err = new AxiosError(msg, AxiosError.ERR_NETWORK, config, request);
      // attach the underlying event for consumers who want details
      err.event = event || null;
      reject(err);
      done();
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));
      done();

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils$1.forEach(toByteStringHeaderObject(requestHeaders), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils$1.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload, flushDownloadWithEvent] = progressEventReducer(onDownloadProgress, true);
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request.upload.addEventListener('progress', uploadThrottled);
      request.upload.addEventListener('loadend', flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        done();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && !platform.protocols.includes(protocol)) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      done();
      return;
    }

    // Send the request
    request.send(requestData || null);
  });
};

const composeSignals = (signals, timeout) => {
  signals = signals ? signals.filter(Boolean) : [];
  if (!timeout && !signals.length) {
    return;
  }
  const controller = new AbortController();
  let aborted = false;
  const onabort = function (reason) {
    if (!aborted) {
      aborted = true;
      unsubscribe();
      const err = reason instanceof Error ? reason : this.reason;
      controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
    }
  };
  let timer = timeout && setTimeout(() => {
    timer = null;
    onabort(new AxiosError(`timeout of ${timeout}ms exceeded`, AxiosError.ETIMEDOUT));
  }, timeout);
  const unsubscribe = () => {
    if (!signals) {
      return;
    }
    timer && clearTimeout(timer);
    timer = null;
    signals.forEach(signal => {
      signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
    });
    signals = null;
  };
  signals.forEach(signal => {
    if (aborted) {
      return;
    }
    if (signal.aborted) {
      onabort.call(signal);
      return;
    }
    signal.addEventListener('abort', onabort, {
      once: true
    });
  });
  const {
    signal
  } = controller;
  signal.unsubscribe = () => utils$1.asap(unsubscribe);
  return signal;
};

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (;;) {
      const {
        done,
        value
      } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = e => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream({
    async pull(controller) {
      try {
        const {
          done,
          value
        } = await iterator.next();
        if (done) {
          _onFinish();
          controller.close();
          return;
        }
        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  });
};

const DEFAULT_CHUNK_SIZE = 64 * 1024;
const DEFAULT_REQUEST_OPTIONS = {
  cache: 'default',
  redirect: 'follow',
  referrer: 'about:client',
  referrerPolicy: '',
  mode: 'cors',
  integrity: '',
  keepalive: false,
  priority: 'auto',
  window: null
};
const {
  isFunction
} = utils$1;

/**
 * Encode a UTF-8 string to a Latin-1 byte string for use with btoa().
 * This is a modern replacement for the deprecated unescape(encodeURIComponent(str)) pattern.
 *
 * @param {string} str The string to encode
 *
 * @returns {string} UTF-8 bytes as a Latin-1 string
 */
const encodeUTF8 = str => encodeURIComponent(str).replace(/%([0-9A-F]{2})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));

// Node's WHATWG URL parser returns `username` and `password` percent-encoded.
// Decode before composing the `auth` option so credentials such as
// `my%40email.com:pass` are sent as `my@email.com:pass`. Falls back to the
// original value for malformed input so a bad encoding never throws.
const decodeURIComponentSafe = value => {
  if (!utils$1.isString(value)) {
    return value;
  }
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
};
const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
const maybeWithAuthCredentials = url => {
  const protocolIndex = url.indexOf('://');
  let urlToCheck = url;
  if (protocolIndex !== -1) {
    urlToCheck = urlToCheck.slice(protocolIndex + 3);
  }
  return urlToCheck.includes('@') || urlToCheck.includes(':');
};
const factory = env => {
  const globalObject = utils$1.global !== undefined && utils$1.global !== null ? utils$1.global : globalThis;
  const {
    ReadableStream,
    TextEncoder
  } = globalObject;
  env = utils$1.merge.call({
    skipUndefined: true
  }, {
    Request: globalObject.Request,
    Response: globalObject.Response
  }, env);
  const {
    fetch: envFetch,
    Request,
    Response
  } = env;
  const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === 'function';
  const isRequestSupported = isFunction(Request);
  const isResponseSupported = isFunction(Response);
  if (!isFetchSupported) {
    return false;
  }
  const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream);
  const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ? (encoder => str => encoder.encode(str))(new TextEncoder()) : async str => new Uint8Array(await new Request(str).arrayBuffer()));
  const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
    let duplexAccessed = false;
    const request = new Request(platform.origin, {
      body: new ReadableStream(),
      method: 'POST',
      get duplex() {
        duplexAccessed = true;
        return 'half';
      }
    });
    const hasContentType = request.headers.has('Content-Type');
    if (request.body != null) {
      request.body.cancel();
    }
    return duplexAccessed && !hasContentType;
  });
  const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response('').body));
  const resolvers = {
    stream: supportsResponseStream && (res => res.body)
  };
  isFetchSupported && (() => {
    ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
      !resolvers[type] && (resolvers[type] = (res, config) => {
        let method = res && res[type];
        if (method) {
          return method.call(res);
        }
        throw new AxiosError(`Response type '${type}' is not supported`, AxiosError.ERR_NOT_SUPPORT, config);
      });
    });
  })();
  const getBodyLength = async body => {
    if (body == null) {
      return 0;
    }
    if (utils$1.isBlob(body)) {
      return body.size;
    }
    if (utils$1.isSpecCompliantForm(body)) {
      const _request = new Request(platform.origin, {
        method: 'POST',
        body
      });
      return (await _request.arrayBuffer()).byteLength;
    }
    if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) {
      return body.byteLength;
    }
    if (utils$1.isURLSearchParams(body)) {
      body = body + '';
    }
    if (utils$1.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };
  const resolveBodyLength = async (headers, body) => {
    const length = utils$1.toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
  };
  return async config => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = 'same-origin',
      fetchOptions,
      maxContentLength,
      maxBodyLength,
      maxRedirects
    } = resolveConfig(config);
    const hasMaxContentLength = utils$1.isNumber(maxContentLength) && maxContentLength > -1;
    const hasMaxBodyLength = utils$1.isNumber(maxBodyLength) && maxBodyLength > -1;
    const own = key => utils$1.hasOwnProp(config, key) ? config[key] : undefined;
    let _fetch = envFetch || fetch;
    responseType = responseType ? (responseType + '').toLowerCase() : 'text';
    let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
    let request = null;
    const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
    });
    let requestContentLength;

    // AxiosError we raise while the request body is being streamed. Captured
    // by identity so the catch block can surface it directly, regardless of
    // how the runtime wraps the resulting fetch rejection (undici exposes it
    // as `err.cause`; some browsers drop the original error entirely).
    let pendingBodyError = null;
    const maxBodyLengthError = () => new AxiosError('Request body larger than maxBodyLength limit', AxiosError.ERR_BAD_REQUEST, config, request);
    try {
      // HTTP basic authentication
      let auth = undefined;
      const configAuth = own('auth');
      if (configAuth) {
        const username = utils$1.getSafeProp(configAuth, 'username') || '';
        const password = utils$1.getSafeProp(configAuth, 'password') || '';
        auth = {
          username,
          password
        };
      }
      if (maybeWithAuthCredentials(url)) {
        const parsedURL = new URL(url, platform.origin);
        if (!auth && (parsedURL.username || parsedURL.password)) {
          const urlUsername = decodeURIComponentSafe(parsedURL.username);
          const urlPassword = decodeURIComponentSafe(parsedURL.password);
          auth = {
            username: urlUsername,
            password: urlPassword
          };
        }
        if (parsedURL.username || parsedURL.password) {
          parsedURL.username = '';
          parsedURL.password = '';
          url = parsedURL.href;
        }
      }
      if (auth) {
        headers.delete('authorization');
        headers.set('Authorization', 'Basic ' + btoa(encodeUTF8((auth.username || '') + ':' + (auth.password || ''))));
      }

      // Enforce maxContentLength for data: URLs up-front so we never materialize
      // an oversized payload. The HTTP adapter applies the same check (see http.js
      // "if (protocol === 'data:')" branch).
      if (hasMaxContentLength && typeof url === 'string' && url.startsWith('data:')) {
        const estimated = estimateDataURLDecodedBytes(url);
        if (estimated > maxContentLength) {
          throw new AxiosError('maxContentLength size of ' + maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, request);
        }
      }

      // Enforce maxBodyLength against known-size bodies before dispatch using
      // the body's *actual* size — never a caller-declared Content-Length,
      // which could under-report to slip an oversized body past the check.
      // Unknown-size streams return undefined here and are counted per-chunk
      // below as fetch consumes them.
      if (hasMaxBodyLength && method !== 'get' && method !== 'head') {
        const outboundLength = await getBodyLength(data);
        if (typeof outboundLength === 'number' && isFinite(outboundLength)) {
          requestContentLength = outboundLength;
          if (outboundLength > maxBodyLength) {
            throw maxBodyLengthError();
          }
        }
      }

      // A streamed body under maxBodyLength must be counted as fetch consumes
      // it; its size is never trusted from a caller-declared Content-Length.
      const mustEnforceStreamBody = hasMaxBodyLength && (utils$1.isReadableStream(data) || utils$1.isStream(data));
      const trackRequestStream = (stream, onProgress, flush) => trackStream(stream, DEFAULT_CHUNK_SIZE, loadedBytes => {
        if (hasMaxBodyLength && loadedBytes > maxBodyLength) {
          throw pendingBodyError = maxBodyLengthError();
        }
        onProgress && onProgress(loadedBytes);
      }, flush);
      if (supportsRequestStream && method !== 'get' && method !== 'head' && (onUploadProgress || mustEnforceStreamBody)) {
        requestContentLength = requestContentLength == null ? await resolveBodyLength(headers, data) : requestContentLength;

        // A declared length of 0 is only trusted to skip the wrap when we are
        // not enforcing a stream limit (which must not rely on that header).
        if (requestContentLength !== 0 || mustEnforceStreamBody) {
          let _request = new Request(url, {
            method: 'POST',
            body: data,
            duplex: 'half'
          });
          let contentTypeHeader;
          if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
            headers.setContentType(contentTypeHeader);
          }
          if (_request.body) {
            const [onProgress, flush] = onUploadProgress && progressEventDecorator(requestContentLength, progressEventReducer(asyncDecorator(onUploadProgress))) || [];
            data = trackRequestStream(_request.body, onProgress, flush);
          }
        }
      } else if (mustEnforceStreamBody && !isRequestSupported && isReadableStreamSupported && method !== 'get' && method !== 'head') {
        data = trackRequestStream(data);
      } else if (mustEnforceStreamBody && isRequestSupported && !supportsRequestStream && method !== 'get' && method !== 'head') {
        throw new AxiosError('Stream request bodies are not supported by the current fetch implementation', AxiosError.ERR_NOT_SUPPORT, config, request);
      }
      if (!utils$1.isString(withCredentials)) {
        withCredentials = withCredentials ? 'include' : 'omit';
      }

      // Cloudflare Workers throws when credentials are defined
      // see https://github.com/cloudflare/workerd/issues/902
      const isCredentialsSupported = isRequestSupported && 'credentials' in Request.prototype;

      // If data is FormData and Content-Type is multipart/form-data without boundary,
      // delete it so fetch can set it correctly with the boundary
      if (utils$1.isFormData(data)) {
        const contentType = headers.getContentType();
        if (contentType && /^multipart\/form-data/i.test(contentType) && !/boundary=/i.test(contentType)) {
          headers.delete('content-type');
        }
      }

      // Set User-Agent header if not already set (fetch defaults to 'node' in Node.js)
      headers.set('User-Agent', 'axios/' + VERSION, false);
      const safeFetchOptions = fetchOptions == null ? fetchOptions : Object.assign(Object.create(null), fetchOptions);
      if (safeFetchOptions) {
        // These options are owned by Axios and are already reflected in the
        // resolved Request passed to fetch.
        delete safeFetchOptions.body;
        delete safeFetchOptions.headers;
        delete safeFetchOptions.method;
        delete safeFetchOptions.signal;
        delete safeFetchOptions.duplex;
        delete safeFetchOptions.credentials;
      }
      const resolvedOptions = Object.assign(Object.create(null), safeFetchOptions, {
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: toByteStringHeaderObject(headers.normalize()),
        body: data,
        duplex: 'half',
        credentials: isCredentialsSupported ? withCredentials : undefined
      });
      if (isRequestSupported) {
        utils$1.forEach(DEFAULT_REQUEST_OPTIONS, (value, key) => {
          if (resolvedOptions[key] === undefined) {
            resolvedOptions[key] = value;
          }
        });
        if (resolvedOptions.signal === undefined) {
          resolvedOptions.signal = null;
        }
        if (resolvedOptions.body === undefined) {
          resolvedOptions.body = null;
        }
      }
      if (maxRedirects === 0) {
        resolvedOptions.redirect = 'manual';
        if (safeFetchOptions) {
          safeFetchOptions.redirect = 'manual';
        }
      }
      request = isRequestSupported && new Request(url, resolvedOptions);
      let response = await (isRequestSupported ? _fetch(request, safeFetchOptions) : _fetch(url, resolvedOptions));
      const responseHeaders = AxiosHeaders.from(response.headers);

      // Cheap pre-check: if the server honestly declares a content-length that
      // already exceeds the cap, reject before we start streaming.
      if (hasMaxContentLength) {
        const declaredLength = utils$1.toFiniteNumber(responseHeaders.getContentLength());
        if (declaredLength != null && declaredLength > maxContentLength) {
          throw new AxiosError('maxContentLength size of ' + maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, request);
        }
      }
      const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');
      if (supportsResponseStream && response.body && (onDownloadProgress || hasMaxContentLength || isStreamResponse && unsubscribe)) {
        const options = {};
        ['status', 'statusText', 'headers'].forEach(prop => {
          options[prop] = response[prop];
        });
        const responseContentLength = utils$1.toFiniteNumber(responseHeaders.getContentLength());
        const [onProgress, flush] = onDownloadProgress && progressEventDecorator(responseContentLength, progressEventReducer(asyncDecorator(onDownloadProgress), true)) || [];
        let bytesRead = 0;
        const onChunkProgress = loadedBytes => {
          if (hasMaxContentLength) {
            bytesRead = loadedBytes;
            if (bytesRead > maxContentLength) {
              throw new AxiosError('maxContentLength size of ' + maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, request);
            }
          }
          onProgress && onProgress(loadedBytes);
        };
        response = new Response(trackStream(response.body, DEFAULT_CHUNK_SIZE, onChunkProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }), options);
      }
      responseType = responseType || 'text';
      let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || 'text'](response, config);

      // Fallback enforcement for environments without ReadableStream support
      // (legacy runtimes). Detect materialized size from typed output; skip
      // streams/Response passthrough since the user will read those themselves.
      if (hasMaxContentLength && !supportsResponseStream && !isStreamResponse) {
        let materializedSize;
        if (responseData != null) {
          if (typeof responseData.byteLength === 'number') {
            materializedSize = responseData.byteLength;
          } else if (typeof responseData.size === 'number') {
            materializedSize = responseData.size;
          } else if (typeof responseData === 'string') {
            materializedSize = typeof TextEncoder === 'function' ? new TextEncoder().encode(responseData).byteLength : responseData.length;
          }
        }
        if (typeof materializedSize === 'number' && materializedSize > maxContentLength) {
          throw new AxiosError('maxContentLength size of ' + maxContentLength + ' exceeded', AxiosError.ERR_BAD_RESPONSE, config, request);
        }
      }
      !isStreamResponse && unsubscribe && unsubscribe();
      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config,
          request
        });
      });
    } catch (err) {
      unsubscribe && unsubscribe();

      // Safari can surface fetch aborts as a DOMException-like object whose
      // branded getters throw. Prefer our composed signal reason before reading
      // the caught error, preserving timeout vs cancellation semantics.
      if (composedSignal && composedSignal.aborted && composedSignal.reason instanceof AxiosError) {
        const canceledError = composedSignal.reason;
        canceledError.config = config;
        request && (canceledError.request = request);
        if (err !== canceledError) {
          // Non-enumerable to match native Error `cause` semantics so loggers
          // don't recurse into circular fetch internals (see #7205).
          Object.defineProperty(canceledError, 'cause', {
            __proto__: null,
            value: err,
            writable: true,
            enumerable: false,
            configurable: true
          });
        }
        throw canceledError;
      }

      // Surface a maxBodyLength violation we raised while the request body was
      // being streamed. Matching by identity (rather than reading
      // `err.cause.isAxiosError`) keeps the error deterministic across runtimes
      // and avoids both prototype-pollution reads and mis-attributing a foreign
      // AxiosError that merely happened to land in `err.cause`.
      if (pendingBodyError) {
        request && !pendingBodyError.request && (pendingBodyError.request = request);
        throw pendingBodyError;
      }

      // Re-throw AxiosErrors we raised synchronously (data: URL / content-length
      // pre-checks, response size enforcement) without re-wrapping them.
      if (err instanceof AxiosError) {
        request && !err.request && (err.request = request);
        throw err;
      }
      if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
        const networkError = new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, err && err.response);
        // Non-enumerable to match native Error `cause` semantics so loggers
        // don't recurse into circular fetch internals (see #7205).
        Object.defineProperty(networkError, 'cause', {
          __proto__: null,
          value: err.cause || err,
          writable: true,
          enumerable: false,
          configurable: true
        });
        throw networkError;
      }
      throw AxiosError.from(err, err && err.code, config, request, err && err.response);
    }
  };
};
const seedCache = new Map();
const getFetch = config => {
  let env = config && config.env || {};
  const {
    fetch,
    Request,
    Response
  } = env;
  const seeds = [Request, Response, fetch];
  let len = seeds.length,
    i = len,
    seed,
    target,
    map = seedCache;
  while (i--) {
    seed = seeds[i];
    target = map.get(seed);
    target === undefined && map.set(seed, target = i ? new Map() : factory(env));
    map = target;
  }
  return target;
};
getFetch();

/**
 * Known adapters mapping.
 * Provides environment-specific adapters for Axios:
 * - `http` for Node.js
 * - `xhr` for browsers
 * - `fetch` for fetch API-based requests
 *
 * @type {Object<string, Function|Object>}
 */
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: {
    get: getFetch
  }
};

// Assign adapter names for easier debugging and identification
utils$1.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      // Null-proto descriptors so a polluted Object.prototype.get cannot turn
      // these data descriptors into accessor descriptors on the way in.
      Object.defineProperty(fn, 'name', {
        __proto__: null,
        value
      });
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {
      __proto__: null,
      value
    });
  }
});

/**
 * Render a rejection reason string for unknown or unsupported adapters
 *
 * @param {string} reason
 * @returns {string}
 */
const renderReason = reason => `- ${reason}`;

/**
 * Check if the adapter is resolved (function, null, or false)
 *
 * @param {Function|null|false} adapter
 * @returns {boolean}
 */
const isResolvedHandle = adapter => utils$1.isFunction(adapter) || adapter === null || adapter === false;

/**
 * Get the first suitable adapter from the provided list.
 * Tries each adapter in order until a supported one is found.
 * Throws an AxiosError if no adapter is suitable.
 *
 * @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
 * @param {Object} config - Axios request configuration
 * @throws {AxiosError} If no suitable adapter is available
 * @returns {Function} The resolved adapter function
 */
function getAdapter(adapters, config) {
  adapters = utils$1.isArray(adapters) ? adapters : [adapters];
  const {
    length
  } = adapters;
  let nameOrAdapter;
  let adapter;
  const rejectedReasons = {};
  for (let i = 0; i < length; i++) {
    nameOrAdapter = adapters[i];
    let id;
    adapter = nameOrAdapter;
    if (!isResolvedHandle(nameOrAdapter)) {
      adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
      if (adapter === undefined) {
        throw new AxiosError(`Unknown adapter '${id}'`);
      }
    }
    if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config)))) {
      break;
    }
    rejectedReasons[id || '#' + i] = adapter;
  }
  if (!adapter) {
    const reasons = Object.entries(rejectedReasons).map(([id, state]) => `adapter ${id} ` + (state === false ? 'is not supported by the environment' : 'is not available in the build'));
    let s = length ? reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0]) : 'as no adapter specified';
    throw new AxiosError(`There is no suitable adapter to dispatch the request ` + s, AxiosError.ERR_NOT_SUPPORT);
  }
  return adapter;
}

/**
 * Exports Axios adapters and utility to resolve an adapter
 */
var adapters = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(_config) {
  // Interceptors may replace the merged config with an ordinary object. Flatten
  // it at the dispatch boundary so shared prototype members cannot become
  // request behavior, while preserving intentional template/class members.
  const config = utils$1.toSafeFlatObject(_config);
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders.from(utils$1.getSafeProp(config, 'headers'));

  // Transform request data
  config.data = transformData.call(config, config.transformRequest);
  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }
  const adapter = adapters.getAdapter(config.adapter || defaults.adapter, config);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Expose the current response on config so that transformResponse can
    // attach it to any AxiosError it throws (e.g. on JSON parse failure).
    // We clean it up afterwards to avoid polluting the config object.
    config.response = response;
    try {
      response.data = transformData.call(config, config.transformResponse, response);
    } finally {
      delete config.response;
    }
    response.headers = AxiosHeaders.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        config.response = reason.response;
        try {
          reason.response.data = transformData.call(config, config.transformResponse, reason.response);
        } finally {
          delete config.response;
        }
        reason.response.headers = AxiosHeaders.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});
const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), AxiosError.ERR_DEPRECATED);
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
    }
    return validator ? validator(value, opt, opts) : true;
  };
};
validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object' || options === null) {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    // Use hasOwnProperty so a polluted Object.prototype.<opt> cannot supply
    // a non-function validator and cause a TypeError.
    const validator = Object.prototype.hasOwnProperty.call(schema, opt) ? schema[opt] : undefined;
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
var validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        try {
          let dummy = {};
          Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
          const dummyStack = dummy.stack;
          let stack = '';

          // slice off the Error: ... line
          if (typeof dummyStack === 'string') {
            const firstNewlineIndex = dummyStack.indexOf('\n');
            stack = firstNewlineIndex === -1 ? '' : dummyStack.slice(firstNewlineIndex + 1);
          }
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack) {
            const firstNewlineIndex = stack.indexOf('\n');
            const secondNewlineIndex = firstNewlineIndex === -1 ? -1 : stack.indexOf('\n', firstNewlineIndex + 1);
            const stackWithoutTwoTopLines = secondNewlineIndex === -1 ? '' : stack.slice(secondNewlineIndex + 1);
            if (!String(err.stack).endsWith(stackWithoutTwoTopLines)) {
              err.stack += '\n' + stack;
            }
          }
        } catch (e) {
          // Ignore failures from custom stack hooks or un-writable stack properties.
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const {
      transitional,
      paramsSerializer,
      headers
    } = config;
    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean),
        legacyInterceptorReqResOrdering: validators.transitional(validators.boolean),
        advertiseZstdAcceptEncoding: validators.transitional(validators.boolean),
        validateStatusUndefinedResolves: validators.transitional(validators.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils$1.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.allowAbsoluteUrls
    if (config.allowAbsoluteUrls !== undefined) ; else if (this.defaults.allowAbsoluteUrls !== undefined) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }
    validator.assertOptions(config, {
      baseUrl: validators.spelling('baseURL'),
      withXsrfToken: validators.spelling('withXSRFToken')
    }, true);

    // Set config.method
    config.method = (utils$1.getSafeProp(config, 'method') || utils$1.getSafeProp(this.defaults, 'method') || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
    headers && utils$1.forEach(methodList.concat('common'), method => {
      delete headers[method];
    });
    config.headers = AxiosHeaders.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      const transitional = config.transitional || transitionalDefaults;
      const legacyInterceptorReqResOrdering = transitional && transitional.legacyInterceptorReqResOrdering;
      if (legacyInterceptorReqResOrdering) {
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      } else {
        requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      }
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift(...requestInterceptorChain);
      chain.push(...responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled ? onFulfilled(newConfig) : newConfig;
      } catch (error) {
        if (!onRejected) {
          promise = Promise.reject(error);
          break;
        }
        try {
          const rejectedResult = onRejected.call(this, error);
          if (utils$1.isThenable(rejectedResult)) {
            promise = Promise.resolve(rejectedResult).then(() => dispatchRequest.call(this, newConfig));
          }
        } catch (rejectedError) {
          promise = Promise.reject(rejectedError);
        }
        break;
      }
    }
    if (!promise) {
      try {
        promise = dispatchRequest.call(this, newConfig);
      } catch (error) {
        promise = Promise.reject(error);
      }
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls, config);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: config && utils$1.hasOwnProp(config, 'data') ? config.data : undefined
    }));
  };
});
utils$1.forEach(['post', 'put', 'patch', 'query'], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();

  // QUERY is a safe/idempotent read method; multipart form bodies don't fit
  // its semantics, so no queryForm shorthand is generated.
  if (method !== 'query') {
    Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
  }
});

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = err => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  const args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  /**
   * @deprecated Use `ContentTooLarge` instead.
   */
  PayloadTooLarge: 413,
  ContentTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  /**
   * @deprecated Use `UnprocessableContent` instead.
   */
  UnprocessableEntity: 422,
  UnprocessableContent: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerReturnsAnUnknownError: 520,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  if (HttpStatusCode[value] === undefined) {
    HttpStatusCode[value] = key;
  }
});

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios(defaultConfig);
  const instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils$1.extend(instance, Axios.prototype, context, {
    allOwnKeys: true
  });

  // Copy context to instance
  utils$1.extend(instance, context, null, {
    allOwnKeys: true
  });

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders;
axios.formToJSON = thing => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters.getAdapter;
axios.HttpStatusCode = HttpStatusCode;
axios.default = axios;

module.exports = axios;


/***/ }),

/***/ "./node_modules/axios/node_modules/https-proxy-agent/dist/agent.js":
/*!*************************************************************************!*\
  !*** ./node_modules/axios/node_modules/https-proxy-agent/dist/agent.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(__webpack_require__(/*! net */ "net"));
const tls_1 = __importDefault(__webpack_require__(/*! tls */ "tls"));
const url_1 = __importDefault(__webpack_require__(/*! url */ "url"));
const assert_1 = __importDefault(__webpack_require__(/*! assert */ "assert"));
const debug_1 = __importDefault(__webpack_require__(/*! debug */ "debug"));
const agent_base_1 = __webpack_require__(/*! agent-base */ "agent-base");
const parse_proxy_response_1 = __importDefault(__webpack_require__(/*! ./parse-proxy-response */ "./node_modules/axios/node_modules/https-proxy-agent/dist/parse-proxy-response.js"));
const debug = debug_1.default('https-proxy-agent:agent');
/**
 * The `HttpsProxyAgent` implements an HTTP Agent subclass that connects to
 * the specified "HTTP(s) proxy server" in order to proxy HTTPS requests.
 *
 * Outgoing HTTP requests are first tunneled through the proxy server using the
 * `CONNECT` HTTP request method to establish a connection to the proxy server,
 * and then the proxy server connects to the destination target and issues the
 * HTTP request from the proxy server.
 *
 * `https:` requests have their socket connection upgraded to TLS once
 * the connection to the proxy server has been established.
 *
 * @api public
 */
class HttpsProxyAgent extends agent_base_1.Agent {
    constructor(_opts) {
        let opts;
        if (typeof _opts === 'string') {
            opts = url_1.default.parse(_opts);
        }
        else {
            opts = _opts;
        }
        if (!opts) {
            throw new Error('an HTTP(S) proxy server `host` and `port` must be specified!');
        }
        debug('creating new HttpsProxyAgent instance: %o', opts);
        super(opts);
        const proxy = Object.assign({}, opts);
        // If `true`, then connect to the proxy server over TLS.
        // Defaults to `false`.
        this.secureProxy = opts.secureProxy || isHTTPS(proxy.protocol);
        // Prefer `hostname` over `host`, and set the `port` if needed.
        proxy.host = proxy.hostname || proxy.host;
        if (typeof proxy.port === 'string') {
            proxy.port = parseInt(proxy.port, 10);
        }
        if (!proxy.port && proxy.host) {
            proxy.port = this.secureProxy ? 443 : 80;
        }
        // ALPN is supported by Node.js >= v5.
        // attempt to negotiate http/1.1 for proxy servers that support http/2
        if (this.secureProxy && !('ALPNProtocols' in proxy)) {
            proxy.ALPNProtocols = ['http 1.1'];
        }
        if (proxy.host && proxy.path) {
            // If both a `host` and `path` are specified then it's most likely
            // the result of a `url.parse()` call... we need to remove the
            // `path` portion so that `net.connect()` doesn't attempt to open
            // that as a Unix socket file.
            delete proxy.path;
            delete proxy.pathname;
        }
        this.proxy = proxy;
    }
    /**
     * Called when the node-core HTTP client library is creating a
     * new HTTP request.
     *
     * @api protected
     */
    callback(req, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const { proxy, secureProxy } = this;
            // Create a socket connection to the proxy server.
            let socket;
            if (secureProxy) {
                debug('Creating `tls.Socket`: %o', proxy);
                socket = tls_1.default.connect(proxy);
            }
            else {
                debug('Creating `net.Socket`: %o', proxy);
                socket = net_1.default.connect(proxy);
            }
            const headers = Object.assign({}, proxy.headers);
            const hostname = `${opts.host}:${opts.port}`;
            let payload = `CONNECT ${hostname} HTTP/1.1\r\n`;
            // Inject the `Proxy-Authorization` header if necessary.
            if (proxy.auth) {
                headers['Proxy-Authorization'] = `Basic ${Buffer.from(proxy.auth).toString('base64')}`;
            }
            // The `Host` header should only include the port
            // number when it is not the default port.
            let { host, port, secureEndpoint } = opts;
            if (!isDefaultPort(port, secureEndpoint)) {
                host += `:${port}`;
            }
            headers.Host = host;
            headers.Connection = 'close';
            for (const name of Object.keys(headers)) {
                payload += `${name}: ${headers[name]}\r\n`;
            }
            const proxyResponsePromise = parse_proxy_response_1.default(socket);
            socket.write(`${payload}\r\n`);
            const { statusCode, buffered } = yield proxyResponsePromise;
            if (statusCode === 200) {
                req.once('socket', resume);
                if (opts.secureEndpoint) {
                    // The proxy is connecting to a TLS server, so upgrade
                    // this socket connection to a TLS connection.
                    debug('Upgrading socket connection to TLS');
                    const servername = opts.servername || opts.host;
                    return tls_1.default.connect(Object.assign(Object.assign({}, omit(opts, 'host', 'hostname', 'path', 'port')), { socket,
                        servername }));
                }
                return socket;
            }
            // Some other status code that's not 200... need to re-play the HTTP
            // header "data" events onto the socket once the HTTP machinery is
            // attached so that the node core `http` can parse and handle the
            // error status code.
            // Close the original socket, and a new "fake" socket is returned
            // instead, so that the proxy doesn't get the HTTP request
            // written to it (which may contain `Authorization` headers or other
            // sensitive data).
            //
            // See: https://hackerone.com/reports/541502
            socket.destroy();
            const fakeSocket = new net_1.default.Socket({ writable: false });
            fakeSocket.readable = true;
            // Need to wait for the "socket" event to re-play the "data" events.
            req.once('socket', (s) => {
                debug('replaying proxy buffer for failed request');
                assert_1.default(s.listenerCount('data') > 0);
                // Replay the "buffered" Buffer onto the fake `socket`, since at
                // this point the HTTP module machinery has been hooked up for
                // the user.
                s.push(buffered);
                s.push(null);
            });
            return fakeSocket;
        });
    }
}
exports.default = HttpsProxyAgent;
function resume(socket) {
    socket.resume();
}
function isDefaultPort(port, secure) {
    return Boolean((!secure && port === 80) || (secure && port === 443));
}
function isHTTPS(protocol) {
    return typeof protocol === 'string' ? /^https:?$/i.test(protocol) : false;
}
function omit(obj, ...keys) {
    const ret = {};
    let key;
    for (key in obj) {
        if (!keys.includes(key)) {
            ret[key] = obj[key];
        }
    }
    return ret;
}
//# sourceMappingURL=agent.js.map

/***/ }),

/***/ "./node_modules/axios/node_modules/https-proxy-agent/dist/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/axios/node_modules/https-proxy-agent/dist/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const agent_1 = __importDefault(__webpack_require__(/*! ./agent */ "./node_modules/axios/node_modules/https-proxy-agent/dist/agent.js"));
function createHttpsProxyAgent(opts) {
    return new agent_1.default(opts);
}
(function (createHttpsProxyAgent) {
    createHttpsProxyAgent.HttpsProxyAgent = agent_1.default;
    createHttpsProxyAgent.prototype = agent_1.default.prototype;
})(createHttpsProxyAgent || (createHttpsProxyAgent = {}));
module.exports = createHttpsProxyAgent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/axios/node_modules/https-proxy-agent/dist/parse-proxy-response.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/axios/node_modules/https-proxy-agent/dist/parse-proxy-response.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(__webpack_require__(/*! debug */ "debug"));
const debug = debug_1.default('https-proxy-agent:parse-proxy-response');
function parseProxyResponse(socket) {
    return new Promise((resolve, reject) => {
        // we need to buffer any HTTP traffic that happens with the proxy before we get
        // the CONNECT response, so that if the response is anything other than an "200"
        // response code, then we can re-play the "data" events on the socket once the
        // HTTP parser is hooked up...
        let buffersLength = 0;
        const buffers = [];
        function read() {
            const b = socket.read();
            if (b)
                ondata(b);
            else
                socket.once('readable', read);
        }
        function cleanup() {
            socket.removeListener('end', onend);
            socket.removeListener('error', onerror);
            socket.removeListener('close', onclose);
            socket.removeListener('readable', read);
        }
        function onclose(err) {
            debug('onclose had error %o', err);
        }
        function onend() {
            debug('onend');
        }
        function onerror(err) {
            cleanup();
            debug('onerror %o', err);
            reject(err);
        }
        function ondata(b) {
            buffers.push(b);
            buffersLength += b.length;
            const buffered = Buffer.concat(buffers, buffersLength);
            const endOfHeaders = buffered.indexOf('\r\n\r\n');
            if (endOfHeaders === -1) {
                // keep buffering
                debug('have not received end of HTTP headers yet...');
                read();
                return;
            }
            const firstLine = buffered.toString('ascii', 0, buffered.indexOf('\r\n'));
            const statusCode = +firstLine.split(' ')[1];
            debug('got proxy server response: %o', firstLine);
            resolve({
                statusCode,
                buffered
            });
        }
        socket.on('error', onerror);
        socket.on('close', onclose);
        socket.on('end', onend);
        read();
    });
}
exports.default = parseProxyResponse;
//# sourceMappingURL=parse-proxy-response.js.map

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
  const p = props.prefetch !== false;
  const [childElm, setChildElm] = _react.default.useState();
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);
  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);
  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childProps = {
    ref: el => {
      if (el) setChildElm(el);
      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}
function addLocale(path, locale, defaultLocale) {
  if (false) {}
  return path;
}
function delLocale(path, locale) {
  if (false) {}
  return path;
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches =
  // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') ||
  // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);
  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)
    let replaced = `[${repeat ? '...' : ''}${param}]`;
    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }
    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (
    // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }
  return {
    params,
    result: interpolatedRoute
  };
}
function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';
    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href
    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }
    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition
      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not
        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
          this._resolveHref(parsedHref, pages);
          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }
        window.location.href = destination;
        return new Promise(() => {});
      }
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };
      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (true) {
      return;
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != typeof t || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != typeof t || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/dist/node/axios.cjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\myproject\\react-node-aws\\client\\pages\\register.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != typeof t || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }



const Register = () => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Register"
  });
  const {
    name,
    email,
    password,
    error,
    success,
    buttonText
  } = state;
  const handleChange = name => e => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Register"
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    // console.table({ name, email, password });
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(`http://localhost:8000/api/register`, {
      name,
      email,
      password
    }).then(response => console.log(response)).catch(error => console.log(error));
  };
  const registerForm = () => __jsx("form", {
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("input", {
    value: name,
    onChange: handleChange("name"),
    type: "text",
    className: "form-control",
    placeholder: "Type your name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("input", {
    value: email,
    onChange: handleChange("email"),
    type: "email",
    className: "form-control",
    placeholder: "Type your email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("input", {
    value: password,
    onChange: handleChange("password"),
    type: "password",
    className: "form-control",
    placeholder: "Type your password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "btn btn-outline-warning",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, buttonText)));
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-md-6 offset-md-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "Register"), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), registerForm(), __jsx("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), JSON.stringify(state)));
};
/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "agent-base":
/*!*****************************!*\
  !*** external "agent-base" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("agent-base");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "follow-redirects":
/*!***********************************!*\
  !*** external "follow-redirects" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("follow-redirects");

/***/ }),

/***/ "form-data":
/*!****************************!*\
  !*** external "form-data" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("form-data");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "http2":
/*!************************!*\
  !*** external "http2" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http2");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvZGlzdC9ub2RlL2F4aW9zLmNqcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3Mvbm9kZV9tb2R1bGVzL2h0dHBzLXByb3h5LWFnZW50L2Rpc3QvYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL25vZGVfbW9kdWxlcy9odHRwcy1wcm94eS1hZ2VudC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9ub2RlX21vZHVsZXMvaHR0cHMtcHJveHktYWdlbnQvZGlzdC9wYXJzZS1wcm94eS1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFnZW50LWJhc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3NlcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWJ1Z1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2ZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvbGxvdy1yZWRpcmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmb3JtLWRhdGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cDJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHJlYW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiemxpYlwiIl0sIm5hbWVzIjpbIlJvdXRlciIsIm9uUm91dGVDaGFuZ2VTdGFydCIsInVybCIsIk5Qcm9ncmVzcyIsInN0YXJ0Iiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwiZG9uZSIsIm9uUm91dGVDaGFuZ2VFcnJvciIsIkxheW91dCIsImNoaWxkcmVuIiwiaGVhZCIsIl9fanN4IiwiUmVhY3QiLCJGcmFnbWVudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwicmVsIiwiaHJlZiIsImludGVncml0eSIsImNyb3NzT3JpZ2luIiwibmF2IiwiY2xhc3NOYW1lIiwiTGluayIsImNhY2hlZE9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJ1bmRlZmluZWQiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZXIiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJhcyIsIm9wdGlvbnMiLCJjYXRjaCIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJjaGlsZEVsbSIsInNldENoaWxkRWxtIiwidXNlU3RhdGUiLCJwYXRobmFtZSIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwidXNlRWZmZWN0IiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJBcnJheSIsImlzQXJyYXkiLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsIm1hcCIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwiYWRkTG9jYWxlIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJhZGRCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwibGVuZ3RoIiwiaXNMb2NhbFVSTCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJpbnRlcnBvbGF0ZUFzIiwicm91dGUiLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJ2YWx1ZSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlSHJlZiIsImN1cnJlbnRQYXRoIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsInNlYXJjaFBhcmFtcyIsImhhc2giLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJtYXJrTG9hZGluZ0Vycm9yIiwicHJlcGFyZVVybEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsImluaXRpYWxTdHlsZVNoZWV0cyIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJsb2NhbGVzIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiX19OIiwiY2hhbmdlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwicmVsb2FkIiwibG9jYXRpb24iLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYWdlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInJld3JpdGVzIiwicHJvbWlzZWRCdWlsZE1hbmlmZXN0IiwicGFyc2VkIiwiX3Jlc29sdmVIcmVmIiwidXJsSXNOZXciLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsImZpbHRlciIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJwYWdlIiwiZmV0Y2hDb21wb25lbnQiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJyZXF1aXJlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJkYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwic29tZSIsInJlIiwidGVzdCIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjYWNoZUtleSIsImN0eCIsIkFwcFRyZWUiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJmb3JtYXRVcmwiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJpc0R5bmFtaWNSb3V0ZSIsIkRVTU1ZX0JBU0UiLCJwYXJzZVJlbGF0aXZlVXJsIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsInByZXBhcmVEZXN0aW5hdGlvbiIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJjb21waWxlIiwidmFsaWRhdGUiLCJuZXdVcmwiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsInNob3VsZEFkZEJhc2VQYXRoIiwibWF0Y2giLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5Iiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJpdGVtIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXNvbHZlUmV3cml0ZXMiLCJyZXdyaXRlIiwic291cmNlIiwiZGVzdFJlcyIsImdldFJvdXRlTWF0Y2hlciIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJnZXRSb3V0ZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImdldFVSTCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJTUCIsIm1lYXN1cmUiLCJSZWdpc3RlciIsInNldFN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImJ1dHRvblRleHQiLCJoYW5kbGVDaGFuZ2UiLCJfb2JqZWN0U3ByZWFkIiwiaGFuZGxlU3VibWl0IiwiYXhpb3MiLCJwb3N0IiwicmVzcG9uc2UiLCJsb2ciLCJyZWdpc3RlckZvcm0iLCJvblN1Ym1pdCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RB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LFFBQVE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEtBQUs7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUyxHQUFHLFNBQVM7QUFDOUMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtDQUFrQztBQUNsQyxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE9BQU87QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxLQUFLO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLGlCQUFpQjtBQUM1QixXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsV0FBVyxjQUFjO0FBQzVCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixVQUFVO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRyx5QkFBeUI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsSUFBSTs7QUFFekM7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQ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UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0VBQXNFLE1BQU07QUFDNUU7QUFDQTtBQUNBLE9BQU87QUFDUCxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtDQUFrQztBQUNsQztBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsV0FBVztBQUNqRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEtBQUssR0FBRywwQkFBMEI7QUFDekQ7QUFDQSw2QkFBNkIsZ0NBQWdDO0FBQzdEO0FBQ0E7QUFDQSwwQkFBMEIsS0FBSztBQUMvQjtBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTO0FBQ3ZDO0FBQ0Esb0NBQW9DO0FBQ3BDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FLFNBQVM7QUFDVCw0Q0FBNEM7QUFDNUMsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCw2QkFBNkI7QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0Esd0VBQXdFLEVBQUU7QUFDMUU7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFFBQVE7QUFDakQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0Esc0VBQXNFLEVBQUU7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsS0FBSztBQUNwRCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0Esb0NBQW9DLE9BQU87O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsb0JBQW9CO0FBQy9CLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHVDQUF1QztBQUNsRCxXQUFXLE9BQU87QUFDbEIsWUFBWSxXQUFXO0FBQ3ZCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxHQUFHO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsR0FBRztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksOEJBQThCLGdCQUFnQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUs7QUFDZDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN2cE5hO0FBQ2I7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyxnQkFBSztBQUMzQyw4QkFBOEIsbUJBQU8sQ0FBQyxnQkFBSztBQUMzQyw4QkFBOEIsbUJBQU8sQ0FBQyxnQkFBSztBQUMzQyxpQ0FBaUMsbUJBQU8sQ0FBQyxzQkFBUTtBQUNqRCxnQ0FBZ0MsbUJBQU8sQ0FBQyxvQkFBTztBQUMvQyxxQkFBcUIsbUJBQU8sQ0FBQyw4QkFBWTtBQUN6QywrQ0FBK0MsbUJBQU8sQ0FBQyxnSEFBd0I7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsZ0NBQWdDLFVBQVUsR0FBRyxVQUFVO0FBQ3ZELHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQSwwREFBMEQsMkNBQTJDO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2QkFBNkI7QUFDOUM7QUFDQSw0QkFBNEIsS0FBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLLElBQUksY0FBYztBQUNyRDtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEMsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxvREFBb0Q7QUFDbkksb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsa0JBQWtCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7OztBQ2hMYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsa0ZBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzREFBc0Q7QUFDdkQ7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDYmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLG9CQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBRUE7QUFRQTtBQXNCQSxJQUFJbUIsY0FBSjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxJQUFJQyxHQUFKLEVBQWxCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQ3hCLFFBQWdDQyxTQUFoQyxHQUE4RCxJQURoRTtBQUVBLE1BQU1DLFVBQTJDLEdBQUcsRUFBcEQ7QUFFQSxTQUFTQyxXQUFULEdBQXlEO0VBQ3ZEO0VBQ0EsSUFBSU4sY0FBSixFQUFvQjtJQUNsQixPQUFPQSxjQUFQO0VBQ0QsQ0FFRDtFQUNBLElBQUksQ0FBQ0csb0JBQUwsRUFBMkI7SUFDekIsT0FBT0ksU0FBUDtFQUNEO0VBRUQsT0FBUVAsY0FBYyxHQUFHLElBQUlHLG9CQUFKLENBQ3RCSyxPQUFELElBQWE7SUFDWEEsT0FBTyxDQUFDQyxPQUFSRCxDQUFpQkUsS0FBRCxJQUFXO01BQ3pCLElBQUksQ0FBQ1QsU0FBUyxDQUFDVSxHQUFWVixDQUFjUyxLQUFLLENBQUNFLE1BQXBCWCxDQUFMLEVBQWtDO1FBQ2hDO01BQ0Q7TUFFRCxNQUFNWSxFQUFFLEdBQUdaLFNBQVMsQ0FBQ2EsR0FBVmIsQ0FBY1MsS0FBSyxDQUFDRSxNQUFwQlgsQ0FBWDtNQUNBLElBQUlTLEtBQUssQ0FBQ0ssY0FBTkwsSUFBd0JBLEtBQUssQ0FBQ00saUJBQU5OLEdBQTBCLENBQXRELEVBQXlEO1FBQ3ZEVixjQUFjLENBQUNpQixTQUFmakIsQ0FBeUJVLEtBQUssQ0FBQ0UsTUFBL0JaO1FBQ0FDLFNBQVMsQ0FBQ2lCLE1BQVZqQixDQUFpQlMsS0FBSyxDQUFDRSxNQUF2Qlg7UUFDQVksRUFBRTtNQUNIO0lBQ0YsQ0FYREw7RUFZRCxDQWRzQixFQWV2QjtJQUFFVyxVQUFVLEVBQUU7RUFBZCxDQWZ1QixDQUF6QjtBQWlCRDtBQUVELE1BQU1DLHFCQUFxQixHQUFHLENBQUNDLEVBQUQsRUFBY1IsRUFBZCxLQUFpQztFQUM3RCxNQUFNUyxRQUFRLEdBQUdoQixXQUFXLEVBQTVCO0VBQ0EsSUFBSSxDQUFDZ0IsUUFBTCxFQUFlO0lBQ2IsT0FBTyxNQUFNLENBQUUsQ0FBZjtFQUNEO0VBRURBLFFBQVEsQ0FBQ0MsT0FBVEQsQ0FBaUJELEVBQWpCQztFQUNBckIsU0FBUyxDQUFDdUIsR0FBVnZCLENBQWNvQixFQUFkcEIsRUFBa0JZLEVBQWxCWjtFQUNBLE9BQU8sTUFBTTtJQUNYLElBQUk7TUFDRnFCLFFBQVEsQ0FBQ0wsU0FBVEssQ0FBbUJELEVBQW5CQztJQUNELENBQUMsUUFBT0csR0FBUCxFQUFZO01BQ1pDLE9BQU8sQ0FBQ0MsS0FBUkQsQ0FBY0QsR0FBZEM7SUFDRDtJQUNEekIsU0FBUyxDQUFDaUIsTUFBVmpCLENBQWlCb0IsRUFBakJwQjtFQUNELENBUEQ7QUFRRCxDQWhCRDtBQWtCQSxTQUFTMkIsUUFBVCxDQUNFQyxNQURGLEVBRUVuQyxJQUZGLEVBR0VvQyxFQUhGLEVBSUVDLE9BSkYsRUFLUTtFQUNOLFVBQW1DO0VBQ25DLElBQUksQ0FBQyx3QkFBV3JDLElBQVgsQ0FBTCxFQUF1QixPQUN2QjtFQUNBO0VBQ0E7RUFDQTtFQUNBbUMsTUFBTSxDQUFDRCxRQUFQQyxDQUFnQm5DLElBQWhCbUMsRUFBc0JDLEVBQXRCRCxFQUEwQkUsT0FBMUJGLEVBQW1DRyxLQUFuQ0gsQ0FBMENKLEdBQUQsSUFBUztJQUNoRCxVQUEyQztNQUN6QztNQUNBLE1BQU1BLEdBQU47SUFDRDtFQUNGLENBTERJLEVBTUE7RUFDQXhCLFVBQVUsQ0FBQ1gsSUFBSSxHQUFHLEdBQVBBLEdBQWFvQyxFQUFkLENBQVZ6QixHQUE4QixJQUE5QkE7QUFDRDtBQUVELFNBQVM0QixlQUFULENBQXlCQyxLQUF6QixFQUFrRDtFQUNoRCxNQUFNO0lBQUV0QjtFQUFGLElBQWFzQixLQUFLLENBQUNDLGFBQXpCO0VBQ0EsT0FDR3ZCLE1BQU0sSUFBSUEsTUFBTSxLQUFLLE9BQXRCLElBQ0FzQixLQUFLLENBQUNFLE9BRE4sSUFFQUYsS0FBSyxDQUFDRyxPQUZOLElBR0FILEtBQUssQ0FBQ0ksUUFITixJQUlBSixLQUFLLENBQUNLLE1BSk47RUFJZ0I7RUFDZkwsS0FBSyxDQUFDTSxXQUFOTixJQUFxQkEsS0FBSyxDQUFDTSxXQUFOTixDQUFrQk8sS0FBbEJQLEtBQTRCLENBTnBEO0FBUUQ7QUFFRCxTQUFTUSxXQUFULENBQ0VDLENBREYsRUFFRWQsTUFGRixFQUdFbkMsSUFIRixFQUlFb0MsRUFKRixFQUtFYyxPQUxGLEVBTUVDLE9BTkYsRUFPRUMsTUFQRixFQVFRO0VBQ04sTUFBTTtJQUFFQztFQUFGLElBQWVKLENBQUMsQ0FBQ1IsYUFBdkI7RUFFQSxJQUFJWSxRQUFRLEtBQUssR0FBYkEsS0FBcUJkLGVBQWUsQ0FBQ1UsQ0FBRCxDQUFmVixJQUFzQixDQUFDLHdCQUFXdkMsSUFBWCxDQUE1Q3FELENBQUosRUFBbUU7SUFDakU7SUFDQTtFQUNEO0VBRURKLENBQUMsQ0FBQ0ssY0FBRkwsR0FFQTtFQUNBLElBQUlHLE1BQU0sSUFBSSxJQUFkLEVBQW9CO0lBQ2xCQSxNQUFNLEdBQUdoQixFQUFFLENBQUNtQixPQUFIbkIsQ0FBVyxHQUFYQSxJQUFrQixDQUEzQmdCO0VBQ0QsQ0FFRDtFQUNBakIsTUFBTSxDQUFDZSxPQUFPLEdBQUcsU0FBSCxHQUFlLE1BQXZCLENBQU5mLENBQXFDbkMsSUFBckNtQyxFQUEyQ0MsRUFBM0NELEVBQStDO0lBQUVnQjtFQUFGLENBQS9DaEIsRUFBNERxQixJQUE1RHJCLENBQ0dzQixPQUFELElBQXNCO0lBQ3BCLElBQUksQ0FBQ0EsT0FBTCxFQUFjO0lBQ2QsSUFBSUwsTUFBSixFQUFZO01BQ1YxQyxNQUFNLENBQUNnRCxRQUFQaEQsQ0FBZ0IsQ0FBaEJBLEVBQW1CLENBQW5CQTtNQUNBaUQsUUFBUSxDQUFDQyxJQUFURCxDQUFjRSxLQUFkRjtJQUNEO0VBQ0YsQ0FQSHhCO0FBU0Q7QUFFRCxTQUFTOUIsSUFBVCxDQUFjeUQsS0FBZCxFQUF5RDtFQUN2RCxVQUEyQztJQUN6QyxTQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUlHO01BQ0QsT0FBTyxJQUFJQyxLQUFKLENBQ0osZ0NBQStCRCxJQUFJLENBQUNFLEdBQUksZ0JBQWVGLElBQUksQ0FBQ0csUUFBUyw2QkFBNEJILElBQUksQ0FBQ0ksTUFBTyxhQUE5RyxJQUNHLFFBQ0csU0FESCxHQUVHLEVBSE4sQ0FESyxDQUFQO0lBTUQsQ0FFRDtJQUNBLE1BQU1DLGtCQUFtRCxHQUFHO01BQzFEckUsSUFBSSxFQUFFO0lBRG9ELENBQTVEO0lBR0EsTUFBTXNFLGFBQWtDLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUEQsQ0FDekNGLGtCQUR5Q0UsQ0FBM0M7SUFHQSxhQUFhLENBQUN4RCxPQUFkLENBQXVCbUQsR0FBRCxJQUE0QjtNQUNoRCxJQUFJQSxHQUFHLEtBQUssTUFBWixFQUFvQjtRQUNsQixJQUNFSixLQUFLLENBQUNJLEdBQUQsQ0FBTEosSUFBYyxJQUFkQSxJQUNDLE9BQU9BLEtBQUssQ0FBQ0ksR0FBRCxDQUFaLEtBQXNCLFFBQXRCLElBQWtDLE9BQU9KLEtBQUssQ0FBQ0ksR0FBRCxDQUFaLEtBQXNCLFFBRjNELEVBR0U7VUFDQSxNQUFNSCxlQUFlLENBQUM7WUFDcEJHLEdBRG9CO1lBRXBCQyxRQUFRLEVBQUUsc0JBRlU7WUFHcEJDLE1BQU0sRUFBRU4sS0FBSyxDQUFDSSxHQUFELENBQUxKLEtBQWUsSUFBZkEsR0FBc0IsTUFBdEJBLEdBQStCLE9BQU9BLEtBQUssQ0FBQ0ksR0FBRDtVQUgvQixDQUFELENBQXJCO1FBS0Q7TUFDRixDQVhELE1BV087UUFDTDtRQUNBO1FBQ0EsTUFBTU8sQ0FBUSxHQUFHUCxHQUFqQjtNQUNEO0lBQ0YsQ0FqQkQsRUFtQkE7SUFDQSxNQUFNUSxrQkFBbUQsR0FBRztNQUMxRHRDLEVBQUUsRUFBRSxJQURzRDtNQUUxRGMsT0FBTyxFQUFFLElBRmlEO01BRzFERSxNQUFNLEVBQUUsSUFIa0Q7TUFJMURELE9BQU8sRUFBRSxJQUppRDtNQUsxRHdCLFFBQVEsRUFBRSxJQUxnRDtNQU0xRHpDLFFBQVEsRUFBRTtJQU5nRCxDQUE1RDtJQVFBLE1BQU0wQyxhQUFrQyxHQUFHTCxNQUFNLENBQUNDLElBQVBELENBQ3pDRyxrQkFEeUNILENBQTNDO0lBR0EsYUFBYSxDQUFDeEQsT0FBZCxDQUF1Qm1ELEdBQUQsSUFBNEI7TUFDaEQsSUFBSUEsR0FBRyxLQUFLLElBQVosRUFBa0I7UUFDaEIsSUFDRUosS0FBSyxDQUFDSSxHQUFELENBQUxKLElBQ0EsT0FBT0EsS0FBSyxDQUFDSSxHQUFELENBQVosS0FBc0IsUUFEdEJKLElBRUEsT0FBT0EsS0FBSyxDQUFDSSxHQUFELENBQVosS0FBc0IsUUFIeEIsRUFJRTtVQUNBLE1BQU1ILGVBQWUsQ0FBQztZQUNwQkcsR0FEb0I7WUFFcEJDLFFBQVEsRUFBRSxzQkFGVTtZQUdwQkMsTUFBTSxFQUFFLE9BQU9OLEtBQUssQ0FBQ0ksR0FBRDtVQUhBLENBQUQsQ0FBckI7UUFLRDtNQUNGLENBWkQsTUFZTyxJQUNMQSxHQUFHLEtBQUssU0FBUkEsSUFDQUEsR0FBRyxLQUFLLFFBRFJBLElBRUFBLEdBQUcsS0FBSyxTQUZSQSxJQUdBQSxHQUFHLEtBQUssVUFIUkEsSUFJQUEsR0FBRyxLQUFLLFVBTEgsRUFNTDtRQUNBLElBQUlKLEtBQUssQ0FBQ0ksR0FBRCxDQUFMSixJQUFjLElBQWRBLElBQXNCLE9BQU9BLEtBQUssQ0FBQ0ksR0FBRCxDQUFaLEtBQXNCLFNBQWhELEVBQTJEO1VBQ3pELE1BQU1ILGVBQWUsQ0FBQztZQUNwQkcsR0FEb0I7WUFFcEJDLFFBQVEsRUFBRSxXQUZVO1lBR3BCQyxNQUFNLEVBQUUsT0FBT04sS0FBSyxDQUFDSSxHQUFEO1VBSEEsQ0FBRCxDQUFyQjtRQUtEO01BQ0YsQ0FkTSxNQWNBO1FBQ0w7UUFDQTtRQUNBLE1BQU1PLENBQVEsR0FBR1AsR0FBakI7TUFDRDtJQUNGLENBaENELEVBa0NBO0lBQ0E7SUFDQSxNQUFNVyxTQUFTLEdBQUd0RixlQUFNdUYsTUFBTnZGLENBQWEsS0FBYkEsQ0FBbEI7SUFDQSxJQUFJdUUsS0FBSyxDQUFDNUIsUUFBTjRCLElBQWtCLENBQUNlLFNBQVMsQ0FBQ0UsT0FBakMsRUFBMEM7TUFDeENGLFNBQVMsQ0FBQ0UsT0FBVkYsR0FBb0IsSUFBcEJBO01BQ0E3QyxPQUFPLENBQUNnRCxJQUFSaEQsQ0FDRSxtS0FERkE7SUFHRDtFQUNGO0VBQ0QsTUFBTWlELENBQUMsR0FBR25CLEtBQUssQ0FBQzVCLFFBQU40QixLQUFtQixLQUE3QjtFQUVBLE1BQU0sQ0FBQ29CLFFBQUQsRUFBV0MsV0FBWCxJQUEwQjVGLGVBQU02RixRQUFON0YsRUFBaEM7RUFFQSxNQUFNNEMsTUFBTSxHQUFHLHlCQUFmO0VBQ0EsTUFBTWtELFFBQVEsR0FBSWxELE1BQU0sSUFBSUEsTUFBTSxDQUFDa0QsUUFBbEIsSUFBK0IsR0FBaEQ7RUFFQSxNQUFNO0lBQUVyRixJQUFGO0lBQVFvQztFQUFSLElBQWU3QyxlQUFNK0YsT0FBTi9GLENBQWMsTUFBTTtJQUN2QyxNQUFNLENBQUNnRyxZQUFELEVBQWVDLFVBQWYsSUFBNkIseUJBQVlILFFBQVosRUFBc0J2QixLQUFLLENBQUM5RCxJQUE1QixFQUFrQyxJQUFsQyxDQUFuQztJQUNBLE9BQU87TUFDTEEsSUFBSSxFQUFFdUYsWUFERDtNQUVMbkQsRUFBRSxFQUFFMEIsS0FBSyxDQUFDMUIsRUFBTjBCLEdBQ0EseUJBQVl1QixRQUFaLEVBQXNCdkIsS0FBSyxDQUFDMUIsRUFBNUIsQ0FEQTBCLEdBRUEwQixVQUFVLElBQUlEO0lBSmIsQ0FBUDtFQU1ELENBUm9CaEcsRUFRbEIsQ0FBQzhGLFFBQUQsRUFBV3ZCLEtBQUssQ0FBQzlELElBQWpCLEVBQXVCOEQsS0FBSyxDQUFDMUIsRUFBN0IsQ0FSa0I3QyxDQUFyQjtFQVVBLGVBQU1rRyxTQUFOLENBQWdCLE1BQU07SUFDcEIsSUFDRVIsQ0FBQyxJQUNEeEUsb0JBREF3RSxJQUVBQyxRQUZBRCxJQUdBQyxRQUFRLENBQUNRLE9BSFRULElBSUEsd0JBQVdqRixJQUFYLENBTEYsRUFNRTtNQUNBO01BQ0EsTUFBTTJGLFlBQVksR0FBR2hGLFVBQVUsQ0FBQ1gsSUFBSSxHQUFHLEdBQVBBLEdBQWFvQyxFQUFkLENBQS9CO01BQ0EsSUFBSSxDQUFDdUQsWUFBTCxFQUFtQjtRQUNqQixPQUFPakUscUJBQXFCLENBQUN3RCxRQUFELEVBQVcsTUFBTTtVQUMzQ2hELFFBQVEsQ0FBQ0MsTUFBRCxFQUFTbkMsSUFBVCxFQUFlb0MsRUFBZixDQUFSRjtRQUNELENBRjJCLENBQTVCO01BR0Q7SUFDRjtFQUNGLENBaEJELEVBZ0JHLENBQUMrQyxDQUFELEVBQUlDLFFBQUosRUFBY2xGLElBQWQsRUFBb0JvQyxFQUFwQixFQUF3QkQsTUFBeEIsQ0FoQkg7RUFrQkEsSUFBSTtJQUFFL0MsUUFBRjtJQUFZOEQsT0FBWjtJQUFxQkMsT0FBckI7SUFBOEJDO0VBQTlCLElBQXlDVSxLQUE3QyxDQUNBO0VBQ0EsSUFBSSxPQUFPMUUsUUFBUCxLQUFvQixRQUF4QixFQUFrQztJQUNoQ0EsUUFBUSxnQkFBRyx3Q0FBSUEsUUFBSixDQUFYQTtFQUNELENBRUQ7RUFDQSxNQUFNd0csS0FBVSxHQUFHQyxnQkFBU0MsSUFBVEQsQ0FBY3pHLFFBQWR5RyxDQUFuQjtFQUNBLE1BQU1FLFVBS0wsR0FBRztJQUNGQyxHQUFHLEVBQUdyRSxFQUFELElBQWE7TUFDaEIsSUFBSUEsRUFBSixFQUFRd0QsV0FBVyxDQUFDeEQsRUFBRCxDQUFYd0Q7TUFFUixJQUFJUyxLQUFLLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUExQkEsSUFBc0NBLEtBQUssQ0FBQ0ksR0FBaEQsRUFBcUQ7UUFDbkQsSUFBSSxPQUFPSixLQUFLLENBQUNJLEdBQWIsS0FBcUIsVUFBekIsRUFBcUNKLEtBQUssQ0FBQ0ksR0FBTkosQ0FBVWpFLEVBQVZpRSxFQUFyQyxLQUNLLElBQUksT0FBT0EsS0FBSyxDQUFDSSxHQUFiLEtBQXFCLFFBQXpCLEVBQW1DO1VBQ3RDSixLQUFLLENBQUNJLEdBQU5KLENBQVViLE9BQVZhLEdBQW9CakUsRUFBcEJpRTtRQUNEO01BQ0Y7SUFDRixDQVZDO0lBV0ZLLE9BQU8sRUFBR2hELENBQUQsSUFBeUI7TUFDaEMsSUFBSTJDLEtBQUssQ0FBQzlCLEtBQU44QixJQUFlLE9BQU9BLEtBQUssQ0FBQzlCLEtBQU44QixDQUFZSyxPQUFuQixLQUErQixVQUFsRCxFQUE4RDtRQUM1REwsS0FBSyxDQUFDOUIsS0FBTjhCLENBQVlLLE9BQVpMLENBQW9CM0MsQ0FBcEIyQztNQUNEO01BQ0QsSUFBSSxDQUFDM0MsQ0FBQyxDQUFDaUQsZ0JBQVAsRUFBeUI7UUFDdkJsRCxXQUFXLENBQUNDLENBQUQsRUFBSWQsTUFBSixFQUFZbkMsSUFBWixFQUFrQm9DLEVBQWxCLEVBQXNCYyxPQUF0QixFQUErQkMsT0FBL0IsRUFBd0NDLE1BQXhDLENBQVhKO01BQ0Q7SUFDRjtFQWxCQyxDQUxKO0VBMEJBLElBQUlpQyxDQUFKLEVBQU87SUFDTGMsVUFBVSxDQUFDSSxZQUFYSixHQUEyQjlDLENBQUQsSUFBeUI7TUFDakQsSUFBSSxDQUFDLHdCQUFXakQsSUFBWCxDQUFMLEVBQXVCO01BQ3ZCLElBQUk0RixLQUFLLENBQUM5QixLQUFOOEIsSUFBZSxPQUFPQSxLQUFLLENBQUM5QixLQUFOOEIsQ0FBWU8sWUFBbkIsS0FBb0MsVUFBdkQsRUFBbUU7UUFDakVQLEtBQUssQ0FBQzlCLEtBQU44QixDQUFZTyxZQUFaUCxDQUF5QjNDLENBQXpCMkM7TUFDRDtNQUNEMUQsUUFBUSxDQUFDQyxNQUFELEVBQVNuQyxJQUFULEVBQWVvQyxFQUFmLEVBQW1CO1FBQUVnRSxRQUFRLEVBQUU7TUFBWixDQUFuQixDQUFSbEU7SUFDRCxDQU5ENkQ7RUFPRCxDQUVEO0VBQ0E7RUFDQSxJQUFJakMsS0FBSyxDQUFDYSxRQUFOYixJQUFtQjhCLEtBQUssQ0FBQ1MsSUFBTlQsS0FBZSxHQUFmQSxJQUFzQixFQUFFLFVBQVVBLEtBQUssQ0FBQzlCLEtBQWxCLENBQTdDLEVBQXdFO0lBQ3RFaUMsVUFBVSxDQUFDL0YsSUFBWCtGLEdBQWtCLHlCQUNoQix1QkFBVTNELEVBQVYsRUFBY0QsTUFBTSxJQUFJQSxNQUFNLENBQUNtRSxNQUEvQixFQUF1Q25FLE1BQU0sSUFBSUEsTUFBTSxDQUFDb0UsYUFBeEQsQ0FEZ0IsQ0FBbEJSO0VBR0Q7RUFFRCxvQkFBT3hHLGVBQU1pSCxZQUFOakgsQ0FBbUJxRyxLQUFuQnJHLEVBQTBCd0csVUFBMUJ4RyxDQUFQO0FBQ0Q7ZUFFY2MsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7NENDdFZmOzs7QUFHTyxTQUFTb0csdUJBQVQsQ0FBaUNDLElBQWpDLEVBQXVEO0VBQzVELE9BQU9BLElBQUksQ0FBQ0MsUUFBTEQsQ0FBYyxHQUFkQSxLQUFzQkEsSUFBSSxLQUFLLEdBQS9CQSxHQUFxQ0EsSUFBSSxDQUFDRSxLQUFMRixDQUFXLENBQVhBLEVBQWMsQ0FBQyxDQUFmQSxDQUFyQ0EsR0FBeURBLElBQWhFO0FBQ0QsQ0FFRDs7OztBQUlPLE1BQU1HLDBCQUEwQixHQUFHQyxTQUNyQ0osU0FEcUNJLEdBVXRDTCx1QkFWRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVlA7QUFDQTs7O0FBQ0E7QUFzSEE7eUNBekhBO0FBbUJBLE1BQU1NLGVBQW9DLEdBQUc7RUFDM0M1RSxNQUFNLEVBQUUsSUFEbUM7RUFDN0I7RUFDZDZFLGNBQWMsRUFBRSxFQUYyQjtFQUczQ0MsS0FBSyxDQUFDOUYsRUFBRCxFQUFpQjtJQUNwQixJQUFJLEtBQUtnQixNQUFULEVBQWlCLE9BQU9oQixFQUFFLEVBQVQ7SUFDakIsV0FBbUMsRUFFbEM7RUFDRjtBQVIwQyxDQUE3QyxDQVdBO0FBQ0EsTUFBTStGLGlCQUFpQixHQUFHLENBQ3hCLFVBRHdCLEVBRXhCLE9BRndCLEVBR3hCLE9BSHdCLEVBSXhCLFFBSndCLEVBS3hCLFlBTHdCLEVBTXhCLFlBTndCLEVBT3hCLFVBUHdCLEVBUXhCLFFBUndCLEVBU3hCLFNBVHdCLEVBVXhCLGVBVndCLENBQTFCO0FBWUEsTUFBTUMsWUFBWSxHQUFHLENBQ25CLGtCQURtQixFQUVuQixxQkFGbUIsRUFHbkIscUJBSG1CLEVBSW5CLGtCQUptQixFQUtuQixpQkFMbUIsRUFNbkIsb0JBTm1CLENBQXJCO0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FDdkIsTUFEdUIsRUFFdkIsU0FGdUIsRUFHdkIsUUFIdUIsRUFJdkIsTUFKdUIsRUFLdkIsVUFMdUIsRUFNdkIsZ0JBTnVCLENBQXpCLENBU0E7QUFDQTdDLE1BQU0sQ0FBQzhDLGNBQVA5QyxDQUFzQndDLGVBQXRCeEMsRUFBdUMsUUFBdkNBLEVBQWlEO0VBQy9DbkQsR0FBRyxHQUFHO0lBQ0osT0FBT3pDLGlCQUFPMkksTUFBZDtFQUNEO0FBSDhDLENBQWpEL0M7QUFNQTJDLGlCQUFpQixDQUFDbkcsT0FBbEJtRyxDQUEyQkssS0FBRCxJQUFXO0VBQ25DO0VBQ0E7RUFDQTtFQUNBO0VBQ0FoRCxNQUFNLENBQUM4QyxjQUFQOUMsQ0FBc0J3QyxlQUF0QnhDLEVBQXVDZ0QsS0FBdkNoRCxFQUE4QztJQUM1Q25ELEdBQUcsR0FBRztNQUNKLE1BQU1lLE1BQU0sR0FBR3FGLFNBQVMsRUFBeEI7TUFDQSxPQUFPckYsTUFBTSxDQUFDb0YsS0FBRCxDQUFiO0lBQ0Q7RUFKMkMsQ0FBOUNoRDtBQU1ELENBWEQyQztBQWFBLGdCQUFnQixDQUFDbkcsT0FBakIsQ0FBMEJ3RyxLQUFELElBQVc7RUFDbEM7RUFDQTtFQUFFUixlQUFELENBQXlCUSxLQUF6QixJQUFrQyxDQUFDLEdBQUd2RCxJQUFKLEtBQW9CO0lBQ3JELE1BQU03QixNQUFNLEdBQUdxRixTQUFTLEVBQXhCO0lBQ0EsT0FBT3JGLE1BQU0sQ0FBQ29GLEtBQUQsQ0FBTnBGLENBQWMsR0FBRzZCLElBQWpCN0IsQ0FBUDtFQUNELENBSEE7QUFJRixDQU5EO0FBUUFnRixZQUFZLENBQUNwRyxPQUFib0csQ0FBc0IzRSxLQUFELElBQVc7RUFDOUJ1RSxlQUFlLENBQUNFLEtBQWhCRixDQUFzQixNQUFNO0lBQzFCcEksaUJBQU8ySSxNQUFQM0ksQ0FBYzhJLEVBQWQ5SSxDQUFpQjZELEtBQWpCN0QsRUFBd0IsQ0FBQyxHQUFHcUYsSUFBSixLQUFhO01BQ25DLE1BQU0wRCxVQUFVLEdBQUksS0FBSWxGLEtBQUssQ0FBQ21GLE1BQU5uRixDQUFhLENBQWJBLEVBQWdCb0YsV0FBaEJwRixFQUE4QixHQUFFQSxLQUFLLENBQUNxRixTQUFOckYsQ0FDdEQsQ0FEc0RBLENBRXRELEVBRkY7TUFHQSxNQUFNc0YsZ0JBQWdCLEdBQUdmLGVBQXpCO01BQ0EsSUFBSWUsZ0JBQWdCLENBQUNKLFVBQUQsQ0FBcEIsRUFBa0M7UUFDaEMsSUFBSTtVQUNGSSxnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFoQkksQ0FBNkIsR0FBRzlELElBQWhDOEQ7UUFDRCxDQUFDLFFBQU8vRixHQUFQLEVBQVk7VUFDWkMsT0FBTyxDQUFDQyxLQUFSRCxDQUFlLHdDQUF1QzBGLFVBQVcsRUFBakUxRjtVQUNBQSxPQUFPLENBQUNDLEtBQVJELENBQWUsR0FBRUQsR0FBRyxDQUFDZ0csT0FBUSxLQUFJaEcsR0FBRyxDQUFDaUcsS0FBTSxFQUEzQ2hHO1FBQ0Q7TUFDRjtJQUNGLENBYkRyRDtFQWNELENBZkRvSTtBQWdCRCxDQWpCREk7QUFtQkEsU0FBU0ssU0FBVCxHQUE2QjtFQUMzQixJQUFJLENBQUNULGVBQWUsQ0FBQzVFLE1BQXJCLEVBQTZCO0lBQzNCLE1BQU00RixPQUFPLEdBQ1gsZ0NBQ0EseUVBRkY7SUFHQSxNQUFNLElBQUk5RCxLQUFKLENBQVU4RCxPQUFWLENBQU47RUFDRDtFQUNELE9BQU9oQixlQUFlLENBQUM1RSxNQUF2QjtBQUNELENBRUQ7ZUFDZTRFLGUsQ0FFZjs7QUFHTyxTQUFTa0IsU0FBVCxHQUFpQztFQUN0QyxPQUFPMUksZUFBTTJJLFVBQU4zSSxDQUFpQjRJLDRCQUFqQjVJLENBQVA7QUFDRCxDQUVEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNPLE1BQU02SSxZQUFZLEdBQUcsQ0FBQyxHQUFHcEUsSUFBSixLQUFpQztFQUMzRCtDLGVBQWUsQ0FBQzVFLE1BQWhCNEUsR0FBeUIsSUFBSXBJLGdCQUFKLENBQVcsR0FBR3FGLElBQWQsQ0FBekIrQztFQUNBQSxlQUFlLENBQUNDLGNBQWhCRCxDQUErQmhHLE9BQS9CZ0csQ0FBd0M1RixFQUFELElBQVFBLEVBQUUsRUFBakQ0RjtFQUNBQSxlQUFlLENBQUNDLGNBQWhCRCxHQUFpQyxFQUFqQ0E7RUFFQSxPQUFPQSxlQUFlLENBQUM1RSxNQUF2QjtBQUNELENBTk0sQ0FRUDs7QUFDTyxTQUFTa0csd0JBQVQsQ0FBa0NsRyxNQUFsQyxFQUE4RDtFQUNuRSxNQUFNbUcsT0FBTyxHQUFHbkcsTUFBaEI7RUFDQSxNQUFNb0csUUFBUSxHQUFHLEVBQWpCO0VBRUEsS0FBSyxNQUFNQyxRQUFYLElBQXVCdEIsaUJBQXZCLEVBQTBDO0lBQ3hDLElBQUksT0FBT29CLE9BQU8sQ0FBQ0UsUUFBRCxDQUFkLEtBQTZCLFFBQWpDLEVBQTJDO01BQ3pDRCxRQUFRLENBQUNDLFFBQUQsQ0FBUkQsR0FBcUJoRSxNQUFNLENBQUNrRSxNQUFQbEUsQ0FDbkJtRSxLQUFLLENBQUNDLE9BQU5ELENBQWNKLE9BQU8sQ0FBQ0UsUUFBRCxDQUFyQkUsSUFBbUMsRUFBbkNBLEdBQXdDLEVBRHJCbkUsRUFFbkIrRCxPQUFPLENBQUNFLFFBQUQsQ0FGWWpFLENBQXJCZ0UsQ0FHRTtNQUNGO0lBQ0Q7SUFFREEsUUFBUSxDQUFDQyxRQUFELENBQVJELEdBQXFCRCxPQUFPLENBQUNFLFFBQUQsQ0FBNUJEO0VBQ0QsQ0FFRDtFQUNBQSxRQUFRLENBQUNqQixNQUFUaUIsR0FBa0I1SixpQkFBTzJJLE1BQXpCaUI7RUFFQW5CLGdCQUFnQixDQUFDckcsT0FBakJxRyxDQUEwQkcsS0FBRCxJQUFXO0lBQ2xDZ0IsUUFBUSxDQUFDaEIsS0FBRCxDQUFSZ0IsR0FBa0IsQ0FBQyxHQUFHdkUsSUFBSixLQUFvQjtNQUNwQyxPQUFPc0UsT0FBTyxDQUFDZixLQUFELENBQVBlLENBQWUsR0FBR3RFLElBQWxCc0UsQ0FBUDtJQUNELENBRkRDO0VBR0QsQ0FKRG5CO0VBTUEsT0FBT21CLFFBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pLRDtBQUVBO0FBV2UsU0FBU0ssVUFBVCxDQUliQyxpQkFKYSxFQUsrQjtFQUM1QyxTQUFTQyxpQkFBVCxDQUEyQmhGLEtBQTNCLEVBQXVDO0lBQ3JDLG9CQUFPLDZCQUFDLGlCQUFEO01BQW1CLE1BQU0sRUFBRTtJQUEzQixHQUE0Q0EsS0FBNUMsRUFBUDtFQUNEO0VBRUQsaUJBQWlCLENBQUNpRixlQUFsQixHQUFvQ0YsaUJBQWlCLENBQUNFLGVBQ3REO0FBQUE7RUFDRUQsaUJBQUQsQ0FBMkJFLG1CQUEzQixHQUFrREgsaUJBQUQsQ0FBMkJHLG1CQUE1RTtFQUNELFVBQTJDO0lBQ3pDLE1BQU1DLElBQUksR0FDUkosaUJBQWlCLENBQUNLLFdBQWxCTCxJQUFpQ0EsaUJBQWlCLENBQUNJLElBQW5ESixJQUEyRCxTQUQ3RDtJQUVBQyxpQkFBaUIsQ0FBQ0ksV0FBbEJKLEdBQWlDLGNBQWFHLElBQUssR0FBbkRIO0VBQ0Q7RUFFRCxPQUFPQSxpQkFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQ2pDWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBOEM7QUFDdkU7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFvRDtBQUM3RTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHlCQUF5QiwwQ0FBMEM7QUFDbkU7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5QkFBeUIsMkNBQTJDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0NBQXNDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUE0QztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBLG9FQUFvRSxVQUFVLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0Msb0VBQW9FLFVBQVUsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxpREFBaUQsRUFBRTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQyx3T0FBd08sVUFBVSxFQUFFO0FBQ3BQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNCQUFzQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZEQUE2RDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7Ozs7O3VCQ3JaQTs7Ozs7OzBCQUFBLENBWUE7QUFDQTtBQUNBO0FBVWUsU0FBU0ssSUFBVCxHQUE2QjtFQUMxQyxNQUFNQyxHQUErQixHQUFHN0UsTUFBTSxDQUFDOEUsTUFBUDlFLENBQWMsSUFBZEEsQ0FBeEM7RUFFQSxPQUFPO0lBQ0xrRCxFQUFFLENBQUNwQixJQUFELEVBQWVpRCxPQUFmLEVBQWlDO01BQ2pDO01BQUMsQ0FBQ0YsR0FBRyxDQUFDL0MsSUFBRCxDQUFIK0MsS0FBY0EsR0FBRyxDQUFDL0MsSUFBRCxDQUFIK0MsR0FBWSxFQUExQkEsQ0FBRCxFQUFnQ0csSUFBaEMsQ0FBcUNELE9BQXJDO0lBQ0YsQ0FISTtJQUtMRSxHQUFHLENBQUNuRCxJQUFELEVBQWVpRCxPQUFmLEVBQWlDO01BQ2xDLElBQUlGLEdBQUcsQ0FBQy9DLElBQUQsQ0FBUCxFQUFlO1FBQ2IrQyxHQUFHLENBQUMvQyxJQUFELENBQUgrQyxDQUFVSyxNQUFWTCxDQUFpQkEsR0FBRyxDQUFDL0MsSUFBRCxDQUFIK0MsQ0FBVTdGLE9BQVY2RixDQUFrQkUsT0FBbEJGLE1BQStCLENBQWhEQSxFQUFtRCxDQUFuREE7TUFDRDtJQUNGLENBVEk7SUFXTE0sSUFBSSxDQUFDckQsSUFBRCxFQUFlLEdBQUdzRCxJQUFsQixFQUErQjtNQUNqQztNQUNBO01BQUMsQ0FBQ1AsR0FBRyxDQUFDL0MsSUFBRCxDQUFIK0MsSUFBYSxFQUFkLEVBQWtCeEMsS0FBbEIsR0FBMEJnRCxHQUExQixDQUErQk4sT0FBRCxJQUFzQjtRQUNuREEsT0FBTyxDQUFDLEdBQUdLLElBQUosQ0FBUEw7TUFDRCxDQUZBO0lBR0Y7RUFoQkksQ0FBUDtBQWtCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENEO0FBS0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0NBM0JBLDRCQUNBO0FBd0NBLE1BQU1PLFFBQVEsR0FBSS9DLE1BQUQsSUFBa0QsRUFBbkU7QUFFQSxTQUFTZ0Qsc0JBQVQsR0FBa0M7RUFDaEMsT0FBT3ZGLE1BQU0sQ0FBQ2tFLE1BQVBsRSxDQUFjLElBQUlOLEtBQUosQ0FBVSxpQkFBVixDQUFkTSxFQUE0QztJQUNqRHdGLFNBQVMsRUFBRTtFQURzQyxDQUE1Q3hGLENBQVA7QUFHRDtBQUVELFNBQVN5RixhQUFULENBQXVCdEQsSUFBdkIsRUFBcUN1RCxNQUFyQyxFQUFzRDtFQUNwRCxPQUFPQSxNQUFNLElBQUl2RCxJQUFJLENBQUN3RCxVQUFMeEQsQ0FBZ0IsR0FBaEJBLENBQVZ1RCxHQUNIdkQsSUFBSSxLQUFLLEdBQVRBLEdBQ0Usd0RBQTJCdUQsTUFBM0IsQ0FERnZELEdBRUcsR0FBRXVELE1BQU8sR0FBRXZELElBQUssRUFIaEJ1RCxHQUlIdkQsSUFKSjtBQUtEO0FBRU0sU0FBU3lELFNBQVQsQ0FDTHpELElBREssRUFFTEosTUFGSyxFQUdMQyxhQUhLLEVBSUw7RUFDQSxJQUFJTyxLQUFKLEVBQXFDLEVBSXBDO0VBQ0QsT0FBT0osSUFBUDtBQUNEO0FBRU0sU0FBUzBELFNBQVQsQ0FBbUIxRCxJQUFuQixFQUFpQ0osTUFBakMsRUFBa0Q7RUFDdkQsSUFBSVEsS0FBSixFQUFxQyxFQUlwQztFQUNELE9BQU9KLElBQVA7QUFDRDtBQUVNLFNBQVMyRCxXQUFULENBQXFCM0QsSUFBckIsRUFBNEM7RUFDakQsT0FBT0EsSUFBSSxLQUFLbUQsUUFBVG5ELElBQXFCQSxJQUFJLENBQUN3RCxVQUFMeEQsQ0FBZ0JtRCxRQUFRLEdBQUcsR0FBM0JuRCxDQUE1QjtBQUNEO0FBRU0sU0FBUzRELFdBQVQsQ0FBcUI1RCxJQUFyQixFQUEyQztFQUNoRDtFQUNBLE9BQU9zRCxhQUFhLENBQUN0RCxJQUFELEVBQU9tRCxRQUFQLENBQXBCO0FBQ0Q7QUFFTSxTQUFTVSxXQUFULENBQXFCN0QsSUFBckIsRUFBMkM7RUFDaEQsT0FBT0EsSUFBSSxDQUFDRSxLQUFMRixDQUFXbUQsUUFBUSxDQUFDVyxNQUFwQjlELEtBQStCLEdBQXRDO0FBQ0QsQ0FFRDs7O0FBR08sU0FBUytELFVBQVQsQ0FBb0I1TCxHQUFwQixFQUEwQztFQUMvQyxJQUFJQSxHQUFHLENBQUNxTCxVQUFKckwsQ0FBZSxHQUFmQSxDQUFKLEVBQXlCLE9BQU8sSUFBUDtFQUN6QixJQUFJO0lBQ0Y7SUFDQSxNQUFNNkwsY0FBYyxHQUFHLCtCQUF2QjtJQUNBLE1BQU1DLFFBQVEsR0FBRyxJQUFJQyxHQUFKLENBQVEvTCxHQUFSLEVBQWE2TCxjQUFiLENBQWpCO0lBQ0EsT0FBT0MsUUFBUSxDQUFDRSxNQUFURixLQUFvQkQsY0FBcEJDLElBQXNDTixXQUFXLENBQUNNLFFBQVEsQ0FBQ3RGLFFBQVYsQ0FBeEQ7RUFDRCxDQUFDLFFBQU9aLENBQVAsRUFBVTtJQUNWLE9BQU8sS0FBUDtFQUNEO0FBQ0Y7QUFJTSxTQUFTcUcsYUFBVCxDQUNMQyxLQURLLEVBRUxDLFVBRkssRUFHTEMsS0FISyxFQUlMO0VBQ0EsSUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7RUFFQSxNQUFNQyxZQUFZLEdBQUcsK0JBQWNKLEtBQWQsQ0FBckI7RUFDQSxNQUFNSyxhQUFhLEdBQUdELFlBQVksQ0FBQ0UsTUFBbkM7RUFDQSxNQUFNQyxjQUFjO0VBQ2xCO0VBQ0EsQ0FBQ04sVUFBVSxLQUFLRCxLQUFmQyxHQUF1QixtQ0FBZ0JHLFlBQWhCLEVBQThCSCxVQUE5QixDQUF2QkEsR0FBbUUsRUFBcEU7RUFDQTtFQUNBO0VBQ0FDLEtBTEY7RUFPQUMsaUJBQWlCLEdBQUdILEtBQXBCRztFQUNBLE1BQU1LLE1BQU0sR0FBR2hILE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWTZHLGFBQVo3RyxDQUFmO0VBRUEsSUFDRSxDQUFDZ0gsTUFBTSxDQUFDQyxLQUFQRCxDQUFjRSxLQUFELElBQVc7SUFDdkIsSUFBSUMsS0FBSyxHQUFHSixjQUFjLENBQUNHLEtBQUQsQ0FBZEgsSUFBeUIsRUFBckM7SUFDQSxNQUFNO01BQUVLLE1BQUY7TUFBVUM7SUFBVixJQUF1QlIsYUFBYSxDQUFDSyxLQUFELENBQTFDLENBRUE7SUFDQTtJQUNBLElBQUlJLFFBQVEsR0FBSSxJQUFHRixNQUFNLEdBQUcsS0FBSCxHQUFXLEVBQUcsR0FBRUYsS0FBTSxHQUEvQztJQUNBLElBQUlHLFFBQUosRUFBYztNQUNaQyxRQUFRLEdBQUksR0FBRSxDQUFDSCxLQUFELEdBQVMsR0FBVCxHQUFlLEVBQUcsSUFBR0csUUFBUyxHQUE1Q0E7SUFDRDtJQUNELElBQUlGLE1BQU0sSUFBSSxDQUFDakQsS0FBSyxDQUFDQyxPQUFORCxDQUFjZ0QsS0FBZGhELENBQWYsRUFBcUNnRCxLQUFLLEdBQUcsQ0FBQ0EsS0FBRCxDQUFSQTtJQUVyQyxPQUNFLENBQUNFLFFBQVEsSUFBSUgsS0FBSyxJQUFJSCxjQUF0QjtJQUNBO0lBQ0NKLGlCQUFpQixHQUNoQkEsaUJBQWlCLENBQUVoSSxPQUFuQmdJLENBQ0VXLFFBREZYLEVBRUVTLE1BQU0sR0FDREQsS0FBRCxDQUFvQjlCLEdBQXBCLENBQXdCa0MsNkJBQXhCLEVBQThDQyxJQUE5QyxDQUFtRCxHQUFuRCxDQURFLEdBRUYsbUNBQXFCTCxLQUFyQixDQUpOUixLQUtLLEdBUlAsQ0FERjtFQVdELENBdkJBSyxDQURILEVBeUJFO0lBQ0FMLGlCQUFpQixHQUFHLEVBQXBCQSxDQUF1QjtJQUV2QjtJQUNBO0VBQ0Q7RUFDRCxPQUFPO0lBQ0xLLE1BREs7SUFFTFMsTUFBTSxFQUFFZDtFQUZILENBQVA7QUFJRDtBQUVELFNBQVNlLGtCQUFULENBQTRCaEIsS0FBNUIsRUFBbURNLE1BQW5ELEVBQXFFO0VBQ25FLE1BQU1XLGFBQTZCLEdBQUcsRUFBdEM7RUFFQTNILE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWTBHLEtBQVoxRyxFQUFtQnhELE9BQW5Cd0QsQ0FBNEJMLEdBQUQsSUFBUztJQUNsQyxJQUFJLENBQUNxSCxNQUFNLENBQUNZLFFBQVBaLENBQWdCckgsR0FBaEJxSCxDQUFMLEVBQTJCO01BQ3pCVyxhQUFhLENBQUNoSSxHQUFELENBQWJnSSxHQUFxQmpCLEtBQUssQ0FBQy9HLEdBQUQsQ0FBMUJnSTtJQUNEO0VBQ0YsQ0FKRDNIO0VBS0EsT0FBTzJILGFBQVA7QUFDRCxDQUVEOzs7O0FBSU8sU0FBU0UsV0FBVCxDQUNMQyxXQURLLEVBRUxyTSxJQUZLLEVBR0xzTSxTQUhLLEVBSUc7RUFDUjtFQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJM0IsR0FBSixDQUFReUIsV0FBUixFQUFxQixVQUFyQixDQUFiO0VBQ0EsTUFBTUcsV0FBVyxHQUNmLE9BQU94TSxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxJQUEzQixHQUFrQyxpQ0FBcUJBLElBQXJCLENBRHBDO0VBRUEsSUFBSTtJQUNGLE1BQU15TSxRQUFRLEdBQUcsSUFBSTdCLEdBQUosQ0FBUTRCLFdBQVIsRUFBcUJELElBQXJCLENBQWpCO0lBQ0FFLFFBQVEsQ0FBQ3BILFFBQVRvSCxHQUFvQix3REFBMkJBLFFBQVEsQ0FBQ3BILFFBQXBDLENBQXBCb0g7SUFDQSxJQUFJQyxjQUFjLEdBQUcsRUFBckI7SUFFQSxJQUNFLCtCQUFlRCxRQUFRLENBQUNwSCxRQUF4QixLQUNBb0gsUUFBUSxDQUFDRSxZQURULElBRUFMLFNBSEYsRUFJRTtNQUNBLE1BQU1yQixLQUFLLEdBQUcseUNBQXVCd0IsUUFBUSxDQUFDRSxZQUFoQyxDQUFkO01BRUEsTUFBTTtRQUFFWCxNQUFGO1FBQVVUO01BQVYsSUFBcUJULGFBQWEsQ0FDdEMyQixRQUFRLENBQUNwSCxRQUQ2QixFQUV0Q29ILFFBQVEsQ0FBQ3BILFFBRjZCLEVBR3RDNEYsS0FIc0MsQ0FBeEM7TUFNQSxJQUFJZSxNQUFKLEVBQVk7UUFDVlUsY0FBYyxHQUFHLGlDQUFxQjtVQUNwQ3JILFFBQVEsRUFBRTJHLE1BRDBCO1VBRXBDWSxJQUFJLEVBQUVILFFBQVEsQ0FBQ0csSUFGcUI7VUFHcEMzQixLQUFLLEVBQUVnQixrQkFBa0IsQ0FBQ2hCLEtBQUQsRUFBUU0sTUFBUjtRQUhXLENBQXJCLENBQWpCbUI7TUFLRDtJQUNGLENBRUQ7SUFDQSxNQUFNbkgsWUFBWSxHQUNoQmtILFFBQVEsQ0FBQzVCLE1BQVQ0QixLQUFvQkYsSUFBSSxDQUFDMUIsTUFBekI0QixHQUNJQSxRQUFRLENBQUN6TSxJQUFUeU0sQ0FBYzdGLEtBQWQ2RixDQUFvQkEsUUFBUSxDQUFDNUIsTUFBVDRCLENBQWdCakMsTUFBcENpQyxDQURKQSxHQUVJQSxRQUFRLENBQUN6TSxJQUhmO0lBS0EsT0FBUXNNLFNBQVMsR0FDYixDQUFDL0csWUFBRCxFQUFlbUgsY0FBYyxJQUFJbkgsWUFBakMsQ0FEYSxHQUViQSxZQUZKO0VBR0QsQ0FBQyxRQUFPZCxDQUFQLEVBQVU7SUFDVixPQUFRNkgsU0FBUyxHQUFHLENBQUNFLFdBQUQsQ0FBSCxHQUFtQkEsV0FBcEM7RUFDRDtBQUNGO0FBRUQsTUFBTUssZUFBZSxHQUFHQyxNQUFNLENBQUMsaUJBQUQsQ0FBOUI7QUFDTyxTQUFTQyxnQkFBVCxDQUEwQmhMLEdBQTFCLEVBQTZDO0VBQ2xELE9BQU93QyxNQUFNLENBQUM4QyxjQUFQOUMsQ0FBc0J4QyxHQUF0QndDLEVBQTJCc0ksZUFBM0J0SSxFQUE0QyxFQUE1Q0EsQ0FBUDtBQUNEO0FBRUQsU0FBU3lJLFlBQVQsQ0FBc0I3SyxNQUF0QixFQUEwQ3RELEdBQTFDLEVBQW9EdUQsRUFBcEQsRUFBNkQ7RUFDM0Q7RUFDQTtFQUNBLE9BQU87SUFDTHZELEdBQUcsRUFBRXlMLFdBQVcsQ0FBQzhCLFdBQVcsQ0FBQ2pLLE1BQU0sQ0FBQ2tELFFBQVIsRUFBa0J4RyxHQUFsQixDQUFaLENBRFg7SUFFTHVELEVBQUUsRUFBRUEsRUFBRSxHQUFHa0ksV0FBVyxDQUFDOEIsV0FBVyxDQUFDakssTUFBTSxDQUFDa0QsUUFBUixFQUFrQmpELEVBQWxCLENBQVosQ0FBZCxHQUFtREE7RUFGcEQsQ0FBUDtBQUlEO0FBcURELE1BQU02Syx1QkFBdUIsR0FDM0JuRyxVQUVBLEtBSEY7QUFLQSxTQUFTb0csVUFBVCxDQUFvQnJPLEdBQXBCLEVBQWlDc08sUUFBakMsRUFBaUU7RUFDL0QsT0FBTyxLQUFLLENBQUN0TyxHQUFELEVBQU07SUFDaEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBdU8sV0FBVyxFQUFFO0VBWkcsQ0FBTixDQUFMLENBYUo1SixJQWJJLENBYUU2SixHQUFELElBQVM7SUFDZixJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsRUFBVCxFQUFhO01BQ1gsSUFBSUgsUUFBUSxHQUFHLENBQVhBLElBQWdCRSxHQUFHLENBQUNFLE1BQUpGLElBQWMsR0FBbEMsRUFBdUM7UUFDckMsT0FBT0gsVUFBVSxDQUFDck8sR0FBRCxFQUFNc08sUUFBUSxHQUFHLENBQWpCLENBQWpCO01BQ0Q7TUFDRCxNQUFNLElBQUlsSixLQUFKLENBQVcsNkJBQVgsQ0FBTjtJQUNEO0lBRUQsT0FBT29KLEdBQUcsQ0FBQ0csSUFBSkgsRUFBUDtFQUNELENBdEJNLENBQVA7QUF1QkQ7QUFFRCxTQUFTSSxhQUFULENBQXVCQyxRQUF2QixFQUF5Q0MsY0FBekMsRUFBa0U7RUFDaEUsT0FBTyxVQUFVLENBQUNELFFBQUQsRUFBV0MsY0FBYyxHQUFHLENBQUgsR0FBTyxDQUFoQyxDQUFWLENBQTZDckwsS0FBN0MsQ0FBb0RQLEdBQUQsSUFBZ0I7SUFDeEU7SUFDQTtJQUNBO0lBQ0EsSUFBSSxDQUFDNEwsY0FBTCxFQUFxQjtNQUNuQlosZ0JBQWdCLENBQUNoTCxHQUFELENBQWhCZ0w7SUFDRDtJQUNELE1BQU1oTCxHQUFOO0VBQ0QsQ0FSTSxDQUFQO0FBU0Q7QUFFYyxNQUFNcEQsTUFBNkI7RUFPaEQ7O0FBUGdELElBT2hELENBSUE7RUFrQkFpUCxXQUFXLENBQ1R2SSxTQURTLEVBRVQ0RixNQUZTLEVBR1Q3SSxHQUhTLEVBSVQ7SUFDRXlMLFlBREY7SUFFRUMsVUFGRjtJQUdFQyxHQUhGO0lBSUVDLE9BSkY7SUFLRUMsU0FMRjtJQU1FQyxrQkFORjtJQU9Fbk0sR0FQRjtJQVFFb00sWUFSRjtJQVNFQyxVQVRGO0lBVUU5SCxNQVZGO0lBV0UrSCxPQVhGO0lBWUU5SDtFQVpGLENBSlMsRUErQlQ7SUFBQSxLQTNERndFLEtBMkRFO0lBQUEsS0ExREYxRixRQTBERTtJQUFBLEtBekRGNEYsS0F5REU7SUFBQSxLQXhERnFELE1Bd0RFO0lBQUEsS0F2REZ6RSxRQXVERTtJQUFBLEtBbERGMEUsVUFrREU7SUFBQSxLQWhERkMsR0FnREUsR0FoRGtDLEVBZ0RsQztJQUFBLEtBL0NGQyxHQStDRTtJQUFBLEtBOUNGQyxHQThDRTtJQUFBLEtBN0NGWixVQTZDRTtJQUFBLEtBNUNGYSxJQTRDRTtJQUFBLEtBM0NGckgsTUEyQ0U7SUFBQSxLQTFDRnNILFFBMENFO0lBQUEsS0F6Q0ZDLEtBeUNFO0lBQUEsS0F4Q0ZULFVBd0NFO0lBQUEsS0F2Q0ZVLGNBdUNFO0lBQUEsS0F0Q0ZDLFFBc0NFO0lBQUEsS0FyQ0Z6SSxNQXFDRTtJQUFBLEtBcENGK0gsT0FvQ0U7SUFBQSxLQW5DRjlILGFBbUNFO0lBQUEsS0FxR0Z5SSxVQXJHRSxHQXFHWS9MLENBQUQsSUFBNEI7TUFDdkMsTUFBTWdNLEtBQUssR0FBR2hNLENBQUMsQ0FBQ2dNLEtBQWhCO01BRUEsSUFBSSxDQUFDQSxLQUFMLEVBQVk7UUFDVjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1VBQUU1SixRQUFGO1VBQVk0RjtRQUFaLElBQXNCLElBQTVCO1FBQ0EsS0FBS2lFLFdBQUwsQ0FDRSxjQURGLEVBRUUsaUNBQXFCO1VBQUU3SixRQUFRLEVBQUVpRixXQUFXLENBQUNqRixRQUFELENBQXZCO1VBQW1DNEY7UUFBbkMsQ0FBckIsQ0FGRixFQUdFLG9CQUhGO1FBS0E7TUFDRDtNQUVELElBQUksQ0FBQ2dFLEtBQUssQ0FBQ0UsR0FBWCxFQUFnQjtRQUNkO01BQ0Q7TUFFRCxNQUFNO1FBQUV0USxHQUFGO1FBQU91RCxFQUFQO1FBQVdDO01BQVgsSUFBdUI0TSxLQUE3QjtNQUVBLE1BQU07UUFBRTVKO01BQUYsSUFBZSx3Q0FBaUJ4RyxHQUFqQixDQUFyQixDQUVBO01BQ0E7TUFDQSxJQUFJLEtBQUtnUSxLQUFMLElBQWN6TSxFQUFFLEtBQUssS0FBS2tNLE1BQTFCLElBQW9DakosUUFBUSxLQUFLLEtBQUtBLFFBQTFELEVBQW9FO1FBQ2xFO01BQ0QsQ0FFRDtNQUNBO01BQ0EsSUFBSSxLQUFLc0osSUFBTCxJQUFhLENBQUMsS0FBS0EsSUFBTCxDQUFVTSxLQUFWLENBQWxCLEVBQW9DO1FBQ2xDO01BQ0Q7TUFFRCxLQUFLRyxNQUFMLENBQ0UsY0FERixFQUVFdlEsR0FGRixFQUdFdUQsRUFIRixFQUlFbUMsTUFBTSxDQUFDa0UsTUFBUGxFLENBQWMsRUFBZEEsRUFBa0JsQyxPQUFsQmtDLEVBQTJCO1FBQ3pCcEIsT0FBTyxFQUFFZCxPQUFPLENBQUNjLE9BQVJkLElBQW1CLEtBQUswTTtNQURSLENBQTNCeEssQ0FKRjtJQVFELENBdkpDLENBQ0E7SUFDQSxLQUFLd0csS0FBTCxHQUFhLHFEQUF3QjFGLFNBQXhCLENBQWIsQ0FFQTtJQUNBLEtBQUtrSixVQUFMLEdBQWtCLEVBQWxCLENBQ0E7SUFDQTtJQUNBO0lBQ0EsSUFBSWxKLFNBQVEsS0FBSyxTQUFqQixFQUE0QjtNQUMxQixLQUFLa0osVUFBTCxDQUFnQixLQUFLeEQsS0FBckIsSUFBOEI7UUFDNUJrRCxTQUQ0QjtRQUU1Qm9CLFdBQVcsRUFBRW5CLGtCQUZlO1FBRzVCcEssS0FBSyxFQUFFK0osWUFIcUI7UUFJNUI5TCxHQUo0QjtRQUs1QnVOLE9BQU8sRUFBRXpCLFlBQVksSUFBSUEsWUFBWSxDQUFDeUIsT0FMVjtRQU01QkMsT0FBTyxFQUFFMUIsWUFBWSxJQUFJQSxZQUFZLENBQUMwQjtNQU5WLENBQTlCO0lBUUQ7SUFFRCxLQUFLaEIsVUFBTCxDQUFnQixPQUFoQixJQUEyQjtNQUN6Qk4sU0FBUyxFQUFFRixHQURjO01BRXpCc0IsV0FBVyxFQUFFO0lBRlksQ0FBM0IsQ0FPQTtJQUNBO0lBQ0EsS0FBSy9ILE1BQUwsR0FBYzNJLE1BQU0sQ0FBQzJJLE1BQXJCO0lBRUEsS0FBS3dHLFVBQUwsR0FBa0JBLFVBQWxCO0lBQ0EsS0FBS3pJLFFBQUwsR0FBZ0JBLFNBQWhCO0lBQ0EsS0FBSzRGLEtBQUwsR0FBYUEsTUFBYixDQUNBO0lBQ0E7SUFDQSxLQUFLcUQsTUFBTDtJQUNFO0lBQ0EsK0JBQWVqSixTQUFmLEtBQTRCbUssYUFBYSxDQUFDQyxVQUExQyxHQUF1RHBLLFNBQXZELEdBQWtFakQsR0FGcEU7SUFHQSxLQUFLeUgsUUFBTCxHQUFnQkEsUUFBaEI7SUFDQSxLQUFLNEUsR0FBTCxHQUFXTixZQUFYO0lBQ0EsS0FBS08sR0FBTCxHQUFXLElBQVg7SUFDQSxLQUFLRSxRQUFMLEdBQWdCWixPQUFoQixDQUNBO0lBQ0E7SUFDQSxLQUFLYSxLQUFMLEdBQWEsSUFBYjtJQUVBLEtBQUtULFVBQUwsR0FBa0JBLFVBQWxCO0lBRUEsSUFBSXRILEtBQUosRUFBcUMsRUFJcEM7SUFFRCxXQUFtQyxFQTJDbEM7RUFDRjtFQXNERDRJLE1BQU0sR0FBUztJQUNiaFAsTUFBTSxDQUFDaVAsUUFBUGpQLENBQWdCZ1AsTUFBaEJoUDtFQUNELENBRUQ7OztFQUdBa1AsSUFBSSxHQUFHO0lBQ0xsUCxNQUFNLENBQUNtUCxPQUFQblAsQ0FBZWtQLElBQWZsUDtFQUNELENBRUQ7Ozs7OztFQU1BNkksSUFBSSxDQUFDMUssR0FBRCxFQUFXdUQsRUFBTyxHQUFHdkQsR0FBckIsRUFBMEJ3RCxPQUEwQixHQUFHLEVBQXZELEVBQTJEO0lBQzdEO0lBQUMsQ0FBQztNQUFFeEQsR0FBRjtNQUFPdUQ7SUFBUCxJQUFjNEssWUFBWSxDQUFDLElBQUQsRUFBT25PLEdBQVAsRUFBWXVELEVBQVosQ0FBM0I7SUFDRCxPQUFPLEtBQUtnTixNQUFMLENBQVksV0FBWixFQUF5QnZRLEdBQXpCLEVBQThCdUQsRUFBOUIsRUFBa0NDLE9BQWxDLENBQVA7RUFDRCxDQUVEOzs7Ozs7RUFNQWEsT0FBTyxDQUFDckUsR0FBRCxFQUFXdUQsRUFBTyxHQUFHdkQsR0FBckIsRUFBMEJ3RCxPQUEwQixHQUFHLEVBQXZELEVBQTJEO0lBQ2hFO0lBQUMsQ0FBQztNQUFFeEQsR0FBRjtNQUFPdUQ7SUFBUCxJQUFjNEssWUFBWSxDQUFDLElBQUQsRUFBT25PLEdBQVAsRUFBWXVELEVBQVosQ0FBM0I7SUFDRCxPQUFPLEtBQUtnTixNQUFMLENBQVksY0FBWixFQUE0QnZRLEdBQTVCLEVBQWlDdUQsRUFBakMsRUFBcUNDLE9BQXJDLENBQVA7RUFDRDtFQUVELE1BQU0rTSxNQUFOLENBQ0VVLE1BREYsRUFFRWpSLEdBRkYsRUFHRXVELEVBSEYsRUFJRUMsT0FKRixFQUtvQjtJQUNsQixJQUFJLENBQUNvSSxVQUFVLENBQUM1TCxHQUFELENBQWYsRUFBc0I7TUFDcEI2QixNQUFNLENBQUNpUCxRQUFQalAsQ0FBZ0JWLElBQWhCVSxHQUF1QjdCLEdBQXZCNkI7TUFDQSxPQUFPLEtBQVA7SUFDRDtJQUVELElBQUksQ0FBRTJCLE9BQUQsQ0FBaUIwTixFQUF0QixFQUEwQjtNQUN4QixLQUFLbEIsS0FBTCxHQUFhLEtBQWI7SUFDRCxDQUNEO0lBQ0EsSUFBSW1CLFNBQUosRUFBUTtNQUNOQyxXQUFXLENBQUNDLElBQVpELENBQWlCLGFBQWpCQTtJQUNEO0lBRUQsSUFBSSxLQUFLbkIsY0FBVCxFQUF5QjtNQUN2QixLQUFLcUIsa0JBQUwsQ0FBd0IsS0FBS3JCLGNBQTdCO0lBQ0Q7SUFFRDFNLEVBQUUsR0FBRytILFNBQVMsQ0FBQy9ILEVBQUQsRUFBSyxLQUFLa0UsTUFBVixFQUFrQixLQUFLQyxhQUF2QixDQUFkbkU7SUFDQSxNQUFNZ08sU0FBUyxHQUFHaEcsU0FBUyxDQUN6QkMsV0FBVyxDQUFDakksRUFBRCxDQUFYaUksR0FBa0JFLFdBQVcsQ0FBQ25JLEVBQUQsQ0FBN0JpSSxHQUFvQ2pJLEVBRFgsRUFFekIsS0FBS2tFLE1BRm9CLENBQTNCO0lBSUEsS0FBS3dJLGNBQUwsR0FBc0IxTSxFQUF0QixDQUVBO0lBQ0E7SUFFQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLENBQUVDLE9BQUQsQ0FBaUIwTixFQUFsQixJQUF3QixLQUFLTSxlQUFMLENBQXFCRCxTQUFyQixDQUE1QixFQUE2RDtNQUMzRCxLQUFLOUIsTUFBTCxHQUFjOEIsU0FBZDtNQUNBelIsTUFBTSxDQUFDMkksTUFBUDNJLENBQWMrSyxJQUFkL0ssQ0FBbUIsaUJBQW5CQSxFQUFzQ3lELEVBQXRDekQsRUFDQTtNQUNBLEtBQUt1USxXQUFMLENBQWlCWSxNQUFqQixFQUF5QmpSLEdBQXpCLEVBQThCdUQsRUFBOUIsRUFBa0NDLE9BQWxDO01BQ0EsS0FBS2lPLFlBQUwsQ0FBa0JGLFNBQWxCO01BQ0EsS0FBS0csTUFBTCxDQUFZLEtBQUtoQyxVQUFMLENBQWdCLEtBQUt4RCxLQUFyQixDQUFaO01BQ0FwTSxNQUFNLENBQUMySSxNQUFQM0ksQ0FBYytLLElBQWQvSyxDQUFtQixvQkFBbkJBLEVBQXlDeUQsRUFBekN6RDtNQUNBLE9BQU8sSUFBUDtJQUNELENBRUQ7SUFDQTtJQUNBO0lBQ0EsTUFBTTZSLEtBQUssR0FBRyxNQUFNLEtBQUsxQyxVQUFMLENBQWdCMkMsV0FBaEIsRUFBcEI7SUFDQSxNQUFNO01BQUVDLFVBQVUsRUFBRUM7SUFBZCxJQUEyQixNQUFNLEtBQUs3QyxVQUFMLENBQWdCOEMscUJBQXZEO0lBRUEsSUFBSUMsTUFBTSxHQUFHLHdDQUFpQmhTLEdBQWpCLENBQWI7SUFFQSxJQUFJO01BQUV3RyxRQUFGO01BQVk0RjtJQUFaLElBQXNCNEYsTUFBMUI7SUFFQUEsTUFBTSxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JELE1BQWxCLEVBQTBCTCxLQUExQixDQUFUSztJQUVBLElBQUlBLE1BQU0sQ0FBQ3hMLFFBQVB3TCxLQUFvQnhMLFFBQXhCLEVBQWtDO01BQ2hDQSxRQUFRLEdBQUd3TCxNQUFNLENBQUN4TCxRQUFsQkE7TUFDQXhHLEdBQUcsR0FBRyxpQ0FBcUJnUyxNQUFyQixDQUFOaFM7SUFDRCxDQUVEO0lBQ0E7SUFDQTtJQUNBd0csUUFBUSxHQUFHQSxRQUFRLEdBQ2YscURBQXdCa0YsV0FBVyxDQUFDbEYsUUFBRCxDQUFuQyxDQURlLEdBRWZBLFFBRkpBLENBSUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUksQ0FBQyxLQUFLMEwsUUFBTCxDQUFjWCxTQUFkLENBQUwsRUFBK0I7TUFDN0JOLE1BQU0sR0FBRyxjQUFUQTtJQUNEO0lBRUQsSUFBSS9FLEtBQUssR0FBRyxxREFBd0IxRixRQUF4QixDQUFaO0lBQ0EsTUFBTTtNQUFFbEMsT0FBTyxHQUFHO0lBQVosSUFBc0JkLE9BQTVCLENBRUE7SUFDQTtJQUNBLElBQUltRCxVQUFVLEdBQUdwRCxFQUFqQjtJQUVBLElBQUkwRSxJQUFKLEVBQXFDO01BQ25DdEIsVUFBVSxHQUFHLDhCQUNYLHdDQUFpQnBELEVBQWpCLEVBQXFCaUQsUUFEVixFQUVYbUwsS0FGVyxFQUdYM0csUUFIVyxFQUlYOEcsUUFKVyxFQUtYMUYsS0FMVyxFQU1WaEcsQ0FBRCxJQUFlLEtBQUs2TCxZQUFMLENBQWtCO1FBQUV6TCxRQUFRLEVBQUVKO01BQVosQ0FBbEIsRUFBbUN1TCxLQUFuQyxFQUEwQ25MLFFBTjlDLENBQWJHO01BU0EsSUFBSUEsVUFBVSxLQUFLcEQsRUFBbkIsRUFBdUI7UUFDckIsTUFBTTRPLGFBQWEsR0FBRyxxREFDcEIsS0FBS0YsWUFBTCxDQUNFdk0sTUFBTSxDQUFDa0UsTUFBUGxFLENBQWMsRUFBZEEsRUFBa0JzTSxNQUFsQnRNLEVBQTBCO1VBQUVjLFFBQVEsRUFBRUc7UUFBWixDQUExQmpCLENBREYsRUFFRWlNLEtBRkYsRUFHRSxLQUhGLEVBSUVuTCxRQUxrQixDQUF0QixDQVFBO1FBQ0E7UUFDQSxJQUFJbUwsS0FBSyxDQUFDckUsUUFBTnFFLENBQWVRLGFBQWZSLENBQUosRUFBbUM7VUFDakN6RixLQUFLLEdBQUdpRyxhQUFSakc7VUFDQTFGLFFBQVEsR0FBRzJMLGFBQVgzTDtVQUNBd0wsTUFBTSxDQUFDeEwsUUFBUHdMLEdBQWtCeEwsUUFBbEJ3TDtVQUNBaFMsR0FBRyxHQUFHLGlDQUFxQmdTLE1BQXJCLENBQU5oUztRQUNEO01BQ0Y7SUFDRjtJQUNEMkcsVUFBVSxHQUFHNEUsU0FBUyxDQUFDRyxXQUFXLENBQUMvRSxVQUFELENBQVosRUFBMEIsS0FBS2MsTUFBL0IsQ0FBdEJkO0lBRUEsSUFBSSwrQkFBZXVGLEtBQWYsQ0FBSixFQUEyQjtNQUN6QixNQUFNa0csUUFBUSxHQUFHLHdDQUFpQnpMLFVBQWpCLENBQWpCO01BQ0EsTUFBTXdGLFVBQVUsR0FBR2lHLFFBQVEsQ0FBQzVMLFFBQTVCO01BRUEsTUFBTTZMLFVBQVUsR0FBRywrQkFBY25HLEtBQWQsQ0FBbkI7TUFDQSxNQUFNb0csVUFBVSxHQUFHLG1DQUFnQkQsVUFBaEIsRUFBNEJsRyxVQUE1QixDQUFuQjtNQUNBLE1BQU1vRyxpQkFBaUIsR0FBR3JHLEtBQUssS0FBS0MsVUFBcEM7TUFDQSxNQUFNMEIsY0FBYyxHQUFHMEUsaUJBQWlCLEdBQ3BDdEcsYUFBYSxDQUFDQyxLQUFELEVBQVFDLFVBQVIsRUFBb0JDLEtBQXBCLENBRHVCLEdBRW5DLEVBRkw7TUFJQSxJQUFJLENBQUNrRyxVQUFELElBQWdCQyxpQkFBaUIsSUFBSSxDQUFDMUUsY0FBYyxDQUFDVixNQUF6RCxFQUFrRTtRQUNoRSxNQUFNcUYsYUFBYSxHQUFHOU0sTUFBTSxDQUFDQyxJQUFQRCxDQUFZMk0sVUFBVSxDQUFDN0YsTUFBdkI5RyxFQUErQitNLE1BQS9CL00sQ0FDbkJrSCxLQUFELElBQVcsQ0FBQ1IsS0FBSyxDQUFDUSxLQUFELENBREdsSCxDQUF0QjtRQUlBLElBQUk4TSxhQUFhLENBQUM3RyxNQUFkNkcsR0FBdUIsQ0FBM0IsRUFBOEI7VUFDNUIsVUFBMkM7WUFDekNyUCxPQUFPLENBQUNnRCxJQUFSaEQsQ0FDRyxHQUNDb1AsaUJBQWlCLEdBQ1osb0JBRFksR0FFWixpQ0FDTiw4QkFKRCxHQUtHLGVBQWNDLGFBQWEsQ0FBQ3RGLElBQWRzRixDQUNiLElBRGFBLENBRWIsOEJBUk5yUDtVQVVEO1VBRUQsTUFBTSxJQUFJaUMsS0FBSixDQUNKLENBQUNtTixpQkFBaUIsR0FDYiwwQkFBeUJ2UyxHQUFJLG9DQUFtQ3dTLGFBQWEsQ0FBQ3RGLElBQWRzRixDQUMvRCxJQUQrREEsQ0FFL0QsaUNBSFksR0FJYiw4QkFBNkJyRyxVQUFXLDhDQUE2Q0QsS0FBTSxLQUpoRyxJQUtHLDRDQUNDcUcsaUJBQWlCLEdBQ2IsMkJBRGEsR0FFYixzQkFDTCxFQVZDLENBQU47UUFZRDtNQUNGLENBaENELE1BZ0NPLElBQUlBLGlCQUFKLEVBQXVCO1FBQzVCaFAsRUFBRSxHQUFHLGlDQUNIbUMsTUFBTSxDQUFDa0UsTUFBUGxFLENBQWMsRUFBZEEsRUFBa0IwTSxRQUFsQjFNLEVBQTRCO1VBQzFCYyxRQUFRLEVBQUVxSCxjQUFjLENBQUNWLE1BREM7VUFFMUJmLEtBQUssRUFBRWdCLGtCQUFrQixDQUFDaEIsS0FBRCxFQUFReUIsY0FBYyxDQUFDbkIsTUFBdkI7UUFGQyxDQUE1QmhILENBREcsQ0FBTG5DO01BTUQsQ0FQTSxNQU9BO1FBQ0w7UUFDQW1DLE1BQU0sQ0FBQ2tFLE1BQVBsRSxDQUFjMEcsS0FBZDFHLEVBQXFCNE0sVUFBckI1TTtNQUNEO0lBQ0Y7SUFFRDVGLE1BQU0sQ0FBQzJJLE1BQVAzSSxDQUFjK0ssSUFBZC9LLENBQW1CLGtCQUFuQkEsRUFBdUN5RCxFQUF2Q3pEO0lBRUEsSUFBSTtNQUNGLE1BQU00UyxTQUFTLEdBQUcsTUFBTSxLQUFLQyxZQUFMLENBQ3RCekcsS0FEc0IsRUFFdEIxRixRQUZzQixFQUd0QjRGLEtBSHNCLEVBSXRCN0ksRUFKc0IsRUFLdEJlLE9BTHNCLENBQXhCO01BT0EsSUFBSTtRQUFFbEIsS0FBRjtRQUFTNkIsS0FBVDtRQUFnQndMLE9BQWhCO1FBQXlCQztNQUF6QixJQUFxQ2dDLFNBQXpDLENBRUE7TUFDQSxJQUNFLENBQUNqQyxPQUFPLElBQUlDLE9BQVosS0FDQXpMLEtBREEsSUFFQ0EsS0FBRCxDQUFlMk4sU0FGZixJQUdDM04sS0FBRCxDQUFlMk4sU0FBZixDQUF5QkMsWUFKM0IsRUFLRTtRQUNBLE1BQU1DLFdBQVcsR0FBSTdOLEtBQUQsQ0FBZTJOLFNBQWYsQ0FBeUJDLFlBQTdDLENBRUE7UUFDQTtRQUNBO1FBQ0EsSUFBSUMsV0FBVyxDQUFDekgsVUFBWnlILENBQXVCLEdBQXZCQSxDQUFKLEVBQWlDO1VBQy9CLE1BQU1DLFVBQVUsR0FBRyx3Q0FBaUJELFdBQWpCLENBQW5CO1VBQ0EsS0FBS2IsWUFBTCxDQUFrQmMsVUFBbEIsRUFBOEJwQixLQUE5QjtVQUVBLElBQUlBLEtBQUssQ0FBQ3JFLFFBQU5xRSxDQUFlb0IsVUFBVSxDQUFDdk0sUUFBMUJtTCxDQUFKLEVBQXlDO1lBQ3ZDLE9BQU8sS0FBS3BCLE1BQUwsQ0FDTCxjQURLLEVBRUx1QyxXQUZLLEVBR0xBLFdBSEssRUFJTHRQLE9BSkssQ0FBUDtVQU1EO1FBQ0Y7UUFFRDNCLE1BQU0sQ0FBQ2lQLFFBQVBqUCxDQUFnQlYsSUFBaEJVLEdBQXVCaVIsV0FBdkJqUjtRQUNBLE9BQU8sSUFBSW1SLE9BQUosQ0FBWSxNQUFNLENBQUUsQ0FBcEIsQ0FBUDtNQUNEO01BRURsVCxNQUFNLENBQUMySSxNQUFQM0ksQ0FBYytLLElBQWQvSyxDQUFtQixxQkFBbkJBLEVBQTBDeUQsRUFBMUN6RDtNQUNBLEtBQUt1USxXQUFMLENBQ0VZLE1BREYsRUFFRWpSLEdBRkYsRUFHRXNMLFNBQVMsQ0FBQy9ILEVBQUQsRUFBSyxLQUFLa0UsTUFBVixFQUFrQixLQUFLQyxhQUF2QixDQUhYLEVBSUVsRSxPQUpGO01BT0EsVUFBMkM7UUFDekMsTUFBTXlQLE9BQVksR0FBRyxLQUFLdkQsVUFBTCxDQUFnQixPQUFoQixFQUF5Qk4sU0FBOUM7UUFDRXZOLE1BQUQsQ0FBZ0JxUixJQUFoQixDQUFxQkMsYUFBckIsR0FDQ0YsT0FBTyxDQUFDL0ksZUFBUitJLEtBQTRCQSxPQUFPLENBQUM5SSxtQkFBcEM4SSxJQUNBLENBQUVQLFNBQVMsQ0FBQ3RELFNBQVgsQ0FBNkJsRixlQUYvQjtNQUdGO01BRUQsTUFBTSxLQUFLakgsR0FBTCxDQUFTaUosS0FBVCxFQUFnQjFGLFFBQWhCLEVBQTJCNEYsS0FBM0IsRUFBa0NtRixTQUFsQyxFQUE2Q21CLFNBQTdDLEVBQXdEalAsS0FBeEQsQ0FDSFcsQ0FBRCxJQUFPO1FBQ0wsSUFBSUEsQ0FBQyxDQUFDOEcsU0FBTixFQUFpQjlILEtBQUssR0FBR0EsS0FBSyxJQUFJZ0IsQ0FBakJoQixDQUFqQixLQUNLLE1BQU1nQixDQUFOO01BQ04sQ0FKRyxDQUFOO01BT0EsSUFBSWhCLEtBQUosRUFBVztRQUNUdEQsTUFBTSxDQUFDMkksTUFBUDNJLENBQWMrSyxJQUFkL0ssQ0FBbUIsa0JBQW5CQSxFQUF1Q3NELEtBQXZDdEQsRUFBOEN5UixTQUE5Q3pSO1FBQ0EsTUFBTXNELEtBQU47TUFDRDtNQUVELElBQUk2RSxLQUFKLEVBQTJDLEVBSTFDO01BQ0RuSSxNQUFNLENBQUMySSxNQUFQM0ksQ0FBYytLLElBQWQvSyxDQUFtQixxQkFBbkJBLEVBQTBDeUQsRUFBMUN6RDtNQUVBLE9BQU8sSUFBUDtJQUNELENBQUMsUUFBT29ELEdBQVAsRUFBWTtNQUNaLElBQUlBLEdBQUcsQ0FBQ2dJLFNBQVIsRUFBbUI7UUFDakIsT0FBTyxLQUFQO01BQ0Q7TUFDRCxNQUFNaEksR0FBTjtJQUNEO0VBQ0Y7RUFFRG1OLFdBQVcsQ0FDVFksTUFEUyxFQUVUalIsR0FGUyxFQUdUdUQsRUFIUyxFQUlUQyxPQUEwQixHQUFHLEVBSnBCLEVBS0g7SUFDTixVQUEyQztNQUN6QyxJQUFJLE9BQU8zQixNQUFNLENBQUNtUCxPQUFkLEtBQTBCLFdBQTlCLEVBQTJDO1FBQ3pDN04sT0FBTyxDQUFDQyxLQUFSRCxDQUFlLDJDQUFmQTtRQUNBO01BQ0Q7TUFFRCxJQUFJLE9BQU90QixNQUFNLENBQUNtUCxPQUFQblAsQ0FBZW9QLE1BQWZwUCxDQUFQLEtBQWtDLFdBQXRDLEVBQW1EO1FBQ2pEc0IsT0FBTyxDQUFDQyxLQUFSRCxDQUFlLDJCQUEwQjhOLE1BQU8sbUJBQWhEOU47UUFDQTtNQUNEO0lBQ0Y7SUFFRCxJQUFJOE4sTUFBTSxLQUFLLFdBQVhBLElBQTBCLHlCQUFhMU4sRUFBM0MsRUFBK0M7TUFDN0MsS0FBSzJNLFFBQUwsR0FBZ0IxTSxPQUFPLENBQUNjLE9BQXhCO01BQ0EsTUFBTSxDQUFDME0sT0FBUCxDQUFlQyxNQUFmLEVBQ0U7UUFDRWpSLEdBREY7UUFFRXVELEVBRkY7UUFHRUMsT0FIRjtRQUlFOE0sR0FBRyxFQUFFO01BSlAsQ0FERjtNQU9FO01BQ0E7TUFDQTtNQUNBLEVBVkYsRUFXRS9NLEVBWEY7SUFhRDtFQUNGO0VBRUQsTUFBTTZQLG9CQUFOLENBQ0VsUSxHQURGLEVBRUVzRCxRQUZGLEVBR0U0RixLQUhGLEVBSUU3SSxFQUpGLEVBS0U4UCxhQUxGLEVBTTZCO0lBQzNCLElBQUluUSxHQUFHLENBQUNnSSxTQUFSLEVBQW1CO01BQ2pCO01BQ0EsTUFBTWhJLEdBQU47SUFDRDtJQUVELElBQUk4SyxlQUFlLElBQUk5SyxHQUFuQjhLLElBQTBCcUYsYUFBOUIsRUFBNkM7TUFDM0N2VCxNQUFNLENBQUMySSxNQUFQM0ksQ0FBYytLLElBQWQvSyxDQUFtQixrQkFBbkJBLEVBQXVDb0QsR0FBdkNwRCxFQUE0Q3lELEVBQTVDekQsRUFFQTtNQUNBO01BQ0E7TUFDQTtNQUVBO01BQ0ErQixNQUFNLENBQUNpUCxRQUFQalAsQ0FBZ0JWLElBQWhCVSxHQUF1QjBCLEVBQXZCMUIsQ0FFQTtNQUNBO01BQ0EsTUFBTW9KLHNCQUFzQixFQUE1QjtJQUNEO0lBRUQsSUFBSTtNQUNGLE1BQU07UUFBRXFJLElBQUksRUFBRWxFLFNBQVI7UUFBbUJvQjtNQUFuQixJQUFtQyxNQUFNLEtBQUsrQyxjQUFMLENBQzdDLFNBRDZDLENBQS9DO01BR0EsTUFBTWIsU0FBMkIsR0FBRztRQUNsQ3RELFNBRGtDO1FBRWxDb0IsV0FGa0M7UUFHbEN0TixHQUhrQztRQUlsQ0UsS0FBSyxFQUFFRjtNQUoyQixDQUFwQztNQU9BLElBQUk7UUFDRndQLFNBQVMsQ0FBQ3pOLEtBQVZ5TixHQUFrQixNQUFNLEtBQUt4SSxlQUFMLENBQXFCa0YsU0FBckIsRUFBZ0M7VUFDdERsTSxHQURzRDtVQUV0RHNELFFBRnNEO1VBR3RENEY7UUFIc0QsQ0FBaEMsQ0FBeEJzRztNQUtELENBQUMsUUFBT2MsTUFBUCxFQUFlO1FBQ2ZyUSxPQUFPLENBQUNDLEtBQVJELENBQWMseUNBQWRBLEVBQXlEcVEsTUFBekRyUTtRQUNBdVAsU0FBUyxDQUFDek4sS0FBVnlOLEdBQWtCLEVBQWxCQTtNQUNEO01BRUQsT0FBT0EsU0FBUDtJQUNELENBQUMsUUFBT2UsWUFBUCxFQUFxQjtNQUNyQixPQUFPLEtBQUtMLG9CQUFMLENBQTBCSyxZQUExQixFQUF3Q2pOLFFBQXhDLEVBQWtENEYsS0FBbEQsRUFBeUQ3SSxFQUF6RCxFQUE2RCxJQUE3RCxDQUFQO0lBQ0Q7RUFDRjtFQUVELE1BQU1vUCxZQUFOLENBQ0V6RyxLQURGLEVBRUUxRixRQUZGLEVBR0U0RixLQUhGLEVBSUU3SSxFQUpGLEVBS0VlLE9BQWdCLEdBQUcsS0FMckIsRUFNNkI7SUFDM0IsSUFBSTtNQUNGLE1BQU1vUCxlQUFlLEdBQUcsS0FBS2hFLFVBQUwsQ0FBZ0J4RCxLQUFoQixDQUF4QjtNQUVBLElBQUk1SCxPQUFPLElBQUlvUCxlQUFYcFAsSUFBOEIsS0FBSzRILEtBQUwsS0FBZUEsS0FBakQsRUFBd0Q7UUFDdEQsT0FBT3dILGVBQVA7TUFDRDtNQUVELE1BQU1oQixTQUEyQixHQUFHZ0IsZUFBZSxHQUMvQ0EsZUFEK0MsR0FFL0MsTUFBTSxLQUFLSCxjQUFMLENBQW9CckgsS0FBcEIsRUFBMkJ2SCxJQUEzQixDQUFpQzZKLEdBQUQsS0FBVTtRQUM5Q1ksU0FBUyxFQUFFWixHQUFHLENBQUM4RSxJQUQrQjtRQUU5QzlDLFdBQVcsRUFBRWhDLEdBQUcsQ0FBQ2dDLFdBRjZCO1FBRzlDQyxPQUFPLEVBQUVqQyxHQUFHLENBQUNtRixHQUFKbkYsQ0FBUWlDLE9BSDZCO1FBSTlDQyxPQUFPLEVBQUVsQyxHQUFHLENBQUNtRixHQUFKbkYsQ0FBUWtDO01BSjZCLENBQVYsQ0FBaEMsQ0FGVjtNQVNBLE1BQU07UUFBRXRCLFNBQUY7UUFBYXFCLE9BQWI7UUFBc0JDO01BQXRCLElBQWtDZ0MsU0FBeEM7TUFFQSxVQUEyQztRQUN6QyxNQUFNO1VBQUVrQjtRQUFGLElBQXlCQyxtQkFBTyxDQUFDLDBCQUFELENBQXRDO1FBQ0EsSUFBSSxDQUFDRCxrQkFBa0IsQ0FBQ3hFLFNBQUQsQ0FBdkIsRUFBb0M7VUFDbEMsTUFBTSxJQUFJaEssS0FBSixDQUNILHlEQUF3RG9CLFFBQVMsR0FEOUQsQ0FBTjtRQUdEO01BQ0Y7TUFFRCxJQUFJcUksUUFBSjtNQUVBLElBQUk0QixPQUFPLElBQUlDLE9BQWYsRUFBd0I7UUFDdEI3QixRQUFRLEdBQUcsS0FBS0ksVUFBTCxDQUFnQjZFLFdBQWhCLENBQ1QsaUNBQXFCO1VBQUV0TixRQUFGO1VBQVk0RjtRQUFaLENBQXJCLENBRFMsRUFFVFYsV0FBVyxDQUFDbkksRUFBRCxDQUZGLEVBR1RrTixPQUhTLEVBSVQsS0FBS2hKLE1BSkksRUFLVCxLQUFLQyxhQUxJLENBQVhtSDtNQU9EO01BRUQsTUFBTTVKLEtBQUssR0FBRyxNQUFNLEtBQUs4TyxRQUFMLENBQWdDLE1BQ2xEdEQsT0FBTyxHQUNILEtBQUt1RCxjQUFMLENBQW9CbkYsUUFBcEIsQ0FERyxHQUVINkIsT0FBTyxHQUNQLEtBQUt1RCxjQUFMLENBQW9CcEYsUUFBcEIsQ0FETyxHQUVQLEtBQUszRSxlQUFMLENBQ0VrRixTQURGO01BRUU7TUFDQTtRQUNFNUksUUFERjtRQUVFNEYsS0FGRjtRQUdFcUQsTUFBTSxFQUFFbE07TUFIVixDQUhGLENBTGMsQ0FBcEI7TUFnQkFtUCxTQUFTLENBQUN6TixLQUFWeU4sR0FBa0J6TixLQUFsQnlOO01BQ0EsS0FBS2hELFVBQUwsQ0FBZ0J4RCxLQUFoQixJQUF5QndHLFNBQXpCO01BQ0EsT0FBT0EsU0FBUDtJQUNELENBQUMsUUFBT3hQLEdBQVAsRUFBWTtNQUNaLE9BQU8sS0FBS2tRLG9CQUFMLENBQTBCbFEsR0FBMUIsRUFBK0JzRCxRQUEvQixFQUF5QzRGLEtBQXpDLEVBQWdEN0ksRUFBaEQsQ0FBUDtJQUNEO0VBQ0Y7RUFFRE4sR0FBRyxDQUNEaUosS0FEQyxFQUVEMUYsUUFGQyxFQUdENEYsS0FIQyxFQUlEN0ksRUFKQyxFQUtEMlEsSUFMQyxFQU1jO0lBQ2YsS0FBSzNFLFVBQUwsR0FBa0IsS0FBbEI7SUFFQSxLQUFLckQsS0FBTCxHQUFhQSxLQUFiO0lBQ0EsS0FBSzFGLFFBQUwsR0FBZ0JBLFFBQWhCO0lBQ0EsS0FBSzRGLEtBQUwsR0FBYUEsS0FBYjtJQUNBLEtBQUtxRCxNQUFMLEdBQWNsTSxFQUFkO0lBQ0EsT0FBTyxLQUFLbU8sTUFBTCxDQUFZd0MsSUFBWixDQUFQO0VBQ0QsQ0FFRDs7OztFQUlBQyxjQUFjLENBQUM3UixFQUFELEVBQTZCO0lBQ3pDLEtBQUt3TixJQUFMLEdBQVl4TixFQUFaO0VBQ0Q7RUFFRGtQLGVBQWUsQ0FBQ2pPLEVBQUQsRUFBc0I7SUFDbkMsSUFBSSxDQUFDLEtBQUtrTSxNQUFWLEVBQWtCLE9BQU8sS0FBUDtJQUNsQixNQUFNLENBQUMyRSxZQUFELEVBQWVDLE9BQWYsSUFBMEIsS0FBSzVFLE1BQUwsQ0FBWTZFLEtBQVosQ0FBa0IsR0FBbEIsQ0FBaEM7SUFDQSxNQUFNLENBQUNDLFlBQUQsRUFBZUMsT0FBZixJQUEwQmpSLEVBQUUsQ0FBQytRLEtBQUgvUSxDQUFTLEdBQVRBLENBQWhDLENBRUE7SUFDQSxJQUFJaVIsT0FBTyxJQUFJSixZQUFZLEtBQUtHLFlBQTVCQyxJQUE0Q0gsT0FBTyxLQUFLRyxPQUE1RCxFQUFxRTtNQUNuRSxPQUFPLElBQVA7SUFDRCxDQUVEO0lBQ0EsSUFBSUosWUFBWSxLQUFLRyxZQUFyQixFQUFtQztNQUNqQyxPQUFPLEtBQVA7SUFDRCxDQUVEO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsT0FBT0YsT0FBTyxLQUFLRyxPQUFuQjtFQUNEO0VBRUQvQyxZQUFZLENBQUNsTyxFQUFELEVBQW1CO0lBQzdCLE1BQU0sR0FBR3dLLElBQUgsSUFBV3hLLEVBQUUsQ0FBQytRLEtBQUgvUSxDQUFTLEdBQVRBLENBQWpCLENBQ0E7SUFDQSxJQUFJd0ssSUFBSSxLQUFLLEVBQWIsRUFBaUI7TUFDZmxNLE1BQU0sQ0FBQ2dELFFBQVBoRCxDQUFnQixDQUFoQkEsRUFBbUIsQ0FBbkJBO01BQ0E7SUFDRCxDQUVEO0lBQ0EsTUFBTTRTLElBQUksR0FBRzNQLFFBQVEsQ0FBQzRQLGNBQVQ1UCxDQUF3QmlKLElBQXhCakosQ0FBYjtJQUNBLElBQUkyUCxJQUFKLEVBQVU7TUFDUkEsSUFBSSxDQUFDRSxjQUFMRjtNQUNBO0lBQ0QsQ0FDRDtJQUNBO0lBQ0EsTUFBTUcsTUFBTSxHQUFHOVAsUUFBUSxDQUFDK1AsaUJBQVQvUCxDQUEyQmlKLElBQTNCakosRUFBaUMsQ0FBakNBLENBQWY7SUFDQSxJQUFJOFAsTUFBSixFQUFZO01BQ1ZBLE1BQU0sQ0FBQ0QsY0FBUEM7SUFDRDtFQUNGO0VBRUQxQyxRQUFRLENBQUN6QyxNQUFELEVBQTBCO0lBQ2hDLE9BQU8sS0FBS0EsTUFBTCxLQUFnQkEsTUFBdkI7RUFDRDtFQUVEd0MsWUFBWSxDQUFDYyxVQUFELEVBQXdCcEIsS0FBeEIsRUFBeUNtRCxhQUFhLEdBQUcsSUFBekQsRUFBK0Q7SUFDekUsTUFBTTtNQUFFdE87SUFBRixJQUFldU0sVUFBckI7SUFDQSxNQUFNZ0MsYUFBYSxHQUFHLHFEQUNwQiw4Q0FBb0JELGFBQWEsR0FBR3BKLFdBQVcsQ0FBQ2xGLFFBQUQsQ0FBZCxHQUE0QkEsUUFBN0QsQ0FEb0IsQ0FBdEI7SUFJQSxJQUFJdU8sYUFBYSxLQUFLLE1BQWxCQSxJQUE0QkEsYUFBYSxLQUFLLFNBQWxELEVBQTZEO01BQzNELE9BQU9oQyxVQUFQO0lBQ0QsQ0FFRDtJQUNBLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ3JFLFFBQU5xRSxDQUFlb0QsYUFBZnBELENBQUwsRUFBcUM7TUFDbkM7TUFDQUEsS0FBSyxDQUFDcUQsSUFBTnJELENBQVkyQixJQUFELElBQVU7UUFDbkIsSUFDRSwrQkFBZUEsSUFBZixLQUNBLCtCQUFjQSxJQUFkLEVBQW9CMkIsRUFBcEIsQ0FBdUJDLElBQXZCLENBQTRCSCxhQUE1QixDQUZGLEVBR0U7VUFDQWhDLFVBQVUsQ0FBQ3ZNLFFBQVh1TSxHQUFzQitCLGFBQWEsR0FBR3JKLFdBQVcsQ0FBQzZILElBQUQsQ0FBZCxHQUF1QkEsSUFBMURQO1VBQ0EsT0FBTyxJQUFQO1FBQ0Q7TUFDRixDQVJEcEI7SUFTRDtJQUNELE9BQU9vQixVQUFQO0VBQ0QsQ0FFRDs7Ozs7O0VBTUEsTUFBTTFQLFFBQU4sQ0FDRXJELEdBREYsRUFFRXlQLE1BQWMsR0FBR3pQLEdBRm5CLEVBR0V3RCxPQUF3QixHQUFHLEVBSDdCLEVBSWlCO0lBQ2YsSUFBSXdPLE1BQU0sR0FBRyx3Q0FBaUJoUyxHQUFqQixDQUFiO0lBRUEsSUFBSTtNQUFFd0c7SUFBRixJQUFld0wsTUFBbkI7SUFFQSxNQUFNTCxLQUFLLEdBQUcsTUFBTSxLQUFLMUMsVUFBTCxDQUFnQjJDLFdBQWhCLEVBQXBCO0lBRUFJLE1BQU0sR0FBRyxLQUFLQyxZQUFMLENBQWtCRCxNQUFsQixFQUEwQkwsS0FBMUIsQ0FBVEs7SUFFQSxJQUFJQSxNQUFNLENBQUN4TCxRQUFQd0wsS0FBb0J4TCxRQUF4QixFQUFrQztNQUNoQ0EsUUFBUSxHQUFHd0wsTUFBTSxDQUFDeEwsUUFBbEJBO01BQ0F4RyxHQUFHLEdBQUcsaUNBQXFCZ1MsTUFBckIsQ0FBTmhTO0lBQ0QsQ0FFRDtJQUNBLFVBQTJDO01BQ3pDO0lBQ0Q7SUFFRCxNQUFNa00sS0FBSyxHQUFHLHFEQUF3QjFGLFFBQXhCLENBQWQ7SUFDQSxNQUFNd00sT0FBTyxDQUFDekksR0FBUnlJLENBQVksQ0FDaEIsS0FBSy9ELFVBQUwsQ0FBZ0JrRyxZQUFoQixDQUNFblYsR0FERixFQUVFeVAsTUFGRixFQUdFLEtBQUtoSSxNQUhQLEVBSUUsS0FBS0MsYUFKUCxDQURnQixFQU9oQixLQUFLdUgsVUFBTCxDQUFnQnpMLE9BQU8sQ0FBQytELFFBQVIvRCxHQUFtQixVQUFuQkEsR0FBZ0MsVUFBaEQsRUFBNEQwSSxLQUE1RCxDQVBnQixDQUFaOEcsQ0FBTjtFQVNEO0VBRUQsTUFBTU8sY0FBTixDQUFxQnJILEtBQXJCLEVBQTREO0lBQzFELElBQUloQixTQUFTLEdBQUcsS0FBaEI7SUFDQSxNQUFNa0ssTUFBTSxHQUFJLEtBQUt2RixHQUFMLEdBQVcsTUFBTTtNQUMvQjNFLFNBQVMsR0FBRyxJQUFaQTtJQUNELENBRkQ7SUFJQSxNQUFNbUssZUFBZSxHQUFHLE1BQU0sS0FBS3BHLFVBQUwsQ0FBZ0JxRyxRQUFoQixDQUF5QnBKLEtBQXpCLENBQTlCO0lBRUEsSUFBSWhCLFNBQUosRUFBZTtNQUNiLE1BQU05SCxLQUFVLEdBQUcsSUFBSWdDLEtBQUosQ0FDaEIsd0NBQXVDOEcsS0FBTSxHQUQ3QixDQUFuQjtNQUdBOUksS0FBSyxDQUFDOEgsU0FBTjlILEdBQWtCLElBQWxCQTtNQUNBLE1BQU1BLEtBQU47SUFDRDtJQUVELElBQUlnUyxNQUFNLEtBQUssS0FBS3ZGLEdBQXBCLEVBQXlCO01BQ3ZCLEtBQUtBLEdBQUwsR0FBVyxJQUFYO0lBQ0Q7SUFFRCxPQUFPd0YsZUFBUDtFQUNEO0VBRUR0QixRQUFRLENBQUl3QixFQUFKLEVBQXNDO0lBQzVDLElBQUlySyxTQUFTLEdBQUcsS0FBaEI7SUFDQSxNQUFNa0ssTUFBTSxHQUFHLE1BQU07TUFDbkJsSyxTQUFTLEdBQUcsSUFBWkE7SUFDRCxDQUZEO0lBR0EsS0FBSzJFLEdBQUwsR0FBV3VGLE1BQVg7SUFDQSxPQUFPRyxFQUFFLEdBQUc1USxJQUFMNFEsQ0FBV3JCLElBQUQsSUFBVTtNQUN6QixJQUFJa0IsTUFBTSxLQUFLLEtBQUt2RixHQUFwQixFQUF5QjtRQUN2QixLQUFLQSxHQUFMLEdBQVcsSUFBWDtNQUNEO01BRUQsSUFBSTNFLFNBQUosRUFBZTtRQUNiLE1BQU1oSSxHQUFRLEdBQUcsSUFBSWtDLEtBQUosQ0FBVSxpQ0FBVixDQUFqQjtRQUNBbEMsR0FBRyxDQUFDZ0ksU0FBSmhJLEdBQWdCLElBQWhCQTtRQUNBLE1BQU1BLEdBQU47TUFDRDtNQUVELE9BQU9nUixJQUFQO0lBQ0QsQ0FaTXFCLENBQVA7RUFhRDtFQUVEdkIsY0FBYyxDQUFDbkYsUUFBRCxFQUFvQztJQUNoRCxNQUFNO01BQUUxTixJQUFJLEVBQUVxVTtJQUFSLElBQXFCLElBQUl6SixHQUFKLENBQVE4QyxRQUFSLEVBQWtCaE4sTUFBTSxDQUFDaVAsUUFBUGpQLENBQWdCVixJQUFsQyxDQUEzQjtJQUNBLElBQUk4RyxLQUFKLEVBQWlFLEVBRWhFO0lBQ0QsT0FBTzJHLGFBQWEsQ0FBQ0MsUUFBRCxFQUFXLEtBQUttQixLQUFoQixDQUFicEIsQ0FBb0NqSyxJQUFwQ2lLLENBQTBDc0YsSUFBRCxJQUFVO01BQ3hELEtBQUt2RSxHQUFMLENBQVM2RixRQUFULElBQXFCdEIsSUFBckI7TUFDQSxPQUFPQSxJQUFQO0lBQ0QsQ0FITXRGLENBQVA7RUFJRDtFQUVEcUYsY0FBYyxDQUFDcEYsUUFBRCxFQUFvQztJQUNoRCxPQUFPRCxhQUFhLENBQUNDLFFBQUQsRUFBVyxLQUFLbUIsS0FBaEIsQ0FBcEI7RUFDRDtFQUVEOUYsZUFBZSxDQUNia0YsU0FEYSxFQUVicUcsR0FGYSxFQUdDO0lBQ2QsTUFBTTtNQUFFckcsU0FBUyxFQUFFRjtJQUFiLElBQXFCLEtBQUtRLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBM0I7SUFDQSxNQUFNZ0csT0FBTyxHQUFHLEtBQUszRixRQUFMLENBQWNiLEdBQWQsQ0FBaEI7SUFDQXVHLEdBQUcsQ0FBQ0MsT0FBSkQsR0FBY0MsT0FBZEQ7SUFDQSxPQUFPLGdDQUE0Q3ZHLEdBQTVDLEVBQWlEO01BQ3REd0csT0FEc0Q7TUFFdER0RyxTQUZzRDtNQUd0RDlMLE1BQU0sRUFBRSxJQUg4QztNQUl0RG1TO0lBSnNELENBQWpELENBQVA7RUFNRDtFQUVEbkUsa0JBQWtCLENBQUMvTixFQUFELEVBQW1CO0lBQ25DLElBQUksS0FBS3NNLEdBQVQsRUFBYztNQUNaL1AsTUFBTSxDQUFDMkksTUFBUDNJLENBQWMrSyxJQUFkL0ssQ0FBbUIsa0JBQW5CQSxFQUF1Q21MLHNCQUFzQixFQUE3RG5MLEVBQWlFeUQsRUFBakV6RDtNQUNBLEtBQUsrUCxHQUFMO01BQ0EsS0FBS0EsR0FBTCxHQUFXLElBQVg7SUFDRDtFQUNGO0VBRUQ2QixNQUFNLENBQUN3QyxJQUFELEVBQXdDO0lBQzVDLE9BQU8sS0FBS3RFLEdBQUwsQ0FBU3NFLElBQVQsRUFBZSxLQUFLeEUsVUFBTCxDQUFnQixPQUFoQixFQUF5Qk4sU0FBeEMsQ0FBUDtFQUNEO0FBMTNCK0M7O0FBQTdCdFAsTSxDQTJCWjJJLE0sR0FBc0Isb0I7Ozs7Ozs7Ozs7Ozs7Ozt1Q0M3Vy9CO0FBQ2UsU0FBU3dFLG9CQUFULENBQThCMEksT0FBOUIsRUFBdUQ7RUFDcEUsT0FBT0EsT0FBTyxDQUFDdFIsT0FBUnNSLENBQWdCLFFBQWhCQSxFQUEyQkMsSUFBRCxJQUFrQkMsa0JBQWtCLENBQUNELElBQUQsQ0FBOURELENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcUJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsTUFBTUcsZ0JBQWdCLEdBQUcsd0JBQXpCO0FBRU8sU0FBU0MsU0FBVCxDQUFtQkMsTUFBbkIsRUFBc0M7RUFDM0MsSUFBSTtJQUFFQyxJQUFGO0lBQVFDO0VBQVIsSUFBcUJGLE1BQXpCO0VBQ0EsSUFBSUcsUUFBUSxHQUFHSCxNQUFNLENBQUNHLFFBQVBILElBQW1CLEVBQWxDO0VBQ0EsSUFBSXhQLFFBQVEsR0FBR3dQLE1BQU0sQ0FBQ3hQLFFBQVB3UCxJQUFtQixFQUFsQztFQUNBLElBQUlqSSxJQUFJLEdBQUdpSSxNQUFNLENBQUNqSSxJQUFQaUksSUFBZSxFQUExQjtFQUNBLElBQUk1SixLQUFLLEdBQUc0SixNQUFNLENBQUM1SixLQUFQNEosSUFBZ0IsRUFBNUI7RUFDQSxJQUFJSSxJQUFvQixHQUFHLEtBQTNCO0VBRUFILElBQUksR0FBR0EsSUFBSSxHQUFHSixrQkFBa0IsQ0FBQ0ksSUFBRCxDQUFsQkosQ0FBeUJ4UixPQUF6QndSLENBQWlDLE1BQWpDQSxFQUF5QyxHQUF6Q0EsSUFBZ0QsR0FBbkQsR0FBeUQsRUFBcEVJO0VBRUEsSUFBSUQsTUFBTSxDQUFDSSxJQUFYLEVBQWlCO0lBQ2ZBLElBQUksR0FBR0gsSUFBSSxHQUFHRCxNQUFNLENBQUNJLElBQXJCQTtFQUNELENBRkQsTUFFTyxJQUFJRixRQUFKLEVBQWM7SUFDbkJFLElBQUksR0FBR0gsSUFBSSxJQUFJLENBQUNDLFFBQVEsQ0FBQ3hSLE9BQVR3UixDQUFpQixHQUFqQkEsQ0FBRCxHQUEwQixJQUFHQSxRQUFTLEdBQXRDLEdBQTJDQSxRQUEvQyxDQUFYRTtJQUNBLElBQUlKLE1BQU0sQ0FBQ0ssSUFBWCxFQUFpQjtNQUNmRCxJQUFJLElBQUksTUFBTUosTUFBTSxDQUFDSyxJQUFyQkQ7SUFDRDtFQUNGO0VBRUQsSUFBSWhLLEtBQUssSUFBSSxPQUFPQSxLQUFQLEtBQWlCLFFBQTlCLEVBQXdDO0lBQ3RDQSxLQUFLLEdBQUdrSyxNQUFNLENBQUNDLFdBQVcsQ0FBQ0Msc0JBQVpELENBQW1DbkssS0FBbkNtSyxDQUFELENBQWRuSztFQUNEO0VBRUQsSUFBSXFLLE1BQU0sR0FBR1QsTUFBTSxDQUFDUyxNQUFQVCxJQUFrQjVKLEtBQUssSUFBSyxJQUFHQSxLQUFNLEVBQXJDNEosSUFBMkMsRUFBeEQ7RUFFQSxJQUFJRyxRQUFRLElBQUlBLFFBQVEsQ0FBQ08sTUFBVFAsQ0FBZ0IsQ0FBQyxDQUFqQkEsTUFBd0IsR0FBeEMsRUFBNkNBLFFBQVEsSUFBSSxHQUFaQTtFQUU3QyxJQUNFSCxNQUFNLENBQUNXLE9BQVBYLElBQ0MsQ0FBQyxDQUFDRyxRQUFELElBQWFMLGdCQUFnQixDQUFDWixJQUFqQlksQ0FBc0JLLFFBQXRCTCxDQUFkLEtBQWtETSxJQUFJLEtBQUssS0FGOUQsRUFHRTtJQUNBQSxJQUFJLEdBQUcsUUFBUUEsSUFBSSxJQUFJLEVBQWhCLENBQVBBO0lBQ0EsSUFBSTVQLFFBQVEsSUFBSUEsUUFBUSxDQUFDLENBQUQsQ0FBUkEsS0FBZ0IsR0FBaEMsRUFBcUNBLFFBQVEsR0FBRyxNQUFNQSxRQUFqQkE7RUFDdEMsQ0FORCxNQU1PLElBQUksQ0FBQzRQLElBQUwsRUFBVztJQUNoQkEsSUFBSSxHQUFHLEVBQVBBO0VBQ0Q7RUFFRCxJQUFJckksSUFBSSxJQUFJQSxJQUFJLENBQUMsQ0FBRCxDQUFKQSxLQUFZLEdBQXhCLEVBQTZCQSxJQUFJLEdBQUcsTUFBTUEsSUFBYkE7RUFDN0IsSUFBSTBJLE1BQU0sSUFBSUEsTUFBTSxDQUFDLENBQUQsQ0FBTkEsS0FBYyxHQUE1QixFQUFpQ0EsTUFBTSxHQUFHLE1BQU1BLE1BQWZBO0VBRWpDalEsUUFBUSxHQUFHQSxRQUFRLENBQUNuQyxPQUFUbUMsQ0FBaUIsT0FBakJBLEVBQTBCcVAsa0JBQTFCclAsQ0FBWEE7RUFDQWlRLE1BQU0sR0FBR0EsTUFBTSxDQUFDcFMsT0FBUG9TLENBQWUsR0FBZkEsRUFBb0IsS0FBcEJBLENBQVRBO0VBRUEsT0FBUSxHQUFFTixRQUFTLEdBQUVDLElBQUssR0FBRTVQLFFBQVMsR0FBRWlRLE1BQU8sR0FBRTFJLElBQUssRUFBckQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7d0NDeEVEO0FBQ0EsTUFBTTZJLFVBQVUsR0FBRyxzQkFBbkI7QUFFTyxTQUFTQyxjQUFULENBQXdCM0ssS0FBeEIsRUFBZ0Q7RUFDckQsT0FBTzBLLFVBQVUsQ0FBQzFCLElBQVgwQixDQUFnQjFLLEtBQWhCMEssQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMRDtBQUNBO0FBRUEsTUFBTUUsVUFBVSxHQUFHLElBQUkvSyxHQUFKLENBQ2pCLE9BQWdDLFVBQWhDLEdBQTZDLFNBRDVCLENBQW5CLENBSUE7Ozs7OztBQU1PLFNBQVNnTCxnQkFBVCxDQUEwQi9XLEdBQTFCLEVBQXVDME4sSUFBdkMsRUFBc0Q7RUFDM0QsTUFBTXNKLFlBQVksR0FBR3RKLElBQUksR0FBRyxJQUFJM0IsR0FBSixDQUFRMkIsSUFBUixFQUFjb0osVUFBZCxDQUFILEdBQStCQSxVQUF4RDtFQUNBLE1BQU07SUFDSnRRLFFBREk7SUFFSnNILFlBRkk7SUFHSjJJLE1BSEk7SUFJSjFJLElBSkk7SUFLSjVNLElBTEk7SUFNSjZLLE1BTkk7SUFPSm1LO0VBUEksSUFRRixJQUFJcEssR0FBSixDQUFRL0wsR0FBUixFQUFhZ1gsWUFBYixDQVJKO0VBU0EsSUFDRWhMLE1BQU0sS0FBSzhLLFVBQVUsQ0FBQzlLLE1BQXRCQSxJQUNDbUssUUFBUSxLQUFLLE9BQWJBLElBQXdCQSxRQUFRLEtBQUssUUFGeEMsRUFHRTtJQUNBLE1BQU0sSUFBSS9RLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0VBQ0Q7RUFDRCxPQUFPO0lBQ0xvQixRQURLO0lBRUw0RixLQUFLLEVBQUUseUNBQXVCMEIsWUFBdkIsQ0FGRjtJQUdMMkksTUFISztJQUlMMUksSUFKSztJQUtMNU0sSUFBSSxFQUFFQSxJQUFJLENBQUM0RyxLQUFMNUcsQ0FBVzJWLFVBQVUsQ0FBQzlLLE1BQVg4SyxDQUFrQm5MLE1BQTdCeEs7RUFMRCxDQUFQO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlPLE1BQU04VixjQUNjLEdBQUc7RUFDNUJDLFNBQVMsRUFBRSxLQURpQjtFQUU1QkMsU0FBUyxFQUFFO0FBRmlCLENBRHZCOztBQU1BLE1BQU1DLHlCQUNjLG1DQUN0QkgsY0FEeUI7RUFFNUJJLE1BQU0sRUFBRTtBQUZvQixFQUR2Qjs7ZUFNUSxDQUFDQyxXQUFXLEdBQUcsS0FBZixLQUF5QjtFQUN0QyxPQUFRelAsSUFBRCxJQUFrQjtJQUN2QixNQUFNbEMsSUFBd0IsR0FBRyxFQUFqQztJQUNBLE1BQU00UixZQUFZLEdBQUdDLFlBQVksQ0FBQ0EsWUFBYkEsQ0FDbkIzUCxJQURtQjJQLEVBRW5CN1IsSUFGbUI2UixFQUduQkYsV0FBVyxHQUFHRix5QkFBSCxHQUErQkgsY0FIdkJPLENBQXJCO0lBS0EsTUFBTUMsT0FBTyxHQUFHRCxZQUFZLENBQUNFLGdCQUFiRixDQUE4QkQsWUFBOUJDLEVBQTRDN1IsSUFBNUM2UixDQUFoQjtJQUVBLE9BQU8sQ0FBQ2hSLFFBQUQsRUFBc0NrRyxNQUF0QyxLQUF1RDtNQUM1RCxNQUFNOEIsR0FBRyxHQUFHaEksUUFBUSxJQUFJLElBQVpBLEdBQW1CLEtBQW5CQSxHQUEyQmlSLE9BQU8sQ0FBQ2pSLFFBQUQsQ0FBOUM7TUFDQSxJQUFJLENBQUNnSSxHQUFMLEVBQVU7UUFDUixPQUFPLEtBQVA7TUFDRDtNQUVELElBQUk4SSxXQUFKLEVBQWlCO1FBQ2YsS0FBSyxNQUFNalMsR0FBWCxJQUFrQk0sSUFBbEIsRUFBd0I7VUFDdEI7VUFDQTtVQUNBLElBQUksT0FBT04sR0FBRyxDQUFDK0UsSUFBWCxLQUFvQixRQUF4QixFQUFrQztZQUNoQyxPQUFRb0UsR0FBRyxDQUFDOUIsTUFBTCxDQUFvQnJILEdBQUcsQ0FBQytFLElBQXhCLENBQVA7VUFDRDtRQUNGO01BQ0Y7TUFFRCx1Q0FBWXNDLE1BQUwsR0FBZ0I4QixHQUFHLENBQUM5QixNQUEzQjtJQUNELENBakJEO0VBa0JELENBM0JEO0FBNEJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWUsU0FBU2lMLGtCQUFULENBQ2I3RSxXQURhLEVBRWJwRyxNQUZhLEVBR2JOLEtBSGEsRUFJYndMLG1CQUphLEVBS2I1TSxRQUxhLEVBTWI7RUFDQSxJQUFJNk0saUJBS21DLEdBQUcsRUFMMUM7RUFPQSxJQUFJL0UsV0FBVyxDQUFDekgsVUFBWnlILENBQXVCLEdBQXZCQSxDQUFKLEVBQWlDO0lBQy9CK0UsaUJBQWlCLEdBQUcsd0NBQWlCL0UsV0FBakIsQ0FBcEIrRTtFQUNELENBRkQsTUFFTztJQUNMLE1BQU07TUFDSnJSLFFBREk7TUFFSnNILFlBRkk7TUFHSkMsSUFISTtNQUlKbUksUUFKSTtNQUtKRyxJQUxJO01BTUpGLFFBTkk7TUFPSk0sTUFQSTtNQVFKdFY7SUFSSSxJQVNGLElBQUk0SyxHQUFKLENBQVErRyxXQUFSLENBVEo7SUFXQStFLGlCQUFpQixHQUFHO01BQ2xCclIsUUFEa0I7TUFFbEI0RixLQUFLLEVBQUUseUNBQXVCMEIsWUFBdkIsQ0FGVztNQUdsQkMsSUFIa0I7TUFJbEJvSSxRQUprQjtNQUtsQkQsUUFMa0I7TUFNbEJHLElBTmtCO01BT2xCSSxNQVBrQjtNQVFsQnRWO0lBUmtCLENBQXBCMFc7RUFVRDtFQUVELE1BQU1DLFNBQVMsR0FBR0QsaUJBQWlCLENBQUN6TCxLQUFwQztFQUNBLE1BQU0yTCxRQUFRLEdBQUksR0FBRUYsaUJBQWlCLENBQUNyUixRQUFVLEdBQzlDcVIsaUJBQWlCLENBQUM5SixJQUFsQjhKLElBQTBCLEVBQzNCLEVBRkQ7RUFHQSxNQUFNRyxpQkFBcUMsR0FBRyxFQUE5QztFQUNBUixZQUFZLENBQUNBLFlBQWJBLENBQTBCTyxRQUExQlAsRUFBb0NRLGlCQUFwQ1I7RUFFQSxNQUFNUyxjQUFjLEdBQUdELGlCQUFpQixDQUFDak4sR0FBbEJpTixDQUF1QjNTLEdBQUQsSUFBU0EsR0FBRyxDQUFDK0UsSUFBbkM0TixDQUF2QjtFQUVBLElBQUlFLG1CQUFtQixHQUFHLFlBQVksQ0FBQ0MsT0FBYixDQUN4QkosUUFEd0I7RUFFeEI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7SUFBRUssUUFBUSxFQUFFO0VBQVosQ0FSd0IsQ0FBMUI7RUFVQSxJQUFJQyxNQUFKLENBRUE7RUFDQSxLQUFLLE1BQU0sQ0FBQ2hULEdBQUQsRUFBTWlULFVBQU4sQ0FBWCxJQUFnQzVTLE1BQU0sQ0FBQ3pELE9BQVB5RCxDQUFlb1MsU0FBZnBTLENBQWhDLEVBQTJEO0lBQ3pELElBQUltSCxLQUFLLEdBQUdoRCxLQUFLLENBQUNDLE9BQU5ELENBQWN5TyxVQUFkek8sSUFBNEJ5TyxVQUFVLENBQUMsQ0FBRCxDQUF0Q3pPLEdBQTRDeU8sVUFBeEQ7SUFDQSxJQUFJekwsS0FBSixFQUFXO01BQ1Q7TUFDQTtNQUNBQSxLQUFLLEdBQUksSUFBR0EsS0FBTSxFQUFsQkE7TUFDQSxNQUFNMEwsYUFBYSxHQUFHZixZQUFZLENBQUNXLE9BQWJYLENBQXFCM0ssS0FBckIySyxFQUE0QjtRQUFFWSxRQUFRLEVBQUU7TUFBWixDQUE1QlosQ0FBdEI7TUFDQTNLLEtBQUssR0FBRzBMLGFBQWEsQ0FBQzdMLE1BQUQsQ0FBYjZMLENBQXNCN0IsTUFBdEI2QixDQUE2QixDQUE3QkEsQ0FBUjFMO0lBQ0Q7SUFDRGlMLFNBQVMsQ0FBQ3pTLEdBQUQsQ0FBVHlTLEdBQWlCakwsS0FBakJpTDtFQUNELENBRUQ7RUFDQTtFQUNBLE1BQU1VLFNBQVMsR0FBRzlTLE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWWdILE1BQVpoSCxDQUFsQjtFQUVBLElBQ0VrUyxtQkFBbUIsSUFDbkIsQ0FBQ1ksU0FBUyxDQUFDeEQsSUFBVndELENBQWdCblQsR0FBRCxJQUFTNFMsY0FBYyxDQUFDM0ssUUFBZjJLLENBQXdCNVMsR0FBeEI0UyxDQUF4Qk8sQ0FGSCxFQUdFO0lBQ0EsS0FBSyxNQUFNblQsR0FBWCxJQUFrQm1ULFNBQWxCLEVBQTZCO01BQzNCLElBQUksRUFBRW5ULEdBQUcsSUFBSXlTLFNBQVQsQ0FBSixFQUF5QjtRQUN2QkEsU0FBUyxDQUFDelMsR0FBRCxDQUFUeVMsR0FBaUJwTCxNQUFNLENBQUNySCxHQUFELENBQXZCeVM7TUFDRDtJQUNGO0VBQ0Y7RUFFRCxNQUFNVyxpQkFBaUIsR0FBRzNGLFdBQVcsQ0FBQ3pILFVBQVp5SCxDQUF1QixHQUF2QkEsS0FBK0I5SCxRQUF6RDtFQUVBLElBQUk7SUFDRnFOLE1BQU0sR0FBSSxHQUFFSSxpQkFBaUIsR0FBR3pOLFFBQUgsR0FBYyxFQUFHLEdBQUVrTixtQkFBbUIsQ0FDakV4TCxNQURpRSxDQUVqRSxFQUZGMkw7SUFJQSxNQUFNLENBQUM3UixRQUFELEVBQVd1SCxJQUFYLElBQW1Cc0ssTUFBTSxDQUFDL0QsS0FBUCtELENBQWEsR0FBYkEsQ0FBekI7SUFDQVIsaUJBQWlCLENBQUNyUixRQUFsQnFSLEdBQTZCclIsUUFBN0JxUjtJQUNBQSxpQkFBaUIsQ0FBQzlKLElBQWxCOEosR0FBMEIsR0FBRTlKLElBQUksR0FBRyxHQUFILEdBQVMsRUFBRyxHQUFFQSxJQUFJLElBQUksRUFBRyxFQUF6RDhKO0lBQ0EsT0FBT0EsaUJBQWlCLENBQUNwQixNQUF6QjtFQUNELENBQUMsUUFBT3ZULEdBQVAsRUFBWTtJQUNaLElBQUlBLEdBQUcsQ0FBQ2dHLE9BQUpoRyxDQUFZd1YsS0FBWnhWLENBQWtCLDhDQUFsQkEsQ0FBSixFQUF1RTtNQUNyRSxNQUFNLElBQUlrQyxLQUFKLENBQ0gsd0tBREcsQ0FBTjtJQUdEO0lBQ0QsTUFBTWxDLEdBQU47RUFDRCxDQUVEO0VBQ0E7RUFDQTtFQUNBO0VBQ0EyVSxpQkFBaUIsQ0FBQ3pMLEtBQWxCeUwsbUNBQ0t6TCxLQURxQixHQUVyQnlMLGlCQUFpQixDQUFDekwsS0FGRyxDQUExQnlMO0VBS0EsT0FBTztJQUNMUSxNQURLO0lBRUxSO0VBRkssQ0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9ITSxTQUFTYyxzQkFBVCxDQUNMN0ssWUFESyxFQUVXO0VBQ2hCLE1BQU0xQixLQUFxQixHQUFHLEVBQTlCO0VBQ0EwQixZQUFZLENBQUM1TCxPQUFiNEwsQ0FBcUIsQ0FBQ2pCLEtBQUQsRUFBUXhILEdBQVIsS0FBZ0I7SUFDbkMsSUFBSSxPQUFPK0csS0FBSyxDQUFDL0csR0FBRCxDQUFaLEtBQXNCLFdBQTFCLEVBQXVDO01BQ3JDK0csS0FBSyxDQUFDL0csR0FBRCxDQUFMK0csR0FBYVMsS0FBYlQ7SUFDRCxDQUZELE1BRU8sSUFBSXZDLEtBQUssQ0FBQ0MsT0FBTkQsQ0FBY3VDLEtBQUssQ0FBQy9HLEdBQUQsQ0FBbkJ3RSxDQUFKLEVBQStCO01BQ3BDO01BQUV1QyxLQUFLLENBQUMvRyxHQUFELENBQU4sQ0FBeUJxRixJQUF6QixDQUE4Qm1DLEtBQTlCO0lBQ0YsQ0FGTSxNQUVBO01BQ0xULEtBQUssQ0FBQy9HLEdBQUQsQ0FBTCtHLEdBQWEsQ0FBQ0EsS0FBSyxDQUFDL0csR0FBRCxDQUFOLEVBQXVCd0gsS0FBdkIsQ0FBYlQ7SUFDRDtFQUNGLENBUkQwQjtFQVNBLE9BQU8xQixLQUFQO0FBQ0Q7QUFFRCxTQUFTd00sc0JBQVQsQ0FBZ0NoTSxLQUFoQyxFQUF1RDtFQUNyRCxJQUNFLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsSUFDQyxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLElBQTZCLENBQUNpTSxLQUFLLENBQUNqTSxLQUFELENBRHBDLElBRUEsT0FBT0EsS0FBUCxLQUFpQixTQUhuQixFQUlFO0lBQ0EsT0FBTzBKLE1BQU0sQ0FBQzFKLEtBQUQsQ0FBYjtFQUNELENBTkQsTUFNTztJQUNMLE9BQU8sRUFBUDtFQUNEO0FBQ0Y7QUFFTSxTQUFTNEosc0JBQVQsQ0FDTHNDLFFBREssRUFFWTtFQUNqQixNQUFNM0wsTUFBTSxHQUFHLElBQUk0TCxlQUFKLEVBQWY7RUFDQXJULE1BQU0sQ0FBQ3pELE9BQVB5RCxDQUFlb1QsUUFBZnBULEVBQXlCeEQsT0FBekJ3RCxDQUFpQyxDQUFDLENBQUNMLEdBQUQsRUFBTXdILEtBQU4sQ0FBRCxLQUFrQjtJQUNqRCxJQUFJaEQsS0FBSyxDQUFDQyxPQUFORCxDQUFjZ0QsS0FBZGhELENBQUosRUFBMEI7TUFDeEJnRCxLQUFLLENBQUMzSyxPQUFOMkssQ0FBZW1NLElBQUQsSUFBVTdMLE1BQU0sQ0FBQzhMLE1BQVA5TCxDQUFjOUgsR0FBZDhILEVBQW1CeUwsc0JBQXNCLENBQUNJLElBQUQsQ0FBekM3TCxDQUF4Qk47SUFDRCxDQUZELE1BRU87TUFDTE0sTUFBTSxDQUFDbEssR0FBUGtLLENBQVc5SCxHQUFYOEgsRUFBZ0J5TCxzQkFBc0IsQ0FBQy9MLEtBQUQsQ0FBdENNO0lBQ0Q7RUFDRixDQU5Eekg7RUFPQSxPQUFPeUgsTUFBUDtBQUNEO0FBRU0sU0FBU3ZELE1BQVQsQ0FDTHZILE1BREssRUFFTCxHQUFHNlcsZ0JBRkUsRUFHWTtFQUNqQkEsZ0JBQWdCLENBQUNoWCxPQUFqQmdYLENBQTBCcEwsWUFBRCxJQUFrQjtJQUN6Q2pFLEtBQUssQ0FBQ3NQLElBQU50UCxDQUFXaUUsWUFBWSxDQUFDbkksSUFBYm1JLEVBQVhqRSxFQUFnQzNILE9BQWhDMkgsQ0FBeUN4RSxHQUFELElBQVNoRCxNQUFNLENBQUNNLE1BQVBOLENBQWNnRCxHQUFkaEQsQ0FBakR3SDtJQUNBaUUsWUFBWSxDQUFDNUwsT0FBYjRMLENBQXFCLENBQUNqQixLQUFELEVBQVF4SCxHQUFSLEtBQWdCaEQsTUFBTSxDQUFDNFcsTUFBUDVXLENBQWNnRCxHQUFkaEQsRUFBbUJ3SyxLQUFuQnhLLENBQXJDeUw7RUFDRCxDQUhEb0w7RUFJQSxPQUFPN1csTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREQ7QUFDQTtBQUVBOzs7Ozs7QUFFQSxNQUFNK1csa0JBQWtCLEdBQUcsd0JBQVUsSUFBVixDQUEzQjtBQUVlLFNBQVNDLGVBQVQsQ0FDYjVKLE1BRGEsRUFFYmtDLEtBRmEsRUFHYjNHLFFBSGEsRUFJYjhHLFFBSmEsRUFLYjFGLEtBTGEsRUFNYm1CLFdBTmEsRUFPYjtFQUNBLElBQUksQ0FBQ29FLEtBQUssQ0FBQ3JFLFFBQU5xRSxDQUFlbEMsTUFBZmtDLENBQUwsRUFBNkI7SUFDM0IsS0FBSyxNQUFNMkgsT0FBWCxJQUFzQnhILFFBQXRCLEVBQWdDO01BQzlCLE1BQU0yRixPQUFPLEdBQUcyQixrQkFBa0IsQ0FBQ0UsT0FBTyxDQUFDQyxNQUFULENBQWxDO01BQ0EsTUFBTTdNLE1BQU0sR0FBRytLLE9BQU8sQ0FBQ2hJLE1BQUQsQ0FBdEI7TUFFQSxJQUFJL0MsTUFBSixFQUFZO1FBQ1YsSUFBSSxDQUFDNE0sT0FBTyxDQUFDeEcsV0FBYixFQUEwQjtVQUN4QjtVQUNBO1FBQ0Q7UUFDRCxNQUFNMEcsT0FBTyxHQUFHLGlDQUNkRixPQUFPLENBQUN4RyxXQURNLEVBRWRwRyxNQUZjLEVBR2ROLEtBSGMsRUFJZCxJQUpjLEVBS2RrTixPQUFPLENBQUN0TyxRQUFSc08sS0FBcUIsS0FBckJBLEdBQTZCLEVBQTdCQSxHQUFrQ3RPLFFBTHBCLENBQWhCO1FBT0F5RSxNQUFNLEdBQUcrSixPQUFPLENBQUMzQixpQkFBUjJCLENBQTBCaFQsUUFBbkNpSjtRQUNBL0osTUFBTSxDQUFDa0UsTUFBUGxFLENBQWMwRyxLQUFkMUcsRUFBcUI4VCxPQUFPLENBQUMzQixpQkFBUjJCLENBQTBCcE4sS0FBL0MxRztRQUVBLElBQUlpTSxLQUFLLENBQUNyRSxRQUFOcUUsQ0FBZSxxREFBd0JsQyxNQUF4QixDQUFma0MsQ0FBSixFQUFxRDtVQUNuRDtVQUNBO1VBQ0E7UUFDRCxDQUVEO1FBQ0EsTUFBTWpMLFlBQVksR0FBRzZHLFdBQVcsQ0FBQ2tDLE1BQUQsQ0FBaEM7UUFFQSxJQUFJL0ksWUFBWSxLQUFLK0ksTUFBakIvSSxJQUEyQmlMLEtBQUssQ0FBQ3JFLFFBQU5xRSxDQUFlakwsWUFBZmlMLENBQS9CLEVBQTZEO1VBQzNEO1FBQ0Q7TUFDRjtJQUNGO0VBQ0Y7RUFDRCxPQUFPbEMsTUFBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRE0sU0FBU2dLLGVBQVQsQ0FBeUJwSCxVQUF6QixFQUF1RTtFQUM1RSxNQUFNO0lBQUU0QyxFQUFGO0lBQU16STtFQUFOLElBQWlCNkYsVUFBdkI7RUFDQSxPQUFRN0wsUUFBRCxJQUF5QztJQUM5QyxNQUFNOEwsVUFBVSxHQUFHMkMsRUFBRSxDQUFDeUUsSUFBSHpFLENBQVF6TyxRQUFSeU8sQ0FBbkI7SUFDQSxJQUFJLENBQUMzQyxVQUFMLEVBQWlCO01BQ2YsT0FBTyxLQUFQO0lBQ0Q7SUFFRCxNQUFNcUgsTUFBTSxHQUFJL00sS0FBRCxJQUFtQjtNQUNoQyxJQUFJO1FBQ0YsT0FBT2dOLGtCQUFrQixDQUFDaE4sS0FBRCxDQUF6QjtNQUNELENBQUMsUUFBT2hILENBQVAsRUFBVTtRQUNWLE1BQU0xQyxHQUE4QixHQUFHLElBQUlrQyxLQUFKLENBQ3JDLHdCQURxQyxDQUF2QztRQUdBbEMsR0FBRyxDQUFDMlcsSUFBSjNXLEdBQVcsZUFBWEE7UUFDQSxNQUFNQSxHQUFOO01BQ0Q7SUFDRixDQVZEO0lBV0EsTUFBTXdKLE1BQWtELEdBQUcsRUFBM0Q7SUFFQWhILE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWThHLE1BQVo5RyxFQUFvQnhELE9BQXBCd0QsQ0FBNkJvVSxRQUFELElBQXNCO01BQ2hELE1BQU1DLENBQUMsR0FBR3ZOLE1BQU0sQ0FBQ3NOLFFBQUQsQ0FBaEI7TUFDQSxNQUFNRSxDQUFDLEdBQUcxSCxVQUFVLENBQUN5SCxDQUFDLENBQUNFLEdBQUgsQ0FBcEI7TUFDQSxJQUFJRCxDQUFDLEtBQUtoWSxTQUFWLEVBQXFCO1FBQ25CMEssTUFBTSxDQUFDb04sUUFBRCxDQUFOcE4sR0FBbUIsQ0FBQ3NOLENBQUMsQ0FBQ3RWLE9BQUZzVixDQUFVLEdBQVZBLENBQUQsR0FDZkEsQ0FBQyxDQUFDMUYsS0FBRjBGLENBQVEsR0FBUkEsRUFBYWpQLEdBQWJpUCxDQUFrQjdYLEtBQUQsSUFBV3dYLE1BQU0sQ0FBQ3hYLEtBQUQsQ0FBbEM2WCxDQURlLEdBRWZELENBQUMsQ0FBQ2pOLE1BQUZpTixHQUNBLENBQUNKLE1BQU0sQ0FBQ0ssQ0FBRCxDQUFQLENBREFELEdBRUFKLE1BQU0sQ0FBQ0ssQ0FBRCxDQUpWdE47TUFLRDtJQUNGLENBVkRoSDtJQVdBLE9BQU9nSCxNQUFQO0VBQ0QsQ0EvQkQ7QUFnQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3NDQzlCRDtBQUNBO0FBQ0EsU0FBU3dOLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQWtDO0VBQ2hDLE9BQU9BLEdBQUcsQ0FBQzlWLE9BQUo4VixDQUFZLHNCQUFaQSxFQUFvQyxNQUFwQ0EsQ0FBUDtBQUNEO0FBRUQsU0FBU0MsY0FBVCxDQUF3QnhOLEtBQXhCLEVBQXVDO0VBQ3JDLE1BQU1HLFFBQVEsR0FBR0gsS0FBSyxDQUFDdkIsVUFBTnVCLENBQWlCLEdBQWpCQSxLQUF5QkEsS0FBSyxDQUFDOUUsUUFBTjhFLENBQWUsR0FBZkEsQ0FBMUM7RUFDQSxJQUFJRyxRQUFKLEVBQWM7SUFDWkgsS0FBSyxHQUFHQSxLQUFLLENBQUM3RSxLQUFONkUsQ0FBWSxDQUFaQSxFQUFlLENBQUMsQ0FBaEJBLENBQVJBO0VBQ0Q7RUFDRCxNQUFNRSxNQUFNLEdBQUdGLEtBQUssQ0FBQ3ZCLFVBQU51QixDQUFpQixLQUFqQkEsQ0FBZjtFQUNBLElBQUlFLE1BQUosRUFBWTtJQUNWRixLQUFLLEdBQUdBLEtBQUssQ0FBQzdFLEtBQU42RSxDQUFZLENBQVpBLENBQVJBO0VBQ0Q7RUFDRCxPQUFPO0lBQUV2SCxHQUFHLEVBQUV1SCxLQUFQO0lBQWNFLE1BQWQ7SUFBc0JDO0VBQXRCLENBQVA7QUFDRDtBQUVNLFNBQVNzTixhQUFULENBQ0xDLGVBREssRUFPTDtFQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFDRCxlQUFlLENBQUNqVyxPQUFoQmlXLENBQXdCLEtBQXhCQSxFQUErQixFQUEvQkEsS0FBc0MsR0FBdkMsRUFDZHZTLEtBRGMsQ0FDUixDQURRLEVBRWR1TSxLQUZjLENBRVIsR0FGUSxDQUFqQjtFQUlBLE1BQU05SCxNQUFzQyxHQUFHLEVBQS9DO0VBQ0EsSUFBSWdPLFVBQVUsR0FBRyxDQUFqQjtFQUNBLE1BQU1DLGtCQUFrQixHQUFHRixRQUFRLENBQ2hDeFAsR0FEd0J3UCxDQUNuQjVFLE9BQUQsSUFBYTtJQUNoQixJQUFJQSxPQUFPLENBQUN0SyxVQUFSc0ssQ0FBbUIsR0FBbkJBLEtBQTJCQSxPQUFPLENBQUM3TixRQUFSNk4sQ0FBaUIsR0FBakJBLENBQS9CLEVBQXNEO01BQ3BELE1BQU07UUFBRXRRLEdBQUY7UUFBTzBILFFBQVA7UUFBaUJEO01BQWpCLElBQTRCc04sY0FBYyxDQUFDekUsT0FBTyxDQUFDNU4sS0FBUjROLENBQWMsQ0FBZEEsRUFBaUIsQ0FBQyxDQUFsQkEsQ0FBRCxDQUFoRDtNQUNBbkosTUFBTSxDQUFDbkgsR0FBRCxDQUFObUgsR0FBYztRQUFFeU4sR0FBRyxFQUFFTyxVQUFVLEVBQWpCO1FBQXFCMU4sTUFBckI7UUFBNkJDO01BQTdCLENBQWRQO01BQ0EsT0FBT00sTUFBTSxHQUFJQyxRQUFRLEdBQUcsYUFBSCxHQUFtQixRQUEvQixHQUEyQyxXQUF4RDtJQUNELENBSkQsTUFJTztNQUNMLE9BQVEsSUFBR21OLFdBQVcsQ0FBQ3ZFLE9BQUQsQ0FBVSxFQUFoQztJQUNEO0VBQ0YsQ0FUd0I0RSxFQVV4QnJOLElBVndCcU4sQ0FVbkIsRUFWbUJBLENBQTNCLENBWUE7RUFDQTtFQUNBLFVBQW1DO0lBQ2pDLElBQUlHLGdCQUFnQixHQUFHLEVBQXZCO0lBQ0EsSUFBSUMsa0JBQWtCLEdBQUcsQ0FBekIsQ0FFQTtJQUNBLE1BQU1DLGVBQWUsR0FBRyxNQUFNO01BQzVCLElBQUlDLFFBQVEsR0FBRyxFQUFmO01BRUEsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxrQkFBcEIsRUFBd0NHLENBQUMsRUFBekMsRUFBNkM7UUFDM0NELFFBQVEsSUFBSXZFLE1BQU0sQ0FBQ3lFLFlBQVB6RSxDQUFvQm9FLGdCQUFwQnBFLENBQVp1RTtRQUNBSCxnQkFBZ0I7UUFFaEIsSUFBSUEsZ0JBQWdCLEdBQUcsR0FBdkIsRUFBNEI7VUFDMUJDLGtCQUFrQjtVQUNsQkQsZ0JBQWdCLEdBQUcsRUFBbkJBO1FBQ0Q7TUFDRjtNQUNELE9BQU9HLFFBQVA7SUFDRCxDQWJEO0lBZUEsTUFBTUcsU0FBc0MsR0FBRyxFQUEvQztJQUVBLElBQUlDLHVCQUF1QixHQUFHVixRQUFRLENBQ25DeFAsR0FEMkJ3UCxDQUN0QjVFLE9BQUQsSUFBYTtNQUNoQixJQUFJQSxPQUFPLENBQUN0SyxVQUFSc0ssQ0FBbUIsR0FBbkJBLEtBQTJCQSxPQUFPLENBQUM3TixRQUFSNk4sQ0FBaUIsR0FBakJBLENBQS9CLEVBQXNEO1FBQ3BELE1BQU07VUFBRXRRLEdBQUY7VUFBTzBILFFBQVA7VUFBaUJEO1FBQWpCLElBQTRCc04sY0FBYyxDQUFDekUsT0FBTyxDQUFDNU4sS0FBUjROLENBQWMsQ0FBZEEsRUFBaUIsQ0FBQyxDQUFsQkEsQ0FBRCxDQUFoRCxDQUNBO1FBQ0E7UUFDQSxJQUFJdUYsVUFBVSxHQUFHN1YsR0FBRyxDQUFDaEIsT0FBSmdCLENBQVksS0FBWkEsRUFBbUIsRUFBbkJBLENBQWpCO1FBQ0EsSUFBSThWLFVBQVUsR0FBRyxLQUFqQixDQUVBO1FBQ0E7UUFDQSxJQUFJRCxVQUFVLENBQUN2UCxNQUFYdVAsS0FBc0IsQ0FBdEJBLElBQTJCQSxVQUFVLENBQUN2UCxNQUFYdVAsR0FBb0IsRUFBbkQsRUFBdUQ7VUFDckRDLFVBQVUsR0FBRyxJQUFiQTtRQUNEO1FBQ0QsSUFBSSxDQUFDdEMsS0FBSyxDQUFDdUMsUUFBUSxDQUFDRixVQUFVLENBQUN4RSxNQUFYd0UsQ0FBa0IsQ0FBbEJBLEVBQXFCLENBQXJCQSxDQUFELENBQVQsQ0FBVixFQUErQztVQUM3Q0MsVUFBVSxHQUFHLElBQWJBO1FBQ0Q7UUFFRCxJQUFJQSxVQUFKLEVBQWdCO1VBQ2RELFVBQVUsR0FBR04sZUFBZSxFQUE1Qk07UUFDRDtRQUVERixTQUFTLENBQUNFLFVBQUQsQ0FBVEYsR0FBd0IzVixHQUF4QjJWO1FBQ0EsT0FBT2xPLE1BQU0sR0FDVEMsUUFBUSxHQUNMLFVBQVNtTyxVQUFXLFNBRGYsR0FFTCxPQUFNQSxVQUFXLE9BSFgsR0FJUixPQUFNQSxVQUFXLFVBSnRCO01BS0QsQ0ExQkQsTUEwQk87UUFDTCxPQUFRLElBQUdoQixXQUFXLENBQUN2RSxPQUFELENBQVUsRUFBaEM7TUFDRDtJQUNGLENBL0IyQjRFLEVBZ0MzQnJOLElBaEMyQnFOLENBZ0N0QixFQWhDc0JBLENBQTlCO0lBa0NBLE9BQU87TUFDTHRGLEVBQUUsRUFBRSxJQUFJb0csTUFBSixDQUFZLElBQUdaLGtCQUFtQixTQUFsQyxDQURDO01BRUxqTyxNQUZLO01BR0x3TyxTQUhLO01BSUxNLFVBQVUsRUFBRyxJQUFHTCx1QkFBd0I7SUFKbkMsQ0FBUDtFQU1EO0VBRUQsT0FBTztJQUNMaEcsRUFBRSxFQUFFLElBQUlvRyxNQUFKLENBQVksSUFBR1osa0JBQW1CLFNBQWxDLENBREM7SUFFTGpPO0VBRkssQ0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhELDZJQXlRQTs7O0FBR08sU0FBUytPLFFBQVQsQ0FDTGhHLEVBREssRUFFRjtFQUNILElBQUlpRyxJQUFJLEdBQUcsS0FBWDtFQUNBLElBQUlyTyxNQUFKO0VBRUEsT0FBUSxDQUFDLEdBQUdoSSxJQUFKLEtBQW9CO0lBQzFCLElBQUksQ0FBQ3FXLElBQUwsRUFBVztNQUNUQSxJQUFJLEdBQUcsSUFBUEE7TUFDQXJPLE1BQU0sR0FBR29JLEVBQUUsQ0FBQyxHQUFHcFEsSUFBSixDQUFYZ0k7SUFDRDtJQUNELE9BQU9BLE1BQVA7RUFDRCxDQU5EO0FBT0Q7QUFFTSxTQUFTc08saUJBQVQsR0FBNkI7RUFDbEMsTUFBTTtJQUFFdEYsUUFBRjtJQUFZRCxRQUFaO0lBQXNCRztFQUF0QixJQUErQnhVLE1BQU0sQ0FBQ2lQLFFBQTVDO0VBQ0EsT0FBUSxHQUFFcUYsUUFBUyxLQUFJRCxRQUFTLEdBQUVHLElBQUksR0FBRyxNQUFNQSxJQUFULEdBQWdCLEVBQUcsRUFBekQ7QUFDRDtBQUVNLFNBQVNxRixNQUFULEdBQWtCO0VBQ3ZCLE1BQU07SUFBRXZhO0VBQUYsSUFBV1UsTUFBTSxDQUFDaVAsUUFBeEI7RUFDQSxNQUFNOUUsTUFBTSxHQUFHeVAsaUJBQWlCLEVBQWhDO0VBQ0EsT0FBT3RhLElBQUksQ0FBQzZILFNBQUw3SCxDQUFlNkssTUFBTSxDQUFDTCxNQUF0QnhLLENBQVA7QUFDRDtBQUVNLFNBQVN3YSxjQUFULENBQTJCdk0sU0FBM0IsRUFBd0Q7RUFDN0QsT0FBTyxPQUFPQSxTQUFQLEtBQXFCLFFBQXJCLEdBQ0hBLFNBREcsR0FFSEEsU0FBUyxDQUFDL0UsV0FBVitFLElBQXlCQSxTQUFTLENBQUNoRixJQUFuQ2dGLElBQTJDLFNBRi9DO0FBR0Q7QUFFTSxTQUFTd00sU0FBVCxDQUFtQnBOLEdBQW5CLEVBQXdDO0VBQzdDLE9BQU9BLEdBQUcsQ0FBQ3FOLFFBQUpyTixJQUFnQkEsR0FBRyxDQUFDc04sV0FBM0I7QUFDRDtBQUVNLGVBQWVDLG1CQUFmLENBSUw3TSxHQUpLLEVBSTZCdUcsR0FKN0IsRUFJa0Q7RUFDdkQsVUFBMkM7SUFBQTtJQUN6QyxzQkFBSXZHLEdBQUcsQ0FBQzhNLFNBQVIscUJBQUk5TSxlQUFlaEYsZUFBbkIsRUFBb0M7TUFDbEMsTUFBTWhCLE9BQU8sR0FBSSxJQUFHeVMsY0FBYyxDQUNoQ3pNLEdBRGdDLENBRWhDLDBKQUZGO01BR0EsTUFBTSxJQUFJOUosS0FBSixDQUFVOEQsT0FBVixDQUFOO0lBQ0Q7RUFDRixDQUNEO0VBQ0EsTUFBTXNGLEdBQUcsR0FBR2lILEdBQUcsQ0FBQ2pILEdBQUppSCxJQUFZQSxHQUFHLENBQUNBLEdBQUpBLElBQVdBLEdBQUcsQ0FBQ0EsR0FBSkEsQ0FBUWpILEdBQTNDO0VBRUEsSUFBSSxDQUFDVSxHQUFHLENBQUNoRixlQUFULEVBQTBCO0lBQ3hCLElBQUl1TCxHQUFHLENBQUNBLEdBQUpBLElBQVdBLEdBQUcsQ0FBQ3JHLFNBQW5CLEVBQThCO01BQzVCO01BQ0EsT0FBTztRQUNMd0QsU0FBUyxFQUFFLE1BQU1tSixtQkFBbUIsQ0FBQ3RHLEdBQUcsQ0FBQ3JHLFNBQUwsRUFBZ0JxRyxHQUFHLENBQUNBLEdBQXBCO01BRC9CLENBQVA7SUFHRDtJQUNELE9BQU8sRUFBUDtFQUNEO0VBRUQsTUFBTXhRLEtBQUssR0FBRyxNQUFNaUssR0FBRyxDQUFDaEYsZUFBSmdGLENBQW9CdUcsR0FBcEJ2RyxDQUFwQjtFQUVBLElBQUlWLEdBQUcsSUFBSW9OLFNBQVMsQ0FBQ3BOLEdBQUQsQ0FBcEIsRUFBMkI7SUFDekIsT0FBT3ZKLEtBQVA7RUFDRDtFQUVELElBQUksQ0FBQ0EsS0FBTCxFQUFZO0lBQ1YsTUFBTWlFLE9BQU8sR0FBSSxJQUFHeVMsY0FBYyxDQUNoQ3pNLEdBRGdDLENBRWhDLCtEQUE4RGpLLEtBQU0sWUFGdEU7SUFHQSxNQUFNLElBQUlHLEtBQUosQ0FBVThELE9BQVYsQ0FBTjtFQUNEO0VBRUQsVUFBMkM7SUFDekMsSUFBSXhELE1BQU0sQ0FBQ0MsSUFBUEQsQ0FBWVQsS0FBWlMsRUFBbUJpRyxNQUFuQmpHLEtBQThCLENBQTlCQSxJQUFtQyxDQUFDK1AsR0FBRyxDQUFDQSxHQUE1QyxFQUFpRDtNQUMvQ3RTLE9BQU8sQ0FBQ2dELElBQVJoRCxDQUNHLEdBQUV3WSxjQUFjLENBQ2Z6TSxHQURlLENBRWYsOEtBSEovTDtJQUtEO0VBQ0Y7RUFFRCxPQUFPOEIsS0FBUDtBQUNEO0FBRU0sTUFBTWdYLGFBQWEsR0FBRyxDQUMzQixNQUQyQixFQUUzQixNQUYyQixFQUczQixNQUgyQixFQUkzQixVQUoyQixFQUszQixNQUwyQixFQU0zQixNQU4yQixFQU8zQixVQVAyQixFQVEzQixNQVIyQixFQVMzQixVQVQyQixFQVUzQixPQVYyQixFQVczQixRQVgyQixFQVkzQixTQVoyQixDQUF0Qjs7QUFlQSxTQUFTQyxvQkFBVCxDQUE4QmxjLEdBQTlCLEVBQXNEO0VBQzNELFVBQTRDO0lBQzFDLElBQUlBLEdBQUcsS0FBSyxJQUFSQSxJQUFnQixPQUFPQSxHQUFQLEtBQWUsUUFBbkMsRUFBNkM7TUFDM0MwRixNQUFNLENBQUNDLElBQVBELENBQVkxRixHQUFaMEYsRUFBaUJ4RCxPQUFqQndELENBQTBCTCxHQUFELElBQVM7UUFDaEMsSUFBSTRXLGFBQWEsQ0FBQ3ZYLE9BQWR1WCxDQUFzQjVXLEdBQXRCNFcsTUFBK0IsQ0FBQyxDQUFwQyxFQUF1QztVQUNyQzlZLE9BQU8sQ0FBQ2dELElBQVJoRCxDQUNHLHFEQUFvRGtDLEdBQUksRUFEM0RsQztRQUdEO01BQ0YsQ0FORHVDO0lBT0Q7RUFDRjtFQUVELE9BQU8sMEJBQVUxRixHQUFWLENBQVA7QUFDRDtBQUVNLE1BQU1tYyxFQUFFLEdBQUcsT0FBTy9LLFdBQVAsS0FBdUIsV0FBbEM7O0FBQ0EsTUFBTUQsRUFBRSxHQUNiZ0wsRUFBRSxJQUNGLE9BQU8vSyxXQUFXLENBQUNDLElBQW5CLEtBQTRCLFVBRDVCOEssSUFFQSxPQUFPL0ssV0FBVyxDQUFDZ0wsT0FBbkIsS0FBK0IsVUFIMUI7Ozs7Ozs7Ozs7Ozs7QUN4WU0sd0JBQXdCLDBDQUEwQyxnREFBZ0QsZ0NBQWdDLGdDQUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7O0FDREEsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FaO0FBQ1M7QUFDaEI7QUFFMUIsTUFBTUMsUUFBUSxHQUFHQSxDQUFBLEtBQU07RUFDckIsTUFBTTtJQUFBLEdBQUNqTSxLQUFLO0lBQUEsR0FBRWtNO0VBQVEsSUFBSS9WLHNEQUFRLENBQUM7SUFDakM2RCxJQUFJLEVBQUUsRUFBRTtJQUNSbVMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsUUFBUSxFQUFFLEVBQUU7SUFDWnBaLEtBQUssRUFBRSxFQUFFO0lBQ1R3QixPQUFPLEVBQUUsRUFBRTtJQUNYNlgsVUFBVSxFQUFFO0VBQ2QsQ0FBQyxDQUFDO0VBRUYsTUFBTTtJQUFFclMsSUFBSTtJQUFFbVMsS0FBSztJQUFFQyxRQUFRO0lBQUVwWixLQUFLO0lBQUV3QixPQUFPO0lBQUU2WDtFQUFXLENBQUMsR0FBR3JNLEtBQUs7RUFFbkUsTUFBTXNNLFlBQVksR0FBSXRTLElBQUksSUFBTWhHLENBQUMsSUFBSztJQUNwQ2tZLFFBQVEsQ0FBQUssYUFBQSxDQUFBQSxhQUFBLEtBQ0h2TSxLQUFLO01BQ1IsQ0FBQ2hHLElBQUksR0FBR2hHLENBQUMsQ0FBQy9CLE1BQU0sQ0FBQ3dLLEtBQUs7TUFDdEJ6SixLQUFLLEVBQUUsRUFBRTtNQUNUd0IsT0FBTyxFQUFFLEVBQUU7TUFDWDZYLFVBQVUsRUFBRTtJQUFVLEVBQ3ZCLENBQUM7RUFDSixDQUFDO0VBRUQsTUFBTUcsWUFBWSxHQUFJeFksQ0FBQyxJQUFLO0lBQzFCQSxDQUFDLENBQUNLLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCO0lBQ0FvWSw0Q0FBSyxDQUNGQyxJQUFJLENBQUMsb0NBQW9DLEVBQUU7TUFDMUMxUyxJQUFJO01BQ0ptUyxLQUFLO01BQ0xDO0lBQ0YsQ0FBQyxDQUFDLENBQ0Q3WCxJQUFJLENBQUVvWSxRQUFRLElBQUs1WixPQUFPLENBQUM2WixHQUFHLENBQUNELFFBQVEsQ0FBQyxDQUFDLENBQ3pDdFosS0FBSyxDQUFFTCxLQUFLLElBQUtELE9BQU8sQ0FBQzZaLEdBQUcsQ0FBQzVaLEtBQUssQ0FBQyxDQUFDO0VBQ3pDLENBQUM7RUFFRCxNQUFNNlosWUFBWSxHQUFHQSxDQUFBLEtBQ25CeGMsS0FBQTtJQUFNeWMsUUFBUSxFQUFFTixZQUFhO0lBQUFoYyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDM0JSLEtBQUE7SUFBS2MsU0FBUyxFQUFDLFlBQVk7SUFBQVgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3pCUixLQUFBO0lBQ0VvTSxLQUFLLEVBQUV6QyxJQUFLO0lBQ1orUyxRQUFRLEVBQUVULFlBQVksQ0FBQyxNQUFNLENBQUU7SUFDL0JsVixJQUFJLEVBQUMsTUFBTTtJQUNYakcsU0FBUyxFQUFDLGNBQWM7SUFDeEI2YixXQUFXLEVBQUMsZ0JBQWdCO0lBQUF4YyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsQ0FDN0IsQ0FDRSxDQUFDLEVBQ05SLEtBQUE7SUFBS2MsU0FBUyxFQUFDLFlBQVk7SUFBQVgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ3pCUixLQUFBO0lBQ0VvTSxLQUFLLEVBQUUwUCxLQUFNO0lBQ2JZLFFBQVEsRUFBRVQsWUFBWSxDQUFDLE9BQU8sQ0FBRTtJQUNoQ2xWLElBQUksRUFBQyxPQUFPO0lBQ1pqRyxTQUFTLEVBQUMsY0FBYztJQUN4QjZiLFdBQVcsRUFBQyxpQkFBaUI7SUFBQXhjLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUM5QixDQUNFLENBQUMsRUFDTlIsS0FBQTtJQUFLYyxTQUFTLEVBQUMsWUFBWTtJQUFBWCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDekJSLEtBQUE7SUFDRW9NLEtBQUssRUFBRTJQLFFBQVM7SUFDaEJXLFFBQVEsRUFBRVQsWUFBWSxDQUFDLFVBQVUsQ0FBRTtJQUNuQ2xWLElBQUksRUFBQyxVQUFVO0lBQ2ZqRyxTQUFTLEVBQUMsY0FBYztJQUN4QjZiLFdBQVcsRUFBQyxvQkFBb0I7SUFBQXhjLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUNqQyxDQUNFLENBQUMsRUFDTlIsS0FBQTtJQUFLYyxTQUFTLEVBQUMsWUFBWTtJQUFBWCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDekJSLEtBQUE7SUFBUWMsU0FBUyxFQUFDLHlCQUF5QjtJQUFBWCxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBRXdiLFVBQW1CLENBQzdELENBQ0QsQ0FDUDtFQUVELE9BQ0VoYyxLQUFBLENBQUNILDBEQUFNO0lBQUFNLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNMUixLQUFBO0lBQUtjLFNBQVMsRUFBQyxzQkFBc0I7SUFBQVgsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ25DUixLQUFBO0lBQUFHLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxhQUFnQixDQUFDLEVBQ2pCUixLQUFBO0lBQUFHLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFLLENBQUMsRUFDTGdjLFlBQVksQ0FBQyxDQUFDLEVBQ2Z4YyxLQUFBO0lBQUFHLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFLLENBQUMsRUFDTG9jLElBQUksQ0FBQ0MsU0FBUyxDQUFDbE4sS0FBSyxDQUNsQixDQUNDLENBQUM7QUFFYixDQUFDO0FBRWNpTSx1RUFBUSxFOzs7Ozs7Ozs7OztBQ3ZGdkIsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvcmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3JlZ2lzdGVyLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5pbXBvcnQgXCJucHJvZ3Jlc3MvbnByb2dyZXNzLmNzc1wiO1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKHVybCkgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKHVybCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAodXJsKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGhlYWQgPSAoKSA9PiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtR241Mzg0eHFRMWFvV1hBKzA1OFJYUHhQZzZmeTRJV3ZUTmgwRTI2M1htRmNKbFNBd2lHZ0ZBVy9kQWlTNkpYbVwiXG4gICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvY3NzL3N0eWxlcy5jc3NcIiAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG5cbiAgY29uc3QgbmF2ID0gKCkgPT4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMgYmctd2FybmluZ1wiPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdGV4dC1kYXJrXCI+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgdGV4dC1kYXJrXCI+TG9naW48L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIHRleHQtZGFya1wiPlJlZ2lzdGVyPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICB7aGVhZCgpfSB7bmF2KCl9IDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTUgcGItNVwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyohIEF4aW9zIHYxLjIwLjAgQ29weXJpZ2h0IChjKSAyMDI2IE1hdHQgWmFicmlza2llIGFuZCBjb250cmlidXRvcnMgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIEZvcm1EYXRhJDEgPSByZXF1aXJlKCdmb3JtLWRhdGEnKTtcbnZhciBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcbnZhciB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbnZhciBIdHRwc1Byb3h5QWdlbnQgPSByZXF1aXJlKCdodHRwcy1wcm94eS1hZ2VudCcpO1xudmFyIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG52YXIgaHR0cHMgPSByZXF1aXJlKCdodHRwcycpO1xudmFyIGh0dHAyID0gcmVxdWlyZSgnaHR0cDInKTtcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgZm9sbG93UmVkaXJlY3RzID0gcmVxdWlyZSgnZm9sbG93LXJlZGlyZWN0cycpO1xudmFyIHpsaWIgPSByZXF1aXJlKCd6bGliJyk7XG52YXIgc3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgYm91bmQgdmVyc2lvbiBvZiBhIGZ1bmN0aW9uIHdpdGggYSBzcGVjaWZpZWQgYHRoaXNgIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBiaW5kXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgLSBUaGUgdmFsdWUgdG8gYmUgcGFzc2VkIGFzIHRoZSBgdGhpc2AgcGFyYW1ldGVyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uIHRoYXQgd2lsbCBjYWxsIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBzcGVjaWZpZWQgYHRoaXNgIGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxuY29uc3Qge1xuICB0b1N0cmluZ1xufSA9IE9iamVjdC5wcm90b3R5cGU7XG5jb25zdCB7XG4gIGdldFByb3RvdHlwZU9mXG59ID0gT2JqZWN0O1xuY29uc3Qge1xuICBpdGVyYXRvcixcbiAgdG9TdHJpbmdUYWdcbn0gPSBTeW1ib2w7XG5cbi8qIENyZWF0aW5nIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGNoZWNrIGlmIGFuIG9iamVjdCBoYXMgYSBwcm9wZXJ0eS4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gKCh7XG4gIGhhc093blByb3BlcnR5XG59KSA9PiAob2JqLCBwcm9wKSA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpKE9iamVjdC5wcm90b3R5cGUpO1xuY29uc3QgaXNVbnNhZmVPYmplY3RLZXkgPSBwcm9wID0+IHR5cGVvZiBwcm9wID09PSAnc3RyaW5nJyAmJiAocHJvcCA9PT0gJ19fcHJvdG9fXycgfHwgcHJvcCA9PT0gJ2NvbnN0cnVjdG9yJyB8fCBwcm9wID09PSAncHJvdG90eXBlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgYW4gaW5oZXJpdGVkIG9iamVjdCBtdXN0IGJlIHRyZWF0ZWQgYXMgYSBzaGFyZWQtcHJvdG90eXBlXG4gKiBib3VuZGFyeS4gQ3Jvc3MtcmVhbG0gT2JqZWN0LnByb3RvdHlwZSBvYmplY3RzIGNhbm5vdCBiZSBkaXN0aW5ndWlzaGVkXG4gKiByZWxpYWJseSBmcm9tIGFwcGxpY2F0aW9uLWNyZWF0ZWQgbnVsbC1wcm90b3R5cGUgb2JqZWN0cyBiZWNhdXNlIHRoZWlyXG4gKiBwcm9wZXJ0aWVzIGFyZSBtdXRhYmxlLCBzbyBhbGwgaW5oZXJpdGVkIHRlcm1pbmFsIHByb3RvdHlwZXMgYXJlIGV4Y2x1ZGVkXG4gKiBhcyBhIGZhaWwtY2xvc2VkIGJvdW5kYXJ5LiBBIG51bGwtcHJvdG90eXBlIHNvdXJjZSBzdGlsbCBrZWVwcyBpdHMgb3duXG4gKiBwcm9wZXJ0aWVzLCBhcyBwcm9kdWNlZCBieSBtZXJnZUNvbmZpZyBhbmQgb3RoZXIgc2FmZSBtYXRlcmlhbGl6YXRpb24gcGF0aHMuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0XG4gKiBAcGFyYW0geyp9IHByb3RvdHlwZSBUaGUgb2JqZWN0J3MgcHJvdG90eXBlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNvdXJjZSBXaGV0aGVyIG9iaiBpcyB0aGUgb3JpZ2luYWwgdHJhdmVyc2FsIHNvdXJjZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIHdoZW4gb2JqIGlzIGEgc2FmZSBwcm90b3R5cGUgdHJhdmVyc2FsIGJvdW5kYXJ5XG4gKi9cbmNvbnN0IGlzUHJvdG90eXBlQm91bmRhcnkgPSAob2JqLCBwcm90b3R5cGUsIHNvdXJjZSkgPT4gb2JqID09PSBPYmplY3QucHJvdG90eXBlIHx8ICFzb3VyY2UgJiYgcHJvdG90eXBlID09PSBudWxsO1xuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIGFuIG9iamVjdCBjYW4gcmV0YWluIGl0cyBpZGVudGl0eSB0aHJvdWdoIGNvZGUgcGF0aHMgdGhhdFxuICogYWRkLCByZXBsYWNlLCBhbmQgcmVtb3ZlIGNvbmZpZyBwcm9wZXJ0aWVzIHdpdGhvdXQgYnlwYXNzaW5nIHVuc2FmZS1rZXlcbiAqIGZpbHRlcmluZy4gSW1tdXRhYmxlIG9iamVjdHMsIHVuc2FmZS1rZXktYmVhcmluZyBvYmplY3RzLCBhbmQgb2JqZWN0cyB3aXRoXG4gKiBhY2Nlc3NvciBvciByZXN0cmljdGVkIGRhdGEgcHJvcGVydGllcyBtdXN0IGJlIG1hdGVyaWFsaXplZCBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIHdoZW4gZXZlcnkgb3duIHByb3BlcnR5IGlzIHNhZmUgYW5kIGZ1bGx5IG11dGFibGVcbiAqL1xuY29uc3QgaXNTYWZlQW5kRnVsbHlNdXRhYmxlID0gb2JqID0+IHtcbiAgaWYgKCFPYmplY3QuaXNFeHRlbnNpYmxlKG9iaikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHByb3BzLnB1c2goLi4uT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopKTtcbiAgfVxuICByZXR1cm4gcHJvcHMuZXZlcnkocHJvcCA9PiB7XG4gICAgaWYgKGlzVW5zYWZlT2JqZWN0S2V5KHByb3ApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcCk7XG4gICAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSAmJiBkZXNjcmlwdG9yLndyaXRhYmxlID09PSB0cnVlO1xuICB9KTtcbn07XG5cbi8qKlxuICogV2FsayB0aGUgcHJvdG90eXBlIGNoYWluIChleGNsdWRpbmcgdGhlIHNvdXJjZSByZWFsbSdzIE9iamVjdC5wcm90b3R5cGUpXG4gKiBsb29raW5nIGZvciBhbiBvd24gYHByb3BgLiBUaGlzIGRpc3Rpbmd1aXNoZXMgZ2VudWluZSBvd24vaW5oZXJpdGVkIG1lbWJlcnNcbiAqIOKAlCBpbmNsdWRpbmcgY2xhc3MgYWNjZXNzb3JzIGFuZCB0ZW1wbGF0ZSBwcm90b3R5cGVzIOKAlCBmcm9tIG1lbWJlcnMgaW5qZWN0ZWRcbiAqIHZpYSBPYmplY3QucHJvdG90eXBlIHBvbGx1dGlvbiAoZS5nLiBgT2JqZWN0LnByb3RvdHlwZS51c2VybmFtZSA9ICcuLi4nYCksXG4gKiB3aGljaCBsaXZlIG9uIE9iamVjdC5wcm90b3R5cGUgaXRzZWxmIGFuZCBhcmUgdGhlcmVmb3JlIG5ldmVyIG1hdGNoZWQuXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgd2hvc2UgY2hhaW4gdG8gaW5zcGVjdFxuICogQHBhcmFtIHtzdHJpbmd8c3ltYm9sfSBwcm9wIFRoZSBwcm9wZXJ0eSBrZXkgdG8gbG9vayBmb3JcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSB3aGVuIGBwcm9wYCBpcyBvd25lZCBiZWxvdyBPYmplY3QucHJvdG90eXBlXG4gKi9cbmNvbnN0IGhhc093bkluUHJvdG90eXBlQ2hhaW4gPSAodGhpbmcsIHByb3ApID0+IHtcbiAgbGV0IG9iaiA9IHRoaW5nO1xuICBjb25zdCBzZWVuID0gW107XG4gIHdoaWxlIChvYmogIT0gbnVsbCkge1xuICAgIGlmIChzZWVuLmluZGV4T2Yob2JqKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2Vlbi5wdXNoKG9iaik7XG4gICAgY29uc3QgcHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgICBpZiAoaXNQcm90b3R5cGVCb3VuZGFyeShvYmosIHByb3RvdHlwZSwgb2JqID09PSB0aGluZykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvYmogPSBwcm90b3R5cGU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBSZWFkIGBvYmpbcHJvcF1gIG9ubHkgd2hlbiBpdCBpcyBzYWZlIGZyb20gT2JqZWN0LnByb3RvdHlwZSBwb2xsdXRpb24uIE93blxuICogcHJvcGVydGllcyBhbmQgbWVtYmVycyBpbmhlcml0ZWQgZnJvbSBhIG5vbi1PYmplY3QucHJvdG90eXBlIHNvdXJjZSAoYSBjbGFzc1xuICogaW5zdGFuY2Ugb3IgdGVtcGxhdGUgb2JqZWN0KSBhcmUgaG9ub3JlZDsgYSB2YWx1ZSByZWFjaGFibGUgb25seSB0aHJvdWdoIGFcbiAqIHBvbGx1dGVkIE9iamVjdC5wcm90b3R5cGUgaXMgaWdub3JlZCBhbmQgYHVuZGVmaW5lZGAgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHsqfSBvYmogVGhlIHNvdXJjZSBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfHN5bWJvbH0gcHJvcCBUaGUgcHJvcGVydHkga2V5IHRvIHJlYWRcbiAqXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc29sdmVkIHZhbHVlLCBvciB1bmRlZmluZWQgd2hlbiB1bnNhZmUvYWJzZW50XG4gKi9cbmNvbnN0IGdldFNhZmVQcm9wID0gKG9iaiwgcHJvcCkgPT4gb2JqICE9IG51bGwgJiYgaGFzT3duSW5Qcm90b3R5cGVDaGFpbihvYmosIHByb3ApID8gb2JqW3Byb3BdIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEZsYXR0ZW4gYW4gb2JqZWN0IGFuZCBpdHMgYXBwbGljYXRpb24tZGVmaW5lZCBwcm90b3R5cGUgY2hhaW4gaW50byBhXG4gKiBudWxsLXByb3RvdHlwZSBvYmplY3QuIE1lbWJlcnMgaW5oZXJpdGVkIG9ubHkgZnJvbSB0aGUgc291cmNlIHJlYWxtJ3NcbiAqIE9iamVjdC5wcm90b3R5cGUgYXJlIGRlbGliZXJhdGVseSBleGNsdWRlZCwgd2hpbGUgY2xhc3MvdGVtcGxhdGUgbWVtYmVyc1xuICogYmVsb3cgdGhhdCBib3VuZGFyeSBhcmUgcHJlc2VydmVkLlxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIGZsYXR0ZW5cbiAqXG4gKiBAcmV0dXJucyB7Kn0gQSBudWxsLXByb3RvdHlwZSBjb3B5LCBvciB0aGUgb3JpZ2luYWwgdmFsdWUgd2hlbiBpdCBpcyBhbHJlYWR5XG4gKiBzdHJ1Y3R1cmFsbHkgc2FmZSBvciBpcyBub3QgYW4gb2JqZWN0XG4gKi9cbmNvbnN0IHRvU2FmZUZsYXRPYmplY3QgPSB0aGluZyA9PiB7XG4gIGlmICh0aGluZyA9PSBudWxsIHx8IHR5cGVvZiB0aGluZyAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHRoaW5nICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRoaW5nO1xuICB9XG4gIGNvbnN0IHNvdXJjZVByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKHRoaW5nKTtcbiAgaWYgKHNvdXJjZVByb3RvdHlwZSA9PT0gbnVsbCAmJiBpc1NhZmVBbmRGdWxseU11dGFibGUodGhpbmcpKSB7XG4gICAgcmV0dXJuIHRoaW5nO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGNvbnN0IG1lcmdlZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGNvbnN0IHNlZW4gPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSB0aGluZztcbiAgd2hpbGUgKGN1cnJlbnQgIT0gbnVsbCkge1xuICAgIGlmIChzZWVuLmluZGV4T2YoY3VycmVudCkgIT09IC0xKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2Vlbi5wdXNoKGN1cnJlbnQpO1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IGN1cnJlbnQgPT09IHRoaW5nID8gc291cmNlUHJvdG90eXBlIDogZ2V0UHJvdG90eXBlT2YoY3VycmVudCk7XG4gICAgaWYgKGlzUHJvdG90eXBlQm91bmRhcnkoY3VycmVudCwgcHJvdG90eXBlLCBjdXJyZW50ID09PSB0aGluZykpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBwcm9wcy5wdXNoKC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoY3VycmVudCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgcHJvcHMpIHtcbiAgICAgIGlmIChpc1Vuc2FmZU9iamVjdEtleShwcm9wKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICghaGFzT3duUHJvcGVydHkobWVyZ2VkLCBwcm9wKSkge1xuICAgICAgICByZXN1bHRbcHJvcF0gPSB0aGluZ1twcm9wXTtcbiAgICAgICAgbWVyZ2VkW3Byb3BdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY3VycmVudCA9IHByb3RvdHlwZTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbmNvbnN0IGtpbmRPZiA9IChjYWNoZSA9PiB0aGluZyA9PiB7XG4gIGNvbnN0IHN0ciA9IHRvU3RyaW5nLmNhbGwodGhpbmcpO1xuICByZXR1cm4gY2FjaGVbc3RyXSB8fCAoY2FjaGVbc3RyXSA9IHN0ci5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKSk7XG59KShPYmplY3QuY3JlYXRlKG51bGwpKTtcbmNvbnN0IGtpbmRPZlRlc3QgPSB0eXBlID0+IHtcbiAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIHRoaW5nID0+IGtpbmRPZih0aGluZykgPT09IHR5cGU7XG59O1xuY29uc3QgdHlwZU9mVGVzdCA9IHR5cGUgPT4gdGhpbmcgPT4gdHlwZW9mIHRoaW5nID09PSB0eXBlO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgbm9uLW51bGwgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3Qge1xuICBpc0FycmF5XG59ID0gQXJyYXk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNVbmRlZmluZWQgPSB0eXBlT2ZUZXN0KCd1bmRlZmluZWQnKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsKSAmJiB2YWwuY29uc3RydWN0b3IgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbC5jb25zdHJ1Y3RvcikgJiYgaXNGdW5jdGlvbiQxKHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcikgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNBcnJheUJ1ZmZlciA9IGtpbmRPZlRlc3QoJ0FycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgbGV0IHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdmFsICYmIHZhbC5idWZmZXIgJiYgaXNBcnJheUJ1ZmZlcih2YWwuYnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzU3RyaW5nID0gdHlwZU9mVGVzdCgnc3RyaW5nJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGdW5jdGlvbiQxID0gdHlwZU9mVGVzdCgnZnVuY3Rpb24nKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc051bWJlciA9IHR5cGVPZlRlc3QoJ251bWJlcicpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc09iamVjdCA9IHRoaW5nID0+IHRoaW5nICE9PSBudWxsICYmIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCb29sZWFuXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCb29sZWFuLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNCb29sZWFuID0gdGhpbmcgPT4gdGhpbmcgPT09IHRydWUgfHwgdGhpbmcgPT09IGZhbHNlO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzUGxhaW5PYmplY3QgPSB2YWwgPT4ge1xuICBpZiAoIWlzT2JqZWN0KHZhbCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgcHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIChwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlIHx8IGdldFByb3RvdHlwZU9mKHByb3RvdHlwZSkgPT09IG51bGwpICYmXG4gIC8vIFRyZWF0IHNhZmUgb3duL2luaGVyaXRlZCBTeW1ib2wudG9TdHJpbmdUYWcgb3IgU3ltYm9sLml0ZXJhdG9yIG1lbWJlcnMgYXNcbiAgLy8gZXZpZGVuY2UgdGhlIHZhbHVlIGlzIHRhZ2dlZC9pdGVyYWJsZSwgd2hpbGUgaWdub3JpbmcgbWVtYmVycyByZWFjaGFibGVcbiAgLy8gb25seSB0aHJvdWdoIHNoYXJlZCBvciB0ZXJtaW5hbCBwcm90b3R5cGUgYm91bmRhcmllcy5cbiAgIWhhc093bkluUHJvdG90eXBlQ2hhaW4odmFsLCB0b1N0cmluZ1RhZykgJiYgIWhhc093bkluUHJvdG90eXBlQ2hhaW4odmFsLCBpdGVyYXRvcik7XG59O1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIGVtcHR5IG9iamVjdCAoc2FmZWx5IGhhbmRsZXMgQnVmZmVycylcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIGVtcHR5IG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzRW1wdHlPYmplY3QgPSB2YWwgPT4ge1xuICAvLyBFYXJseSByZXR1cm4gZm9yIG5vbi1vYmplY3RzIG9yIEJ1ZmZlcnMgdG8gcHJldmVudCBSYW5nZUVycm9yXG4gIGlmICghaXNPYmplY3QodmFsKSB8fCBpc0J1ZmZlcih2YWwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbCkubGVuZ3RoID09PSAwICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpID09PSBPYmplY3QucHJvdG90eXBlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gRmFsbGJhY2sgZm9yIGFueSBvdGhlciBvYmplY3RzIHRoYXQgbWlnaHQgY2F1c2UgUmFuZ2VFcnJvciB3aXRoIE9iamVjdC5rZXlzKClcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0RhdGUgPSBraW5kT2ZUZXN0KCdEYXRlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc0ZpbGUgPSBraW5kT2ZUZXN0KCdGaWxlJyk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBSZWFjdCBOYXRpdmUgQmxvYlxuICogUmVhY3QgTmF0aXZlIFwiYmxvYlwiOiBhbiBvYmplY3Qgd2l0aCBhIGB1cmlgIGF0dHJpYnV0ZS4gT3B0aW9uYWxseSwgaXQgY2FuXG4gKiBhbHNvIGhhdmUgYSBgbmFtZWAgYW5kIGB0eXBlYCBhdHRyaWJ1dGUgdG8gc3BlY2lmeSBmaWxlbmFtZSBhbmQgY29udGVudCB0eXBlXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL2Jsb2IvMjY2ODRjZjNhZGY0MDk0ZWI2YzQwNWQzNDVhNzViZjhjN2MwYmY4OC9MaWJyYXJpZXMvTmV0d29yay9Gb3JtRGF0YS5qcyNMNjgtTDcxXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgUmVhY3QgTmF0aXZlIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1JlYWN0TmF0aXZlQmxvYiA9IHZhbHVlID0+IHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHR5cGVvZiB2YWx1ZS51cmkgIT09ICd1bmRlZmluZWQnKTtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGVudmlyb25tZW50IGlzIFJlYWN0IE5hdGl2ZVxuICogUmVhY3ROYXRpdmUgYEZvcm1EYXRhYCBoYXMgYSBub24tc3RhbmRhcmQgYGdldFBhcnRzKClgIG1ldGhvZFxuICpcbiAqIEBwYXJhbSB7Kn0gZm9ybURhdGEgVGhlIGZvcm1EYXRhIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBlbnZpcm9ubWVudCBpcyBSZWFjdCBOYXRpdmUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1JlYWN0TmF0aXZlID0gZm9ybURhdGEgPT4gZm9ybURhdGEgJiYgdHlwZW9mIGZvcm1EYXRhLmdldFBhcnRzICE9PSAndW5kZWZpbmVkJztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzQmxvYiA9IGtpbmRPZlRlc3QoJ0Jsb2InKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVMaXN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGVMaXN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuY29uc3QgaXNGaWxlTGlzdCA9IGtpbmRPZlRlc3QoJ0ZpbGVMaXN0Jyk7XG5jb25zdCBpc1NldCA9IGtpbmRPZlRlc3QoJ1NldCcpO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzU3RyZWFtID0gdmFsID0+IGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbiQxKHZhbC5waXBlKTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gZ2V0R2xvYmFsKCkge1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gZ2xvYmFsVGhpcztcbiAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIHNlbGY7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIHdpbmRvdztcbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gZ2xvYmFsO1xuICByZXR1cm4ge307XG59XG5jb25zdCBHID0gZ2V0R2xvYmFsKCk7XG5jb25zdCBGb3JtRGF0YUN0b3IgPSB0eXBlb2YgRy5Gb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcgPyBHLkZvcm1EYXRhIDogdW5kZWZpbmVkO1xuY29uc3QgaXNGb3JtRGF0YSA9IHRoaW5nID0+IHtcbiAgaWYgKCF0aGluZykgcmV0dXJuIGZhbHNlO1xuICBpZiAoRm9ybURhdGFDdG9yICYmIHRoaW5nIGluc3RhbmNlb2YgRm9ybURhdGFDdG9yKSByZXR1cm4gdHJ1ZTtcbiAgLy8gUmVqZWN0IHBsYWluIG9iamVjdHMgaW5oZXJpdGluZyBkaXJlY3RseSBmcm9tIE9iamVjdC5wcm90b3R5cGUgc28gcHJvdG90eXBlLXBvbGx1dGlvbiBnYWRnZXRzIGNhbid0IHNwb29mIEZvcm1EYXRhLlxuICBjb25zdCBwcm90byA9IGdldFByb3RvdHlwZU9mKHRoaW5nKTtcbiAgaWYgKCFwcm90byB8fCBwcm90byA9PT0gT2JqZWN0LnByb3RvdHlwZSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoIWlzRnVuY3Rpb24kMSh0aGluZy5hcHBlbmQpKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGtpbmQgPSBraW5kT2YodGhpbmcpO1xuICByZXR1cm4ga2luZCA9PT0gJ2Zvcm1kYXRhJyB8fFxuICAvLyBkZXRlY3QgZm9ybS1kYXRhIGluc3RhbmNlXG4gIGtpbmQgPT09ICdvYmplY3QnICYmIGlzRnVuY3Rpb24kMSh0aGluZy50b1N0cmluZykgJiYgdGhpbmcudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgRm9ybURhdGFdJztcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5jb25zdCBpc1VSTFNlYXJjaFBhcmFtcyA9IGtpbmRPZlRlc3QoJ1VSTFNlYXJjaFBhcmFtcycpO1xuY29uc3QgW2lzUmVhZGFibGVTdHJlYW0sIGlzUmVxdWVzdCwgaXNSZXNwb25zZSwgaXNIZWFkZXJzXSA9IFsnUmVhZGFibGVTdHJlYW0nLCAnUmVxdWVzdCcsICdSZXNwb25zZScsICdIZWFkZXJzJ10ubWFwKGtpbmRPZlRlc3QpO1xuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5jb25zdCB0cmltID0gc3RyID0+IHtcbiAgcmV0dXJuIHN0ci50cmltID8gc3RyLnRyaW0oKSA6IHN0ci5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZywgJycpO1xufTtcbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5PHVua25vd24+fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFsbE93bktleXMgPSBmYWxzZV1cbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbiwge1xuICBhbGxPd25LZXlzID0gZmFsc2Vcbn0gPSB7fSkge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgaTtcbiAgbGV0IGw7XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yIChpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBCdWZmZXIgY2hlY2tcbiAgICBpZiAoaXNCdWZmZXIob2JqKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGNvbnN0IGtleXMgPSBhbGxPd25LZXlzID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKSA6IE9iamVjdC5rZXlzKG9iaik7XG4gICAgY29uc3QgbGVuID0ga2V5cy5sZW5ndGg7XG4gICAgbGV0IGtleTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRmluZHMgYSBrZXkgaW4gYW4gb2JqZWN0LCBjYXNlLWluc2Vuc2l0aXZlLCByZXR1cm5pbmcgdGhlIGFjdHVhbCBrZXkgbmFtZS5cbiAqIFJldHVybnMgbnVsbCBpZiB0aGUgb2JqZWN0IGlzIGEgQnVmZmVyIG9yIGlmIG5vIG1hdGNoIGlzIGZvdW5kLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBUaGUgb2JqZWN0IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IHRvIGZpbmQgKGNhc2UtaW5zZW5zaXRpdmUpLlxuICogQHJldHVybnMgez9zdHJpbmd9IFRoZSBhY3R1YWwga2V5IG5hbWUgaWYgZm91bmQsIG90aGVyd2lzZSBudWxsLlxuICovXG5mdW5jdGlvbiBmaW5kS2V5KG9iaiwga2V5KSB7XG4gIGlmIChpc0J1ZmZlcihvYmopKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICBsZXQgX2tleTtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBfa2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ID09PSBfa2V5LnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIHJldHVybiBfa2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbmNvbnN0IF9nbG9iYWwgPSAoKCkgPT4ge1xuICAvKmVzbGludCBuby11bmRlZjowKi9cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIGdsb2JhbFRoaXM7XG4gIHJldHVybiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWw7XG59KSgpO1xuY29uc3QgaXNDb250ZXh0RGVmaW5lZCA9IGNvbnRleHQgPT4gIWlzVW5kZWZpbmVkKGNvbnRleHQpICYmIGNvbnRleHQgIT09IF9nbG9iYWw7XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKlxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC4uLm9ianMpIHtcbiAgY29uc3Qge1xuICAgIGNhc2VsZXNzLFxuICAgIHNraXBVbmRlZmluZWRcbiAgfSA9IGlzQ29udGV4dERlZmluZWQodGhpcykgJiYgdGhpcyB8fCB7fTtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGNvbnN0IGFzc2lnblZhbHVlID0gKHZhbCwga2V5KSA9PiB7XG4gICAgLy8gU2tpcCBkYW5nZXJvdXMgcHJvcGVydHkgbmFtZXMgdG8gcHJldmVudCBwcm90b3R5cGUgcG9sbHV0aW9uXG4gICAgaWYgKGtleSA9PT0gJ19fcHJvdG9fXycgfHwga2V5ID09PSAnY29uc3RydWN0b3InIHx8IGtleSA9PT0gJ3Byb3RvdHlwZScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBmaW5kS2V5IGxvd2VyY2FzZXMgdGhlIGtleSwgc28gY2FzZWxlc3MgbG9va3VwIG9ubHkgYXBwbGllcyB0byBzdHJpbmdzIOKAlFxuICAgIC8vIHN5bWJvbCBrZXlzIGFyZSBpZGVudGl0eS1tYXRjaGVkLlxuICAgIGNvbnN0IHRhcmdldEtleSA9IGNhc2VsZXNzICYmIHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGZpbmRLZXkocmVzdWx0LCBrZXkpIHx8IGtleTtcbiAgICAvLyBSZWFkIHZpYSBvd24tcHJvcCBvbmx5IOKAlCBhIGJhcmUgYHJlc3VsdFt0YXJnZXRLZXldYCB3YWxrcyB0aGUgcHJvdG90eXBlXG4gICAgLy8gY2hhaW4sIHNvIGEgcG9sbHV0ZWQgT2JqZWN0LnByb3RvdHlwZSB2YWx1ZSBjb3VsZCBzdXJmYWNlIGhlcmUgYW5kIGdldFxuICAgIC8vIGNvcGllZCBpbnRvIHRoZSBtZXJnZWQgcmVzdWx0LlxuICAgIGNvbnN0IGV4aXN0aW5nID0gaGFzT3duUHJvcGVydHkocmVzdWx0LCB0YXJnZXRLZXkpID8gcmVzdWx0W3RhcmdldEtleV0gOiB1bmRlZmluZWQ7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QoZXhpc3RpbmcpICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZShleGlzdGluZywgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W3RhcmdldEtleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2UgaWYgKCFza2lwVW5kZWZpbmVkIHx8ICFpc1VuZGVmaW5lZCh2YWwpKSB7XG4gICAgICByZXN1bHRbdGFyZ2V0S2V5XSA9IHZhbDtcbiAgICB9XG4gIH07XG4gIGZvciAobGV0IGkgPSAwLCBsID0gb2Jqcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb25zdCBzb3VyY2UgPSBvYmpzW2ldO1xuICAgIGlmICghc291cmNlIHx8IGlzQnVmZmVyKHNvdXJjZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmb3JFYWNoKHNvdXJjZSwgYXNzaWduVmFsdWUpO1xuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0JyB8fCBpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3ltYm9scy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3Qgc3ltYm9sID0gc3ltYm9sc1tqXTtcbiAgICAgIGlmIChwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwgc3ltYm9sKSkge1xuICAgICAgICBhc3NpZ25WYWx1ZShzb3VyY2Vbc3ltYm9sXSwgc3ltYm9sKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWxsT3duS2V5c11cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuY29uc3QgZXh0ZW5kID0gKGEsIGIsIHRoaXNBcmcsIHtcbiAgYWxsT3duS2V5c1xufSA9IHt9KSA9PiB7XG4gIGZvckVhY2goYiwgKHZhbCwga2V5KSA9PiB7XG4gICAgaWYgKHRoaXNBcmcgJiYgaXNGdW5jdGlvbiQxKHZhbCkpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBrZXksIHtcbiAgICAgICAgLy8gTnVsbC1wcm90byBkZXNjcmlwdG9yIHNvIGEgcG9sbHV0ZWQgT2JqZWN0LnByb3RvdHlwZS5nZXQgY2Fubm90XG4gICAgICAgIC8vIGhpamFjayBkZWZpbmVQcm9wZXJ0eSdzIGFjY2Vzc29yLXZzLWRhdGEgcmVzb2x1dGlvbi5cbiAgICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgICB2YWx1ZTogYmluZCh2YWwsIHRoaXNBcmcpLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsIGtleSwge1xuICAgICAgICBfX3Byb3RvX186IG51bGwsXG4gICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGFsbE93bktleXNcbiAgfSk7XG4gIHJldHVybiBhO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYnl0ZSBvcmRlciBtYXJrZXIuIFRoaXMgY2F0Y2hlcyBFRiBCQiBCRiAodGhlIFVURi04IEJPTSlcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCB3aXRoIEJPTVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuY29uc3Qgc3RyaXBCT00gPSBjb250ZW50ID0+IHtcbiAgaWYgKGNvbnRlbnQuY2hhckNvZGVBdCgwKSA9PT0gMHhmZWZmKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMSk7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IHN1cGVyQ29uc3RydWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcHJvcHNdXG4gKiBAcGFyYW0ge29iamVjdH0gW2Rlc2NyaXB0b3JzXVxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBpbmhlcml0cyA9IChjb25zdHJ1Y3Rvciwgc3VwZXJDb25zdHJ1Y3RvciwgcHJvcHMsIGRlc2NyaXB0b3JzKSA9PiB7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIGRlc2NyaXB0b3JzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywge1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICB2YWx1ZTogY29uc3RydWN0b3IsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uc3RydWN0b3IsICdzdXBlcicsIHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgdmFsdWU6IHN1cGVyQ29uc3RydWN0b3IucHJvdG90eXBlXG4gIH0pO1xuICBwcm9wcyAmJiBPYmplY3QuYXNzaWduKGNvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvcHMpO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlIG9iamVjdCB3aXRoIGRlZXAgcHJvdG90eXBlIGNoYWluIHRvIGEgZmxhdCBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2VPYmogc291cmNlIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IFtkZXN0T2JqXVxuICogQHBhcmFtIHtGdW5jdGlvbnxCb29sZWFufSBbZmlsdGVyXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb3BGaWx0ZXJdXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuY29uc3QgdG9GbGF0T2JqZWN0ID0gKHNvdXJjZU9iaiwgZGVzdE9iaiwgZmlsdGVyLCBwcm9wRmlsdGVyKSA9PiB7XG4gIGxldCBwcm9wcztcbiAgbGV0IGk7XG4gIGxldCBwcm9wO1xuICBjb25zdCBtZXJnZWQgPSB7fTtcbiAgZGVzdE9iaiA9IGRlc3RPYmogfHwge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lcS1udWxsLGVxZXFlcVxuICBpZiAoc291cmNlT2JqID09IG51bGwpIHJldHVybiBkZXN0T2JqO1xuICBkbyB7XG4gICAgcHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VPYmopO1xuICAgIGkgPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSA+IDApIHtcbiAgICAgIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgIGlmICgoIXByb3BGaWx0ZXIgfHwgcHJvcEZpbHRlcihwcm9wLCBzb3VyY2VPYmosIGRlc3RPYmopKSAmJiAhbWVyZ2VkW3Byb3BdKSB7XG4gICAgICAgIGRlc3RPYmpbcHJvcF0gPSBzb3VyY2VPYmpbcHJvcF07XG4gICAgICAgIG1lcmdlZFtwcm9wXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHNvdXJjZU9iaiA9IGZpbHRlciAhPT0gZmFsc2UgJiYgZ2V0UHJvdG90eXBlT2Yoc291cmNlT2JqKTtcbiAgfSB3aGlsZSAoc291cmNlT2JqICYmICghZmlsdGVyIHx8IGZpbHRlcihzb3VyY2VPYmosIGRlc3RPYmopKSAmJiBzb3VyY2VPYmogIT09IE9iamVjdC5wcm90b3R5cGUpO1xuICByZXR1cm4gZGVzdE9iajtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgc3RyaW5nIGVuZHMgd2l0aCB0aGUgY2hhcmFjdGVycyBvZiBhIHNwZWNpZmllZCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoU3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uPSAwXVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBlbmRzV2l0aCA9IChzdHIsIHNlYXJjaFN0cmluZywgcG9zaXRpb24pID0+IHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID4gc3RyLmxlbmd0aCkge1xuICAgIHBvc2l0aW9uID0gc3RyLmxlbmd0aDtcbiAgfVxuICBwb3NpdGlvbiAtPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICBjb25zdCBsYXN0SW5kZXggPSBzdHIuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTtcbiAgcmV0dXJuIGxhc3RJbmRleCAhPT0gLTEgJiYgbGFzdEluZGV4ID09PSBwb3NpdGlvbjtcbn07XG5cbi8qKlxuICogUmV0dXJucyBuZXcgYXJyYXkgZnJvbSBhcnJheSBsaWtlIG9iamVjdCBvciBudWxsIGlmIGZhaWxlZFxuICpcbiAqIEBwYXJhbSB7Kn0gW3RoaW5nXVxuICpcbiAqIEByZXR1cm5zIHs/QXJyYXl9XG4gKi9cbmNvbnN0IHRvQXJyYXkgPSB0aGluZyA9PiB7XG4gIGlmICghdGhpbmcpIHJldHVybiBudWxsO1xuICBpZiAoaXNBcnJheSh0aGluZykpIHJldHVybiB0aGluZztcbiAgbGV0IGkgPSB0aGluZy5sZW5ndGg7XG4gIGlmICghaXNOdW1iZXIoaSkpIHJldHVybiBudWxsO1xuICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoaSk7XG4gIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgYXJyW2ldID0gdGhpbmdbaV07XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogQ2hlY2tpbmcgaWYgdGhlIFVpbnQ4QXJyYXkgZXhpc3RzIGFuZCBpZiBpdCBkb2VzLCBpdCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjaGVja3MgaWYgdGhlXG4gKiB0aGluZyBwYXNzZWQgaW4gaXMgYW4gaW5zdGFuY2Ugb2YgVWludDhBcnJheVxuICpcbiAqIEBwYXJhbSB7VHlwZWRBcnJheX1cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5jb25zdCBpc1R5cGVkQXJyYXkgPSAoVHlwZWRBcnJheSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiB0aGluZyA9PiB7XG4gICAgcmV0dXJuIFR5cGVkQXJyYXkgJiYgdGhpbmcgaW5zdGFuY2VvZiBUeXBlZEFycmF5O1xuICB9O1xufSkodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnICYmIGdldFByb3RvdHlwZU9mKFVpbnQ4QXJyYXkpKTtcblxuLyoqXG4gKiBGb3IgZWFjaCBlbnRyeSBpbiB0aGUgb2JqZWN0LCBjYWxsIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBrZXkgYW5kIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PGFueSwgYW55Pn0gb2JqIC0gVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGVudHJ5LlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5jb25zdCBmb3JFYWNoRW50cnkgPSAob2JqLCBmbikgPT4ge1xuICBjb25zdCBnZW5lcmF0b3IgPSBvYmogJiYgb2JqW2l0ZXJhdG9yXTtcbiAgY29uc3QgX2l0ZXJhdG9yID0gZ2VuZXJhdG9yLmNhbGwob2JqKTtcbiAgbGV0IHJlc3VsdDtcbiAgd2hpbGUgKChyZXN1bHQgPSBfaXRlcmF0b3IubmV4dCgpKSAmJiAhcmVzdWx0LmRvbmUpIHtcbiAgICBjb25zdCBwYWlyID0gcmVzdWx0LnZhbHVlO1xuICAgIGZuLmNhbGwob2JqLCBwYWlyWzBdLCBwYWlyWzFdKTtcbiAgfVxufTtcblxuLyoqXG4gKiBJdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBhbmQgYSBzdHJpbmcsIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGFsbCB0aGUgbWF0Y2hlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWdFeHAgLSBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gVGhlIHN0cmluZyB0byBzZWFyY2guXG4gKlxuICogQHJldHVybnMge0FycmF5PGJvb2xlYW4+fVxuICovXG5jb25zdCBtYXRjaEFsbCA9IChyZWdFeHAsIHN0cikgPT4ge1xuICBsZXQgbWF0Y2hlcztcbiAgY29uc3QgYXJyID0gW107XG4gIHdoaWxlICgobWF0Y2hlcyA9IHJlZ0V4cC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgYXJyLnB1c2gobWF0Y2hlcyk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qIENoZWNraW5nIGlmIHRoZSBraW5kT2ZUZXN0IGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSB3aGVuIHBhc3NlZCBhbiBIVE1MRm9ybUVsZW1lbnQuICovXG5jb25zdCBpc0hUTUxGb3JtID0ga2luZE9mVGVzdCgnSFRNTEZvcm1FbGVtZW50Jyk7XG5jb25zdCB0b0NhbWVsQ2FzZSA9IHN0ciA9PiB7XG4gIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bLV9cXHNdKFthLXpcXGRdKShcXHcqKS9nLCBmdW5jdGlvbiByZXBsYWNlcihtLCBwMSwgcDIpIHtcbiAgICByZXR1cm4gcDEudG9VcHBlckNhc2UoKSArIHAyO1xuICB9KTtcbn07XG5jb25zdCB7XG4gIHByb3BlcnR5SXNFbnVtZXJhYmxlXG59ID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFJlZ0V4cCBvYmplY3RcbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgUmVnRXhwIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmNvbnN0IGlzUmVnRXhwID0ga2luZE9mVGVzdCgnUmVnRXhwJyk7XG5jb25zdCByZWR1Y2VEZXNjcmlwdG9ycyA9IChvYmosIHJlZHVjZXIpID0+IHtcbiAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopO1xuICBjb25zdCByZWR1Y2VkRGVzY3JpcHRvcnMgPSB7fTtcbiAgZm9yRWFjaChkZXNjcmlwdG9ycywgKGRlc2NyaXB0b3IsIG5hbWUpID0+IHtcbiAgICBsZXQgcmV0O1xuICAgIGlmICgocmV0ID0gcmVkdWNlcihkZXNjcmlwdG9yLCBuYW1lLCBvYmopKSAhPT0gZmFsc2UpIHtcbiAgICAgIHJlZHVjZWREZXNjcmlwdG9yc1tuYW1lXSA9IHJldCB8fCBkZXNjcmlwdG9yO1xuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG9iaiwgcmVkdWNlZERlc2NyaXB0b3JzKTtcbn07XG5cbi8qKlxuICogTWFrZXMgYWxsIG1ldGhvZHMgcmVhZC1vbmx5XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuY29uc3QgZnJlZXplTWV0aG9kcyA9IG9iaiA9PiB7XG4gIHJlZHVjZURlc2NyaXB0b3JzKG9iaiwgKGRlc2NyaXB0b3IsIG5hbWUpID0+IHtcbiAgICAvLyBza2lwIHJlc3RyaWN0ZWQgcHJvcHMgaW4gc3RyaWN0IG1vZGVcbiAgICBpZiAoaXNGdW5jdGlvbiQxKG9iaikgJiYgWydhcmd1bWVudHMnLCAnY2FsbGVyJywgJ2NhbGxlZSddLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gb2JqW25hbWVdO1xuICAgIGlmICghaXNGdW5jdGlvbiQxKHZhbHVlKSkgcmV0dXJuO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGZhbHNlO1xuICAgIGlmICgnd3JpdGFibGUnIGluIGRlc2NyaXB0b3IpIHtcbiAgICAgIGRlc2NyaXB0b3Iud3JpdGFibGUgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFkZXNjcmlwdG9yLnNldCkge1xuICAgICAgZGVzY3JpcHRvci5zZXQgPSAoKSA9PiB7XG4gICAgICAgIHRocm93IEVycm9yKFwiQ2FuIG5vdCByZXdyaXRlIHJlYWQtb25seSBtZXRob2QgJ1wiICsgbmFtZSArIFwiJ1wiKTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogQ29udmVydHMgYW4gYXJyYXkgb3IgYSBkZWxpbWl0ZWQgc3RyaW5nIGludG8gYW4gb2JqZWN0IHNldCB3aXRoIHZhbHVlcyBhcyBrZXlzIGFuZCB0cnVlIGFzIHZhbHVlcy5cbiAqIFVzZWZ1bCBmb3IgZmFzdCBtZW1iZXJzaGlwIGNoZWNrcy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gYXJyYXlPclN0cmluZyAtIFRoZSBhcnJheSBvciBzdHJpbmcgdG8gY29udmVydC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkZWxpbWl0ZXIgLSBUaGUgZGVsaW1pdGVyIHRvIHVzZSBpZiBpbnB1dCBpcyBhIHN0cmluZy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGtleXMgZnJvbSB0aGUgYXJyYXkgb3Igc3RyaW5nLCB2YWx1ZXMgc2V0IHRvIHRydWUuXG4gKi9cbmNvbnN0IHRvT2JqZWN0U2V0ID0gKGFycmF5T3JTdHJpbmcsIGRlbGltaXRlcikgPT4ge1xuICBjb25zdCBvYmogPSB7fTtcbiAgY29uc3QgZGVmaW5lID0gYXJyID0+IHtcbiAgICBhcnIuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICBvYmpbdmFsdWVdID0gdHJ1ZTtcbiAgICB9KTtcbiAgfTtcbiAgaXNBcnJheShhcnJheU9yU3RyaW5nKSA/IGRlZmluZShhcnJheU9yU3RyaW5nKSA6IGRlZmluZShTdHJpbmcoYXJyYXlPclN0cmluZykuc3BsaXQoZGVsaW1pdGVyKSk7XG4gIHJldHVybiBvYmo7XG59O1xuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuY29uc3QgdG9GaW5pdGVOdW1iZXIgPSAodmFsdWUsIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUgPSArdmFsdWUpID8gdmFsdWUgOiBkZWZhdWx0VmFsdWU7XG59O1xuXG4vKipcbiAqIElmIHRoZSB0aGluZyBpcyBhIEZvcm1EYXRhIG9iamVjdCwgcmV0dXJuIHRydWUsIG90aGVyd2lzZSByZXR1cm4gZmFsc2UuXG4gKlxuICogQHBhcmFtIHt1bmtub3dufSB0aGluZyAtIFRoZSB0aGluZyB0byBjaGVjay5cbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNTcGVjQ29tcGxpYW50Rm9ybSh0aGluZykge1xuICByZXR1cm4gISEodGhpbmcgJiYgaXNGdW5jdGlvbiQxKHRoaW5nLmFwcGVuZCkgJiYgdGhpbmdbdG9TdHJpbmdUYWddID09PSAnRm9ybURhdGEnICYmIHRoaW5nW2l0ZXJhdG9yXSk7XG59XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgY29udmVydHMgYW4gb2JqZWN0IHRvIGEgSlNPTi1jb21wYXRpYmxlIG9iamVjdCwgaGFuZGxpbmcgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgQnVmZmVycy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gVGhlIG9iamVjdCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge09iamVjdH0gVGhlIEpTT04tY29tcGF0aWJsZSBvYmplY3QuXG4gKi9cbmNvbnN0IHRvSlNPTk9iamVjdCA9IG9iaiA9PiB7XG4gIGNvbnN0IHZpc2l0ZWQgPSBuZXcgV2Vha1NldCgpO1xuICBjb25zdCB2aXNpdCA9IHNvdXJjZSA9PiB7XG4gICAgaWYgKGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIGlmICh2aXNpdGVkLmhhcyhzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy9CdWZmZXIgY2hlY2tcbiAgICAgIGlmIChpc0J1ZmZlcihzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICB9XG4gICAgICBpZiAoISgndG9KU09OJyBpbiBzb3VyY2UpKSB7XG4gICAgICAgIC8vIGFkZC1vbiBkZXNjZW50IC8gZGVsZXRlLW9uLWFzY2VudDogcHJlc2VydmVzIHBhdGggc2VtYW50aWNzLCBzbyBEQUcgbm9kZXMgc2VyaWFsaXNlIGF0IGV2ZXJ5IG9jY3VycmVuY2UgKHNlZSAjNzIzMCkuXG4gICAgICAgIHZpc2l0ZWQuYWRkKHNvdXJjZSk7XG4gICAgICAgIGxldCB0YXJnZXQ7XG4gICAgICAgIGlmIChpc1NldChzb3VyY2UpKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBzb3VyY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRWYWx1ZSA9IHZpc2l0KHZhbHVlKTtcbiAgICAgICAgICAgICFpc1VuZGVmaW5lZChyZWR1Y2VkVmFsdWUpICYmIHRhcmdldC5wdXNoKHJlZHVjZWRWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldCA9IGlzQXJyYXkoc291cmNlKSA/IFtdIDoge307XG4gICAgICAgICAgZm9yRWFjaChzb3VyY2UsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VkVmFsdWUgPSB2aXNpdCh2YWx1ZSk7XG4gICAgICAgICAgICAhaXNVbmRlZmluZWQocmVkdWNlZFZhbHVlKSAmJiAodGFyZ2V0W2tleV0gPSByZWR1Y2VkVmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZpc2l0ZWQuZGVsZXRlKHNvdXJjZSk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzb3VyY2U7XG4gIH07XG4gIHJldHVybiB2aXNpdChvYmopO1xufTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYW4gYXN5bmMgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyAtIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gYXN5bmMgZnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZS5cbiAqL1xuY29uc3QgaXNBc3luY0ZuID0ga2luZE9mVGVzdCgnQXN5bmNGdW5jdGlvbicpO1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyB0aGVuYWJsZSAoaGFzIHRoZW4gYW5kIGNhdGNoIG1ldGhvZHMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gdGhpbmcgLSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIHRoZW5hYmxlLCBvdGhlcndpc2UgZmFsc2UuXG4gKi9cbmNvbnN0IGlzVGhlbmFibGUgPSB0aGluZyA9PiB0aGluZyAmJiAoaXNPYmplY3QodGhpbmcpIHx8IGlzRnVuY3Rpb24kMSh0aGluZykpICYmIGlzRnVuY3Rpb24kMSh0aGluZy50aGVuKSAmJiBpc0Z1bmN0aW9uJDEodGhpbmcuY2F0Y2gpO1xuXG4vLyBvcmlnaW5hbCBjb2RlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vRGlnaXRhbEJyYWluSlMvQXhpb3NQcm9taXNlL2Jsb2IvMTZkZWFiMTM3MTBlYzA5Nzc5OTIyMTMxZjNmYTU5NTQzMjBmODNhYi9saWIvdXRpbHMuanMjTDExLUwzNFxuXG4vKipcbiAqIFByb3ZpZGVzIGEgY3Jvc3MtcGxhdGZvcm0gc2V0SW1tZWRpYXRlIGltcGxlbWVudGF0aW9uLlxuICogVXNlcyBuYXRpdmUgc2V0SW1tZWRpYXRlIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIGZhbGxzIGJhY2sgdG8gcG9zdE1lc3NhZ2Ugb3Igc2V0VGltZW91dC5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNldEltbWVkaWF0ZVN1cHBvcnRlZCAtIFdoZXRoZXIgc2V0SW1tZWRpYXRlIGlzIHN1cHBvcnRlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcG9zdE1lc3NhZ2VTdXBwb3J0ZWQgLSBXaGV0aGVyIHBvc3RNZXNzYWdlIGlzIHN1cHBvcnRlZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byBzY2hlZHVsZSBhIGNhbGxiYWNrIGFzeW5jaHJvbm91c2x5LlxuICovXG5jb25zdCBfc2V0SW1tZWRpYXRlID0gKChzZXRJbW1lZGlhdGVTdXBwb3J0ZWQsIHBvc3RNZXNzYWdlU3VwcG9ydGVkKSA9PiB7XG4gIGlmIChzZXRJbW1lZGlhdGVTdXBwb3J0ZWQpIHtcbiAgICByZXR1cm4gc2V0SW1tZWRpYXRlO1xuICB9XG4gIHJldHVybiBwb3N0TWVzc2FnZVN1cHBvcnRlZCA/ICgodG9rZW4sIGNhbGxiYWNrcykgPT4ge1xuICAgIF9nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICh7XG4gICAgICBzb3VyY2UsXG4gICAgICBkYXRhXG4gICAgfSkgPT4ge1xuICAgICAgaWYgKHNvdXJjZSA9PT0gX2dsb2JhbCAmJiBkYXRhID09PSB0b2tlbikge1xuICAgICAgICBjYWxsYmFja3MubGVuZ3RoICYmIGNhbGxiYWNrcy5zaGlmdCgpKCk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICAgIHJldHVybiBjYiA9PiB7XG4gICAgICBjYWxsYmFja3MucHVzaChjYik7XG4gICAgICBfZ2xvYmFsLnBvc3RNZXNzYWdlKHRva2VuLCAnKicpO1xuICAgIH07XG4gIH0pKGBheGlvc0Ake01hdGgucmFuZG9tKCl9YCwgW10pIDogY2IgPT4gc2V0VGltZW91dChjYik7XG59KSh0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nLCBpc0Z1bmN0aW9uJDEoX2dsb2JhbC5wb3N0TWVzc2FnZSkpO1xuXG4vKipcbiAqIFNjaGVkdWxlcyBhIG1pY3JvdGFzayBvciBhc3luY2hyb25vdXMgY2FsbGJhY2sgYXMgc29vbiBhcyBwb3NzaWJsZS5cbiAqIFVzZXMgcXVldWVNaWNyb3Rhc2sgaWYgYXZhaWxhYmxlLCBvdGhlcndpc2UgZmFsbHMgYmFjayB0byBwcm9jZXNzLm5leHRUaWNrIG9yIF9zZXRJbW1lZGlhdGUuXG4gKlxuICogQHR5cGUge0Z1bmN0aW9ufVxuICovXG5jb25zdCBhc2FwID0gdHlwZW9mIHF1ZXVlTWljcm90YXNrICE9PSAndW5kZWZpbmVkJyA/IHF1ZXVlTWljcm90YXNrLmJpbmQoX2dsb2JhbCkgOiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5uZXh0VGljayB8fCBfc2V0SW1tZWRpYXRlO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKipcblxuY29uc3QgaXNJdGVyYWJsZSA9IHRoaW5nID0+IHRoaW5nICE9IG51bGwgJiYgaXNGdW5jdGlvbiQxKHRoaW5nW2l0ZXJhdG9yXSk7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgaXRlcmFibGUgdmlhIGFuIGl0ZXJhdG9yIHRoYXQgaXMgTk9UIHNvdXJjZWQgc29sZWx5XG4gKiBmcm9tIGEgcG9sbHV0ZWQgT2JqZWN0LnByb3RvdHlwZS4gVXNlIHRoaXMgaW5zdGVhZCBvZiBgaXNJdGVyYWJsZWAgd2hlbmV2ZXJcbiAqIHRoZSBpdGVyYWJsZSBjb21lcyBmcm9tIHVudHJ1c3RlZCBpbnB1dCAoZS5nLiB1c2VyLXN1cHBsaWVkIGhlYWRlciBzb3VyY2VzKSxcbiAqIHNvIGBPYmplY3QucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSAuLi5gIGNhbm5vdCB0dXJuIGFuIG9yZGluYXJ5IG9iamVjdFxuICogaW50byBhbiBhdHRhY2tlci1jb250cm9sbGVkIGVudHJpZXMgaXRlcmF0b3IuXG4gKlxuICogQHBhcmFtIHsqfSB0aGluZyBUaGUgdmFsdWUgdG8gdGVzdFxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGhhcyBhIG5vbi1wb2xsdXRlZCBpdGVyYXRvclxuICovXG5jb25zdCBpc1NhZmVJdGVyYWJsZSA9IHRoaW5nID0+IHRoaW5nICE9IG51bGwgJiYgaGFzT3duSW5Qcm90b3R5cGVDaGFpbih0aGluZywgaXRlcmF0b3IpICYmIGlzSXRlcmFibGUodGhpbmcpO1xudmFyIHV0aWxzJDEgPSB7XG4gIGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmcsXG4gIGlzTnVtYmVyLFxuICBpc0Jvb2xlYW4sXG4gIGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0LFxuICBpc0VtcHR5T2JqZWN0LFxuICBpc1JlYWRhYmxlU3RyZWFtLFxuICBpc1JlcXVlc3QsXG4gIGlzUmVzcG9uc2UsXG4gIGlzSGVhZGVycyxcbiAgaXNVbmRlZmluZWQsXG4gIGlzRGF0ZSxcbiAgaXNGaWxlLFxuICBpc1JlYWN0TmF0aXZlQmxvYixcbiAgaXNSZWFjdE5hdGl2ZSxcbiAgaXNCbG9iLFxuICBpc1JlZ0V4cCxcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbiQxLFxuICBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzVHlwZWRBcnJheSxcbiAgaXNGaWxlTGlzdCxcbiAgZm9yRWFjaCxcbiAgbWVyZ2UsXG4gIGV4dGVuZCxcbiAgdHJpbSxcbiAgc3RyaXBCT00sXG4gIGluaGVyaXRzLFxuICB0b0ZsYXRPYmplY3QsXG4gIGtpbmRPZixcbiAga2luZE9mVGVzdCxcbiAgZW5kc1dpdGgsXG4gIHRvQXJyYXksXG4gIGZvckVhY2hFbnRyeSxcbiAgbWF0Y2hBbGwsXG4gIGlzSFRNTEZvcm0sXG4gIGhhc093blByb3BlcnR5LFxuICBoYXNPd25Qcm9wOiBoYXNPd25Qcm9wZXJ0eSxcbiAgLy8gYW4gYWxpYXMgdG8gYXZvaWQgRVNMaW50IG5vLXByb3RvdHlwZS1idWlsdGlucyBkZXRlY3Rpb25cbiAgaGFzT3duSW5Qcm90b3R5cGVDaGFpbixcbiAgZ2V0U2FmZVByb3AsXG4gIHRvU2FmZUZsYXRPYmplY3QsXG4gIHJlZHVjZURlc2NyaXB0b3JzLFxuICBmcmVlemVNZXRob2RzLFxuICB0b09iamVjdFNldCxcbiAgdG9DYW1lbENhc2UsXG4gIG5vb3AsXG4gIHRvRmluaXRlTnVtYmVyLFxuICBmaW5kS2V5LFxuICBnbG9iYWw6IF9nbG9iYWwsXG4gIGlzQ29udGV4dERlZmluZWQsXG4gIGlzU3BlY0NvbXBsaWFudEZvcm0sXG4gIHRvSlNPTk9iamVjdCxcbiAgaXNBc3luY0ZuLFxuICBpc1RoZW5hYmxlLFxuICBzZXRJbW1lZGlhdGU6IF9zZXRJbW1lZGlhdGUsXG4gIGFzYXAsXG4gIGlzSXRlcmFibGUsXG4gIGlzU2FmZUl0ZXJhYmxlXG59O1xuXG4vLyBSYXdBeGlvc0hlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG5jb25zdCBpZ25vcmVEdXBsaWNhdGVPZiA9IHV0aWxzJDEudG9PYmplY3RTZXQoWydhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJywgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLCAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J10pO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmF3SGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKlxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xudmFyIHBhcnNlSGVhZGVycyA9IHJhd0hlYWRlcnMgPT4ge1xuICBjb25zdCBwYXJzZWQgPSB7fTtcbiAgbGV0IGtleTtcbiAgbGV0IHZhbDtcbiAgbGV0IGk7XG4gIHJhd0hlYWRlcnMgJiYgcmF3SGVhZGVycy5zcGxpdCgnXFxuJykuZm9yRWFjaChmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSBsaW5lLnN1YnN0cmluZygwLCBpKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSBsaW5lLnN1YnN0cmluZyhpICsgMSkudHJpbSgpO1xuICAgIGNvbnN0IGhhc0tleSA9IHV0aWxzJDEuaGFzT3duUHJvcChwYXJzZWQsIGtleSk7XG4gICAgaWYgKCFrZXkgfHwgaGFzS2V5ICYmIHV0aWxzJDEuaGFzT3duUHJvcChpZ25vcmVEdXBsaWNhdGVPZiwga2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgIGlmIChoYXNLZXkpIHtcbiAgICAgICAgcGFyc2VkW2tleV0ucHVzaCh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBbdmFsXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkW2tleV0gPSBoYXNLZXkgPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbmZ1bmN0aW9uIHRyaW1TUG9ySFRBQihzdHIpIHtcbiAgbGV0IHN0YXJ0ID0gMDtcbiAgbGV0IGVuZCA9IHN0ci5sZW5ndGg7XG4gIHdoaWxlIChzdGFydCA8IGVuZCkge1xuICAgIGNvbnN0IGNvZGUgPSBzdHIuY2hhckNvZGVBdChzdGFydCk7XG4gICAgaWYgKGNvZGUgIT09IDB4MDkgJiYgY29kZSAhPT0gMHgyMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN0YXJ0ICs9IDE7XG4gIH1cbiAgd2hpbGUgKGVuZCA+IHN0YXJ0KSB7XG4gICAgY29uc3QgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGVuZCAtIDEpO1xuICAgIGlmIChjb2RlICE9PSAweDA5ICYmIGNvZGUgIT09IDB4MjApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBlbmQgLT0gMTtcbiAgfVxuICByZXR1cm4gc3RhcnQgPT09IDAgJiYgZW5kID09PSBzdHIubGVuZ3RoID8gc3RyIDogc3RyLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBUaGUgY29udHJvbC1jb2RlIHJhbmdlcyBhcmUgaW50ZW50aW9uYWw6IGhlYWRlciBzYW5pdGl6YXRpb24gc3RyaXBzIEMwL0RFTCBieXRlcy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG5jb25zdCBJTlZBTElEX1VOSUNPREVfSEVBREVSX1ZBTFVFX0NIQVJTID0gbmV3IFJlZ0V4cCgnW1xcXFx1MDAwMC1cXFxcdTAwMDhcXFxcdTAwMGEtXFxcXHUwMDFmXFxcXHUwMDdmXSsnLCAnZycpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbmNvbnN0IElOVkFMSURfQllURV9TVFJJTkdfSEVBREVSX1ZBTFVFX0NIQVJTID0gbmV3IFJlZ0V4cCgnW15cXFxcdTAwMDlcXFxcdTAwMjAtXFxcXHUwMDdlXFxcXHUwMDgwLVxcXFx1MDBmZl0rJywgJ2cnKTtcbmZ1bmN0aW9uIHNhbml0aXplVmFsdWUodmFsdWUsIGludmFsaWRDaGFycykge1xuICBpZiAodXRpbHMkMS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZS5tYXAoaXRlbSA9PiBzYW5pdGl6ZVZhbHVlKGl0ZW0sIGludmFsaWRDaGFycykpO1xuICB9XG4gIHJldHVybiB0cmltU1BvckhUQUIoU3RyaW5nKHZhbHVlKS5yZXBsYWNlKGludmFsaWRDaGFycywgJycpKTtcbn1cbmNvbnN0IHNhbml0aXplSGVhZGVyVmFsdWUgPSB2YWx1ZSA9PiBzYW5pdGl6ZVZhbHVlKHZhbHVlLCBJTlZBTElEX1VOSUNPREVfSEVBREVSX1ZBTFVFX0NIQVJTKTtcbmNvbnN0IHNhbml0aXplQnl0ZVN0cmluZ0hlYWRlclZhbHVlID0gdmFsdWUgPT4gc2FuaXRpemVWYWx1ZSh2YWx1ZSwgSU5WQUxJRF9CWVRFX1NUUklOR19IRUFERVJfVkFMVUVfQ0hBUlMpO1xuZnVuY3Rpb24gdG9CeXRlU3RyaW5nSGVhZGVyT2JqZWN0KGhlYWRlcnMpIHtcbiAgY29uc3QgYnl0ZVN0cmluZ0hlYWRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB1dGlscyQxLmZvckVhY2goaGVhZGVycy50b0pTT04oKSwgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICBieXRlU3RyaW5nSGVhZGVyc1toZWFkZXJdID0gc2FuaXRpemVCeXRlU3RyaW5nSGVhZGVyVmFsdWUodmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIGJ5dGVTdHJpbmdIZWFkZXJzO1xufVxuXG5jb25zdCAkaW50ZXJuYWxzJDEgPSBTeW1ib2woJ2ludGVybmFscycpO1xuZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyKGhlYWRlcikge1xuICByZXR1cm4gaGVhZGVyICYmIFN0cmluZyhoZWFkZXIpLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiB1dGlscyQxLmlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKG5vcm1hbGl6ZVZhbHVlKSA6IHNhbml0aXplSGVhZGVyVmFsdWUoU3RyaW5nKHZhbHVlKSk7XG59XG5mdW5jdGlvbiBwYXJzZVRva2VucyhzdHIpIHtcbiAgY29uc3QgdG9rZW5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgY29uc3QgdG9rZW5zUkUgPSAvKFteXFxzLDs9XSspXFxzKig/Oj1cXHMqKFteLDtdKykpPy9nO1xuICBsZXQgbWF0Y2g7XG4gIHdoaWxlIChtYXRjaCA9IHRva2Vuc1JFLmV4ZWMoc3RyKSkge1xuICAgIHRva2Vuc1ttYXRjaFsxXV0gPSBtYXRjaFsyXTtcbiAgfVxuICByZXR1cm4gdG9rZW5zO1xufVxuY29uc3QgcGFyYW1ldGVyTmFtZVJFID0gL15bISMkJSYnKitcXC0uXl9gfH4wLTlBLVphLXpdKyQvO1xuZnVuY3Rpb24gdHJpbU9XUyh2YWx1ZSkge1xuICBsZXQgc3RhcnQgPSAwO1xuICBsZXQgZW5kID0gdmFsdWUubGVuZ3RoO1xuICB3aGlsZSAoc3RhcnQgPCBlbmQpIHtcbiAgICBjb25zdCBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChzdGFydCk7XG4gICAgaWYgKGNvZGUgIT09IDB4MDkgJiYgY29kZSAhPT0gMHgyMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN0YXJ0ICs9IDE7XG4gIH1cbiAgd2hpbGUgKGVuZCA+IHN0YXJ0KSB7XG4gICAgY29uc3QgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kIC0gMSk7XG4gICAgaWYgKGNvZGUgIT09IDB4MDkgJiYgY29kZSAhPT0gMHgyMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGVuZCAtPSAxO1xuICB9XG4gIHJldHVybiBzdGFydCA9PT0gMCAmJiBlbmQgPT09IHZhbHVlLmxlbmd0aCA/IHZhbHVlIDogdmFsdWUuc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5mdW5jdGlvbiBkZWNvZGVRdW90ZWRTdHJpbmcodmFsdWUpIHtcbiAgY29uc3QgbGFzdCA9IHZhbHVlLmxlbmd0aCAtIDE7XG4gIGlmIChsYXN0IDwgMSB8fCB2YWx1ZS5jaGFyQ29kZUF0KDApICE9PSAweDIyIHx8IHZhbHVlLmNoYXJDb2RlQXQobGFzdCkgIT09IDB4MjIpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgbGV0IGRlY29kZWQgPSAnJztcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBsYXN0OyBpKyspIHtcbiAgICBjb25zdCBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gMHgyMikge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gMHg1Yykge1xuICAgICAgaSArPSAxO1xuICAgICAgaWYgKGkgPj0gbGFzdCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIGRlY29kZWQgKz0gdmFsdWVbaV07XG4gIH1cbiAgcmV0dXJuIGRlY29kZWQ7XG59XG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcnModmFsdWUpIHtcbiAgY29uc3QgcGFyYW1ldGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSk7XG4gIGxldCBzdGFydCA9IDA7XG4gIGxldCBxdW90ZWQgPSBmYWxzZTtcbiAgbGV0IGVzY2FwZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIoZW5kKSB7XG4gICAgY29uc3QgcGFydCA9IHRyaW1PV1Moc3RyLnNsaWNlKHN0YXJ0LCBlbmQpKTtcbiAgICBjb25zdCBlcXVhbHMgPSBwYXJ0LmluZGV4T2YoJz0nKTtcbiAgICBpZiAoZXF1YWxzIDwgMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBuYW1lID0gdHJpbU9XUyhwYXJ0LnNsaWNlKDAsIGVxdWFscykpO1xuICAgIGlmICghcGFyYW1ldGVyTmFtZVJFLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgbm9ybWFsaXplZE5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG5vcm1hbGl6ZWROYW1lID09PSAnX19wcm90b19fJyB8fCBub3JtYWxpemVkTmFtZSA9PT0gJ2NvbnN0cnVjdG9yJyB8fCBub3JtYWxpemVkTmFtZSA9PT0gJ3Byb3RvdHlwZScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFyYW1ldGVyVmFsdWUgPSB0cmltT1dTKHBhcnQuc2xpY2UoZXF1YWxzICsgMSkpO1xuICAgIHBhcmFtZXRlcnNbbm9ybWFsaXplZE5hbWVdID0gZGVjb2RlUXVvdGVkU3RyaW5nKHBhcmFtZXRlclZhbHVlKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICBpZiAocXVvdGVkKSB7XG4gICAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgICBlc2NhcGVkID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4NWMpIHtcbiAgICAgICAgZXNjYXBlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGNvZGUgPT09IDB4MjIpIHtcbiAgICAgICAgcXVvdGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAweDIyKSB7XG4gICAgICBxdW90ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gMHgyYyB8fCBjb2RlID09PSAweDNiKSB7XG4gICAgICBwYXJzZVBhcmFtZXRlcihpKTtcbiAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgfVxuICB9XG4gIHBhcnNlUGFyYW1ldGVyKHN0ci5sZW5ndGgpO1xuICByZXR1cm4gcGFyYW1ldGVycztcbn1cbmNvbnN0IGlzVmFsaWRIZWFkZXJOYW1lID0gc3RyID0+IC9eWy1fYS16QS1aMC05XmB8fiwhIyQlJicqKy5dKyQvLnRlc3Qoc3RyLnRyaW0oKSk7XG5mdW5jdGlvbiBtYXRjaEhlYWRlclZhbHVlKGNvbnRleHQsIHZhbHVlLCBoZWFkZXIsIGZpbHRlciwgaXNIZWFkZXJOYW1lRmlsdGVyKSB7XG4gIGlmICh1dGlscyQxLmlzRnVuY3Rpb24oZmlsdGVyKSkge1xuICAgIHJldHVybiBmaWx0ZXIuY2FsbCh0aGlzLCB2YWx1ZSwgaGVhZGVyKTtcbiAgfVxuICBpZiAoaXNIZWFkZXJOYW1lRmlsdGVyKSB7XG4gICAgdmFsdWUgPSBoZWFkZXI7XG4gIH1cbiAgaWYgKCF1dGlscyQxLmlzU3RyaW5nKHZhbHVlKSkgcmV0dXJuO1xuICBpZiAodXRpbHMkMS5pc1N0cmluZyhmaWx0ZXIpKSB7XG4gICAgcmV0dXJuIHZhbHVlLmluZGV4T2YoZmlsdGVyKSAhPT0gLTE7XG4gIH1cbiAgaWYgKHV0aWxzJDEuaXNSZWdFeHAoZmlsdGVyKSkge1xuICAgIHJldHVybiBmaWx0ZXIudGVzdCh2YWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZvcm1hdEhlYWRlcihoZWFkZXIpIHtcbiAgcmV0dXJuIGhlYWRlci50cmltKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oW2EtelxcZF0pKFxcdyopL2csICh3LCBjaGFyLCBzdHIpID0+IHtcbiAgICByZXR1cm4gY2hhci50b1VwcGVyQ2FzZSgpICsgc3RyO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGJ1aWxkQWNjZXNzb3JzKG9iaiwgaGVhZGVyKSB7XG4gIGNvbnN0IGFjY2Vzc29yTmFtZSA9IHV0aWxzJDEudG9DYW1lbENhc2UoJyAnICsgaGVhZGVyKTtcbiAgWydnZXQnLCAnc2V0JywgJ2hhcyddLmZvckVhY2gobWV0aG9kTmFtZSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbWV0aG9kTmFtZSArIGFjY2Vzc29yTmFtZSwge1xuICAgICAgLy8gTnVsbC1wcm90byBkZXNjcmlwdG9yIHNvIGEgcG9sbHV0ZWQgT2JqZWN0LnByb3RvdHlwZS5nZXQgY2Fubm90IHR1cm5cbiAgICAgIC8vIHRoaXMgZGF0YSBkZXNjcmlwdG9yIGludG8gYW4gYWNjZXNzb3IgZGVzY3JpcHRvciBvbiB0aGUgd2F5IGluLlxuICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIChhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgICAgIHJldHVybiB0aGlzW21ldGhvZE5hbWVdLmNhbGwodGhpcywgaGVhZGVyLCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfSk7XG59XG5jbGFzcyBBeGlvc0hlYWRlcnMge1xuICBjb25zdHJ1Y3RvcihoZWFkZXJzKSB7XG4gICAgaGVhZGVycyAmJiB0aGlzLnNldChoZWFkZXJzKTtcbiAgfVxuICBzZXQoaGVhZGVyLCB2YWx1ZU9yUmV3cml0ZSwgcmV3cml0ZSkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIHNldEhlYWRlcihfdmFsdWUsIF9oZWFkZXIsIF9yZXdyaXRlKSB7XG4gICAgICBjb25zdCBsSGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKF9oZWFkZXIpO1xuICAgICAgaWYgKCFsSGVhZGVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzJDEuZmluZEtleShzZWxmLCBsSGVhZGVyKTtcbiAgICAgIGlmICgha2V5IHx8IHNlbGZba2V5XSA9PT0gdW5kZWZpbmVkIHx8IF9yZXdyaXRlID09PSB0cnVlIHx8IF9yZXdyaXRlID09PSB1bmRlZmluZWQgJiYgc2VsZltrZXldICE9PSBmYWxzZSkge1xuICAgICAgICBzZWxmW2tleSB8fCBfaGVhZGVyXSA9IG5vcm1hbGl6ZVZhbHVlKF92YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNldEhlYWRlcnMgPSAoaGVhZGVycywgX3Jld3JpdGUpID0+IHV0aWxzJDEuZm9yRWFjaChoZWFkZXJzLCAoX3ZhbHVlLCBfaGVhZGVyKSA9PiBzZXRIZWFkZXIoX3ZhbHVlLCBfaGVhZGVyLCBfcmV3cml0ZSkpO1xuICAgIGlmICh1dGlscyQxLmlzUGxhaW5PYmplY3QoaGVhZGVyKSB8fCBoZWFkZXIgaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yKSB7XG4gICAgICBzZXRIZWFkZXJzKGhlYWRlciwgdmFsdWVPclJld3JpdGUpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMkMS5pc1N0cmluZyhoZWFkZXIpICYmIChoZWFkZXIgPSBoZWFkZXIudHJpbSgpKSAmJiAhaXNWYWxpZEhlYWRlck5hbWUoaGVhZGVyKSkge1xuICAgICAgc2V0SGVhZGVycyhwYXJzZUhlYWRlcnMoaGVhZGVyKSwgdmFsdWVPclJld3JpdGUpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMkMS5pc09iamVjdChoZWFkZXIpICYmIHV0aWxzJDEuaXNTYWZlSXRlcmFibGUoaGVhZGVyKSkge1xuICAgICAgbGV0IG9iaiA9IE9iamVjdC5jcmVhdGUobnVsbCksXG4gICAgICAgIGRlc3QsXG4gICAgICAgIGtleTtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgaGVhZGVyKSB7XG4gICAgICAgIGlmICghdXRpbHMkMS5pc0FycmF5KGVudHJ5KSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdCBpdGVyYXRvciBtdXN0IHJldHVybiBhIGtleS12YWx1ZSBwYWlyJyk7XG4gICAgICAgIH1cbiAgICAgICAga2V5ID0gZW50cnlbMF07XG4gICAgICAgIGlmICh1dGlscyQxLmhhc093blByb3Aob2JqLCBrZXkpKSB7XG4gICAgICAgICAgZGVzdCA9IG9ialtrZXldO1xuICAgICAgICAgIG9ialtrZXldID0gdXRpbHMkMS5pc0FycmF5KGRlc3QpID8gWy4uLmRlc3QsIGVudHJ5WzFdXSA6IFtkZXN0LCBlbnRyeVsxXV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqW2tleV0gPSBlbnRyeVsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2V0SGVhZGVycyhvYmosIHZhbHVlT3JSZXdyaXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyICE9IG51bGwgJiYgc2V0SGVhZGVyKHZhbHVlT3JSZXdyaXRlLCBoZWFkZXIsIHJld3JpdGUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBnZXQoaGVhZGVyLCBwYXJzZXIpIHtcbiAgICBoZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoaGVhZGVyKTtcbiAgICBpZiAoaGVhZGVyKSB7XG4gICAgICBjb25zdCBrZXkgPSB1dGlscyQxLmZpbmRLZXkodGhpcywgaGVhZGVyKTtcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzW2tleV07XG4gICAgICAgIGlmICghcGFyc2VyKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZXIgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlbnModmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1dGlscyQxLmlzRnVuY3Rpb24ocGFyc2VyKSkge1xuICAgICAgICAgIHJldHVybiBwYXJzZXIuY2FsbCh0aGlzLCB2YWx1ZSwga2V5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXRpbHMkMS5pc1JlZ0V4cChwYXJzZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnNlci5leGVjKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwYXJzZXIgbXVzdCBiZSBib29sZWFufHJlZ2V4cHxmdW5jdGlvbicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBoYXMoaGVhZGVyLCBtYXRjaGVyKSB7XG4gICAgaGVhZGVyID0gbm9ybWFsaXplSGVhZGVyKGhlYWRlcik7XG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgY29uc3Qga2V5ID0gdXRpbHMkMS5maW5kS2V5KHRoaXMsIGhlYWRlcik7XG4gICAgICByZXR1cm4gISEoa2V5ICYmIHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkICYmICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyKSkpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZGVsZXRlKGhlYWRlciwgbWF0Y2hlcikge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gZGVsZXRlSGVhZGVyKF9oZWFkZXIpIHtcbiAgICAgIF9oZWFkZXIgPSBub3JtYWxpemVIZWFkZXIoX2hlYWRlcik7XG4gICAgICBpZiAoX2hlYWRlcikge1xuICAgICAgICBjb25zdCBrZXkgPSB1dGlscyQxLmZpbmRLZXkoc2VsZiwgX2hlYWRlcik7XG4gICAgICAgIGlmIChrZXkgJiYgKCFtYXRjaGVyIHx8IG1hdGNoSGVhZGVyVmFsdWUoc2VsZiwgc2VsZltrZXldLCBrZXksIG1hdGNoZXIpKSkge1xuICAgICAgICAgIGRlbGV0ZSBzZWxmW2tleV07XG4gICAgICAgICAgZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHV0aWxzJDEuaXNBcnJheShoZWFkZXIpKSB7XG4gICAgICBoZWFkZXIuZm9yRWFjaChkZWxldGVIZWFkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGVIZWFkZXIoaGVhZGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlbGV0ZWQ7XG4gIH1cbiAgY2xlYXIobWF0Y2hlcikge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzKTtcbiAgICBsZXQgaSA9IGtleXMubGVuZ3RoO1xuICAgIGxldCBkZWxldGVkID0gZmFsc2U7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmICghbWF0Y2hlciB8fCBtYXRjaEhlYWRlclZhbHVlKHRoaXMsIHRoaXNba2V5XSwga2V5LCBtYXRjaGVyLCB0cnVlKSkge1xuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgICAgICBkZWxldGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlbGV0ZWQ7XG4gIH1cbiAgbm9ybWFsaXplKGZvcm1hdCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgICB1dGlscyQxLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IHV0aWxzJDEuZmluZEtleShoZWFkZXJzLCBoZWFkZXIpO1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICBzZWxmW2tleV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIGRlbGV0ZSBzZWxmW2hlYWRlcl07XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBmb3JtYXQgPyBmb3JtYXRIZWFkZXIoaGVhZGVyKSA6IFN0cmluZyhoZWFkZXIpLnRyaW0oKTtcbiAgICAgIGlmIChub3JtYWxpemVkICE9PSBoZWFkZXIpIHtcbiAgICAgICAgZGVsZXRlIHNlbGZbaGVhZGVyXTtcbiAgICAgIH1cbiAgICAgIHNlbGZbbm9ybWFsaXplZF0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSk7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWRdID0gdHJ1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBjb25jYXQoLi4udGFyZ2V0cykge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmNvbmNhdCh0aGlzLCAuLi50YXJnZXRzKTtcbiAgfVxuICB0b0pTT04oYXNTdHJpbmdzKSB7XG4gICAgY29uc3Qgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB1dGlscyQxLmZvckVhY2godGhpcywgKHZhbHVlLCBoZWFkZXIpID0+IHtcbiAgICAgIHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IGZhbHNlICYmIChvYmpbaGVhZGVyXSA9IGFzU3RyaW5ncyAmJiB1dGlscyQxLmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCAnKSA6IHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLnRvSlNPTigpKVtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMudG9KU09OKCkpLm1hcCgoW2hlYWRlciwgdmFsdWVdKSA9PiBoZWFkZXIgKyAnOiAnICsgdmFsdWUpLmpvaW4oJ1xcbicpO1xuICB9XG4gIGdldFNldENvb2tpZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0KCdzZXQtY29va2llJyk7XG4gICAgcmV0dXJuIHV0aWxzJDEuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlID8gW10gOiBbdmFsdWVdO1xuICB9XG4gIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICByZXR1cm4gJ0F4aW9zSGVhZGVycyc7XG4gIH1cbiAgc3RhdGljIGZyb20odGhpbmcpIHtcbiAgICByZXR1cm4gdGhpbmcgaW5zdGFuY2VvZiB0aGlzID8gdGhpbmcgOiBuZXcgdGhpcyh0aGluZyk7XG4gIH1cbiAgc3RhdGljIHBhcnNlUGFyYW1ldGVycyh2YWx1ZSkge1xuICAgIHJldHVybiBwYXJzZVBhcmFtZXRlcnModmFsdWUpO1xuICB9XG4gIHN0YXRpYyBjb25jYXQoZmlyc3QsIC4uLnRhcmdldHMpIHtcbiAgICBjb25zdCBjb21wdXRlZCA9IG5ldyB0aGlzKGZpcnN0KTtcbiAgICB0YXJnZXRzLmZvckVhY2godGFyZ2V0ID0+IGNvbXB1dGVkLnNldCh0YXJnZXQpKTtcbiAgICByZXR1cm4gY29tcHV0ZWQ7XG4gIH1cbiAgc3RhdGljIGFjY2Vzc29yKGhlYWRlcikge1xuICAgIGNvbnN0IGludGVybmFscyA9IHRoaXNbJGludGVybmFscyQxXSA9IHRoaXNbJGludGVybmFscyQxXSA9IHtcbiAgICAgIGFjY2Vzc29yczoge31cbiAgICB9O1xuICAgIGNvbnN0IGFjY2Vzc29ycyA9IGludGVybmFscy5hY2Nlc3NvcnM7XG4gICAgY29uc3QgcHJvdG90eXBlID0gdGhpcy5wcm90b3R5cGU7XG4gICAgZnVuY3Rpb24gZGVmaW5lQWNjZXNzb3IoX2hlYWRlcikge1xuICAgICAgY29uc3QgbEhlYWRlciA9IG5vcm1hbGl6ZUhlYWRlcihfaGVhZGVyKTtcbiAgICAgIGlmICghYWNjZXNzb3JzW2xIZWFkZXJdKSB7XG4gICAgICAgIGJ1aWxkQWNjZXNzb3JzKHByb3RvdHlwZSwgX2hlYWRlcik7XG4gICAgICAgIGFjY2Vzc29yc1tsSGVhZGVyXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHV0aWxzJDEuaXNBcnJheShoZWFkZXIpID8gaGVhZGVyLmZvckVhY2goZGVmaW5lQWNjZXNzb3IpIDogZGVmaW5lQWNjZXNzb3IoaGVhZGVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuQXhpb3NIZWFkZXJzLmFjY2Vzc29yKFsnQ29udGVudC1UeXBlJywgJ0NvbnRlbnQtTGVuZ3RoJywgJ0FjY2VwdCcsICdBY2NlcHQtRW5jb2RpbmcnLCAnVXNlci1BZ2VudCcsICdBdXRob3JpemF0aW9uJ10pO1xuXG4vLyByZXNlcnZlZCBuYW1lcyBob3RmaXhcbnV0aWxzJDEucmVkdWNlRGVzY3JpcHRvcnMoQXhpb3NIZWFkZXJzLnByb3RvdHlwZSwgKHtcbiAgdmFsdWVcbn0sIGtleSkgPT4ge1xuICBsZXQgbWFwcGVkID0ga2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7IC8vIG1hcCBgc2V0YCA9PiBgU2V0YFxuICByZXR1cm4ge1xuICAgIGdldDogKCkgPT4gdmFsdWUsXG4gICAgc2V0KGhlYWRlclZhbHVlKSB7XG4gICAgICB0aGlzW21hcHBlZF0gPSBoZWFkZXJWYWx1ZTtcbiAgICB9XG4gIH07XG59KTtcbnV0aWxzJDEuZnJlZXplTWV0aG9kcyhBeGlvc0hlYWRlcnMpO1xuXG5jb25zdCBSRURBQ1RFRCA9ICdbUkVEQUNURUQgKioqKl0nO1xuZnVuY3Rpb24gaGFzT3duT3JQcm90b3R5cGVUb0pTT04oc291cmNlKSB7XG4gIGlmICh1dGlscyQxLmhhc093blByb3Aoc291cmNlLCAndG9KU09OJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsZXQgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZSk7XG4gIHdoaWxlIChwcm90b3R5cGUgJiYgcHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSB7XG4gICAgaWYgKHV0aWxzJDEuaGFzT3duUHJvcChwcm90b3R5cGUsICd0b0pTT04nKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90b3R5cGUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gQnVpbGQgYSBwbGFpbi1vYmplY3Qgc25hcHNob3Qgb2YgYGNvbmZpZ2AgYW5kIHJlcGxhY2UgdGhlIHZhbHVlIG9mIGFueSBrZXlcbi8vIChjYXNlLWluc2Vuc2l0aXZlKSBsaXN0ZWQgaW4gYHJlZGFjdEtleXNgIHdpdGggUkVEQUNURUQuIFdhbGtzIHRocm91Z2ggYXJyYXlzXG4vLyBhbmQgQXhpb3NIZWFkZXJzLCBhbmQgc2hvcnQtY2lyY3VpdHMgb24gY2lyY3VsYXIgcmVmZXJlbmNlcy5cbmZ1bmN0aW9uIHJlZGFjdENvbmZpZyhjb25maWcsIHJlZGFjdEtleXMpIHtcbiAgY29uc3QgbG93ZXJLZXlzID0gbmV3IFNldChyZWRhY3RLZXlzLm1hcChrID0+IFN0cmluZyhrKS50b0xvd2VyQ2FzZSgpKSk7XG4gIGNvbnN0IHNlZW4gPSBbXTtcbiAgY29uc3QgdmlzaXQgPSBzb3VyY2UgPT4ge1xuICAgIGlmIChzb3VyY2UgPT09IG51bGwgfHwgdHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHJldHVybiBzb3VyY2U7XG4gICAgaWYgKHV0aWxzJDEuaXNCdWZmZXIoc291cmNlKSkgcmV0dXJuIHNvdXJjZTtcbiAgICBpZiAoc2Vlbi5pbmRleE9mKHNvdXJjZSkgIT09IC0xKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBeGlvc0hlYWRlcnMpIHtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZS50b0pTT04oKTtcbiAgICB9XG4gICAgc2Vlbi5wdXNoKHNvdXJjZSk7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodXRpbHMkMS5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJlc3VsdCA9IFtdO1xuICAgICAgc291cmNlLmZvckVhY2goKHYsIGkpID0+IHtcbiAgICAgICAgY29uc3QgcmVkdWNlZFZhbHVlID0gdmlzaXQodik7XG4gICAgICAgIGlmICghdXRpbHMkMS5pc1VuZGVmaW5lZChyZWR1Y2VkVmFsdWUpKSB7XG4gICAgICAgICAgcmVzdWx0W2ldID0gcmVkdWNlZFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF1dGlscyQxLmlzUGxhaW5PYmplY3Qoc291cmNlKSAmJiBoYXNPd25PclByb3RvdHlwZVRvSlNPTihzb3VyY2UpKSB7XG4gICAgICAgIHNlZW4ucG9wKCk7XG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc291cmNlKSkge1xuICAgICAgICBjb25zdCByZWR1Y2VkVmFsdWUgPSBsb3dlcktleXMuaGFzKGtleS50b0xvd2VyQ2FzZSgpKSA/IFJFREFDVEVEIDogdmlzaXQodmFsdWUpO1xuICAgICAgICBpZiAoIXV0aWxzJDEuaXNVbmRlZmluZWQocmVkdWNlZFZhbHVlKSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gcmVkdWNlZFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHNlZW4ucG9wKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuIHZpc2l0KGNvbmZpZyk7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnlTYWZlbHkkMSh2YWx1ZSkge1xuICB0cnkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbmZ1bmN0aW9uIGFnZ3JlZ2F0ZUVycm9yTWVzc2FnZShlcnJvcikge1xuICBjb25zdCBtZXNzYWdlID0gZXJyb3IuZXJyb3JzLm1hcChlbnRyeSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS5tZXNzYWdlID8gc3RyaW5naWZ5U2FmZWx5JDEoZW50cnkubWVzc2FnZSkgOiBzdHJpbmdpZnlTYWZlbHkkMShlbnRyeSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9KS5maWx0ZXIoQm9vbGVhbikuam9pbignOyAnKTtcbiAgcmV0dXJuIG1lc3NhZ2UgfHwgZXJyb3IubmFtZSB8fCAnQWdncmVnYXRlRXJyb3InO1xufVxuY2xhc3MgQXhpb3NFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhdGljIGZyb20oZXJyb3IsIGNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UsIGN1c3RvbVByb3BzKSB7XG4gICAgLy8gYEFnZ3JlZ2F0ZUVycm9yYCAodGhyb3duIGJ5IE5vZGUgb24gZHVhbC1zdGFjay9IYXBweS1FeWViYWxscyBjb25uZWN0aW9uXG4gICAgLy8gZmFpbHVyZXMpIGhhcyBhbiBlbXB0eSBgbWVzc2FnZWA7IGl0cyBkZXRhaWwgbGl2ZXMgaW4gYGVycm9yc1tdYC4gV2l0aG91dFxuICAgIC8vIHRoaXMsIHRoZSB3cmFwcGVkIGVycm9yIHN1cmZhY2VzIHdpdGggYSBibGFuayBtZXNzYWdlIChzZWUgIzY3MjEpLlxuICAgIGxldCBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICBpZiAoIW1lc3NhZ2UgJiYgdXRpbHMkMS5pc0FycmF5KGVycm9yLmVycm9ycykgJiYgZXJyb3IuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgbWVzc2FnZSA9IGFnZ3JlZ2F0ZUVycm9yTWVzc2FnZShlcnJvcik7XG4gICAgfVxuICAgIGNvbnN0IGF4aW9zRXJyb3IgPSBuZXcgQXhpb3NFcnJvcihtZXNzYWdlLCBjb2RlIHx8IGVycm9yLmNvZGUsIGNvbmZpZywgcmVxdWVzdCwgcmVzcG9uc2UpO1xuICAgIC8vIE1hdGNoIG5hdGl2ZSBgRXJyb3JgIGBjYXVzZWAgc2VtYW50aWNzOiBub24tZW51bWVyYWJsZS4gVGhlIHdyYXBwZWRcbiAgICAvLyBlcnJvciBvZnRlbiBjYXJyaWVzIGNpcmN1bGFyIGludGVybmFscyAoc29ja2V0cywgcmVxdWVzdHMsIGFnZW50cyksIHNvXG4gICAgLy8gYW4gZW51bWVyYWJsZSBgY2F1c2VgIG1ha2VzIHN0cnVjdHVyZWQgbG9nZ2VycyAocGluby93aW5zdG9uKSBhbmQgYW55XG4gICAgLy8gb3duLXByb3BlcnR5IHdhbGsgdGhyb3cgXCJDb252ZXJ0aW5nIGNpcmN1bGFyIHN0cnVjdHVyZSB0byBKU09OXCIuXG4gICAgLy8gUmVncmVzc2lvbiBmcm9tICM2OTgyOyBzZWUgIzcyMDUuIGBfX3Byb3RvX186IG51bGxgIG1pcnJvcnMgdGhlXG4gICAgLy8gYG1lc3NhZ2VgIGRlc2NyaXB0b3IgYmVsb3cgKHByb3RvdHlwZS1wb2xsdXRpb24tc2FmZSBkZXNjcmlwdG9yKS5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYXhpb3NFcnJvciwgJ2NhdXNlJywge1xuICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgdmFsdWU6IGVycm9yLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIGF4aW9zRXJyb3IubmFtZSA9IGVycm9yLm5hbWU7XG5cbiAgICAvLyBQcmVzZXJ2ZSBzdGF0dXMgZnJvbSB0aGUgb3JpZ2luYWwgZXJyb3IgaWYgbm90IGFscmVhZHkgc2V0IGZyb20gcmVzcG9uc2VcbiAgICBpZiAoZXJyb3Iuc3RhdHVzICE9IG51bGwgJiYgYXhpb3NFcnJvci5zdGF0dXMgPT0gbnVsbCkge1xuICAgICAgYXhpb3NFcnJvci5zdGF0dXMgPSBlcnJvci5zdGF0dXM7XG4gICAgfVxuICAgIGN1c3RvbVByb3BzICYmIE9iamVjdC5hc3NpZ24oYXhpb3NFcnJvciwgY3VzdG9tUHJvcHMpO1xuICAgIHJldHVybiBheGlvc0Vycm9yO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXSBUaGUgY29uZmlnLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBjb2RlLCBjb25maWcsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG5cbiAgICAvLyBNYWtlIG1lc3NhZ2UgZW51bWVyYWJsZSB0byBtYWludGFpbiBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgLy8gVGhlIG5hdGl2ZSBFcnJvciBjb25zdHJ1Y3RvciBzZXRzIG1lc3NhZ2UgYXMgbm9uLWVudW1lcmFibGUsXG4gICAgLy8gYnV0IGF4aW9zIDwgdjEuMTMuMyBoYWQgaXQgYXMgZW51bWVyYWJsZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbWVzc2FnZScsIHtcbiAgICAgIC8vIE51bGwtcHJvdG8gZGVzY3JpcHRvciBzbyBhIHBvbGx1dGVkIE9iamVjdC5wcm90b3R5cGUuZ2V0IGNhbm5vdCB0dXJuXG4gICAgICAvLyB0aGlzIGRhdGEgZGVzY3JpcHRvciBpbnRvIGFuIGFjY2Vzc29yIGRlc2NyaXB0b3Igb24gdGhlIHdheSBpbi5cbiAgICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICAgIHZhbHVlOiBtZXNzYWdlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5uYW1lID0gJ0F4aW9zRXJyb3InO1xuICAgIHRoaXMuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcbiAgICBjb2RlICYmICh0aGlzLmNvZGUgPSBjb2RlKTtcbiAgICBjb25maWcgJiYgKHRoaXMuY29uZmlnID0gY29uZmlnKTtcbiAgICByZXF1ZXN0ICYmICh0aGlzLnJlcXVlc3QgPSByZXF1ZXN0KTtcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgIHRoaXMuc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgIH1cbiAgfVxuICB0b0pTT04oKSB7XG4gICAgLy8gT3B0LWluIHJlZGFjdGlvbjogd2hlbiB0aGUgcmVxdWVzdCBjb25maWcgY2FycmllcyBhIGByZWRhY3RgIGFycmF5LCB0aGVcbiAgICAvLyB2YWx1ZSBvZiBhbnkgbWF0Y2hpbmcga2V5IChjYXNlLWluc2Vuc2l0aXZlLCBhdCBhbnkgZGVwdGgpIGlzIHJlcGxhY2VkXG4gICAgLy8gd2l0aCBSRURBQ1RFRCBpbiB0aGUgc2VyaWFsaXplZCBzbmFwc2hvdC4gVW5kZWZpbmVkIG9yIGVtcHR5IGxlYXZlcyB0aGVcbiAgICAvLyBleGlzdGluZyBzZXJpYWxpemF0aW9uIGJlaGF2aW9yIHVuY2hhbmdlZC5cbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICBjb25zdCByZWRhY3RLZXlzID0gY29uZmlnICYmIHV0aWxzJDEuaGFzT3duUHJvcChjb25maWcsICdyZWRhY3QnKSA/IGNvbmZpZy5yZWRhY3QgOiB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc2VyaWFsaXplZENvbmZpZyA9IHV0aWxzJDEuaXNBcnJheShyZWRhY3RLZXlzKSAmJiByZWRhY3RLZXlzLmxlbmd0aCA+IDAgPyByZWRhY3RDb25maWcoY29uZmlnLCByZWRhY3RLZXlzKSA6IHV0aWxzJDEudG9KU09OT2JqZWN0KGNvbmZpZyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogc2VyaWFsaXplZENvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXNcbiAgICB9O1xuICB9XG59XG5cbi8vIFRoaXMgY2FuIGJlIGNoYW5nZWQgdG8gc3RhdGljIHByb3BlcnRpZXMgYXMgc29vbiBhcyB0aGUgcGFyc2VyIG9wdGlvbnMgaW4gLmVzbGludC5janMgYXJlIHVwZGF0ZWQuXG5BeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFID0gJ0VSUl9CQURfT1BUSU9OX1ZBTFVFJztcbkF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT04gPSAnRVJSX0JBRF9PUFRJT04nO1xuQXhpb3NFcnJvci5FQ09OTkFCT1JURUQgPSAnRUNPTk5BQk9SVEVEJztcbkF4aW9zRXJyb3IuRVRJTUVET1VUID0gJ0VUSU1FRE9VVCc7XG5BeGlvc0Vycm9yLkVDT05OUkVGVVNFRCA9ICdFQ09OTlJFRlVTRUQnO1xuQXhpb3NFcnJvci5FUlJfTkVUV09SSyA9ICdFUlJfTkVUV09SSyc7XG5BeGlvc0Vycm9yLkVSUl9GUl9UT09fTUFOWV9SRURJUkVDVFMgPSAnRVJSX0ZSX1RPT19NQU5ZX1JFRElSRUNUUyc7XG5BeGlvc0Vycm9yLkVSUl9ERVBSRUNBVEVEID0gJ0VSUl9ERVBSRUNBVEVEJztcbkF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSA9ICdFUlJfQkFEX1JFU1BPTlNFJztcbkF4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNUID0gJ0VSUl9CQURfUkVRVUVTVCc7XG5BeGlvc0Vycm9yLkVSUl9DQU5DRUxFRCA9ICdFUlJfQ0FOQ0VMRUQnO1xuQXhpb3NFcnJvci5FUlJfTk9UX1NVUFBPUlQgPSAnRVJSX05PVF9TVVBQT1JUJztcbkF4aW9zRXJyb3IuRVJSX0lOVkFMSURfVVJMID0gJ0VSUl9JTlZBTElEX1VSTCc7XG5BeGlvc0Vycm9yLkVSUl9GT1JNX0RBVEFfREVQVEhfRVhDRUVERUQgPSAnRVJSX0ZPUk1fREFUQV9ERVBUSF9FWENFRURFRCc7XG5cbnZhciBQbGF0Zm9ybUJ1ZmZlciA9IHtcbiAgaXNCdWZmZXJBdmFpbGFibGUoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBCdWZmZXIgIT09ICd1bmRlZmluZWQnO1xuICB9LFxuICBmcm9tKHZhbHVlKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlKTtcbiAgfVxufTtcblxuLy8gRGVmYXVsdCBuZXN0aW5nIGxpbWl0IHNoYXJlZCB3aXRoIHRoZSBpbnZlcnNlIHRyYW5zZm9ybSAoZm9ybURhdGFUb0pTT04pIHNvXG4vLyB0aGUgRm9ybURhdGEgPC0+IEpTT04gcm91bmQtdHJpcCBzdGF5cyBzeW1tZXRyaWMuXG5jb25zdCBERUZBVUxUX0ZPUk1fREFUQV9NQVhfREVQVEggPSAxMDA7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgZ2l2ZW4gdGhpbmcgaXMgYSBhcnJheSBvciBqcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRoaW5nIC0gVGhlIG9iamVjdCBvciBhcnJheSB0byBiZSB2aXNpdGVkLlxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1Zpc2l0YWJsZSh0aGluZykge1xuICByZXR1cm4gdXRpbHMkMS5pc1BsYWluT2JqZWN0KHRoaW5nKSB8fCB1dGlscyQxLmlzQXJyYXkodGhpbmcpO1xufVxuXG4vKipcbiAqIEl0IHJlbW92ZXMgdGhlIGJyYWNrZXRzIGZyb20gdGhlIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IG9mIHRoZSBwYXJhbWV0ZXIuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gdGhlIGtleSB3aXRob3V0IHRoZSBicmFja2V0cy5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQnJhY2tldHMoa2V5KSB7XG4gIHJldHVybiB1dGlscyQxLmVuZHNXaXRoKGtleSwgJ1tdJykgPyBrZXkuc2xpY2UoMCwgLTIpIDoga2V5O1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcGF0aCwgYSBrZXksIGFuZCBhIGJvb2xlYW4sIGFuZCByZXR1cm5zIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSBUaGUgcGF0aCB0byB0aGUgY3VycmVudCBrZXkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIGtleSBvZiB0aGUgY3VycmVudCBvYmplY3QgYmVpbmcgaXRlcmF0ZWQgb3Zlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkb3RzIC0gSWYgdHJ1ZSwgdGhlIGtleSB3aWxsIGJlIHJlbmRlcmVkIHdpdGggZG90cyBpbnN0ZWFkIG9mIGJyYWNrZXRzLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwYXRoIHRvIHRoZSBjdXJyZW50IGtleS5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyS2V5KHBhdGgsIGtleSwgZG90cykge1xuICBpZiAoIXBhdGgpIHJldHVybiBrZXk7XG4gIHJldHVybiBwYXRoLmNvbmNhdChrZXkpLm1hcChmdW5jdGlvbiBlYWNoKHRva2VuLCBpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdG9rZW4gPSByZW1vdmVCcmFja2V0cyh0b2tlbik7XG4gICAgcmV0dXJuICFkb3RzICYmIGkgPyAnWycgKyB0b2tlbiArICddJyA6IHRva2VuO1xuICB9KS5qb2luKGRvdHMgPyAnLicgOiAnJyk7XG59XG5cbi8qKlxuICogSWYgdGhlIGFycmF5IGlzIGFuIGFycmF5IGFuZCBub25lIG9mIGl0cyBlbGVtZW50cyBhcmUgdmlzaXRhYmxlLCB0aGVuIGl0J3MgYSBmbGF0IGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRmxhdEFycmF5KGFycikge1xuICByZXR1cm4gdXRpbHMkMS5pc0FycmF5KGFycikgJiYgIWFyci5zb21lKGlzVmlzaXRhYmxlKTtcbn1cbmNvbnN0IHByZWRpY2F0ZXMgPSB1dGlscyQxLnRvRmxhdE9iamVjdCh1dGlscyQxLCB7fSwgbnVsbCwgZnVuY3Rpb24gZmlsdGVyKHByb3ApIHtcbiAgcmV0dXJuIC9eaXNbQS1aXS8udGVzdChwcm9wKTtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSBkYXRhIG9iamVjdCB0byBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7P09iamVjdH0gW2Zvcm1EYXRhXVxuICogQHBhcmFtIHs/T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtvcHRpb25zLnZpc2l0b3JdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLm1ldGFUb2tlbnMgPSB0cnVlXVxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5kb3RzID0gZmFsc2VdXG4gKiBAcGFyYW0gez9Cb29sZWFufSBbb3B0aW9ucy5pbmRleGVzID0gZmFsc2VdXG4gKlxuICogQHJldHVybnMge09iamVjdH1cbiAqKi9cblxuLyoqXG4gKiBJdCBjb252ZXJ0cyBhbiBvYmplY3QgaW50byBhIEZvcm1EYXRhIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0PGFueSwgYW55Pn0gb2JqIC0gVGhlIG9iamVjdCB0byBjb252ZXJ0IHRvIGZvcm0gZGF0YS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRGF0YSAtIFRoZSBGb3JtRGF0YSBvYmplY3QgdG8gYXBwZW5kIHRvLlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBvcHRpb25zXG4gKlxuICogQHJldHVybnNcbiAqL1xuZnVuY3Rpb24gdG9Gb3JtRGF0YShvYmosIGZvcm1EYXRhLCBvcHRpb25zKSB7XG4gIGlmICghdXRpbHMkMS5pc09iamVjdChvYmopKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgZm9ybURhdGEgPSBmb3JtRGF0YSB8fCBuZXcgKEZvcm1EYXRhJDEgfHwgRm9ybURhdGEpKCk7XG4gIGNvbnN0IG9wdGlvbiA9IChuYW1lLCBmYWxsYmFjaykgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdXRpbHMkMS5nZXRTYWZlUHJvcChvcHRpb25zLCBuYW1lKTtcbiAgICByZXR1cm4gdXRpbHMkMS5pc1VuZGVmaW5lZCh2YWx1ZSkgPyBmYWxsYmFjayA6IHZhbHVlO1xuICB9O1xuICBjb25zdCBtZXRhVG9rZW5zID0gb3B0aW9uKCdtZXRhVG9rZW5zJywgdHJ1ZSk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICBjb25zdCB2aXNpdG9yID0gb3B0aW9uKCd2aXNpdG9yJykgfHwgZGVmYXVsdFZpc2l0b3I7XG4gIGNvbnN0IGRvdHMgPSBvcHRpb24oJ2RvdHMnLCBmYWxzZSk7XG4gIGNvbnN0IGluZGV4ZXMgPSBvcHRpb24oJ2luZGV4ZXMnLCBmYWxzZSk7XG4gIGNvbnN0IF9CbG9iID0gb3B0aW9uKCdCbG9iJykgfHwgdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIEJsb2I7XG4gIGNvbnN0IG1heERlcHRoID0gb3B0aW9uKCdtYXhEZXB0aCcsIERFRkFVTFRfRk9STV9EQVRBX01BWF9ERVBUSCk7XG4gIGNvbnN0IHVzZUJsb2IgPSBfQmxvYiAmJiB1dGlscyQxLmlzU3BlY0NvbXBsaWFudEZvcm0oZm9ybURhdGEpO1xuICBjb25zdCBzdGFjayA9IFtdO1xuICBpZiAoIXV0aWxzJDEuaXNGdW5jdGlvbih2aXNpdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Zpc2l0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgZnVuY3Rpb24gY29udmVydFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gJyc7XG4gICAgaWYgKHV0aWxzJDEuaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscyQxLmlzQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAoIXVzZUJsb2IgJiYgdXRpbHMkMS5pc0Jsb2IodmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignQmxvYiBpcyBub3Qgc3VwcG9ydGVkLiBVc2UgYSBCdWZmZXIgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzJDEuaXNBcnJheUJ1ZmZlcih2YWx1ZSkgfHwgdXRpbHMkMS5pc1R5cGVkQXJyYXkodmFsdWUpKSB7XG4gICAgICBpZiAodXNlQmxvYiAmJiB0eXBlb2YgX0Jsb2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfQmxvYihbdmFsdWVdKTtcbiAgICAgIH1cbiAgICAgIGlmIChQbGF0Zm9ybUJ1ZmZlciAmJiBQbGF0Zm9ybUJ1ZmZlci5pc0J1ZmZlckF2YWlsYWJsZSgpKSB7XG4gICAgICAgIHJldHVybiBQbGF0Zm9ybUJ1ZmZlci5mcm9tKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdCbG9iIGlzIG5vdCBzdXBwb3J0ZWQuIFVzZSBhIEJ1ZmZlciBpbnN0ZWFkLicsIEF4aW9zRXJyb3IuRVJSX05PVF9TVVBQT1JUKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGZ1bmN0aW9uIHRocm93SWZNYXhEZXB0aEV4Y2VlZGVkKGRlcHRoKSB7XG4gICAgaWYgKGRlcHRoID4gbWF4RGVwdGgpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdPYmplY3QgaXMgdG9vIGRlZXBseSBuZXN0ZWQgKCcgKyBkZXB0aCArICcgbGV2ZWxzKS4gTWF4IGRlcHRoOiAnICsgbWF4RGVwdGgsIEF4aW9zRXJyb3IuRVJSX0ZPUk1fREFUQV9ERVBUSF9FWENFRURFRCk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHN0cmluZ2lmeVdpdGhEZXB0aExpbWl0KHZhbHVlLCBkZXB0aCkge1xuICAgIGlmIChtYXhEZXB0aCA9PT0gSW5maW5pdHkpIHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGFuY2VzdG9ycyA9IFtdO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgZnVuY3Rpb24gbGltaXREZXB0aChfa2V5LCBjdXJyZW50VmFsdWUpIHtcbiAgICAgIGlmICghdXRpbHMkMS5pc09iamVjdChjdXJyZW50VmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgICB3aGlsZSAoYW5jZXN0b3JzLmxlbmd0aCAmJiBhbmNlc3RvcnNbYW5jZXN0b3JzLmxlbmd0aCAtIDFdICE9PSB0aGlzKSB7XG4gICAgICAgIGFuY2VzdG9ycy5wb3AoKTtcbiAgICAgIH1cbiAgICAgIGFuY2VzdG9ycy5wdXNoKGN1cnJlbnRWYWx1ZSk7XG4gICAgICB0aHJvd0lmTWF4RGVwdGhFeGNlZWRlZChkZXB0aCArIGFuY2VzdG9ycy5sZW5ndGggLSAxKTtcbiAgICAgIHJldHVybiBjdXJyZW50VmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVmYXVsdCB2aXNpdG9yLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0ga2V5XG4gICAqIEBwYXJhbSB7QXJyYXk8U3RyaW5nfE51bWJlcj59IHBhdGhcbiAgICogQHRoaXMge0Zvcm1EYXRhfVxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJuIHRydWUgdG8gdmlzaXQgdGhlIGVhY2ggcHJvcCBvZiB0aGUgdmFsdWUgcmVjdXJzaXZlbHlcbiAgICovXG4gIGZ1bmN0aW9uIGRlZmF1bHRWaXNpdG9yKHZhbHVlLCBrZXksIHBhdGgpIHtcbiAgICBsZXQgYXJyID0gdmFsdWU7XG4gICAgaWYgKHV0aWxzJDEuaXNSZWFjdE5hdGl2ZShmb3JtRGF0YSkgJiYgdXRpbHMkMS5pc1JlYWN0TmF0aXZlQmxvYih2YWx1ZSkpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChyZW5kZXJLZXkocGF0aCwga2V5LCBkb3RzKSwgY29udmVydFZhbHVlKHZhbHVlKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAmJiAhcGF0aCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAodXRpbHMkMS5lbmRzV2l0aChrZXksICd7fScpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBrZXkgPSBtZXRhVG9rZW5zID8ga2V5IDoga2V5LnNsaWNlKDAsIC0yKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIHZhbHVlID0gc3RyaW5naWZ5V2l0aERlcHRoTGltaXQodmFsdWUsIDEpO1xuICAgICAgfSBlbHNlIGlmICh1dGlscyQxLmlzQXJyYXkodmFsdWUpICYmIGlzRmxhdEFycmF5KHZhbHVlKSB8fCAodXRpbHMkMS5pc0ZpbGVMaXN0KHZhbHVlKSB8fCB1dGlscyQxLmVuZHNXaXRoKGtleSwgJ1tdJykpICYmIChhcnIgPSB1dGlscyQxLnRvQXJyYXkodmFsdWUpKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgICAga2V5ID0gcmVtb3ZlQnJhY2tldHMoa2V5KTtcbiAgICAgICAgYXJyLmZvckVhY2goZnVuY3Rpb24gZWFjaChlbCwgaW5kZXgpIHtcbiAgICAgICAgICAhKHV0aWxzJDEuaXNVbmRlZmluZWQoZWwpIHx8IGVsID09PSBudWxsKSAmJiBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgICAgICAgaW5kZXhlcyA9PT0gdHJ1ZSA/IHJlbmRlcktleShba2V5XSwgaW5kZXgsIGRvdHMpIDogaW5kZXhlcyA9PT0gbnVsbCA/IGtleSA6IGtleSArICdbXScsIGNvbnZlcnRWYWx1ZShlbCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNWaXNpdGFibGUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZm9ybURhdGEuYXBwZW5kKHJlbmRlcktleShwYXRoLCBrZXksIGRvdHMpLCBjb252ZXJ0VmFsdWUodmFsdWUpKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgZXhwb3NlZEhlbHBlcnMgPSBPYmplY3QuYXNzaWduKHByZWRpY2F0ZXMsIHtcbiAgICBkZWZhdWx0VmlzaXRvcixcbiAgICBjb252ZXJ0VmFsdWUsXG4gICAgaXNWaXNpdGFibGVcbiAgfSk7XG4gIGZ1bmN0aW9uIGJ1aWxkKHZhbHVlLCBwYXRoLCBkZXB0aCA9IDApIHtcbiAgICBpZiAodXRpbHMkMS5pc1VuZGVmaW5lZCh2YWx1ZSkpIHJldHVybjtcbiAgICB0aHJvd0lmTWF4RGVwdGhFeGNlZWRlZChkZXB0aCk7XG4gICAgaWYgKHN0YWNrLmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaXJjdWxhciByZWZlcmVuY2UgZGV0ZWN0ZWQgaW4gJyArIHBhdGguam9pbignLicpKTtcbiAgICB9XG4gICAgc3RhY2sucHVzaCh2YWx1ZSk7XG4gICAgdXRpbHMkMS5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiBlYWNoKGVsLCBrZXkpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9ICEodXRpbHMkMS5pc1VuZGVmaW5lZChlbCkgfHwgZWwgPT09IG51bGwpICYmIHZpc2l0b3IuY2FsbChmb3JtRGF0YSwgZWwsIHV0aWxzJDEuaXNTdHJpbmcoa2V5KSA/IGtleS50cmltKCkgOiBrZXksIHBhdGgsIGV4cG9zZWRIZWxwZXJzKTtcbiAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgYnVpbGQoZWwsIHBhdGggPyBwYXRoLmNvbmNhdChrZXkpIDogW2tleV0sIGRlcHRoICsgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc3RhY2sucG9wKCk7XG4gIH1cbiAgaWYgKCF1dGlscyQxLmlzT2JqZWN0KG9iaikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdkYXRhIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cbiAgYnVpbGQob2JqKTtcbiAgcmV0dXJuIGZvcm1EYXRhO1xufVxuXG4vKipcbiAqIEl0IGVuY29kZXMgYSBzdHJpbmcgYnkgcmVwbGFjaW5nIGFsbCBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBpbiB0aGUgdW5yZXNlcnZlZCBzZXQgd2l0aFxuICogdGhlaXIgcGVyY2VudC1lbmNvZGVkIGVxdWl2YWxlbnRzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIFRoZSBzdHJpbmcgdG8gZW5jb2RlLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBlbmNvZGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlJDEoc3RyKSB7XG4gIGNvbnN0IGNoYXJNYXAgPSB7XG4gICAgJyEnOiAnJTIxJyxcbiAgICBcIidcIjogJyUyNycsXG4gICAgJygnOiAnJTI4JyxcbiAgICAnKSc6ICclMjknLFxuICAgICd+JzogJyU3RScsXG4gICAgJyUyMCc6ICcrJ1xuICB9O1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCl+XXwlMjAvZywgZnVuY3Rpb24gcmVwbGFjZXIobWF0Y2gpIHtcbiAgICByZXR1cm4gY2hhck1hcFttYXRjaF07XG4gIH0pO1xufVxuXG4vKipcbiAqIEl0IHRha2VzIGEgcGFyYW1zIG9iamVjdCBhbmQgY29udmVydHMgaXQgdG8gYSBGb3JtRGF0YSBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIGFueT59IHBhcmFtcyAtIFRoZSBwYXJhbWV0ZXJzIHRvIGJlIGNvbnZlcnRlZCB0byBhIEZvcm1EYXRhIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgYW55Pn0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIG9iamVjdCBwYXNzZWQgdG8gdGhlIEF4aW9zIGNvbnN0cnVjdG9yLlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBBeGlvc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMsIG9wdGlvbnMpIHtcbiAgdGhpcy5fcGFpcnMgPSBbXTtcbiAgcGFyYW1zICYmIHRvRm9ybURhdGEocGFyYW1zLCB0aGlzLCBvcHRpb25zKTtcbn1cbmNvbnN0IHByb3RvdHlwZSA9IEF4aW9zVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcbnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiBhcHBlbmQobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5fcGFpcnMucHVzaChbbmFtZSwgdmFsdWVdKTtcbn07XG5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhlbmNvZGVyKSB7XG4gIGNvbnN0IF9lbmNvZGUgPSBlbmNvZGVyID8gdmFsdWUgPT4gZW5jb2Rlci5jYWxsKHRoaXMsIHZhbHVlLCBlbmNvZGUkMSkgOiBlbmNvZGUkMTtcbiAgcmV0dXJuIHRoaXMuX3BhaXJzLm1hcChmdW5jdGlvbiBlYWNoKHBhaXIpIHtcbiAgICByZXR1cm4gX2VuY29kZShwYWlyWzBdKSArICc9JyArIF9lbmNvZGUocGFpclsxXSk7XG4gIH0sICcnKS5qb2luKCcmJyk7XG59O1xuXG4vKipcbiAqIEl0IHJlcGxhY2VzIFVSTC1lbmNvZGVkIGZvcm1zIG9mIGA6YCwgYCRgLCBgLGAsIGFuZCBzcGFjZXMgd2l0aFxuICogdGhlaXIgcGxhaW4gY291bnRlcnBhcnRzIChgOmAsIGAkYCwgYCxgLCBgK2ApLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWwgVGhlIHZhbHVlIHRvIGJlIGVuY29kZWQuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGVuY29kZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLnJlcGxhY2UoLyUzQS9naSwgJzonKS5yZXBsYWNlKC8lMjQvZywgJyQnKS5yZXBsYWNlKC8lMkMvZ2ksICcsJykucmVwbGFjZSgvJTIwL2csICcrJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHBhcmFtIHs/KG9iamVjdHxGdW5jdGlvbil9IG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5mdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgb3B0aW9ucykge1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gdXJsIHx8ICcnO1xuICBjb25zdCBfb3B0aW9ucyA9IHV0aWxzJDEuaXNGdW5jdGlvbihvcHRpb25zKSA/IHtcbiAgICBzZXJpYWxpemU6IG9wdGlvbnNcbiAgfSA6IG9wdGlvbnM7XG5cbiAgLy8gUmVhZCBzZXJpYWxpemVyIG9wdGlvbnMgcG9sbHV0aW9uLXNhZmVseTogb3duIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb24gYVxuICAvLyBjbGFzcy90ZW1wbGF0ZSBwcm90b3R5cGUgYXJlIGhvbm9yZWQsIGJ1dCB2YWx1ZXMgaW5qZWN0ZWQgb250byBhIHBvbGx1dGVkXG4gIC8vIE9iamVjdC5wcm90b3R5cGUgYXJlIGlnbm9yZWQuXG4gIGNvbnN0IF9lbmNvZGUgPSB1dGlscyQxLmdldFNhZmVQcm9wKF9vcHRpb25zLCAnZW5jb2RlJykgfHwgZW5jb2RlO1xuICBjb25zdCBzZXJpYWxpemVGbiA9IHV0aWxzJDEuZ2V0U2FmZVByb3AoX29wdGlvbnMsICdzZXJpYWxpemUnKTtcbiAgbGV0IHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChzZXJpYWxpemVGbikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBzZXJpYWxpemVGbihwYXJhbXMsIF9vcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gdXRpbHMkMS5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpID8gcGFyYW1zLnRvU3RyaW5nKCkgOiBuZXcgQXhpb3NVUkxTZWFyY2hQYXJhbXMocGFyYW1zLCBfb3B0aW9ucykudG9TdHJpbmcoX2VuY29kZSk7XG4gIH1cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICBjb25zdCBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG4gIHJldHVybiB1cmw7XG59XG5cbmNvbnN0ICRpbnRlcm5hbHMgPSBTeW1ib2woJ2ludGVybmFscycpO1xuXG4vLyBgaGFuZGxlcnNgIGlzIHB1YmxpYyBhbmQgbWF5IGJlIHJlcGxhY2VkIHdpdGggYSBudWxsaXNoIHZhbHVlIGJ5IHVzZXIgY29kZTtcbi8vIGBjbGVhcigpYCBoYXMgYWx3YXlzIHRvbGVyYXRlZCB0aGF0LiBUcmVhdCBpdCBhcyBhbiBlbXB0eSBzdGFjayByYXRoZXIgdGhhblxuLy8gZGVyZWZlcmVuY2luZyBpdC5cbmZ1bmN0aW9uIGNvdW50SGFuZGxlcnMoaGFuZGxlcnMpIHtcbiAgcmV0dXJuIGhhbmRsZXJzID8gaGFuZGxlcnMubGVuZ3RoIDogMDtcbn1cbmZ1bmN0aW9uIHRyaW1IYW5kbGVycyhoYW5kbGVycykge1xuICBpZiAoIWhhbmRsZXJzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHdoaWxlIChoYW5kbGVycy5sZW5ndGggJiYgaGFuZGxlcnNbaGFuZGxlcnMubGVuZ3RoIC0gMV0gPT09IG51bGwpIHtcbiAgICBoYW5kbGVycy5wb3AoKTtcbiAgfVxufVxuZnVuY3Rpb24gc3luY0hhbmRsZXJFbnRyaWVzKG1hbmFnZXIsIGludGVybmFscykge1xuICBjb25zdCBoYW5kbGVycyA9IG1hbmFnZXIuaGFuZGxlcnM7XG4gIGNvbnN0IGxlbmd0aCA9IGNvdW50SGFuZGxlcnMoaGFuZGxlcnMpO1xuICBpZiAoaGFuZGxlcnMgIT09IGludGVybmFscy5oYW5kbGVyc1JlZikge1xuICAgIGludGVybmFscy5oYW5kbGVyc1JlZiA9IGhhbmRsZXJzO1xuICAgIGludGVybmFscy5oYW5kbGVyRW50cmllcy5jbGVhcigpO1xuICB9IGVsc2UgaWYgKGxlbmd0aCAhPT0gaW50ZXJuYWxzLmhhbmRsZXJzTGVuZ3RoKSB7XG4gICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgIGludGVybmFscy5oYW5kbGVyRW50cmllcy5jbGVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnRlcm5hbHMuaGFuZGxlckVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiByZW1vdmVTdGFsZUVudHJ5KGVudHJ5LCBpZCkge1xuICAgICAgICBpZiAoaGFuZGxlcnNbZW50cnkuaW5kZXhdICE9PSBlbnRyeS5oYW5kbGVyKSB7XG4gICAgICAgICAgaW50ZXJuYWxzLmhhbmRsZXJFbnRyaWVzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpbnRlcm5hbHMuaGFuZGxlcnNMZW5ndGggPSBsZW5ndGg7XG59XG5jbGFzcyBJbnRlcmNlcHRvck1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gW107XG4gICAgdGhpc1skaW50ZXJuYWxzXSA9IHtcbiAgICAgIGhhbmRsZXJzUmVmOiB0aGlzLmhhbmRsZXJzLFxuICAgICAgaGFuZGxlcnNMZW5ndGg6IHRoaXMuaGFuZGxlcnMubGVuZ3RoLFxuICAgICAgaGFuZGxlckVudHJpZXM6IG5ldyBNYXAoKSxcbiAgICAgIGl0ZXJhdGlvbkRlcHRoOiAwLFxuICAgICAgbmV4dElkOiAwXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSBpbnRlcmNlcHRvciwgc3luY2hyb25vdXMgYW5kIHJ1bldoZW5cbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICAgKi9cbiAgdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBoYW5kbGVyID0ge1xuICAgICAgZnVsZmlsbGVkLFxuICAgICAgcmVqZWN0ZWQsXG4gICAgICBzeW5jaHJvbm91czogb3B0aW9ucyA/IG9wdGlvbnMuc3luY2hyb25vdXMgOiBmYWxzZSxcbiAgICAgIHJ1bldoZW46IG9wdGlvbnMgPyBvcHRpb25zLnJ1bldoZW4gOiBudWxsXG4gICAgfTtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSB0aGlzWyRpbnRlcm5hbHNdO1xuICAgIGlmICh0aGlzLmhhbmRsZXJzID09IG51bGwpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG4gICAgc3luY0hhbmRsZXJFbnRyaWVzKHRoaXMsIGludGVybmFscyk7XG4gICAgY29uc3QgaWQgPSBpbnRlcm5hbHMubmV4dElkKys7XG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIGludGVybmFscy5oYW5kbGVyRW50cmllcy5zZXQoaWQsIHtcbiAgICAgIGhhbmRsZXIsXG4gICAgICBpbmRleDogdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxXG4gICAgfSk7XG4gICAgaW50ZXJuYWxzLmhhbmRsZXJzTGVuZ3RoID0gdGhpcy5oYW5kbGVycy5sZW5ndGg7XG4gICAgcmV0dXJuIGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZWplY3QoaWQpIHtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSB0aGlzWyRpbnRlcm5hbHNdO1xuICAgIHN5bmNIYW5kbGVyRW50cmllcyh0aGlzLCBpbnRlcm5hbHMpO1xuICAgIGNvbnN0IGVudHJ5ID0gaW50ZXJuYWxzLmhhbmRsZXJFbnRyaWVzLmdldChpZCk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBpbnRlcm5hbHMuaGFuZGxlckVudHJpZXMuZGVsZXRlKGlkKTtcblxuICAgICAgLy8gSWdub3JlIElEcyBpbnZhbGlkYXRlZCBieSBjbGVhciBvciBkaXJlY3QgcmVwbGFjZW1lbnQgb2YgaGFuZGxlcnMuXG4gICAgICBpZiAodGhpcy5oYW5kbGVyc1tlbnRyeS5pbmRleF0gIT09IGVudHJ5LmhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5oYW5kbGVyc1tlbnRyeS5pbmRleF0gPSBudWxsO1xuXG4gICAgICAvLyBEbyBub3QgcmV1c2UgYW4gaW5kZXggd2hpbGUgZm9yRWFjaCBpcyB3YWxraW5nIGl0cyBsZW5ndGggc25hcHNob3QuXG4gICAgICBpZiAoIWludGVybmFscy5pdGVyYXRpb25EZXB0aCkge1xuICAgICAgICB0cmltSGFuZGxlcnModGhpcy5oYW5kbGVycyk7XG4gICAgICAgIGludGVybmFscy5oYW5kbGVyc0xlbmd0aCA9IHRoaXMuaGFuZGxlcnMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgaW50ZXJjZXB0b3JzIGZyb20gdGhlIHN0YWNrXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuaGFuZGxlcnMpIHtcbiAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICAgIHN5bmNIYW5kbGVyRW50cmllcyh0aGlzLCB0aGlzWyRpbnRlcm5hbHNdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAgICpcbiAgICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAgICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gICAqXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZm9yRWFjaChmbikge1xuICAgIGNvbnN0IGludGVybmFscyA9IHRoaXNbJGludGVybmFsc107XG4gICAgc3luY0hhbmRsZXJFbnRyaWVzKHRoaXMsIGludGVybmFscyk7XG4gICAgaW50ZXJuYWxzLml0ZXJhdGlvbkRlcHRoKys7XG4gICAgdHJ5IHtcbiAgICAgIHV0aWxzJDEuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICAgICAgZm4oaCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoISAtLWludGVybmFscy5pdGVyYXRpb25EZXB0aCkge1xuICAgICAgICBzeW5jSGFuZGxlckVudHJpZXModGhpcywgaW50ZXJuYWxzKTtcbiAgICAgICAgdHJpbUhhbmRsZXJzKHRoaXMuaGFuZGxlcnMpO1xuICAgICAgICBpbnRlcm5hbHMuaGFuZGxlcnNMZW5ndGggPSBjb3VudEhhbmRsZXJzKHRoaXMuaGFuZGxlcnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgdHJhbnNpdGlvbmFsRGVmYXVsdHMgPSB7XG4gIHNpbGVudEpTT05QYXJzaW5nOiB0cnVlLFxuICBmb3JjZWRKU09OUGFyc2luZzogdHJ1ZSxcbiAgY2xhcmlmeVRpbWVvdXRFcnJvcjogZmFsc2UsXG4gIGxlZ2FjeUludGVyY2VwdG9yUmVxUmVzT3JkZXJpbmc6IHRydWUsXG4gIGFkdmVydGlzZVpzdGRBY2NlcHRFbmNvZGluZzogZmFsc2UsXG4gIHZhbGlkYXRlU3RhdHVzVW5kZWZpbmVkUmVzb2x2ZXM6IHRydWVcbn07XG5cbnZhciBVUkxTZWFyY2hQYXJhbXMgPSB1cmwuVVJMU2VhcmNoUGFyYW1zO1xuXG5jb25zdCBBTFBIQSA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XG5jb25zdCBESUdJVCA9ICcwMTIzNDU2Nzg5JztcbmNvbnN0IEFMUEhBQkVUID0ge1xuICBESUdJVCxcbiAgQUxQSEEsXG4gIEFMUEhBX0RJR0lUOiBBTFBIQSArIEFMUEhBLnRvVXBwZXJDYXNlKCkgKyBESUdJVFxufTtcbmNvbnN0IGdlbmVyYXRlU3RyaW5nID0gKHNpemUgPSAxNiwgYWxwaGFiZXQgPSBBTFBIQUJFVC5BTFBIQV9ESUdJVCkgPT4ge1xuICBsZXQgc3RyID0gJyc7XG4gIGNvbnN0IHtcbiAgICBsZW5ndGhcbiAgfSA9IGFscGhhYmV0O1xuICBjb25zdCByYW5kb21WYWx1ZXMgPSBuZXcgVWludDMyQXJyYXkoc2l6ZSk7XG4gIGNyeXB0by5yYW5kb21GaWxsU3luYyhyYW5kb21WYWx1ZXMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgIHN0ciArPSBhbHBoYWJldFtyYW5kb21WYWx1ZXNbaV0gJSBsZW5ndGhdO1xuICB9XG4gIHJldHVybiBzdHI7XG59O1xudmFyIHBsYXRmb3JtJDEgPSB7XG4gIGlzTm9kZTogdHJ1ZSxcbiAgY2xhc3Nlczoge1xuICAgIFVSTFNlYXJjaFBhcmFtcyxcbiAgICBGb3JtRGF0YTogRm9ybURhdGEkMSxcbiAgICBCbG9iOiB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgQmxvYiB8fCBudWxsXG4gIH0sXG4gIEFMUEhBQkVULFxuICBnZW5lcmF0ZVN0cmluZyxcbiAgcHJvdG9jb2xzOiBbJ2h0dHAnLCAnaHR0cHMnLCAnZmlsZScsICdkYXRhJ11cbn07XG5cbmNvbnN0IGhhc0Jyb3dzZXJFbnYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuY29uc3QgX25hdmlnYXRvciA9IHR5cGVvZiBuYXZpZ2F0b3IgPT09ICdvYmplY3QnICYmIG5hdmlnYXRvciB8fCB1bmRlZmluZWQ7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5jb25zdCBoYXNTdGFuZGFyZEJyb3dzZXJFbnYgPSBoYXNCcm93c2VyRW52ICYmICghX25hdmlnYXRvciB8fCBbJ1JlYWN0TmF0aXZlJywgJ05hdGl2ZVNjcmlwdCcsICdOUyddLmluZGV4T2YoX25hdmlnYXRvci5wcm9kdWN0KSA8IDApO1xuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciB3ZWJXb3JrZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBBbHRob3VnaCB0aGUgYGlzU3RhbmRhcmRCcm93c2VyRW52YCBtZXRob2QgaW5kaWNhdGVzIHRoYXRcbiAqIGBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlcmAsIHRoZSBXZWJXb3JrZXIgd2lsbCBzdGlsbCBiZVxuICogZmlsdGVyZWQgb3V0IGR1ZSB0byBpdHMganVkZ21lbnQgc3RhbmRhcmRcbiAqIGB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnYC5cbiAqIFRoaXMgbGVhZHMgdG8gYSBwcm9ibGVtIHdoZW4gYXhpb3MgcG9zdCBgRm9ybURhdGFgIGluIHdlYldvcmtlclxuICovXG5jb25zdCBoYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYgPSAoKCkgPT4ge1xuICByZXR1cm4gdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyAmJlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlICYmIHR5cGVvZiBzZWxmLmltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbic7XG59KSgpO1xuY29uc3Qgb3JpZ2luID0gaGFzQnJvd3NlckVudiAmJiB3aW5kb3cubG9jYXRpb24uaHJlZiB8fCAnaHR0cDovL2xvY2FsaG9zdCc7XG5cbnZhciB1dGlscyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBoYXNCcm93c2VyRW52OiBoYXNCcm93c2VyRW52LFxuICBoYXNTdGFuZGFyZEJyb3dzZXJFbnY6IGhhc1N0YW5kYXJkQnJvd3NlckVudixcbiAgaGFzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52OiBoYXNTdGFuZGFyZEJyb3dzZXJXZWJXb3JrZXJFbnYsXG4gIG5hdmlnYXRvcjogX25hdmlnYXRvcixcbiAgb3JpZ2luOiBvcmlnaW5cbn0pO1xuXG52YXIgcGxhdGZvcm0gPSB7XG4gIC4uLnV0aWxzLFxuICAuLi5wbGF0Zm9ybSQxXG59O1xuXG5mdW5jdGlvbiB0b1VSTEVuY29kZWRGb3JtKGRhdGEsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRvRm9ybURhdGEoZGF0YSwgbmV3IHBsYXRmb3JtLmNsYXNzZXMuVVJMU2VhcmNoUGFyYW1zKCksIHtcbiAgICB2aXNpdG9yOiBmdW5jdGlvbiAodmFsdWUsIGtleSwgcGF0aCwgaGVscGVycykge1xuICAgICAgaWYgKHBsYXRmb3JtLmlzTm9kZSAmJiB1dGlscyQxLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlLnRvU3RyaW5nKCdiYXNlNjQnKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoZWxwZXJzLmRlZmF1bHRWaXNpdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICAuLi5vcHRpb25zXG4gIH0pO1xufVxuXG5jb25zdCBNQVhfREVQVEggPSBERUZBVUxUX0ZPUk1fREFUQV9NQVhfREVQVEg7XG5mdW5jdGlvbiB0aHJvd0lmRGVwdGhFeGNlZWRlZChpbmRleCkge1xuICBpZiAoaW5kZXggPiBNQVhfREVQVEgpIHtcbiAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignRm9ybURhdGEgZmllbGQgaXMgdG9vIGRlZXBseSBuZXN0ZWQgKCcgKyBpbmRleCArICcgbGV2ZWxzKS4gTWF4IGRlcHRoOiAnICsgTUFYX0RFUFRILCBBeGlvc0Vycm9yLkVSUl9GT1JNX0RBVEFfREVQVEhfRVhDRUVERUQpO1xuICB9XG59XG5cbi8qKlxuICogSXQgdGFrZXMgYSBzdHJpbmcgbGlrZSBgZm9vW3hdW3ldW3pdYCBhbmQgcmV0dXJucyBhbiBhcnJheSBsaWtlIGBbJ2ZvbycsICd4JywgJ3knLCAneiddXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICpcbiAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHN0cmluZ3MuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUHJvcFBhdGgobmFtZSkge1xuICAvLyBmb29beF1beV1bel0gLT4gWydmb28nLCAneCcsICd5JywgJ3onXVxuICAvLyBmb28ueC55LnogICAgLT4gWydmb28nLCAneCcsICd5JywgJ3onXVxuICAvLyBBIHBhdGggaXMgc3BsaXQgb24gYC5gIGFuZCBvbiBgWy4uLl1gIGdyb3Vwcy4gQSBzZWdtZW50IOKAlCB3aGV0aGVyIHdyaXR0ZW5cbiAgLy8gaW4gZG90IG5vdGF0aW9uIG9yIGNhcHR1cmVkIGluc2lkZSBicmFja2V0cyDigJQgbWF5IGNvbnRhaW4gYW55IGNoYXJhY3RlclxuICAvLyBleGNlcHQgYC5gLCBgW2AgYW5kIGBdYCwgc28gYSBrZXkgbGlrZSBgdXNlci1uYW1lYCBvciBgdXNlciBuYW1lYCBpcyBrZXB0XG4gIC8vIGxpdGVyYWwgaW5zdGVhZCBvZiBiZWluZyBzcGxpdCAoIzU0MDIpLiBgLmAsIGBbYCBhbmQgYF1gIGtlZXAgdGhlaXIgZXhpc3RpbmdcbiAgLy8gbWVhbmluZywgZS5nLiBgZm9vW2Jhci5iYXpdYCAtPiBbJ2ZvbycsICdiYXInLCAnYmF6J10gYW5kIGBbXWAgaXMgYW4gYXJyYXkgcHVzaC5cbiAgLy8gRXhjbHVkaW5nIGBbYCBmcm9tIHRoZSBicmFja2V0IGdyb3VwIGFsc28gbWFrZXMgdGhlIG1hdGNoIGZhaWwgZmFzdCBhdCB0aGVcbiAgLy8gbmV4dCBgW2AsIHNvIGEgbWFsZm9ybWVkIG5hbWUgY2Fubm90IHJlc2NhbiB0byB0aGUgZW5kIG9mIHRoZSBzdHJpbmcgZnJvbVxuICAvLyBldmVyeSB1bm1hdGNoZWQgYFtgIOKAlCBwYXJzaW5nIHN0YXlzIGxpbmVhciBpbiB0aGUgbGVuZ3RoIG9mIHRoZSBuYW1lLlxuICBjb25zdCBwYXRoID0gW107XG4gIGNvbnN0IHBhdHRlcm4gPSAvW14uW1xcXV0rfFxcWyhbXi5bXFxdXSopXS9nO1xuICBsZXQgbWF0Y2g7XG4gIHdoaWxlICgobWF0Y2ggPSBwYXR0ZXJuLmV4ZWMobmFtZSkpICE9PSBudWxsKSB7XG4gICAgdGhyb3dJZkRlcHRoRXhjZWVkZWQocGF0aC5sZW5ndGgpO1xuICAgIHBhdGgucHVzaChtYXRjaFswXSA9PT0gJ1tdJyA/ICcnIDogbWF0Y2hbMV0gfHwgbWF0Y2hbMF0pO1xuICB9XG4gIHJldHVybiBwYXRoO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8YW55Pn0gYXJyIC0gVGhlIGFycmF5IHRvIGNvbnZlcnQgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIGtleXMgYW5kIHZhbHVlcyBhcyB0aGUgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9PYmplY3QoYXJyKSB7XG4gIGNvbnN0IG9iaiA9IHt9O1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXJyKTtcbiAgbGV0IGk7XG4gIGNvbnN0IGxlbiA9IGtleXMubGVuZ3RoO1xuICBsZXQga2V5O1xuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIG9ialtrZXldID0gYXJyW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIEZvcm1EYXRhIG9iamVjdCBhbmQgcmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1EYXRhIFRoZSBGb3JtRGF0YSBvYmplY3QgdG8gY29udmVydCB0byBKU09OLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLCBhbnk+IHwgbnVsbH0gVGhlIGNvbnZlcnRlZCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGZvcm1EYXRhVG9KU09OKGZvcm1EYXRhKSB7XG4gIGZ1bmN0aW9uIGJ1aWxkUGF0aChwYXRoLCB2YWx1ZSwgdGFyZ2V0LCBpbmRleCkge1xuICAgIHRocm93SWZEZXB0aEV4Y2VlZGVkKGluZGV4KTtcbiAgICBsZXQgbmFtZSA9IHBhdGhbaW5kZXgrK107XG4gICAgaWYgKG5hbWUgPT09ICdfX3Byb3RvX18nKSByZXR1cm4gdHJ1ZTtcbiAgICBjb25zdCBpc051bWVyaWNLZXkgPSBOdW1iZXIuaXNGaW5pdGUoK25hbWUpO1xuICAgIGNvbnN0IGlzTGFzdCA9IGluZGV4ID49IHBhdGgubGVuZ3RoO1xuICAgIG5hbWUgPSAhbmFtZSAmJiB1dGlscyQxLmlzQXJyYXkodGFyZ2V0KSA/IHRhcmdldC5sZW5ndGggOiBuYW1lO1xuICAgIGlmIChpc0xhc3QpIHtcbiAgICAgIGlmICh1dGlscyQxLmhhc093blByb3AodGFyZ2V0LCBuYW1lKSkge1xuICAgICAgICB0YXJnZXRbbmFtZV0gPSB1dGlscyQxLmlzQXJyYXkodGFyZ2V0W25hbWVdKSA/IHRhcmdldFtuYW1lXS5jb25jYXQodmFsdWUpIDogW3RhcmdldFtuYW1lXSwgdmFsdWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0W25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gIWlzTnVtZXJpY0tleTtcbiAgICB9XG4gICAgaWYgKCF1dGlscyQxLmhhc093blByb3AodGFyZ2V0LCBuYW1lKSB8fCAhdXRpbHMkMS5pc09iamVjdCh0YXJnZXRbbmFtZV0pKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBbXTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gYnVpbGRQYXRoKHBhdGgsIHZhbHVlLCB0YXJnZXRbbmFtZV0sIGluZGV4KTtcbiAgICBpZiAocmVzdWx0ICYmIHV0aWxzJDEuaXNBcnJheSh0YXJnZXRbbmFtZV0pKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSBhcnJheVRvT2JqZWN0KHRhcmdldFtuYW1lXSk7XG4gICAgfVxuICAgIHJldHVybiAhaXNOdW1lcmljS2V5O1xuICB9XG4gIGlmICh1dGlscyQxLmlzRm9ybURhdGEoZm9ybURhdGEpICYmIHV0aWxzJDEuaXNGdW5jdGlvbihmb3JtRGF0YS5lbnRyaWVzKSkge1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIHV0aWxzJDEuZm9yRWFjaEVudHJ5KGZvcm1EYXRhLCAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgIGJ1aWxkUGF0aChwYXJzZVByb3BQYXRoKG5hbWUpLCB2YWx1ZSwgb2JqLCAwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5jb25zdCBtZXRob2RMaXN0ID0gT2JqZWN0LmZyZWV6ZShbJ2dldCcsICdkZWxldGUnLCAnaGVhZCcsICdvcHRpb25zJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ3B1cmdlJywgJ2xpbmsnLCAndW5saW5rJywgJ3F1ZXJ5J10pO1xuXG5jb25zdCBvd24gPSAob2JqLCBrZXkpID0+IG9iaiAhPSBudWxsICYmIHV0aWxzJDEuaGFzT3duUHJvcChvYmosIGtleSkgPyBvYmpba2V5XSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBJdCB0YWtlcyBhIHN0cmluZywgdHJpZXMgdG8gcGFyc2UgaXQsIGFuZCBpZiBpdCBmYWlscywgaXQgcmV0dXJucyB0aGUgc3RyaW5naWZpZWQgdmVyc2lvblxuICogb2YgdGhlIGlucHV0XG4gKlxuICogQHBhcmFtIHthbnl9IHJhd1ZhbHVlIC0gVGhlIHZhbHVlIHRvIGJlIHN0cmluZ2lmaWVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcGFyc2VyIC0gQSBmdW5jdGlvbiB0aGF0IHBhcnNlcyBhIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBvYmplY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbmNvZGVyIC0gQSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgdmFsdWUgYW5kIHJldHVybnMgYSBzdHJpbmcuXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmdpZmllZCB2ZXJzaW9uIG9mIHRoZSByYXdWYWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RyaW5naWZ5U2FmZWx5KHJhd1ZhbHVlLCBwYXJzZXIsIGVuY29kZXIpIHtcbiAgaWYgKHV0aWxzJDEuaXNTdHJpbmcocmF3VmFsdWUpKSB7XG4gICAgdHJ5IHtcbiAgICAgIChwYXJzZXIgfHwgSlNPTi5wYXJzZSkocmF3VmFsdWUpO1xuICAgICAgcmV0dXJuIHV0aWxzJDEudHJpbShyYXdWYWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKGUubmFtZSAhPT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gKGVuY29kZXIgfHwgSlNPTi5zdHJpbmdpZnkpKHJhd1ZhbHVlKTtcbn1cbmNvbnN0IGRlZmF1bHRzID0ge1xuICB0cmFuc2l0aW9uYWw6IHRyYW5zaXRpb25hbERlZmF1bHRzLFxuICBhZGFwdGVyOiBbJ3hocicsICdodHRwJywgJ2ZldGNoJ10sXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IGhlYWRlcnMuZ2V0Q29udGVudFR5cGUoKSB8fCAnJztcbiAgICBjb25zdCBoYXNKU09OQ29udGVudFR5cGUgPSBjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgPiAtMTtcbiAgICBjb25zdCBpc09iamVjdFBheWxvYWQgPSB1dGlscyQxLmlzT2JqZWN0KGRhdGEpO1xuICAgIGlmIChpc09iamVjdFBheWxvYWQgJiYgdXRpbHMkMS5pc0hUTUxGb3JtKGRhdGEpKSB7XG4gICAgICBkYXRhID0gbmV3IEZvcm1EYXRhKGRhdGEpO1xuICAgIH1cbiAgICBjb25zdCBpc0Zvcm1EYXRhID0gdXRpbHMkMS5pc0Zvcm1EYXRhKGRhdGEpO1xuICAgIGlmIChpc0Zvcm1EYXRhKSB7XG4gICAgICByZXR1cm4gaGFzSlNPTkNvbnRlbnRUeXBlID8gSlNPTi5zdHJpbmdpZnkoZm9ybURhdGFUb0pTT04oZGF0YSkpIDogZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzJDEuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fCB1dGlscyQxLmlzQnVmZmVyKGRhdGEpIHx8IHV0aWxzJDEuaXNTdHJlYW0oZGF0YSkgfHwgdXRpbHMkMS5pc0ZpbGUoZGF0YSkgfHwgdXRpbHMkMS5pc0Jsb2IoZGF0YSkgfHwgdXRpbHMkMS5pc1JlYWRhYmxlU3RyZWFtKGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzJDEuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzJDEuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04JywgZmFsc2UpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgbGV0IGlzRmlsZUxpc3Q7XG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCkge1xuICAgICAgY29uc3QgZm9ybVNlcmlhbGl6ZXIgPSBvd24odGhpcywgJ2Zvcm1TZXJpYWxpemVyJyk7XG4gICAgICBpZiAoY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJykgPiAtMSkge1xuICAgICAgICByZXR1cm4gdG9VUkxFbmNvZGVkRm9ybShkYXRhLCBmb3JtU2VyaWFsaXplcikudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIGlmICgoaXNGaWxlTGlzdCA9IHV0aWxzJDEuaXNGaWxlTGlzdChkYXRhKSkgfHwgY29udGVudFR5cGUuaW5kZXhPZignbXVsdGlwYXJ0L2Zvcm0tZGF0YScpID4gLTEpIHtcbiAgICAgICAgY29uc3QgZW52ID0gb3duKHRoaXMsICdlbnYnKTtcbiAgICAgICAgY29uc3QgX0Zvcm1EYXRhID0gZW52ICYmIGVudi5Gb3JtRGF0YTtcbiAgICAgICAgcmV0dXJuIHRvRm9ybURhdGEoaXNGaWxlTGlzdCA/IHtcbiAgICAgICAgICAnZmlsZXNbXSc6IGRhdGFcbiAgICAgICAgfSA6IGRhdGEsIF9Gb3JtRGF0YSAmJiBuZXcgX0Zvcm1EYXRhKCksIGZvcm1TZXJpYWxpemVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzT2JqZWN0UGF5bG9hZCB8fCBoYXNKU09OQ29udGVudFR5cGUpIHtcbiAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nLCBmYWxzZSk7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5U2FmZWx5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIGNvbnN0IHRyYW5zaXRpb25hbCA9IG93bih0aGlzLCAndHJhbnNpdGlvbmFsJykgfHwgZGVmYXVsdHMudHJhbnNpdGlvbmFsO1xuICAgIGNvbnN0IGZvcmNlZEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5mb3JjZWRKU09OUGFyc2luZztcbiAgICBjb25zdCByZXNwb25zZVR5cGUgPSBvd24odGhpcywgJ3Jlc3BvbnNlVHlwZScpO1xuICAgIGNvbnN0IEpTT05SZXF1ZXN0ZWQgPSByZXNwb25zZVR5cGUgPT09ICdqc29uJztcbiAgICBpZiAodXRpbHMkMS5pc1Jlc3BvbnNlKGRhdGEpIHx8IHV0aWxzJDEuaXNSZWFkYWJsZVN0cmVhbShkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmIChkYXRhICYmIHV0aWxzJDEuaXNTdHJpbmcoZGF0YSkgJiYgKGZvcmNlZEpTT05QYXJzaW5nICYmICFyZXNwb25zZVR5cGUgfHwgSlNPTlJlcXVlc3RlZCkpIHtcbiAgICAgIGNvbnN0IHNpbGVudEpTT05QYXJzaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5zaWxlbnRKU09OUGFyc2luZztcbiAgICAgIGNvbnN0IHN0cmljdEpTT05QYXJzaW5nID0gIXNpbGVudEpTT05QYXJzaW5nICYmIEpTT05SZXF1ZXN0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhLCBvd24odGhpcywgJ3BhcnNlUmV2aXZlcicpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKHN0cmljdEpTT05QYXJzaW5nKSB7XG4gICAgICAgICAgaWYgKGUubmFtZSA9PT0gJ1N5bnRheEVycm9yJykge1xuICAgICAgICAgICAgdGhyb3cgQXhpb3NFcnJvci5mcm9tKGUsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSwgdGhpcywgbnVsbCwgb3duKHRoaXMsICdyZXNwb25zZScpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuICBlbnY6IHtcbiAgICBGb3JtRGF0YTogcGxhdGZvcm0uY2xhc3Nlcy5Gb3JtRGF0YSxcbiAgICBCbG9iOiBwbGF0Zm9ybS5jbGFzc2VzLkJsb2JcbiAgfSxcbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfSxcbiAgaGVhZGVyczoge1xuICAgIGNvbW1vbjoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cbn07XG51dGlscyQxLmZvckVhY2gobWV0aG9kTGlzdCwgbWV0aG9kID0+IHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHBhcmFtIHs/T2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2Ugb2JqZWN0XG4gKlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGZucywgcmVzcG9uc2UpIHtcbiAgY29uc3QgY29uZmlnID0gdGhpcyB8fCBkZWZhdWx0cztcbiAgY29uc3QgY29udGV4dCA9IHJlc3BvbnNlIHx8IGNvbmZpZztcbiAgY29uc3QgaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKGNvbnRleHQuaGVhZGVycyk7XG4gIGxldCBkYXRhID0gY29udGV4dC5kYXRhO1xuICB1dGlscyQxLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4uY2FsbChjb25maWcsIGRhdGEsIGhlYWRlcnMubm9ybWFsaXplKCksIHJlc3BvbnNlID8gcmVzcG9uc2Uuc3RhdHVzIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4gIGhlYWRlcnMubm9ybWFsaXplKCk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59XG5cbmNsYXNzIENhbmNlbGVkRXJyb3IgZXh0ZW5kcyBBeGlvc0Vycm9yIHtcbiAgLyoqXG4gICAqIEEgYENhbmNlbGVkRXJyb3JgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICAgKiBAcGFyYW0ge09iamVjdD19IGNvbmZpZyBUaGUgY29uZmlnLlxuICAgKiBAcGFyYW0ge09iamVjdD19IHJlcXVlc3QgVGhlIHJlcXVlc3QuXG4gICAqXG4gICAqIEByZXR1cm5zIHtDYW5jZWxlZEVycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCkge1xuICAgIHN1cGVyKG1lc3NhZ2UgPT0gbnVsbCA/ICdjYW5jZWxlZCcgOiBtZXNzYWdlLCBBeGlvc0Vycm9yLkVSUl9DQU5DRUxFRCwgY29uZmlnLCByZXF1ZXN0KTtcbiAgICB0aGlzLm5hbWUgPSAnQ2FuY2VsZWRFcnJvcic7XG4gICAgdGhpcy5fX0NBTkNFTF9fID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9IFRoZSByZXNwb25zZS5cbiAqL1xuZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgY29uc3QgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1cyA+PSA0MDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgNTAwID8gQXhpb3NFcnJvci5FUlJfQkFEX1JFUVVFU1QgOiBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0UsIHJlc3BvbnNlLmNvbmZpZywgcmVzcG9uc2UucmVxdWVzdCwgcmVzcG9uc2UpKTtcbiAgfVxufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAvXihbYS16XVthLXpcXGQrXFwtLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5mdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICBpZiAoIXJlbGF0aXZlVVJMKSB7XG4gICAgcmV0dXJuIGJhc2VVUkw7XG4gIH1cbiAgbGV0IGVuZCA9IGJhc2VVUkwubGVuZ3RoO1xuICB3aGlsZSAoZW5kID4gMCAmJiBiYXNlVVJMLmNoYXJDb2RlQXQoZW5kIC0gMSkgPT09IDQ3KSB7XG4gICAgZW5kLS07XG4gIH1cbiAgcmV0dXJuIGJhc2VVUkwuc2xpY2UoMCwgZW5kKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpO1xufVxuXG5jb25zdCB1cmxQYXJzZXJDb250cm9sQ2hhcmFjdGVycyA9IC9bXFx0XFxuXFxyXS9nO1xuXG4vKipcbiAqIE1hdGNoIFdIQVRXRyBVUkwgcHJlcHJvY2Vzc2luZyBiZWZvcmUgY2hlY2tpbmcgYSBVUkwncyBwcm90b2NvbC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplVVJMRm9yUHJvdG9jb2xDaGVjayh1cmwpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICBsZXQgc3RhcnQgPSAwO1xuICB3aGlsZSAoc3RhcnQgPCB1cmwubGVuZ3RoICYmIHVybC5jaGFyQ29kZUF0KHN0YXJ0KSA8PSAweDIwKSB7XG4gICAgc3RhcnQrKztcbiAgfVxuICByZXR1cm4gdXJsLnNsaWNlKHN0YXJ0KS5yZXBsYWNlKHVybFBhcnNlckNvbnRyb2xDaGFyYWN0ZXJzLCAnJyk7XG59XG5cbmNvbnN0IG1hbGZvcm1lZEh0dHBQcm90b2NvbCA9IC9eaHR0cHM/Oig/IVxcL1xcLykvaTtcblxuLy8gUmVkYWN0IHRoZSBwYXJ0cyBvZiBhIFVSTCB0aGF0IGNhbiBjYXJyeSBzZWNyZXRzIGJlZm9yZSBpdCBpcyBlbWJlZGRlZCBpbiBhblxuLy8gZXJyb3IgbWVzc2FnZS4gQXhpb3NFcnJvci50b0pTT04oKSBzZXJpYWxpemVzIGBtZXNzYWdlYCB2ZXJiYXRpbSBhbmQgZXJyb3JzXG4vLyBhcmUgY29tbW9ubHkgbG9nZ2VkLCB3aGlsZSB0aGUgb3B0LWluIGBjb25maWcucmVkYWN0YCBtb2RlbCBvbmx5IGNsZWFuc1xuLy8gY29uZmlnIGtleXMg4oCUIGl0IGNhbm5vdCByZWFjaCB0aGUgbWVzc2FnZS4gUmVkYWN0IG9ubHkgdGhlIGdlbnVpbmVseVxuLy8gc2Vuc2l0aXZlIHN1YnN0cmluZ3Mg4oCUIHVzZXJpbmZvIChjcmVkZW50aWFscyksIHF1ZXJ5IHBhcmFtZXRlciB2YWx1ZXMgYW5kXG4vLyBmcmFnbWVudCBjb250ZW50cyDigJQgd2l0aCB0aGUgc2FtZSBSRURBQ1RFRCBtYXJrZXIgdGhlIGNvbmZpZyByZWRhY3Rpb24gdXNlcyxcbi8vIHdoaWxlIGtlZXBpbmcgdGhlIHNjaGVtZSwgaG9zdCwgcGF0aCBhbmQgcGFyYW1ldGVyIG5hbWVzIHNvIHRoZSBvZmZlbmRpbmdcbi8vIHJlcXVlc3Qgc3RheXMgYWNjdXJhdGVseSBpZGVudGlmaWFibGUuXG5mdW5jdGlvbiByZWRhY3RGcmFnbWVudChmcmFnbWVudCkge1xuICBpZiAoIWZyYWdtZW50KSB7XG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9XG4gIHJldHVybiBmcmFnbWVudC5yZXBsYWNlKC8oXnwmKShbXj0mXSo9KT9bXiZdKy9nLCAobWF0Y2gsIHNlcGFyYXRvciwgcGFyYW1ldGVyTmFtZSA9ICcnKSA9PiB7XG4gICAgcmV0dXJuIGAke3NlcGFyYXRvcn0ke3BhcmFtZXRlck5hbWV9JHtSRURBQ1RFRH1gO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHJlZGFjdFNlbnNpdGl2ZVVSTFBhcnRzKHVybCkge1xuICBjb25zdCByZWRhY3RlZFVSTCA9IHVybC5yZXBsYWNlKC9eKGh0dHBzPzpcXC97MCwyfSlbXi8/I10qQC9pLCBgJDEke1JFREFDVEVEfUBgKTtcbiAgY29uc3QgZnJhZ21lbnRJbmRleCA9IHJlZGFjdGVkVVJMLmluZGV4T2YoJyMnKTtcbiAgY29uc3QgdXJsV2l0aG91dEZyYWdtZW50ID0gZnJhZ21lbnRJbmRleCA9PT0gLTEgPyByZWRhY3RlZFVSTCA6IHJlZGFjdGVkVVJMLnNsaWNlKDAsIGZyYWdtZW50SW5kZXgpO1xuICBjb25zdCByZWRhY3RlZFVSTFdpdGhvdXRGcmFnbWVudCA9IHVybFdpdGhvdXRGcmFnbWVudC5yZXBsYWNlKC8oWz8mXVtePSYjXSo9KVteJiNdKi9nLCBgJDEke1JFREFDVEVEfWApO1xuICBpZiAoZnJhZ21lbnRJbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gcmVkYWN0ZWRVUkxXaXRob3V0RnJhZ21lbnQ7XG4gIH1cbiAgcmV0dXJuIGAke3JlZGFjdGVkVVJMV2l0aG91dEZyYWdtZW50fSMke3JlZGFjdEZyYWdtZW50KHJlZGFjdGVkVVJMLnNsaWNlKGZyYWdtZW50SW5kZXggKyAxKSl9YDtcbn1cbmZ1bmN0aW9uIGFzc2VydFZhbGlkSHR0cFByb3RvY29sVVJMKHVybCwgY29uZmlnKSB7XG4gIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRVUkwgPSBub3JtYWxpemVVUkxGb3JQcm90b2NvbENoZWNrKHVybCk7XG4gICAgaWYgKG1hbGZvcm1lZEh0dHBQcm90b2NvbC50ZXN0KG5vcm1hbGl6ZWRVUkwpKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihgSW52YWxpZCBVUkwgJHtKU09OLnN0cmluZ2lmeShyZWRhY3RTZW5zaXRpdmVVUkxQYXJ0cyhub3JtYWxpemVkVVJMKSl9OiBtaXNzaW5nIFwiLy9cIiBhZnRlciBwcm90b2NvbGAsIEF4aW9zRXJyb3IuRVJSX0lOVkFMSURfVVJMLCBjb25maWcpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xuZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwsIGFsbG93QWJzb2x1dGVVcmxzLCBjb25maWcpIHtcbiAgYXNzZXJ0VmFsaWRIdHRwUHJvdG9jb2xVUkwocmVxdWVzdGVkVVJMLCBjb25maWcpO1xuICBsZXQgaXNSZWxhdGl2ZVVybCA9ICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCk7XG4gIGlmIChiYXNlVVJMICYmIChpc1JlbGF0aXZlVXJsIHx8IGFsbG93QWJzb2x1dGVVcmxzID09PSBmYWxzZSkpIHtcbiAgICBhc3NlcnRWYWxpZEh0dHBQcm90b2NvbFVSTChiYXNlVVJMLCBjb25maWcpO1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59XG5cbnZhciBERUZBVUxUX1BPUlRTJDEgPSB7XG4gIGZ0cDogMjEsXG4gIGdvcGhlcjogNzAsXG4gIGh0dHA6IDgwLFxuICBodHRwczogNDQzLFxuICB3czogODAsXG4gIHdzczogNDQzXG59O1xuZnVuY3Rpb24gcGFyc2VVcmwodXJsU3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBVUkwodXJsU3RyaW5nKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R8VVJMfSB1cmwgLSBUaGUgVVJMIGFzIGEgc3RyaW5nIG9yIFVSTCBpbnN0YW5jZSwgb3IgYVxuICogICBjb21wYXRpYmxlIG9iamVjdCAoc3VjaCBhcyB0aGUgcmVzdWx0IGZyb20gbGVnYWN5IHVybC5wYXJzZSkuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVUkwgb2YgdGhlIHByb3h5IHRoYXQgc2hvdWxkIGhhbmRsZSB0aGUgcmVxdWVzdCB0byB0aGVcbiAqICBnaXZlbiBVUkwuIElmIG5vIHByb3h5IGlzIHNldCwgdGhpcyB3aWxsIGJlIGFuIGVtcHR5IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJveHlGb3JVcmwodXJsKSB7XG4gIHZhciBwYXJzZWRVcmwgPSAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycgPyBwYXJzZVVybCh1cmwpIDogdXJsKSB8fCB7fTtcbiAgdmFyIHByb3RvID0gcGFyc2VkVXJsLnByb3RvY29sO1xuICB2YXIgaG9zdG5hbWUgPSBwYXJzZWRVcmwuaG9zdDtcbiAgdmFyIHBvcnQgPSBwYXJzZWRVcmwucG9ydDtcbiAgaWYgKHR5cGVvZiBob3N0bmFtZSAhPT0gJ3N0cmluZycgfHwgIWhvc3RuYW1lIHx8IHR5cGVvZiBwcm90byAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gJyc7IC8vIERvbid0IHByb3h5IFVSTHMgd2l0aG91dCBhIHZhbGlkIHNjaGVtZSBvciBob3N0LlxuICB9XG4gIHByb3RvID0gcHJvdG8uc3BsaXQoJzonLCAxKVswXTtcbiAgLy8gU3RyaXBwaW5nIHBvcnRzIGluIHRoaXMgd2F5IGluc3RlYWQgb2YgdXNpbmcgcGFyc2VkVXJsLmhvc3RuYW1lIHRvIG1ha2VcbiAgLy8gc3VyZSB0aGF0IHRoZSBicmFja2V0cyBhcm91bmQgSVB2NiBhZGRyZXNzZXMgYXJlIGtlcHQuXG4gIGhvc3RuYW1lID0gaG9zdG5hbWUucmVwbGFjZSgvOlxcZCokLywgJycpO1xuICBwb3J0ID0gcGFyc2VJbnQocG9ydCkgfHwgREVGQVVMVF9QT1JUUyQxW3Byb3RvXSB8fCAwO1xuICBpZiAoIXNob3VsZFByb3h5KGhvc3RuYW1lLCBwb3J0KSkge1xuICAgIHJldHVybiAnJzsgLy8gRG9uJ3QgcHJveHkgVVJMcyB0aGF0IG1hdGNoIE5PX1BST1hZLlxuICB9XG4gIHZhciBwcm94eSA9IGdldEVudihwcm90byArICdfcHJveHknKSB8fCBnZXRFbnYoJ2FsbF9wcm94eScpO1xuICBpZiAocHJveHkgJiYgcHJveHkuaW5kZXhPZignOi8vJykgPT09IC0xKSB7XG4gICAgLy8gTWlzc2luZyBzY2hlbWUgaW4gcHJveHksIGRlZmF1bHQgdG8gdGhlIHJlcXVlc3RlZCBVUkwncyBzY2hlbWUuXG4gICAgcHJveHkgPSBwcm90byArICc6Ly8nICsgcHJveHk7XG4gIH1cbiAgcmV0dXJuIHByb3h5O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGdpdmVuIFVSTCBzaG91bGQgYmUgcHJveGllZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaG9zdG5hbWUgLSBUaGUgaG9zdCBuYW1lIG9mIHRoZSBVUkwuXG4gKiBAcGFyYW0ge251bWJlcn0gcG9ydCAtIFRoZSBlZmZlY3RpdmUgcG9ydCBvZiB0aGUgVVJMLlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIGdpdmVuIFVSTCBzaG91bGQgYmUgcHJveGllZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNob3VsZFByb3h5KGhvc3RuYW1lLCBwb3J0KSB7XG4gIHZhciBOT19QUk9YWSA9IGdldEVudignbm9fcHJveHknKS50b0xvd2VyQ2FzZSgpO1xuICBpZiAoIU5PX1BST1hZKSB7XG4gICAgcmV0dXJuIHRydWU7IC8vIEFsd2F5cyBwcm94eSBpZiBOT19QUk9YWSBpcyBub3Qgc2V0LlxuICB9XG4gIGlmIChOT19QUk9YWSA9PT0gJyonKSB7XG4gICAgcmV0dXJuIGZhbHNlOyAvLyBOZXZlciBwcm94eSBpZiB3aWxkY2FyZCBpcyBzZXQuXG4gIH1cbiAgcmV0dXJuIE5PX1BST1hZLnNwbGl0KC9bLFxcc10vKS5ldmVyeShmdW5jdGlvbiAocHJveHkpIHtcbiAgICBpZiAoIXByb3h5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gU2tpcCB6ZXJvLWxlbmd0aCBob3N0cy5cbiAgICB9XG4gICAgdmFyIHBhcnNlZFByb3h5ID0gcHJveHkubWF0Y2goL14oLispOihcXGQrKSQvKTtcbiAgICB2YXIgcGFyc2VkUHJveHlIb3N0bmFtZSA9IHBhcnNlZFByb3h5ID8gcGFyc2VkUHJveHlbMV0gOiBwcm94eTtcbiAgICB2YXIgcGFyc2VkUHJveHlQb3J0ID0gcGFyc2VkUHJveHkgPyBwYXJzZUludChwYXJzZWRQcm94eVsyXSkgOiAwO1xuICAgIGlmIChwYXJzZWRQcm94eVBvcnQgJiYgcGFyc2VkUHJveHlQb3J0ICE9PSBwb3J0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gU2tpcCBpZiBwb3J0cyBkb24ndCBtYXRjaC5cbiAgICB9XG4gICAgaWYgKCEvXlsuKl0vLnRlc3QocGFyc2VkUHJveHlIb3N0bmFtZSkpIHtcbiAgICAgIC8vIE5vIHdpbGRjYXJkcywgc28gc3RvcCBwcm94eWluZyBpZiB0aGVyZSBpcyBhbiBleGFjdCBtYXRjaC5cbiAgICAgIHJldHVybiBob3N0bmFtZSAhPT0gcGFyc2VkUHJveHlIb3N0bmFtZTtcbiAgICB9XG4gICAgaWYgKHBhcnNlZFByb3h5SG9zdG5hbWUuY2hhckF0KDApID09PSAnKicpIHtcbiAgICAgIC8vIFJlbW92ZSBsZWFkaW5nIHdpbGRjYXJkLlxuICAgICAgcGFyc2VkUHJveHlIb3N0bmFtZSA9IHBhcnNlZFByb3h5SG9zdG5hbWUuc2xpY2UoMSk7XG4gICAgfVxuICAgIC8vIFN0b3AgcHJveHlpbmcgaWYgdGhlIGhvc3RuYW1lIGVuZHMgd2l0aCB0aGUgbm9fcHJveHkgaG9zdC5cbiAgICByZXR1cm4gIWhvc3RuYW1lLmVuZHNXaXRoKHBhcnNlZFByb3h5SG9zdG5hbWUpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIGZvciBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gVGhlIG5hbWUgb2YgdGhlIGVudmlyb25tZW50IHZhcmlhYmxlLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgdmFsdWUgb2YgdGhlIGVudmlyb25tZW50IHZhcmlhYmxlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZ2V0RW52KGtleSkge1xuICByZXR1cm4gcHJvY2Vzcy5lbnZba2V5LnRvTG93ZXJDYXNlKCldIHx8IHByb2Nlc3MuZW52W2tleS50b1VwcGVyQ2FzZSgpXSB8fCAnJztcbn1cblxuY29uc3QgVkVSU0lPTiA9IFwiMS4yMC4wXCI7XG5cbmZ1bmN0aW9uIHBhcnNlUHJvdG9jb2wodXJsKSB7XG4gIGNvbnN0IG1hdGNoID0gL14oWy0rXFx3XXsxLDI1fSk6KD86XFwvXFwvKT8vLmV4ZWModXJsKTtcbiAgcmV0dXJuIG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xufVxuXG4vLyBSRkMgMjM5NzogZGF0YTpbPG1lZGlhdHlwZT5dWztiYXNlNjRdLDxkYXRhPlxuLy8gbWVkaWF0eXBlID0gdHlwZS9zdWJ0eXBlIGZvbGxvd2VkIGJ5IG9wdGlvbmFsIDtuYW1lPXZhbHVlIHBhcmFtZXRlcnNcbmNvbnN0IERBVEFfVVJMX1BBVFRFUk4gPSAvXihbXiw7L10rXFwvW14sOy9dKyk/KCg/OjtbXiw7PV0rPVteLDtdKykqKSg7YmFzZTY0KT8sKFtcXHNcXFNdKikkLztcblxuLyoqXG4gKiBQYXJzZSBkYXRhIHVyaSB0byBhIEJ1ZmZlciBvciBCbG9iXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVyaVxuICogQHBhcmFtIHs/Qm9vbGVhbn0gYXNCbG9iXG4gKiBAcGFyYW0gez9PYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBvcHRpb25zLkJsb2JcbiAqXG4gKiBAcmV0dXJucyB7QnVmZmVyfEJsb2J9XG4gKi9cbmZ1bmN0aW9uIGZyb21EYXRhVVJJKHVyaSwgYXNCbG9iLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9CbG9iID0gb3B0aW9ucyAmJiBvcHRpb25zLkJsb2IgfHwgcGxhdGZvcm0uY2xhc3Nlcy5CbG9iO1xuICBjb25zdCBwcm90b2NvbCA9IHBhcnNlUHJvdG9jb2wodXJpKTtcbiAgaWYgKGFzQmxvYiA9PT0gdW5kZWZpbmVkICYmIF9CbG9iKSB7XG4gICAgYXNCbG9iID0gdHJ1ZTtcbiAgfVxuICBpZiAocHJvdG9jb2wgPT09ICdkYXRhJykge1xuICAgIHVyaSA9IHByb3RvY29sLmxlbmd0aCA/IHVyaS5zbGljZShwcm90b2NvbC5sZW5ndGggKyAxKSA6IHVyaTtcbiAgICBjb25zdCBtYXRjaCA9IERBVEFfVVJMX1BBVFRFUk4uZXhlYyh1cmkpO1xuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdJbnZhbGlkIFVSTCcsIEF4aW9zRXJyb3IuRVJSX0lOVkFMSURfVVJMKTtcbiAgICB9XG4gICAgY29uc3QgdHlwZSA9IG1hdGNoWzFdO1xuICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoWzJdO1xuICAgIGNvbnN0IGVuY29kaW5nID0gbWF0Y2hbM10gPyAnYmFzZTY0JyA6ICd1dGY4JztcbiAgICBjb25zdCBib2R5ID0gbWF0Y2hbNF07XG5cbiAgICAvLyBSRkMgMjM5NyBzZWN0aW9uIDM6IGRlZmF1bHQgbWVkaWF0eXBlIGlzIHRleHQvcGxhaW47Y2hhcnNldD1VUy1BU0NJSVxuICAgIC8vIEJhcmUgYGRhdGE6LGAgbGVhdmVzIG1pbWUgdW5kZWZpbmVkOyBCbG9iIG5vcm1hbGlzZXMgdGhhdCB0byBcIlwiIHBlciBzcGVjLlxuICAgIGxldCBtaW1lID0gJyc7XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIG1pbWUgPSBwYXJhbXMgPyB0eXBlICsgcGFyYW1zIDogdHlwZTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcykge1xuICAgICAgbWltZSA9ICd0ZXh0L3BsYWluJyArIHBhcmFtcztcbiAgICB9XG4gICAgY29uc3QgYnVmZmVyID0gZW5jb2RpbmcgPT09ICdiYXNlNjQnID8gQnVmZmVyLmZyb20oYm9keSwgJ2Jhc2U2NCcpIDogQnVmZmVyLmZyb20oZGVjb2RlVVJJQ29tcG9uZW50KGJvZHkpLCBlbmNvZGluZyk7XG4gICAgaWYgKGFzQmxvYikge1xuICAgICAgaWYgKCFfQmxvYikge1xuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignQmxvYiBpcyBub3Qgc3VwcG9ydGVkJywgQXhpb3NFcnJvci5FUlJfTk9UX1NVUFBPUlQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBfQmxvYihbYnVmZmVyXSwge1xuICAgICAgICB0eXBlOiBtaW1lXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfVxuICB0aHJvdyBuZXcgQXhpb3NFcnJvcignVW5zdXBwb3J0ZWQgcHJvdG9jb2wgJyArIHByb3RvY29sLCBBeGlvc0Vycm9yLkVSUl9OT1RfU1VQUE9SVCk7XG59XG5cbmNvbnN0IEZPUk1fREFUQV9DT05URU5UX0hFQURFUlMgPSBbJ2NvbnRlbnQtdHlwZScsICdjb250ZW50LWxlbmd0aCddO1xuXG4vKipcbiAqIEFwcGx5IHRoZSBoZWFkZXJzIGdlbmVyYXRlZCBieSBhIEZvcm1EYXRhIGltcGxlbWVudGF0aW9uIHRvIHRoZSByZXF1ZXN0IGhlYWRlcnMsXG4gKiBob25vcmluZyB0aGUgYGZvcm1EYXRhSGVhZGVyUG9saWN5YCBvcHRpb246IHdpdGggJ2NvbnRlbnQtb25seScsIGNvcHkgb25seSB0aGVcbiAqIGNvbnRlbnQtKiBoZWFkZXJzOyBvdGhlcndpc2UgbWVyZ2UgYWxsIG9mIHRoZW0uXG4gKlxuICogQHBhcmFtIHtBeGlvc0hlYWRlcnN9IGhlYWRlcnMgLSB0aGUgcmVxdWVzdCBoZWFkZXJzIHRvIG11dGF0ZVxuICogQHBhcmFtIHtPYmplY3QgfCBudWxsIHwgdW5kZWZpbmVkfSBmb3JtSGVhZGVycyAtIGhlYWRlcnMgcHJvZHVjZWQgYnkgdGhlIEZvcm1EYXRhIGltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gW3BvbGljeV0gLSB0aGUgcmVzb2x2ZWQgYGZvcm1EYXRhSGVhZGVyUG9saWN5YCBjb25maWcgdmFsdWVcbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc2V0Rm9ybURhdGFIZWFkZXJzKGhlYWRlcnMsIGZvcm1IZWFkZXJzLCBwb2xpY3kpIHtcbiAgaWYgKHBvbGljeSAhPT0gJ2NvbnRlbnQtb25seScpIHtcbiAgICBoZWFkZXJzLnNldChmb3JtSGVhZGVycyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIE9iamVjdC5lbnRyaWVzKGZvcm1IZWFkZXJzIHx8IHt9KS5mb3JFYWNoKChba2V5LCB2YWxdKSA9PiB7XG4gICAgaWYgKEZPUk1fREFUQV9DT05URU5UX0hFQURFUlMuaW5jbHVkZXMoa2V5LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICBoZWFkZXJzLnNldChrZXksIHZhbCk7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3Qga0ludGVybmFscyA9IFN5bWJvbCgnaW50ZXJuYWxzJyk7XG5jbGFzcyBBeGlvc1RyYW5zZm9ybVN0cmVhbSBleHRlbmRzIHN0cmVhbS5UcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHV0aWxzJDEudG9GbGF0T2JqZWN0KG9wdGlvbnMsIHtcbiAgICAgIG1heFJhdGU6IDAsXG4gICAgICBjaHVua1NpemU6IDY0ICogMTAyNCxcbiAgICAgIG1pbkNodW5rU2l6ZTogMTAwLFxuICAgICAgdGltZVdpbmRvdzogNTAwLFxuICAgICAgdGlja3NSYXRlOiAyLFxuICAgICAgc2FtcGxlc0NvdW50OiAxNVxuICAgIH0sIG51bGwsIChwcm9wLCBzb3VyY2UpID0+IHtcbiAgICAgIHJldHVybiAhdXRpbHMkMS5pc1VuZGVmaW5lZChzb3VyY2VbcHJvcF0pO1xuICAgIH0pO1xuICAgIHN1cGVyKHtcbiAgICAgIHJlYWRhYmxlSGlnaFdhdGVyTWFyazogb3B0aW9ucy5jaHVua1NpemVcbiAgICB9KTtcbiAgICBjb25zdCBpbnRlcm5hbHMgPSB0aGlzW2tJbnRlcm5hbHNdID0ge1xuICAgICAgdGltZVdpbmRvdzogb3B0aW9ucy50aW1lV2luZG93LFxuICAgICAgY2h1bmtTaXplOiBvcHRpb25zLmNodW5rU2l6ZSxcbiAgICAgIG1heFJhdGU6IG9wdGlvbnMubWF4UmF0ZSxcbiAgICAgIG1pbkNodW5rU2l6ZTogb3B0aW9ucy5taW5DaHVua1NpemUsXG4gICAgICBieXRlc1NlZW46IDAsXG4gICAgICBpc0NhcHR1cmVkOiBmYWxzZSxcbiAgICAgIG5vdGlmaWVkQnl0ZXNMb2FkZWQ6IDAsXG4gICAgICB0czogRGF0ZS5ub3coKSxcbiAgICAgIGJ5dGVzOiAwLFxuICAgICAgb25SZWFkQ2FsbGJhY2s6IG51bGxcbiAgICB9O1xuICAgIHRoaXMub24oJ25ld0xpc3RlbmVyJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50ID09PSAncHJvZ3Jlc3MnKSB7XG4gICAgICAgIGlmICghaW50ZXJuYWxzLmlzQ2FwdHVyZWQpIHtcbiAgICAgICAgICBpbnRlcm5hbHMuaXNDYXB0dXJlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfcmVhZChzaXplKSB7XG4gICAgY29uc3QgaW50ZXJuYWxzID0gdGhpc1trSW50ZXJuYWxzXTtcbiAgICBpZiAoaW50ZXJuYWxzLm9uUmVhZENhbGxiYWNrKSB7XG4gICAgICBpbnRlcm5hbHMub25SZWFkQ2FsbGJhY2soKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLl9yZWFkKHNpemUpO1xuICB9XG4gIF90cmFuc2Zvcm0oY2h1bmssIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGludGVybmFscyA9IHRoaXNba0ludGVybmFsc107XG4gICAgY29uc3QgbWF4UmF0ZSA9IGludGVybmFscy5tYXhSYXRlO1xuICAgIGNvbnN0IHJlYWRhYmxlSGlnaFdhdGVyTWFyayA9IHRoaXMucmVhZGFibGVIaWdoV2F0ZXJNYXJrO1xuICAgIGNvbnN0IHRpbWVXaW5kb3cgPSBpbnRlcm5hbHMudGltZVdpbmRvdztcbiAgICBjb25zdCBkaXZpZGVyID0gMTAwMCAvIHRpbWVXaW5kb3c7XG4gICAgY29uc3QgYnl0ZXNUaHJlc2hvbGQgPSBtYXhSYXRlIC8gZGl2aWRlcjtcbiAgICBjb25zdCBtaW5DaHVua1NpemUgPSBpbnRlcm5hbHMubWluQ2h1bmtTaXplICE9PSBmYWxzZSA/IE1hdGgubWF4KGludGVybmFscy5taW5DaHVua1NpemUsIGJ5dGVzVGhyZXNob2xkICogMC4wMSkgOiAwO1xuICAgIGNvbnN0IHB1c2hDaHVuayA9IChfY2h1bmssIF9jYWxsYmFjaykgPT4ge1xuICAgICAgY29uc3QgYnl0ZXMgPSBCdWZmZXIuYnl0ZUxlbmd0aChfY2h1bmspO1xuICAgICAgaW50ZXJuYWxzLmJ5dGVzU2VlbiArPSBieXRlcztcbiAgICAgIGludGVybmFscy5ieXRlcyArPSBieXRlcztcbiAgICAgIGludGVybmFscy5pc0NhcHR1cmVkICYmIHRoaXMuZW1pdCgncHJvZ3Jlc3MnLCBpbnRlcm5hbHMuYnl0ZXNTZWVuKTtcbiAgICAgIGlmICh0aGlzLnB1c2goX2NodW5rKSkge1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKF9jYWxsYmFjayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnRlcm5hbHMub25SZWFkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgaW50ZXJuYWxzLm9uUmVhZENhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKF9jYWxsYmFjayk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCB0cmFuc2Zvcm1DaHVuayA9IChfY2h1bmssIF9jYWxsYmFjaykgPT4ge1xuICAgICAgY29uc3QgY2h1bmtTaXplID0gQnVmZmVyLmJ5dGVMZW5ndGgoX2NodW5rKTtcbiAgICAgIGxldCBjaHVua1JlbWFpbmRlciA9IG51bGw7XG4gICAgICBsZXQgbWF4Q2h1bmtTaXplID0gcmVhZGFibGVIaWdoV2F0ZXJNYXJrO1xuICAgICAgbGV0IGJ5dGVzTGVmdDtcbiAgICAgIGxldCBwYXNzZWQgPSAwO1xuICAgICAgaWYgKG1heFJhdGUpIHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKCFpbnRlcm5hbHMudHMgfHwgKHBhc3NlZCA9IG5vdyAtIGludGVybmFscy50cykgPj0gdGltZVdpbmRvdykge1xuICAgICAgICAgIGludGVybmFscy50cyA9IG5vdztcbiAgICAgICAgICBieXRlc0xlZnQgPSBieXRlc1RocmVzaG9sZCAtIGludGVybmFscy5ieXRlcztcbiAgICAgICAgICBpbnRlcm5hbHMuYnl0ZXMgPSBieXRlc0xlZnQgPCAwID8gLWJ5dGVzTGVmdCA6IDA7XG4gICAgICAgICAgcGFzc2VkID0gMDtcbiAgICAgICAgfVxuICAgICAgICBieXRlc0xlZnQgPSBieXRlc1RocmVzaG9sZCAtIGludGVybmFscy5ieXRlcztcbiAgICAgIH1cbiAgICAgIGlmIChtYXhSYXRlKSB7XG4gICAgICAgIGlmIChieXRlc0xlZnQgPD0gMCkge1xuICAgICAgICAgIC8vIG5leHQgdGltZSB3aW5kb3dcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBfY2FsbGJhY2sobnVsbCwgX2NodW5rKTtcbiAgICAgICAgICB9LCB0aW1lV2luZG93IC0gcGFzc2VkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnl0ZXNMZWZ0IDwgbWF4Q2h1bmtTaXplKSB7XG4gICAgICAgICAgbWF4Q2h1bmtTaXplID0gYnl0ZXNMZWZ0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWF4Q2h1bmtTaXplICYmIGNodW5rU2l6ZSA+IG1heENodW5rU2l6ZSAmJiBjaHVua1NpemUgLSBtYXhDaHVua1NpemUgPiBtaW5DaHVua1NpemUpIHtcbiAgICAgICAgY2h1bmtSZW1haW5kZXIgPSBfY2h1bmsuc3ViYXJyYXkobWF4Q2h1bmtTaXplKTtcbiAgICAgICAgX2NodW5rID0gX2NodW5rLnN1YmFycmF5KDAsIG1heENodW5rU2l6ZSk7XG4gICAgICB9XG4gICAgICBwdXNoQ2h1bmsoX2NodW5rLCBjaHVua1JlbWFpbmRlciA/ICgpID0+IHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhfY2FsbGJhY2ssIG51bGwsIGNodW5rUmVtYWluZGVyKTtcbiAgICAgIH0gOiBfY2FsbGJhY2spO1xuICAgIH07XG4gICAgdHJhbnNmb3JtQ2h1bmsoY2h1bmssIGZ1bmN0aW9uIHRyYW5zZm9ybU5leHRDaHVuayhlcnIsIF9jaHVuaykge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgIH1cbiAgICAgIGlmIChfY2h1bmspIHtcbiAgICAgICAgdHJhbnNmb3JtQ2h1bmsoX2NodW5rLCB0cmFuc2Zvcm1OZXh0Q2h1bmspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3Qge1xuICBhc3luY0l0ZXJhdG9yXG59ID0gU3ltYm9sO1xuY29uc3QgcmVhZEJsb2IgPSBhc3luYyBmdW5jdGlvbiogKGJsb2IpIHtcbiAgaWYgKGJsb2Iuc3RyZWFtKSB7XG4gICAgeWllbGQqIGJsb2Iuc3RyZWFtKCk7XG4gIH0gZWxzZSBpZiAoYmxvYi5hcnJheUJ1ZmZlcikge1xuICAgIHlpZWxkIGF3YWl0IGJsb2IuYXJyYXlCdWZmZXIoKTtcbiAgfSBlbHNlIGlmIChibG9iW2FzeW5jSXRlcmF0b3JdKSB7XG4gICAgeWllbGQqIGJsb2JbYXN5bmNJdGVyYXRvcl0oKTtcbiAgfSBlbHNlIHtcbiAgICB5aWVsZCBibG9iO1xuICB9XG59O1xuXG5jb25zdCBCT1VOREFSWV9BTFBIQUJFVCA9IHBsYXRmb3JtLkFMUEhBQkVULkFMUEhBX0RJR0lUICsgJy1fJztcbmNvbnN0IHRleHRFbmNvZGVyID0gdHlwZW9mIFRleHRFbmNvZGVyID09PSAnZnVuY3Rpb24nID8gbmV3IFRleHRFbmNvZGVyKCkgOiBuZXcgdXRpbC5UZXh0RW5jb2RlcigpO1xuY29uc3QgQ1JMRiA9ICdcXHJcXG4nO1xuY29uc3QgQ1JMRl9CWVRFUyA9IHRleHRFbmNvZGVyLmVuY29kZShDUkxGKTtcbmNvbnN0IENSTEZfQllURVNfQ09VTlQgPSAyO1xuY2xhc3MgRm9ybURhdGFQYXJ0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCB7XG4gICAgICBlc2NhcGVOYW1lXG4gICAgfSA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgY29uc3QgaXNTdHJpbmdWYWx1ZSA9IHV0aWxzJDEuaXNTdHJpbmcodmFsdWUpO1xuICAgIGxldCBoZWFkZXJzID0gYENvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIiR7ZXNjYXBlTmFtZShuYW1lKX1cIiR7IWlzU3RyaW5nVmFsdWUgJiYgdmFsdWUubmFtZSA/IGA7IGZpbGVuYW1lPVwiJHtlc2NhcGVOYW1lKHZhbHVlLm5hbWUpfVwiYCA6ICcnfSR7Q1JMRn1gO1xuICAgIGlmIChpc1N0cmluZ1ZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IHRleHRFbmNvZGVyLmVuY29kZShTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1xccj9cXG58XFxyXFxuPy9nLCBDUkxGKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNhZmVUeXBlID0gU3RyaW5nKHZhbHVlLnR5cGUgfHwgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpLnJlcGxhY2UoL1tcXHJcXG5dL2csICcnKTtcbiAgICAgIGhlYWRlcnMgKz0gYENvbnRlbnQtVHlwZTogJHtzYWZlVHlwZX0ke0NSTEZ9YDtcbiAgICB9XG4gICAgdGhpcy5oZWFkZXJzID0gdGV4dEVuY29kZXIuZW5jb2RlKGhlYWRlcnMgKyBDUkxGKTtcbiAgICB0aGlzLmNvbnRlbnRMZW5ndGggPSBpc1N0cmluZ1ZhbHVlID8gdmFsdWUuYnl0ZUxlbmd0aCA6IHZhbHVlLnNpemU7XG4gICAgdGhpcy5zaXplID0gdGhpcy5oZWFkZXJzLmJ5dGVMZW5ndGggKyB0aGlzLmNvbnRlbnRMZW5ndGggKyBDUkxGX0JZVEVTX0NPVU5UO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG4gIGFzeW5jICplbmNvZGUoKSB7XG4gICAgeWllbGQgdGhpcy5oZWFkZXJzO1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlXG4gICAgfSA9IHRoaXM7XG4gICAgaWYgKHV0aWxzJDEuaXNUeXBlZEFycmF5KHZhbHVlKSkge1xuICAgICAgeWllbGQgdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHlpZWxkKiByZWFkQmxvYih2YWx1ZSk7XG4gICAgfVxuICAgIHlpZWxkIENSTEZfQllURVM7XG4gIH1cbiAgc3RhdGljIGVzY2FwZU5hbWUobmFtZSkge1xuICAgIHJldHVybiBTdHJpbmcobmFtZSkucmVwbGFjZSgvW1xcclxcblwiXS9nLCBtYXRjaCA9PiAoe1xuICAgICAgJ1xccic6ICclMEQnLFxuICAgICAgJ1xcbic6ICclMEEnLFxuICAgICAgJ1wiJzogJyUyMidcbiAgICB9KVttYXRjaF0pO1xuICB9XG59XG5jb25zdCBmb3JtRGF0YVRvU3RyZWFtID0gKGZvcm0sIGhlYWRlcnNIYW5kbGVyLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0YWcgPSAnZm9ybS1kYXRhLWJvdW5kYXJ5JyxcbiAgICBzaXplID0gMjUsXG4gICAgYm91bmRhcnkgPSB0YWcgKyAnLScgKyBwbGF0Zm9ybS5nZW5lcmF0ZVN0cmluZyhzaXplLCBCT1VOREFSWV9BTFBIQUJFVClcbiAgfSA9IG9wdGlvbnMgfHwge307XG4gIGlmICghdXRpbHMkMS5pc0Zvcm1EYXRhKGZvcm0pKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRm9ybURhdGEgaW5zdGFuY2UgcmVxdWlyZWQnKTtcbiAgfVxuICBpZiAoYm91bmRhcnkubGVuZ3RoIDwgMSB8fCBib3VuZGFyeS5sZW5ndGggPiA3MCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYm91bmRhcnkgbXVzdCBiZSAxLTcwIGNoYXJhY3RlcnMgbG9uZycpO1xuICB9XG4gIGNvbnN0IGJvdW5kYXJ5Qnl0ZXMgPSB0ZXh0RW5jb2Rlci5lbmNvZGUoJy0tJyArIGJvdW5kYXJ5ICsgQ1JMRik7XG4gIGNvbnN0IGZvb3RlckJ5dGVzID0gdGV4dEVuY29kZXIuZW5jb2RlKCctLScgKyBib3VuZGFyeSArICctLScgKyBDUkxGKTtcbiAgbGV0IGNvbnRlbnRMZW5ndGggPSBmb290ZXJCeXRlcy5ieXRlTGVuZ3RoO1xuICBjb25zdCBwYXJ0cyA9IEFycmF5LmZyb20oZm9ybS5lbnRyaWVzKCkpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgIGNvbnN0IHBhcnQgPSBuZXcgRm9ybURhdGFQYXJ0KG5hbWUsIHZhbHVlKTtcbiAgICBjb250ZW50TGVuZ3RoICs9IHBhcnQuc2l6ZTtcbiAgICByZXR1cm4gcGFydDtcbiAgfSk7XG4gIGNvbnRlbnRMZW5ndGggKz0gYm91bmRhcnlCeXRlcy5ieXRlTGVuZ3RoICogcGFydHMubGVuZ3RoO1xuICBjb250ZW50TGVuZ3RoID0gdXRpbHMkMS50b0Zpbml0ZU51bWJlcihjb250ZW50TGVuZ3RoKTtcbiAgY29uc3QgY29tcHV0ZWRIZWFkZXJzID0ge1xuICAgICdDb250ZW50LVR5cGUnOiBgbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9JHtib3VuZGFyeX1gXG4gIH07XG4gIGlmIChOdW1iZXIuaXNGaW5pdGUoY29udGVudExlbmd0aCkpIHtcbiAgICBjb21wdXRlZEhlYWRlcnNbJ0NvbnRlbnQtTGVuZ3RoJ10gPSBjb250ZW50TGVuZ3RoO1xuICB9XG4gIGhlYWRlcnNIYW5kbGVyICYmIGhlYWRlcnNIYW5kbGVyKGNvbXB1dGVkSGVhZGVycyk7XG4gIHJldHVybiBzdHJlYW0uUmVhZGFibGUuZnJvbShhc3luYyBmdW5jdGlvbiogKCkge1xuICAgIGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykge1xuICAgICAgeWllbGQgYm91bmRhcnlCeXRlcztcbiAgICAgIHlpZWxkKiBwYXJ0LmVuY29kZSgpO1xuICAgIH1cbiAgICB5aWVsZCBmb290ZXJCeXRlcztcbiAgfSgpKTtcbn07XG5cbmNsYXNzIFpsaWJIZWFkZXJUcmFuc2Zvcm1TdHJlYW0gZXh0ZW5kcyBzdHJlYW0uVHJhbnNmb3JtIHtcbiAgX190cmFuc2Zvcm0oY2h1bmssIGVuY29kaW5nLCBjYWxsYmFjaykge1xuICAgIHRoaXMucHVzaChjaHVuayk7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxuICBfdHJhbnNmb3JtKGNodW5rLCBlbmNvZGluZywgY2FsbGJhY2spIHtcbiAgICBpZiAoY2h1bmsubGVuZ3RoICE9PSAwKSB7XG4gICAgICB0aGlzLl90cmFuc2Zvcm0gPSB0aGlzLl9fdHJhbnNmb3JtO1xuXG4gICAgICAvLyBBZGQgRGVmYXVsdCBDb21wcmVzc2lvbiBoZWFkZXJzIGlmIG5vIHpsaWIgaGVhZGVycyBhcmUgcHJlc2VudFxuICAgICAgaWYgKGNodW5rWzBdICE9PSAxMjApIHtcbiAgICAgICAgLy8gSGV4OiA3OFxuICAgICAgICBjb25zdCBoZWFkZXIgPSBCdWZmZXIuYWxsb2MoMik7XG4gICAgICAgIGhlYWRlclswXSA9IDEyMDsgLy8gSGV4OiA3OFxuICAgICAgICBoZWFkZXJbMV0gPSAxNTY7IC8vIEhleDogOUNcbiAgICAgICAgdGhpcy5wdXNoKGhlYWRlciwgZW5jb2RpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9fdHJhbnNmb3JtKGNodW5rLCBlbmNvZGluZywgY2FsbGJhY2spO1xuICB9XG59XG5cbmNsYXNzIEh0dHAyU2Vzc2lvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNlc3Npb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgfVxuICBnZXRTZXNzaW9uKGF1dGhvcml0eSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIHtcbiAgICAgIHNlc3Npb25UaW1lb3V0OiAxMDAwXG4gICAgfSwgb3B0aW9ucyk7XG4gICAgbGV0IGF1dGhvcml0eVNlc3Npb25zID0gdGhpcy5zZXNzaW9uc1thdXRob3JpdHldO1xuICAgIGlmIChhdXRob3JpdHlTZXNzaW9ucykge1xuICAgICAgbGV0IGxlbiA9IGF1dGhvcml0eVNlc3Npb25zLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgW3Nlc3Npb25IYW5kbGUsIHNlc3Npb25PcHRpb25zXSA9IGF1dGhvcml0eVNlc3Npb25zW2ldO1xuICAgICAgICBpZiAoIXNlc3Npb25IYW5kbGUuZGVzdHJveWVkICYmICFzZXNzaW9uSGFuZGxlLmNsb3NlZCAmJiB1dGlsLmlzRGVlcFN0cmljdEVxdWFsKHNlc3Npb25PcHRpb25zLCBvcHRpb25zKSkge1xuICAgICAgICAgIHJldHVybiBzZXNzaW9uSGFuZGxlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNlc3Npb24gPSBodHRwMi5jb25uZWN0KGF1dGhvcml0eSwgb3B0aW9ucyk7XG4gICAgbGV0IHJlbW92ZWQ7XG4gICAgbGV0IHRpbWVyO1xuICAgIGNvbnN0IHJlbW92ZVNlc3Npb24gPSAoKSA9PiB7XG4gICAgICBpZiAocmVtb3ZlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgIGlmICh0aW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgICBsZXQgZW50cmllcyA9IGF1dGhvcml0eVNlc3Npb25zLFxuICAgICAgICBsZW4gPSBlbnRyaWVzLmxlbmd0aCxcbiAgICAgICAgaSA9IGxlbjtcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaWYgKGVudHJpZXNbaV1bMF0gPT09IHNlc3Npb24pIHtcbiAgICAgICAgICBpZiAobGVuID09PSAxKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZXNzaW9uc1thdXRob3JpdHldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbnRyaWVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFzZXNzaW9uLmNsb3NlZCkge1xuICAgICAgICAgICAgc2Vzc2lvbi5jbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9yaWdpbmFsUmVxdWVzdEZuID0gc2Vzc2lvbi5yZXF1ZXN0O1xuICAgIGNvbnN0IHtcbiAgICAgIHNlc3Npb25UaW1lb3V0XG4gICAgfSA9IG9wdGlvbnM7XG4gICAgaWYgKHNlc3Npb25UaW1lb3V0ICE9IG51bGwpIHtcbiAgICAgIGxldCBzdHJlYW1zQ291bnQgPSAwO1xuICAgICAgc2Vzc2lvbi5yZXF1ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBvcmlnaW5hbFJlcXVlc3RGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBzdHJlYW1zQ291bnQrKztcbiAgICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3RyZWFtLm9uY2UoJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgICAgIGlmICghIC0tc3RyZWFtc0NvdW50KSB7XG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0aW1lciA9IG51bGw7XG4gICAgICAgICAgICAgIHJlbW92ZVNlc3Npb24oKTtcbiAgICAgICAgICAgIH0sIHNlc3Npb25UaW1lb3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgICAgfTtcbiAgICB9XG4gICAgc2Vzc2lvbi5vbmNlKCdjbG9zZScsIHJlbW92ZVNlc3Npb24pO1xuICAgIHNlc3Npb24ub25jZSgnZXJyb3InLCByZW1vdmVTZXNzaW9uKTtcbiAgICBsZXQgZW50cnkgPSBbc2Vzc2lvbiwgb3B0aW9uc107XG4gICAgYXV0aG9yaXR5U2Vzc2lvbnMgPyBhdXRob3JpdHlTZXNzaW9ucy5wdXNoKGVudHJ5KSA6IGF1dGhvcml0eVNlc3Npb25zID0gdGhpcy5zZXNzaW9uc1thdXRob3JpdHldID0gW2VudHJ5XTtcbiAgICByZXR1cm4gc2Vzc2lvbjtcbiAgfVxufVxuXG5jb25zdCBjYWxsYmFja2lmeSA9IChmbiwgcmVkdWNlcikgPT4ge1xuICByZXR1cm4gdXRpbHMkMS5pc0FzeW5jRm4oZm4pID8gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBjYiA9IGFyZ3MucG9wKCk7XG4gICAgZm4uYXBwbHkodGhpcywgYXJncykudGhlbih2YWx1ZSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZWR1Y2VyID8gY2IobnVsbCwgLi4ucmVkdWNlcih2YWx1ZSkpIDogY2IobnVsbCwgdmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNiKGVycik7XG4gICAgICB9XG4gICAgfSwgY2IpO1xuICB9IDogZm47XG59O1xuXG5jb25zdCBMT09QQkFDS19IT1NUTkFNRVMgPSBuZXcgU2V0KFsnbG9jYWxob3N0JywgJzAuMC4wLjAnXSk7XG5jb25zdCB0cmltVHJhaWxpbmdEb3RzID0gdmFsdWUgPT4ge1xuICBsZXQgZW5kID0gdmFsdWUubGVuZ3RoO1xuICB3aGlsZSAoZW5kICYmIHZhbHVlLmNoYXJDb2RlQXQoZW5kIC0gMSkgPT09IDQ2KSB7XG4gICAgZW5kLS07XG4gIH1cbiAgcmV0dXJuIGVuZCA9PT0gdmFsdWUubGVuZ3RoID8gdmFsdWUgOiB2YWx1ZS5zbGljZSgwLCBlbmQpO1xufTtcbmNvbnN0IGlzSVB2NExvb3BiYWNrID0gaG9zdCA9PiB7XG4gIGNvbnN0IHBhcnRzID0gaG9zdC5zcGxpdCgnLicpO1xuICBpZiAocGFydHMubGVuZ3RoICE9PSA0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChwYXJ0c1swXSAhPT0gJzEyNycpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHBhcnRzLmV2ZXJ5KHAgPT4gL15cXGQrJC8udGVzdChwKSAmJiBOdW1iZXIocCkgPj0gMCAmJiBOdW1iZXIocCkgPD0gMjU1KTtcbn07XG5cbi8qKlxuICogQ2Fub25pY2FsaXplIGFuIElQdjQgYWRkcmVzcyB3cml0dGVuIGluIHNob3J0aGFuZCwgb2N0YWwsIG9yIGhleCBmb3JtIGludG9cbiAqIGRvdHRlZC1kZWNpbWFsLiBJUHY2IGFkZHJlc3NlcyBhbmQgbm9uLUlQIHN0cmluZ3MgYXJlIHJldHVybmVkIHVuY2hhbmdlZCBzb1xuICogdGhlIGV4aXN0aW5nIElQdjQtbWFwcGVkIElQdjYgdW5tYXAgcGF0aCBhbmQgdGhlIGlzTG9vcGJhY2sgcGF0aCBjYW4gc3RpbGxcbiAqIHNlZSB0aGVtLlxuICpcbiAqIFNob3J0aGFuZCBleHBhbnNpb24gbWlycm9ycyBOb2RlJ3MgVVJMIHBhcnNlcjogbGl0ZXJhbCBwYXJ0cyBmaWxsIGZyb20gdGhlXG4gKiBsZWZ0LCB0aGUgZmluYWwgcGFydCBmaWxscyB0aGUgcmVtYWluaW5nIG9jdGV0cyBmcm9tIHRoZSByaWdodCB3aXRoXG4gKiB6ZXJvLXBhZGRpbmcgb24gdGhlIGxlZnQuXG4gKiAgIDEyNy4xICAgICAtPiAxMjcuMC4wLjFcbiAqICAgMTI3LjAuMSAgIC0+IDEyNy4wLjAuMVxuICogICAxLjIuMyAgICAgLT4gMS4yLjAuM1xuICpcbiAqIEVhY2ggb2N0ZXQgaXMgcGFyc2VkIHdpdGggYW4gZXhwbGljaXQgYmFzZTogMTYgZm9yIGAweGAvYDBYYCBwcmVmaXgsIDggZm9yXG4gKiB6ZXJvLXByZWZpeGVkIG11bHRpLWRpZ2l0IGFsbC1gMC03YCBwYXJ0cywgMTAgb3RoZXJ3aXNlLiBaZXJvLXByZWZpeGVkXG4gKiBkZWNpbWFsLWxvb2tpbmcgcGFydHMgdGhhdCBjb250YWluIGA4YCBvciBgOWAgYXJlIHJlamVjdGVkIHRvIG1hdGNoIE5vZGUnc1xuICogVVJMIHBhcnNlciwgYW5kIHRoZSBjb21wYXJpc29uIGxheWVyIGZhbGxzIHRocm91Z2ggdG8gbm9uLWJ5cGFzcyBpZiBlaXRoZXJcbiAqIHNpZGUgcmVqZWN0cyB0aGUgZm9ybSAoZmFpbC1zYWZlKS5cbiAqXG4gKiBSZXR1cm5zIHRoZSBpbnB1dCB1bmNoYW5nZWQgb24gYW55IHBhcnNlIGZhaWx1cmUsIG91dC1vZi1yYW5nZSBvY3RldCwgb3JcbiAqIHVudXN1YWwgc2hhcGUgKDEtcGFydCwgNSsgcGFydHMpIHNvIHRoZSBjb21wYXJpc29uIGxheWVyIGZhaWxzIGNsb3NlZC5cbiAqL1xuY29uc3QgcGFyc2VJUHY0T2N0ZXQgPSB0ZXh0ID0+IHtcbiAgaWYgKC9eMFt4WF1bMC05YS1mQS1GXSskLy50ZXN0KHRleHQpKSB7XG4gICAgY29uc3QgbiA9IHBhcnNlSW50KHRleHQuc2xpY2UoMiksIDE2KTtcbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGw7XG4gIH1cbiAgaWYgKHRleHQubGVuZ3RoID4gMSAmJiAvXjBbMC03XSskLy50ZXN0KHRleHQpKSB7XG4gICAgY29uc3QgbiA9IHBhcnNlSW50KHRleHQsIDgpO1xuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBuIDogbnVsbDtcbiAgfVxuICBpZiAodGV4dC5sZW5ndGggPiAxICYmIC9eMFswLTldKyQvLnRlc3QodGV4dCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoL15bMC05XSskLy50ZXN0KHRleHQpKSB7XG4gICAgY29uc3QgbiA9IHBhcnNlSW50KHRleHQsIDEwKTtcbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG4pID8gbiA6IG51bGw7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuY29uc3Qgbm9ybWFsaXplSVBBZGRyZXNzID0gaG9zdCA9PiB7XG4gIGlmICh0eXBlb2YgaG9zdCAhPT0gJ3N0cmluZycgfHwgIWhvc3QgfHwgaG9zdC5pbmRleE9mKCc6JykgIT09IC0xKSB7XG4gICAgcmV0dXJuIGhvc3Q7XG4gIH1cbiAgbGV0IGggPSBob3N0O1xuICBpZiAoaC5jaGFyQXQoMCkgPT09ICdbJyAmJiBoLmNoYXJBdChoLmxlbmd0aCAtIDEpID09PSAnXScpIHtcbiAgICBoID0gaC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaCA9IHRyaW1UcmFpbGluZ0RvdHMoaCk7XG5cbiAgLy8gQWxsb3dlZCBjaGFyYWN0ZXJzIGZvciBhbnkgSVB2NCBzaGFwZTogZGlnaXRzLCBkb3QsICd4JywgJ1gnLCBoZXggZGlnaXRzLlxuICBpZiAoIS9eWzAtOS54WGEtZkEtRl0rJC8udGVzdChoKSkgcmV0dXJuIGhvc3Q7XG4gIGNvbnN0IHBhcnRzID0gaC5zcGxpdCgnLicpO1xuXG4gIC8vIE5vIHBhcnQgbWF5IGJlIGVtcHR5IChlLmcuIFwiMTI3Li4wLjFcIiBvciBcIjEyNy4wLjAuXCIpLiBUcmFpbGluZyBkb3RzIGFyZVxuICAvLyBhbHJlYWR5IHN0cmlwcGVkIGFib3ZlOyB0aGlzIGd1YXJkcyBhZ2FpbnN0IHRoZSBlbXB0eS1taWRkbGUgY2FzZS5cbiAgaWYgKHBhcnRzLnNvbWUocCA9PiBwID09PSAnJykpIHJldHVybiBob3N0O1xuICBpZiAocGFydHMubGVuZ3RoID09PSA0KSB7XG4gICAgLy8gRnVsbCBJUHY0IGZvcm06IGVhY2ggcGFydCBpcyBhbiBvY3RldC5cbiAgICBjb25zdCBvY3RldHMgPSBwYXJ0cy5tYXAocGFyc2VJUHY0T2N0ZXQpO1xuICAgIGlmIChvY3RldHMuc29tZShuID0+IG4gPT09IG51bGwgfHwgbiA8IDAgfHwgbiA+IDI1NSkpIHJldHVybiBob3N0O1xuICAgIHJldHVybiBvY3RldHMuam9pbignLicpO1xuICB9XG4gIGlmIChwYXJ0cy5sZW5ndGggPiA0KSB7XG4gICAgcmV0dXJuIGhvc3Q7XG4gIH1cblxuICAvLyBTaG9ydGhhbmQ6IDEuLjMgcGFydHMuIE5vZGUncyBVUkwgcGFyc2VyIHRyZWF0cyBhIDEtcGFydCBpbnB1dCBhcyBhIDMyLWJpdFxuICAvLyBpbnRlZ2VyIHNwbGl0IGludG8gb2N0ZXRzLCB3aGljaCBoYXMgc3VycHJpc2luZyBzZW1hbnRpY3MgKGUuZy4gXCIxMjdcIiAtPlxuICAvLyBcIjAuMC4wLjEyN1wiKS4gUmVqZWN0IDEtcGFydCBpbnB1dHMgdG8ga2VlcCB0aGUgaGVscGVyIHByZWRpY3RhYmxlOiB0aGVcbiAgLy8gZmFpbC1zYWZlIHJldHVybnMgdGhlIGlucHV0IHVuY2hhbmdlZCBhbmQgdGhlIGNvbXBhcmlzb24gbGF5ZXIgZmFsbHNcbiAgLy8gdGhyb3VnaCB0byBub24tYnlwYXNzLlxuICBpZiAocGFydHMubGVuZ3RoID09PSAxKSByZXR1cm4gaG9zdDtcblxuICAvLyAyLi4zIHBhcnRzOiBsaXRlcmFsIHBhcnRzIGZpbGwgZnJvbSB0aGUgbGVmdCwgdGFpbCBmaWxscyByZW1haW5pbmcgb2N0ZXRzXG4gIC8vIGZyb20gdGhlIHJpZ2h0IHdpdGggemVyby1wYWRkaW5nLlxuICBjb25zdCBsaXRlcmFsT2N0ZXRzID0gcGFydHMuc2xpY2UoMCwgLTEpO1xuICBjb25zdCB0YWlsID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gIGNvbnN0IHRhaWxTbG90cyA9IDQgLSBsaXRlcmFsT2N0ZXRzLmxlbmd0aDtcblxuICAvLyBUYWlsIGlzIHBhcnNlZCBhcyBhIGZ1bGwgSVB2NCBudW1iZXIgKGhleC9vY3RhbC9kZWNpbWFsKSBhbmQgcGFja2VkXG4gIC8vIGxvdy1ieXRlLXJpZ2h0IGludG8gdGhlIHJlbWFpbmluZyBvY3RldHMsIG1hdGNoaW5nIE5vZGUncyBVUkwgcGFyc2VyLlxuICAvLyBlLmcuIDEyNy42NTUzNSAodGFpbCAweEZGRkYgaW50byAzIHNsb3RzKSAtPiAxMjcuMC4yNTUuMjU1O1xuICAvLyAgICAgIDEyNy4weDAwZmYgKHRhaWwgMHhGRiBpbnRvIDMgc2xvdHMpIC0+IDEyNy4wLjAuMjU1O1xuICAvLyAgICAgIDEyNy4wLjY1NTM1ICh0YWlsIDB4RkZGRiBpbnRvIDIgc2xvdHMpIC0+IDEyNy4wLjI1NS4yNTUuXG4gIGNvbnN0IHRhaWxWYWx1ZSA9IHBhcnNlSVB2NE9jdGV0KHRhaWwpO1xuICBpZiAodGFpbFZhbHVlID09PSBudWxsKSByZXR1cm4gaG9zdDtcbiAgY29uc3QgbWF4VGFpbCA9ICgxIDw8IDggKiB0YWlsU2xvdHMpIC0gMTtcbiAgaWYgKHRhaWxWYWx1ZSA8IDAgfHwgdGFpbFZhbHVlID4gbWF4VGFpbCkgcmV0dXJuIGhvc3Q7XG4gIGNvbnN0IHRhaWxPY3RldHMgPSBuZXcgQXJyYXkodGFpbFNsb3RzKS5maWxsKDApO1xuICBmb3IgKGxldCBpID0gdGFpbFNsb3RzIC0gMSwgdiA9IHRhaWxWYWx1ZTsgaSA+PSAwOyBpLS0sIHYgPj49IDgpIHtcbiAgICB0YWlsT2N0ZXRzW2ldID0gdiAmIDB4ZmY7XG4gIH1cbiAgY29uc3QgbGl0ZXJhbCA9IGxpdGVyYWxPY3RldHMubWFwKHBhcnNlSVB2NE9jdGV0KTtcbiAgaWYgKGxpdGVyYWwuc29tZShuID0+IG4gPT09IG51bGwgfHwgbiA8IDAgfHwgbiA+IDI1NSkpIHJldHVybiBob3N0O1xuICByZXR1cm4gWy4uLmxpdGVyYWwsIC4uLnRhaWxPY3RldHNdLmpvaW4oJy4nKTtcbn07XG5jb25zdCBpc0lQdjZaZXJvR3JvdXAgPSBncm91cCA9PiAvXjB7MSw0fSQvLnRlc3QoZ3JvdXApO1xuXG4vLyBUaGUgdW5zcGVjaWZpZWQgYWRkcmVzcyAoSVB2NCAwLjAuMC4wIC8gSVB2NiA6OikgcmVzb2x2ZXMgdG8gdGhlIGxvY2FsIGhvc3Rcbi8vIGZvciBvdXRib3VuZCBjb25uZWN0aW9ucywgc28gdHJlYXQgaXQgYXMgbG9vcGJhY2stZXF1aXZhbGVudCBmb3IgTk9fUFJPWFlcbi8vIG1hdGNoaW5nLiAwLjAuMC4wIGlzIGNvdmVyZWQgYnkgTE9PUEJBQ0tfSE9TVE5BTUVTOyB0aGlzIGhhbmRsZXMgY29tcHJlc3NlZFxuLy8gYW5kIGZ1bGwgSVB2NiBhbGwtemVybyBmb3JtcyBzbyBib3RoIGZhbWlsaWVzIGJ5cGFzcyBzeW1tZXRyaWNhbGx5LlxuY29uc3QgaXNJUHY2VW5zcGVjaWZpZWQgPSBob3N0ID0+IHtcbiAgaWYgKGhvc3QgPT09ICc6OicpIHJldHVybiB0cnVlO1xuICBjb25zdCBjb21wcmVzc2lvbkluZGV4ID0gaG9zdC5pbmRleE9mKCc6OicpO1xuICBpZiAoY29tcHJlc3Npb25JbmRleCAhPT0gLTEpIHtcbiAgICBpZiAoY29tcHJlc3Npb25JbmRleCAhPT0gaG9zdC5sYXN0SW5kZXhPZignOjonKSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGxlZnQgPSBob3N0LnNsaWNlKDAsIGNvbXByZXNzaW9uSW5kZXgpO1xuICAgIGNvbnN0IHJpZ2h0ID0gaG9zdC5zbGljZShjb21wcmVzc2lvbkluZGV4ICsgMik7XG4gICAgY29uc3QgbGVmdEdyb3VwcyA9IGxlZnQgPyBsZWZ0LnNwbGl0KCc6JykgOiBbXTtcbiAgICBjb25zdCByaWdodEdyb3VwcyA9IHJpZ2h0ID8gcmlnaHQuc3BsaXQoJzonKSA6IFtdO1xuICAgIGNvbnN0IGV4cGxpY2l0R3JvdXBzID0gbGVmdEdyb3Vwcy5sZW5ndGggKyByaWdodEdyb3Vwcy5sZW5ndGg7XG4gICAgcmV0dXJuIGV4cGxpY2l0R3JvdXBzIDwgOCAmJiBsZWZ0R3JvdXBzLmV2ZXJ5KGlzSVB2Nlplcm9Hcm91cCkgJiYgcmlnaHRHcm91cHMuZXZlcnkoaXNJUHY2WmVyb0dyb3VwKTtcbiAgfVxuICBjb25zdCBncm91cHMgPSBob3N0LnNwbGl0KCc6Jyk7XG4gIHJldHVybiBncm91cHMubGVuZ3RoID09PSA4ICYmIGdyb3Vwcy5ldmVyeShpc0lQdjZaZXJvR3JvdXApO1xufTtcbmNvbnN0IGlzSVB2Nkxvb3BiYWNrID0gaG9zdCA9PiB7XG4gIC8vIENvbGxhcHNlIGFsbC16ZXJvIGdyb3VwczogYW55IGZvcm0gb2YgOjoxIC8gMDowOi4uLjowOjFcbiAgLy8gRmlyc3QsIHN0cmlwIGFueSBsZWFkaW5nIFwiOjpcIiBieSBub3JtYWxpc2luZyB3aXRoIFNldCBsb29rdXAgb2YgY29tbW9uIGZvcm1zLFxuICAvLyB0aGVuIGZhbGwgYmFjayB0byBzdHJ1Y3R1cmFsIGNoZWNrLlxuICBpZiAoaG9zdCA9PT0gJzo6MScpIHJldHVybiB0cnVlO1xuXG4gIC8vIENoZWNrIElQdjQtbWFwcGVkIElQdjYgbG9vcGJhY2s6IDo6ZmZmZjo8djQtbG9vcGJhY2s+IG9yIDo6ZmZmZjo8aGV4LXY0LWxvb3BiYWNrPlxuICAvLyBOb2RlJ3MgVVJMIHBhcnNlciBub3JtYWxpc2VzIDo6ZmZmZjoxMjcuMC4wLjEg4oaSIDo6ZmZmZjo3ZjAwOjFcbiAgY29uc3QgdjRNYXBwZWREb3R0ZWQgPSBob3N0Lm1hdGNoKC9eOjpmZmZmOihcXGQrXFwuXFxkK1xcLlxcZCtcXC5cXGQrKSQvaSk7XG4gIGlmICh2NE1hcHBlZERvdHRlZCkgcmV0dXJuIGlzSVB2NExvb3BiYWNrKHY0TWFwcGVkRG90dGVkWzFdKTtcbiAgY29uc3QgdjRNYXBwZWRIZXggPSBob3N0Lm1hdGNoKC9eOjpmZmZmOihbMC05YS1mXXsxLDR9KTooWzAtOWEtZl17MSw0fSkkL2kpO1xuICBpZiAodjRNYXBwZWRIZXgpIHtcbiAgICBjb25zdCBoaWdoID0gcGFyc2VJbnQodjRNYXBwZWRIZXhbMV0sIDE2KTtcbiAgICAvLyBIaWdoIDE2IGJpdHMgbXVzdCBzdGFydCB3aXRoIDEyNyAoMHg3Zikg4oCUIGkuZS4gMHg3ZjAwLi4weDdmZmZcbiAgICByZXR1cm4gaGlnaCA+PSAweDdmMDAgJiYgaGlnaCA8PSAweDdmZmY7XG4gIH1cblxuICAvLyBGdWxsLWZvcm0gOjoxIHZhcmlhbnRzOiBhbnkgbnVtYmVyIG9mIHplcm8gZ3JvdXBzIGZvbGxvd2VkIGJ5IHRyYWlsaW5nIDFcbiAgLy8gZS5nLiAwOjA6MDowOjA6MDowOjEsIDAwMDA6Li4uOjAwMDFcbiAgY29uc3QgZ3JvdXBzID0gaG9zdC5zcGxpdCgnOicpO1xuICBpZiAoZ3JvdXBzLmxlbmd0aCA9PT0gOCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICBpZiAoIS9eMCskLy50ZXN0KGdyb3Vwc1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIC9eMCoxJC8udGVzdChncm91cHNbN10pO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBpc0xvb3BiYWNrID0gaG9zdCA9PiB7XG4gIGlmICghaG9zdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoTE9PUEJBQ0tfSE9TVE5BTUVTLmhhcyhob3N0KSkgcmV0dXJuIHRydWU7XG4gIGlmIChpc0lQdjRMb29wYmFjayhob3N0KSkgcmV0dXJuIHRydWU7XG4gIGlmIChpc0lQdjZVbnNwZWNpZmllZChob3N0KSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBpc0lQdjZMb29wYmFjayhob3N0KTtcbn07XG5jb25zdCBERUZBVUxUX1BPUlRTID0ge1xuICBodHRwOiA4MCxcbiAgaHR0cHM6IDQ0MyxcbiAgd3M6IDgwLFxuICB3c3M6IDQ0MyxcbiAgZnRwOiAyMVxufTtcbmNvbnN0IHBhcnNlTm9Qcm94eUVudHJ5ID0gZW50cnkgPT4ge1xuICBsZXQgZW50cnlIb3N0ID0gZW50cnk7XG4gIGxldCBlbnRyeVBvcnQgPSAwO1xuICBpZiAoZW50cnlIb3N0LmNoYXJBdCgwKSA9PT0gJ1snKSB7XG4gICAgY29uc3QgYnJhY2tldEluZGV4ID0gZW50cnlIb3N0LmluZGV4T2YoJ10nKTtcbiAgICBpZiAoYnJhY2tldEluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3QgaG9zdCA9IGVudHJ5SG9zdC5zbGljZSgxLCBicmFja2V0SW5kZXgpO1xuICAgICAgY29uc3QgcmVzdCA9IGVudHJ5SG9zdC5zbGljZShicmFja2V0SW5kZXggKyAxKTtcbiAgICAgIGlmIChyZXN0LmNoYXJBdCgwKSA9PT0gJzonICYmIC9eXFxkKyQvLnRlc3QocmVzdC5zbGljZSgxKSkpIHtcbiAgICAgICAgZW50cnlQb3J0ID0gTnVtYmVyLnBhcnNlSW50KHJlc3Quc2xpY2UoMSksIDEwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbaG9zdCwgZW50cnlQb3J0XTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZmlyc3RDb2xvbiA9IGVudHJ5SG9zdC5pbmRleE9mKCc6Jyk7XG4gIGNvbnN0IGxhc3RDb2xvbiA9IGVudHJ5SG9zdC5sYXN0SW5kZXhPZignOicpO1xuICBpZiAoZmlyc3RDb2xvbiAhPT0gLTEgJiYgZmlyc3RDb2xvbiA9PT0gbGFzdENvbG9uICYmIC9eXFxkKyQvLnRlc3QoZW50cnlIb3N0LnNsaWNlKGxhc3RDb2xvbiArIDEpKSkge1xuICAgIGVudHJ5UG9ydCA9IE51bWJlci5wYXJzZUludChlbnRyeUhvc3Quc2xpY2UobGFzdENvbG9uICsgMSksIDEwKTtcbiAgICBlbnRyeUhvc3QgPSBlbnRyeUhvc3Quc2xpY2UoMCwgbGFzdENvbG9uKTtcbiAgfVxuICByZXR1cm4gW2VudHJ5SG9zdCwgZW50cnlQb3J0XTtcbn07XG5cbi8vIENvbnZlcnQgSVB2NC1tYXBwZWQgSVB2NiAoOjpmZmZmOjA6MC85NiBwcmVmaXgpIHRvIElQdjQgZG90dGVkIGZvcm0gc28gYm90aFxuLy8gc2lkZXMgb2YgYSBOT19QUk9YWSBjb21wYXJpc29uIHNlZSB0aGUgc2FtZSBjYW5vbmljYWwgYWRkcmVzcy4gV2l0aG91dCB0aGlzLFxuLy8gYE5PX1BST1hZPTE5Mi4xNjguMS41YCB3b3VsZCBub3QgbWF0Y2ggYSByZXF1ZXN0IHRvIGBodHRwOi8vWzo6ZmZmZjoxOTIuMTY4LjEuNV0vYFxuLy8gKE5vZGUncyBVUkwgcGFyc2VyIG5vcm1hbGlzZXMgdGhhdCB0byBgWzo6ZmZmZjpjMGE4OjEwNV1gKSwgYW5kIHZpY2UtdmVyc2EsXG4vLyBhbGxvd2luZyB0aGUgcHJveHktYnlwYXNzIHBvbGljeSB0byBiZSBjaXJjdW12ZW50ZWQgYnkgdXNpbmcgdGhlIGFsdGVybmF0ZVxuLy8gcmVwcmVzZW50YXRpb24uIFJldHVybnMgdGhlIGlucHV0IHVuY2hhbmdlZCB3aGVuIG5vdCBJUHY0LW1hcHBlZC5cbmNvbnN0IElQVjRfTUFQUEVEX0RPVFRFRF9SRSA9IC9eKD86Ojp8KD86MHsxLDR9Oil7MSw0fTp8KD86MHsxLDR9Oil7NX0pZmZmZjooXFxkK1xcLlxcZCtcXC5cXGQrXFwuXFxkKykkL2k7XG5jb25zdCBJUFY0X01BUFBFRF9IRVhfUkUgPSAvXig/Ojo6fCg/OjB7MSw0fTopezEsNH06fCg/OjB7MSw0fTopezV9KWZmZmY6KFswLTlhLWZdezEsNH0pOihbMC05YS1mXXsxLDR9KSQvaTtcbmNvbnN0IHVubWFwSVB2NE1hcHBlZElQdjYgPSBob3N0ID0+IHtcbiAgaWYgKHR5cGVvZiBob3N0ICE9PSAnc3RyaW5nJyB8fCBob3N0LmluZGV4T2YoJzonKSA9PT0gLTEpIHJldHVybiBob3N0O1xuICBjb25zdCBkb3R0ZWQgPSBob3N0Lm1hdGNoKElQVjRfTUFQUEVEX0RPVFRFRF9SRSk7XG4gIGlmIChkb3R0ZWQpIHJldHVybiBkb3R0ZWRbMV07XG4gIGNvbnN0IGhleCA9IGhvc3QubWF0Y2goSVBWNF9NQVBQRURfSEVYX1JFKTtcbiAgaWYgKGhleCkge1xuICAgIGNvbnN0IGhpZ2ggPSBwYXJzZUludChoZXhbMV0sIDE2KTtcbiAgICBjb25zdCBsb3cgPSBwYXJzZUludChoZXhbMl0sIDE2KTtcbiAgICByZXR1cm4gYCR7aGlnaCA+PiA4fS4ke2hpZ2ggJiAweGZmfS4ke2xvdyA+PiA4fS4ke2xvdyAmIDB4ZmZ9YDtcbiAgfVxuICByZXR1cm4gaG9zdDtcbn07XG5jb25zdCBJUFY0X09DVEVUX1JFID0gL14oPzowfFsxLTldXFxkezAsMn0pJC87XG5jb25zdCBpcHY0VG9CeXRlcyA9IGhvc3QgPT4ge1xuICBjb25zdCBwYXJ0cyA9IGhvc3Quc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHBhcnRzLmxlbmd0aCA9PT0gNCAmJiBwYXJ0cy5ldmVyeShwYXJ0ID0+IElQVjRfT0NURVRfUkUudGVzdChwYXJ0KSAmJiBOdW1iZXIocGFydCkgPD0gMjU1KSA/IHBhcnRzLm1hcChOdW1iZXIpIDogbnVsbDtcbn07XG5jb25zdCBJUFY2X0dST1VQX1JFID0gL15bMC05YS1mXXsxLDR9JC9pO1xuY29uc3QgaXB2NlRvQnl0ZXMgPSBob3N0ID0+IHtcbiAgY29uc3QgaGFsdmVzID0gaG9zdC5zcGxpdCgnOjonKTtcbiAgaWYgKGhhbHZlcy5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZ3JvdXBzID0gaGFsdmVzWzBdID8gaGFsdmVzWzBdLnNwbGl0KCc6JykgOiBbXTtcbiAgaWYgKGhhbHZlcy5sZW5ndGggPT09IDIpIHtcbiAgICBjb25zdCByZWFyID0gaGFsdmVzWzFdID8gaGFsdmVzWzFdLnNwbGl0KCc6JykgOiBbXTtcbiAgICBjb25zdCBtaXNzaW5nID0gOCAtIGdyb3Vwcy5sZW5ndGggLSByZWFyLmxlbmd0aDtcbiAgICBpZiAobWlzc2luZyA8IDEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBncm91cHMucHVzaCguLi5uZXcgQXJyYXkobWlzc2luZykuZmlsbCgnMCcpLCAuLi5yZWFyKTtcbiAgfVxuICBpZiAoZ3JvdXBzLmxlbmd0aCAhPT0gOCB8fCBncm91cHMuc29tZShncm91cCA9PiAhSVBWNl9HUk9VUF9SRS50ZXN0KGdyb3VwKSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gZ3JvdXBzLmZsYXRNYXAoZ3JvdXAgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGdyb3VwLCAxNik7XG4gICAgcmV0dXJuIFt2YWx1ZSA+PiA4ICYgMHhmZiwgdmFsdWUgJiAweGZmXTtcbiAgfSk7XG59O1xuY29uc3QgaXBUb0J5dGVzID0gaG9zdCA9PiB7XG4gIGlmICh0eXBlb2YgaG9zdCAhPT0gJ3N0cmluZycgfHwgIWhvc3QpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gaG9zdC5pbmRleE9mKCc6JykgIT09IC0xID8gaXB2NlRvQnl0ZXMoaG9zdCkgOiBpcHY0VG9CeXRlcyhob3N0KTtcbn07XG5jb25zdCBub3JtYWxpemVOb1Byb3h5SG9zdCA9IGhvc3RuYW1lID0+IHtcbiAgaWYgKCFob3N0bmFtZSkge1xuICAgIHJldHVybiBob3N0bmFtZTtcbiAgfVxuICBpZiAoaG9zdG5hbWUuY2hhckF0KDApID09PSAnWycgJiYgaG9zdG5hbWUuY2hhckF0KGhvc3RuYW1lLmxlbmd0aCAtIDEpID09PSAnXScpIHtcbiAgICBob3N0bmFtZSA9IGhvc3RuYW1lLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBjb25zdCB0cmltbWVkID0gdHJpbVRyYWlsaW5nRG90cyhob3N0bmFtZSk7XG5cbiAgLy8gSVB2NCBzaG9ydGhhbmQvb2N0YWwvaGV4IOKGkiBkb3R0ZWQtZGVjaW1hbDsgaGVscGVyIGlzIGEgbm8tb3AgZm9yIGlucHV0c1xuICAvLyBjb250YWluaW5nICc6JyAoSVB2NiBhbmQgSVB2NC1tYXBwZWQgSVB2Nikgc28gd2UgZmFsbCB0aHJvdWdoIHRvIHVubWFwLlxuICBjb25zdCBpcHY0ID0gbm9ybWFsaXplSVBBZGRyZXNzKHRyaW1tZWQpO1xuICBpZiAoaXB2NCAhPT0gdHJpbW1lZCkge1xuICAgIHJldHVybiBpcHY0O1xuICB9XG4gIHJldHVybiB1bm1hcElQdjRNYXBwZWRJUHY2KHRyaW1tZWQpO1xufTtcbmNvbnN0IG5vcm1hbGl6ZUNpZHJCYXNlID0gaW5wdXQgPT4ge1xuICBsZXQgYmFzZSA9IGlucHV0O1xuICBjb25zdCBzdGFydHNCcmFja2V0ID0gYmFzZS5jaGFyQXQoMCkgPT09ICdbJztcbiAgY29uc3QgZW5kc0JyYWNrZXQgPSBiYXNlLmNoYXJBdChiYXNlLmxlbmd0aCAtIDEpID09PSAnXSc7XG4gIGNvbnN0IGhhc0JyYWNrZXQgPSBiYXNlLmluY2x1ZGVzKCdbJykgfHwgYmFzZS5pbmNsdWRlcygnXScpO1xuICBpZiAoc3RhcnRzQnJhY2tldCB8fCBlbmRzQnJhY2tldCkge1xuICAgIGlmICghc3RhcnRzQnJhY2tldCB8fCAhZW5kc0JyYWNrZXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBiYXNlID0gYmFzZS5zbGljZSgxLCAtMSk7XG4gICAgaWYgKGJhc2UuaW5kZXhPZignOicpID09PSAtMSB8fCBiYXNlLmluY2x1ZGVzKCdbJykgfHwgYmFzZS5pbmNsdWRlcygnXScpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaGFzQnJhY2tldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICghYmFzZSB8fCBiYXNlLmNoYXJBdChiYXNlLmxlbmd0aCAtIDEpID09PSAnLicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB3YXNJUHY2ID0gYmFzZS5pbmRleE9mKCc6JykgIT09IC0xO1xuICBpZiAod2FzSVB2Nikge1xuICAgIHRyeSB7XG4gICAgICBiYXNlID0gbmV3IFVSTChgaHR0cDovL1ske2Jhc2V9XS9gKS5ob3N0bmFtZS5zbGljZSgxLCAtMSk7XG4gICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGJhc2UgPSBub3JtYWxpemVJUEFkZHJlc3MoYmFzZSk7XG4gICAgaWYgKCFpcHY0VG9CeXRlcyhiYXNlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgbm9ybWFsaXplZDogdW5tYXBJUHY0TWFwcGVkSVB2NihiYXNlKSxcbiAgICB3YXNJUHY2XG4gIH07XG59O1xuY29uc3QgQ0lEUl9FTlRSWV9SRSA9IC9eKC4rKVxcLygwfFsxLTldXFxkezAsMn0pJC87XG5jb25zdCBwYXJzZUNpZHJFbnRyeSA9IGVudHJ5ID0+IHtcbiAgaWYgKGVudHJ5LmluZGV4T2YoJy8nKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IG1hdGNoID0gQ0lEUl9FTlRSWV9SRS5leGVjKGVudHJ5KTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGxldCBwcmVmaXggPSBOdW1iZXIobWF0Y2hbMl0pO1xuICBjb25zdCBwYXJzZWRCYXNlID0gbm9ybWFsaXplQ2lkckJhc2UobWF0Y2hbMV0pO1xuICBpZiAoIXBhcnNlZEJhc2UpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB7XG4gICAgbm9ybWFsaXplZCxcbiAgICB3YXNJUHY2XG4gIH0gPSBwYXJzZWRCYXNlO1xuICBpZiAod2FzSVB2NiAmJiBub3JtYWxpemVkLmluZGV4T2YoJzonKSA9PT0gLTEpIHtcbiAgICBpZiAocHJlZml4IDwgOTYpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcmVmaXggLT0gOTY7XG4gIH1cbiAgY29uc3QgYnl0ZXMgPSBpcFRvQnl0ZXMobm9ybWFsaXplZCk7XG4gIGlmICghYnl0ZXMgfHwgcHJlZml4ID4gYnl0ZXMubGVuZ3RoICogOCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiB7XG4gICAgYnl0ZXMsXG4gICAgcHJlZml4XG4gIH07XG59O1xuY29uc3QgaXNJblN1Ym5ldCA9IChhZGRyZXNzQnl0ZXMsIG5ldHdvcmtCeXRlcywgcHJlZml4KSA9PiB7XG4gIGNvbnN0IGZ1bGxCeXRlcyA9IHByZWZpeCA+PiAzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1bGxCeXRlczsgaSsrKSB7XG4gICAgaWYgKGFkZHJlc3NCeXRlc1tpXSAhPT0gbmV0d29ya0J5dGVzW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGNvbnN0IHJlbWFpbmluZ0JpdHMgPSBwcmVmaXggJiA3O1xuICBpZiAocmVtYWluaW5nQml0cykge1xuICAgIGNvbnN0IG1hc2sgPSAweGZmIDw8IDggLSByZW1haW5pbmdCaXRzICYgMHhmZjtcbiAgICBpZiAoKGFkZHJlc3NCeXRlc1tmdWxsQnl0ZXNdICYgbWFzaykgIT09IChuZXR3b3JrQnl0ZXNbZnVsbEJ5dGVzXSAmIG1hc2spKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbmZ1bmN0aW9uIHNob3VsZEJ5cGFzc1Byb3h5KGxvY2F0aW9uKSB7XG4gIGxldCBwYXJzZWQ7XG4gIHRyeSB7XG4gICAgcGFyc2VkID0gbmV3IFVSTChsb2NhdGlvbik7XG4gIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgbm9Qcm94eSA9IChwcm9jZXNzLmVudi5ub19wcm94eSB8fCBwcm9jZXNzLmVudi5OT19QUk9YWSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgaWYgKCFub1Byb3h5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChub1Byb3h5ID09PSAnKicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBwb3J0ID0gTnVtYmVyLnBhcnNlSW50KHBhcnNlZC5wb3J0LCAxMCkgfHwgREVGQVVMVF9QT1JUU1twYXJzZWQucHJvdG9jb2wuc3BsaXQoJzonLCAxKVswXV0gfHwgMDtcbiAgY29uc3QgaG9zdG5hbWUgPSBub3JtYWxpemVOb1Byb3h5SG9zdChwYXJzZWQuaG9zdG5hbWUudG9Mb3dlckNhc2UoKSk7XG4gIGNvbnN0IGhvc3RuYW1lQnl0ZXMgPSBpcFRvQnl0ZXMoaG9zdG5hbWUpO1xuICByZXR1cm4gbm9Qcm94eS5zcGxpdCgvW1xccyxdKy8pLnNvbWUoZW50cnkgPT4ge1xuICAgIGlmICghZW50cnkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGVudHJ5ID09PSAnKicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBjaWRyID0gcGFyc2VDaWRyRW50cnkoZW50cnkpO1xuICAgIGlmIChjaWRyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBjaWRyICE9PSBudWxsICYmICEhaG9zdG5hbWVCeXRlcyAmJiBob3N0bmFtZUJ5dGVzLmxlbmd0aCA9PT0gY2lkci5ieXRlcy5sZW5ndGggJiYgaXNJblN1Ym5ldChob3N0bmFtZUJ5dGVzLCBjaWRyLmJ5dGVzLCBjaWRyLnByZWZpeCk7XG4gICAgfVxuICAgIGxldCBbZW50cnlIb3N0LCBlbnRyeVBvcnRdID0gcGFyc2VOb1Byb3h5RW50cnkoZW50cnkpO1xuICAgIGVudHJ5SG9zdCA9IG5vcm1hbGl6ZU5vUHJveHlIb3N0KGVudHJ5SG9zdCk7XG4gICAgaWYgKCFlbnRyeUhvc3QpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGVudHJ5UG9ydCAmJiBlbnRyeVBvcnQgIT09IHBvcnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGVudHJ5SG9zdC5jaGFyQXQoMCkgPT09ICcqJykge1xuICAgICAgZW50cnlIb3N0ID0gZW50cnlIb3N0LnNsaWNlKDEpO1xuICAgIH1cbiAgICBpZiAoZW50cnlIb3N0LmNoYXJBdCgwKSA9PT0gJy4nKSB7XG4gICAgICByZXR1cm4gaG9zdG5hbWUuZW5kc1dpdGgoZW50cnlIb3N0KTtcbiAgICB9XG4gICAgcmV0dXJuIGhvc3RuYW1lID09PSBlbnRyeUhvc3QgfHwgaXNMb29wYmFjayhob3N0bmFtZSkgJiYgaXNMb29wYmFjayhlbnRyeUhvc3QpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgZGF0YSBtYXhSYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gW3NhbXBsZXNDb3VudD0gMTBdXG4gKiBAcGFyYW0ge051bWJlcn0gW21pbj0gMTAwMF1cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gc3BlZWRvbWV0ZXIoc2FtcGxlc0NvdW50LCBtaW4pIHtcbiAgc2FtcGxlc0NvdW50ID0gc2FtcGxlc0NvdW50IHx8IDEwO1xuICBjb25zdCBieXRlcyA9IG5ldyBBcnJheShzYW1wbGVzQ291bnQpO1xuICBjb25zdCB0aW1lc3RhbXBzID0gbmV3IEFycmF5KHNhbXBsZXNDb3VudCk7XG4gIGxldCBoZWFkID0gMDtcbiAgbGV0IHRhaWwgPSAwO1xuICBsZXQgZmlyc3RTYW1wbGVUUztcbiAgbWluID0gbWluICE9PSB1bmRlZmluZWQgPyBtaW4gOiAxMDAwO1xuICByZXR1cm4gZnVuY3Rpb24gcHVzaChjaHVua0xlbmd0aCkge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgY29uc3Qgc3RhcnRlZEF0ID0gdGltZXN0YW1wc1t0YWlsXTtcbiAgICBpZiAoIWZpcnN0U2FtcGxlVFMpIHtcbiAgICAgIGZpcnN0U2FtcGxlVFMgPSBub3c7XG4gICAgfVxuICAgIGJ5dGVzW2hlYWRdID0gY2h1bmtMZW5ndGg7XG4gICAgdGltZXN0YW1wc1toZWFkXSA9IG5vdztcbiAgICBsZXQgaSA9IHRhaWw7XG4gICAgbGV0IGJ5dGVzQ291bnQgPSAwO1xuICAgIHdoaWxlIChpICE9PSBoZWFkKSB7XG4gICAgICBieXRlc0NvdW50ICs9IGJ5dGVzW2krK107XG4gICAgICBpID0gaSAlIHNhbXBsZXNDb3VudDtcbiAgICB9XG4gICAgaGVhZCA9IChoZWFkICsgMSkgJSBzYW1wbGVzQ291bnQ7XG4gICAgaWYgKGhlYWQgPT09IHRhaWwpIHtcbiAgICAgIHRhaWwgPSAodGFpbCArIDEpICUgc2FtcGxlc0NvdW50O1xuICAgIH1cbiAgICBpZiAobm93IC0gZmlyc3RTYW1wbGVUUyA8IG1pbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXNzZWQgPSBzdGFydGVkQXQgJiYgbm93IC0gc3RhcnRlZEF0O1xuICAgIHJldHVybiBwYXNzZWQgPyBNYXRoLnJvdW5kKGJ5dGVzQ291bnQgKiAxMDAwIC8gcGFzc2VkKSA6IHVuZGVmaW5lZDtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaHJvdHRsZSBkZWNvcmF0b3JcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge051bWJlcn0gZnJlcVxuICogQHJldHVybiB7QXJyYXk8RnVuY3Rpb24+fVxuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmbiwgZnJlcSkge1xuICBsZXQgdGltZXN0YW1wID0gMDtcbiAgbGV0IHRocmVzaG9sZCA9IDEwMDAgLyBmcmVxO1xuICBsZXQgbGFzdEFyZ3M7XG4gIGxldCB0aW1lcjtcbiAgY29uc3QgaW52b2tlID0gKGFyZ3MsIG5vdyA9IERhdGUubm93KCkpID0+IHtcbiAgICB0aW1lc3RhbXAgPSBub3c7XG4gICAgbGFzdEFyZ3MgPSBudWxsO1xuICAgIGlmICh0aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICB9XG4gICAgZm4oLi4uYXJncyk7XG4gIH07XG4gIGNvbnN0IHRocm90dGxlZCA9ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBwYXNzZWQgPSBub3cgLSB0aW1lc3RhbXA7XG4gICAgaWYgKHBhc3NlZCA+PSB0aHJlc2hvbGQpIHtcbiAgICAgIGludm9rZShhcmdzLCBub3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0QXJncyA9IGFyZ3M7XG4gICAgICBpZiAoIXRpbWVyKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgICAgIGludm9rZShsYXN0QXJncyk7XG4gICAgICAgIH0sIHRocmVzaG9sZCAtIHBhc3NlZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBmbHVzaCA9ICgpID0+IGxhc3RBcmdzICYmIGludm9rZShsYXN0QXJncyk7XG4gIGNvbnN0IGZsdXNoV2l0aCA9ICguLi5hcmdzKSA9PiBpbnZva2UoYXJncyk7XG4gIHJldHVybiBbdGhyb3R0bGVkLCBmbHVzaCwgZmx1c2hXaXRoXTtcbn1cblxuY29uc3QgcHJvZ3Jlc3NFdmVudFJlZHVjZXIgPSAobGlzdGVuZXIsIGlzRG93bmxvYWRTdHJlYW0sIGZyZXEgPSAzKSA9PiB7XG4gIGxldCBieXRlc05vdGlmaWVkID0gMDtcbiAgY29uc3QgX3NwZWVkb21ldGVyID0gc3BlZWRvbWV0ZXIoNTAsIDI1MCk7XG4gIHJldHVybiB0aHJvdHRsZShlID0+IHtcbiAgICBpZiAoIWUgfHwgIXV0aWxzJDEuaXNOdW1iZXIoZS5sb2FkZWQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhd0xvYWRlZCA9IGUubG9hZGVkO1xuICAgIGNvbnN0IHRvdGFsID0gZS5sZW5ndGhDb21wdXRhYmxlID8gZS50b3RhbCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBsb2FkZWQgPSBNYXRoLm1heCgwLCB0b3RhbCAhPSBudWxsID8gTWF0aC5taW4ocmF3TG9hZGVkLCB0b3RhbCkgOiByYXdMb2FkZWQpO1xuICAgIGNvbnN0IHByb2dyZXNzQnl0ZXMgPSBNYXRoLm1heCgwLCBsb2FkZWQgLSBieXRlc05vdGlmaWVkKTtcbiAgICBjb25zdCByYXRlID0gX3NwZWVkb21ldGVyKHByb2dyZXNzQnl0ZXMpO1xuICAgIGJ5dGVzTm90aWZpZWQgPSBNYXRoLm1heChieXRlc05vdGlmaWVkLCBsb2FkZWQpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBsb2FkZWQsXG4gICAgICB0b3RhbCxcbiAgICAgIHByb2dyZXNzOiB0b3RhbCA/IGxvYWRlZCAvIHRvdGFsIDogdW5kZWZpbmVkLFxuICAgICAgYnl0ZXM6IHByb2dyZXNzQnl0ZXMsXG4gICAgICByYXRlOiByYXRlID8gcmF0ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGVzdGltYXRlZDogcmF0ZSAmJiB0b3RhbCA/ICh0b3RhbCAtIGxvYWRlZCkgLyByYXRlIDogdW5kZWZpbmVkLFxuICAgICAgZXZlbnQ6IGUsXG4gICAgICBsZW5ndGhDb21wdXRhYmxlOiB0b3RhbCAhPSBudWxsLFxuICAgICAgW2lzRG93bmxvYWRTdHJlYW0gPyAnZG93bmxvYWQnIDogJ3VwbG9hZCddOiB0cnVlXG4gICAgfTtcbiAgICBsaXN0ZW5lcihkYXRhKTtcbiAgfSwgZnJlcSk7XG59O1xuY29uc3QgcHJvZ3Jlc3NFdmVudERlY29yYXRvciA9ICh0b3RhbCwgdGhyb3R0bGVkKSA9PiB7XG4gIGNvbnN0IGxlbmd0aENvbXB1dGFibGUgPSB0b3RhbCAhPSBudWxsO1xuICByZXR1cm4gW2xvYWRlZCA9PiB0aHJvdHRsZWRbMF0oe1xuICAgIGxlbmd0aENvbXB1dGFibGUsXG4gICAgdG90YWwsXG4gICAgbG9hZGVkXG4gIH0pLCB0aHJvdHRsZWRbMV1dO1xufTtcbmNvbnN0IGFzeW5jRGVjb3JhdG9yID0gKGZuLCBzY2hlZHVsZXIgPSB1dGlscyQxLmFzYXApID0+ICguLi5hcmdzKSA9PiBzY2hlZHVsZXIoKCkgPT4gZm4oLi4uYXJncykpO1xuXG4vKipcbiAqIEVzdGltYXRlIGRhdGE6IFVSTCBieXRlIGxlbmd0aHMgKndpdGhvdXQqIGFsbG9jYXRpbmcgbGFyZ2UgYnVmZmVycy5cbiAqIC0gRmV0Y2ggcGVyY2VudC1kZWNvZGVzIGEgYmFzZTY0IGJvZHkgYmVmb3JlIGRlY29kaW5nIGl0LlxuICogLSBOb2RlJ3MgQnVmZmVyLmZyb20oYm9keSwgJ2Jhc2U2NCcpIHNpemVzIGl0cyBiYWNraW5nIGFsbG9jYXRpb24gZnJvbSB0aGVcbiAqICAgcmF3IGJvZHksIGluY2x1ZGluZyBpZ25vcmVkIGNoYXJhY3RlcnMgYW5kIGNvbnRlbnQgYWZ0ZXIgcGFkZGluZy5cbiAqIC0gTm9uLWJhc2U2NCBkYXRhIGlzIHBlcmNlbnQtZGVjb2RlZCBhbmQgdGhlbiBlbmNvZGVkIGFzIFVURi04LlxuICovXG5jb25zdCBpc0hleERpZ2l0ID0gY2hhckNvZGUgPT4gY2hhckNvZGUgPj0gNDggJiYgY2hhckNvZGUgPD0gNTcgfHwgY2hhckNvZGUgPj0gNjUgJiYgY2hhckNvZGUgPD0gNzAgfHwgY2hhckNvZGUgPj0gOTcgJiYgY2hhckNvZGUgPD0gMTAyO1xuY29uc3QgaXNQZXJjZW50RW5jb2RlZEJ5dGUgPSAoc3RyLCBpLCBsZW4pID0+IGkgKyAyIDwgbGVuICYmIGlzSGV4RGlnaXQoc3RyLmNoYXJDb2RlQXQoaSArIDEpKSAmJiBpc0hleERpZ2l0KHN0ci5jaGFyQ29kZUF0KGkgKyAyKSk7XG5jb25zdCBoZXhWYWx1ZSA9IGNoYXJDb2RlID0+IGNoYXJDb2RlIDw9IDU3ID8gY2hhckNvZGUgLSA0OCA6IChjaGFyQ29kZSAmIDB4ZGYpIC0gNTU7XG5jb25zdCBpc0Jhc2U2NENoYXIgPSBjaGFyQ29kZSA9PiBjaGFyQ29kZSA+PSA2NSAmJiBjaGFyQ29kZSA8PSA5MCB8fFxuLy8gQS1aXG5jaGFyQ29kZSA+PSA5NyAmJiBjaGFyQ29kZSA8PSAxMjIgfHxcbi8vIGEtelxuY2hhckNvZGUgPj0gNDggJiYgY2hhckNvZGUgPD0gNTcgfHxcbi8vIDAtOVxuY2hhckNvZGUgPT09IDQzIHx8XG4vLyArXG5jaGFyQ29kZSA9PT0gNDcgfHxcbi8vIC9cbmNoYXJDb2RlID09PSA0NSB8fFxuLy8gLSAoYmFzZTY0dXJsKVxuY2hhckNvZGUgPT09IDk1OyAvLyBfIChiYXNlNjR1cmwpXG5cbmNvbnN0IGlzQmFzZTY0V2hpdGVzcGFjZSA9IGNoYXJDb2RlID0+IGNoYXJDb2RlID09PSA5IHx8IGNoYXJDb2RlID09PSAxMCB8fCBjaGFyQ29kZSA9PT0gMTIgfHwgY2hhckNvZGUgPT09IDEzIHx8IGNoYXJDb2RlID09PSAzMjtcbmNvbnN0IGJhc2U2NEJ5dGVzID0gc2lnbmlmaWNhbnQgPT4ge1xuICBjb25zdCBncm91cHMgPSBNYXRoLmZsb29yKHNpZ25pZmljYW50IC8gNCk7XG4gIGNvbnN0IHJlbWFpbmRlciA9IHNpZ25pZmljYW50ICUgNDtcbiAgcmV0dXJuIGdyb3VwcyAqIDMgKyAocmVtYWluZGVyID09PSAyID8gMSA6IHJlbWFpbmRlciA9PT0gMyA/IDIgOiAwKTtcbn07XG5cbi8vIEJ1ZmZlci5ieXRlTGVuZ3RoKGJvZHksICdiYXNlNjQnKSB1c2VzIHRoZSByYXcgc3RyaW5nIGxlbmd0aCBhcyBhbiBhbGxvY2F0aW9uXG4vLyB1cHBlciBib3VuZCBldmVuIHdoZW4gQnVmZmVyLmZyb20gbGF0ZXIgaWdub3JlcyBjaGFyYWN0ZXJzIG9yIHN0b3BzIGF0ICc9Jy5cbmNvbnN0IGVzdGltYXRlQmFzZTY0QnVmZmVyQWxsb2NhdGlvbiA9IGJvZHkgPT4ge1xuICBjb25zdCBsZW4gPSBib2R5Lmxlbmd0aDtcbiAgbGV0IHBhZGRpbmcgPSAwO1xuICBpZiAobGVuID4gMCAmJiBib2R5LmNoYXJDb2RlQXQobGVuIC0gMSkgPT09IDYxIC8qICc9JyAqLykge1xuICAgIHBhZGRpbmcrKztcbiAgICBpZiAobGVuID4gMSAmJiBib2R5LmNoYXJDb2RlQXQobGVuIC0gMikgPT09IDYxIC8qICc9JyAqLykge1xuICAgICAgcGFkZGluZysrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gTWF0aC5mbG9vcigobGVuIC0gcGFkZGluZykgKiAzIC8gNCk7XG59O1xuY29uc3QgZXN0aW1hdGVQZXJjZW50RGVjb2RlZEJhc2U2NEJ5dGVzID0gYm9keSA9PiB7XG4gIGNvbnN0IGxlbiA9IGJvZHkubGVuZ3RoO1xuICBsZXQgc2lnbmlmaWNhbnQgPSAwO1xuICBsZXQgcGFkZGluZyA9IDA7XG4gIGxldCBpbnZhbGlkID0gZmFsc2U7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBsZXQgY29kZSA9IGJvZHkuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gMzcgLyogJyUnICovICYmIGlzUGVyY2VudEVuY29kZWRCeXRlKGJvZHksIGksIGxlbikpIHtcbiAgICAgIGNvZGUgPSBoZXhWYWx1ZShib2R5LmNoYXJDb2RlQXQoaSArIDEpKSAqIDE2ICsgaGV4VmFsdWUoYm9keS5jaGFyQ29kZUF0KGkgKyAyKSk7XG4gICAgICBpICs9IDI7XG4gICAgfVxuICAgIGlmIChpc0Jhc2U2NFdoaXRlc3BhY2UoY29kZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNjEgLyogJz0nICovKSB7XG4gICAgICBwYWRkaW5nKys7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFpc0Jhc2U2NENoYXIoY29kZSkgfHwgcGFkZGluZyA+IDApIHtcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHNpZ25pZmljYW50Kys7XG4gIH1cblxuICAvLyBGZXRjaCByZWplY3RzIG1hbGZvcm1lZCBmb3JnaXZpbmctYmFzZTY0IGlucHV0LiBSZXR1cm5pbmcgdGhlIHJhdy1zaXplXG4gIC8vIGFsbG9jYXRpb24gYm91bmQga2VlcHMgdGhhdCBpbnZhbGlkIGlucHV0IGZyb20gYmVjb21pbmcgYSBwcmUtY2hlY2sgYnlwYXNzLlxuICBpZiAoaW52YWxpZCB8fCBwYWRkaW5nID4gMiB8fCBwYWRkaW5nID4gMCAmJiAoc2lnbmlmaWNhbnQgKyBwYWRkaW5nKSAlIDQgIT09IDAgfHwgc2lnbmlmaWNhbnQgJSA0ID09PSAxKSB7XG4gICAgcmV0dXJuIGVzdGltYXRlQmFzZTY0QnVmZmVyQWxsb2NhdGlvbihib2R5KTtcbiAgfVxuICByZXR1cm4gYmFzZTY0Qnl0ZXMoc2lnbmlmaWNhbnQpO1xufTtcbmNvbnN0IGVzdGltYXRlRGF0YVVSTEJ5dGVzID0gKHVybCwgZXN0aW1hdGVCYXNlNjQpID0+IHtcbiAgaWYgKCF1cmwgfHwgdHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHJldHVybiAwO1xuICBpZiAoIXVybC5zdGFydHNXaXRoKCdkYXRhOicpKSByZXR1cm4gMDtcbiAgY29uc3QgY29tbWEgPSB1cmwuaW5kZXhPZignLCcpO1xuICBpZiAoY29tbWEgPCAwKSByZXR1cm4gMDtcbiAgY29uc3QgbWV0YSA9IHVybC5zbGljZSg1LCBjb21tYSk7XG4gIGNvbnN0IGJvZHkgPSB1cmwuc2xpY2UoY29tbWEgKyAxKTtcbiAgY29uc3QgaXNCYXNlNjQgPSAvO2Jhc2U2NC9pLnRlc3QobWV0YSk7XG4gIGlmIChpc0Jhc2U2NCkge1xuICAgIHJldHVybiBlc3RpbWF0ZUJhc2U2NChib2R5KTtcbiAgfVxuXG4gIC8vIENvbXB1dGUgVVRGLTggYnl0ZSBsZW5ndGggZGlyZWN0bHkgZnJvbSBVVEYtMTYgY29kZSB1bml0cyB3aXRob3V0IGFsbG9jYXRpbmdcbiAgLy8gYSBieXRlIGJ1ZmZlciAoVGV4dEVuY29kZXIuZW5jb2RlIHdvdWxkIGRlZmVhdCB0aGUgRG9TIGd1YXJkIG9uIGxhcmdlIGJvZGllcykuXG4gIC8vIFZhbGlkICVYWCB0cmlwbGV0cyBjb3VudCBhcyBvbmUgZGVjb2RlZCBieXRlOyB0aGlzIG1hdGNoZXMgdGhlIGJ5dGVzIHRoYXRcbiAgLy8gZGVjb2RlVVJJQ29tcG9uZW50KGJvZHkpIHdvdWxkIHByb2R1Y2UgYmVmb3JlIEJ1ZmZlciByZS1lbmNvZGVzIHRoZSBzdHJpbmcuXG4gIGxldCBieXRlcyA9IDA7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBib2R5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYyA9IGJvZHkuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoYyA9PT0gMzcgLyogJyUnICovICYmIGlzUGVyY2VudEVuY29kZWRCeXRlKGJvZHksIGksIGxlbikpIHtcbiAgICAgIGJ5dGVzICs9IDE7XG4gICAgICBpICs9IDI7XG4gICAgfSBlbHNlIGlmIChjIDwgMHg4MCkge1xuICAgICAgYnl0ZXMgKz0gMTtcbiAgICB9IGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgYnl0ZXMgKz0gMjtcbiAgICB9IGVsc2UgaWYgKGMgPj0gMHhkODAwICYmIGMgPD0gMHhkYmZmICYmIGkgKyAxIDwgbGVuKSB7XG4gICAgICBjb25zdCBuZXh0ID0gYm9keS5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgIGlmIChuZXh0ID49IDB4ZGMwMCAmJiBuZXh0IDw9IDB4ZGZmZikge1xuICAgICAgICBieXRlcyArPSA0O1xuICAgICAgICBpKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBieXRlcyArPSAzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBieXRlcyArPSAzO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZXM7XG59O1xuXG4vKipcbiAqIEVzdGltYXRlIHRoZSBwZXJjZW50LWRlY29kZWQgcGF5bG9hZCBzaXplIHVzZWQgYnkgRmV0Y2ggZGF0YTogVVJMcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBlc3RpbWF0ZURhdGFVUkxEZWNvZGVkQnl0ZXModXJsKSB7XG4gIC8vIEZldGNoIHJlbW92ZXMgVVJMIGZyYWdtZW50cyBiZWZvcmUgcHJvY2Vzc2luZyBhIGRhdGE6IFVSTC5cbiAgY29uc3QgZnJhZ21lbnRJbmRleCA9IHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnID8gdXJsLmluZGV4T2YoJyMnKSA6IC0xO1xuICByZXR1cm4gZXN0aW1hdGVEYXRhVVJMQnl0ZXMoZnJhZ21lbnRJbmRleCA9PT0gLTEgPyB1cmwgOiB1cmwuc2xpY2UoMCwgZnJhZ21lbnRJbmRleCksIGVzdGltYXRlUGVyY2VudERlY29kZWRCYXNlNjRCeXRlcyk7XG59XG5cbi8qKlxuICogRXN0aW1hdGUgdGhlIEJ1ZmZlciBiYWNraW5nIGFsbG9jYXRpb24gdXNlZCBieSBOb2RlJ3MgcmF3IGJhc2U2NCBkZWNvZGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGVzdGltYXRlRGF0YVVSTEJ1ZmZlckFsbG9jYXRpb24odXJsKSB7XG4gIHJldHVybiBlc3RpbWF0ZURhdGFVUkxCeXRlcyh1cmwsIGVzdGltYXRlQmFzZTY0QnVmZmVyQWxsb2NhdGlvbik7XG59XG5cbmNvbnN0IHpsaWJPcHRpb25zID0ge1xuICBmbHVzaDogemxpYi5jb25zdGFudHMuWl9TWU5DX0ZMVVNILFxuICBmaW5pc2hGbHVzaDogemxpYi5jb25zdGFudHMuWl9TWU5DX0ZMVVNIXG59O1xuY29uc3QgYnJvdGxpT3B0aW9ucyA9IHtcbiAgZmx1c2g6IHpsaWIuY29uc3RhbnRzLkJST1RMSV9PUEVSQVRJT05fRkxVU0gsXG4gIGZpbmlzaEZsdXNoOiB6bGliLmNvbnN0YW50cy5CUk9UTElfT1BFUkFUSU9OX0ZMVVNIXG59O1xuY29uc3QgenN0ZE9wdGlvbnMgPSB7XG4gIGZsdXNoOiB6bGliLmNvbnN0YW50cy5aU1REX2VfZmx1c2gsXG4gIGZpbmlzaEZsdXNoOiB6bGliLmNvbnN0YW50cy5aU1REX2VfZmx1c2hcbn07XG5jb25zdCBpc0Jyb3RsaVN1cHBvcnRlZCA9IHV0aWxzJDEuaXNGdW5jdGlvbih6bGliLmNyZWF0ZUJyb3RsaURlY29tcHJlc3MpO1xuY29uc3QgaXNac3RkU3VwcG9ydGVkID0gdXRpbHMkMS5pc0Z1bmN0aW9uKHpsaWIuY3JlYXRlWnN0ZERlY29tcHJlc3MpO1xuY29uc3QgQUNDRVBUX0VOQ09ESU5HID0gJ2d6aXAsIGNvbXByZXNzLCBkZWZsYXRlJyArIChpc0Jyb3RsaVN1cHBvcnRlZCA/ICcsIGJyJyA6ICcnKTtcbmNvbnN0IEFDQ0VQVF9FTkNPRElOR19XSVRIX1pTVEQgPSBBQ0NFUFRfRU5DT0RJTkcgKyAoaXNac3RkU3VwcG9ydGVkID8gJywgenN0ZCcgOiAnJyk7XG5jb25zdCBzY2hlZHVsZVByb2dyZXNzID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MubmV4dFRpY2sgPyBwcm9jZXNzLm5leHRUaWNrLmJpbmQocHJvY2VzcykgOiB1dGlscyQxLmFzYXA7XG5jb25zdCB7XG4gIGh0dHA6IGh0dHBGb2xsb3csXG4gIGh0dHBzOiBodHRwc0ZvbGxvd1xufSA9IGZvbGxvd1JlZGlyZWN0cztcbmNvbnN0IGlzSHR0cHMgPSAvaHR0cHM6Py87XG5cbi8vIFN5bWJvbHMgdXNlZCB0byBiaW5kIGEgc2luZ2xlICdlcnJvcicgbGlzdGVuZXIgdG8gYSBwb29sZWQgc29ja2V0IGFuZCB0cmFja1xuLy8gdGhlIHJlcXVlc3QgY3VycmVudGx5IG93bmluZyB0aGF0IHNvY2tldCBhY3Jvc3Mga2VlcC1hbGl2ZSByZXVzZSAoaXNzdWUgIzEwNzgwKS5cbmNvbnN0IGtBeGlvc1NvY2tldExpc3RlbmVyID0gU3ltYm9sKCdheGlvcy5odHRwLnNvY2tldExpc3RlbmVyJyk7XG5jb25zdCBrQXhpb3NDdXJyZW50UmVxID0gU3ltYm9sKCdheGlvcy5odHRwLmN1cnJlbnRSZXEnKTtcblxuLy8gQSBzaGFyZWQgbGlzdGVuZXIgYXZvaWRzIHJldGFpbmluZyBhbiBhZGFwdGVyIGNvbnRleHQgZm9yIHRoZSBsaWZldGltZSBvZiBhXG4vLyBwb29sZWQgc29ja2V0LiBFdmVudEVtaXR0ZXIgaW52b2tlcyBsaXN0ZW5lcnMgd2l0aCBgdGhpc2Agc2V0IHRvIHRoZSBlbWl0dGVyLlxuZnVuY3Rpb24gaGFuZGxlU29ja2V0RXJyb3IoZXJyKSB7XG4gIGNvbnN0IGN1cnJlbnQgPSB0aGlzW2tBeGlvc0N1cnJlbnRSZXFdO1xuICBpZiAoY3VycmVudCAmJiAhY3VycmVudC5kZXN0cm95ZWQpIHtcbiAgICBjdXJyZW50LmRlc3Ryb3koZXJyKTtcbiAgfVxufVxuXG4vLyBUYWdzIEh0dHBzUHJveHlBZ2VudCBpbnN0YW5jZXMgaW5zdGFsbGVkIGJ5IHNldFByb3h5KCkgc28gdGhlIHJlZGlyZWN0IHBhdGhcbi8vIGNhbiBzdHJpcCB0aGVtIHdpdGhvdXQgY2xvYmJlcmluZyBhIHVzZXItc3VwcGxpZWQgYWdlbnQgdGhhdCBoYXBwZW5zIHRvIGJlXG4vLyBhbiBIdHRwc1Byb3h5QWdlbnQuXG5jb25zdCBrQXhpb3NJbnN0YWxsZWRUdW5uZWwgPSBTeW1ib2woJ2F4aW9zLmh0dHAuaW5zdGFsbGVkVHVubmVsJyk7XG5cbi8vIENhY2hlIG9mIENPTk5FQ1QtdHVubmVsaW5nIGFnZW50cyBrZXllZCBieSBwcm94eSBjb25maWcgc28gcmVwZWF0IHJlcXVlc3RzXG4vLyB0aHJvdWdoIHRoZSBzYW1lIHByb3h5IHJldXNlIGEgc2luZ2xlIGFnZW50IChhbmQgaXRzIHNvY2tldCBwb29sKS4gVGhlXG4vLyBrZXlzcGFjZSBpcyBib3VuZGVkIGJ5IHRoZSBzZXQgb2YgZGlzdGluY3QgcHJveHkgY29uZmlncyB0aGUgcHJvY2VzcyB1c2VzLFxuLy8gc28gdW5ib3VuZGVkIGdyb3d0aCBpcyBub3QgYSBjb25jZXJuIGluIHByYWN0aWNlLlxuY29uc3QgdHVubmVsaW5nQWdlbnRDYWNoZSA9IG5ldyBNYXAoKTtcbmNvbnN0IHR1bm5lbGluZ0FnZW50Q2FjaGVVc2VyID0gbmV3IFdlYWtNYXAoKTtcbi8vIE1pbmltdW0gbWlub3IgdmVyc2lvbnMgd2hlcmUgTm9kZSdzIEhUVFAgQWdlbnQgc3VwcG9ydHMgbmF0aXZlIHByb3h5RW52XG4vLyBoYW5kbGluZy4gQ2hlY2tpbmcgdGhlIHNlbGVjdGVkIGFnZW50IGJlbG93IGFsc28gY292ZXJzIHN0YXJ0dXAgbW9kZXMgc3VjaFxuLy8gYXMgTk9ERV9PUFRJT05TPS0tdXNlLWVudi1wcm94eSBhbmQgLS1uby11c2UtZW52LXByb3h5IHByZWNlZGVuY2UuXG5jb25zdCBOT0RFX05BVElWRV9FTlZfUFJPWFlfU1VQUE9SVCA9IHtcbiAgMjI6IDIxLFxuICAyNDogNVxufTtcbmZ1bmN0aW9uIGlzTm9kZU5hdGl2ZUVudlByb3h5U3VwcG9ydGVkKG5vZGVWZXJzaW9uID0gcHJvY2Vzcy52ZXJzaW9ucyAmJiBwcm9jZXNzLnZlcnNpb25zLm5vZGUpIHtcbiAgaWYgKCFub2RlVmVyc2lvbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBbbWFqb3IsIG1pbm9yXSA9IG5vZGVWZXJzaW9uLnNwbGl0KCcuJykubWFwKHBhcnQgPT4gTnVtYmVyKHBhcnQpKTtcbiAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKG1ham9yKSB8fCAhTnVtYmVyLmlzSW50ZWdlcihtaW5vcikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKG1ham9yID4gMjQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gTk9ERV9OQVRJVkVfRU5WX1BST1hZX1NVUFBPUlRbbWFqb3JdICE9IG51bGwgJiYgbWlub3IgPj0gTk9ERV9OQVRJVkVfRU5WX1BST1hZX1NVUFBPUlRbbWFqb3JdO1xufVxuZnVuY3Rpb24gaXNOb2RlRW52UHJveHlFbmFibGVkKGFnZW50LCBub2RlVmVyc2lvbiA9IHByb2Nlc3MudmVyc2lvbnMgJiYgcHJvY2Vzcy52ZXJzaW9ucy5ub2RlKSB7XG4gIGlmICghaXNOb2RlTmF0aXZlRW52UHJveHlTdXBwb3J0ZWQobm9kZVZlcnNpb24pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGFnZW50T3B0aW9ucyA9IGFnZW50ICYmIGFnZW50Lm9wdGlvbnM7XG4gIHJldHVybiBCb29sZWFuKGFnZW50T3B0aW9ucyAmJiB1dGlscyQxLmhhc093blByb3AoYWdlbnRPcHRpb25zLCAncHJveHlFbnYnKSAmJiBhZ2VudE9wdGlvbnMucHJveHlFbnYgIT0gbnVsbCk7XG59XG5mdW5jdGlvbiBnZXRQcm94eUVudkFnZW50KG9wdGlvbnMsIGNvbmZpZ0h0dHBBZ2VudCwgY29uZmlnSHR0cHNBZ2VudCkge1xuICByZXR1cm4gaXNIdHRwcy50ZXN0KG9wdGlvbnMucHJvdG9jb2wpID8gY29uZmlnSHR0cHNBZ2VudCB8fCBodHRwcy5nbG9iYWxBZ2VudCA6IGNvbmZpZ0h0dHBBZ2VudCB8fCBodHRwLmdsb2JhbEFnZW50O1xufVxuZnVuY3Rpb24gZ2V0VHVubmVsaW5nQWdlbnQoYWdlbnRPcHRpb25zLCB1c2VySHR0cHNBZ2VudCkge1xuICBjb25zdCBrZXkgPSBhZ2VudE9wdGlvbnMucHJvdG9jb2wgKyAnLy8nICsgYWdlbnRPcHRpb25zLmhvc3RuYW1lICsgJzonICsgKGFnZW50T3B0aW9ucy5wb3J0IHx8ICcnKSArICcjJyArIChhZ2VudE9wdGlvbnMuYXV0aCB8fCAnJyk7XG4gIGNvbnN0IGNhY2hlID0gdXNlckh0dHBzQWdlbnQgPyB0dW5uZWxpbmdBZ2VudENhY2hlVXNlci5nZXQodXNlckh0dHBzQWdlbnQpIHx8IHR1bm5lbGluZ0FnZW50Q2FjaGVVc2VyLnNldCh1c2VySHR0cHNBZ2VudCwgbmV3IE1hcCgpKS5nZXQodXNlckh0dHBzQWdlbnQpIDogdHVubmVsaW5nQWdlbnRDYWNoZTtcbiAgbGV0IGFnZW50ID0gY2FjaGUuZ2V0KGtleSk7XG4gIGlmIChhZ2VudCkgcmV0dXJuIGFnZW50O1xuICAvLyBGb3J3YXJkIHRoZSB1c2VyJ3MgVExTIG9wdGlvbnMgKGN1c3RvbSBDQSwgcmVqZWN0VW5hdXRob3JpemVkLCBjbGllbnQgY2VydCxcbiAgLy8gZXRjLikgaW50byB0aGUgdHVubmVsaW5nIGFnZW50IHNvIHRoZXkgYXBwbHkgdG8gdGhlIG9yaWdpbiBUTFMgdXBncmFkZVxuICAvLyBwZXJmb3JtZWQgYWZ0ZXIgQ09OTkVDVC4gT3VyIHByb3h5IGZpZWxkcyB0YWtlIHByZWNlZGVuY2Ugb24gY29uZmxpY3QuXG4gIGNvbnN0IG1lcmdlZCA9IHVzZXJIdHRwc0FnZW50ICYmIHVzZXJIdHRwc0FnZW50Lm9wdGlvbnMgPyB7XG4gICAgLi4udXNlckh0dHBzQWdlbnQub3B0aW9ucyxcbiAgICAuLi5hZ2VudE9wdGlvbnNcbiAgfSA6IGFnZW50T3B0aW9ucztcbiAgYWdlbnQgPSBuZXcgSHR0cHNQcm94eUFnZW50KG1lcmdlZCk7XG4gIGlmICh1c2VySHR0cHNBZ2VudCAmJiB1c2VySHR0cHNBZ2VudC5vcHRpb25zKSB7XG4gICAgY29uc3Qgb3JpZ2luVExTT3B0aW9ucyA9IHtcbiAgICAgIC4uLnVzZXJIdHRwc0FnZW50Lm9wdGlvbnNcbiAgICB9O1xuICAgIGNvbnN0IGNhbGxiYWNrID0gYWdlbnQuY2FsbGJhY2s7XG4gICAgYWdlbnQuY2FsbGJhY2sgPSBmdW5jdGlvbiBheGlvc1R1bm5lbGluZ0FnZW50Q2FsbGJhY2socmVxLCBvcHRzKSB7XG4gICAgICAvLyBIdHRwc1Byb3h5QWdlbnQgdjUgcmVhZHMgY2FsbGJhY2sgb3B0cyBmb3IgdGhlIHBvc3QtQ09OTkVDVCBvcmlnaW4gVExTIHVwZ3JhZGUuXG4gICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzLCByZXEsIHtcbiAgICAgICAgLi4ub3JpZ2luVExTT3B0aW9ucyxcbiAgICAgICAgLi4ub3B0c1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuICBhZ2VudFtrQXhpb3NJbnN0YWxsZWRUdW5uZWxdID0gdHJ1ZTtcbiAgY2FjaGUuc2V0KGtleSwgYWdlbnQpO1xuICByZXR1cm4gYWdlbnQ7XG59XG5jb25zdCBzdXBwb3J0ZWRQcm90b2NvbHMgPSBwbGF0Zm9ybS5wcm90b2NvbHMubWFwKHByb3RvY29sID0+IHtcbiAgcmV0dXJuIHByb3RvY29sICsgJzonO1xufSk7XG5cbi8vIE5vZGUncyBXSEFUV0cgVVJMIHBhcnNlciByZXR1cm5zIGB1c2VybmFtZWAgYW5kIGBwYXNzd29yZGAgcGVyY2VudC1lbmNvZGVkLlxuLy8gRGVjb2RlIGJlZm9yZSBjb21wb3NpbmcgdGhlIGBhdXRoYCBvcHRpb24gc28gY3JlZGVudGlhbHMgc3VjaCBhc1xuLy8gYG15JTQwZW1haWwuY29tOnBhc3NgIGFyZSBzZW50IGFzIGBteUBlbWFpbC5jb206cGFzc2AuIEZhbGxzIGJhY2sgdG8gdGhlXG4vLyBvcmlnaW5hbCB2YWx1ZSBmb3IgbWFsZm9ybWVkIGlucHV0IHNvIGEgYmFkIGVuY29kaW5nIG5ldmVyIHRocm93cy5cbmNvbnN0IGRlY29kZVVSSUNvbXBvbmVudFNhZmUkMSA9IHZhbHVlID0+IHtcbiAgaWYgKCF1dGlscyQxLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcbmNvbnN0IGZsdXNoT25GaW5pc2ggPSAoc3RyZWFtLCBbdGhyb3R0bGVkLCBmbHVzaF0pID0+IHtcbiAgc3RyZWFtLm9uKCdlbmQnLCBmbHVzaCkub24oJ2Vycm9yJywgZmx1c2gpO1xuICByZXR1cm4gdGhyb3R0bGVkO1xufTtcbmNvbnN0IGh0dHAyU2Vzc2lvbnMgPSBuZXcgSHR0cDJTZXNzaW9ucygpO1xuXG4vKipcbiAqIElmIHRoZSBwcm94eSwgYXV0aCwgc2Vuc2l0aXZlIGhlYWRlciwgb3IgY29uZmlnIGJlZm9yZVJlZGlyZWN0cyBmdW5jdGlvbnMgYXJlIGRlZmluZWQsXG4gKiBjYWxsIHRoZW0gd2l0aCB0aGUgb3B0aW9ucyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBhbnk+fSBvcHRpb25zIC0gVGhlIG9wdGlvbnMgb2JqZWN0IHRoYXQgd2FzIHBhc3NlZCB0byB0aGUgcmVxdWVzdC5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0PHN0cmluZywgYW55Pn1cbiAqL1xuZnVuY3Rpb24gZGlzcGF0Y2hCZWZvcmVSZWRpcmVjdChvcHRpb25zLCByZXNwb25zZURldGFpbHMsIHJlcXVlc3REZXRhaWxzKSB7XG4gIGlmIChvcHRpb25zLmJlZm9yZVJlZGlyZWN0cy5wcm94eSkge1xuICAgIG9wdGlvbnMuYmVmb3JlUmVkaXJlY3RzLnByb3h5KG9wdGlvbnMpO1xuICB9XG4gIGlmIChvcHRpb25zLmJlZm9yZVJlZGlyZWN0cy5hdXRoKSB7XG4gICAgb3B0aW9ucy5iZWZvcmVSZWRpcmVjdHMuYXV0aChvcHRpb25zKTtcbiAgfVxuICBpZiAob3B0aW9ucy5iZWZvcmVSZWRpcmVjdHMuc2Vuc2l0aXZlSGVhZGVycykge1xuICAgIG9wdGlvbnMuYmVmb3JlUmVkaXJlY3RzLnNlbnNpdGl2ZUhlYWRlcnMob3B0aW9ucywgcmVxdWVzdERldGFpbHMpO1xuICB9XG4gIGlmIChvcHRpb25zLmJlZm9yZVJlZGlyZWN0cy5jb25maWcpIHtcbiAgICBvcHRpb25zLmJlZm9yZVJlZGlyZWN0cy5jb25maWcob3B0aW9ucywgcmVzcG9uc2VEZXRhaWxzLCByZXF1ZXN0RGV0YWlscyk7XG4gIH1cbn1cbmZ1bmN0aW9uIHN0cmlwTWF0Y2hpbmdIZWFkZXJzKGhlYWRlcnMsIHNlbnNpdGl2ZVNldCkge1xuICBpZiAoIWhlYWRlcnMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgIGlmIChzZW5zaXRpdmVTZXQuaGFzKGhlYWRlci50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgZGVsZXRlIGhlYWRlcnNbaGVhZGVyXTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gaXNTYW1lT3JpZ2luUmVkaXJlY3QocmVkaXJlY3RPcHRpb25zLCByZXF1ZXN0RGV0YWlscykge1xuICBpZiAoIXJlcXVlc3REZXRhaWxzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBVUkwocmVxdWVzdERldGFpbHMudXJsKS5vcmlnaW4gPT09IG5ldyBVUkwocmVkaXJlY3RPcHRpb25zLmhyZWYpLm9yaWdpbjtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIElmIG9yaWdpbiBjb21wYXJpc29uIGZhaWxzLCB0cmVhdCB0aGUgcmVkaXJlY3QgYXMgdW5zYWZlLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIElmIHRoZSBwcm94eSBvciBjb25maWcgYWZ0ZXJSZWRpcmVjdHMgZnVuY3Rpb25zIGFyZSBkZWZpbmVkLCBjYWxsIHRoZW0gd2l0aCB0aGUgb3B0aW9uc1xuICpcbiAqIEBwYXJhbSB7aHR0cC5DbGllbnRSZXF1ZXN0QXJnc30gb3B0aW9uc1xuICogQHBhcmFtIHtBeGlvc1Byb3h5Q29uZmlnfSBjb25maWdQcm94eSBjb25maWd1cmF0aW9uIGZyb20gQXhpb3Mgb3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvblxuICogQHBhcmFtIHtib29sZWFufSBbYWxsb3dFbnZQcm94eT10cnVlXSB3aGV0aGVyIGVudmlyb25tZW50IHByb3h5IGNvbmZpZ3VyYXRpb24gY2FuIGJlIHVzZWRcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciBhIHByb3h5IGFwcGxpZXMgdG8gdGhlIHNlbGVjdGVkIHRyYW5zcG9ydFxuICovXG5mdW5jdGlvbiBzZXRQcm94eShvcHRpb25zLCBjb25maWdQcm94eSwgbG9jYXRpb24sIGlzUmVkaXJlY3QsIGNvbmZpZ0h0dHBzQWdlbnQsIGNvbmZpZ0h0dHBBZ2VudCwgYWxsb3dFbnZQcm94eSA9IHRydWUpIHtcbiAgbGV0IHByb3h5ID0gY29uZmlnUHJveHk7XG4gIGNvbnN0IHByb3h5RW52QWdlbnQgPSBnZXRQcm94eUVudkFnZW50KG9wdGlvbnMsIGNvbmZpZ0h0dHBBZ2VudCwgY29uZmlnSHR0cHNBZ2VudCk7XG4gIGlmICghcHJveHkgJiYgcHJveHkgIT09IGZhbHNlICYmIGFsbG93RW52UHJveHkgJiYgIWlzTm9kZUVudlByb3h5RW5hYmxlZChwcm94eUVudkFnZW50KSkge1xuICAgIGNvbnN0IHByb3h5VXJsID0gZ2V0UHJveHlGb3JVcmwobG9jYXRpb24pO1xuICAgIGlmIChwcm94eVVybCkge1xuICAgICAgaWYgKCFzaG91bGRCeXBhc3NQcm94eShsb2NhdGlvbikpIHtcbiAgICAgICAgcHJveHkgPSBuZXcgVVJMKHByb3h5VXJsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gT24gcmVkaXJlY3QgcmUtaW52b2NhdGlvbiwgc3RyaXAgYW55IHN0YWxlIFByb3h5LUF1dGhvcml6YXRpb24gaGVhZGVyIGNhcnJpZWRcbiAgLy8gb3ZlciBmcm9tIHRoZSBwcmlvciByZXF1ZXN0IChlLmcuIG5ldyB0YXJnZXQgbm8gbG9uZ2VyIHVzZXMgYSBwcm94eSwgb3IgdXNlc1xuICAvLyBhIGRpZmZlcmVudCBwcm94eSkuIFNraXAgb24gdGhlIGluaXRpYWwgcmVxdWVzdCBzbyB1c2VyLXN1cHBsaWVkIGhlYWRlcnMgYXJlXG4gIC8vIHByZXNlcnZlZC4gSGVhZGVyIG5hbWVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlLCBzbyByZW1vdmUgZXZlcnkgY2FzZSB2YXJpYW50LlxuICBpZiAoaXNSZWRpcmVjdCAmJiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKSkge1xuICAgICAgaWYgKG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3Byb3h5LWF1dGhvcml6YXRpb24nKSB7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmhlYWRlcnNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIFN0cmlwIGFueSB0dW5uZWxpbmcgYWdlbnQgd2UgaW5zdGFsbGVkIGZvciB0aGUgcHJldmlvdXMgaG9wIHNvIGEgcmVkaXJlY3RcbiAgLy8gdGhhdCBkcm9wcyB0aGUgcHJveHkgb3IgY3Jvc3NlcyBhbiBIVFRQU+KGlEhUVFAgYm91bmRhcnkgZG9lc24ndCByZXVzZSBhXG4gIC8vIHN0YWxlIG9uZS4gTWF0Y2ggb24gb3VyIFN5bWJvbCBtYXJrZXIgc28gYSB1c2VyLXN1cHBsaWVkIEh0dHBzUHJveHlBZ2VudFxuICAvLyAod2hpY2ggd29uJ3QgY2FycnkgdGhlIG1hcmtlcikgaXMgbGVmdCBhbG9uZS5cbiAgaWYgKGlzUmVkaXJlY3QgJiYgb3B0aW9ucy5hZ2VudCAmJiBvcHRpb25zLmFnZW50W2tBeGlvc0luc3RhbGxlZFR1bm5lbF0pIHtcbiAgICBvcHRpb25zLmFnZW50ID0gdW5kZWZpbmVkO1xuICB9XG4gIGlmIChwcm94eSkge1xuICAgIC8vIFJlYWQgcHJveHkgZmllbGRzIHdpdGhvdXQgdHJhdmVyc2luZyB0aGUgcHJvdG90eXBlIGNoYWluLiBVUkwgaW5zdGFuY2VzIGV4cG9zZVxuICAgIC8vIHVzZXJuYW1lL3Bhc3N3b3JkL2hvc3RuYW1lL2hvc3QvcG9ydC9wcm90b2NvbCB2aWEgZ2V0dGVycyBvbiBVUkwucHJvdG90eXBlIChzb1xuICAgIC8vIGRpcmVjdCByZWFkcyBhcmUgc2hpZWxkZWQpLCBidXQgcGxhaW4gb2JqZWN0IHByb3hpZXMg4oCUIGFuZCB0aGUgYGF1dGhgIGZpZWxkXG4gICAgLy8gKHdoaWNoIFVSTCBkb2VzIG5vdCBleHBvc2UpIOKAlCBtdXN0IGJlIGd1YXJkZWQgc28gYSBwb2xsdXRlZCBPYmplY3QucHJvdG90eXBlXG4gICAgLy8gKGUuZy4gT2JqZWN0LnByb3RvdHlwZS5hdXRoID0geyB1c2VybmFtZSwgcGFzc3dvcmQgfSkgY2Fubm90IGluamVjdFxuICAgIC8vIGF0dGFja2VyLWNvbnRyb2xsZWQgY3JlZGVudGlhbHMgaW50byB0aGUgUHJveHktQXV0aG9yaXphdGlvbiBoZWFkZXIgb3JcbiAgICAvLyByZWRpcmVjdCBwcm94eWluZyB0byBhbiBhdHRhY2tlci1jb250cm9sbGVkIGhvc3QuXG4gICAgY29uc3QgaXNQcm94eVVSTCA9IHByb3h5IGluc3RhbmNlb2YgVVJMO1xuICAgIGNvbnN0IHJlYWRQcm94eUZpZWxkID0ga2V5ID0+IGlzUHJveHlVUkwgfHwgdXRpbHMkMS5oYXNPd25Qcm9wKHByb3h5LCBrZXkpID8gcHJveHlba2V5XSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwcm94eVVzZXJuYW1lID0gcmVhZFByb3h5RmllbGQoJ3VzZXJuYW1lJyk7XG4gICAgY29uc3QgcHJveHlQYXNzd29yZCA9IHJlYWRQcm94eUZpZWxkKCdwYXNzd29yZCcpO1xuICAgIGxldCBwcm94eUF1dGggPSB1dGlscyQxLmhhc093blByb3AocHJveHksICdhdXRoJykgPyBwcm94eS5hdXRoIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gQmFzaWMgcHJveHkgYXV0aG9yaXphdGlvblxuICAgIGlmIChwcm94eVVzZXJuYW1lKSB7XG4gICAgICBwcm94eUF1dGggPSAocHJveHlVc2VybmFtZSB8fCAnJykgKyAnOicgKyAocHJveHlQYXNzd29yZCB8fCAnJyk7XG4gICAgfVxuICAgIGlmIChwcm94eUF1dGgpIHtcbiAgICAgIC8vIFN1cHBvcnQgcHJveHkgYXV0aCBvYmplY3QgZm9ybS4gUmVhZCBzdWItZmllbGRzIHZpYSBvd24tcHJvcCBjaGVja3Mgc28gYVxuICAgICAgLy8gcGxhaW4gb2JqZWN0IGluaGVyaXRpbmcgZnJvbSBwb2xsdXRlZCBPYmplY3QucHJvdG90eXBlIGNhbm5vdCBsZWFrIGNyZWRzLlxuICAgICAgY29uc3QgYXV0aElzT2JqZWN0ID0gdHlwZW9mIHByb3h5QXV0aCA9PT0gJ29iamVjdCc7XG4gICAgICBjb25zdCBhdXRoVXNlcm5hbWUgPSBhdXRoSXNPYmplY3QgJiYgdXRpbHMkMS5oYXNPd25Qcm9wKHByb3h5QXV0aCwgJ3VzZXJuYW1lJykgPyBwcm94eUF1dGgudXNlcm5hbWUgOiB1bmRlZmluZWQ7XG4gICAgICBjb25zdCBhdXRoUGFzc3dvcmQgPSBhdXRoSXNPYmplY3QgJiYgdXRpbHMkMS5oYXNPd25Qcm9wKHByb3h5QXV0aCwgJ3Bhc3N3b3JkJykgPyBwcm94eUF1dGgucGFzc3dvcmQgOiB1bmRlZmluZWQ7XG4gICAgICBjb25zdCB2YWxpZFByb3h5QXV0aCA9IEJvb2xlYW4oYXV0aFVzZXJuYW1lIHx8IGF1dGhQYXNzd29yZCk7XG4gICAgICBpZiAodmFsaWRQcm94eUF1dGgpIHtcbiAgICAgICAgcHJveHlBdXRoID0gKGF1dGhVc2VybmFtZSB8fCAnJykgKyAnOicgKyAoYXV0aFBhc3N3b3JkIHx8ICcnKTtcbiAgICAgIH0gZWxzZSBpZiAoYXV0aElzT2JqZWN0KSB7XG4gICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdJbnZhbGlkIHByb3h5IGF1dGhvcml6YXRpb24nLCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OLCB7XG4gICAgICAgICAgcHJveHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldElzSHR0cHMgPSBpc0h0dHBzLnRlc3Qob3B0aW9ucy5wcm90b2NvbCk7XG4gICAgaWYgKHRhcmdldElzSHR0cHMpIHtcbiAgICAgIC8vIENPTk5FQ1QtdHVubmVsaW5nIHBhdGggZm9yIEhUVFBTIHRhcmdldHMuIFByZXNlcnZlcyBlbmQtdG8tZW5kIFRMUyB0b1xuICAgICAgLy8gdGhlIG9yaWdpbiBzbyB0aGUgcHJveHkgY2Fubm90IGluc3BlY3QgdGhlIFVSTCwgaGVhZGVycywgb3IgYm9keSDigJQgdGhlXG4gICAgICAvLyBiZWhhdmlvciBhbHJlYWR5IHByb21pc2VkIGJ5IFRIUkVBVE1PREVMLm1kIChULVI5KS4gSHR0cHNQcm94eUFnZW50XG4gICAgICAvLyBzZW5kcyBQcm94eS1BdXRob3JpemF0aW9uIG9uIHRoZSBDT05ORUNUIHJlcXVlc3Qgb25seSwgbmV2ZXIgb24gdGhlXG4gICAgICAvLyB3cmFwcGVkIFRMUyByZXF1ZXN0LCB3aGljaCBpcyB3aHkgd2UgZG9uJ3Qgc3RhbXAgaXQgb250b1xuICAgICAgLy8gb3B0aW9ucy5oZWFkZXJzIGhlcmUuIElmIHRoZSB1c2VyIGFscmVhZHkgc3VwcGxpZWQgYW4gSHR0cHNQcm94eUFnZW50LFxuICAgICAgLy8gdGhleSBvd24gdHVubmVsaW5nIGVuZC10by1lbmQgYW5kIHdlIGxlYXZlIHRoZW0gYWxvbmU7IG90aGVyd2lzZSB3ZVxuICAgICAgLy8gaW5zdGFsbCBvdXIgb3duIHR1bm5lbGluZyBhZ2VudCBhbmQgZm9yd2FyZCB0aGVpciBUTFMgb3B0aW9ucyAoaWYgYW55KVxuICAgICAgLy8gc28gYSBjdXN0b20gaHR0cHNBZ2VudCBmb3IgY2VydCBwaW5uaW5nIC8gcmVqZWN0VW5hdXRob3JpemVkIHN0aWxsXG4gICAgICAvLyBhcHBsaWVzIHRvIHRoZSBvcmlnaW4gVExTIHVwZ3JhZGUuXG4gICAgICBpZiAoIShjb25maWdIdHRwc0FnZW50IGluc3RhbmNlb2YgSHR0cHNQcm94eUFnZW50KSkge1xuICAgICAgICBjb25zdCBwcm94eUhvc3QgPSByZWFkUHJveHlGaWVsZCgnaG9zdG5hbWUnKSB8fCByZWFkUHJveHlGaWVsZCgnaG9zdCcpO1xuICAgICAgICBjb25zdCBwcm94eVBvcnQgPSByZWFkUHJveHlGaWVsZCgncG9ydCcpO1xuICAgICAgICBjb25zdCByYXdQcm94eVByb3RvY29sID0gcmVhZFByb3h5RmllbGQoJ3Byb3RvY29sJyk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRQcm90b2NvbCA9IHJhd1Byb3h5UHJvdG9jb2wgPyByYXdQcm94eVByb3RvY29sLmluY2x1ZGVzKCc6JykgPyByYXdQcm94eVByb3RvY29sIDogYCR7cmF3UHJveHlQcm90b2NvbH06YCA6ICdodHRwOic7XG4gICAgICAgIC8vIEJyYWNrZXQgSVB2NiBsaXRlcmFscyBmb3IgVVJMIHBhcnNpbmc7IFVSTC5ob3N0bmFtZSBzdHJpcHMgdGhlXG4gICAgICAgIC8vIGJyYWNrZXRzIGFnYWluIG9uIHJlYWQgc28gdGhlIGFnZW50IHJlY2VpdmVzIHRoZSByYXcgZm9ybS5cbiAgICAgICAgY29uc3QgcHJveHlIb3N0Rm9yVVJMID0gcHJveHlIb3N0ICYmIHByb3h5SG9zdC5pbmNsdWRlcygnOicpICYmICFwcm94eUhvc3Quc3RhcnRzV2l0aCgnWycpID8gYFske3Byb3h5SG9zdH1dYCA6IHByb3h5SG9zdDtcbiAgICAgICAgY29uc3QgcHJveHlVUkwgPSBuZXcgVVJMKGAke25vcm1hbGl6ZWRQcm90b2NvbH0vLyR7cHJveHlIb3N0Rm9yVVJMfSR7cHJveHlQb3J0ID8gJzonICsgcHJveHlQb3J0IDogJyd9YCk7XG4gICAgICAgIGNvbnN0IGFnZW50T3B0aW9ucyA9IHtcbiAgICAgICAgICBwcm90b2NvbDogcHJveHlVUkwucHJvdG9jb2wsXG4gICAgICAgICAgaG9zdG5hbWU6IHByb3h5VVJMLmhvc3RuYW1lLnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyksXG4gICAgICAgICAgcG9ydDogcHJveHlVUkwucG9ydCxcbiAgICAgICAgICBhdXRoOiBwcm94eUF1dGggJiYgdHlwZW9mIHByb3h5QXV0aCA9PT0gJ3N0cmluZycgPyBwcm94eUF1dGggOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHByb3h5VVJMLnByb3RvY29sID09PSAnaHR0cHM6Jykge1xuICAgICAgICAgIGFnZW50T3B0aW9ucy5BTFBOUHJvdG9jb2xzID0gWydodHRwLzEuMSddO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHR1bm5lbGluZ0FnZW50ID0gZ2V0VHVubmVsaW5nQWdlbnQoYWdlbnRPcHRpb25zLCBjb25maWdIdHRwc0FnZW50KTtcbiAgICAgICAgLy8gU2V0IGJvdGg6IGBvcHRpb25zLmFnZW50YCBpcyBjb25zdW1lZCBieSB0aGUgbmF0aXZlIGh0dHBzLnJlcXVlc3QgcGF0aFxuICAgICAgICAvLyAobWF4UmVkaXJlY3RzID09PSAwKTsgYG9wdGlvbnMuYWdlbnRzLmh0dHBzYCBpcyBjb25zdW1lZCBieVxuICAgICAgICAvLyBmb2xsb3ctcmVkaXJlY3RzLCB3aGljaCBpZ25vcmVzIGBvcHRpb25zLmFnZW50YCB3aGVuIGBvcHRpb25zLmFnZW50c2BcbiAgICAgICAgLy8gaXMgcHJlc2VudC5cbiAgICAgICAgb3B0aW9ucy5hZ2VudCA9IHR1bm5lbGluZ0FnZW50O1xuICAgICAgICBpZiAob3B0aW9ucy5hZ2VudHMpIHtcbiAgICAgICAgICBvcHRpb25zLmFnZW50cy5odHRwcyA9IHR1bm5lbGluZ0FnZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZvcndhcmQtcHJveHkgbW9kZSBmb3IgcGxhaW50ZXh0IEhUVFAgdGFyZ2V0cy4gVGhlIHJlcXVlc3QgbGluZSBjYXJyaWVzXG4gICAgICAvLyB0aGUgYWJzb2x1dGUgVVJMIGFuZCB0aGUgcHJveHkgc2VlcyBldmVyeXRoaW5nIOKAlCBhY2NlcHRhYmxlIGZvciBwbGFpblxuICAgICAgLy8gSFRUUCBzaW5jZSB0aGUgd2lyZSB3YXMgYWxyZWFkeSBwbGFpbnRleHQuXG4gICAgICBpZiAocHJveHlBdXRoKSB7XG4gICAgICAgIGNvbnN0IGJhc2U2NCA9IEJ1ZmZlci5mcm9tKHByb3h5QXV0aCwgJ3V0ZjgnKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgICAgIG9wdGlvbnMuaGVhZGVyc1snUHJveHktQXV0aG9yaXphdGlvbiddID0gJ0Jhc2ljICcgKyBiYXNlNjQ7XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXNlcnZlIGEgdXNlci1zdXBwbGllZCBIb3N0IGhlYWRlciAoY2FzZS1pbnNlbnNpdGl2ZSkgc28gY2FsbGVycyBjYW4gb3ZlcnJpZGVcbiAgICAgIC8vIHRoZSB2YWx1ZSBmb3J3YXJkZWQgdG8gdGhlIHByb3h5OyBvdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgcmVxdWVzdCBVUkwncyBob3N0LlxuICAgICAgbGV0IGhhc1VzZXJIb3N0SGVhZGVyID0gZmFsc2U7XG4gICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMob3B0aW9ucy5oZWFkZXJzKSkge1xuICAgICAgICBpZiAobmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaG9zdCcpIHtcbiAgICAgICAgICBoYXNVc2VySG9zdEhlYWRlciA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghaGFzVXNlckhvc3RIZWFkZXIpIHtcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzLmhvc3QgPSBvcHRpb25zLmhvc3RuYW1lICsgKG9wdGlvbnMucG9ydCA/ICc6JyArIG9wdGlvbnMucG9ydCA6ICcnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb3h5SG9zdCA9IHJlYWRQcm94eUZpZWxkKCdob3N0bmFtZScpIHx8IHJlYWRQcm94eUZpZWxkKCdob3N0Jyk7XG4gICAgICBvcHRpb25zLmhvc3RuYW1lID0gcHJveHlIb3N0O1xuICAgICAgLy8gUmVwbGFjZSAnaG9zdCcgc2luY2Ugb3B0aW9ucyBpcyBub3QgYSBVUkwgb2JqZWN0XG4gICAgICBvcHRpb25zLmhvc3QgPSBwcm94eUhvc3Q7XG4gICAgICBvcHRpb25zLnBvcnQgPSByZWFkUHJveHlGaWVsZCgncG9ydCcpO1xuICAgICAgb3B0aW9ucy5wYXRoID0gbG9jYXRpb247XG4gICAgICBjb25zdCBwcm94eVByb3RvY29sID0gcmVhZFByb3h5RmllbGQoJ3Byb3RvY29sJyk7XG4gICAgICBpZiAocHJveHlQcm90b2NvbCkge1xuICAgICAgICBvcHRpb25zLnByb3RvY29sID0gcHJveHlQcm90b2NvbC5pbmNsdWRlcygnOicpID8gcHJveHlQcm90b2NvbCA6IGAke3Byb3h5UHJvdG9jb2x9OmA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9wdGlvbnMuYmVmb3JlUmVkaXJlY3RzLnByb3h5ID0gZnVuY3Rpb24gYmVmb3JlUmVkaXJlY3QocmVkaXJlY3RPcHRpb25zKSB7XG4gICAgLy8gQ29uZmlndXJlIHByb3h5IGZvciByZWRpcmVjdGVkIHJlcXVlc3QsIHBhc3NpbmcgdGhlIG9yaWdpbmFsIGNvbmZpZyBwcm94eSB0byBhcHBseVxuICAgIC8vIHRoZSBleGFjdCBzYW1lIGxvZ2ljIGFzIGlmIHRoZSByZWRpcmVjdGVkIHJlcXVlc3Qgd2FzIHBlcmZvcm1lZCBieSBheGlvcyBkaXJlY3RseS5cbiAgICBzZXRQcm94eShyZWRpcmVjdE9wdGlvbnMsIGNvbmZpZ1Byb3h5LCByZWRpcmVjdE9wdGlvbnMuaHJlZiwgdHJ1ZSwgY29uZmlnSHR0cHNBZ2VudCwgY29uZmlnSHR0cEFnZW50LCBhbGxvd0VudlByb3h5KTtcbiAgfTtcbiAgcmV0dXJuIEJvb2xlYW4ocHJveHkgfHwgY29uZmlnUHJveHkgIT09IGZhbHNlICYmIGFsbG93RW52UHJveHkgJiYgaXNOb2RlRW52UHJveHlFbmFibGVkKHByb3h5RW52QWdlbnQpKTtcbn1cbmNvbnN0IGlzSHR0cEFkYXB0ZXJTdXBwb3J0ZWQgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdXRpbHMkMS5raW5kT2YocHJvY2VzcykgPT09ICdwcm9jZXNzJztcblxuLy8gdGVtcG9yYXJ5IGhvdGZpeFxuXG5jb25zdCB3cmFwQXN5bmMgPSBhc3luY0V4ZWN1dG9yID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgb25Eb25lO1xuICAgIGxldCBpc0RvbmU7XG4gICAgY29uc3QgZG9uZSA9ICh2YWx1ZSwgaXNSZWplY3RlZCkgPT4ge1xuICAgICAgaWYgKGlzRG9uZSkgcmV0dXJuO1xuICAgICAgaXNEb25lID0gdHJ1ZTtcbiAgICAgIG9uRG9uZSAmJiBvbkRvbmUodmFsdWUsIGlzUmVqZWN0ZWQpO1xuICAgIH07XG4gICAgY29uc3QgX3Jlc29sdmUgPSB2YWx1ZSA9PiB7XG4gICAgICBkb25lKHZhbHVlKTtcbiAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH07XG4gICAgY29uc3QgX3JlamVjdCA9IHJlYXNvbiA9PiB7XG4gICAgICBkb25lKHJlYXNvbiwgdHJ1ZSk7XG4gICAgICByZWplY3QocmVhc29uKTtcbiAgICB9O1xuICAgIGFzeW5jRXhlY3V0b3IoX3Jlc29sdmUsIF9yZWplY3QsIG9uRG9uZUhhbmRsZXIgPT4gb25Eb25lID0gb25Eb25lSGFuZGxlcikuY2F0Y2goX3JlamVjdCk7XG4gIH0pO1xufTtcbmNvbnN0IHJlc29sdmVGYW1pbHkgPSAoe1xuICBhZGRyZXNzLFxuICBmYW1pbHlcbn0pID0+IHtcbiAgaWYgKCF1dGlscyQxLmlzU3RyaW5nKGFkZHJlc3MpKSB7XG4gICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ2FkZHJlc3MgbXVzdCBiZSBhIHN0cmluZycsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUpO1xuICB9XG4gIHJldHVybiB7XG4gICAgYWRkcmVzcyxcbiAgICBmYW1pbHk6IGZhbWlseSB8fCAoYWRkcmVzcy5pbmRleE9mKCcuJykgPCAwID8gNiA6IDQpXG4gIH07XG59O1xuY29uc3QgYnVpbGRBZGRyZXNzRW50cnkgPSAoYWRkcmVzcywgZmFtaWx5KSA9PiByZXNvbHZlRmFtaWx5KHV0aWxzJDEuaXNPYmplY3QoYWRkcmVzcykgPyBhZGRyZXNzIDoge1xuICBhZGRyZXNzLFxuICBmYW1pbHlcbn0pO1xuY29uc3Qgbm9ybWFsaXplZExvb2t1cENhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IG5vcm1hbGl6ZUxvb2t1cCA9IGxvb2t1cCA9PiB7XG4gIGxldCBub3JtYWxpemVkID0gbm9ybWFsaXplZExvb2t1cENhY2hlLmdldChsb29rdXApO1xuICBpZiAobm9ybWFsaXplZCkge1xuICAgIHJldHVybiBub3JtYWxpemVkO1xuICB9XG4gIGNvbnN0IGNhbGxiYWNrTG9va3VwID0gY2FsbGJhY2tpZnkobG9va3VwLCB2YWx1ZSA9PiB1dGlscyQxLmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdKTtcblxuICAvLyBTdXBwb3J0IG9wdC5hbGwsIHdoaWNoIGlzIHJlcXVpcmVkIGJ5IGN1cnJlbnQgTm9kZS5qcyByZWxlYXNlcy5cbiAgbm9ybWFsaXplZCA9IChob3N0bmFtZSwgb3B0LCBjYikgPT4ge1xuICAgIGNhbGxiYWNrTG9va3VwKGhvc3RuYW1lLCBvcHQsIChlcnIsIGFyZzAsIGFyZzEpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGNiKGVycik7XG4gICAgICB9XG4gICAgICBsZXQgYWRkcmVzc2VzO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYWRkcmVzc2VzID0gdXRpbHMkMS5pc0FycmF5KGFyZzApID8gYXJnMC5tYXAoYWRkciA9PiBidWlsZEFkZHJlc3NFbnRyeShhZGRyKSkgOiBbYnVpbGRBZGRyZXNzRW50cnkoYXJnMCwgYXJnMSldO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNiKGVycm9yKTtcbiAgICAgIH1cbiAgICAgIG9wdC5hbGwgPyBjYihlcnIsIGFkZHJlc3NlcykgOiBjYihlcnIsIGFkZHJlc3Nlc1swXS5hZGRyZXNzLCBhZGRyZXNzZXNbMF0uZmFtaWx5KTtcbiAgICB9KTtcbiAgfTtcbiAgbm9ybWFsaXplZExvb2t1cENhY2hlLnNldChsb29rdXAsIG5vcm1hbGl6ZWQpO1xuICByZXR1cm4gbm9ybWFsaXplZDtcbn07XG5jb25zdCBodHRwMlRyYW5zcG9ydCA9IHtcbiAgcmVxdWVzdChvcHRpb25zLCBjYikge1xuICAgIGNvbnN0IGF1dGhvcml0eSA9IG9wdGlvbnMucHJvdG9jb2wgKyAnLy8nICsgb3B0aW9ucy5ob3N0bmFtZSArICc6JyArIChvcHRpb25zLnBvcnQgfHwgKG9wdGlvbnMucHJvdG9jb2wgPT09ICdodHRwczonID8gNDQzIDogODApKTtcbiAgICBjb25zdCB7XG4gICAgICBodHRwMk9wdGlvbnMsXG4gICAgICBoZWFkZXJzXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGh0dHAyU2Vzc2lvbnMuZ2V0U2Vzc2lvbihhdXRob3JpdHksIGh0dHAyT3B0aW9ucyk7XG4gICAgY29uc3Qge1xuICAgICAgSFRUUDJfSEVBREVSX1NDSEVNRSxcbiAgICAgIEhUVFAyX0hFQURFUl9NRVRIT0QsXG4gICAgICBIVFRQMl9IRUFERVJfUEFUSCxcbiAgICAgIEhUVFAyX0hFQURFUl9TVEFUVVNcbiAgICB9ID0gaHR0cDIuY29uc3RhbnRzO1xuICAgIGNvbnN0IGh0dHAySGVhZGVycyA9IHtcbiAgICAgIFtIVFRQMl9IRUFERVJfU0NIRU1FXTogb3B0aW9ucy5wcm90b2NvbC5yZXBsYWNlKCc6JywgJycpLFxuICAgICAgW0hUVFAyX0hFQURFUl9NRVRIT0RdOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgIFtIVFRQMl9IRUFERVJfUEFUSF06IG9wdGlvbnMucGF0aFxuICAgIH07XG4gICAgdXRpbHMkMS5mb3JFYWNoKGhlYWRlcnMsIChoZWFkZXIsIG5hbWUpID0+IHtcbiAgICAgIG5hbWUuY2hhckF0KDApICE9PSAnOicgJiYgKGh0dHAySGVhZGVyc1tuYW1lXSA9IGhlYWRlcik7XG4gICAgfSk7XG4gICAgY29uc3QgcmVxID0gc2Vzc2lvbi5yZXF1ZXN0KGh0dHAySGVhZGVycyk7XG4gICAgcmVxLm9uY2UoJ3Jlc3BvbnNlJywgcmVzcG9uc2VIZWFkZXJzID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVxOyAvL2R1cGxleFxuXG4gICAgICByZXNwb25zZUhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCByZXNwb25zZUhlYWRlcnMpO1xuICAgICAgY29uc3Qgc3RhdHVzID0gcmVzcG9uc2VIZWFkZXJzW0hUVFAyX0hFQURFUl9TVEFUVVNdO1xuICAgICAgZGVsZXRlIHJlc3BvbnNlSGVhZGVyc1tIVFRQMl9IRUFERVJfU1RBVFVTXTtcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMgPSByZXNwb25zZUhlYWRlcnM7XG4gICAgICByZXNwb25zZS5zdGF0dXNDb2RlID0gK3N0YXR1cztcbiAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVxO1xuICB9XG59O1xuXG4vKmVzbGludCBjb25zaXN0ZW50LXJldHVybjowKi9cbnZhciBodHRwQWRhcHRlciA9IGlzSHR0cEFkYXB0ZXJTdXBwb3J0ZWQgJiYgZnVuY3Rpb24gaHR0cEFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiB3cmFwQXN5bmMoYXN5bmMgZnVuY3Rpb24gZGlzcGF0Y2hIdHRwUmVxdWVzdChyZXNvbHZlLCByZWplY3QsIG9uRG9uZSkge1xuICAgIC8vIFJlYWQgY29uZmlnIHBvbGx1dGlvbi1zYWZlbHk6IG93biBwcm9wZXJ0aWVzIGFuZCBtZW1iZXJzIGluaGVyaXRlZCBmcm9tXG4gICAgLy8gYSBub24tT2JqZWN0LnByb3RvdHlwZSBzb3VyY2UgKGUuZy4gYW4gT2JqZWN0LmNyZWF0ZShkZWZhdWx0cykgdGVtcGxhdGUpXG4gICAgLy8gYXJlIGhvbm9yZWQsIGJ1dCB2YWx1ZXMgaW5qZWN0ZWQgb250byBhIHBvbGx1dGVkIE9iamVjdC5wcm90b3R5cGUgYXJlXG4gICAgLy8gaWdub3JlZC4gQWxsIGJlaGF2aW9yLWFmZmVjdGluZyByZWFkcyBpbiB0aGlzIGFkYXB0ZXIgZ28gdGhyb3VnaCBvd24oKVxuICAgIC8vIHNvIHRoZSBwcm90ZWN0aW9uIGJvdW5kYXJ5IHN0YXlzIGNvbnNpc3RlbnQuXG4gICAgY29uc3Qgb3duID0ga2V5ID0+IHV0aWxzJDEuZ2V0U2FmZVByb3AoY29uZmlnLCBrZXkpO1xuICAgIGNvbnN0IHRyYW5zaXRpb25hbCA9IG93bigndHJhbnNpdGlvbmFsJykgfHwgdHJhbnNpdGlvbmFsRGVmYXVsdHM7XG4gICAgbGV0IGRhdGEgPSBvd24oJ2RhdGEnKTtcbiAgICBsZXQgbG9va3VwID0gb3duKCdsb29rdXAnKTtcbiAgICBsZXQgZmFtaWx5ID0gb3duKCdmYW1pbHknKTtcbiAgICBsZXQgaHR0cFZlcnNpb24gPSBvd24oJ2h0dHBWZXJzaW9uJyk7XG4gICAgaWYgKGh0dHBWZXJzaW9uID09PSB1bmRlZmluZWQpIGh0dHBWZXJzaW9uID0gMTtcbiAgICBjb25zdCByYXdIdHRwVmVyc2lvbiA9IGh0dHBWZXJzaW9uO1xuICAgIGxldCBodHRwMk9wdGlvbnMgPSBvd24oJ2h0dHAyT3B0aW9ucycpO1xuICAgIGNvbnN0IGh0dHBBZ2VudCA9IG93bignaHR0cEFnZW50Jyk7XG4gICAgY29uc3QgaHR0cHNBZ2VudCA9IG93bignaHR0cHNBZ2VudCcpO1xuICAgIGNvbnN0IGNvbmZpZ1Byb3h5ID0gb3duKCdwcm94eScpO1xuICAgIGNvbnN0IHJlc3BvbnNlVHlwZSA9IG93bigncmVzcG9uc2VUeXBlJyk7XG4gICAgY29uc3QgcmVzcG9uc2VFbmNvZGluZyA9IG93bigncmVzcG9uc2VFbmNvZGluZycpO1xuICAgIGNvbnN0IHNvY2tldFBhdGggPSBvd24oJ3NvY2tldFBhdGgnKTtcbiAgICBjb25zdCBtZXRob2QgPSBvd24oJ21ldGhvZCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgbWF4UmVkaXJlY3RzID0gb3duKCdtYXhSZWRpcmVjdHMnKTtcbiAgICBjb25zdCBtYXhCb2R5TGVuZ3RoID0gb3duKCdtYXhCb2R5TGVuZ3RoJyk7XG4gICAgY29uc3QgbWF4Q29udGVudExlbmd0aCA9IG93bignbWF4Q29udGVudExlbmd0aCcpO1xuICAgIGNvbnN0IGRlY29tcHJlc3MgPSBvd24oJ2RlY29tcHJlc3MnKTtcbiAgICBsZXQgaXNEb25lO1xuICAgIGxldCByZWplY3RlZCA9IGZhbHNlO1xuICAgIGxldCByZXE7XG4gICAgbGV0IGNvbm5lY3RQaGFzZVRpbWVyO1xuICAgIHRyeSB7XG4gICAgICBodHRwVmVyc2lvbiA9ICtodHRwVmVyc2lvbjtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdJbnZhbGlkIHByb3RvY29sIHZlcnNpb246IHZhbHVlIGlzIG5vdCBhIG51bWJlcicsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUsIGNvbmZpZyk7XG4gICAgfVxuICAgIGlmIChOdW1iZXIuaXNOYU4oaHR0cFZlcnNpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihgSW52YWxpZCBwcm90b2NvbCB2ZXJzaW9uOiAnJHtyYXdIdHRwVmVyc2lvbn0nIGlzIG5vdCBhIG51bWJlcmAsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUsIGNvbmZpZyk7XG4gICAgfVxuICAgIGlmIChodHRwVmVyc2lvbiAhPT0gMSAmJiBodHRwVmVyc2lvbiAhPT0gMikge1xuICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoYFVuc3VwcG9ydGVkIHByb3RvY29sIHZlcnNpb24gJyR7aHR0cFZlcnNpb259J2AsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUsIGNvbmZpZyk7XG4gICAgfVxuICAgIGNvbnN0IGlzSHR0cDIgPSBodHRwVmVyc2lvbiA9PT0gMjtcbiAgICBpZiAobG9va3VwKSB7XG4gICAgICBsb29rdXAgPSBub3JtYWxpemVMb29rdXAobG9va3VwKTtcbiAgICB9XG4gICAgY29uc3QgYWJvcnRFbWl0dGVyID0gbmV3IGV2ZW50cy5FdmVudEVtaXR0ZXIoKTtcbiAgICBmdW5jdGlvbiBhYm9ydChyZWFzb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGFib3J0RW1pdHRlci5lbWl0KCdhYm9ydCcsICFyZWFzb24gfHwgcmVhc29uLnR5cGUgPyBuZXcgQ2FuY2VsZWRFcnJvcihudWxsLCBjb25maWcsIHJlcSkgOiByZWFzb24pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIGlnbm9yZSBlbWl0IGVycm9yc1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhckNvbm5lY3RQaGFzZVRpbWVyKCkge1xuICAgICAgaWYgKGNvbm5lY3RQaGFzZVRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChjb25uZWN0UGhhc2VUaW1lcik7XG4gICAgICAgIGNvbm5lY3RQaGFzZVRpbWVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlVGltZW91dEVycm9yKCkge1xuICAgICAgY29uc3QgY29uZmlnVGltZW91dCA9IG93bigndGltZW91dCcpO1xuICAgICAgbGV0IHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWdUaW1lb3V0ID8gJ3RpbWVvdXQgb2YgJyArIGNvbmZpZ1RpbWVvdXQgKyAnbXMgZXhjZWVkZWQnIDogJ3RpbWVvdXQgZXhjZWVkZWQnO1xuICAgICAgY29uc3QgY29uZmlnVGltZW91dEVycm9yTWVzc2FnZSA9IG93bigndGltZW91dEVycm9yTWVzc2FnZScpO1xuICAgICAgaWYgKGNvbmZpZ1RpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZ1RpbWVvdXRFcnJvck1lc3NhZ2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEF4aW9zRXJyb3IodGltZW91dEVycm9yTWVzc2FnZSwgdHJhbnNpdGlvbmFsLmNsYXJpZnlUaW1lb3V0RXJyb3IgPyBBeGlvc0Vycm9yLkVUSU1FRE9VVCA6IEF4aW9zRXJyb3IuRUNPTk5BQk9SVEVELCBjb25maWcsIHJlcSk7XG4gICAgfVxuICAgIGFib3J0RW1pdHRlci5vbmNlKCdhYm9ydCcsIHJlamVjdCk7XG4gICAgY29uc3Qgb25GaW5pc2hlZCA9ICgpID0+IHtcbiAgICAgIGNsZWFyQ29ubmVjdFBoYXNlVGltZXIoKTtcbiAgICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnVuc3Vic2NyaWJlKGFib3J0KTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcuc2lnbmFsKSB7XG4gICAgICAgIGNvbmZpZy5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydCk7XG4gICAgICB9XG4gICAgICBhYm9ydEVtaXR0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgfTtcbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuIHx8IGNvbmZpZy5zaWduYWwpIHtcbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbiAmJiBjb25maWcuY2FuY2VsVG9rZW4uc3Vic2NyaWJlKGFib3J0KTtcbiAgICAgIGlmIChjb25maWcuc2lnbmFsKSB7XG4gICAgICAgIGNvbmZpZy5zaWduYWwuYWJvcnRlZCA/IGFib3J0KCkgOiBjb25maWcuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBvbkRvbmUoKHJlc3BvbnNlLCBpc1JlamVjdGVkKSA9PiB7XG4gICAgICBpc0RvbmUgPSB0cnVlO1xuICAgICAgY2xlYXJDb25uZWN0UGhhc2VUaW1lcigpO1xuICAgICAgaWYgKGlzUmVqZWN0ZWQpIHtcbiAgICAgICAgcmVqZWN0ZWQgPSB0cnVlO1xuICAgICAgICBvbkZpbmlzaGVkKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YVxuICAgICAgfSA9IHJlc3BvbnNlO1xuICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBzdHJlYW0uUmVhZGFibGUgfHwgZGF0YSBpbnN0YW5jZW9mIHN0cmVhbS5EdXBsZXgpIHtcbiAgICAgICAgY29uc3Qgb2ZmTGlzdGVuZXJzID0gc3RyZWFtLmZpbmlzaGVkKGRhdGEsICgpID0+IHtcbiAgICAgICAgICBvZmZMaXN0ZW5lcnMoKTtcbiAgICAgICAgICBvbkZpbmlzaGVkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb25GaW5pc2hlZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUGFyc2UgdXJsXG4gICAgY29uc3QgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKG93bignYmFzZVVSTCcpLCBvd24oJ3VybCcpLCBvd24oJ2FsbG93QWJzb2x1dGVVcmxzJyksIGNvbmZpZyk7XG4gICAgLy8gVW5peC1zb2NrZXQgcmVxdWVzdHMgKG93biBzb2NrZXRQYXRoKSBjb21tb25seSBwYXNzIGEgcGF0aC1vbmx5IHVybFxuICAgIC8vIGxpa2UgJy9mb28nOyBzdXBwbHkgYSBzeW50aGV0aWMgYmFzZSBzbyBuZXcgVVJMKCkgY2FuIHN0aWxsIHBhcnNlIGl0LlxuICAgIC8vIFVzZSB0aGUgb3duLXByb3BlcnR5IHZhbHVlIChub3QgY29uZmlnLnNvY2tldFBhdGgpIHNvIGEgcG9sbHV0ZWRcbiAgICAvLyBwcm90b3R5cGUgY2Fubm90IGluZmx1ZW5jZSBVUkwgYmFzZSBzZWxlY3Rpb24uXG4gICAgY29uc3QgdXJsQmFzZSA9IHNvY2tldFBhdGggPyAnaHR0cDovL2xvY2FsaG9zdCcgOiBwbGF0Zm9ybS5oYXNCcm93c2VyRW52ID8gcGxhdGZvcm0ub3JpZ2luIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHBhcnNlZCA9IG5ldyBVUkwoZnVsbFBhdGgsIHVybEJhc2UpO1xuICAgIGNvbnN0IHByb3RvY29sID0gcGFyc2VkLnByb3RvY29sIHx8IHN1cHBvcnRlZFByb3RvY29sc1swXTtcbiAgICBpZiAocHJvdG9jb2wgPT09ICdkYXRhOicpIHtcbiAgICAgIC8vIEFwcGx5IHRoZSBzYW1lIHNlbWFudGljcyBhcyBIVFRQOiBvbmx5IGVuZm9yY2UgaWYgYSBmaW5pdGUsIG5vbi1uZWdhdGl2ZSBjYXAgaXMgc2V0LlxuICAgICAgaWYgKG1heENvbnRlbnRMZW5ndGggPiAtMSkge1xuICAgICAgICAvLyBVc2UgdGhlIGV4YWN0IHN0cmluZyBwYXNzZWQgdG8gZnJvbURhdGFVUkkgKHRoZSBjb25maWd1cmVkIHVybCk7IGZhbGwgYmFjayB0byBmdWxsUGF0aCBpZiBuZWVkZWQuXG4gICAgICAgIGNvbnN0IGRhdGFVcmwgPSBTdHJpbmcob3duKCd1cmwnKSB8fCBmdWxsUGF0aCB8fCAnJyk7XG4gICAgICAgIGNvbnN0IGVzdGltYXRlZCA9IGVzdGltYXRlRGF0YVVSTEJ1ZmZlckFsbG9jYXRpb24oZGF0YVVybCk7XG4gICAgICAgIGlmIChlc3RpbWF0ZWQgPiBtYXhDb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgQXhpb3NFcnJvcignbWF4Q29udGVudExlbmd0aCBzaXplIG9mICcgKyBtYXhDb250ZW50TGVuZ3RoICsgJyBleGNlZWRlZCcsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSwgY29uZmlnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBjb252ZXJ0ZWREYXRhO1xuICAgICAgaWYgKG1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICAgICAgcmV0dXJuIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHtcbiAgICAgICAgICBzdGF0dXM6IDQwNSxcbiAgICAgICAgICBzdGF0dXNUZXh0OiAnbWV0aG9kIG5vdCBhbGxvd2VkJyxcbiAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICBjb25maWdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBjb252ZXJ0ZWREYXRhID0gZnJvbURhdGFVUkkob3duKCd1cmwnKSwgcmVzcG9uc2VUeXBlID09PSAnYmxvYicsIHtcbiAgICAgICAgICBCbG9iOiBjb25maWcuZW52ICYmIGNvbmZpZy5lbnYuQmxvYlxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBBeGlvc0Vycm9yLmZyb20oZXJyLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCwgY29uZmlnKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNwb25zZVR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICBjb252ZXJ0ZWREYXRhID0gY29udmVydGVkRGF0YS50b1N0cmluZyhyZXNwb25zZUVuY29kaW5nKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZUVuY29kaW5nIHx8IHJlc3BvbnNlRW5jb2RpbmcgPT09ICd1dGY4Jykge1xuICAgICAgICAgIGNvbnZlcnRlZERhdGEgPSB1dGlscyQxLnN0cmlwQk9NKGNvbnZlcnRlZERhdGEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlVHlwZSA9PT0gJ3N0cmVhbScpIHtcbiAgICAgICAgY29udmVydGVkRGF0YSA9IHN0cmVhbS5SZWFkYWJsZS5mcm9tKGNvbnZlcnRlZERhdGEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHtcbiAgICAgICAgZGF0YTogY29udmVydGVkRGF0YSxcbiAgICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICAgIHN0YXR1c1RleHQ6ICdPSycsXG4gICAgICAgIGhlYWRlcnM6IG5ldyBBeGlvc0hlYWRlcnMoKSxcbiAgICAgICAgY29uZmlnXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHN1cHBvcnRlZFByb3RvY29scy5pbmRleE9mKHByb3RvY29sKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IEF4aW9zRXJyb3IoJ1Vuc3VwcG9ydGVkIHByb3RvY29sICcgKyBwcm90b2NvbCwgQXhpb3NFcnJvci5FUlJfQkFEX1JFUVVFU1QsIGNvbmZpZykpO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oY29uZmlnLmhlYWRlcnMpLm5vcm1hbGl6ZSgpO1xuXG4gICAgLy8gU2V0IFVzZXItQWdlbnQgKHJlcXVpcmVkIGJ5IHNvbWUgc2VydmVycylcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy82OVxuICAgIC8vIFVzZXItQWdlbnQgaXMgc3BlY2lmaWVkOyBoYW5kbGUgY2FzZSB3aGVyZSBubyBVQSBoZWFkZXIgaXMgZGVzaXJlZFxuICAgIC8vIE9ubHkgc2V0IGhlYWRlciBpZiBpdCBoYXNuJ3QgYmVlbiBzZXQgaW4gY29uZmlnXG4gICAgaGVhZGVycy5zZXQoJ1VzZXItQWdlbnQnLCAnYXhpb3MvJyArIFZFUlNJT04sIGZhbHNlKTtcbiAgICBjb25zdCB7XG4gICAgICBvblVwbG9hZFByb2dyZXNzLFxuICAgICAgb25Eb3dubG9hZFByb2dyZXNzXG4gICAgfSA9IGNvbmZpZztcbiAgICBjb25zdCBtYXhSYXRlID0gY29uZmlnLm1heFJhdGU7XG4gICAgbGV0IG1heFVwbG9hZFJhdGUgPSB1bmRlZmluZWQ7XG4gICAgbGV0IG1heERvd25sb2FkUmF0ZSA9IHVuZGVmaW5lZDtcblxuICAgIC8vIHN1cHBvcnQgZm9yIHNwZWMgY29tcGxpYW50IEZvcm1EYXRhIG9iamVjdHNcbiAgICBpZiAodXRpbHMkMS5pc1NwZWNDb21wbGlhbnRGb3JtKGRhdGEpKSB7XG4gICAgICBjb25zdCB1c2VyQm91bmRhcnkgPSBoZWFkZXJzLmdldENvbnRlbnRUeXBlKC9ib3VuZGFyeT0oWy1fXFx3XFxkXXsxMCw3MH0pL2kpO1xuICAgICAgZGF0YSA9IGZvcm1EYXRhVG9TdHJlYW0oZGF0YSwgZm9ybUhlYWRlcnMgPT4ge1xuICAgICAgICBoZWFkZXJzLnNldChmb3JtSGVhZGVycyk7XG4gICAgICB9LCB7XG4gICAgICAgIHRhZzogYGF4aW9zLSR7VkVSU0lPTn0tYm91bmRhcnlgLFxuICAgICAgICBib3VuZGFyeTogdXNlckJvdW5kYXJ5ICYmIHVzZXJCb3VuZGFyeVsxXSB8fCB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgICAgLy8gc3VwcG9ydCBmb3IgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvZm9ybS1kYXRhIGFwaVxuICAgIH0gZWxzZSBpZiAodXRpbHMkMS5pc0Zvcm1EYXRhKGRhdGEpICYmIHV0aWxzJDEuaXNGdW5jdGlvbihkYXRhLmdldEhlYWRlcnMpICYmIGRhdGEuZ2V0SGVhZGVycyAhPT0gT2JqZWN0LnByb3RvdHlwZS5nZXRIZWFkZXJzKSB7XG4gICAgICBzZXRGb3JtRGF0YUhlYWRlcnMoaGVhZGVycywgZGF0YS5nZXRIZWFkZXJzKCksIG93bignZm9ybURhdGFIZWFkZXJQb2xpY3knKSk7XG4gICAgICBpZiAoIWhlYWRlcnMuaGFzQ29udGVudExlbmd0aCgpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qga25vd25MZW5ndGggPSBhd2FpdCB1dGlsLnByb21pc2lmeShkYXRhLmdldExlbmd0aCkuY2FsbChkYXRhKTtcbiAgICAgICAgICBOdW1iZXIuaXNGaW5pdGUoa25vd25MZW5ndGgpICYmIGtub3duTGVuZ3RoID49IDAgJiYgaGVhZGVycy5zZXRDb250ZW50TGVuZ3RoKGtub3duTGVuZ3RoKTtcbiAgICAgICAgICAvKmVzbGludCBuby1lbXB0eTowKi9cbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHV0aWxzJDEuaXNCbG9iKGRhdGEpIHx8IHV0aWxzJDEuaXNGaWxlKGRhdGEpKSB7XG4gICAgICBkYXRhLnNpemUgJiYgaGVhZGVycy5zZXRDb250ZW50VHlwZShkYXRhLnR5cGUgfHwgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpO1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50TGVuZ3RoKGRhdGEuc2l6ZSB8fCAwKTtcbiAgICAgIGRhdGEgPSBzdHJlYW0uUmVhZGFibGUuZnJvbShyZWFkQmxvYihkYXRhKSk7XG4gICAgfSBlbHNlIGlmIChkYXRhICYmICF1dGlscyQxLmlzU3RyZWFtKGRhdGEpKSB7XG4gICAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKGRhdGEpKSA7IGVsc2UgaWYgKHV0aWxzJDEuaXNBcnJheUJ1ZmZlcihkYXRhKSkge1xuICAgICAgICBkYXRhID0gQnVmZmVyLmZyb20obmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xuICAgICAgfSBlbHNlIGlmICh1dGlscyQxLmlzU3RyaW5nKGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBCdWZmZXIuZnJvbShkYXRhLCAndXRmLTgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWplY3QobmV3IEF4aW9zRXJyb3IoJ0RhdGEgYWZ0ZXIgdHJhbnNmb3JtYXRpb24gbXVzdCBiZSBhIHN0cmluZywgYW4gQXJyYXlCdWZmZXIsIGEgQnVmZmVyLCBvciBhIFN0cmVhbScsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBjb25maWcpKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIENvbnRlbnQtTGVuZ3RoIGhlYWRlciBpZiBkYXRhIGV4aXN0c1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50TGVuZ3RoKGRhdGEubGVuZ3RoLCBmYWxzZSk7XG4gICAgICBpZiAobWF4Qm9keUxlbmd0aCA+IC0xICYmIGRhdGEubGVuZ3RoID4gbWF4Qm9keUxlbmd0aCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBBeGlvc0Vycm9yKCdSZXF1ZXN0IGJvZHkgbGFyZ2VyIHRoYW4gbWF4Qm9keUxlbmd0aCBsaW1pdCcsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBjb25maWcpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY29udGVudExlbmd0aCA9IHV0aWxzJDEudG9GaW5pdGVOdW1iZXIoaGVhZGVycy5nZXRDb250ZW50TGVuZ3RoKCkpO1xuICAgIGlmICh1dGlscyQxLmlzQXJyYXkobWF4UmF0ZSkpIHtcbiAgICAgIG1heFVwbG9hZFJhdGUgPSBtYXhSYXRlWzBdO1xuICAgICAgbWF4RG93bmxvYWRSYXRlID0gbWF4UmF0ZVsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF4VXBsb2FkUmF0ZSA9IG1heERvd25sb2FkUmF0ZSA9IG1heFJhdGU7XG4gICAgfVxuICAgIGlmIChkYXRhICYmIChvblVwbG9hZFByb2dyZXNzIHx8IG1heFVwbG9hZFJhdGUpKSB7XG4gICAgICBpZiAoIXV0aWxzJDEuaXNTdHJlYW0oZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IHN0cmVhbS5SZWFkYWJsZS5mcm9tKGRhdGEsIHtcbiAgICAgICAgICBvYmplY3RNb2RlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGRhdGEgPSBzdHJlYW0ucGlwZWxpbmUoW2RhdGEsIG5ldyBBeGlvc1RyYW5zZm9ybVN0cmVhbSh7XG4gICAgICAgIG1heFJhdGU6IHV0aWxzJDEudG9GaW5pdGVOdW1iZXIobWF4VXBsb2FkUmF0ZSlcbiAgICAgIH0pXSwgdXRpbHMkMS5ub29wKTtcbiAgICAgIG9uVXBsb2FkUHJvZ3Jlc3MgJiYgZGF0YS5vbigncHJvZ3Jlc3MnLCBmbHVzaE9uRmluaXNoKGRhdGEsIHByb2dyZXNzRXZlbnREZWNvcmF0b3IoY29udGVudExlbmd0aCwgcHJvZ3Jlc3NFdmVudFJlZHVjZXIoYXN5bmNEZWNvcmF0b3Iob25VcGxvYWRQcm9ncmVzcywgc2NoZWR1bGVQcm9ncmVzcyksIGZhbHNlLCAzKSkpKTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgbGV0IGF1dGggPSB1bmRlZmluZWQ7XG4gICAgY29uc3QgY29uZmlnQXV0aCA9IG93bignYXV0aCcpO1xuICAgIGlmIChjb25maWdBdXRoKSB7XG4gICAgICBjb25zdCB1c2VybmFtZSA9IHV0aWxzJDEuZ2V0U2FmZVByb3AoY29uZmlnQXV0aCwgJ3VzZXJuYW1lJykgfHwgJyc7XG4gICAgICBjb25zdCBwYXNzd29yZCA9IHV0aWxzJDEuZ2V0U2FmZVByb3AoY29uZmlnQXV0aCwgJ3Bhc3N3b3JkJykgfHwgJyc7XG4gICAgICBhdXRoID0gdXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZDtcbiAgICB9XG4gICAgaWYgKCFhdXRoICYmIChwYXJzZWQudXNlcm5hbWUgfHwgcGFyc2VkLnBhc3N3b3JkKSkge1xuICAgICAgY29uc3QgdXJsVXNlcm5hbWUgPSBkZWNvZGVVUklDb21wb25lbnRTYWZlJDEocGFyc2VkLnVzZXJuYW1lKTtcbiAgICAgIGNvbnN0IHVybFBhc3N3b3JkID0gZGVjb2RlVVJJQ29tcG9uZW50U2FmZSQxKHBhcnNlZC5wYXNzd29yZCk7XG4gICAgICBhdXRoID0gdXJsVXNlcm5hbWUgKyAnOicgKyB1cmxQYXNzd29yZDtcbiAgICB9XG4gICAgYXV0aCAmJiBoZWFkZXJzLmRlbGV0ZSgnYXV0aG9yaXphdGlvbicpO1xuICAgIGxldCBwYXRoJDE7XG4gICAgdHJ5IHtcbiAgICAgIHBhdGgkMSA9IGJ1aWxkVVJMKHBhcnNlZC5wYXRobmFtZSArIHBhcnNlZC5zZWFyY2gsIG93bigncGFyYW1zJyksIG93bigncGFyYW1zU2VyaWFsaXplcicpKS5yZXBsYWNlKC9eXFw/LywgJycpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHJlamVjdChBeGlvc0Vycm9yLmZyb20oZXJyLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCwgY29uZmlnLCBudWxsLCBudWxsLCB7XG4gICAgICAgIHVybDogb3duKCd1cmwnKSxcbiAgICAgICAgZXhpc3RzOiB0cnVlXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGhlYWRlcnMuc2V0KCdBY2NlcHQtRW5jb2RpbmcnLCB1dGlscyQxLmhhc093blByb3AodHJhbnNpdGlvbmFsLCAnYWR2ZXJ0aXNlWnN0ZEFjY2VwdEVuY29kaW5nJykgJiYgdHJhbnNpdGlvbmFsLmFkdmVydGlzZVpzdGRBY2NlcHRFbmNvZGluZyA9PT0gdHJ1ZSA/IEFDQ0VQVF9FTkNPRElOR19XSVRIX1pTVEQgOiBBQ0NFUFRfRU5DT0RJTkcsIGZhbHNlKTtcbiAgICBpZiAoaXNIdHRwMiAmJiBsb29rdXApIHtcbiAgICAgIGh0dHAyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShudWxsKSwgaHR0cDJPcHRpb25zLCB7XG4gICAgICAgIGxvb2t1cFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTnVsbC1wcm90b3R5cGUgdG8gYmxvY2sgcHJvdG90eXBlIHBvbGx1dGlvbiBnYWRnZXRzIG9uIHByb3BlcnRpZXMgcmVhZFxuICAgIC8vIGRpcmVjdGx5IGJ5IE5vZGUncyBodHRwLnJlcXVlc3QgKGUuZy4gaW5zZWN1cmVIVFRQUGFyc2VyLCBsb29rdXApLlxuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIHtcbiAgICAgIHBhdGg6IHBhdGgkMSxcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgaGVhZGVyczogdG9CeXRlU3RyaW5nSGVhZGVyT2JqZWN0KGhlYWRlcnMpLFxuICAgICAgYWdlbnRzOiB7XG4gICAgICAgIGh0dHA6IGh0dHBBZ2VudCxcbiAgICAgICAgaHR0cHM6IGh0dHBzQWdlbnRcbiAgICAgIH0sXG4gICAgICBhdXRoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBmYW1pbHksXG4gICAgICBiZWZvcmVSZWRpcmVjdDogZGlzcGF0Y2hCZWZvcmVSZWRpcmVjdCxcbiAgICAgIGJlZm9yZVJlZGlyZWN0czogT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIGh0dHAyT3B0aW9ucyxcbiAgICAgIGNyZWF0ZUNvbm5lY3Rpb246IHVuZGVmaW5lZFxuICAgIH0pO1xuXG4gICAgLy8gY2FjaGVhYmxlLWxvb2t1cCBpbnRlZ3JhdGlvbiBob3RmaXhcbiAgICAhdXRpbHMkMS5pc1VuZGVmaW5lZChsb29rdXApICYmIChvcHRpb25zLmxvb2t1cCA9IGxvb2t1cCk7XG4gICAgbGV0IHByb3h5QXBwbGllZCA9IGZhbHNlO1xuICAgIGlmIChzb2NrZXRQYXRoKSB7XG4gICAgICBpZiAodHlwZW9mIHNvY2tldFBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiByZWplY3QobmV3IEF4aW9zRXJyb3IoJ3NvY2tldFBhdGggbXVzdCBiZSBhIHN0cmluZycsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUsIGNvbmZpZykpO1xuICAgICAgfVxuICAgICAgY29uc3QgYWxsb3dlZFNvY2tldFBhdGhzID0gb3duKCdhbGxvd2VkU29ja2V0UGF0aHMnKTtcbiAgICAgIGlmIChhbGxvd2VkU29ja2V0UGF0aHMgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBhbGxvd2VkID0gQXJyYXkuaXNBcnJheShhbGxvd2VkU29ja2V0UGF0aHMpID8gYWxsb3dlZFNvY2tldFBhdGhzIDogW2FsbG93ZWRTb2NrZXRQYXRoc107XG4gICAgICAgIGNvbnN0IHJlc29sdmVkU29ja2V0ID0gcGF0aC5yZXNvbHZlKHNvY2tldFBhdGgpO1xuICAgICAgICBjb25zdCBpc0FsbG93ZWQgPSBhbGxvd2VkLnNvbWUoZW50cnkgPT4gdHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJyAmJiBwYXRoLnJlc29sdmUoZW50cnkpID09PSByZXNvbHZlZFNvY2tldCk7XG4gICAgICAgIGlmICghaXNBbGxvd2VkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgQXhpb3NFcnJvcihgc29ja2V0UGF0aCBcIiR7c29ja2V0UGF0aH1cIiBpcyBub3QgcGVybWl0dGVkIGJ5IGFsbG93ZWRTb2NrZXRQYXRoc2AsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUsIGNvbmZpZykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvcHRpb25zLnNvY2tldFBhdGggPSBzb2NrZXRQYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLmhvc3RuYW1lID0gcGFyc2VkLmhvc3RuYW1lLnN0YXJ0c1dpdGgoJ1snKSA/IHBhcnNlZC5ob3N0bmFtZS5zbGljZSgxLCAtMSkgOiBwYXJzZWQuaG9zdG5hbWU7XG4gICAgICBvcHRpb25zLnBvcnQgPSBwYXJzZWQucG9ydDtcbiAgICAgIHByb3h5QXBwbGllZCA9IHNldFByb3h5KG9wdGlvbnMsIGNvbmZpZ1Byb3h5LCBwcm90b2NvbCArICcvLycgKyBwYXJzZWQuaG9zdG5hbWUgKyAocGFyc2VkLnBvcnQgPyAnOicgKyBwYXJzZWQucG9ydCA6ICcnKSArIG9wdGlvbnMucGF0aCwgZmFsc2UsIGh0dHBzQWdlbnQsIGh0dHBBZ2VudCxcbiAgICAgIC8vIFRoZSBIVFRQLzIgdHJhbnNwb3J0IGNvbm5lY3RzIGluZGVwZW5kZW50bHkgb2YgSFRUUC8xIGFnZW50cywgc28gaXRcbiAgICAgIC8vIGNhbm5vdCBhcHBseSBlaXRoZXIgYXhpb3MtcmVzb2x2ZWQgb3IgYWdlbnQtbG9jYWwgZW52aXJvbm1lbnQgcHJveGllcy5cbiAgICAgIC8vIEV4cGxpY2l0IHByb3h5IGNvbmZpZyBpcyBzdGlsbCBwcm9jZXNzZWQgYW5kIHJlamVjdGVkIGJlbG93LlxuICAgICAgIWlzSHR0cDIpO1xuICAgIH1cbiAgICBsZXQgdHJhbnNwb3J0O1xuICAgIGxldCBpc05hdGl2ZVRyYW5zcG9ydCA9IGZhbHNlO1xuICAgIC8vIFRydWUgb25seSBmb3IgdGhlIGZvbGxvdy1yZWRpcmVjdHMgdHJhbnNwb3J0LCB3aGljaCBhcHBsaWVzXG4gICAgLy8gb3B0aW9ucy5tYXhCb2R5TGVuZ3RoIGl0c2VsZi4gRXZlcnkgb3RoZXIgdHJhbnNwb3J0IChodHRwMiwgbmF0aXZlXG4gICAgLy8gaHR0cC9odHRwcywgYSB1c2VyLXN1cHBsaWVkIGN1c3RvbSB0cmFuc3BvcnQpIG5lZWRzIHRoZSBleHBsaWNpdFxuICAgIC8vIGJ5dGUtY291bnRpbmcgcGlwZWxpbmUgYmVsb3cgdG8gZW5mb3JjZSBtYXhCb2R5TGVuZ3RoIG9uIHN0cmVhbWVkIHVwbG9hZHMuXG4gICAgbGV0IHRyYW5zcG9ydEVuZm9yY2VzTWF4Qm9keUxlbmd0aCA9IGZhbHNlO1xuICAgIGNvbnN0IGlzSHR0cHNSZXF1ZXN0ID0gaXNIdHRwcy50ZXN0KG9wdGlvbnMucHJvdG9jb2wpO1xuICAgIC8vIERvbid0IGNsb2JiZXIgYSBDT05ORUNULXR1bm5lbGluZyBhZ2VudCBpbnN0YWxsZWQgYnkgc2V0UHJveHkoKSBmb3IgYW5cbiAgICAvLyBIVFRQUyB0YXJnZXQuXG4gICAgaWYgKG9wdGlvbnMuYWdlbnQgPT0gbnVsbCkge1xuICAgICAgb3B0aW9ucy5hZ2VudCA9IGlzSHR0cHNSZXF1ZXN0ID8gaHR0cHNBZ2VudCA6IGh0dHBBZ2VudDtcbiAgICB9XG4gICAgaWYgKGlzSHR0cDIpIHtcbiAgICAgIGlmIChwcm94eUFwcGxpZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgQXhpb3NFcnJvcignSFRUUC8yIHJlcXVlc3RzIHdpdGggYSBwcm94eSBhcmUgbm90IHN1cHBvcnRlZCcsIEF4aW9zRXJyb3IuRVJSX05PVF9TVVBQT1JULCBjb25maWcpKTtcbiAgICAgIH1cbiAgICAgIHRyYW5zcG9ydCA9IGh0dHAyVHJhbnNwb3J0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb25maWdUcmFuc3BvcnQgPSBvd24oJ3RyYW5zcG9ydCcpO1xuICAgICAgaWYgKGNvbmZpZ1RyYW5zcG9ydCkge1xuICAgICAgICB0cmFuc3BvcnQgPSBjb25maWdUcmFuc3BvcnQ7XG4gICAgICB9IGVsc2UgaWYgKG1heFJlZGlyZWN0cyA9PT0gMCkge1xuICAgICAgICB0cmFuc3BvcnQgPSBpc0h0dHBzUmVxdWVzdCA/IGh0dHBzIDogaHR0cDtcbiAgICAgICAgaXNOYXRpdmVUcmFuc3BvcnQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNwb3J0RW5mb3JjZXNNYXhCb2R5TGVuZ3RoID0gdHJ1ZTtcbiAgICAgICAgb3B0aW9ucy5zZW5zaXRpdmVIZWFkZXJzID0gW107XG4gICAgICAgIGlmIChtYXhSZWRpcmVjdHMpIHtcbiAgICAgICAgICBvcHRpb25zLm1heFJlZGlyZWN0cyA9IG1heFJlZGlyZWN0cztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb25maWdCZWZvcmVSZWRpcmVjdCA9IG93bignYmVmb3JlUmVkaXJlY3QnKTtcbiAgICAgICAgaWYgKGNvbmZpZ0JlZm9yZVJlZGlyZWN0KSB7XG4gICAgICAgICAgb3B0aW9ucy5iZWZvcmVSZWRpcmVjdHMuY29uZmlnID0gY29uZmlnQmVmb3JlUmVkaXJlY3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF1dGgpIHtcbiAgICAgICAgICAvLyBSZXN0b3JlIEhUVFAgQmFzaWMgY3JlZGVudGlhbHMgb24gc2FtZS1vcmlnaW4gcmVkaXJlY3RzIG9ubHkuXG4gICAgICAgICAgLy8gZm9sbG93LXJlZGlyZWN0cyA+PSAxLjE1Ljggc3RyaXBzIEF1dGhvcml6YXRpb24gb24gZXZlcnkgcmVkaXJlY3QgKHNlZSAjNjkyOSk7XG4gICAgICAgICAgLy8gY3Jvc3Mtb3JpZ2luIHN0cmlwcGluZyBpcyB0aGUgZG9jdW1lbnRlZCBtaXRpZ2F0aW9uIGZvciBULVIyIGluIFRIUkVBVE1PREVMLm1kXG4gICAgICAgICAgLy8gYW5kIGlzIHByZXNlcnZlZCBieSBkZWxpYmVyYXRlbHkgbm90IHJlc3RvcmluZyBvbiBvcmlnaW4gY2hhbmdlLlxuICAgICAgICAgIGNvbnN0IHJlcXVlc3RPcmlnaW4gPSBwYXJzZWQub3JpZ2luO1xuICAgICAgICAgIGNvbnN0IGF1dGhUb1Jlc3RvcmUgPSBhdXRoO1xuICAgICAgICAgIG9wdGlvbnMuYmVmb3JlUmVkaXJlY3RzLmF1dGggPSBmdW5jdGlvbiBiZWZvcmVSZWRpcmVjdEF1dGgocmVkaXJlY3RPcHRpb25zKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBpZiAobmV3IFVSTChyZWRpcmVjdE9wdGlvbnMuaHJlZikub3JpZ2luID09PSByZXF1ZXN0T3JpZ2luKSB7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3RPcHRpb25zLmF1dGggPSBhdXRoVG9SZXN0b3JlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIC8vIGlnbm9yZSBtYWxmb3JtZWQgVVJMOiBsZWF2aW5nIGF1dGggc3RyaXBwZWQgaXMgZmFpbC1zYWZlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZW5zaXRpdmVIZWFkZXJzID0gb3duKCdzZW5zaXRpdmVIZWFkZXJzJyk7XG4gICAgICAgIGlmIChzZW5zaXRpdmVIZWFkZXJzICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAoIXV0aWxzJDEuaXNBcnJheShzZW5zaXRpdmVIZWFkZXJzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgQXhpb3NFcnJvcignc2Vuc2l0aXZlSGVhZGVycyBtdXN0IGJlIGFuIGFycmF5IG9mIHN0cmluZ3MnLCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFLCBjb25maWcpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc2Vuc2l0aXZlU2V0ID0gbmV3IFNldCgpO1xuICAgICAgICAgIGZvciAoY29uc3QgaGVhZGVyIG9mIHNlbnNpdGl2ZUhlYWRlcnMpIHtcbiAgICAgICAgICAgIGlmICghdXRpbHMkMS5pc1N0cmluZyhoZWFkZXIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEF4aW9zRXJyb3IoJ3NlbnNpdGl2ZUhlYWRlcnMgbXVzdCBiZSBhbiBhcnJheSBvZiBzdHJpbmdzJywgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTl9WQUxVRSwgY29uZmlnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZW5zaXRpdmVTZXQuYWRkKGhlYWRlci50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNlbnNpdGl2ZVNldC5zaXplKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNlbnNpdGl2ZUhlYWRlcnMgPSBBcnJheS5mcm9tKHNlbnNpdGl2ZVNldCk7XG4gICAgICAgICAgICBvcHRpb25zLmJlZm9yZVJlZGlyZWN0cy5zZW5zaXRpdmVIZWFkZXJzID0gZnVuY3Rpb24gYmVmb3JlUmVkaXJlY3RTZW5zaXRpdmVIZWFkZXJzKHJlZGlyZWN0T3B0aW9ucywgcmVxdWVzdERldGFpbHMpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc1NhbWVPcmlnaW5SZWRpcmVjdChyZWRpcmVjdE9wdGlvbnMsIHJlcXVlc3REZXRhaWxzKSkge1xuICAgICAgICAgICAgICAgIHN0cmlwTWF0Y2hpbmdIZWFkZXJzKHJlZGlyZWN0T3B0aW9ucy5oZWFkZXJzLCBzZW5zaXRpdmVTZXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cmFuc3BvcnQgPSBpc0h0dHBzUmVxdWVzdCA/IGh0dHBzRm9sbG93IDogaHR0cEZvbGxvdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgYW4gZXhwbGljaXQgbWF4Qm9keUxlbmd0aCBvcHRpb24gZm9yIHRyYW5zcG9ydHMgdGhhdCBpbnNwZWN0IGl0LlxuICAgIC8vIFdoZW4gbWF4Qm9keUxlbmd0aCBpcyAtMSAoZGVmYXVsdC91bmxpbWl0ZWQpLCB1c2UgSW5maW5pdHkgc29cbiAgICAvLyBmb2xsb3ctcmVkaXJlY3RzIGRvZXMgbm90IGZhbGwgYmFjayB0byBpdHMgb3duIDEwTUIgZGVmYXVsdC5cbiAgICBpZiAobWF4Qm9keUxlbmd0aCA+IC0xKSB7XG4gICAgICBvcHRpb25zLm1heEJvZHlMZW5ndGggPSBtYXhCb2R5TGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLm1heEJvZHlMZW5ndGggPSBJbmZpbml0eTtcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgc2V0IGFuIGV4cGxpY2l0IG93biB2YWx1ZSBzbyBhIHBvbGx1dGVkXG4gICAgLy8gT2JqZWN0LnByb3RvdHlwZS5pbnNlY3VyZUhUVFBQYXJzZXIgY2Fubm90IGVuYWJsZSB0aGUgbGVuaWVudCBwYXJzZXJcbiAgICAvLyB0aHJvdWdoIE5vZGUncyBpbnRlcm5hbCBvcHRpb25zIGNvcHlcbiAgICBvcHRpb25zLmluc2VjdXJlSFRUUFBhcnNlciA9IEJvb2xlYW4ob3duKCdpbnNlY3VyZUhUVFBQYXJzZXInKSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHJlcXVlc3RcbiAgICByZXEgPSB0cmFuc3BvcnQucmVxdWVzdChvcHRpb25zLCBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZShyZXMpIHtcbiAgICAgIGNsZWFyQ29ubmVjdFBoYXNlVGltZXIoKTtcbiAgICAgIGlmIChyZXEuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICBjb25zdCBzdHJlYW1zID0gW3Jlc107XG4gICAgICBjb25zdCByZXNwb25zZUxlbmd0aCA9IHV0aWxzJDEudG9GaW5pdGVOdW1iZXIocmVzLmhlYWRlcnNbJ2NvbnRlbnQtbGVuZ3RoJ10pO1xuICAgICAgaWYgKG9uRG93bmxvYWRQcm9ncmVzcyB8fCBtYXhEb3dubG9hZFJhdGUpIHtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtU3RyZWFtID0gbmV3IEF4aW9zVHJhbnNmb3JtU3RyZWFtKHtcbiAgICAgICAgICBtYXhSYXRlOiB1dGlscyQxLnRvRmluaXRlTnVtYmVyKG1heERvd25sb2FkUmF0ZSlcbiAgICAgICAgfSk7XG4gICAgICAgIG9uRG93bmxvYWRQcm9ncmVzcyAmJiB0cmFuc2Zvcm1TdHJlYW0ub24oJ3Byb2dyZXNzJywgZmx1c2hPbkZpbmlzaCh0cmFuc2Zvcm1TdHJlYW0sIHByb2dyZXNzRXZlbnREZWNvcmF0b3IocmVzcG9uc2VMZW5ndGgsIHByb2dyZXNzRXZlbnRSZWR1Y2VyKGFzeW5jRGVjb3JhdG9yKG9uRG93bmxvYWRQcm9ncmVzcywgc2NoZWR1bGVQcm9ncmVzcyksIHRydWUsIDMpKSkpO1xuICAgICAgICBzdHJlYW1zLnB1c2godHJhbnNmb3JtU3RyZWFtKTtcbiAgICAgIH1cblxuICAgICAgLy8gZGVjb21wcmVzcyB0aGUgcmVzcG9uc2UgYm9keSB0cmFuc3BhcmVudGx5IGlmIHJlcXVpcmVkXG4gICAgICBsZXQgcmVzcG9uc2VTdHJlYW0gPSByZXM7XG5cbiAgICAgIC8vIHJldHVybiB0aGUgbGFzdCByZXF1ZXN0IGluIGNhc2Ugb2YgcmVkaXJlY3RzXG4gICAgICBjb25zdCBsYXN0UmVxdWVzdCA9IHJlcy5yZXEgfHwgcmVxO1xuXG4gICAgICAvLyBpZiBkZWNvbXByZXNzIGRpc2FibGVkIHdlIHNob3VsZCBub3QgZGVjb21wcmVzc1xuICAgICAgaWYgKGRlY29tcHJlc3MgIT09IGZhbHNlICYmIHJlcy5oZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ10pIHtcbiAgICAgICAgLy8gaWYgbm8gY29udGVudCwgYnV0IGhlYWRlcnMgc3RpbGwgc2F5IHRoYXQgaXQgaXMgZW5jb2RlZCxcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBoZWFkZXIgbm90IGNvbmZ1c2UgZG93bnN0cmVhbSBvcGVyYXRpb25zXG4gICAgICAgIGlmIChtZXRob2QgPT09ICdIRUFEJyB8fCByZXMuc3RhdHVzQ29kZSA9PT0gMjA0KSB7XG4gICAgICAgICAgZGVsZXRlIHJlcy5oZWFkZXJzWydjb250ZW50LWVuY29kaW5nJ107XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICgocmVzLmhlYWRlcnNbJ2NvbnRlbnQtZW5jb2RpbmcnXSB8fCAnJykudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIC8qZXNsaW50IGRlZmF1bHQtY2FzZTowKi9cbiAgICAgICAgICBjYXNlICdnemlwJzpcbiAgICAgICAgICBjYXNlICd4LWd6aXAnOlxuICAgICAgICAgIGNhc2UgJ2NvbXByZXNzJzpcbiAgICAgICAgICBjYXNlICd4LWNvbXByZXNzJzpcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgdW56aXBwZXIgdG8gdGhlIGJvZHkgc3RyZWFtIHByb2Nlc3NpbmcgcGlwZWxpbmVcbiAgICAgICAgICAgIHN0cmVhbXMucHVzaCh6bGliLmNyZWF0ZVVuemlwKHpsaWJPcHRpb25zKSk7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgY29udGVudC1lbmNvZGluZyBpbiBvcmRlciB0byBub3QgY29uZnVzZSBkb3duc3RyZWFtIG9wZXJhdGlvbnNcbiAgICAgICAgICAgIGRlbGV0ZSByZXMuaGVhZGVyc1snY29udGVudC1lbmNvZGluZyddO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZGVmbGF0ZSc6XG4gICAgICAgICAgICBzdHJlYW1zLnB1c2gobmV3IFpsaWJIZWFkZXJUcmFuc2Zvcm1TdHJlYW0oKSk7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgdW56aXBwZXIgdG8gdGhlIGJvZHkgc3RyZWFtIHByb2Nlc3NpbmcgcGlwZWxpbmVcbiAgICAgICAgICAgIHN0cmVhbXMucHVzaCh6bGliLmNyZWF0ZVVuemlwKHpsaWJPcHRpb25zKSk7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgY29udGVudC1lbmNvZGluZyBpbiBvcmRlciB0byBub3QgY29uZnVzZSBkb3duc3RyZWFtIG9wZXJhdGlvbnNcbiAgICAgICAgICAgIGRlbGV0ZSByZXMuaGVhZGVyc1snY29udGVudC1lbmNvZGluZyddO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYnInOlxuICAgICAgICAgICAgaWYgKGlzQnJvdGxpU3VwcG9ydGVkKSB7XG4gICAgICAgICAgICAgIHN0cmVhbXMucHVzaCh6bGliLmNyZWF0ZUJyb3RsaURlY29tcHJlc3MoYnJvdGxpT3B0aW9ucykpO1xuICAgICAgICAgICAgICBkZWxldGUgcmVzLmhlYWRlcnNbJ2NvbnRlbnQtZW5jb2RpbmcnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3pzdGQnOlxuICAgICAgICAgICAgaWYgKGlzWnN0ZFN1cHBvcnRlZCkge1xuICAgICAgICAgICAgICBzdHJlYW1zLnB1c2goemxpYi5jcmVhdGVac3RkRGVjb21wcmVzcyh6c3RkT3B0aW9ucykpO1xuICAgICAgICAgICAgICBkZWxldGUgcmVzLmhlYWRlcnNbJ2NvbnRlbnQtZW5jb2RpbmcnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXNwb25zZVN0cmVhbSA9IHN0cmVhbXMubGVuZ3RoID4gMSA/IHN0cmVhbS5waXBlbGluZShzdHJlYW1zLCB1dGlscyQxLm5vb3ApIDogc3RyZWFtc1swXTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXMuc3RhdHVzTWVzc2FnZSxcbiAgICAgICAgaGVhZGVyczogbmV3IEF4aW9zSGVhZGVycyhyZXMuaGVhZGVycyksXG4gICAgICAgIGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogbGFzdFJlcXVlc3RcbiAgICAgIH07XG4gICAgICBpZiAocmVzcG9uc2VUeXBlID09PSAnc3RyZWFtJykge1xuICAgICAgICAvLyBFbmZvcmNlIG1heENvbnRlbnRMZW5ndGggb24gc3RyZWFtZWQgcmVzcG9uc2VzOyBwcmV2aW91c2x5IHRoaXNcbiAgICAgICAgLy8gd2FzIGFwcGxpZWQgb25seSB0byBidWZmZXJlZCByZXNwb25zZXMuXG4gICAgICAgIGlmIChtYXhDb250ZW50TGVuZ3RoID4gLTEpIHtcbiAgICAgICAgICBjb25zdCBsaW1pdCA9IG1heENvbnRlbnRMZW5ndGg7XG4gICAgICAgICAgY29uc3Qgc291cmNlID0gcmVzcG9uc2VTdHJlYW07XG4gICAgICAgICAgYXN5bmMgZnVuY3Rpb24qIGVuZm9yY2VNYXhDb250ZW50TGVuZ3RoKCkge1xuICAgICAgICAgICAgbGV0IHRvdGFsUmVzcG9uc2VCeXRlcyA9IDA7XG4gICAgICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHNvdXJjZSkge1xuICAgICAgICAgICAgICB0b3RhbFJlc3BvbnNlQnl0ZXMgKz0gY2h1bmsubGVuZ3RoO1xuICAgICAgICAgICAgICBpZiAodG90YWxSZXNwb25zZUJ5dGVzID4gbGltaXQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignbWF4Q29udGVudExlbmd0aCBzaXplIG9mICcgKyBsaW1pdCArICcgZXhjZWVkZWQnLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0UsIGNvbmZpZywgbGFzdFJlcXVlc3QpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHlpZWxkIGNodW5rO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXNwb25zZVN0cmVhbSA9IHN0cmVhbS5SZWFkYWJsZS5mcm9tKGVuZm9yY2VNYXhDb250ZW50TGVuZ3RoKCksIHtcbiAgICAgICAgICAgIG9iamVjdE1vZGU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHJlc3BvbnNlU3RyZWFtO1xuICAgICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByZXNwb25zZUJ1ZmZlciA9IFtdO1xuICAgICAgICBsZXQgdG90YWxSZXNwb25zZUJ5dGVzID0gMDtcbiAgICAgICAgcmVzcG9uc2VTdHJlYW0ub24oJ2RhdGEnLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1EYXRhKGNodW5rKSB7XG4gICAgICAgICAgcmVzcG9uc2VCdWZmZXIucHVzaChjaHVuayk7XG4gICAgICAgICAgdG90YWxSZXNwb25zZUJ5dGVzICs9IGNodW5rLmxlbmd0aDtcblxuICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgY29udGVudCBsZW5ndGggaXMgbm90IG92ZXIgdGhlIG1heENvbnRlbnRMZW5ndGggaWYgc3BlY2lmaWVkXG4gICAgICAgICAgaWYgKG1heENvbnRlbnRMZW5ndGggPiAtMSAmJiB0b3RhbFJlc3BvbnNlQnl0ZXMgPiBtYXhDb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBzdHJlYW0uZGVzdHJveSgpIGVtaXQgYWJvcnRlZCBldmVudCBiZWZvcmUgY2FsbGluZyByZWplY3QoKSBvbiBOb2RlLmpzIHYxNlxuICAgICAgICAgICAgcmVqZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzcG9uc2VTdHJlYW0uZGVzdHJveSgpO1xuICAgICAgICAgICAgYWJvcnQobmV3IEF4aW9zRXJyb3IoJ21heENvbnRlbnRMZW5ndGggc2l6ZSBvZiAnICsgbWF4Q29udGVudExlbmd0aCArICcgZXhjZWVkZWQnLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0UsIGNvbmZpZywgbGFzdFJlcXVlc3QpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXNwb25zZVN0cmVhbS5vbignYWJvcnRlZCcsIGZ1bmN0aW9uIGhhbmRsZXJTdHJlYW1BYm9ydGVkKCkge1xuICAgICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgQXhpb3NFcnJvcignc3RyZWFtIGhhcyBiZWVuIGFib3J0ZWQnLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0UsIGNvbmZpZywgbGFzdFJlcXVlc3QsIHJlc3BvbnNlKTtcbiAgICAgICAgICByZXNwb25zZVN0cmVhbS5kZXN0cm95KGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNwb25zZVN0cmVhbS5vbignZXJyb3InLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1FcnJvcihlcnIpIHtcbiAgICAgICAgICBpZiAocmVqZWN0ZWQpIHJldHVybjtcbiAgICAgICAgICByZWplY3QoQXhpb3NFcnJvci5mcm9tKGVyciwgbnVsbCwgY29uZmlnLCBsYXN0UmVxdWVzdCwgcmVzcG9uc2UpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3BvbnNlU3RyZWFtLm9uKCdlbmQnLCBmdW5jdGlvbiBoYW5kbGVTdHJlYW1FbmQoKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCByZXNwb25zZURhdGEgPSByZXNwb25zZUJ1ZmZlci5sZW5ndGggPT09IDEgPyByZXNwb25zZUJ1ZmZlclswXSA6IEJ1ZmZlci5jb25jYXQocmVzcG9uc2VCdWZmZXIpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlVHlwZSAhPT0gJ2FycmF5YnVmZmVyJykge1xuICAgICAgICAgICAgICByZXNwb25zZURhdGEgPSByZXNwb25zZURhdGEudG9TdHJpbmcocmVzcG9uc2VFbmNvZGluZyk7XG4gICAgICAgICAgICAgIGlmICghcmVzcG9uc2VFbmNvZGluZyB8fCByZXNwb25zZUVuY29kaW5nID09PSAndXRmOCcpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZURhdGEgPSB1dGlscyQxLnN0cmlwQk9NKHJlc3BvbnNlRGF0YSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSByZXNwb25zZURhdGE7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KEF4aW9zRXJyb3IuZnJvbShlcnIsIG51bGwsIGNvbmZpZywgcmVzcG9uc2UucmVxdWVzdCwgcmVzcG9uc2UpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGFib3J0RW1pdHRlci5vbmNlKCdhYm9ydCcsIGVyciA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2VTdHJlYW0uZGVzdHJveWVkKSB7XG4gICAgICAgICAgcmVzcG9uc2VTdHJlYW0uZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgICAgIHJlc3BvbnNlU3RyZWFtLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgYWJvcnRFbWl0dGVyLm9uY2UoJ2Fib3J0JywgZXJyID0+IHtcbiAgICAgIGlmIChyZXEuY2xvc2UpIHtcbiAgICAgICAgcmVxLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXEuZGVzdHJveShlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIGVycm9yc1xuICAgIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0RXJyb3IoZXJyKSB7XG4gICAgICByZWplY3QoQXhpb3NFcnJvci5mcm9tKGVyciwgbnVsbCwgY29uZmlnLCByZXEpKTtcbiAgICB9KTtcblxuICAgIC8vIHNldCB0Y3Aga2VlcCBhbGl2ZSB0byBwcmV2ZW50IGRyb3AgY29ubmVjdGlvbiBieSBwZWVyXG4gICAgLy8gVHJhY2sgZXZlcnkgc29ja2V0IGJvdW5kIHRvIHRoaXMgb3V0ZXIgUmVkaXJlY3RhYmxlUmVxdWVzdCBzbyBhIHNpbmdsZVxuICAgIC8vICdjbG9zZScgbGlzdGVuZXIgY2FuIHJlbGVhc2Ugb3duZXJzaGlwIG9uIGFsbCBvZiB0aGVtLiBmb2xsb3ctcmVkaXJlY3RzXG4gICAgLy8gcmUtZW1pdHMgdGhlICdzb2NrZXQnIGV2ZW50IGZvciBlYWNoIGhvcCdzIG5hdGl2ZSByZXF1ZXN0IG9udG8gdGhlIHNhbWVcbiAgICAvLyBvdXRlciByZXF1ZXN0LCBzbyBhdHRhY2hpbmcgcGVyLXJlcXVlc3QgbGlzdGVuZXJzIGluc2lkZSB0aGlzIGhhbmRsZXJcbiAgICAvLyB3b3VsZCBhY2N1bXVsYXRlIGFjcm9zcyBob3BzIGFuZCB0cmlnZ2VyIE1heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyBhdFxuICAgIC8vID49IDExIHJlZGlyZWN0cy4gQ2xlYXJpbmcgb25seSB0aGUgbGFzdC1ib3VuZCBzb2NrZXQgd291bGQgbGVhdmUgc3RhbGVcbiAgICAvLyBrQXhpb3NDdXJyZW50UmVxIHJlZnMgb24gZWFybGllciBob3Agc29ja2V0cyByZXR1cm5lZCB0byB0aGUga2VlcC1hbGl2ZVxuICAgIC8vIHBvb2wsIGNhdXNpbmcgYW4gaWRsZS1wb29sICdlcnJvcicgdG8gYmUgYXR0cmlidXRlZCB0byBhIGNsb3NlZCByZXEuXG4gICAgY29uc3QgYm91bmRTb2NrZXRzID0gbmV3IFNldCgpO1xuICAgIHJlcS5vbignc29ja2V0JywgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdFNvY2tldChzb2NrZXQpIHtcbiAgICAgIC8vIGRlZmF1bHQgaW50ZXJ2YWwgb2Ygc2VuZGluZyBhY2sgcGFja2V0IGlzIDEgbWludXRlXG4gICAgICAvLyBwcm94eSBhZ2VudHMgKGUuZy4gYWdlbnQtYmFzZSkgbWF5IHJldHVybiBhIGdlbmVyaWMgRHVwbGV4IHN0cmVhbVxuICAgICAgLy8gdGhhdCBkb2Vzbid0IGhhdmUgc2V0S2VlcEFsaXZlLCBzbyBndWFyZCBiZWZvcmUgY2FsbGluZ1xuICAgICAgaWYgKHR5cGVvZiBzb2NrZXQuc2V0S2VlcEFsaXZlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNvY2tldC5zZXRLZWVwQWxpdmUodHJ1ZSwgMTAwMCAqIDYwKTtcbiAgICAgIH1cblxuICAgICAgLy8gSW5zdGFsbCBvbmUgc2hhcmVkICdlcnJvcicgbGlzdGVuZXIgcGVyIHNvY2tldC4gVGhlIHN5bWJvbCBmb2xsb3dzIHRoZVxuICAgICAgLy8gY3VycmVudGx5LWFjdGl2ZSByZXF1ZXN0IGFzIHBvb2xlZCBzb2NrZXRzIGFyZSByZWFzc2lnbmVkIChpc3N1ZSAjMTA3ODApLlxuICAgICAgaWYgKCFzb2NrZXRba0F4aW9zU29ja2V0TGlzdGVuZXJdKSB7XG4gICAgICAgIHNvY2tldC5vbignZXJyb3InLCBoYW5kbGVTb2NrZXRFcnJvcik7XG4gICAgICAgIHNvY2tldFtrQXhpb3NTb2NrZXRMaXN0ZW5lcl0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgc29ja2V0W2tBeGlvc0N1cnJlbnRSZXFdID0gcmVxO1xuICAgICAgYm91bmRTb2NrZXRzLmFkZChzb2NrZXQpO1xuICAgIH0pO1xuICAgIHJlcS5vbmNlKCdjbG9zZScsIGZ1bmN0aW9uIGNsZWFyQ3VycmVudFJlcSgpIHtcbiAgICAgIGNsZWFyQ29ubmVjdFBoYXNlVGltZXIoKTtcbiAgICAgIGZvciAoY29uc3Qgc29ja2V0IG9mIGJvdW5kU29ja2V0cykge1xuICAgICAgICBpZiAoc29ja2V0W2tBeGlvc0N1cnJlbnRSZXFdID09PSByZXEpIHtcbiAgICAgICAgICBzb2NrZXRba0F4aW9zQ3VycmVudFJlcV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBib3VuZFNvY2tldHMuY2xlYXIoKTtcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSByZXF1ZXN0IHRpbWVvdXRcbiAgICBpZiAob3duKCd0aW1lb3V0JykpIHtcbiAgICAgIC8vIFRoaXMgaXMgZm9yY2luZyBhIGludCB0aW1lb3V0IHRvIGF2b2lkIHByb2JsZW1zIGlmIHRoZSBgcmVxYCBpbnRlcmZhY2UgZG9lc24ndCBoYW5kbGUgb3RoZXIgdHlwZXMuXG4gICAgICBjb25zdCB0aW1lb3V0ID0gcGFyc2VJbnQob3duKCd0aW1lb3V0JyksIDEwKTtcbiAgICAgIGlmIChOdW1iZXIuaXNOYU4odGltZW91dCkpIHtcbiAgICAgICAgYWJvcnQobmV3IEF4aW9zRXJyb3IoJ2Vycm9yIHRyeWluZyB0byBwYXJzZSBgY29uZmlnLnRpbWVvdXRgIHRvIGludCcsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUsIGNvbmZpZywgcmVxKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhhbmRsZVRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgICBpZiAoaXNEb25lKSByZXR1cm47XG4gICAgICAgIGFib3J0KGNyZWF0ZVRpbWVvdXRFcnJvcigpKTtcbiAgICAgIH07XG4gICAgICBpZiAoaXNOYXRpdmVUcmFuc3BvcnQgJiYgdGltZW91dCA+IDApIHtcbiAgICAgICAgLy8gTmF0aXZlIENsaWVudFJlcXVlc3Qjc2V0VGltZW91dCBzdGFydHMgZnJvbSB0aGUgc29ja2V0IGxpZmVjeWNsZSBhbmRcbiAgICAgICAgLy8gbWF5IG5vdCBmaXJlIHdoaWxlIFRDUCBjb25uZWN0IGlzIHN0aWxsIHBlbmRpbmcuIE1pcnJvciB0aGVcbiAgICAgICAgLy8gZm9sbG93LXJlZGlyZWN0cyB3YWxsLWNsb2NrIHRpbWVyIGZvciB0aGUgbWF4UmVkaXJlY3RzID09PSAwIHBhdGguXG4gICAgICAgIGNvbm5lY3RQaGFzZVRpbWVyID0gc2V0VGltZW91dChoYW5kbGVUaW1lb3V0LCB0aW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgLy8gU29tZXRpbWUsIHRoZSByZXNwb25zZSB3aWxsIGJlIHZlcnkgc2xvdywgYW5kIGRvZXMgbm90IHJlc3BvbmQsIHRoZSBjb25uZWN0IGV2ZW50IHdpbGwgYmUgYmxvY2sgYnkgZXZlbnQgbG9vcCBzeXN0ZW0uXG4gICAgICAvLyBBbmQgdGltZXIgY2FsbGJhY2sgd2lsbCBiZSBmaXJlZCwgYW5kIGFib3J0KCkgd2lsbCBiZSBpbnZva2VkIGJlZm9yZSBjb25uZWN0aW9uLCB0aGVuIGdldCBcInNvY2tldCBoYW5nIHVwXCIgYW5kIGNvZGUgRUNPTk5SRVNFVC5cbiAgICAgIC8vIEF0IHRoaXMgdGltZSwgaWYgd2UgaGF2ZSBhIGxhcmdlIG51bWJlciBvZiByZXF1ZXN0LCBub2RlanMgd2lsbCBoYW5nIHVwIHNvbWUgc29ja2V0IG9uIGJhY2tncm91bmQuIGFuZCB0aGUgbnVtYmVyIHdpbGwgdXAgYW5kIHVwLlxuICAgICAgLy8gQW5kIHRoZW4gdGhlc2Ugc29ja2V0IHdoaWNoIGJlIGhhbmcgdXAgd2lsbCBkZXZvdXJpbmcgQ1BVIGxpdHRsZSBieSBsaXR0bGUuXG4gICAgICAvLyBDbGllbnRSZXF1ZXN0LnNldFRpbWVvdXQgd2lsbCBiZSBmaXJlZCBvbiB0aGUgc3BlY2lmeSBtaWxsaXNlY29uZHMsIGFuZCBjYW4gbWFrZSBzdXJlIHRoYXQgYWJvcnQoKSB3aWxsIGJlIGZpcmVkIGFmdGVyIGNvbm5lY3QuXG4gICAgICByZXEuc2V0VGltZW91dCh0aW1lb3V0LCBoYW5kbGVUaW1lb3V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXhwbGljaXRseSByZXNldCB0aGUgc29ja2V0IHRpbWVvdXQgdmFsdWUgZm9yIGEgcG9zc2libGUgYGtlZXAtYWxpdmVgIHJlcXVlc3RcbiAgICAgIHJlcS5zZXRUaW1lb3V0KDApO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICBpZiAodXRpbHMkMS5pc1N0cmVhbShkYXRhKSkge1xuICAgICAgbGV0IGVuZGVkID0gZmFsc2U7XG4gICAgICBsZXQgZXJyb3JlZCA9IGZhbHNlO1xuICAgICAgZGF0YS5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICBlbmRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIGRhdGEub25jZSgnZXJyb3InLCBlcnIgPT4ge1xuICAgICAgICBlcnJvcmVkID0gdHJ1ZTtcbiAgICAgICAgcmVxLmRlc3Ryb3koZXJyKTtcbiAgICAgIH0pO1xuICAgICAgZGF0YS5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgIGlmICghZW5kZWQgJiYgIWVycm9yZWQpIHtcbiAgICAgICAgICBhYm9ydChuZXcgQ2FuY2VsZWRFcnJvcignUmVxdWVzdCBzdHJlYW0gaGFzIGJlZW4gYWJvcnRlZCcsIGNvbmZpZywgcmVxKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBFbmZvcmNlIG1heEJvZHlMZW5ndGggZm9yIHN0cmVhbWVkIHVwbG9hZHMgb24gZXZlcnkgdHJhbnNwb3J0IHRoYXRcbiAgICAgIC8vIGRvZXMgbm90IGFwcGx5IG9wdGlvbnMubWF4Qm9keUxlbmd0aCBpdHNlbGYgKG5hdGl2ZSBodHRwL2h0dHBzLCBodHRwMixcbiAgICAgIC8vIGFuZCB1c2VyLXN1cHBsaWVkIGN1c3RvbSB0cmFuc3BvcnRzKS4gVGhlIGZvbGxvdy1yZWRpcmVjdHMgdHJhbnNwb3J0XG4gICAgICAvLyBlbmZvcmNlcyBpdCBvbiB0aGUgcmVkaXJlY3RlZCBIVFRQLzEgcGF0aC5cbiAgICAgIGxldCB1cGxvYWRTdHJlYW0gPSBkYXRhO1xuICAgICAgaWYgKG1heEJvZHlMZW5ndGggPiAtMSAmJiAhdHJhbnNwb3J0RW5mb3JjZXNNYXhCb2R5TGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGxpbWl0ID0gbWF4Qm9keUxlbmd0aDtcbiAgICAgICAgbGV0IGJ5dGVzU2VudCA9IDA7XG4gICAgICAgIHVwbG9hZFN0cmVhbSA9IHN0cmVhbS5waXBlbGluZShbZGF0YSwgbmV3IHN0cmVhbS5UcmFuc2Zvcm0oe1xuICAgICAgICAgIHRyYW5zZm9ybShjaHVuaywgX2VuYywgY2IpIHtcbiAgICAgICAgICAgIGJ5dGVzU2VudCArPSBjaHVuay5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoYnl0ZXNTZW50ID4gbGltaXQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNiKG5ldyBBeGlvc0Vycm9yKCdSZXF1ZXN0IGJvZHkgbGFyZ2VyIHRoYW4gbWF4Qm9keUxlbmd0aCBsaW1pdCcsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBjb25maWcsIHJlcSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2IobnVsbCwgY2h1bmspO1xuICAgICAgICAgIH1cbiAgICAgICAgfSldLCB1dGlscyQxLm5vb3ApO1xuICAgICAgICB1cGxvYWRTdHJlYW0ub24oJ2Vycm9yJywgZXJyID0+IHtcbiAgICAgICAgICBpZiAoIXJlcS5kZXN0cm95ZWQpIHJlcS5kZXN0cm95KGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdXBsb2FkU3RyZWFtLnBpcGUocmVxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSAmJiByZXEud3JpdGUoZGF0YSk7XG4gICAgICByZXEuZW5kKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBpc1VSTFNhbWVPcmlnaW4gPSBwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYgPyAoKG9yaWdpbiwgaXNNU0lFKSA9PiB1cmwgPT4ge1xuICB1cmwgPSBuZXcgVVJMKHVybCwgcGxhdGZvcm0ub3JpZ2luKTtcbiAgcmV0dXJuIG9yaWdpbi5wcm90b2NvbCA9PT0gdXJsLnByb3RvY29sICYmIG9yaWdpbi5ob3N0ID09PSB1cmwuaG9zdCAmJiAoaXNNU0lFIHx8IG9yaWdpbi5wb3J0ID09PSB1cmwucG9ydCk7XG59KShuZXcgVVJMKHBsYXRmb3JtLm9yaWdpbiksIHBsYXRmb3JtLm5hdmlnYXRvciAmJiAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KHBsYXRmb3JtLm5hdmlnYXRvci51c2VyQWdlbnQpKSA6ICgpID0+IHRydWU7XG5cbnZhciBjb29raWVzID0gcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyRW52ID9cbi8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxue1xuICB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUsIHNhbWVTaXRlKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBjb25zdCBjb29raWUgPSBbYCR7bmFtZX09JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpfWBdO1xuICAgIGlmICh1dGlscyQxLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICBjb29raWUucHVzaChgZXhwaXJlcz0ke25ldyBEYXRlKGV4cGlyZXMpLnRvVVRDU3RyaW5nKCl9YCk7XG4gICAgfVxuICAgIGlmICh1dGlscyQxLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICBjb29raWUucHVzaChgcGF0aD0ke3BhdGh9YCk7XG4gICAgfVxuICAgIGlmICh1dGlscyQxLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgIGNvb2tpZS5wdXNoKGBkb21haW49JHtkb21haW59YCk7XG4gICAgfVxuICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzJDEuaXNTdHJpbmcoc2FtZVNpdGUpKSB7XG4gICAgICBjb29raWUucHVzaChgU2FtZVNpdGU9JHtzYW1lU2l0ZX1gKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gIH0sXG4gIHJlYWQobmFtZSkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcbiAgICAvLyBNYXRjaCBuYW1lPXZhbHVlIGJ5IHNwbGl0dGluZyBvbiB0aGUgc2VtaWNvbG9uIHNlcGFyYXRvciBpbnN0ZWFkIG9mIGJ1aWxkaW5nIGFcbiAgICAvLyBSZWdFeHAgZnJvbSBgbmFtZWAg4oCUIGludGVycG9sYXRpbmcgYW4gdW5lc2NhcGVkIHN0cmluZyBpbnRvIGEgUmVnRXhwIHdvdWxkIGxldFxuICAgIC8vIG1ldGFjaGFyYWN0ZXJzIChlLmcuIGAuKz9gIGluIGFuIGF0dGFja2VyLWluZmx1ZW5jZWQgY29va2llIG5hbWUpIGNhdXNlIFJlRG9TIG9yXG4gICAgLy8gbWF0Y2ggdGhlIHdyb25nIGNvb2tpZS4gQnJvd3NlcnMgbWF5IHNlcmlhbGl6ZSBjb29raWUgcGFpcnMgYXMgZWl0aGVyIFwiO1wiIG9yXG4gICAgLy8gXCI7IFwiLCBzbyBpZ25vcmUgb3B0aW9uYWwgd2hpdGVzcGFjZSBiZWZvcmUgZWFjaCBjb29raWUgbmFtZS5cbiAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb29raWUgPSBjb29raWVzW2ldLnJlcGxhY2UoL15cXHMrLywgJycpO1xuICAgICAgY29uc3QgZXEgPSBjb29raWUuaW5kZXhPZignPScpO1xuICAgICAgaWYgKGVxICE9PSAtMSAmJiBjb29raWUuc2xpY2UoMCwgZXEpID09PSBuYW1lKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc2xpY2UoZXEgKyAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gY29va2llLnNsaWNlKGVxICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG4gIHJlbW92ZShuYW1lKSB7XG4gICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwLCAnLycpO1xuICB9XG59IDpcbi8vIE5vbi1zdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbntcbiAgd3JpdGUoKSB7fSxcbiAgcmVhZCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcbiAgcmVtb3ZlKCkge31cbn07XG5cbmNvbnN0IGhlYWRlcnNUb09iamVjdCA9IHRoaW5nID0+IHRoaW5nIGluc3RhbmNlb2YgQXhpb3NIZWFkZXJzID8ge1xuICAuLi50aGluZ1xufSA6IHRoaW5nO1xuY29uc3Qgb3duRW51bWVyYWJsZUtleXMgPSB0aGluZyA9PiB7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpbmcpLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRoaW5nKS5maWx0ZXIoc3ltYm9sID0+IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpbmcsIHN5bWJvbCkuZW51bWVyYWJsZSkpO1xuICB9XG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGluZyk7XG59O1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbmZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzEgPSBjb25maWcxIHx8IHt9O1xuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcblxuICAvLyBVc2UgYSBudWxsLXByb3RvdHlwZSBvYmplY3Qgc28gdGhhdCBkb3duc3RyZWFtIHJlYWRzIHN1Y2ggYXMgYGNvbmZpZy5hdXRoYFxuICAvLyBvciBgY29uZmlnLmJhc2VVUkxgIGNhbm5vdCBpbmhlcml0IHBvbGx1dGVkIHZhbHVlcyBmcm9tIE9iamVjdC5wcm90b3R5cGUuXG4gIC8vIGBoYXNPd25Qcm9wZXJ0eWAgaXMgcmVzdG9yZWQgYXMgYSBub24tZW51bWVyYWJsZSBvd24gc2xvdCB0byBwcmVzZXJ2ZVxuICAvLyBlcmdvbm9taWNzIGZvciB1c2VyIGNvZGUgdGhhdCByZWxpZXMgb24gaXQuXG4gIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb25maWcsICdoYXNPd25Qcm9wZXJ0eScsIHtcbiAgICAvLyBOdWxsLXByb3RvIGRlc2NyaXB0b3Igc28gYSBwb2xsdXRlZCBPYmplY3QucHJvdG90eXBlLmdldCBjYW5ub3QgdHVyblxuICAgIC8vIHRoaXMgZGF0YSBkZXNjcmlwdG9yIGludG8gYW4gYWNjZXNzb3IgZGVzY3JpcHRvciBvbiB0aGUgd2F5IGluLlxuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICB2YWx1ZTogT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlLCBwcm9wLCBjYXNlbGVzcykge1xuICAgIGlmICh1dGlscyQxLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscyQxLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzJDEubWVyZ2UuY2FsbCh7XG4gICAgICAgIGNhc2VsZXNzXG4gICAgICB9LCB0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscyQxLmlzUGxhaW5PYmplY3Qoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHV0aWxzJDEubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscyQxLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG4gIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMoYSwgYiwgcHJvcCwgY2FzZWxlc3MpIHtcbiAgICBpZiAoIXV0aWxzJDEuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShhLCBiLCBwcm9wLCBjYXNlbGVzcyk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMkMS5pc1VuZGVmaW5lZChhKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgYSwgcHJvcCwgY2FzZWxlc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKGEsIGIpIHtcbiAgICBpZiAoIXV0aWxzJDEuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKGEsIGIpIHtcbiAgICBpZiAoIXV0aWxzJDEuaXNVbmRlZmluZWQoYikpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGIpO1xuICAgIH0gZWxzZSBpZiAoIXV0aWxzJDEuaXNVbmRlZmluZWQoYSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRNZXJnZWRUcmFuc2l0aW9uYWxPcHRpb24ocHJvcCkge1xuICAgIGNvbnN0IHRyYW5zaXRpb25hbDIgPSB1dGlscyQxLmhhc093blByb3AoY29uZmlnMiwgJ3RyYW5zaXRpb25hbCcpID8gY29uZmlnMi50cmFuc2l0aW9uYWwgOiB1bmRlZmluZWQ7XG4gICAgaWYgKCF1dGlscyQxLmlzVW5kZWZpbmVkKHRyYW5zaXRpb25hbDIpKSB7XG4gICAgICBpZiAodXRpbHMkMS5pc1BsYWluT2JqZWN0KHRyYW5zaXRpb25hbDIpKSB7XG4gICAgICAgIGlmICh1dGlscyQxLmhhc093blByb3AodHJhbnNpdGlvbmFsMiwgcHJvcCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbmFsMltwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdHJhbnNpdGlvbmFsMSA9IHV0aWxzJDEuaGFzT3duUHJvcChjb25maWcxLCAndHJhbnNpdGlvbmFsJykgPyBjb25maWcxLnRyYW5zaXRpb25hbCA6IHVuZGVmaW5lZDtcbiAgICBpZiAodXRpbHMkMS5pc1BsYWluT2JqZWN0KHRyYW5zaXRpb25hbDEpICYmIHV0aWxzJDEuaGFzT3duUHJvcCh0cmFuc2l0aW9uYWwxLCBwcm9wKSkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb25hbDFbcHJvcF07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gbWVyZ2VEaXJlY3RLZXlzKGEsIGIsIHByb3ApIHtcbiAgICBpZiAodXRpbHMkMS5oYXNPd25Qcm9wKGNvbmZpZzIsIHByb3ApKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoYSwgYik7XG4gICAgfSBlbHNlIGlmICh1dGlscyQxLmhhc093blByb3AoY29uZmlnMSwgcHJvcCkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBtZXJnZU1hcCA9IHtcbiAgICB1cmw6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgbWV0aG9kOiB2YWx1ZUZyb21Db25maWcyLFxuICAgIGRhdGE6IHZhbHVlRnJvbUNvbmZpZzIsXG4gICAgYmFzZVVSTDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zZm9ybVJlc3BvbnNlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHBhcmFtc1NlcmlhbGl6ZXI6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgdGltZW91dDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB0aW1lb3V0RXJyb3JNZXNzYWdlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHdpdGhDcmVkZW50aWFsczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICB3aXRoWFNSRlRva2VuOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGFkYXB0ZXI6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgcmVzcG9uc2VUeXBlOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHhzcmZDb29raWVOYW1lOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHhzcmZIZWFkZXJOYW1lOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgb25Eb3dubG9hZFByb2dyZXNzOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGRlY29tcHJlc3M6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgbWF4Q29udGVudExlbmd0aDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBtYXhCb2R5TGVuZ3RoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGJlZm9yZVJlZGlyZWN0OiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHRyYW5zcG9ydDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBodHRwQWdlbnQ6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgaHR0cHNBZ2VudDogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBjYW5jZWxUb2tlbjogZGVmYXVsdFRvQ29uZmlnMixcbiAgICBzb2NrZXRQYXRoOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIGFsbG93ZWRTb2NrZXRQYXRoczogZGVmYXVsdFRvQ29uZmlnMixcbiAgICByZXNwb25zZUVuY29kaW5nOiBkZWZhdWx0VG9Db25maWcyLFxuICAgIHZhbGlkYXRlU3RhdHVzOiBtZXJnZURpcmVjdEtleXMsXG4gICAgaGVhZGVyczogKGEsIGIsIHByb3ApID0+IG1lcmdlRGVlcFByb3BlcnRpZXMoaGVhZGVyc1RvT2JqZWN0KGEpLCBoZWFkZXJzVG9PYmplY3QoYiksIHByb3AsIHRydWUpXG4gIH07XG4gIHV0aWxzJDEuZm9yRWFjaChvd25FbnVtZXJhYmxlS2V5cyh7XG4gICAgLi4uY29uZmlnMSxcbiAgICAuLi5jb25maWcyXG4gIH0pLCBmdW5jdGlvbiBjb21wdXRlQ29uZmlnVmFsdWUocHJvcCkge1xuICAgIGlmIChwcm9wID09PSAnX19wcm90b19fJyB8fCBwcm9wID09PSAnY29uc3RydWN0b3InIHx8IHByb3AgPT09ICdwcm90b3R5cGUnKSByZXR1cm47XG4gICAgY29uc3QgbWVyZ2UgPSB1dGlscyQxLmhhc093blByb3AobWVyZ2VNYXAsIHByb3ApID8gbWVyZ2VNYXBbcHJvcF0gOiBtZXJnZURlZXBQcm9wZXJ0aWVzO1xuICAgIGNvbnN0IGEgPSB1dGlscyQxLmhhc093blByb3AoY29uZmlnMSwgcHJvcCkgPyBjb25maWcxW3Byb3BdIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGIgPSB1dGlscyQxLmhhc093blByb3AoY29uZmlnMiwgcHJvcCkgPyBjb25maWcyW3Byb3BdIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gbWVyZ2UoYSwgYiwgcHJvcCk7XG4gICAgdXRpbHMkMS5pc1VuZGVmaW5lZChjb25maWdWYWx1ZSkgJiYgbWVyZ2UgIT09IG1lcmdlRGlyZWN0S2V5cyB8fCAoY29uZmlnW3Byb3BdID0gY29uZmlnVmFsdWUpO1xuICB9KTtcbiAgaWYgKHV0aWxzJDEuaGFzT3duUHJvcChjb25maWcyLCAndmFsaWRhdGVTdGF0dXMnKSAmJiB1dGlscyQxLmlzVW5kZWZpbmVkKGNvbmZpZzIudmFsaWRhdGVTdGF0dXMpICYmIGdldE1lcmdlZFRyYW5zaXRpb25hbE9wdGlvbigndmFsaWRhdGVTdGF0dXNVbmRlZmluZWRSZXNvbHZlcycpID09PSBmYWxzZSkge1xuICAgIGlmICh1dGlscyQxLmhhc093blByb3AoY29uZmlnMSwgJ3ZhbGlkYXRlU3RhdHVzJykpIHtcbiAgICAgIGNvbmZpZy52YWxpZGF0ZVN0YXR1cyA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMS52YWxpZGF0ZVN0YXR1cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBjb25maWcudmFsaWRhdGVTdGF0dXM7XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWc7XG59XG5cbi8qKlxuICogRW5jb2RlIGEgVVRGLTggc3RyaW5nIHRvIGEgTGF0aW4tMSBieXRlIHN0cmluZyBmb3IgdXNlIHdpdGggYnRvYSgpLlxuICogVGhpcyBpcyBhIG1vZGVybiByZXBsYWNlbWVudCBmb3IgdGhlIGRlcHJlY2F0ZWQgdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpIHBhdHRlcm4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGVuY29kZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFVURi04IGJ5dGVzIGFzIGEgTGF0aW4tMSBzdHJpbmdcbiAqL1xuY29uc3QgZW5jb2RlVVRGOCQxID0gc3RyID0+IGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2dpLCAoXywgaGV4KSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGhleCwgMTYpKSk7XG5mdW5jdGlvbiByZXNvbHZlQ29uZmlnKGNvbmZpZykge1xuICBjb25zdCBuZXdDb25maWcgPSBtZXJnZUNvbmZpZyh7fSwgY29uZmlnKTtcblxuICAvLyBSZWFkIG9ubHkgb3duIHByb3BlcnRpZXMgdG8gcHJldmVudCBwcm90b3R5cGUgcG9sbHV0aW9uIGdhZGdldHNcbiAgLy8gKGUuZy4gT2JqZWN0LnByb3RvdHlwZS5iYXNlVVJMID0gJ2h0dHBzOi8vZXZpbC5jb20nKS5cbiAgY29uc3Qgb3duID0ga2V5ID0+IHV0aWxzJDEuaGFzT3duUHJvcChuZXdDb25maWcsIGtleSkgPyBuZXdDb25maWdba2V5XSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgZGF0YSA9IG93bignZGF0YScpO1xuICBsZXQgd2l0aFhTUkZUb2tlbiA9IG93bignd2l0aFhTUkZUb2tlbicpO1xuICBjb25zdCB4c3JmSGVhZGVyTmFtZSA9IG93bigneHNyZkhlYWRlck5hbWUnKTtcbiAgY29uc3QgeHNyZkNvb2tpZU5hbWUgPSBvd24oJ3hzcmZDb29raWVOYW1lJyk7XG4gIGxldCBoZWFkZXJzID0gb3duKCdoZWFkZXJzJyk7XG4gIGNvbnN0IGF1dGggPSBvd24oJ2F1dGgnKTtcbiAgY29uc3QgYmFzZVVSTCA9IG93bignYmFzZVVSTCcpO1xuICBjb25zdCBhbGxvd0Fic29sdXRlVXJscyA9IG93bignYWxsb3dBYnNvbHV0ZVVybHMnKTtcbiAgY29uc3QgdXJsID0gb3duKCd1cmwnKTtcbiAgbmV3Q29uZmlnLmhlYWRlcnMgPSBoZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oaGVhZGVycyk7XG4gIG5ld0NvbmZpZy51cmwgPSBidWlsZFVSTChidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHVybCwgYWxsb3dBYnNvbHV0ZVVybHMsIG5ld0NvbmZpZyksIG93bigncGFyYW1zJyksIG93bigncGFyYW1zU2VyaWFsaXplcicpKTtcblxuICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gIGlmIChhdXRoKSB7XG4gICAgY29uc3QgdXNlcm5hbWUgPSB1dGlscyQxLmdldFNhZmVQcm9wKGF1dGgsICd1c2VybmFtZScpIHx8ICcnO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdXRpbHMkMS5nZXRTYWZlUHJvcChhdXRoLCAncGFzc3dvcmQnKSB8fCAnJztcbiAgICB0cnkge1xuICAgICAgaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyAocGFzc3dvcmQgPyBlbmNvZGVVVEY4JDEocGFzc3dvcmQpIDogJycpKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgQXhpb3NFcnJvci5mcm9tKGUsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUsIGNvbmZpZyk7XG4gICAgfVxuICB9XG4gIGlmICh1dGlscyQxLmlzRm9ybURhdGEoZGF0YSkpIHtcbiAgICBjb25zdCBnZXRIZWFkZXJzID0gdXRpbHMkMS5nZXRTYWZlUHJvcChkYXRhLCAnZ2V0SGVhZGVycycpO1xuICAgIGlmIChwbGF0Zm9ybS5oYXNTdGFuZGFyZEJyb3dzZXJFbnYgfHwgcGxhdGZvcm0uaGFzU3RhbmRhcmRCcm93c2VyV2ViV29ya2VyRW52IHx8IHV0aWxzJDEuaXNSZWFjdE5hdGl2ZShkYXRhKSkge1xuICAgICAgaGVhZGVycy5zZXRDb250ZW50VHlwZSh1bmRlZmluZWQpOyAvLyBicm93c2VyL3dlYiB3b3JrZXIvUk4gaGFuZGxlcyBpdFxuICAgIH0gZWxzZSBpZiAodXRpbHMkMS5pc0Z1bmN0aW9uKGdldEhlYWRlcnMpKSB7XG4gICAgICAvLyBOb2RlLmpzIEZvcm1EYXRhIChsaWtlIGZvcm0tZGF0YSBwYWNrYWdlKVxuICAgICAgc2V0Rm9ybURhdGFIZWFkZXJzKGhlYWRlcnMsIGdldEhlYWRlcnMuY2FsbChkYXRhKSwgb3duKCdmb3JtRGF0YUhlYWRlclBvbGljeScpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG5cbiAgaWYgKHBsYXRmb3JtLmhhc1N0YW5kYXJkQnJvd3NlckVudikge1xuICAgIGlmICh1dGlscyQxLmlzRnVuY3Rpb24od2l0aFhTUkZUb2tlbikpIHtcbiAgICAgIHdpdGhYU1JGVG9rZW4gPSB3aXRoWFNSRlRva2VuKG5ld0NvbmZpZyk7XG4gICAgfVxuXG4gICAgLy8gU3RyaWN0IGJvb2xlYW4gY2hlY2sg4oCUIHByZXZlbnRzIHByb3RvLXBvbGx1dGlvbiBnYWRnZXRzIChlLmcuIE9iamVjdC5wcm90b3R5cGUud2l0aFhTUkZUb2tlbiA9IDEpXG4gICAgLy8gYW5kIG1pc2NvbmZpZ3VyYXRpb25zIChlLmcuIFwiZmFsc2VcIikgZnJvbSBzaG9ydC1jaXJjdWl0aW5nIHRoZSBzYW1lLW9yaWdpbiBjaGVjayBhbmQgbGVha2luZ1xuICAgIC8vIHRoZSBYU1JGIHRva2VuIGNyb3NzLW9yaWdpbi5cbiAgICBjb25zdCBzaG91bGRTZW5kWFNSRiA9IHdpdGhYU1JGVG9rZW4gPT09IHRydWUgfHwgd2l0aFhTUkZUb2tlbiA9PSBudWxsICYmIGlzVVJMU2FtZU9yaWdpbihuZXdDb25maWcudXJsKTtcbiAgICBpZiAoc2hvdWxkU2VuZFhTUkYpIHtcbiAgICAgIGNvbnN0IHhzcmZWYWx1ZSA9IHhzcmZIZWFkZXJOYW1lICYmIHhzcmZDb29raWVOYW1lICYmIGNvb2tpZXMucmVhZCh4c3JmQ29va2llTmFtZSk7XG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIGhlYWRlcnMuc2V0KHhzcmZIZWFkZXJOYW1lLCB4c3JmVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3Q29uZmlnO1xufVxuXG5jb25zdCBpc1hIUkFkYXB0ZXJTdXBwb3J0ZWQgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnO1xudmFyIHhockFkYXB0ZXIgPSBpc1hIUkFkYXB0ZXJTdXBwb3J0ZWQgJiYgZnVuY3Rpb24gKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIGNvbnN0IF9jb25maWcgPSByZXNvbHZlQ29uZmlnKGNvbmZpZyk7XG4gICAgbGV0IHJlcXVlc3REYXRhID0gX2NvbmZpZy5kYXRhO1xuICAgIGNvbnN0IHJlcXVlc3RIZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20oX2NvbmZpZy5oZWFkZXJzKS5ub3JtYWxpemUoKTtcbiAgICBsZXQge1xuICAgICAgcmVzcG9uc2VUeXBlLFxuICAgICAgb25VcGxvYWRQcm9ncmVzcyxcbiAgICAgIG9uRG93bmxvYWRQcm9ncmVzc1xuICAgIH0gPSBfY29uZmlnO1xuICAgIGxldCBvbkNhbmNlbGVkO1xuICAgIGxldCB1cGxvYWRUaHJvdHRsZWQsIGRvd25sb2FkVGhyb3R0bGVkO1xuICAgIGxldCBmbHVzaFVwbG9hZCwgZmx1c2hEb3dubG9hZCwgZmx1c2hEb3dubG9hZFdpdGhFdmVudDtcbiAgICBmdW5jdGlvbiBkb25lKCkge1xuICAgICAgZmx1c2hVcGxvYWQgJiYgZmx1c2hVcGxvYWQoKTsgLy8gZmx1c2ggZXZlbnRzXG4gICAgICBmbHVzaERvd25sb2FkICYmIGZsdXNoRG93bmxvYWQoKTsgLy8gZmx1c2ggZXZlbnRzXG5cbiAgICAgIF9jb25maWcuY2FuY2VsVG9rZW4gJiYgX2NvbmZpZy5jYW5jZWxUb2tlbi51bnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIF9jb25maWcuc2lnbmFsICYmIF9jb25maWcuc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgfVxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vcGVuKF9jb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIF9jb25maWcudXJsLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gX2NvbmZpZy50aW1lb3V0O1xuICAgIGZ1bmN0aW9uIG9ubG9hZGVuZChldmVudCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU3RhdHVzIDAgbWVhbnMgbm8gcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLCB3aGljaCBvbmVycm9yIGFuZCBvbmFib3J0IG5vcm1hbGx5XG4gICAgICAvLyByZWplY3QgYmVmb3JlIHRoaXMgcnVucy4gRmlyZWZveCAxNTIgZmlyZXMgb25seSByZWFkeXN0YXRlY2hhbmdlIGFuZCBsb2FkZW5kIGZvclxuICAgICAgLy8gbmF2aWdhdGlvbi1jYW5jZWxlZCByZXF1ZXN0cyAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTUwNTM4OSksXG4gICAgICAvLyBsZWF2aW5nIHNldHRsZSgpIHRvIHJlc29sdmUgdGhlbSBhcyBhbiBlbXB0eSBzdWNjZXNzLiBFQ09OTkFCT1JURUQgaXMgdGhlIGVycm9yXG4gICAgICAvLyBvbmFib3J0IHJhaXNlZCBvbiBGaXJlZm94IDE1MS4gUmVhZHMgb3ZlciBmaWxlOiwgd2hpY2ggc29tZSBlbnZpcm9ubWVudHMgcmVwb3J0IGFzXG4gICAgICAvLyBzdGF0dXMgMCBvbiBzdWNjZXNzLCBhcmUgZXhjbHVkZWQgYnkgdGhlIHJlcXVlc3QgVVJMJ3Mgc2NoZW1lIGFmdGVyIGJyb3dzZXItc3R5bGVcbiAgICAgIC8vIHByZXByb2Nlc3NpbmcsIGJ5IHRoZSBwYWdlIG9yaWdpbidzIHNjaGVtZSBmb3IgcmVsYXRpdmUgVVJMcyAod2hpY2ggaW5oZXJpdCBpdCksIG9yXG4gICAgICAvLyBieSByZXNwb25zZVVSTCB3aGVyZSBpbXBsZW1lbnRlZC5cbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAocGFyc2VQcm90b2NvbChub3JtYWxpemVVUkxGb3JQcm90b2NvbENoZWNrKF9jb25maWcudXJsKSkgfHwgcGFyc2VQcm90b2NvbChwbGF0Zm9ybS5vcmlnaW4pKSAhPT0gJ2ZpbGUnICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLnN0YXJ0c1dpdGgoJ2ZpbGU6JykpKSB7XG4gICAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgQXhpb3NFcnJvci5FQ09OTkFCT1JURUQsIGNvbmZpZywgcmVxdWVzdCkpO1xuICAgICAgICBkb25lKCk7XG5cbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBXaGVuIGxvYWRlbmQgaXMgc3RpbGwgZGlzcGF0Y2hpbmcsIGZsdXNoaW5nIHdpdGggaXQgZ2l2ZXMgcHJvZ3Jlc3NcbiAgICAgIC8vIGxpc3RlbmVycyBhIGZpbmFsIGRlbGl2ZXJ5IHdob3NlIGV2ZW50IGhhcyBhIGxpdmUgdGFyZ2V0LiBUaGUgbGVnYWN5XG4gICAgICAvLyByZWFkeS1zdGF0ZSBmYWxsYmFjayBoYXMgbm8gZXZlbnQsIHNvIHJlcGxheSBpdHMgcGVuZGluZyBwcm9ncmVzcy5cbiAgICAgIC8vIEEgdGhyb3dpbmcgbGlzdGVuZXIgbXVzdCBub3QgYmxvY2sgc2V0dGxlbWVudDsgcmV0aHJvdyBhc3luY2hyb25vdXNseSxcbiAgICAgIC8vIG1hdGNoaW5nIGhvdyBsaXN0ZW5lciBlcnJvcnMgc3VyZmFjZSBvbiB0aGUgdGhyb3R0bGUgdGltZXIgcGF0aC5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgIGZsdXNoRG93bmxvYWRXaXRoRXZlbnQgJiYgZmx1c2hEb3dubG9hZFdpdGhFdmVudChldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmx1c2hEb3dubG9hZCAmJiBmbHVzaERvd25sb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBBIGZpbmFsIHByb2dyZXNzIGNhbGxiYWNrIGNhbiBjYW5jZWwgdGhlIHJlcXVlc3Qgc3luY2hyb25vdXNseS5cbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICBjb25zdCByZXNwb25zZUhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbSgnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ICYmIHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpO1xuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gIXJlc3BvbnNlVHlwZSB8fCByZXNwb25zZVR5cGUgPT09ICd0ZXh0JyB8fCByZXNwb25zZVR5cGUgPT09ICdqc29uJyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHJlcXVlc3RcbiAgICAgIH07XG4gICAgICBzZXR0bGUoZnVuY3Rpb24gX3Jlc29sdmUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIGZ1bmN0aW9uIF9yZWplY3QoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoJ29ubG9hZGVuZCcgaW4gcmVxdWVzdCkge1xuICAgICAgLy8gVXNlIG9ubG9hZGVuZCBpZiBhdmFpbGFibGVcbiAgICAgIHJlcXVlc3Qub25sb2FkZW5kID0gb25sb2FkZW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlIHRvIGVtdWxhdGUgb25sb2FkZW5kXG4gICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuc3RhcnRzV2l0aCgnZmlsZTonKSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVhZHlzdGF0ZSBoYW5kbGVyIGlzIGNhbGxpbmcgYmVmb3JlIG9uZXJyb3Igb3Igb250aW1lb3V0IGhhbmRsZXJzLFxuICAgICAgICAvLyBzbyB3ZSBzaG91bGQgY2FsbCBvbmxvYWRlbmQgb24gdGhlIG5leHQgJ3RpY2snXG4gICAgICAgIHNldFRpbWVvdXQob25sb2FkZW5kKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgQXhpb3NFcnJvci5FQ09OTkFCT1JURUQsIGNvbmZpZywgcmVxdWVzdCkpO1xuICAgICAgZG9uZSgpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKGV2ZW50KSB7XG4gICAgICAvLyBCcm93c2VycyBkZWxpdmVyIGEgUHJvZ3Jlc3NFdmVudCBpbiBYSFIgb25lcnJvclxuICAgICAgLy8gKG1lc3NhZ2UgbWF5IGJlIGVtcHR5OyB3aGVuIHByZXNlbnQsIHN1cmZhY2UgaXQpXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L2Vycm9yX2V2ZW50XG4gICAgICBjb25zdCBtc2cgPSBldmVudCAmJiBldmVudC5tZXNzYWdlID8gZXZlbnQubWVzc2FnZSA6ICdOZXR3b3JrIEVycm9yJztcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBBeGlvc0Vycm9yKG1zZywgQXhpb3NFcnJvci5FUlJfTkVUV09SSywgY29uZmlnLCByZXF1ZXN0KTtcbiAgICAgIC8vIGF0dGFjaCB0aGUgdW5kZXJseWluZyBldmVudCBmb3IgY29uc3VtZXJzIHdobyB3YW50IGRldGFpbHNcbiAgICAgIGVyci5ldmVudCA9IGV2ZW50IHx8IG51bGw7XG4gICAgICByZWplY3QoZXJyKTtcbiAgICAgIGRvbmUoKTtcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIGxldCB0aW1lb3V0RXJyb3JNZXNzYWdlID0gX2NvbmZpZy50aW1lb3V0ID8gJ3RpbWVvdXQgb2YgJyArIF9jb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcgOiAndGltZW91dCBleGNlZWRlZCc7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uYWwgPSBfY29uZmlnLnRyYW5zaXRpb25hbCB8fCB0cmFuc2l0aW9uYWxEZWZhdWx0cztcbiAgICAgIGlmIChfY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IF9jb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCB0cmFuc2l0aW9uYWwuY2xhcmlmeVRpbWVvdXRFcnJvciA/IEF4aW9zRXJyb3IuRVRJTUVET1VUIDogQXhpb3NFcnJvci5FQ09OTkFCT1JURUQsIGNvbmZpZywgcmVxdWVzdCkpO1xuICAgICAgZG9uZSgpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgIHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQgJiYgcmVxdWVzdEhlYWRlcnMuc2V0Q29udGVudFR5cGUobnVsbCk7XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMkMS5mb3JFYWNoKHRvQnl0ZVN0cmluZ0hlYWRlck9iamVjdChyZXF1ZXN0SGVhZGVycyksIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoIXV0aWxzJDEuaXNVbmRlZmluZWQoX2NvbmZpZy53aXRoQ3JlZGVudGlhbHMpKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9ICEhX2NvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChyZXNwb25zZVR5cGUgJiYgcmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gX2NvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmIChvbkRvd25sb2FkUHJvZ3Jlc3MpIHtcbiAgICAgIFtkb3dubG9hZFRocm90dGxlZCwgZmx1c2hEb3dubG9hZCwgZmx1c2hEb3dubG9hZFdpdGhFdmVudF0gPSBwcm9ncmVzc0V2ZW50UmVkdWNlcihvbkRvd25sb2FkUHJvZ3Jlc3MsIHRydWUpO1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGRvd25sb2FkVGhyb3R0bGVkKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmIChvblVwbG9hZFByb2dyZXNzICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICBbdXBsb2FkVGhyb3R0bGVkLCBmbHVzaFVwbG9hZF0gPSBwcm9ncmVzc0V2ZW50UmVkdWNlcihvblVwbG9hZFByb2dyZXNzKTtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgdXBsb2FkVGhyb3R0bGVkKTtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmbHVzaFVwbG9hZCk7XG4gICAgfVxuICAgIGlmIChfY29uZmlnLmNhbmNlbFRva2VuIHx8IF9jb25maWcuc2lnbmFsKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICAgICAgb25DYW5jZWxlZCA9IGNhbmNlbCA9PiB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWplY3QoIWNhbmNlbCB8fCBjYW5jZWwudHlwZSA/IG5ldyBDYW5jZWxlZEVycm9yKG51bGwsIGNvbmZpZywgcmVxdWVzdCkgOiBjYW5jZWwpO1xuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9O1xuICAgICAgX2NvbmZpZy5jYW5jZWxUb2tlbiAmJiBfY29uZmlnLmNhbmNlbFRva2VuLnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIGlmIChfY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBfY29uZmlnLnNpZ25hbC5hYm9ydGVkID8gb25DYW5jZWxlZCgpIDogX2NvbmZpZy5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbkNhbmNlbGVkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcHJvdG9jb2wgPSBwYXJzZVByb3RvY29sKF9jb25maWcudXJsKTtcbiAgICBpZiAocHJvdG9jb2wgJiYgIXBsYXRmb3JtLnByb3RvY29scy5pbmNsdWRlcyhwcm90b2NvbCkpIHtcbiAgICAgIHJlamVjdChuZXcgQXhpb3NFcnJvcignVW5zdXBwb3J0ZWQgcHJvdG9jb2wgJyArIHByb3RvY29sICsgJzonLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVRVUVTVCwgY29uZmlnKSk7XG4gICAgICBkb25lKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSB8fCBudWxsKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjb21wb3NlU2lnbmFscyA9IChzaWduYWxzLCB0aW1lb3V0KSA9PiB7XG4gIHNpZ25hbHMgPSBzaWduYWxzID8gc2lnbmFscy5maWx0ZXIoQm9vbGVhbikgOiBbXTtcbiAgaWYgKCF0aW1lb3V0ICYmICFzaWduYWxzLmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICBsZXQgYWJvcnRlZCA9IGZhbHNlO1xuICBjb25zdCBvbmFib3J0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIGlmICghYWJvcnRlZCkge1xuICAgICAgYWJvcnRlZCA9IHRydWU7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgY29uc3QgZXJyID0gcmVhc29uIGluc3RhbmNlb2YgRXJyb3IgPyByZWFzb24gOiB0aGlzLnJlYXNvbjtcbiAgICAgIGNvbnRyb2xsZXIuYWJvcnQoZXJyIGluc3RhbmNlb2YgQXhpb3NFcnJvciA/IGVyciA6IG5ldyBDYW5jZWxlZEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiBlcnIpKTtcbiAgICB9XG4gIH07XG4gIGxldCB0aW1lciA9IHRpbWVvdXQgJiYgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGltZXIgPSBudWxsO1xuICAgIG9uYWJvcnQobmV3IEF4aW9zRXJyb3IoYHRpbWVvdXQgb2YgJHt0aW1lb3V0fW1zIGV4Y2VlZGVkYCwgQXhpb3NFcnJvci5FVElNRURPVVQpKTtcbiAgfSwgdGltZW91dCk7XG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgIGlmICghc2lnbmFscykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aW1lciAmJiBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gbnVsbDtcbiAgICBzaWduYWxzLmZvckVhY2goc2lnbmFsID0+IHtcbiAgICAgIHNpZ25hbC51bnN1YnNjcmliZSA/IHNpZ25hbC51bnN1YnNjcmliZShvbmFib3J0KSA6IHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uYWJvcnQpO1xuICAgIH0pO1xuICAgIHNpZ25hbHMgPSBudWxsO1xuICB9O1xuICBzaWduYWxzLmZvckVhY2goc2lnbmFsID0+IHtcbiAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIG9uYWJvcnQuY2FsbChzaWduYWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbmFib3J0LCB7XG4gICAgICBvbmNlOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCB7XG4gICAgc2lnbmFsXG4gIH0gPSBjb250cm9sbGVyO1xuICBzaWduYWwudW5zdWJzY3JpYmUgPSAoKSA9PiB1dGlscyQxLmFzYXAodW5zdWJzY3JpYmUpO1xuICByZXR1cm4gc2lnbmFsO1xufTtcblxuY29uc3Qgc3RyZWFtQ2h1bmsgPSBmdW5jdGlvbiogKGNodW5rLCBjaHVua1NpemUpIHtcbiAgbGV0IGxlbiA9IGNodW5rLmJ5dGVMZW5ndGg7XG4gIGlmIChsZW4gPCBjaHVua1NpemUpIHtcbiAgICB5aWVsZCBjaHVuaztcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHBvcyA9IDA7XG4gIGxldCBlbmQ7XG4gIHdoaWxlIChwb3MgPCBsZW4pIHtcbiAgICBlbmQgPSBwb3MgKyBjaHVua1NpemU7XG4gICAgeWllbGQgY2h1bmsuc2xpY2UocG9zLCBlbmQpO1xuICAgIHBvcyA9IGVuZDtcbiAgfVxufTtcbmNvbnN0IHJlYWRCeXRlcyA9IGFzeW5jIGZ1bmN0aW9uKiAoaXRlcmFibGUsIGNodW5rU2l6ZSkge1xuICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHJlYWRTdHJlYW0oaXRlcmFibGUpKSB7XG4gICAgeWllbGQqIHN0cmVhbUNodW5rKGNodW5rLCBjaHVua1NpemUpO1xuICB9XG59O1xuY29uc3QgcmVhZFN0cmVhbSA9IGFzeW5jIGZ1bmN0aW9uKiAoc3RyZWFtKSB7XG4gIGlmIChzdHJlYW1bU3ltYm9sLmFzeW5jSXRlcmF0b3JdKSB7XG4gICAgeWllbGQqIHN0cmVhbTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcmVhZGVyID0gc3RyZWFtLmdldFJlYWRlcigpO1xuICB0cnkge1xuICAgIGZvciAoOzspIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZG9uZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0gPSBhd2FpdCByZWFkZXIucmVhZCgpO1xuICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB5aWVsZCB2YWx1ZTtcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgYXdhaXQgcmVhZGVyLmNhbmNlbCgpO1xuICB9XG59O1xuY29uc3QgdHJhY2tTdHJlYW0gPSAoc3RyZWFtLCBjaHVua1NpemUsIG9uUHJvZ3Jlc3MsIG9uRmluaXNoKSA9PiB7XG4gIGNvbnN0IGl0ZXJhdG9yID0gcmVhZEJ5dGVzKHN0cmVhbSwgY2h1bmtTaXplKTtcbiAgbGV0IGJ5dGVzID0gMDtcbiAgbGV0IGRvbmU7XG4gIGxldCBfb25GaW5pc2ggPSBlID0+IHtcbiAgICBpZiAoIWRvbmUpIHtcbiAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgb25GaW5pc2ggJiYgb25GaW5pc2goZSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbmV3IFJlYWRhYmxlU3RyZWFtKHtcbiAgICBhc3luYyBwdWxsKGNvbnRyb2xsZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBkb25lLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH0gPSBhd2FpdCBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgX29uRmluaXNoKCk7XG4gICAgICAgICAgY29udHJvbGxlci5jbG9zZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGVuID0gdmFsdWUuYnl0ZUxlbmd0aDtcbiAgICAgICAgaWYgKG9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgICBsZXQgbG9hZGVkQnl0ZXMgPSBieXRlcyArPSBsZW47XG4gICAgICAgICAgb25Qcm9ncmVzcyhsb2FkZWRCeXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKG5ldyBVaW50OEFycmF5KHZhbHVlKSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX29uRmluaXNoKGVycik7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhbmNlbChyZWFzb24pIHtcbiAgICAgIF9vbkZpbmlzaChyZWFzb24pO1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yLnJldHVybigpO1xuICAgIH1cbiAgfSwge1xuICAgIGhpZ2hXYXRlck1hcms6IDJcbiAgfSk7XG59O1xuXG5jb25zdCBERUZBVUxUX0NIVU5LX1NJWkUgPSA2NCAqIDEwMjQ7XG5jb25zdCBERUZBVUxUX1JFUVVFU1RfT1BUSU9OUyA9IHtcbiAgY2FjaGU6ICdkZWZhdWx0JyxcbiAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICByZWZlcnJlcjogJ2Fib3V0OmNsaWVudCcsXG4gIHJlZmVycmVyUG9saWN5OiAnJyxcbiAgbW9kZTogJ2NvcnMnLFxuICBpbnRlZ3JpdHk6ICcnLFxuICBrZWVwYWxpdmU6IGZhbHNlLFxuICBwcmlvcml0eTogJ2F1dG8nLFxuICB3aW5kb3c6IG51bGxcbn07XG5jb25zdCB7XG4gIGlzRnVuY3Rpb25cbn0gPSB1dGlscyQxO1xuXG4vKipcbiAqIEVuY29kZSBhIFVURi04IHN0cmluZyB0byBhIExhdGluLTEgYnl0ZSBzdHJpbmcgZm9yIHVzZSB3aXRoIGJ0b2EoKS5cbiAqIFRoaXMgaXMgYSBtb2Rlcm4gcmVwbGFjZW1lbnQgZm9yIHRoZSBkZXByZWNhdGVkIHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSBwYXR0ZXJuLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlbmNvZGVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBVVEYtOCBieXRlcyBhcyBhIExhdGluLTEgc3RyaW5nXG4gKi9cbmNvbnN0IGVuY29kZVVURjggPSBzdHIgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvJShbMC05QS1GXXsyfSkvZ2ksIChfLCBoZXgpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4LCAxNikpKTtcblxuLy8gTm9kZSdzIFdIQVRXRyBVUkwgcGFyc2VyIHJldHVybnMgYHVzZXJuYW1lYCBhbmQgYHBhc3N3b3JkYCBwZXJjZW50LWVuY29kZWQuXG4vLyBEZWNvZGUgYmVmb3JlIGNvbXBvc2luZyB0aGUgYGF1dGhgIG9wdGlvbiBzbyBjcmVkZW50aWFscyBzdWNoIGFzXG4vLyBgbXklNDBlbWFpbC5jb206cGFzc2AgYXJlIHNlbnQgYXMgYG15QGVtYWlsLmNvbTpwYXNzYC4gRmFsbHMgYmFjayB0byB0aGVcbi8vIG9yaWdpbmFsIHZhbHVlIGZvciBtYWxmb3JtZWQgaW5wdXQgc28gYSBiYWQgZW5jb2RpbmcgbmV2ZXIgdGhyb3dzLlxuY29uc3QgZGVjb2RlVVJJQ29tcG9uZW50U2FmZSA9IHZhbHVlID0+IHtcbiAgaWYgKCF1dGlscyQxLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufTtcbmNvbnN0IHRlc3QgPSAoZm4sIC4uLmFyZ3MpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFmbiguLi5hcmdzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbmNvbnN0IG1heWJlV2l0aEF1dGhDcmVkZW50aWFscyA9IHVybCA9PiB7XG4gIGNvbnN0IHByb3RvY29sSW5kZXggPSB1cmwuaW5kZXhPZignOi8vJyk7XG4gIGxldCB1cmxUb0NoZWNrID0gdXJsO1xuICBpZiAocHJvdG9jb2xJbmRleCAhPT0gLTEpIHtcbiAgICB1cmxUb0NoZWNrID0gdXJsVG9DaGVjay5zbGljZShwcm90b2NvbEluZGV4ICsgMyk7XG4gIH1cbiAgcmV0dXJuIHVybFRvQ2hlY2suaW5jbHVkZXMoJ0AnKSB8fCB1cmxUb0NoZWNrLmluY2x1ZGVzKCc6Jyk7XG59O1xuY29uc3QgZmFjdG9yeSA9IGVudiA9PiB7XG4gIGNvbnN0IGdsb2JhbE9iamVjdCA9IHV0aWxzJDEuZ2xvYmFsICE9PSB1bmRlZmluZWQgJiYgdXRpbHMkMS5nbG9iYWwgIT09IG51bGwgPyB1dGlscyQxLmdsb2JhbCA6IGdsb2JhbFRoaXM7XG4gIGNvbnN0IHtcbiAgICBSZWFkYWJsZVN0cmVhbSxcbiAgICBUZXh0RW5jb2RlclxuICB9ID0gZ2xvYmFsT2JqZWN0O1xuICBlbnYgPSB1dGlscyQxLm1lcmdlLmNhbGwoe1xuICAgIHNraXBVbmRlZmluZWQ6IHRydWVcbiAgfSwge1xuICAgIFJlcXVlc3Q6IGdsb2JhbE9iamVjdC5SZXF1ZXN0LFxuICAgIFJlc3BvbnNlOiBnbG9iYWxPYmplY3QuUmVzcG9uc2VcbiAgfSwgZW52KTtcbiAgY29uc3Qge1xuICAgIGZldGNoOiBlbnZGZXRjaCxcbiAgICBSZXF1ZXN0LFxuICAgIFJlc3BvbnNlXG4gIH0gPSBlbnY7XG4gIGNvbnN0IGlzRmV0Y2hTdXBwb3J0ZWQgPSBlbnZGZXRjaCA/IGlzRnVuY3Rpb24oZW52RmV0Y2gpIDogdHlwZW9mIGZldGNoID09PSAnZnVuY3Rpb24nO1xuICBjb25zdCBpc1JlcXVlc3RTdXBwb3J0ZWQgPSBpc0Z1bmN0aW9uKFJlcXVlc3QpO1xuICBjb25zdCBpc1Jlc3BvbnNlU3VwcG9ydGVkID0gaXNGdW5jdGlvbihSZXNwb25zZSk7XG4gIGlmICghaXNGZXRjaFN1cHBvcnRlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBpc1JlYWRhYmxlU3RyZWFtU3VwcG9ydGVkID0gaXNGZXRjaFN1cHBvcnRlZCAmJiBpc0Z1bmN0aW9uKFJlYWRhYmxlU3RyZWFtKTtcbiAgY29uc3QgZW5jb2RlVGV4dCA9IGlzRmV0Y2hTdXBwb3J0ZWQgJiYgKHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IChlbmNvZGVyID0+IHN0ciA9PiBlbmNvZGVyLmVuY29kZShzdHIpKShuZXcgVGV4dEVuY29kZXIoKSkgOiBhc3luYyBzdHIgPT4gbmV3IFVpbnQ4QXJyYXkoYXdhaXQgbmV3IFJlcXVlc3Qoc3RyKS5hcnJheUJ1ZmZlcigpKSk7XG4gIGNvbnN0IHN1cHBvcnRzUmVxdWVzdFN0cmVhbSA9IGlzUmVxdWVzdFN1cHBvcnRlZCAmJiBpc1JlYWRhYmxlU3RyZWFtU3VwcG9ydGVkICYmIHRlc3QoKCkgPT4ge1xuICAgIGxldCBkdXBsZXhBY2Nlc3NlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChwbGF0Zm9ybS5vcmlnaW4sIHtcbiAgICAgIGJvZHk6IG5ldyBSZWFkYWJsZVN0cmVhbSgpLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBnZXQgZHVwbGV4KCkge1xuICAgICAgICBkdXBsZXhBY2Nlc3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiAnaGFsZic7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgaGFzQ29udGVudFR5cGUgPSByZXF1ZXN0LmhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAocmVxdWVzdC5ib2R5ICE9IG51bGwpIHtcbiAgICAgIHJlcXVlc3QuYm9keS5jYW5jZWwoKTtcbiAgICB9XG4gICAgcmV0dXJuIGR1cGxleEFjY2Vzc2VkICYmICFoYXNDb250ZW50VHlwZTtcbiAgfSk7XG4gIGNvbnN0IHN1cHBvcnRzUmVzcG9uc2VTdHJlYW0gPSBpc1Jlc3BvbnNlU3VwcG9ydGVkICYmIGlzUmVhZGFibGVTdHJlYW1TdXBwb3J0ZWQgJiYgdGVzdCgoKSA9PiB1dGlscyQxLmlzUmVhZGFibGVTdHJlYW0obmV3IFJlc3BvbnNlKCcnKS5ib2R5KSk7XG4gIGNvbnN0IHJlc29sdmVycyA9IHtcbiAgICBzdHJlYW06IHN1cHBvcnRzUmVzcG9uc2VTdHJlYW0gJiYgKHJlcyA9PiByZXMuYm9keSlcbiAgfTtcbiAgaXNGZXRjaFN1cHBvcnRlZCAmJiAoKCkgPT4ge1xuICAgIFsndGV4dCcsICdhcnJheUJ1ZmZlcicsICdibG9iJywgJ2Zvcm1EYXRhJywgJ3N0cmVhbSddLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAhcmVzb2x2ZXJzW3R5cGVdICYmIChyZXNvbHZlcnNbdHlwZV0gPSAocmVzLCBjb25maWcpID0+IHtcbiAgICAgICAgbGV0IG1ldGhvZCA9IHJlcyAmJiByZXNbdHlwZV07XG4gICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICByZXR1cm4gbWV0aG9kLmNhbGwocmVzKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihgUmVzcG9uc2UgdHlwZSAnJHt0eXBlfScgaXMgbm90IHN1cHBvcnRlZGAsIEF4aW9zRXJyb3IuRVJSX05PVF9TVVBQT1JULCBjb25maWcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pKCk7XG4gIGNvbnN0IGdldEJvZHlMZW5ndGggPSBhc3luYyBib2R5ID0+IHtcbiAgICBpZiAoYm9keSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKHV0aWxzJDEuaXNCbG9iKGJvZHkpKSB7XG4gICAgICByZXR1cm4gYm9keS5zaXplO1xuICAgIH1cbiAgICBpZiAodXRpbHMkMS5pc1NwZWNDb21wbGlhbnRGb3JtKGJvZHkpKSB7XG4gICAgICBjb25zdCBfcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHBsYXRmb3JtLm9yaWdpbiwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gKGF3YWl0IF9yZXF1ZXN0LmFycmF5QnVmZmVyKCkpLmJ5dGVMZW5ndGg7XG4gICAgfVxuICAgIGlmICh1dGlscyQxLmlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpIHx8IHV0aWxzJDEuaXNBcnJheUJ1ZmZlcihib2R5KSkge1xuICAgICAgcmV0dXJuIGJvZHkuYnl0ZUxlbmd0aDtcbiAgICB9XG4gICAgaWYgKHV0aWxzJDEuaXNVUkxTZWFyY2hQYXJhbXMoYm9keSkpIHtcbiAgICAgIGJvZHkgPSBib2R5ICsgJyc7XG4gICAgfVxuICAgIGlmICh1dGlscyQxLmlzU3RyaW5nKGJvZHkpKSB7XG4gICAgICByZXR1cm4gKGF3YWl0IGVuY29kZVRleHQoYm9keSkpLmJ5dGVMZW5ndGg7XG4gICAgfVxuICB9O1xuICBjb25zdCByZXNvbHZlQm9keUxlbmd0aCA9IGFzeW5jIChoZWFkZXJzLCBib2R5KSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gdXRpbHMkMS50b0Zpbml0ZU51bWJlcihoZWFkZXJzLmdldENvbnRlbnRMZW5ndGgoKSk7XG4gICAgcmV0dXJuIGxlbmd0aCA9PSBudWxsID8gZ2V0Qm9keUxlbmd0aChib2R5KSA6IGxlbmd0aDtcbiAgfTtcbiAgcmV0dXJuIGFzeW5jIGNvbmZpZyA9PiB7XG4gICAgbGV0IHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZCxcbiAgICAgIGRhdGEsXG4gICAgICBzaWduYWwsXG4gICAgICBjYW5jZWxUb2tlbixcbiAgICAgIHRpbWVvdXQsXG4gICAgICBvbkRvd25sb2FkUHJvZ3Jlc3MsXG4gICAgICBvblVwbG9hZFByb2dyZXNzLFxuICAgICAgcmVzcG9uc2VUeXBlLFxuICAgICAgaGVhZGVycyxcbiAgICAgIHdpdGhDcmVkZW50aWFscyA9ICdzYW1lLW9yaWdpbicsXG4gICAgICBmZXRjaE9wdGlvbnMsXG4gICAgICBtYXhDb250ZW50TGVuZ3RoLFxuICAgICAgbWF4Qm9keUxlbmd0aCxcbiAgICAgIG1heFJlZGlyZWN0c1xuICAgIH0gPSByZXNvbHZlQ29uZmlnKGNvbmZpZyk7XG4gICAgY29uc3QgaGFzTWF4Q29udGVudExlbmd0aCA9IHV0aWxzJDEuaXNOdW1iZXIobWF4Q29udGVudExlbmd0aCkgJiYgbWF4Q29udGVudExlbmd0aCA+IC0xO1xuICAgIGNvbnN0IGhhc01heEJvZHlMZW5ndGggPSB1dGlscyQxLmlzTnVtYmVyKG1heEJvZHlMZW5ndGgpICYmIG1heEJvZHlMZW5ndGggPiAtMTtcbiAgICBjb25zdCBvd24gPSBrZXkgPT4gdXRpbHMkMS5oYXNPd25Qcm9wKGNvbmZpZywga2V5KSA/IGNvbmZpZ1trZXldIDogdW5kZWZpbmVkO1xuICAgIGxldCBfZmV0Y2ggPSBlbnZGZXRjaCB8fCBmZXRjaDtcbiAgICByZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGUgPyAocmVzcG9uc2VUeXBlICsgJycpLnRvTG93ZXJDYXNlKCkgOiAndGV4dCc7XG4gICAgbGV0IGNvbXBvc2VkU2lnbmFsID0gY29tcG9zZVNpZ25hbHMoW3NpZ25hbCwgY2FuY2VsVG9rZW4gJiYgY2FuY2VsVG9rZW4udG9BYm9ydFNpZ25hbCgpXSwgdGltZW91dCk7XG4gICAgbGV0IHJlcXVlc3QgPSBudWxsO1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gY29tcG9zZWRTaWduYWwgJiYgY29tcG9zZWRTaWduYWwudW5zdWJzY3JpYmUgJiYgKCgpID0+IHtcbiAgICAgIGNvbXBvc2VkU2lnbmFsLnVuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG4gICAgbGV0IHJlcXVlc3RDb250ZW50TGVuZ3RoO1xuXG4gICAgLy8gQXhpb3NFcnJvciB3ZSByYWlzZSB3aGlsZSB0aGUgcmVxdWVzdCBib2R5IGlzIGJlaW5nIHN0cmVhbWVkLiBDYXB0dXJlZFxuICAgIC8vIGJ5IGlkZW50aXR5IHNvIHRoZSBjYXRjaCBibG9jayBjYW4gc3VyZmFjZSBpdCBkaXJlY3RseSwgcmVnYXJkbGVzcyBvZlxuICAgIC8vIGhvdyB0aGUgcnVudGltZSB3cmFwcyB0aGUgcmVzdWx0aW5nIGZldGNoIHJlamVjdGlvbiAodW5kaWNpIGV4cG9zZXMgaXRcbiAgICAvLyBhcyBgZXJyLmNhdXNlYDsgc29tZSBicm93c2VycyBkcm9wIHRoZSBvcmlnaW5hbCBlcnJvciBlbnRpcmVseSkuXG4gICAgbGV0IHBlbmRpbmdCb2R5RXJyb3IgPSBudWxsO1xuICAgIGNvbnN0IG1heEJvZHlMZW5ndGhFcnJvciA9ICgpID0+IG5ldyBBeGlvc0Vycm9yKCdSZXF1ZXN0IGJvZHkgbGFyZ2VyIHRoYW4gbWF4Qm9keUxlbmd0aCBsaW1pdCcsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVFVRVNULCBjb25maWcsIHJlcXVlc3QpO1xuICAgIHRyeSB7XG4gICAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgICBsZXQgYXV0aCA9IHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IGNvbmZpZ0F1dGggPSBvd24oJ2F1dGgnKTtcbiAgICAgIGlmIChjb25maWdBdXRoKSB7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gdXRpbHMkMS5nZXRTYWZlUHJvcChjb25maWdBdXRoLCAndXNlcm5hbWUnKSB8fCAnJztcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSB1dGlscyQxLmdldFNhZmVQcm9wKGNvbmZpZ0F1dGgsICdwYXNzd29yZCcpIHx8ICcnO1xuICAgICAgICBhdXRoID0ge1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAobWF5YmVXaXRoQXV0aENyZWRlbnRpYWxzKHVybCkpIHtcbiAgICAgICAgY29uc3QgcGFyc2VkVVJMID0gbmV3IFVSTCh1cmwsIHBsYXRmb3JtLm9yaWdpbik7XG4gICAgICAgIGlmICghYXV0aCAmJiAocGFyc2VkVVJMLnVzZXJuYW1lIHx8IHBhcnNlZFVSTC5wYXNzd29yZCkpIHtcbiAgICAgICAgICBjb25zdCB1cmxVc2VybmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudFNhZmUocGFyc2VkVVJMLnVzZXJuYW1lKTtcbiAgICAgICAgICBjb25zdCB1cmxQYXNzd29yZCA9IGRlY29kZVVSSUNvbXBvbmVudFNhZmUocGFyc2VkVVJMLnBhc3N3b3JkKTtcbiAgICAgICAgICBhdXRoID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHVybFVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVybFBhc3N3b3JkXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyc2VkVVJMLnVzZXJuYW1lIHx8IHBhcnNlZFVSTC5wYXNzd29yZCkge1xuICAgICAgICAgIHBhcnNlZFVSTC51c2VybmFtZSA9ICcnO1xuICAgICAgICAgIHBhcnNlZFVSTC5wYXNzd29yZCA9ICcnO1xuICAgICAgICAgIHVybCA9IHBhcnNlZFVSTC5ocmVmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYXV0aCkge1xuICAgICAgICBoZWFkZXJzLmRlbGV0ZSgnYXV0aG9yaXphdGlvbicpO1xuICAgICAgICBoZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgYnRvYShlbmNvZGVVVEY4KChhdXRoLnVzZXJuYW1lIHx8ICcnKSArICc6JyArIChhdXRoLnBhc3N3b3JkIHx8ICcnKSkpKTtcbiAgICAgIH1cblxuICAgICAgLy8gRW5mb3JjZSBtYXhDb250ZW50TGVuZ3RoIGZvciBkYXRhOiBVUkxzIHVwLWZyb250IHNvIHdlIG5ldmVyIG1hdGVyaWFsaXplXG4gICAgICAvLyBhbiBvdmVyc2l6ZWQgcGF5bG9hZC4gVGhlIEhUVFAgYWRhcHRlciBhcHBsaWVzIHRoZSBzYW1lIGNoZWNrIChzZWUgaHR0cC5qc1xuICAgICAgLy8gXCJpZiAocHJvdG9jb2wgPT09ICdkYXRhOicpXCIgYnJhbmNoKS5cbiAgICAgIGlmIChoYXNNYXhDb250ZW50TGVuZ3RoICYmIHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnICYmIHVybC5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgIGNvbnN0IGVzdGltYXRlZCA9IGVzdGltYXRlRGF0YVVSTERlY29kZWRCeXRlcyh1cmwpO1xuICAgICAgICBpZiAoZXN0aW1hdGVkID4gbWF4Q29udGVudExlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdtYXhDb250ZW50TGVuZ3RoIHNpemUgb2YgJyArIG1heENvbnRlbnRMZW5ndGggKyAnIGV4Y2VlZGVkJywgQXhpb3NFcnJvci5FUlJfQkFEX1JFU1BPTlNFLCBjb25maWcsIHJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEVuZm9yY2UgbWF4Qm9keUxlbmd0aCBhZ2FpbnN0IGtub3duLXNpemUgYm9kaWVzIGJlZm9yZSBkaXNwYXRjaCB1c2luZ1xuICAgICAgLy8gdGhlIGJvZHkncyAqYWN0dWFsKiBzaXplIOKAlCBuZXZlciBhIGNhbGxlci1kZWNsYXJlZCBDb250ZW50LUxlbmd0aCxcbiAgICAgIC8vIHdoaWNoIGNvdWxkIHVuZGVyLXJlcG9ydCB0byBzbGlwIGFuIG92ZXJzaXplZCBib2R5IHBhc3QgdGhlIGNoZWNrLlxuICAgICAgLy8gVW5rbm93bi1zaXplIHN0cmVhbXMgcmV0dXJuIHVuZGVmaW5lZCBoZXJlIGFuZCBhcmUgY291bnRlZCBwZXItY2h1bmtcbiAgICAgIC8vIGJlbG93IGFzIGZldGNoIGNvbnN1bWVzIHRoZW0uXG4gICAgICBpZiAoaGFzTWF4Qm9keUxlbmd0aCAmJiBtZXRob2QgIT09ICdnZXQnICYmIG1ldGhvZCAhPT0gJ2hlYWQnKSB7XG4gICAgICAgIGNvbnN0IG91dGJvdW5kTGVuZ3RoID0gYXdhaXQgZ2V0Qm9keUxlbmd0aChkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiBvdXRib3VuZExlbmd0aCA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUob3V0Ym91bmRMZW5ndGgpKSB7XG4gICAgICAgICAgcmVxdWVzdENvbnRlbnRMZW5ndGggPSBvdXRib3VuZExlbmd0aDtcbiAgICAgICAgICBpZiAob3V0Ym91bmRMZW5ndGggPiBtYXhCb2R5TGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXhCb2R5TGVuZ3RoRXJyb3IoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQSBzdHJlYW1lZCBib2R5IHVuZGVyIG1heEJvZHlMZW5ndGggbXVzdCBiZSBjb3VudGVkIGFzIGZldGNoIGNvbnN1bWVzXG4gICAgICAvLyBpdDsgaXRzIHNpemUgaXMgbmV2ZXIgdHJ1c3RlZCBmcm9tIGEgY2FsbGVyLWRlY2xhcmVkIENvbnRlbnQtTGVuZ3RoLlxuICAgICAgY29uc3QgbXVzdEVuZm9yY2VTdHJlYW1Cb2R5ID0gaGFzTWF4Qm9keUxlbmd0aCAmJiAodXRpbHMkMS5pc1JlYWRhYmxlU3RyZWFtKGRhdGEpIHx8IHV0aWxzJDEuaXNTdHJlYW0oZGF0YSkpO1xuICAgICAgY29uc3QgdHJhY2tSZXF1ZXN0U3RyZWFtID0gKHN0cmVhbSwgb25Qcm9ncmVzcywgZmx1c2gpID0+IHRyYWNrU3RyZWFtKHN0cmVhbSwgREVGQVVMVF9DSFVOS19TSVpFLCBsb2FkZWRCeXRlcyA9PiB7XG4gICAgICAgIGlmIChoYXNNYXhCb2R5TGVuZ3RoICYmIGxvYWRlZEJ5dGVzID4gbWF4Qm9keUxlbmd0aCkge1xuICAgICAgICAgIHRocm93IHBlbmRpbmdCb2R5RXJyb3IgPSBtYXhCb2R5TGVuZ3RoRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBvblByb2dyZXNzICYmIG9uUHJvZ3Jlc3MobG9hZGVkQnl0ZXMpO1xuICAgICAgfSwgZmx1c2gpO1xuICAgICAgaWYgKHN1cHBvcnRzUmVxdWVzdFN0cmVhbSAmJiBtZXRob2QgIT09ICdnZXQnICYmIG1ldGhvZCAhPT0gJ2hlYWQnICYmIChvblVwbG9hZFByb2dyZXNzIHx8IG11c3RFbmZvcmNlU3RyZWFtQm9keSkpIHtcbiAgICAgICAgcmVxdWVzdENvbnRlbnRMZW5ndGggPSByZXF1ZXN0Q29udGVudExlbmd0aCA9PSBudWxsID8gYXdhaXQgcmVzb2x2ZUJvZHlMZW5ndGgoaGVhZGVycywgZGF0YSkgOiByZXF1ZXN0Q29udGVudExlbmd0aDtcblxuICAgICAgICAvLyBBIGRlY2xhcmVkIGxlbmd0aCBvZiAwIGlzIG9ubHkgdHJ1c3RlZCB0byBza2lwIHRoZSB3cmFwIHdoZW4gd2UgYXJlXG4gICAgICAgIC8vIG5vdCBlbmZvcmNpbmcgYSBzdHJlYW0gbGltaXQgKHdoaWNoIG11c3Qgbm90IHJlbHkgb24gdGhhdCBoZWFkZXIpLlxuICAgICAgICBpZiAocmVxdWVzdENvbnRlbnRMZW5ndGggIT09IDAgfHwgbXVzdEVuZm9yY2VTdHJlYW1Cb2R5KSB7XG4gICAgICAgICAgbGV0IF9yZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgICAgICBkdXBsZXg6ICdoYWxmJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxldCBjb250ZW50VHlwZUhlYWRlcjtcbiAgICAgICAgICBpZiAodXRpbHMkMS5pc0Zvcm1EYXRhKGRhdGEpICYmIChjb250ZW50VHlwZUhlYWRlciA9IF9yZXF1ZXN0LmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkpIHtcbiAgICAgICAgICAgIGhlYWRlcnMuc2V0Q29udGVudFR5cGUoY29udGVudFR5cGVIZWFkZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoX3JlcXVlc3QuYm9keSkge1xuICAgICAgICAgICAgY29uc3QgW29uUHJvZ3Jlc3MsIGZsdXNoXSA9IG9uVXBsb2FkUHJvZ3Jlc3MgJiYgcHJvZ3Jlc3NFdmVudERlY29yYXRvcihyZXF1ZXN0Q29udGVudExlbmd0aCwgcHJvZ3Jlc3NFdmVudFJlZHVjZXIoYXN5bmNEZWNvcmF0b3Iob25VcGxvYWRQcm9ncmVzcykpKSB8fCBbXTtcbiAgICAgICAgICAgIGRhdGEgPSB0cmFja1JlcXVlc3RTdHJlYW0oX3JlcXVlc3QuYm9keSwgb25Qcm9ncmVzcywgZmx1c2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChtdXN0RW5mb3JjZVN0cmVhbUJvZHkgJiYgIWlzUmVxdWVzdFN1cHBvcnRlZCAmJiBpc1JlYWRhYmxlU3RyZWFtU3VwcG9ydGVkICYmIG1ldGhvZCAhPT0gJ2dldCcgJiYgbWV0aG9kICE9PSAnaGVhZCcpIHtcbiAgICAgICAgZGF0YSA9IHRyYWNrUmVxdWVzdFN0cmVhbShkYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAobXVzdEVuZm9yY2VTdHJlYW1Cb2R5ICYmIGlzUmVxdWVzdFN1cHBvcnRlZCAmJiAhc3VwcG9ydHNSZXF1ZXN0U3RyZWFtICYmIG1ldGhvZCAhPT0gJ2dldCcgJiYgbWV0aG9kICE9PSAnaGVhZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ1N0cmVhbSByZXF1ZXN0IGJvZGllcyBhcmUgbm90IHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBmZXRjaCBpbXBsZW1lbnRhdGlvbicsIEF4aW9zRXJyb3IuRVJSX05PVF9TVVBQT1JULCBjb25maWcsIHJlcXVlc3QpO1xuICAgICAgfVxuICAgICAgaWYgKCF1dGlscyQxLmlzU3RyaW5nKHdpdGhDcmVkZW50aWFscykpIHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzID8gJ2luY2x1ZGUnIDogJ29taXQnO1xuICAgICAgfVxuXG4gICAgICAvLyBDbG91ZGZsYXJlIFdvcmtlcnMgdGhyb3dzIHdoZW4gY3JlZGVudGlhbHMgYXJlIGRlZmluZWRcbiAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vY2xvdWRmbGFyZS93b3JrZXJkL2lzc3Vlcy85MDJcbiAgICAgIGNvbnN0IGlzQ3JlZGVudGlhbHNTdXBwb3J0ZWQgPSBpc1JlcXVlc3RTdXBwb3J0ZWQgJiYgJ2NyZWRlbnRpYWxzJyBpbiBSZXF1ZXN0LnByb3RvdHlwZTtcblxuICAgICAgLy8gSWYgZGF0YSBpcyBGb3JtRGF0YSBhbmQgQ29udGVudC1UeXBlIGlzIG11bHRpcGFydC9mb3JtLWRhdGEgd2l0aG91dCBib3VuZGFyeSxcbiAgICAgIC8vIGRlbGV0ZSBpdCBzbyBmZXRjaCBjYW4gc2V0IGl0IGNvcnJlY3RseSB3aXRoIHRoZSBib3VuZGFyeVxuICAgICAgaWYgKHV0aWxzJDEuaXNGb3JtRGF0YShkYXRhKSkge1xuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IGhlYWRlcnMuZ2V0Q29udGVudFR5cGUoKTtcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlICYmIC9ebXVsdGlwYXJ0XFwvZm9ybS1kYXRhL2kudGVzdChjb250ZW50VHlwZSkgJiYgIS9ib3VuZGFyeT0vaS50ZXN0KGNvbnRlbnRUeXBlKSkge1xuICAgICAgICAgIGhlYWRlcnMuZGVsZXRlKCdjb250ZW50LXR5cGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTZXQgVXNlci1BZ2VudCBoZWFkZXIgaWYgbm90IGFscmVhZHkgc2V0IChmZXRjaCBkZWZhdWx0cyB0byAnbm9kZScgaW4gTm9kZS5qcylcbiAgICAgIGhlYWRlcnMuc2V0KCdVc2VyLUFnZW50JywgJ2F4aW9zLycgKyBWRVJTSU9OLCBmYWxzZSk7XG4gICAgICBjb25zdCBzYWZlRmV0Y2hPcHRpb25zID0gZmV0Y2hPcHRpb25zID09IG51bGwgPyBmZXRjaE9wdGlvbnMgOiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIGZldGNoT3B0aW9ucyk7XG4gICAgICBpZiAoc2FmZUZldGNoT3B0aW9ucykge1xuICAgICAgICAvLyBUaGVzZSBvcHRpb25zIGFyZSBvd25lZCBieSBBeGlvcyBhbmQgYXJlIGFscmVhZHkgcmVmbGVjdGVkIGluIHRoZVxuICAgICAgICAvLyByZXNvbHZlZCBSZXF1ZXN0IHBhc3NlZCB0byBmZXRjaC5cbiAgICAgICAgZGVsZXRlIHNhZmVGZXRjaE9wdGlvbnMuYm9keTtcbiAgICAgICAgZGVsZXRlIHNhZmVGZXRjaE9wdGlvbnMuaGVhZGVycztcbiAgICAgICAgZGVsZXRlIHNhZmVGZXRjaE9wdGlvbnMubWV0aG9kO1xuICAgICAgICBkZWxldGUgc2FmZUZldGNoT3B0aW9ucy5zaWduYWw7XG4gICAgICAgIGRlbGV0ZSBzYWZlRmV0Y2hPcHRpb25zLmR1cGxleDtcbiAgICAgICAgZGVsZXRlIHNhZmVGZXRjaE9wdGlvbnMuY3JlZGVudGlhbHM7XG4gICAgICB9XG4gICAgICBjb25zdCByZXNvbHZlZE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIHNhZmVGZXRjaE9wdGlvbnMsIHtcbiAgICAgICAgc2lnbmFsOiBjb21wb3NlZFNpZ25hbCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QudG9VcHBlckNhc2UoKSxcbiAgICAgICAgaGVhZGVyczogdG9CeXRlU3RyaW5nSGVhZGVyT2JqZWN0KGhlYWRlcnMubm9ybWFsaXplKCkpLFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgICAgICBkdXBsZXg6ICdoYWxmJyxcbiAgICAgICAgY3JlZGVudGlhbHM6IGlzQ3JlZGVudGlhbHNTdXBwb3J0ZWQgPyB3aXRoQ3JlZGVudGlhbHMgOiB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgICAgaWYgKGlzUmVxdWVzdFN1cHBvcnRlZCkge1xuICAgICAgICB1dGlscyQxLmZvckVhY2goREVGQVVMVF9SRVFVRVNUX09QVElPTlMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc29sdmVkT3B0aW9uc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc29sdmVkT3B0aW9uc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc29sdmVkT3B0aW9ucy5zaWduYWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlc29sdmVkT3B0aW9ucy5zaWduYWwgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNvbHZlZE9wdGlvbnMuYm9keSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmVzb2x2ZWRPcHRpb25zLmJvZHkgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWF4UmVkaXJlY3RzID09PSAwKSB7XG4gICAgICAgIHJlc29sdmVkT3B0aW9ucy5yZWRpcmVjdCA9ICdtYW51YWwnO1xuICAgICAgICBpZiAoc2FmZUZldGNoT3B0aW9ucykge1xuICAgICAgICAgIHNhZmVGZXRjaE9wdGlvbnMucmVkaXJlY3QgPSAnbWFudWFsJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVxdWVzdCA9IGlzUmVxdWVzdFN1cHBvcnRlZCAmJiBuZXcgUmVxdWVzdCh1cmwsIHJlc29sdmVkT3B0aW9ucyk7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCAoaXNSZXF1ZXN0U3VwcG9ydGVkID8gX2ZldGNoKHJlcXVlc3QsIHNhZmVGZXRjaE9wdGlvbnMpIDogX2ZldGNoKHVybCwgcmVzb2x2ZWRPcHRpb25zKSk7XG4gICAgICBjb25zdCByZXNwb25zZUhlYWRlcnMgPSBBeGlvc0hlYWRlcnMuZnJvbShyZXNwb25zZS5oZWFkZXJzKTtcblxuICAgICAgLy8gQ2hlYXAgcHJlLWNoZWNrOiBpZiB0aGUgc2VydmVyIGhvbmVzdGx5IGRlY2xhcmVzIGEgY29udGVudC1sZW5ndGggdGhhdFxuICAgICAgLy8gYWxyZWFkeSBleGNlZWRzIHRoZSBjYXAsIHJlamVjdCBiZWZvcmUgd2Ugc3RhcnQgc3RyZWFtaW5nLlxuICAgICAgaWYgKGhhc01heENvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZGVjbGFyZWRMZW5ndGggPSB1dGlscyQxLnRvRmluaXRlTnVtYmVyKHJlc3BvbnNlSGVhZGVycy5nZXRDb250ZW50TGVuZ3RoKCkpO1xuICAgICAgICBpZiAoZGVjbGFyZWRMZW5ndGggIT0gbnVsbCAmJiBkZWNsYXJlZExlbmd0aCA+IG1heENvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignbWF4Q29udGVudExlbmd0aCBzaXplIG9mICcgKyBtYXhDb250ZW50TGVuZ3RoICsgJyBleGNlZWRlZCcsIEF4aW9zRXJyb3IuRVJSX0JBRF9SRVNQT05TRSwgY29uZmlnLCByZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgaXNTdHJlYW1SZXNwb25zZSA9IHN1cHBvcnRzUmVzcG9uc2VTdHJlYW0gJiYgKHJlc3BvbnNlVHlwZSA9PT0gJ3N0cmVhbScgfHwgcmVzcG9uc2VUeXBlID09PSAncmVzcG9uc2UnKTtcbiAgICAgIGlmIChzdXBwb3J0c1Jlc3BvbnNlU3RyZWFtICYmIHJlc3BvbnNlLmJvZHkgJiYgKG9uRG93bmxvYWRQcm9ncmVzcyB8fCBoYXNNYXhDb250ZW50TGVuZ3RoIHx8IGlzU3RyZWFtUmVzcG9uc2UgJiYgdW5zdWJzY3JpYmUpKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7fTtcbiAgICAgICAgWydzdGF0dXMnLCAnc3RhdHVzVGV4dCcsICdoZWFkZXJzJ10uZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICBvcHRpb25zW3Byb3BdID0gcmVzcG9uc2VbcHJvcF07XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXNwb25zZUNvbnRlbnRMZW5ndGggPSB1dGlscyQxLnRvRmluaXRlTnVtYmVyKHJlc3BvbnNlSGVhZGVycy5nZXRDb250ZW50TGVuZ3RoKCkpO1xuICAgICAgICBjb25zdCBbb25Qcm9ncmVzcywgZmx1c2hdID0gb25Eb3dubG9hZFByb2dyZXNzICYmIHByb2dyZXNzRXZlbnREZWNvcmF0b3IocmVzcG9uc2VDb250ZW50TGVuZ3RoLCBwcm9ncmVzc0V2ZW50UmVkdWNlcihhc3luY0RlY29yYXRvcihvbkRvd25sb2FkUHJvZ3Jlc3MpLCB0cnVlKSkgfHwgW107XG4gICAgICAgIGxldCBieXRlc1JlYWQgPSAwO1xuICAgICAgICBjb25zdCBvbkNodW5rUHJvZ3Jlc3MgPSBsb2FkZWRCeXRlcyA9PiB7XG4gICAgICAgICAgaWYgKGhhc01heENvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIGJ5dGVzUmVhZCA9IGxvYWRlZEJ5dGVzO1xuICAgICAgICAgICAgaWYgKGJ5dGVzUmVhZCA+IG1heENvbnRlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ21heENvbnRlbnRMZW5ndGggc2l6ZSBvZiAnICsgbWF4Q29udGVudExlbmd0aCArICcgZXhjZWVkZWQnLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0UsIGNvbmZpZywgcmVxdWVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIG9uUHJvZ3Jlc3MgJiYgb25Qcm9ncmVzcyhsb2FkZWRCeXRlcyk7XG4gICAgICAgIH07XG4gICAgICAgIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKHRyYWNrU3RyZWFtKHJlc3BvbnNlLmJvZHksIERFRkFVTFRfQ0hVTktfU0laRSwgb25DaHVua1Byb2dyZXNzLCAoKSA9PiB7XG4gICAgICAgICAgZmx1c2ggJiYgZmx1c2goKTtcbiAgICAgICAgICB1bnN1YnNjcmliZSAmJiB1bnN1YnNjcmliZSgpO1xuICAgICAgICB9KSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICByZXNwb25zZVR5cGUgPSByZXNwb25zZVR5cGUgfHwgJ3RleHQnO1xuICAgICAgbGV0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc29sdmVyc1t1dGlscyQxLmZpbmRLZXkocmVzb2x2ZXJzLCByZXNwb25zZVR5cGUpIHx8ICd0ZXh0J10ocmVzcG9uc2UsIGNvbmZpZyk7XG5cbiAgICAgIC8vIEZhbGxiYWNrIGVuZm9yY2VtZW50IGZvciBlbnZpcm9ubWVudHMgd2l0aG91dCBSZWFkYWJsZVN0cmVhbSBzdXBwb3J0XG4gICAgICAvLyAobGVnYWN5IHJ1bnRpbWVzKS4gRGV0ZWN0IG1hdGVyaWFsaXplZCBzaXplIGZyb20gdHlwZWQgb3V0cHV0OyBza2lwXG4gICAgICAvLyBzdHJlYW1zL1Jlc3BvbnNlIHBhc3N0aHJvdWdoIHNpbmNlIHRoZSB1c2VyIHdpbGwgcmVhZCB0aG9zZSB0aGVtc2VsdmVzLlxuICAgICAgaWYgKGhhc01heENvbnRlbnRMZW5ndGggJiYgIXN1cHBvcnRzUmVzcG9uc2VTdHJlYW0gJiYgIWlzU3RyZWFtUmVzcG9uc2UpIHtcbiAgICAgICAgbGV0IG1hdGVyaWFsaXplZFNpemU7XG4gICAgICAgIGlmIChyZXNwb25zZURhdGEgIT0gbnVsbCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2VEYXRhLmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBtYXRlcmlhbGl6ZWRTaXplID0gcmVzcG9uc2VEYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVzcG9uc2VEYXRhLnNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBtYXRlcmlhbGl6ZWRTaXplID0gcmVzcG9uc2VEYXRhLnNpemU7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVzcG9uc2VEYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbWF0ZXJpYWxpemVkU2l6ZSA9IHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShyZXNwb25zZURhdGEpLmJ5dGVMZW5ndGggOiByZXNwb25zZURhdGEubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1hdGVyaWFsaXplZFNpemUgPT09ICdudW1iZXInICYmIG1hdGVyaWFsaXplZFNpemUgPiBtYXhDb250ZW50TGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoJ21heENvbnRlbnRMZW5ndGggc2l6ZSBvZiAnICsgbWF4Q29udGVudExlbmd0aCArICcgZXhjZWVkZWQnLCBBeGlvc0Vycm9yLkVSUl9CQURfUkVTUE9OU0UsIGNvbmZpZywgcmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICFpc1N0cmVhbVJlc3BvbnNlICYmIHVuc3Vic2NyaWJlICYmIHVuc3Vic2NyaWJlKCk7XG4gICAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB7XG4gICAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAgIGhlYWRlcnM6IEF4aW9zSGVhZGVycy5mcm9tKHJlc3BvbnNlLmhlYWRlcnMpLFxuICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIHJlcXVlc3RcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHVuc3Vic2NyaWJlICYmIHVuc3Vic2NyaWJlKCk7XG5cbiAgICAgIC8vIFNhZmFyaSBjYW4gc3VyZmFjZSBmZXRjaCBhYm9ydHMgYXMgYSBET01FeGNlcHRpb24tbGlrZSBvYmplY3Qgd2hvc2VcbiAgICAgIC8vIGJyYW5kZWQgZ2V0dGVycyB0aHJvdy4gUHJlZmVyIG91ciBjb21wb3NlZCBzaWduYWwgcmVhc29uIGJlZm9yZSByZWFkaW5nXG4gICAgICAvLyB0aGUgY2F1Z2h0IGVycm9yLCBwcmVzZXJ2aW5nIHRpbWVvdXQgdnMgY2FuY2VsbGF0aW9uIHNlbWFudGljcy5cbiAgICAgIGlmIChjb21wb3NlZFNpZ25hbCAmJiBjb21wb3NlZFNpZ25hbC5hYm9ydGVkICYmIGNvbXBvc2VkU2lnbmFsLnJlYXNvbiBpbnN0YW5jZW9mIEF4aW9zRXJyb3IpIHtcbiAgICAgICAgY29uc3QgY2FuY2VsZWRFcnJvciA9IGNvbXBvc2VkU2lnbmFsLnJlYXNvbjtcbiAgICAgICAgY2FuY2VsZWRFcnJvci5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHJlcXVlc3QgJiYgKGNhbmNlbGVkRXJyb3IucmVxdWVzdCA9IHJlcXVlc3QpO1xuICAgICAgICBpZiAoZXJyICE9PSBjYW5jZWxlZEVycm9yKSB7XG4gICAgICAgICAgLy8gTm9uLWVudW1lcmFibGUgdG8gbWF0Y2ggbmF0aXZlIEVycm9yIGBjYXVzZWAgc2VtYW50aWNzIHNvIGxvZ2dlcnNcbiAgICAgICAgICAvLyBkb24ndCByZWN1cnNlIGludG8gY2lyY3VsYXIgZmV0Y2ggaW50ZXJuYWxzIChzZWUgIzcyMDUpLlxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYW5jZWxlZEVycm9yLCAnY2F1c2UnLCB7XG4gICAgICAgICAgICBfX3Byb3RvX186IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogZXJyLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGNhbmNlbGVkRXJyb3I7XG4gICAgICB9XG5cbiAgICAgIC8vIFN1cmZhY2UgYSBtYXhCb2R5TGVuZ3RoIHZpb2xhdGlvbiB3ZSByYWlzZWQgd2hpbGUgdGhlIHJlcXVlc3QgYm9keSB3YXNcbiAgICAgIC8vIGJlaW5nIHN0cmVhbWVkLiBNYXRjaGluZyBieSBpZGVudGl0eSAocmF0aGVyIHRoYW4gcmVhZGluZ1xuICAgICAgLy8gYGVyci5jYXVzZS5pc0F4aW9zRXJyb3JgKSBrZWVwcyB0aGUgZXJyb3IgZGV0ZXJtaW5pc3RpYyBhY3Jvc3MgcnVudGltZXNcbiAgICAgIC8vIGFuZCBhdm9pZHMgYm90aCBwcm90b3R5cGUtcG9sbHV0aW9uIHJlYWRzIGFuZCBtaXMtYXR0cmlidXRpbmcgYSBmb3JlaWduXG4gICAgICAvLyBBeGlvc0Vycm9yIHRoYXQgbWVyZWx5IGhhcHBlbmVkIHRvIGxhbmQgaW4gYGVyci5jYXVzZWAuXG4gICAgICBpZiAocGVuZGluZ0JvZHlFcnJvcikge1xuICAgICAgICByZXF1ZXN0ICYmICFwZW5kaW5nQm9keUVycm9yLnJlcXVlc3QgJiYgKHBlbmRpbmdCb2R5RXJyb3IucmVxdWVzdCA9IHJlcXVlc3QpO1xuICAgICAgICB0aHJvdyBwZW5kaW5nQm9keUVycm9yO1xuICAgICAgfVxuXG4gICAgICAvLyBSZS10aHJvdyBBeGlvc0Vycm9ycyB3ZSByYWlzZWQgc3luY2hyb25vdXNseSAoZGF0YTogVVJMIC8gY29udGVudC1sZW5ndGhcbiAgICAgIC8vIHByZS1jaGVja3MsIHJlc3BvbnNlIHNpemUgZW5mb3JjZW1lbnQpIHdpdGhvdXQgcmUtd3JhcHBpbmcgdGhlbS5cbiAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBBeGlvc0Vycm9yKSB7XG4gICAgICAgIHJlcXVlc3QgJiYgIWVyci5yZXF1ZXN0ICYmIChlcnIucmVxdWVzdCA9IHJlcXVlc3QpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9XG4gICAgICBpZiAoZXJyICYmIGVyci5uYW1lID09PSAnVHlwZUVycm9yJyAmJiAvTG9hZCBmYWlsZWR8ZmV0Y2gvaS50ZXN0KGVyci5tZXNzYWdlKSkge1xuICAgICAgICBjb25zdCBuZXR3b3JrRXJyb3IgPSBuZXcgQXhpb3NFcnJvcignTmV0d29yayBFcnJvcicsIEF4aW9zRXJyb3IuRVJSX05FVFdPUkssIGNvbmZpZywgcmVxdWVzdCwgZXJyICYmIGVyci5yZXNwb25zZSk7XG4gICAgICAgIC8vIE5vbi1lbnVtZXJhYmxlIHRvIG1hdGNoIG5hdGl2ZSBFcnJvciBgY2F1c2VgIHNlbWFudGljcyBzbyBsb2dnZXJzXG4gICAgICAgIC8vIGRvbid0IHJlY3Vyc2UgaW50byBjaXJjdWxhciBmZXRjaCBpbnRlcm5hbHMgKHNlZSAjNzIwNSkuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXR3b3JrRXJyb3IsICdjYXVzZScsIHtcbiAgICAgICAgICBfX3Byb3RvX186IG51bGwsXG4gICAgICAgICAgdmFsdWU6IGVyci5jYXVzZSB8fCBlcnIsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB0aHJvdyBuZXR3b3JrRXJyb3I7XG4gICAgICB9XG4gICAgICB0aHJvdyBBeGlvc0Vycm9yLmZyb20oZXJyLCBlcnIgJiYgZXJyLmNvZGUsIGNvbmZpZywgcmVxdWVzdCwgZXJyICYmIGVyci5yZXNwb25zZSk7XG4gICAgfVxuICB9O1xufTtcbmNvbnN0IHNlZWRDYWNoZSA9IG5ldyBNYXAoKTtcbmNvbnN0IGdldEZldGNoID0gY29uZmlnID0+IHtcbiAgbGV0IGVudiA9IGNvbmZpZyAmJiBjb25maWcuZW52IHx8IHt9O1xuICBjb25zdCB7XG4gICAgZmV0Y2gsXG4gICAgUmVxdWVzdCxcbiAgICBSZXNwb25zZVxuICB9ID0gZW52O1xuICBjb25zdCBzZWVkcyA9IFtSZXF1ZXN0LCBSZXNwb25zZSwgZmV0Y2hdO1xuICBsZXQgbGVuID0gc2VlZHMubGVuZ3RoLFxuICAgIGkgPSBsZW4sXG4gICAgc2VlZCxcbiAgICB0YXJnZXQsXG4gICAgbWFwID0gc2VlZENhY2hlO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgc2VlZCA9IHNlZWRzW2ldO1xuICAgIHRhcmdldCA9IG1hcC5nZXQoc2VlZCk7XG4gICAgdGFyZ2V0ID09PSB1bmRlZmluZWQgJiYgbWFwLnNldChzZWVkLCB0YXJnZXQgPSBpID8gbmV3IE1hcCgpIDogZmFjdG9yeShlbnYpKTtcbiAgICBtYXAgPSB0YXJnZXQ7XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5nZXRGZXRjaCgpO1xuXG4vKipcbiAqIEtub3duIGFkYXB0ZXJzIG1hcHBpbmcuXG4gKiBQcm92aWRlcyBlbnZpcm9ubWVudC1zcGVjaWZpYyBhZGFwdGVycyBmb3IgQXhpb3M6XG4gKiAtIGBodHRwYCBmb3IgTm9kZS5qc1xuICogLSBgeGhyYCBmb3IgYnJvd3NlcnNcbiAqIC0gYGZldGNoYCBmb3IgZmV0Y2ggQVBJLWJhc2VkIHJlcXVlc3RzXG4gKlxuICogQHR5cGUge09iamVjdDxzdHJpbmcsIEZ1bmN0aW9ufE9iamVjdD59XG4gKi9cbmNvbnN0IGtub3duQWRhcHRlcnMgPSB7XG4gIGh0dHA6IGh0dHBBZGFwdGVyLFxuICB4aHI6IHhockFkYXB0ZXIsXG4gIGZldGNoOiB7XG4gICAgZ2V0OiBnZXRGZXRjaFxuICB9XG59O1xuXG4vLyBBc3NpZ24gYWRhcHRlciBuYW1lcyBmb3IgZWFzaWVyIGRlYnVnZ2luZyBhbmQgaWRlbnRpZmljYXRpb25cbnV0aWxzJDEuZm9yRWFjaChrbm93bkFkYXB0ZXJzLCAoZm4sIHZhbHVlKSA9PiB7XG4gIGlmIChmbikge1xuICAgIHRyeSB7XG4gICAgICAvLyBOdWxsLXByb3RvIGRlc2NyaXB0b3JzIHNvIGEgcG9sbHV0ZWQgT2JqZWN0LnByb3RvdHlwZS5nZXQgY2Fubm90IHR1cm5cbiAgICAgIC8vIHRoZXNlIGRhdGEgZGVzY3JpcHRvcnMgaW50byBhY2Nlc3NvciBkZXNjcmlwdG9ycyBvbiB0aGUgd2F5IGluLlxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCAnbmFtZScsIHtcbiAgICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgJ2FkYXB0ZXJOYW1lJywge1xuICAgICAgX19wcm90b19fOiBudWxsLFxuICAgICAgdmFsdWVcbiAgICB9KTtcbiAgfVxufSk7XG5cbi8qKlxuICogUmVuZGVyIGEgcmVqZWN0aW9uIHJlYXNvbiBzdHJpbmcgZm9yIHVua25vd24gb3IgdW5zdXBwb3J0ZWQgYWRhcHRlcnNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5jb25zdCByZW5kZXJSZWFzb24gPSByZWFzb24gPT4gYC0gJHtyZWFzb259YDtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgYWRhcHRlciBpcyByZXNvbHZlZCAoZnVuY3Rpb24sIG51bGwsIG9yIGZhbHNlKVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258bnVsbHxmYWxzZX0gYWRhcHRlclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmNvbnN0IGlzUmVzb2x2ZWRIYW5kbGUgPSBhZGFwdGVyID0+IHV0aWxzJDEuaXNGdW5jdGlvbihhZGFwdGVyKSB8fCBhZGFwdGVyID09PSBudWxsIHx8IGFkYXB0ZXIgPT09IGZhbHNlO1xuXG4vKipcbiAqIEdldCB0aGUgZmlyc3Qgc3VpdGFibGUgYWRhcHRlciBmcm9tIHRoZSBwcm92aWRlZCBsaXN0LlxuICogVHJpZXMgZWFjaCBhZGFwdGVyIGluIG9yZGVyIHVudGlsIGEgc3VwcG9ydGVkIG9uZSBpcyBmb3VuZC5cbiAqIFRocm93cyBhbiBBeGlvc0Vycm9yIGlmIG5vIGFkYXB0ZXIgaXMgc3VpdGFibGUuXG4gKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmd8RnVuY3Rpb24+fHN0cmluZ3xGdW5jdGlvbn0gYWRhcHRlcnMgLSBBZGFwdGVyKHMpIGJ5IG5hbWUgb3IgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gQXhpb3MgcmVxdWVzdCBjb25maWd1cmF0aW9uXG4gKiBAdGhyb3dzIHtBeGlvc0Vycm9yfSBJZiBubyBzdWl0YWJsZSBhZGFwdGVyIGlzIGF2YWlsYWJsZVxuICogQHJldHVybnMge0Z1bmN0aW9ufSBUaGUgcmVzb2x2ZWQgYWRhcHRlciBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBnZXRBZGFwdGVyKGFkYXB0ZXJzLCBjb25maWcpIHtcbiAgYWRhcHRlcnMgPSB1dGlscyQxLmlzQXJyYXkoYWRhcHRlcnMpID8gYWRhcHRlcnMgOiBbYWRhcHRlcnNdO1xuICBjb25zdCB7XG4gICAgbGVuZ3RoXG4gIH0gPSBhZGFwdGVycztcbiAgbGV0IG5hbWVPckFkYXB0ZXI7XG4gIGxldCBhZGFwdGVyO1xuICBjb25zdCByZWplY3RlZFJlYXNvbnMgPSB7fTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIG5hbWVPckFkYXB0ZXIgPSBhZGFwdGVyc1tpXTtcbiAgICBsZXQgaWQ7XG4gICAgYWRhcHRlciA9IG5hbWVPckFkYXB0ZXI7XG4gICAgaWYgKCFpc1Jlc29sdmVkSGFuZGxlKG5hbWVPckFkYXB0ZXIpKSB7XG4gICAgICBhZGFwdGVyID0ga25vd25BZGFwdGVyc1soaWQgPSBTdHJpbmcobmFtZU9yQWRhcHRlcikpLnRvTG93ZXJDYXNlKCldO1xuICAgICAgaWYgKGFkYXB0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcihgVW5rbm93biBhZGFwdGVyICcke2lkfSdgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFkYXB0ZXIgJiYgKHV0aWxzJDEuaXNGdW5jdGlvbihhZGFwdGVyKSB8fCAoYWRhcHRlciA9IGFkYXB0ZXIuZ2V0KGNvbmZpZykpKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJlamVjdGVkUmVhc29uc1tpZCB8fCAnIycgKyBpXSA9IGFkYXB0ZXI7XG4gIH1cbiAgaWYgKCFhZGFwdGVyKSB7XG4gICAgY29uc3QgcmVhc29ucyA9IE9iamVjdC5lbnRyaWVzKHJlamVjdGVkUmVhc29ucykubWFwKChbaWQsIHN0YXRlXSkgPT4gYGFkYXB0ZXIgJHtpZH0gYCArIChzdGF0ZSA9PT0gZmFsc2UgPyAnaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgZW52aXJvbm1lbnQnIDogJ2lzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGJ1aWxkJykpO1xuICAgIGxldCBzID0gbGVuZ3RoID8gcmVhc29ucy5sZW5ndGggPiAxID8gJ3NpbmNlIDpcXG4nICsgcmVhc29ucy5tYXAocmVuZGVyUmVhc29uKS5qb2luKCdcXG4nKSA6ICcgJyArIHJlbmRlclJlYXNvbihyZWFzb25zWzBdKSA6ICdhcyBubyBhZGFwdGVyIHNwZWNpZmllZCc7XG4gICAgdGhyb3cgbmV3IEF4aW9zRXJyb3IoYFRoZXJlIGlzIG5vIHN1aXRhYmxlIGFkYXB0ZXIgdG8gZGlzcGF0Y2ggdGhlIHJlcXVlc3QgYCArIHMsIEF4aW9zRXJyb3IuRVJSX05PVF9TVVBQT1JUKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxuLyoqXG4gKiBFeHBvcnRzIEF4aW9zIGFkYXB0ZXJzIGFuZCB1dGlsaXR5IHRvIHJlc29sdmUgYW4gYWRhcHRlclxuICovXG52YXIgYWRhcHRlcnMgPSB7XG4gIC8qKlxuICAgKiBSZXNvbHZlIGFuIGFkYXB0ZXIgZnJvbSBhIGxpc3Qgb2YgYWRhcHRlciBuYW1lcyBvciBmdW5jdGlvbnMuXG4gICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICovXG4gIGdldEFkYXB0ZXIsXG4gIC8qKlxuICAgKiBFeHBvc2VzIGFsbCBrbm93biBhZGFwdGVyc1xuICAgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgRnVuY3Rpb258T2JqZWN0Pn1cbiAgICovXG4gIGFkYXB0ZXJzOiBrbm93bkFkYXB0ZXJzXG59O1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxlZEVycm9yYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG4gIGlmIChjb25maWcuc2lnbmFsICYmIGNvbmZpZy5zaWduYWwuYWJvcnRlZCkge1xuICAgIHRocm93IG5ldyBDYW5jZWxlZEVycm9yKG51bGwsIGNvbmZpZyk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKlxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5mdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoX2NvbmZpZykge1xuICAvLyBJbnRlcmNlcHRvcnMgbWF5IHJlcGxhY2UgdGhlIG1lcmdlZCBjb25maWcgd2l0aCBhbiBvcmRpbmFyeSBvYmplY3QuIEZsYXR0ZW5cbiAgLy8gaXQgYXQgdGhlIGRpc3BhdGNoIGJvdW5kYXJ5IHNvIHNoYXJlZCBwcm90b3R5cGUgbWVtYmVycyBjYW5ub3QgYmVjb21lXG4gIC8vIHJlcXVlc3QgYmVoYXZpb3IsIHdoaWxlIHByZXNlcnZpbmcgaW50ZW50aW9uYWwgdGVtcGxhdGUvY2xhc3MgbWVtYmVycy5cbiAgY29uc3QgY29uZmlnID0gdXRpbHMkMS50b1NhZmVGbGF0T2JqZWN0KF9jb25maWcpO1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG4gIGNvbmZpZy5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20odXRpbHMkMS5nZXRTYWZlUHJvcChjb25maWcsICdoZWFkZXJzJykpO1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoY29uZmlnLCBjb25maWcudHJhbnNmb3JtUmVxdWVzdCk7XG4gIGlmIChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uaW5kZXhPZihjb25maWcubWV0aG9kKSAhPT0gLTEpIHtcbiAgICBjb25maWcuaGVhZGVycy5zZXRDb250ZW50VHlwZSgnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJywgZmFsc2UpO1xuICB9XG4gIGNvbnN0IGFkYXB0ZXIgPSBhZGFwdGVycy5nZXRBZGFwdGVyKGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXIsIGNvbmZpZyk7XG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gRXhwb3NlIHRoZSBjdXJyZW50IHJlc3BvbnNlIG9uIGNvbmZpZyBzbyB0aGF0IHRyYW5zZm9ybVJlc3BvbnNlIGNhblxuICAgIC8vIGF0dGFjaCBpdCB0byBhbnkgQXhpb3NFcnJvciBpdCB0aHJvd3MgKGUuZy4gb24gSlNPTiBwYXJzZSBmYWlsdXJlKS5cbiAgICAvLyBXZSBjbGVhbiBpdCB1cCBhZnRlcndhcmRzIHRvIGF2b2lkIHBvbGx1dGluZyB0aGUgY29uZmlnIG9iamVjdC5cbiAgICBjb25maWcucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChjb25maWcsIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZSwgcmVzcG9uc2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBkZWxldGUgY29uZmlnLnJlc3BvbnNlO1xuICAgIH1cbiAgICByZXNwb25zZS5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmZyb20ocmVzcG9uc2UuaGVhZGVycyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICBjb25maWcucmVzcG9uc2UgPSByZWFzb24ucmVzcG9uc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoY29uZmlnLCBjb25maWcudHJhbnNmb3JtUmVzcG9uc2UsIHJlYXNvbi5yZXNwb25zZSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgZGVsZXRlIGNvbmZpZy5yZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyA9IEF4aW9zSGVhZGVycy5mcm9tKHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufVxuXG5jb25zdCB2YWxpZGF0b3JzJDEgPSB7fTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblsnb2JqZWN0JywgJ2Jvb2xlYW4nLCAnbnVtYmVyJywgJ2Z1bmN0aW9uJywgJ3N0cmluZycsICdzeW1ib2wnXS5mb3JFYWNoKCh0eXBlLCBpKSA9PiB7XG4gIHZhbGlkYXRvcnMkMVt0eXBlXSA9IGZ1bmN0aW9uIHZhbGlkYXRvcih0aGluZykge1xuICAgIHJldHVybiB0eXBlb2YgdGhpbmcgPT09IHR5cGUgfHwgJ2EnICsgKGkgPCAxID8gJ24gJyA6ICcgJykgKyB0eXBlO1xuICB9O1xufSk7XG5jb25zdCBkZXByZWNhdGVkV2FybmluZ3MgPSB7fTtcblxuLyoqXG4gKiBUcmFuc2l0aW9uYWwgb3B0aW9uIHZhbGlkYXRvclxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb258Ym9vbGVhbj99IHZhbGlkYXRvciAtIHNldCB0byBmYWxzZSBpZiB0aGUgdHJhbnNpdGlvbmFsIG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkXG4gKiBAcGFyYW0ge3N0cmluZz99IHZlcnNpb24gLSBkZXByZWNhdGVkIHZlcnNpb24gLyByZW1vdmVkIHNpbmNlIHZlcnNpb25cbiAqIEBwYXJhbSB7c3RyaW5nP30gbWVzc2FnZSAtIHNvbWUgbWVzc2FnZSB3aXRoIGFkZGl0aW9uYWwgaW5mb1xuICpcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xudmFsaWRhdG9ycyQxLnRyYW5zaXRpb25hbCA9IGZ1bmN0aW9uIHRyYW5zaXRpb25hbCh2YWxpZGF0b3IsIHZlcnNpb24sIG1lc3NhZ2UpIHtcbiAgZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShvcHQsIGRlc2MpIHtcbiAgICByZXR1cm4gJ1tBeGlvcyB2JyArIFZFUlNJT04gKyBcIl0gVHJhbnNpdGlvbmFsIG9wdGlvbiAnXCIgKyBvcHQgKyBcIidcIiArIGRlc2MgKyAobWVzc2FnZSA/ICcuICcgKyBtZXNzYWdlIDogJycpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgcmV0dXJuICh2YWx1ZSwgb3B0LCBvcHRzKSA9PiB7XG4gICAgaWYgKHZhbGlkYXRvciA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKGZvcm1hdE1lc3NhZ2Uob3B0LCAnIGhhcyBiZWVuIHJlbW92ZWQnICsgKHZlcnNpb24gPyAnIGluICcgKyB2ZXJzaW9uIDogJycpKSwgQXhpb3NFcnJvci5FUlJfREVQUkVDQVRFRCk7XG4gICAgfVxuICAgIGlmICh2ZXJzaW9uICYmICFkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSkge1xuICAgICAgZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0gPSB0cnVlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2Fybihmb3JtYXRNZXNzYWdlKG9wdCwgJyBoYXMgYmVlbiBkZXByZWNhdGVkIHNpbmNlIHYnICsgdmVyc2lvbiArICcgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmVhciBmdXR1cmUnKSk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZGF0b3IgPyB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0cykgOiB0cnVlO1xuICB9O1xufTtcbnZhbGlkYXRvcnMkMS5zcGVsbGluZyA9IGZ1bmN0aW9uIHNwZWxsaW5nKGNvcnJlY3RTcGVsbGluZykge1xuICByZXR1cm4gKHZhbHVlLCBvcHQpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihgJHtvcHR9IGlzIGxpa2VseSBhIG1pc3NwZWxsaW5nIG9mICR7Y29ycmVjdFNwZWxsaW5nfWApO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xufTtcblxuLyoqXG4gKiBBc3NlcnQgb2JqZWN0J3MgcHJvcGVydGllcyB0eXBlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7Ym9vbGVhbj99IGFsbG93VW5rbm93blxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gYXNzZXJ0T3B0aW9ucyhvcHRpb25zLCBzY2hlbWEsIGFsbG93VW5rbm93bikge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignb3B0aW9ucyBtdXN0IGJlIGFuIG9iamVjdCcsIEF4aW9zRXJyb3IuRVJSX0JBRF9PUFRJT05fVkFMVUUpO1xuICB9XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgbGV0IGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICBjb25zdCBvcHQgPSBrZXlzW2ldO1xuICAgIC8vIFVzZSBoYXNPd25Qcm9wZXJ0eSBzbyBhIHBvbGx1dGVkIE9iamVjdC5wcm90b3R5cGUuPG9wdD4gY2Fubm90IHN1cHBseVxuICAgIC8vIGEgbm9uLWZ1bmN0aW9uIHZhbGlkYXRvciBhbmQgY2F1c2UgYSBUeXBlRXJyb3IuXG4gICAgY29uc3QgdmFsaWRhdG9yID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNjaGVtYSwgb3B0KSA/IHNjaGVtYVtvcHRdIDogdW5kZWZpbmVkO1xuICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc1tvcHRdO1xuICAgICAgY29uc3QgcmVzdWx0ID0gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWxpZGF0b3IodmFsdWUsIG9wdCwgb3B0aW9ucyk7XG4gICAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XG4gICAgICAgIHRocm93IG5ldyBBeGlvc0Vycm9yKCdvcHRpb24gJyArIG9wdCArICcgbXVzdCBiZSAnICsgcmVzdWx0LCBBeGlvc0Vycm9yLkVSUl9CQURfT1BUSU9OX1ZBTFVFKTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYWxsb3dVbmtub3duICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBuZXcgQXhpb3NFcnJvcignVW5rbm93biBvcHRpb24gJyArIG9wdCwgQXhpb3NFcnJvci5FUlJfQkFEX09QVElPTik7XG4gICAgfVxuICB9XG59XG52YXIgdmFsaWRhdG9yID0ge1xuICBhc3NlcnRPcHRpb25zLFxuICB2YWxpZGF0b3JzOiB2YWxpZGF0b3JzJDFcbn07XG5cbmNvbnN0IHZhbGlkYXRvcnMgPSB2YWxpZGF0b3IudmFsaWRhdG9ycztcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuY2xhc3MgQXhpb3Mge1xuICBjb25zdHJ1Y3RvcihpbnN0YW5jZUNvbmZpZykge1xuICAgIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGNvbmZpZ09yVXJsIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAgICogQHBhcmFtIHs/T2JqZWN0fSBjb25maWdcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICAgKi9cbiAgYXN5bmMgcmVxdWVzdChjb25maWdPclVybCwgY29uZmlnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLl9yZXF1ZXN0KGNvbmZpZ09yVXJsLCBjb25maWcpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IGR1bW15ID0ge307XG4gICAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPyBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShkdW1teSkgOiBkdW1teSA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgIGNvbnN0IGR1bW15U3RhY2sgPSBkdW1teS5zdGFjaztcbiAgICAgICAgICBsZXQgc3RhY2sgPSAnJztcblxuICAgICAgICAgIC8vIHNsaWNlIG9mZiB0aGUgRXJyb3I6IC4uLiBsaW5lXG4gICAgICAgICAgaWYgKHR5cGVvZiBkdW1teVN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgZmlyc3ROZXdsaW5lSW5kZXggPSBkdW1teVN0YWNrLmluZGV4T2YoJ1xcbicpO1xuICAgICAgICAgICAgc3RhY2sgPSBmaXJzdE5ld2xpbmVJbmRleCA9PT0gLTEgPyAnJyA6IGR1bW15U3RhY2suc2xpY2UoZmlyc3ROZXdsaW5lSW5kZXggKyAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFlcnIuc3RhY2spIHtcbiAgICAgICAgICAgIGVyci5zdGFjayA9IHN0YWNrO1xuICAgICAgICAgICAgLy8gbWF0Y2ggd2l0aG91dCB0aGUgMiB0b3Agc3RhY2sgbGluZXNcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YWNrKSB7XG4gICAgICAgICAgICBjb25zdCBmaXJzdE5ld2xpbmVJbmRleCA9IHN0YWNrLmluZGV4T2YoJ1xcbicpO1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kTmV3bGluZUluZGV4ID0gZmlyc3ROZXdsaW5lSW5kZXggPT09IC0xID8gLTEgOiBzdGFjay5pbmRleE9mKCdcXG4nLCBmaXJzdE5ld2xpbmVJbmRleCArIDEpO1xuICAgICAgICAgICAgY29uc3Qgc3RhY2tXaXRob3V0VHdvVG9wTGluZXMgPSBzZWNvbmROZXdsaW5lSW5kZXggPT09IC0xID8gJycgOiBzdGFjay5zbGljZShzZWNvbmROZXdsaW5lSW5kZXggKyAxKTtcbiAgICAgICAgICAgIGlmICghU3RyaW5nKGVyci5zdGFjaykuZW5kc1dpdGgoc3RhY2tXaXRob3V0VHdvVG9wTGluZXMpKSB7XG4gICAgICAgICAgICAgIGVyci5zdGFjayArPSAnXFxuJyArIHN0YWNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIElnbm9yZSBmYWlsdXJlcyBmcm9tIGN1c3RvbSBzdGFjayBob29rcyBvciB1bi13cml0YWJsZSBzdGFjayBwcm9wZXJ0aWVzLlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG4gIF9yZXF1ZXN0KGNvbmZpZ09yVXJsLCBjb25maWcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gICAgaWYgKHR5cGVvZiBjb25maWdPclVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICAgIGNvbmZpZy51cmwgPSBjb25maWdPclVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnID0gY29uZmlnT3JVcmwgfHwge307XG4gICAgfVxuICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNpdGlvbmFsLFxuICAgICAgcGFyYW1zU2VyaWFsaXplcixcbiAgICAgIGhlYWRlcnNcbiAgICB9ID0gY29uZmlnO1xuICAgIGlmICh0cmFuc2l0aW9uYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnModHJhbnNpdGlvbmFsLCB7XG4gICAgICAgIHNpbGVudEpTT05QYXJzaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgICBmb3JjZWRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgY2xhcmlmeVRpbWVvdXRFcnJvcjogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgbGVnYWN5SW50ZXJjZXB0b3JSZXFSZXNPcmRlcmluZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgICAgYWR2ZXJ0aXNlWnN0ZEFjY2VwdEVuY29kaW5nOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pLFxuICAgICAgICB2YWxpZGF0ZVN0YXR1c1VuZGVmaW5lZFJlc29sdmVzOiB2YWxpZGF0b3JzLnRyYW5zaXRpb25hbCh2YWxpZGF0b3JzLmJvb2xlYW4pXG4gICAgICB9LCBmYWxzZSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXNTZXJpYWxpemVyICE9IG51bGwpIHtcbiAgICAgIGlmICh1dGlscyQxLmlzRnVuY3Rpb24ocGFyYW1zU2VyaWFsaXplcikpIHtcbiAgICAgICAgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIgPSB7XG4gICAgICAgICAgc2VyaWFsaXplOiBwYXJhbXNTZXJpYWxpemVyXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0b3IuYXNzZXJ0T3B0aW9ucyhwYXJhbXNTZXJpYWxpemVyLCB7XG4gICAgICAgICAgZW5jb2RlOiB2YWxpZGF0b3JzLmZ1bmN0aW9uLFxuICAgICAgICAgIHNlcmlhbGl6ZTogdmFsaWRhdG9ycy5mdW5jdGlvblxuICAgICAgICB9LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTZXQgY29uZmlnLmFsbG93QWJzb2x1dGVVcmxzXG4gICAgaWYgKGNvbmZpZy5hbGxvd0Fic29sdXRlVXJscyAhPT0gdW5kZWZpbmVkKSA7IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMuYWxsb3dBYnNvbHV0ZVVybHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uZmlnLmFsbG93QWJzb2x1dGVVcmxzID0gdGhpcy5kZWZhdWx0cy5hbGxvd0Fic29sdXRlVXJscztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLmFsbG93QWJzb2x1dGVVcmxzID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFsaWRhdG9yLmFzc2VydE9wdGlvbnMoY29uZmlnLCB7XG4gICAgICBiYXNlVXJsOiB2YWxpZGF0b3JzLnNwZWxsaW5nKCdiYXNlVVJMJyksXG4gICAgICB3aXRoWHNyZlRva2VuOiB2YWxpZGF0b3JzLnNwZWxsaW5nKCd3aXRoWFNSRlRva2VuJylcbiAgICB9LCB0cnVlKTtcblxuICAgIC8vIFNldCBjb25maWcubWV0aG9kXG4gICAgY29uZmlnLm1ldGhvZCA9ICh1dGlscyQxLmdldFNhZmVQcm9wKGNvbmZpZywgJ21ldGhvZCcpIHx8IHV0aWxzJDEuZ2V0U2FmZVByb3AodGhpcy5kZWZhdWx0cywgJ21ldGhvZCcpIHx8ICdnZXQnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gICAgbGV0IGNvbnRleHRIZWFkZXJzID0gaGVhZGVycyAmJiB1dGlscyQxLm1lcmdlKGhlYWRlcnMuY29tbW9uLCBoZWFkZXJzW2NvbmZpZy5tZXRob2RdKTtcbiAgICBoZWFkZXJzICYmIHV0aWxzJDEuZm9yRWFjaChtZXRob2RMaXN0LmNvbmNhdCgnY29tbW9uJyksIG1ldGhvZCA9PiB7XG4gICAgICBkZWxldGUgaGVhZGVyc1ttZXRob2RdO1xuICAgIH0pO1xuICAgIGNvbmZpZy5oZWFkZXJzID0gQXhpb3NIZWFkZXJzLmNvbmNhdChjb250ZXh0SGVhZGVycywgaGVhZGVycyk7XG5cbiAgICAvLyBmaWx0ZXIgb3V0IHNraXBwZWQgaW50ZXJjZXB0b3JzXG4gICAgY29uc3QgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4gPSBbXTtcbiAgICBsZXQgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gdHJ1ZTtcbiAgICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIGlmICh0eXBlb2YgaW50ZXJjZXB0b3IucnVuV2hlbiA9PT0gJ2Z1bmN0aW9uJyAmJiBpbnRlcmNlcHRvci5ydW5XaGVuKGNvbmZpZykgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyA9IHN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyAmJiBpbnRlcmNlcHRvci5zeW5jaHJvbm91cztcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25hbCA9IGNvbmZpZy50cmFuc2l0aW9uYWwgfHwgdHJhbnNpdGlvbmFsRGVmYXVsdHM7XG4gICAgICBjb25zdCBsZWdhY3lJbnRlcmNlcHRvclJlcVJlc09yZGVyaW5nID0gdHJhbnNpdGlvbmFsICYmIHRyYW5zaXRpb25hbC5sZWdhY3lJbnRlcmNlcHRvclJlcVJlc09yZGVyaW5nO1xuICAgICAgaWYgKGxlZ2FjeUludGVyY2VwdG9yUmVxUmVzT3JkZXJpbmcpIHtcbiAgICAgICAgcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluID0gW107XG4gICAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICAgIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICAgIH0pO1xuICAgIGxldCBwcm9taXNlO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgbGVuO1xuICAgIGlmICghc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzKSB7XG4gICAgICBjb25zdCBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QuYmluZCh0aGlzKSwgdW5kZWZpbmVkXTtcbiAgICAgIGNoYWluLnVuc2hpZnQoLi4ucmVxdWVzdEludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgY2hhaW4ucHVzaCguLi5yZXNwb25zZUludGVyY2VwdG9yQ2hhaW4pO1xuICAgICAgbGVuID0gY2hhaW4ubGVuZ3RoO1xuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuICAgICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbltpKytdLCBjaGFpbltpKytdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBsZW4gPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XG4gICAgbGV0IG5ld0NvbmZpZyA9IGNvbmZpZztcbiAgICB3aGlsZSAoaSA8IGxlbikge1xuICAgICAgY29uc3Qgb25GdWxmaWxsZWQgPSByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbltpKytdO1xuICAgICAgY29uc3Qgb25SZWplY3RlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluW2krK107XG4gICAgICB0cnkge1xuICAgICAgICBuZXdDb25maWcgPSBvbkZ1bGZpbGxlZCA/IG9uRnVsZmlsbGVkKG5ld0NvbmZpZykgOiBuZXdDb25maWc7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoIW9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVqZWN0ZWRSZXN1bHQgPSBvblJlamVjdGVkLmNhbGwodGhpcywgZXJyb3IpO1xuICAgICAgICAgIGlmICh1dGlscyQxLmlzVGhlbmFibGUocmVqZWN0ZWRSZXN1bHQpKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHJlamVjdGVkUmVzdWx0KS50aGVuKCgpID0+IGRpc3BhdGNoUmVxdWVzdC5jYWxsKHRoaXMsIG5ld0NvbmZpZykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAocmVqZWN0ZWRFcnJvcikge1xuICAgICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlamVjdChyZWplY3RlZEVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFwcm9taXNlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwcm9taXNlID0gZGlzcGF0Y2hSZXF1ZXN0LmNhbGwodGhpcywgbmV3Q29uZmlnKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIGkgPSAwO1xuICAgIGxlbiA9IHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbi5sZW5ndGg7XG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4ocmVzcG9uc2VJbnRlcmNlcHRvckNoYWluW2krK10sIHJlc3BvbnNlSW50ZXJjZXB0b3JDaGFpbltpKytdKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cbiAgZ2V0VXJpKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gICAgY29uc3QgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsLCBjb25maWcuYWxsb3dBYnNvbHV0ZVVybHMsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGJ1aWxkVVJMKGZ1bGxQYXRoLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcik7XG4gIH1cbn1cblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscyQxLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2QsXG4gICAgICB1cmwsXG4gICAgICBkYXRhOiBjb25maWcgJiYgdXRpbHMkMS5oYXNPd25Qcm9wKGNvbmZpZywgJ2RhdGEnKSA/IGNvbmZpZy5kYXRhIDogdW5kZWZpbmVkXG4gICAgfSkpO1xuICB9O1xufSk7XG51dGlscyQxLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdxdWVyeSddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlSFRUUE1ldGhvZChpc0Zvcm0pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaHR0cE1ldGhvZCh1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiBpc0Zvcm0gPyB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xuICAgICAgICB9IDoge30sXG4gICAgICAgIHVybCxcbiAgICAgICAgZGF0YVxuICAgICAgfSkpO1xuICAgIH07XG4gIH1cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBnZW5lcmF0ZUhUVFBNZXRob2QoKTtcblxuICAvLyBRVUVSWSBpcyBhIHNhZmUvaWRlbXBvdGVudCByZWFkIG1ldGhvZDsgbXVsdGlwYXJ0IGZvcm0gYm9kaWVzIGRvbid0IGZpdFxuICAvLyBpdHMgc2VtYW50aWNzLCBzbyBubyBxdWVyeUZvcm0gc2hvcnRoYW5kIGlzIGdlbmVyYXRlZC5cbiAgaWYgKG1ldGhvZCAhPT0gJ3F1ZXJ5Jykge1xuICAgIEF4aW9zLnByb3RvdHlwZVttZXRob2QgKyAnRm9ybSddID0gZ2VuZXJhdGVIVFRQTWV0aG9kKHRydWUpO1xuICB9XG59KTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7Q2FuY2VsVG9rZW59XG4gKi9cbmNsYXNzIENhbmNlbFRva2VuIHtcbiAgY29uc3RydWN0b3IoZXhlY3V0b3IpIHtcbiAgICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuICAgIGxldCByZXNvbHZlUHJvbWlzZTtcbiAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIGNvbnN0IHRva2VuID0gdGhpcztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdGhpcy5wcm9taXNlLnRoZW4oY2FuY2VsID0+IHtcbiAgICAgIGlmICghdG9rZW4uX2xpc3RlbmVycykgcmV0dXJuO1xuICAgICAgbGV0IGkgPSB0b2tlbi5fbGlzdGVuZXJzLmxlbmd0aDtcbiAgICAgIHdoaWxlIChpLS0gPiAwKSB7XG4gICAgICAgIHRva2VuLl9saXN0ZW5lcnNbaV0oY2FuY2VsKTtcbiAgICAgIH1cbiAgICAgIHRva2VuLl9saXN0ZW5lcnMgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICB0aGlzLnByb21pc2UudGhlbiA9IG9uZnVsZmlsbGVkID0+IHtcbiAgICAgIGxldCBfcmVzb2x2ZTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHRva2VuLnN1YnNjcmliZShyZXNvbHZlKTtcbiAgICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgfSkudGhlbihvbmZ1bGZpbGxlZCk7XG4gICAgICBwcm9taXNlLmNhbmNlbCA9IGZ1bmN0aW9uIHJlamVjdCgpIHtcbiAgICAgICAgdG9rZW4udW5zdWJzY3JpYmUoX3Jlc29sdmUpO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG4gICAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UsIGNvbmZpZywgcmVxdWVzdCkge1xuICAgICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbGVkRXJyb3IobWVzc2FnZSwgY29uZmlnLCByZXF1ZXN0KTtcbiAgICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhyb3dzIGEgYENhbmNlbGVkRXJyb3JgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gICAqL1xuICB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICAgIGlmICh0aGlzLnJlYXNvbikge1xuICAgICAgdGhyb3cgdGhpcy5yZWFzb247XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGUgY2FuY2VsIHNpZ25hbFxuICAgKi9cblxuICBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICAgIGxpc3RlbmVyKHRoaXMucmVhc29uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbbGlzdGVuZXJdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSBmcm9tIHRoZSBjYW5jZWwgc2lnbmFsXG4gICAqL1xuXG4gIHVuc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKCF0aGlzLl9saXN0ZW5lcnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG4gIHRvQWJvcnRTaWduYWwoKSB7XG4gICAgY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBjb25zdCBhYm9ydCA9IGVyciA9PiB7XG4gICAgICBjb250cm9sbGVyLmFib3J0KGVycik7XG4gICAgfTtcbiAgICB0aGlzLnN1YnNjcmliZShhYm9ydCk7XG4gICAgY29udHJvbGxlci5zaWduYWwudW5zdWJzY3JpYmUgPSAoKSA9PiB0aGlzLnVuc3Vic2NyaWJlKGFib3J0KTtcbiAgICByZXR1cm4gY29udHJvbGxlci5zaWduYWw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICAgKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICAgKi9cbiAgc3RhdGljIHNvdXJjZSgpIHtcbiAgICBsZXQgY2FuY2VsO1xuICAgIGNvbnN0IHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICAgIGNhbmNlbCA9IGM7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRva2VuLFxuICAgICAgY2FuY2VsXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgY29uc3QgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3NcbiAqXG4gKiBAcGFyYW0geyp9IHBheWxvYWQgVGhlIHZhbHVlIHRvIHRlc3RcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3MsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0F4aW9zRXJyb3IocGF5bG9hZCkge1xuICByZXR1cm4gdXRpbHMkMS5pc09iamVjdChwYXlsb2FkKSAmJiBwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZTtcbn1cblxuY29uc3QgSHR0cFN0YXR1c0NvZGUgPSB7XG4gIENvbnRpbnVlOiAxMDAsXG4gIFN3aXRjaGluZ1Byb3RvY29sczogMTAxLFxuICBQcm9jZXNzaW5nOiAxMDIsXG4gIEVhcmx5SGludHM6IDEwMyxcbiAgT2s6IDIwMCxcbiAgQ3JlYXRlZDogMjAxLFxuICBBY2NlcHRlZDogMjAyLFxuICBOb25BdXRob3JpdGF0aXZlSW5mb3JtYXRpb246IDIwMyxcbiAgTm9Db250ZW50OiAyMDQsXG4gIFJlc2V0Q29udGVudDogMjA1LFxuICBQYXJ0aWFsQ29udGVudDogMjA2LFxuICBNdWx0aVN0YXR1czogMjA3LFxuICBBbHJlYWR5UmVwb3J0ZWQ6IDIwOCxcbiAgSW1Vc2VkOiAyMjYsXG4gIE11bHRpcGxlQ2hvaWNlczogMzAwLFxuICBNb3ZlZFBlcm1hbmVudGx5OiAzMDEsXG4gIEZvdW5kOiAzMDIsXG4gIFNlZU90aGVyOiAzMDMsXG4gIE5vdE1vZGlmaWVkOiAzMDQsXG4gIFVzZVByb3h5OiAzMDUsXG4gIFVudXNlZDogMzA2LFxuICBUZW1wb3JhcnlSZWRpcmVjdDogMzA3LFxuICBQZXJtYW5lbnRSZWRpcmVjdDogMzA4LFxuICBCYWRSZXF1ZXN0OiA0MDAsXG4gIFVuYXV0aG9yaXplZDogNDAxLFxuICBQYXltZW50UmVxdWlyZWQ6IDQwMixcbiAgRm9yYmlkZGVuOiA0MDMsXG4gIE5vdEZvdW5kOiA0MDQsXG4gIE1ldGhvZE5vdEFsbG93ZWQ6IDQwNSxcbiAgTm90QWNjZXB0YWJsZTogNDA2LFxuICBQcm94eUF1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IDQwNyxcbiAgUmVxdWVzdFRpbWVvdXQ6IDQwOCxcbiAgQ29uZmxpY3Q6IDQwOSxcbiAgR29uZTogNDEwLFxuICBMZW5ndGhSZXF1aXJlZDogNDExLFxuICBQcmVjb25kaXRpb25GYWlsZWQ6IDQxMixcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgQ29udGVudFRvb0xhcmdlYCBpbnN0ZWFkLlxuICAgKi9cbiAgUGF5bG9hZFRvb0xhcmdlOiA0MTMsXG4gIENvbnRlbnRUb29MYXJnZTogNDEzLFxuICBVcmlUb29Mb25nOiA0MTQsXG4gIFVuc3VwcG9ydGVkTWVkaWFUeXBlOiA0MTUsXG4gIFJhbmdlTm90U2F0aXNmaWFibGU6IDQxNixcbiAgRXhwZWN0YXRpb25GYWlsZWQ6IDQxNyxcbiAgSW1BVGVhcG90OiA0MTgsXG4gIE1pc2RpcmVjdGVkUmVxdWVzdDogNDIxLFxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBVbnByb2Nlc3NhYmxlQ29udGVudGAgaW5zdGVhZC5cbiAgICovXG4gIFVucHJvY2Vzc2FibGVFbnRpdHk6IDQyMixcbiAgVW5wcm9jZXNzYWJsZUNvbnRlbnQ6IDQyMixcbiAgTG9ja2VkOiA0MjMsXG4gIEZhaWxlZERlcGVuZGVuY3k6IDQyNCxcbiAgVG9vRWFybHk6IDQyNSxcbiAgVXBncmFkZVJlcXVpcmVkOiA0MjYsXG4gIFByZWNvbmRpdGlvblJlcXVpcmVkOiA0MjgsXG4gIFRvb01hbnlSZXF1ZXN0czogNDI5LFxuICBSZXF1ZXN0SGVhZGVyRmllbGRzVG9vTGFyZ2U6IDQzMSxcbiAgVW5hdmFpbGFibGVGb3JMZWdhbFJlYXNvbnM6IDQ1MSxcbiAgSW50ZXJuYWxTZXJ2ZXJFcnJvcjogNTAwLFxuICBOb3RJbXBsZW1lbnRlZDogNTAxLFxuICBCYWRHYXRld2F5OiA1MDIsXG4gIFNlcnZpY2VVbmF2YWlsYWJsZTogNTAzLFxuICBHYXRld2F5VGltZW91dDogNTA0LFxuICBIdHRwVmVyc2lvbk5vdFN1cHBvcnRlZDogNTA1LFxuICBWYXJpYW50QWxzb05lZ290aWF0ZXM6IDUwNixcbiAgSW5zdWZmaWNpZW50U3RvcmFnZTogNTA3LFxuICBMb29wRGV0ZWN0ZWQ6IDUwOCxcbiAgTm90RXh0ZW5kZWQ6IDUxMCxcbiAgTmV0d29ya0F1dGhlbnRpY2F0aW9uUmVxdWlyZWQ6IDUxMSxcbiAgV2ViU2VydmVyUmV0dXJuc0FuVW5rbm93bkVycm9yOiA1MjAsXG4gIFdlYlNlcnZlcklzRG93bjogNTIxLFxuICBDb25uZWN0aW9uVGltZWRPdXQ6IDUyMixcbiAgT3JpZ2luSXNVbnJlYWNoYWJsZTogNTIzLFxuICBUaW1lb3V0T2NjdXJyZWQ6IDUyNCxcbiAgU3NsSGFuZHNoYWtlRmFpbGVkOiA1MjUsXG4gIEludmFsaWRTc2xDZXJ0aWZpY2F0ZTogNTI2XG59O1xuT2JqZWN0LmVudHJpZXMoSHR0cFN0YXR1c0NvZGUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICBpZiAoSHR0cFN0YXR1c0NvZGVbdmFsdWVdID09PSB1bmRlZmluZWQpIHtcbiAgICBIdHRwU3RhdHVzQ29kZVt2YWx1ZV0gPSBrZXk7XG4gIH1cbn0pO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKlxuICogQHJldHVybnMge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIGNvbnN0IGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIGNvbnN0IGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMkMS5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCwge1xuICAgIGFsbE93bktleXM6IHRydWVcbiAgfSk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzJDEuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0LCBudWxsLCB7XG4gICAgYWxsT3duS2V5czogdHJ1ZVxuICB9KTtcblxuICAvLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG4gIGluc3RhbmNlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICAgIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhkZWZhdWx0Q29uZmlnLCBpbnN0YW5jZUNvbmZpZykpO1xuICB9O1xuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxuY29uc3QgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWxlZEVycm9yID0gQ2FuY2VsZWRFcnJvcjtcbmF4aW9zLkNhbmNlbFRva2VuID0gQ2FuY2VsVG9rZW47XG5heGlvcy5pc0NhbmNlbCA9IGlzQ2FuY2VsO1xuYXhpb3MuVkVSU0lPTiA9IFZFUlNJT047XG5heGlvcy50b0Zvcm1EYXRhID0gdG9Gb3JtRGF0YTtcblxuLy8gRXhwb3NlIEF4aW9zRXJyb3IgY2xhc3NcbmF4aW9zLkF4aW9zRXJyb3IgPSBBeGlvc0Vycm9yO1xuXG4vLyBhbGlhcyBmb3IgQ2FuY2VsZWRFcnJvciBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuYXhpb3MuQ2FuY2VsID0gYXhpb3MuQ2FuY2VsZWRFcnJvcjtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHNwcmVhZDtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gaXNBeGlvc0Vycm9yO1xuXG4vLyBFeHBvc2UgbWVyZ2VDb25maWdcbmF4aW9zLm1lcmdlQ29uZmlnID0gbWVyZ2VDb25maWc7XG5heGlvcy5BeGlvc0hlYWRlcnMgPSBBeGlvc0hlYWRlcnM7XG5heGlvcy5mb3JtVG9KU09OID0gdGhpbmcgPT4gZm9ybURhdGFUb0pTT04odXRpbHMkMS5pc0hUTUxGb3JtKHRoaW5nKSA/IG5ldyBGb3JtRGF0YSh0aGluZykgOiB0aGluZyk7XG5heGlvcy5nZXRBZGFwdGVyID0gYWRhcHRlcnMuZ2V0QWRhcHRlcjtcbmF4aW9zLkh0dHBTdGF0dXNDb2RlID0gSHR0cFN0YXR1c0NvZGU7XG5heGlvcy5kZWZhdWx0ID0gYXhpb3M7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbmV0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm5ldFwiKSk7XG5jb25zdCB0bHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidGxzXCIpKTtcbmNvbnN0IHVybF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ1cmxcIikpO1xuY29uc3QgYXNzZXJ0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImFzc2VydFwiKSk7XG5jb25zdCBkZWJ1Z18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJkZWJ1Z1wiKSk7XG5jb25zdCBhZ2VudF9iYXNlXzEgPSByZXF1aXJlKFwiYWdlbnQtYmFzZVwiKTtcbmNvbnN0IHBhcnNlX3Byb3h5X3Jlc3BvbnNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UtcHJveHktcmVzcG9uc2VcIikpO1xuY29uc3QgZGVidWcgPSBkZWJ1Z18xLmRlZmF1bHQoJ2h0dHBzLXByb3h5LWFnZW50OmFnZW50Jyk7XG4vKipcbiAqIFRoZSBgSHR0cHNQcm94eUFnZW50YCBpbXBsZW1lbnRzIGFuIEhUVFAgQWdlbnQgc3ViY2xhc3MgdGhhdCBjb25uZWN0cyB0b1xuICogdGhlIHNwZWNpZmllZCBcIkhUVFAocykgcHJveHkgc2VydmVyXCIgaW4gb3JkZXIgdG8gcHJveHkgSFRUUFMgcmVxdWVzdHMuXG4gKlxuICogT3V0Z29pbmcgSFRUUCByZXF1ZXN0cyBhcmUgZmlyc3QgdHVubmVsZWQgdGhyb3VnaCB0aGUgcHJveHkgc2VydmVyIHVzaW5nIHRoZVxuICogYENPTk5FQ1RgIEhUVFAgcmVxdWVzdCBtZXRob2QgdG8gZXN0YWJsaXNoIGEgY29ubmVjdGlvbiB0byB0aGUgcHJveHkgc2VydmVyLFxuICogYW5kIHRoZW4gdGhlIHByb3h5IHNlcnZlciBjb25uZWN0cyB0byB0aGUgZGVzdGluYXRpb24gdGFyZ2V0IGFuZCBpc3N1ZXMgdGhlXG4gKiBIVFRQIHJlcXVlc3QgZnJvbSB0aGUgcHJveHkgc2VydmVyLlxuICpcbiAqIGBodHRwczpgIHJlcXVlc3RzIGhhdmUgdGhlaXIgc29ja2V0IGNvbm5lY3Rpb24gdXBncmFkZWQgdG8gVExTIG9uY2VcbiAqIHRoZSBjb25uZWN0aW9uIHRvIHRoZSBwcm94eSBzZXJ2ZXIgaGFzIGJlZW4gZXN0YWJsaXNoZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuY2xhc3MgSHR0cHNQcm94eUFnZW50IGV4dGVuZHMgYWdlbnRfYmFzZV8xLkFnZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihfb3B0cykge1xuICAgICAgICBsZXQgb3B0cztcbiAgICAgICAgaWYgKHR5cGVvZiBfb3B0cyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG9wdHMgPSB1cmxfMS5kZWZhdWx0LnBhcnNlKF9vcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdHMgPSBfb3B0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9wdHMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYW4gSFRUUChTKSBwcm94eSBzZXJ2ZXIgYGhvc3RgIGFuZCBgcG9ydGAgbXVzdCBiZSBzcGVjaWZpZWQhJyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWcoJ2NyZWF0aW5nIG5ldyBIdHRwc1Byb3h5QWdlbnQgaW5zdGFuY2U6ICVvJywgb3B0cyk7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICBjb25zdCBwcm94eSA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMpO1xuICAgICAgICAvLyBJZiBgdHJ1ZWAsIHRoZW4gY29ubmVjdCB0byB0aGUgcHJveHkgc2VydmVyIG92ZXIgVExTLlxuICAgICAgICAvLyBEZWZhdWx0cyB0byBgZmFsc2VgLlxuICAgICAgICB0aGlzLnNlY3VyZVByb3h5ID0gb3B0cy5zZWN1cmVQcm94eSB8fCBpc0hUVFBTKHByb3h5LnByb3RvY29sKTtcbiAgICAgICAgLy8gUHJlZmVyIGBob3N0bmFtZWAgb3ZlciBgaG9zdGAsIGFuZCBzZXQgdGhlIGBwb3J0YCBpZiBuZWVkZWQuXG4gICAgICAgIHByb3h5Lmhvc3QgPSBwcm94eS5ob3N0bmFtZSB8fCBwcm94eS5ob3N0O1xuICAgICAgICBpZiAodHlwZW9mIHByb3h5LnBvcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBwcm94eS5wb3J0ID0gcGFyc2VJbnQocHJveHkucG9ydCwgMTApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJveHkucG9ydCAmJiBwcm94eS5ob3N0KSB7XG4gICAgICAgICAgICBwcm94eS5wb3J0ID0gdGhpcy5zZWN1cmVQcm94eSA/IDQ0MyA6IDgwO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFMUE4gaXMgc3VwcG9ydGVkIGJ5IE5vZGUuanMgPj0gdjUuXG4gICAgICAgIC8vIGF0dGVtcHQgdG8gbmVnb3RpYXRlIGh0dHAvMS4xIGZvciBwcm94eSBzZXJ2ZXJzIHRoYXQgc3VwcG9ydCBodHRwLzJcbiAgICAgICAgaWYgKHRoaXMuc2VjdXJlUHJveHkgJiYgISgnQUxQTlByb3RvY29scycgaW4gcHJveHkpKSB7XG4gICAgICAgICAgICBwcm94eS5BTFBOUHJvdG9jb2xzID0gWydodHRwIDEuMSddO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm94eS5ob3N0ICYmIHByb3h5LnBhdGgpIHtcbiAgICAgICAgICAgIC8vIElmIGJvdGggYSBgaG9zdGAgYW5kIGBwYXRoYCBhcmUgc3BlY2lmaWVkIHRoZW4gaXQncyBtb3N0IGxpa2VseVxuICAgICAgICAgICAgLy8gdGhlIHJlc3VsdCBvZiBhIGB1cmwucGFyc2UoKWAgY2FsbC4uLiB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVcbiAgICAgICAgICAgIC8vIGBwYXRoYCBwb3J0aW9uIHNvIHRoYXQgYG5ldC5jb25uZWN0KClgIGRvZXNuJ3QgYXR0ZW1wdCB0byBvcGVuXG4gICAgICAgICAgICAvLyB0aGF0IGFzIGEgVW5peCBzb2NrZXQgZmlsZS5cbiAgICAgICAgICAgIGRlbGV0ZSBwcm94eS5wYXRoO1xuICAgICAgICAgICAgZGVsZXRlIHByb3h5LnBhdGhuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJveHkgPSBwcm94eTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIG5vZGUtY29yZSBIVFRQIGNsaWVudCBsaWJyYXJ5IGlzIGNyZWF0aW5nIGFcbiAgICAgKiBuZXcgSFRUUCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQGFwaSBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjYWxsYmFjayhyZXEsIG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcHJveHksIHNlY3VyZVByb3h5IH0gPSB0aGlzO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgc29ja2V0IGNvbm5lY3Rpb24gdG8gdGhlIHByb3h5IHNlcnZlci5cbiAgICAgICAgICAgIGxldCBzb2NrZXQ7XG4gICAgICAgICAgICBpZiAoc2VjdXJlUHJveHkpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZygnQ3JlYXRpbmcgYHRscy5Tb2NrZXRgOiAlbycsIHByb3h5KTtcbiAgICAgICAgICAgICAgICBzb2NrZXQgPSB0bHNfMS5kZWZhdWx0LmNvbm5lY3QocHJveHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVidWcoJ0NyZWF0aW5nIGBuZXQuU29ja2V0YDogJW8nLCBwcm94eSk7XG4gICAgICAgICAgICAgICAgc29ja2V0ID0gbmV0XzEuZGVmYXVsdC5jb25uZWN0KHByb3h5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm94eS5oZWFkZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IGhvc3RuYW1lID0gYCR7b3B0cy5ob3N0fToke29wdHMucG9ydH1gO1xuICAgICAgICAgICAgbGV0IHBheWxvYWQgPSBgQ09OTkVDVCAke2hvc3RuYW1lfSBIVFRQLzEuMVxcclxcbmA7XG4gICAgICAgICAgICAvLyBJbmplY3QgdGhlIGBQcm94eS1BdXRob3JpemF0aW9uYCBoZWFkZXIgaWYgbmVjZXNzYXJ5LlxuICAgICAgICAgICAgaWYgKHByb3h5LmF1dGgpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzWydQcm94eS1BdXRob3JpemF0aW9uJ10gPSBgQmFzaWMgJHtCdWZmZXIuZnJvbShwcm94eS5hdXRoKS50b1N0cmluZygnYmFzZTY0Jyl9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRoZSBgSG9zdGAgaGVhZGVyIHNob3VsZCBvbmx5IGluY2x1ZGUgdGhlIHBvcnRcbiAgICAgICAgICAgIC8vIG51bWJlciB3aGVuIGl0IGlzIG5vdCB0aGUgZGVmYXVsdCBwb3J0LlxuICAgICAgICAgICAgbGV0IHsgaG9zdCwgcG9ydCwgc2VjdXJlRW5kcG9pbnQgfSA9IG9wdHM7XG4gICAgICAgICAgICBpZiAoIWlzRGVmYXVsdFBvcnQocG9ydCwgc2VjdXJlRW5kcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgaG9zdCArPSBgOiR7cG9ydH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVycy5Ib3N0ID0gaG9zdDtcbiAgICAgICAgICAgIGhlYWRlcnMuQ29ubmVjdGlvbiA9ICdjbG9zZSc7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykpIHtcbiAgICAgICAgICAgICAgICBwYXlsb2FkICs9IGAke25hbWV9OiAke2hlYWRlcnNbbmFtZV19XFxyXFxuYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3h5UmVzcG9uc2VQcm9taXNlID0gcGFyc2VfcHJveHlfcmVzcG9uc2VfMS5kZWZhdWx0KHNvY2tldCk7XG4gICAgICAgICAgICBzb2NrZXQud3JpdGUoYCR7cGF5bG9hZH1cXHJcXG5gKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSwgYnVmZmVyZWQgfSA9IHlpZWxkIHByb3h5UmVzcG9uc2VQcm9taXNlO1xuICAgICAgICAgICAgaWYgKHN0YXR1c0NvZGUgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJlcS5vbmNlKCdzb2NrZXQnLCByZXN1bWUpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLnNlY3VyZUVuZHBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBwcm94eSBpcyBjb25uZWN0aW5nIHRvIGEgVExTIHNlcnZlciwgc28gdXBncmFkZVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHNvY2tldCBjb25uZWN0aW9uIHRvIGEgVExTIGNvbm5lY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgIGRlYnVnKCdVcGdyYWRpbmcgc29ja2V0IGNvbm5lY3Rpb24gdG8gVExTJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZlcm5hbWUgPSBvcHRzLnNlcnZlcm5hbWUgfHwgb3B0cy5ob3N0O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGxzXzEuZGVmYXVsdC5jb25uZWN0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb21pdChvcHRzLCAnaG9zdCcsICdob3N0bmFtZScsICdwYXRoJywgJ3BvcnQnKSksIHsgc29ja2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VydmVybmFtZSB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzb2NrZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTb21lIG90aGVyIHN0YXR1cyBjb2RlIHRoYXQncyBub3QgMjAwLi4uIG5lZWQgdG8gcmUtcGxheSB0aGUgSFRUUFxuICAgICAgICAgICAgLy8gaGVhZGVyIFwiZGF0YVwiIGV2ZW50cyBvbnRvIHRoZSBzb2NrZXQgb25jZSB0aGUgSFRUUCBtYWNoaW5lcnkgaXNcbiAgICAgICAgICAgIC8vIGF0dGFjaGVkIHNvIHRoYXQgdGhlIG5vZGUgY29yZSBgaHR0cGAgY2FuIHBhcnNlIGFuZCBoYW5kbGUgdGhlXG4gICAgICAgICAgICAvLyBlcnJvciBzdGF0dXMgY29kZS5cbiAgICAgICAgICAgIC8vIENsb3NlIHRoZSBvcmlnaW5hbCBzb2NrZXQsIGFuZCBhIG5ldyBcImZha2VcIiBzb2NrZXQgaXMgcmV0dXJuZWRcbiAgICAgICAgICAgIC8vIGluc3RlYWQsIHNvIHRoYXQgdGhlIHByb3h5IGRvZXNuJ3QgZ2V0IHRoZSBIVFRQIHJlcXVlc3RcbiAgICAgICAgICAgIC8vIHdyaXR0ZW4gdG8gaXQgKHdoaWNoIG1heSBjb250YWluIGBBdXRob3JpemF0aW9uYCBoZWFkZXJzIG9yIG90aGVyXG4gICAgICAgICAgICAvLyBzZW5zaXRpdmUgZGF0YSkuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2hhY2tlcm9uZS5jb20vcmVwb3J0cy81NDE1MDJcbiAgICAgICAgICAgIHNvY2tldC5kZXN0cm95KCk7XG4gICAgICAgICAgICBjb25zdCBmYWtlU29ja2V0ID0gbmV3IG5ldF8xLmRlZmF1bHQuU29ja2V0KHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgZmFrZVNvY2tldC5yZWFkYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAvLyBOZWVkIHRvIHdhaXQgZm9yIHRoZSBcInNvY2tldFwiIGV2ZW50IHRvIHJlLXBsYXkgdGhlIFwiZGF0YVwiIGV2ZW50cy5cbiAgICAgICAgICAgIHJlcS5vbmNlKCdzb2NrZXQnLCAocykgPT4ge1xuICAgICAgICAgICAgICAgIGRlYnVnKCdyZXBsYXlpbmcgcHJveHkgYnVmZmVyIGZvciBmYWlsZWQgcmVxdWVzdCcpO1xuICAgICAgICAgICAgICAgIGFzc2VydF8xLmRlZmF1bHQocy5saXN0ZW5lckNvdW50KCdkYXRhJykgPiAwKTtcbiAgICAgICAgICAgICAgICAvLyBSZXBsYXkgdGhlIFwiYnVmZmVyZWRcIiBCdWZmZXIgb250byB0aGUgZmFrZSBgc29ja2V0YCwgc2luY2UgYXRcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHBvaW50IHRoZSBIVFRQIG1vZHVsZSBtYWNoaW5lcnkgaGFzIGJlZW4gaG9va2VkIHVwIGZvclxuICAgICAgICAgICAgICAgIC8vIHRoZSB1c2VyLlxuICAgICAgICAgICAgICAgIHMucHVzaChidWZmZXJlZCk7XG4gICAgICAgICAgICAgICAgcy5wdXNoKG51bGwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFrZVNvY2tldDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSHR0cHNQcm94eUFnZW50O1xuZnVuY3Rpb24gcmVzdW1lKHNvY2tldCkge1xuICAgIHNvY2tldC5yZXN1bWUoKTtcbn1cbmZ1bmN0aW9uIGlzRGVmYXVsdFBvcnQocG9ydCwgc2VjdXJlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oKCFzZWN1cmUgJiYgcG9ydCA9PT0gODApIHx8IChzZWN1cmUgJiYgcG9ydCA9PT0gNDQzKSk7XG59XG5mdW5jdGlvbiBpc0hUVFBTKHByb3RvY29sKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBwcm90b2NvbCA9PT0gJ3N0cmluZycgPyAvXmh0dHBzOj8kL2kudGVzdChwcm90b2NvbCkgOiBmYWxzZTtcbn1cbmZ1bmN0aW9uIG9taXQob2JqLCAuLi5rZXlzKSB7XG4gICAgY29uc3QgcmV0ID0ge307XG4gICAgbGV0IGtleTtcbiAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKCFrZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgIHJldFtrZXldID0gb2JqW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFnZW50LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuY29uc3QgYWdlbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hZ2VudFwiKSk7XG5mdW5jdGlvbiBjcmVhdGVIdHRwc1Byb3h5QWdlbnQob3B0cykge1xuICAgIHJldHVybiBuZXcgYWdlbnRfMS5kZWZhdWx0KG9wdHMpO1xufVxuKGZ1bmN0aW9uIChjcmVhdGVIdHRwc1Byb3h5QWdlbnQpIHtcbiAgICBjcmVhdGVIdHRwc1Byb3h5QWdlbnQuSHR0cHNQcm94eUFnZW50ID0gYWdlbnRfMS5kZWZhdWx0O1xuICAgIGNyZWF0ZUh0dHBzUHJveHlBZ2VudC5wcm90b3R5cGUgPSBhZ2VudF8xLmRlZmF1bHQucHJvdG90eXBlO1xufSkoY3JlYXRlSHR0cHNQcm94eUFnZW50IHx8IChjcmVhdGVIdHRwc1Byb3h5QWdlbnQgPSB7fSkpO1xubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVIdHRwc1Byb3h5QWdlbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGRlYnVnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRlYnVnXCIpKTtcbmNvbnN0IGRlYnVnID0gZGVidWdfMS5kZWZhdWx0KCdodHRwcy1wcm94eS1hZ2VudDpwYXJzZS1wcm94eS1yZXNwb25zZScpO1xuZnVuY3Rpb24gcGFyc2VQcm94eVJlc3BvbnNlKHNvY2tldCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gYnVmZmVyIGFueSBIVFRQIHRyYWZmaWMgdGhhdCBoYXBwZW5zIHdpdGggdGhlIHByb3h5IGJlZm9yZSB3ZSBnZXRcbiAgICAgICAgLy8gdGhlIENPTk5FQ1QgcmVzcG9uc2UsIHNvIHRoYXQgaWYgdGhlIHJlc3BvbnNlIGlzIGFueXRoaW5nIG90aGVyIHRoYW4gYW4gXCIyMDBcIlxuICAgICAgICAvLyByZXNwb25zZSBjb2RlLCB0aGVuIHdlIGNhbiByZS1wbGF5IHRoZSBcImRhdGFcIiBldmVudHMgb24gdGhlIHNvY2tldCBvbmNlIHRoZVxuICAgICAgICAvLyBIVFRQIHBhcnNlciBpcyBob29rZWQgdXAuLi5cbiAgICAgICAgbGV0IGJ1ZmZlcnNMZW5ndGggPSAwO1xuICAgICAgICBjb25zdCBidWZmZXJzID0gW107XG4gICAgICAgIGZ1bmN0aW9uIHJlYWQoKSB7XG4gICAgICAgICAgICBjb25zdCBiID0gc29ja2V0LnJlYWQoKTtcbiAgICAgICAgICAgIGlmIChiKVxuICAgICAgICAgICAgICAgIG9uZGF0YShiKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzb2NrZXQub25jZSgncmVhZGFibGUnLCByZWFkKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICAgICAgc29ja2V0LnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBvbmVuZCk7XG4gICAgICAgICAgICBzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgICAgICAgICBzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25jbG9zZSk7XG4gICAgICAgICAgICBzb2NrZXQucmVtb3ZlTGlzdGVuZXIoJ3JlYWRhYmxlJywgcmVhZCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25jbG9zZShlcnIpIHtcbiAgICAgICAgICAgIGRlYnVnKCdvbmNsb3NlIGhhZCBlcnJvciAlbycsIGVycik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25lbmQoKSB7XG4gICAgICAgICAgICBkZWJ1Zygnb25lbmQnKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvbmVycm9yKGVycikge1xuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgZGVidWcoJ29uZXJyb3IgJW8nLCBlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gb25kYXRhKGIpIHtcbiAgICAgICAgICAgIGJ1ZmZlcnMucHVzaChiKTtcbiAgICAgICAgICAgIGJ1ZmZlcnNMZW5ndGggKz0gYi5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBidWZmZXJlZCA9IEJ1ZmZlci5jb25jYXQoYnVmZmVycywgYnVmZmVyc0xlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBlbmRPZkhlYWRlcnMgPSBidWZmZXJlZC5pbmRleE9mKCdcXHJcXG5cXHJcXG4nKTtcbiAgICAgICAgICAgIGlmIChlbmRPZkhlYWRlcnMgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8ga2VlcCBidWZmZXJpbmdcbiAgICAgICAgICAgICAgICBkZWJ1ZygnaGF2ZSBub3QgcmVjZWl2ZWQgZW5kIG9mIEhUVFAgaGVhZGVycyB5ZXQuLi4nKTtcbiAgICAgICAgICAgICAgICByZWFkKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZmlyc3RMaW5lID0gYnVmZmVyZWQudG9TdHJpbmcoJ2FzY2lpJywgMCwgYnVmZmVyZWQuaW5kZXhPZignXFxyXFxuJykpO1xuICAgICAgICAgICAgY29uc3Qgc3RhdHVzQ29kZSA9ICtmaXJzdExpbmUuc3BsaXQoJyAnKVsxXTtcbiAgICAgICAgICAgIGRlYnVnKCdnb3QgcHJveHkgc2VydmVyIHJlc3BvbnNlOiAlbycsIGZpcnN0TGluZSk7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlLFxuICAgICAgICAgICAgICAgIGJ1ZmZlcmVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzb2NrZXQub24oJ2Vycm9yJywgb25lcnJvcik7XG4gICAgICAgIHNvY2tldC5vbignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICAgICAgc29ja2V0Lm9uKCdlbmQnLCBvbmVuZCk7XG4gICAgICAgIHJlYWQoKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IHBhcnNlUHJveHlSZXNwb25zZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXByb3h5LXJlc3BvbnNlLmpzLm1hcCIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgZXJyb3I6IFwiXCIsXG4gICAgc3VjY2VzczogXCJcIixcbiAgICBidXR0b25UZXh0OiBcIlJlZ2lzdGVyXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBlcnJvciwgc3VjY2VzcywgYnV0dG9uVGV4dCB9ID0gc3RhdGU7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IChlKSA9PiB7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbbmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgZXJyb3I6IFwiXCIsXG4gICAgICBzdWNjZXNzOiBcIlwiLFxuICAgICAgYnV0dG9uVGV4dDogXCJSZWdpc3RlclwiLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUudGFibGUoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3JlZ2lzdGVyYCwge1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9O1xuXG4gIGNvbnN0IHJlZ2lzdGVyRm9ybSA9ICgpID0+IChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwibmFtZVwiKX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBuYW1lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwiZW1haWxcIil9XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIGVtYWlsXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwicGFzc3dvcmRcIil9XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHBhc3N3b3JkXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmdcIj57YnV0dG9uVGV4dH08L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4gICAgICAgIDxoMT5SZWdpc3RlcjwvaDE+XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7cmVnaXN0ZXJGb3JtKCl9XG4gICAgICAgIDxociAvPlxuICAgICAgICB7SlNPTi5zdHJpbmdpZnkoc3RhdGUpfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFnZW50LWJhc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXNzZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJldmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9sbG93LXJlZGlyZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtLWRhdGFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmVhbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiemxpYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9