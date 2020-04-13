webpackHotUpdate("static\\development\\pages\\component_props_test.js",{

/***/ "./pages/component_props_test.js":
/*!***************************************!*\
  !*** ./pages/component_props_test.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\futuresoft00\\Desktop\\react_func\\pages\\component_props_test.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Welcome = function Welcome(props) {
  var name = props.name;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, "Hello ".concat(name));
};

var componentPropsTest = function componentPropsTest() {
  console.log('component and Props');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date()),
      state = _useState[0],
      setState = _useState[1];

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "Component and Props"), __jsx(Welcome, {
    name: "Park Hansol",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "Hello, world!"), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "It is ", state.toLocaleTimeString(), ".")));
};

/* harmony default export */ __webpack_exports__["default"] = (componentPropsTest);

/***/ })

})
//# sourceMappingURL=component_props_test.js.7d46654101ac44c7c4b5.hot-update.js.map