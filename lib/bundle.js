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
  'A': '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]',
  '*': '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9]'
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
    return escapeChars[char] || char;
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
/* harmony import */ var _apply_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apply-mask */ "./src/flex-mask-core/apply-mask.js");
/* harmony import */ var _apply_prefix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apply-prefix */ "./src/flex-mask-core/apply-prefix.js");
/* harmony import */ var _expand_quantifiers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expand-quantifiers */ "./src/flex-mask-core/expand-quantifiers.js");
/* harmony import */ var _extract_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extract-direction */ "./src/flex-mask-core/extract-direction.js");
/* harmony import */ var _extract_prefix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extract-prefix */ "./src/flex-mask-core/extract-prefix.js");
/* harmony import */ var _remove_prefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-prefix */ "./src/flex-mask-core/remove-prefix.js");
/* harmony import */ var _remove_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-mask */ "./src/flex-mask-core/remove-mask.js");









var reverseString = function reverseString(str) {
  return Array.from(str).reverse().join('');
};

var getStringMask = function getStringMask(maskStr) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';
  return direction === 'right' ? maskStr : reverseString(maskStr);
};

var makeMaskApplicator = function makeMaskApplicator(maskStr) {
  // pre processamento
  var expandedMask = (0,_expand_quantifiers__WEBPACK_IMPORTED_MODULE_1__.default)(maskStr);

  var _extractDirection = (0,_extract_direction__WEBPACK_IMPORTED_MODULE_4__.default)(expandedMask),
      direction = _extractDirection.direction,
      mStr = _extractDirection.maskStr;

  var get = function get(mStr) {
    return getStringMask(mStr, direction);
  };

  var _extractPrefix = (0,_extract_prefix__WEBPACK_IMPORTED_MODULE_5__.default)(mStr),
      prefix = _extractPrefix.prefix,
      mStr2 = _extractPrefix.maskStr;

  var mask = (0,_extract_mask__WEBPACK_IMPORTED_MODULE_0__.default)(get(mStr2));

  var _applyMask = function _applyMask(mStr) {
    return (0,_apply_mask__WEBPACK_IMPORTED_MODULE_6__.default)(mask, mStr);
  };

  var _applyPrefix = function _applyPrefix(mStr) {
    return (0,_apply_prefix__WEBPACK_IMPORTED_MODULE_7__.default)(prefix, mStr);
  };

  return function (newValue) {
    // processamento
    var valueNoPrefix = (0,_remove_prefix__WEBPACK_IMPORTED_MODULE_2__.default)(newValue, prefix);
    var valueNoPrefixNoMask = (0,_remove_mask__WEBPACK_IMPORTED_MODULE_3__.default)(valueNoPrefix);
    var valueNoPrefixNoMaskI = get(valueNoPrefixNoMask);

    var valueNoPrefixWithMaskI = _applyMask(valueNoPrefixNoMaskI);

    var valueNoPrefixWithMask = get(valueNoPrefixWithMaskI);

    var valueWithPrefixAndMask = _applyPrefix(valueNoPrefixWithMask);

    return valueWithPrefixAndMask;
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMaskApplicator);

/***/ }),

/***/ "./src/flex-mask-core/remove-mask.js":
/*!*******************************************!*\
  !*** ./src/flex-mask-core/remove-mask.js ***!
  \*******************************************/
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


var removeMask = function removeMask(valueWithMask) {
  return Array.from(valueWithMask).filter(function (char) {
    return new RegExp("^".concat(_key_chars__WEBPACK_IMPORTED_MODULE_0__.regExTokens["*"])).test(char);
  }).join('');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeMask);

/***/ }),

/***/ "./src/flex-mask-core/remove-prefix.js":
/*!*********************************************!*\
  !*** ./src/flex-mask-core/remove-prefix.js ***!
  \*********************************************/
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


