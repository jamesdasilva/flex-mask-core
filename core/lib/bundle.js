module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/flex-mask-core/api/create-mask-applicator.js":
/*!**********************************************************!*\
  !*** ./src/flex-mask-core/api/create-mask-applicator.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _mask_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mask-compiler */ "./src/flex-mask-core/mask-compiler/index.js");
/* harmony import */ var _mask_runtime_mask_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mask-runtime/mask-runtime */ "./src/flex-mask-core/mask-runtime/mask-runtime.js");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middlewares */ "./src/flex-mask-core/middlewares/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var createMaskContext = function createMaskContext(maskStr) {
  return {
    stringMask: maskStr,
    beforeExec: [],
    afterExec: [],
    exec: null
  };
};

var makeApplicator = function makeApplicator(maskStr) {
  var context = createMaskContext(maskStr);
  var maskCompiler = (0,_mask_compiler__WEBPACK_IMPORTED_MODULE_0__.default)();
  maskCompiler.use(_middlewares__WEBPACK_IMPORTED_MODULE_1__.Quantifiers);
  maskCompiler.use(_middlewares__WEBPACK_IMPORTED_MODULE_1__.Direction);
  maskCompiler.use(_middlewares__WEBPACK_IMPORTED_MODULE_1__.Prefix);
  maskCompiler.use(_middlewares__WEBPACK_IMPORTED_MODULE_1__.Length);
  maskCompiler.compile(context);
  var maskRunTime = (0,_mask_runtime_mask_runtime__WEBPACK_IMPORTED_MODULE_2__.default)(context);

  var maskApplicator = function maskApplicator(newValue) {
    context.value = newValue;
    maskRunTime.exec(context);
    return _objectSpread({}, context);
  };

  maskApplicator.prototype.mask = context.mask;
  maskApplicator.prototype.direction = context.direction;
  maskApplicator.prototype.prefix = context.prefix;
  maskApplicator.prototype.maxLimit = context.maxLimit;
  maskApplicator.prototype.filter = context.filter;
  return maskApplicator;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeApplicator);

/***/ }),

/***/ "./src/flex-mask-core/helpers/utils.js":
/*!*********************************************!*\
  !*** ./src/flex-mask-core/helpers/utils.js ***!
  \*********************************************/
/*! namespace exports */
/*! export escapeChars [provided] [no usage info] [missing usage info prevents renaming] */
/*! export escapeCharsFn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export keyChars [provided] [no usage info] [missing usage info prevents renaming] */
/*! export keyCharsEnum [provided] [no usage info] [missing usage info prevents renaming] */
/*! export regExTokens [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyCharsEnum": () => /* binding */ keyCharsEnum,
/* harmony export */   "keyChars": () => /* binding */ keyChars,
/* harmony export */   "regExTokens": () => /* binding */ regExTokens,
/* harmony export */   "escapeChars": () => /* binding */ escapeChars,
/* harmony export */   "escapeCharsFn": () => /* binding */ escapeCharsFn
/* harmony export */ });
var keyCharsEnum = Object.freeze({
  ONLY_NUMBER: '9',
  ONLY_CHAR: 'A',
  CHAR_NUMBER: '*',
  CHAR_NUMBER_SPACE: '_'
});
var keyChars = Object.keys(keyCharsEnum).map(function (key) {
  return keyCharsEnum[key];
});
var regExTokens = Object.freeze({
  '9': '[0-9]',
  'A': '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]',
  '*': '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9]',
  '_': '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ 0-9]'
});
var escapeChars = Object.freeze({
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
});
var escapeCharsFn = function escapeCharsFn(chars) {
  return Array.from(chars).map(function (char) {
    return escapeChars[char] || char;
  }).join('');
};

/***/ }),

/***/ "./src/flex-mask-core/mask-compiler/filter/filter.js":
/*!***********************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/filter/filter.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _make_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./make-filter */ "./src/flex-mask-core/mask-compiler/filter/make-filter.js");
/* harmony import */ var _trucate_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trucate-value */ "./src/flex-mask-core/mask-compiler/filter/trucate-value.js");



var Filter = function Filter(context) {
  context.filter = (0,_make_filter__WEBPACK_IMPORTED_MODULE_0__.default)(context.tokens);
  context.afterExec.unshift(_trucate_value__WEBPACK_IMPORTED_MODULE_1__.default);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);

/***/ }),

/***/ "./src/flex-mask-core/mask-compiler/filter/index.js":
/*!**********************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/filter/index.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./src/flex-mask-core/mask-compiler/filter/filter.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_filter__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/flex-mask-core/mask-compiler/filter/make-filter.js":
/*!****************************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/filter/make-filter.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var makeFilter = function makeFilter(mask) {
  var filter = [];
  var accFilter = '';

  for (var i = 0; i < mask.length; i++) {
    if (mask[i].keyChar) {
      filter.push("^".concat(accFilter).concat(mask[i].regEx, "{0,").concat(mask[i].end - mask[i].start, "}$"));
      accFilter = "".concat(accFilter).concat(mask[i].regEx, "{").concat(mask[i].end - mask[i].start, "}");
    } else {
      accFilter = "".concat(accFilter).concat(mask[i].regEx);
    }
  }

  return new RegExp(filter.join('|'));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeFilter);

/***/ }),

/***/ "./src/flex-mask-core/mask-compiler/filter/trucate-value.js":
/*!******************************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/filter/trucate-value.js ***!
  \******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var trucateValue = function trucateValue(context) {
  var exceeded = context.value.length > context.maxLimit;
  var start = context.direction === 'left' ? context.value.length - context.maxLimit : 0;
  var end = context.direction === 'left' ? context.value.length : context.maxLimit;
  context.value = exceeded ? context.value.substring(start, end) : context.value;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trucateValue);

/***/ }),

/***/ "./src/flex-mask-core/mask-compiler/index.js":
/*!***************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/index.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _mask_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mask-compiler */ "./src/flex-mask-core/mask-compiler/mask-compiler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mask_compiler__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/flex-mask-core/mask-compiler/mask-compiler.js":
/*!***********************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/mask-compiler.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens */ "./src/flex-mask-core/mask-compiler/tokens/index.js");
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mask */ "./src/flex-mask-core/mask-compiler/mask/index.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./src/flex-mask-core/mask-compiler/filter/index.js");




var MaskCompiler = function MaskCompiler() {
  var stack = [];

  var use = function use() {
    stack.push.apply(stack, arguments);
  };

  var compile = function compile(context) {
    for (var i = 0; i < stack.length; i++) {
      stack[i](context);
    }

    (0,_tokens__WEBPACK_IMPORTED_MODULE_0__.default)(context);
    (0,_filter__WEBPACK_IMPORTED_MODULE_2__.default)(context);
    (0,_mask__WEBPACK_IMPORTED_MODULE_1__.default)(context);
  };

  return {
    use: use,
    compile: compile
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaskCompiler);

/***/ }),

/***/ "./src/flex-mask-core/mask-compiler/mask/apply-mask.js":
/*!*************************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/mask/apply-mask.js ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var applyMask = function applyMask(context) {
  if (context.direction === 'right') {
    var valueWithMask = context.value;

    for (var i = 0; i < context.mask.length; i++) {
      if (valueWithMask.length > context.mask[i].start) {
        var valueArr = Array.from(valueWithMask);
        valueArr.splice(context.mask[i].start, 0, context.mask[i].token);
        valueWithMask = valueArr.join('');
      }
    }

    context.value = valueWithMask;
  }

  if (context.direction === 'left') {
    var _valueWithMask = context.value;
    var maxLimit = context.maxLimit;

    for (var _i = context.mask.length - 1; _i >= 0; _i--) {
      var lastPosition = maxLimit - 1;
      var invertedPosition = lastPosition - context.mask[_i].start;

      if (_valueWithMask.length > invertedPosition) {
        var _valueArr = Array.from(_valueWithMask);

        var insertPos = _valueWithMask.length - invertedPosition;

        _valueArr.splice(insertPos, 0, context.mask[_i].token);

        _valueWithMask = _valueArr.join('');
      }
    }

    context.value = _valueWithMask;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyMask);

/***/ }),

