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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Link */ "./src/components/Link/index.tsx");
/* harmony import */ var _utils_redux_actionCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/redux/actionCreator */ "./src/utils/redux/actionCreator.ts");
/* harmony import */ var _redux_actions_ActionTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/ActionTypes */ "./src/redux/actions/ActionTypes.ts");
/* harmony import */ var _utils_style_rem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/style/rem */ "./src/utils/style/rem.ts");
var _jsxFileName = "/Users/david.chen/Documents/projects/frontend/src/components/LoginRegister/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // import user1 from '../../mock/user/user1';
// import paymentTransactions from '../../mock/payment/paymentTransaction';
// import account1 from '../../mock/account/account1';
// import account2 from '../../mock/account/account2';
// import { PaymentAccountForDisplayObjs } from '../../redux/reducers/types';


var LoginRegisterPageStyle =
/*#__PURE__*/
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("display:flex;flex-flow:column;align-items:center;width:80%;& > input{max-width:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_6__["default"])(200), ";height:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_6__["default"])(30), ";};label:LoginRegisterPageStyle;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Mb2dpblJlZ2lzdGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmtDIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Mb2dpblJlZ2lzdGVyL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5pbXBvcnQgeyBSZW50ZXJQbHVzTG9naW5TdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL3JlZHVjZXJDb21ibyc7XG5pbXBvcnQgYWN0aW9uQ3JlYXRvciBmcm9tICcuLi8uLi91dGlscy9yZWR1eC9hY3Rpb25DcmVhdG9yJztcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL0FjdGlvblR5cGVzJztcbmltcG9ydCB7IENvbm5lY3RlZFByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVkdXgvdHlwZXMnO1xuaW1wb3J0IHJlbSBmcm9tICcuLi8uLi91dGlscy9zdHlsZS9yZW0nO1xuLy8gaW1wb3J0IHVzZXIxIGZyb20gJy4uLy4uL21vY2svdXNlci91c2VyMSc7XG4vLyBpbXBvcnQgcGF5bWVudFRyYW5zYWN0aW9ucyBmcm9tICcuLi8uLi9tb2NrL3BheW1lbnQvcGF5bWVudFRyYW5zYWN0aW9uJztcbi8vIGltcG9ydCBhY2NvdW50MSBmcm9tICcuLi8uLi9tb2NrL2FjY291bnQvYWNjb3VudDEnO1xuLy8gaW1wb3J0IGFjY291bnQyIGZyb20gJy4uLy4uL21vY2svYWNjb3VudC9hY2NvdW50Mic7XG4vLyBpbXBvcnQgeyBQYXltZW50QWNjb3VudEZvckRpc3BsYXlPYmpzIH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvdHlwZXMnO1xuXG5jb25zdCBMb2dpblJlZ2lzdGVyUGFnZVN0eWxlID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcblxuICAmID4gaW5wdXQge1xuICAgIG1heC13aWR0aDogJHtyZW0oMjAwKX07XG4gICAgaGVpZ2h0OiAke3JlbSgzMCl9O1xuICB9XG5gO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJlbnRlclBsdXNMb2dpblN0YXRlKSA9PiAoe1xuICByZWRpcmVjdFRvOiBzdGF0ZT8ubG9naW5SZWdpc3Rlcj8ucmVkaXJlY3RUbyA/PyAnJyxcbiAgdXNlcm5hbWU6IHN0YXRlPy5sb2dpblJlZ2lzdGVyPy51c2VybmFtZSA/PyAnJyxcbiAgcGFzc3dvcmQ6IHN0YXRlPy5sb2dpblJlZ2lzdGVyPy5wYXNzd29yZCA/PyAnJyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiAoe1xuICBzZXRVc2VybmFtZTogYWN0aW9uQ3JlYXRvcihkaXNwYXRjaCwgQWN0aW9uVHlwZXMuVVBEQVRFX1VTRVJOQU1FKSxcbiAgc2V0UGFzc3dvcmQ6IGFjdGlvbkNyZWF0b3IoZGlzcGF0Y2gsIEFjdGlvblR5cGVzLlVQREFURV9QQVNTV09SRCksXG4gIHNldFJlZGlyZWN0VG86IGFjdGlvbkNyZWF0b3IoZGlzcGF0Y2gsIEFjdGlvblR5cGVzLlVQREFURV9MT0dJTl9SRURJUkVDVF9UTyksXG4gIC8vIHNldFJlbnRlcjogYWN0aW9uQ3JlYXRvcihkaXNwYXRjaCwgQWN0aW9uVHlwZXMuVVBEQVRFX1JFTlRFUiksXG4gIC8vIHNldFBheW1lbnRIaXN0b3J5OiBhY3Rpb25DcmVhdG9yKGRpc3BhdGNoLCBBY3Rpb25UeXBlcy5VUERBVEVfUEFZTUVOVF9ISVNUT1JZKSxcbiAgLy8gc2V0UGF5bWVudEFjY291bnRzSW52b2x2ZWQ6IGFjdGlvbkNyZWF0b3IoZGlzcGF0Y2gsIEFjdGlvblR5cGVzLlVQREFURV9QQVlNRU5UX0FDQ09VTlRTX0lOVk9MVkVEKSxcbiAgcmVudGVyTG9naW46IGFjdGlvbkNyZWF0b3IoZGlzcGF0Y2gsIEFjdGlvblR5cGVzLlJFTlRFUl9MT0dJTiksXG59KTtcblxudHlwZSBQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBtYXBTdGF0ZVRvUHJvcHMsIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHM+O1xuXG5jb25zdCBMb2dpblJlZ2lzdGVyOiBGQzxQcm9wcz4gPSAoe1xuICB1c2VybmFtZSxcbiAgcGFzc3dvcmQsXG4gIHJlZGlyZWN0VG8sXG4gIHNldFVzZXJuYW1lLFxuICBzZXRQYXNzd29yZCxcbiAgc2V0UmVkaXJlY3RUbyxcbiAgLy8gc2V0UmVudGVyLFxuICAvLyBzZXRQYXltZW50SGlzdG9yeSxcbiAgLy8gc2V0UGF5bWVudEFjY291bnRzSW52b2x2ZWQsXG4gIHJlbnRlckxvZ2luLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXtMb2dpblJlZ2lzdGVyUGFnZVN0eWxlfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxuICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxMaW5rIGhyZWY9e3JlZGlyZWN0VG99PlxuICAgICAgICA8YVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIC8vIHNldFJlbnRlcih1c2VyMSk7XG4gICAgICAgICAgICAvLyBzZXRQYXltZW50SGlzdG9yeShPYmplY3QudmFsdWVzKHBheW1lbnRUcmFuc2FjdGlvbnMpKTtcbiAgICAgICAgICAgIC8vIHNldFBheW1lbnRBY2NvdW50c0ludm9sdmVkKFxuICAgICAgICAgICAgLy8gICBbYWNjb3VudDEsIGFjY291bnQyXS5yZWR1Y2U8UGF5bWVudEFjY291bnRGb3JEaXNwbGF5T2Jqcz4oXG4gICAgICAgICAgICAvLyAgICAgKHBheW1lbnRBY2NvdW50Rm9yRGlzcGxheXMsIHsgaWQsIG93bmVySWQgfSkgPT4gKHtcbiAgICAgICAgICAgIC8vICAgICAgIC4uLnBheW1lbnRBY2NvdW50Rm9yRGlzcGxheXMsXG4gICAgICAgICAgICAvLyAgICAgICBbaWRdOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGlkLFxuICAgICAgICAgICAgLy8gICAgICAgICBvd25lcklkLFxuICAgICAgICAgICAgLy8gICAgICAgICBkaXNwbGF5TmFtZTogYEFjY291bnRfJHtpZH1gLFxuICAgICAgICAgICAgLy8gICAgICAgfSxcbiAgICAgICAgICAgIC8vICAgICB9KSxcbiAgICAgICAgICAgIC8vICAgICB7fVxuICAgICAgICAgICAgLy8gICApXG4gICAgICAgICAgICAvLyApO1xuICAgICAgICAgICAgcmVudGVyTG9naW4obnVsbCk7XG4gICAgICAgICAgICBzZXRSZWRpcmVjdFRvKCcnKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgTG9naW5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW5SZWdpc3Rlcik7XG4iXX0= */"));

