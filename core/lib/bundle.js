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

/***/ "./src/flex-mask-core/helpers/reverse-string.js":
/*!******************************************************!*\
  !*** ./src/flex-mask-core/helpers/reverse-string.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var reverseString = function reverseString(str) {
  return Array.from(str).reverse().join('');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reverseString);

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
  var valueWithMask = context.value;

  for (var i = 0; i < context.mask.length; i++) {
    if (valueWithMask.length > context.mask[i].start) {
      var valueArr = Array.from(valueWithMask);
      valueArr.splice(context.mask[i].start, 0, context.mask[i].token);
      valueWithMask = valueArr.join('');
    }
  }

  context.value = valueWithMask;
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
/* harmony import */ var _apply_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apply-mask */ "./src/flex-mask-core/mask-compiler/mask/apply-mask.js");
/* harmony import */ var _extract_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extract-mask */ "./src/flex-mask-core/mask-compiler/mask/extract-mask.js");
/* harmony import */ var _reverse_value_if_applicable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reverse-value-if-applicable */ "./src/flex-mask-core/mask-compiler/mask/reverse-value-if-applicable.js");





var Mask = function Mask(context) {
  context.mask = (0,_extract_mask__WEBPACK_IMPORTED_MODULE_2__.default)(context.tokens);
  context.beforeExec.push(_remove_mask__WEBPACK_IMPORTED_MODULE_0__.default, _reverse_value_if_applicable__WEBPACK_IMPORTED_MODULE_1__.default);
  context.exec = _apply_mask__WEBPACK_IMPORTED_MODULE_3__.default;
  context.afterExec.unshift(_reverse_value_if_applicable__WEBPACK_IMPORTED_MODULE_1__.default);
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

/***/ "./src/flex-mask-core/mask-compiler/mask/reverse-maskstr-if-applicable.js":
/*!********************************************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/mask/reverse-maskstr-if-applicable.js ***!
  \********************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helpers_reverse_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/reverse-string */ "./src/flex-mask-core/helpers/reverse-string.js");


var reverseMaskStrIfApplicable = function reverseMaskStrIfApplicable(context) {
  return context.direction === 'right' ? context.stringMask : (0,_helpers_reverse_string__WEBPACK_IMPORTED_MODULE_0__.default)(context.stringMask);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reverseMaskStrIfApplicable);

/***/ }),

/***/ "./src/flex-mask-core/mask-compiler/mask/reverse-value-if-applicable.js":
/*!******************************************************************************!*\
  !*** ./src/flex-mask-core/mask-compiler/mask/reverse-value-if-applicable.js ***!
  \******************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helpers_reverse_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/reverse-string */ "./src/flex-mask-core/helpers/reverse-string.js");


var reverseValueIfApplicable = function reverseValueIfApplicable(context) {
  context.value = context.direction === 'right' ? context.value : (0,_helpers_reverse_string__WEBPACK_IMPORTED_MODULE_0__.default)(context.value);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reverseValueIfApplicable);

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
/* harmony import */ var _mask_reverse_maskstr_if_applicable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mask/reverse-maskstr-if-applicable */ "./src/flex-mask-core/mask-compiler/mask/reverse-maskstr-if-applicable.js");



