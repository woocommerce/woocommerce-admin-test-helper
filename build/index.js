/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! @babel/runtime/helpers/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles/index.js");

var iterableToArrayLimit = __webpack_require__(/*! @babel/runtime/helpers/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit/index.js");

var unsupportedIterableToArray = __webpack_require__(/*! @babel/runtime/helpers/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js");

var nonIterableRest = __webpack_require__(/*! @babel/runtime/helpers/nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest/index.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! @babel/runtime/helpers/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/admin-notes/add-note.js":
/*!*************************************!*\
  !*** ./src/admin-notes/add-note.js ***!
  \*************************************/
/*! exports provided: AddNote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNote", function() { return AddNote; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator/index.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);





/**
 * External dependencies.
 */



var AddNote = function AddNote() {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      isAdding = _useState2[0],
      setIsAdding = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      hasAdded = _useState4[0],
      setHasAdded = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      errorMessage = _useState6[0],
      setErrorMessage = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])('info'),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      noteType = _useState8[0],
      setNoteType = _useState8[1];

  var _useState9 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])('plain'),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      noteLayout = _useState10[0],
      setNoteLayout = _useState10[1];

  function triggerAddNote() {
    return _triggerAddNote.apply(this, arguments);
  }

  function _triggerAddNote() {
    _triggerAddNote = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var name, title;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsAdding(true);
              setHasAdded(false);
              setErrorMessage(false);
              name = prompt('Enter the note name');

              if (name) {
                _context.next = 7;
                break;
              }

              setIsAdding(false);
              return _context.abrupt("return");

            case 7:
              title = prompt('Enter the note title');

              if (title) {
                _context.next = 11;
                break;
              }

              setIsAdding(false);
              return _context.abrupt("return");

            case 11:
              _context.prev = 11;
              _context.next = 14;
              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
                path: '/wc-admin-test-helper/admin-notes/add-note/v1',
                method: 'POST',
                data: {
                  name: name,
                  type: noteType,
                  layout: noteLayout,
                  title: title
                }
              });

            case 14:
              setHasAdded(true);
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](11);
              setErrorMessage(_context.t0.message);

            case 20:
              setIsAdding(false);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[11, 17]]);
    }));
    return _triggerAddNote.apply(this, arguments);
  }

  function onTypeChange(val) {
    setNoteType(val);

    if (val !== 'info') {
      setNoteLayout('plain');
    }
  }

  function onLayoutChange(val) {
    setNoteLayout(val);
  }

  function getAddNoteDescription() {
    switch (noteType) {
      case 'email':
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, "This will add a new ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("strong", null, "email"), " note. Enable email insights", ' ', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("a", {
          href: "/wp-admin/admin.php?page=wc-settings&tab=email"
        }, "here"), ' ', "and run the cron to send the note by email.");

      default:
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, "This will add a new note. Currently only the note name and title will be used to create the note.");
    }
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("strong", null, "Add a note")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", null, getAddNoteDescription(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "woocommerce-admin-test-helper__add-notes"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: triggerAddNote,
    disabled: isAdding,
    isPrimary: true
  }, "Add admin note"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
    label: "Type",
    onChange: onTypeChange,
    labelPosition: "side",
    options: [{
      label: 'Info',
      value: 'info'
    }, {
      label: 'Update',
      value: 'update'
    }, {
      label: 'Email',
      value: 'email'
    }],
    value: noteType
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
    label: "Layout",
    onChange: onLayoutChange,
    labelPosition: "side",
    options: [{
      label: 'Plain',
      value: 'plain'
    }, {
      label: 'Banner',
      value: 'banner'
    }, {
      label: 'Thumbnail',
      value: 'thumbnail'
    }],
    disabled: noteType !== 'info',
    value: noteLayout
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "woocommerce-admin-test-helper__action-status"
  }, isAdding && 'Adding, please wait', hasAdded && 'Note added', errorMessage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("strong", null, "Error:"), " ", errorMessage))));
};

/***/ }),

/***/ "./src/admin-notes/admin-notes.js":
/*!****************************************!*\
  !*** ./src/admin-notes/admin-notes.js ***!
  \****************************************/
/*! exports provided: AdminNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNotes", function() { return AdminNotes; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _delete_all_notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-all-notes */ "./src/admin-notes/delete-all-notes.js");
/* harmony import */ var _add_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-note */ "./src/admin-notes/add-note.js");


/**
 * Internal dependencies.
 */


var AdminNotes = function AdminNotes() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "Admin notes"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "This section contains tools for managing admin notes."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_add_note__WEBPACK_IMPORTED_MODULE_2__["AddNote"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_delete_all_notes__WEBPACK_IMPORTED_MODULE_1__["DeleteAllNotes"], null));
};

/***/ }),

/***/ "./src/admin-notes/delete-all-notes.js":
/*!*********************************************!*\
  !*** ./src/admin-notes/delete-all-notes.js ***!
  \*********************************************/
/*! exports provided: DeleteAllNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteAllNotes", function() { return DeleteAllNotes; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator/index.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);





/**
 * External dependencies.
 */



var DeleteAllNotes = function DeleteAllNotes() {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      isDeleting = _useState2[0],
      setIsDeleting = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      deleteStatus = _useState4[0],
      setDeleteStatus = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      errorMessage = _useState6[0],
      setErrorMessage = _useState6[1];

  function triggerDeleteAllNotes() {
    return _triggerDeleteAllNotes.apply(this, arguments);
  }

  function _triggerDeleteAllNotes() {
    _triggerDeleteAllNotes = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsDeleting(true);
              setErrorMessage(false);
              setDeleteStatus(false);
              _context.prev = 3;
              _context.next = 6;
              return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
                path: '/wc-admin-test-helper/admin-notes/delete-all-notes/v1',
                method: 'POST'
              });

            case 6:
              response = _context.sent;
              setDeleteStatus(response);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              setErrorMessage(_context.t0.message);

            case 13:
              setIsDeleting(false);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10]]);
    }));
    return _triggerDeleteAllNotes.apply(this, arguments);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("strong", null, "Delete all admin notes")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, "This will delete all notes from the ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("code", null, "wp_wc_admin_notes"), "table, and actions from the ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("code", null, "wp_wc_admin_note_actions"), "table.", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: triggerDeleteAllNotes,
    disabled: isDeleting,
    isPrimary: true
  }, "Delete all notes"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "woocommerce-admin-test-helper__action-status"
  }, isDeleting && 'Deleting, please wait.', deleteStatus && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, "Deleted", ' ', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("strong", null, deleteStatus.deleted_note_count), ' ', "admin notes and", ' ', Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("strong", null, deleteStatus.deleted_action_count), ' ', "actions."), errorMessage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("strong", null, "Error: "), errorMessage))));
};

/***/ }),

