webpackHotUpdate("static\\development\\pages\\calendar.js",{

/***/ "./pages/calendar.js":
/*!***************************!*\
  !*** ./pages/calendar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Example; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-day-picker */ "./node_modules/react-day-picker/DayPicker.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\futuresoft00\\Desktop\\react_func\\pages\\calendar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var birthdays = {
  3: ['보험', 'Gianni'],
  8: ['Elena'],
  9: ['Irene'],
  12: ['Paolo', 'Giorgia'],
  18: ['Claudia'],
  22: ['Maria', 'Luigi'],
  25: ['Simone'],
  26: ['Marta']
};

var foo = function foo() {
  console.log('foo');
};

function renderDay(day) {
  var _this = this;

  var date = day.getDate();
  var dateStyle = {
    position: 'absolute',
    color: 'lightgray',
    top: 0,
    left: '10px',
    fontSize: 20,
    fontWeight: 500
  };
  var birthdayStyle = {
    fontSize: '0.8em',
    textAlign: 'right'
  };
  var cellStyle = {
    height: '150px',
    width: '150px',
    border: '1px solid #BDBDBD',
    margin: 0,
    position: 'relative'
  };
  var toList = {
    display: 'flex',
    alignItems: 'flex-end'
  };
  return __jsx("div", {
    style: cellStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: dateStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, date), __jsx("div", {
    style: toList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, birthdays[date] && birthdays[date].map(function (name, i) {
    return __jsx("div", {
      key: i,
      style: birthdayStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, __jsx("button", {
      type: "button",
      onClick: foo,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, name));
  })));
}

function Example() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(react_day_picker__WEBPACK_IMPORTED_MODULE_1___default.a, {
    canChangeMonth: false,
    className: "Birthdays",
    renderDay: renderDay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=calendar.js.e82f166d1cd9084ca55f.hot-update.js.map