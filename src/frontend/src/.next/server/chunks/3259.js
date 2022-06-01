"use strict";
exports.id = 3259;
exports.ids = [3259];
exports.modules = {

/***/ 3259:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4875);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stores_wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5297);
/* harmony import */ var _lib_icp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6733);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_wallet__WEBPACK_IMPORTED_MODULE_5__]);
_stores_wallet__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const RewardsEstimated = (props)=>{
    const kickstarter = props.kickstarter;
    const { 0: goalSelected , 1: setGoalSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: estimatedRewards , 1: setEstimatedRewards  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: amountOfStNear , 1: setAmountOfStNear  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { wallet , setWallet  } = (0,_stores_wallet__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .o)();
    const { 0: supportedProjets , 1: setSupportedProjets  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: rewards , 1: setRewards  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: invested , 1: setInvested  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: lockupTime , 1: setLockupTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            const result = await (0,_lib_icp__WEBPACK_IMPORTED_MODULE_6__/* .getSupporterDetailedList */ .I4)(wallet === null || wallet === void 0 ? void 0 : wallet.getAccountId());
            if (result && result.length) {
                setSupportedProjets(result);
                const winnerGoal = (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__/* .getCurrentFundingGoal */ .eu)(kickstarter.goals, kickstarter.total_deposited);
                const supportedProject = result.find((p)=>{
                    return p.kickstarter_id === (kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.id);
                });
                if (winnerGoal) {
                    const myRewards = (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__/* .yton */ .qc)(winnerGoal.tokens_to_release_per_stnear) * (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__/* .yton */ .qc)(supportedProject.supporter_deposit);
                    setRewards((0,_lib_util__WEBPACK_IMPORTED_MODULE_3__/* .ntoy */ .nq)(myRewards));
                    setLockupTime(moment__WEBPACK_IMPORTED_MODULE_4___default()(winnerGoal.unfreeze_timestamp).format("MMMM Do, YYYY"));
                }
                setInvested((0,_lib_util__WEBPACK_IMPORTED_MODULE_3__/* .yton */ .qc)(supportedProject.supporter_deposit).toString());
            }
        })();
    }, [
        props
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                fontSize: "sm",
                fontWeight: "subtle",
                children: "YOUR INVESTMENT"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        minW: "580px",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                p: "40px",
                                bg: "light",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                    spacing: "4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                    fontSize: "md",
                                                    lineHeight: "6",
                                                    fontWeight: "semibold",
                                                    color: "gray.500",
                                                    children: "Funded amount"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spacer, {}),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Wrap, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                            fontSize: "md",
                                                            lineHeight: "6",
                                                            fontWeight: "bold",
                                                            color: "gray.900",
                                                            children: invested
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Square, {
                                                            minW: "20px",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                                                boxSize: "20px",
                                                                objectFit: "cover",
                                                                src: "/stNEARorig.svg"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                            fontSize: "md",
                                                            lineHeight: "6",
                                                            fontWeight: "bold",
                                                            color: "gray.900",
                                                            children: "stNEAR"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                    fontSize: "md",
                                                    lineHeight: "6",
                                                    fontWeight: "semibold",
                                                    color: "gray.500",
                                                    children: "Tokens Rewards"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spacer, {}),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Wrap, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                            fontSize: "md",
                                                            lineHeight: "6",
                                                            fontWeight: "bold",
                                                            color: "gray.900",
                                                            children: (0,_lib_util__WEBPACK_IMPORTED_MODULE_3__/* .yton */ .qc)(rewards)
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Square, {
                                                            minW: "20px",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                                                boxSize: "20px",
                                                                objectFit: "cover",
                                                                src: kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.project_token_icon
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                            fontSize: "md",
                                                            lineHeight: "6",
                                                            fontWeight: "bold",
                                                            color: "gray.900",
                                                            children: kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.project_token_symbol
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                    fontSize: "md",
                                                    lineHeight: "6",
                                                    fontWeight: "semibold",
                                                    color: "gray.500",
                                                    children: "Lockup end date"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spacer, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                    fontSize: "md",
                                                    lineHeight: "6",
                                                    fontWeight: "bold",
                                                    color: "gray.900",
                                                    children: lockupTime
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RewardsEstimated);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;