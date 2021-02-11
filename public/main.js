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

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar functions = {\n  rand: function rand(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (functions);\n\n//# sourceURL=webpack://tetoris/./src/js/functions.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/field */ \"./src/js/models/field.js\");\n/* harmony import */ var _models_tetro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/tetro */ \"./src/js/models/tetro.js\");\n/* harmony import */ var _models_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/block */ \"./src/js/models/block.js\");\n\n\n\n\nfunction define(name, value) {\n  Object.defineProperty(window, name, {\n    value: value,\n    writable: false\n  });\n}\n\nObject.defineProperty(window, 'overFlag', {\n  value: false,\n  writable: true\n});\ndefine('CANVAS_W', _models_block__WEBPACK_IMPORTED_MODULE_2__.default.SIZE * _models_field__WEBPACK_IMPORTED_MODULE_0__.default.COLS);\ndefine('CANVAS_H', _models_block__WEBPACK_IMPORTED_MODULE_2__.default.SIZE * _models_field__WEBPACK_IMPORTED_MODULE_0__.default.ROWS);\ndefine('GAME_SPEED', 300);\ndefine('can', document.getElementById('can'));\ndefine('con', can.getContext('2d'));\ncan.width = CANVAS_W;\ncan.height = CANVAS_H;\ncan.style.border = '1px black solid';\nvar field = new _models_field__WEBPACK_IMPORTED_MODULE_0__.default();\nvar tetro = new _models_tetro__WEBPACK_IMPORTED_MODULE_1__.default();\n\nfunction drawAll() {\n  window.con.clearRect(0, 0, CANVAS_W, CANVAS_H);\n  field.draw();\n  tetro.draw();\n}\n\nfunction gameOver() {\n  var s = 'Game Over';\n  con.font = '40px MS ゴシック';\n  var w = con.measureText(s).width;\n  var x = (CANVAS_W - w) / 2;\n  var y = (CANVAS_H - 20) / 2;\n  con.lineWidth = 4;\n  con.strokeText(s, x, y);\n  con.fillStyle = 'white';\n  con.fillText(s, x, y);\n} // ゲーム開始\n\n\nfield.draw();\ntetro.draw();\nsetInterval(function () {\n  if (overFlag) {\n    return;\n  }\n\n  if (tetro.canMove(0, 1, false, field)) {\n    tetro.move(0, 1);\n    drawAll();\n  } else {\n    field.saveTetro(tetro);\n    field.checkField();\n    tetro = new _models_tetro__WEBPACK_IMPORTED_MODULE_1__.default();\n\n    if (!tetro.canMove(0, 0, false, field)) {\n      overFlag = true;\n    }\n\n    if (overFlag) {\n      gameOver();\n    } else {\n      drawAll();\n    }\n  }\n}, GAME_SPEED);\ndocument.addEventListener('keydown', function (e) {\n  if (overFlag) {\n    return;\n  }\n\n  switch (e.code) {\n    case 'ArrowDown':\n      if (tetro.canMove(0, 1, false, field)) {\n        tetro.move(0, 1);\n      }\n\n      ;\n      break;\n\n    case 'ArrowLeft':\n      if (tetro.canMove(-1, 0, false, field)) {\n        tetro.move(-1, 0);\n      }\n\n      ;\n      break;\n\n    case 'ArrowRight':\n      if (tetro.canMove(1, 0, false, field)) {\n        tetro.move(1, 0);\n      }\n\n      ;\n      break;\n\n    case 'Space':\n      if (tetro.canMove(0, 0, true, field)) {\n        tetro.rotate();\n      }\n\n      ;\n      break;\n  }\n});\n\n//# sourceURL=webpack://tetoris/./src/js/main.js?");

/***/ }),

