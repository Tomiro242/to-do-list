/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,::before,::after {box-sizing: border-box;}\n\nhtml {height: 100vh;\n    width: 100vw;}\n\nbody {max-width: 100%;\n      max-height: 100%;\n      margin:0;}\n\n#container {display: grid;\n            grid-template: repeat(10,100px) / repeat(20, 100px);\n            column-gap: 5px;\n            row-gap: 5px;}\n\n#top {grid-area: 1/1/3/-1;\n      background-color: blue;\n     text-align: center;}\n\n#side {grid-area: 3/1/-1/3;\n       background-color: blueviolet;}\n\n#main {grid-area: 3/3/-1/-1;\n       background-color: darkolivegreen;\n       position: relative;}\n\n#listbar {display:flex;\n          flex-direction: row;\n          position: absolute;\n          top:10%;\n         left:20%;}\n\n#listbar >div {background-color: azure;\n               height: 700px;\n               width:400px;\n               border: 3px solid black;\n               text-align: center;}\n\n#pending >div {border: 1px solid black;\n               }\n\n#completed >div {border: 1px solid black;\n               }\n\nform {position: absolute;\n       top:50%;\n       left:50%;\n        height: 150px;\n        width:220px;\n        border:solid 2px black;\n        background-color: brown;}\n\nform > div {display:flex;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: normal;\n            margin-bottom: 3px;}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/addDays.js":
/*!******************************************!*\
  !*** ./node_modules/date-fns/addDays.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDays: () => (/* binding */ addDays),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.js */ \"./node_modules/date-fns/constructFrom.js\");\n/* harmony import */ var _toDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.js */ \"./node_modules/date-fns/toDate.js\");\n\n\n\n/**\n * The {@link addDays} function options.\n */\n\n/**\n * @name addDays\n * @category Day Helpers\n * @summary Add the specified number of days to the given date.\n *\n * @description\n * Add the specified number of days to the given date.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.\n *\n * @param date - The date to be changed\n * @param amount - The amount of days to be added.\n * @param options - An object with options\n *\n * @returns The new date with the days added\n *\n * @example\n * // Add 10 days to 1 September 2014:\n * const result = addDays(new Date(2014, 8, 1), 10)\n * //=> Thu Sep 11 2014 00:00:00\n */\nfunction addDays(date, amount, options) {\n  const _date = (0,_toDate_js__WEBPACK_IMPORTED_MODULE_0__.toDate)(date, options?.in);\n  if (isNaN(amount)) return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(options?.in || date, NaN);\n\n  // If 0 days, no-op to avoid changing times in the hour before end of DST\n  if (!amount) return _date;\n\n  _date.setDate(_date.getDate() + amount);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/addDays.js?");

/***/ }),

