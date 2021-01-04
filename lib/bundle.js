module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/flex-mask-core/apply-mask.js":
/*!******************************************!*\
  !*** ./src/flex-mask-core/apply-mask.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var applyMask = function applyMask(mask, valueStr) {
  var valueWithMask = valueStr;

  for (var i = 0; i < mask.length; i++) {
    if (valueWithMask.length > mask[i].start) {
      var valueArr = Array.from(valueWithMask);
      valueArr.splice(mask[i].start, 0, mask[i].token);
      valueWithMask = valueArr.join('');
    }
  }

  return valueWithMask;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyMask);

/***/ }),

/***/ "./src/flex-mask-core/apply-prefix.js":
/*!********************************************!*\
  !*** ./src/flex-mask-core/apply-prefix.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var applyPrefix = function applyPrefix() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var valueStr = arguments.length > 1 ? arguments[1] : undefined;
  return valueStr ? "".concat(prefix).concat(valueStr) : valueStr;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyPrefix);

/***/ }),

/***/ "./src/flex-mask-core/expand-quantifiers.js":
/*!**************************************************!*\
  !*** ./src/flex-mask-core/expand-quantifiers.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var lengthWithCmd = {};
var tokenWithCmd = {};

var makeExpandedToken = function makeExpandedToken(char, length) {
  var expandedToken = [];

  for (var i = 0; i < length; i++) {
    expandedToken.push(char);
  }

  return expandedToken;
};

var getLengthWithCmd = function getLengthWithCmd(maskStr) {
  var _maskStr$match;

  return (_maskStr$match = maskStr === null || maskStr === void 0 ? void 0 : maskStr.match(/\^\d+/)) !== null && _maskStr$match !== void 0 ? _maskStr$match : [];
};

var getPureLength = function getPureLength(stringMask) {
  if (!lengthWithCmd[stringMask]) lengthWithCmd[stringMask] = getLengthWithCmd(stringMask);
  if (lengthWithCmd[stringMask].length === 0) return null;
  return lengthWithCmd[stringMask][0].slice(1, lengthWithCmd[stringMask][0].length);
};

var getTokenWithCmd = function getTokenWithCmd(maskStr) {
  var _maskStr$match2;

  return (_maskStr$match2 = maskStr === null || maskStr === void 0 ? void 0 : maskStr.match(/\>\d+;|\>\w+;|\>.+;/)) !== null && _maskStr$match2 !== void 0 ? _maskStr$match2 : [];
};

var getPureToken = function getPureToken(stringMask) {
  tokenWithCmd[stringMask] = getTokenWithCmd(stringMask);
  if (tokenWithCmd[stringMask].length === 0) return null;
  return tokenWithCmd[stringMask][0].slice(1, tokenWithCmd[stringMask][0].length - 1);
};

var getStart = function getStart(stringMask) {
  if (!lengthWithCmd[stringMask]) lengthWithCmd[stringMask] = getLengthWithCmd(stringMask);
  if (lengthWithCmd[stringMask].length === 0) return null;
  return lengthWithCmd[stringMask].index;
};

var getDel = function getDel(stringMask) {
  if (!lengthWithCmd[stringMask]) lengthWithCmd[stringMask] = getLengthWithCmd(stringMask);
  if (lengthWithCmd[stringMask].length === 0) return null;
  tokenWithCmd[stringMask] = getTokenWithCmd(stringMask);
  if (tokenWithCmd[stringMask].length === 0) return null;
  return lengthWithCmd[stringMask][0].length + tokenWithCmd[stringMask][0].length;
};

var insertExpandedTokenInStringMask = function insertExpandedTokenInStringMask(stringMask, expandedToken, start, del) {
  var arrayMask = Array.from(stringMask);
  arrayMask.splice.apply(arrayMask, [start, del].concat(_toConsumableArray(expandedToken)));
  return arrayMask.join('');
};

var expandQuantifiers = function expandQuantifiers(stringMask) {
  var length = getPureLength(stringMask);
  if (!length) return stringMask;
  var token = getPureToken(stringMask);
  if (!token) return stringMask;
  var expandedToken = makeExpandedToken(token, length);
  var start = getStart(stringMask);
  var del = getDel(stringMask);
  var newStringMask = insertExpandedTokenInStringMask(stringMask, expandedToken, start, del);
  return expandQuantifiers(newStringMask);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (expandQuantifiers);

/***/ }),

