(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\component_props_test.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcomponent_props_test&absolutePagePath=C%3A%5CUsers%5Cfuturesoft00%5CDesktop%5Creact_func%5Cpages%5Ccomponent_props_test.js!./":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcomponent_props_test&absolutePagePath=C%3A%5CUsers%5Cfuturesoft00%5CDesktop%5Creact_func%5Cpages%5Ccomponent_props_test.js ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/component_props_test", function() {
      var mod = __webpack_require__(/*! ./pages/component_props_test.js */ "./pages/component_props_test.js")
      if(true) {
        module.hot.accept(/*! ./pages/component_props_test.js */ "./pages/component_props_test.js", function() {
          if(!next.router.components["/component_props_test"]) return
          var updatedPage = __webpack_require__(/*! ./pages/component_props_test.js */ "./pages/component_props_test.js")
          next.router.update("/component_props_test", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

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

/***/ }),

/***/ 2:
/*!*************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fcomponent_props_test&absolutePagePath=C%3A%5CUsers%5Cfuturesoft00%5CDesktop%5Creact_func%5Cpages%5Ccomponent_props_test.js ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fcomponent_props_test&absolutePagePath=C%3A%5CUsers%5Cfuturesoft00%5CDesktop%5Creact_func%5Cpages%5Ccomponent_props_test.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcomponent_props_test&absolutePagePath=C%3A%5CUsers%5Cfuturesoft00%5CDesktop%5Creact_func%5Cpages%5Ccomponent_props_test.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=component_props_test.js.map