/***/ "./node_modules/date-fns/constants.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/constants.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructFromSymbol: () => (/* binding */ constructFromSymbol),\n/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),\n/* harmony export */   daysInYear: () => (/* binding */ daysInYear),\n/* harmony export */   maxTime: () => (/* binding */ maxTime),\n/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),\n/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),\n/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),\n/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),\n/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),\n/* harmony export */   minTime: () => (/* binding */ minTime),\n/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),\n/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),\n/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),\n/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),\n/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),\n/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),\n/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),\n/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),\n/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),\n/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),\n/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),\n/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),\n/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),\n/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)\n/* harmony export */ });\n/**\n * @module constants\n * @summary Useful constants\n * @description\n * Collection of useful date constants.\n *\n * The constants could be imported from `date-fns/constants`:\n *\n * ```ts\n * import { maxTime, minTime } from \"./constants/date-fns/constants\";\n *\n * function isAllowedTime(time) {\n *   return time <= maxTime && time >= minTime;\n * }\n * ```\n */\n\n/**\n * @constant\n * @name daysInWeek\n * @summary Days in 1 week.\n */\nconst daysInWeek = 7;\n\n/**\n * @constant\n * @name daysInYear\n * @summary Days in 1 year.\n *\n * @description\n * How many days in a year.\n *\n * One years equals 365.2425 days according to the formula:\n *\n * > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.\n * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days\n */\nconst daysInYear = 365.2425;\n\n/**\n * @constant\n * @name maxTime\n * @summary Maximum allowed time.\n *\n * @example\n * import { maxTime } from \"./constants/date-fns/constants\";\n *\n * const isValid = 8640000000000001 <= maxTime;\n * //=> false\n *\n * new Date(8640000000000001);\n * //=> Invalid Date\n */\nconst maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n\n/**\n * @constant\n * @name minTime\n * @summary Minimum allowed time.\n *\n * @example\n * import { minTime } from \"./constants/date-fns/constants\";\n *\n * const isValid = -8640000000000001 >= minTime;\n * //=> false\n *\n * new Date(-8640000000000001)\n * //=> Invalid Date\n */\nconst minTime = -maxTime;\n\n/**\n * @constant\n * @name millisecondsInWeek\n * @summary Milliseconds in 1 week.\n */\nconst millisecondsInWeek = 604800000;\n\n/**\n * @constant\n * @name millisecondsInDay\n * @summary Milliseconds in 1 day.\n */\nconst millisecondsInDay = 86400000;\n\n/**\n * @constant\n * @name millisecondsInMinute\n * @summary Milliseconds in 1 minute\n */\nconst millisecondsInMinute = 60000;\n\n/**\n * @constant\n * @name millisecondsInHour\n * @summary Milliseconds in 1 hour\n */\nconst millisecondsInHour = 3600000;\n\n/**\n * @constant\n * @name millisecondsInSecond\n * @summary Milliseconds in 1 second\n */\nconst millisecondsInSecond = 1000;\n\n/**\n * @constant\n * @name minutesInYear\n * @summary Minutes in 1 year.\n */\nconst minutesInYear = 525600;\n\n/**\n * @constant\n * @name minutesInMonth\n * @summary Minutes in 1 month.\n */\nconst minutesInMonth = 43200;\n\n/**\n * @constant\n * @name minutesInDay\n * @summary Minutes in 1 day.\n */\nconst minutesInDay = 1440;\n\n/**\n * @constant\n * @name minutesInHour\n * @summary Minutes in 1 hour.\n */\nconst minutesInHour = 60;\n\n/**\n * @constant\n * @name monthsInQuarter\n * @summary Months in 1 quarter.\n */\nconst monthsInQuarter = 3;\n\n/**\n * @constant\n * @name monthsInYear\n * @summary Months in 1 year.\n */\nconst monthsInYear = 12;\n\n/**\n * @constant\n * @name quartersInYear\n * @summary Quarters in 1 year\n */\nconst quartersInYear = 4;\n\n/**\n * @constant\n * @name secondsInHour\n * @summary Seconds in 1 hour.\n */\nconst secondsInHour = 3600;\n\n/**\n * @constant\n * @name secondsInMinute\n * @summary Seconds in 1 minute.\n */\nconst secondsInMinute = 60;\n\n/**\n * @constant\n * @name secondsInDay\n * @summary Seconds in 1 day.\n */\nconst secondsInDay = secondsInHour * 24;\n\n/**\n * @constant\n * @name secondsInWeek\n * @summary Seconds in 1 week.\n */\nconst secondsInWeek = secondsInDay * 7;\n\n/**\n * @constant\n * @name secondsInYear\n * @summary Seconds in 1 year.\n */\nconst secondsInYear = secondsInDay * daysInYear;\n\n/**\n * @constant\n * @name secondsInMonth\n * @summary Seconds in 1 month\n */\nconst secondsInMonth = secondsInYear / 12;\n\n/**\n * @constant\n * @name secondsInQuarter\n * @summary Seconds in 1 quarter.\n */\nconst secondsInQuarter = secondsInMonth * 3;\n\n/**\n * @constant\n * @name constructFromSymbol\n * @summary Symbol enabling Date extensions to inherit properties from the reference date.\n *\n * The symbol is used to enable the `constructFrom` function to construct a date\n * using a reference date and a value. It allows to transfer extra properties\n * from the reference date to the new date. It's useful for extensions like\n * [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as\n * a constructor argument.\n */\nconst constructFromSymbol = Symbol.for(\"constructDateFrom\");\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/constants.js?");

/***/ }),

