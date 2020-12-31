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
const applyMask = (mask, valueStr) => {
  let valueWithMask = valueStr;

  for (let i = 0; i < mask.length; i++) {
    if (valueWithMask.length > mask[i].start) {
      const valueArr = Array.from(valueWithMask);
      valueArr.splice(mask[i].start, 0, mask[i].token);
      valueWithMask = valueArr.join('');
    }
  }

  return valueWithMask;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (applyMask);

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


const extractMask = stringMask => {
  return (0,_extract_tokens__WEBPACK_IMPORTED_MODULE_0__.default)(stringMask).filter(token => !token.keyChar).map(token => ({
    token: token.token,
    start: token.start
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractMask);

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


const extractTokens = stringMask => {
  const arrayMask = Array.from(stringMask);
  let token = {
    token: '',
    start: 0
  };
  const tokens = [];
  let isToken = false;
  let prevChar = '';

  for (let i = 0; i <= arrayMask.length; i++) {
    if (!_key_chars__WEBPACK_IMPORTED_MODULE_0__.keyChars.includes(arrayMask[i]) && i !== arrayMask.length) {
      if (!isToken) {
        token.end = i;
        token.keyChar = true;
        token.regEx = token.keyChar ? `${_key_chars__WEBPACK_IMPORTED_MODULE_0__.regExTokens[token.token[0]]}` : token.token;
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
        token.regEx = token.keyChar ? `${_key_chars__WEBPACK_IMPORTED_MODULE_0__.regExTokens[token.token[0]]}` : token.token;
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

  return tokens.filter(item => item.token !== '');
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
const keyChars = ['9', 'A', '*'];
const regExTokens = {
  '9': '[0-9]',
  'A': '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]',
  '*': '[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ 0-9]'
};
const escapeChars = {
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
const escapeCharsFn = chars => {
  return Array.from(chars).map(char => escapeChars[char]).join('');
};

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
/* harmony import */ var _react_hooks_use_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react-hooks/use-mask */ "./src/react-hooks/use-mask.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_react_hooks_use_mask__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./src/react-hooks/use-mask.js":
/*!*************************************!*\
  !*** ./src/react-hooks/use-mask.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _flex_mask_core_extract_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../flex-mask-core/extract-mask */ "./src/flex-mask-core/extract-mask.js");
/* harmony import */ var _flex_mask_core_apply_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flex-mask-core/apply-mask */ "./src/flex-mask-core/apply-mask.js");



const useMask = maskStr => {
  let value = '';
  let mask = (0,_flex_mask_core_extract_mask__WEBPACK_IMPORTED_MODULE_0__.default)(maskStr);

  let changeValue = newValue => {
    return (0,_flex_mask_core_apply_mask__WEBPACK_IMPORTED_MODULE_1__.default)(mask, newValue);
  };

  return changeValue;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMask);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvYXBwbHktbWFzay5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUvZXh0cmFjdC1tYXNrLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9mbGV4LW1hc2stY29yZS9leHRyYWN0LXRva2Vucy5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZmxleC1tYXNrLWNvcmUva2V5LWNoYXJzLmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvcmVhY3QtaG9va3MvdXNlLW1hc2suanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZsZXgtbWFzay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJhcHBseU1hc2siLCJtYXNrIiwidmFsdWVTdHIiLCJ2YWx1ZVdpdGhNYXNrIiwiaSIsImxlbmd0aCIsInN0YXJ0IiwidmFsdWVBcnIiLCJBcnJheSIsImZyb20iLCJzcGxpY2UiLCJ0b2tlbiIsImpvaW4iLCJleHRyYWN0TWFzayIsInN0cmluZ01hc2siLCJleHRyYWN0VG9rZW5zIiwiZmlsdGVyIiwia2V5Q2hhciIsIm1hcCIsImFycmF5TWFzayIsInRva2VucyIsImlzVG9rZW4iLCJwcmV2Q2hhciIsImtleUNoYXJzIiwiZW5kIiwicmVnRXgiLCJyZWdFeFRva2VucyIsInB1c2giLCJpdGVtIiwiZXNjYXBlQ2hhcnMiLCJlc2NhcGVDaGFyc0ZuIiwiY2hhcnMiLCJjaGFyIiwidXNlTWFzayIsIm1hc2tTdHIiLCJ2YWx1ZSIsImNoYW5nZVZhbHVlIiwibmV3VmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxTQUFTLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPQyxRQUFQLEtBQW9CO0FBQ3BDLE1BQUlDLGFBQWEsR0FBR0QsUUFBcEI7O0FBQ0EsT0FBSSxJQUFJRSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdILElBQUksQ0FBQ0ksTUFBeEIsRUFBZ0NELENBQUMsRUFBakMsRUFBcUM7QUFDbkMsUUFBR0QsYUFBYSxDQUFDRSxNQUFkLEdBQXVCSixJQUFJLENBQUNHLENBQUQsQ0FBSixDQUFRRSxLQUFsQyxFQUF5QztBQUN2QyxZQUFNQyxRQUFRLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXTixhQUFYLENBQWpCO0FBQ0FJLGNBQVEsQ0FBQ0csTUFBVCxDQUFnQlQsSUFBSSxDQUFDRyxDQUFELENBQUosQ0FBUUUsS0FBeEIsRUFBK0IsQ0FBL0IsRUFBa0NMLElBQUksQ0FBQ0csQ0FBRCxDQUFKLENBQVFPLEtBQTFDO0FBQ0FSLG1CQUFhLEdBQUdJLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjLEVBQWQsQ0FBaEI7QUFDRDtBQUNGOztBQUNELFNBQU9ULGFBQVA7QUFDRCxDQVZEOztBQVdBLGlFQUFlSCxTQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTs7QUFFQSxNQUFNYSxXQUFXLEdBQUlDLFVBQUQsSUFBZ0I7QUFDbkMsU0FBT0Msd0RBQWEsQ0FBQ0QsVUFBRCxDQUFiLENBQTBCRSxNQUExQixDQUFpQ0wsS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQ00sT0FBakQsRUFBMERDLEdBQTFELENBQThEUCxLQUFLLEtBQUs7QUFDNUVBLFNBQUssRUFBRUEsS0FBSyxDQUFDQSxLQUQrRDtBQUU1RUwsU0FBSyxFQUFFSyxLQUFLLENBQUNMO0FBRitELEdBQUwsQ0FB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Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcHBseU1hc2sgPSAobWFzaywgdmFsdWVTdHIpID0+IHtcbiAgbGV0IHZhbHVlV2l0aE1hc2sgPSB2YWx1ZVN0clxuICBmb3IobGV0IGkgPSAwOyBpIDwgbWFzay5sZW5ndGg7IGkrKykge1xuICAgIGlmKHZhbHVlV2l0aE1hc2subGVuZ3RoID4gbWFza1tpXS5zdGFydCkge1xuICAgICAgY29uc3QgdmFsdWVBcnIgPSBBcnJheS5mcm9tKHZhbHVlV2l0aE1hc2spXG4gICAgICB2YWx1ZUFyci5zcGxpY2UobWFza1tpXS5zdGFydCwgMCwgbWFza1tpXS50b2tlbilcbiAgICAgIHZhbHVlV2l0aE1hc2sgPSB2YWx1ZUFyci5qb2luKCcnKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWVXaXRoTWFza1xufVxuZXhwb3J0IGRlZmF1bHQgYXBwbHlNYXNrIiwiaW1wb3J0IGV4dHJhY3RUb2tlbnMgZnJvbSAnLi9leHRyYWN0LXRva2VucydcblxuY29uc3QgZXh0cmFjdE1hc2sgPSAoc3RyaW5nTWFzaykgPT4ge1xuXHRyZXR1cm4gZXh0cmFjdFRva2VucyhzdHJpbmdNYXNrKS5maWx0ZXIodG9rZW4gPT4gIXRva2VuLmtleUNoYXIpLm1hcCh0b2tlbiA9PiAoe1xuICAgIHRva2VuOiB0b2tlbi50b2tlbixcbiAgICBzdGFydDogdG9rZW4uc3RhcnQsXG5cdH0pKVxufVxuXG5leHBvcnQgZGVmYXVsdCBleHRyYWN0TWFza1xuIiwiaW1wb3J0IHsga2V5Q2hhcnMsIHJlZ0V4VG9rZW5zIH0gZnJvbSAnLi9rZXktY2hhcnMnXG5cbmNvbnN0IGV4dHJhY3RUb2tlbnMgPSAoc3RyaW5nTWFzaykgPT4ge1xuXHRjb25zdCBhcnJheU1hc2sgPSBBcnJheS5mcm9tKHN0cmluZ01hc2spXG5cdGxldCB0b2tlbiA9IHtcbiAgICB0b2tlbjogJycsXG4gICAgc3RhcnQ6IDBcblx0fVxuXHRjb25zdCB0b2tlbnMgPSBbXVxuICBsZXQgaXNUb2tlbiA9IGZhbHNlXG4gIGxldCBwcmV2Q2hhciA9ICcnXG5cdGZvcihsZXQgaSA9IDA7IGkgPD0gYXJyYXlNYXNrLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYoIWtleUNoYXJzLmluY2x1ZGVzKGFycmF5TWFza1tpXSkgJiYgaSAhPT0gYXJyYXlNYXNrLmxlbmd0aCkge1xuXHRcdFx0aWYoIWlzVG9rZW4pIHtcbiAgICAgICAgdG9rZW4uZW5kID0gaVxuICAgICAgICB0b2tlbi5rZXlDaGFyID0gdHJ1ZVxuICAgICAgICB0b2tlbi5yZWdFeCA9IHRva2VuLmtleUNoYXIgPyBgJHtyZWdFeFRva2Vuc1t0b2tlbi50b2tlblswXV19YCA6IHRva2VuLnRva2VuXG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKVxuICAgICAgICB0b2tlbiA9IHtcbiAgICAgICAgICB0b2tlbjogJycsXG4gICAgICAgICAgc3RhcnQ6IGlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaXNUb2tlbiA9IHRydWVcbiAgICAgIHRva2VuLnRva2VuICs9IGFycmF5TWFza1tpXVxuXHRcdH0gZWxzZSB7XG4gICAgICBpZihpc1Rva2VuIHx8IChpID4gMCAmJiBhcnJheU1hc2tbaV0gIT09IHByZXZDaGFyKSkge1xuICAgICAgICB0b2tlbi5lbmQgPSBpXG4gICAgICAgIHRva2VuLmtleUNoYXIgPSBpc1Rva2VuID8gZmFsc2UgOiB0cnVlXG4gICAgICAgIHRva2VuLnJlZ0V4ID0gdG9rZW4ua2V5Q2hhciA/IGAke3JlZ0V4VG9rZW5zW3Rva2VuLnRva2VuWzBdXX1gIDogdG9rZW4udG9rZW5cbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pXG4gICAgICAgIHRva2VuID0ge1xuICAgICAgICAgIHRva2VuOiAnJyxcbiAgICAgICAgICBzdGFydDogaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpc1Rva2VuID0gZmFsc2VcbiAgICAgIHRva2VuLnRva2VuICs9IGFycmF5TWFza1tpXVxuICAgIH1cbiAgICBwcmV2Q2hhciA9IGFycmF5TWFza1tpXVxuICB9XG5cdHJldHVybiB0b2tlbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50b2tlbiAhPT0gJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RUb2tlbnNcbiIsImV4cG9ydCBjb25zdCBrZXlDaGFycyA9IFsnOScsICdBJywgJyonXVxuZXhwb3J0IGNvbnN0IHJlZ0V4VG9rZW5zID0ge1xuICAnOSc6ICdbMC05XScsIFxuICAnQSc6ICdbQS1aYS16w6HDoMOiw6PDqcOow6rDrcOvw7PDtMO1w7bDusOnw7HDgcOAw4LDg8OJw4jDjcOPw5PDlMOVw5bDmsOHw5EgXScsIFxuICAnKic6ICdbQS1aYS16w6HDoMOiw6PDqcOow6rDrcOvw7PDtMO1w7bDusOnw7HDgcOAw4LDg8OJw4jDjcOPw5PDlMOVw5bDmsOHw5EgMC05XScsXG59XG5leHBvcnQgY29uc3QgZXNjYXBlQ2hhcnMgPSB7XG4gICcvJzogJ1xcLycsXG4gICcuJzogJ1xcXFwuJyxcbiAgJy0nOiAnXFxcXC0nLFxuICAnKCc6ICdcXFxcKCcsXG4gICcpJzogJ1xcXFwpJyxcbiAgJyonOiAnXFxcXConLFxuICAnKyc6ICdcXFxcKycsXG4gICdeJzogJ1xcXFxeJyxcbiAgJyQnOiAnXFxcXCQnLFxuICAnWyc6ICdcXFxcWycsXG4gICddJzogJ1xcXFxdJyxcbiAgJ3snOiAnXFxcXHsnLFxuICAnfSc6ICdcXFxcfScsXG59XG5leHBvcnQgY29uc3QgZXNjYXBlQ2hhcnNGbiA9IChjaGFycykgPT4ge1xuICByZXR1cm4gQXJyYXkuZnJvbShjaGFycykubWFwKGNoYXIgPT4gZXNjYXBlQ2hhcnNbY2hhcl0pLmpvaW4oJycpXG59XG4gIiwiaW1wb3J0IHVzZU1hc2sgZnJvbSAnLi9yZWFjdC1ob29rcy91c2UtbWFzaydcblxuZXhwb3J0IGRlZmF1bHQgdXNlTWFza1xuIiwiaW1wb3J0IGV4dHJhY3RNYXNrIGZyb20gJy4uL2ZsZXgtbWFzay1jb3JlL2V4dHJhY3QtbWFzaydcbmltcG9ydCBhcHBseU1hc2sgZnJvbSAnLi4vZmxleC1tYXNrLWNvcmUvYXBwbHktbWFzaydcblxuY29uc3QgdXNlTWFzayA9IChtYXNrU3RyKSA9PiB7XG4gIGxldCB2YWx1ZSA9ICcnXG4gIGxldCBtYXNrID0gZXh0cmFjdE1hc2sobWFza1N0cilcbiAgbGV0IGNoYW5nZVZhbHVlID0gKG5ld1ZhbHVlKSA9PiB7XG4gICAgcmV0dXJuIGFwcGx5TWFzayhtYXNrLCBuZXdWYWx1ZSlcbiAgfVxuICByZXR1cm4gY2hhbmdlVmFsdWVcbn1cbmV4cG9ydCBkZWZhdWx0IHVzZU1hc2tcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==