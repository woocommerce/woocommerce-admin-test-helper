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

/***/ "./node_modules/@automattic/explat-client-react-helpers/dist/esm/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@automattic/explat-client-react-helpers/dist/esm/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createExPlatClientReactHelpers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@automattic/explat-client-react-helpers/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/**
 * External dependencies
 */

var defaultExperimentOptions = {
    isEligible: true,
};
function createExPlatClientReactHelpers(exPlatClient) {
    var useExperiment = function (experimentName, providedOptions) {
        if (providedOptions === void 0) { providedOptions = {}; }
        var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultExperimentOptions), providedOptions);
        var previousExperimentName = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(experimentName)[0];
        var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([
            true,
            null,
        ]), state = _a[0], setState = _a[1];
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
            var isSubscribed = true;
            if (options.isEligible) {
                exPlatClient.loadExperimentAssignment(experimentName).then(function (experimentAssignment) {
                    if (isSubscribed) {
                        setState([false, experimentAssignment]);
                    }
                });
            }
            return function () {
                isSubscribed = false;
            };
        }, [experimentName, options.isEligible]);
        if (experimentName !== previousExperimentName &&
            !previousExperimentName.startsWith('explat_test')) {
            exPlatClient.config.logError({
                message: '[ExPlat] useExperiment: experimentName should never change between renders!',
            });
        }
        if (!options.isEligible) {
            return [false, null];
        }
        return state;
    };
    var Experiment = function (_a) {
        var defaultExperience = _a.defaultExperience, treatmentExperience = _a.treatmentExperience, loadingExperience = _a.loadingExperience, experimentName = _a.name, options = _a.options;
        var _b = useExperiment(experimentName, options), isLoading = _b[0], experimentAssignment = _b[1];
        if (isLoading) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, loadingExperience);
        }
        else if (!(experimentAssignment === null || experimentAssignment === void 0 ? void 0 : experimentAssignment.variationName)) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, defaultExperience);
        }
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, treatmentExperience);
    };
    var ProvideExperimentData = function (_a) {
        var children = _a.children, experimentName = _a.name, options = _a.options;
        var _b = useExperiment(experimentName, options), isLoading = _b[0], experimentAssignment = _b[1];
        return children(isLoading, experimentAssignment);
    };
    return {
        useExperiment: useExperiment,
        Experiment: Experiment,
        ProvideExperimentData: ProvideExperimentData,
    };
}


/***/ }),

/***/ "./node_modules/@automattic/explat-client-react-helpers/node_modules/tslib/tslib.es6.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@automattic/explat-client-react-helpers/node_modules/tslib/tslib.es6.js ***!
  \**********************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./node_modules/@automattic/explat-client/dist/esm/create-explat-client.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@automattic/explat-client/dist/esm/create-explat-client.js ***!
  \*********************************************************************************/
/*! exports provided: MissingExperimentAssignmentError, createExPlatClient, createSsrSafeDummyExPlatClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingExperimentAssignmentError", function() { return MissingExperimentAssignmentError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExPlatClient", function() { return createExPlatClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSsrSafeDummyExPlatClient", function() { return createSsrSafeDummyExPlatClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _internal_experiment_assignments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/experiment-assignments */ "./node_modules/@automattic/explat-client/dist/esm/internal/experiment-assignments.js");
/* harmony import */ var _internal_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/requests */ "./node_modules/@automattic/explat-client/dist/esm/internal/requests.js");
/* harmony import */ var _internal_experiment_assignment_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/experiment-assignment-store */ "./node_modules/@automattic/explat-client/dist/esm/internal/experiment-assignment-store.js");
/* harmony import */ var _internal_timing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/timing */ "./node_modules/@automattic/explat-client/dist/esm/internal/timing.js");
/* harmony import */ var _internal_validations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/validations */ "./node_modules/@automattic/explat-client/dist/esm/internal/validations.js");







/**
 * The number of milliseconds before we abandon fetching an experiment
 */
var EXPERIMENT_FETCH_TIMEOUT = 10000;
var MissingExperimentAssignmentError = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MissingExperimentAssignmentError, _super);
    function MissingExperimentAssignmentError(message) {
        var _this = _super.call(this, message) || this;
        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, MissingExperimentAssignmentError);
        }
        _this.name = 'MissingExperimentAssignmentError';
        return _this;
    }
    return MissingExperimentAssignmentError;
}(Error));

/**
 * Create an ExPlat Client
 *
 * @param config Configuration object
 */
