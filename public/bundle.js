/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/advice.service.ts":
/*!*******************************!*\
  !*** ./src/advice.service.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"adviceApiQuery\": () => (/* binding */ adviceApiQuery),\n/* harmony export */   \"getAdvice\": () => (/* binding */ getAdvice)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nconst adviceApiQuery = 'https://api.adviceslip.com/advice';\r\nconst getAdvice = (url) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const data = yield fetch(url);\r\n    return yield data.json();\r\n});\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWR2aWNlLnNlcnZpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNLGNBQWMsR0FBVyxtQ0FBbUMsQ0FBQztBQUVuRSxNQUFNLFNBQVMsR0FBRyxDQUFPLEdBQVcsRUFBbUIsRUFBRTtJQUNyRCxNQUFNLElBQUksR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixPQUFPLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzdCLENBQUMsRUFBQztBQUVrQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmljZS1nZW5lcmF0b3ItYXBwLW1haW4vLi9zcmMvYWR2aWNlLnNlcnZpY2UudHM/YTE5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZHZpY2UgfSBmcm9tIFwiLi9BZHZpY2VcIjtcclxuXHJcbmNvbnN0IGFkdmljZUFwaVF1ZXJ5OiBzdHJpbmcgPSAnaHR0cHM6Ly9hcGkuYWR2aWNlc2xpcC5jb20vYWR2aWNlJztcclxuXHJcbmNvbnN0IGdldEFkdmljZSA9IGFzeW5jICh1cmw6IHN0cmluZyk6IFByb21pc2U8QWR2aWNlPiA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIHJldHVybiBhd2FpdCBkYXRhLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGdldEFkdmljZSwgYWR2aWNlQXBpUXVlcnkgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/advice.service.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _advice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advice.service */ \"./src/advice.service.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst h1Tag = document.querySelector('h1');\r\nconst pTag = document.querySelector('p');\r\nconst img = document.querySelector('img');\r\nconst diceBtn = document.querySelector('button');\r\ndiceBtn === null || diceBtn === void 0 ? void 0 : diceBtn.addEventListener('click', e => {\r\n    updateAdvice();\r\n});\r\nconst showAdvice = (function () {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const advice = yield (0,_advice_service__WEBPACK_IMPORTED_MODULE_0__.getAdvice)(_advice_service__WEBPACK_IMPORTED_MODULE_0__.adviceApiQuery);\r\n            if (h1Tag)\r\n                h1Tag.innerText = `Advice #${advice.slip.id}`;\r\n            if (pTag)\r\n                pTag.innerText = `\"${advice.slip.advice}\"`;\r\n        }\r\n        catch (error) {\r\n            console.error(error);\r\n        }\r\n    });\r\n})();\r\nfunction updateAdvice() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            if (h1Tag)\r\n                h1Tag.innerText = ``;\r\n            if (pTag)\r\n                pTag.innerText = ``;\r\n            const newAdvice = yield (0,_advice_service__WEBPACK_IMPORTED_MODULE_0__.getAdvice)(_advice_service__WEBPACK_IMPORTED_MODULE_0__.adviceApiQuery);\r\n            if (h1Tag)\r\n                h1Tag.innerText = `Advice #${newAdvice.slip.id}`;\r\n            if (pTag)\r\n                pTag.innerText = `\"${newAdvice.slip.advice}\"`;\r\n        }\r\n        catch (error) {\r\n            console.error(error);\r\n        }\r\n    });\r\n}\r\n;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkQ7QUFFN0QsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBcUIsSUFBSSxDQUFDLENBQUM7QUFDL0QsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBdUIsR0FBRyxDQUFDLENBQUM7QUFDL0QsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBbUIsS0FBSyxDQUFDLENBQUM7QUFDNUQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqRCxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFO0lBQ25DLFlBQVksRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxVQUFVLEdBQUcsQ0FBQzs7UUFDaEIsSUFBSTtZQUNBLE1BQU0sTUFBTSxHQUFHLE1BQU0sMERBQVMsQ0FBQywyREFBYyxDQUFDLENBQUM7WUFDL0MsSUFBSSxLQUFLO2dCQUFFLEtBQUssQ0FBQyxTQUFTLEdBQUcsV0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pELElBQUksSUFBSTtnQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztTQUN4RDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7Q0FBQSxDQUFDLEVBQUUsQ0FBQztBQUVMLFNBQWUsWUFBWTs7UUFDdkIsSUFBSTtZQUNBLElBQUksS0FBSztnQkFBRSxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNoQyxJQUFJLElBQUk7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDOUIsTUFBTSxTQUFTLEdBQUcsTUFBTSwwREFBUyxDQUFDLDJEQUFjLENBQUMsQ0FBQztZQUNsRCxJQUFJLEtBQUs7Z0JBQUUsS0FBSyxDQUFDLFNBQVMsR0FBRyxXQUFXLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUQsSUFBSSxJQUFJO2dCQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO1NBQzNEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztDQUFBO0FBQUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmljZS1nZW5lcmF0b3ItYXBwLW1haW4vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBZHZpY2UsIGFkdmljZUFwaVF1ZXJ5IH0gZnJvbSBcIi4vYWR2aWNlLnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IGgxVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSGVhZGluZ0VsZW1lbnQ+KCdoMScpO1xyXG5jb25zdCBwVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MUGFyYWdyYXBoRWxlbWVudD4oJ3AnKTtcclxuY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW1hZ2VFbGVtZW50PignaW1nJyk7XHJcbmNvbnN0IGRpY2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcclxuXHJcbmRpY2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICB1cGRhdGVBZHZpY2UoKTtcclxufSk7XHJcblxyXG5jb25zdCBzaG93QWR2aWNlID0gKGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYWR2aWNlID0gYXdhaXQgZ2V0QWR2aWNlKGFkdmljZUFwaVF1ZXJ5KTtcclxuICAgICAgICBpZiAoaDFUYWcpIGgxVGFnLmlubmVyVGV4dCA9IGBBZHZpY2UgIyR7YWR2aWNlLnNsaXAuaWR9YDtcclxuICAgICAgICBpZiAocFRhZykgcFRhZy5pbm5lclRleHQgPSBgXCIke2FkdmljZS5zbGlwLmFkdmljZX1cImA7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlQWR2aWNlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoaDFUYWcpIGgxVGFnLmlubmVyVGV4dCA9IGBgO1xyXG4gICAgICAgIGlmIChwVGFnKSBwVGFnLmlubmVyVGV4dCA9IGBgO1xyXG4gICAgICAgIGNvbnN0IG5ld0FkdmljZSA9IGF3YWl0IGdldEFkdmljZShhZHZpY2VBcGlRdWVyeSk7XHJcbiAgICAgICAgaWYgKGgxVGFnKSBoMVRhZy5pbm5lclRleHQgPSBgQWR2aWNlICMke25ld0FkdmljZS5zbGlwLmlkfWA7XHJcbiAgICAgICAgaWYgKHBUYWcpIHBUYWcuaW5uZXJUZXh0ID0gYFwiJHtuZXdBZHZpY2Uuc2xpcC5hZHZpY2V9XCJgO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;