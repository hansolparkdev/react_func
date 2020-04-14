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


var ProductCategoryRow = function ProductCategoryRow(_ref) {
  var category = _ref.category;
  console.log(category);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "\uCE74\uD14C\uACE0\uB9AC\uBAA9\uB85D"));
};

var ProductRow = function ProductRow() {
  console.log('ProductRow');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "dfdf")));
};

var ProductTable = function ProductTable(props) {
  // console.log(props);
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
          lineNumber: 41,
          columnNumber: 9
        }
      }));
    }

    rows.push(__jsx(ProductRow, {
      key: product.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }));
    lastCategory = product.category;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx("table", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Name"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Price"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, rows)));
};

var SearchBar = function SearchBar(props) {
  console.log('SearchBar');
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
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx("form", {
    action: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "checkbox",
    checked: inStockOnly,
    onChange: handleInStockChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
  console.log(PRODUCTS);

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
      lineNumber: 120,
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
      lineNumber: 121,
      columnNumber: 7
    }
  }), __jsx(ProductTable, {
    products: PRODUCTS,
    filterText: filterText,
    inStockOnly: inStockOnly,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FilterableProductTable);

/***/ })

})
//# sourceMappingURL=thinking_in_react.js.5ee5c713489861f65467.hot-update.js.map