/***/ "./src/flex-mask-core/mask-compiler/mask/extract-mask.js":
/*!***************************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/mask/extract-mask.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var extractMask = function extractMask(tokens) {
  return tokens.filter(function (token) {
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

/***/ "./src/flex-mask-core/mask-compiler/mask/index.js":
/*!********************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/mask/index.js ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mask */ "./src/flex-mask-core/mask-compiler/mask/mask.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mask__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/flex-mask-core/mask-compiler/mask/mask.js":
/*!*******************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/mask/mask.js ***!
  \*******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _remove_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-mask */ "./src/flex-mask-core/mask-compiler/mask/remove-mask.js");
/* harmony import */ var _apply_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apply-mask */ "./src/flex-mask-core/mask-compiler/mask/apply-mask.js");
/* harmony import */ var _extract_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extract-mask */ "./src/flex-mask-core/mask-compiler/mask/extract-mask.js");




var Mask = function Mask(context) {
  context.mask = (0,_extract_mask__WEBPACK_IMPORTED_MODULE_1__.default)(context.tokens);
  context.beforeExec.push(_remove_mask__WEBPACK_IMPORTED_MODULE_0__.default);
  context.exec = _apply_mask__WEBPACK_IMPORTED_MODULE_2__.default;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mask);

/***/ }),

/***/ "./src/flex-mask-core/mask-compiler/mask/remove-mask.js":
/*!**************************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/mask/remove-mask.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/flex-mask-core/helpers/utils.js");


var removeMask = function removeMask(context) {
  context.value = Array.from(context.value).filter(function (char) {
    return new RegExp("^".concat(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.regExTokens["*"])).test(char);
  }).join('');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeMask);

/***/ }),

/***/ "./src/flex-mask-core/mask-compiler/tokens/extract-tokens.js":
/*!*******************************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/tokens/extract-tokens.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/flex-mask-core/helpers/utils.js");


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
    if (!_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.keyChars.includes(arrayMask[i]) && i !== arrayMask.length) {
      if (!isToken) {
        token.end = i;
        token.keyChar = true;
        token.regEx = token.keyChar ? "".concat(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.regExTokens[token.token[0]]) : (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.escapeCharsFn)(token.token);
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
        token.regEx = token.keyChar ? "".concat(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.regExTokens[token.token[0]]) : (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.escapeCharsFn)(token.token);
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

/***/ "./src/flex-mask-core/mask-compiler/tokens/index.js":
/*!**********************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/tokens/index.js ***!
  \**********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tokens */ "./src/flex-mask-core/mask-compiler/tokens/tokens.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_tokens__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/flex-mask-core/mask-compiler/tokens/tokens.js":
/*!***********************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/tokens/tokens.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _extract_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extract-tokens */ "./src/flex-mask-core/mask-compiler/tokens/extract-tokens.js");


var Tokens = function Tokens(context) {
  context.tokens = (0,_extract_tokens__WEBPACK_IMPORTED_MODULE_0__.default)(context.stringMask);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tokens);

/***/ }),

/***/ "./src/flex-mask-core/mask-runtime/mask-runtime.js":
/*!*********************************************************!*\
  !*** ./src/flex-mask-core/mask-runtime/mask-runtime.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var MaskRuntime = function MaskRuntime(ctxt) {
  var context = ctxt;

  var execBefore = function execBefore() {
    for (var i = 0; i < context.beforeExec.length; i++) {
      context.beforeExec[i](context);
    }
  };

  var execAfter = function execAfter() {
    for (var i = 0; i < context.afterExec.length; i++) {
      context.afterExec[i](context);
    }
  };

  var addBeforeExec = function addBeforeExec(fn) {
    context.beforeExec.push(fn);
  };

  var addAfterExec = function addAfterExec(fn) {
    context.afterExec.push(fn);
  };

  var exec = function exec() {
    execBefore();
    context.exec(context);
    execAfter();
  };

  return {
    context: context,
    addBeforeExec: addBeforeExec,
    addAfterExec: addAfterExec,
    exec: exec
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaskRuntime);

/***/ }),

/***/ "./src/flex-mask-core/middlewares/direction/direction.js":
/*!***************************************************************!*\
  !*** ./src/flex-mask-core/middlewares/direction/direction.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _extract_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extract-direction */ "./src/flex-mask-core/middlewares/direction/extract-direction.js");


var Direction = function Direction(context) {
  var _extractDirection = (0,_extract_direction__WEBPACK_IMPORTED_MODULE_0__.default)(context.stringMask),
      direction = _extractDirection.direction,
      stringMask = _extractDirection.stringMask;

  context.direction = direction;
  context.stringMask = stringMask;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Direction);

/***/ }),

/***/ "./src/flex-mask-core/middlewares/direction/extract-direction.js":
/*!***********************************************************************!*\
  !*** ./src/flex-mask-core/middlewares/direction/extract-direction.js ***!
  \***********************************************************************/
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
  var _maskStr$match, _maskStr2, _maskStr$match2, _maskStr3;

  var direction = 'right';
  var _maskStr = maskStr;
  var maskStrWithRightDirection = (_maskStr$match = (_maskStr2 = _maskStr) === null || _maskStr2 === void 0 ? void 0 : _maskStr2.match(/\>\>.+/)) !== null && _maskStr$match !== void 0 ? _maskStr$match : [];

  if (maskStrWithRightDirection.length > 0) {
    direction = 'right';
    _maskStr = maskStrWithRightDirection[0].slice(2, maskStrWithRightDirection[0].length);
  }

  var maskStrWithLeftDirection = (_maskStr$match2 = (_maskStr3 = _maskStr) === null || _maskStr3 === void 0 ? void 0 : _maskStr3.match(/\<\<.+/)) !== null && _maskStr$match2 !== void 0 ? _maskStr$match2 : [];

  if (maskStrWithLeftDirection.length > 0) {
    direction = 'left';
    _maskStr = maskStrWithLeftDirection[0].slice(2, maskStrWithLeftDirection[0].length);
  }

  return {
    direction: direction,
    stringMask: _maskStr
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractDirection);

/***/ }),

/***/ "./src/flex-mask-core/middlewares/direction/index.js":
/*!***********************************************************!*\
  !*** ./src/flex-mask-core/middlewares/direction/index.js ***!
  \***********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./direction */ "./src/flex-mask-core/middlewares/direction/direction.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_direction__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/flex-mask-core/middlewares/index.js":
/*!*************************************************!*\
  !*** ./src/flex-mask-core/middlewares/index.js ***!
  \*************************************************/
/*! namespace exports */
/*! export Direction [provided] [no usage info] [missing usage info prevents renaming] -> ./src/flex-mask-core/middlewares/direction/index.js .default */
/*! export Length [provided] [no usage info] [missing usage info prevents renaming] -> ./src/flex-mask-core/middlewares/length/index.js .default */
/*! export Prefix [provided] [no usage info] [missing usage info prevents renaming] -> ./src/flex-mask-core/middlewares/prefix/index.js .default */
/*! export Quantifiers [provided] [no usage info] [missing usage info prevents renaming] -> ./src/flex-mask-core/middlewares/quantifiers/expand-quantifiers.js .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Direction": () => /* reexport safe */ _direction__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "Prefix": () => /* reexport safe */ _prefix__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "Quantifiers": () => /* reexport safe */ _quantifiers_expand_quantifiers__WEBPACK_IMPORTED_MODULE_3__.default,
/* harmony export */   "Length": () => /* reexport safe */ _length__WEBPACK_IMPORTED_MODULE_2__.default
/* harmony export */ });
/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./direction */ "./src/flex-mask-core/middlewares/direction/index.js");
/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefix */ "./src/flex-mask-core/middlewares/prefix/index.js");
/* harmony import */ var _length__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./length */ "./src/flex-mask-core/middlewares/length/index.js");
/* harmony import */ var _quantifiers_expand_quantifiers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quantifiers/expand-quantifiers */ "./src/flex-mask-core/middlewares/quantifiers/expand-quantifiers.js");






