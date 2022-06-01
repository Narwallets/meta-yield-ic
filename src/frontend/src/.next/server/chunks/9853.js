"use strict";
exports.id = 9853;
exports.ids = [9853];
exports.modules = {

/***/ 1327:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ colors)
/* harmony export */ });
/* harmony import */ var _chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1797);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_0__]);
_chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const colors = {
    ..._chakra_ui_pro_theme__WEBPACK_IMPORTED_MODULE_0__.theme.colors,
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    whiteAlpha: {
        50: "rgba(255, 255, 255, 0.04)",
        100: "rgba(255, 255, 255, 0.06)",
        200: "rgba(255, 255, 255, 0.08)",
        300: "rgba(255, 255, 255, 0.16)",
        400: "rgba(255, 255, 255, 0.24)",
        500: "rgba(255, 255, 255, 0.36)",
        600: "rgba(255, 255, 255, 0.48)",
        700: "rgba(255, 255, 255, 0.64)",
        800: "rgba(255, 255, 255, 0.80)",
        900: "rgba(255, 255, 255, 0.92)"
    },
    blackAlpha: {
        50: "rgba(0, 0, 0, 0.04)",
        100: "rgba(0, 0, 0, 0.06)",
        200: "rgba(0, 0, 0, 0.08)",
        300: "rgba(0, 0, 0, 0.16)",
        400: "rgba(0, 0, 0, 0.24)",
        500: "rgba(0, 0, 0, 0.36)",
        600: "rgba(0, 0, 0, 0.48)",
        700: "rgba(0, 0, 0, 0.64)",
        800: "rgba(0, 0, 0, 0.80)",
        900: "rgba(0, 0, 0, 0.92)"
    },
    slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a"
    },
    gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
    },
    red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d"
    },
    orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12"
    },
    yellow: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f"
    },
    green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d"
    },
    teal: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a"
    },
    cyan: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63"
    },
    lightBlue: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e"
    },
    blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a"
    },
    indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81"
    },
    purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87"
    },
    pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843"
    },
    rose: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337"
    },
    linkedin: {
        50: "#E8F4F9",
        100: "#CFEDFB",
        200: "#9BDAF3",
        300: "#68C7EC",
        400: "#34B3E4",
        500: "#00A0DC",
        600: "#008CC9",
        700: "#0077B5",
        800: "#005E93",
        900: "#004471"
    },
    facebook: {
        50: "#E8F4F9",
        100: "#D9DEE9",
        200: "#B7C2DA",
        300: "#6482C0",
        400: "#4267B2",
        500: "#385898",
        600: "#314E89",
        700: "#29487D",
        800: "#223B67",
        900: "#1E355B"
    },
    messenger: {
        50: "#D0E6FF",
        100: "#B9DAFF",
        200: "#A2CDFF",
        300: "#7AB8FF",
        400: "#2E90FF",
        500: "#0078FF",
        600: "#0063D1",
        700: "#0052AC",
        800: "#003C7E",
        900: "#002C5C"
    },
    whatsapp: {
        50: "#dffeec",
        100: "#b9f5d0",
        200: "#90edb3",
        300: "#65e495",
        400: "#3cdd78",
        500: "#22c35e",
        600: "#179848",
        700: "#0c6c33",
        800: "#01421c",
        900: "#001803"
    },
    twitter: {
        50: "#E5F4FD",
        100: "#C8E9FB",
        200: "#A8DCFA",
        300: "#83CDF7",
        400: "#57BBF5",
        500: "#1DA1F2",
        600: "#1A94DA",
        700: "#1681BF",
        800: "#136B9E",
        900: "#0D4D71"
    },
    telegram: {
        50: "#E3F2F9",
        100: "#C5E4F3",
        200: "#A2D4EC",
        300: "#7AC1E4",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#007AB8",
        700: "#006BA1",
        800: "#005885",
        900: "#003F5E"
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9853:
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
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1327);
/* harmony import */ var _stores_balance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8204);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dfinity_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5088);
/* harmony import */ var _dfinity_auth_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_dfinity_auth_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _stores_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_constants_colors__WEBPACK_IMPORTED_MODULE_4__, _stores_balance__WEBPACK_IMPORTED_MODULE_5__, _stores_auth__WEBPACK_IMPORTED_MODULE_8__]);
([_constants_colors__WEBPACK_IMPORTED_MODULE_4__, _stores_balance__WEBPACK_IMPORTED_MODULE_5__, _stores_auth__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// import { getConfig } from "../../config";





const Header = (props)=>{
    const { loggedIn , principal , actor , setLoggedIn , setPrincipal , setActor  } = (0,_stores_auth__WEBPACK_IMPORTED_MODULE_8__/* .useStore */ .oR)();
    const { balance , setBalance  } = (0,_stores_balance__WEBPACK_IMPORTED_MODULE_5__/* .useStore */ .o)();
    const { 0: signInAccountId , 1: setSignInAccountId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: client , 1: setClient  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const isDesktop = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)({
        base: false,
        lg: true
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();
    // const config = getConfig()
    const onConnect = async ()=>{
        client === null || client === void 0 ? void 0 : client.login({
            identityProvider: "https://identity.ic0.app/#authorize",
            // process.env.NEXT_PUBLIC_DFX_NETWORK === "ic"
            //   ? "https://identity.ic0.app/#authorize"
            //   : `http://${config.canisterIds.INTERNET_IDENTITY_CANISTER_ID}.localhost:8000/#authorize`,
            onSuccess: handleAuth
        });
    };
    const logout = async ()=>{
        await (client === null || client === void 0 ? void 0 : client.logout());
        setLoggedIn(false);
        setPrincipal("");
    // setActor(createActor());
    };
    const handleAuth = ()=>{
        console.log("in handle auth");
        console.log(client === null || client === void 0 ? void 0 : client.getIdentity());
        // Update Auth Store
        setLoggedIn(true);
        const tempPrincipal = client === null || client === void 0 ? void 0 : client.getIdentity().getPrincipal();
        if (tempPrincipal) {
            setPrincipal(tempPrincipal.toString());
        }
    // setActor(
    //   createActor({
    //     agentOptions: {
    //       identity: client?.getIdentity(),
    //     },
    //   })
    // );
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (async ()=>{
            const tempClient = await _dfinity_auth_client__WEBPACK_IMPORTED_MODULE_7__.AuthClient.create();
            setClient(tempClient);
            const id = tempClient.getIdentity();
            if (await tempClient.isAuthenticated()) {
                handleAuth();
            }
        })();
    }, []);
    // useEffect(() => {
    //   (async () => {
    //     try {
    //       const tempWallet = await getWallet();
    //       if (!wallet) {
    //         setWallet(tempWallet);
    //       }
    //       if (tempWallet && tempWallet.getAccountId()) {
    //         setSignInAccountId(tempWallet.getAccountId());
    //         setBalance(await getBalance(tempWallet!));
    //       }
    //       setLogin(tempWallet && tempWallet.getAccountId() ? true : false);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   })();
    //   setInterval(async () => {
    //     const tempWallet = await getWallet();
    //     if (tempWallet && tempWallet.getAccountId()) {
    //       const balance = await getBalance(tempWallet);
    //       setBalance(balance);
    //     }
    //   }, 5000);
    // }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        as: "section",
        pb: {
            base: "12",
            md: "24"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            as: "nav",
            alignContent: "flex-end",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
                maxW: "container.2xl",
                py: {
                    base: "3",
                    lg: "4"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                    justify: "space-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                            onClick: ()=>router.push(`/`)
                            ,
                            cursor: "pointer",
                            alignItems: "center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                objectFit: "cover",
                                src: "/logo.svg",
                                alt: "logo"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spacer, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Show, {
                            above: "md",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
                                variant: "link",
                                spacing: "1",
                                alignItems: "flex-end",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        href: "/#projects",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            fontWeight: 600,
                                            fontSize: "md",
                                            color: _constants_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.indigo[500] */ .O.indigo[500],
                                            "aria-current": "page",
                                            variant: "nav",
                                            children: [
                                                " ",
                                                "Projects",
                                                " "
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                        href: "/#how-it-works",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            fontWeight: 600,
                                            fontSize: "16px",
                                            variant: "nav",
                                            children: [
                                                " ",
                                                "How it works",
                                                " "
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Spacer, {}),
                        loggedIn ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Show, {
                                    above: "lg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Square, {
                                            minW: "30px",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                                boxSize: "20px",
                                                objectFit: "cover",
                                                src: "/stakeSymbol.svg",
                                                alt: "stakeToken"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                            children: balance
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                                    children: [
                                        isDesktop ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuButton, {
                                            px: 4,
                                            py: 2,
                                            children: [
                                                principal === null || principal === void 0 ? void 0 : principal.replace(principal.substring(5, principal.length - 5), '....'),
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {})
                                            ]
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuButton, {
                                            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton,
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.HamburgerIcon, {
                                                h: "22px"
                                            }),
                                            variant: "none"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuList, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                                    onClick: ()=>logout()
                                                    ,
                                                    children: "Disconnect"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Show, {
                                                    below: "lg",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuDivider, {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                                            onClick: ()=>router.push("/#projects")
                                                            ,
                                                            children: "Projects"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
                                                            onClick: ()=>router.push("/#how-it-works")
                                                            ,
                                                            children: "How it works"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            color: "blue",
                            borderColor: "blue",
                            variant: "outline",
                            onClick: ()=>onConnect()
                            ,
                            children: "Connect"
                        })
                    ]
                })
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8204:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set)=>({
        balance: 0,
        setBalance: (value)=>set((state)=>({
                    ...state,
                    balance: value
                })
            )
    })
);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;