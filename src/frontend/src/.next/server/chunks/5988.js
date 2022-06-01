"use strict";
exports.id = 5988;
exports.ids = [5988];
exports.modules = {

/***/ 5988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_GoalsProgressCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./pages/components/Card.tsx
var Card = __webpack_require__(4415);
// EXTERNAL MODULE: ./pages/components/Goal.tsx
var Goal = __webpack_require__(1707);
;// CONCATENATED MODULE: ./hooks/useGoal.ts

const useGoal = (props)=>{
    const { maxGoal , initialGoal =0  } = props;
    const { 0: currentGoalId , 1: setCurrentGoalId  } = (0,external_react_.useState)(initialGoal);
    const canGoToNextGoal = (0,external_react_.useMemo)(()=>currentGoalId + 1 <= maxGoal
    , [
        currentGoalId,
        maxGoal
    ]);
    const canGoToPrevGoal = (0,external_react_.useMemo)(()=>currentGoalId - 1 >= 0
    , [
        currentGoalId
    ]);
    const setGoalId = (0,external_react_.useCallback)((goal)=>{
        const newGoal = goal instanceof Function ? goal(currentGoalId) : goal;
        if (newGoal >= 0 && newGoal <= maxGoal) {
            setCurrentGoalId(newGoal);
            return;
        }
        throw new Error('Goal not valid');
    }, [
        maxGoal,
        currentGoalId
    ]);
    const goToNextGoal = (0,external_react_.useCallback)(()=>{
        if (canGoToNextGoal) {
            setCurrentGoalId((goal)=>goal + 1
            );
        }
    }, [
        canGoToNextGoal
    ]);
    const goToPrevGoal = (0,external_react_.useCallback)(()=>{
        if (canGoToPrevGoal) {
            setCurrentGoalId((goal)=>goal - 1
            );
        }
    }, [
        canGoToPrevGoal
    ]);
    const reset = (0,external_react_.useCallback)(()=>{
        setCurrentGoalId(0);
    }, []);
    return [
        currentGoalId,
        {
            goToNextGoal,
            goToPrevGoal,
            canGoToNextGoal,
            canGoToPrevGoal,
            setGoalId,
            reset
        }, 
    ];
};

// EXTERNAL MODULE: ./lib/util.ts
var util = __webpack_require__(4875);
;// CONCATENATED MODULE: ./pages/components/GoalsProgressCard.tsx







const GoalsProgressCard = (props)=>{
    const kickstarter = props.kickstarter;
    const getCurrentFundingGoal = ()=>{
        if (kickstarter && kickstarter.goals) {
            const [current] = kickstarter.goals.filter((g)=>parseInt(g.desired_amount) > parseInt(kickstarter.total_deposited)
            );
            if (!current) {
                return kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.goals[kickstarter.goals.length - 1];
            }
            return current;
        }
        return undefined;
    };
    const getCurrentGoalId = ()=>{
        var ref;
        if (kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.active) return (ref = getCurrentFundingGoal()) === null || ref === void 0 ? void 0 : ref.id;
        if (kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.successful) return kickstarter === null || kickstarter === void 0 ? void 0 : kickstarter.winner_goal_id;
        return undefined;
    };
    const { 0: goal1 , 1: setGoal  } = (0,external_react_.useState)();
    const { 0: goalRaised , 1: setGoalRaised  } = (0,external_react_.useState)(0);
    const { 0: goalProgress , 1: setGoalProgress  } = (0,external_react_.useState)(0);
    const { 0: goalStatus , 1: setGoalStatus  } = (0,external_react_.useState)(undefined);
    const [currentGoalId, { setGoalId  }] = useGoal({
        maxGoal: kickstarter && kickstarter.goals ? kickstarter.goals.length : 0,
        initialGoal: getCurrentGoalId()
    });
    const getGoalStatus = ()=>{
        if (!kickstarter.active) {
            if (kickstarter.successful) return "Completed";
            return "Timed Out";
        }
        const goal = getCurrentFundingGoal();
        if (goal) {
            const isOpen = (0,util/* isOpenPeriod */.yX)(kickstarter);
            if (isOpen) {
                return "In Progress...";
            } else return "Coming soon...";
        }
        return "";
    };
    (0,external_react_.useEffect)(()=>{
        if (kickstarter && kickstarter.goals) {
            const goal = kickstarter.goals.find((g)=>g.id === currentGoalId
            );
            if (goal) {
                const goalDesiredAmount = parseInt(goal.desired_amount);
                const deposited = parseInt(kickstarter.total_deposited);
                const raised = currentGoalId === 0 ? deposited : deposited > goalDesiredAmount ? deposited : goalDesiredAmount - deposited;
                setGoal(goal);
                setGoalRaised(raised);
                setGoalProgress(raised * 100 / goalDesiredAmount);
                setGoalStatus(getGoalStatus());
            }
        }
        console.log("@current", currentGoalId);
    }, [
        currentGoalId,
        kickstarter
    ]);
    if (!props || !props.kickstarter) return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}));
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                children: "GOALS"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                py: {
                    base: "4",
                    md: "8"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                            spacing: "0",
                            direction: {
                                base: "column",
                                md: "row"
                            },
                            children: kickstarter.goals.map((goal)=>/*#__PURE__*/ jsx_runtime_.jsx(Goal["default"], {
                                    kickstarterGoal: goal,
                                    isActive: currentGoalId === goal.id,
                                    isCompleted: parseInt(kickstarter.total_deposited) >= parseInt(goal.desired_amount),
                                    isFirstGoal: goal.id === 0,
                                    isLastGoal: kickstarter.goals.length === goal.id + 1
                                }, goal.id)
                            )
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Progress, {
                            colorScheme: "indigo",
                            value: goalProgress,
                            height: "28px",
                            rounded: "2xl",
                            shadow: "sm"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Spacer, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tag, {
                            children: goalStatus
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_GoalsProgressCard = (GoalsProgressCard);


/***/ })

};
;