var Tokens = function Tokens(context) {
  context.stringMask = (0,_mask_reverse_maskstr_if_applicable__WEBPACK_IMPORTED_MODULE_1__.default)(context);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvYXBpL2NyZWF0ZS1tYXNrLWFwcGxpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL2hlbHBlcnMvcmV2ZXJzZS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL2hlbHBlcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvZmlsdGVyL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWFzay1jb21waWxlci9maWx0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvZmlsdGVyL21ha2UtZmlsdGVyLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL2ZpbHRlci90cnVjYXRlLXZhbHVlLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL2luZGV4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2stY29tcGlsZXIuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvbWFzay9hcHBseS1tYXNrLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2svZXh0cmFjdC1tYXNrLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvbWFzay9tYXNrLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL21hc2svcmVtb3ZlLW1hc2suanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvbWFzay9yZXZlcnNlLW1hc2tzdHItaWYtYXBwbGljYWJsZS5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWFzay1jb21waWxlci9tYXNrL3JldmVyc2UtdmFsdWUtaWYtYXBwbGljYWJsZS5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWFzay1jb21waWxlci90b2tlbnMvZXh0cmFjdC10b2tlbnMuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stY29tcGlsZXIvdG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9tYXNrLWNvbXBpbGVyL3Rva2Vucy90b2tlbnMuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21hc2stcnVudGltZS9tYXNrLXJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21pZGRsZXdhcmVzL2RpcmVjdGlvbi9kaXJlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21pZGRsZXdhcmVzL2RpcmVjdGlvbi9leHRyYWN0LWRpcmVjdGlvbi5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvZGlyZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvbWlkZGxld2FyZXMvbGVuZ3RoL2luZGV4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9sZW5ndGgvbGVuZ3RoLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9wcmVmaXgvYXBwbHktcHJlZml4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9wcmVmaXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21pZGRsZXdhcmVzL3ByZWZpeC9wcmVmaXguanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2ZsZXgtbWFzay1jb3JlL21pZGRsZXdhcmVzL3ByZWZpeC9yZW1vdmUtcHJlZml4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9taWRkbGV3YXJlcy9xdWFudGlmaWVycy9leHBhbmQtcXVhbnRpZmllcnMuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mbGV4LW1hc2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZsZXgtbWFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZsZXgtbWFzay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZsZXgtbWFzay93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiY3JlYXRlTWFza0NvbnRleHQiLCJtYXNrU3RyIiwic3RyaW5nTWFzayIsImJlZm9yZUV4ZWMiLCJhZnRlckV4ZWMiLCJleGVjIiwibWFrZUFwcGxpY2F0b3IiLCJjb250ZXh0IiwibWFza0NvbXBpbGVyIiwiTWFza0NvbXBpbGVyIiwidXNlIiwiUXVhbnRpZmllcnMiLCJEaXJlY3Rpb24iLCJQcmVmaXgiLCJMZW5ndGgiLCJjb21waWxlIiwibWFza1J1blRpbWUiLCJNYXNrUnVudGltZSIsIm1hc2tBcHBsaWNhdG9yIiwibmV3VmFsdWUiLCJ2YWx1ZSIsInByb3RvdHlwZSIsIm1hc2siLCJkaXJlY3Rpb24iLCJwcmVmaXgiLCJtYXhMaW1pdCIsImZpbHRlciIsInJldmVyc2VTdHJpbmciLCJzdHIiLCJBcnJheSIsImZyb20iLCJyZXZlcnNlIiwiam9pbiIsImtleUNoYXJzRW51bSIsIk9iamVjdCIsImZyZWV6ZSIsIk9OTFlfTlVNQkVSIiwiT05MWV9DSEFSIiwiQ0hBUl9OVU1CRVIiLCJDSEFSX05VTUJFUl9TUEFDRSIsImtleUNoYXJzIiwia2V5cyIsIm1hcCIsImtleSIsInJlZ0V4VG9rZW5zIiwiZXNjYXBlQ2hhcnMiLCJlc2NhcGVDaGFyc0ZuIiwiY2hhcnMiLCJjaGFyIiwiRmlsdGVyIiwibWFrZUZpbHRlciIsInRva2VucyIsInVuc2hpZnQiLCJ0cnVjYXRlVmFsdWUiLCJhY2NGaWx0ZXIiLCJpIiwibGVuZ3RoIiwia2V5Q2hhciIsInB1c2giLCJyZWdFeCIsImVuZCIsInN0YXJ0IiwiUmVnRXhwIiwiZXhjZWVkZWQiLCJzdWJzdHJpbmciLCJzdGFjayIsIlRva2VucyIsIk1hc2siLCJhcHBseU1hc2siLCJ2YWx1ZVdpdGhNYXNrIiwidmFsdWVBcnIiLCJzcGxpY2UiLCJ0b2tlbiIsImV4dHJhY3RNYXNrIiwicmVtb3ZlTWFzayIsInJldmVyc2VWYWx1ZUlmQXBwbGljYWJsZSIsInRlc3QiLCJyZXZlcnNlTWFza1N0cklmQXBwbGljYWJsZSIsImV4dHJhY3RUb2tlbnMiLCJhcnJheU1hc2siLCJpc1Rva2VuIiwicHJldkNoYXIiLCJpdGVtIiwiY3R4dCIsImV4ZWNCZWZvcmUiLCJleGVjQWZ0ZXIiLCJhZGRCZWZvcmVFeGVjIiwiZm4iLCJhZGRBZnRlckV4ZWMiLCJleHRyYWN0RGlyZWN0aW9uIiwiX21hc2tTdHIiLCJtYXNrU3RyV2l0aFJpZ2h0RGlyZWN0aW9uIiwibWF0Y2giLCJzbGljZSIsIm1hc2tTdHJXaXRoTGVmdERpcmVjdGlvbiIsImFwcGx5UHJlZml4IiwicHJlZml4V2l0aENtZCIsInJlbW92ZVByZWZpeCIsImxlbmd0aFdpdGhDbWQiLCJ0b2tlbldpdGhDbWQiLCJtYWtlRXhwYW5kZWRUb2tlbiIsImV4cGFuZGVkVG9rZW4iLCJnZXRMZW5ndGhXaXRoQ21kIiwiZ2V0UHVyZUxlbmd0aCIsImdldFRva2VuV2l0aENtZCIsImdldFB1cmVUb2tlbiIsImdldFN0YXJ0IiwiaW5kZXgiLCJnZXREZWwiLCJpbnNlcnRFeHBhbmRlZFRva2VuSW5TdHJpbmdNYXNrIiwiZGVsIiwiZXhwYW5kUXVhbnRpZmllcnMiLCJuZXh0IiwicnVubmVyIiwibmV3U3RyaW5nTWFzayIsImNyZWF0ZU1hc2tBcHBsaWNhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsT0FBRCxFQUFhO0FBQ3JDLFNBQU87QUFDTEMsY0FBVSxFQUFFRCxPQURQO0FBRUxFLGNBQVUsRUFBRSxFQUZQO0FBR0xDLGFBQVMsRUFBRSxFQUhOO0FBSUxDLFFBQUksRUFBRTtBQUpELEdBQVA7QUFNRCxDQVBEOztBQVNBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0wsT0FBRCxFQUFhO0FBRWxDLE1BQU1NLE9BQU8sR0FBR1AsaUJBQWlCLENBQUNDLE9BQUQsQ0FBakM7QUFFQSxNQUFNTyxZQUFZLEdBQUdDLHVEQUFZLEVBQWpDO0FBRUFELGNBQVksQ0FBQ0UsR0FBYixDQUFpQkMscURBQWpCO0FBQ0FILGNBQVks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QUFELENBQTFCO0FBQ0EsUUFBSSxDQUFDc0UsS0FBTCxFQUFZLE9BQU90RSxVQUFQO0FBRVosUUFBTW1HLGFBQWEsR0FBR0QsaUJBQWlCLENBQUM1QixLQUFELEVBQVFoQixNQUFSLENBQXZDO0FBQ0EsUUFBTUssS0FBSyxHQUFHNkMsUUFBUSxDQUFDeEcsVUFBRCxDQUF0QjtBQUNBLFFBQU00RyxHQUFHLEdBQUdGLE1BQU0sQ0FBQzFHLFVBQUQsQ0FBbEI7QUFDQSxRQUFNZ0gsYUFBYSxHQUFHTCwrQkFBK0IsQ0FBQzNHLFVBQUQsRUFBYW1HLGFBQWIsRUFBNEJ4QyxLQUE1QixFQUFtQ2lELEdBQW5DLENBQXJEO0FBRUEsV0FBT0csTUFBTSxDQUFDQyxhQUFELENBQWI7QUFDRCxHQWJEOztBQWVBM0csU0FBTyxDQUFDTCxVQUFSLEdBQXFCK0csTUFBTSxDQUFDMUcsT0FBTyxDQUFDTCxVQUFULENBQTNCO0FBRUE4RyxNQUFJO0FBQ0wsQ0FuQkQ7O0FBcUJBLGlFQUFlRCxpQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBRUEsaUVBQWVJLCtFQUFmLEU7Ozs7OztVQ0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFza0NvbXBpbGVyIGZyb20gJy4uL21hc2stY29tcGlsZXInXG5pbXBvcnQgTWFza1J1bnRpbWUgZnJvbSAnLi4vbWFzay1ydW50aW1lL21hc2stcnVudGltZSdcbmltcG9ydCB7IFF1YW50aWZpZXJzLCBEaXJlY3Rpb24sIFByZWZpeCwgTGVuZ3RoIH0gZnJvbSAnLi4vbWlkZGxld2FyZXMnXG5cbmNvbnN0IGNyZWF0ZU1hc2tDb250ZXh0ID0gKG1hc2tTdHIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdHJpbmdNYXNrOiBtYXNrU3RyLFxuICAgIGJlZm9yZUV4ZWM6IFtdLFxuICAgIGFmdGVyRXhlYzogW10sXG4gICAgZXhlYzogbnVsbFxuICB9XG59XG5cbmNvbnN0IG1ha2VBcHBsaWNhdG9yID0gKG1hc2tTdHIpID0+IHtcblxuICBjb25zdCBjb250ZXh0ID0gY3JlYXRlTWFza0NvbnRleHQobWFza1N0cilcblxuICBjb25zdCBtYXNrQ29tcGlsZXIgPSBNYXNrQ29tcGlsZXIoKVxuXG4gIG1hc2tDb21waWxlci51c2UoUXVhbnRpZmllcnMpXG4gIG1hc2tDb21waWxlci51c2UoRGlyZWN0aW9uKVxuICBtYXNrQ29tcGlsZXIudXNlKFByZWZpeClcbiAgbWFza0NvbXBpbGVyLnVzZShMZW5ndGgpXG4gIFxuICBtYXNrQ29tcGlsZXIuY29tcGlsZShjb250ZXh0KVxuXG4gIGNvbnN0IG1hc2tSdW5UaW1lID0gTWFza1J1bnRpbWUoY29udGV4dClcblxuICBjb25zdCBtYXNrQXBwbGljYXRvciA9IChuZXdWYWx1ZSkgPT4ge1xuICAgIFxuICAgIGNvbnRleHQudmFsdWUgPSBuZXdWYWx1ZVxuXG4gICAgbWFza1J1blRpbWUuZXhlYyhjb250ZXh0KVxuXG4gICAgcmV0dXJuIHsgLi4uY29udGV4dCB9XG4gIH1cblxuICBtYXNrQXBwbGljYXRvci5wcm90b3R5cGUubWFzayA9IGNvbnRleHQubWFza1xuICBtYXNrQXBwbGljYXRvci5wcm90b3R5cGUuZGlyZWN0aW9uID0gY29udGV4dC5kaXJlY3Rpb25cbiAgbWFza0FwcGxpY2F0b3IucHJvdG90eXBlLnByZWZpeCA9IGNvbnRleHQucHJlZml4XG4gIG1hc2tBcHBsaWNhdG9yLnByb3RvdHlwZS5tYXhMaW1pdCA9IGNvbnRleHQubWF4TGltaXRcbiAgbWFza0FwcGxpY2F0b3IucHJvdG90eXBlLmZpbHRlciA9IGNvbnRleHQuZmlsdGVyXG4gIFxuICByZXR1cm4gbWFza0FwcGxpY2F0b3Jcbn0gXG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VBcHBsaWNhdG9yXG4iLCJjb25zdCByZXZlcnNlU3RyaW5nID0gc3RyID0+IEFycmF5LmZyb20oc3RyKS5yZXZlcnNlKCkuam9pbignJylcblxuZXhwb3J0IGRlZmF1bHQgcmV2ZXJzZVN0cmluZ1xuIiwiZXhwb3J0IGNvbnN0IGtleUNoYXJzRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICBPTkxZX05VTUJFUjogJzknLFxuICBPTkxZX0NIQVI6ICdBJyxcbiAgQ0hBUl9OVU1CRVI6ICcqJyxcbiAgQ0hBUl9OVU1CRVJfU1BBQ0U6ICdfJ1xufSlcblxuZXhwb3J0IGNvbnN0IGtleUNoYXJzID0gT2JqZWN0LmtleXMoa2V5Q2hhcnNFbnVtKS5tYXAoa2V5ID0+IGtleUNoYXJzRW51bVtrZXldKVxuXG5leHBvcnQgY29uc3QgcmVnRXhUb2tlbnMgPSBPYmplY3QuZnJlZXplKHtcbiAgJzknOiAnWzAtOV0nLCBcbiAgJ0EnOiAnW0EtWmEtesOhw6DDosOjw6nDqMOqw63Dr8Ozw7TDtcO2w7rDp8Oxw4HDgMOCw4PDicOIw43Dj8OTw5TDlcOWw5rDh8ORXScsIFxuICAnKic6ICdbQS1aYS16w6HDoMOiw6PDqcOow6rDrcOvw7PDtMO1w7bDusOnw7HDgcOAw4LDg8OJw4jDjcOPw5PDlMOVw5bDmsOHw5EwLTldJyxcbiAgJ18nOiAnW0EtWmEtesOhw6DDosOjw6nDqMOqw63Dr8Ozw7TDtcO2w7rDp8Oxw4HDgMOCw4PDicOIw43Dj8OTw5TDlcOWw5rDh8ORIDAtOV0nLFxufSlcblxuZXhwb3J0IGNvbnN0IGVzY2FwZUNoYXJzID0gT2JqZWN0LmZyZWV6ZSh7XG4gICcvJzogJ1xcLycsXG4gICcuJzogJ1xcXFwuJyxcbiAgJy0nOiAnXFxcXC0nLFxuICAnKCc6ICdcXFxcKCcsXG4gICcpJzogJ1xcXFwpJyxcbiAgJyonOiAnXFxcXConLFxuICAnKyc6ICdcXFxcKycsXG4gICdeJzogJ1xcXFxeJyxcbiAgJyQnOiAnXFxcXCQnLFxuICAnWyc6ICdcXFxcWycsXG4gICddJzogJ1xcXFxdJyxcbiAgJ3snOiAnXFxcXHsnLFxuICAnfSc6ICdcXFxcfScsXG59KVxuXG5leHBvcnQgY29uc3QgZXNjYXBlQ2hhcnNGbiA9IChjaGFycykgPT4ge1xuICByZXR1cm4gQXJyYXkuZnJvbShjaGFycykubWFwKGNoYXIgPT4gZXNjYXBlQ2hhcnNbY2hhcl0gfHwgY2hhcikuam9pbignJylcbn1cbiAiLCJpbXBvcnQgbWFrZUZpbHRlciBmcm9tICcuL21ha2UtZmlsdGVyJ1xuaW1wb3J0IHRydWNhdGVWYWx1ZSBmcm9tICcuL3RydWNhdGUtdmFsdWUnXG5cbmNvbnN0IEZpbHRlciA9IGNvbnRleHQgPT4ge1xuICBcbiAgY29udGV4dC5maWx0ZXIgPSBtYWtlRmlsdGVyKGNvbnRleHQudG9rZW5zKVxuXG4gIGNvbnRleHQuYWZ0ZXJFeGVjLnVuc2hpZnQodHJ1Y2F0ZVZhbHVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcbiIsImltcG9ydCBGaWx0ZXIgZnJvbSAnLi9maWx0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclxuIiwiY29uc3QgbWFrZUZpbHRlciA9IChtYXNrKSA9PiB7XG4gIGxldCBmaWx0ZXIgPSBbXVxuICBsZXQgYWNjRmlsdGVyID0gJydcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcbiAgICBpZihtYXNrW2ldLmtleUNoYXIpIHtcbiAgICAgIGZpbHRlci5wdXNoKGBeJHthY2NGaWx0ZXJ9JHttYXNrW2ldLnJlZ0V4fXswLCR7bWFza1tpXS5lbmQgLSBtYXNrW2ldLnN0YXJ0fX0kYClcbiAgICAgIGFjY0ZpbHRlciA9IGAke2FjY0ZpbHRlcn0ke21hc2tbaV0ucmVnRXh9eyR7bWFza1tpXS5lbmQgLSBtYXNrW2ldLnN0YXJ0fX1gXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY0ZpbHRlciA9IGAke2FjY0ZpbHRlcn0ke21hc2tbaV0ucmVnRXh9YFxuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IFJlZ0V4cChmaWx0ZXIuam9pbignfCcpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlRmlsdGVyXG4iLCJjb25zdCB0cnVjYXRlVmFsdWUgPSBjb250ZXh0ID0+IHtcbiAgY29uc3QgZXhjZWVkZWQgPSBjb250ZXh0LnZhbHVlLmxlbmd0aCA+IGNvbnRleHQubWF4TGltaXRcbiAgY29uc3Qgc3RhcnQgPSBjb250ZXh0LmRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gY29udGV4dC52YWx1ZS5sZW5ndGggLSBjb250ZXh0Lm1heExpbWl0IDogMFxuICBjb25zdCBlbmQgPSBjb250ZXh0LmRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gY29udGV4dC52YWx1ZS5sZW5ndGggOiBjb250ZXh0Lm1heExpbWl0XG4gIGNvbnRleHQudmFsdWUgPSBleGNlZWRlZCA/IGNvbnRleHQudmFsdWUuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpIDogY29udGV4dC52YWx1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCB0cnVjYXRlVmFsdWVcbiIsImltcG9ydCBNYXNrQ29tcGlsZXIgZnJvbSAnLi9tYXNrLWNvbXBpbGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBNYXNrQ29tcGlsZXIiLCJpbXBvcnQgVG9rZW5zIGZyb20gJy4vdG9rZW5zJ1xuaW1wb3J0IE1hc2sgZnJvbSAnLi9tYXNrJ1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL2ZpbHRlcidcblxuY29uc3QgTWFza0NvbXBpbGVyID0gKCkgPT4ge1xuICBjb25zdCBzdGFjayA9IFtdXG5cbiAgY29uc3QgdXNlID0gKC4uLm1pZGRsZXdhcmVzKSA9PiB7XG4gICAgc3RhY2sucHVzaCguLi5taWRkbGV3YXJlcylcbiAgfVxuXG4gIGNvbnN0IGNvbXBpbGUgPSAoY29udGV4dCkgPT4ge1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdGFja1tpXShjb250ZXh0KVxuICAgIH1cblxuICAgIFRva2Vucyhjb250ZXh0KVxuICAgIEZpbHRlcihjb250ZXh0KVxuICAgIE1hc2soY29udGV4dClcbiAgfVxuXG4gIHJldHVybiB7IHVzZSwgY29tcGlsZSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hc2tDb21waWxlclxuIiwiY29uc3QgYXBwbHlNYXNrID0gKGNvbnRleHQpID0+IHtcblxuICBsZXQgdmFsdWVXaXRoTWFzayA9IGNvbnRleHQudmFsdWUgXG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGNvbnRleHQubWFzay5sZW5ndGg7IGkrKykge1xuXG4gICAgaWYodmFsdWVXaXRoTWFzay5sZW5ndGggPiBjb250ZXh0Lm1hc2tbaV0uc3RhcnQpIHtcblxuICAgICAgY29uc3QgdmFsdWVBcnIgPSBBcnJheS5mcm9tKHZhbHVlV2l0aE1hc2spXG5cbiAgICAgIHZhbHVlQXJyLnNwbGljZShjb250ZXh0Lm1hc2tbaV0uc3RhcnQsIDAsIGNvbnRleHQubWFza1tpXS50b2tlbilcbiAgICAgIFxuICAgICAgdmFsdWVXaXRoTWFzayA9IHZhbHVlQXJyLmpvaW4oJycpXG4gICAgfVxuICB9XG5cbiAgY29udGV4dC52YWx1ZSA9IHZhbHVlV2l0aE1hc2tcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwbHlNYXNrXG4iLCJjb25zdCBleHRyYWN0TWFzayA9IHRva2VucyA9PiB7XG4gIHJldHVybiB0b2tlbnMuZmlsdGVyKHRva2VuID0+ICF0b2tlbi5rZXlDaGFyKS5tYXAodG9rZW4gPT4gKHtcbiAgICB0b2tlbjogdG9rZW4udG9rZW4sXG4gICAgc3RhcnQ6IHRva2VuLnN0YXJ0LFxuICB9KSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXh0cmFjdE1hc2tcbiIsImltcG9ydCBNYXNrIGZyb20gJy4vbWFzaydcblxuZXhwb3J0IGRlZmF1bHQgTWFzayIsImltcG9ydCByZW1vdmVNYXNrIGZyb20gJy4vcmVtb3ZlLW1hc2snXG5pbXBvcnQgYXBwbHlNYXNrIGZyb20gJy4vYXBwbHktbWFzaydcbmltcG9ydCBleHRyYWN0TWFzayBmcm9tICcuL2V4dHJhY3QtbWFzaydcbmltcG9ydCByZXZlcnNlVmFsdWVJZkFwcGxpY2FibGUgZnJvbSAnLi9yZXZlcnNlLXZhbHVlLWlmLWFwcGxpY2FibGUnXG5cbmNvbnN0IE1hc2sgPSAoY29udGV4dCkgPT4ge1xuXG4gIGNvbnRleHQubWFzayA9IGV4dHJhY3RNYXNrKGNvbnRleHQudG9rZW5zKVxuXG4gIGNvbnRleHQuYmVmb3JlRXhlYy5wdXNoKHJlbW92ZU1hc2ssIHJldmVyc2VWYWx1ZUlmQXBwbGljYWJsZSlcblxuICBjb250ZXh0LmV4ZWMgPSBhcHBseU1hc2tcblxuICBjb250ZXh0LmFmdGVyRXhlYy51bnNoaWZ0KHJldmVyc2VWYWx1ZUlmQXBwbGljYWJsZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFza1xuIiwiaW1wb3J0IHsgcmVnRXhUb2tlbnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuXG5jb25zdCByZW1vdmVNYXNrID0gKGNvbnRleHQpID0+IHtcbiAgY29udGV4dC52YWx1ZSA9IEFycmF5LmZyb20oY29udGV4dC52YWx1ZSkuZmlsdGVyKGNoYXIgPT4gKG5ldyBSZWdFeHAoYF4ke3JlZ0V4VG9rZW5zWycqJ119YCkpLnRlc3QoY2hhcikpLmpvaW4oJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZU1hc2tcbiIsImltcG9ydCByZXZlcnNlU3RyaW5nIGZyb20gJy4uLy4uL2hlbHBlcnMvcmV2ZXJzZS1zdHJpbmcnXG5cbmNvbnN0IHJldmVyc2VNYXNrU3RySWZBcHBsaWNhYmxlID0gY29udGV4dCA9PiB7XG4gIHJldHVybiBjb250ZXh0LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/IGNvbnRleHQuc3RyaW5nTWFzayA6IHJldmVyc2VTdHJpbmcoY29udGV4dC5zdHJpbmdNYXNrKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXZlcnNlTWFza1N0cklmQXBwbGljYWJsZVxuIiwiaW1wb3J0IHJldmVyc2VTdHJpbmcgZnJvbSAnLi4vLi4vaGVscGVycy9yZXZlcnNlLXN0cmluZydcblxuY29uc3QgcmV2ZXJzZVZhbHVlSWZBcHBsaWNhYmxlID0gY29udGV4dCA9PiB7XG4gIGNvbnRleHQudmFsdWUgPSBjb250ZXh0LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/IGNvbnRleHQudmFsdWUgOiByZXZlcnNlU3RyaW5nKGNvbnRleHQudmFsdWUpIFxufVxuXG5leHBvcnQgZGVmYXVsdCByZXZlcnNlVmFsdWVJZkFwcGxpY2FibGVcbiIsImltcG9ydCB7IGtleUNoYXJzLCByZWdFeFRva2VucywgZXNjYXBlQ2hhcnNGbiB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdXRpbHMnXG5cbmNvbnN0IGV4dHJhY3RUb2tlbnMgPSAoc3RyaW5nTWFzaykgPT4ge1xuXHRjb25zdCBhcnJheU1hc2sgPSBBcnJheS5mcm9tKHN0cmluZ01hc2spXG5cdGxldCB0b2tlbiA9IHtcbiAgICB0b2tlbjogJycsXG4gICAgc3RhcnQ6IDBcblx0fVxuXHRjb25zdCB0b2tlbnMgPSBbXVxuICBsZXQgaXNUb2tlbiA9IGZhbHNlXG4gIGxldCBwcmV2Q2hhciA9ICcnXG5cdGZvcihsZXQgaSA9IDA7IGkgPD0gYXJyYXlNYXNrLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoIWtleUNoYXJzLmluY2x1ZGVzKGFycmF5TWFza1tpXSkgJiYgaSAhPT0gYXJyYXlNYXNrLmxlbmd0aCkge1xuXHRcdFx0aWYoIWlzVG9rZW4pIHtcbiAgICAgICAgdG9rZW4uZW5kID0gaVxuICAgICAgICB0b2tlbi5rZXlDaGFyID0gdHJ1ZVxuICAgICAgICB0b2tlbi5yZWdFeCA9IHRva2VuLmtleUNoYXIgPyBgJHtyZWdFeFRva2Vuc1t0b2tlbi50b2tlblswXV19YCA6IGVzY2FwZUNoYXJzRm4odG9rZW4udG9rZW4pXG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKVxuICAgICAgICB0b2tlbiA9IHtcbiAgICAgICAgICB0b2tlbjogJycsXG4gICAgICAgICAgc3RhcnQ6IGlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXNUb2tlbiA9IHRydWVcbiAgICAgIHRva2VuLnRva2VuICs9IGFycmF5TWFza1tpXVxuXHRcdH0gZWxzZSB7XG4gICAgICBpZihpc1Rva2VuIHx8IChpID4gMCAmJiBhcnJheU1hc2tbaV0gIT09IHByZXZDaGFyKSkge1xuICAgICAgICB0b2tlbi5lbmQgPSBpXG4gICAgICAgIHRva2VuLmtleUNoYXIgPSBpc1Rva2VuID8gZmFsc2UgOiB0cnVlXG4gICAgICAgIHRva2VuLnJlZ0V4ID0gdG9rZW4ua2V5Q2hhciA/IGAke3JlZ0V4VG9rZW5zW3Rva2VuLnRva2VuWzBdXX1gIDogZXNjYXBlQ2hhcnNGbih0b2tlbi50b2tlbilcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pXG4gICAgICAgIHRva2VuID0ge1xuICAgICAgICAgIHRva2VuOiAnJyxcbiAgICAgICAgICBzdGFydDogaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpc1Rva2VuID0gZmFsc2VcbiAgICAgIHRva2VuLnRva2VuICs9IGFycmF5TWFza1tpXVxuICAgIH1cbiAgICBwcmV2Q2hhciA9IGFycmF5TWFza1tpXVxuICB9XG5cdHJldHVybiB0b2tlbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50b2tlbiAhPT0gJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RUb2tlbnNcbiIsImltcG9ydCBUb2tlbnMgZnJvbSAnLi90b2tlbnMnXG5cbmV4cG9ydCBkZWZhdWx0IFRva2Vuc1xuIiwiaW1wb3J0IGV4dHJhY3RUb2tlbnMgZnJvbSAnLi9leHRyYWN0LXRva2VucydcbmltcG9ydCByZXZlcnNlTWFza1N0cklmQXBwbGljYWJsZSBmcm9tICcuLi9tYXNrL3JldmVyc2UtbWFza3N0ci1pZi1hcHBsaWNhYmxlJ1xuXG5jb25zdCBUb2tlbnMgPSBjb250ZXh0ID0+IHtcblx0Y29udGV4dC5zdHJpbmdNYXNrID0gcmV2ZXJzZU1hc2tTdHJJZkFwcGxpY2FibGUoY29udGV4dClcbiAgY29udGV4dC50b2tlbnMgPSBleHRyYWN0VG9rZW5zKGNvbnRleHQuc3RyaW5nTWFzaylcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9rZW5zIiwiY29uc3QgTWFza1J1bnRpbWUgPSAoY3R4dCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gY3R4dFxuXG4gIGNvbnN0IGV4ZWNCZWZvcmUgPSAoKSA9PiB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbnRleHQuYmVmb3JlRXhlYy5sZW5ndGg7IGkrKykge1xuICAgICAgY29udGV4dC5iZWZvcmVFeGVjW2ldKGNvbnRleHQpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZXhlY0FmdGVyID0gKCkgPT4ge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb250ZXh0LmFmdGVyRXhlYy5sZW5ndGg7IGkrKykge1xuICAgICAgY29udGV4dC5hZnRlckV4ZWNbaV0oY29udGV4dClcbiAgICB9XG4gIH1cblxuICBjb25zdCBhZGRCZWZvcmVFeGVjID0gKGZuKSA9PiB7XG4gICAgY29udGV4dC5iZWZvcmVFeGVjLnB1c2goZm4pXG4gIH1cblxuICBjb25zdCBhZGRBZnRlckV4ZWMgPSAoZm4pID0+IHtcbiAgICBjb250ZXh0LmFmdGVyRXhlYy5wdXNoKGZuKVxuICB9XG5cbiAgY29uc3QgZXhlYyA9ICgpID0+IHtcbiAgICBleGVjQmVmb3JlKClcbiAgICBjb250ZXh0LmV4ZWMoY29udGV4dClcbiAgICBleGVjQWZ0ZXIoKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjb250ZXh0LFxuICAgIGFkZEJlZm9yZUV4ZWMsXG4gICAgYWRkQWZ0ZXJFeGVjLFxuICAgIGV4ZWMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFza1J1bnRpbWVcbiIsImltcG9ydCBleHRyYWN0RGlyZWN0aW9uIGZyb20gJy4vZXh0cmFjdC1kaXJlY3Rpb24nXG5cbmNvbnN0IERpcmVjdGlvbiA9IChjb250ZXh0KSA9PiB7XG5cbiAgY29uc3QgeyBkaXJlY3Rpb24sIHN0cmluZ01hc2sgfSA9IGV4dHJhY3REaXJlY3Rpb24oY29udGV4dC5zdHJpbmdNYXNrKVxuICBcbiAgY29udGV4dC5kaXJlY3Rpb24gPSBkaXJlY3Rpb25cbiAgY29udGV4dC5zdHJpbmdNYXNrID0gc3RyaW5nTWFza1xufVxuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3Rpb25cbiIsImNvbnN0IGV4dHJhY3REaXJlY3Rpb24gPSAobWFza1N0cikgPT4ge1xuICBsZXQgZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICBsZXQgX21hc2tTdHIgPSBtYXNrU3RyXG5cbiAgY29uc3QgbWFza1N0cldpdGhSaWdodERpcmVjdGlvbiA9IF9tYXNrU3RyPy5tYXRjaCgvXFw+XFw+LisvKSA/PyBbXVxuICBpZiAobWFza1N0cldpdGhSaWdodERpcmVjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgIF9tYXNrU3RyID0gbWFza1N0cldpdGhSaWdodERpcmVjdGlvblswXS5zbGljZSgyLCBtYXNrU3RyV2l0aFJpZ2h0RGlyZWN0aW9uWzBdLmxlbmd0aClcbiAgfVxuXG4gIGNvbnN0IG1hc2tTdHJXaXRoTGVmdERpcmVjdGlvbiA9IF9tYXNrU3RyPy5tYXRjaCgvXFw8XFw8LisvKSA/PyBbXVxuICBpZiAobWFza1N0cldpdGhMZWZ0RGlyZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICBkaXJlY3Rpb24gPSAnbGVmdCdcbiAgICBfbWFza1N0ciA9IG1hc2tTdHJXaXRoTGVmdERpcmVjdGlvblswXS5zbGljZSgyLCBtYXNrU3RyV2l0aExlZnREaXJlY3Rpb25bMF0ubGVuZ3RoKVxuICB9XG4gIFxuICByZXR1cm4ge1xuICAgIGRpcmVjdGlvbixcbiAgICBzdHJpbmdNYXNrOiBfbWFza1N0clxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3REaXJlY3Rpb25cbiIsImltcG9ydCBEaXJlY3Rpb24gZnJvbSAnLi9kaXJlY3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdGlvblxuIiwiaW1wb3J0IERpcmVjdGlvbiBmcm9tICcuL2RpcmVjdGlvbidcbmltcG9ydCBQcmVmaXggZnJvbSAnLi9wcmVmaXgnXG5pbXBvcnQgTGVuZ3RoIGZyb20gJy4vbGVuZ3RoJ1xuaW1wb3J0IFF1YW50aWZpZXJzIGZyb20gJy4vcXVhbnRpZmllcnMvZXhwYW5kLXF1YW50aWZpZXJzJ1xuXG5leHBvcnQge1xuICBEaXJlY3Rpb24sXG4gIFByZWZpeCxcbiAgUXVhbnRpZmllcnMsXG4gIExlbmd0aFxufSAiLCJpbXBvcnQgTGVuZ3RoIGZyb20gJy4vbGVuZ3RoJ1xuXG5leHBvcnQgZGVmYXVsdCBMZW5ndGhcbiIsImNvbnN0IExlbmd0aCA9IGNvbnRleHQgPT4ge1xuICBjb250ZXh0Lm1heExpbWl0ID0gY29udGV4dC5zdHJpbmdNYXNrLmxlbmd0aFxufVxuXG5leHBvcnQgZGVmYXVsdCBMZW5ndGgiLCJjb25zdCBhcHBseVByZWZpeCA9IChjb250ZXh0KSA9PiB7XG4gIGNvbnRleHQudmFsdWUgPSBjb250ZXh0LnZhbHVlID8gYCR7Y29udGV4dC5wcmVmaXh9JHtjb250ZXh0LnZhbHVlfWAgOiBjb250ZXh0LnZhbHVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcGx5UHJlZml4XG4gICIsImltcG9ydCBQcmVmaXggZnJvbSAnLi9wcmVmaXgnXG5cbmV4cG9ydCBkZWZhdWx0IFByZWZpeFxuIiwiaW1wb3J0IHJlbW92ZVByZWZpeCBmcm9tICcuL3JlbW92ZS1wcmVmaXgnXG5pbXBvcnQgYXBwbHlQcmVmaXggZnJvbSAnLi9hcHBseS1wcmVmaXgnXG5cbmNvbnN0IFByZWZpeCA9IGNvbnRleHQgPT4ge1xuICBcbiAgbGV0IHByZWZpeCA9ICcnXG4gIGxldCBtYXNrU3RyID0gY29udGV4dC5zdHJpbmdNYXNrXG5cbiAgY29uc3QgcHJlZml4V2l0aENtZCA9IG1hc2tTdHI/Lm1hdGNoKC8nJ1teO10rOy8pID8/IFtdXG5cbiAgaWYgKHByZWZpeFdpdGhDbWQubGVuZ3RoID4gMCkge1xuXG4gICAgcHJlZml4ID0gcHJlZml4V2l0aENtZFswXS5zbGljZSgyLCBwcmVmaXhXaXRoQ21kWzBdLmxlbmd0aCAtIDEpXG4gICAgbWFza1N0ciA9IHByZWZpeFdpdGhDbWRbJ2lucHV0J10uc2xpY2UocHJlZml4V2l0aENtZFsnaW5kZXgnXSArIHByZWZpeFdpdGhDbWRbMF0ubGVuZ3RoLCBwcmVmaXhXaXRoQ21kWydpbnB1dCddLmxlbmd0aClcbiAgfVxuXG4gIGNvbnRleHQucHJlZml4ID0gcHJlZml4XG4gIGNvbnRleHQuc3RyaW5nTWFzayA9IG1hc2tTdHJcbiAgY29udGV4dC5iZWZvcmVFeGVjLnB1c2gocmVtb3ZlUHJlZml4KVxuICBjb250ZXh0LmFmdGVyRXhlYy5wdXNoKGFwcGx5UHJlZml4KVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVmaXhcbiIsImltcG9ydCB7IGVzY2FwZUNoYXJzRm4gfSBmcm9tICcuLi8uLi9oZWxwZXJzL3V0aWxzJ1xuXG5jb25zdCByZW1vdmVQcmVmaXggPSAoY29udGV4dCkgPT4ge1xuICBjb250ZXh0LnZhbHVlID0gKG5ldyBSZWdFeHAoYF4ke2VzY2FwZUNoYXJzRm4oY29udGV4dC5wcmVmaXgpfWApKS50ZXN0KGNvbnRleHQudmFsdWUpIFxuICAgID8gY29udGV4dC52YWx1ZS5zbGljZShjb250ZXh0LnByZWZpeC5sZW5ndGgsIGNvbnRleHQudmFsdWUubGVuZ3RoKSA6IGNvbnRleHQudmFsdWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlUHJlZml4XG4iLCJjb25zdCBsZW5ndGhXaXRoQ21kID0ge31cbmNvbnN0IHRva2VuV2l0aENtZCA9IHt9XG5cbmNvbnN0IG1ha2VFeHBhbmRlZFRva2VuID0gKGNoYXIsIGxlbmd0aCkgPT4ge1xuICBjb25zdCBleHBhbmRlZFRva2VuID0gW11cbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgZXhwYW5kZWRUb2tlbi5wdXNoKGNoYXIpXG4gIH1cbiAgcmV0dXJuIGV4cGFuZGVkVG9rZW5cbn1cblxuY29uc3QgZ2V0TGVuZ3RoV2l0aENtZCA9IG1hc2tTdHIgPT4gbWFza1N0cj8ubWF0Y2goL1xcXlxcZCsvKSA/PyBbXVxuXG5jb25zdCBnZXRQdXJlTGVuZ3RoID0gc3RyaW5nTWFzayA9PiB7XG4gIGlmKCFsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdKVxuICAgIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza10gPSBnZXRMZW5ndGhXaXRoQ21kKHN0cmluZ01hc2spXG4gIFxuICBpZiAobGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza11bMF0uc2xpY2UoMSwgbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXVswXS5sZW5ndGgpIFxufVxuXG5jb25zdCBnZXRUb2tlbldpdGhDbWQgPSBtYXNrU3RyID0+IG1hc2tTdHI/Lm1hdGNoKC9cXD5cXGQrO3xcXD5cXHcrO3xcXD4uKzsvKSA/PyBbXVxuXG5jb25zdCBnZXRQdXJlVG9rZW4gPSAoc3RyaW5nTWFzaykgPT4ge1xuICB0b2tlbldpdGhDbWRbc3RyaW5nTWFza10gPSBnZXRUb2tlbldpdGhDbWQoc3RyaW5nTWFzaylcbiAgaWYgKHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXVswXS5zbGljZSgxLCB0b2tlbldpdGhDbWRbc3RyaW5nTWFza11bMF0ubGVuZ3RoIC0gMSlcbn1cblxuY29uc3QgZ2V0U3RhcnQgPSAoc3RyaW5nTWFzaykgPT4ge1xuICBpZighbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXSlcbiAgICBsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdID0gZ2V0TGVuZ3RoV2l0aENtZChzdHJpbmdNYXNrKVxuXG4gIGlmIChsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICByZXR1cm4gbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXS5pbmRleFxufVxuXG5jb25zdCBnZXREZWwgPSAoc3RyaW5nTWFzaykgPT4ge1xuICBpZighbGVuZ3RoV2l0aENtZFtzdHJpbmdNYXNrXSlcbiAgICBsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdID0gZ2V0TGVuZ3RoV2l0aENtZChzdHJpbmdNYXNrKVxuXG4gIGlmIChsZW5ndGhXaXRoQ21kW3N0cmluZ01hc2tdLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICB0b2tlbldpdGhDbWRbc3RyaW5nTWFza10gPSBnZXRUb2tlbldpdGhDbWQoc3RyaW5nTWFzaylcbiAgaWYgKHRva2VuV2l0aENtZFtzdHJpbmdNYXNrXS5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgcmV0dXJuIGxlbmd0aFdpdGhDbWRbc3RyaW5nTWFza11bMF0ubGVuZ3RoICsgdG9rZW5XaXRoQ21kW3N0cmluZ01hc2tdWzBdLmxlbmd0aFxufVxuXG5jb25zdCBpbnNlcnRFeHBhbmRlZFRva2VuSW5TdHJpbmdNYXNrID0gKHN0cmluZ01hc2ssIGV4cGFuZGVkVG9rZW4sIHN0YXJ0LCBkZWwpID0+IHtcbiAgY29uc3QgYXJyYXlNYXNrID0gQXJyYXkuZnJvbShzdHJpbmdNYXNrKVxuICBhcnJheU1hc2suc3BsaWNlKHN0YXJ0LCBkZWwsIC4uLmV4cGFuZGVkVG9rZW4pXG4gIHJldHVybiBhcnJheU1hc2suam9pbignJylcbn1cblxuY29uc3QgZXhwYW5kUXVhbnRpZmllcnMgPSAoY29udGV4dCwgbmV4dCA9ICgpID0+IHt9KSA9PiB7XG4gIGNvbnN0IHJ1bm5lciA9IChzdHJpbmdNYXNrKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gZ2V0UHVyZUxlbmd0aChzdHJpbmdNYXNrKVxuICAgIGlmICghbGVuZ3RoKSByZXR1cm4gc3RyaW5nTWFza1xuICBcbiAgICBjb25zdCB0b2tlbiA9IGdldFB1cmVUb2tlbihzdHJpbmdNYXNrKVxuICAgIGlmICghdG9rZW4pIHJldHVybiBzdHJpbmdNYXNrXG4gIFxuICAgIGNvbnN0IGV4cGFuZGVkVG9rZW4gPSBtYWtlRXhwYW5kZWRUb2tlbih0b2tlbiwgbGVuZ3RoKVxuICAgIGNvbnN0IHN0YXJ0ID0gZ2V0U3RhcnQoc3RyaW5nTWFzaylcbiAgICBjb25zdCBkZWwgPSBnZXREZWwoc3RyaW5nTWFzaylcbiAgICBjb25zdCBuZXdTdHJpbmdNYXNrID0gaW5zZXJ0RXhwYW5kZWRUb2tlbkluU3RyaW5nTWFzayhzdHJpbmdNYXNrLCBleHBhbmRlZFRva2VuLCBzdGFydCwgZGVsKVxuXG4gICAgcmV0dXJuIHJ1bm5lcihuZXdTdHJpbmdNYXNrKVxuICB9XG4gIFxuICBjb250ZXh0LnN0cmluZ01hc2sgPSBydW5uZXIoY29udGV4dC5zdHJpbmdNYXNrKVxuXG4gIG5leHQoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBleHBhbmRRdWFudGlmaWVyc1xuIiwiaW1wb3J0IGNyZWF0ZU1hc2tBcHBsaWNhdG9yIGZyb20gJy4vZmxleC1tYXNrLWNvcmUvYXBpL2NyZWF0ZS1tYXNrLWFwcGxpY2F0b3InXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1hc2tBcHBsaWNhdG9yXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=