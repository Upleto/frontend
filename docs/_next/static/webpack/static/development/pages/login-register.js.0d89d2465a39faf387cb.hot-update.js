webpackHotUpdate("static/development/pages/login-register.js",{

/***/ "./pages/login-register.tsx":
/*!**********************************!*\
  !*** ./pages/login-register.tsx ***!
  \**********************************/
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
/* harmony import */ var _src_redux_reducers_reducerCombo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/redux/reducers/reducerCombo */ "./src/redux/reducers/reducerCombo.ts");
/* harmony import */ var _src_components_LoginRegister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/LoginRegister */ "./src/components/LoginRegister/index.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _jsxFileName = "/Users/david.chen/Documents/projects/frontend/pages/login-register.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_1___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var commonKeyWords = publicRuntimeConfig.commonKeyWords,
    themeColor = publicRuntimeConfig.themeColor;

var callbackOnMount = function callbackOnMount(store) {
  store.substitueReducers(_src_redux_reducers_reducerCombo__WEBPACK_IMPORTED_MODULE_4__["renterPlusLoginReducers"]);
};

var Page = function Page() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_src_components_Head_ManifestHead__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "login-register",
    description: "login-register",
    keywords: commonKeyWords,
    themeColor: themeColor,
    hrefCanonical: "/login-register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_src_components_LoginRegister__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_src_utils_redux_dynamicStoreCallbackWrap__WEBPACK_IMPORTED_MODULE_3__["default"])({
  callbackOnMount: callbackOnMount,
  Child: Page
}));

/***/ })

})
//# sourceMappingURL=login-register.js.0d89d2465a39faf387cb.hot-update.js.map