function createExPlatClient(config) {
    var _this = this;
    if (typeof window === 'undefined') {
        throw new Error('Running outside of a browser context.');
    }
    /**
     * This bit of code is the heavy lifting behind loadExperimentAssignment, allowing it to be used intuitively.
     *
     * Using asyncOneAtATime, is how we ensure for each experiment that there is only ever one fetch process occuring.
     *
     *
     * @param experimentName The experiment's name
     */
    var createWrappedExperimentAssignmentFetchAndStore = function (experimentName) {
        return _internal_timing__WEBPACK_IMPORTED_MODULE_4__["asyncOneAtATime"](function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var fetchedExperimentAssignment;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _internal_requests__WEBPACK_IMPORTED_MODULE_2__["fetchExperimentAssignment"](config, experimentName)];
                    case 1:
                        fetchedExperimentAssignment = _a.sent();
                        Object(_internal_experiment_assignment_store__WEBPACK_IMPORTED_MODULE_3__["storeExperimentAssignment"])(fetchedExperimentAssignment);
                        return [2 /*return*/, fetchedExperimentAssignment];
                }
            });
        }); });
    };
    var experimentNameToWrappedExperimentAssignmentFetchAndStore = {};
    var safeLogError = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            config.logError.apply(config, args);
        }
        catch (e) { }
    };
    return {
        loadExperimentAssignment: function (experimentName) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var storedExperimentAssignment, fetchedExperimentAssignment, initialError_1, storedExperimentAssignment, fallbackExperimentAssignment;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!_internal_validations__WEBPACK_IMPORTED_MODULE_5__["isName"](experimentName)) {
                            throw new Error("Invalid experimentName: \"" + experimentName + "\"");
                        }
                        storedExperimentAssignment = Object(_internal_experiment_assignment_store__WEBPACK_IMPORTED_MODULE_3__["retrieveExperimentAssignment"])(experimentName);
                        if (storedExperimentAssignment &&
                            _internal_experiment_assignments__WEBPACK_IMPORTED_MODULE_1__["isAlive"](storedExperimentAssignment)) {
                            return [2 /*return*/, storedExperimentAssignment];
                        }
                        if (experimentNameToWrappedExperimentAssignmentFetchAndStore[experimentName] === undefined) {
                            experimentNameToWrappedExperimentAssignmentFetchAndStore[experimentName] = createWrappedExperimentAssignmentFetchAndStore(experimentName);
                        }
                        return [4 /*yield*/, _internal_timing__WEBPACK_IMPORTED_MODULE_4__["timeoutPromise"](experimentNameToWrappedExperimentAssignmentFetchAndStore[experimentName](), EXPERIMENT_FETCH_TIMEOUT)];
                    case 1:
                        fetchedExperimentAssignment = _a.sent();
                        if (!fetchedExperimentAssignment) {
                            throw new Error("Could not fetch ExperimentAssignment");
                        }
                        return [2 /*return*/, fetchedExperimentAssignment];
                    case 2:
                        initialError_1 = _a.sent();
                        safeLogError({
                            message: initialError_1.message,
                            experimentName: experimentName,
                            source: 'loadExperimentAssignment-initialError',
                        });
                        return [3 /*break*/, 3];
                    case 3:
                        // Fetching failed and we're not in development mode.
                        try {
                            storedExperimentAssignment = Object(_internal_experiment_assignment_store__WEBPACK_IMPORTED_MODULE_3__["retrieveExperimentAssignment"])(experimentName);
                            if (storedExperimentAssignment) {
                                return [2 /*return*/, storedExperimentAssignment];
                            }
                            fallbackExperimentAssignment = Object(_internal_experiment_assignments__WEBPACK_IMPORTED_MODULE_1__["createFallbackExperimentAssignment"])(experimentName);
                            Object(_internal_experiment_assignment_store__WEBPACK_IMPORTED_MODULE_3__["storeExperimentAssignment"])(fallbackExperimentAssignment);
                            return [2 /*return*/, fallbackExperimentAssignment];
                        }
                        catch (fallbackError) {
                            safeLogError({
                                message: fallbackError.message,
                                experimentName: experimentName,
                                source: 'loadExperimentAssignment-fallbackError',
                            });
                            // As a last resort we just keep it very simple
                            return [2 /*return*/, Object(_internal_experiment_assignments__WEBPACK_IMPORTED_MODULE_1__["createFallbackExperimentAssignment"])(experimentName)];
                        }
                        return [2 /*return*/];
                }
            });
        }); },
        dangerouslyGetExperimentAssignment: function (experimentName) {
            try {
                if (!_internal_validations__WEBPACK_IMPORTED_MODULE_5__["isName"](experimentName)) {
                    throw new Error("Invalid experimentName: " + experimentName);
                }
                var storedExperimentAssignment = Object(_internal_experiment_assignment_store__WEBPACK_IMPORTED_MODULE_3__["retrieveExperimentAssignment"])(experimentName);
                if (!storedExperimentAssignment) {
                    throw new Error("Trying to dangerously get an ExperimentAssignment that hasn't loaded.");
                }
                // We want to be loud in development mode to help pick up any issues:
                if (config.isDevelopmentMode) {
                    // Highlight when we dangerously get an experiment too soon to when we load one:
                    if (storedExperimentAssignment &&
                        _internal_timing__WEBPACK_IMPORTED_MODULE_4__["monotonicNow"]() - storedExperimentAssignment.retrievedTimestamp < 1000) {
                        safeLogError({
                            message: "Warning: Trying to dangerously get an ExperimentAssignment too soon after loading it.",
                            experimentName: experimentName,
                            source: 'dangerouslyGetExperimentAssignment',
                        });
                    }
                }
                return storedExperimentAssignment;
            }
            catch (error) {
                safeLogError({
                    message: error.message,
                    experimentName: experimentName,
                    source: 'dangerouslyGetExperimentAssignment-error',
                });
                return Object(_internal_experiment_assignments__WEBPACK_IMPORTED_MODULE_1__["createFallbackExperimentAssignment"])(experimentName);
            }
        },
        config: config,
    };
}
/**
 * A dummy ExPlat client to sub in under SSR contexts
 *
 * @param config The config
 */
