webpackHotUpdate("static/development/pages/payment.js",{

/***/ "./src/components/Payment/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Payment/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/is-nan */ "./node_modules/@babel/runtime-corejs2/core-js/number/is-nan.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/dist/index.es.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Link */ "./src/components/Link/index.tsx");
/* harmony import */ var _StyledPaymentHistoryDiv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StyledPaymentHistoryDiv */ "./src/components/Payment/StyledPaymentHistoryDiv.tsx");
/* harmony import */ var _utils_style_rem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/style/rem */ "./src/utils/style/rem.ts");




var _jsxFileName = "/Users/david.chen/Documents/projects/frontend/src/components/Payment/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;







/* eslint-disable react/jsx-props-no-spreading */



var PageButtonStyle = function PageButtonStyle(disabled) {
  return (
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["css"])("border:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_10__["default"])(1), " ", disabled ? 'lightgray' : 'black', " solid;width:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_10__["default"])(32), ";height:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_10__["default"])(32), ";margin:0 ", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_10__["default"])(4), ";", disabled ? '' : 'cursor: pointer', ";font-size:", Object(_utils_style_rem__WEBPACK_IMPORTED_MODULE_10__["default"])(18), ";;label:PageButtonStyle;" + (false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL0RvY3VtZW50cy9wcm9qZWN0cy9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9QYXltZW50L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFha0QiLCJmaWxlIjoiL1VzZXJzL2RhdmlkLmNoZW4vRG9jdW1lbnRzL3Byb2plY3RzL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1BheW1lbnQvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZVRhYmxlLCB1c2VTb3J0QnksIHVzZVBhZ2luYXRpb24sIEhlYWRlckdyb3VwLCBSb3csIENlbGwgfSBmcm9tICdyZWFjdC10YWJsZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IFJlbnRlclBsdXNMb2dpblN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdXgvcmVkdWNlcnMvcmVkdWNlckNvbWJvJztcbmltcG9ydCB7IENvbm5lY3RlZFByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVkdXgvdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5pbXBvcnQgU3R5bGVkUGF5bWVudEhpc3RvcnlEaXYgZnJvbSAnLi9TdHlsZWRQYXltZW50SGlzdG9yeURpdic7XG5pbXBvcnQgeyBQYXltZW50VHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi9yZWR1eC9yZWR1Y2Vycy90eXBlcyc7XG5pbXBvcnQgcmVtIGZyb20gJy4uLy4uL3V0aWxzL3N0eWxlL3JlbSc7XG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cblxuY29uc3QgUGFnZUJ1dHRvblN0eWxlID0gKGRpc2FibGVkOiBib29sZWFuKSA9PiBjc3NgXG4gIGJvcmRlcjogJHtyZW0oMSl9ICR7ZGlzYWJsZWQgPyAnbGlnaHRncmF5JyA6ICdibGFjayd9IHNvbGlkO1xuICB3aWR0aDogJHtyZW0oMzIpfTtcbiAgaGVpZ2h0OiAke3JlbSgzMil9O1xuICBtYXJnaW46IDAgJHtyZW0oNCl9O1xuICAke2Rpc2FibGVkID8gJycgOiAnY3Vyc29yOiBwb2ludGVyJ307XG4gIGZvbnQtc2l6ZTogJHtyZW0oMTgpfTtcbmA7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUmVudGVyUGx1c0xvZ2luU3RhdGUpID0+ICh7XG4gIHJlZGlyZWN0VG86IHN0YXRlPy5wYXltZW50Py5yZWRpcmVjdFRvID8/ICcnLFxuICBwYXltZW50SGlzdG9yeTogc3RhdGU/LnBheW1lbnQ/LnBheW1lbnRIaXN0b3J5ID8/IHt9LFxuICBwYXltZW50QWNjb3VudHNJbnZvbHZlZDogc3RhdGU/LnBheW1lbnQ/LnBheW1lbnRBY2NvdW50c0ludm9sdmVkID8/IHt9LFxufSk7XG5cbnR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgbWFwU3RhdGVUb1Byb3BzPjtcblxuY29uc3QgUGF5bWVudDogRkM8UHJvcHM+ID0gKHsgcmVkaXJlY3RUbywgcGF5bWVudEhpc3RvcnksIHBheW1lbnRBY2NvdW50c0ludm9sdmVkIH0pID0+IHtcbiAgY29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAge1xuICAgICAgICBIZWFkZXI6ICdQYXltZW50IEhpc3RvcnknLFxuICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiAnVGltZSBTdGFtcCcsXG4gICAgICAgICAgICBhY2Nlc3NvcjogKHJvdzogUGF5bWVudFRyYW5zYWN0aW9uKSA9PiByb3cudGltZVN0YW1wLmNhbGVuZGFyKCksXG4gICAgICAgICAgICBpZDogJ2RhdGUnLFxuICAgICAgICAgICAgc29ydFR5cGU6IChyb3dBOiBSb3c8UGF5bWVudFRyYW5zYWN0aW9uPiwgcm93QjogUm93PFBheW1lbnRUcmFuc2FjdGlvbj4pID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJvd0Eub3JpZ2luYWwudGltZVN0YW1wLmlzQWZ0ZXIocm93Qi5vcmlnaW5hbC50aW1lU3RhbXApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHJvd0Eub3JpZ2luYWwudGltZVN0YW1wLmlzQmVmb3JlKHJvd0Iub3JpZ2luYWwudGltZVN0YW1wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdBbW91bnQnLFxuICAgICAgICAgICAgYWNjZXNzb3I6IChyb3c6IFBheW1lbnRUcmFuc2FjdGlvbikgPT4gYCQke3Jvdy5hbW91bnQudG9GaXhlZCgyKX1gLFxuICAgICAgICAgICAgaWQ6ICdhbW91bnQnLFxuICAgICAgICAgICAgc29ydFR5cGU6IChyb3dBOiBSb3c8UGF5bWVudFRyYW5zYWN0aW9uPiwgcm93QjogUm93PFBheW1lbnRUcmFuc2FjdGlvbj4pID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJvd0Eub3JpZ2luYWwuYW1vdW50Lmd0KHJvd0Iub3JpZ2luYWwuYW1vdW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChyb3dBLm9yaWdpbmFsLmFtb3VudC5sdChyb3dCLm9yaWdpbmFsLmFtb3VudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBIZWFkZXI6ICdGcm9tJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAocm93OiBQYXltZW50VHJhbnNhY3Rpb24pID0+XG4gICAgICAgICAgICAgIHBheW1lbnRBY2NvdW50c0ludm9sdmVkW3Jvdy5mcm9tUGF5bWVudEFjY291bnRJZF0uZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBpZDogJ2Zyb21BY2NvdW50TmFtZScsXG4gICAgICAgICAgICBkaXNhYmxlU29ydEJ5OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgSGVhZGVyOiAnVG8nLFxuICAgICAgICAgICAgYWNjZXNzb3I6IChyb3c6IFBheW1lbnRUcmFuc2FjdGlvbikgPT5cbiAgICAgICAgICAgICAgcGF5bWVudEFjY291bnRzSW52b2x2ZWRbcm93LnRvUGF5bWVudEFjY291bnRJZF0uZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBpZDogJ3RvQWNjb3VudE5hbWUnLFxuICAgICAgICAgICAgZGlzYWJsZVNvcnRCeTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIEhlYWRlcjogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIGFjY2Vzc29yOiAnZGVzY3JpcHRpb24nLFxuICAgICAgICAgICAgZGlzYWJsZVNvcnRCeTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIFtwYXltZW50QWNjb3VudHNJbnZvbHZlZF1cbiAgKTtcblxuICBjb25zdCBkYXRhID0gdXNlTWVtbygoKSA9PiBPYmplY3QudmFsdWVzKHBheW1lbnRIaXN0b3J5KSwgW3BheW1lbnRIaXN0b3J5XSk7XG5cbiAgY29uc3Qge1xuICAgIGdldFRhYmxlUHJvcHMsXG4gICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4gICAgaGVhZGVyR3JvdXBzLFxuICAgIHBhZ2UsXG4gICAgcHJlcGFyZVJvdyxcbiAgICBjYW5QcmV2aW91c1BhZ2UsXG4gICAgY2FuTmV4dFBhZ2UsXG4gICAgcGFnZU9wdGlvbnMsXG4gICAgcGFnZUNvdW50LFxuICAgIGdvdG9QYWdlLFxuICAgIG5leHRQYWdlLFxuICAgIHByZXZpb3VzUGFnZSxcbiAgICBzZXRQYWdlU2l6ZSxcbiAgICBzdGF0ZTogeyBwYWdlSW5kZXgsIHBhZ2VTaXplIH0sXG4gIH0gPSB1c2VUYWJsZTxQYXltZW50VHJhbnNhY3Rpb24+KFxuICAgIHtcbiAgICAgIGNvbHVtbnMsXG4gICAgICBkYXRhLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaW5pdGlhbFN0YXRlOiB7IHBhZ2VJbmRleDogMCwgcGFnZVNpemU6IDIsIHNvcnRCeTogW3sgaWQ6ICdkYXRlJywgZGVzYzogdHJ1ZSB9XSB9LFxuICAgICAgZGlzYWJsZVNvcnRSZW1vdmU6IHRydWUsXG4gICAgfSxcbiAgICB1c2VTb3J0QnksXG4gICAgdXNlUGFnaW5hdGlvblxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5QYXltZW50PC9oMj5cbiAgICAgIHtwYWdlLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8U3R5bGVkUGF5bWVudEhpc3RvcnlEaXY+XG4gICAgICAgICAgPHRhYmxlIHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcCgoaGVhZGVyR3JvdXA6IEhlYWRlckdyb3VwPFBheW1lbnRUcmFuc2FjdGlvbj4pID0+IChcbiAgICAgICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICB7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGhlYWRlcjogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0aCB7Li4uaGVhZGVyLmdldEhlYWRlclByb3BzKGhlYWRlci5nZXRTb3J0QnlUb2dnbGVQcm9wcygpKX0+XG4gICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5yZW5kZXIoJ0hlYWRlcicpfVxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnsoaGVhZGVyLmlzU29ydGVkICYmIChoZWFkZXIuaXNTb3J0ZWREZXNjID8gJ+GQgScgOiAn4ZCDJykpIHx8ICcnfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG4gICAgICAgICAgICAgIHtwYWdlLm1hcCgocm93OiBSb3c8UGF5bWVudFRyYW5zYWN0aW9uPikgPT4ge1xuICAgICAgICAgICAgICAgIHByZXBhcmVSb3cocm93KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XG4gICAgICAgICAgICAgICAgICAgIHtyb3cuY2VsbHMubWFwKChjZWxsOiBDZWxsPFBheW1lbnRUcmFuc2FjdGlvbj4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT57Y2VsbC52YWx1ZX08L3RkPjtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZ290b1BhZ2UoMCl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshY2FuUHJldmlvdXNQYWdlfVxuICAgICAgICAgICAgICBjc3M9e1BhZ2VCdXR0b25TdHlsZSghY2FuUHJldmlvdXNQYWdlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeyc8PCd9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByZXZpb3VzUGFnZSgpfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhblByZXZpb3VzUGFnZX1cbiAgICAgICAgICAgICAgY3NzPXtQYWdlQnV0dG9uU3R5bGUoIWNhblByZXZpb3VzUGFnZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsnPCd9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHsnUGFnZSAnfVxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGFnZUluZGV4ICsgMX1cbiAgICAgICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgICAgICBtYXg9e3BhZ2VPcHRpb25zLmxlbmd0aH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgbmV3UGFnZUluZGV4ID0gTWF0aC5tYXgocGFyc2VJbnQoZS50YXJnZXQ/LnZhbHVlID8/IDEsIDEwKSAtIDEsIDApO1xuICAgICAgICAgICAgICAgICAgbmV3UGFnZUluZGV4ID0gTnVtYmVyLmlzTmFOKG5ld1BhZ2VJbmRleCkgPyAwIDogbmV3UGFnZUluZGV4O1xuICAgICAgICAgICAgICAgICAgZ290b1BhZ2UobmV3UGFnZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7YCBvZiAke3BhZ2VPcHRpb25zLmxlbmd0aH1gfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7J1Nob3cgJ31cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3BhZ2VTaXplfVxuICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBuZXdQYWdlU2l6ZSA9IE1hdGgubWF4KHBhcnNlSW50KGUudGFyZ2V0Py52YWx1ZSA/PyAxLCAxMCksIDEpO1xuICAgICAgICAgICAgICAgICAgbmV3UGFnZVNpemUgPSBOdW1iZXIuaXNOYU4obmV3UGFnZVNpemUpID8gMSA6IG5ld1BhZ2VTaXplO1xuICAgICAgICAgICAgICAgICAgc2V0UGFnZVNpemUobmV3UGFnZVNpemUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsnIHJvd3MnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuZXh0UGFnZSgpfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhbk5leHRQYWdlfVxuICAgICAgICAgICAgICBjc3M9e1BhZ2VCdXR0b25TdHlsZSghY2FuTmV4dFBhZ2UpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Jz4nfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb3RvUGFnZShwYWdlQ291bnQgLSAxKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5OZXh0UGFnZX1cbiAgICAgICAgICAgICAgY3NzPXtQYWdlQnV0dG9uU3R5bGUoIWNhbk5leHRQYWdlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeyc+Pid9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TdHlsZWRQYXltZW50SGlzdG9yeURpdj5cbiAgICAgICl9XG4gICAgICA8TGluayBocmVmPXtyZWRpcmVjdFRvfT5cbiAgICAgICAgPGE+YmFjazwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQYXltZW50KTtcbiJdfQ== */"))
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
  var columns = react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo(function () {
    return [{
      Header: 'Payment History',
      columns: [{
        Header: 'Time Stamp',
        accessor: function accessor(row) {
          return row.timeStamp.calendar();
        },
        id: 'date',
        sortType: function sortType(rowA, rowB) {
          if (rowA.original.timeStamp.isAfter(rowB.original.timeStamp)) {
            return 1;
          }

          if (rowA.original.timeStamp.isBefore(rowB.original.timeStamp)) {
            return -1;
          }

          return 0;
        }
      }, {
        Header: 'Amount',
        accessor: function accessor(row) {
          return "$".concat(row.amount.toFixed(2));
        },
        id: 'amount',
        sortType: function sortType(rowA, rowB) {
          if (rowA.original.amount.gt(rowB.original.amount)) {
            return 1;
          }

          if (rowA.original.amount.lt(rowB.original.amount)) {
            return -1;
          }
        }
      }, {
        Header: 'From',
        accessor: function accessor(row) {
          return paymentAccountsInvolved[row.fromPaymentAccountId].displayName;
        },
        id: 'fromAccountName',
        disableSortBy: true
      }, {
        Header: 'To',
        accessor: function accessor(row) {
          return paymentAccountsInvolved[row.toPaymentAccountId].displayName;
        },
        id: 'toAccountName',
        disableSortBy: true
      }, {
        Header: 'Description',
        accessor: 'description',
        disableSortBy: true
      }]
    }];
  }, [paymentAccountsInvolved]);
  var data = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_3___default()(paymentHistory);
  }, [paymentHistory]);

  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_6__["useTable"])({
    columns: columns,
    data: data,
    // @ts-ignore
    initialState: {
      pageIndex: 0,
      pageSize: 2,
      sortBy: [{
        id: 'date',
        desc: true
      }]
    },
    disableSortRemove: true
  }, react_table__WEBPACK_IMPORTED_MODULE_6__["useSortBy"], react_table__WEBPACK_IMPORTED_MODULE_6__["usePagination"]),
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

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Payment"), page.length > 0 && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_StyledPaymentHistoryDiv__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("table", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getTableProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, headerGroups.map(function (headerGroup) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("tr", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, headerGroup.getHeaderGroupProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }), headerGroup.headers.map(function (header) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("th", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, header.getHeaderProps(header.getSortByToggleProps()), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), header.render('Header'), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, header.isSorted && (header.isSortedDesc ? 'ᐁ' : 'ᐃ') || ''));
    }));
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("tbody", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getTableBodyProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), page.map(function (row) {
    prepareRow(row);
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("tr", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, row.getRowProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }), row.cells.map(function (cell) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("td", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, cell.getCellProps(), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }), cell.value);
    }));
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    className: "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("button", {
    type: "button",
    onClick: function onClick() {
      return gotoPage(0);
    },
    disabled: !canPreviousPage,
    css: PageButtonStyle(!canPreviousPage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, '<<'), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("button", {
    type: "button",
    onClick: function onClick() {
      return previousPage();
    },
    disabled: !canPreviousPage,
    css: PageButtonStyle(!canPreviousPage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, '<'), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, 'Page ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("input", {
    type: "number",
    value: pageIndex + 1,
    min: "1",
    max: pageOptions.length,
    onChange: function onChange(e) {
      var _ref5, _e$target;

      var newPageIndex = Math.max(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()((_ref5 = (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value) !== null && _ref5 !== void 0 ? _ref5 : 1, 10) - 1, 0);
      newPageIndex = _babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0___default()(newPageIndex) ? 0 : newPageIndex;
      gotoPage(newPageIndex);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), " of ".concat(pageOptions.length)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, 'Show ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("input", {
    type: "number",
    value: pageSize,
    min: "1",
    onChange: function onChange(e) {
      var _ref6, _e$target2;

      var newPageSize = Math.max(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()((_ref6 = (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value) !== null && _ref6 !== void 0 ? _ref6 : 1, 10), 1);
      newPageSize = _babel_runtime_corejs2_core_js_number_is_nan__WEBPACK_IMPORTED_MODULE_0___default()(newPageSize) ? 1 : newPageSize;
      setPageSize(newPageSize);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }), ' rows'), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("button", {
    type: "button",
    onClick: function onClick() {
      return nextPage();
    },
    disabled: !canNextPage,
    css: PageButtonStyle(!canNextPage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, '>'), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("button", {
    type: "button",
    onClick: function onClick() {
      return gotoPage(pageCount - 1);
    },
    disabled: !canNextPage,
    css: PageButtonStyle(!canNextPage),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, '>>'))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: redirectTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "back")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Payment));

/***/ })

})
//# sourceMappingURL=payment.js.a497ea89f300aaa6484c.hot-update.js.map