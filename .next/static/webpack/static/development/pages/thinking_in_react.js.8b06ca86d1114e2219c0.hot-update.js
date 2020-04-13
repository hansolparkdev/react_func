webpackHotUpdate("static\\development\\pages\\thinking_in_react.js",{

/***/ "./pages/thinking_in_react.js":
/*!************************************!*\
  !*** ./pages/thinking_in_react.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\futuresoft00\\Desktop\\react_func\\pages\\thinking_in_react.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable object-curly-spacing */

/* eslint-disable object-curly-newline */


var ProductCategory = function ProductCategory() {
  console.log('ProductCategory');
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, "\uCE74\uD14C\uACE0\uB9AC\uBAA9\uB85D");
};

var ProductRow = function ProductRow() {
  console.log('ProductRow');
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, "\uC81C\uD488\uBAA9\uB85D");
};

var ProductTable = function ProductTable() {
  console.log('ProductTable');
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, "\uC81C\uD488\uD14C\uC774\uBE14", __jsx(ProductCategory, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(ProductRow, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }));
};

var SearchBar = function SearchBar() {
  console.log('SearchBar');
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, "\uAC80\uC0C9\uD3FC");
};

var FilterableProductTable = function FilterableProductTable() {
  console.log('리액트로 생각하기');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      filterText = _useState[0],
      setFilterText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inStockOnly = _useState2[0],
      setInStockOnly = _useState2[1];

  var handdleFilterTextChange = function handdleFilterTextChange(filterText) {
    setFilterText(filterText);
  };

  var handleInStockChange = function handleInStockChange() {};

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(SearchBar, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(ProductTable, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }));
};

var PRODUCTS = [{
  category: 'Sporting Goods',
  price: '$49.99',
  stocked: true,
  name: 'Football'
}, {
  category: 'Sporting Goods',
  price: '$9.99',
  stocked: true,
  name: 'Baseball'
}, {
  category: 'Sporting Goods',
  price: '$29.99',
  stocked: false,
  name: 'Basketball'
}, {
  category: 'Electronics',
  price: '$99.99',
  stocked: true,
  name: 'iPod Touch'
}, {
  category: 'Electronics',
  price: '$399.99',
  stocked: false,
  name: 'iPhone 5'
}, {
  category: 'Electronics',
  price: '$199.99',
  stocked: true,
  name: 'Nexus 7'
}];
/* harmony default export */ __webpack_exports__["default"] = (FilterableProductTable);

/***/ })

})
//# sourceMappingURL=thinking_in_react.js.8b06ca86d1114e2219c0.hot-update.js.map