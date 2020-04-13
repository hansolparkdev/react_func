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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      state = _useState[0],
      setState = _useState[1];

  var tick = function tick() {
    setState(new Date());
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var timeSetInterval = setInterval(function () {
      return tick();
    }, 1000);
    return function () {
      clearInterval(timeSetInterval);
    };
  }, [state]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "Component and Props"), __jsx(Welcome, {
    name: "Park Hansol",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, state === undefined ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, "loading") : __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, state.toLocaleTimeString())));
};

/* harmony default export */ __webpack_exports__["default"] = (componentPropsTest);

/***/ })

})
//# sourceMappingURL=component_props_test.js.686167f08deca9bf7ac7.hot-update.js.map