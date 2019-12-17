webpackHotUpdate("static/development/pages/renter.js",{

/***/ "./pages/renter.tsx":
/*!**************************!*\
  !*** ./pages/renter.tsx ***!
  \**************************/
/*! exports provided: Page, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Head_ManifestHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Head/ManifestHead */ "./src/components/Head/ManifestHead.tsx");
/* harmony import */ var _src_utils_redux_dynamicStoreCallbackWrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/utils/redux/dynamicStoreCallbackWrap */ "./src/utils/redux/dynamicStoreCallbackWrap.tsx");
/* harmony import */ var _src_components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Link */ "./src/components/Link/index.tsx");
/* harmony import */ var _src_redux_reducers_renter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/redux/reducers/renter */ "./src/redux/reducers/renter.ts");
/* harmony import */ var _src_components_Renter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/Renter */ "./src/components/Renter/index.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _jsxFileName = "/Users/david.chen/Documents/projects/frontend/pages/renter.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_1___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var commonKeyWords = publicRuntimeConfig.commonKeyWords,
    themeColor = publicRuntimeConfig.themeColor;

var callbackOnMount = function callbackOnMount(store) {
  store.substitueReducers({
    renter: _src_redux_reducers_renter__WEBPACK_IMPORTED_MODULE_5__["default"]
  });
};

var callbackOnUnmount = function callbackOnUnmount(store) {
  store.removeReducers(['renter']);
};

var Page = function Page() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_src_components_Head_ManifestHead__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "renter",
    description: "renter",
    keywords: commonKeyWords,
    themeColor: themeColor,
    hrefCanonical: "/renter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_src_components_Renter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_src_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "back to index")));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_src_utils_redux_dynamicStoreCallbackWrap__WEBPACK_IMPORTED_MODULE_3__["default"])({
  callbackOnMount: callbackOnMount,
  callbackOnUnmount: callbackOnUnmount,
  Child: Page
}));

/***/ })

})
//# sourceMappingURL=renter.js.9b3dbc209e715dec92ac.hot-update.js.map