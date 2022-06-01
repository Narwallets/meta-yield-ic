"use strict";
exports.id = 1784;
exports.ids = [1784];
exports.modules = {

/***/ 1784:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5297);
/* harmony import */ var _utils_errorHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6529);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_wallet__WEBPACK_IMPORTED_MODULE_4__]);
_stores_wallet__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ErrorHandlerHash = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useToast)();
    const id = router.query && router.query.id ? router.query.id : "";
    const transactionHashes = router.query.transactionHashes;
    const { wallet , setWallet  } = (0,_stores_wallet__WEBPACK_IMPORTED_MODULE_4__/* .useStore */ .o)();
    const [isLoaded, setIsLoaded] = react__WEBPACK_IMPORTED_MODULE_3__.useState(false);
    const { 0: txSuccess , 1: setTxSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        (async ()=>{
            (0,_utils_errorHandlers__WEBPACK_IMPORTED_MODULE_5__/* .ErrorHashHandler */ .S)(router, toast, wallet);
            setIsLoaded(true);
        })();
    }, [
        transactionHashes,
        wallet,
        toast
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorHandlerHash);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ ErrorHashHandler)
/* harmony export */ });
const ErrorHashHandler = async (router, toast, wallet)=>{
// TBD
};


/***/ })

};
;