/***/ "./src/flex-mask-core/extract-direction.js":
/*!*************************************************!*\
  !*** ./src/flex-mask-core/extract-direction.js ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var extractDirection = function extractDirection(maskStr) {
  var _maskStr$match, _maskStr$match2;

  var direction = 'right';
  var _maskStr = maskStr;
  var maskStrWithRightDirection = (_maskStr$match = maskStr === null || maskStr === void 0 ? void 0 : maskStr.match(/\>\>.+/)) !== null && _maskStr$match !== void 0 ? _maskStr$match : [];

  if (maskStrWithRightDirection.length > 0) {
    direction = 'right';
    _maskStr = maskStrWithRightDirection[0].slice(2, maskStrWithRightDirection[0].length);
  }

  var maskStrWithLeftDirection = (_maskStr$match2 = maskStr === null || maskStr === void 0 ? void 0 : maskStr.match(/\<\<.+/)) !== null && _maskStr$match2 !== void 0 ? _maskStr$match2 : [];

  if (maskStrWithLeftDirection.length > 0) {
    direction = 'left';
    _maskStr = maskStrWithLeftDirection[0].slice(2, maskStrWithLeftDirection[0].length);
  }

  return {
    direction: direction,
    maskStr: _maskStr
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractDirection);

/***/ }),

/***/ "./src/flex-mask-core/extract-mask.js":
/*!********************************************!*\
  !*** ./src/flex-mask-core/extract-mask.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _extract_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extract-tokens */ "./src/flex-mask-core/extract-tokens.js");


var extractMask = function extractMask(stringMask) {
  return (0,_extract_tokens__WEBPACK_IMPORTED_MODULE_0__.default)(stringMask).filter(function (token) {
    return !token.keyChar;
  }).map(function (token) {
    return {
      token: token.token,
      start: token.start
    };
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractMask);

/***/ }),

/***/ "./src/flex-mask-core/extract-prefix.js":
/*!**********************************************!*\
  !*** ./src/flex-mask-core/extract-prefix.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var extractPrefix = function extractPrefix(_maskStr) {
  var _maskStr$match, _maskStr2;

  var prefix = '';
  var maskStr = _maskStr;
  var prefixWithCmd = (_maskStr$match = (_maskStr2 = maskStr) === null || _maskStr2 === void 0 ? void 0 : _maskStr2.match(/''[^;]+;/)) !== null && _maskStr$match !== void 0 ? _maskStr$match : [];

  if (prefixWithCmd.length > 0) {
    prefix = prefixWithCmd[0].slice(2, prefixWithCmd[0].length - 1);
    maskStr = prefixWithCmd['input'].slice(prefixWithCmd['index'] + prefixWithCmd[0].length, prefixWithCmd['input'].length);
  }

  return {
    prefix: prefix,
    maskStr: maskStr
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractPrefix);

/***/ }),

/***/ "./src/flex-mask-core/extract-tokens.js":
/*!**********************************************!*\
  !*** ./src/flex-mask-core/extract-tokens.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _key_chars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key-chars */ "./src/flex-mask-core/key-chars.js");


var extractTokens = function extractTokens(stringMask) {
  var arrayMask = Array.from(stringMask);
  var token = {
    token: '',
    start: 0
  };
  var tokens = [];
  var isToken = false;
  var prevChar = '';

  for (var i = 0; i <= arrayMask.length; i++) {
    if (!_key_chars__WEBPACK_IMPORTED_MODULE_0__.keyChars.includes(arrayMask[i]) && i !== arrayMask.length) {
      if (!isToken) {
        token.end = i;
        token.keyChar = true;
        token.regEx = token.keyChar ? "".concat(_key_chars__WEBPACK_IMPORTED_MODULE_0__.regExTokens[token.token[0]]) : token.token;
        tokens.push(token);
        token = {
          token: '',
          start: i
        };
      }

      isToken = true;
      token.token += arrayMask[i];
    } else {
      if (isToken || i > 0 && arrayMask[i] !== prevChar) {
        token.end = i;
        token.keyChar = isToken ? false : true;
        token.regEx = token.keyChar ? "".concat(_key_chars__WEBPACK_IMPORTED_MODULE_0__.regExTokens[token.token[0]]) : token.token;
        tokens.push(token);
        token = {
          token: '',
          start: i
        };
      }

      isToken = false;
      token.token += arrayMask[i];
    }

    prevChar = arrayMask[i];
  }

  return tokens.filter(function (item) {
    return item.token !== '';
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractTokens);

/***/ }),

/***/ "./src/flex-mask-core/key-chars.js":
/*!*****************************************!*\
  !*** ./src/flex-mask-core/key-chars.js ***!
  \*****************************************/
