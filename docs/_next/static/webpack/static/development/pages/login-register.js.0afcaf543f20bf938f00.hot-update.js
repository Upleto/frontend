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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Mb2dpblJlZ2lzdGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTa0MiLCJmaWxlIjoiL1VzZXJzL2RhdmlkLmNoZW4vRG9jdW1lbnRzL3Byb2plY3RzL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0xvZ2luUmVnaXN0ZXIvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBSZW50ZXJQbHVzTG9naW5TdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL3JlZHVjZXJDb21ibyc7XG5pbXBvcnQgYWN0aW9uQ3JlYXRvciBmcm9tICcuLi8uLi91dGlscy9yZWR1eC9hY3Rpb25DcmVhdG9yJztcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL2FjdGlvblR5cGVzJztcbmltcG9ydCB7IENvbm5lY3RlZFByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVkdXgvdHlwZXMnO1xuXG5jb25zdCBMb2dpblJlZ2lzdGVyUGFnZVN0eWxlID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUmVudGVyUGx1c0xvZ2luU3RhdGUpID0+ICh7XG4gIHJlZGlyZWN0VG86IHN0YXRlPy5sb2dpblJlZ2lzdGVyPy5yZWRpcmVjdFRvLFxuICB1c2VybmFtZTogc3RhdGU/LmxvZ2luUmVnaXN0ZXI/LnVzZXJuYW1lLFxuICBwYXNzd29yZDogc3RhdGU/LmxvZ2luUmVnaXN0ZXI/LnBhc3N3b3JkLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogRGlzcGF0Y2gpID0+ICh7XG4gIHNldFVzZXJuYW1lOiBhY3Rpb25DcmVhdG9yKGRpc3BhdGNoLCBBY3Rpb25UeXBlcy5VUERBVEVfVVNFUk5BTUUpLFxuICBzZXRQYXNzd29yZDogYWN0aW9uQ3JlYXRvcihkaXNwYXRjaCwgQWN0aW9uVHlwZXMuVVBEQVRFX1BBU1NXT1JEKSxcbn0pO1xuXG50eXBlIFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIG1hcFN0YXRlVG9Qcm9wcywgdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcz47XG5cbmNvbnN0IExvZ2luUmVnaXN0ZXI6IEZDPFByb3BzPiA9ICh7IHVzZXJuYW1lLCBwYXNzd29yZCwgcmVkaXJlY3RUbywgc2V0VXNlcm5hbWUsIHNldFBhc3N3b3JkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17TG9naW5SZWdpc3RlclBhZ2VTdHlsZX0+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcbiAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxMaW5rIGhyZWY9e3JlZGlyZWN0VG99PlxuICAgICAgICA8YT5Mb2dpbjwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luUmVnaXN0ZXI7XG4iXX0= */",
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

/***/ })

})
//# sourceMappingURL=login-register.js.0afcaf543f20bf938f00.hot-update.js.map