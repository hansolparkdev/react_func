module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\futuresoft00\\Desktop\\react_func\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Layout = props => {
  const {
    children
  } = props;
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "\uB808\uC774\uC544\uC6C3"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/pagination.js":
/*!**********************************!*\
  !*** ./components/pagination.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\futuresoft00\\Desktop\\react_func\\components\\pagination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable jsx-a11y/anchor-is-valid */


const Pagination = props => {
  // console.log(props);
  const {
    0: pages,
    1: setPages
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    itemsCount,
    pageSize,
    currentPage,
    onPageChange
  } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    for (let i = 1; i <= pageCount; i += 1) {
      setPages(prevArray => [...prevArray, i]);
    }
  }, []);
  return __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, pages.map((v, i) => __jsx("li", {
    key: i,
    className: v === currentPage ? 'page-item active' : 'page-item',
    style: {
      cursor: 'pointer'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    className: "page-link",
    onClick: () => onPageChange(v),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, v))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_reducers_count__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/reducers/count */ "./redux/reducers/count.js");
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pagination */ "./components/pagination.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _redux_reducers_car__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/car */ "./redux/reducers/car.js");
var _jsxFileName = "C:\\Users\\futuresoft00\\Desktop\\react_func\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable object-curly-newline */







const App = () => {
  const carState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.car);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    pageSize,
    currentPage
  } = carState;
  const {
    length: count
  } = carState.cars;

  const handlePageChange = page => {
    dispatch({
      type: _redux_reducers_car__WEBPACK_IMPORTED_MODULE_6__["SET_CURRENT_PAGE"],
      page
    });
  };

  const paginate = (_possible, _currentPage, _pageSize) => {
    const startIndex = (_currentPage - 1) * _pageSize;
    return _possible.slice(startIndex, _currentPage * _pageSize);
  };

  const info = paginate(carState.cars, currentPage, pageSize);

  const dayPicker = () => {
    console.log('day_picker');
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("table", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("tbody", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("tr", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "\uB300\uC5EC\uC77C\uC790"), __jsx("td", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-3731351149" + " " + "spanStyle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "jsx-3731351149" + " " + "day",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    onClick: dayPicker,
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 23
    }
  }))), __jsx("span", {
    className: "jsx-3731351149" + " " + "spanStyle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, "\uB2EC\uB825")), __jsx("span", {
    className: "jsx-3731351149" + " " + "spanStyle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "jsx-3731351149" + " " + "day",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "text",
    onClick: dayPicker,
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 23
    }
  }))), __jsx("span", {
    className: "jsx-3731351149" + " " + "spanStyle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, "\uB2EC\uB825")))), __jsx("td", {
    rowSpan: "3",
    className: "jsx-3731351149" + " " + "vertical_line_td",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-3731351149" + " " + "vertical_line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  })), __jsx("td", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "\uAC80\uC0C9\uD56D\uBAA9"), __jsx("td", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "\uCC28\uB7C9\uBC88\uD638input \uAC80\uC0C9\uC5B4 \uC785\uB825 input"), __jsx("td", {
    rowSpan: "3",
    className: "jsx-3731351149" + " " + "vertical_line_td",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "jsx-3731351149" + " " + "vertical_line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  })), __jsx("td", {
    rowSpan: "3",
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx("button", {
    type: "submit",
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, "\uAC80\uC0AC"))), __jsx("tr", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "\uBCF4\uD5D8\uC5F0\uB839"), __jsx("td", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, "\uBCF4\uD5D8\uC5F0\uB839 input"), __jsx("td", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "\uCC28\uB7C9\uB4F1\uAE09"), __jsx("td", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "\uCC28\uB7C9\uB4F1\uAE09 input")), __jsx("tr", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("td", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, "\uC0AC\uC6A9\uC5F0\uB8CC"), __jsx("td", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "\uC0AC\uC6A9\uC5F0\uB8CC input"), __jsx("td", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "\uCC28\uB7C9\uC0C9\uC0C1"), __jsx("td", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "\uCC28\uB7C9\uC0C9\uC0C1 input"))))), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3731351149" + " " + "row_line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-3731351149" + " " + "div_table_header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "\uCC28\uB7C9\uBC88\uD638"), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, "\uCC28\uB7C9\uBAA8\uB378"), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "\uCC28\uB7C9\uC0C9\uC0C1"), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "\uCC28\uB7C9\uC5F0\uC2DD"), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, "\uCC28\uB7C9\uB4F1\uAE09"), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "\uC5F0\uB8CC"), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "\uBCF4\uD5D8 \uC5F0\uB839"), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, "\uCC28\uB7C9\uC704\uCE58"), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "\uC601\uC5C5\uC810")), count === 0 ? 'no data' : info.map((v, i) => __jsx("div", {
    key: i,
    className: "jsx-3731351149" + " " + "div_table_content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, v.car_number), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, v.car_model), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, v.color), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, v.year), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, v.rating), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, v.fuel), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, v.insurance_age), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, v.location), __jsx("div", {
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, v.branch))), __jsx("div", {
    id: "div_table_footer",
    className: "jsx-3731351149",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx(_components_pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
    itemsCount: count,
    pageSize: pageSize,
    currentPage: currentPage,
    onPageChange: handlePageChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3731351149",
    __self: undefined
  }, "table.jsx-3731351149{width:100%;border-collapse:collapse;}table.jsx-3731351149 td.jsx-3731351149{height:30px;padding-left:calc(10px);padding-right:calc(10px);}.div_table_header.jsx-3731351149,.div_table_content.jsx-3731351149{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;}.div_table_header.jsx-3731351149 div.jsx-3731351149,.div_table_content.jsx-3731351149 div.jsx-3731351149{width:100%;height:50px;line-height:50px;padding-left:calc(10px);padding-right:calc(10px);max-width:100%;min-width:100px;border-bottom:1px solid #BDBDBD;cursor:pointer;}.div_table_content.jsx-3731351149:hover{background-color:#BDBDBD;}.row_line.jsx-3731351149{margin:10px 0;width:100%;height:1px;background-color:#BDBDBD;}.vertical_line_td.jsx-3731351149{padding:0 !important;width:40px;}.vertical_line.jsx-3731351149{margin-left:20px;width:1px;height:100%;background-color:#BDBDBD;}.spanStyle.jsx-3731351149{display:inline-block;}.spanStyle.jsx-3731351149>div.jsx-3731351149>input.jsx-3731351149{width:60px;}.spanStyle.jsx-3731351149 p.jsx-3731351149{width:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnV0dXJlc29mdDAwXFxEZXNrdG9wXFxyZWFjdF9mdW5jXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0hTLEFBR3VCLEFBSUMsQUFLQyxBQUlGLEFBV2MsQUFHWCxBQU1PLEFBSUosQUFNSyxBQUdYLEFBR0EsV0FoRGMsQUFhYixBQWlDYixBQUdBLENBN0N5QixFQXVCYixHQVVELElBSkMsQUFVWixFQTdCa0IsRUFVbEIsQUFJWSxFQVVDLEtBSmIsSUFqQ0EsQUFJMEIsQUF3QkEsR0FVQSxDQXhCRCxxQkFUekIsQUF3QkEsR0FkMEIsQUF3QjFCLFVBL0JzQixlQVFMLGVBQ0MsZ0JBQ2UsZ0NBQ2hCLGVBQ2pCLElBWEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxmdXR1cmVzb2Z0MDBcXERlc2t0b3BcXHJlYWN0X2Z1bmNcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY291bnRQbHVzQWN0aW9uLCBjb3VudE1pbnVzQWN0aW9uIH0gZnJvbSAnLi4vcmVkdXgvcmVkdWNlcnMvY291bnQnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2luYXRpb24nO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgU0VUX0NVUlJFTlRfUEFHRSB9IGZyb20gJy4uL3JlZHV4L3JlZHVjZXJzL2Nhcic7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FyU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCB7IHBhZ2VTaXplLCBjdXJyZW50UGFnZSB9ID0gY2FyU3RhdGU7XHJcbiAgY29uc3QgeyBsZW5ndGg6IGNvdW50IH0gPSBjYXJTdGF0ZS5jYXJzO1xyXG4gIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfQ1VSUkVOVF9QQUdFLCBwYWdlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBhZ2luYXRlID0gKF9wb3NzaWJsZSwgX2N1cnJlbnRQYWdlLCBfcGFnZVNpemUpID0+IHtcclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAoX2N1cnJlbnRQYWdlIC0gMSkgKiBfcGFnZVNpemU7XHJcbiAgICByZXR1cm4gX3Bvc3NpYmxlLnNsaWNlKHN0YXJ0SW5kZXgsIF9jdXJyZW50UGFnZSAqIF9wYWdlU2l6ZSk7XHJcbiAgfTtcclxuICBjb25zdCBpbmZvID0gcGFnaW5hdGUoY2FyU3RhdGUuY2FycywgY3VycmVudFBhZ2UsIHBhZ2VTaXplKTtcclxuXHJcbiAgY29uc3QgZGF5UGlja2VyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2RheV9waWNrZXInKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+64yA7Jes7J287J6QPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuU3R5bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DbGljaz17ZGF5UGlja2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5TdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuuLrOugpTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuU3R5bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DbGljaz17ZGF5UGlja2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5TdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuuLrOugpTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgcm93U3Bhbj1cIjNcIiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbF9saW5lX3RkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsX2xpbmVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPuqygOyDie2VreuqqTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPuywqOufieuyiO2YuGlucHV0IOqygOyDieyWtCDsnoXroKUgaW5wdXQ8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCByb3dTcGFuPVwiM1wiIGNsYXNzTmFtZT1cInZlcnRpY2FsX2xpbmVfdGRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydGljYWxfbGluZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgcm93U3Bhbj1cIjNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPuqygOyCrDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+67O07ZeY7Jew66C5PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+67O07ZeY7Jew66C5IGlucHV0PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+7LCo65+J65Ox6riJPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+7LCo65+J65Ox6riJIGlucHV0PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD7sgqzsmqnsl7Dro4w8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD7sgqzsmqnsl7Dro4wgaW5wdXQ8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD7ssKjrn4nsg4nsg4E8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD7ssKjrn4nsg4nsg4EgaW5wdXQ8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dfbGluZVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdl90YWJsZV9oZWFkZXJcIj5cclxuICAgICAgICA8ZGl2PuywqOufieuyiO2YuDwvZGl2PlxyXG4gICAgICAgIDxkaXY+7LCo65+J66qo6424PC9kaXY+XHJcbiAgICAgICAgPGRpdj7ssKjrn4nsg4nsg4E8L2Rpdj5cclxuICAgICAgICA8ZGl2PuywqOufieyXsOyLnTwvZGl2PlxyXG4gICAgICAgIDxkaXY+7LCo65+J65Ox6riJPC9kaXY+XHJcbiAgICAgICAgPGRpdj7sl7Dro4w8L2Rpdj5cclxuICAgICAgICA8ZGl2PuuztO2XmCDsl7DroLk8L2Rpdj5cclxuICAgICAgICA8ZGl2PuywqOufieychOy5mDwvZGl2PlxyXG4gICAgICAgIDxkaXY+7JiB7JeF7KCQPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7IGNvdW50ID09PSAwXHJcbiAgICAgICAgPyAnbm8gZGF0YSdcclxuICAgICAgICA6IGluZm8ubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZGl2X3RhYmxlX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdj57di5jYXJfbnVtYmVyfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pnt2LmNhcl9tb2RlbH08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57di5jb2xvcn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57di55ZWFyfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pnt2LnJhdGluZ308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj57di5mdWVsfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pnt2Lmluc3VyYW5jZV9hZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e3YubG9jYXRpb259PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e3YuYnJhbmNofTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIHt9XHJcbiAgICAgIDxkaXYgaWQ9XCJkaXZfdGFibGVfZm9vdGVyXCI+XHJcbiAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgIGl0ZW1zQ291bnQ9e2NvdW50fVxyXG4gICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxyXG4gICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICB0YWJsZXtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGFibGUgdGR7XHJcbiAgICAgICAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6Y2FsYygxMHB4KTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDpjYWxjKDEwcHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpdl90YWJsZV9oZWFkZXIsIC5kaXZfdGFibGVfY29udGVudHtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaXZfdGFibGVfaGVhZGVyIGRpdiwgLmRpdl90YWJsZV9jb250ZW50IGRpdntcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDpjYWxjKDEwcHgpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OmNhbGMoMTBweCk7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0JEQkRCRDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpdl90YWJsZV9jb250ZW50OmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNCREJEQkQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucm93X2xpbmV7XHJcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDoxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0JEQkRCRDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC52ZXJ0aWNhbF9saW5lX3Rke1xyXG4gICAgICAgICAgICBwYWRkaW5nOjAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6NDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC52ZXJ0aWNhbF9saW5le1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDoxcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNCREJEQkQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3BhblN0eWxle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3BhblN0eWxlPmRpdj5pbnB1dHtcclxuICAgICAgICAgICAgd2lkdGg6NjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zcGFuU3R5bGUgcHtcclxuICAgICAgICAgICAgd2lkdGg6NTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgICB7Lyoge2NvdW50fVxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXttaW51c30+LTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwbHVzfT4rPC9idXR0b24+ICovfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\futuresoft00\\\\Desktop\\\\react_func\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./redux/reducers/car.js":
/*!*******************************!*\
  !*** ./redux/reducers/car.js ***!
  \*******************************/
/*! exports provided: SET_CURRENT_PAGE, initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_PAGE", function() { return SET_CURRENT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable object-curly-newline */
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'; // export const countPlusAction = () => ({ // 액션 생성 함수
//   type: COUNT_PLUS,
// });
// export const countMinusAction = () => ({
//   type: COUNT_MINUS,
// });

const initialState = {
  pageSize: 10,
  currentPage: 1,
  cars: [{
    car_number: 1,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 2,
    car_model: '코나',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 3,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 4,
    car_model: '코나',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 5,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 6,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 7,
    car_model: '코나',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 8,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 9,
    car_model: '코나',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 10,
    car_model: '코나',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 11,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 12,
    car_model: '코나',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 13,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 14,
    car_model: '코나',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 15,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 16,
    car_model: '코나',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 17,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 18,
    car_model: '코나',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 19,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 20,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 21,
    car_model: '코나',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 22,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 23,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 24,
    car_model: '코나',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 25,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 26,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 27,
    car_model: '코나',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 28,
    car_model: '코나',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }, {
    car_number: 29,
    car_model: '셀토스',
    color: 'black',
    year: '14년식',
    fuel: '가솔린',
    rating: '소형',
    insurance_age: 20,
    location: '청계산',
    branch: '강남점'
  }]
};

const carReducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case SET_CURRENT_PAGE:
      {
        return _objectSpread({}, state, {
          currentPage: action.page
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (carReducer);

/***/ }),

/***/ "./redux/reducers/count.js":
/*!*********************************!*\
  !*** ./redux/reducers/count.js ***!
  \*********************************/
/*! exports provided: initialState, COUNT_PLUS, COUNT_MINUS, countPlusAction, countMinusAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_PLUS", function() { return COUNT_PLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNT_MINUS", function() { return COUNT_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countPlusAction", function() { return countPlusAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countMinusAction", function() { return countMinusAction; });
const initialState = 0;
const COUNT_PLUS = 'COUNT_PLUS'; // count 1을 증가시킬 액션 타입이다.

const COUNT_MINUS = 'COUNT_MINUS'; // count 1을 감소시킬 액션 타입이다.

const countPlusAction = () => ({
  // 액션 생성 함수
  type: COUNT_PLUS
});
const countMinusAction = () => ({
  type: COUNT_MINUS
});

const CountReducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case COUNT_PLUS:
      return state + 1;

    case COUNT_MINUS:
      return state - 1;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (CountReducer);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\futuresoft00\Desktop\react_func\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map