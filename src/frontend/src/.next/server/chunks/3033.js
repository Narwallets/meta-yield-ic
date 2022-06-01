"use strict";
exports.id = 3033;
exports.ids = [3033];
exports.modules = {

/***/ 3033:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stores_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5297);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_wallet__WEBPACK_IMPORTED_MODULE_3__]);
_stores_wallet__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Hero = ()=>{
    const { wallet , setWallet  } = (0,_stores_wallet__WEBPACK_IMPORTED_MODULE_3__/* .useStore */ .o)();
    const { 0: isConnected , 1: setIsConnected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const onConnect = async ()=>{};
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
    // (async () => {
    //   const tempWallet = await getWallet();
    //   if (tempWallet.getAccountId()!) {
    //     setIsConnected(true);
    //   }
    // })();
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Square, {
        minHeight: {
            base: 400,
            md: 600
        },
        borderRadius: 16,
        as: "section",
        bg: "bg-accent",
        color: "on-accent",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
            py: {
                base: "12",
                md: "24"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                spacing: {
                    base: "8",
                    md: "10"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        spacing: {
                            base: "4",
                            md: "5"
                        },
                        align: "center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                textAlign: "center",
                                fontWeight: 900,
                                lineHeight: {
                                    base: "3rem",
                                    md: "4rem"
                                },
                                size: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBreakpointValue)({
                                    base: "lg",
                                    md: "2xl"
                                }),
                                children: [
                                    "Stake. Support. ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    " Earn."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                color: "on-accent-muteed",
                                maxW: "2xl",
                                textAlign: "center",
                                fontSize: "xl",
                                children: "Stake ICP and use your tokens to support crypto-based projects, and earn their tokens."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        spacing: "3",
                        direction: {
                            base: "column",
                            sm: "row"
                        },
                        justify: "center",
                        alignItems: "center",
                        children: [
                            !isConnected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                colorScheme: "indigo",
                                size: "lg",
                                onClick: ()=>onConnect()
                                ,
                                children: "Connect"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                href: "#how-it-works",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    variant: "secondary-on-accent",
                                    size: "lg",
                                    children: "How it works"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;