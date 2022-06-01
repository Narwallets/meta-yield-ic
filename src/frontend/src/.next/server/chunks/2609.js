"use strict";
exports.id = 2609;
exports.ids = [2609];
exports.modules = {

/***/ 2609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_ProjectCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "phosphor-react"
var external_phosphor_react_ = __webpack_require__(9628);
;// CONCATENATED MODULE: ./utils/textHandlers.tsx
function truncateText(text, long) {
    return text.length > long ? text.substring(0, long - 3) + "..." : text;
}

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/components/ProjectCard.tsx






const ProjectCard = (props)=>{
    const { project , rootProps  } = props;
    const router = (0,router_.useRouter)();
    const spacing = (0,react_.useBreakpointValue)({
        base: "4",
        md: "5"
    });
    const borderRadius = (0,react_.useBreakpointValue)({
        base: "md",
        md: "xl"
    });
    const textColor = (0,react_.useColorModeValue)("gray.700", "gray.400");
    const tagColor = (0,react_.useColorModeValue)("gray.600", "gray.300");
    if (!props || !project) return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}));
    const { id , slug , name , imageUrl , motto , avatarUrl , verified , active , description , tags ,  } = project;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
        minW: "370px",
        maxW: "370px",
        spacing: spacing,
        ...rootProps,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                position: "relative",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.AspectRatio, {
                    ratio: 4 / 3,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                        src: imageUrl,
                        alt: name,
                        draggable: "false",
                        objectFit: "contain",
                        fallback: /*#__PURE__*/ jsx_runtime_.jsx(react_.Skeleton, {}),
                        borderRadius: borderRadius
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    p: 5,
                    position: "relative",
                    spacing: "1",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Circle, {
                                position: "absolute",
                                backgroundColor: "white",
                                maxH: "65px",
                                maxW: "65px",
                                boxShadow: "xl",
                                top: "-50px",
                                left: "20px",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Circle, {
                                    maxW: "60px",
                                    m: "2",
                                    overflow: "hidden",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                        src: avatarUrl,
                                        alt: "project",
                                        width: "48px",
                                        height: "48px"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                            spacing: {
                                base: "1",
                                md: "2"
                            },
                            direction: {
                                base: "column",
                                md: "row"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                mt: 5,
                                fontWeight: "medium",
                                fontSize: "lg",
                                color: textColor,
                                children: name
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                            spacing: {
                                base: "1",
                                md: "2"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                children: description && truncateText(description, 150)
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Wrap, {
                            shouldWrapChildren: true,
                            fontWeight: 700,
                            color: tagColor,
                            children: tags && tags.map((tag)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Tag, {
                                    backgroundColor: "indigo.100",
                                    color: "inherit",
                                    px: "3",
                                    children: tag
                                }, tag)
                            )
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                align: "center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                    w: "150px",
                    h: "48px",
                    size: "md",
                    colorScheme: "indigo",
                    rightIcon: /*#__PURE__*/ jsx_runtime_.jsx(external_phosphor_react_.CaretRight, {
                        size: 20
                    }),
                    onClick: ()=>router.push(`/project/${id}`)
                    ,
                    children: "Fund Now"
                })
            })
        ]
    }));
};
/* harmony default export */ const components_ProjectCard = (ProjectCard);


/***/ })

};
;