var removeValuePrefix = function removeValuePrefix(valueWithPrefix) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return new RegExp("^".concat((0,_key_chars__WEBPACK_IMPORTED_MODULE_0__.escapeCharsFn)(prefix))).test(valueWithPrefix) ? valueWithPrefix.slice(prefix.length, valueWithPrefix.length) : valueWithPrefix;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeValuePrefix);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvYXBwbHktbWFzay5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvYXBwbHktcHJlZml4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9leHBhbmQtcXVhbnRpZmllcnMuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL2V4dHJhY3QtZGlyZWN0aW9uLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9leHRyYWN0LW1hc2suanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL2V4dHJhY3QtcHJlZml4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9leHRyYWN0LXRva2Vucy5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUva2V5LWNoYXJzLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYWtlLW1hc2stYXBwbGljYXRvci5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvcmVtb3ZlLW1hc2suanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL3JlbW92ZS1wcmVmaXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mbGV4LW1hc2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZsZXgtbWFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZsZXgtbWFzay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZsZXgtbWFzay93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiYXBwbHlNYXNrIiwibWFzayIsInZhbHVlU3RyIiwidmFsdWVXaXRoTWFzayIsImkiLCJsZW5ndGgiLCJzdGFydCIsInZhbHVlQXJyIiwiQXJyYXkiLCJmcm9tIiwic3BsaWNlIiwidG9rZW4iLCJqb2luIiwiYXBwbHlQcmVmaXgiLCJwcmVmaXgiLCJsZW5ndGhXaXRoQ21kIiwidG9rZW5XaXRoQ21kIiwibWFrZUV4cGFuZGVkVG9rZW4iLCJjaGFyIiwiZXhwYW5kZWRUb2tlbiIsInB1c2giLCJnZXRMZW5ndGhXaXRoQ21kIiwibWFza1N0ciIsIm1hdGNoIiwiZ2V0UHVyZUxlbmd0aCIsInN0cmluZ01hc2siLCJzbGljZSIsImdldFRva2VuV2l0aENtZCIsImdldFB1cmVUb2tlbiIsImdldFN0YXJ0IiwiaW5kZXgiLCJnZXREZWwiLCJpbnNlcnRFeHBhbmRlZFRva2VuSW5TdHJpbmdNYXNrIiwiZGVsIiwiYXJyYXlNYXNrIiwiZXhwYW5kUXVhbnRpZmllcnMiLCJuZXdTdHJpbmdNYXNrIiwiZXh0cmFjdERpcmVjdGlvbiIsImRpcmVjdGlvbiIsIl9tYXNrU3RyIiwibWFza1N0cldpdGhSaWdodERpcmVjdGlvbiIsIm1hc2tTdHJXaXRoTGVmdERpcmVjdGlvbiIsImV4dHJhY3RNYXNrIiwiZXh0cmFjdFRva2VucyIsImZpbHRlciIsImtleUNoYXIiLCJtYXAiLCJleHRyYWN0UHJlZml4IiwicHJlZml4V2l0aENtZCIsInRva2VucyIsImlzVG9rZW4iLCJwcmV2Q2hhciIsImtleUNoYXJzIiwiZW5kIiwicmVnRXgiLCJyZWdFeFRva2VucyIsIml0ZW0iLCJlc2NhcGVDaGFycyIsImVzY2FwZUNoYXJzRm4iLCJjaGFycyIsInJldmVyc2VTdHJpbmciLCJzdHIiLCJyZXZlcnNlIiwiZ2V0U3RyaW5nTWFzayIsIm1ha2VNYXNrQXBwbGljYXRvciIsImV4cGFuZGVkTWFzayIsIm1TdHIiLCJnZXQiLCJtU3RyMiIsIl9hcHBseU1hc2siLCJfYXBwbHlQcmVmaXgiLCJuZXdWYWx1ZSIsInZhbHVlTm9QcmVmaXgiLCJyZW1vdmVQcmVmaXgiLCJ2YWx1ZU5vUHJlZml4Tm9NYXNrIiwicmVtb3ZlTWFzayIsInZhbHVlTm9QcmVmaXhOb01hc2tJIiwidmFsdWVOb1ByZWZpeFdpdGhNYXNrSSIsInZhbHVlTm9QcmVmaXhXaXRoTWFzayIsInZhbHVlV2l0aFByZWZpeEFuZE1hc2siLCJSZWdFeHAiLCJ0ZXN0IiwicmVtb3ZlVmFsdWVQcmVmaXgiLCJ2YWx1ZVdpdGhQcmVmaXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQU9DLFFBQVAsRUFBb0I7QUFDcEMsTUFBSUMsYUFBYSxHQUFHRCxRQUFwQjs7QUFDQSxPQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0gsSUFBSSxDQUFDSSxNQUF4QixFQUFnQ0QsQ0FBQyxFQUFqQyxFQUFxQztBQUNuQyxRQUFHRCxhQUFhLENBQUNFLE1BQWQsR0FBdUJKLElBQUksQ0FBQ0csQ0FBRCxDQUFKLENBQVFFLEtBQWxDLEVBQXlDO0FBQ3ZDLFVBQU1DLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdOLGFBQVgsQ0FBakI7QUFDQUksY0FBUSxDQUFDRyxNQUFULENBQWdCVCxJQUFJLENBQUNHLENBQUQsQ0FBSixDQUFRRSxLQUF4QixFQUErQixDQUEvQixFQUFrQ0wsSUFBSSxDQUFDRyxDQUFELENBQUosQ0FBUU8sS0FBMUM7QUFDQVIsbUJBQWEsR0FBR0ksUUFBUSxDQUFDSyxJQUFULENBQWMsRUFBZCxDQUFoQjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT1QsYUFBUDtBQUNELENBVkQ7O0FBV0EsaUVBQWVILFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEEsSUFBTWEsV0FBVyxH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ZUFBZSxDQUFDOUUsTUFBckQsQ0FERyxHQUM0RDhFLGVBRG5FO0FBRUQsQ0FIRDs7QUFLQSxpRUFBZUQsaUJBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBRUEsaUVBQWVsQix5RUFBZixFOzs7Ozs7VUNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwbHlNYXNrID0gKG1hc2ssIHZhbHVlU3RyKSA9PiB7XG4gIGxldCB2YWx1ZVdpdGhNYXNrID0gdmFsdWVTdHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcbiAgICBpZih2YWx1ZVdpdGhNYXNrLmxlbmd0aCA+IG1hc2tbaV0uc3RhcnQpIHtcbiAgICAgIGNvbnN0IHZhbHVlQXJyID0gQXJyYXkuZnJvbSh2YWx1ZVdpdGhNYXNrKVxuICAgICAgdmFsdWVBcnIuc3BsaWNlKG1hc2tbaV0uc3RhcnQsIDAsIG1hc2tbaV0udG9rZW4pXG4gICAgICB2YWx1ZVdpdGhNYXNrID0gdmFsdWVBcnIuam9pbignJylcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlV2l0aE1hc2tcbn1cbmV4cG9ydCBkZWZhdWx0IGFwcGx5TWFza1xuIiwiY29uc3QgYXBwbHlQcmVmaXggPSAocHJlZml4ID0gJycsIHZhbHVlU3RyKSA9PiB7XG4gIHJldHVybiB2YWx1ZVN0ciA/IGAke3ByZWZpeH0ke3ZhbHVlU3RyfWAgOiB2YWx1ZVN0clxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBseVByZWZpeFxuICAiLCJjb25zdCBsZW5ndGhXaXRoQ21kID0ge31cbmNvbnN0IHRva2VuV2l0aENtZCA9IHt9XG5cbmNvbnN0IG1ha2VFeHBhbmRlZFRva2VuID0gKGNoYXIsIGxlbmd0aCkgPT4ge1xuICBjb25zdCBleHBhbmRlZFRva2VuID0gW11cbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgZXhwYW5kZWRUb2tlbi5wdXNoKGNoYXIpXG4gIH1cbiAgcmV0dXJuIGV4cGFuZGVkVG9rZW5cbn1cblxuY29uc3QgZ2V0TGVuZ3RoV2l0aENtZCA9IG1hc2tTdHIgPT4gbWFza1N0cj8ubWF0Y2goL1xcXlxcZCsvKSA/PyBbXVxuXG5jb25zdCBnZXRQdXJlTGVuZ3RoID0gc3RyaW5nTWFzayA9PiB7XG4gIGlmKCFsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdKVxuICAgIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza10gPSBnZXRMZW5ndGhXaXRoQ21kKHN0cmluZ01hc2spXG4gIFxuICBpZiAobGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza11bMF0uc2xpY2UoMSwgbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXVswXS5sZW5ndGgpIFxufVxuXG5jb25zdCBnZXRUb2tlbldpdGhDbWQgPSBtYXNrU3RyID0+IG1hc2tTdHI/Lm1hdGNoKC9cXD5cXGQrO3xcXD5cXHcrO3xcXD4uKzsvKSA/PyBbXVxuXG5jb25zdCBnZXRQdXJlVG9rZW4gPSAoc3RyaW5nTWFzaykgPT4ge1xuICB0b2tlbldpdGhDbWRbc3RyaW5nTWFza10gPSBnZXRUb2tlbldpdGhDbWQoc3RyaW5nTWFzaylcbiAgaWYgKHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXVswXS5zbGljZSgxLCB0b2tlbldpdGhDbWRbc3RyaW5nTWFza11bMF0ubGVuZ3RoIC0gMSlcbn1cblxuY29uc3QgZ2V0U3RhcnQgPSAoc3RyaW5nTWFzaykgPT4ge1xuICBpZighbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXSlcbiAgICBsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdID0gZ2V0TGVuZ3RoV2l0aENtZChzdHJpbmdNYXNrKVxuXG4gIGlmIChsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICByZXR1cm4gbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXS5pbmRleFxufVxuXG5jb25zdCBnZXREZWwgPSAoc3RyaW5nTWFzaykgPT4ge1xuICBpZighbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXSlcbiAgICBsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdID0gZ2V0TGVuZ3RoV2l0aENtZChzdHJpbmdNYXNrKVxuXG4gIGlmIChsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICB0b2tlbldpdGhDbWRbc3RyaW5nTWFza10gPSBnZXRUb2tlbldpdGhDbWQoc3RyaW5nTWFzaylcbiAgaWYgKHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza11bMF0ubGVuZ3RoICsgdG9rZW5XaXRoQ21kW3N0cmluZ01hc2tdWzBdLmxlbmd0aFxufVxuXG5jb25zdCBpbnNlcnRFeHBhbmRlZFRva2VuSW5TdHJpbmdNYXNrID0gKHN0cmluZ01hc2ssIGV4cGFuZGVkVG9rZW4sIHN0YXJ0LCBkZWwpID0+IHtcbiAgY29uc3QgYXJyYXlNYXNrID0gQXJyYXkuZnJvbShzdHJpbmdNYXNrKVxuICBhcnJheU1hc2suc3BsaWNlKHN0YXJ0LCBkZWwsIC4uLmV4cGFuZGVkVG9rZW4pXG4gIHJldHVybiBhcnJheU1hc2suam9pbignJylcbn1cblxuY29uc3QgZXhwYW5kUXVhbnRpZmllcnMgPSAoc3RyaW5nTWFzaykgPT4ge1xuICBjb25zdCBsZW5ndGggPSBnZXRQdXJlTGVuZ3RoKHN0cmluZ01hc2spXG4gIGlmICghbGVuZ3RoKSByZXR1cm4gc3RyaW5nTWFza1xuXG4gIGNvbnN0IHRva2VuID0gZ2V0UHVyZVRva2VuKHN0cmluZ01hc2spXG4gIGlmICghdG9rZW4pIHJldHVybiBzdHJpbmdNYXNrXG5cbiAgY29uc3QgZXhwYW5kZWRUb2tlbiA9IG1ha2VFeHBhbmRlZFRva2VuKHRva2VuLCBsZW5ndGgpXG4gIGNvbnN0IHN0YXJ0ID0gZ2V0U3RhcnQoc3RyaW5nTWFzaylcbiAgY29uc3QgZGVsID0gZ2V0RGVsKHN0cmluZ01hc2spXG4gIGNvbnN0IG5ld1N0cmluZ01hc2sgPSBpbnNlcnRFeHBhbmRlZFRva2VuSW5TdHJpbmdNYXNrKHN0cmluZ01hc2ssIGV4cGFuZGVkVG9rZW4sIHN0YXJ0LCBkZWwpXG5cbiAgcmV0dXJuIGV4cGFuZFF1YW50aWZpZXJzKG5ld1N0cmluZ01hc2spXG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cGFuZFF1YW50aWZpZXJzXG4iLCJjb25zdCBleHRyYWN0RGlyZWN0aW9uID0gbWFza1N0ciA9PiB7XG4gIGxldCBkaXJlY3Rpb24gPSAncmlnaHQnXG4gIGxldCBfbWFza1N0ciA9IG1hc2tTdHJcblxuICBjb25zdCBtYXNrU3RyV2l0aFJpZ2h0RGlyZWN0aW9uID0gbWFza1N0cj8ubWF0Y2goL1xcPlxcPi4rLykgPz8gW11cbiAgaWYgKG1hc2tTdHJXaXRoUmlnaHREaXJlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgIGRpcmVjdGlvbiA9ICdyaWdodCdcbiAgICBfbWFza1N0ciA9IG1hc2tTdHJXaXRoUmlnaHREaXJlY3Rpb25bMF0uc2xpY2UoMiwgbWFza1N0cldpdGhSaWdodERpcmVjdGlvblswXS5sZW5ndGgpXG4gIH1cblxuICBjb25zdCBtYXNrU3RyV2l0aExlZnREaXJlY3Rpb24gPSBtYXNrU3RyPy5tYXRjaCgvXFw8XFw8LisvKSA/PyBbXVxuICBpZiAobWFza1N0cldpdGhMZWZ0RGlyZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICBkaXJlY3Rpb24gPSAnbGVmdCdcbiAgICBfbWFza1N0ciA9IG1hc2tTdHJXaXRoTGVmdERpcmVjdGlvblswXS5zbGljZSgyLCBtYXNrU3RyV2l0aExlZnREaXJlY3Rpb25bMF0ubGVuZ3RoKVxuICB9XG4gIFxuICByZXR1cm4geyBkaXJlY3Rpb24sIG1hc2tTdHI6IF9tYXNrU3RyIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdERpcmVjdGlvblxuIiwiaW1wb3J0IGV4dHJhY3RUb2tlbnMgZnJvbSAnLi9leHRyYWN0LXRva2VucydcblxuY29uc3QgZXh0cmFjdE1hc2sgPSAoc3RyaW5nTWFzaykgPT4ge1xuXHRyZXR1cm4gZXh0cmFjdFRva2VucyhzdHJpbmdNYXNrKS5maWx0ZXIodG9rZW4gPT4gIXRva2VuLmtleUNoYXIpLm1hcCh0b2tlbiA9PiAoe1xuICAgIHRva2VuOiB0b2tlbi50b2tlbixcbiAgICBzdGFydDogdG9rZW4uc3RhcnQsXG5cdH0pKVxufVxuXG5leHBvcnQgZGVmYXVsdCBleHRyYWN0TWFza1xuIiwiY29uc3QgZXh0cmFjdFByZWZpeCA9IChfbWFza1N0cikgPT4ge1xuICBsZXQgcHJlZml4ID0gJydcbiAgbGV0IG1hc2tTdHIgPSBfbWFza1N0clxuXG4gIGNvbnN0IHByZWZpeFdpdGhDbWQgPSBtYXNrU3RyPy5tYXRjaCgvJydbXjtdKzsvKSA/PyBbXVxuICBpZiAocHJlZml4V2l0aENtZC5sZW5ndGggPiAwKSB7XG4gICAgcHJlZml4ID0gcHJlZml4V2l0aENtZFswXS5zbGljZSgyLCBwcmVmaXhXaXRoQ21kWzBdLmxlbmd0aCAtIDEpXG4gICAgbWFza1N0ciA9IHByZWZpeFdpdGhDbWRbJ2lucHV0J10uc2xpY2UocHJlZml4V2l0aENtZFsnaW5kZXgnXSArIHByZWZpeFdpdGhDbWRbMF0ubGVuZ3RoLCBwcmVmaXhXaXRoQ21kWydpbnB1dCddLmxlbmd0aClcbiAgfVxuXG4gIHJldHVybiB7IHByZWZpeCwgbWFza1N0ciB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RQcmVmaXhcbiIsImltcG9ydCB7IGtleUNoYXJzLCByZWdFeFRva2VucyB9IGZyb20gJy4va2V5LWNoYXJzJ1xuXG5jb25zdCBleHRyYWN0VG9rZW5zID0gKHN0cmluZ01hc2spID0+IHtcblx0Y29uc3QgYXJyYXlNYXNrID0gQXJyYXkuZnJvbShzdHJpbmdNYXNrKVxuXHRsZXQgdG9rZW4gPSB7XG4gICAgdG9rZW46ICcnLFxuICAgIHN0YXJ0OiAwXG5cdH1cblx0Y29uc3QgdG9rZW5zID0gW11cbiAgbGV0IGlzVG9rZW4gPSBmYWxzZVxuICBsZXQgcHJldkNoYXIgPSAnJ1xuXHRmb3IobGV0IGkgPSAwOyBpIDw9IGFycmF5TWFzay5sZW5ndGg7IGkrKykge1xuXHRcdGlmKCFrZXlDaGFycy5pbmNsdWRlcyhhcnJheU1hc2tbaV0pICYmIGkgIT09IGFycmF5TWFzay5sZW5ndGgpIHtcblx0XHRcdGlmKCFpc1Rva2VuKSB7XG4gICAgICAgIHRva2VuLmVuZCA9IGlcbiAgICAgICAgdG9rZW4ua2V5Q2hhciA9IHRydWVcbiAgICAgICAgdG9rZW4ucmVnRXggPSB0b2tlbi5rZXlDaGFyID8gYCR7cmVnRXhUb2tlbnNbdG9rZW4udG9rZW5bMF1dfWAgOiB0b2tlbi50b2tlblxuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbilcbiAgICAgICAgdG9rZW4gPSB7XG4gICAgICAgICAgdG9rZW46ICcnLFxuICAgICAgICAgIHN0YXJ0OiBpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlzVG9rZW4gPSB0cnVlXG4gICAgICB0b2tlbi50b2tlbiArPSBhcnJheU1hc2tbaV1cblx0XHR9IGVsc2Uge1xuICAgICAgaWYoaXNUb2tlbiB8fCAoaSA+IDAgJiYgYXJyYXlNYXNrW2ldICE9PSBwcmV2Q2hhcikpIHtcbiAgICAgICAgdG9rZW4uZW5kID0gaVxuICAgICAgICB0b2tlbi5rZXlDaGFyID0gaXNUb2tlbiA/IGZhbHNlIDogdHJ1ZVxuICAgICAgICB0b2tlbi5yZWdFeCA9IHRva2VuLmtleUNoYXIgPyBgJHtyZWdFeFRva2Vuc1t0b2tlbi50b2tlblswXV19YCA6IHRva2VuLnRva2VuXG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKVxuICAgICAgICB0b2tlbiA9IHtcbiAgICAgICAgICB0b2tlbjogJycsXG4gICAgICAgICAgc3RhcnQ6IGlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXNUb2tlbiA9IGZhbHNlXG4gICAgICB0b2tlbi50b2tlbiArPSBhcnJheU1hc2tbaV1cbiAgICB9XG4gICAgcHJldkNoYXIgPSBhcnJheU1hc2tbaV1cbiAgfVxuXHRyZXR1cm4gdG9rZW5zLmZpbHRlcihpdGVtID0+IGl0ZW0udG9rZW4gIT09ICcnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBleHRyYWN0VG9rZW5zXG4iLCJleHBvcnQgY29uc3Qga2V5Q2hhcnMgPSBbJzknLCAnQScsICcqJ11cbmV4cG9ydCBjb25zdCByZWdFeFRva2VucyA9IHtcbiAgJzknOiAnWzAtOV0nLCBcbiAgJ0EnOiAnW0EtWmEtesOhw6DDosOjw6nDqMOqw63Dr8Ozw7TDtcO2w7rDp8Oxw4HDgMOCw4PDicOIw43Dj8OTw5TDlcOWw5rDh8ORXScsIFxuICAnKic6ICdbQS1aYS16w6HDoMOiw6PDqcOow6rDrcOvw7PDtMO1w7bDusOnw7HDgcOAw4LDg8OJw4jDjcOPw5PDlMOVw5bDmsOHw5EwLTldJyxcbn1cbmV4cG9ydCBjb25zdCBlc2NhcGVDaGFycyA9IHtcbiAgJy8nOiAnXFwvJyxcbiAgJy4nOiAnXFxcXC4nLFxuICAnLSc6ICdcXFxcLScsXG4gICcoJzogJ1xcXFwoJyxcbiAgJyknOiAnXFxcXCknLFxuICAnKic6ICdcXFxcKicsXG4gICcrJzogJ1xcXFwrJyxcbiAgJ14nOiAnXFxcXF4nLFxuICAnJCc6ICdcXFxcJCcsXG4gICdbJzogJ1xcXFxbJyxcbiAgJ10nOiAnXFxcXF0nLFxuICAneyc6ICdcXFxceycsXG4gICd9JzogJ1xcXFx9Jyxcbn1cbmV4cG9ydCBjb25zdCBlc2NhcGVDaGFyc0ZuID0gKGNoYXJzKSA9PiB7XG4gIHJldHVybiBBcnJheS5mcm9tKGNoYXJzKS5tYXAoY2hhciA9PiBlc2NhcGVDaGFyc1tjaGFyXSB8fCBjaGFyKS5qb2luKCcnKVxufVxuICIsImltcG9ydCBleHRyYWN0TWFzayBmcm9tICcuL2V4dHJhY3QtbWFzaydcbmltcG9ydCBhcHBseU1hc2sgZnJvbSAnLi9hcHBseS1tYXNrJ1xuaW1wb3J0IGFwcGx5UHJlZml4IGZyb20gJy4vYXBwbHktcHJlZml4J1xuaW1wb3J0IGV4cGFuZFF1YW50aWZpZXJzIGZyb20gJy4vZXhwYW5kLXF1YW50aWZpZXJzJ1xuaW1wb3J0IGV4dHJhY3REaXJlY3Rpb24gZnJvbSAnLi9leHRyYWN0LWRpcmVjdGlvbidcbmltcG9ydCBleHRyYWN0UHJlZml4IGZyb20gJy4vZXh0cmFjdC1wcmVmaXgnXG5pbXBvcnQgcmVtb3ZlUHJlZml4IGZyb20gJy4vcmVtb3ZlLXByZWZpeCdcbmltcG9ydCByZW1vdmVNYXNrIGZyb20gJy4vcmVtb3ZlLW1hc2snXG5cbmNvbnN0IHJldmVyc2VTdHJpbmcgPSBzdHIgPT4gQXJyYXkuZnJvbShzdHIpLnJldmVyc2UoKS5qb2luKCcnKVxuXG5jb25zdCBnZXRTdHJpbmdNYXNrID0gKG1hc2tTdHIsIGRpcmVjdGlvbiA9ICdyaWdodCcpID0+IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/IG1hc2tTdHIgOiByZXZlcnNlU3RyaW5nKG1hc2tTdHIpXG5cbmNvbnN0IG1ha2VNYXNrQXBwbGljYXRvciA9IChtYXNrU3RyKSA9PiB7XG4gIC8vIHByZSBwcm9jZXNzYW1lbnRvXG4gIGNvbnN0IGV4cGFuZGVkTWFzayA9IGV4cGFuZFF1YW50aWZpZXJzKG1hc2tTdHIpXG4gIGNvbnN0IHsgZGlyZWN0aW9uLCBtYXNrU3RyOiBtU3RyIH0gPSBleHRyYWN0RGlyZWN0aW9uKGV4cGFuZGVkTWFzaylcbiAgY29uc3QgZ2V0ID0gbVN0ciA9PiBnZXRTdHJpbmdNYXNrKG1TdHIsIGRpcmVjdGlvbilcbiAgY29uc3QgeyBwcmVmaXgsIG1hc2tTdHI6IG1TdHIyIH0gPSBleHRyYWN0UHJlZml4KG1TdHIpXG4gIGNvbnN0IG1hc2sgPSBleHRyYWN0TWFzayhnZXQobVN0cjIpKVxuICBjb25zdCBfYXBwbHlNYXNrID0gbVN0ciA9PiBhcHBseU1hc2sobWFzaywgbVN0cilcbiAgY29uc3QgX2FwcGx5UHJlZml4ID0gbVN0ciA9PiBhcHBseVByZWZpeChwcmVmaXgsIG1TdHIpXG4gIHJldHVybiAobmV3VmFsdWUpID0+IHtcbiAgICAvLyBwcm9jZXNzYW1lbnRvXG4gICAgY29uc3QgdmFsdWVOb1ByZWZpeCA9IHJlbW92ZVByZWZpeChuZXdWYWx1ZSwgcHJlZml4KVxuICAgIGNvbnN0IHZhbHVlTm9QcmVmaXhOb01hc2sgPSByZW1vdmVNYXNrKHZhbHVlTm9QcmVmaXgpXG4gICAgY29uc3QgdmFsdWVOb1ByZWZpeE5vTWFza0kgPSBnZXQodmFsdWVOb1ByZWZpeE5vTWFzaylcbiAgICBjb25zdCB2YWx1ZU5vUHJlZml4V2l0aE1hc2tJID0gX2FwcGx5TWFzayh2YWx1ZU5vUHJlZml4Tm9NYXNrSSlcbiAgICBjb25zdCB2YWx1ZU5vUHJlZml4V2l0aE1hc2sgPSBnZXQodmFsdWVOb1ByZWZpeFdpdGhNYXNrSSlcbiAgICBjb25zdCB2YWx1ZVdpdGhQcmVmaXhBbmRNYXNrID0gX2FwcGx5UHJlZml4KHZhbHVlTm9QcmVmaXhXaXRoTWFzaylcbiAgICByZXR1cm4gdmFsdWVXaXRoUHJlZml4QW5kTWFza1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNYXNrQXBwbGljYXRvclxuIiwiaW1wb3J0IHsgcmVnRXhUb2tlbnMgfSBmcm9tICcuL2tleS1jaGFycydcblxuY29uc3QgcmVtb3ZlTWFzayA9ICh2YWx1ZVdpdGhNYXNrKSA9PiB7XG4gIHJldHVybiBBcnJheS5mcm9tKHZhbHVlV2l0aE1hc2spLmZpbHRlcihjaGFyID0+IChuZXcgUmVnRXhwKGBeJHtyZWdFeFRva2Vuc1snKiddfWApKS50ZXN0KGNoYXIpKS5qb2luKCcnKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVNYXNrXG4iLCJpbXBvcnQgeyBlc2NhcGVDaGFyc0ZuIH0gZnJvbSAnLi9rZXktY2hhcnMnXG5cbmNvbnN0IHJlbW92ZVZhbHVlUHJlZml4ID0gKHZhbHVlV2l0aFByZWZpeCwgcHJlZml4ID0gJycpID0+IHtcbiAgcmV0dXJuIChuZXcgUmVnRXhwKGBeJHtlc2NhcGVDaGFyc0ZuKHByZWZpeCl9YCkpLnRlc3QodmFsdWVXaXRoUHJlZml4KSBcbiAgICA/IHZhbHVlV2l0aFByZWZpeC5zbGljZShwcmVmaXgubGVuZ3RoLCB2YWx1ZVdpdGhQcmVmaXgubGVuZ3RoKSA6IHZhbHVlV2l0aFByZWZpeFxufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVWYWx1ZVByZWZpeFxuIiwiaW1wb3J0IG1ha2VNYXNrQXBwbGljYXRvciBmcm9tICcuL2ZsZXgtbWFzay1jb3JlL21ha2UtbWFzay1hcHBsaWNhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlTWFza0FwcGxpY2F0b3JcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==