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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-day-picker/lib/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-day-picker/lib/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _node_modules_react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/react-day-picker/lib/style.css */ "./node_modules/react-day-picker/lib/style.css");
/* harmony import */ var _node_modules_react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\futuresoft00\\Desktop\\react_func\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable no-shadow */






const RootApp = ({
  Component,
  store
}) => __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, __jsx(Component, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default()(() => _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"])(RootApp));

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

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count */ "./redux/reducers/count.js");
/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car */ "./redux/reducers/car.js");



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  count: _count__WEBPACK_IMPORTED_MODULE_1__["default"],
  car: _car__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/sagas/index.js":
/*!******************************!*\
  !*** ./redux/sagas/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
 // all 함수를 통해 Saga들을 하나로 묶어줄수 있다.

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([]);
}

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas */ "./redux/sagas/index.js");





const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
const middlewares = [sagaMiddleware];
const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], enhancer);
sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map