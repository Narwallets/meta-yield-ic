"use strict";
exports.id = 8191;
exports.ids = [8191];
exports.modules = {

/***/ 6805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "idlFactory": () => (/* binding */ idlFactory),
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'greet' : IDL.Func([IDL.Text], [IDL.Text], []) });
};
const init = ({ IDL }) => { return []; };


/***/ }),

/***/ 8191:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oR": () => (/* binding */ useStore)
/* harmony export */ });
/* unused harmony exports DEX_CANISTER_ID, AKITA_CANISTER_ID, GOLDENDIP20_CANISTER_ID, LEDGER_CANISTER_ID, whitelist, host, createActor */
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var _dfinity_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4515);
/* harmony import */ var _dfinity_agent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dfinity_agent__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const idlFactory = __webpack_require__(6805);
const DEX_CANISTER_ID = process.env.META_YIELD_CANISTER_ID;
const AKITA_CANISTER_ID = process.env.AKITADIP20_CANISTER_ID;
const GOLDENDIP20_CANISTER_ID = process.env.GOLDENDIP20_CANISTER_ID;
const LEDGER_CANISTER_ID = process.env.LEDGER_CANISTER_ID;
const whitelist = [
    DEX_CANISTER_ID,
    AKITA_CANISTER_ID,
    GOLDENDIP20_CANISTER_ID,
    LEDGER_CANISTER_ID
];
const host = (/* unused pure expression or super */ null && ( true ? `https://ic0.app` : 0));
function createActor(options) {
    const hostOptions = {
        host:  true ? `https://${process.env.META_YIELD_CANISTER_ID}.ic0.app` : 0
    };
    if (!options) {
        options = {
            agentOptions: hostOptions
        };
    } else if (!options.agentOptions) {
        options.agentOptions = hostOptions;
    } else {
        options.agentOptions.host = hostOptions.host;
    }
    const agent = new HttpAgent({
        ...options.agentOptions
    });
    // Fetch root key for certificate validation during development
    if (false) {}
    // Creates an actor with using the candid interface and the HttpAgent
    return Actor.createActor(idlFactory, {
        agent,
        canisterId: process.env.META_YIELD_CANISTER_ID,
        ...options === null || options === void 0 ? void 0 : options.actorOptions
    });
}
const useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set)=>({
        loggedIn: false,
        principal: '',
        // actor: createActor(),
        actor: undefined,
        setLoggedIn: (value)=>set((state)=>({
                    ...state,
                    loggedIn: value
                })
            )
        ,
        setPrincipal: (value)=>set((state)=>({
                    ...state,
                    principal: value
                })
            )
        ,
        setActor: (value)=>set((state)=>({
                    ...state,
                    actor: value
                })
            )
    })
);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;