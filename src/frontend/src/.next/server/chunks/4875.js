"use strict";
exports.id = 4875;
exports.ids = [4875];
exports.modules = {

/***/ 6733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "WE": () => (/* binding */ claimAll),
  "E0": () => (/* binding */ fundToKickstarter),
  "sb": () => (/* binding */ getBalance),
  "T$": () => (/* binding */ getBalanceOfTokenForSupporter),
  "KV": () => (/* binding */ getCanisterMetadata),
  "AA": () => (/* binding */ getStNearPrice),
  "P_": () => (/* binding */ getSupportedKickstarters),
  "I4": () => (/* binding */ getSupporterDetailedList),
  "at": () => (/* binding */ getSupporterEstimatedStNear),
  "XW": () => (/* binding */ withdraw),
  "BL": () => (/* binding */ withdrawAll)
});

// UNUSED EXPORTS: claimPartial, getActiveProjects, getKickstarter, getKickstarterIdFromSlug, getKickstarters, getMetapoolAccountInfo, getProjectDetails, getSupporterTotalDepositInKickstarter, getTotalKickstarters, storageDepositOfTokenForSupporter

;// CONCATENATED MODULE: ./lib/methods.ts
// katherine gasless methods (view methods)
const methods_katherineViewMethods = {
    getTotalKickstarters: "get_total_kickstarters",
    getKickstarterIdFromSlug: "get_kickstarter_id_from_slug",
    getKickstarter: "get_kickstarter",
    getKickstarters: "get_kickstarters",
    getKickstarterTotalGoals: "get_kickstarter_total_goals",
    getKickstarterGoal: "get_kickstarter_goal",
    getActiveProjects: "get_active_projects",
    getProjectDetails: "get_project_details",
    getSupporterTotalDepositInKickstarter: "get_supporter_total_deposit_in_kickstarter",
    getSupporterTotalRewards: "get_supporter_total_rewards",
    getSupporterAvailableRewards: "get_supporter_available_rewards",
    getSupportedDetailedList: "get_supported_detailed_list",
    getSupporterEstimatedStNear: "get_supporter_estimated_stnear",
    getSupportedProjects: "get_supported_projects"
};
// katherine gas methods (change methods)
const katherineChangeMethods = {
    withdraw: "withdraw",
    withdrawAll: "withdraw_all",
    claimAll: "claim_all_kickstarter_tokens"
};
const metaPoolMethods = {
    getStNearPrice: "get_st_near_price",
    getAccountInfo: "get_account_info"
};
const projectTokenViewMethods = {
    storageBalanceOf: "storage_balance_of",
    metadata: "ft_metadata",
    storageBalanceBounds: "storage_balance_bounds"
};
const projectTokenChangeMethods = {
    storageDeposit: "storage_deposit"
};

;// CONCATENATED MODULE: ./lib/icp.ts

