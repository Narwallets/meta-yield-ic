"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888,6213,450,2682,630,5969];
exports.modules = {

/***/ 8373:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9853);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5739);
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3528);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_2__, _theme_theme__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_2__, _theme_theme__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const isProduction = (/* unused pure expression or super */ null && ("production" === "production"));
function App({ Component , pageProps  }) {
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
        theme: _theme_theme__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {
            client: queryClient,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {})
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3528:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1797);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1327);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_1__, _constants_colors__WEBPACK_IMPORTED_MODULE_2__]);
([_chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_1__, _constants_colors__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const sizes = {
    sizes: {
        ..._chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_1__.theme.space,
        max: "max-content",
        min: "min-content",
        full: "100%",
        "3xs": "14rem",
        "2xs": "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "76px",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "8xl": "90rem",
        container: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px"
        }
    }
};
const customTheme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    initialColorMode: "light",
    useSystemColorMode: false,
    colors: {
        ..._constants_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .O,
        brand: _constants_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors.indigo */ .O.indigo
    },
    sizes
}, _chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_1__.theme);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customTheme);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 4515:
/***/ ((module) => {

module.exports = require("@dfinity/agent");

/***/ }),

/***/ 5088:
/***/ ((module) => {

module.exports = require("@dfinity/auth-client");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1797:
/***/ ((module) => {

module.exports = import("@chakra-ui/pro-theme");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8191,9853,3157], () => (__webpack_exec__(8373)));
module.exports = __webpack_exports__;

})();