/***/ "./src/admin-notes/index.js":
/*!**********************************!*\
  !*** ./src/admin-notes/index.js ***!
  \**********************************/
/*! exports provided: AdminNotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_notes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-notes.js */ "./src/admin-notes/admin-notes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminNotes", function() { return _admin_notes_js__WEBPACK_IMPORTED_MODULE_0__["AdminNotes"]; });



/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _admin_notes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-notes */ "./src/admin-notes/index.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools */ "./src/tools/index.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../options */ "./src/options/index.js");
/* harmony import */ var _experiments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../experiments */ "./src/experiments/index.js");


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





var tabs = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["applyFilters"])('woocommerce_admin_test_helper_tabs', [{
  name: 'options',
  title: 'Options',
  content: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_5__["default"], null)
}, {
  name: 'admin-notes',
  title: 'Admin notes',
  content: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_admin_notes__WEBPACK_IMPORTED_MODULE_3__["AdminNotes"], null)
}, {
  name: 'tools',
  title: 'Tools',
  content: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_tools__WEBPACK_IMPORTED_MODULE_4__["default"], null)
}, {
  name: 'experiments',
  title: 'Experiments',
  content: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_experiments__WEBPACK_IMPORTED_MODULE_6__["default"], null)
}]);
function App() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "WooCommerce Admin Test Helper"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
    className: "woocommerce-admin-test-helper__main-tab-panel",
    activeClass: "active-tab",
    tabs: tabs,
    initialTabName: tabs[0].name
  }, function (tab) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, tab.content, Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["applyFilters"])("woocommerce_admin_test_helper_tab_".concat(tab.name), []));
  }));
}

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _app__WEBPACK_IMPORTED_MODULE_0__["App"]; });



/***/ }),

/***/ "./src/experiments/data/action-types.js":
/*!**********************************************!*\
  !*** ./src/experiments/data/action-types.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TYPES = {
  TOGGLE_EXPERIMENT: 'TOGGLE_EXPERIMENT',
  SET_EXPERIMENTS: 'SET_EXPERIMENTS'
};
/* harmony default export */ __webpack_exports__["default"] = (TYPES);

/***/ }),

/***/ "./src/experiments/data/actions.js":
/*!*****************************************!*\
  !*** ./src/experiments/data/actions.js ***!
  \*****************************************/
/*! exports provided: toggleExperiment, setExperiments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleExperiment", function() { return toggleExperiment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setExperiments", function() { return setExperiments; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-types */ "./src/experiments/data/action-types.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/experiments/data/constants.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(toggleBackendExperiment),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(toggleExperiment);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




function toggleFrontendExperiment(experimentName, newVariation) {
  var storageItem = JSON.parse(window.localStorage.getItem(_constants__WEBPACK_IMPORTED_MODULE_3__["EXPERIMENT_NAME_PREFIX"] + experimentName));
  storageItem.variationName = newVariation;
  window.localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_3__["EXPERIMENT_NAME_PREFIX"] + experimentName, JSON.stringify(storageItem));
}

function toggleBackendExperiment(experimentName, newVariation) {
  var payload;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function toggleBackendExperiment$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          payload = {};
          payload[_constants__WEBPACK_IMPORTED_MODULE_3__["TRANSIENT_NAME_PREFIX"] + experimentName] = newVariation;
          _context.next = 5;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
            method: 'POST',
            path: '/wc-admin/options',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(payload)
          });

        case 5:
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          throw new Error();

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}

function toggleExperiment(experimentName, currentVariation, source) {
  var newVariation;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function toggleExperiment$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          newVariation = currentVariation === 'control' ? 'treatment' : 'control';

          if (!(source === 'frontend')) {
            _context2.next = 5;
            break;
          }

          toggleFrontendExperiment(experimentName, newVariation);
          _context2.next = 7;
          break;

        case 5:
          _context2.next = 7;
          return toggleBackendExperiment(experimentName, newVariation);

        case 7:
          return _context2.abrupt("return", {
            type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].TOGGLE_EXPERIMENT,
            experimentName: experimentName,
            newVariation: newVariation,
            source: source
          });

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
function setExperiments(experiments) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].SET_EXPERIMENTS,
    experiments: experiments
  };
}

/***/ }),

/***/ "./src/experiments/data/constants.js":
/*!*******************************************!*\
  !*** ./src/experiments/data/constants.js ***!
  \*******************************************/
/*! exports provided: STORE_KEY, EXPERIMENT_NAME_PREFIX, TRANSIENT_NAME_PREFIX, API_NAMESPACE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_KEY", function() { return STORE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPERIMENT_NAME_PREFIX", function() { return EXPERIMENT_NAME_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSIENT_NAME_PREFIX", function() { return TRANSIENT_NAME_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_NAMESPACE", function() { return API_NAMESPACE; });
var STORE_KEY = 'wc-admin-helper/experiments';
var EXPERIMENT_NAME_PREFIX = 'explat-experiment--';
var TRANSIENT_NAME_PREFIX = '_transient_abtest_variation_';
var API_NAMESPACE = '/wc-admin-test-helper';

/***/ }),

/***/ "./src/experiments/data/index.js":
/*!***************************************!*\
  !*** ./src/experiments/data/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/experiments/data/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers */ "./src/experiments/data/resolvers.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./src/experiments/data/selectors.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ "./src/experiments/data/reducer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/experiments/data/constants.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["registerStore"])(_constants__WEBPACK_IMPORTED_MODULE_6__["STORE_KEY"], {
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_4__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_3__,
  controls: _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["controls"],
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./src/experiments/data/reducer.js":
/*!*****************************************!*\
  !*** ./src/experiments/data/reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-types */ "./src/experiments/data/action-types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

var DEFAULT_STATE = {
  experiments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].TOGGLE_EXPERIMENT:
      return _objectSpread(_objectSpread({}, state), {}, {
        experiments: state.experiments.map(function (experiment) {
          return _objectSpread(_objectSpread({}, experiment), {}, {
            variation: experiment.name === action.experimentName && experiment.source === action.source ? action.newVariation : experiment.variation
          });
        })
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].SET_EXPERIMENTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        experiments: action.experiments
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/experiments/data/resolvers.js":
/*!*******************************************!*\
  !*** ./src/experiments/data/resolvers.js ***!
  \*******************************************/
/*! exports provided: getExperiments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExperiments", function() { return getExperiments; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/experiments/data/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/experiments/data/constants.js");




var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(getExperiments);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




function getExperimentsFromFrontend() {
  var storageItems = Object.entries(_objectSpread({}, window.localStorage)).filter(function (item) {
    return item[0].indexOf(_constants__WEBPACK_IMPORTED_MODULE_5__["EXPERIMENT_NAME_PREFIX"]) === 0;
  });
  return storageItems.map(function (storageItem) {
    var _storageItem = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(storageItem, 2),
        key = _storageItem[0],
        value = _storageItem[1];

    var objectValue = JSON.parse(value);
    return {
      name: key.replace(_constants__WEBPACK_IMPORTED_MODULE_5__["EXPERIMENT_NAME_PREFIX"], ''),
      variation: objectValue.variationName || 'control',
      source: 'frontend'
    };
  });
}

function getExperiments() {
  var response, experimentsFromBackend;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function getExperiments$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_3__["apiFetch"])({
            path: "".concat(_constants__WEBPACK_IMPORTED_MODULE_5__["API_NAMESPACE"], "/options?search=_transient_abtest_variation_")
          });

        case 3:
          response = _context.sent;
          experimentsFromBackend = response.map(function (experiment) {
            return {
              name: experiment.option_name.replace(_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSIENT_NAME_PREFIX"], ''),
              variation: experiment.option_value === 'control' ? 'control' : 'treatment',
              source: 'backend'
            };
          });
          _context.next = 7;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setExperiments"])(getExperimentsFromFrontend().concat(experimentsFromBackend));

        case 7:
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          throw new Error();

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}

/***/ }),

/***/ "./src/experiments/data/selectors.js":
/*!*******************************************!*\
  !*** ./src/experiments/data/selectors.js ***!
  \*******************************************/
/*! exports provided: getExperiments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExperiments", function() { return getExperiments; });
function getExperiments(state) {
  return state.experiments;
}

/***/ }),

