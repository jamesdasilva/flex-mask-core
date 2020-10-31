/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/extract-mask-2.js":
/*!*******************************!*\
  !*** ./src/extract-mask-2.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _key_chars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key-chars */ "./src/key-chars.js");


const extractMask = stringMask => {
  const arrayMask = Array.from(stringMask);
  let token = {
    token: ''
  };
  const mask = [];
  let isToken = false;

  for (let i = 0; i < arrayMask.length; i++) {
    if (!_key_chars__WEBPACK_IMPORTED_MODULE_0__.keyChars.includes(arrayMask[i])) {
      if (!isToken) {
        token.start = i;
        isToken = true;
      }

      token.token += arrayMask[i];
    } else {
      token.end = i;
      mask.push(token);
      isToken = false;
      token = {
        token: ''
      };
    }
  }

  return mask.filter(item => item.token != '');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractMask);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extract_mask_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extract-mask-2 */ "./src/extract-mask-2.js");

console.log((0,_extract_mask_2__WEBPACK_IMPORTED_MODULE_0__.default)('99//-9/9+++9()'));

/***/ }),

/***/ "./src/key-chars.js":
/*!**************************!*\
  !*** ./src/key-chars.js ***!
  \**************************/
/*! namespace exports */
/*! export keyChars [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyChars": () => /* binding */ keyChars
/* harmony export */ });
const keyChars = ['9', 'A'];

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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGV4LW1hc2svLi9zcmMvZXh0cmFjdC1tYXNrLTIuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2ZsZXgtbWFzay8uL3NyYy9rZXktY2hhcnMuanMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZsZXgtbWFzay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmxleC1tYXNrL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJleHRyYWN0TWFzayIsInN0cmluZ01hc2siLCJhcnJheU1hc2siLCJBcnJheSIsImZyb20iLCJ0b2tlbiIsIm1hc2siLCJpc1Rva2VuIiwiaSIsImxlbmd0aCIsImtleUNoYXJzIiwic3RhcnQiLCJlbmQiLCJwdXNoIiwiZmlsdGVyIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUlDLFVBQUQsSUFBZ0I7QUFDbkMsUUFBTUMsU0FBUyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0gsVUFBWCxDQUFsQjtBQUNBLE1BQUlJLEtBQUssR0FBRztBQUNYQSxTQUFLLEVBQUU7QUFESSxHQUFaO0FBR0EsUUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsS0FBZDs7QUFDQSxPQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR04sU0FBUyxDQUFDTyxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN6QyxRQUFHLENBQUNFLHlEQUFBLENBQWtCUixTQUFTLENBQUNNLENBQUQsQ0FBM0IsQ0FBSixFQUFxQztBQUNwQyxVQUFHLENBQUNELE9BQUosRUFBYTtBQUNaRixhQUFLLENBQUNNLEtBQU4sR0FBY0gsQ0FBZDtBQUNBRCxlQUFPLEdBQUcsSUFBVjtBQUNBOztBQUNERixXQUFLLENBQUNBLEtBQU4sSUFBZUgsU0FBUyxDQUFDTSxDQUFELENBQXhCO0FBQ0EsS0FORCxNQU1PO0FBQ05ILFdBQUssQ0FBQ08sR0FBTixHQUFZSixDQUFaO0FBQ0FGLFVBQUksQ0FBQ08sSUFBTCxDQUFVUixLQUFWO0FBQ0FFLGFBQU8sR0FBRyxLQUFWO0FBQ0FGLFdBQUssR0FBRztBQUNQQSxhQUFLLEVBQUU7QUFEQSxPQUFSO0FBR0E7QUFDRDs7QUFDRCxTQUFPQyxJQUFJLENBQUNRLE1BQUwsQ0FBWUMsSUFBSSxJQUFJQSxJQUFJLENBQUNWLEtBQUwsSUFBYyxFQUFsQyxDQUFQO0FBQ0EsQ0F4QkQ7O0FBMEJBLGlFQUFlTCxXQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUVBZ0IsT0FBTyxDQUFDQyxHQUFSLENBQVlqQix3REFBVyxDQUFDLGdCQUFELENBQXZCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPLE1BQU1VLFFBQVEsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQWpCLEM7Ozs7OztVQ0FQO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBrZXlDaGFycyB9IGZyb20gJy4va2V5LWNoYXJzJ1xuXG5jb25zdCBleHRyYWN0TWFzayA9IChzdHJpbmdNYXNrKSA9PiB7XG5cdGNvbnN0IGFycmF5TWFzayA9IEFycmF5LmZyb20oc3RyaW5nTWFzaylcblx0bGV0IHRva2VuID0ge1xuXHRcdHRva2VuOiAnJ1xuXHR9XG5cdGNvbnN0IG1hc2sgPSBbXVxuXHRsZXQgaXNUb2tlbiA9IGZhbHNlXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheU1hc2subGVuZ3RoOyBpKyspIHtcblx0XHRpZigha2V5Q2hhcnMuaW5jbHVkZXMoYXJyYXlNYXNrW2ldKSkge1xuXHRcdFx0aWYoIWlzVG9rZW4pIHtcblx0XHRcdFx0dG9rZW4uc3RhcnQgPSBpXG5cdFx0XHRcdGlzVG9rZW4gPSB0cnVlXG5cdFx0XHR9XG5cdFx0XHR0b2tlbi50b2tlbiArPSBhcnJheU1hc2tbaV1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dG9rZW4uZW5kID0gaVxuXHRcdFx0bWFzay5wdXNoKHRva2VuKVxuXHRcdFx0aXNUb2tlbiA9IGZhbHNlXG5cdFx0XHR0b2tlbiA9IHtcblx0XHRcdFx0dG9rZW46ICcnXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiBtYXNrLmZpbHRlcihpdGVtID0+IGl0ZW0udG9rZW4gIT0gJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGV4dHJhY3RNYXNrXG4iLCJpbXBvcnQgZXh0cmFjdE1hc2sgZnJvbSAnLi9leHRyYWN0LW1hc2stMidcblxuY29uc29sZS5sb2coZXh0cmFjdE1hc2soJzk5Ly8tOS85KysrOSgpJykpXG4iLCJleHBvcnQgY29uc3Qga2V5Q2hhcnMgPSBbJzknLCAnQSddIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9