function createSsrSafeDummyExPlatClient(config) {
    var _this = this;
    return {
        loadExperimentAssignment: function (experimentName) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                config.logError({
                    message: 'Attempting to load ExperimentAssignment in SSR context',
                    experimentName: experimentName,
                });
                return [2 /*return*/, Object(_internal_experiment_assignments__WEBPACK_IMPORTED_MODULE_1__["createFallbackExperimentAssignment"])(experimentName)];
            });
        }); },
        dangerouslyGetExperimentAssignment: function (experimentName) {
            config.logError({
                message: 'Attempting to dangerously get ExperimentAssignment in SSR context',
                experimentName: experimentName,
            });
            return Object(_internal_experiment_assignments__WEBPACK_IMPORTED_MODULE_1__["createFallbackExperimentAssignment"])(experimentName);
        },
        config: config,
    };
}


/***/ }),

/***/ "./node_modules/@automattic/explat-client/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@automattic/explat-client/dist/esm/index.js ***!
  \******************************************************************/
/*! exports provided: createExPlatClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExPlatClient", function() { return createExPlatClient; });
/* harmony import */ var _create_explat_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-explat-client */ "./node_modules/@automattic/explat-client/dist/esm/create-explat-client.js");

var createExPlatClient = typeof window === 'undefined' ? _create_explat_client__WEBPACK_IMPORTED_MODULE_0__["createSsrSafeDummyExPlatClient"] : _create_explat_client__WEBPACK_IMPORTED_MODULE_0__["createExPlatClient"];



/***/ }),

/***/ "./node_modules/@automattic/explat-client/dist/esm/internal/experiment-assignment-store.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@automattic/explat-client/dist/esm/internal/experiment-assignment-store.js ***!
  \*************************************************************************************************/
/*! exports provided: storeExperimentAssignment, retrieveExperimentAssignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeExperimentAssignment", function() { return storeExperimentAssignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveExperimentAssignment", function() { return retrieveExperimentAssignment; });
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validations */ "./node_modules/@automattic/explat-client/dist/esm/internal/validations.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage */ "./node_modules/@automattic/explat-client/dist/esm/internal/local-storage.js");


var localStorageExperimentAssignmentKeyPrefix = 'explat-experiment-';
var localStorageExperimentAssignmentKey = function (experimentName) {
    return localStorageExperimentAssignmentKeyPrefix + "-" + experimentName;
};
/**
 * Store an ExperimentAssignment.
 *
 * @param experimentAssignment The ExperimentAssignment
 */
function storeExperimentAssignment(experimentAssignment) {
    _validations__WEBPACK_IMPORTED_MODULE_0__["validateExperimentAssignment"](experimentAssignment);
    var previousExperimentAssignment = retrieveExperimentAssignment(experimentAssignment.experimentName);
    if (previousExperimentAssignment &&
        experimentAssignment.retrievedTimestamp < previousExperimentAssignment.retrievedTimestamp) {
        throw new Error('Trying to store an older experiment assignment than is present in the store, likely a race condition.');
    }
    _local_storage__WEBPACK_IMPORTED_MODULE_1__["default"].setItem(localStorageExperimentAssignmentKey(experimentAssignment.experimentName), JSON.stringify(experimentAssignment));
}
/**
 * Retrieve an ExperimentAssignment.
 *
 * @param experimentName The experiment name.
 */
function retrieveExperimentAssignment(experimentName) {
    var maybeExperimentAssignmentJson = _local_storage__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(localStorageExperimentAssignmentKey(experimentName));
    if (!maybeExperimentAssignmentJson) {
        return undefined;
    }
    return _validations__WEBPACK_IMPORTED_MODULE_0__["validateExperimentAssignment"](JSON.parse(maybeExperimentAssignmentJson));
}


/***/ }),

/***/ "./node_modules/@automattic/explat-client/dist/esm/internal/experiment-assignments.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@automattic/explat-client/dist/esm/internal/experiment-assignments.js ***!
  \********************************************************************************************/
/*! exports provided: isAlive, minimumTtl, createFallbackExperimentAssignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlive", function() { return isAlive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minimumTtl", function() { return minimumTtl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFallbackExperimentAssignment", function() { return createFallbackExperimentAssignment; });
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timing */ "./node_modules/@automattic/explat-client/dist/esm/internal/timing.js");

/**
 * Check if an ExperimentAssignment is still alive (as in the TTL).
 *
 * @param experimentAssignment The experiment assignment to check
 */
function isAlive(experimentAssignment) {
    return (_timing__WEBPACK_IMPORTED_MODULE_0__["monotonicNow"]() <
        experimentAssignment.ttl * _timing__WEBPACK_IMPORTED_MODULE_0__["MILLISECONDS_PER_SECOND"] +
            experimentAssignment.retrievedTimestamp);
}
/**
 * The minimum ttl (in seconds) for any ExperimentAssignment.
 * This limits the number of requests being sent to our server in the case of our server failing to return a working assignment
 * and will be the minimum amount of time in-between requests per experiment.
 */
