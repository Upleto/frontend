webpackHotUpdate("static/development/pages/payment.js",{

/***/ "./src/components/Payment/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Payment/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/dist/index.es.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Link */ "./src/components/Link/index.tsx");
/* harmony import */ var _StyledPaymentHistoryDiv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StyledPaymentHistoryDiv */ "./src/components/Payment/StyledPaymentHistoryDiv.tsx");
/* harmony import */ var _utils_style_rem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/style/rem */ "./src/utils/style/rem.ts");



var _jsxFileName = "/Users/david.chen/Documents/projects/frontend/src/components/Payment/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







/* eslint-disable react/jsx-props-no-spreading */



var PageButtonStyle = function PageButtonStyle(disabled) {
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["css"])("border:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_9__["default"])(1), " ", disabled ? 'lightgray' : 'black', " solid;width:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_9__["default"])(32), ";height:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_9__["default"])(32), ";margin:0 ", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_9__["default"])(4), ";", disabled ? '' : 'cursor: pointer', ";font-size:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_9__["default"])(18), ";;label:PageButtonStyle;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9QYXltZW50L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFha0QiLCJmaWxlIjoiL1VzZXJzL2RhdmlkLmNoZW4vRG9jdW1lbnRzL3Byb2plY3RzL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1BheW1lbnQvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VTb3J0QnksIHVzZVBhZ2luYXRpb24sIEhlYWRlckdyb3VwIH0gZnJvbSAncmVhY3QtdGFibGUnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBSZW50ZXJQbHVzTG9naW5TdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHV4L3JlZHVjZXJzL3JlZHVjZXJDb21ibyc7XG5pbXBvcnQgeyBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL3JlZHV4L3R5cGVzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuaW1wb3J0IFN0eWxlZFBheW1lbnRIaXN0b3J5RGl2IGZyb20gJy4vU3R5bGVkUGF5bWVudEhpc3RvcnlEaXYnO1xuaW1wb3J0IHsgUGF5bWVudFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvdHlwZXMnO1xuaW1wb3J0IHJlbSBmcm9tICcuLi8uLi91dGlscy9zdHlsZS9yZW0nO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXG5cbmNvbnN0IFBhZ2VCdXR0b25TdHlsZSA9IChkaXNhYmxlZDogYm9vbGVhbikgPT4gY3NzYFxuICBib3JkZXI6ICR7cmVtKDEpfSAke2Rpc2FibGVkID8gJ2xpZ2h0Z3JheScgOiAnYmxhY2snfSBzb2xpZDtcbiAgd2lkdGg6ICR7cmVtKDMyKX07XG4gIGhlaWdodDogJHtyZW0oMzIpfTtcbiAgbWFyZ2luOiAwICR7cmVtKDQpfTtcbiAgJHtkaXNhYmxlZCA/ICcnIDogJ2N1cnNvcjogcG9pbnRlcid9O1xuICBmb250LXNpemU6ICR7cmVtKDE4KX07XG5gO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJlbnRlclBsdXNMb2dpblN0YXRlKSA9PiAoe1xuICByZWRpcmVjdFRvOiBzdGF0ZT8ucGF5bWVudD8ucmVkaXJlY3RUbyA/PyAnJyxcbiAgcGF5bWVudEhpc3Rvcnk6IHN0YXRlPy5wYXltZW50Py5wYXltZW50SGlzdG9yeSA/PyB7fSxcbiAgcGF5bWVudEFjY291bnRzSW52b2x2ZWQ6IHN0YXRlPy5wYXltZW50Py5wYXltZW50QWNjb3VudHNJbnZvbHZlZCA/PyB7fSxcbn0pO1xuXG50eXBlIFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIG1hcFN0YXRlVG9Qcm9wcz47XG5cbmNvbnN0IFBheW1lbnQ6IEZDPFByb3BzPiA9ICh7IHJlZGlyZWN0VG8sIHBheW1lbnRIaXN0b3J5LCBwYXltZW50QWNjb3VudHNJbnZvbHZlZCB9KSA9PiB7XG4gIGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+IFtcbiAgICAgIHtcbiAgICAgICAgSGVhZGVyOiAnUGF5bWVudCBIaXN0b3J5JyxcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ1RpbWUgU3RhbXAnLFxuICAgICAgICAgICAgYWNjZXNzb3I6IChyb3c6IFBheW1lbnRUcmFuc2FjdGlvbikgPT4gcm93LnRpbWVTdGFtcC5jYWxlbmRhcigpLFxuICAgICAgICAgICAgaWQ6ICdkYXRlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ0Ftb3VudCcsXG4gICAgICAgICAgICBhY2Nlc3NvcjogKHJvdzogUGF5bWVudFRyYW5zYWN0aW9uKSA9PiBgJCR7cm93LmFtb3VudC50b0ZpeGVkKDIpfWAsXG4gICAgICAgICAgICBpZDogJ2Ftb3VudCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdGcm9tJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAocm93OiBQYXltZW50VHJhbnNhY3Rpb24pID0+XG4gICAgICAgICAgICAgIHBheW1lbnRBY2NvdW50c0ludm9sdmVkW3Jvdy5mcm9tUGF5bWVudEFjY291bnRJZF0uZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBpZDogJ2Zyb21BY2NvdW50TmFtZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdUbycsXG4gICAgICAgICAgICBhY2Nlc3NvcjogKHJvdzogUGF5bWVudFRyYW5zYWN0aW9uKSA9PlxuICAgICAgICAgICAgICBwYXltZW50QWNjb3VudHNJbnZvbHZlZFtyb3cudG9QYXltZW50QWNjb3VudElkXS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGlkOiAndG9BY2NvdW50TmFtZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdEZXNjcmlwdGlvbicsXG4gICAgICAgICAgICBhY2Nlc3NvcjogJ2Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtwYXltZW50QWNjb3VudHNJbnZvbHZlZF1cbiAgKTtcblxuICBjb25zdCBkYXRhID0gdXNlTWVtbygoKSA9PiBPYmplY3QudmFsdWVzKHBheW1lbnRIaXN0b3J5KSwgW3BheW1lbnRIaXN0b3J5XSk7XG5cbiAgY29uc3Qge1xuICAgIGdldFRhYmxlUHJvcHMsXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4gICAgaGVhZGVyR3JvdXBzLFxuICAgIHBhZ2UsXG4gICAgcHJlcGFyZVJvdyxcbiAgICBjYW5QcmV2aW91c1BhZ2UsXG4gICAgY2FuTmV4dFBhZ2UsXG4gICAgcGFnZU9wdGlvbnMsXG4gICAgcGFnZUNvdW50LFxuICAgIGdvdG9QYWdlLFxuICAgIG5leHRQYWdlLFxuICAgIHByZXZpb3VzUGFnZSxcbiAgICBzZXRQYWdlU2l6ZSxcbiAgICBzdGF0ZTogeyBwYWdlSW5kZXgsIHBhZ2VTaXplIH0sXG4gIH0gPSB1c2VUYWJsZTxQYXltZW50VHJhbnNhY3Rpb24+KFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB7IGNvbHVtbnMsIGRhdGEsIGluaXRpYWxTdGF0ZTogeyBwYWdlSW5kZXg6IDAsIHBhZ2VTaXplOiAyIH0gfSxcbiAgICB1c2VTb3J0QnksXG4gICAgdXNlUGFnaW5hdGlvblxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5QYXltZW50PC9oMj5cbiAgICAgIHtwYWdlLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8U3R5bGVkUGF5bWVudEhpc3RvcnlEaXY+XG4gICAgICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcCgoaGVhZGVyR3JvdXA6IEhlYWRlckdyb3VwPFBheW1lbnRUcmFuc2FjdGlvbj4pID0+IChcbiAgICAgICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGhlYWRlcjogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0aCB7Li4uaGVhZGVyLmdldEhlYWRlclByb3BzKGhlYWRlci5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX0+XG4gICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5yZW5kZXIoJ0hlYWRlcicpfVxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnsoaGVhZGVyLmlzU29ydGVkICYmIChoZWFkZXIuaXNTb3J0ZWREZXNjID8gJ+GQgScgOiAn4ZCDJykpIHx8ICcnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG4gICAgICAgICAgICAgIHtwYWdlLm1hcCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBwcmVwYXJlUm93KHJvdyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxuICAgICAgICAgICAgICAgICAgICB7cm93LmNlbGxzLm1hcCgoY2VsbDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDx0ZCB7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+e2NlbGwudmFsdWV9PC90ZD47XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGdvdG9QYWdlKDApfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX1cbiAgICAgICAgICAgICAgY3NzPXtQYWdlQnV0dG9uU3R5bGUoIWNhblByZXZpb3VzUGFnZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsnPDwnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcmV2aW91c1BhZ2UoKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5QcmV2aW91c1BhZ2V9XG4gICAgICAgICAgICAgIGNzcz17UGFnZUJ1dHRvblN0eWxlKCFjYW5QcmV2aW91c1BhZ2UpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7JzwnfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7J1BhZ2UgJ31cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3BhZ2VJbmRleCArIDF9XG4gICAgICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UGFnZUluZGV4ID0gZS50YXJnZXQudmFsdWUgPyBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApIC0gMSA6IDA7XG4gICAgICAgICAgICAgICAgICBnb3RvUGFnZShuZXdQYWdlSW5kZXgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtgIG9mICR7cGFnZU9wdGlvbnMubGVuZ3RofWB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHsnU2hvdyAnfVxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGFnZVNpemV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UGFnZVNpemUgPSBlLnRhcmdldC52YWx1ZSA/IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCkgOiAxO1xuICAgICAgICAgICAgICAgICAgc2V0UGFnZVNpemUobmV3UGFnZVNpemUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsnIHJvd3MnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhbk5leHRQYWdlfVxuICAgICAgICAgICAgICBjc3M9e1BhZ2VCdXR0b25TdHlsZSghY2FuTmV4dFBhZ2UpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Jz4nfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShwYWdlQ291bnQgLSAxKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX1cbiAgICAgICAgICAgICAgY3NzPXtQYWdlQnV0dG9uU3R5bGUoIWNhbk5leHRQYWdlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeyc+Pid9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TdHlsZWRQYXltZW50SGlzdG9yeURpdj5cbiAgICAgICl9XG4gICAgICA8TGluayBocmVmPXtyZWRpcmVjdFRvfT5cbiAgICAgICAgPGE+YmFjazwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQYXltZW50KTtcbiJdfQ== */"))
  );
};

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
  var columns = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(function () {
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
        accessor: function accessor(row) {
          return "$".concat(row.amount.toFixed(2));
        },
        id: 'amount'
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
  var data = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_2___default()(paymentHistory);
  }, [paymentHistory]);

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_5__["useTable"])( // @ts-ignore
  {
    columns: columns,
    data: data,
    initialState: {
      pageIndex: 0,
      pageSize: 2
    }
  }, react_table__WEBPACK_IMPORTED_MODULE_5__["useSortBy"], react_table__WEBPACK_IMPORTED_MODULE_5__["usePagination"]),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      page = _useTable.page,
      prepareRow = _useTable.prepareRow,
      canPreviousPage = _useTable.canPreviousPage,
      canNextPage = _useTable.canNextPage,
      pageOptions = _useTable.pageOptions,
      pageCount = _useTable.pageCount,
      gotoPage = _useTable.gotoPage,
      nextPage = _useTable.nextPage,
      previousPage = _useTable.previousPage,
      setPageSize = _useTable.setPageSize,
      _useTable$state = _useTable.state,
      pageIndex = _useTable$state.pageIndex,
      pageSize = _useTable$state.pageSize;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Payment"), page.length > 0 && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_StyledPaymentHistoryDiv__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("table", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getTableProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, headerGroups.map(function (headerGroup) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("tr", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, headerGroup.getHeaderGroupProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), headerGroup.headers.map(function (header) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("th", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, header.getHeaderProps(header.getSortByToggleProps()), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }), header.render('Header'), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, header.isSorted && (header.isSortedDesc ? 'ᐁ' : 'ᐃ') || ''));
    }));
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("tbody", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getTableBodyProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), page.map(function (row) {
    prepareRow(row);
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("tr", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, row.getRowProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }), row.cells.map(function (cell) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("td", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, cell.getCellProps(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), cell.value);
    }));
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    className: "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("button", {
    type: "button",
    onClick: function onClick() {
      return gotoPage(0);
    },
    disabled: !canPreviousPage,
    css: PageButtonStyle(!canPreviousPage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, '<<'), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("button", {
    type: "button",
    onClick: function onClick() {
      return previousPage();
    },
    disabled: !canPreviousPage,
    css: PageButtonStyle(!canPreviousPage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, '<'), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, 'Page ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("input", {
    type: "number",
    value: pageIndex + 1,
    min: "1",
    onChange: function onChange(e) {
      var newPageIndex = e.target.value ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value, 10) - 1 : 0;
      gotoPage(newPageIndex);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), " of ".concat(pageOptions.length)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, 'Show ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("input", {
    type: "number",
    value: pageSize,
    onChange: function onChange(e) {
      var newPageSize = e.target.value ? _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value, 10) : 1;
      setPageSize(newPageSize);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), ' rows'), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("button", {
    type: "button",
    onClick: function onClick() {
      return nextPage();
    },
    disabled: !canNextPage,
    css: PageButtonStyle(!canNextPage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, '>'), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("button", {
    type: "button",
    onClick: function onClick() {
      return gotoPage(pageCount - 1);
    },
    disabled: !canNextPage,
    css: PageButtonStyle(!canNextPage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, '>>'))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: redirectTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "back")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Payment));

/***/ })

})
//# sourceMappingURL=payment.js.603e1d8776f85589d533.hot-update.js.map