const getTotalKickstarters = async ()=>{
    return callPublicKatherineMethod(katherineViewMethods.getTotalKickstarters, {});
};
const getSupportedKickstarters = async (supporter_id)=>{
    const st_near_price = await getStNearPrice();
    return callPublicKatherineMethod(methods_katherineViewMethods.getSupportedDetailedList, {
        supporter_id: supporter_id,
        st_near_price: st_near_price,
        from_index: 0,
        limit: 10
    });
};
const getSupporterTotalDepositInKickstarter = async (supporter_id, kickstarter_id)=>{
    const st_near_price = await getStNearPrice();
    return callPublicKatherineMethod(katherineViewMethods.getSupporterTotalDepositInKickstarter, {
        supporter_id: supporter_id,
        kickstarter_id: kickstarter_id,
        st_near_price: st_near_price
    });
};
const getSupporterEstimatedStNear = async (principal_id, kickstarter_id, price)=>{
    return callPublicKatherineMethod(methods_katherineViewMethods.getSupporterEstimatedStNear, {
        supporter_id: principal_id,
        kickstarter_id,
        st_near_price: price
    });
};
const getKickstarters = async ()=>{
    return callPublicKatherineMethod(katherineViewMethods.getKickstarters, {
        from_index: 0,
        limit: 10
    });
};
const getKickstarter = async (projectId)=>{
    return callPublicKatherineMethod(katherineViewMethods.getKickstarter, {
        kickstarter_id: projectId
    });
};
const getProjectDetails = async (projectId)=>{
    return callPublicKatherineMethod(katherineViewMethods.getProjectDetails, {
        kickstarter_id: projectId
    });
};
const getKickstarterIdFromSlug = async (slug)=>{
    return callPublicKatherineMethod(katherineViewMethods.getKickstarterIdFromSlug, {
        slug: slug
    });
};
const getActiveProjects = async ()=>{
    return callPublicKatherineMethod(katherineViewMethods.getActiveProjects, {
        from_index: 0,
        limit: 10
    });
};
const getStNearPrice = async ()=>{
    return callPublicMetapoolMethod(metaPoolMethods.getStNearPrice, {});
};
const getMetapoolAccountInfo = async (principal_id)=>{
    return callViewMetapoolMethod(metaPoolMethods.getAccountInfo, {
        account_id: principal_id
    });
};
const getBalance = async (principal_id)=>{
    const accountInfo = await getMetapoolAccountInfo(principal_id);
    // const balance = accountInfo.balance;
    throw "not defined";
};
const getSupporterDetailedList = async (supporter_id)=>{
    const st_near_price = await getStNearPrice();
    return callPublicKatherineMethod(methods_katherineViewMethods.getSupportedDetailedList, {
        supporter_id: supporter_id,
        st_near_price: st_near_price,
        from_index: 0,
        limit: 10
    });
};
const fundToKickstarter = async (principal_id, kickstarter_id, amount)=>{};
const withdrawAll = async (principal_id, kickstarter_id)=>{
    throw "not defined";
};
const withdraw = async (principal_id, kickstarter_id, amount)=>{
    throw "not defined";
};
const claimAll = async (principal_id, kickstarter_id)=>{
    throw "not defined";
};
const claimPartial = async (principal_id, kickstarter_id, amount)=>{
    throw "not defined";
};
const getCanisterMetadata = async (canister_id)=>{
    throw "not defined";
};
const getBalanceOfTokenForSupporter = async (principal_id, tokenContractAddress)=>{
    throw "not defined";
};
const storageDepositOfTokenForSupporter = async (principal_id, tokenContractAddress)=>{
    throw "not defined";
};
const callPublicKatherineMethod = async (method, args)=>{
    throw "not defined";
};
const callPublicMetapoolMethod = async (method, args)=>{
    throw "not defined";
};
const callViewMetapoolMethod = async (method, args)=>{
    throw "not defined";
};


/***/ }),

/***/ 4875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nq": () => (/* binding */ ntoy),
/* harmony export */   "qc": () => (/* binding */ yton),
/* harmony export */   "RI": () => (/* binding */ yoctoToDollarStr),
/* harmony export */   "ag": () => (/* binding */ formatToLocaleNear),
/* harmony export */   "jE": () => (/* binding */ timeLeftToFund),
/* harmony export */   "yX": () => (/* binding */ isOpenPeriod),
/* harmony export */   "aI": () => (/* binding */ PERIOD),
/* harmony export */   "X8": () => (/* binding */ getPeriod),
/* harmony export */   "U$": () => (/* binding */ getMyProjectsFounded),
/* harmony export */   "eu": () => (/* binding */ getCurrentFundingGoal),
/* harmony export */   "D": () => (/* binding */ getWinnerGoal)
/* harmony export */ });
/* unused harmony exports decodeJsonRpcData, encodeJsonRpcData, getTxFunctionCallMethod, getLogsAndErrorsFromReceipts, getPanicError, formatJSONErr */
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6733);