var minimumTtl = 60;
/**
 * A fallback ExperimentAssignment we return when we can't retrieve one.
 * As it is used in fallback situations, this function must never throw.
 *
 * @param experimentName The name of the experiment
 * @param ttl The time-to-live for the ExperimentAssignment, defaults to 60s
 */
var createFallbackExperimentAssignment = function (experimentName, ttl) {
    if (ttl === void 0) { ttl = minimumTtl; }
    return ({
        experimentName: experimentName,
        variationName: null,
        retrievedTimestamp: _timing__WEBPACK_IMPORTED_MODULE_0__["monotonicNow"](),
        ttl: Math.max(minimumTtl, ttl),
        isFallbackExperimentAssignment: true,
    });
};


/***/ }),

/***/ "./node_modules/@automattic/explat-client/dist/esm/internal/local-storage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@automattic/explat-client/dist/esm/internal/local-storage.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A polyfilled LocalStorage.
 * The polyfill is required at least for testing.
 */
var localStorage = typeof window !== 'undefined' && window.localStorage
    ? window.localStorage
    : // LocalStorage polyfill from https://gist.github.com/juliocesar/926500
        {
            _data: {},
            setItem: function (id, val) {
                this._data[id] = val;
            },
            getItem: function (id) {
                return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
            },
            removeItem: function (id) {
                delete this._data[id];
            },
            clear: function () {
                this._data = {};
            },
        };
/* harmony default export */ __webpack_exports__["default"] = (localStorage);


/***/ }),

/***/ "./node_modules/@automattic/explat-client/dist/esm/internal/requests.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@automattic/explat-client/dist/esm/internal/requests.js ***!
  \******************************************************************************/
/*! exports provided: isFetchExperimentAssignmentResponse, localStorageCachedGetAnonId, fetchExperimentAssignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFetchExperimentAssignmentResponse", function() { return isFetchExperimentAssignmentResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageCachedGetAnonId", function() { return localStorageCachedGetAnonId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchExperimentAssignment", function() { return fetchExperimentAssignment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validations */ "./node_modules/@automattic/explat-client/dist/esm/internal/validations.js");
/* harmony import */ var _timing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timing */ "./node_modules/@automattic/explat-client/dist/esm/internal/timing.js");
/* harmony import */ var _experiment_assignments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experiment-assignments */ "./node_modules/@automattic/explat-client/dist/esm/internal/experiment-assignments.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage */ "./node_modules/@automattic/explat-client/dist/esm/internal/local-storage.js");





/**
 * Exported for testing only.
 *
 * @param response The response data
 */
function isFetchExperimentAssignmentResponse(response) {
    return (Object(_validations__WEBPACK_IMPORTED_MODULE_1__["isObject"])(response) &&
        Object(_validations__WEBPACK_IMPORTED_MODULE_1__["isObject"])(response.variations) &&
        typeof response.ttl === 'number' &&
        0 < response.ttl);
}
function validateFetchExperimentAssignmentResponse(response) {
    if (isFetchExperimentAssignmentResponse(response)) {
        return response;
    }
    throw new Error('Invalid FetchExperimentAssignmentResponse');
}
// We cache the anonId and add it to requests to ensure users that have recently
// crossed the logged-out/logged-in boundry have a consistent assignment.
//
// There can be issues otherwise as matching anonId to userId is only eventually
// consistent.
var localStorageLastAnonIdKey = 'explat-last-anon-id';
var localStorageLastAnonIdRetrievalTimeKey = 'explat-last-anon-id-retrieval-time';
var lastAnonIdExpiryTimeMs = 24 * 60 * 60 * 1000; // 24 hours
/**
 * INTERNAL USE ONLY
 *
 * Runs the getAnonId provided cached by LocalStorage:
 * - Returns the result of getAnonId if it can
 * - Otherwise, within the expiry time, returns the cached anonId
 *
 * Exported for testing.
 *
 * @param getAnonId The getAnonId function
 */
var localStorageCachedGetAnonId = function (getAnonId) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var anonId, maybeStoredAnonId, maybeStoredRetrievalTime;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getAnonId()];
            case 1:
                anonId = _a.sent();
                if (anonId) {
                    _local_storage__WEBPACK_IMPORTED_MODULE_4__["default"].setItem(localStorageLastAnonIdKey, anonId);
                    _local_storage__WEBPACK_IMPORTED_MODULE_4__["default"].setItem(localStorageLastAnonIdRetrievalTimeKey, String(Object(_timing__WEBPACK_IMPORTED_MODULE_2__["monotonicNow"])()));
                    return [2 /*return*/, anonId];
                }
                maybeStoredAnonId = _local_storage__WEBPACK_IMPORTED_MODULE_4__["default"].getItem(localStorageLastAnonIdKey);
                maybeStoredRetrievalTime = _local_storage__WEBPACK_IMPORTED_MODULE_4__["default"].getItem(localStorageLastAnonIdRetrievalTimeKey);
                if (maybeStoredAnonId &&
                    maybeStoredRetrievalTime &&
                    Object(_timing__WEBPACK_IMPORTED_MODULE_2__["monotonicNow"])() - parseInt(maybeStoredRetrievalTime, 10) < lastAnonIdExpiryTimeMs) {
                    return [2 /*return*/, maybeStoredAnonId];
                }
                return [2 /*return*/, null];
        }
    });
}); };
/**
 * Fetch an ExperimentAssignment
 *
 * @param config The config object providing dependecy injection.
 * @param experimentName The experiment name to fetch
 */
