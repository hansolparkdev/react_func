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
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("th", {
    colSpan: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
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
      lineNumber: 19,
      columnNumber: 49
    }
  }, product.name);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, product.name), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, product.price)));
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
          lineNumber: 44,
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
        lineNumber: 48,
        columnNumber: 7
      }
    }));
    lastCategory = product.category;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx("table", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Name"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Price"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx("form", {
    action: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
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
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "checkbox",
    checked: inStockOnly,
    onChange: handleInStockChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
      lineNumber: 123,
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
      lineNumber: 124,
      columnNumber: 7
    }
  }), __jsx(ProductTable, {
    products: PRODUCTS,
    filterText: filterText,
    inStockOnly: inStockOnly,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FilterableProductTable);

/***/ })

})
//# sourceMappingURL=thinking_in_react.js.fb2f3acab6cd9a0406de.hot-update.js.map