/***/ "./src/experiments/index.js":
/*!**********************************!*\
  !*** ./src/experiments/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/constants */ "./src/experiments/data/constants.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/experiments/data/index.js");


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




function Experiments(_ref) {
  var experiments = _ref.experiments,
      toggleExperiment = _ref.toggleExperiment;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "wc-admin-test-helper-experiments"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "Experiments"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    className: "experiments wp-list-table striped table-view-list widefat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Experiment"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Variation"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Source"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Toggle"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, experiments.map(function (_ref2, index) {
    var name = _ref2.name,
        variation = _ref2.variation,
        source = _ref2.source;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      key: index
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "experiment-name"
    }, name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      align: "center"
    }, variation), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      align: "center"
    }, source), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      align: "center"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: function onClick() {
        toggleExperiment(name, variation, source);
      },
      isPrimary: true
    }, "Toggle")));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select) {
  var _select = select(_data_constants__WEBPACK_IMPORTED_MODULE_4__["STORE_KEY"]),
      getExperiments = _select.getExperiments;

  return {
    experiments: getExperiments()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(_data_constants__WEBPACK_IMPORTED_MODULE_4__["STORE_KEY"]),
      toggleExperiment = _dispatch.toggleExperiment;

  return {
    toggleExperiment: toggleExperiment
  };
}))(Experiments));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);


/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



var appRoot = document.getElementById('woocommerce-admin-test-helper-app-root');

if (appRoot) {
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_app__WEBPACK_IMPORTED_MODULE_1__["App"], null), appRoot);
}

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/options/OptionEditor.js":
/*!*************************************!*\
  !*** ./src/options/OptionEditor.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);



/**
 * External dependencies
 */




var OptionEditor = function OptionEditor(props) {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.option.content),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setValue(props.option.content);
  }, [props.option]);

  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };

  var handleSave = function handleSave() {
    props.onSave(props.option.name, value);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("textarea", {
    className: "wca-test-helper-option-editor",
    value: value,
    onChange: handleChange
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "wca-test-helper-edit-btn-save",
    isPrimary: true,
    onClick: handleSave,
    disabled: props.option.isSaving === true
  }, props.option.isSaving ? 'Saving...' : 'Save'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "clear"
  }));
};

OptionEditor.propTypes = {
  option: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onSave: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (OptionEditor);

/***/ }),

/***/ "./src/options/data/action-types.js":
/*!******************************************!*\
  !*** ./src/options/data/action-types.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TYPES = {
  SET_OPTIONS: 'SET_OPTIONS',
  SET_OPTION_FOR_EDITING: 'SET_OPTION_FOR_EDITING',
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_NOTICE: 'SET_NOTICE',
  DELETE_OPTION: 'DELETE_OPTION'
};
/* harmony default export */ __webpack_exports__["default"] = (TYPES);

/***/ }),

/***/ "./src/options/data/actions.js":
/*!*************************************!*\
  !*** ./src/options/data/actions.js ***!
  \*************************************/
/*! exports provided: setOptions, setLoadingState, setOptionForEditing, setNotice, deleteOption, saveOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOptions", function() { return setOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoadingState", function() { return setLoadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOptionForEditing", function() { return setOptionForEditing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotice", function() { return setNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOption", function() { return deleteOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveOption", function() { return saveOption; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-types */ "./src/options/data/action-types.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/options/data/constants.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteOption),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(saveOption);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



/**
 * Initialize the state
 *
 * @param {Array} options
 */

function setOptions(options) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].SET_OPTIONS,
    options: options
  };
}
function setLoadingState(isLoading) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].SET_IS_LOADING,
    isLoading: isLoading
  };
}
function setOptionForEditing(editingOption) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].SET_OPTION_FOR_EDITING,
    editingOption: editingOption
  };
}
function setNotice(notice) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].SET_NOTICE,
    notice: notice
  };
}
function deleteOption(optionName) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteOption$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
            method: 'DELETE',
            path: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["API_NAMESPACE"], "/options/").concat(optionName)
          });

        case 3:
          _context.next = 5;
          return {
            type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].DELETE_OPTION,
            optionName: optionName
          };

        case 5:
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          throw new Error();

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}
function saveOption(optionName, newOptionValue) {
  var payload;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function saveOption$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          payload = {};
          payload[optionName] = JSON.parse(newOptionValue);
          _context2.next = 5;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
            method: 'POST',
            path: '/wc-admin/options',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(payload)
          });

        case 5:
          _context2.next = 7;
          return setNotice({
            status: 'success',
            message: optionName + ' has been saved.'
          });

        case 7:
          _context2.next = 14;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 13;
          return setNotice({
            status: 'error',
            message: 'Unable to save ' + optionName
          });

        case 13:
          throw new Error();

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
}

/***/ }),

/***/ "./src/options/data/constants.js":
/*!***************************************!*\
  !*** ./src/options/data/constants.js ***!
  \***************************************/
/*! exports provided: STORE_KEY, API_NAMESPACE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_KEY", function() { return STORE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_NAMESPACE", function() { return API_NAMESPACE; });
var STORE_KEY = 'wc-admin-helper/options';
var API_NAMESPACE = '/wc-admin-test-helper';

/***/ }),

