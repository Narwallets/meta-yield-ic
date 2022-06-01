"use strict";
exports.id = 3599;
exports.ids = [3599];
exports.modules = {

/***/ 3599:
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





const RewardsCalculator = (props)=>{
    const kickstarter = props.kickstarter;
    const { 0: goalSelected , 1: setGoalSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: estimatedRewards , 1: setEstimatedRewards  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: amountOfStNear , 1: setAmountOfStNear  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const onGoalChange = (e)=>{
        setGoalSelected(parseInt(e.target.value));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const calculateRewards = ()=>{
            if (kickstarter) {
                const goal = kickstarter.goals.find((g)=>g.id === goalSelected
                );
                if (goal) {
                    const tokenAwardPerStnear = goal.tokens_to_release_per_stnear;
                    setEstimatedRewards((0,_lib_util__WEBPACK_IMPORTED_MODULE_4__/* .yton */ .qc)(tokenAwardPerStnear) * amountOfStNear);
                }
            }
        };
        calculateRewards();
    }, [
        amountOfStNear,
        goalSelected
    ]);
    if (!kickstarter) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
            spacing: "6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                    fontSize: "sm",
                    fontWeight: "subtle",
                    children: "REWARDS CALCULATOR"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Select, {
                    placeholder: "Select a goal",
                    size: "lg",
                    onChange: (e)=>onGoalChange(e)
                    ,
                    children: kickstarter.goals.map((g)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: g.id,
                            children: g.name
                        }, g.id)
                    )
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                    fontSize: "sm",
                    fontWeight: "subtle",
                    children: "AMOUNT OF stNEAR"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                    variant: "outline",
                    size: "md",
                    placeholder: "0",
                    onChange: (e)=>{
                        setAmountOfStNear(parseInt(e.target.value));
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {
                    children: [
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            fontSize: "sm",
                            fontWeight: "subtle",
                            children: "REWARDS"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                fontSize: "4xl",
                                lineHeight: "10",
                                fontWeight: "bold",
                                color: "black",
                                children: estimatedRewards
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                fontSize: "2xl",
                                lineHeight: "8",
                                fontWeight: "semibold",
                                color: "gray.400",
                                children: kickstarter.project_token_symbol
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RewardsCalculator);


/***/ })

};
;