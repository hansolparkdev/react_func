(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\thinking_in_react.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fthinking_in_react&absolutePagePath=C%3A%5CUsers%5Cfuturesoft00%5CDesktop%5Creact_func%5Cpages%5Cthinking_in_react.js!./":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fthinking_in_react&absolutePagePath=C%3A%5CUsers%5Cfuturesoft00%5CDesktop%5Creact_func%5Cpages%5Cthinking_in_react.js ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/thinking_in_react", function() {
      var mod = __webpack_require__(/*! ./pages/thinking_in_react.js */ "./pages/thinking_in_react.js")
      if(true) {
        module.hot.accept(/*! ./pages/thinking_in_react.js */ "./pages/thinking_in_react.js", function() {
          if(!next.router.components["/thinking_in_react"]) return
          var updatedPage = __webpack_require__(/*! ./pages/thinking_in_react.js */ "./pages/thinking_in_react.js")
          next.router.update("/thinking_in_react", updatedPage)
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


var ProductCategoryRow = function ProductCategoryRow(_ref) {
  var category = _ref.category;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("th", {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, category)));
};

var ProductRow = function ProductRow(_ref2) {
  var product = _ref2.product;
  var name = product.stocked ? product.name : __jsx("span", {
    style: {
      color: 'red'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 49
    }
  }, product.name);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, name), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, product.price)));
};

var ProductTable = function ProductTable(props) {
  var filterText = props.filterText,
      inStockOnly = props.inStockOnly,
      products = props.products;
  var rows = [];
  var lastCategory = null;
  products.forEach(function (product) {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(__jsx(ProductCategoryRow, {
        key: product.category,
        category: product.category,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }));
    }

    rows.push(__jsx(ProductRow, {
      key: product.name,
      product: product,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    }));
    lastCategory = product.category;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("table", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Name"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Price"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, rows)));
};

var SearchBar = function SearchBar(props) {
  var filterText = props.filterText,
      inStockOnly = props.inStockOnly,
      onFilterTextChange = props.onFilterTextChange,
      onInStockChange = props.onInStockChange;

  var handleFilterTextChange = function handleFilterTextChange(e) {
    onFilterTextChange(e.target.value);
  };

  var handleInStockChange = function handleInStockChange(e) {
    onInStockChange(e.target.checked);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx("form", {
    action: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "search....",
    value: filterText,
    onChange: handleFilterTextChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "checkbox",
    checked: inStockOnly,
    onChange: handleInStockChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }), ' ', "only show products in stock")));
};

var FilterableProductTable = function FilterableProductTable() {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      filterText = _useState[0],
      setFilterText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inStockOnly = _useState2[0],
      setInStockOnly = _useState2[1];

  var handleFilterTextChange = function handleFilterTextChange(_filterText) {
    setFilterText(_filterText);
  };

  var handleInStockChange = function handleInStockChange(_inStockOnly) {
    setInStockOnly(_inStockOnly);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx(SearchBar, {
    filterText: filterText,
    inStockOnly: inStockOnly,
    onFilterTextChange: handleFilterTextChange,
    onInStockChange: handleInStockChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }), __jsx(ProductTable, {
    products: PRODUCTS,
    filterText: filterText,
    inStockOnly: inStockOnly,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FilterableProductTable);

/***/ }),

/***/ 3:
/*!*******************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fthinking_in_react&absolutePagePath=C%3A%5CUsers%5Cfuturesoft00%5CDesktop%5Creact_func%5Cpages%5Cthinking_in_react.js ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fthinking_in_react&absolutePagePath=C%3A%5CUsers%5Cfuturesoft00%5CDesktop%5Creact_func%5Cpages%5Cthinking_in_react.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fthinking_in_react&absolutePagePath=C%3A%5CUsers%5Cfuturesoft00%5CDesktop%5Creact_func%5Cpages%5Cthinking_in_react.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=thinking_in_react.js.map