/***/ "./src/options/data/index.js":
/*!***********************************!*\
  !*** ./src/options/data/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/options/data/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers */ "./src/options/data/resolvers.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./src/options/data/selectors.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ "./src/options/data/reducer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/options/data/constants.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["registerStore"])(_constants__WEBPACK_IMPORTED_MODULE_6__["STORE_KEY"], {
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_4__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_3__,
  controls: _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["controls"],
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./src/options/data/reducer.js":
/*!*************************************!*\
  !*** ./src/options/data/reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-types */ "./src/options/data/action-types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

var DEFAULT_STATE = {
  options: [],
  isLoading: true,
  editingOption: {
    name: null,
    content: '{}'
  },
  notice: {
    status: 'success',
    message: ''
  }
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].SET_OPTION_FOR_EDITING:
      return _objectSpread(_objectSpread({}, state), {}, {
        editingOption: _objectSpread(_objectSpread({}, state.editingOption), action.editingOption)
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].SET_IS_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: action.isLoading
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].SET_OPTIONS:
      return _objectSpread(_objectSpread({}, state), {}, {
        options: action.options,
        isLoading: false
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].SET_NOTICE:
      return _objectSpread(_objectSpread({}, state), {}, {
        notice: _objectSpread(_objectSpread({}, state.notice), action.notice)
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_OPTION:
      return _objectSpread(_objectSpread({}, state), {}, {
        options: state.options.filter(function (item) {
          return item.option_name !== action.optionName;
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/options/data/resolvers.js":
/*!***************************************!*\
  !*** ./src/options/data/resolvers.js ***!
  \***************************************/
/*! exports provided: getOptions, getOptionForEditing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptions", function() { return getOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionForEditing", function() { return getOptionForEditing; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/options/data/constants.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/options/data/actions.js");



var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(getOptions),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(getOptionForEditing);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function getOptions(search) {
  var path, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getOptions$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          path = "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["API_NAMESPACE"], "/options?");

          if (search) {
            path += "search=".concat(search);
          }

          _context.next = 4;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setLoadingState"])(true);

        case 4:
          _context.prev = 4;
          _context.next = 7;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__["apiFetch"])({
            path: path
          });

        case 7:
          response = _context.sent;
          _context.next = 10;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setOptions"])(response);

        case 10:
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](4);
          throw new Error();

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[4, 12]]);
}
function getOptionForEditing(optionName) {
  var loadingOption, path, response, content;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function getOptionForEditing$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          loadingOption = {
            name: 'Loading...',
            content: '',
            saved: false
          };

          if (!(optionName === undefined)) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setOptionForEditing"])(loadingOption));

        case 3:
          _context2.next = 5;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setOptionForEditing"])(loadingOption);

        case 5:
          path = '/wc-admin/options?options=' + optionName;
          _context2.prev = 6;
          _context2.next = 9;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_2__["apiFetch"])({
            path: path
          });

        case 9:
          response = _context2.sent;
          content = response[optionName];

          if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(content) === 'object') {
            content = JSON.stringify(response[optionName], null, 2);
          }

          _context2.next = 14;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_4__["setOptionForEditing"])({
            name: optionName,
            content: content
          });

        case 14:
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](6);
          throw new Error(_context2.t0);

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[6, 16]]);
}

/***/ }),

/***/ "./src/options/data/selectors.js":
/*!***************************************!*\
  !*** ./src/options/data/selectors.js ***!
  \***************************************/
/*! exports provided: getOptions, isLoading, getOptionForEditing, getNotice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptions", function() { return getOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionForEditing", function() { return getOptionForEditing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotice", function() { return getNotice; });
function getOptions(state) {
  return state.options;
}
function isLoading(state) {
  return state.isLoading;
}
function getOptionForEditing(state) {
  return state.editingOption;
}
function getNotice(state) {
  return state.notice;
}

/***/ }),

/***/ "./src/options/index.js":
/*!******************************!*\
  !*** ./src/options/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray/index.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/constants */ "./src/options/data/constants.js");
/* harmony import */ var _OptionEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OptionEditor */ "./src/options/OptionEditor.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data */ "./src/options/data/index.js");



/**
 * External dependencies
 */




/**
 * Internal dependencies
 */





function shorten(input) {
  if (input.length > 20) {
    return input.substring(0, 20) + '...';
  }

  return input;
}

function Options(_ref) {
  var options = _ref.options,
      getOptions = _ref.getOptions,
      deleteOption = _ref.deleteOption,
      isLoading = _ref.isLoading,
      invalidateResolution = _ref.invalidateResolution,
      getOptionForEditing = _ref.getOptionForEditing,
      editingOption = _ref.editingOption,
      saveOption = _ref.saveOption,
      notice = _ref.notice,
      setNotice = _ref.setNotice;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isEditModalOpen = _useState2[0],
      setEditModalOpen = _useState2[1];

  var deleteOptionByName = function deleteOptionByName(optionName) {
    // eslint-disable-next-line no-alert
    if (confirm('Are you sure you want to delete this option?')) {
      deleteOption(optionName);
    }
  };

  var openEditModal = function openEditModal(optionName) {
    invalidateResolution(_data_constants__WEBPACK_IMPORTED_MODULE_5__["STORE_KEY"], 'getOptionForEditing', [optionName]);
    getOptionForEditing(optionName);
    setEditModalOpen(true);
  };

  var handleSaveOption = function handleSaveOption(optionName, newValue) {
    saveOption(optionName, newValue);
    setEditModalOpen(false);
  };

  var renderLoading = function renderLoading() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
      colSpan: "6",
      align: "center"
    }, "Loading..."));
  };

  var renderTableData = function renderTableData() {
    if (options.length === 0) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
        colSpan: "6",
        align: "center"
      }, "No Options Found"));
    }

    return options.map(function (option) {
      // eslint-disable-next-line camelcase
      var option_id = option.option_id,
          option_name = option.option_name,
          option_value = option.option_value,
          autoload = option.autoload; // eslint-disable-next-line camelcase

      var optionId = option_id; // eslint-disable-next-line camelcase

      var optionName = option_name; // eslint-disable-next-line camelcase

      var optionValue = shorten(option_value);
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", {
        key: optionId
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
        key: 0
      }, optionId), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
        key: 1
      }, optionName), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
        key: 'optionValue'
      }, optionValue), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
        className: "align-center",
        key: 2
      }, autoload), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
        className: "align-center",
        key: 3
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
        className: "button btn-danger",
        onClick: function onClick() {
          return deleteOptionByName(optionName);
        }
      }, "Delete")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
        className: "align-center",
        key: 4
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
        className: "button btn-primary",
        onClick: function onClick() {
          return openEditModal(optionName);
        }
      }, "Edit")));
    });
  };

  var searchOption = function searchOption(event) {
    event.preventDefault();
    var keyword = event.target.search.value; // Invalidate resolution of the same selector + arg
    // so that entering the same keyword always works

    invalidateResolution(_data_constants__WEBPACK_IMPORTED_MODULE_5__["STORE_KEY"], 'getOptions', [keyword]);
    getOptions(keyword);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, isEditModalOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    title: editingOption.name,
    onRequestClose: function onRequestClose() {
      setEditModalOpen(false);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_OptionEditor__WEBPACK_IMPORTED_MODULE_6__["default"], {
    option: editingOption,
    onSave: handleSaveOption
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    id: "wc-admin-test-helper-options"
  }, notice.message.length > 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Notice"], {
    status: notice.status,
    onRemove: function onRemove() {
      setNotice({
        message: ''
      });
    }
  }, notice.message), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("form", {
    onSubmit: searchOption
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "search-box"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", {
    className: "screen-reader-text",
    htmlFor: "post-search-input"
  }, "Search options:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "search",
    name: "search"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
    type: "submit",
    id: "search-submit",
    className: "button",
    value: "Search options"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "clear"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("table", {
    className: "wp-list-table striped table-view-list widefat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("thead", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
    className: "manage-column column-thumb",
    key: 0
  }, "I.D"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
    className: "manage-column column-thumb",
    key: 1
  }, "Name"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
    className: "manage-column column-thumb",
    key: 'optionValue'
  }, "Value"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
    className: "manage-column column-thumb align-center",
    key: 2
  }, "Autoload"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
    className: "manage-column column-thumb align-center",
    key: 3
  }, "Delete"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("td", {
    className: "manage-column column-thumb align-center",
    key: 4
  }, "Edit"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("tbody", null, isLoading ? renderLoading() : renderTableData()))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withSelect"])(function (select) {
  var _select = select(_data_constants__WEBPACK_IMPORTED_MODULE_5__["STORE_KEY"]),
      getOptions = _select.getOptions,
      getOptionForEditing = _select.getOptionForEditing,
      getNotice = _select.getNotice,
      isLoading = _select.isLoading;

  var options = getOptions();
  var editingOption = getOptionForEditing();
  var notice = getNotice();
  return {
    options: options,
    getOptions: getOptions,
    isLoading: isLoading(),
    editingOption: editingOption,
    getOptionForEditing: getOptionForEditing,
    notice: notice
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(_data_constants__WEBPACK_IMPORTED_MODULE_5__["STORE_KEY"]),
      deleteOption = _dispatch.deleteOption,
      saveOption = _dispatch.saveOption,
      setNotice = _dispatch.setNotice;

  var _dispatch2 = dispatch('core/data'),
      invalidateResolution = _dispatch2.invalidateResolution;

  return {
    deleteOption: deleteOption,
    invalidateResolution: invalidateResolution,
    saveOption: saveOption,
    setNotice: setNotice
  };
}))(Options));

