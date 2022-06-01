"use strict";
exports.id = 9373;
exports.ids = [9373];
exports.modules = {

/***/ 9373:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4875);
/* harmony import */ var _queries_prices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6110);
/* harmony import */ var _FundButon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6775);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FundButon__WEBPACK_IMPORTED_MODULE_5__]);
_FundButon__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ActiveProject = (props)=>{
    var ref7, ref1, ref2, ref3, ref4, ref5;
    const projectData = props.data;
    const { 0: totalRaised , 1: setTotalRaised  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const tagColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.600", "gray.300");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const isMobile = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
        base: true,
        md: false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            var ref;
            const stNEARPrice = await (0,_queries_prices__WEBPACK_IMPORTED_MODULE_6__/* .fetchStNearPrice */ .G)();
            if (projectData === null || projectData === void 0 ? void 0 : (ref = projectData.kickstarter) === null || ref === void 0 ? void 0 : ref.total_deposited) {
                var ref6;
                setTotalRaised((0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .yoctoToDollarStr */ .RI)(projectData === null || projectData === void 0 ? void 0 : (ref6 = projectData.kickstarter) === null || ref6 === void 0 ? void 0 : ref6.total_deposited, stNEARPrice));
            }
        })();
    }, [
        projectData
    ]);
    if (!projectData) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        as: "section",
        pt: {
            base: "50",
            md: "100"
        },
        pb: {
            base: "12",
            md: "24"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
            fontSize: "4xl",
            lineHeight: "10",
            fontWeight: "bold",
            children: "No Active Project"
        })
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        direction: {
            base: "column",
            lg: "row"
        },
        p: 0,
        mt: 10,
        boxShadow: "sm",
        rounded: "lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                borderRadius: {
                    base: "md",
                    md: "lg"
                },
                minW: {
                    base: "100%",
                    lg: "300px",
                    xl: "400px"
                },
                minH: 210,
                backgroundColor: "black",
                alignItems: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                    src: projectData.imageUrl,
                    alt: "project",
                    borderRadius: "xl",
                    fit: "cover",
                    maxWidth: {
                        base: "100%",
                        lg: "300px",
                        xl: "400px"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                pr: {
                    base: "4",
                    lg: "4",
                    xl: "10"
                },
                pb: {
                    base: "4",
                    lg: "4",
                    xl: "10"
                },
                pl: {
                    base: "4",
                    lg: "4",
                    xl: "10"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        spacing: {
                            base: "1",
                            md: "2"
                        },
                        direction: {
                            base: "column",
                            md: "row"
                        },
                        hidden: isMobile,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Circle, {
                            boxShadow: "xl",
                            ml: {
                                base: 0,
                                lg: "0",
                                xl: "-8"
                            },
                            mb: "2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Circle, {
                                m: "2",
                                overflow: "hidden",
                                children: projectData.avatarUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                    src: projectData.avatarUrl,
                                    boxSize: "10"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        spacing: {
                            base: "1",
                            md: "2"
                        },
                        direction: {
                            base: "column",
                            md: "row"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            as: "h2",
                            mr: "10px",
                            fontWeight: "bold",
                            fontSize: "2xl",
                            children: projectData.name
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                        mt: "2",
                        children: projectData.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Wrap, {
                        shouldWrapChildren: true,
                        mt: "5",
                        fontWeight: 700,
                        color: tagColor,
                        children: projectData.tags && projectData.tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                                color: "inherit",
                                px: "3",
                                children: tag
                            }, tag)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                alignItems: "center",
                pb: {
                    base: "2rem",
                    md: 0
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    minW: {
                        base: 160,
                        xl: 190
                    },
                    spacing: "10",
                    w: "full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                        align: {
                            base: "center",
                            lg: "flex-start"
                        },
                        spacing: "1",
                        w: "full",
                        children: [
                            (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .getPeriod */ .X8)(projectData.kickstarter) === _lib_util__WEBPACK_IMPORTED_MODULE_4__/* .PERIOD.OPEN */ .aI.OPEN && (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .timeLeftToFund */ .jE)((ref7 = projectData.kickstarter) === null || ref7 === void 0 ? void 0 : ref7.close_timestamp) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                align: {
                                    base: "center",
                                    lg: "flex-start"
                                },
                                spacing: "4",
                                p: "1rem",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        fontSize: "xs",
                                        fontWeight: "700",
                                        children: [
                                            " ",
                                            "TIME LEFT"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        fontSize: "md",
                                        color: "emphasized",
                                        children: (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .timeLeftToFund */ .jE)((ref1 = projectData.kickstarter) === null || ref1 === void 0 ? void 0 : ref1.close_timestamp)
                                    })
                                ]
                            }),
                            (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .getPeriod */ .X8)(projectData.kickstarter) === _lib_util__WEBPACK_IMPORTED_MODULE_4__/* .PERIOD.NOT_OPEN */ .aI.NOT_OPEN && (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .timeLeftToFund */ .jE)((ref2 = projectData.kickstarter) === null || ref2 === void 0 ? void 0 : ref2.open_timestamp) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                align: {
                                    base: "center",
                                    lg: "flex-start"
                                },
                                spacing: "4",
                                p: "1rem",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        fontSize: "xs",
                                        fontWeight: "700",
                                        children: [
                                            " ",
                                            "OPEN IN"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        fontSize: "md",
                                        color: "emphasized",
                                        children: (0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .timeLeftToFund */ .jE)((ref3 = projectData.kickstarter) === null || ref3 === void 0 ? void 0 : ref3.open_timestamp)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                align: {
                                    base: "center",
                                    lg: "flex-start"
                                },
                                spacing: "4",
                                p: "1rem",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        mt: 5,
                                        fontSize: "xs",
                                        fontWeight: "700",
                                        children: "TOKENOMICS"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        mt: 14,
                                        fontSize: "md",
                                        color: "emphasized",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                children: [
                                                    "$",
                                                    totalRaised,
                                                    " "
                                                ]
                                            }),
                                            " raised"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        mt: 14,
                                        color: "emphasized",
                                        fontSize: "md",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: (ref4 = projectData.kickstarter) === null || ref4 === void 0 ? void 0 : ref4.total_supporters
                                            }),
                                            " supporters"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                mt: "2rem",
                                align: {
                                    base: "center",
                                    lg: "flex-start"
                                },
                                spacing: "4",
                                w: "full",
                                maxW: "sm",
                                p: "1rem",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FundButon__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    show: true,
                                    completed: !!((ref5 = projectData.kickstarter) === null || ref5 === void 0 ? void 0 : ref5.active),
                                    onClick: ()=>router.push(`/project/${projectData.id}`)
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }, projectData.slug));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActiveProject);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6775:
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
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stores_wallet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5297);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_wallet__WEBPACK_IMPORTED_MODULE_4__]);
_stores_wallet__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const FundButton = (p)=>{
    const { wallet , setWallet  } = (0,_stores_wallet__WEBPACK_IMPORTED_MODULE_4__/* .useStore */ .o)();
    const { show , completed , ...props } = p;
    const { 0: disabled , 1: setDisabled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const fundText = "Fund Now";
    const notConnectedText = "Connect Wallet to Fund";
    const completedText = "Details";
    return show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        w: "100%",
        h: "48px",
        colorScheme: "indigo",
        rightIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_3__.CaretRight, {
            size: 20
        }),
        disabled: disabled,
        ...props,
        children: completed ? fundText : completedText
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FundButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;