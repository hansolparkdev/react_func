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
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
var _jsxFileName = "C:\\Users\\futuresoft00\\Desktop\\react_func\\pages\\calendar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var birthdays = {
  3: ['보험', 'Gianni'],
  8: ['보험'],
  9: ['보험'],
  12: ['보험', 'Giorgia'],
  18: ['보험'],
  22: ['보험', 'Luigi'],
  25: ['보험'],
  26: ['보험']
};

var foo = function foo(date) {
  console.log(date, '에 할일 목록 출력');
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
    padding: 0,
    position: 'relative'
  };
  var toList = {
    position: 'absolute',
    color: 'lightgray',
    bottom: '10px',
    right: '10px',
    fontSize: 20,
    fontWeight: 500
  };
  return __jsx("div", {
    style: cellStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: dateStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    onClick: function onClick() {
      foo(date);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, date)), __jsx("div", {
    style: toList,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, birthdays[date] && birthdays[date].map(function (name, i) {
    return __jsx("div", {
      key: i,
      style: birthdayStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx("button", {
      type: "button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, name));
  })));
}

function Example() {
  var modifiers = {
    // allday: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
    birthday: new Date(2020, 4, 10),
    disabled: {
      daysOfWeek: [6]
    },
    monday: {
      daysOfWeek: [1]
    }
  };
  var modifiersStyles = {
    monday: {
      padding: '1px'
    }
  };
  var MONTHS = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  var WEEKDAYS_LONG = ['일', '월', '화', '수', '목', '금', '토'];
  var WEEKDAYS_SHORT = ['일', '월', '화', '수', '목', '금', '토'];
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, "\n            .DayPicker-Day--birthday {\n              background-color: #00bcd4;\n              color: white;\n            }\n            .DayPicker-Day--monday {\n              color: #00bcd4;\n            }\n          ")), __jsx(react_day_picker__WEBPACK_IMPORTED_MODULE_1___default.a, {
    canChangeMonth: false,
    modifiers: modifiers,
    className: "Birthdays",
    renderDay: renderDay,
    weekdaysLong: WEEKDAYS_LONG,
    weekdaysShort: WEEKDAYS_SHORT,
    modifiersStyles: modifiersStyles,
    locale: "ko",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=calendar.js.0fcda50a9c5bc2b20b75.hot-update.js.map