function fetchExperimentAssignment(config, experimentName) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var retrievedTimestamp, _a, variations, responseTtl, _b, _c, _d, ttl, fetchedExperimentAssignments, fetchedExperimentAssignment;
        var _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_f) {
            switch (_f.label) {
                case 0:
                    retrievedTimestamp = Object(_timing__WEBPACK_IMPORTED_MODULE_2__["monotonicNow"])();
                    _b = validateFetchExperimentAssignmentResponse;
                    _d = (_c = config).fetchExperimentAssignment;
                    _e = {};
                    return [4 /*yield*/, localStorageCachedGetAnonId(config.getAnonId)];
                case 1: return [4 /*yield*/, _d.apply(_c, [(_e.anonId = _f.sent(),
                            _e.experimentName = experimentName,
                            _e)])];
                case 2:
                    _a = _b.apply(void 0, [_f.sent()]), variations = _a.variations, responseTtl = _a.ttl;
                    ttl = Math.max(_experiment_assignments__WEBPACK_IMPORTED_MODULE_3__["minimumTtl"], responseTtl);
                    fetchedExperimentAssignments = Object.entries(variations)
                        .map(function (_a) {
                        var experimentName = _a[0], variationName = _a[1];
                        return ({
                            experimentName: experimentName,
                            variationName: variationName,
                            retrievedTimestamp: retrievedTimestamp,
                            ttl: ttl,
                        });
                    })
                        .map(_validations__WEBPACK_IMPORTED_MODULE_1__["validateExperimentAssignment"]);
                    if (fetchedExperimentAssignments.length > 1) {
                        throw new Error('Received multiple experiment assignments while trying to fetch exactly one.');
                    }
                    if (fetchedExperimentAssignments.length === 0) {
                        return [2 /*return*/, _experiment_assignments__WEBPACK_IMPORTED_MODULE_3__["createFallbackExperimentAssignment"](experimentName, ttl)];
                    }
                    fetchedExperimentAssignment = fetchedExperimentAssignments[0];
                    if (fetchedExperimentAssignment.experimentName !== experimentName) {
                        throw new Error("Newly fetched ExperimentAssignment's experiment name does not match request.");
                    }
                    if (!_experiment_assignments__WEBPACK_IMPORTED_MODULE_3__["isAlive"](fetchedExperimentAssignment)) {
                        throw new Error("Newly fetched experiment isn't alive.");
                    }
                    return [2 /*return*/, fetchedExperimentAssignment];
            }
        });
    });
}


/***/ }),

/***/ "./node_modules/@automattic/explat-client/dist/esm/internal/timing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@automattic/explat-client/dist/esm/internal/timing.js ***!
  \****************************************************************************/
/*! exports provided: MILLISECONDS_PER_SECOND, monotonicNow, timeoutPromise, asyncOneAtATime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECONDS_PER_SECOND", function() { return MILLISECONDS_PER_SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotonicNow", function() { return monotonicNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutPromise", function() { return timeoutPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncOneAtATime", function() { return asyncOneAtATime; });
var MILLISECONDS_PER_SECOND = 1000;
var lastNow = Date.now();
/**
 * Returns the time in miliseconds.
 * A strictly increasing version of Date.now()
 *
 * Gives us some minimimal guarentees about user clocks.
 */
function monotonicNow() {
    var maybeNow = Date.now();
    lastNow = lastNow < maybeNow ? maybeNow : lastNow + 1;
    return lastNow;
}
/**
 * Timeouts a promise. Returns timeoutValue in event of timeout.
 *
 * @param promise The promise to timeout
 * @param timeoutMilliseconds The timeout time in milliseconds
 */
function timeoutPromise(promise, timeoutMilliseconds) {
    return Promise.race([
        promise,
        new Promise(function (_res, rej) {
            return setTimeout(function () { return rej(new Error('Promise has timed-out.')); }, timeoutMilliseconds);
        }),
    ]);
}
/**
 * Wraps an async function so that if it is called multiple times it will just return the same promise - until the promise is fulfilled.
 *
 * Once the promise has been fulfilled it will reset.
 *
 * @param f The function to wrap
 */
function asyncOneAtATime(f) {
    var lastPromise = null;
    return function () {
        if (!lastPromise) {
            lastPromise = f().finally(function () {
                lastPromise = null;
            });
        }
        return lastPromise;
    };
}


/***/ }),

/***/ "./node_modules/@automattic/explat-client/dist/esm/internal/validations.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@automattic/explat-client/dist/esm/internal/validations.js ***!
  \*********************************************************************************/