/***/ }),

/***/ "./src/tools/commands/disable-email.js":
/*!*********************************************!*\
  !*** ./src/tools/commands/disable-email.js ***!
  \*********************************************/
/*! exports provided: DisableEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableEmail", function() { return DisableEmail; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/constants */ "./src/tools/data/constants.js");


/**
 * External dependencies.
 */

/**
 * Internal dependencies
 */


var DisableEmail = function DisableEmail() {
  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useSelect"])(function (select) {
    var _select = select(_data_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_KEY"]),
        getIsEmailDisabled = _select.getIsEmailDisabled;

    return {
      isEmailDisabled: getIsEmailDisabled()
    };
  }),
      isEmailDisabled = _useSelect.isEmailDisabled;

  var getEmailStatus = function getEmailStatus() {
    switch (isEmailDisabled) {
      case 'yes':
        return 'WooCommerce emails are turned off 🔴';

      case 'no':
        return 'WooCommerce emails are turned on 🟢';

      case 'error':
        return 'Error 🙁';

      default:
        return 'Loading ...';
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "disable-wc-email"
  }, getEmailStatus());
};

/***/ }),

/***/ "./src/tools/commands/index.js":
/*!*************************************!*\
  !*** ./src/tools/commands/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _trigger_cron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trigger-cron */ "./src/tools/commands/trigger-cron.js");
/* harmony import */ var _disable_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disable-email */ "./src/tools/commands/disable-email.js");
/* harmony import */ var _trigger_update_callbacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trigger-update-callbacks */ "./src/tools/commands/trigger-update-callbacks.js");


/**
 * Internal dependencies
 */



/* harmony default export */ __webpack_exports__["default"] = ([{
  command: 'Trigger WCA Install',
  description: "This will trigger a WooCommerce Admin install, which usually\n    happens when a new version (or new install) of WooCommerce\n    Admin is installed. Triggering the install manually can\n    run tasks such as removing obsolete admin notes.",
  action: 'triggerWcaInstall'
}, {
  command: 'Reset Onboarding Wizard',
  description: 'Resets Onboarding Wizard progress.',
  action: 'resetOnboardingWizard'
}, {
  command: 'Reset Jetpack Connection',
  description: 'Resets Jepack Connection options.',
  action: 'resetJetpackConnection'
}, {
  command: 'Enable wc-admin Tracking',
  description: 'Enable Tracking Debug mode. You should change your console level to verbose.',
  action: 'enableTrackingDebug'
}, {
  command: 'Update WC installation timestamp',
  description: 'Updates woocommerce_admin_install_timestamp to a certain date',
  action: 'updateStoreAge'
}, {
  command: 'Run wc_admin_daily job',
  description: 'Run wc_admin_daily job',
  action: 'runWcAdminDailyJob'
}, {
  command: 'Delete all products',
  description: 'Delete all products',
  action: 'deleteAllProducts'
}, {
  command: 'Run a cron job',
  description: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_trigger_cron__WEBPACK_IMPORTED_MODULE_1__["TriggerCronJob"], null),
  action: _trigger_cron__WEBPACK_IMPORTED_MODULE_1__["TRIGGER_CRON_ACTION_NAME"]
}, {
  command: 'Disable WC emails',
  description: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_disable_email__WEBPACK_IMPORTED_MODULE_2__["DisableEmail"], null),
  action: 'runDisableEmail'
}, {
  command: 'Run version update callbacks',
  description: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_trigger_update_callbacks__WEBPACK_IMPORTED_MODULE_3__["TriggerUpdateCallbacks"], null),
  action: _trigger_update_callbacks__WEBPACK_IMPORTED_MODULE_3__["TRIGGER_UPDATE_CALLBACKS_ACTION_NAME"]
}]);

/***/ }),

/***/ "./src/tools/commands/trigger-cron.js":
/*!********************************************!*\
  !*** ./src/tools/commands/trigger-cron.js ***!
  \********************************************/
/*! exports provided: TRIGGER_CRON_ACTION_NAME, TriggerCronJob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_CRON_ACTION_NAME", function() { return TRIGGER_CRON_ACTION_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriggerCronJob", function() { return TriggerCronJob; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/constants */ "./src/tools/data/constants.js");


