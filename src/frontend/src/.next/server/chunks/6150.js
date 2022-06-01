"use strict";
exports.id = 6150;
exports.ids = [6150];
exports.modules = {

/***/ 6150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectStatus": () => (/* binding */ ProjectStatus),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RewardsCalculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3599);
/* harmony import */ var _GoalsProgressCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5988);
/* harmony import */ var _FundingStatusCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3739);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_icp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6733);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4875);
/* harmony import */ var _RewardsEstimated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3259);
/* harmony import */ var _ConnectButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5641);
/* harmony import */ var _stores_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8191);
/* harmony import */ var _Funding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9323);
/* harmony import */ var _FAQ__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2720);
/* harmony import */ var _Documents__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3042);
/* harmony import */ var _PageLoading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1141);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9628);
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(phosphor_react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _stores_project__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3801);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RewardsEstimated__WEBPACK_IMPORTED_MODULE_9__, _ConnectButton__WEBPACK_IMPORTED_MODULE_10__, _stores_auth__WEBPACK_IMPORTED_MODULE_11__, _Funding__WEBPACK_IMPORTED_MODULE_12__, _FAQ__WEBPACK_IMPORTED_MODULE_13__, _stores_project__WEBPACK_IMPORTED_MODULE_18__]);
([_RewardsEstimated__WEBPACK_IMPORTED_MODULE_9__, _ConnectButton__WEBPACK_IMPORTED_MODULE_10__, _stores_auth__WEBPACK_IMPORTED_MODULE_11__, _Funding__WEBPACK_IMPORTED_MODULE_12__, _FAQ__WEBPACK_IMPORTED_MODULE_13__, _stores_project__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















var ProjectStatus;
(function(ProjectStatus) {
    ProjectStatus[ProjectStatus["NOT_LOGGIN"] = 0] = "NOT_LOGGIN";
    ProjectStatus[ProjectStatus["LOGGIN"] = 1] = "LOGGIN";
    ProjectStatus[ProjectStatus["FUTURE"] = 2] = "FUTURE";
    ProjectStatus[ProjectStatus["ACTIVE"] = 3] = "ACTIVE";
    ProjectStatus[ProjectStatus["CLOSE"] = 4] = "CLOSE";
    ProjectStatus[ProjectStatus["FUNDED"] = 5] = "FUNDED";
    ProjectStatus[ProjectStatus["SUCCESS"] = 6] = "SUCCESS";
    ProjectStatus[ProjectStatus["UNSUCCESS"] = 7] = "UNSUCCESS";
})(ProjectStatus || (ProjectStatus = {}));
const ProjectDetails = (props)=>{
    const { all , currentProject: project1 , setAll , setCurrentProject  } = (0,_stores_project__WEBPACK_IMPORTED_MODULE_18__/* .useStore */ .o)();
    const { loggedIn , principal  } = (0,_stores_auth__WEBPACK_IMPORTED_MODULE_11__/* .useStore */ .oR)();
    const tagsColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.600", "gray.300");
    const isMobile = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
        base: true,
        md: false
    });
    const { 0: showFund , 1: setShowFund  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: showWithdraw , 1: setShowWithdraw  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showClaim , 1: setShowClaim  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showAprove , 1: setShowAprove  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: showRewardsCalculator , 1: setShowRewardsCalculator  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: showRewardEstimated , 1: setShowRewardsEstimated  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ProjectStatus.NOT_LOGGIN);
    const { 0: ammountClaim , 1: setRewards  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: lockupDate , 1: setLockupDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: endDate , 1: setEndDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: cliffDate , 1: setCliffDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: myProjectFounded , 1: setMyProjectFounded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: ammountWithdraw , 1: setAmmountWithdraw  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const totalRaisedColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("green.500", "green.500");
    const tabListCss = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
        base: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.css)({
            scrollbarWidth: "none",
            "::-webkit-scrollbar": {
                display: "none"
            },
            "-webkit-overflow-scrolling": "touch",
            boxShadow: "inset 0 -2px 0 rgba(0, 0, 0, 0.1)",
            border: "0 none"
        }),
        lg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.css)({})
    });
    const withdrawAllStnear = async ()=>{
        // call to contract for withdraw
        (0,_lib_icp__WEBPACK_IMPORTED_MODULE_7__/* .withdrawAll */ .BL)(principal, parseInt(props.id)).then((val)=>{
            console.log("Return withdrawAll", val);
        });
    };
    const claim = async ()=>{
        const readyToClaim = await isReadyForClaimPToken();
        if (!readyToClaim) {
        // storageDepositOfTokenForSupporter(
        //   tempWallet,
        //   project?.kickstarter.token_contract_address
        // );
        } else {
            (0,_lib_icp__WEBPACK_IMPORTED_MODULE_7__/* .claimAll */ .WE)(principal, parseInt(props.id));
        }
    };
    const refreshStatus = (project, thisProjectFounded)=>{
        if (loggedIn) {
            setStatus(ProjectStatus.LOGGIN);
            if ((0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .isOpenPeriod */ .yX)(project.kickstarter)) {
                if (project.kickstarter.active) {
                    setStatus(ProjectStatus.ACTIVE);
                    if (thisProjectFounded && parseInt(thisProjectFounded.supporter_deposit) > 0) {
                        setStatus(ProjectStatus.FUNDED);
                    }
                } else {
                    if (project.kickstarter.successful && thisProjectFounded) {
                        setStatus(ProjectStatus.SUCCESS);
                    } else {
                        setStatus(ProjectStatus.UNSUCCESS);
                    }
                }
            } else {
                if ((0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .getPeriod */ .X8)(project.kickstarter) === _lib_util__WEBPACK_IMPORTED_MODULE_8__/* .PERIOD.CLOSE */ .aI.CLOSE) {
                    if (project.kickstarter.successful && thisProjectFounded) {
                        setStatus(ProjectStatus.SUCCESS);
                    } else {
                        setStatus(ProjectStatus.UNSUCCESS);
                    }
                } else {
                    // The project is not yet open
                    setStatus(ProjectStatus.FUTURE);
                }
            }
        }
    };
    const getWithdrawAmmount = async (wallet, id, price)=>(0,_lib_icp__WEBPACK_IMPORTED_MODULE_7__/* .getSupporterEstimatedStNear */ .at)(wallet, id, price)
    ;
    const calculateAmmountToWithdraw = async ()=>{
        if (!(project1 === null || project1 === void 0 ? void 0 : project1.kickstarter.active) && myProjectFounded) {
            calculateTokensToClaim();
            const price = await (0,_lib_icp__WEBPACK_IMPORTED_MODULE_7__/* .getStNearPrice */ .AA)();
            const amount = (project1 === null || project1 === void 0 ? void 0 : project1.kickstarter.stnear_price_at_unfreeze) && parseInt(project1 === null || project1 === void 0 ? void 0 : project1.kickstarter.stnear_price_at_unfreeze) > 0 ? project1 === null || project1 === void 0 ? void 0 : project1.kickstarter.stnear_price_at_unfreeze : await getWithdrawAmmount(principal, parseInt(props.id), price);
            if (amount) {
                setAmmountWithdraw((0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .yton */ .qc)(amount));
            }
        } else {
            setAmmountWithdraw(myProjectFounded && myProjectFounded.supporter_deposit ? (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .yton */ .qc)(myProjectFounded.supporter_deposit) : 0);
        }
    };
    const calculateTokensToClaim = ()=>{
        const winnerGoal = (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .getWinnerGoal */ .D)(project1 === null || project1 === void 0 ? void 0 : project1.kickstarter);
        if (winnerGoal && myProjectFounded) {
            const formatDate = "YYYY/MM/DD HH:MM";
            const rewards = (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .yton */ .qc)(myProjectFounded.available_rewards.toString());
            setRewards(rewards);
            setLockupDate(moment__WEBPACK_IMPORTED_MODULE_6___default()(winnerGoal.unfreeze_timestamp).format(formatDate));
            setEndDate(moment__WEBPACK_IMPORTED_MODULE_6___default()(winnerGoal.end_timestamp).format(formatDate));
            setCliffDate(moment__WEBPACK_IMPORTED_MODULE_6___default()(winnerGoal.cliff_timestamp).format(formatDate));
        }
    };
    const isReadyForClaimPToken = async ()=>{
        if (project1 === null || project1 === void 0 ? void 0 : project1.kickstarter.token_contract_address) {
            return await (0,_lib_icp__WEBPACK_IMPORTED_MODULE_7__/* .getBalanceOfTokenForSupporter */ .T$)(principal, project1 === null || project1 === void 0 ? void 0 : project1.kickstarter.token_contract_address);
        }
        return 0;
    };
    const isUnfreeze = ()=>{
        const winnerGoal = (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .getWinnerGoal */ .D)(project1 === null || project1 === void 0 ? void 0 : project1.kickstarter);
        const now = Date.now();
        // const result = moment.utc().diff(moment(winnerGoal.unfreeze_timestamp)) > 0;
        return now > winnerGoal.unfreeze_timestamp;
    };
    const isCliffOpen = ()=>{
        const winnerGoal = (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .getWinnerGoal */ .D)(project1 === null || project1 === void 0 ? void 0 : project1.kickstarter);
        const now = Date.now();
        return now > winnerGoal.cliff_timestamp;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setShowWithdraw(false);
        setShowClaim(false);
        setShowFund(false);
        setShowRewardsCalculator(false);
        switch(status){
            case ProjectStatus.LOGGIN:
                break;
            case ProjectStatus.FUTURE:
                break;
            case ProjectStatus.ACTIVE:
                setShowFund(true);
                break;
            case ProjectStatus.FUNDED:
                calculateAmmountToWithdraw();
                setShowFund(true);
                setShowWithdraw(true);
                setShowRewardsEstimated(true);
                break;
            case ProjectStatus.SUCCESS:
                calculateAmmountToWithdraw();
                setShowWithdraw(false);
                setShowFund(false);
                setShowClaim(true);
                break;
            case ProjectStatus.UNSUCCESS:
                calculateAmmountToWithdraw();
                setShowWithdraw(true);
                break;
        }
    }, [
        status
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            if (project1 && loggedIn) {
                const thisProjectFounded = await (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .getMyProjectsFounded */ .U$)(project1 === null || project1 === void 0 ? void 0 : project1.kickstarter.id, principal);
                setMyProjectFounded(thisProjectFounded);
                refreshStatus(project1, thisProjectFounded);
                const isApproved = await isReadyForClaimPToken();
                setShowAprove(isApproved === null);
            }
        })();
    }, [
        principal,
        props,
        project1
    ]);
    if (!project1) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PageLoading__WEBPACK_IMPORTED_MODULE_15__["default"], {}));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
        maxW: "container.xl",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
            as: "section",
            templateRows: {
                base: "1fr",
                lg: "1fr"
            },
            templateColumns: {
                base: "1fr",
                lg: "repeat(2, 1fr)"
            },
            gap: "2rem",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                            alignItems: {
                                base: "center",
                                md: "flex-start"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Circle, {
                                    position: "relative",
                                    backgroundColor: "white",
                                    maxH: "55px",
                                    maxW: "55px",
                                    mr: 2,
                                    boxShadow: "xl",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Circle, {
                                        maxW: "60px",
                                        m: "2",
                                        overflow: "hidden",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                            src: project1 === null || project1 === void 0 ? void 0 : project1.avatarUrl,
                                            alt: "project",
                                            width: "48px",
                                            height: "48px"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                    as: "h2",
                                    fontWeight: "bold",
                                    fontSize: {
                                        base: "xl",
                                        md: "4xl"
                                    },
                                    children: project1 === null || project1 === void 0 ? void 0 : project1.name
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                            display: isMobile ? "none" : "initial",
                            mt: "2",
                            children: project1 === null || project1 === void 0 ? void 0 : project1.motto
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                            alignItems: "center",
                            mt: "5",
                            children: [
                                !isMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Wrap, {
                                            shouldWrapChildren: true,
                                            color: tagsColor,
                                            children: (project1 === null || project1 === void 0 ? void 0 : project1.tags) && (project1 === null || project1 === void 0 ? void 0 : project1.tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                                                    color: "inherit",
                                                    px: "3",
                                                    children: tag
                                                }, tag)
                                            ))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spacer, {})
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                            href: project1 === null || project1 === void 0 ? void 0 : project1.projectUrl,
                                            isExternal: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                colorScheme: "gray",
                                                leftIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_16__.Link, {}),
                                                variant: "outline",
                                                children: "Website"
                                            })
                                        }),
                                        (project1 === null || project1 === void 0 ? void 0 : project1.twitter) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                            href: project1.twitter,
                                            isExternal: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                colorScheme: "gray",
                                                variant: "outline",
                                                rounded: "full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(phosphor_react__WEBPACK_IMPORTED_MODULE_16__.TwitterLogo, {
                                                    weight: "fill"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                            mt: 5,
                            src: project1 === null || project1 === void 0 ? void 0 : project1.imageUrl,
                            alt: "project",
                            borderRadius: "xl",
                            fit: "cover"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
                    rowSpan: {
                        base: 0,
                        lg: 2
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        px: {
                            base: "0",
                            md: "6"
                        },
                        py: {
                            base: "0",
                            md: "6"
                        },
                        borderRadius: "lg",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                            spacing: {
                                base: "3",
                                md: "10"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FundingStatusCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                    kickstarter: project1 === null || project1 === void 0 ? void 0 : project1.kickstarter
                                }),
                                (project1 === null || project1 === void 0 ? void 0 : project1.kickstarter.goals) && (project1 === null || project1 === void 0 ? void 0 : project1.kickstarter.goals.length) > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GoalsProgressCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    kickstarter: project1 === null || project1 === void 0 ? void 0 : project1.kickstarter
                                }),
                                showRewardEstimated && loggedIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RewardsEstimated__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    kickstarter: project1 === null || project1 === void 0 ? void 0 : project1.kickstarter
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                    w: "100%",
                                    children: [
                                        loggedIn && showFund && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Funding__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                            project: project1,
                                            supportedDeposited: myProjectFounded && myProjectFounded.supporter_deposit ? (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .yton */ .qc)(myProjectFounded.supporter_deposit) : 0
                                        }),
                                        !loggedIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ConnectButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                            text: "Connect to fund"
                                        }),
                                        showClaim && loggedIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                                w: "100%",
                                                children: [
                                                    myProjectFounded && (myProjectFounded.supporter_deposit > 0 || myProjectFounded.rewards > 0) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                        children: "BONDS"
                                                    }),
                                                    // show if there are deposits left to claim
                                                    myProjectFounded && myProjectFounded.supporter_deposit > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                                        direction: {
                                                            base: "column",
                                                            md: "row"
                                                        },
                                                        spacing: "1rem",
                                                        p: 3,
                                                        boxShadow: "lg",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                                                direction: "row",
                                                                w: {
                                                                    base: "full",
                                                                    md: "auto"
                                                                },
                                                                justifyContent: {
                                                                    base: "space-around",
                                                                    md: "space-between"
                                                                },
                                                                alignItems: "center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                                                        boxSize: {
                                                                            base: "80px",
                                                                            md: "40px"
                                                                        },
                                                                        objectFit: "cover",
                                                                        src: project1 === null || project1 === void 0 ? void 0 : project1.kickstarter.project_token_icon,
                                                                        alt: "near"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                                                                        h: "80px",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                                color: "grey",
                                                                                fontSize: "xxs",
                                                                                fontWeight: 700,
                                                                                children: [
                                                                                    "NEARS",
                                                                                    " "
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                                color: "black",
                                                                                fontWeight: 700,
                                                                                children: [
                                                                                    (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .yton */ .qc)(myProjectFounded.deposit_in_near),
                                                                                    " "
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                                children: " "
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                                                direction: "row",
                                                                w: {
                                                                    base: "full",
                                                                    md: "auto"
                                                                },
                                                                justifyContent: {
                                                                    base: "space-around",
                                                                    md: "space-between"
                                                                },
                                                                alignItems: "center",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                                                                        h: "80px",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                                color: "grey",
                                                                                fontSize: "xxs",
                                                                                fontWeight: 700,
                                                                                children: "BOND DUE"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                                fontWeight: 700,
                                                                                fontSize: "14px",
                                                                                children: lockupDate
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                                                                        h: "80px",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                                color: "grey",
                                                                                fontSize: "xxs",
                                                                                fontWeight: 700,
                                                                                children: [
                                                                                    "AVAILABLE",
                                                                                    " "
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                                children: [
                                                                                    (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .yton */ .qc)(myProjectFounded.deposit_in_near),
                                                                                    " "
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                                disabled: !isUnfreeze() || myProjectFounded.deposit_in_near <= 0,
                                                                colorScheme: "blue",
                                                                size: "lg",
                                                                onClick: withdrawAllStnear,
                                                                w: {
                                                                    base: "full",
                                                                    md: "min-content"
                                                                },
                                                                children: "Claim"
                                                            })
                                                        ]
                                                    }),
                                                    // show if there are pending rewards tokens to claim
                                                    myProjectFounded && myProjectFounded.rewards > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                                        direction: {
                                                            base: "column",
                                                            md: "row"
                                                        },
                                                        spacing: "1rem",
                                                        p: 3,
                                                        boxShadow: "lg",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                                                direction: "row",
                                                                w: {
                                                                    base: "full",
                                                                    md: "auto"
                                                                },
                                                                justifyContent: {
                                                                    base: "space-around",
                                                                    md: "space-between"
                                                                },
                                                                alignItems: "center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                                                        boxSize: {
                                                                            base: "80px",
                                                                            md: "40px"
                                                                        },
                                                                        objectFit: "cover",
                                                                        src: project1 === null || project1 === void 0 ? void 0 : project1.kickstarter.project_token_icon,
                                                                        alt: "ptoken"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                                                                        h: "80px",
                                                                        justify: "space-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                                color: "grey",
                                                                                fontSize: "xxs",
                                                                                fontWeight: 700,
                                                                                children: [
                                                                                    project1 === null || project1 === void 0 ? void 0 : project1.kickstarter.project_token_symbol,
                                                                                    " "
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                                color: "black",
                                                                                fontSize: "xxs",
                                                                                fontWeight: 700,
                                                                                children: [
                                                                                    (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .yton */ .qc)(myProjectFounded.rewards),
                                                                                    " "
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                                                direction: "row",
                                                                w: {
                                                                    base: "full",
                                                                    md: "auto"
                                                                },
                                                                justifyContent: {
                                                                    base: "space-around",
                                                                    md: "space-between"
                                                                },
                                                                alignItems: "center",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                                                                        h: "80px",
                                                                        justify: "space-between",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                                color: "grey",
                                                                                fontSize: "xxs",
                                                                                fontWeight: 700,
                                                                                children: "BOND DUE"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                                fontWeight: 700,
                                                                                fontSize: "14px",
                                                                                children: [
                                                                                    cliffDate,
                                                                                    " TO ",
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                                    " ",
                                                                                    endDate,
                                                                                    " "
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
                                                                        h: "80px",
                                                                        justify: "space-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                                color: "grey",
                                                                                fontSize: "xxs",
                                                                                fontWeight: 700,
                                                                                children: [
                                                                                    "AVAILABLE",
                                                                                    " "
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                                                children: [
                                                                                    (0,_lib_util__WEBPACK_IMPORTED_MODULE_8__/* .yton */ .qc)(myProjectFounded.available_rewards),
                                                                                    " "
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                                                disabled: !isCliffOpen || myProjectFounded.available_rewards <= 0,
                                                                colorScheme: "blue",
                                                                size: "lg",
                                                                onClick: claim,
                                                                w: {
                                                                    base: "full",
                                                                    md: "min-content"
                                                                },
                                                                children: showAprove ? "Aprove" : "Claim"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                showRewardsCalculator && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RewardsCalculator__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    kickstarter: project1 === null || project1 === void 0 ? void 0 : project1.kickstarter
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.GridItem, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabList, {
                                overflowX: {
                                    base: "auto",
                                    lg: "visible"
                                },
                                css: tabListCss,
                                w: {
                                    base: "calc(100vw - 4rem)",
                                    lg: "full"
                                },
                                my: {
                                    base: "auto"
                                },
                                minW: {
                                    base: "0",
                                    lg: "0"
                                },
                                maxW: {
                                    base: "none",
                                    lg: "none"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                                        children: "Campaign"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                                        children: "Team"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                                        children: "FAQ"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                                        children: "Roadmap"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                                        children: "Documents"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                                        children: "About"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanels, {
                                minHeight: "580px",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                fontSize: "sm",
                                                fontWeight: "subtle",
                                                children: "CAMPAIGN"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                                mt: 5,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: project1 === null || project1 === void 0 ? void 0 : project1.campaignHtml
                                                    }
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Team, {
                                            team: project1 === null || project1 === void 0 ? void 0 : project1.team
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FAQ__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                            data: project1 === null || project1 === void 0 ? void 0 : project1.faq
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                    fontSize: "sm",
                                                    fontWeight: "subtle",
                                                    children: "ROADMAP"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                                    mt: 5,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                                            src: project1 === null || project1 === void 0 ? void 0 : project1.roadmap.imageUrl,
                                                            alt: "project",
                                                            width: "400",
                                                            objectFit: "cover"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                                            href: project1 === null || project1 === void 0 ? void 0 : project1.roadmap.linkUrl,
                                                            isExternal: true,
                                                            children: [
                                                                "Full Roadmap ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_17__.ExternalLinkIcon, {
                                                                    mx: "2px"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Documents__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                            data: project1 === null || project1 === void 0 ? void 0 : project1.documents
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                fontSize: "sm",
                                                fontWeight: "subtle",
                                                children: "ABOUT"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                                mt: 5,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    dangerouslySetInnerHTML: {
                                                        __html: project1 === null || project1 === void 0 ? void 0 : project1.about
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
const Team = (props)=>{
    const team = props.team;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                fontSize: "sm",
                fontWeight: "subtle",
                children: "TEAM"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                divider: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.StackDivider, {}),
                spacing: "4",
                mt: "5",
                children: team.map((member, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                        fontSize: "sm",
                        px: "4",
                        spacing: "4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                direction: "row",
                                justify: "space-between",
                                spacing: "4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                                    spacing: "3",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
                                            name: member.name,
                                            boxSize: "10"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                                fontWeight: "medium",
                                                color: "emphasized",
                                                children: member.name
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                color: "muted",
                                sx: {
                                    "-webkit-box-orient": "vertical",
                                    "-webkit-line-clamp": "2",
                                    overflow: "hidden",
                                    display: "-webkit-box"
                                },
                                children: member.bio
                            })
                        ]
                    }, index)
                )
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectDetails);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;