const BN = __webpack_require__(2961);
const decodeJsonRpcData = (data)=>{
    let res = "";
    for(let i = 0; i < data.length; i++){
        res += String.fromCharCode(data[i]);
    }
    return JSON.parse(res);
};
const encodeJsonRpcData = (data)=>{
    return Buffer.from(JSON.stringify(data)).toString("base64");
};
/**
 * convert nears expressed as a js-number with MAX 4 decimals into a yoctos-string
 * @param n amount in near MAX 6 DECIMALS
 */ function ntoy(n) {
    let by1e6 = Math.round(n * 1000000).toString(); // near * 1e6 - round
    let yoctosText = by1e6 + "0".repeat(18); //  mul by 1e18 => yoctos = near * 1e(6+18)
    return yoctosText;
}
/**
 * returns amount truncated to 4 decimal places
 * @param yoctos amount expressed in yoctos
 */ function yton(yoctos) {
    if (!yoctos) return 0;
    if (yoctos.indexOf(".") !== -1) throw new Error("a yocto string can't have a decimal point: " + yoctos);
    let negative = false;
    if (yoctos.startsWith("-")) {
        negative = true;
        yoctos = yoctos.slice(1);
    }
    let padded = yoctos.padStart(25, "0"); //at least 0.xxx
    let nearsText = padded.slice(0, -24) + "." + padded.slice(-24, -20); //add decimal point. Equivalent to near=yoctos/1e24 and truncate to 4 dec places
    return Number(nearsText) * (negative ? -1 : 1);
}
/**
 * returns near amount in dollars. Result is truncated, default to 2 decimal places
 * @param value amount expressed in yoctos
 * @param nearPrice near price in dollars
 * @param decimals decimals to truncate result value. default to 2
 */ const yoctoToDollarStr = (value, nearPrice, decimals = 3)=>{
    // const result = new BN(value).div(new BN(10).pow(new BN(24))).mul(new BN(nearPrice))
    const result = yton(value) * nearPrice;
    return result.toLocaleString();
};
/**
 * returns near amount formatted in locale string. Result is truncated, default to 4 decimal places
 * @param value amount expressed in yoctos
 * @param decimals decimals to truncate result value. default to 2
 */ const formatToLocaleNear = (value, decimals = 4)=>{
    return value.toLocaleString(undefined, {
        maximumFractionDigits: decimals,
        minimumFractionDigits: 0
    });
};
const timeLeftToFund = (time)=>{
    if (!time || moment__WEBPACK_IMPORTED_MODULE_0___default()(time).diff(moment__WEBPACK_IMPORTED_MODULE_0___default().utc()) < 0) {
        return "";
    }
    const timeMoment = moment__WEBPACK_IMPORTED_MODULE_0___default()(time);
    const now = moment__WEBPACK_IMPORTED_MODULE_0___default().utc();
    return timeMoment.diff(now, "days") > 0 ? `${timeMoment.diff(now, "days")} days` : timeMoment.diff(now, "hours") >= 1 ? `${timeMoment.diff(now, "hours")} hours` : `${timeMoment.diff(now, "minutes")} minutes`;
};
const isOpenPeriod = (kickstarter)=>{
    return getPeriod(kickstarter) === PERIOD.OPEN;
};
var PERIOD;
(function(PERIOD) {
    PERIOD[PERIOD["NOT_OPEN"] = 0] = "NOT_OPEN";
    PERIOD[PERIOD["OPEN"] = 1] = "OPEN";
    PERIOD[PERIOD["CLOSE"] = 2] = "CLOSE";
})(PERIOD || (PERIOD = {}));
const getPeriod = (kickstarter)=>{
    const nowDate = Date.now();
    if (!kickstarter) {
        return null;
    }
    if (nowDate < kickstarter.open_timestamp) {
        return PERIOD.NOT_OPEN;
    }
    if (kickstarter.open_timestamp <= nowDate && nowDate <= kickstarter.close_timestamp) {
        return PERIOD.OPEN;
    }
    if (nowDate > kickstarter.close_timestamp) {
        return PERIOD.CLOSE;
    }
/* if (moment.utc().diff(moment(kickstarter.open_timestamp)) < 0) {
    return PERIOD.NOT_OPEN;
  }

  if ( moment.utc().isBetween(moment(kickstarter.open_timestamp), moment(kickstarter.close_timestamp))) {
    return PERIOD.OPEN;
  }
  return PERIOD.CLOSE; */ };