/**
 * External dependencies.
 */


/**
 * Internal dependencies
 */


var TRIGGER_CRON_ACTION_NAME = 'runSelectedCronJob';
var TriggerCronJob = function TriggerCronJob() {
  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select) {
    var _select = select(_data_constants__WEBPACK_IMPORTED_MODULE_3__["STORE_KEY"]),
        getCronJobs = _select.getCronJobs;

    return {
      cronList: getCronJobs()
    };
  }),
      cronList = _useSelect.cronList;

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])(_data_constants__WEBPACK_IMPORTED_MODULE_3__["STORE_KEY"]),
      updateCommandParams = _useDispatch.updateCommandParams;

  function onCronChange(selectedValue) {
    var _cronList$selectedVal = cronList[selectedValue],
        hook = _cronList$selectedVal.hook,
        signature = _cronList$selectedVal.signature;
    updateCommandParams(TRIGGER_CRON_ACTION_NAME, {
      hook: hook,
      signature: signature
    });
  }

  function getOptions() {
    return Object.keys(cronList).map(function (name) {
      return {
        label: name,
        value: name
      };
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "trigger-cron-job"
  }, !cronList ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Loading ...") : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: "Select cron job to run",
    onChange: onCronChange,
    labelPosition: "side",
    options: getOptions()
  }));
};

/***/ }),

/***/ "./src/tools/commands/trigger-update-callbacks.js":
/*!********************************************************!*\
  !*** ./src/tools/commands/trigger-update-callbacks.js ***!
  \********************************************************/
/*! exports provided: TRIGGER_UPDATE_CALLBACKS_ACTION_NAME, TriggerUpdateCallbacks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRIGGER_UPDATE_CALLBACKS_ACTION_NAME", function() { return TRIGGER_UPDATE_CALLBACKS_ACTION_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriggerUpdateCallbacks", function() { return TriggerUpdateCallbacks; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/constants */ "./src/tools/data/constants.js");


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var TRIGGER_UPDATE_CALLBACKS_ACTION_NAME = 'runSelectedUpdateCallbacks';
var TriggerUpdateCallbacks = function TriggerUpdateCallbacks() {
  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useSelect"])(function (select) {
    var _select = select(_data_constants__WEBPACK_IMPORTED_MODULE_3__["STORE_KEY"]),
        getDBUpdateVersions = _select.getDBUpdateVersions;

    return {
      dbUpdateVersions: getDBUpdateVersions()
    };
  }),
      dbUpdateVersions = _useSelect.dbUpdateVersions;

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])(_data_constants__WEBPACK_IMPORTED_MODULE_3__["STORE_KEY"]),
      updateCommandParams = _useDispatch.updateCommandParams;

  function onCronChange(version) {
    updateCommandParams(TRIGGER_UPDATE_CALLBACKS_ACTION_NAME, {
      version: version
    });
  }

  function getOptions() {
    return dbUpdateVersions.map(function (version) {
      return {
        label: version,
        value: version
      };
    });
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "trigger-cron-job"
  }, !dbUpdateVersions ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Loading ...") : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: "Select a version to run",
    onChange: onCronChange,
    labelPosition: "side",
    options: getOptions().reverse()
  }));
};

/***/ }),

/***/ "./src/tools/data/action-types.js":
/*!****************************************!*\
  !*** ./src/tools/data/action-types.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TYPES = {
  ADD_CURRENTLY_RUNNING: 'ADD_CURRENTLY_RUNNING',
  REMOVE_CURRENTLY_RUNNING: 'REMOVE_CURRENTLY_RUNNING',
  ADD_MESSAGE: 'ADD_MESSAGE',
  UPDATE_MESSAGE: 'UPDATE_MESSAGE',
  REMOVE_MESSAGE: 'REMOVE_MESSAGE',
  ADD_COMMAND_PARAMS: 'ADD_COMMAND_PARAMS',
  SET_CRON_JOBS: 'SET_CRON_JOBS',
  IS_EMAIL_DISABLED: 'IS_EMAIL_DISABLED',
  SET_DB_UPDATE_VERSIONS: 'SET_DB_UPDATE_VERSIONS'
};
/* harmony default export */ __webpack_exports__["default"] = (TYPES);

/***/ }),

/***/ "./src/tools/data/actions.js":
/*!***********************************!*\
  !*** ./src/tools/data/actions.js ***!
  \***********************************/
/*! exports provided: addCurrentlyRunning, removeCurrentlyRunning, addMessage, updateMessage, removeMessage, updateCommandParams, setCronJobs, setDBUpdateVersions, setIsEmailDisabled, triggerWcaInstall, resetOnboardingWizard, resetJetpackConnection, enableTrackingDebug, updateStoreAge, runWcAdminDailyJob, deleteAllProducts, runSelectedCronJob, runSelectedUpdateCallbacks, runDisableEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCurrentlyRunning", function() { return addCurrentlyRunning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCurrentlyRunning", function() { return removeCurrentlyRunning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMessage", function() { return addMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMessage", function() { return updateMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMessage", function() { return removeMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCommandParams", function() { return updateCommandParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCronJobs", function() { return setCronJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDBUpdateVersions", function() { return setDBUpdateVersions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsEmailDisabled", function() { return setIsEmailDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerWcaInstall", function() { return triggerWcaInstall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetOnboardingWizard", function() { return resetOnboardingWizard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetJetpackConnection", function() { return resetJetpackConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableTrackingDebug", function() { return enableTrackingDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStoreAge", function() { return updateStoreAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runWcAdminDailyJob", function() { return runWcAdminDailyJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAllProducts", function() { return deleteAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runSelectedCronJob", function() { return runSelectedCronJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runSelectedUpdateCallbacks", function() { return runSelectedUpdateCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runDisableEmail", function() { return runDisableEmail; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-types */ "./src/tools/data/action-types.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/tools/data/constants.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(runCommand),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(triggerWcaInstall),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetOnboardingWizard),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(resetJetpackConnection),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(enableTrackingDebug),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(updateStoreAge),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(runWcAdminDailyJob),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteAllProducts),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(runSelectedCronJob),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(runSelectedUpdateCallbacks),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(runDisableEmail);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function addCurrentlyRunning(command) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].ADD_CURRENTLY_RUNNING,
    command: command
  };
}
function removeCurrentlyRunning(command) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].REMOVE_CURRENTLY_RUNNING,
    command: command
  };
}
function addMessage(source, message) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].ADD_MESSAGE,
    source: source,
    message: message
  };
}
function updateMessage(source, message, status) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].ADD_MESSAGE,
    source: source,
    message: message,
    status: status
  };
}
function removeMessage(source) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].REMOVE_MESSAGE,
    source: source
  };
}
function updateCommandParams(source, params) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].ADD_COMMAND_PARAMS,
    source: source,
    params: params
  };
}
function setCronJobs(cronJobs) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].SET_CRON_JOBS,
    cronJobs: cronJobs
  };
}
function setDBUpdateVersions(versions) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].SET_DB_UPDATE_VERSIONS,
    versions: versions
  };
}
function setIsEmailDisabled(isEmailDisabled) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_2__["default"].IS_EMAIL_DISABLED,
    isEmailDisabled: isEmailDisabled
  };
}

