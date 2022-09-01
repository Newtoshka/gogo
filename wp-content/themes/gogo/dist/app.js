/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ \"./css/style.scss\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\r\n    (function($){\r\n        $('.slider-inner').slick({\r\n            arrows: true,\r\n            infinite: true,\r\n            speed: 300,\r\n            slidesToShow: 3,\r\n            slidesToScroll: 1,\r\n            prevArrow: '<button type=\"button\" class=\"slick-prev flex\"><svg width=\"13\" height=\"25\" viewBox=\"0 0 13 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.62798 12.0093L12.4133 1.17657C12.4223 1.16756 12.4319 1.15796 12.4409 1.14835C12.6835 0.883581 12.6709 0.466312 12.4133 0.217152C12.2842 0.086868 12.1095 0.0142212 11.9288 0.0142212C11.7535 0.0172231 11.5866 0.0904703 11.4623 0.217152L0.192456 11.5296C-0.0591063 11.7968 -0.0591063 12.2219 0.192456 12.4891L11.4623 23.8201C11.7295 24.0789 12.1462 24.0789 12.4133 23.8201C12.4223 23.8105 12.4319 23.8015 12.4409 23.7919C12.6835 23.5272 12.6709 23.1099 12.4133 22.8607L1.62798 12.0093Z\" fill=\"#28A9E0\"/></svg></button>',\r\n            nextArrow: '<button type=\"button\" class=\"slick-next flex\"><svg width=\"14\" height=\"25\" viewBox=\"0 0 14 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.3822 12.5031L2.10365 1.19098C1.97947 1.0644 1.81209 0.991209 1.63691 0.98761C1.45573 0.98761 1.28176 1.0602 1.15157 1.19098C0.894209 1.43995 0.88161 1.8569 1.12398 2.12206C1.13358 2.13166 1.14258 2.14126 1.15157 2.15026L11.9448 12.983L1.15157 23.8344C0.894209 24.0834 0.88161 24.5009 1.12398 24.7655C1.13358 24.7751 1.14258 24.7847 1.15157 24.7937C1.41974 25.0523 1.83669 25.0523 2.10365 24.7937L13.3822 13.463C13.6335 13.1954 13.6335 12.7707 13.3822 12.5031Z\" fill=\"#28A9E0\"/></svg></button>',\r\n            responsive: [\r\n              {\r\n                breakpoint: 1200,\r\n                settings: {\r\n                  arrows: false,\r\n                  autoplay: true,\r\n                  autoplaySpeed: 3000,\r\n                  slidesToShow: 3,\r\n                  slidesToScroll: 3,\r\n                  infinite: true,\r\n                }\r\n              },\r\n              {\r\n                breakpoint: 740,\r\n                settings: {\r\n                  arrows: false,\r\n                  autoplay: true,\r\n                  autoplaySpeed: 3000,\r\n                  slidesToShow: 3,\r\n                  slidesToShow: 2,\r\n                  slidesToScroll: 2\r\n                }\r\n              },\r\n              {\r\n                breakpoint: 480,\r\n                settings: {\r\n                  arrows: false,\r\n                  autoplay: true,\r\n                  autoplaySpeed: 3000,\r\n                  slidesToShow: 1,\r\n                  slidesToScroll: 1\r\n                }\r\n              }\r\n            ]\r\n          });\r\n    })(jQuery)\r\n});\n\n//# sourceURL=webpack://gogo/./js/app.js?");

/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://gogo/./css/style.scss?");

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;