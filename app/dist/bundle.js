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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/validator/lib/isByteLength.js":
/*!****************************************************!*\
  !*** ./node_modules/validator/lib/isByteLength.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isByteLength;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* eslint-disable prefer-rest-params */\nfunction isByteLength(str, options) {\n  (0, _assertString.default)(str);\n  var min;\n  var max;\n\n  if (_typeof(options) === 'object') {\n    min = options.min || 0;\n    max = options.max;\n  } else {\n    // backwards compatibility: isByteLength(str, min [, max])\n    min = arguments[1];\n    max = arguments[2];\n  }\n\n  var len = encodeURI(str).split(/%..|./).length - 1;\n  return len >= min && (typeof max === 'undefined' || len <= max);\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isByteLength.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isEmail.js":
/*!***********************************************!*\
  !*** ./node_modules/validator/lib/isEmail.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isEmail;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ \"./node_modules/validator/lib/util/merge.js\"));\n\nvar _isByteLength = _interopRequireDefault(__webpack_require__(/*! ./isByteLength */ \"./node_modules/validator/lib/isByteLength.js\"));\n\nvar _isFQDN = _interopRequireDefault(__webpack_require__(/*! ./isFQDN */ \"./node_modules/validator/lib/isFQDN.js\"));\n\nvar _isIP = _interopRequireDefault(__webpack_require__(/*! ./isIP */ \"./node_modules/validator/lib/isIP.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar default_email_options = {\n  allow_display_name: false,\n  require_display_name: false,\n  allow_utf8_local_part: true,\n  require_tld: true\n};\n/* eslint-disable max-len */\n\n/* eslint-disable no-control-regex */\n\nvar splitNameAddress = /^([^\\x00-\\x1F\\x7F-\\x9F\\cX]+)<(.+)>$/i;\nvar emailUserPart = /^[a-z\\d!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]+$/i;\nvar gmailUserPart = /^[a-z\\d]+$/;\nvar quotedEmailUser = /^([\\s\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f\\x21\\x23-\\x5b\\x5d-\\x7e]|(\\\\[\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]))*$/i;\nvar emailUserUtf8Part = /^[a-z\\d!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]+$/i;\nvar quotedEmailUserUtf8 = /^([\\s\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f\\x21\\x23-\\x5b\\x5d-\\x7e\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]|(\\\\[\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))*$/i;\nvar defaultMaxEmailLength = 254;\n/* eslint-enable max-len */\n\n/* eslint-enable no-control-regex */\n\n/**\n * Validate display name according to the RFC2822: https://tools.ietf.org/html/rfc2822#appendix-A.1.2\n * @param {String} display_name\n */\n\nfunction validateDisplayName(display_name) {\n  var trim_quotes = display_name.match(/^\"(.+)\"$/i);\n  var display_name_without_quotes = trim_quotes ? trim_quotes[1] : display_name; // display name with only spaces is not valid\n\n  if (!display_name_without_quotes.trim()) {\n    return false;\n  } // check whether display name contains illegal character\n\n\n  var contains_illegal = /[\\.\";<>]/.test(display_name_without_quotes);\n\n  if (contains_illegal) {\n    // if contains illegal characters,\n    // must to be enclosed in double-quotes, otherwise it's not a valid display name\n    if (!trim_quotes) {\n      return false;\n    } // the quotes in display name must start with character symbol \\\n\n\n    var all_start_with_back_slash = display_name_without_quotes.split('\"').length === display_name_without_quotes.split('\\\\\"').length;\n\n    if (!all_start_with_back_slash) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nfunction isEmail(str, options) {\n  (0, _assertString.default)(str);\n  options = (0, _merge.default)(options, default_email_options);\n\n  if (options.require_display_name || options.allow_display_name) {\n    var display_email = str.match(splitNameAddress);\n\n    if (display_email) {\n      var display_name;\n\n      var _display_email = _slicedToArray(display_email, 3);\n\n      display_name = _display_email[1];\n      str = _display_email[2];\n\n      // sometimes need to trim the last space to get the display name\n      // because there may be a space between display name and email address\n      // eg. myname <address@gmail.com>\n      // the display name is `myname` instead of `myname `, so need to trim the last space\n      if (display_name.endsWith(' ')) {\n        display_name = display_name.substr(0, display_name.length - 1);\n      }\n\n      if (!validateDisplayName(display_name)) {\n        return false;\n      }\n    } else if (options.require_display_name) {\n      return false;\n    }\n  }\n\n  if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {\n    return false;\n  }\n\n  var parts = str.split('@');\n  var domain = parts.pop();\n  var user = parts.join('@');\n  var lower_domain = domain.toLowerCase();\n\n  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {\n    /*\n      Previously we removed dots for gmail addresses before validating.\n      This was removed because it allows `multiple..dots@gmail.com`\n      to be reported as valid, but it is not.\n      Gmail only normalizes single dots, removing them from here is pointless,\n      should be done in normalizeEmail\n    */\n    user = user.toLowerCase(); // Removing sub-address from username before gmail validation\n\n    var username = user.split('+')[0]; // Dots are not included in gmail length restriction\n\n    if (!(0, _isByteLength.default)(username.replace('.', ''), {\n      min: 6,\n      max: 30\n    })) {\n      return false;\n    }\n\n    var _user_parts = username.split('.');\n\n    for (var i = 0; i < _user_parts.length; i++) {\n      if (!gmailUserPart.test(_user_parts[i])) {\n        return false;\n      }\n    }\n  }\n\n  if (!(0, _isByteLength.default)(user, {\n    max: 64\n  }) || !(0, _isByteLength.default)(domain, {\n    max: 254\n  })) {\n    return false;\n  }\n\n  if (!(0, _isFQDN.default)(domain, {\n    require_tld: options.require_tld\n  })) {\n    if (!options.allow_ip_domain) {\n      return false;\n    }\n\n    if (!(0, _isIP.default)(domain)) {\n      if (!domain.startsWith('[') || !domain.endsWith(']')) {\n        return false;\n      }\n\n      var noBracketdomain = domain.substr(1, domain.length - 2);\n\n      if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {\n        return false;\n      }\n    }\n  }\n\n  if (user[0] === '\"') {\n    user = user.slice(1, user.length - 1);\n    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);\n  }\n\n  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;\n  var user_parts = user.split('.');\n\n  for (var _i2 = 0; _i2 < user_parts.length; _i2++) {\n    if (!pattern.test(user_parts[_i2])) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isEmail.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isFQDN.js":
/*!**********************************************!*\
  !*** ./node_modules/validator/lib/isFQDN.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isFQDN;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nvar _merge = _interopRequireDefault(__webpack_require__(/*! ./util/merge */ \"./node_modules/validator/lib/util/merge.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar default_fqdn_options = {\n  require_tld: true,\n  allow_underscores: false,\n  allow_trailing_dot: false\n};\n\nfunction isFQDN(str, options) {\n  (0, _assertString.default)(str);\n  options = (0, _merge.default)(options, default_fqdn_options);\n  /* Remove the optional trailing dot before checking validity */\n\n  if (options.allow_trailing_dot && str[str.length - 1] === '.') {\n    str = str.substring(0, str.length - 1);\n  }\n\n  var parts = str.split('.');\n\n  for (var i = 0; i < parts.length; i++) {\n    if (parts[i].length > 63) {\n      return false;\n    }\n  }\n\n  if (options.require_tld) {\n    var tld = parts.pop();\n\n    if (!parts.length || !/^([a-z\\u00a1-\\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {\n      return false;\n    } // disallow spaces && special characers\n\n\n    if (/[\\s\\u2002-\\u200B\\u202F\\u205F\\u3000\\uFEFF\\uDB40\\uDC20\\u00A9\\uFFFD]/.test(tld)) {\n      return false;\n    }\n  }\n\n  for (var part, _i = 0; _i < parts.length; _i++) {\n    part = parts[_i];\n\n    if (options.allow_underscores) {\n      part = part.replace(/_/g, '');\n    }\n\n    if (!/^[a-z\\u00a1-\\uffff0-9-]+$/i.test(part)) {\n      return false;\n    } // disallow full-width chars\n\n\n    if (/[\\uff01-\\uff5e]/.test(part)) {\n      return false;\n    }\n\n    if (part[0] === '-' || part[part.length - 1] === '-') {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isFQDN.js?");

/***/ }),