function runCommand(commandName, func) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function runCommand$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return addCurrentlyRunning(commandName);

        case 3:
          _context.next = 5;
          return addMessage(commandName, 'Executing...');

        case 5:
          _context.next = 7;
          return func();

        case 7:
          _context.next = 9;
          return removeCurrentlyRunning(commandName);

        case 9:
          _context.next = 11;
          return updateMessage(commandName, 'Successful!');

        case 11:
          _context.next = 19;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          _context.next = 17;
          return updateMessage(commandName, _context.t0.message, 'error');

        case 17:
          _context.next = 19;
          return removeCurrentlyRunning(commandName);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 13]]);
}

function triggerWcaInstall() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function triggerWcaInstall$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return runCommand('Trigger WCA Install', /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
                      path: _constants__WEBPACK_IMPORTED_MODULE_3__["API_NAMESPACE"] + '/tools/trigger-wca-install/v1',
                      method: 'POST'
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee);
          }));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked2);
}
function resetOnboardingWizard() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetOnboardingWizard$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return runCommand('Reset Onboarding Wizard', /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
            var optionsToDelete;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    optionsToDelete = ['woocommerce_task_list_tracked_completed_tasks', 'woocommerce_onboarding_profile', '_transient_wc_onboarding_themes'];
                    _context4.next = 3;
                    return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
                      method: 'DELETE',
                      path: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["API_NAMESPACE"], "/options/").concat(optionsToDelete.join(','))
                    });

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee2);
          }));

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked3);
}
function resetJetpackConnection() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function resetJetpackConnection$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return runCommand('Reset Jetpack Connection', /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
                      method: 'DELETE',
                      path: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["API_NAMESPACE"], "/options/jetpack_options")
                    });

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee3);
          }));

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked4);
}
function enableTrackingDebug() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function enableTrackingDebug$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return runCommand('Enable WC Admin Tracking Debug Mode', /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    window.localStorage.setItem('debug', 'wc-admin:*');

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee4);
          }));

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked5);
}
function updateStoreAge() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function updateStoreAge$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return runCommand('Update Installation timestamp', /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
            var today, dd, mm, yyyy, numberOfDays, dates, newTimestamp, payload;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    today = new Date();
                    dd = String(today.getDate()).padStart(2, '0');
                    mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

                    yyyy = today.getFullYear(); // eslint-disable-next-line no-alert

                    numberOfDays = window.prompt('Please enter a date in yyyy/mm/dd format', yyyy + '/' + mm + '/' + dd);

                    if (!(numberOfDays !== null)) {
                      _context10.next = 11;
                      break;
                    }

                    dates = numberOfDays.split('/');
                    newTimestamp = Math.round(new Date(dates[0], dates[1] - 1, dates[2]).getTime() / 1000);
                    payload = {
                      woocommerce_admin_install_timestamp: JSON.parse(newTimestamp)
                    };
                    _context10.next = 11;
                    return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
                      method: 'POST',
                      path: '/wc-admin/options',
                      headers: {
                        'content-type': 'application/json'
                      },
                      body: JSON.stringify(payload)
                    });

                  case 11:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee5);
          }));

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked6);
}
function runWcAdminDailyJob() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function runWcAdminDailyJob$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return runCommand('Run wc_admin_daily job', /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
                      path: _constants__WEBPACK_IMPORTED_MODULE_3__["API_NAMESPACE"] + '/tools/run-wc-admin-daily/v1',
                      method: 'POST'
                    });

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee6);
          }));

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked7);
}
function deleteAllProducts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteAllProducts$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          if (confirm('Are you sure you want to delete all of the products?')) {
            _context15.next = 2;
            break;
          }

          return _context15.abrupt("return");

        case 2:
          _context15.next = 4;
          return runCommand('Delete all products', /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
                      path: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["API_NAMESPACE"], "/tools/delete-all-products/v1"),
                      method: 'POST'
                    });

                  case 2:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee7);
          }));

        case 4:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked8);
}
function runSelectedCronJob(params) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function runSelectedCronJob$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return runCommand('Run selected cron job', /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
                      path: _constants__WEBPACK_IMPORTED_MODULE_3__["API_NAMESPACE"] + '/tools/run-wc-admin-daily/v1',
                      method: 'POST',
                      data: params
                    });

                  case 2:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee8);
          }));

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked9);
}
function runSelectedUpdateCallbacks(params) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function runSelectedUpdateCallbacks$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return runCommand('Run version update callbacks', /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
                      path: _constants__WEBPACK_IMPORTED_MODULE_3__["API_NAMESPACE"] + '/tools/trigger-selected-update-callbacks/v1',
                      method: 'POST',
                      data: params
                    });

                  case 2:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee9);
          }));

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked10);
}
function runDisableEmail() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function runDisableEmail$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return runCommand('Disable/Enable WooCommerce emails', /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
            var response;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
                      path: "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["API_NAMESPACE"], "/tools/toggle-emails/v1"),
                      method: 'POST'
                    });

                  case 2:
                    response = _context20.sent;
                    _context20.next = 5;
                    return setIsEmailDisabled(response);

                  case 5:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee10);
          }));

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked11);
}

/***/ }),

/***/ "./src/tools/data/constants.js":
/*!*************************************!*\
  !*** ./src/tools/data/constants.js ***!
  \*************************************/
/*! exports provided: STORE_KEY, API_NAMESPACE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_KEY", function() { return STORE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_NAMESPACE", function() { return API_NAMESPACE; });
var STORE_KEY = 'wc-admin-helper/tools';
var API_NAMESPACE = '/wc-admin-test-helper';

/***/ }),

/***/ "./src/tools/data/index.js":
/*!*********************************!*\
  !*** ./src/tools/data/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/tools/data/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers */ "./src/tools/data/resolvers.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectors */ "./src/tools/data/selectors.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer */ "./src/tools/data/reducer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/tools/data/constants.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["registerStore"])(_constants__WEBPACK_IMPORTED_MODULE_6__["STORE_KEY"], {
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_4__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_3__,
  controls: _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["controls"],
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./src/tools/data/reducer.js":
/*!***********************************!*\
  !*** ./src/tools/data/reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-types */ "./src/tools/data/action-types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

