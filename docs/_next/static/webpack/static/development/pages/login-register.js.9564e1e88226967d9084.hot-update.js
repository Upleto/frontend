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
Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])("display:flex;flex-flow:column;align-items:center;& > input{max-width:80%;height:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_6__["default"])(30), ";};label:LoginRegisterPageStyle;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Mb2dpblJlZ2lzdGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmtDIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Mb2dpblJlZ2lzdGVyL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5pbXBvcnQgeyBSZW50ZXJQbHVzTG9naW5TdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL3JlZHVjZXJDb21ibyc7XG5pbXBvcnQgYWN0aW9uQ3JlYXRvciBmcm9tICcuLi8uLi91dGlscy9yZWR1eC9hY3Rpb25DcmVhdG9yJztcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL0FjdGlvblR5cGVzJztcbmltcG9ydCB7IENvbm5lY3RlZFByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVkdXgvdHlwZXMnO1xuaW1wb3J0IHJlbSBmcm9tICcuLi8uLi91dGlscy9zdHlsZS9yZW0nO1xuLy8gaW1wb3J0IHVzZXIxIGZyb20gJy4uLy4uL21vY2svdXNlci91c2VyMSc7XG4vLyBpbXBvcnQgcGF5bWVudFRyYW5zYWN0aW9ucyBmcm9tICcuLi8uLi9tb2NrL3BheW1lbnQvcGF5bWVudFRyYW5zYWN0aW9uJztcbi8vIGltcG9ydCBhY2NvdW50MSBmcm9tICcuLi8uLi9tb2NrL2FjY291bnQvYWNjb3VudDEnO1xuLy8gaW1wb3J0IGFjY291bnQyIGZyb20gJy4uLy4uL21vY2svYWNjb3VudC9hY2NvdW50Mic7XG4vLyBpbXBvcnQgeyBQYXltZW50QWNjb3VudEZvckRpc3BsYXlPYmpzIH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvdHlwZXMnO1xuXG5jb25zdCBMb2dpblJlZ2lzdGVyUGFnZVN0eWxlID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmID4gaW5wdXQge1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIGhlaWdodDogJHtyZW0oMzApfTtcbiAgfVxuYDtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSZW50ZXJQbHVzTG9naW5TdGF0ZSkgPT4gKHtcbiAgcmVkaXJlY3RUbzogc3RhdGU/LmxvZ2luUmVnaXN0ZXI/LnJlZGlyZWN0VG8gPz8gJycsXG4gIHVzZXJuYW1lOiBzdGF0ZT8ubG9naW5SZWdpc3Rlcj8udXNlcm5hbWUgPz8gJycsXG4gIHBhc3N3b3JkOiBzdGF0ZT8ubG9naW5SZWdpc3Rlcj8ucGFzc3dvcmQgPz8gJycsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4gKHtcbiAgc2V0VXNlcm5hbWU6IGFjdGlvbkNyZWF0b3IoZGlzcGF0Y2gsIEFjdGlvblR5cGVzLlVQREFURV9VU0VSTkFNRSksXG4gIHNldFBhc3N3b3JkOiBhY3Rpb25DcmVhdG9yKGRpc3BhdGNoLCBBY3Rpb25UeXBlcy5VUERBVEVfUEFTU1dPUkQpLFxuICBzZXRSZWRpcmVjdFRvOiBhY3Rpb25DcmVhdG9yKGRpc3BhdGNoLCBBY3Rpb25UeXBlcy5VUERBVEVfTE9HSU5fUkVESVJFQ1RfVE8pLFxuICAvLyBzZXRSZW50ZXI6IGFjdGlvbkNyZWF0b3IoZGlzcGF0Y2gsIEFjdGlvblR5cGVzLlVQREFURV9SRU5URVIpLFxuICAvLyBzZXRQYXltZW50SGlzdG9yeTogYWN0aW9uQ3JlYXRvcihkaXNwYXRjaCwgQWN0aW9uVHlwZXMuVVBEQVRFX1BBWU1FTlRfSElTVE9SWSksXG4gIC8vIHNldFBheW1lbnRBY2NvdW50c0ludm9sdmVkOiBhY3Rpb25DcmVhdG9yKGRpc3BhdGNoLCBBY3Rpb25UeXBlcy5VUERBVEVfUEFZTUVOVF9BQ0NPVU5UU19JTlZPTFZFRCksXG4gIHJlbnRlckxvZ2luOiBhY3Rpb25DcmVhdG9yKGRpc3BhdGNoLCBBY3Rpb25UeXBlcy5SRU5URVJfTE9HSU4pLFxufSk7XG5cbnR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgbWFwU3RhdGVUb1Byb3BzLCB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzPjtcblxuY29uc3QgTG9naW5SZWdpc3RlcjogRkM8UHJvcHM+ID0gKHtcbiAgdXNlcm5hbWUsXG4gIHBhc3N3b3JkLFxuICByZWRpcmVjdFRvLFxuICBzZXRVc2VybmFtZSxcbiAgc2V0UGFzc3dvcmQsXG4gIHNldFJlZGlyZWN0VG8sXG4gIC8vIHNldFJlbnRlcixcbiAgLy8gc2V0UGF5bWVudEhpc3RvcnksXG4gIC8vIHNldFBheW1lbnRBY2NvdW50c0ludm9sdmVkLFxuICByZW50ZXJMb2dpbixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17TG9naW5SZWdpc3RlclBhZ2VTdHlsZX0+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcbiAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8TGluayBocmVmPXtyZWRpcmVjdFRvfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAvLyBzZXRSZW50ZXIodXNlcjEpO1xuICAgICAgICAgICAgLy8gc2V0UGF5bWVudEhpc3RvcnkoT2JqZWN0LnZhbHVlcyhwYXltZW50VHJhbnNhY3Rpb25zKSk7XG4gICAgICAgICAgICAvLyBzZXRQYXltZW50QWNjb3VudHNJbnZvbHZlZChcbiAgICAgICAgICAgIC8vICAgW2FjY291bnQxLCBhY2NvdW50Ml0ucmVkdWNlPFBheW1lbnRBY2NvdW50Rm9yRGlzcGxheU9ianM+KFxuICAgICAgICAgICAgLy8gICAgIChwYXltZW50QWNjb3VudEZvckRpc3BsYXlzLCB7IGlkLCBvd25lcklkIH0pID0+ICh7XG4gICAgICAgICAgICAvLyAgICAgICAuLi5wYXltZW50QWNjb3VudEZvckRpc3BsYXlzLFxuICAgICAgICAgICAgLy8gICAgICAgW2lkXToge1xuICAgICAgICAgICAgLy8gICAgICAgICBpZCxcbiAgICAgICAgICAgIC8vICAgICAgICAgb3duZXJJZCxcbiAgICAgICAgICAgIC8vICAgICAgICAgZGlzcGxheU5hbWU6IGBBY2NvdW50XyR7aWR9YCxcbiAgICAgICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgfSksXG4gICAgICAgICAgICAvLyAgICAge31cbiAgICAgICAgICAgIC8vICAgKVxuICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgIHJlbnRlckxvZ2luKG51bGwpO1xuICAgICAgICAgICAgc2V0UmVkaXJlY3RUbygnJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIExvZ2luXG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luUmVnaXN0ZXIpO1xuIl19 */"));

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
      lineNumber: 59
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
      lineNumber: 60
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
      lineNumber: 66
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    href: redirectTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
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
      lineNumber: 73
    },
    __self: this
  }, "Login")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(LoginRegister));

/***/ })

})
//# sourceMappingURL=login-register.js.9564e1e88226967d9084.hot-update.js.map