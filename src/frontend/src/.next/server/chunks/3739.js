"use strict";
exports.id = 3739;
exports.ids = [3739];
exports.modules = {

/***/ 4415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



const Card = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        maxWidth: "1xl",
        mx: "auto",
        p: {
            base: '3',
            md: '8'
        },
        rounded: {
            base: 'lg'
        },
        shadow: {
            base: 'base'
        },
        ...props
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 3739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4415);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4875);
/* harmony import */ var _lib_icp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6733);
/* harmony import */ var _queries_prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6110);







const FundingStatusCard = (props)=>{
    const kickstarter = props.kickstarter;
    const { 0: tokenSymbol , 1: setTokenSymbol  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: totalRaised , 1: setTotalRaised  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            const contractMetadata = await (0,_lib_icp__WEBPACK_IMPORTED_MODULE_5__/* .getCanisterMetadata */ .KV)(kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.token_contract_address);
            if (contractMetadata) setTokenSymbol(contractMetadata.symbol);
            const stNEARPrice = await (0,_queries_prices__WEBPACK_IMPORTED_MODULE_6__/* .fetchStNearPrice */ .G)();
            setTotalRaised((0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .yoctoToDollarStr */ .RI)(kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.total_deposited, stNEARPrice));
        })();
    }, [
        kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.token_contract_address,
        kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.total_deposited
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        w: "100%",
        mx: "0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
            spacing: 4,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            fontSize: "sm",
                            fontWeight: "subtle",
                            children: "TOTAL DEPOSITED"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            direction: {
                                base: "column",
                                sm: "row"
                            },
                            alignItems: {
                                base: "flex-start",
                                sm: "center"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                fontSize: {
                                    base: "2xl",
                                    md: "4xl"
                                },
                                lineHeight: "10",
                                fontWeight: "bold",
                                children: [
                                    (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .formatToLocaleNear */ .ag)((0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .yton */ .qc)(kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.total_deposited)),
                                    " stNEAR"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                fontSize: "lg",
                                whiteSpace: "nowrap",
                                children: [
                                    "~ $",
                                    totalRaised,
                                    " USD"
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    direction: "row",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    fontSize: "sm",
                                    fontWeight: "subtle",
                                    children: "SUPPORTERS"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    fontSize: {
                                        base: "lg",
                                        md: "2xl"
                                    },
                                    fontWeight: "bold",
                                    lineHeight: "8",
                                    children: kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.total_supporters
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spacer, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            children: [
                                (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .getPeriod */ .X8)(kickstarter) === _lib_util__WEBPACK_IMPORTED_MODULE_4__/* .PERIOD.OPEN */ .aI.OPEN && (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .timeLeftToFund */ .jE)(kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.close_timestamp) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            fontSize: "sm",
                                            fontWeight: "subtle",
                                            children: "LEFT TO FUND"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            fontSize: {
                                                base: "lg",
                                                md: "2xl"
                                            },
                                            fontWeight: "bold",
                                            lineHeight: "8",
                                            children: (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .timeLeftToFund */ .jE)(kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.close_timestamp)
                                        })
                                    ]
                                }),
                                (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .getPeriod */ .X8)(kickstarter) === _lib_util__WEBPACK_IMPORTED_MODULE_4__/* .PERIOD.NOT_OPEN */ .aI.NOT_OPEN && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            fontSize: "sm",
                                            fontWeight: "subtle",
                                            children: "OPEN IN"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            fontSize: {
                                                base: "lg",
                                                md: "2xl"
                                            },
                                            fontWeight: "bold",
                                            lineHeight: "8",
                                            children: (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .timeLeftToFund */ .jE)(kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.open_timestamp)
                                        })
                                    ]
                                }),
                                (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .getPeriod */ .X8)(kickstarter) === _lib_util__WEBPACK_IMPORTED_MODULE_4__/* .PERIOD.CLOSE */ .aI.CLOSE && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            fontSize: "sm",
                                            fontWeight: "subtle",
                                            children: "STATUS"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            fontSize: {
                                                base: "lg",
                                                md: "2xl"
                                            },
                                            fontWeight: "bold",
                                            lineHeight: "8",
                                            children: "Finished"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spacer, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    fontSize: "sm",
                                    fontWeight: "subtle",
                                    children: "TOKEN"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    fontSize: {
                                        base: "lg",
                                        md: "2xl"
                                    },
                                    fontWeight: "bold",
                                    lineHeight: "8",
                                    children: tokenSymbol
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FundingStatusCard);


/***/ })

};
;