/***/ }),

/***/ "./src/flex-mask-core/middlewares/length/index.js":
/*!********************************************************!*\
  !*** ./src/flex-mask-core/middlewares/length/index.js ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./length */ "./src/flex-mask-core/middlewares/length/length.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_length__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/flex-mask-core/middlewares/length/length.js":
/*!*********************************************************!*\
  !*** ./src/flex-mask-core/middlewares/length/length.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var Length = function Length(context) {
  context.maxLimit = context.stringMask.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Length);

/***/ }),

/***/ "./src/flex-mask-core/middlewares/prefix/apply-prefix.js":
/*!***************************************************************!*\
  !*** ./src/flex-mask-core/middlewares/prefix/apply-prefix.js ***!
  \***************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var applyPrefix = function applyPrefix(context) {
  context.value = context.value ? "".concat(context.prefix).concat(context.value) : context.value;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyPrefix);

/***/ }),

/***/ "./src/flex-mask-core/middlewares/prefix/index.js":
/*!********************************************************!*\
  !*** ./src/flex-mask-core/middlewares/prefix/index.js ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefix */ "./src/flex-mask-core/middlewares/prefix/prefix.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_prefix__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/flex-mask-core/middlewares/prefix/prefix.js":
/*!*********************************************************!*\
  !*** ./src/flex-mask-core/middlewares/prefix/prefix.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _remove_prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-prefix */ "./src/flex-mask-core/middlewares/prefix/remove-prefix.js");
/* harmony import */ var _apply_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-prefix */ "./src/flex-mask-core/middlewares/prefix/apply-prefix.js");



var Prefix = function Prefix(context) {
  var _maskStr$match, _maskStr;

  var prefix = '';
  var maskStr = context.stringMask;
  var prefixWithCmd = (_maskStr$match = (_maskStr = maskStr) === null || _maskStr === void 0 ? void 0 : _maskStr.match(/''[^;]+;/)) !== null && _maskStr$match !== void 0 ? _maskStr$match : [];

  if (prefixWithCmd.length > 0) {
    prefix = prefixWithCmd[0].slice(2, prefixWithCmd[0].length - 1);
    maskStr = prefixWithCmd['input'].slice(prefixWithCmd['index'] + prefixWithCmd[0].length, prefixWithCmd['input'].length);
  }

  context.prefix = prefix;
  context.stringMask = maskStr;
  context.beforeExec.push(_remove_prefix__WEBPACK_IMPORTED_MODULE_0__.default);
  context.afterExec.push(_apply_prefix__WEBPACK_IMPORTED_MODULE_1__.default);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prefix);

/***/ }),

/***/ "./src/flex-mask-core/middlewares/prefix/remove-prefix.js":
/*!****************************************************************!*\
  !*** ./src/flex-mask-core/middlewares/prefix/remove-prefix.js ***!
  \****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/utils */ "./src/flex-mask-core/helpers/utils.js");


var removePrefix = function removePrefix(context) {
  context.value = new RegExp("^".concat((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.escapeCharsFn)(context.prefix))).test(context.value) ? context.value.slice(context.prefix.length, context.value.length) : context.value;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removePrefix);

/***/ }),

/***/ "./src/flex-mask-core/middlewares/quantifiers/expand-quantifiers.js":
/*!**************************************************************************!*\
  !*** ./src/flex-mask-core/middlewares/quantifiers/expand-quantifiers.js ***!
  \**************************************************************************/
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

