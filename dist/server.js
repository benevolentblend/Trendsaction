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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/pdfReader.ts":
/*!*********************************!*\
  !*** ./src/server/pdfReader.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar pdf_parse_1 = __webpack_require__(/*! pdf-parse */ \"pdf-parse\");\nvar pdfreaderHelper_1 = __webpack_require__(/*! ./pdfreaderHelper */ \"./src/server/pdfreaderHelper.ts\");\nvar pdfReader = function (fileName) { return __awaiter(void 0, void 0, void 0, function () {\n    var dataBuffer, data, rawPDFText, capturedData, cleanPDFText, processedAccounts, isValid;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                dataBuffer = fs.readFileSync(fileName);\n                return [4 /*yield*/, pdf_parse_1.default(dataBuffer)];\n            case 1:\n                data = _a.sent();\n                rawPDFText = data.text;\n                capturedData = pdfreaderHelper_1.captureData(rawPDFText);\n                cleanPDFText = pdfreaderHelper_1.regexClean(rawPDFText);\n                processedAccounts = pdfreaderHelper_1.processAccounts(cleanPDFText);\n                isValid = pdfreaderHelper_1.validateAccounts(capturedData.accounts, processedAccounts);\n                return [2 /*return*/, { \"data\": capturedData, \"processAccounts\": processedAccounts, isValid: isValid }];\n        }\n    });\n}); };\nexports.default = pdfReader;\n\n\n//# sourceURL=webpack:///./src/server/pdfReader.ts?");

/***/ }),

