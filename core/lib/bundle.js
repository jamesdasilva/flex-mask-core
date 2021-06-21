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
  maskCompiler.use(_middlewares__WEBPACK_IMPORTED_MODULE_1__.Postfix);
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
  maskApplicator.prototype.postfix = context.postfix;
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
/*! export Postfix [provided] [no usage info] [missing usage info prevents renaming] -> ./src/flex-mask-core/middlewares/postfix/index.js .default */
/*! export Prefix [provided] [no usage info] [missing usage info prevents renaming] -> ./src/flex-mask-core/middlewares/prefix/index.js .default */
/*! export Quantifiers [provided] [no usage info] [missing usage info prevents renaming] -> ./src/flex-mask-core/middlewares/quantifiers/expand-quantifiers.js .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Direction": () => /* reexport safe */ _direction__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "Prefix": () => /* reexport safe */ _prefix__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "Postfix": () => /* reexport safe */ _postfix__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "Quantifiers": () => /* reexport safe */ _quantifiers_expand_quantifiers__WEBPACK_IMPORTED_MODULE_4__.default,
/* harmony export */   "Length": () => /* reexport safe */ _length__WEBPACK_IMPORTED_MODULE_3__.default
/* harmony export */ });
/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./direction */ "./src/flex-mask-core/middlewares/direction/index.js");
/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefix */ "./src/flex-mask-core/middlewares/prefix/index.js");
/* harmony import */ var _postfix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postfix */ "./src/flex-mask-core/middlewares/postfix/index.js");
/* harmony import */ var _length__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./length */ "./src/flex-mask-core/middlewares/length/index.js");
/* harmony import */ var _quantifiers_expand_quantifiers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quantifiers/expand-quantifiers */ "./src/flex-mask-core/middlewares/quantifiers/expand-quantifiers.js");







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

/***/ "./src/flex-mask-core/middlewares/postfix/apply-postfix.js":
/*!*****************************************************************!*\
  !*** ./src/flex-mask-core/middlewares/postfix/apply-postfix.js ***!
  \*****************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var applyPostfix = function applyPostfix(context) {
  context.value = context.value ? "".concat(context.value).concat(context.postfix) : context.value;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyPostfix);

/***/ }),

/***/ "./src/flex-mask-core/middlewares/postfix/index.js":
/*!*********************************************************!*\
  !*** ./src/flex-mask-core/middlewares/postfix/index.js ***!
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
/* harmony import */ var _postfix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postfix */ "./src/flex-mask-core/middlewares/postfix/postfix.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_postfix__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/flex-mask-core/middlewares/postfix/postfix.js":
/*!***********************************************************!*\
  !*** ./src/flex-mask-core/middlewares/postfix/postfix.js ***!
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
/* harmony import */ var _remove_postfix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-postfix */ "./src/flex-mask-core/middlewares/postfix/remove-postfix.js");
/* harmony import */ var _apply_postfix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-postfix */ "./src/flex-mask-core/middlewares/postfix/apply-postfix.js");



var removeCmd = function removeCmd(postfixWithCmd) {
  return postfixWithCmd.slice(2, postfixWithCmd.length - 1);
};

var Postfix = function Postfix(context) {
  var _maskStr$match, _maskStr;

  var postfix = '';
  var maskStr = context.stringMask;
  var postfixWithCmdArray = (_maskStr$match = (_maskStr = maskStr) === null || _maskStr === void 0 ? void 0 : _maskStr.match(/:\][^;]+;/)) !== null && _maskStr$match !== void 0 ? _maskStr$match : [];
  var hasPostfix = postfixWithCmdArray.length > 0;

  if (hasPostfix) {
    var postfixWithCmd = postfixWithCmdArray[0];
    postfix = removeCmd(postfixWithCmd);
    var start = postfixWithCmdArray['index'];
    maskStr = maskStr.slice(start + postfixWithCmd.length, maskStr.length);
  }

  context.postfix = postfix;
  context.stringMask = maskStr;
  context.beforeExec.push(_remove_postfix__WEBPACK_IMPORTED_MODULE_0__.default);
  context.afterExec.push(_apply_postfix__WEBPACK_IMPORTED_MODULE_1__.default);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Postfix);

/***/ }),

/***/ "./src/flex-mask-core/middlewares/postfix/remove-postfix.js":
/*!******************************************************************!*\
  !*** ./src/flex-mask-core/middlewares/postfix/remove-postfix.js ***!
  \******************************************************************/
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var removePostfix = function removePostfix(context) {
  console.log(_objectSpread({}, context));
  context.value = new RegExp("".concat((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_0__.escapeCharsFn)(context.postfix), "$")).test(context.value) ? context.value.slice(0, context.value.length - context.postfix.length) : context.value;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removePostfix);

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



var removeCmd = function removeCmd(prefixWithCmd) {
  return prefixWithCmd.slice(2, prefixWithCmd.length - 1);
};