/***/ "./node_modules/validator/lib/isIP.js":
/*!********************************************!*\
  !*** ./node_modules/validator/lib/isIP.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = isIP;\n\nvar _assertString = _interopRequireDefault(__webpack_require__(/*! ./util/assertString */ \"./node_modules/validator/lib/util/assertString.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n11.3.  Examples\n\n   The following addresses\n\n             fe80::1234 (on the 1st link of the node)\n             ff02::5678 (on the 5th link of the node)\n             ff08::9abc (on the 10th organization of the node)\n\n   would be represented as follows:\n\n             fe80::1234%1\n             ff02::5678%5\n             ff08::9abc%10\n\n   (Here we assume a natural translation from a zone index to the\n   <zone_id> part, where the Nth zone of any scope is translated into\n   \"N\".)\n\n   If we use interface names as <zone_id>, those addresses could also be\n   represented as follows:\n\n            fe80::1234%ne0\n            ff02::5678%pvc1.3\n            ff08::9abc%interface10\n\n   where the interface \"ne0\" belongs to the 1st link, \"pvc1.3\" belongs\n   to the 5th link, and \"interface10\" belongs to the 10th organization.\n * * */\nvar ipv4Maybe = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;\nvar ipv6Block = /^[0-9A-F]{1,4}$/i;\n\nfunction isIP(str) {\n  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  (0, _assertString.default)(str);\n  version = String(version);\n\n  if (!version) {\n    return isIP(str, 4) || isIP(str, 6);\n  } else if (version === '4') {\n    if (!ipv4Maybe.test(str)) {\n      return false;\n    }\n\n    var parts = str.split('.').sort(function (a, b) {\n      return a - b;\n    });\n    return parts[3] <= 255;\n  } else if (version === '6') {\n    var addressAndZone = [str]; // ipv6 addresses could have scoped architecture\n    // according to https://tools.ietf.org/html/rfc4007#section-11\n\n    if (str.includes('%')) {\n      addressAndZone = str.split('%');\n\n      if (addressAndZone.length !== 2) {\n        // it must be just two parts\n        return false;\n      }\n\n      if (!addressAndZone[0].includes(':')) {\n        // the first part must be the address\n        return false;\n      }\n\n      if (addressAndZone[1] === '') {\n        // the second part must not be empty\n        return false;\n      }\n    }\n\n    var blocks = addressAndZone[0].split(':');\n    var foundOmissionBlock = false; // marker to indicate ::\n    // At least some OS accept the last 32 bits of an IPv6 address\n    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says\n    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,\n    // and '::a.b.c.d' is deprecated, but also valid.\n\n    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);\n    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;\n\n    if (blocks.length > expectedNumberOfBlocks) {\n      return false;\n    } // initial or final ::\n\n\n    if (str === '::') {\n      return true;\n    } else if (str.substr(0, 2) === '::') {\n      blocks.shift();\n      blocks.shift();\n      foundOmissionBlock = true;\n    } else if (str.substr(str.length - 2) === '::') {\n      blocks.pop();\n      blocks.pop();\n      foundOmissionBlock = true;\n    }\n\n    for (var i = 0; i < blocks.length; ++i) {\n      // test for a :: which can not be at the string start/end\n      // since those cases have been handled above\n      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {\n        if (foundOmissionBlock) {\n          return false; // multiple :: in address\n        }\n\n        foundOmissionBlock = true;\n      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {// it has been checked before that the last\n        // block is a valid IPv4 address\n      } else if (!ipv6Block.test(blocks[i])) {\n        return false;\n      }\n    }\n\n    if (foundOmissionBlock) {\n      return blocks.length >= 1;\n    }\n\n    return blocks.length === expectedNumberOfBlocks;\n  }\n\n  return false;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/isIP.js?");