var expandQuantifiers = function expandQuantifiers(context) {
  var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var runner = function runner(stringMask) {
    var length = getPureLength(stringMask);
    if (!length) return stringMask;
    var token = getPureToken(stringMask);
    if (!token) return stringMask;
    var expandedToken = makeExpandedToken(token, length);
    var start = getStart(stringMask);
    var del = getDel(stringMask);
    var newStringMask = insertExpandedTokenInStringMask(stringMask, expandedToken, start, del);
    return runner(newStringMask);
  };

  context.stringMask = runner(context.stringMask);
  next();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (expandQuantifiers);

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
/* harmony import */ var _flex_mask_core_api_create_mask_applicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flex-mask-core/api/create-mask-applicator */ "./src/flex-mask-core/api/create-mask-applicator.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_flex_mask_core_api_create_mask_applicator__WEBPACK_IMPORTED_MODULE_0__.default);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvYXBpL2NyZWF0ZS1tYXNrLWFwcGxpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL2hlbHBlcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWFzay1jb21waWxlci9maWx0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvZmlsdGVyL21ha2UtZmlsdGVyLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL2ZpbHRlci90cnVjYXRlLXZhbHVlLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL2luZGV4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2stY29tcGlsZXIuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvbWFzay9hcHBseS1tYXNrLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2svZXh0cmFjdC1tYXNrLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvbWFzay9tYXNrLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2svcmVtb3ZlLW1hc2suanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvdG9rZW5zL2V4dHJhY3QtdG9rZW5zLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL3Rva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWFzay1jb21waWxlci90b2tlbnMvdG9rZW5zLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLXJ1bnRpbWUvbWFzay1ydW50aW1lLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9kaXJlY3Rpb24vZGlyZWN0aW9uLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9kaXJlY3Rpb24vZXh0cmFjdC1kaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21pZGRsZXdhcmVzL2RpcmVjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21pZGRsZXdhcmVzL2xlbmd0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvbGVuZ3RoL2xlbmd0aC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvcHJlZml4L2FwcGx5LXByZWZpeC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvcHJlZml4L2luZGV4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9wcmVmaXgvcHJlZml4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9wcmVmaXgvcmVtb3ZlLXByZWZpeC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvcXVhbnRpZmllcnMvZXhwYW5kLXF1YW50aWZpZXJzLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mbGV4LW1hc2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mbGV4LW1hc2svd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImNyZWF0ZU1hc2tDb250ZXh0IiwibWFza1N0ciIsInN0cmluZ01hc2siLCJiZWZvcmVFeGVjIiwiYWZ0ZXJFeGVjIiwiZXhlYyIsIm1ha2VBcHBsaWNhdG9yIiwiY29udGV4dCIsIm1hc2tDb21waWxlciIsIk1hc2tDb21waWxlciIsInVzZSIsIlF1YW50aWZpZXJzIiwiRGlyZWN0aW9uIiwiUHJlZml4IiwiTGVuZ3RoIiwiY29tcGlsZSIsIm1hc2tSdW5UaW1lIiwiTWFza1J1bnRpbWUiLCJtYXNrQXBwbGljYXRvciIsIm5ld1ZhbHVlIiwidmFsdWUiLCJwcm90b3R5cGUiLCJtYXNrIiwiZGlyZWN0aW9uIiwicHJlZml4IiwibWF4TGltaXQiLCJmaWx0ZXIiLCJrZXlDaGFyc0VudW0iLCJPYmplY3QiLCJmcmVlemUiLCJPTkxZX05VTUJFUiIsIk9OTFlfQ0hBUiIsIkNIQVJfTlVNQkVSIiwiQ0hBUl9OVU1CRVJfU1BBQ0UiLCJrZXlDaGFycyIsImtleXMiLCJtYXAiLCJrZXkiLCJyZWdFeFRva2VucyIsImVzY2FwZUNoYXJzIiwiZXNjYXBlQ2hhcnNGbiIsImNoYXJzIiwiQXJyYXkiLCJmcm9tIiwiY2hhciIsImpvaW4iLCJGaWx0ZXIiLCJtYWtlRmlsdGVyIiwidG9rZW5zIiwidW5zaGlmdCIsInRydWNhdGVWYWx1ZSIsImFjY0ZpbHRlciIsImkiLCJsZW5ndGgiLCJrZXlDaGFyIiwicHVzaCIsInJlZ0V4IiwiZW5kIiwic3RhcnQiLCJSZWdFeHAiLCJleGNlZWRlZCIsInN1YnN0cmluZyIsInN0YWNrIiwiVG9rZW5zIiwiTWFzayIsImFwcGx5TWFzayIsInZhbHVlV2l0aE1hc2siLCJ2YWx1ZUFyciIsInNwbGljZSIsInRva2VuIiwibGFzdFBvc2l0aW9uIiwiaW52ZXJ0ZWRQb3NpdGlvbiIsImluc2VydFBvcyIsImV4dHJhY3RNYXNrIiwicmVtb3ZlTWFzayIsInRlc3QiLCJleHRyYWN0VG9rZW5zIiwiYXJyYXlNYXNrIiwiaXNUb2tlbiIsInByZXZDaGFyIiwiaXRlbSIsImN0eHQiLCJleGVjQmVmb3JlIiwiZXhlY0FmdGVyIiwiYWRkQmVmb3JlRXhlYyIsImZuIiwiYWRkQWZ0ZXJFeGVjIiwiZXh0cmFjdERpcmVjdGlvbiIsIl9tYXNrU3RyIiwibWFza1N0cldpdGhSaWdodERpcmVjdGlvbiIsIm1hdGNoIiwic2xpY2UiLCJtYXNrU3RyV2l0aExlZnREaXJlY3Rpb24iLCJhcHBseVByZWZpeCIsInByZWZpeFdpdGhDbWQiLCJyZW1vdmVQcmVmaXgiLCJsZW5ndGhXaXRoQ21kIiwidG9rZW5XaXRoQ21kIiwibWFrZUV4cGFuZGVkVG9rZW4iLCJleHBhbmRlZFRva2VuIiwiZ2V0TGVuZ3RoV2l0aENtZCIsImdldFB1cmVMZW5ndGgiLCJnZXRUb2tlbldpdGhDbWQiLCJnZXRQdXJlVG9rZW4iLCJnZXRTdGFydCIsImluZGV4IiwiZ2V0RGVsIiwiaW5zZXJ0RXhwYW5kZWRUb2tlbkluU3RyaW5nTWFzayIsImRlbCIsImV4cGFuZFF1YW50aWZpZXJzIiwibmV4dCIsInJ1bm5lciIsIm5ld1N0cmluZ01hc2siLCJjcmVhdGVNYXNrQXBwbGljYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLE9BQUQsRUFBYTtBQUNyQyxTQUFPO0FBQ0xDLGNBQVUsRUFBRUQsT0FEUDtBQUVMRSxjQUFVLEVBQUUsRUFGUDtBQUdMQyxhQUFTLEVBQUUsRUFITjtBQUlMQyxRQUFJLEVBQUU7QUFKRCxHQUFQO0FBTUQsQ0FQRDs7QUFTQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNMLE9BQUQsRUFBYTtBQUVsQyxNQUFNTSxPQUFPLEdBQUdQLGlCQUFpQixDQUFDQyxPQUFELENBQWpDO0FBRUEsTUFBTU8sWUFBWSxHQUFHQyx1REFBWSxFQUFqQztBQUVBRCxjQUFZLENBQUNFLEdBQWIsQ0FBaUJDLHFEQUFqQjtBQUNBSCxjQUFZLENBQUNFLEdBQWIsQ0FBaUJFLG1EQUFqQjtBQUNBSixjQUFZLENBQUNFLEdBQWIsQ0FBaUJHLGdEQUFqQjtBQUNBTCxjQUFZLENBQUNFLEdBQWIsQ0FBaUJJLGdEQUFqQjtBQUVBTixjQUFZLENBQUNPLE9BQWIsQ0FBcUJSLE9BQXJCO0FBRUEsTUFBTVMsV0FBVyxHQUFHQyxtRUFBVyxDQUFDVixPQUFELENBQS9COztBQUVBLE1BQU1XLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFjO0FBRW5DWixXQUFPLENBQUNhLEtBQVIsR0FBZ0JELFFBQWhCO0FBRUFILGVBQVcsQ0FBQ1gsSUFBWixDQUFpQkUsT0FBakI7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bUNrRCxHQUFuQyxDQUFyRDtBQUVBLFdBQU9HLE1BQU0sQ0FBQ0MsYUFBRCxDQUFiO0FBQ0QsR0FiRDs7QUFlQXpHLFNBQU8sQ0FBQ0wsVUFBUixHQUFxQjZHLE1BQU0sQ0FBQ3hHLE9BQU8sQ0FBQ0wsVUFBVCxDQUEzQjtBQUVBNEcsTUFBSTtBQUNMLENBbkJEOztBQXFCQSxpRUFBZUQsaUJBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUVBLGlFQUFlSSwrRUFBZixFOzs7Ozs7VUNGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hc2tDb21waWxlciBmcm9tICcuLi9tYXNrLWNvbXBpbGVyJ1xuaW1wb3J0IE1hc2tSdW50aW1lIGZyb20gJy4uL21hc2stcnVudGltZS9tYXNrLXJ1bnRpbWUnXG5pbXBvcnQgeyBRdWFudGlmaWVycywgRGlyZWN0aW9uLCBQcmVmaXgsIExlbmd0aCB9IGZyb20gJy4uL21pZGRsZXdhcmVzJ1xuXG5jb25zdCBjcmVhdGVNYXNrQ29udGV4dCA9IChtYXNrU3RyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RyaW5nTWFzazogbWFza1N0cixcbiAgICBiZWZvcmVFeGVjOiBbXSxcbiAgICBhZnRlckV4ZWM6IFtdLFxuICAgIGV4ZWM6IG51bGxcbiAgfVxufVxuXG5jb25zdCBtYWtlQXBwbGljYXRvciA9IChtYXNrU3RyKSA9PiB7XG5cbiAgY29uc3QgY29udGV4dCA9IGNyZWF0ZU1hc2tDb250ZXh0KG1hc2tTdHIpXG5cbiAgY29uc3QgbWFza0NvbXBpbGVyID0gTWFza0NvbXBpbGVyKClcblxuICBtYXNrQ29tcGlsZXIudXNlKFF1YW50aWZpZXJzKVxuICBtYXNrQ29tcGlsZXIudXNlKERpcmVjdGlvbilcbiAgbWFza0NvbXBpbGVyLnVzZShQcmVmaXgpXG4gIG1hc2tDb21waWxlci51c2UoTGVuZ3RoKVxuICBcbiAgbWFza0NvbXBpbGVyLmNvbXBpbGUoY29udGV4dClcblxuICBjb25zdCBtYXNrUnVuVGltZSA9IE1hc2tSdW50aW1lKGNvbnRleHQpXG5cbiAgY29uc3QgbWFza0FwcGxpY2F0b3IgPSAobmV3VmFsdWUpID0+IHtcbiAgICBcbiAgICBjb250ZXh0LnZhbHVlID0gbmV3VmFsdWVcblxuICAgIG1hc2tSdW5UaW1lLmV4ZWMoY29udGV4dClcblxuICAgIHJldHVybiB7IC4uLmNvbnRleHQgfVxuICB9XG5cbiAgbWFza0FwcGxpY2F0b3IucHJvdG90eXBlLm1hc2sgPSBjb250ZXh0Lm1hc2tcbiAgbWFza0FwcGxpY2F0b3IucHJvdG90eXBlLmRpcmVjdGlvbiA9IGNvbnRleHQuZGlyZWN0aW9uXG4gIG1hc2tBcHBsaWNhdG9yLnByb3RvdHlwZS5wcmVmaXggPSBjb250ZXh0LnByZWZpeFxuICBtYXNrQXBwbGljYXRvci5wcm90b3R5cGUubWF4TGltaXQgPSBjb250ZXh0Lm1heExpbWl0XG4gIG1hc2tBcHBsaWNhdG9yLnByb3RvdHlwZS5maWx0ZXIgPSBjb250ZXh0LmZpbHRlclxuICBcbiAgcmV0dXJuIG1hc2tBcHBsaWNhdG9yXG59IFxuXG5leHBvcnQgZGVmYXVsdCBtYWtlQXBwbGljYXRvclxuIiwiZXhwb3J0IGNvbnN0IGtleUNoYXJzRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICBPTkxZX05VTUJFUjogJzknLFxuICBPTkxZX0NIQVI6ICdBJyxcbiAgQ0hBUl9OVU1CRVI6ICcqJyxcbiAgQ0hBUl9OVU1CRVJfU1BBQ0U6ICdfJ1xufSlcblxuZXhwb3J0IGNvbnN0IGtleUNoYXJzID0gT2JqZWN0LmtleXMoa2V5Q2hhcnNFbnVtKS5tYXAoa2V5ID0+IGtleUNoYXJzRW51bVtrZXldKVxuXG5leHBvcnQgY29uc3QgcmVnRXhUb2tlbnMgPSBPYmplY3QuZnJlZXplKHtcbiAgJzknOiAnWzAtOV0nLCBcbiAgJ0EnOiAnW0EtWmEtesOhw6DDosOjw6nDqMOqw63Dr8Ozw7TDtcO2w7rDp8Oxw4HDgMOCw4PDicOIw43Dj8OTw5TDlcOWw5rDh8ORXScsIFxuICAnKic6ICdbQS1aYS16w6HDoMOiw6PDqcOow6rDrcOvw7PDtMO1w7bDusOnw7HDgcOAw4LDg8OJw4jDjcOPw5PDlMOVw5bDmsOHw5EwLTldJyxcbiAgJ18nOiAnW0EtWmEtesOhw6DDosOjw6nDqMOqw63Dr8Ozw7TDtcO2w7rDp8Oxw4HDgMOCw4PDicOIw43Dj8OTw5TDlcOWw5rDh8ORIDAtOV0nLFxufSlcblxuZXhwb3J0IGNvbnN0IGVzY2FwZUNoYXJzID0gT2JqZWN0LmZyZWV6ZSh7XG4gICcvJzogJ1xcLycsXG4gICcuJzogJ1xcXFwuJyxcbiAgJy0nOiAnXFxcXC0nLFxuICAnKCc6ICdcXFxcKCcsXG4gICcpJzogJ1xcXFwpJyxcbiAgJyonOiAnXFxcXConLFxuICAnKyc6ICdcXFxcKycsXG4gICdeJzogJ1xcXFxeJyxcbiAgJyQnOiAnXFxcXCQnLFxuICAnWyc6ICdcXFxcWycsXG4gICddJzogJ1xcXFxdJyxcbiAgJ3snOiAnXFxcXHsnLFxuICAnfSc6ICdcXFxcfScsXG59KVxuXG5leHBvcnQgY29uc3QgZXNjYXBlQ2hhcnNGbiA9IChjaGFycykgPT4ge1xuICByZXR1cm4gQXJyYXkuZnJvbShjaGFycykubWFwKGNoYXIgPT4gZXNjYXBlQ2hhcnNbY2hhcl0gfHwgY2hhcikuam9pbignJylcbn1cbiAiLCJpbXBvcnQgbWFrZUZpbHRlciBmcm9tICcuL21ha2UtZmlsdGVyJ1xuaW1wb3J0IHRydWNhdGVWYWx1ZSBmcm9tICcuL3RydWNhdGUtdmFsdWUnXG5cbmNvbnN0IEZpbHRlciA9IGNvbnRleHQgPT4ge1xuICBcbiAgY29udGV4dC5maWx0ZXIgPSBtYWtlRmlsdGVyKGNvbnRleHQudG9rZW5zKVxuXG4gIGNvbnRleHQuYWZ0ZXJFeGVjLnVuc2hpZnQodHJ1Y2F0ZVZhbHVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcbiIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclxuIiwiY29uc3QgbWFrZUZpbHRlciA9IChtYXNrKSA9PiB7XG4gIGxldCBmaWx0ZXIgPSBbXVxuICBsZXQgYWNjRmlsdGVyID0gJydcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcbiAgICBpZihtYXNrW2ldLmtleUNoYXIpIHtcbiAgICAgIGZpbHRlci5wdXNoKGBeJHthY2NGaWx0ZXJ9JHttYXNrW2ldLnJlZ0V4fXswLCR7bWFza1tpXS5lbmQgLSBtYXNrW2ldLnN0YXJ0fX0kYClcbiAgICAgIGFjY0ZpbHRlciA9IGAke2FjY0ZpbHRlcn0ke21hc2tbaV0ucmVnRXh9eyR7bWFza1tpXS5lbmQgLSBtYXNrW2ldLnN0YXJ0fX1gXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY0ZpbHRlciA9IGAke2FjY0ZpbHRlcn0ke21hc2tbaV0ucmVnRXh9YFxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFJlZ0V4cChmaWx0ZXIuam9pbignfCcpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlRmlsdGVyXG4iLCJjb25zdCB0cnVjYXRlVmFsdWUgPSBjb250ZXh0ID0+IHtcbiAgY29uc3QgZXhjZWVkZWQgPSBjb250ZXh0LnZhbHVlLmxlbmd0aCA+IGNvbnRleHQubWF4TGltaXRcbiAgY29uc3Qgc3RhcnQgPSBjb250ZXh0LmRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gY29udGV4dC52YWx1ZS5sZW5ndGggLSBjb250ZXh0Lm1heExpbWl0IDogMFxuICBjb25zdCBlbmQgPSBjb250ZXh0LmRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gY29udGV4dC52YWx1ZS5sZW5ndGggOiBjb250ZXh0Lm1heExpbWl0XG4gIGNvbnRleHQudmFsdWUgPSBleGNlZWRlZCA/IGNvbnRleHQudmFsdWUuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpIDogY29udGV4dC52YWx1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cnVjYXRlVmFsdWVcbiIsImltcG9ydCBNYXNrQ29tcGlsZXIgZnJvbSAnLi9tYXNrLWNvbXBpbGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBNYXNrQ29tcGlsZXIiLCJpbXBvcnQgVG9rZW5zIGZyb20gJy4vdG9rZW5zJ1xuaW1wb3J0IE1hc2sgZnJvbSAnLi9tYXNrJ1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2ZpbHRlcidcblxuY29uc3QgTWFza0NvbXBpbGVyID0gKCkgPT4ge1xuICBjb25zdCBzdGFjayA9IFtdXG5cbiAgY29uc3QgdXNlID0gKC4uLm1pZGRsZXdhcmVzKSA9PiB7XG4gICAgc3RhY2sucHVzaCguLi5taWRkbGV3YXJlcylcbiAgfVxuXG4gIGNvbnN0IGNvbXBpbGUgPSAoY29udGV4dCkgPT4ge1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdGFja1tpXShjb250ZXh0KVxuICAgIH1cblxuICAgIFRva2Vucyhjb250ZXh0KVxuICAgIEZpbHRlcihjb250ZXh0KVxuICAgIE1hc2soY29udGV4dClcbiAgfVxuXG4gIHJldHVybiB7IHVzZSwgY29tcGlsZSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tDb21waWxlclxuIiwiY29uc3QgYXBwbHlNYXNrID0gKGNvbnRleHQpID0+IHtcbiAgaWYoY29udGV4dC5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICBsZXQgdmFsdWVXaXRoTWFzayA9IGNvbnRleHQudmFsdWUgXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29udGV4dC5tYXNrLmxlbmd0aDsgaSsrKSB7XG4gIFxuICAgICAgaWYodmFsdWVXaXRoTWFzay5sZW5ndGggPiBjb250ZXh0Lm1hc2tbaV0uc3RhcnQpIHtcbiAgXG4gICAgICAgIGNvbnN0IHZhbHVlQXJyID0gQXJyYXkuZnJvbSh2YWx1ZVdpdGhNYXNrKVxuICBcbiAgICAgICAgdmFsdWVBcnIuc3BsaWNlKGNvbnRleHQubWFza1tpXS5zdGFydCwgMCwgY29udGV4dC5tYXNrW2ldLnRva2VuKVxuICAgICAgICBcbiAgICAgICAgdmFsdWVXaXRoTWFzayA9IHZhbHVlQXJyLmpvaW4oJycpXG4gICAgICB9XG4gICAgfVxuICBcbiAgICBjb250ZXh0LnZhbHVlID0gdmFsdWVXaXRoTWFza1xuICB9XG5cbiAgaWYoY29udGV4dC5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgIGxldCB2YWx1ZVdpdGhNYXNrID0gY29udGV4dC52YWx1ZSBcbiAgICBjb25zdCB7IG1heExpbWl0IH0gPSBjb250ZXh0XG5cbiAgICBmb3IobGV0IGkgPSBjb250ZXh0Lm1hc2subGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGxhc3RQb3NpdGlvbiA9IG1heExpbWl0IC0gMVxuICAgICAgY29uc3QgaW52ZXJ0ZWRQb3NpdGlvbiA9IGxhc3RQb3NpdGlvbiAtIGNvbnRleHQubWFza1tpXS5zdGFydFxuXG4gICAgICBpZih2YWx1ZVdpdGhNYXNrLmxlbmd0aCA+IGludmVydGVkUG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgdmFsdWVBcnIgPSBBcnJheS5mcm9tKHZhbHVlV2l0aE1hc2spXG4gICAgICAgIGNvbnN0IGluc2VydFBvcyA9IHZhbHVlV2l0aE1hc2subGVuZ3RoIC0gaW52ZXJ0ZWRQb3NpdGlvblxuICAgICAgICB2YWx1ZUFyci5zcGxpY2UoaW5zZXJ0UG9zLCAwLCBjb250ZXh0Lm1hc2tbaV0udG9rZW4pXG4gICAgICAgIFxuICAgICAgICB2YWx1ZVdpdGhNYXNrID0gdmFsdWVBcnIuam9pbignJylcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGNvbnRleHQudmFsdWUgPSB2YWx1ZVdpdGhNYXNrXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwbHlNYXNrXG4iLCJjb25zdCBleHRyYWN0TWFzayA9IHRva2VucyA9PiB7XG4gIHJldHVybiB0b2tlbnMuZmlsdGVyKHRva2VuID0+ICF0b2tlbi5rZXlDaGFyKS5tYXAodG9rZW4gPT4gKHtcbiAgICB0b2tlbjogdG9rZW4udG9rZW4sXG4gICAgc3RhcnQ6IHRva2VuLnN0YXJ0LFxuICB9KSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdE1hc2tcbiIsImltcG9ydCBNYXNrIGZyb20gJy4vbWFzaydcblxuZXhwb3J0IGRlZmF1bHQgTWFzayIsImltcG9ydCByZW1vdmVNYXNrIGZyb20gJy4vcmVtb3ZlLW1hc2snXG5pbXBvcnQgYXBwbHlNYXNrIGZyb20gJy4vYXBwbHktbWFzaydcbmltcG9ydCBleHRyYWN0TWFzayBmcm9tICcuL2V4dHJhY3QtbWFzaydcblxuY29uc3QgTWFzayA9IChjb250ZXh0KSA9PiB7XG4gIGNvbnRleHQubWFzayA9IGV4dHJhY3RNYXNrKGNvbnRleHQudG9rZW5zKVxuXG4gIGNvbnRleHQuYmVmb3JlRXhlYy5wdXNoKHJlbW92ZU1hc2spXG5cbiAgY29udGV4dC5leGVjID0gYXBwbHlNYXNrXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tcbiIsImltcG9ydCB7IHJlZ0V4VG9rZW5zIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcblxuY29uc3QgcmVtb3ZlTWFzayA9IChjb250ZXh0KSA9PiB7XG4gIGNvbnRleHQudmFsdWUgPSBBcnJheS5mcm9tKGNvbnRleHQudmFsdWUpLmZpbHRlcihjaGFyID0+IChuZXcgUmVnRXhwKGBeJHtyZWdFeFRva2Vuc1snKiddfWApKS50ZXN0KGNoYXIpKS5qb2luKCcnKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVNYXNrXG4iLCJpbXBvcnQgeyBrZXlDaGFycywgcmVnRXhUb2tlbnMsIGVzY2FwZUNoYXJzRm4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuXG5jb25zdCBleHRyYWN0VG9rZW5zID0gKHN0cmluZ01hc2spID0+IHtcblx0Y29uc3QgYXJyYXlNYXNrID0gQXJyYXkuZnJvbShzdHJpbmdNYXNrKVxuXHRsZXQgdG9rZW4gPSB7XG4gICAgdG9rZW46ICcnLFxuICAgIHN0YXJ0OiAwXG5cdH1cblx0Y29uc3QgdG9rZW5zID0gW11cbiAgbGV0IGlzVG9rZW4gPSBmYWxzZVxuICBsZXQgcHJldkNoYXIgPSAnJ1xuXHRmb3IobGV0IGkgPSAwOyBpIDw9IGFycmF5TWFzay5sZW5ndGg7IGkrKykge1xuXHRcdGlmKCFrZXlDaGFycy5pbmNsdWRlcyhhcnJheU1hc2tbaV0pICYmIGkgIT09IGFycmF5TWFzay5sZW5ndGgpIHtcblx0XHRcdGlmKCFpc1Rva2VuKSB7XG4gICAgICAgIHRva2VuLmVuZCA9IGlcbiAgICAgICAgdG9rZW4ua2V5Q2hhciA9IHRydWVcbiAgICAgICAgdG9rZW4ucmVnRXggPSB0b2tlbi5rZXlDaGFyID8gYCR7cmVnRXhUb2tlbnNbdG9rZW4udG9rZW5bMF1dfWAgOiBlc2NhcGVDaGFyc0ZuKHRva2VuLnRva2VuKVxuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbilcbiAgICAgICAgdG9rZW4gPSB7XG4gICAgICAgICAgdG9rZW46ICcnLFxuICAgICAgICAgIHN0YXJ0OiBpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlzVG9rZW4gPSB0cnVlXG4gICAgICB0b2tlbi50b2tlbiArPSBhcnJheU1hc2tbaV1cblx0XHR9IGVsc2Uge1xuICAgICAgaWYoaXNUb2tlbiB8fCAoaSA+IDAgJiYgYXJyYXlNYXNrW2ldICE9PSBwcmV2Q2hhcikpIHtcbiAgICAgICAgdG9rZW4uZW5kID0gaVxuICAgICAgICB0b2tlbi5rZXlDaGFyID0gaXNUb2tlbiA/IGZhbHNlIDogdHJ1ZVxuICAgICAgICB0b2tlbi5yZWdFeCA9IHRva2VuLmtleUNoYXIgPyBgJHtyZWdFeFRva2Vuc1t0b2tlbi50b2tlblswXV19YCA6IGVzY2FwZUNoYXJzRm4odG9rZW4udG9rZW4pXG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKVxuICAgICAgICB0b2tlbiA9IHtcbiAgICAgICAgICB0b2tlbjogJycsXG4gICAgICAgICAgc3RhcnQ6IGlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXNUb2tlbiA9IGZhbHNlXG4gICAgICB0b2tlbi50b2tlbiArPSBhcnJheU1hc2tbaV1cbiAgICB9XG4gICAgcHJldkNoYXIgPSBhcnJheU1hc2tbaV1cbiAgfVxuXHRyZXR1cm4gdG9rZW5zLmZpbHRlcihpdGVtID0+IGl0ZW0udG9rZW4gIT09ICcnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBleHRyYWN0VG9rZW5zXG4iLCJpbXBvcnQgVG9rZW5zIGZyb20gJy4vdG9rZW5zJ1xuXG5leHBvcnQgZGVmYXVsdCBUb2tlbnNcbiIsImltcG9ydCBleHRyYWN0VG9rZW5zIGZyb20gJy4vZXh0cmFjdC10b2tlbnMnXG5cbmNvbnN0IFRva2VucyA9IGNvbnRleHQgPT4ge1xuICBjb250ZXh0LnRva2VucyA9IGV4dHJhY3RUb2tlbnMoY29udGV4dC5zdHJpbmdNYXNrKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2tlbnMiLCJjb25zdCBNYXNrUnVudGltZSA9IChjdHh0KSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSBjdHh0XG5cbiAgY29uc3QgZXhlY0JlZm9yZSA9ICgpID0+IHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29udGV4dC5iZWZvcmVFeGVjLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb250ZXh0LmJlZm9yZUV4ZWNbaV0oY29udGV4dClcbiAgICB9XG4gIH1cblxuICBjb25zdCBleGVjQWZ0ZXIgPSAoKSA9PiB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbnRleHQuYWZ0ZXJFeGVjLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb250ZXh0LmFmdGVyRXhlY1tpXShjb250ZXh0KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFkZEJlZm9yZUV4ZWMgPSAoZm4pID0+IHtcbiAgICBjb250ZXh0LmJlZm9yZUV4ZWMucHVzaChmbilcbiAgfVxuXG4gIGNvbnN0IGFkZEFmdGVyRXhlYyA9IChmbikgPT4ge1xuICAgIGNvbnRleHQuYWZ0ZXJFeGVjLnB1c2goZm4pXG4gIH1cblxuICBjb25zdCBleGVjID0gKCkgPT4ge1xuICAgIGV4ZWNCZWZvcmUoKVxuICAgIGNvbnRleHQuZXhlYyhjb250ZXh0KVxuICAgIGV4ZWNBZnRlcigpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbnRleHQsXG4gICAgYWRkQmVmb3JlRXhlYyxcbiAgICBhZGRBZnRlckV4ZWMsXG4gICAgZXhlYyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXNrUnVudGltZVxuIiwiaW1wb3J0IGV4dHJhY3REaXJlY3Rpb24gZnJvbSAnLi9leHRyYWN0LWRpcmVjdGlvbidcblxuY29uc3QgRGlyZWN0aW9uID0gKGNvbnRleHQpID0+IHtcblxuICBjb25zdCB7IGRpcmVjdGlvbiwgc3RyaW5nTWFzayB9ID0gZXh0cmFjdERpcmVjdGlvbihjb250ZXh0LnN0cmluZ01hc2spXG4gIFxuICBjb250ZXh0LmRpcmVjdGlvbiA9IGRpcmVjdGlvblxuICBjb250ZXh0LnN0cmluZ01hc2sgPSBzdHJpbmdNYXNrXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdGlvblxuIiwiY29uc3QgZXh0cmFjdERpcmVjdGlvbiA9IChtYXNrU3RyKSA9PiB7XG4gIGxldCBkaXJlY3Rpb24gPSAncmlnaHQnXG4gIGxldCBfbWFza1N0ciA9IG1hc2tTdHJcblxuICBjb25zdCBtYXNrU3RyV2l0aFJpZ2h0RGlyZWN0aW9uID0gX21hc2tTdHI/Lm1hdGNoKC9cXD5cXD4uKy8pID8/IFtdXG4gIGlmIChtYXNrU3RyV2l0aFJpZ2h0RGlyZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICBkaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgX21hc2tTdHIgPSBtYXNrU3RyV2l0aFJpZ2h0RGlyZWN0aW9uWzBdLnNsaWNlKDIsIG1hc2tTdHJXaXRoUmlnaHREaXJlY3Rpb25bMF0ubGVuZ3RoKVxuICB9XG5cbiAgY29uc3QgbWFza1N0cldpdGhMZWZ0RGlyZWN0aW9uID0gX21hc2tTdHI/Lm1hdGNoKC9cXDxcXDwuKy8pID8/IFtdXG4gIGlmIChtYXNrU3RyV2l0aExlZnREaXJlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgIGRpcmVjdGlvbiA9ICdsZWZ0J1xuICAgIF9tYXNrU3RyID0gbWFza1N0cldpdGhMZWZ0RGlyZWN0aW9uWzBdLnNsaWNlKDIsIG1hc2tTdHJXaXRoTGVmdERpcmVjdGlvblswXS5sZW5ndGgpXG4gIH1cbiAgXG4gIHJldHVybiB7XG4gICAgZGlyZWN0aW9uLFxuICAgIHN0cmluZ01hc2s6IF9tYXNrU3RyXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdERpcmVjdGlvblxuIiwiaW1wb3J0IERpcmVjdGlvbiBmcm9tICcuL2RpcmVjdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uXG4iLCJpbXBvcnQgRGlyZWN0aW9uIGZyb20gJy4vZGlyZWN0aW9uJ1xuaW1wb3J0IFByZWZpeCBmcm9tICcuL3ByZWZpeCdcbmltcG9ydCBMZW5ndGggZnJvbSAnLi9sZW5ndGgnXG5pbXBvcnQgUXVhbnRpZmllcnMgZnJvbSAnLi9xdWFudGlmaWVycy9leHBhbmQtcXVhbnRpZmllcnMnXG5cbmV4cG9ydCB7XG4gIERpcmVjdGlvbixcbiAgUHJlZml4LFxuICBRdWFudGlmaWVycyxcbiAgTGVuZ3RoXG59ICIsImltcG9ydCBMZW5ndGggZnJvbSAnLi9sZW5ndGgnXG5cbmV4cG9ydCBkZWZhdWx0IExlbmd0aFxuIiwiY29uc3QgTGVuZ3RoID0gY29udGV4dCA9PiB7XG4gIGNvbnRleHQubWF4TGltaXQgPSBjb250ZXh0LnN0cmluZ01hc2subGVuZ3RoXG59XG5cbmV4cG9ydCBkZWZhdWx0IExlbmd0aCIsImNvbnN0IGFwcGx5UHJlZml4ID0gKGNvbnRleHQpID0+IHtcbiAgY29udGV4dC52YWx1ZSA9IGNvbnRleHQudmFsdWUgPyBgJHtjb250ZXh0LnByZWZpeH0ke2NvbnRleHQudmFsdWV9YCA6IGNvbnRleHQudmFsdWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwbHlQcmVmaXhcbiAgIiwiaW1wb3J0IFByZWZpeCBmcm9tICcuL3ByZWZpeCdcblxuZXhwb3J0IGRlZmF1bHQgUHJlZml4XG4iLCJpbXBvcnQgcmVtb3ZlUHJlZml4IGZyb20gJy4vcmVtb3ZlLXByZWZpeCdcbmltcG9ydCBhcHBseVByZWZpeCBmcm9tICcuL2FwcGx5LXByZWZpeCdcblxuY29uc3QgUHJlZml4ID0gY29udGV4dCA9PiB7XG4gIFxuICBsZXQgcHJlZml4ID0gJydcbiAgbGV0IG1hc2tTdHIgPSBjb250ZXh0LnN0cmluZ01hc2tcblxuICBjb25zdCBwcmVmaXhXaXRoQ21kID0gbWFza1N0cj8ubWF0Y2goLycnW147XSs7LykgPz8gW11cblxuICBpZiAocHJlZml4V2l0aENtZC5sZW5ndGggPiAwKSB7XG5cbiAgICBwcmVmaXggPSBwcmVmaXhXaXRoQ21kWzBdLnNsaWNlKDIsIHByZWZpeFdpdGhDbWRbMF0ubGVuZ3RoIC0gMSlcbiAgICBtYXNrU3RyID0gcHJlZml4V2l0aENtZFsnaW5wdXQnXS5zbGljZShwcmVmaXhXaXRoQ21kWydpbmRleCddICsgcHJlZml4V2l0aENtZFswXS5sZW5ndGgsIHByZWZpeFdpdGhDbWRbJ2lucHV0J10ubGVuZ3RoKVxuICB9XG5cbiAgY29udGV4dC5wcmVmaXggPSBwcmVmaXhcbiAgY29udGV4dC5zdHJpbmdNYXNrID0gbWFza1N0clxuICBjb250ZXh0LmJlZm9yZUV4ZWMucHVzaChyZW1vdmVQcmVmaXgpXG4gIGNvbnRleHQuYWZ0ZXJFeGVjLnB1c2goYXBwbHlQcmVmaXgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZWZpeFxuIiwiaW1wb3J0IHsgZXNjYXBlQ2hhcnNGbiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5cbmNvbnN0IHJlbW92ZVByZWZpeCA9IChjb250ZXh0KSA9PiB7XG4gIGNvbnRleHQudmFsdWUgPSAobmV3IFJlZ0V4cChgXiR7ZXNjYXBlQ2hhcnNGbihjb250ZXh0LnByZWZpeCl9YCkpLnRlc3QoY29udGV4dC52YWx1ZSkgXG4gICAgPyBjb250ZXh0LnZhbHVlLnNsaWNlKGNvbnRleHQucHJlZml4Lmxlbmd0aCwgY29udGV4dC52YWx1ZS5sZW5ndGgpIDogY29udGV4dC52YWx1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVQcmVmaXhcbiIsImNvbnN0IGxlbmd0aFdpdGhDbWQgPSB7fVxuY29uc3QgdG9rZW5XaXRoQ21kID0ge31cblxuY29uc3QgbWFrZUV4cGFuZGVkVG9rZW4gPSAoY2hhciwgbGVuZ3RoKSA9PiB7XG4gIGNvbnN0IGV4cGFuZGVkVG9rZW4gPSBbXVxuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBleHBhbmRlZFRva2VuLnB1c2goY2hhcilcbiAgfVxuICByZXR1cm4gZXhwYW5kZWRUb2tlblxufVxuXG5jb25zdCBnZXRMZW5ndGhXaXRoQ21kID0gbWFza1N0ciA9PiBtYXNrU3RyPy5tYXRjaCgvXFxeXFxkKy8pID8/IFtdXG5cbmNvbnN0IGdldFB1cmVMZW5ndGggPSBzdHJpbmdNYXNrID0+IHtcbiAgaWYoIWxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza10pXG4gICAgbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXSA9IGdldExlbmd0aFdpdGhDbWQoc3RyaW5nTWFzaylcbiAgXG4gIGlmIChsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICByZXR1cm4gbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXVswXS5zbGljZSgxLCBsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdWzBdLmxlbmd0aCkgXG59XG5cbmNvbnN0IGdldFRva2VuV2l0aENtZCA9IG1hc2tTdHIgPT4gbWFza1N0cj8ubWF0Y2goL1xcPlxcZCs7fFxcPlxcdys7fFxcPi4rOy8pID8/IFtdXG5cbmNvbnN0IGdldFB1cmVUb2tlbiA9IChzdHJpbmdNYXNrKSA9PiB7XG4gIHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXSA9IGdldFRva2VuV2l0aENtZChzdHJpbmdNYXNrKVxuICBpZiAodG9rZW5XaXRoQ21kW3N0cmluZ01hc2tdLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICByZXR1cm4gdG9rZW5XaXRoQ21kW3N0cmluZ01hc2tdWzBdLnNsaWNlKDEsIHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXVswXS5sZW5ndGggLSAxKVxufVxuXG5jb25zdCBnZXRTdGFydCA9IChzdHJpbmdNYXNrKSA9PiB7XG4gIGlmKCFsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdKVxuICAgIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza10gPSBnZXRMZW5ndGhXaXRoQ21kKHN0cmluZ01hc2spXG5cbiAgaWYgKGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza10ubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG4gIHJldHVybiBsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdLmluZGV4XG59XG5cbmNvbnN0IGdldERlbCA9IChzdHJpbmdNYXNrKSA9PiB7XG4gIGlmKCFsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdKVxuICAgIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza10gPSBnZXRMZW5ndGhXaXRoQ21kKHN0cmluZ01hc2spXG5cbiAgaWYgKGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza10ubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuXG4gIHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXSA9IGdldFRva2VuV2l0aENtZChzdHJpbmdNYXNrKVxuICBpZiAodG9rZW5XaXRoQ21kW3N0cmluZ01hc2tdLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICByZXR1cm4gbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXVswXS5sZW5ndGggKyB0b2tlbldpdGhDbWRbc3RyaW5nTWFza11bMF0ubGVuZ3RoXG59XG5cbmNvbnN0IGluc2VydEV4cGFuZGVkVG9rZW5JblN0cmluZ01hc2sgPSAoc3RyaW5nTWFzaywgZXhwYW5kZWRUb2tlbiwgc3RhcnQsIGRlbCkgPT4ge1xuICBjb25zdCBhcnJheU1hc2sgPSBBcnJheS5mcm9tKHN0cmluZ01hc2spXG4gIGFycmF5TWFzay5zcGxpY2Uoc3RhcnQsIGRlbCwgLi4uZXhwYW5kZWRUb2tlbilcbiAgcmV0dXJuIGFycmF5TWFzay5qb2luKCcnKVxufVxuXG5jb25zdCBleHBhbmRRdWFudGlmaWVycyA9IChjb250ZXh0LCBuZXh0ID0gKCkgPT4ge30pID0+IHtcbiAgY29uc3QgcnVubmVyID0gKHN0cmluZ01hc2spID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBnZXRQdXJlTGVuZ3RoKHN0cmluZ01hc2spXG4gICAgaWYgKCFsZW5ndGgpIHJldHVybiBzdHJpbmdNYXNrXG4gIFxuICAgIGNvbnN0IHRva2VuID0gZ2V0UHVyZVRva2VuKHN0cmluZ01hc2spXG4gICAgaWYgKCF0b2tlbikgcmV0dXJuIHN0cmluZ01hc2tcbiAgXG4gICAgY29uc3QgZXhwYW5kZWRUb2tlbiA9IG1ha2VFeHBhbmRlZFRva2VuKHRva2VuLCBsZW5ndGgpXG4gICAgY29uc3Qgc3RhcnQgPSBnZXRTdGFydChzdHJpbmdNYXNrKVxuICAgIGNvbnN0IGRlbCA9IGdldERlbChzdHJpbmdNYXNrKVxuICAgIGNvbnN0IG5ld1N0cmluZ01hc2sgPSBpbnNlcnRFeHBhbmRlZFRva2VuSW5TdHJpbmdNYXNrKHN0cmluZ01hc2ssIGV4cGFuZGVkVG9rZW4sIHN0YXJ0LCBkZWwpXG5cbiAgICByZXR1cm4gcnVubmVyKG5ld1N0cmluZ01hc2spXG4gIH1cbiAgXG4gIGNvbnRleHQuc3RyaW5nTWFzayA9IHJ1bm5lcihjb250ZXh0LnN0cmluZ01hc2spXG5cbiAgbmV4dCgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4cGFuZFF1YW50aWZpZXJzXG4iLCJpbXBvcnQgY3JlYXRlTWFza0FwcGxpY2F0b3IgZnJvbSAnLi9mbGV4LW1hc2stY29yZS9hcGkvY3JlYXRlLW1hc2stYXBwbGljYXRvcidcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWFza0FwcGxpY2F0b3JcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==