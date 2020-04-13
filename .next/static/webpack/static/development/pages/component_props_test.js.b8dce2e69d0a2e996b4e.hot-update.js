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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var timeSetInterval = setInterval(function () {
      setState(new Date());
    }, 1000);
    return function () {
      clearInterval(timeSetInterval);
    };
  }, [state]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "Component and Props"), __jsx(Welcome, {
    name: "Park Hansol",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, state.toLocaleTimeString())));
};

/* harmony default export */ __webpack_exports__["default"] = (componentPropsTest);

/***/ })

})
//# sourceMappingURL=component_props_test.js.b8dce2e69d0a2e996b4e.hot-update.js.map