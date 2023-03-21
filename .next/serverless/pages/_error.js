"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 2256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(855);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7194);

      
      
      
      

      
      const { processEnv } = __webpack_require__(5360)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(4736)

      const appMod = __webpack_require__(8473)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(2906)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(2906),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,
        reactRoot: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/_error",
        buildId: "4VWZivUI2it0u1NCy1l9D",
        escapedBuildId: "4VWZivUI2it0u1NCy1l9D",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"52753649d1ec9a34ab11d14d54725bb1",previewModeSigningKey:"78c9d75b4649863b8b0b6da6b6ed2d408809a1719d718f45de4a44c9a8685f0a",previewModeEncryptionKey:"1f5076194340e93140d2acdd2ffbaaf048f322e099f923dc62f7278de0cd232e"}
      })
      
    

/***/ }),

/***/ 1913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("@emotion/server/create-instance");

/***/ }),

/***/ 5360:
/***/ ((module) => {

module.exports = require("@next/env");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 9371:
/***/ ((module) => {

module.exports = require("next/dist/compiled/node-fetch");

/***/ }),

/***/ 7999:
/***/ ((module) => {

module.exports = require("next/dist/compiled/path-to-regexp");

/***/ }),

/***/ 600:
/***/ ((module) => {

module.exports = require("next/dist/server/accept-header.js");

/***/ }),

/***/ 2155:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/index.js");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 5071:
/***/ ((module) => {

module.exports = require("next/dist/server/render-result.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 2779:
/***/ ((module) => {

module.exports = require("next/dist/server/request-meta.js");

/***/ }),

/***/ 2357:
/***/ ((module) => {

module.exports = require("next/dist/server/send-payload/index.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 7664:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/escape-regexp.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 2374:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-locale-cookie.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5714:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-route-from-asset-path.js");

/***/ }),

/***/ 5753:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-match.js");

/***/ }),

/***/ 9521:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/prepare-destination.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9819:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4269:
/***/ ((module) => {

module.exports = require("url");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [380,569], () => (__webpack_exec__(2256)));
module.exports = __webpack_exports__;

})();