/*! namespace exports */
/*! export escapeChars [provided] [no usage info] [missing usage info prevents renaming] */
/*! export escapeCharsFn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export keyChars [provided] [no usage info] [missing usage info prevents renaming] */
/*! export regExTokens [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyChars": () => /* binding */ keyChars,
/* harmony export */   "regExTokens": () => /* binding */ regExTokens,
/* harmony export */   "escapeChars": () => /* binding */ escapeChars,
/* harmony export */   "escapeCharsFn": () => /* binding */ escapeCharsFn
/* harmony export */ });
var keyChars = ['9', 'A', '*'];
var regExTokens = {
  '9': '[0-9]',
  'A': '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]',
  '*': '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ 0-9]'
};
var escapeChars = {
  '/': '\/',
  '.': '\\.',
  '-': '\\-',
  '(': '\\(',
  ')': '\\)',
  '*': '\\*',
  '+': '\\+',
  '^': '\\^',
  '$': '\\$',
  '[': '\\[',
  ']': '\\]',
  '{': '\\{',
  '}': '\\}'
};
var escapeCharsFn = function escapeCharsFn(chars) {
  return Array.from(chars).map(function (char) {
    return escapeChars[char];
  }).join('');
};

/***/ }),

/***/ "./src/flex-mask-core/make-mask-applicator.js":
/*!****************************************************!*\
  !*** ./src/flex-mask-core/make-mask-applicator.js ***!
  \****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _extract_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extract-mask */ "./src/flex-mask-core/extract-mask.js");
/* harmony import */ var _apply_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apply-mask */ "./src/flex-mask-core/apply-mask.js");
/* harmony import */ var _apply_prefix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apply-prefix */ "./src/flex-mask-core/apply-prefix.js");
/* harmony import */ var _expand_quantifiers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expand-quantifiers */ "./src/flex-mask-core/expand-quantifiers.js");
/* harmony import */ var _extract_direction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extract-direction */ "./src/flex-mask-core/extract-direction.js");
/* harmony import */ var _extract_prefix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extract-prefix */ "./src/flex-mask-core/extract-prefix.js");







var reverseString = function reverseString(str) {
  return Array.from(str).reverse().join('');
};

var getStringMask = function getStringMask(maskStr) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';
  return direction === 'right' ? maskStr : reverseString(maskStr);
};