/*! exports provided: isObject, isName, isExperimentAssignment, validateExperimentAssignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isName", function() { return isName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExperimentAssignment", function() { return isExperimentAssignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateExperimentAssignment", function() { return validateExperimentAssignment; });
function isObject(x) {
    return typeof x === 'object' && x !== null;
}
/**
 * Test if a piece of data is a valid name
 *
 * @param name The data to test
 */
function isName(name) {
    return typeof name === 'string' && name !== '';
}
/**
 * Test if a piece of data is a valid experimentAssignment
 *
 * @param experimentAssignment The data to test
 */
function isExperimentAssignment(experimentAssignment) {
    return (isObject(experimentAssignment) &&
        isName(experimentAssignment['experimentName']) &&
        (isName(experimentAssignment['variationName']) ||
            experimentAssignment['variationName'] === null) &&
        typeof experimentAssignment['retrievedTimestamp'] === 'number' &&
        typeof experimentAssignment['ttl'] === 'number' &&
        experimentAssignment['ttl'] !== 0);
}
/**
 * Basic validation of ExperimentAssignment
 * Throws if invalid, returns the experimentAssignment if valid.
 *
 * @param experimentAssignment The data to validate
 */
function validateExperimentAssignment(experimentAssignment) {
    if (!isExperimentAssignment(experimentAssignment)) {
        throw new Error('Invalid ExperimentAssignment');
    }
    return experimentAssignment;
}


/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose/index.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
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

/***/ "./node_modules/@woocommerce/explat/build-module/anon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@woocommerce/explat/build-module/anon.js ***!
  \***************************************************************/
/*! exports provided: readAnonCookie, initializeAnonId, getAnonId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readAnonCookie", function() { return readAnonCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeAnonId", function() { return initializeAnonId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnonId", function() { return getAnonId; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator/index.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);



/**
 * External dependencies
 */

/**
 * setInterval, but it runs first callback immediately instead of after interval.
 */

var immediateStartSetInterval = function immediateStartSetInterval(f, intervalMs) {
  f();
  return setInterval(f, intervalMs);
};

var initializeAnonIdPromise = null;
var anonIdPollingIntervalMilliseconds = 50;
var anonIdPollingIntervalMaxAttempts = 100; // 50 * 100 = 5000 = 5 seconds

/**
 * Gather w.js anonymous cookie, tk_ai
 */

var readAnonCookie = function readAnonCookie() {
  return cookie__WEBPACK_IMPORTED_MODULE_2___default.a.parse(document.cookie).tk_ai || null;
};
/**
 * Initializes the anonId:
 * - Polls for AnonId receival
 * - Should only be called once at startup
 * - Happens to be safe to call multiple times if it is necessary to reset the anonId - something like this was necessary for testing.
 *
 * This purely for boot-time initialization, in usual circumstances it will be retrieved within 100-300ms, it happens in parallel booting
 * so should only delay experiment loading that much for boot-time experiments. In some circumstances such as a very slow connection this
 * can take a lot longer.
 *
 * The state of initializeAnonIdPromise should be used rather than the return of this function.
 * The return is only avaliable to make this easier to test.
 *
 * Throws on error.
 */

var initializeAnonId = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
    var attempt;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            attempt = 0;
            initializeAnonIdPromise = new Promise(function (res) {
              var anonIdPollingInterval = immediateStartSetInterval(function () {
                var anonId = readAnonCookie();

                if (typeof anonId === 'string' && anonId !== '') {
                  clearInterval(anonIdPollingInterval);
                  res(anonId);
                  return;
                }

                if (anonIdPollingIntervalMaxAttempts - 1 <= attempt) {
                  clearInterval(anonIdPollingInterval);
                  res(null);
                  return;
                }

                attempt = attempt + 1;
              }, anonIdPollingIntervalMilliseconds);
            });
            return _context.abrupt("return", initializeAnonIdPromise);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function initializeAnonId() {
    return _ref.apply(this, arguments);
  };
}();
var getAnonId = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
    var _window$wcTracks;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if ((_window$wcTracks = window.wcTracks) !== null && _window$wcTracks !== void 0 && _window$wcTracks.isEnabled) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", null);

          case 2:
            _context2.next = 4;
            return initializeAnonIdPromise;

          case 4:
            return _context2.abrupt("return", _context2.sent);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAnonId() {
    return _ref2.apply(this, arguments);
  };
}();
//# sourceMappingURL=anon.js.map

/***/ }),

/***/ "./node_modules/@woocommerce/explat/build-module/assignment.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@woocommerce/explat/build-module/assignment.js ***!
  \*********************************************************************/
/*! exports provided: fetchExperimentAssignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchExperimentAssignment", function() { return fetchExperimentAssignment; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator/index.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ "./node_modules/@woocommerce/explat/node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);



/**
 * External dependencies
 */