var mapStateToProps = function mapStateToProps(state) {
  var _ref, _state$loginRegister, _ref2, _state$loginRegister2, _ref3, _state$loginRegister3;

  return {
    redirectTo: (_ref = state === null || state === void 0 ? void 0 : (_state$loginRegister = state.loginRegister) === null || _state$loginRegister === void 0 ? void 0 : _state$loginRegister.redirectTo) !== null && _ref !== void 0 ? _ref : '',
    username: (_ref2 = state === null || state === void 0 ? void 0 : (_state$loginRegister2 = state.loginRegister) === null || _state$loginRegister2 === void 0 ? void 0 : _state$loginRegister2.username) !== null && _ref2 !== void 0 ? _ref2 : '',
    password: (_ref3 = state === null || state === void 0 ? void 0 : (_state$loginRegister3 = state.loginRegister) === null || _state$loginRegister3 === void 0 ? void 0 : _state$loginRegister3.password) !== null && _ref3 !== void 0 ? _ref3 : ''
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setUsername: Object(_utils_redux_actionCreator__WEBPACK_IMPORTED_MODULE_4__["default"])(dispatch, _redux_actions_ActionTypes__WEBPACK_IMPORTED_MODULE_5__["default"].UPDATE_USERNAME),
    setPassword: Object(_utils_redux_actionCreator__WEBPACK_IMPORTED_MODULE_4__["default"])(dispatch, _redux_actions_ActionTypes__WEBPACK_IMPORTED_MODULE_5__["default"].UPDATE_PASSWORD),
    setRedirectTo: Object(_utils_redux_actionCreator__WEBPACK_IMPORTED_MODULE_4__["default"])(dispatch, _redux_actions_ActionTypes__WEBPACK_IMPORTED_MODULE_5__["default"].UPDATE_LOGIN_REDIRECT_TO),
    // setRenter: actionCreator(dispatch, ActionTypes.UPDATE_RENTER),
    // setPaymentHistory: actionCreator(dispatch, ActionTypes.UPDATE_PAYMENT_HISTORY),
    // setPaymentAccountsInvolved: actionCreator(dispatch, ActionTypes.UPDATE_PAYMENT_ACCOUNTS_INVOLVED),
    renterLogin: Object(_utils_redux_actionCreator__WEBPACK_IMPORTED_MODULE_4__["default"])(dispatch, _redux_actions_ActionTypes__WEBPACK_IMPORTED_MODULE_5__["default"].RENTER_LOGIN)
  };
};

var LoginRegister = function LoginRegister(_ref4) {
  var username = _ref4.username,
      password = _ref4.password,
      redirectTo = _ref4.redirectTo,
      setUsername = _ref4.setUsername,
      setPassword = _ref4.setPassword,
      setRedirectTo = _ref4.setRedirectTo,
      renterLogin = _ref4.renterLogin;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: LoginRegisterPageStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
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
      lineNumber: 61
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", {
    type: "password",
    placeholder: "password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: redirectTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    onClick: function onClick() {
      // setRenter(user1);
      // setPaymentHistory(Object.values(paymentTransactions));
      // setPaymentAccountsInvolved(
      //   [account1, account2].reduce<PaymentAccountForDisplayObjs>(
      //     (paymentAccountForDisplays, { id, ownerId }) => ({
      //       ...paymentAccountForDisplays,
      //       [id]: {
      //         id,
      //         ownerId,
      //         displayName: `Account_${id}`,
      //       },
      //     }),
      //     {}
      //   )
      // );
      renterLogin(null);
      setRedirectTo('');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Login")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(LoginRegister));

/***/ })

})
//# sourceMappingURL=login-register.js.5c96bc9daf2dbabf4530.hot-update.js.map