var makeMaskApplicator = function makeMaskApplicator(maskStr) {
  var expandedMask = (0,_expand_quantifiers__WEBPACK_IMPORTED_MODULE_1__.default)(maskStr);

  var _extractDirection = (0,_extract_direction__WEBPACK_IMPORTED_MODULE_2__.default)(expandedMask),
      direction = _extractDirection.direction,
      mStr = _extractDirection.maskStr;

  var _extractPrefix = (0,_extract_prefix__WEBPACK_IMPORTED_MODULE_3__.default)(mStr),
      prefix = _extractPrefix.prefix,
      mStr2 = _extractPrefix.maskStr;

  var mask = (0,_extract_mask__WEBPACK_IMPORTED_MODULE_0__.default)(getStringMask(mStr2, direction));
  return function (newValue) {
    var _newValue = getStringMask(newValue, direction);

    var valueWithMask = getStringMask((0,_apply_mask__WEBPACK_IMPORTED_MODULE_4__.default)(mask, _newValue), direction);
    return (0,_apply_prefix__WEBPACK_IMPORTED_MODULE_5__.default)(prefix, valueWithMask);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMaskApplicator);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export default [provided] [maybe used in main (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _flex_mask_core_make_mask_applicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flex-mask-core/make-mask-applicator */ "./src/flex-mask-core/make-mask-applicator.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_flex_mask_core_make_mask_applicator__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvYXBwbHktbWFzay5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvYXBwbHktcHJlZml4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9leHBhbmQtcXVhbnRpZmllcnMuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL2V4dHJhY3QtZGlyZWN0aW9uLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9leHRyYWN0LW1hc2suanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL2V4dHJhY3QtcHJlZml4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9leHRyYWN0LXRva2Vucy5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUva2V5LWNoYXJzLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYWtlLW1hc2stYXBwbGljYXRvci5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZsZXgtbWFzay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJhcHBseU1hc2siLCJtYXNrIiwidmFsdWVTdHIiLCJ2YWx1ZVdpdGhNYXNrIiwiaSIsImxlbmd0aCIsInN0YXJ0IiwidmFsdWVBcnIiLCJBcnJheSIsImZyb20iLCJzcGxpY2UiLCJ0b2tlbiIsImpvaW4iLCJhcHBseVByZWZpeCIsInByZWZpeCIsImxlbmd0aFdpdGhDbWQiLCJ0b2tlbldpdGhDbWQiLCJtYWtlRXhwYW5kZWRUb2tlbiIsImNoYXIiLCJleHBhbmRlZFRva2VuIiwicHVzaCIsImdldExlbmd0aFdpdGhDbWQiLCJtYXNrU3RyIiwibWF0Y2giLCJnZXRQdXJlTGVuZ3RoIiwic3RyaW5nTWFzayIsInNsaWNlIiwiZ2V0VG9rZW5XaXRoQ21kIiwiZ2V0UHVyZVRva2VuIiwiZ2V0U3RhcnQiLCJpbmRleCIsImdldERlbCIsImluc2VydEV4cGFuZGVkVG9rZW5JblN0cmluZ01hc2siLCJkZWwiLCJhcnJheU1hc2siLCJleHBhbmRRdWFudGlmaWVycyIsIm5ld1N0cmluZ01hc2siLCJleHRyYWN0RGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwiX21hc2tTdHIiLCJtYXNrU3RyV2l0aFJpZ2h0RGlyZWN0aW9uIiwibWFza1N0cldpdGhMZWZ0RGlyZWN0aW9uIiwiZXh0cmFjdE1hc2siLCJleHRyYWN0VG9rZW5zIiwiZmlsdGVyIiwia2V5Q2hhciIsIm1hcCIsImV4dHJhY3RQcmVmaXgiLCJwcmVmaXhXaXRoQ21kIiwidG9rZW5zIiwiaXNUb2tlbiIsInByZXZDaGFyIiwia2V5Q2hhcnMiLCJlbmQiLCJyZWdFeCIsInJlZ0V4VG9rZW5zIiwiaXRlbSIsImVzY2FwZUNoYXJzIiwiZXNjYXBlQ2hhcnNGbiIsImNoYXJzIiwicmV2ZXJzZVN0cmluZyIsInN0ciIsInJldmVyc2UiLCJnZXRTdHJpbmdNYXNrIiwibWFrZU1hc2tBcHBsaWNhdG9yIiwiZXhwYW5kZWRNYXNrIiwibVN0ciIsIm1TdHIyIiwibmV3VmFsdWUiLCJfbmV3VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUcs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QjVDLE9BRm1COztBQUFBLHVCQUdIeUIsd0RBQWEsQ0FBQ21CLElBQUQsQ0FIVjtBQUFBLE1BRzlCcEQsTUFIOEIsa0JBRzlCQSxNQUg4QjtBQUFBLE1BR2JxRCxLQUhhLGtCQUd0QjdDLE9BSHNCOztBQUl0QyxNQUFNckIsSUFBSSxHQUFHeUMsc0RBQVcsQ0FBQ3FCLGFBQWEsQ0FBQ0ksS0FBRCxFQUFRN0IsU0FBUixDQUFkLENBQXhCO0FBQ0EsU0FBTyxVQUFDOEIsUUFBRCxFQUFjO0FBQ25CLFFBQUlDLFNBQVMsR0FBR04sYUFBYSxDQUFDSyxRQUFELEVBQVc5QixTQUFYLENBQTdCOztBQUNBLFFBQUluQyxhQUFhLEdBQUc0RCxhQUFhLENBQUMvRCxvREFBUyxDQUFDQyxJQUFELEVBQU9vRSxTQUFQLENBQVYsRUFBNkIvQixTQUE3QixDQUFqQztBQUNBLFdBQU96QixzREFBVyxDQUFDQyxNQUFELEVBQVNYLGFBQVQsQ0FBbEI7QUFDRCxHQUpEO0FBS0QsQ0FWRDs7QUFXQSxpRUFBZTZELGtCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFFQSxpRUFBZUEseUVBQWYsRTs7Ozs7O1VDRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcGx5TWFzayA9IChtYXNrLCB2YWx1ZVN0cikgPT4ge1xuICBsZXQgdmFsdWVXaXRoTWFzayA9IHZhbHVlU3RyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYodmFsdWVXaXRoTWFzay5sZW5ndGggPiBtYXNrW2ldLnN0YXJ0KSB7XG4gICAgICBjb25zdCB2YWx1ZUFyciA9IEFycmF5LmZyb20odmFsdWVXaXRoTWFzaylcbiAgICAgIHZhbHVlQXJyLnNwbGljZShtYXNrW2ldLnN0YXJ0LCAwLCBtYXNrW2ldLnRva2VuKVxuICAgICAgdmFsdWVXaXRoTWFzayA9IHZhbHVlQXJyLmpvaW4oJycpXG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZVdpdGhNYXNrXG59XG5leHBvcnQgZGVmYXVsdCBhcHBseU1hc2tcbiIsImNvbnN0IGFwcGx5UHJlZml4ID0gKHByZWZpeCA9ICcnLCB2YWx1ZVN0cikgPT4ge1xuICByZXR1cm4gdmFsdWVTdHIgPyBgJHtwcmVmaXh9JHt2YWx1ZVN0cn1gIDogdmFsdWVTdHJcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwbHlQcmVmaXhcbiAgIiwiY29uc3QgbGVuZ3RoV2l0aENtZCA9IHt9XG5jb25zdCB0b2tlbldpdGhDbWQgPSB7fVxuXG5jb25zdCBtYWtlRXhwYW5kZWRUb2tlbiA9IChjaGFyLCBsZW5ndGgpID0+IHtcbiAgY29uc3QgZXhwYW5kZWRUb2tlbiA9IFtdXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGV4cGFuZGVkVG9rZW4ucHVzaChjaGFyKVxuICB9XG4gIHJldHVybiBleHBhbmRlZFRva2VuXG59XG5cbmNvbnN0IGdldExlbmd0aFdpdGhDbWQgPSBtYXNrU3RyID0+IG1hc2tTdHI/Lm1hdGNoKC9cXF5cXGQrLykgPz8gW11cblxuY29uc3QgZ2V0UHVyZUxlbmd0aCA9IHN0cmluZ01hc2sgPT4ge1xuICBpZighbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXSlcbiAgICBsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdID0gZ2V0TGVuZ3RoV2l0aENtZChzdHJpbmdNYXNrKVxuICBcbiAgaWYgKGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza10ubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiBsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdWzBdLnNsaWNlKDEsIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza11bMF0ubGVuZ3RoKSBcbn1cblxuY29uc3QgZ2V0VG9rZW5XaXRoQ21kID0gbWFza1N0ciA9PiBtYXNrU3RyPy5tYXRjaCgvXFw+XFxkKzt8XFw+XFx3Kzt8XFw+Lis7LykgPz8gW11cblxuY29uc3QgZ2V0UHVyZVRva2VuID0gKHN0cmluZ01hc2spID0+IHtcbiAgdG9rZW5XaXRoQ21kW3N0cmluZ01hc2tdID0gZ2V0VG9rZW5XaXRoQ21kKHN0cmluZ01hc2spXG4gIGlmICh0b2tlbldpdGhDbWRbc3RyaW5nTWFza10ubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiB0b2tlbldpdGhDbWRbc3RyaW5nTWFza11bMF0uc2xpY2UoMSwgdG9rZW5XaXRoQ21kW3N0cmluZ01hc2tdWzBdLmxlbmd0aCAtIDEpXG59XG5cbmNvbnN0IGdldFN0YXJ0ID0gKHN0cmluZ01hc2spID0+IHtcbiAgaWYoIWxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza10pXG4gICAgbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXSA9IGdldExlbmd0aFdpdGhDbWQoc3RyaW5nTWFzaylcblxuICBpZiAobGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza10uaW5kZXhcbn1cblxuY29uc3QgZ2V0RGVsID0gKHN0cmluZ01hc2spID0+IHtcbiAgaWYoIWxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza10pXG4gICAgbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXSA9IGdldExlbmd0aFdpdGhDbWQoc3RyaW5nTWFzaylcblxuICBpZiAobGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgdG9rZW5XaXRoQ21kW3N0cmluZ01hc2tdID0gZ2V0VG9rZW5XaXRoQ21kKHN0cmluZ01hc2spXG4gIGlmICh0b2tlbldpdGhDbWRbc3RyaW5nTWFza10ubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiBsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdWzBdLmxlbmd0aCArIHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXVswXS5sZW5ndGhcbn1cblxuY29uc3QgaW5zZXJ0RXhwYW5kZWRUb2tlbkluU3RyaW5nTWFzayA9IChzdHJpbmdNYXNrLCBleHBhbmRlZFRva2VuLCBzdGFydCwgZGVsKSA9PiB7XG4gIGNvbnN0IGFycmF5TWFzayA9IEFycmF5LmZyb20oc3RyaW5nTWFzaylcbiAgYXJyYXlNYXNrLnNwbGljZShzdGFydCwgZGVsLCAuLi5leHBhbmRlZFRva2VuKVxuICByZXR1cm4gYXJyYXlNYXNrLmpvaW4oJycpXG59XG5cbmNvbnN0IGV4cGFuZFF1YW50aWZpZXJzID0gKHN0cmluZ01hc2spID0+IHtcbiAgY29uc3QgbGVuZ3RoID0gZ2V0UHVyZUxlbmd0aChzdHJpbmdNYXNrKVxuICBpZiAoIWxlbmd0aCkgcmV0dXJuIHN0cmluZ01hc2tcblxuICBjb25zdCB0b2tlbiA9IGdldFB1cmVUb2tlbihzdHJpbmdNYXNrKVxuICBpZiAoIXRva2VuKSByZXR1cm4gc3RyaW5nTWFza1xuXG4gIGNvbnN0IGV4cGFuZGVkVG9rZW4gPSBtYWtlRXhwYW5kZWRUb2tlbih0b2tlbiwgbGVuZ3RoKVxuICBjb25zdCBzdGFydCA9IGdldFN0YXJ0KHN0cmluZ01hc2spXG4gIGNvbnN0IGRlbCA9IGdldERlbChzdHJpbmdNYXNrKVxuICBjb25zdCBuZXdTdHJpbmdNYXNrID0gaW5zZXJ0RXhwYW5kZWRUb2tlbkluU3RyaW5nTWFzayhzdHJpbmdNYXNrLCBleHBhbmRlZFRva2VuLCBzdGFydCwgZGVsKVxuXG4gIHJldHVybiBleHBhbmRRdWFudGlmaWVycyhuZXdTdHJpbmdNYXNrKVxufVxuXG5leHBvcnQgZGVmYXVsdCBleHBhbmRRdWFudGlmaWVyc1xuIiwiY29uc3QgZXh0cmFjdERpcmVjdGlvbiA9IG1hc2tTdHIgPT4ge1xuICBsZXQgZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICBsZXQgX21hc2tTdHIgPSBtYXNrU3RyXG5cbiAgY29uc3QgbWFza1N0cldpdGhSaWdodERpcmVjdGlvbiA9IG1hc2tTdHI/Lm1hdGNoKC9cXD5cXD4uKy8pID8/IFtdXG4gIGlmIChtYXNrU3RyV2l0aFJpZ2h0RGlyZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICBkaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgX21hc2tTdHIgPSBtYXNrU3RyV2l0aFJpZ2h0RGlyZWN0aW9uWzBdLnNsaWNlKDIsIG1hc2tTdHJXaXRoUmlnaHREaXJlY3Rpb25bMF0ubGVuZ3RoKVxuICB9XG5cbiAgY29uc3QgbWFza1N0cldpdGhMZWZ0RGlyZWN0aW9uID0gbWFza1N0cj8ubWF0Y2goL1xcPFxcPC4rLykgPz8gW11cbiAgaWYgKG1hc2tTdHJXaXRoTGVmdERpcmVjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgX21hc2tTdHIgPSBtYXNrU3RyV2l0aExlZnREaXJlY3Rpb25bMF0uc2xpY2UoMiwgbWFza1N0cldpdGhMZWZ0RGlyZWN0aW9uWzBdLmxlbmd0aClcbiAgfVxuICBcbiAgcmV0dXJuIHsgZGlyZWN0aW9uLCBtYXNrU3RyOiBfbWFza1N0ciB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3REaXJlY3Rpb25cbiIsImltcG9ydCBleHRyYWN0VG9rZW5zIGZyb20gJy4vZXh0cmFjdC10b2tlbnMnXG5cbmNvbnN0IGV4dHJhY3RNYXNrID0gKHN0cmluZ01hc2spID0+IHtcblx0cmV0dXJuIGV4dHJhY3RUb2tlbnMoc3RyaW5nTWFzaykuZmlsdGVyKHRva2VuID0+ICF0b2tlbi5rZXlDaGFyKS5tYXAodG9rZW4gPT4gKHtcbiAgICB0b2tlbjogdG9rZW4udG9rZW4sXG4gICAgc3RhcnQ6IHRva2VuLnN0YXJ0LFxuXHR9KSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdE1hc2tcbiIsImNvbnN0IGV4dHJhY3RQcmVmaXggPSAoX21hc2tTdHIpID0+IHtcbiAgbGV0IHByZWZpeCA9ICcnXG4gIGxldCBtYXNrU3RyID0gX21hc2tTdHJcblxuICBjb25zdCBwcmVmaXhXaXRoQ21kID0gbWFza1N0cj8ubWF0Y2goLycnW147XSs7LykgPz8gW11cbiAgaWYgKHByZWZpeFdpdGhDbWQubGVuZ3RoID4gMCkge1xuICAgIHByZWZpeCA9IHByZWZpeFdpdGhDbWRbMF0uc2xpY2UoMiwgcHJlZml4V2l0aENtZFswXS5sZW5ndGggLSAxKVxuICAgIG1hc2tTdHIgPSBwcmVmaXhXaXRoQ21kWydpbnB1dCddLnNsaWNlKHByZWZpeFdpdGhDbWRbJ2luZGV4J10gKyBwcmVmaXhXaXRoQ21kWzBdLmxlbmd0aCwgcHJlZml4V2l0aENtZFsnaW5wdXQnXS5sZW5ndGgpXG4gIH1cblxuICByZXR1cm4geyBwcmVmaXgsIG1hc2tTdHIgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBleHRyYWN0UHJlZml4XG4iLCJpbXBvcnQgeyBrZXlDaGFycywgcmVnRXhUb2tlbnMgfSBmcm9tICcuL2tleS1jaGFycydcblxuY29uc3QgZXh0cmFjdFRva2VucyA9IChzdHJpbmdNYXNrKSA9PiB7XG5cdGNvbnN0IGFycmF5TWFzayA9IEFycmF5LmZyb20oc3RyaW5nTWFzaylcblx0bGV0IHRva2VuID0ge1xuICAgIHRva2VuOiAnJyxcbiAgICBzdGFydDogMFxuXHR9XG5cdGNvbnN0IHRva2VucyA9IFtdXG4gIGxldCBpc1Rva2VuID0gZmFsc2VcbiAgbGV0IHByZXZDaGFyID0gJydcblx0Zm9yKGxldCBpID0gMDsgaSA8PSBhcnJheU1hc2subGVuZ3RoOyBpKyspIHtcblx0XHRpZigha2V5Q2hhcnMuaW5jbHVkZXMoYXJyYXlNYXNrW2ldKSAmJiBpICE9PSBhcnJheU1hc2subGVuZ3RoKSB7XG5cdFx0XHRpZighaXNUb2tlbikge1xuICAgICAgICB0b2tlbi5lbmQgPSBpXG4gICAgICAgIHRva2VuLmtleUNoYXIgPSB0cnVlXG4gICAgICAgIHRva2VuLnJlZ0V4ID0gdG9rZW4ua2V5Q2hhciA/IGAke3JlZ0V4VG9rZW5zW3Rva2VuLnRva2VuWzBdXX1gIDogdG9rZW4udG9rZW5cbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pXG4gICAgICAgIHRva2VuID0ge1xuICAgICAgICAgIHRva2VuOiAnJyxcbiAgICAgICAgICBzdGFydDogaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpc1Rva2VuID0gdHJ1ZVxuICAgICAgdG9rZW4udG9rZW4gKz0gYXJyYXlNYXNrW2ldXG5cdFx0fSBlbHNlIHtcbiAgICAgIGlmKGlzVG9rZW4gfHwgKGkgPiAwICYmIGFycmF5TWFza1tpXSAhPT0gcHJldkNoYXIpKSB7XG4gICAgICAgIHRva2VuLmVuZCA9IGlcbiAgICAgICAgdG9rZW4ua2V5Q2hhciA9IGlzVG9rZW4gPyBmYWxzZSA6IHRydWVcbiAgICAgICAgdG9rZW4ucmVnRXggPSB0b2tlbi5rZXlDaGFyID8gYCR7cmVnRXhUb2tlbnNbdG9rZW4udG9rZW5bMF1dfWAgOiB0b2tlbi50b2tlblxuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbilcbiAgICAgICAgdG9rZW4gPSB7XG4gICAgICAgICAgdG9rZW46ICcnLFxuICAgICAgICAgIHN0YXJ0OiBpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlzVG9rZW4gPSBmYWxzZVxuICAgICAgdG9rZW4udG9rZW4gKz0gYXJyYXlNYXNrW2ldXG4gICAgfVxuICAgIHByZXZDaGFyID0gYXJyYXlNYXNrW2ldXG4gIH1cblx0cmV0dXJuIHRva2Vucy5maWx0ZXIoaXRlbSA9PiBpdGVtLnRva2VuICE9PSAnJylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdFRva2Vuc1xuIiwiZXhwb3J0IGNvbnN0IGtleUNoYXJzID0gWyc5JywgJ0EnLCAnKiddXG5leHBvcnQgY29uc3QgcmVnRXhUb2tlbnMgPSB7XG4gICc5JzogJ1swLTldJywgXG4gICdBJzogJ1tBLVphLXrDocOgw6LDo8Opw6jDqsOtw6/Ds8O0w7XDtsO6w6fDscOBw4DDgsODw4nDiMONw4/Dk8OUw5XDlsOaw4fDkSBdJywgXG4gICcqJzogJ1tBLVphLXrDocOgw6LDo8Opw6jDqsOtw6/Ds8O0w7XDtsO6w6fDscOBw4DDgsODw4nDiMONw4/Dk8OUw5XDlsOaw4fDkSAwLTldJyxcbn1cbmV4cG9ydCBjb25zdCBlc2NhcGVDaGFycyA9IHtcbiAgJy8nOiAnXFwvJyxcbiAgJy4nOiAnXFxcXC4nLFxuICAnLSc6ICdcXFxcLScsXG4gICcoJzogJ1xcXFwoJyxcbiAgJyknOiAnXFxcXCknLFxuICAnKic6ICdcXFxcKicsXG4gICcrJzogJ1xcXFwrJyxcbiAgJ14nOiAnXFxcXF4nLFxuICAnJCc6ICdcXFxcJCcsXG4gICdbJzogJ1xcXFxbJyxcbiAgJ10nOiAnXFxcXF0nLFxuICAneyc6ICdcXFxceycsXG4gICd9JzogJ1xcXFx9Jyxcbn1cbmV4cG9ydCBjb25zdCBlc2NhcGVDaGFyc0ZuID0gKGNoYXJzKSA9PiB7XG4gIHJldHVybiBBcnJheS5mcm9tKGNoYXJzKS5tYXAoY2hhciA9PiBlc2NhcGVDaGFyc1tjaGFyXSkuam9pbignJylcbn1cbiAiLCJpbXBvcnQgZXh0cmFjdE1hc2sgZnJvbSAnLi9leHRyYWN0LW1hc2snXG5pbXBvcnQgYXBwbHlNYXNrIGZyb20gJy4vYXBwbHktbWFzaydcbmltcG9ydCBhcHBseVByZWZpeCBmcm9tICcuL2FwcGx5LXByZWZpeCdcbmltcG9ydCBleHBhbmRRdWFudGlmaWVycyBmcm9tICcuL2V4cGFuZC1xdWFudGlmaWVycydcbmltcG9ydCBleHRyYWN0RGlyZWN0aW9uIGZyb20gJy4vZXh0cmFjdC1kaXJlY3Rpb24nXG5pbXBvcnQgZXh0cmFjdFByZWZpeCBmcm9tICcuL2V4dHJhY3QtcHJlZml4J1xuXG5jb25zdCByZXZlcnNlU3RyaW5nID0gc3RyID0+IEFycmF5LmZyb20oc3RyKS5yZXZlcnNlKCkuam9pbignJylcbmNvbnN0IGdldFN0cmluZ01hc2sgPSAobWFza1N0ciwgZGlyZWN0aW9uID0gJ3JpZ2h0JykgPT4gZGlyZWN0aW9uID09PSAncmlnaHQnID8gbWFza1N0ciA6IHJldmVyc2VTdHJpbmcobWFza1N0cilcblxuY29uc3QgbWFrZU1hc2tBcHBsaWNhdG9yID0gKG1hc2tTdHIpID0+IHtcbiAgY29uc3QgZXhwYW5kZWRNYXNrID0gZXhwYW5kUXVhbnRpZmllcnMobWFza1N0cilcbiAgY29uc3QgeyBkaXJlY3Rpb24sIG1hc2tTdHI6IG1TdHIgfSA9IGV4dHJhY3REaXJlY3Rpb24oZXhwYW5kZWRNYXNrKVxuICBjb25zdCB7IHByZWZpeCwgbWFza1N0cjogbVN0cjIgfSA9IGV4dHJhY3RQcmVmaXgobVN0cilcbiAgY29uc3QgbWFzayA9IGV4dHJhY3RNYXNrKGdldFN0cmluZ01hc2sobVN0cjIsIGRpcmVjdGlvbikpXG4gIHJldHVybiAobmV3VmFsdWUpID0+IHtcbiAgICBsZXQgX25ld1ZhbHVlID0gZ2V0U3RyaW5nTWFzayhuZXdWYWx1ZSwgZGlyZWN0aW9uKVxuICAgIGxldCB2YWx1ZVdpdGhNYXNrID0gZ2V0U3RyaW5nTWFzayhhcHBseU1hc2sobWFzaywgX25ld1ZhbHVlKSwgZGlyZWN0aW9uKVxuICAgIHJldHVybiBhcHBseVByZWZpeChwcmVmaXgsIHZhbHVlV2l0aE1hc2spXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG1ha2VNYXNrQXBwbGljYXRvclxuIiwiaW1wb3J0IG1ha2VNYXNrQXBwbGljYXRvciBmcm9tICcuL2ZsZXgtbWFzay1jb3JlL21ha2UtbWFzay1hcHBsaWNhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlTWFza0FwcGxpY2F0b3JcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==