/***/ "./src/js/models/block.js":
/*!********************************!*\
  !*** ./src/js/models/block.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Block = /*#__PURE__*/function () {\n  function Block(x, y, colorIndex) {\n    _classCallCheck(this, Block);\n\n    this.x = x;\n    this.y = y;\n    this.color = Block.COLOR_TYPES[colorIndex];\n  }\n\n  _createClass(Block, [{\n    key: \"draw\",\n    value: function draw() {\n      window.con.fillStyle = this.color;\n      window.con.fillRect(this.x * Block.SIZE, this.y * Block.SIZE, Block.SIZE, Block.SIZE);\n      window.con.strokeStyle = 'black';\n      window.con.strokeRect(this.x * Block.SIZE, this.y * Block.SIZE, Block.SIZE, Block.SIZE);\n    }\n  }], [{\n    key: \"COLOR_TYPES\",\n    get: function get() {\n      return ['', 'red', 'yellow', 'blue', 'green', 'purple'];\n    }\n  }, {\n    key: \"SIZE\",\n    get: function get() {\n      return 30;\n    }\n  }]);\n\n  return Block;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Block);\n\n//# sourceURL=webpack://tetoris/./src/js/models/block.js?");

/***/ }),

/***/ "./src/js/models/field.js":
/*!********************************!*\
  !*** ./src/js/models/field.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ \"./src/js/models/block.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Field = /*#__PURE__*/function () {\n  function Field() {\n    _classCallCheck(this, Field);\n\n    this.data = [];\n\n    for (var y = 0; y < Field.ROWS; y++) {\n      this.data[y] = [];\n\n      for (var x = 0; x < Field.COLS; x++) {\n        this.data[y][x] = 0;\n      }\n    }\n  }\n\n  _createClass(Field, [{\n    key: \"draw\",\n    value: function draw() {\n      this.data.forEach(function (arrayFieldX, y) {\n        arrayFieldX.forEach(function (colorIndex, x) {\n          if (colorIndex) {\n            var block = new _block__WEBPACK_IMPORTED_MODULE_0__.default(x, y, colorIndex);\n            block.draw();\n          }\n        });\n      });\n    }\n  }, {\n    key: \"saveTetro\",\n    value: function saveTetro(tetro) {\n      var _this = this;\n\n      tetro.form.forEach(function (arrayTetroX, y) {\n        arrayTetroX.forEach(function (isBlock, x) {\n          if (isBlock) {\n            var px = tetro.x + x;\n            var py = tetro.y + y;\n            _this.data[py][px] = tetro.colorIndex;\n          }\n        });\n      });\n    } // 揃っているかチェック\n\n  }, {\n    key: \"checkField\",\n    value: function checkField() {\n      var _this2 = this;\n\n      this.data.forEach(function (arrayFieldX, y) {\n        if (arrayFieldX.every(function (colorIndex) {\n          return !!colorIndex;\n        })) {\n          _this2.data.splice(y, 1);\n\n          _this2.data.unshift(new Array(10).fill(0));\n        }\n      });\n    }\n  }], [{\n    key: \"ROWS\",\n    get: function get() {\n      return 20;\n    }\n  }, {\n    key: \"COLS\",\n    get: function get() {\n      return 10;\n    }\n  }]);\n\n  return Field;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Field);\n\n//# sourceURL=webpack://tetoris/./src/js/models/field.js?");

/***/ }),

/***/ "./src/js/models/tetro.js":
/*!********************************!*\
  !*** ./src/js/models/tetro.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ \"./src/js/models/block.js\");\n/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field */ \"./src/js/models/field.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions */ \"./src/js/functions.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Tetro = /*#__PURE__*/function () {\n  function Tetro() {\n    _classCallCheck(this, Tetro);\n\n    this.form = [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]];\n    this.x = (_field__WEBPACK_IMPORTED_MODULE_1__.default.COLS - Tetro.TETRO_SIZE) / 2;\n    this.y = 0;\n    this.colorIndex = _functions__WEBPACK_IMPORTED_MODULE_2__.default.rand(1, 5);\n  }\n\n  _createClass(Tetro, [{\n    key: \"move\",\n    value: function move(mx, my) {\n      this.x += mx;\n      this.y += my;\n    }\n  }, {\n    key: \"rotate\",\n    value: function rotate() {\n      var newForm = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];\n      this.form.forEach(function (arrayTetroX, y) {\n        arrayTetroX.forEach(function (isArray, x) {\n          if (isArray) {\n            newForm[x][Tetro.TETRO_SIZE - 1 - y] = 1;\n          }\n        });\n      });\n      this.form = newForm;\n    }\n  }, {\n    key: \"canMove\",\n    value: function canMove(mx, my, isRotate, field) {\n      var _this = this;\n\n      var flag = true;\n      var oldForm;\n\n      if (isRotate) {\n        oldForm = this.form;\n        this.rotate();\n      }\n\n      this.form.forEach(function (arrayTetroX, y) {\n        arrayTetroX.forEach(function (isBlock, x) {\n          if (isBlock) {\n            var px = _this.x + x + mx;\n            var py = _this.y + y + my;\n\n            if (px < 0 || px >= _field__WEBPACK_IMPORTED_MODULE_1__.default.COLS || py < 0 || py >= _field__WEBPACK_IMPORTED_MODULE_1__.default.ROWS || field.data[py][px]) {\n              flag = false;\n            }\n          }\n        });\n      });\n\n      if (isRotate) {\n        this.form = oldForm;\n      } // 形を元に戻す\n\n\n      return flag;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var _this2 = this;\n\n      this.form.forEach(function (arrayTetroX, y) {\n        arrayTetroX.forEach(function (isBlock, x) {\n          if (isBlock) {\n            var px = _this2.x + x;\n            var py = _this2.y + y;\n            var block = new _block__WEBPACK_IMPORTED_MODULE_0__.default(px, py, _this2.colorIndex);\n            block.draw();\n          }\n        });\n      });\n    }\n  }], [{\n    key: \"TETRO_SIZE\",\n    get: function get() {\n      return 4;\n    }\n  }]);\n\n  return Tetro;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tetro);\n\n//# sourceURL=webpack://tetoris/./src/js/models/tetro.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;