const getMyProjectsFounded = async (id, wallet)=>{
    const projectsFounded = await (0,_icp__WEBPACK_IMPORTED_MODULE_1__/* .getSupportedKickstarters */ .P_)(wallet.getAccountId());
    if (!projectsFounded) {
        return null;
    }
    return projectsFounded.find((val)=>val.kickstarter_id == id
    );
};
const getCurrentFundingGoal = (goals, total_deposited)=>{
    const [currentFundingGoal] = goals.filter((g)=>parseInt(g.desired_amount) >= total_deposited
    );
    if (!currentFundingGoal) {
        return goals[goals.length - 1];
    }
    return currentFundingGoal;
};
const getWinnerGoal = (kickstarter)=>{
    if (kickstarter.successful) {
        return kickstarter.goals[kickstarter.winner_goal_id];
    }
    return null;
};
const getTxFunctionCallMethod = (finalExecOutcome)=>{
    var ref, ref1;
    let method = undefined;
    if ((ref = finalExecOutcome.transaction) === null || ref === void 0 ? void 0 : (ref1 = ref.actions) === null || ref1 === void 0 ? void 0 : ref1.length) {
        const actions = finalExecOutcome.transaction.actions;
        //recover methodName of first FunctionCall action
        for(let n = 0; n < actions.length; n++){
            let item = actions[n];
            if ("FunctionCall" in item) {
                method = item.FunctionCall.method_name;
                break;
            }
        }
    }
    return method;
};
const getLogsAndErrorsFromReceipts = (txResult)=>{
    let result = [];
    try {
        for (let ro of txResult.receipts_outcome){
            //get logs
            for (let logLine of ro.outcome.logs){
                result.push(logLine);
            }
            //check status.Failure
            if (ro.outcome.status.Failure) {
                result.push(JSON.stringify(ro.outcome.status.Failure));
            }
        }
    } catch (ex) {
        result.push("internal error parsing result outcome");
    } finally{
        return result.join("\n");
    }
};
const getPanicError = (txResult)=>{
    try {
        for (let ro of txResult.receipts_outcome){
            //check status.Failure
            if (ro.outcome.status.Failure) {
                return formatJSONErr(ro.outcome.status.Failure);
            }
        }
        return "";
    } catch (ex) {
        return "internal error parsing result outcome";
    }
};
const formatJSONErr = (obj)=>{
    let text = JSON.stringify(obj);
    text = text.replace(/{/g, " ");
    text = text.replace(/}/g, " ");
    text = text.replace(/"/g, "");
    //---------
    //try some enhancements
    //---------
    //convert yoctoNEAR to near
    const largeNumbersFound = text.match(/\d{14,50}/g);
    if (largeNumbersFound) {
        for (const matches of largeNumbersFound){
            const parts = matches.split(" ");
            const yoctoString = parts.pop() || "";
            if (yoctoString.length >= 20) {
                // convert to NEAR
                text = text.replace(new RegExp(yoctoString, "g"), yton(yoctoString).toString());
            }
        }
    }
    //if panicked-at: return relevant info only
    //debug: console.error(text); //show info in the console before removing extra info
    const KEY = "panicked at ";
    const kl = KEY.length;
    let n = text.indexOf(KEY);
    if (n > 0 && n < text.length - kl - 5) {
        const i = text.indexOf("'", n + kl + 4);
        const cut = text.slice(n + kl, i);
        if (cut.trim().length > 5) {
            //debug: console.error(text.slice(n, i + 80)) //show info in the console before removing extra info
            text = cut;
        }
    }
    return text;
};


/***/ })

};
;