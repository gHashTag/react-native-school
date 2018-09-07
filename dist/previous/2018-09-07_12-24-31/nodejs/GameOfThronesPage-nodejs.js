module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/GameOfThronesPage/GameOfThronesPage.config.js":
/*!*************************************************************!*\
  !*** ./pages/GameOfThronesPage/GameOfThronesPage.config.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../views/Header */ "./views/Header/index.js");
/* harmony import */ var _views_CharacterList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/CharacterList */ "./pages/GameOfThronesPage/views/CharacterList.js");
/* harmony import */ var _getJson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getJson */ "./pages/GameOfThronesPage/getJson.js");







// We load the list of characters from a remote server.
const getInitialProps = async () => {
    const url = 'https://cors.io/?https://brillout-misc.github.io/game-of-thrones/characters/list.json';
    const characters = await Object(_getJson__WEBPACK_IMPORTED_MODULE_3__["default"])(url);
    return { characters };
};

// Our loaded list is then available at `props.characters`.
const GameOfThronesView = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_views_CharacterList__WEBPACK_IMPORTED_MODULE_2__["default"], { characters: props.characters })
);

/* harmony default export */ __webpack_exports__["default"] = ({
    route: '/game-of-thrones',
    getInitialProps,
    view: GameOfThronesView,

    // We don't need to render the page in the browser
    // since it doesn't contain any interactive views
    doNotRenderInBrowser: true
});

/***/ }),

/***/ "./pages/GameOfThronesPage/getJson.js":
/*!********************************************!*\
  !*** ./pages/GameOfThronesPage/getJson.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brillout_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @brillout/fetch */ "@brillout/fetch");
/* harmony import */ var _brillout_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_brillout_fetch__WEBPACK_IMPORTED_MODULE_0__);




async function getJson(url) {
    const characters = await _brillout_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(response => response.json()).catch(err => {
        if (err.code === 'EAI_AGAIN') {
            return null;
        }
        console.error(url);
        throw err;
    });
    return characters;
}

/* harmony default export */ __webpack_exports__["default"] = (getJson);

/***/ }),

/***/ "./pages/GameOfThronesPage/views/CharacterList.js":
/*!********************************************************!*\
  !*** ./pages/GameOfThronesPage/views/CharacterList.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);




const CharacterList = ({ characters }) => {
    const content = characters === null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        null,
        'You are offline. Can\'t retrieve list of characters.'
    ) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        null,
        'List of characters loaded from remote server.',
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'ul',
            null,
            characters.map(character => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'li',
                { key: character.id },
                character.name
            ))
        )
    );
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        { style: { margin: 'auto', maxWidth: 500 } },
        content
    );
};

/* harmony default export */ __webpack_exports__["default"] = (CharacterList);

/***/ }),

/***/ "./views/Header/Header.css":
/*!*********************************!*\
  !*** ./views/Header/Header.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./views/Header/Header.js":
/*!********************************!*\
  !*** ./views/Header/Header.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.css */ "./views/Header/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.svg */ "./views/Header/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_2__);






const Header = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { className: 'header' },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'a',
        { href: '/' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', { src: _logo_svg__WEBPACK_IMPORTED_MODULE_2___default.a, className: 'logo' }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'span',
            null,
            'MyApp'
        )
    )
);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./views/Header/index.js":
/*!*******************************!*\
  !*** ./views/Header/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./views/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),

/***/ "./views/Header/logo.svg":
/*!*******************************!*\
  !*** ./views/Header/logo.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.hash_a58c73cea39efb53701a30522cd1d6a0.svg";

/***/ }),

/***/ 1:
/*!*******************************************************************!*\
  !*** multi ./pages/GameOfThronesPage/GameOfThronesPage.config.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/xyz/react-native-school/pages/GameOfThronesPage/GameOfThronesPage.config.js */"./pages/GameOfThronesPage/GameOfThronesPage.config.js");


/***/ }),

/***/ "@brillout/fetch":
/*!**********************************!*\
  !*** external "@brillout/fetch" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@brillout/fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=GameOfThronesPage-nodejs.js.map