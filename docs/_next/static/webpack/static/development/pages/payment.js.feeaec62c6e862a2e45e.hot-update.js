webpackHotUpdate("static/development/pages/payment.js",{

/***/ "./src/components/Payment/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Payment/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/dist/index.es.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Link */ "./src/components/Link/index.tsx");
/* harmony import */ var _StyledPaymentHistoryDiv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StyledPaymentHistoryDiv */ "./src/components/Payment/StyledPaymentHistoryDiv.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");


var _jsxFileName = "/Users/david.chen/Documents/projects/frontend/src/components/Payment/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







/* eslint-disable react/jsx-props-no-spreading */
var mapStateToProps = function mapStateToProps(state) {
  var _ref, _state$payment, _ref2, _state$payment2, _ref3, _state$payment3;

  return {
    redirectTo: (_ref = state === null || state === void 0 ? void 0 : (_state$payment = state.payment) === null || _state$payment === void 0 ? void 0 : _state$payment.redirectTo) !== null && _ref !== void 0 ? _ref : '',
    paymentHistory: (_ref2 = state === null || state === void 0 ? void 0 : (_state$payment2 = state.payment) === null || _state$payment2 === void 0 ? void 0 : _state$payment2.paymentHistory) !== null && _ref2 !== void 0 ? _ref2 : {},
    paymentAccountsInvolved: (_ref3 = state === null || state === void 0 ? void 0 : (_state$payment3 = state.payment) === null || _state$payment3 === void 0 ? void 0 : _state$payment3.paymentAccountsInvolved) !== null && _ref3 !== void 0 ? _ref3 : {}
  };
};

var Payment = function Payment(_ref4) {
  var redirectTo = _ref4.redirectTo,
      paymentHistory = _ref4.paymentHistory,
      paymentAccountsInvolved = _ref4.paymentAccountsInvolved;
  var columns = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    return [{
      Header: 'Payment History',
      columns: [{
        Header: 'Time Stamp',
        accessor: function accessor(row) {
          return row.timeStamp.calendar();
        },
        id: 'date'
      }, {
        Header: 'Amount',
        accessor: 'amount'
      }, {
        Header: 'From',
        accessor: function accessor(row) {
          return paymentAccountsInvolved[row.fromPaymentAccountId].displayName;
        },
        id: 'fromAccountName'
      }, {
        Header: 'To',
        accessor: function accessor(row) {
          return paymentAccountsInvolved[row.toPaymentAccountId].displayName;
        },
        id: 'toAccountName'
      }, {
        Header: 'Description',
        accessor: 'description'
      }]
    }];
  }, [paymentAccountsInvolved]);
  var data = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(paymentHistory);
  }, [paymentHistory]);

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_4__["useTable"])( // @ts-ignore
  {
    columns: columns,
    data: data,
    initialState: {
      pageIndex: 0,
      pageSize: 2
    }
  }, react_table__WEBPACK_IMPORTED_MODULE_4__["useSortBy"], react_table__WEBPACK_IMPORTED_MODULE_4__["usePagination"]),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      page = _useTable.page,
      prepareRow = _useTable.prepareRow;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Payment"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_StyledPaymentHistoryDiv__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("table", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, headerGroups.map(function (headerGroup) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("tr", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headerGroup.getHeaderGroupProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), headerGroup.headers.map(function (header) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("th", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, header.getHeaderProps(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), header.render('Header'));
    }));
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("tbody", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTableBodyProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), page.map(function (row) {
    prepareRow(row);
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("tr", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row.getRowProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), row.cells.map(function (cell) {
      console.log(cell.render);
      console.log(cell.render('value'));
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("td", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cell.getCellProps(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), cell.render('value'));
    }));
  })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: redirectTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "back")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Payment));

/***/ })

})
//# sourceMappingURL=payment.js.feeaec62c6e862a2e45e.hot-update.js.map