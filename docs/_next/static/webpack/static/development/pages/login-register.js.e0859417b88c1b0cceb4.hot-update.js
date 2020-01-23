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
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("display:flex;flex-flow:column;align-items:center;& > input{max-width:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_6__["default"])(300), ";width:100%;height:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_6__["default"])(30), ";margin-top:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_6__["default"])(10), ";};label:LoginRegisterPageStyle;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Mb2dpblJlZ2lzdGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmtDIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Mb2dpblJlZ2lzdGVyL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5pbXBvcnQgeyBSZW50ZXJQbHVzTG9naW5TdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL3JlZHVjZXJDb21ibyc7XG5pbXBvcnQgYWN0aW9uQ3JlYXRvciBmcm9tICcuLi8uLi91dGlscy9yZWR1eC9hY3Rpb25DcmVhdG9yJztcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL0FjdGlvblR5cGVzJztcbmltcG9ydCB7IENvbm5lY3RlZFByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVkdXgvdHlwZXMnO1xuaW1wb3J0IHJlbSBmcm9tICcuLi8uLi91dGlscy9zdHlsZS9yZW0nO1xuLy8gaW1wb3J0IHVzZXIxIGZyb20gJy4uLy4uL21vY2svdXNlci91c2VyMSc7XG4vLyBpbXBvcnQgcGF5bWVudFRyYW5zYWN0aW9ucyBmcm9tICcuLi8uLi9tb2NrL3BheW1lbnQvcGF5bWVudFRyYW5zYWN0aW9uJztcbi8vIGltcG9ydCBhY2NvdW50MSBmcm9tICcuLi8uLi9tb2NrL2FjY291bnQvYWNjb3VudDEnO1xuLy8gaW1wb3J0IGFjY291bnQyIGZyb20gJy4uLy4uL21vY2svYWNjb3VudC9hY2NvdW50Mic7XG4vLyBpbXBvcnQgeyBQYXltZW50QWNjb3VudEZvckRpc3BsYXlPYmpzIH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvdHlwZXMnO1xuXG5jb25zdCBMb2dpblJlZ2lzdGVyUGFnZVN0eWxlID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmID4gaW5wdXQge1xuICAgIG1heC13aWR0aDogJHtyZW0oMzAwKX07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAke3JlbSgzMCl9O1xuICAgIG1hcmdpbi10b3A6ICR7cmVtKDEwKX07XG4gIH1cbmA7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUmVudGVyUGx1c0xvZ2luU3RhdGUpID0+ICh7XG4gIHJlZGlyZWN0VG86IHN0YXRlPy5sb2dpblJlZ2lzdGVyPy5yZWRpcmVjdFRvID8/ICcnLFxuICB1c2VybmFtZTogc3RhdGU/LmxvZ2luUmVnaXN0ZXI/LnVzZXJuYW1lID8/ICcnLFxuICBwYXNzd29yZDogc3RhdGU/LmxvZ2luUmVnaXN0ZXI/LnBhc3N3b3JkID8/ICcnLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogRGlzcGF0Y2gpID0+ICh7XG4gIHNldFVzZXJuYW1lOiBhY3Rpb25DcmVhdG9yKGRpc3BhdGNoLCBBY3Rpb25UeXBlcy5VUERBVEVfVVNFUk5BTUUpLFxuICBzZXRQYXNzd29yZDogYWN0aW9uQ3JlYXRvcihkaXNwYXRjaCwgQWN0aW9uVHlwZXMuVVBEQVRFX1BBU1NXT1JEKSxcbiAgc2V0UmVkaXJlY3RUbzogYWN0aW9uQ3JlYXRvcihkaXNwYXRjaCwgQWN0aW9uVHlwZXMuVVBEQVRFX0xPR0lOX1JFRElSRUNUX1RPKSxcbiAgLy8gc2V0UmVudGVyOiBhY3Rpb25DcmVhdG9yKGRpc3BhdGNoLCBBY3Rpb25UeXBlcy5VUERBVEVfUkVOVEVSKSxcbiAgLy8gc2V0UGF5bWVudEhpc3Rvcnk6IGFjdGlvbkNyZWF0b3IoZGlzcGF0Y2gsIEFjdGlvblR5cGVzLlVQREFURV9QQVlNRU5UX0hJU1RPUlkpLFxuICAvLyBzZXRQYXltZW50QWNjb3VudHNJbnZvbHZlZDogYWN0aW9uQ3JlYXRvcihkaXNwYXRjaCwgQWN0aW9uVHlwZXMuVVBEQVRFX1BBWU1FTlRfQUNDT1VOVFNfSU5WT0xWRUQpLFxuICByZW50ZXJMb2dpbjogYWN0aW9uQ3JlYXRvcihkaXNwYXRjaCwgQWN0aW9uVHlwZXMuUkVOVEVSX0xPR0lOKSxcbn0pO1xuXG50eXBlIFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIG1hcFN0YXRlVG9Qcm9wcywgdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcz47XG5cbmNvbnN0IExvZ2luUmVnaXN0ZXI6IEZDPFByb3BzPiA9ICh7XG4gIHVzZXJuYW1lLFxuICBwYXNzd29yZCxcbiAgcmVkaXJlY3RUbyxcbiAgc2V0VXNlcm5hbWUsXG4gIHNldFBhc3N3b3JkLFxuICBzZXRSZWRpcmVjdFRvLFxuICAvLyBzZXRSZW50ZXIsXG4gIC8vIHNldFBheW1lbnRIaXN0b3J5LFxuICAvLyBzZXRQYXltZW50QWNjb3VudHNJbnZvbHZlZCxcbiAgcmVudGVyTG9naW4sXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e0xvZ2luUmVnaXN0ZXJQYWdlU3R5bGV9PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPExpbmsgaHJlZj17cmVkaXJlY3RUb30+XG4gICAgICAgIDxhXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgLy8gc2V0UmVudGVyKHVzZXIxKTtcbiAgICAgICAgICAgIC8vIHNldFBheW1lbnRIaXN0b3J5KE9iamVjdC52YWx1ZXMocGF5bWVudFRyYW5zYWN0aW9ucykpO1xuICAgICAgICAgICAgLy8gc2V0UGF5bWVudEFjY291bnRzSW52b2x2ZWQoXG4gICAgICAgICAgICAvLyAgIFthY2NvdW50MSwgYWNjb3VudDJdLnJlZHVjZTxQYXltZW50QWNjb3VudEZvckRpc3BsYXlPYmpzPihcbiAgICAgICAgICAgIC8vICAgICAocGF5bWVudEFjY291bnRGb3JEaXNwbGF5cywgeyBpZCwgb3duZXJJZCB9KSA9PiAoe1xuICAgICAgICAgICAgLy8gICAgICAgLi4ucGF5bWVudEFjY291bnRGb3JEaXNwbGF5cyxcbiAgICAgICAgICAgIC8vICAgICAgIFtpZF06IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgaWQsXG4gICAgICAgICAgICAvLyAgICAgICAgIG93bmVySWQsXG4gICAgICAgICAgICAvLyAgICAgICAgIGRpc3BsYXlOYW1lOiBgQWNjb3VudF8ke2lkfWAsXG4gICAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgICAgLy8gICAgIH0pLFxuICAgICAgICAgICAgLy8gICAgIHt9XG4gICAgICAgICAgICAvLyAgIClcbiAgICAgICAgICAgIC8vICk7XG4gICAgICAgICAgICByZW50ZXJMb2dpbihudWxsKTtcbiAgICAgICAgICAgIHNldFJlZGlyZWN0VG8oJycpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBMb2dpblxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpblJlZ2lzdGVyKTtcbiJdfQ== */"));

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
      lineNumber: 61
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
      lineNumber: 62
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
      lineNumber: 68
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: redirectTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
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
      lineNumber: 75
    },
    __self: this
  }, "Login")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(LoginRegister));

/***/ })

})
//# sourceMappingURL=login-register.js.e0859417b88c1b0cceb4.hot-update.js.map