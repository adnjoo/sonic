"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Login({ providers  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"flex flex-col items-center bg-black min-h-screen w-full justify-center\",\n        __source: {\n            fileName: \"/Users/andrewnjoo/Desktop/sonic/pages/login.js\",\n            lineNumber: 5,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                className: \"w-52 mb-5\",\n                src: \"https://links.papareact.com/9xl\",\n                alt: \"\",\n                __source: {\n                    fileName: \"/Users/andrewnjoo/Desktop/sonic/pages/login.js\",\n                    lineNumber: 6,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/andrewnjoo/Desktop/sonic/pages/login.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id, {\n                                callbackUrl: \"/\"\n                            })\n                        ,\n                        className: \"bg-[#18d860] p-5 text-white p-5 rounded-full\",\n                        __source: {\n                            fileName: \"/Users/andrewnjoo/Desktop/sonic/pages/login.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: [\n                            \"Login with: \",\n                            provider.name\n                        ]\n                    })\n                }, provider.name)\n            )\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nasync function getServerSideProps() {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNEO1NBRTdDRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0IsTUFBTSx1RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBd0U7Ozs7Ozs7O2lGQUNwRkMsQ0FBRztnQkFBQ0QsU0FBUyxFQUFDLENBQVc7Z0JBQUNFLEdBQUcsRUFBQyxDQUFpQztnQkFBQ0MsR0FBRyxFQUFDLENBQUU7Ozs7Ozs7O1lBRXRFQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ1AsU0FBUyxFQUFFUSxHQUFHLEVBQUVDLFFBQVEsd0VBQ3BDUixDQUFHOzs7Ozs7O29HQUNEUyxDQUFNO3dCQUNMQyxPQUFPLE1BQVFiLHVEQUFNLENBQUNXLFFBQVEsQ0FBQ0csRUFBRSxFQUFFLENBQUM7Z0NBQUNDLFdBQVcsRUFBRSxDQUFHOzRCQUFDLENBQUM7O3dCQUN2RFgsU0FBUyxFQUFDLENBQThDOzs7Ozs7Ozs0QkFDekQsQ0FDYTs0QkFBQ08sUUFBUSxDQUFDSyxJQUFJOzs7bUJBTHBCTCxRQUFRLENBQUNLLElBQUk7Ozs7QUFXL0IsQ0FBQztBQUVELGlFQUFlZixLQUFLLEVBQUM7QUFFZCxlQUFlZ0Isa0JBQWtCLEdBQUcsQ0FBQztJQUMxQyxLQUFLLENBQUNmLFNBQVMsR0FBRyxLQUFLLENBQUNILDZEQUFZO0lBRXBDLE1BQU0sQ0FBQyxDQUFDO1FBQ05tQixLQUFLLEVBQUUsQ0FBQztZQUNOaEIsU0FBUztRQUNYLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvdmlkZXJzLCBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmZ1bmN0aW9uIExvZ2luKHsgcHJvdmlkZXJzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLWJsYWNrIG1pbi1oLXNjcmVlbiB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy01MiBtYi01XCIgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tLzl4bFwiIGFsdD1cIlwiIC8+XG5cbiAgICAgIHtPYmplY3QudmFsdWVzKHByb3ZpZGVycykubWFwKChwcm92aWRlcikgPT4gKFxuICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKHByb3ZpZGVyLmlkLCB7IGNhbGxiYWNrVXJsOiBcIi9cIiB9KX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjMThkODYwXSBwLTUgdGV4dC13aGl0ZSBwLTUgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBMb2dpbiB3aXRoOiB7cHJvdmlkZXIubmFtZX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IHByb3ZpZGVycyA9IGF3YWl0IGdldFByb3ZpZGVycygpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb3ZpZGVycyxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbImdldFByb3ZpZGVycyIsInNpZ25JbiIsIkxvZ2luIiwicHJvdmlkZXJzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiLCJjYWxsYmFja1VybCIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();