var EXPLAT_VERSION = '0.1.0';
var fetchExperimentAssignment = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
    var _window$wcTracks;

    var experimentName, anonId, params, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            experimentName = _ref.experimentName, anonId = _ref.anonId;

            if ((_window$wcTracks = window.wcTracks) !== null && _window$wcTracks !== void 0 && _window$wcTracks.isEnabled) {
              _context.next = 3;
              break;
            }

            throw new Error("Tracking is disabled, can't fetch experimentAssignment");

          case 3:
            params = Object(qs__WEBPACK_IMPORTED_MODULE_2__["stringify"])({
              experiment_name: experimentName,
              anon_id: anonId !== null && anonId !== void 0 ? anonId : undefined
            });
            _context.next = 6;
            return window.fetch("https://public-api.wordpress.com/wpcom/v2/experiments/".concat(EXPLAT_VERSION, "/assignments/woocommerce?").concat(params));

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            return _context.abrupt("return", _context.sent);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchExperimentAssignment(_x) {
    return _ref2.apply(this, arguments);
  };
}();
//# sourceMappingURL=assignment.js.map

/***/ }),

/***/ "./node_modules/@woocommerce/explat/build-module/error.js":
/*!****************************************************************!*\
  !*** ./node_modules/@woocommerce/explat/build-module/error.js ***!
  \****************************************************************/
/*! exports provided: logError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logError", function() { return logError; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties/index.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@woocommerce/explat/build-module/utils.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

var logError = function logError(error) {
  var onLoggingError = function onLoggingError(e) {
    if (_utils__WEBPACK_IMPORTED_MODULE_2__["isDevelopmentMode"]) {
      console.error('[ExPlat] Unable to send error to server:', e); // eslint-disable-line no-console
    }
  };

  try {
    var message = error.message,
        properties = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(error, ["message"]);

    var logStashError = {
      message: message,
      properties: _objectSpread(_objectSpread({}, properties), {}, {
        context: 'explat',
        explat_client: 'woocommerce'
      })
    };

    if (_utils__WEBPACK_IMPORTED_MODULE_2__["isDevelopmentMode"]) {
      console.error('[ExPlat] ', error.message, error); // eslint-disable-line no-console
    } else {
      var _window$wcTracks;

      if (!((_window$wcTracks = window.wcTracks) !== null && _window$wcTracks !== void 0 && _window$wcTracks.isEnabled)) {
        throw new Error("Tracking is disabled, can't send error to the server");
      }

      var body = new window.FormData();
      body.append('error', JSON.stringify(logStashError));
      window.fetch('https://public-api.wordpress.com/rest/v1.1/js-error', {
        method: 'POST',
        body: body
      }).catch(onLoggingError);
    }
  } catch (e) {
    onLoggingError(e);
  }
};
//# sourceMappingURL=error.js.map

/***/ }),

/***/ "./node_modules/@woocommerce/explat/build-module/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@woocommerce/explat/build-module/index.js ***!
  \****************************************************************/
/*! exports provided: initializeExPlat, loadExperimentAssignment, dangerouslyGetExperimentAssignment, useExperiment, Experiment, ProvideExperimentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeExPlat", function() { return initializeExPlat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadExperimentAssignment", function() { return loadExperimentAssignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerouslyGetExperimentAssignment", function() { return dangerouslyGetExperimentAssignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useExperiment", function() { return useExperiment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Experiment", function() { return Experiment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvideExperimentData", function() { return ProvideExperimentData; });
/* harmony import */ var _automattic_explat_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @automattic/explat-client */ "./node_modules/@automattic/explat-client/dist/esm/index.js");
/* harmony import */ var _automattic_explat_client_react_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @automattic/explat-client-react-helpers */ "./node_modules/@automattic/explat-client-react-helpers/dist/esm/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@woocommerce/explat/build-module/utils.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./node_modules/@woocommerce/explat/build-module/error.js");
/* harmony import */ var _assignment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignment */ "./node_modules/@woocommerce/explat/build-module/assignment.js");
/* harmony import */ var _anon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./anon */ "./node_modules/@woocommerce/explat/build-module/anon.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





var initializeExPlat = function initializeExPlat() {
  var _window$wcTracks;

  if ((_window$wcTracks = window.wcTracks) !== null && _window$wcTracks !== void 0 && _window$wcTracks.isEnabled) {
    Object(_anon__WEBPACK_IMPORTED_MODULE_5__["initializeAnonId"])().catch(function (e) {
      return Object(_error__WEBPACK_IMPORTED_MODULE_3__["logError"])({
        message: e.message
      });
    });
  }
};
initializeExPlat();
var exPlatClient = Object(_automattic_explat_client__WEBPACK_IMPORTED_MODULE_0__["createExPlatClient"])({
  fetchExperimentAssignment: _assignment__WEBPACK_IMPORTED_MODULE_4__["fetchExperimentAssignment"],
  getAnonId: _anon__WEBPACK_IMPORTED_MODULE_5__["getAnonId"],
  logError: _error__WEBPACK_IMPORTED_MODULE_3__["logError"],
  isDevelopmentMode: _utils__WEBPACK_IMPORTED_MODULE_2__["isDevelopmentMode"]
});
var loadExperimentAssignment = exPlatClient.loadExperimentAssignment,
    dangerouslyGetExperimentAssignment = exPlatClient.dangerouslyGetExperimentAssignment;

