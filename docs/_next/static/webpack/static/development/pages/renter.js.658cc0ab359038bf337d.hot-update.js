webpackHotUpdate("static/development/pages/renter.js",{

/***/ "./src/redux/reducers/renter.ts":
/*!**************************************!*\
  !*** ./src/redux/reducers/renter.ts ***!
  \**************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/redux/actions/actionTypes.ts");

var initialState = null;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_RENTER:
      {
        return action.payload;
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
//# sourceMappingURL=renter.js.658cc0ab359038bf337d.hot-update.js.map