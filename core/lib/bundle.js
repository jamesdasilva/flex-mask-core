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
  maskCompiler.use(_middlewares__WEBPACK_IMPORTED_MODULE_1__.Prefix);
  maskCompiler.use(_middlewares__WEBPACK_IMPORTED_MODULE_1__.Direction);
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
    console.log('maxLimit', maxLimit);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvYXBpL2NyZWF0ZS1tYXNrLWFwcGxpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL2hlbHBlcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWFzay1jb21waWxlci9maWx0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvZmlsdGVyL21ha2UtZmlsdGVyLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL2ZpbHRlci90cnVjYXRlLXZhbHVlLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL2luZGV4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2stY29tcGlsZXIuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvbWFzay9hcHBseS1tYXNrLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2svZXh0cmFjdC1tYXNrLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvbWFzay9tYXNrLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2svcmVtb3ZlLW1hc2suanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvdG9rZW5zL2V4dHJhY3QtdG9rZW5zLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL3Rva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWFzay1jb21waWxlci90b2tlbnMvdG9rZW5zLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLXJ1bnRpbWUvbWFzay1ydW50aW1lLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9kaXJlY3Rpb24vZGlyZWN0aW9uLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9kaXJlY3Rpb24vZXh0cmFjdC1kaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21pZGRsZXdhcmVzL2RpcmVjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21pZGRsZXdhcmVzL2xlbmd0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvbGVuZ3RoL2xlbmd0aC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvcHJlZml4L2FwcGx5LXByZWZpeC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvcHJlZml4L2luZGV4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9wcmVmaXgvcHJlZml4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9wcmVmaXgvcmVtb3ZlLXByZWZpeC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvcXVhbnRpZmllcnMvZXhwYW5kLXF1YW50aWZpZXJzLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mbGV4LW1hc2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mbGV4LW1hc2svd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImNyZWF0ZU1hc2tDb250ZXh0IiwibWFza1N0ciIsInN0cmluZ01hc2siLCJiZWZvcmVFeGVjIiwiYWZ0ZXJFeGVjIiwiZXhlYyIsIm1ha2VBcHBsaWNhdG9yIiwiY29udGV4dCIsIm1hc2tDb21waWxlciIsIk1hc2tDb21waWxlciIsInVzZSIsIlF1YW50aWZpZXJzIiwiUHJlZml4IiwiRGlyZWN0aW9uIiwiTGVuZ3RoIiwiY29tcGlsZSIsIm1hc2tSdW5UaW1lIiwiTWFza1J1bnRpbWUiLCJtYXNrQXBwbGljYXRvciIsIm5ld1ZhbHVlIiwidmFsdWUiLCJwcm90b3R5cGUiLCJtYXNrIiwiZGlyZWN0aW9uIiwicHJlZml4IiwibWF4TGltaXQiLCJmaWx0ZXIiLCJrZXlDaGFyc0VudW0iLCJPYmplY3QiLCJmcmVlemUiLCJPTkxZX05VTUJFUiIsIk9OTFlfQ0hBUiIsIkNIQVJfTlVNQkVSIiwiQ0hBUl9OVU1CRVJfU1BBQ0UiLCJrZXlDaGFycyIsImtleXMiLCJtYXAiLCJrZXkiLCJyZWdFeFRva2VucyIsImVzY2FwZUNoYXJzIiwiZXNjYXBlQ2hhcnNGbiIsImNoYXJzIiwiQXJyYXkiLCJmcm9tIiwiY2hhciIsImpvaW4iLCJGaWx0ZXIiLCJtYWtlRmlsdGVyIiwidG9rZW5zIiwidW5zaGlmdCIsInRydWNhdGVWYWx1ZSIsImFjY0ZpbHRlciIsImkiLCJsZW5ndGgiLCJrZXlDaGFyIiwicHVzaCIsInJlZ0V4IiwiZW5kIiwic3RhcnQiLCJSZWdFeHAiLCJleGNlZWRlZCIsInN1YnN0cmluZyIsInN0YWNrIiwiVG9rZW5zIiwiTWFzayIsImFwcGx5TWFzayIsInZhbHVlV2l0aE1hc2siLCJ2YWx1ZUFyciIsInNwbGljZSIsInRva2VuIiwiY29uc29sZSIsImxvZyIsImxhc3RQb3NpdGlvbiIsImludmVydGVkUG9zaXRpb24iLCJpbnNlcnRQb3MiLCJleHRyYWN0TWFzayIsInJlbW92ZU1hc2siLCJ0ZXN0IiwiZXh0cmFjdFRva2VucyIsImFycmF5TWFzayIsImlzVG9rZW4iLCJwcmV2Q2hhciIsIml0ZW0iLCJjdHh0IiwiZXhlY0JlZm9yZSIsImV4ZWNBZnRlciIsImFkZEJlZm9yZUV4ZWMiLCJmbiIsImFkZEFmdGVyRXhlYyIsImV4dHJhY3REaXJlY3Rpb24iLCJfbWFza1N0ciIsIm1hc2tTdHJXaXRoUmlnaHREaXJlY3Rpb24iLCJtYXRjaCIsInNsaWNlIiwibWFza1N0cldpdGhMZWZ0RGlyZWN0aW9uIiwiYXBwbHlQcmVmaXgiLCJwcmVmaXhXaXRoQ21kIiwicmVtb3ZlUHJlZml4IiwibGVuZ3RoV2l0aENtZCIsInRva2VuV2l0aENtZCIsIm1ha2VFeHBhbmRlZFRva2VuIiwiZXhwYW5kZWRUb2tlbiIsImdldExlbmd0aFdpdGhDbWQiLCJnZXRQdXJlTGVuZ3RoIiwiZ2V0VG9rZW5XaXRoQ21kIiwiZ2V0UHVyZVRva2VuIiwiZ2V0U3RhcnQiLCJpbmRleCIsImdldERlbCIsImluc2VydEV4cGFuZGVkVG9rZW5JblN0cmluZ01hc2siLCJkZWwiLCJleHBhbmRRdWFudGlmaWVycyIsInJ1bm5lciIsIm5ld1N0cmluZ01hc2siLCJjcmVhdGVNYXNrQXBwbGljYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLE9BQUQsRUFBYTtBQUNyQyxTQUFPO0FBQ0xDLGNBQVUsRUFBRUQsT0FEUDtBQUVMRSxjQUFVLEVBQUUsRUFGUDtBQUdMQyxhQUFTLEVBQUUsRUFITjtBQUlMQyxRQUFJLEVBQUU7QUFKRCxHQUFQO0FBTUQsQ0FQRDs7QUFTQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNMLE9BQUQsRUFBYTtBQUVsQyxNQUFNTSxPQUFPLEdBQUdQLGlCQUFpQixDQUFDQyxPQUFELENBQWpDO0FBRUEsTUFBTU8sWUFBWSxHQUFHQyx1REFBWSxFQUFqQztBQUVBRCxjQUFZLENBQUNFLEdBQWIsQ0FBaUJDLHFEQUFqQjtBQUNBSCxjQUFZLENBQUNFLEdBQWIsQ0FBaUJFLGdEQUFqQjtBQUNBSixjQUFZLENBQUNFLEdBQWIsQ0FBaUJHLG1EQUFqQjtBQUNBTCxjQUFZLENBQUNFLEdBQWIsQ0FBaUJJLGdEQUFqQjtBQUVBTixjQUFZLENBQUNPLE9BQWIsQ0FBcUJSLE9BQXJCO0FBRUEsTUFBTVMsV0FBVyxHQUFHQyxtRUFBVyxDQUFDVixPQUFELENBQS9COztBQUVBLE1BQU1XLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsUUFBRCxFQUFjO0FBRW5DWixXQUFPLENBQUNhLEtBQVIsR0FBZ0JELFFBQWhCO0FBRUFILGVBQVcsQ0FBQ1gsSUFBWixDQUFp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QUE0QjNDLEtBQTVCLEVBQW1Db0QsR0FBbkMsQ0FBckQ7QUFFQSxXQUFPRSxNQUFNLENBQUNDLGFBQUQsQ0FBYjtBQUNELEdBYkQ7O0FBZUExRyxTQUFPLENBQUNMLFVBQVIsR0FBcUI4RyxNQUFNLENBQUN6RyxPQUFPLENBQUNMLFVBQVQsQ0FBM0I7QUFDRCxDQWpCRDs7QUFtQkEsaUVBQWU2RyxpQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBRUEsaUVBQWVHLCtFQUFmLEU7Ozs7OztVQ0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFza0NvbXBpbGVyIGZyb20gJy4uL21hc2stY29tcGlsZXInXG5pbXBvcnQgTWFza1J1bnRpbWUgZnJvbSAnLi4vbWFzay1ydW50aW1lL21hc2stcnVudGltZSdcbmltcG9ydCB7IFF1YW50aWZpZXJzLCBEaXJlY3Rpb24sIFByZWZpeCwgTGVuZ3RoIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMnXG5cbmNvbnN0IGNyZWF0ZU1hc2tDb250ZXh0ID0gKG1hc2tTdHIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdHJpbmdNYXNrOiBtYXNrU3RyLFxuICAgIGJlZm9yZUV4ZWM6IFtdLFxuICAgIGFmdGVyRXhlYzogW10sXG4gICAgZXhlYzogbnVsbFxuICB9XG59XG5cbmNvbnN0IG1ha2VBcHBsaWNhdG9yID0gKG1hc2tTdHIpID0+IHtcblxuICBjb25zdCBjb250ZXh0ID0gY3JlYXRlTWFza0NvbnRleHQobWFza1N0cilcblxuICBjb25zdCBtYXNrQ29tcGlsZXIgPSBNYXNrQ29tcGlsZXIoKVxuICBcbiAgbWFza0NvbXBpbGVyLnVzZShRdWFudGlmaWVycylcbiAgbWFza0NvbXBpbGVyLnVzZShQcmVmaXgpXG4gIG1hc2tDb21waWxlci51c2UoRGlyZWN0aW9uKVxuICBtYXNrQ29tcGlsZXIudXNlKExlbmd0aClcbiAgXG4gIG1hc2tDb21waWxlci5jb21waWxlKGNvbnRleHQpXG4gIFxuICBjb25zdCBtYXNrUnVuVGltZSA9IE1hc2tSdW50aW1lKGNvbnRleHQpXG5cbiAgY29uc3QgbWFza0FwcGxpY2F0b3IgPSAobmV3VmFsdWUpID0+IHtcbiAgICBcbiAgICBjb250ZXh0LnZhbHVlID0gbmV3VmFsdWVcblxuICAgIG1hc2tSdW5UaW1lLmV4ZWMoY29udGV4dClcblxuICAgIHJldHVybiB7IC4uLmNvbnRleHQgfVxuICB9XG5cbiAgbWFza0FwcGxpY2F0b3IucHJvdG90eXBlLm1hc2sgPSBjb250ZXh0Lm1hc2tcbiAgbWFza0FwcGxpY2F0b3IucHJvdG90eXBlLmRpcmVjdGlvbiA9IGNvbnRleHQuZGlyZWN0aW9uXG4gIG1hc2tBcHBsaWNhdG9yLnByb3RvdHlwZS5wcmVmaXggPSBjb250ZXh0LnByZWZpeFxuICBtYXNrQXBwbGljYXRvci5wcm90b3R5cGUubWF4TGltaXQgPSBjb250ZXh0Lm1heExpbWl0XG4gIG1hc2tBcHBsaWNhdG9yLnByb3RvdHlwZS5maWx0ZXIgPSBjb250ZXh0LmZpbHRlclxuICBcbiAgcmV0dXJuIG1hc2tBcHBsaWNhdG9yXG59IFxuXG5leHBvcnQgZGVmYXVsdCBtYWtlQXBwbGljYXRvclxuIiwiZXhwb3J0IGNvbnN0IGtleUNoYXJzRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICBPTkxZX05VTUJFUjogJzknLFxuICBPTkxZX0NIQVI6ICdBJyxcbiAgQ0hBUl9OVU1CRVI6ICcqJyxcbiAgQ0hBUl9OVU1CRVJfU1BBQ0U6ICdfJ1xufSlcblxuZXhwb3J0IGNvbnN0IGtleUNoYXJzID0gT2JqZWN0LmtleXMoa2V5Q2hhcnNFbnVtKS5tYXAoa2V5ID0+IGtleUNoYXJzRW51bVtrZXldKVxuXG5leHBvcnQgY29uc3QgcmVnRXhUb2tlbnMgPSBPYmplY3QuZnJlZXplKHtcbiAgJzknOiAnWzAtOV0nLCBcbiAgJ0EnOiAnW0EtWmEtesOhw6DDosOjw6nDqMOqw63Dr8Ozw7TDtcO2w7rDp8Oxw4HDgMOCw4PDicOIw43Dj8OTw5TDlcOWw5rDh8ORXScsIFxuICAnKic6ICdbQS1aYS16w6HDoMOiw6PDqcOow6rDrcOvw7PDtMO1w7bDusOnw7HDgcOAw4LDg8OJw4jDjcOPw5PDlMOVw5bDmsOHw5EwLTldJyxcbiAgJ18nOiAnW0EtWmEtesOhw6DDosOjw6nDqMOqw63Dr8Ozw7TDtcO2w7rDp8Oxw4HDgMOCw4PDicOIw43Dj8OTw5TDlcOWw5rDh8ORIDAtOV0nLFxufSlcblxuZXhwb3J0IGNvbnN0IGVzY2FwZUNoYXJzID0gT2JqZWN0LmZyZWV6ZSh7XG4gICcvJzogJ1xcLycsXG4gICcuJzogJ1xcXFwuJyxcbiAgJy0nOiAnXFxcXC0nLFxuICAnKCc6ICdcXFxcKCcsXG4gICcpJzogJ1xcXFwpJyxcbiAgJyonOiAnXFxcXConLFxuICAnKyc6ICdcXFxcKycsXG4gICdeJzogJ1xcXFxeJyxcbiAgJyQnOiAnXFxcXCQnLFxuICAnWyc6ICdcXFxcWycsXG4gICddJzogJ1xcXFxdJyxcbiAgJ3snOiAnXFxcXHsnLFxuICAnfSc6ICdcXFxcfScsXG59KVxuXG5leHBvcnQgY29uc3QgZXNjYXBlQ2hhcnNGbiA9IChjaGFycykgPT4ge1xuICByZXR1cm4gQXJyYXkuZnJvbShjaGFycykubWFwKGNoYXIgPT4gZXNjYXBlQ2hhcnNbY2hhcl0gfHwgY2hhcikuam9pbignJylcbn1cbiAiLCJpbXBvcnQgbWFrZUZpbHRlciBmcm9tICcuL21ha2UtZmlsdGVyJ1xuaW1wb3J0IHRydWNhdGVWYWx1ZSBmcm9tICcuL3RydWNhdGUtdmFsdWUnXG5cbmNvbnN0IEZpbHRlciA9IGNvbnRleHQgPT4ge1xuICBcbiAgY29udGV4dC5maWx0ZXIgPSBtYWtlRmlsdGVyKGNvbnRleHQudG9rZW5zKVxuXG4gIGNvbnRleHQuYWZ0ZXJFeGVjLnVuc2hpZnQodHJ1Y2F0ZVZhbHVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcbiIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclxuIiwiY29uc3QgbWFrZUZpbHRlciA9IChtYXNrKSA9PiB7XG4gIGxldCBmaWx0ZXIgPSBbXVxuICBsZXQgYWNjRmlsdGVyID0gJydcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcbiAgICBpZihtYXNrW2ldLmtleUNoYXIpIHtcbiAgICAgIGZpbHRlci5wdXNoKGBeJHthY2NGaWx0ZXJ9JHttYXNrW2ldLnJlZ0V4fXswLCR7bWFza1tpXS5lbmQgLSBtYXNrW2ldLnN0YXJ0fX0kYClcbiAgICAgIGFjY0ZpbHRlciA9IGAke2FjY0ZpbHRlcn0ke21hc2tbaV0ucmVnRXh9eyR7bWFza1tpXS5lbmQgLSBtYXNrW2ldLnN0YXJ0fX1gXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY0ZpbHRlciA9IGAke2FjY0ZpbHRlcn0ke21hc2tbaV0ucmVnRXh9YFxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFJlZ0V4cChmaWx0ZXIuam9pbignfCcpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlRmlsdGVyXG4iLCJjb25zdCB0cnVjYXRlVmFsdWUgPSBjb250ZXh0ID0+IHtcbiAgY29uc3QgZXhjZWVkZWQgPSBjb250ZXh0LnZhbHVlLmxlbmd0aCA+IGNvbnRleHQubWF4TGltaXRcbiAgY29uc3Qgc3RhcnQgPSBjb250ZXh0LmRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gY29udGV4dC52YWx1ZS5sZW5ndGggLSBjb250ZXh0Lm1heExpbWl0IDogMFxuICBjb25zdCBlbmQgPSBjb250ZXh0LmRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gY29udGV4dC52YWx1ZS5sZW5ndGggOiBjb250ZXh0Lm1heExpbWl0XG4gIGNvbnRleHQudmFsdWUgPSBleGNlZWRlZCA/IGNvbnRleHQudmFsdWUuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpIDogY29udGV4dC52YWx1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cnVjYXRlVmFsdWVcbiIsImltcG9ydCBNYXNrQ29tcGlsZXIgZnJvbSAnLi9tYXNrLWNvbXBpbGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBNYXNrQ29tcGlsZXIiLCJpbXBvcnQgVG9rZW5zIGZyb20gJy4vdG9rZW5zJ1xuaW1wb3J0IE1hc2sgZnJvbSAnLi9tYXNrJ1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2ZpbHRlcidcblxuY29uc3QgTWFza0NvbXBpbGVyID0gKCkgPT4ge1xuICBjb25zdCBzdGFjayA9IFtdXG5cbiAgY29uc3QgdXNlID0gKC4uLm1pZGRsZXdhcmVzKSA9PiB7XG4gICAgc3RhY2sucHVzaCguLi5taWRkbGV3YXJlcylcbiAgfVxuXG4gIGNvbnN0IGNvbXBpbGUgPSAoY29udGV4dCkgPT4ge1xuICAgIFxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgc3RhY2tbaV0oY29udGV4dClcbiAgICB9XG5cbiAgICBUb2tlbnMoY29udGV4dClcbiAgICBGaWx0ZXIoY29udGV4dClcbiAgICBNYXNrKGNvbnRleHQpXG4gIH1cblxuICByZXR1cm4geyB1c2UsIGNvbXBpbGUgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXNrQ29tcGlsZXJcbiIsImNvbnN0IGFwcGx5TWFzayA9IChjb250ZXh0KSA9PiB7XG4gIGlmKGNvbnRleHQuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgbGV0IHZhbHVlV2l0aE1hc2sgPSBjb250ZXh0LnZhbHVlIFxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbnRleHQubWFzay5sZW5ndGg7IGkrKykge1xuICBcbiAgICAgIGlmKHZhbHVlV2l0aE1hc2subGVuZ3RoID4gY29udGV4dC5tYXNrW2ldLnN0YXJ0KSB7XG4gIFxuICAgICAgICBjb25zdCB2YWx1ZUFyciA9IEFycmF5LmZyb20odmFsdWVXaXRoTWFzaylcbiAgXG4gICAgICAgIHZhbHVlQXJyLnNwbGljZShjb250ZXh0Lm1hc2tbaV0uc3RhcnQsIDAsIGNvbnRleHQubWFza1tpXS50b2tlbilcbiAgICAgICAgXG4gICAgICAgIHZhbHVlV2l0aE1hc2sgPSB2YWx1ZUFyci5qb2luKCcnKVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgY29udGV4dC52YWx1ZSA9IHZhbHVlV2l0aE1hc2tcbiAgfVxuXG4gIGlmKGNvbnRleHQuZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICBsZXQgdmFsdWVXaXRoTWFzayA9IGNvbnRleHQudmFsdWUgXG4gICAgY29uc3QgeyBtYXhMaW1pdCB9ID0gY29udGV4dFxuICAgIGNvbnNvbGUubG9nKCdtYXhMaW1pdCcsIG1heExpbWl0KVxuICAgIGZvcihsZXQgaSA9IGNvbnRleHQubWFzay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgbGFzdFBvc2l0aW9uID0gbWF4TGltaXQgLSAxXG4gICAgICBjb25zdCBpbnZlcnRlZFBvc2l0aW9uID0gbGFzdFBvc2l0aW9uIC0gY29udGV4dC5tYXNrW2ldLnN0YXJ0XG5cbiAgICAgIGlmKHZhbHVlV2l0aE1hc2subGVuZ3RoID4gaW52ZXJ0ZWRQb3NpdGlvbikge1xuICAgICAgICBjb25zdCB2YWx1ZUFyciA9IEFycmF5LmZyb20odmFsdWVXaXRoTWFzaylcbiAgICAgICAgY29uc3QgaW5zZXJ0UG9zID0gdmFsdWVXaXRoTWFzay5sZW5ndGggLSBpbnZlcnRlZFBvc2l0aW9uXG4gICAgICAgIHZhbHVlQXJyLnNwbGljZShpbnNlcnRQb3MsIDAsIGNvbnRleHQubWFza1tpXS50b2tlbilcbiAgICAgICAgXG4gICAgICAgIHZhbHVlV2l0aE1hc2sgPSB2YWx1ZUFyci5qb2luKCcnKVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgY29udGV4dC52YWx1ZSA9IHZhbHVlV2l0aE1hc2tcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBseU1hc2tcbiIsImNvbnN0IGV4dHJhY3RNYXNrID0gdG9rZW5zID0+IHtcbiAgcmV0dXJuIHRva2Vucy5maWx0ZXIodG9rZW4gPT4gIXRva2VuLmtleUNoYXIpLm1hcCh0b2tlbiA9PiAoe1xuICAgIHRva2VuOiB0b2tlbi50b2tlbixcbiAgICBzdGFydDogdG9rZW4uc3RhcnQsXG4gIH0pKVxufVxuXG5leHBvcnQgZGVmYXVsdCBleHRyYWN0TWFza1xuIiwiaW1wb3J0IE1hc2sgZnJvbSAnLi9tYXNrJ1xuXG5leHBvcnQgZGVmYXVsdCBNYXNrIiwiaW1wb3J0IHJlbW92ZU1hc2sgZnJvbSAnLi9yZW1vdmUtbWFzaydcbmltcG9ydCBhcHBseU1hc2sgZnJvbSAnLi9hcHBseS1tYXNrJ1xuaW1wb3J0IGV4dHJhY3RNYXNrIGZyb20gJy4vZXh0cmFjdC1tYXNrJ1xuXG5jb25zdCBNYXNrID0gKGNvbnRleHQpID0+IHtcbiAgY29udGV4dC5tYXNrID0gZXh0cmFjdE1hc2soY29udGV4dC50b2tlbnMpXG5cbiAgY29udGV4dC5iZWZvcmVFeGVjLnB1c2gocmVtb3ZlTWFzaylcblxuICBjb250ZXh0LmV4ZWMgPSBhcHBseU1hc2tcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFza1xuIiwiaW1wb3J0IHsgcmVnRXhUb2tlbnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuXG5jb25zdCByZW1vdmVNYXNrID0gKGNvbnRleHQpID0+IHtcbiAgY29udGV4dC52YWx1ZSA9IEFycmF5LmZyb20oY29udGV4dC52YWx1ZSkuZmlsdGVyKGNoYXIgPT4gKG5ldyBSZWdFeHAoYF4ke3JlZ0V4VG9rZW5zWycqJ119YCkpLnRlc3QoY2hhcikpLmpvaW4oJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZU1hc2tcbiIsImltcG9ydCB7IGtleUNoYXJzLCByZWdFeFRva2VucywgZXNjYXBlQ2hhcnNGbiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5cbmNvbnN0IGV4dHJhY3RUb2tlbnMgPSAoc3RyaW5nTWFzaykgPT4ge1xuXHRjb25zdCBhcnJheU1hc2sgPSBBcnJheS5mcm9tKHN0cmluZ01hc2spXG5cdGxldCB0b2tlbiA9IHtcbiAgICB0b2tlbjogJycsXG4gICAgc3RhcnQ6IDBcblx0fVxuXHRjb25zdCB0b2tlbnMgPSBbXVxuICBsZXQgaXNUb2tlbiA9IGZhbHNlXG4gIGxldCBwcmV2Q2hhciA9ICcnXG5cdGZvcihsZXQgaSA9IDA7IGkgPD0gYXJyYXlNYXNrLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoIWtleUNoYXJzLmluY2x1ZGVzKGFycmF5TWFza1tpXSkgJiYgaSAhPT0gYXJyYXlNYXNrLmxlbmd0aCkge1xuXHRcdFx0aWYoIWlzVG9rZW4pIHtcbiAgICAgICAgdG9rZW4uZW5kID0gaVxuICAgICAgICB0b2tlbi5rZXlDaGFyID0gdHJ1ZVxuICAgICAgICB0b2tlbi5yZWdFeCA9IHRva2VuLmtleUNoYXIgPyBgJHtyZWdFeFRva2Vuc1t0b2tlbi50b2tlblswXV19YCA6IGVzY2FwZUNoYXJzRm4odG9rZW4udG9rZW4pXG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKVxuICAgICAgICB0b2tlbiA9IHtcbiAgICAgICAgICB0b2tlbjogJycsXG4gICAgICAgICAgc3RhcnQ6IGlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXNUb2tlbiA9IHRydWVcbiAgICAgIHRva2VuLnRva2VuICs9IGFycmF5TWFza1tpXVxuXHRcdH0gZWxzZSB7XG4gICAgICBpZihpc1Rva2VuIHx8IChpID4gMCAmJiBhcnJheU1hc2tbaV0gIT09IHByZXZDaGFyKSkge1xuICAgICAgICB0b2tlbi5lbmQgPSBpXG4gICAgICAgIHRva2VuLmtleUNoYXIgPSBpc1Rva2VuID8gZmFsc2UgOiB0cnVlXG4gICAgICAgIHRva2VuLnJlZ0V4ID0gdG9rZW4ua2V5Q2hhciA/IGAke3JlZ0V4VG9rZW5zW3Rva2VuLnRva2VuWzBdXX1gIDogZXNjYXBlQ2hhcnNGbih0b2tlbi50b2tlbilcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pXG4gICAgICAgIHRva2VuID0ge1xuICAgICAgICAgIHRva2VuOiAnJyxcbiAgICAgICAgICBzdGFydDogaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpc1Rva2VuID0gZmFsc2VcbiAgICAgIHRva2VuLnRva2VuICs9IGFycmF5TWFza1tpXVxuICAgIH1cbiAgICBwcmV2Q2hhciA9IGFycmF5TWFza1tpXVxuICB9XG5cdHJldHVybiB0b2tlbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50b2tlbiAhPT0gJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RUb2tlbnNcbiIsImltcG9ydCBUb2tlbnMgZnJvbSAnLi90b2tlbnMnXG5cbmV4cG9ydCBkZWZhdWx0IFRva2Vuc1xuIiwiaW1wb3J0IGV4dHJhY3RUb2tlbnMgZnJvbSAnLi9leHRyYWN0LXRva2VucydcblxuY29uc3QgVG9rZW5zID0gY29udGV4dCA9PiB7XG4gIGNvbnRleHQudG9rZW5zID0gZXh0cmFjdFRva2Vucyhjb250ZXh0LnN0cmluZ01hc2spXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRva2VucyIsImNvbnN0IE1hc2tSdW50aW1lID0gKGN0eHQpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IGN0eHRcblxuICBjb25zdCBleGVjQmVmb3JlID0gKCkgPT4ge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb250ZXh0LmJlZm9yZUV4ZWMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnRleHQuYmVmb3JlRXhlY1tpXShjb250ZXh0KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGV4ZWNBZnRlciA9ICgpID0+IHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29udGV4dC5hZnRlckV4ZWMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnRleHQuYWZ0ZXJFeGVjW2ldKGNvbnRleHQpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWRkQmVmb3JlRXhlYyA9IChmbikgPT4ge1xuICAgIGNvbnRleHQuYmVmb3JlRXhlYy5wdXNoKGZuKVxuICB9XG5cbiAgY29uc3QgYWRkQWZ0ZXJFeGVjID0gKGZuKSA9PiB7XG4gICAgY29udGV4dC5hZnRlckV4ZWMucHVzaChmbilcbiAgfVxuXG4gIGNvbnN0IGV4ZWMgPSAoKSA9PiB7XG4gICAgZXhlY0JlZm9yZSgpXG4gICAgY29udGV4dC5leGVjKGNvbnRleHQpXG4gICAgZXhlY0FmdGVyKClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29udGV4dCxcbiAgICBhZGRCZWZvcmVFeGVjLFxuICAgIGFkZEFmdGVyRXhlYyxcbiAgICBleGVjLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tSdW50aW1lXG4iLCJpbXBvcnQgZXh0cmFjdERpcmVjdGlvbiBmcm9tICcuL2V4dHJhY3QtZGlyZWN0aW9uJ1xuXG5jb25zdCBEaXJlY3Rpb24gPSAoY29udGV4dCkgPT4ge1xuICBjb25zdCB7IGRpcmVjdGlvbiwgc3RyaW5nTWFzayB9ID0gZXh0cmFjdERpcmVjdGlvbihjb250ZXh0LnN0cmluZ01hc2spXG4gIGNvbnRleHQuZGlyZWN0aW9uID0gZGlyZWN0aW9uXG4gIGNvbnRleHQuc3RyaW5nTWFzayA9IHN0cmluZ01hc2tcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uXG4iLCJjb25zdCBleHRyYWN0RGlyZWN0aW9uID0gKG1hc2tTdHIpID0+IHtcbiAgbGV0IGRpcmVjdGlvbiA9ICdyaWdodCdcbiAgbGV0IF9tYXNrU3RyID0gbWFza1N0clxuXG4gIGNvbnN0IG1hc2tTdHJXaXRoUmlnaHREaXJlY3Rpb24gPSBfbWFza1N0cj8ubWF0Y2goL1xcPlxcPi4rLykgPz8gW11cbiAgaWYgKG1hc2tTdHJXaXRoUmlnaHREaXJlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgIGRpcmVjdGlvbiA9ICdyaWdodCdcbiAgICBfbWFza1N0ciA9IG1hc2tTdHJXaXRoUmlnaHREaXJlY3Rpb25bMF0uc2xpY2UoMiwgbWFza1N0cldpdGhSaWdodERpcmVjdGlvblswXS5sZW5ndGgpXG4gIH1cblxuICBjb25zdCBtYXNrU3RyV2l0aExlZnREaXJlY3Rpb24gPSBfbWFza1N0cj8ubWF0Y2goL1xcPFxcPC4rLykgPz8gW11cbiAgaWYgKG1hc2tTdHJXaXRoTGVmdERpcmVjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgX21hc2tTdHIgPSBtYXNrU3RyV2l0aExlZnREaXJlY3Rpb25bMF0uc2xpY2UoMiwgbWFza1N0cldpdGhMZWZ0RGlyZWN0aW9uWzBdLmxlbmd0aClcbiAgfVxuICBcbiAgcmV0dXJuIHtcbiAgICBkaXJlY3Rpb24sXG4gICAgc3RyaW5nTWFzazogX21hc2tTdHJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBleHRyYWN0RGlyZWN0aW9uXG4iLCJpbXBvcnQgRGlyZWN0aW9uIGZyb20gJy4vZGlyZWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3Rpb25cbiIsImltcG9ydCBEaXJlY3Rpb24gZnJvbSAnLi9kaXJlY3Rpb24nXG5pbXBvcnQgUHJlZml4IGZyb20gJy4vcHJlZml4J1xuaW1wb3J0IExlbmd0aCBmcm9tICcuL2xlbmd0aCdcbmltcG9ydCBRdWFudGlmaWVycyBmcm9tICcuL3F1YW50aWZpZXJzL2V4cGFuZC1xdWFudGlmaWVycydcblxuZXhwb3J0IHtcbiAgRGlyZWN0aW9uLFxuICBQcmVmaXgsXG4gIFF1YW50aWZpZXJzLFxuICBMZW5ndGhcbn0gIiwiaW1wb3J0IExlbmd0aCBmcm9tICcuL2xlbmd0aCdcblxuZXhwb3J0IGRlZmF1bHQgTGVuZ3RoXG4iLCJjb25zdCBMZW5ndGggPSBjb250ZXh0ID0+IHtcbiAgY29udGV4dC5tYXhMaW1pdCA9IGNvbnRleHQuc3RyaW5nTWFzay5sZW5ndGhcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVuZ3RoIiwiY29uc3QgYXBwbHlQcmVmaXggPSAoY29udGV4dCkgPT4ge1xuICBjb250ZXh0LnZhbHVlID0gY29udGV4dC52YWx1ZSA/IGAke2NvbnRleHQucHJlZml4fSR7Y29udGV4dC52YWx1ZX1gIDogY29udGV4dC52YWx1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBseVByZWZpeFxuICAiLCJpbXBvcnQgUHJlZml4IGZyb20gJy4vcHJlZml4J1xuXG5leHBvcnQgZGVmYXVsdCBQcmVmaXhcbiIsImltcG9ydCByZW1vdmVQcmVmaXggZnJvbSAnLi9yZW1vdmUtcHJlZml4J1xuaW1wb3J0IGFwcGx5UHJlZml4IGZyb20gJy4vYXBwbHktcHJlZml4J1xuXG5jb25zdCBQcmVmaXggPSBjb250ZXh0ID0+IHtcbiAgbGV0IHByZWZpeCA9ICcnXG4gIGxldCBtYXNrU3RyID0gY29udGV4dC5zdHJpbmdNYXNrXG5cbiAgY29uc3QgcHJlZml4V2l0aENtZCA9IG1hc2tTdHI/Lm1hdGNoKC8nJ1teO10rOy8pID8/IFtdXG5cbiAgaWYgKHByZWZpeFdpdGhDbWQubGVuZ3RoID4gMCkge1xuXG4gICAgcHJlZml4ID0gcHJlZml4V2l0aENtZFswXS5zbGljZSgyLCBwcmVmaXhXaXRoQ21kWzBdLmxlbmd0aCAtIDEpXG4gICAgbWFza1N0ciA9IHByZWZpeFdpdGhDbWRbJ2lucHV0J10uc2xpY2UocHJlZml4V2l0aENtZFsnaW5kZXgnXSArIHByZWZpeFdpdGhDbWRbMF0ubGVuZ3RoLCBwcmVmaXhXaXRoQ21kWydpbnB1dCddLmxlbmd0aClcbiAgfVxuXG4gIGNvbnRleHQucHJlZml4ID0gcHJlZml4XG4gIGNvbnRleHQuc3RyaW5nTWFzayA9IG1hc2tTdHJcbiAgY29udGV4dC5iZWZvcmVFeGVjLnB1c2gocmVtb3ZlUHJlZml4KVxuICBjb250ZXh0LmFmdGVyRXhlYy5wdXNoKGFwcGx5UHJlZml4KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVmaXhcbiIsImltcG9ydCB7IGVzY2FwZUNoYXJzRm4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuXG5jb25zdCByZW1vdmVQcmVmaXggPSAoY29udGV4dCkgPT4ge1xuICBjb250ZXh0LnZhbHVlID0gKG5ldyBSZWdFeHAoYF4ke2VzY2FwZUNoYXJzRm4oY29udGV4dC5wcmVmaXgpfWApKS50ZXN0KGNvbnRleHQudmFsdWUpIFxuICAgID8gY29udGV4dC52YWx1ZS5zbGljZShjb250ZXh0LnByZWZpeC5sZW5ndGgsIGNvbnRleHQudmFsdWUubGVuZ3RoKSA6IGNvbnRleHQudmFsdWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlUHJlZml4XG4iLCJjb25zdCBsZW5ndGhXaXRoQ21kID0ge31cbmNvbnN0IHRva2VuV2l0aENtZCA9IHt9XG5cbmNvbnN0IG1ha2VFeHBhbmRlZFRva2VuID0gKGNoYXIsIGxlbmd0aCkgPT4ge1xuICBjb25zdCBleHBhbmRlZFRva2VuID0gW11cbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgZXhwYW5kZWRUb2tlbi5wdXNoKGNoYXIpXG4gIH1cbiAgcmV0dXJuIGV4cGFuZGVkVG9rZW5cbn1cblxuY29uc3QgZ2V0TGVuZ3RoV2l0aENtZCA9IG1hc2tTdHIgPT4gbWFza1N0cj8ubWF0Y2goL1xcXlxcZCsvKSA/PyBbXVxuXG5jb25zdCBnZXRQdXJlTGVuZ3RoID0gc3RyaW5nTWFzayA9PiB7XG4gIGlmKCFsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdKVxuICAgIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza10gPSBnZXRMZW5ndGhXaXRoQ21kKHN0cmluZ01hc2spXG4gIFxuICBpZiAobGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza11bMF0uc2xpY2UoMSwgbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXVswXS5sZW5ndGgpIFxufVxuXG5jb25zdCBnZXRUb2tlbldpdGhDbWQgPSBtYXNrU3RyID0+IG1hc2tTdHI/Lm1hdGNoKC9cXD5cXGQrO3xcXD5cXHcrO3xcXD4uKzsvKSA/PyBbXVxuXG5jb25zdCBnZXRQdXJlVG9rZW4gPSAoc3RyaW5nTWFzaykgPT4ge1xuICB0b2tlbldpdGhDbWRbc3RyaW5nTWFza10gPSBnZXRUb2tlbldpdGhDbWQoc3RyaW5nTWFzaylcbiAgaWYgKHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXVswXS5zbGljZSgxLCB0b2tlbldpdGhDbWRbc3RyaW5nTWFza11bMF0ubGVuZ3RoIC0gMSlcbn1cblxuY29uc3QgZ2V0U3RhcnQgPSAoc3RyaW5nTWFzaykgPT4ge1xuICBpZighbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXSlcbiAgICBsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdID0gZ2V0TGVuZ3RoV2l0aENtZChzdHJpbmdNYXNrKVxuXG4gIGlmIChsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICByZXR1cm4gbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXS5pbmRleFxufVxuXG5jb25zdCBnZXREZWwgPSAoc3RyaW5nTWFzaykgPT4ge1xuICBpZighbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXSlcbiAgICBsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdID0gZ2V0TGVuZ3RoV2l0aENtZChzdHJpbmdNYXNrKVxuXG4gIGlmIChsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICB0b2tlbldpdGhDbWRbc3RyaW5nTWFza10gPSBnZXRUb2tlbldpdGhDbWQoc3RyaW5nTWFzaylcbiAgaWYgKHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza11bMF0ubGVuZ3RoICsgdG9rZW5XaXRoQ21kW3N0cmluZ01hc2tdWzBdLmxlbmd0aFxufVxuXG5jb25zdCBpbnNlcnRFeHBhbmRlZFRva2VuSW5TdHJpbmdNYXNrID0gKHN0cmluZ01hc2ssIGV4cGFuZGVkVG9rZW4sIHN0YXJ0LCBkZWwpID0+IHtcbiAgY29uc3QgYXJyYXlNYXNrID0gQXJyYXkuZnJvbShzdHJpbmdNYXNrKVxuICBhcnJheU1hc2suc3BsaWNlKHN0YXJ0LCBkZWwsIC4uLmV4cGFuZGVkVG9rZW4pXG4gIHJldHVybiBhcnJheU1hc2suam9pbignJylcbn1cblxuY29uc3QgZXhwYW5kUXVhbnRpZmllcnMgPSAoY29udGV4dCkgPT4ge1xuICBjb25zdCBydW5uZXIgPSAoc3RyaW5nTWFzaykgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGdldFB1cmVMZW5ndGgoc3RyaW5nTWFzaylcbiAgICBpZiAoIWxlbmd0aCkgcmV0dXJuIHN0cmluZ01hc2tcbiAgXG4gICAgY29uc3QgdG9rZW4gPSBnZXRQdXJlVG9rZW4oc3RyaW5nTWFzaylcbiAgICBpZiAoIXRva2VuKSByZXR1cm4gc3RyaW5nTWFza1xuICBcbiAgICBjb25zdCBleHBhbmRlZFRva2VuID0gbWFrZUV4cGFuZGVkVG9rZW4odG9rZW4sIGxlbmd0aClcbiAgICBjb25zdCBzdGFydCA9IGdldFN0YXJ0KHN0cmluZ01hc2spXG4gICAgY29uc3QgZGVsID0gZ2V0RGVsKHN0cmluZ01hc2spXG4gICAgY29uc3QgbmV3U3RyaW5nTWFzayA9IGluc2VydEV4cGFuZGVkVG9rZW5JblN0cmluZ01hc2soc3RyaW5nTWFzaywgZXhwYW5kZWRUb2tlbiwgc3RhcnQsIGRlbClcblxuICAgIHJldHVybiBydW5uZXIobmV3U3RyaW5nTWFzaylcbiAgfVxuICBcbiAgY29udGV4dC5zdHJpbmdNYXNrID0gcnVubmVyKGNvbnRleHQuc3RyaW5nTWFzaylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwYW5kUXVhbnRpZmllcnNcbiIsImltcG9ydCBjcmVhdGVNYXNrQXBwbGljYXRvciBmcm9tICcuL2ZsZXgtbWFzay1jb3JlL2FwaS9jcmVhdGUtbWFzay1hcHBsaWNhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYXNrQXBwbGljYXRvclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9