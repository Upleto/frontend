webpackHotUpdate("static/development/pages/login-register.js",{

/***/ "./src/components/LoginRegister/index.tsx":
/*!************************************************!*\
  !*** ./src/components/LoginRegister/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_redux_actionCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/redux/actionCreator */ "./src/utils/redux/actionCreator.ts");
/* harmony import */ var _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/actionTypes */ "./src/redux/actions/actionTypes.ts");
var _jsxFileName = "/Users/david.chen/Documents/projects/frontend/src/components/LoginRegister/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







var LoginRegisterPageStyle = false ? undefined : {
  name: "1gj1o2p-LoginRegisterPageStyle",
  styles: "display:flex;flex-flow:column;align-items:center;;label:LoginRegisterPageStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Mb2dpblJlZ2lzdGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTa0MiLCJmaWxlIjoiL1VzZXJzL2RhdmlkLmNoZW4vRG9jdW1lbnRzL3Byb2plY3RzL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0xvZ2luUmVnaXN0ZXIvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUmVudGVyUGx1c0xvZ2luU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy9yZWR1Y2VyQ29tYm8nO1xuaW1wb3J0IGFjdGlvbkNyZWF0b3IgZnJvbSAnLi4vLi4vdXRpbHMvcmVkdXgvYWN0aW9uQ3JlYXRvcic7XG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9hY3Rpb25UeXBlcyc7XG5pbXBvcnQgeyBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL3JlZHV4L3R5cGVzJztcblxuY29uc3QgTG9naW5SZWdpc3RlclBhZ2VTdHlsZSA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJlbnRlclBsdXNMb2dpblN0YXRlKSA9PiAoe1xuICByZWRpcmVjdFRvOiBzdGF0ZT8ubG9naW5SZWdpc3Rlcj8ucmVkaXJlY3RUbyxcbiAgdXNlcm5hbWU6IHN0YXRlPy5sb2dpblJlZ2lzdGVyPy51c2VybmFtZSxcbiAgcGFzc3dvcmQ6IHN0YXRlPy5sb2dpblJlZ2lzdGVyPy5wYXNzd29yZCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiAoe1xuICBzZXRVc2VybmFtZTogYWN0aW9uQ3JlYXRvcihkaXNwYXRjaCwgQWN0aW9uVHlwZXMuVVBEQVRFX1VTRVJOQU1FKSxcbiAgc2V0UGFzc3dvcmQ6IGFjdGlvbkNyZWF0b3IoZGlzcGF0Y2gsIEFjdGlvblR5cGVzLlVQREFURV9QQVNTV09SRCksXG59KTtcblxudHlwZSBQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHMsIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHM+O1xuXG5jb25zdCBMb2dpblJlZ2lzdGVyOiBGQzxQcm9wcz4gPSAoeyB1c2VybmFtZSwgcGFzc3dvcmQsIHJlZGlyZWN0VG8sIHNldFVzZXJuYW1lLCBzZXRQYXNzd29yZCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e0xvZ2luUmVnaXN0ZXJQYWdlU3R5bGV9PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8TGluayBocmVmPXtyZWRpcmVjdFRvfT5cbiAgICAgICAgPGE+TG9naW48L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpblJlZ2lzdGVyO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var mapStateToProps = function mapStateToProps(state) {
  var _state$loginRegister, _state$loginRegister2, _state$loginRegister3;

  return {
    redirectTo: state === null || state === void 0 ? void 0 : (_state$loginRegister = state.loginRegister) === null || _state$loginRegister === void 0 ? void 0 : _state$loginRegister.redirectTo,
    username: state === null || state === void 0 ? void 0 : (_state$loginRegister2 = state.loginRegister) === null || _state$loginRegister2 === void 0 ? void 0 : _state$loginRegister2.username,
    password: state === null || state === void 0 ? void 0 : (_state$loginRegister3 = state.loginRegister) === null || _state$loginRegister3 === void 0 ? void 0 : _state$loginRegister3.password
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setUsername: Object(_utils_redux_actionCreator__WEBPACK_IMPORTED_MODULE_3__["default"])(dispatch, _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["default"].UPDATE_USERNAME),
    setPassword: Object(_utils_redux_actionCreator__WEBPACK_IMPORTED_MODULE_3__["default"])(dispatch, _redux_actions_actionTypes__WEBPACK_IMPORTED_MODULE_4__["default"].UPDATE_PASSWORD)
  };
};

var LoginRegister = function LoginRegister(_ref) {
  var username = _ref.username,
      password = _ref.password,
      redirectTo = _ref.redirectTo,
      setUsername = _ref.setUsername,
      setPassword = _ref.setPassword;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: LoginRegisterPageStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", {
    type: "text",
    placeholder: "username",
    value: username,
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", {
    type: "text",
    placeholder: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: redirectTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Login")));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginRegister);

/***/ }),

/***/ "./src/utils/redux/actionCreator.ts":
/*!******************************************!*\
  !*** ./src/utils/redux/actionCreator.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var actionCreator = function actionCreator(dispatch, type) {
  return function (payload) {
    return dispatch({
      type: type,
      payload: payload
    });
  };
};

/* harmony default export */ __webpack_exports__["default"] = (actionCreator);

/***/ })

})
//# sourceMappingURL=login-register.js.dc7e5047e13fcb713e85.hot-update.js.map