/***/ "./src/server/pdfreaderHelper.ts":
/*!***************************************!*\
  !*** ./src/server/pdfreaderHelper.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.validateAccounts = exports.processAccounts = exports.regexClean = exports.captureData = void 0;\nvar captureDate = /Statement\\sFor\\n([0-1][0-9])\\/[0-3][0-9]\\/([0-9]{4})\\s-\\s[0-1][0-9]\\/[0-3][0-9]\\/[0-9]{4}/;\nvar captureAccounts = /(.*)ID\\s([0-9]{4})\\$?([0-9,]{1,}\\.[0-9]{2})\\n/gm;\nvar captureBalanceTotal = /Account\\sBalance\\sTotal\\n\\$?(.*)\\n/;\nvar captureDividendsTotal = /Total\\sDividends\\sPaid\\sYear-To-Date\\$?([0-9]{1,}\\.[0-9]{2})\\n/;\nvar replaceWithBlanks = [\n    /^(.*)Total\\sDividends\\sPaid\\sYear-To-Date\\$?([0-9]{1,}\\.[0-9]{2})/ms,\n    /\\$/gm,\n    /Need a Loan\\?\\nCall \\(717\\) 232-3526 or apply online\\nwww\\.belco\\.org\\n/gm,\n    /449 Eisenhower.*\\n/gm,\n    /Thank you for your membership.\\n/gm,\n    /BELCO Service Telephone Numbers.*advertisement for the property or services./ms,\n    /Your Account Balances.*Year-To-Date[0-9]{1,}\\.[0-9]{2}/ms,\n    /Member\\sNumber\\n.*\\nStatement\\sFor\\n(?:.*\\n){3}/gm,\n    /Statement of Account\\n(.*)\\nContinued fromprevious page\\.\\n/gm,\n    /Posting\\nTransactionBalanceTransaction Description\\n/gm,\n    /Statement of Account/,\n    /Summary by Check Number\\* Asterisk.*$/ms,\n    /Overdraft Fees.*$/ms,\n    /,/gm,\n];\nvar replaceWithNewLines = [\n    /\\n(?:[0-9]\\n|-\\n|[SD]\\n)+/gm,\n    /RETURN SERVICE REQUESTED\\n(?:.*\\n){5}/gm,\n    /Continued on next page./gm,\n    \" \\n\",\n    \"\\n\\n\\n\\n\\n\",\n];\nvar formatTransactionTables = [\n    {\n        regex: /(.*)ID ([0-9]{4})\\nBeginning Balance/gm,\n        replacement: \"\\n\\n;:;$1;$2;Beginning Balance\",\n    },\n    {\n        regex: /Beginning Balance.+?Ending Balance\\n([0-9,]{1,}\\.[0-9]{2})/gms,\n        replacement: \"$1\",\n    },\n];\nvar formatTransations = [\n    {\n        regex: /\\n([0-9]{2}\\/[0-9]{2})([0-9,]{1,}\\.[0-9]{2})(-?)([0-9,]{1,}\\.[0-9]{2})(-?)\\s*(Withdrawal|Deposit)\\s(.*)/gm,\n        replacement: \"\\n\\n$1;$3$2;$5$4;$6;$7\",\n    },\n    {\n        regex: /\\n([0-9]{2}\\/[0-9]{2});(-?[0-9,]{1,}\\.[0-9]{2});(-?[0-9,]{1,}\\.[0-9]{2});(Withdrawal|Deposit);(.*\\n.*)/gm,\n        replacement: \"\\n$1;$2;$3;$4;$5\",\n    },\n    {\n        regex: /\\n([0-9]{2}\\/[0-9]{2});(-?[0-9,]{1,}\\.[0-9]{2});(-?[0-9,]{1,}\\.[0-9]{2});(Withdrawal|Deposit);(.*)\\n(.*)/gm,\n        replacement: \"\\n$1;$2;$3;$4;$5 $6;\",\n    },\n    {\n        regex: /\\n\\n\\n/gm,\n        replacement: \"\\n\",\n    },\n    {\n        regex: /\\n\\n/gm,\n        replacement: \"\\n\",\n    },\n    {\n        regex: / ;\\n/gm,\n        replacement: \";\\n\",\n    },\n    {\n        regex: /\\n\\n;/,\n        replacement: \";\",\n    },\n];\nvar processAccount = /;:;(.*);([0-9]{4});(-?[0-9,]{1,}\\.[0-9]{2})/;\nvar processTransaction = /([0-9]{2}\\/[0-9]{2});(-?[0-9,]{1,}\\.[0-9]{2});(-?[0-9,]{1,}\\.[0-9]{2});(Withdrawal|Deposit);(.*);/;\nvar processRegexSteps = function (data, steps) {\n    var output = data;\n    steps.forEach(function (step) {\n        var regex = step.regex, replacement = step.replacement;\n        output = output.replace(regex, replacement);\n    });\n    return output;\n};\nvar captureHeaderAccounts = function (account) {\n    // Reset regex pointer\n    captureAccounts.lastIndex = 0;\n    var results = captureAccounts.exec(account);\n    var name = results[1], id = results[2], balance = results[3];\n    var result = { name: name, id: id, balance: balance.replace(\",\", \"\") };\n    return result;\n};\nexports.captureData = function (rawData) {\n    var dateInformation = captureDate.exec(rawData);\n    var accountRegs = rawData.match(captureAccounts);\n    var accounts = accountRegs.map(captureHeaderAccounts);\n    var balanceTotalResult = captureBalanceTotal.exec(rawData);\n    var balanceTotal = balanceTotalResult[1];\n    var statementMonth = dateInformation[1], statementYear = dateInformation[2];\n    var dividendsTotalResult = captureDividendsTotal.exec(rawData);\n    var dividendsTotal = dividendsTotalResult[1];\n    return {\n        statementMonth: statementMonth,\n        statementYear: statementYear,\n        accounts: accounts,\n        balanceTotal: balanceTotal,\n        dividendsTotal: dividendsTotal,\n    };\n};\nexports.regexClean = function (data) {\n    var output = data;\n    //   fs.writeFileSync(\"test/original.txt\", data, \"utf8\");\n    replaceWithBlanks.forEach(function (replaceWithBlank) {\n        output = output.replace(replaceWithBlank, \"\");\n    });\n    replaceWithNewLines.forEach(function (replaceWithNewLine) {\n        output = output.replace(replaceWithNewLine, \"\\n\");\n    });\n    //   fs.writeFileSync(\"test/preprocess.txt\", output, \"utf8\");\n    output = processRegexSteps(output, formatTransactionTables);\n    //   fs.writeFileSync(\"test/preprocess1.txt\", output, \"utf8\");\n    output = processRegexSteps(output, formatTransations);\n    //   fs.writeFileSync(\"test/message.txt\", output, \"utf8\");\n    return output;\n};\nexports.processAccounts = function (cleanText) {\n    var cleanPDFLines = cleanText.split(\"\\n\");\n    var processedAccounts = [];\n    cleanPDFLines.forEach(function (line) {\n        if (processAccount.test(line)) {\n            var _a = processAccount.exec(line), name = _a[1], id = _a[2], balance = _a[3];\n            processedAccounts.push({ name: name, id: id, balance: balance, transactions: [] });\n        }\n        else if (processTransaction.test(line)) {\n            var _b = processTransaction.exec(line), date = _b[1], amount = _b[2], currentBalance = _b[3], type = _b[4], description = _b[5];\n            processedAccounts[processedAccounts.length - 1].transactions.push({\n                date: date,\n                amount: amount,\n                balance: currentBalance,\n                type: type,\n                description: description,\n            });\n        }\n    });\n    return processedAccounts;\n};\nexports.validateAccounts = function (headerAccounts, processedAccounts) {\n    var valid = true;\n    if (headerAccounts.length !== processedAccounts.length) {\n        valid = false;\n    }\n    else {\n        var failedOn_1 = -1;\n        valid = headerAccounts.every(function (headerAccount, i) {\n            var result = headerAccount.name === processedAccounts[i].name &&\n                headerAccount.id === processedAccounts[i].id &&\n                headerAccount.balance === processedAccounts[i].balance;\n            if (!result)\n                failedOn_1 = i;\n            return result;\n        });\n        if (failedOn_1 !== -1) {\n            console.log(\"failed this on\", headerAccounts[failedOn_1], processedAccounts[failedOn_1]);\n        }\n    }\n    return valid;\n};\n\n\n//# sourceURL=webpack:///./src/server/pdfreaderHelper.ts?");

/***/ }),

/***/ "./src/server/routes.ts":
/*!******************************!*\
  !*** ./src/server/routes.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar pdfReader_1 = __webpack_require__(/*! ./pdfReader */ \"./src/server/pdfReader.ts\");\nvar fs_1 = __webpack_require__(/*! fs */ \"fs\");\nvar router = express.Router();\nrouter.get(\"/api/fake-data\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var result, data;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, fs_1.promises.readFile(\"/home/ben/Documents/11-2020.json\", \"utf-8\")];\n            case 1:\n                result = _a.sent();\n                console.log(result);\n                data = JSON.parse(result);\n                res.json(data);\n                return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get(\"/api/import\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var data;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, pdfReader_1.default(\"/home/ben/Downloads/10306_201130092911_4739580054117.PDF\")];\n            case 1:\n                data = _a.sent();\n                res.send(data);\n                return [2 /*return*/];\n        }\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes.ts\");\nvar app = express();\napp.use(express.static(\"public\"));\napp.use(routes_1.default);\nvar port = process.env.PORT || 3000;\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "pdf-parse":
/*!****************************!*\
  !*** external "pdf-parse" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"pdf-parse\");\n\n//# sourceURL=webpack:///external_%22pdf-parse%22?");

/***/ })

/******/ });