var DEFAULT_STATE = {
  currentlyRunning: {},
  errorMessages: [],
  cronJobs: false,
  isEmailDisabled: '',
  messages: {},
  params: [],
  status: '',
  dbUpdateVersions: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_MESSAGE:
      if (!action.status) {
        action.status = 'info';
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        messages: _objectSpread(_objectSpread({}, state.messages), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.source, {
          message: action.message,
          status: action.status
        }))
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].REMOVE_MESSAGE:
      var messages = _objectSpread({}, state.messages);

      delete messages[action.source];
      return _objectSpread(_objectSpread({}, state), {}, {
        messages: messages
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].SET_STATUS:
      return _objectSpread(_objectSpread({}, state), {}, {
        status: action.status
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_CURRENTLY_RUNNING:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentlyRunning: _objectSpread(_objectSpread({}, state), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.command, true))
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].REMOVE_CURRENTLY_RUNNING:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentlyRunning: _objectSpread(_objectSpread({}, state), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.command, false))
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].SET_CRON_JOBS:
      return _objectSpread(_objectSpread({}, state), {}, {
        cronJobs: action.cronJobs
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].IS_EMAIL_DISABLED:
      return _objectSpread(_objectSpread({}, state), {}, {
        isEmailDisabled: action.isEmailDisabled
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_COMMAND_PARAMS:
      return _objectSpread(_objectSpread({}, state), {}, {
        params: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.source, action.params)
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].SET_DB_UPDATE_VERSIONS:
      return _objectSpread(_objectSpread({}, state), {}, {
        dbUpdateVersions: action.versions
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/tools/data/resolvers.js":
/*!*************************************!*\
  !*** ./src/tools/data/resolvers.js ***!
  \*************************************/
/*! exports provided: getCronJobs, getDBUpdateVersions, getIsEmailDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCronJobs", function() { return getCronJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDBUpdateVersions", function() { return getDBUpdateVersions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsEmailDisabled", function() { return getIsEmailDisabled; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/tools/data/constants.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/tools/data/actions.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getCronJobs),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getDBUpdateVersions),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getIsEmailDisabled);

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



function getCronJobs() {
  var path, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getCronJobs$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          path = "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["API_NAMESPACE"], "/tools/get-cron-list/v1");
          _context.prev = 1;
          _context.next = 4;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
            path: path,
            method: 'GET'
          });

        case 4:
          response = _context.sent;
          _context.next = 7;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setCronJobs"])(response);

        case 7:
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          throw new Error(_context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[1, 9]]);
}
function getDBUpdateVersions() {
  var path, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getDBUpdateVersions$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          path = "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["API_NAMESPACE"], "/tools/get-update-versions/v1");
          _context2.prev = 1;
          _context2.next = 4;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
            path: path,
            method: 'GET'
          });

        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setDBUpdateVersions"])(response);

        case 7:
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          throw new Error(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 9]]);
}
function getIsEmailDisabled() {
  var path, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getIsEmailDisabled$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          path = "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["API_NAMESPACE"], "/tools/get-email-status/v1");
          _context3.prev = 1;
          _context3.next = 4;
          return Object(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__["apiFetch"])({
            path: path,
            method: 'GET'
          });

        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setIsEmailDisabled"])(response);

        case 7:
          _context3.next = 14;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 13;
          return Object(_actions__WEBPACK_IMPORTED_MODULE_3__["setIsEmailDisabled"])('error');

        case 13:
          throw new Error(_context3.t0);

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[1, 9]]);
}

/***/ }),

/***/ "./src/tools/data/selectors.js":
/*!*************************************!*\
  !*** ./src/tools/data/selectors.js ***!
  \*************************************/
/*! exports provided: getCurrentlyRunning, getMessages, getStatus, getCommandParams, getCronJobs, getIsEmailDisabled, getDBUpdateVersions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentlyRunning", function() { return getCurrentlyRunning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessages", function() { return getMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatus", function() { return getStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommandParams", function() { return getCommandParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCronJobs", function() { return getCronJobs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsEmailDisabled", function() { return getIsEmailDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDBUpdateVersions", function() { return getDBUpdateVersions; });
function getCurrentlyRunning(state) {
  return state.currentlyRunning;
}
function getMessages(state) {
  return state.messages;
}
function getStatus(state) {
  return state.status;
}
function getCommandParams(state) {
  return state.params;
}
function getCronJobs(state) {
  return state.cronJobs;
}
function getIsEmailDisabled(state) {
  return state.isEmailDisabled;
}
function getDBUpdateVersions(state) {
  return state.dbUpdateVersions;
}

/***/ }),

/***/ "./src/tools/index.js":
/*!****************************!*\
  !*** ./src/tools/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commands */ "./src/tools/commands/index.js");
/* harmony import */ var _data_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/constants */ "./src/tools/data/constants.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data */ "./src/tools/data/index.js");


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





function Tools(_ref) {
  var actions = _ref.actions,
      currentlyRunningCommands = _ref.currentlyRunningCommands,
      messages = _ref.messages,
      comandParams = _ref.comandParams;
  actions = actions();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    id: "wc-admin-test-helper-tools"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "Tools"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "This section contains miscellaneous tools."), Object.keys(messages).map(function (key) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Notice"], {
      status: messages[key].status,
      key: key,
      isDismissible: false
    }, key, ": ", messages[key].message);
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    className: "tools wp-list-table striped table-view-list widefat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Command"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Description"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Run"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, _commands__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (_ref2, index) {
    var _comandParams$action;

    var action = _ref2.action,
        command = _ref2.command,
        description = _ref2.description;
    var params = (_comandParams$action = comandParams[action]) !== null && _comandParams$action !== void 0 ? _comandParams$action : false;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", {
      key: index
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", {
      className: "command"
    }, command), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, description), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: function onClick() {
        return actions[action](params);
      },
      disabled: currentlyRunningCommands[command],
      isPrimary: true
    }, "Run")));
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withSelect"])(function (select) {
  var _select = select(_data_constants__WEBPACK_IMPORTED_MODULE_5__["STORE_KEY"]),
      getCurrentlyRunning = _select.getCurrentlyRunning,
      getMessages = _select.getMessages,
      getCommandParams = _select.getCommandParams;

  return {
    currentlyRunningCommands: getCurrentlyRunning(),
    messages: getMessages(),
    comandParams: getCommandParams()
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["withDispatch"])(function (dispatch) {
  var actions = function actions() {
    return dispatch(_data_constants__WEBPACK_IMPORTED_MODULE_5__["STORE_KEY"]);
  };

  return {
    actions: actions
  };
}))(Tools));

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*************************************!*\
  !*** external "regeneratorRuntime" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/data-controls":
/*!**************************************!*\
  !*** external ["wp","dataControls"] ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dataControls"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map