/***/ }),

/***/ "./node_modules/validator/lib/util/assertString.js":
/*!*********************************************************!*\
  !*** ./node_modules/validator/lib/util/assertString.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = assertString;\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction assertString(input) {\n  var isString = typeof input === 'string' || input instanceof String;\n\n  if (!isString) {\n    var invalidType;\n\n    if (input === null) {\n      invalidType = 'null';\n    } else {\n      invalidType = _typeof(input);\n\n      if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name')) {\n        invalidType = input.constructor.name;\n      } else {\n        invalidType = \"a \".concat(invalidType);\n      }\n    }\n\n    throw new TypeError(\"Expected string but received \".concat(invalidType, \".\"));\n  }\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/util/assertString.js?");

/***/ }),

/***/ "./node_modules/validator/lib/util/merge.js":
/*!**************************************************!*\
  !*** ./node_modules/validator/lib/util/merge.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = merge;\n\nfunction merge() {\n  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var defaults = arguments.length > 1 ? arguments[1] : undefined;\n\n  for (var key in defaults) {\n    if (typeof obj[key] === 'undefined') {\n      obj[key] = defaults[key];\n    }\n  }\n\n  return obj;\n}\n\nmodule.exports = exports.default;\nmodule.exports.default = exports.default;\n\n//# sourceURL=webpack:///./node_modules/validator/lib/util/merge.js?");

/***/ }),

/***/ "./src/assets/scripts/components/tripleMe.js":
/*!***************************************************!*\
  !*** ./src/assets/scripts/components/tripleMe.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction tripleMe(num) {\r\n  return num * 3\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (tripleMe);\n\n//# sourceURL=webpack:///./src/assets/scripts/components/tripleMe.js?");

/***/ }),

/***/ "./src/assets/scripts/index.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator/lib/isEmail */ \"./node_modules/validator/lib/isEmail.js\");\n/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_tripleMe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tripleMe */ \"./src/assets/scripts/components/tripleMe.js\");\n//import '../styles/style.css'\r\n\r\n//const validator = require('validator'); old node way\r\n // new js way and only get what is needed \r\n\r\n\r\nconsole.log(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_0___default()('altair.com'));\r\nconsole.log(Object(_components_tripleMe__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(120))\r\n\r\nif (false) {}\r\n\n\n//# sourceURL=webpack:///./src/assets/scripts/index.js?");

/***/ })

/******/ });