"use strict";
exports.id = 1707;
exports.ids = [1707];
exports.modules = {

/***/ 1707:
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
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4875);
/* harmony import */ var _GoalCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8469);





const Goal = (props)=>{
    const { isActive , isCompleted , isLastGoal , isFirstGoal , kickstarterGoal , ...stackProps } = props;
    const isMobile = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBreakpointValue)({
        base: true,
        md: false
    });
    const orientation = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBreakpointValue)({
        base: "vertical",
        md: "horizontal"
    });
    if (!props) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        spacing: "4",
        direction: {
            base: "row",
            md: "column"
        },
        flex: "1",
        ...stackProps,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                spacing: "0",
                align: "center",
                direction: {
                    base: "column",
                    md: "row"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                        display: isMobile ? "none" : "initial",
                        orientation: orientation,
                        borderWidth: "1px",
                        borderColor: isFirstGoal ? "transparent" : isCompleted || isActive ? "accent" : "inherit"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GoalCircle__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        isActive: isActive,
                        isCompleted: isCompleted,
                        goalNumber: (kickstarterGoal === null || kickstarterGoal === void 0 ? void 0 : kickstarterGoal.id) + 1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                        orientation: orientation,
                        borderWidth: "1px",
                        borderColor: isCompleted && !isLastGoal ? "accent" : isLastGoal ? "transparent" : "inherit"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                spacing: "0.5",
                pb: isMobile && !isLastGoal ? "8" : "0",
                align: {
                    base: "start",
                    md: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        color: "emphasized",
                        fontWeight: "medium",
                        children: kickstarterGoal === null || kickstarterGoal === void 0 ? void 0 : kickstarterGoal.name.replaceAll('_', ' ')
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        color: "emphasized",
                        fontWeight: "medium",
                        children: kickstarterGoal ? `${(0,_lib_util__WEBPACK_IMPORTED_MODULE_3__/* .formatToLocaleNear */ .ag)((0,_lib_util__WEBPACK_IMPORTED_MODULE_3__/* .yton */ .qc)(kickstarterGoal === null || kickstarterGoal === void 0 ? void 0 : kickstarterGoal.desired_amount))} stNEAR ` : "N/D"
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Goal);


/***/ }),

/***/ 8469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_2__);



const GoalCircle = (props)=>{
    const { isCompleted , isActive , goalNumber  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Circle, {
        size: "8",
        // bg={isCompleted ? "accent" : "inherit"}
        backgroundColor: isCompleted ? "green.400" : isActive ? "indigo.500" : "lightgrey",
        color: isCompleted ? "white" : "gray.400",
        borderWidth: isCompleted ? "0" : "2px",
        borderColor: isActive ? "accent" : "none",
        children: isCompleted ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_2__.Check, {
            size: 32
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Circle, {
            color: isActive ? "white" : "gray.900",
            size: "3",
            children: goalNumber
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoalCircle);


/***/ })

};
;