/***/ "./node_modules/date-fns/constructFrom.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   constructFrom: () => (/* binding */ constructFrom),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./node_modules/date-fns/constants.js\");\n\n\n/**\n * @name constructFrom\n * @category Generic Helpers\n * @summary Constructs a date using the reference date and the value\n *\n * @description\n * The function constructs a new date using the constructor from the reference\n * date and the given value. It helps to build generic functions that accept\n * date extensions.\n *\n * It defaults to `Date` if the passed reference date is a number or a string.\n *\n * Starting from v3.7.0, it allows to construct a date using `[Symbol.for(\"constructDateFrom\")]`\n * enabling to transfer extra properties from the reference date to the new date.\n * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)\n * that accept a time zone as a constructor argument.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The reference date to take constructor from\n * @param value - The value to create the date\n *\n * @returns Date initialized using the given date and value\n *\n * @example\n * import { constructFrom } from \"./constructFrom/date-fns\";\n *\n * // A function that clones a date preserving the original type\n * function cloneDate<DateType extends Date>(date: DateType): DateType {\n *   return constructFrom(\n *     date, // Use constructor from the given date\n *     date.getTime() // Use the date value to create a new date\n *   );\n * }\n */\nfunction constructFrom(date, value) {\n  if (typeof date === \"function\") return date(value);\n\n  if (date && typeof date === \"object\" && _constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol in date)\n    return date[_constants_js__WEBPACK_IMPORTED_MODULE_0__.constructFromSymbol](value);\n\n  if (date instanceof Date) return new date.constructor(value);\n\n  return new Date(value);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/constructFrom.js?");

/***/ }),

/***/ "./node_modules/date-fns/toDate.js":
/*!*****************************************!*\
  !*** ./node_modules/date-fns/toDate.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toDate: () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _constructFrom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.js */ \"./node_modules/date-fns/constructFrom.js\");\n\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * Starting from v3.7.0, it clones a date using `[Symbol.for(\"constructDateFrom\")]`\n * enabling to transfer extra properties from the reference date to the new date.\n * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)\n * that accept a time zone as a constructor argument.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.\n *\n * @param argument - The value to convert\n *\n * @returns The parsed date in the local time zone\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument, context) {\n  // [TODO] Get rid of `toDate` or `constructFrom`?\n  return (0,_constructFrom_js__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(context || argument, argument);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);\n\n\n//# sourceURL=webpack:///./node_modules/date-fns/toDate.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/array.js":
