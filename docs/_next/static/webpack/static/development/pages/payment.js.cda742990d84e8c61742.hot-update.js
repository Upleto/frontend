webpackHotUpdate("static/development/pages/payment.js",{

/***/ "./src/redux/reducers/loginRegister.ts":
/*!*********************************************!*\
  !*** ./src/redux/reducers/loginRegister.ts ***!
  \*********************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/redux/actions/actionTypes.ts");

/* eslint-disable no-param-reassign */


var initialState = {
  username: '',
  password: '',
  redirectTo: '/renter'
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_USERNAME:
      {
        return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draftState) {
          draftState.username = action.payload;
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_PASSWORD:
      {
        return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draftState) {
          draftState.password = action.payload;
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_LOGIN_REDIRECT_TO:
      {
        return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draftState) {
          draftState.redirectTo = action.payload;
        });
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=payment.js.cda742990d84e8c61742.hot-update.js.map