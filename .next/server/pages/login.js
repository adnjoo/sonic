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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Login({ providers  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"flex flex-col items-center bg-black min-h-screen w-full justify-center\",\n        __source: {\n            fileName: \"/Users/andrewnjoo/Desktop/sonic/pages/login.js\",\n            lineNumber: 5,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                className: \"w-52 mb-5\",\n                src: \"https://links.papareact.com/9xl\",\n                alt: \"\",\n                __source: {\n                    fileName: \"/Users/andrewnjoo/Desktop/sonic/pages/login.js\",\n                    lineNumber: 6,\n                    columnNumber: 13\n                },\n                __self: this\n            }),\n            Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/andrewnjoo/Desktop/sonic/pages/login.js\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id, {\n                                callbackUrl: \"/\"\n                            })\n                        ,\n                        className: \"bg-[#18d860] p-5 text-white p-5 rounded-full\",\n                        __source: {\n                            fileName: \"/Users/andrewnjoo/Desktop/sonic/pages/login.js\",\n                            lineNumber: 14,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: [\n                            \"Login with: \",\n                            provider.name\n                        ]\n                    })\n                }, provider.name)\n            )\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nasync function getServerSideProps() {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW9EO1NBRTNDRSxLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsU0FBUyxHQUFDLEVBQUUsQ0FBQztJQUN6QixNQUFNLHVFQUNEQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUF3RTs7Ozs7Ozs7aUZBQ2xGQyxDQUFHO2dCQUNSRCxTQUFTLEVBQUMsQ0FBVztnQkFDckJFLEdBQUcsRUFBQyxDQUFpQztnQkFDckNDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7OztZQUdMQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ1AsU0FBUyxFQUFFUSxHQUFHLEVBQUVDLFFBQVEsd0VBQ2xDUixDQUFHOzs7Ozs7O29HQUNDUyxDQUFNO3dCQUNQQyxPQUFPLE1BQVFiLHVEQUFNLENBQUNXLFFBQVEsQ0FBQ0csRUFBRSxFQUFDLENBQUNDO2dDQUFBQSxXQUFXLEVBQUMsQ0FBRzs0QkFBQSxDQUFDOzt3QkFDbkRYLFNBQVMsRUFBQyxDQUE4Qzs7Ozs7Ozs7NEJBQUMsQ0FBWTs0QkFBQ08sUUFBUSxDQUFDSyxJQUFJOzs7bUJBSDdFTCxRQUFRLENBQUNLLElBQUk7Ozs7QUFTbkMsQ0FBQztBQUVELGlFQUFlZixLQUFLO0FBRWIsZUFBZWdCLGtCQUFrQixHQUFJLENBQUM7SUFDekMsS0FBSyxDQUFDZixTQUFTLEdBQUcsS0FBSyxDQUFDSCw2REFBWTtJQUVwQyxNQUFNLENBQUMsQ0FBQztRQUNKbUIsS0FBSyxFQUFFLENBQUM7WUFDSmhCLFNBQVM7UUFDYixDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0UHJvdmlkZXJzLCBzaWduSW59IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcblxuZnVuY3Rpb24gTG9naW4oe3Byb3ZpZGVyc30pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctYmxhY2sgbWluLWgtc2NyZWVuIHctZnVsbCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cInctNTIgbWItNVwiXG4gICAgICAgIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS85eGxcIlxuICAgICAgICBhbHQ9XCJcIlxuICAgICAgLz5cblxuICAgICAgICB7T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpPT4oXG4gICAgICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25Jbihwcm92aWRlci5pZCx7Y2FsbGJhY2tVcmw6XCIvXCJ9KX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLVsjMThkODYwXSBwLTUgdGV4dC13aGl0ZSBwLTUgcm91bmRlZC1mdWxsJz5Mb2dpbiB3aXRoOiB7cHJvdmlkZXIubmFtZX08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKCkge1xuICAgIGNvbnN0IHByb3ZpZGVycyA9IGF3YWl0IGdldFByb3ZpZGVycygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHByb3ZpZGVycyxcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiZ2V0UHJvdmlkZXJzIiwic2lnbkluIiwiTG9naW4iLCJwcm92aWRlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsImNhbGxiYWNrVXJsIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

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