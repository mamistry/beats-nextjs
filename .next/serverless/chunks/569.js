"use strict";
exports.id = 569;
exports.ids = [569];
exports.modules = {

/***/ 8473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);



const CustomApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Welcome to web!"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "app",
                children: Component.PageLayout ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component.PageLayout, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomApp);


/***/ }),

/***/ 4736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../node_modules/next/document.js
var next_document = __webpack_require__(331);
// EXTERNAL MODULE: external "@emotion/server/create-instance"
var create_instance_ = __webpack_require__(9552);
var create_instance_default = /*#__PURE__*/__webpack_require__.n(create_instance_);
// EXTERNAL MODULE: external "@emotion/cache"
var cache_ = __webpack_require__(1913);
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_);
;// CONCATENATED MODULE: ./config/createEmotionCache.tsx

const isBrowser = typeof document !== "undefined";
// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
    let insertionPoint;
    if (isBrowser) {
        const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
        insertionPoint = emotionInsertionPoint !== null && emotionInsertionPoint !== void 0 ? emotionInsertionPoint : undefined;
    }
    return cache_default()({
        key: "mui-style",
        insertionPoint
    });
};

;// CONCATENATED MODULE: ./pages/_document.tsx




class MyDocument extends next_document["default"] {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "manifest",
                            href: "/manifest.json"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "apple-touch-icon",
                            href: "/icon.png"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "theme-color",
                            content: "#fff"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const _document = (MyDocument);
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx)=>{
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
    const originalRenderPage = ctx.renderPage;
    // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    const { extractCriticalToChunks  } = create_instance_default()(cache);
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>function EnhanceApp(props) {
                    return /*#__PURE__*/ jsx_runtime_.jsx(App, {
                        ...props
                    });
                }
        })
    ;
    const initialProps = await next_document["default"].getInitialProps(ctx);
    // This is important. It prevents Emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ jsx_runtime_.jsx("style", {
            "data-emotion": `${style.key} ${style.ids.join(" ")}`,
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: style.css
            }
        }, style.key)
    );
    return {
        ...initialProps,
        emotionStyleTags
    };
};


/***/ }),

/***/ 7020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/4VWZivUI2it0u1NCy1l9D/_buildManifest.js","static/4VWZivUI2it0u1NCy1l9D/_ssgManifest.js","static/4VWZivUI2it0u1NCy1l9D/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-d4c7fbe780b853ea.js","static/chunks/main-15f66ec6222305d1.js","static/css/ef46db3751d8e999.css","static/chunks/pages/index-4c45b77940d9506f.js"],"/_app":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-d4c7fbe780b853ea.js","static/chunks/main-15f66ec6222305d1.js","static/css/32d668369076d8cb.css","static/chunks/pages/_app-c4b2c13a9bef782b.js"],"/_error":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-d4c7fbe780b853ea.js","static/chunks/main-15f66ec6222305d1.js","static/chunks/pages/_error-5f79c00932c7c9f1.js"],"/about":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-d4c7fbe780b853ea.js","static/chunks/main-15f66ec6222305d1.js","static/css/ef46db3751d8e999.css","static/chunks/pages/about-1b3be66aaaf86f3f.js"],"/videos/[slug]":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-d4c7fbe780b853ea.js","static/chunks/main-15f66ec6222305d1.js","static/chunks/pages/videos/[slug]-280c866d06debdbe.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 3978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 9450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;