var exPlatClientReactHelpers = Object(_automattic_explat_client_react_helpers__WEBPACK_IMPORTED_MODULE_1__["default"])(exPlatClient);
var useExperiment = exPlatClientReactHelpers.useExperiment,
    Experiment = exPlatClientReactHelpers.Experiment,
    ProvideExperimentData = exPlatClientReactHelpers.ProvideExperimentData;

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@woocommerce/explat/build-module/utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@woocommerce/explat/build-module/utils.js ***!
  \****************************************************************/
/*! exports provided: isDevelopmentMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevelopmentMode", function() { return isDevelopmentMode; });
/**
 * Boolean determining if environment is development.
 */
var isDevelopmentMode = "development" === 'development';
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@woocommerce/explat/node_modules/qs/lib/formats.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@woocommerce/explat/node_modules/qs/lib/formats.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ "./node_modules/@woocommerce/explat/node_modules/qs/lib/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@woocommerce/explat/node_modules/qs/lib/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/@woocommerce/explat/node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/@woocommerce/explat/node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/@woocommerce/explat/node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/@woocommerce/explat/node_modules/qs/lib/parse.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@woocommerce/explat/node_modules/qs/lib/parse.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/@woocommerce/explat/node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/@woocommerce/explat/node_modules/qs/lib/stringify.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@woocommerce/explat/node_modules/qs/lib/stringify.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/@woocommerce/explat/node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/@woocommerce/explat/node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = typeof key === 'object' && key.value !== undefined ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/@woocommerce/explat/node_modules/qs/lib/utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@woocommerce/explat/node_modules/qs/lib/utils.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(/*! ./formats */ "./node_modules/@woocommerce/explat/node_modules/qs/lib/formats.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ "./node_modules/cookie/index.js":
/*!**************************************!*\
  !*** ./node_modules/cookie/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


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

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
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
/* harmony import */ var _woocommerce_explat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @woocommerce/explat */ "./node_modules/@woocommerce/explat/build-module/index.js");
/* harmony import */ var _admin_notes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-notes */ "./src/admin-notes/index.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools */ "./src/tools/index.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../options */ "./src/options/index.js");


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




var DefaultExperience = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Default experience");
var TreatmentExperience = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Treatment experience");
var LoadingExperience = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Loading...");
var tabs = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["applyFilters"])('woocommerce_admin_test_helper_tabs', [{
  name: 'options',
  title: 'Options',
  content: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_options__WEBPACK_IMPORTED_MODULE_6__["default"], null)
}, {
  name: 'admin-notes',
  title: 'Admin notes',
  content: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_admin_notes__WEBPACK_IMPORTED_MODULE_4__["AdminNotes"], null)
}, {
  name: 'tools',
  title: 'Tools',
  content: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_tools__WEBPACK_IMPORTED_MODULE_5__["default"], null)
}]);
function App() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "WooCommerce Admin Test Helper"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_woocommerce_explat__WEBPACK_IMPORTED_MODULE_3__["Experiment"], {
    name: "woocommerce_example_experiment",
    defaultExperience: DefaultExperience,
    treatmentExperience: TreatmentExperience,
    loadingExperience: LoadingExperience
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
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
  SET_CRON_JOBS: 'SET_CRON_JOBS'
};
/* harmony default export */ __webpack_exports__["default"] = (TYPES);

/***/ }),

/***/ "./src/tools/data/actions.js":
/*!***********************************!*\
  !*** ./src/tools/data/actions.js ***!
  \***********************************/
/*! exports provided: addCurrentlyRunning, removeCurrentlyRunning, addMessage, updateMessage, removeMessage, updateCommandParams, setCronJobs, triggerWcaInstall, resetOnboardingWizard, resetJetpackConnection, enableTrackingDebug, updateStoreAge, runWcAdminDailyJob, deleteAllProducts, runSelectedCronJob */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerWcaInstall", function() { return triggerWcaInstall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetOnboardingWizard", function() { return resetOnboardingWizard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetJetpackConnection", function() { return resetJetpackConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableTrackingDebug", function() { return enableTrackingDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStoreAge", function() { return updateStoreAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runWcAdminDailyJob", function() { return runWcAdminDailyJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAllProducts", function() { return deleteAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runSelectedCronJob", function() { return runSelectedCronJob; });
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
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(runSelectedCronJob);

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
  messages: {},
  params: [],
  status: ''
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

    case _action_types__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_COMMAND_PARAMS:
      return _objectSpread(_objectSpread({}, state), {}, {
        params: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.source, action.params)
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
/*! exports provided: getCronJobs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCronJobs", function() { return getCronJobs; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data-controls */ "@wordpress/data-controls");
/* harmony import */ var _wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data_controls__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/tools/data/constants.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/tools/data/actions.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getCronJobs);

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

/***/ }),

/***/ "./src/tools/data/selectors.js":
/*!*************************************!*\
  !*** ./src/tools/data/selectors.js ***!
  \*************************************/
/*! exports provided: getCurrentlyRunning, getMessages, getStatus, getCommandParams, getCronJobs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentlyRunning", function() { return getCurrentlyRunning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessages", function() { return getMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatus", function() { return getStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommandParams", function() { return getCommandParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCronJobs", function() { return getCronJobs; });
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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map