var Prefix = function Prefix(context) {
  var _maskStr$match, _maskStr;

  var prefix = '';
  var maskStr = context.stringMask;
  var prefixWithCmdArray = (_maskStr$match = (_maskStr = maskStr) === null || _maskStr === void 0 ? void 0 : _maskStr.match(/:\[[^;]+;/)) !== null && _maskStr$match !== void 0 ? _maskStr$match : [];
  var hasPrefix = prefixWithCmdArray.length > 0;

  if (hasPrefix) {
    var prefixWithCmd = prefixWithCmdArray[0];
    prefix = removeCmd(prefixWithCmd);
    var start = prefixWithCmdArray['index'];
    maskStr = maskStr.slice(start + prefixWithCmd.length, maskStr.length);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvYXBpL2NyZWF0ZS1tYXNrLWFwcGxpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL2hlbHBlcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWFzay1jb21waWxlci9maWx0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvZmlsdGVyL21ha2UtZmlsdGVyLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL2ZpbHRlci90cnVjYXRlLXZhbHVlLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL2luZGV4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2stY29tcGlsZXIuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvbWFzay9hcHBseS1tYXNrLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2svZXh0cmFjdC1tYXNrLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvbWFzay9tYXNrLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2svcmVtb3ZlLW1hc2suanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvdG9rZW5zL2V4dHJhY3QtdG9rZW5zLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL3Rva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWFzay1jb21waWxlci90b2tlbnMvdG9rZW5zLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLXJ1bnRpbWUvbWFzay1ydW50aW1lLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9kaXJlY3Rpb24vZGlyZWN0aW9uLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9kaXJlY3Rpb24vZXh0cmFjdC1kaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21pZGRsZXdhcmVzL2RpcmVjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21pZGRsZXdhcmVzL2xlbmd0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvbGVuZ3RoL2xlbmd0aC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvcG9zdGZpeC9hcHBseS1wb3N0Zml4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9wb3N0Zml4L2luZGV4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9wb3N0Zml4L3Bvc3RmaXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21pZGRsZXdhcmVzL3Bvc3RmaXgvcmVtb3ZlLXBvc3RmaXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21pZGRsZXdhcmVzL3ByZWZpeC9hcHBseS1wcmVmaXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21pZGRsZXdhcmVzL3ByZWZpeC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvcHJlZml4L3ByZWZpeC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvcHJlZml4L3JlbW92ZS1wcmVmaXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21pZGRsZXdhcmVzL3F1YW50aWZpZXJzL2V4cGFuZC1xdWFudGlmaWVycy5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZsZXgtbWFzay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJjcmVhdGVNYXNrQ29udGV4dCIsIm1hc2tTdHIiLCJzdHJpbmdNYXNrIiwiYmVmb3JlRXhlYyIsImFmdGVyRXhlYyIsImV4ZWMiLCJtYWtlQXBwbGljYXRvciIsImNvbnRleHQiLCJtYXNrQ29tcGlsZXIiLCJNYXNrQ29tcGlsZXIiLCJ1c2UiLCJRdWFudGlmaWVycyIsIlByZWZpeCIsIlBvc3RmaXgiLCJEaXJlY3Rpb24iLCJMZW5ndGgiLCJjb21waWxlIiwibWFza1J1blRpbWUiLCJNYXNrUnVudGltZSIsIm1hc2tBcHBsaWNhdG9yIiwibmV3VmFsdWUiLCJ2YWx1ZSIsInByb3RvdHlwZSIsIm1hc2siLCJkaXJlY3Rpb24iLCJwcmVmaXgiLCJwb3N0Zml4IiwibWF4TGltaXQiLCJmaWx0ZXIiLCJrZXlDaGFyc0VudW0iLCJPYmplY3QiLCJmcmVlemUiLCJPTkxZX05VTUJFUiIsIk9OTFlfQ0hBUiIsIkNIQVJfTlVNQkVSIiwiQ0hBUl9OVU1CRVJfU1BBQ0UiLCJrZXlDaGFycyIsImtleXMiLCJtYXAiLCJrZXkiLCJyZWdFeFRva2VucyIsImVzY2FwZUNoYXJzIiwiZXNjYXBlQ2hhcnNGbiIsImNoYXJzIiwiQXJyYXkiLCJmcm9tIiwiY2hhciIsImpvaW4iLCJGaWx0ZXIiLCJtYWtlRmlsdGVyIiwidG9rZW5zIiwidW5zaGlmdCIsInRydWNhdGVWYWx1ZSIsImFjY0ZpbHRlciIsImkiLCJsZW5ndGgiLCJrZXlDaGFyIiwicHVzaCIsInJlZ0V4IiwiZW5kIiwic3RhcnQiLCJSZWdFeHAiLCJleGNlZWRlZCIsInN1YnN0cmluZyIsInN0YWNrIiwiVG9rZW5zIiwiTWFzayIsImFwcGx5TWFzayIsInZhbHVlV2l0aE1hc2siLCJ2YWx1ZUFyciIsInNwbGljZSIsInRva2VuIiwibGFzdFBvc2l0aW9uIiwiaW52ZXJ0ZWRQb3NpdGlvbiIsImluc2VydFBvcyIsImV4dHJhY3RNYXNrIiwicmVtb3ZlTWFzayIsInRlc3QiLCJleHRyYWN0VG9rZW5zIiwiYXJyYXlNYXNrIiwiaXNUb2tlbiIsInByZXZDaGFyIiwiaXRlbSIsImN0eHQiLCJleGVjQmVmb3JlIiwiZXhlY0FmdGVyIiwiYWRkQmVmb3JlRXhlYyIsImZuIiwiYWRkQWZ0ZXJFeGVjIiwiZXh0cmFjdERpcmVjdGlvbiIsIl9tYXNrU3RyIiwibWFza1N0cldpdGhSaWdodERpcmVjdGlvbiIsIm1hdGNoIiwic2xpY2UiLCJtYXNrU3RyV2l0aExlZnREaXJlY3Rpb24iLCJhcHBseVBvc3RmaXgiLCJyZW1vdmVDbWQiLCJwb3N0Zml4V2l0aENtZCIsInBvc3RmaXhXaXRoQ21kQXJyYXkiLCJoYXNQb3N0Zml4IiwicmVtb3ZlUG9zdGZpeCIsImNvbnNvbGUiLCJsb2ciLCJhcHBseVByZWZpeCIsInByZWZpeFdpdGhDbWQiLCJwcmVmaXhXaXRoQ21kQXJyYXkiLCJoYXNQcmVmaXgiLCJyZW1vdmVQcmVmaXgiLCJsZW5ndGhXaXRoQ21kIiwidG9rZW5XaXRoQ21kIiwibWFrZUV4cGFuZGVkVG9rZW4iLCJleHBhbmRlZFRva2VuIiwiZ2V0TGVuZ3RoV2l0aENtZCIsImdldFB1cmVMZW5ndGgiLCJnZXRUb2tlbldpdGhDbWQiLCJnZXRQdXJlVG9rZW4iLCJnZXRTdGFydCIsImluZGV4IiwiZ2V0RGVsIiwiaW5zZXJ0RXhwYW5kZWRUb2tlbkluU3RyaW5nTWFzayIsImRlbCIsImV4cGFuZFF1YW50aWZpZXJzIiwicnVubmVyIiwibmV3U3RyaW5nTWFzayIsImNyZWF0ZU1hc2tBcHBsaWNhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsT0FBRCxFQUFhO0FBQ3JDLFNBQU87QUFDTEMsY0FBVSxFQUFFRCxPQURQO0FBRUxFLGNBQVUsRUFBRSxFQUZQO0FBR0xDLGFBQVMsRUFBRSxFQUhOO0FBSUxDLFFBQUksRUFBRTtBQUpELEdBQVA7QUFNRCxDQVBEOztBQVNBLElBQU1DLGNB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QTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFza0NvbXBpbGVyIGZyb20gJy4uL21hc2stY29tcGlsZXInXG5pbXBvcnQgTWFza1J1bnRpbWUgZnJvbSAnLi4vbWFzay1ydW50aW1lL21hc2stcnVudGltZSdcbmltcG9ydCB7IFF1YW50aWZpZXJzLCBEaXJlY3Rpb24sIFByZWZpeCwgUG9zdGZpeCwgTGVuZ3RoIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMnXG5cbmNvbnN0IGNyZWF0ZU1hc2tDb250ZXh0ID0gKG1hc2tTdHIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdHJpbmdNYXNrOiBtYXNrU3RyLFxuICAgIGJlZm9yZUV4ZWM6IFtdLFxuICAgIGFmdGVyRXhlYzogW10sXG4gICAgZXhlYzogbnVsbFxuICB9XG59XG5cbmNvbnN0IG1ha2VBcHBsaWNhdG9yID0gKG1hc2tTdHIpID0+IHtcblxuICBjb25zdCBjb250ZXh0ID0gY3JlYXRlTWFza0NvbnRleHQobWFza1N0cilcblxuICBjb25zdCBtYXNrQ29tcGlsZXIgPSBNYXNrQ29tcGlsZXIoKVxuICBcbiAgbWFza0NvbXBpbGVyLnVzZShRdWFudGlmaWVycylcbiAgbWFza0NvbXBpbGVyLnVzZShQcmVmaXgpXG4gIG1hc2tDb21waWxlci51c2UoUG9zdGZpeClcbiAgbWFza0NvbXBpbGVyLnVzZShEaXJlY3Rpb24pXG4gIG1hc2tDb21waWxlci51c2UoTGVuZ3RoKVxuICBcbiAgbWFza0NvbXBpbGVyLmNvbXBpbGUoY29udGV4dClcbiAgXG4gIGNvbnN0IG1hc2tSdW5UaW1lID0gTWFza1J1bnRpbWUoY29udGV4dClcblxuICBjb25zdCBtYXNrQXBwbGljYXRvciA9IChuZXdWYWx1ZSkgPT4ge1xuICAgIFxuICAgIGNvbnRleHQudmFsdWUgPSBuZXdWYWx1ZVxuXG4gICAgbWFza1J1blRpbWUuZXhlYyhjb250ZXh0KVxuXG4gICAgcmV0dXJuIHsgLi4uY29udGV4dCB9XG4gIH1cblxuICBtYXNrQXBwbGljYXRvci5wcm90b3R5cGUubWFzayA9IGNvbnRleHQubWFza1xuICBtYXNrQXBwbGljYXRvci5wcm90b3R5cGUuZGlyZWN0aW9uID0gY29udGV4dC5kaXJlY3Rpb25cbiAgbWFza0FwcGxpY2F0b3IucHJvdG90eXBlLnByZWZpeCA9IGNvbnRleHQucHJlZml4XG4gIG1hc2tBcHBsaWNhdG9yLnByb3RvdHlwZS5wb3N0Zml4ID0gY29udGV4dC5wb3N0Zml4XG4gIG1hc2tBcHBsaWNhdG9yLnByb3RvdHlwZS5tYXhMaW1pdCA9IGNvbnRleHQubWF4TGltaXRcbiAgbWFza0FwcGxpY2F0b3IucHJvdG90eXBlLmZpbHRlciA9IGNvbnRleHQuZmlsdGVyXG4gIFxuICByZXR1cm4gbWFza0FwcGxpY2F0b3Jcbn0gXG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VBcHBsaWNhdG9yXG4iLCJleHBvcnQgY29uc3Qga2V5Q2hhcnNFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gIE9OTFlfTlVNQkVSOiAnOScsXG4gIE9OTFlfQ0hBUjogJ0EnLFxuICBDSEFSX05VTUJFUjogJyonLFxuICBDSEFSX05VTUJFUl9TUEFDRTogJ18nXG59KVxuXG5leHBvcnQgY29uc3Qga2V5Q2hhcnMgPSBPYmplY3Qua2V5cyhrZXlDaGFyc0VudW0pLm1hcChrZXkgPT4ga2V5Q2hhcnNFbnVtW2tleV0pXG5cbmV4cG9ydCBjb25zdCByZWdFeFRva2VucyA9IE9iamVjdC5mcmVlemUoe1xuICAnOSc6ICdbMC05XScsIFxuICAnQSc6ICdbQS1aYS16w6HDoMOiw6PDqcOow6rDrcOvw7PDtMO1w7bDusOnw7HDgcOAw4LDg8OJw4jDjcOPw5PDlMOVw5bDmsOHw5FdJywgXG4gICcqJzogJ1tBLVphLXrDocOgw6LDo8Opw6jDqsOtw6/Ds8O0w7XDtsO6w6fDscOBw4DDgsODw4nDiMONw4/Dk8OUw5XDlsOaw4fDkTAtOV0nLFxuICAnXyc6ICdbQS1aYS16w6HDoMOiw6PDqcOow6rDrcOvw7PDtMO1w7bDusOnw7HDgcOAw4LDg8OJw4jDjcOPw5PDlMOVw5bDmsOHw5EgMC05XScsXG59KVxuXG5leHBvcnQgY29uc3QgZXNjYXBlQ2hhcnMgPSBPYmplY3QuZnJlZXplKHtcbiAgJy8nOiAnXFwvJyxcbiAgJy4nOiAnXFxcXC4nLFxuICAnLSc6ICdcXFxcLScsXG4gICcoJzogJ1xcXFwoJyxcbiAgJyknOiAnXFxcXCknLFxuICAnKic6ICdcXFxcKicsXG4gICcrJzogJ1xcXFwrJyxcbiAgJ14nOiAnXFxcXF4nLFxuICAnJCc6ICdcXFxcJCcsXG4gICdbJzogJ1xcXFxbJyxcbiAgJ10nOiAnXFxcXF0nLFxuICAneyc6ICdcXFxceycsXG4gICd9JzogJ1xcXFx9Jyxcbn0pXG5cbmV4cG9ydCBjb25zdCBlc2NhcGVDaGFyc0ZuID0gKGNoYXJzKSA9PiB7XG4gIHJldHVybiBBcnJheS5mcm9tKGNoYXJzKS5tYXAoY2hhciA9PiBlc2NhcGVDaGFyc1tjaGFyXSB8fCBjaGFyKS5qb2luKCcnKVxufVxuICIsImltcG9ydCBtYWtlRmlsdGVyIGZyb20gJy4vbWFrZS1maWx0ZXInXG5pbXBvcnQgdHJ1Y2F0ZVZhbHVlIGZyb20gJy4vdHJ1Y2F0ZS12YWx1ZSdcblxuY29uc3QgRmlsdGVyID0gY29udGV4dCA9PiB7XG4gIFxuICBjb250ZXh0LmZpbHRlciA9IG1ha2VGaWx0ZXIoY29udGV4dC50b2tlbnMpXG5cbiAgY29udGV4dC5hZnRlckV4ZWMudW5zaGlmdCh0cnVjYXRlVmFsdWUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclxuIiwiaW1wb3J0IEZpbHRlciBmcm9tICcuL2ZpbHRlcidcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyXG4iLCJjb25zdCBtYWtlRmlsdGVyID0gKG1hc2spID0+IHtcbiAgbGV0IGZpbHRlciA9IFtdXG4gIGxldCBhY2NGaWx0ZXIgPSAnJ1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgIGlmKG1hc2tbaV0ua2V5Q2hhcikge1xuICAgICAgZmlsdGVyLnB1c2goYF4ke2FjY0ZpbHRlcn0ke21hc2tbaV0ucmVnRXh9ezAsJHttYXNrW2ldLmVuZCAtIG1hc2tbaV0uc3RhcnR9fSRgKVxuICAgICAgYWNjRmlsdGVyID0gYCR7YWNjRmlsdGVyfSR7bWFza1tpXS5yZWdFeH17JHttYXNrW2ldLmVuZCAtIG1hc2tbaV0uc3RhcnR9fWBcbiAgICB9IGVsc2Uge1xuICAgICAgYWNjRmlsdGVyID0gYCR7YWNjRmlsdGVyfSR7bWFza1tpXS5yZWdFeH1gXG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgUmVnRXhwKGZpbHRlci5qb2luKCd8JykpXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VGaWx0ZXJcbiIsImNvbnN0IHRydWNhdGVWYWx1ZSA9IGNvbnRleHQgPT4ge1xuICBjb25zdCBleGNlZWRlZCA9IGNvbnRleHQudmFsdWUubGVuZ3RoID4gY29udGV4dC5tYXhMaW1pdFxuICBjb25zdCBzdGFydCA9IGNvbnRleHQuZGlyZWN0aW9uID09PSAnbGVmdCcgPyBjb250ZXh0LnZhbHVlLmxlbmd0aCAtIGNvbnRleHQubWF4TGltaXQgOiAwXG4gIGNvbnN0IGVuZCA9IGNvbnRleHQuZGlyZWN0aW9uID09PSAnbGVmdCcgPyBjb250ZXh0LnZhbHVlLmxlbmd0aCA6IGNvbnRleHQubWF4TGltaXRcbiAgY29udGV4dC52YWx1ZSA9IGV4Y2VlZGVkID8gY29udGV4dC52YWx1ZS5zdWJzdHJpbmcoc3RhcnQsIGVuZCkgOiBjb250ZXh0LnZhbHVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRydWNhdGVWYWx1ZVxuIiwiaW1wb3J0IE1hc2tDb21waWxlciBmcm9tICcuL21hc2stY29tcGlsZXInXG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tDb21waWxlciIsImltcG9ydCBUb2tlbnMgZnJvbSAnLi90b2tlbnMnXG5pbXBvcnQgTWFzayBmcm9tICcuL21hc2snXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vZmlsdGVyJ1xuXG5jb25zdCBNYXNrQ29tcGlsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHN0YWNrID0gW11cblxuICBjb25zdCB1c2UgPSAoLi4ubWlkZGxld2FyZXMpID0+IHtcbiAgICBzdGFjay5wdXNoKC4uLm1pZGRsZXdhcmVzKVxuICB9XG5cbiAgY29uc3QgY29tcGlsZSA9IChjb250ZXh0KSA9PiB7XG4gICAgXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdGFja1tpXShjb250ZXh0KVxuICAgIH1cblxuICAgIFRva2Vucyhjb250ZXh0KVxuICAgIEZpbHRlcihjb250ZXh0KVxuICAgIE1hc2soY29udGV4dClcbiAgfVxuXG4gIHJldHVybiB7IHVzZSwgY29tcGlsZSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tDb21waWxlclxuIiwiY29uc3QgYXBwbHlNYXNrID0gKGNvbnRleHQpID0+IHtcbiAgaWYoY29udGV4dC5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICBsZXQgdmFsdWVXaXRoTWFzayA9IGNvbnRleHQudmFsdWUgXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29udGV4dC5tYXNrLmxlbmd0aDsgaSsrKSB7XG4gIFxuICAgICAgaWYodmFsdWVXaXRoTWFzay5sZW5ndGggPiBjb250ZXh0Lm1hc2tbaV0uc3RhcnQpIHtcbiAgXG4gICAgICAgIGNvbnN0IHZhbHVlQXJyID0gQXJyYXkuZnJvbSh2YWx1ZVdpdGhNYXNrKVxuICBcbiAgICAgICAgdmFsdWVBcnIuc3BsaWNlKGNvbnRleHQubWFza1tpXS5zdGFydCwgMCwgY29udGV4dC5tYXNrW2ldLnRva2VuKVxuICAgICAgICBcbiAgICAgICAgdmFsdWVXaXRoTWFzayA9IHZhbHVlQXJyLmpvaW4oJycpXG4gICAgICB9XG4gICAgfVxuICBcbiAgICBjb250ZXh0LnZhbHVlID0gdmFsdWVXaXRoTWFza1xuICB9XG5cbiAgaWYoY29udGV4dC5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgIGxldCB2YWx1ZVdpdGhNYXNrID0gY29udGV4dC52YWx1ZSBcbiAgICBjb25zdCB7IG1heExpbWl0IH0gPSBjb250ZXh0XG5cbiAgICBmb3IobGV0IGkgPSBjb250ZXh0Lm1hc2subGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGxhc3RQb3NpdGlvbiA9IG1heExpbWl0IC0gMVxuICAgICAgY29uc3QgaW52ZXJ0ZWRQb3NpdGlvbiA9IGxhc3RQb3NpdGlvbiAtIGNvbnRleHQubWFza1tpXS5zdGFydFxuXG4gICAgICBpZih2YWx1ZVdpdGhNYXNrLmxlbmd0aCA+IGludmVydGVkUG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgdmFsdWVBcnIgPSBBcnJheS5mcm9tKHZhbHVlV2l0aE1hc2spXG4gICAgICAgIGNvbnN0IGluc2VydFBvcyA9IHZhbHVlV2l0aE1hc2subGVuZ3RoIC0gaW52ZXJ0ZWRQb3NpdGlvblxuICAgICAgICB2YWx1ZUFyci5zcGxpY2UoaW5zZXJ0UG9zLCAwLCBjb250ZXh0Lm1hc2tbaV0udG9rZW4pXG4gICAgICAgIFxuICAgICAgICB2YWx1ZVdpdGhNYXNrID0gdmFsdWVBcnIuam9pbignJylcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIGNvbnRleHQudmFsdWUgPSB2YWx1ZVdpdGhNYXNrXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwbHlNYXNrXG4iLCJjb25zdCBleHRyYWN0TWFzayA9IHRva2VucyA9PiB7XG4gIHJldHVybiB0b2tlbnMuZmlsdGVyKHRva2VuID0+ICF0b2tlbi5rZXlDaGFyKS5tYXAodG9rZW4gPT4gKHtcbiAgICB0b2tlbjogdG9rZW4udG9rZW4sXG4gICAgc3RhcnQ6IHRva2VuLnN0YXJ0LFxuICB9KSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdE1hc2tcbiIsImltcG9ydCBNYXNrIGZyb20gJy4vbWFzaydcblxuZXhwb3J0IGRlZmF1bHQgTWFzayIsImltcG9ydCByZW1vdmVNYXNrIGZyb20gJy4vcmVtb3ZlLW1hc2snXG5pbXBvcnQgYXBwbHlNYXNrIGZyb20gJy4vYXBwbHktbWFzaydcbmltcG9ydCBleHRyYWN0TWFzayBmcm9tICcuL2V4dHJhY3QtbWFzaydcblxuY29uc3QgTWFzayA9IChjb250ZXh0KSA9PiB7XG4gIGNvbnRleHQubWFzayA9IGV4dHJhY3RNYXNrKGNvbnRleHQudG9rZW5zKVxuXG4gIGNvbnRleHQuYmVmb3JlRXhlYy5wdXNoKHJlbW92ZU1hc2spXG5cbiAgY29udGV4dC5leGVjID0gYXBwbHlNYXNrXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tcbiIsImltcG9ydCB7IHJlZ0V4VG9rZW5zIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcblxuY29uc3QgcmVtb3ZlTWFzayA9IChjb250ZXh0KSA9PiB7XG4gIGNvbnRleHQudmFsdWUgPSBBcnJheS5mcm9tKGNvbnRleHQudmFsdWUpLmZpbHRlcihjaGFyID0+IChuZXcgUmVnRXhwKGBeJHtyZWdFeFRva2Vuc1snKiddfWApKS50ZXN0KGNoYXIpKS5qb2luKCcnKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVNYXNrXG4iLCJpbXBvcnQgeyBrZXlDaGFycywgcmVnRXhUb2tlbnMsIGVzY2FwZUNoYXJzRm4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuXG5jb25zdCBleHRyYWN0VG9rZW5zID0gKHN0cmluZ01hc2spID0+IHtcblx0Y29uc3QgYXJyYXlNYXNrID0gQXJyYXkuZnJvbShzdHJpbmdNYXNrKVxuXHRsZXQgdG9rZW4gPSB7XG4gICAgdG9rZW46ICcnLFxuICAgIHN0YXJ0OiAwXG5cdH1cblx0Y29uc3QgdG9rZW5zID0gW11cbiAgbGV0IGlzVG9rZW4gPSBmYWxzZVxuICBsZXQgcHJldkNoYXIgPSAnJ1xuXHRmb3IobGV0IGkgPSAwOyBpIDw9IGFycmF5TWFzay5sZW5ndGg7IGkrKykge1xuXHRcdGlmKCFrZXlDaGFycy5pbmNsdWRlcyhhcnJheU1hc2tbaV0pICYmIGkgIT09IGFycmF5TWFzay5sZW5ndGgpIHtcblx0XHRcdGlmKCFpc1Rva2VuKSB7XG4gICAgICAgIHRva2VuLmVuZCA9IGlcbiAgICAgICAgdG9rZW4ua2V5Q2hhciA9IHRydWVcbiAgICAgICAgdG9rZW4ucmVnRXggPSB0b2tlbi5rZXlDaGFyID8gYCR7cmVnRXhUb2tlbnNbdG9rZW4udG9rZW5bMF1dfWAgOiBlc2NhcGVDaGFyc0ZuKHRva2VuLnRva2VuKVxuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbilcbiAgICAgICAgdG9rZW4gPSB7XG4gICAgICAgICAgdG9rZW46ICcnLFxuICAgICAgICAgIHN0YXJ0OiBpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlzVG9rZW4gPSB0cnVlXG4gICAgICB0b2tlbi50b2tlbiArPSBhcnJheU1hc2tbaV1cblx0XHR9IGVsc2Uge1xuICAgICAgaWYoaXNUb2tlbiB8fCAoaSA+IDAgJiYgYXJyYXlNYXNrW2ldICE9PSBwcmV2Q2hhcikpIHtcbiAgICAgICAgdG9rZW4uZW5kID0gaVxuICAgICAgICB0b2tlbi5rZXlDaGFyID0gaXNUb2tlbiA/IGZhbHNlIDogdHJ1ZVxuICAgICAgICB0b2tlbi5yZWdFeCA9IHRva2VuLmtleUNoYXIgPyBgJHtyZWdFeFRva2Vuc1t0b2tlbi50b2tlblswXV19YCA6IGVzY2FwZUNoYXJzRm4odG9rZW4udG9rZW4pXG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKVxuICAgICAgICB0b2tlbiA9IHtcbiAgICAgICAgICB0b2tlbjogJycsXG4gICAgICAgICAgc3RhcnQ6IGlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXNUb2tlbiA9IGZhbHNlXG4gICAgICB0b2tlbi50b2tlbiArPSBhcnJheU1hc2tbaV1cbiAgICB9XG4gICAgcHJldkNoYXIgPSBhcnJheU1hc2tbaV1cbiAgfVxuXHRyZXR1cm4gdG9rZW5zLmZpbHRlcihpdGVtID0+IGl0ZW0udG9rZW4gIT09ICcnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBleHRyYWN0VG9rZW5zXG4iLCJpbXBvcnQgVG9rZW5zIGZyb20gJy4vdG9rZW5zJ1xuXG5leHBvcnQgZGVmYXVsdCBUb2tlbnNcbiIsImltcG9ydCBleHRyYWN0VG9rZW5zIGZyb20gJy4vZXh0cmFjdC10b2tlbnMnXG5cbmNvbnN0IFRva2VucyA9IGNvbnRleHQgPT4ge1xuICBjb250ZXh0LnRva2VucyA9IGV4dHJhY3RUb2tlbnMoY29udGV4dC5zdHJpbmdNYXNrKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2tlbnMiLCJjb25zdCBNYXNrUnVudGltZSA9IChjdHh0KSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSBjdHh0XG5cbiAgY29uc3QgZXhlY0JlZm9yZSA9ICgpID0+IHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY29udGV4dC5iZWZvcmVFeGVjLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb250ZXh0LmJlZm9yZUV4ZWNbaV0oY29udGV4dClcbiAgICB9XG4gIH1cblxuICBjb25zdCBleGVjQWZ0ZXIgPSAoKSA9PiB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbnRleHQuYWZ0ZXJFeGVjLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb250ZXh0LmFmdGVyRXhlY1tpXShjb250ZXh0KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFkZEJlZm9yZUV4ZWMgPSAoZm4pID0+IHtcbiAgICBjb250ZXh0LmJlZm9yZUV4ZWMucHVzaChmbilcbiAgfVxuXG4gIGNvbnN0IGFkZEFmdGVyRXhlYyA9IChmbikgPT4ge1xuICAgIGNvbnRleHQuYWZ0ZXJFeGVjLnB1c2goZm4pXG4gIH1cblxuICBjb25zdCBleGVjID0gKCkgPT4ge1xuICAgIGV4ZWNCZWZvcmUoKVxuICAgIGNvbnRleHQuZXhlYyhjb250ZXh0KVxuICAgIGV4ZWNBZnRlcigpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbnRleHQsXG4gICAgYWRkQmVmb3JlRXhlYyxcbiAgICBhZGRBZnRlckV4ZWMsXG4gICAgZXhlYyxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXNrUnVudGltZVxuIiwiaW1wb3J0IGV4dHJhY3REaXJlY3Rpb24gZnJvbSAnLi9leHRyYWN0LWRpcmVjdGlvbidcblxuY29uc3QgRGlyZWN0aW9uID0gKGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBkaXJlY3Rpb24sIHN0cmluZ01hc2sgfSA9IGV4dHJhY3REaXJlY3Rpb24oY29udGV4dC5zdHJpbmdNYXNrKVxuICBjb250ZXh0LmRpcmVjdGlvbiA9IGRpcmVjdGlvblxuICBjb250ZXh0LnN0cmluZ01hc2sgPSBzdHJpbmdNYXNrXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdGlvblxuIiwiY29uc3QgZXh0cmFjdERpcmVjdGlvbiA9IChtYXNrU3RyKSA9PiB7XG4gIGxldCBkaXJlY3Rpb24gPSAncmlnaHQnXG4gIGxldCBfbWFza1N0ciA9IG1hc2tTdHJcblxuICBjb25zdCBtYXNrU3RyV2l0aFJpZ2h0RGlyZWN0aW9uID0gX21hc2tTdHI/Lm1hdGNoKC9cXD5cXD4uKy8pID8/IFtdXG4gIGlmIChtYXNrU3RyV2l0aFJpZ2h0RGlyZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICBkaXJlY3Rpb24gPSAncmlnaHQnXG4gICAgX21hc2tTdHIgPSBtYXNrU3RyV2l0aFJpZ2h0RGlyZWN0aW9uWzBdLnNsaWNlKDIsIG1hc2tTdHJXaXRoUmlnaHREaXJlY3Rpb25bMF0ubGVuZ3RoKVxuICB9XG5cbiAgY29uc3QgbWFza1N0cldpdGhMZWZ0RGlyZWN0aW9uID0gX21hc2tTdHI/Lm1hdGNoKC9cXDxcXDwuKy8pID8/IFtdXG4gIGlmIChtYXNrU3RyV2l0aExlZnREaXJlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgIGRpcmVjdGlvbiA9ICdsZWZ0J1xuICAgIF9tYXNrU3RyID0gbWFza1N0cldpdGhMZWZ0RGlyZWN0aW9uWzBdLnNsaWNlKDIsIG1hc2tTdHJXaXRoTGVmdERpcmVjdGlvblswXS5sZW5ndGgpXG4gIH1cbiAgXG4gIHJldHVybiB7XG4gICAgZGlyZWN0aW9uLFxuICAgIHN0cmluZ01hc2s6IF9tYXNrU3RyXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdERpcmVjdGlvblxuIiwiaW1wb3J0IERpcmVjdGlvbiBmcm9tICcuL2RpcmVjdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgRGlyZWN0aW9uXG4iLCJpbXBvcnQgRGlyZWN0aW9uIGZyb20gJy4vZGlyZWN0aW9uJ1xuaW1wb3J0IFByZWZpeCBmcm9tICcuL3ByZWZpeCdcbmltcG9ydCBQb3N0Zml4IGZyb20gJy4vcG9zdGZpeCdcbmltcG9ydCBMZW5ndGggZnJvbSAnLi9sZW5ndGgnXG5pbXBvcnQgUXVhbnRpZmllcnMgZnJvbSAnLi9xdWFudGlmaWVycy9leHBhbmQtcXVhbnRpZmllcnMnXG5cbmV4cG9ydCB7XG4gIERpcmVjdGlvbixcbiAgUHJlZml4LFxuICBQb3N0Zml4LFxuICBRdWFudGlmaWVycyxcbiAgTGVuZ3RoXG59ICIsImltcG9ydCBMZW5ndGggZnJvbSAnLi9sZW5ndGgnXG5cbmV4cG9ydCBkZWZhdWx0IExlbmd0aFxuIiwiY29uc3QgTGVuZ3RoID0gY29udGV4dCA9PiB7XG4gIGNvbnRleHQubWF4TGltaXQgPSBjb250ZXh0LnN0cmluZ01hc2subGVuZ3RoXG59XG5cbmV4cG9ydCBkZWZhdWx0IExlbmd0aCIsImNvbnN0IGFwcGx5UG9zdGZpeCA9IChjb250ZXh0KSA9PiB7XG4gIGNvbnRleHQudmFsdWUgPSBjb250ZXh0LnZhbHVlID8gYCR7Y29udGV4dC52YWx1ZX0ke2NvbnRleHQucG9zdGZpeH1gIDogY29udGV4dC52YWx1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBseVBvc3RmaXhcbiAgIiwiaW1wb3J0IFBvc3RmaXggZnJvbSAnLi9wb3N0Zml4J1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0Zml4XG4iLCJpbXBvcnQgcmVtb3ZlUG9zdGZpeCBmcm9tICcuL3JlbW92ZS1wb3N0Zml4J1xuaW1wb3J0IGFwcGx5UG9zdGZpeCBmcm9tICcuL2FwcGx5LXBvc3RmaXgnXG5cbmNvbnN0IHJlbW92ZUNtZCA9IHBvc3RmaXhXaXRoQ21kID0+IHBvc3RmaXhXaXRoQ21kLnNsaWNlKDIsIHBvc3RmaXhXaXRoQ21kLmxlbmd0aCAtIDEpXG5cbmNvbnN0IFBvc3RmaXggPSBjb250ZXh0ID0+IHtcbiAgbGV0IHBvc3RmaXggPSAnJ1xuICBsZXQgbWFza1N0ciA9IGNvbnRleHQuc3RyaW5nTWFza1xuXG4gIGNvbnN0IHBvc3RmaXhXaXRoQ21kQXJyYXkgPSBtYXNrU3RyPy5tYXRjaCgvOlxcXVteO10rOy8pID8/IFtdXG4gIGNvbnN0IGhhc1Bvc3RmaXggPSBwb3N0Zml4V2l0aENtZEFycmF5Lmxlbmd0aCA+IDBcblxuICBpZiAoaGFzUG9zdGZpeCkge1xuICAgIGNvbnN0IHBvc3RmaXhXaXRoQ21kID0gcG9zdGZpeFdpdGhDbWRBcnJheVswXVxuICAgIHBvc3RmaXggPSByZW1vdmVDbWQocG9zdGZpeFdpdGhDbWQpXG4gICAgY29uc3Qgc3RhcnQgPSBwb3N0Zml4V2l0aENtZEFycmF5WydpbmRleCddXG4gICAgbWFza1N0ciA9IG1hc2tTdHIuc2xpY2Uoc3RhcnQgKyBwb3N0Zml4V2l0aENtZC5sZW5ndGgsIG1hc2tTdHIubGVuZ3RoKVxuICB9XG5cbiAgY29udGV4dC5wb3N0Zml4ID0gcG9zdGZpeFxuICBjb250ZXh0LnN0cmluZ01hc2sgPSBtYXNrU3RyXG4gIGNvbnRleHQuYmVmb3JlRXhlYy5wdXNoKHJlbW92ZVBvc3RmaXgpXG4gIGNvbnRleHQuYWZ0ZXJFeGVjLnB1c2goYXBwbHlQb3N0Zml4KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Zml4XG4iLCJpbXBvcnQgeyBlc2NhcGVDaGFyc0ZuIH0gZnJvbSAnLi4vLi4vaGVscGVycy91dGlscydcblxuY29uc3QgcmVtb3ZlUG9zdGZpeCA9IChjb250ZXh0KSA9PiB7XG4gIGNvbnNvbGUubG9nKHsgLi4uY29udGV4dCB9KVxuICBjb250ZXh0LnZhbHVlID0gKG5ldyBSZWdFeHAoYCR7ZXNjYXBlQ2hhcnNGbihjb250ZXh0LnBvc3RmaXgpfSRgKSkudGVzdChjb250ZXh0LnZhbHVlKSBcbiAgICA/IGNvbnRleHQudmFsdWUuc2xpY2UoMCwgY29udGV4dC52YWx1ZS5sZW5ndGggLSBjb250ZXh0LnBvc3RmaXgubGVuZ3RoKSA6IGNvbnRleHQudmFsdWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlUG9zdGZpeFxuIiwiY29uc3QgYXBwbHlQcmVmaXggPSAoY29udGV4dCkgPT4ge1xuICBjb250ZXh0LnZhbHVlID0gY29udGV4dC52YWx1ZSA/IGAke2NvbnRleHQucHJlZml4fSR7Y29udGV4dC52YWx1ZX1gIDogY29udGV4dC52YWx1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBseVByZWZpeFxuICAiLCJpbXBvcnQgUHJlZml4IGZyb20gJy4vcHJlZml4J1xuXG5leHBvcnQgZGVmYXVsdCBQcmVmaXhcbiIsImltcG9ydCByZW1vdmVQcmVmaXggZnJvbSAnLi9yZW1vdmUtcHJlZml4J1xuaW1wb3J0IGFwcGx5UHJlZml4IGZyb20gJy4vYXBwbHktcHJlZml4J1xuXG5jb25zdCByZW1vdmVDbWQgPSBwcmVmaXhXaXRoQ21kID0+IHByZWZpeFdpdGhDbWQuc2xpY2UoMiwgcHJlZml4V2l0aENtZC5sZW5ndGggLSAxKVxuXG5jb25zdCBQcmVmaXggPSBjb250ZXh0ID0+IHtcbiAgbGV0IHByZWZpeCA9ICcnXG4gIGxldCBtYXNrU3RyID0gY29udGV4dC5zdHJpbmdNYXNrXG5cbiAgY29uc3QgcHJlZml4V2l0aENtZEFycmF5ID0gbWFza1N0cj8ubWF0Y2goLzpcXFtbXjtdKzsvKSA/PyBbXVxuICBjb25zdCBoYXNQcmVmaXggPSBwcmVmaXhXaXRoQ21kQXJyYXkubGVuZ3RoID4gMFxuXG4gIGlmIChoYXNQcmVmaXgpIHtcbiAgICBjb25zdCBwcmVmaXhXaXRoQ21kID0gcHJlZml4V2l0aENtZEFycmF5WzBdXG4gICAgcHJlZml4ID0gcmVtb3ZlQ21kKHByZWZpeFdpdGhDbWQpXG4gICAgY29uc3Qgc3RhcnQgPSBwcmVmaXhXaXRoQ21kQXJyYXlbJ2luZGV4J11cbiAgICBtYXNrU3RyID0gbWFza1N0ci5zbGljZShzdGFydCArIHByZWZpeFdpdGhDbWQubGVuZ3RoLCBtYXNrU3RyLmxlbmd0aClcbiAgfVxuXG4gIGNvbnRleHQucHJlZml4ID0gcHJlZml4XG4gIGNvbnRleHQuc3RyaW5nTWFzayA9IG1hc2tTdHJcbiAgY29udGV4dC5iZWZvcmVFeGVjLnB1c2gocmVtb3ZlUHJlZml4KVxuICBjb250ZXh0LmFmdGVyRXhlYy5wdXNoKGFwcGx5UHJlZml4KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVmaXhcbiIsImltcG9ydCB7IGVzY2FwZUNoYXJzRm4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuXG5jb25zdCByZW1vdmVQcmVmaXggPSAoY29udGV4dCkgPT4ge1xuICBjb250ZXh0LnZhbHVlID0gKG5ldyBSZWdFeHAoYF4ke2VzY2FwZUNoYXJzRm4oY29udGV4dC5wcmVmaXgpfWApKS50ZXN0KGNvbnRleHQudmFsdWUpIFxuICAgID8gY29udGV4dC52YWx1ZS5zbGljZShjb250ZXh0LnByZWZpeC5sZW5ndGgsIGNvbnRleHQudmFsdWUubGVuZ3RoKSA6IGNvbnRleHQudmFsdWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlUHJlZml4XG4iLCJjb25zdCBsZW5ndGhXaXRoQ21kID0ge31cbmNvbnN0IHRva2VuV2l0aENtZCA9IHt9XG5cbmNvbnN0IG1ha2VFeHBhbmRlZFRva2VuID0gKGNoYXIsIGxlbmd0aCkgPT4ge1xuICBjb25zdCBleHBhbmRlZFRva2VuID0gW11cbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgZXhwYW5kZWRUb2tlbi5wdXNoKGNoYXIpXG4gIH1cbiAgcmV0dXJuIGV4cGFuZGVkVG9rZW5cbn1cblxuY29uc3QgZ2V0TGVuZ3RoV2l0aENtZCA9IG1hc2tTdHIgPT4gbWFza1N0cj8ubWF0Y2goL1xcXlxcZCsvKSA/PyBbXVxuXG5jb25zdCBnZXRQdXJlTGVuZ3RoID0gc3RyaW5nTWFzayA9PiB7XG4gIGlmKCFsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdKVxuICAgIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza10gPSBnZXRMZW5ndGhXaXRoQ21kKHN0cmluZ01hc2spXG4gIFxuICBpZiAobGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza11bMF0uc2xpY2UoMSwgbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXVswXS5sZW5ndGgpIFxufVxuXG5jb25zdCBnZXRUb2tlbldpdGhDbWQgPSBtYXNrU3RyID0+IG1hc2tTdHI/Lm1hdGNoKC9cXD5cXGQrO3xcXD5cXHcrO3xcXD4uKzsvKSA/PyBbXVxuXG5jb25zdCBnZXRQdXJlVG9rZW4gPSAoc3RyaW5nTWFzaykgPT4ge1xuICB0b2tlbldpdGhDbWRbc3RyaW5nTWFza10gPSBnZXRUb2tlbldpdGhDbWQoc3RyaW5nTWFzaylcbiAgaWYgKHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXVswXS5zbGljZSgxLCB0b2tlbldpdGhDbWRbc3RyaW5nTWFza11bMF0ubGVuZ3RoIC0gMSlcbn1cblxuY29uc3QgZ2V0U3RhcnQgPSAoc3RyaW5nTWFzaykgPT4ge1xuICBpZighbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXSlcbiAgICBsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdID0gZ2V0TGVuZ3RoV2l0aENtZChzdHJpbmdNYXNrKVxuXG4gIGlmIChsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICByZXR1cm4gbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXS5pbmRleFxufVxuXG5jb25zdCBnZXREZWwgPSAoc3RyaW5nTWFzaykgPT4ge1xuICBpZighbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXSlcbiAgICBsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdID0gZ2V0TGVuZ3RoV2l0aENtZChzdHJpbmdNYXNrKVxuXG4gIGlmIChsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICB0b2tlbldpdGhDbWRbc3RyaW5nTWFza10gPSBnZXRUb2tlbldpdGhDbWQoc3RyaW5nTWFzaylcbiAgaWYgKHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza11bMF0ubGVuZ3RoICsgdG9rZW5XaXRoQ21kW3N0cmluZ01hc2tdWzBdLmxlbmd0aFxufVxuXG5jb25zdCBpbnNlcnRFeHBhbmRlZFRva2VuSW5TdHJpbmdNYXNrID0gKHN0cmluZ01hc2ssIGV4cGFuZGVkVG9rZW4sIHN0YXJ0LCBkZWwpID0+IHtcbiAgY29uc3QgYXJyYXlNYXNrID0gQXJyYXkuZnJvbShzdHJpbmdNYXNrKVxuICBhcnJheU1hc2suc3BsaWNlKHN0YXJ0LCBkZWwsIC4uLmV4cGFuZGVkVG9rZW4pXG4gIHJldHVybiBhcnJheU1hc2suam9pbignJylcbn1cblxuY29uc3QgZXhwYW5kUXVhbnRpZmllcnMgPSAoY29udGV4dCkgPT4ge1xuICBjb25zdCBydW5uZXIgPSAoc3RyaW5nTWFzaykgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGdldFB1cmVMZW5ndGgoc3RyaW5nTWFzaylcbiAgICBpZiAoIWxlbmd0aCkgcmV0dXJuIHN0cmluZ01hc2tcbiAgXG4gICAgY29uc3QgdG9rZW4gPSBnZXRQdXJlVG9rZW4oc3RyaW5nTWFzaylcbiAgICBpZiAoIXRva2VuKSByZXR1cm4gc3RyaW5nTWFza1xuICBcbiAgICBjb25zdCBleHBhbmRlZFRva2VuID0gbWFrZUV4cGFuZGVkVG9rZW4odG9rZW4sIGxlbmd0aClcbiAgICBjb25zdCBzdGFydCA9IGdldFN0YXJ0KHN0cmluZ01hc2spXG4gICAgY29uc3QgZGVsID0gZ2V0RGVsKHN0cmluZ01hc2spXG4gICAgY29uc3QgbmV3U3RyaW5nTWFzayA9IGluc2VydEV4cGFuZGVkVG9rZW5JblN0cmluZ01hc2soc3RyaW5nTWFzaywgZXhwYW5kZWRUb2tlbiwgc3RhcnQsIGRlbClcblxuICAgIHJldHVybiBydW5uZXIobmV3U3RyaW5nTWFzaylcbiAgfVxuICBcbiAgY29udGV4dC5zdHJpbmdNYXNrID0gcnVubmVyKGNvbnRleHQuc3RyaW5nTWFzaylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXhwYW5kUXVhbnRpZmllcnNcbiIsImltcG9ydCBjcmVhdGVNYXNrQXBwbGljYXRvciBmcm9tICcuL2ZsZXgtbWFzay1jb3JlL2FwaS9jcmVhdGUtbWFzay1hcHBsaWNhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYXNrQXBwbGljYXRvclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9