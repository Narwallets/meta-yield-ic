"use strict";
exports.id = 9323;
exports.ids = [9323];
exports.modules = {

/***/ 9323:
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_icp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6733);
/* harmony import */ var _stores_wallet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5297);
/* harmony import */ var _stores_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8191);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4875);
/* harmony import */ var _validation_fundSchemaValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3921);
/* harmony import */ var _validation_withdrawSchemaValidation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4545);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_wallet__WEBPACK_IMPORTED_MODULE_7__, _stores_auth__WEBPACK_IMPORTED_MODULE_8__]);
([_stores_wallet__WEBPACK_IMPORTED_MODULE_7__, _stores_auth__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Funding = (props)=>{
    const project = props.project;
    const supportedDeposited = props.supportedDeposited;
    const isWithdrawEnabled = supportedDeposited > 0;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { wallet  } = (0,_stores_wallet__WEBPACK_IMPORTED_MODULE_7__/* .useStore */ .o)();
    const { loggedIn , principal , actor , setLoggedIn , setPrincipal , setActor  } = (0,_stores_auth__WEBPACK_IMPORTED_MODULE_8__/* .useStore */ .oR)();
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();
    const MINIMUM_TO_FUND =  true ? 1 : 0;
    const { 0: amountDeposit , 1: setAmountDeposit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: balance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: fundingNeeded , 1: setFundingNeeded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const { 0: lockUpPeriod , 1: setLockUpPeriod  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const { 0: currentFundingGoal , 1: setCurrentFundingGoal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: estimatedRewards , 1: setEstimatedRewards  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const handleChangeDeposit = (event)=>setAmountDeposit(event.target.value)
    ;
    const onMaxClickDeposit = async (event)=>{
        formikDeposit.setFieldValue("amount_deposit", balance);
        setAmountDeposit(balance);
    };
    const onMaxClickWithdraw = async (event)=>formikWithdraw.setFieldValue("amount_withdraw", supportedDeposited)
    ;
    const initialValuesDeposit = {
        amount_deposit: 0,
        balance: 0
    };
    const formikDeposit = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
        initialValues: initialValuesDeposit,
        validationSchema: _validation_fundSchemaValidation__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
        validateOnMount: true,
        enableReinitialize: true,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values)=>{
            if (values.amount_deposit < MINIMUM_TO_FUND) {
                toast({
                    title: "Transaction error.",
                    description: `The amount to deposit must be at least ${MINIMUM_TO_FUND} stNEAR`,
                    status: "error",
                    duration: 9000,
                    position: "top-right",
                    isClosable: true
                });
            } else {
                const result = await (0,_lib_icp__WEBPACK_IMPORTED_MODULE_6__/* .fundToKickstarter */ .E0)(principal, project.id, values.amount_deposit);
            }
        }
    });
    const initialValuesWithdraw = {
        amount_withdraw: 0,
        supporterDeposited: 0
    };
    const formikWithdraw = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({
        initialValues: initialValuesWithdraw,
        validationSchema: _validation_withdrawSchemaValidation__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
        validateOnMount: true,
        enableReinitialize: true,
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: async (values)=>{
            if (values.amount_deposit <= 0) {
                toast({
                    title: "Transaction error.",
                    description: "The amount to withdraw must be greater than 0",
                    status: "error",
                    duration: 9000,
                    position: "top-right",
                    isClosable: true
                });
            } else {
                const result = await withdrawAmount((0,_lib_util__WEBPACK_IMPORTED_MODULE_9__/* .ntoy */ .nq)(values.amount_withdraw));
            }
        }
    });
    const withdrawAmount = async (amount)=>{
        (0,_lib_icp__WEBPACK_IMPORTED_MODULE_6__/* .withdraw */ .XW)(principal, project.id, amount).then((val)=>{
            console.log("Return withdraw success", val);
        });
    };
    const getFormikError = ()=>{
        const error = formikDeposit.errors && formikDeposit.errors.amount_deposit ? formikDeposit.errors.amount_deposit : '';
        return {
            __html: error
        };
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (project) {
            const current = (0,_lib_util__WEBPACK_IMPORTED_MODULE_9__/* .getCurrentFundingGoal */ .eu)(project.kickstarter.goals, project.kickstarter.total_deposited);
            setCurrentFundingGoal(current);
            if (current) {
                var ref;
                setFundingNeeded(parseInt(current.desired_amount) / 10 ** 24);
                const lockup = moment__WEBPACK_IMPORTED_MODULE_4___default()(current.unfreeze_timestamp).diff(moment__WEBPACK_IMPORTED_MODULE_4___default()(project === null || project === void 0 ? void 0 : (ref = project.kickstarter) === null || ref === void 0 ? void 0 : ref.close_timestamp), "months");
                setLockUpPeriod(lockup);
            }
        }
    }, [
        project
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentFundingGoal) {
            const tokenAwardPerStnear = currentFundingGoal.tokens_to_release_per_stnear;
            setEstimatedRewards((0,_lib_util__WEBPACK_IMPORTED_MODULE_9__/* .yton */ .qc)(tokenAwardPerStnear) * amountDeposit);
        }
    }, [
        amountDeposit,
        currentFundingGoal
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        formikDeposit.setFieldValue("balance", balance);
    }, [
        balance
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            const tempBalance = await (0,_lib_icp__WEBPACK_IMPORTED_MODULE_6__/* .getBalance */ .sb)(principal);
            setBalance(tempBalance);
        })();
    }, [
        principal
    ]);
    if (!project) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
        defaultIndex: 0,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabList, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                        children: "Deposit"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                        isDisabled: !isWithdrawEnabled,
                        children: "Withdraw"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanels, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.InputGroup, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.InputLeftAddon, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Square, {
                                                    minW: "30px",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                                            boxSize: "30px",
                                                            objectFit: "cover",
                                                            src: "/stNEARorig.svg"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                            ml: 2,
                                                            children: "stNEAR"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                id: "amount_deposit",
                                                name: "amount_deposit",
                                                placeholder: "0",
                                                value: formikDeposit.values.amount_deposit,
                                                onPaste: formikDeposit.handleChange,
                                                onBlur: formikDeposit.handleBlur,
                                                onChange: (e)=>{
                                                    handleChangeDeposit(e);
                                                    formikDeposit.handleChange(e);
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.InputRightElement, {
                                                width: "4.5rem",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                    h: "1.75rem",
                                                    size: "sm",
                                                    onClick: onMaxClickDeposit,
                                                    children: "Max"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        colorScheme: "blue",
                                        size: "lg",
                                        // disabled={!formikDeposit.isValid}
                                        onClick: (e)=>formikDeposit.handleSubmit(e)
                                        ,
                                        children: "Deposit"
                                    })
                                ]
                            }),
                            !formikDeposit.isValid && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                mt: 5,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    dangerouslySetInnerHTML: getFormikError(),
                                    color: 'red'
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                mt: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    fontSize: "md",
                                    lineHeight: "6",
                                    fontWeight: "semibold",
                                    color: "gray.500",
                                    children: [
                                        "ESTIMATED REWARDS: ",
                                        estimatedRewards,
                                        " ",
                                        project.kickstarter.project_token_symbol
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.InputGroup, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.InputLeftAddon, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Square, {
                                                    minW: "30px",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                                            boxSize: "30px",
                                                            objectFit: "cover",
                                                            src: "/stNEARorig.svg"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                            ml: 2,
                                                            children: "stNEAR"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                                                id: "amount_withdraw",
                                                name: "amount_withdraw",
                                                placeholder: "0",
                                                value: formikWithdraw.values.amount_withdraw,
                                                onPaste: formikWithdraw.handleChange,
                                                onBlur: formikWithdraw.handleBlur,
                                                onChange: formikWithdraw.handleChange
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.InputRightElement, {
                                                width: "4.5rem",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                    h: "1.75rem",
                                                    size: "sm",
                                                    onClick: onMaxClickWithdraw,
                                                    children: "Max"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        colorScheme: "blue",
                                        size: "lg",
                                        disabled: !formikWithdraw.isValid,
                                        onClick: (e)=>{
                                            formikWithdraw.handleSubmit(e);
                                        },
                                        children: "Withdraw"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                mt: 4,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    fontSize: "md",
                                    lineHeight: "6",
                                    fontWeight: "semibold",
                                    color: "gray.500",
                                    children: [
                                        "CURRENT DEPOSITS: ",
                                        supportedDeposited,
                                        " stNEAR"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Funding);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const fundSchemaValidation = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    amount_deposit: yup__WEBPACK_IMPORTED_MODULE_0__.number().max(yup__WEBPACK_IMPORTED_MODULE_0__.ref("balance"), `You dont have enough stICP.`)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fundSchemaValidation);


/***/ }),

/***/ 4545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const withdrawSchemaValidation = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    amount_withdraw: yup__WEBPACK_IMPORTED_MODULE_0__.number().required("The amount to withdraw is required").moreThan(0, 'The amount to withdraw must be greater than 0')
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withdrawSchemaValidation);


/***/ })

};
;