/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/generateComponent.js":
/*!***************************************!*\
  !*** ./src/core/generateComponent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateComponent": () => (/* binding */ GenerateComponent)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var GenerateComponent = function GenerateComponent() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var config = {
    tag: options.tag || "DIV",
    id: options.id || null,
    className: options.className || [],
    style: options.style || {},
    innerHTML: options.innerHTML || "",
    appendChild: options.appendChild || []
  };

  var addId = function addId(element) {
    return element.id = config.id;
  };

  var addClass = function addClass(element) {
    return element.className = config.className;
  };

  var addInlineStyle = function addInlineStyle(element) {
    return element.style = config.style;
  };

  var addAppendChild = function addAppendChild(element) {
    if (config.appendChild instanceof HTMLElement) {
      element.appendChild(config.appendChild);
    } else if (_typeof(config.appendChild) === "object") {
      config.appendChild.forEach(function (append) {
        return element.appendChild(append);
      });
    }
  };

  var addInnerHTML = function addInnerHTML(element) {
    element.innerHTML = config.innerHTML;
  };

  var component = function component() {
    var element = document.createElement(config.tag);
    if (!!config.id) addId(element);
    if (!!config.className) addClass(element);
    if (!!config.style) addInlineStyle(element);
    if (!!config.innerHTML) addInnerHTML(element);
    if (!!config.appendChild) addAppendChild(element);
    return element;
  };

  return component();
};

/***/ }),

/***/ "./src/core/generateId.js":
/*!********************************!*\
  !*** ./src/core/generateId.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateId": () => (/* binding */ GenerateId)
/* harmony export */ });
var GenerateId = function GenerateId(baseClass) {
  var uuid = "",
      ii;

  for (ii = 0; ii < 27; ii += 1) {
    switch (ii) {
      case 8:
      case 20:
        uuid += "-";
        uuid += (Math.random() * 16 | 0).toString(16);
        break;

      case 12:
        uuid += "-";
        uuid += "4";
        break;

      case 16:
        uuid += "-";
        uuid += (Math.random() * 4 | 8).toString(16);
        break;

      default:
        uuid += (Math.random() * 16 | 0).toString(16);
    }
  }

  return baseClass + "-" + uuid;
};

/***/ }),

/***/ "./src/core/generateInlineStyle.js":
/*!*****************************************!*\
  !*** ./src/core/generateInlineStyle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateInlineStyle": () => (/* binding */ GenerateInlineStyle)
/* harmony export */ });
var GenerateInlineStyle = function GenerateInlineStyle(config) {
  var inlineStyle = "";

  var inlinePosition = function inlinePosition(style) {
    var position = "";
    var transform = "";
    var translate = "";
    Object.keys(style).map(function (property) {
      position += property + ":" + style[property] + "px;";
      if (property === "top") translate = style[property] > 10 ? 10 : style[property];
      if (property === "bottom") translate = style[property] > 10 ? -10 : style[property] * -1;
    });
    transform = "transform: translateY(" + translate + "px);";
    return position + transform;
  };

  var inline = function inline(key, value) {
    return key + ":" + value + ";";
  };

  Object.keys(config).map(function (key) {
    var value = config[key];
    if (key === "position") inlineStyle += inlinePosition(value);else inlineStyle += inline(key, value);
  });
  return inlineStyle;
};

/***/ }),

/***/ "./src/toast.js":
/*!**********************!*\
  !*** ./src/toast.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_generateId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/generateId */ "./src/core/generateId.js");
/* harmony import */ var _core_generateComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/generateComponent */ "./src/core/generateComponent.js");
/* harmony import */ var _core_generateInlineStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/generateInlineStyle */ "./src/core/generateInlineStyle.js");
/**
 * Suiteshare Toast
 *
 * @param type : String
 * @param content : String
 * @param config : Object
 */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (type, content) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var baseClass = "_s-toast";
  var baseConfig = {
    type: type || "",
    innerHTML: config.innerHTML || "",
    appendTo: config.appendTo || "body",
    time: config.time || 5000,
    close: config.close || false,
    style: {
      background: config.style && config.style.background || "#e1e1e1",
      color: config.style && config.style.color || "#1e1e1e",
      position: config.style && config.style.position || {}
    }
  };

  var installTrack = function installTrack() {
    return (0,_core_generateComponent__WEBPACK_IMPORTED_MODULE_1__.GenerateComponent)({
      className: "_s-toast-track",
      style: (0,_core_generateInlineStyle__WEBPACK_IMPORTED_MODULE_2__.GenerateInlineStyle)({
        animation: (baseConfig.time - 200) / 1000 + "s linear 0s 1 normal none running toast-width-animation"
      })
    });
  };

  var installContent = function installContent() {
    return (0,_core_generateComponent__WEBPACK_IMPORTED_MODULE_1__.GenerateComponent)({
      tag: "DIV",
      className: "_s-toast-content",
      appendChild: (0,_core_generateComponent__WEBPACK_IMPORTED_MODULE_1__.GenerateComponent)({
        id: (0,_core_generateId__WEBPACK_IMPORTED_MODULE_0__.GenerateId)(baseClass),
        tag: "div",
        className: "_s-toast-text",
        innerHTML: baseConfig.innerHTML
      })
    });
  };

  var installAnimation = function installAnimation() {
    var container = document.querySelector('[id*="toast"]');
    setTimeout(function () {
      return container.classList.add(baseClass + "-active");
    }, 200);
    setTimeout(function () {
      return container.classList.remove(baseClass + "-active");
    }, baseConfig.time - 400);
    setTimeout(function () {
      return container.remove();
    }, baseConfig.time);
  };

  var uninstall = function uninstall() {
    var toasts = document.querySelectorAll("." + baseClass);
    if (toasts) toasts.forEach(function (element) {
      return element.remove();
    });
  };

  var install = function install() {
    uninstall();
    var theme = !!baseConfig.type ? baseClass + "-" + baseConfig.type : null;
    document.querySelector(baseConfig.appendTo).appendChild((0,_core_generateComponent__WEBPACK_IMPORTED_MODULE_1__.GenerateComponent)({
      id: (0,_core_generateId__WEBPACK_IMPORTED_MODULE_0__.GenerateId)(baseClass),
      className: "_s-toast " + theme + "",
      style: (0,_core_generateInlineStyle__WEBPACK_IMPORTED_MODULE_2__.GenerateInlineStyle)(baseConfig.style),
      appendChild: [installTrack(), installContent()]
    }));
    installAnimation();
  };

  install();
});

/***/ }),

/***/ "./src/toast.scss":
/*!************************!*\
  !*** ./src/toast.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/toast": 0,
/******/ 			"dist/toast": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklego_toast"] = self["webpackChunklego_toast"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/toast"], () => (__webpack_require__("./src/toast.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/toast"], () => (__webpack_require__("./src/toast.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;