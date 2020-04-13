webpackHotUpdate("static\\development\\pages\\conditional_render.js",{

/***/ "./pages/conditional_render.js":
/*!*************************************!*\
  !*** ./pages/conditional_render.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\futuresoft00\\Desktop\\react_func\\pages\\conditional_render.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ConditionalRender = function ConditionalRender() {
  console.log('Conditional Rendering Test');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoggedIn = _useState[0],
      setIsLoggedIn = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "\uC870\uAC74\uBD80 \uB80C\uB354\uB9C1"), isLoggedIn === false ? __jsx("button", {
    type: "button",
    onClick: function onClick() {
      return setIsLoggedIn(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "\uB85C\uADF8\uC778") : __jsx("button", {
    type: "button",
    onClick: function onClick() {
      return setIsLoggedIn(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "\uB85C\uADF8\uC544\uC6C3"));
};

/* harmony default export */ __webpack_exports__["default"] = (ConditionalRender);

/***/ })

})
//# sourceMappingURL=conditional_render.js.3aac58be8a27284b6878.hot-update.js.map