/*!**********************!*\
  !*** ./src/array.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listContainer: () => (/* binding */ listContainer)\n/* harmony export */ });\nconst listContainer = (function(){\n             const pendingList = [];\n             const completeList = [];\n\n             return {pendingList,completeList};\n})();\n\n//# sourceURL=webpack:///./src/array.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   form: () => (/* binding */ form)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ \"./src/array.js\");\n/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object.js */ \"./src/object.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\n\n\n\n\n\n\nconst form = (function (){\n            \n            let totalCount = 0;\n            \n            function createForm (){\n                let body = document.querySelector ('body');\n                let formy = document.createElement ('form');\n                let divTask = document.createElement ('div');\n                let divDiscript = document.createElement ('div');\n                let labTask = document.createElement ('label');\n                let labDiscript = document.createElement ('label');\n                let inTask = document.createElement ('input');\n                let discriptText = document.createElement ('textarea');\n                let subBtn = document.createElement ('button');\n                \n               /* formy.setAttribute (\"method\", \"post\");*/\n                inTask.setAttribute(\"type\", \"text\");\n\n                labTask.textContent = \"Task\";\n                labDiscript.textContent = \"info\";\n                subBtn.textContent = \"sub\";\n\n\n                divTask.appendChild (labTask);\n                divTask.appendChild (inTask);\n                divDiscript.appendChild (labDiscript);\n                divDiscript.appendChild (discriptText);\n                formy.appendChild (divTask);\n                formy.appendChild (divDiscript);\n                formy.appendChild (subBtn);\n                body.appendChild (formy);\n\n                subBtn.addEventListener('click', ()=>{submit;_array_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.pendingList.push(new _object_js__WEBPACK_IMPORTED_MODULE_2__.toDoItem(inTask.value,discriptText.value,totalCount));(0,_task_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(_array_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.pendingList[totalCount].task,_array_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.pendingList[totalCount].description,_array_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.pendingList[totalCount].count,_array_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.pendingList,_array_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.completeList);formy.remove();totalCount++;console.log(_array_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.pendingList);_storage_js__WEBPACK_IMPORTED_MODULE_3__.totalStorage.myStorage(\"storPending\",_array_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.pendingList);});\n                \n            };\n\n            let formbtn = document.querySelector ('#formbtn');\n\n            function submit (event){\n                event.preventDefault();\n                \n            };\n\n            \n\n            return {createForm, formbtn, submit };\n})();\n\n//# sourceURL=webpack:///./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ \"./src/form.js\");\n/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object.js */ \"./src/object.js\");\n/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array.js */ \"./src/array.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/addDays.js\");\n\n\n\n\n\n// a third party library downloade for lesson//\n\n//totalStorage.myStorage(\"pendingList\",listContainer.pendingList);//\n\nconst tor = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.addDays)(new Date (),0);\n\nconsole.log(tor);\n\nconst clearstor = document.querySelector ('#clearstor');\n\nclearstor.addEventListener (\"click\",()=>{ localStorage.clear()});\n\n_storage_js__WEBPACK_IMPORTED_MODULE_4__.totalStorage.checkStorage(_array_js__WEBPACK_IMPORTED_MODULE_3__.listContainer.pendingList,_array_js__WEBPACK_IMPORTED_MODULE_3__.listContainer.completeList);\n\n//window.addEventListener('beforeunload',()=>{totalStorage.myStorage(\"storPending\",listContainer.pendingList);totalStorage.myStorage(\"storComplete\",listContainer.completeList)});used to create storage before page reload however in form submit button and task complete button:look at//\n\n\n\n\n\n\n\n_form_js__WEBPACK_IMPORTED_MODULE_1__.form.formbtn.addEventListener('click',_form_js__WEBPACK_IMPORTED_MODULE_1__.form.createForm);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toDoItem: () => (/* binding */ toDoItem)\n/* harmony export */ });\n//import {addDays} from \"./date-fns/src/addDays/index.js\";//\n\n\nclass toDoItem {\n    constructor (task,description,count){\n        this.task = task;\n        this.description = description;\n        this.count = count;\n    };\n};\n\n//# sourceURL=webpack:///./src/object.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   totalStorage: () => (/* binding */ totalStorage)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ \"./src/array.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\n\n\n\nconst totalStorage = (function(){\n\n    function myStorage (sting,a){\n\n        localStorage.setItem(sting,JSON.stringify(a));\n        console.log(JSON.parse(localStorage.getItem(sting)));\n    };\n\n    function checkStorage (b,c){\n        let storSize = localStorage.length;\n       // let firstStorage = JSON.parse(localStorage.getItem(\"storPending\"));\n       // let firstSize = firstStorage.length;\n       // let arrayState = a.length;\n        //let newIndex = 0;\n        \n\n\n       if (storSize === 0){\n            console.log(storSize);\n        }else if (storSize == 1 ){\n          let firstStorage = JSON.parse(localStorage.getItem(\"storPending\"));\n          let firstSize = firstStorage.length;\n          let newIndex = 0;\n\n          for (let i = 0; i < firstSize; i++){\n              b.push(firstStorage[newIndex]);\n              (0,_task__WEBPACK_IMPORTED_MODULE_0__.createTask)(firstStorage[newIndex].task,firstStorage[newIndex].description,newIndex,_array__WEBPACK_IMPORTED_MODULE_1__.listContainer.pendingList,_array__WEBPACK_IMPORTED_MODULE_1__.listContainer.completeList);\n              newIndex++;\n          };\n          \n         \n        }else if (storSize == 2){\n          let firstStorage = JSON.parse(localStorage.getItem(\"storPending\"));\n          let secondStorage = JSON.parse(localStorage.getItem(\"storComplete\"));\n          let firstSize = firstStorage.length;\n          let secondSize= secondStorage.length;\n          let allSize = firstSize + secondSize;\n          let newIndex = 0;\n          let secIndex = 0;\n\n          for (let i = 0; i < firstSize; i++){\n              b.push(firstStorage[newIndex]);\n              (0,_task__WEBPACK_IMPORTED_MODULE_0__.createTask)(firstStorage[newIndex].task,firstStorage[newIndex].description,newIndex,_array__WEBPACK_IMPORTED_MODULE_1__.listContainer.pendingList,_array__WEBPACK_IMPORTED_MODULE_1__.listContainer.completeList);\n              newIndex++;\n          };\n\n          for (let i = 0; i < secondSize; i++){\n             c.push(secondStorage[secIndex]);\n             (0,_task__WEBPACK_IMPORTED_MODULE_0__.completeTask)(secondStorage[secIndex].task,secondStorage[secIndex].description);\n             secIndex++;\n             \n          };\n          \n\n    }\n}\n\n    return {myStorage,checkStorage}\n          \n})();\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   completeTask: () => (/* binding */ completeTask),\n/* harmony export */   createTask: () => (/* binding */ createTask)\n/* harmony export */ });\n/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ \"./src/array.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\nlet ollo = 0;\n\nfunction createTask (alpha,bravo,charlie,firstarr,secondarr){\n    let pending = document.querySelector ('#pending');\n    let taskDiv = document.createElement ('div');\n    let taskInfo = document.createElement ('h5');\n    let taskDescript = document.createElement ('p');\n    let compBtn = document.createElement ('button');\n    let delBtn = document.createElement ('button');\n\n    taskInfo.textContent = alpha;\n    taskDescript.textContent = bravo;\n    compBtn.textContent = \"comlete\";\n    delBtn.textContent = \"X\";\n\n    compBtn.style.cssText = \"color:white ; background:blue ;\";\n    delBtn.style.cssText = \"background:red;position: absolute; top:0; right:0\";\n    taskDiv.style.cssText = \"position:relative;\";\n    compBtn.addEventListener('click', ()=>{finTask(firstarr,secondarr); _storage__WEBPACK_IMPORTED_MODULE_1__.totalStorage.myStorage(\"storComplete\",_array__WEBPACK_IMPORTED_MODULE_0__.listContainer.completeList); _storage__WEBPACK_IMPORTED_MODULE_1__.totalStorage.myStorage(\"storPending\",_array__WEBPACK_IMPORTED_MODULE_0__.listContainer.pendingList)});\n\n    taskDiv.dataset.idCount = charlie;\n\n    taskDiv.appendChild (taskInfo);\n    taskDiv.appendChild (taskDescript);\n    taskDiv.appendChild (compBtn);\n    taskDiv.appendChild (delBtn);\n    pending.appendChild (taskDiv);\n\n    delBtn.addEventListener('click',deleteTask);\n\n    function deleteTask (){\n        const findDel = (element) => element.count == taskDiv.dataset.idCount;\n        let keel = _array__WEBPACK_IMPORTED_MODULE_0__.listContainer.pendingList.findIndex(findDel);\n        _array__WEBPACK_IMPORTED_MODULE_0__.listContainer.pendingList.splice(keel,1);\n        taskDiv.remove();\n    }\n\n       \n    \n    \n    function finTask (pendarra,comparra){\n        let setTask = 0;\n        const findMe = (element) => element.count == taskDiv.dataset.idCount;//compare the div idcount attribut with object property key//\n        let keeper = pendarra.findIndex(findMe);//find the index in the pending array//\n        comparra.push(pendarra[keeper]);//make a copy of object into to completed array//\n        pendarra.splice(keeper,1);//remove object from pending array//\n        console.log (comparra);\n        taskDiv.remove();\n        console.log(keeper);\n        completeTask ();\n\n        /*function createPen () {\n             completeTask ('hello', 'world');\n             setTask++;\n        };*/\n         \n       // createPen();\n        \n    \n    }\n};\n\nfunction completeTask (){\n    let completed = document.querySelector ('#completed');\n    let compTaskDiv = document.createElement ('div');\n    let compTaskInfo = document.createElement ('h5');\n    let compTaskDescript = document.createElement ('p');\n    let compDel = document.createElement ('button');\n\n    compTaskInfo.textContent = _array__WEBPACK_IMPORTED_MODULE_0__.listContainer.completeList[ollo].task;\n    compTaskDescript.textContent = _array__WEBPACK_IMPORTED_MODULE_0__.listContainer.completeList[ollo].description;\n    compTaskDiv.dataset.idCount = _array__WEBPACK_IMPORTED_MODULE_0__.listContainer.completeList[ollo].count;\n    compDel.textContent = \"X\";\n\n\n\n\n\n    compDel.style.cssText = \"background:red; position:absolute; top:0; right:0;\";\n    compTaskDiv.style.cssText = \"position:relative;\";\n\n    compTaskDiv.appendChild (compTaskInfo);\n    compTaskDiv.appendChild (compTaskDescript);\n    compTaskDiv.appendChild (compDel);\n    completed.appendChild (compTaskDiv);\n\n    compDel.addEventListener('click',deletecompTask);\n\n    function deletecompTask (){\n        const findDel = (element) => element.count == compTaskDiv.dataset.idCount;\n        let keel = _array__WEBPACK_IMPORTED_MODULE_0__.listContainer.completeList.findIndex(findDel);\n        _array__WEBPACK_IMPORTED_MODULE_0__.listContainer.completeList.splice(keel,1);\n        compTaskDiv.remove();\n    }\n\n    ollo++\n    \n};\n\n/*function finTask (pendarra,comparra){\n    \n    const findMe = (element)=> element.idCount === taskDiv.dataset.idCount;\n    let keeper = pendarra.findIndex(findMe);\n    comparra.push(pendarra[keeper]);\n    comparra.splice(keeper,1);\n    console.log (comparra);\n    \n\n}*/\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;