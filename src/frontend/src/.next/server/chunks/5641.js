"use strict";
exports.id = 5641;
exports.ids = [5641];
exports.modules = {

/***/ 5641:
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
/* harmony import */ var _stores_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_wallet__WEBPACK_IMPORTED_MODULE_3__, _stores_auth__WEBPACK_IMPORTED_MODULE_4__]);
([_stores_wallet__WEBPACK_IMPORTED_MODULE_3__, _stores_auth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ConnectButton = (props)=>{
    const { loggedIn , principal , actor , setLoggedIn , setPrincipal , setActor  } = (0,_stores_auth__WEBPACK_IMPORTED_MODULE_4__/* .useStore */ .oR)();
    const { wallet , setWallet  } = (0,_stores_wallet__WEBPACK_IMPORTED_MODULE_3__/* .useStore */ .o)();
    const { 0: connected , 1: setconnected  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: client , 1: setClient  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    // const config = getConfig();
    const onConnect = async ()=>{
        client === null || client === void 0 ? void 0 : client.login({
            identityProvider: "https://identity.ic0.app/#authorize",
            // process.env.NEXT_PUBLIC_DFX_NETWORK === "ic"
            //   ? "https://identity.ic0.app/#authorize"
            //   : `http://${config.canisterIds.INTERNET_IDENTITY_CANISTER_ID}.localhost:8000/#authorize`,
            onSuccess: handleAuth
        });
    };
    const handleAuth = ()=>{
        console.log(client === null || client === void 0 ? void 0 : client.getIdentity());
        // Update Auth Store
        setLoggedIn(true);
        const tempPrincipal = client === null || client === void 0 ? void 0 : client.getIdentity().getPrincipal();
        if (tempPrincipal) {
            setPrincipal(tempPrincipal.toString());
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
            width: "100%",
            colorScheme: "indigo",
            onClick: ()=>onConnect()
            ,
            children: props && props.text ? props.text : "Connect Wallet"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;