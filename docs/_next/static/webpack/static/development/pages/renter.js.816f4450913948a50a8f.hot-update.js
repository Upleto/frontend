webpackHotUpdate("static/development/pages/renter.js",{

/***/ "./src/redux/reducers/payment.ts":
/*!***************************************!*\
  !*** ./src/redux/reducers/payment.ts ***!
  \***************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/redux/actions/actionTypes.ts");

/* eslint-disable no-param-reassign */


var initialState = {
  redirectTo: '/renter'
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_PAYMENT_REDIRECT_TO:
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
//# sourceMappingURL=renter.js.816f4450913948a50a8f.hot-update.js.map