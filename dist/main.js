/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/animation.js":
      /*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board-logic */ "./src/board-logic.js");\n/* harmony import */ var _get_data_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-data-cell */ "./src/get-data-cell.js");\n/* harmony import */ var _append_new_knight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./append-new-knight */ "./src/append-new-knight.js");\n\n\n\n\nlet animatePath = (path) => {\n  let knight = document.querySelector(".knight");\n  if (_board_logic__WEBPACK_IMPORTED_MODULE_0__["default"].endingX === null || _board_logic__WEBPACK_IMPORTED_MODULE_0__["default"].startingX === null) return;\n  let timeCount = 0;\n  let totalX = 0;\n  let totalY = 0;\n  let newCell;\n  let appendKnight = (cell, timeCount) => {\n    setTimeout(() => {\n      (0,_append_new_knight__WEBPACK_IMPORTED_MODULE_2__["default"])(cell);\n    }, timeCount);\n  };\n\n  let animate = (timeCount, totalX, totalY, cell, i) => {\n    setTimeout(() => {\n      knight.style.transform = `translateY(${totalX}px) translateX(${totalY}px)`;\n      if (cell) {\n        cell.style.backgroundColor = "rgb(0, 91, 0)";\n        cell.textContent = i + 1;\n      }\n    }, timeCount);\n  };\n\n  for (let i = 0; i < path.length - 1; i++) {\n    console.log("Path :", path[i + 1][0], path[i + 1][1]);\n    let animateY =\n      path[i][0] > path[i + 1][0]\n        ? -(path[i][0] - path[i + 1][0]) * 90\n        : Math.abs((path[i + 1][0] - path[i][0]) * 90);\n    totalX += animateY;\n    animate(timeCount, totalX, totalY);\n    timeCount += 301;\n\n    let animateX =\n      path[i][1] > path[i + 1][1]\n        ? -Math.abs((path[i][1] - path[i + 1][1]) * 90)\n        : (path[i + 1][1] - path[i][1]) * 90;\n    totalY += animateX;\n    newCell = (0,_get_data_cell__WEBPACK_IMPORTED_MODULE_1__["default"])(path[i + 1][0], path[i + 1][1]);\n    animate(timeCount, totalX, totalY, newCell, i);\n    timeCount += 301;\n  }\n\n  let newStarting = (0,_get_data_cell__WEBPACK_IMPORTED_MODULE_1__["default"])(_board_logic__WEBPACK_IMPORTED_MODULE_0__["default"].startingX, _board_logic__WEBPACK_IMPORTED_MODULE_0__["default"].startingY);\n  appendKnight(newStarting, timeCount);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animatePath);\n\n\n//# sourceURL=webpack://knight-travails/./src/animation.js?',
        );

        /***/
      },

    /***/ "./src/append-new-knight.js":
      /*!**********************************!*\
  !*** ./src/append-new-knight.js ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _create_knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-knight */ "./src/create-knight.js");\n\n\nlet appendNewKnight = (newCell) => {\n  const knight = document.querySelector(".knight");\n  let oc = knight.parentNode;\n  oc.removeChild(knight);\n  newCell.appendChild((0,_create_knight__WEBPACK_IMPORTED_MODULE_0__["default"])());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendNewKnight);\n\n\n//# sourceURL=webpack://knight-travails/./src/append-new-knight.js?',
        );

        /***/
      },

    /***/ "./src/board-display.js":
      /*!******************************!*\
  !*** ./src/board-display.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board-logic */ "./src/board-logic.js");\n\n\nconst generateBoard = (board = _board_logic__WEBPACK_IMPORTED_MODULE_0__["default"].generate()) => {\n  const boardDisplay = document.querySelector(".board-display");\n  for (let x = 0; x < board.length; x++) {\n    let row = document.createElement("div");\n    for (let y = 0; y < board[x].length; y++) {\n      let cell = document.createElement("div");\n      if (x % 2 === 0)\n        y % 2 === 0\n          ? cell.classList.add("lilac")\n          : cell.classList.add("purple");\n      else\n        y % 2 === 0\n          ? cell.classList.add("purple")\n          : cell.classList.add("lilac");\n\n      cell.dataset.originalColor = cell.classList;\n      cell.classList.add("cell");\n      cell.dataset.row = x;\n      cell.dataset.x = x;\n      cell.dataset.column = y;\n      cell.dataset.y = y;\n\n      row.appendChild(cell);\n    }\n    row.classList.add("row");\n    boardDisplay.appendChild(row);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateBoard);\n\n\n//# sourceURL=webpack://knight-travails/./src/board-display.js?',
        );

        /***/
      },

    /***/ "./src/board-logic.js":
      /*!****************************!*\
  !*** ./src/board-logic.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_data_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-data-cell */ "./src/get-data-cell.js");\n\n\nconst Board = {\n  startingX: null,\n  startingY: null,\n  endingX: null,\n  endingY: null,\n  possibleX: [2, 1, -1, -2, -2, -1, 1, 2],\n  possibleY: [1, 2, 2, 1, -1, -2, -2, -1],\n  board: {},\n  movesQueue: [],\n  previous: [...Array(8)].map(() => Array(8).fill(0)),\n  generate() {\n    return [...Array(8)].map(() => Array(8).fill(""));\n  },\n  getStartingPoint(cell) {\n    this.startingX = parseInt(cell.dataset.x);\n    this.startingY = parseInt(cell.dataset.y);\n    this.movesQueue = [];\n    this.movesQueue.push([this.startingX, this.startingY]);\n    this.board[JSON.stringify([this.startingX, this.startingY])] = 1;\n  },\n  getEndingPoint(cell) {\n    this.endingX = parseInt(cell.dataset.x);\n    this.endingY = parseInt(cell.dataset.y);\n  },\n  checkValidEnd(cell) {\n    if (typeof cell.dataset.x === "undefined") return false;\n    return true;\n  },\n  getPossibleMoves(x, y, possibleMoves = []) {\n    for (let i = 0; i < 8; i++) {\n      let newX = x + this.possibleX[i];\n      let newY = y + this.possibleY[i];\n      if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {\n        possibleMoves.push([newX, newY]);\n      }\n    }\n    return possibleMoves;\n  },\n  findPath(queue = this.movesQueue) {\n    if (this.endingX === null || this.startingX === null) return;\n    while (queue.length) {\n      const location = queue.shift();\n      if (location[0] === this.endingX && location[1] === this.endingY) break;\n      const moves = this.getPossibleMoves(location[0], location[1]);\n      moves.forEach((move) => {\n        if (this.board[JSON.stringify(move)]) return;\n        queue.push(move);\n        this.board[JSON.stringify(move)] = 1;\n        this.previous[move[0]][move[1]] = [location[0], location[1]];\n      });\n    }\n    let path = [];\n    let currentLocation = [this.endingX, this.endingY];\n    while (\n      currentLocation[0] !== this.startingX ||\n      currentLocation[1] !== this.startingY\n    ) {\n      path.unshift(currentLocation);\n      currentLocation = this.previous[currentLocation[0]][currentLocation[1]];\n    }\n    path.unshift([this.startingX, this.startingY]);\n\n    this.getStartingPoint(\n      (0,_get_data_cell__WEBPACK_IMPORTED_MODULE_0__["default"])(path[path.length - 1][0], path[path.length - 1][1]),\n    );\n    return path;\n  },\n  resetBoard() {\n    this.startingX = null;\n    this.startingY = null;\n    this.endingX = null;\n    this.endingY = null;\n    this.board = {};\n    this.movesQueue = [];\n    this.previous = [...Array(8)].map(() => Array(8).fill(0));\n  },\n  chainReset() {\n    this.previous = [...Array(8)].map(() => Array(8).fill(0));\n    this.board = {};\n  },\n  resetEnd() {\n    this.endingX = null;\n    this.endingY = null;\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n\n//# sourceURL=webpack://knight-travails/./src/board-logic.js?',
        );

        /***/
      },

    /***/ "./src/clear-board.js":
      /*!****************************!*\
  !*** ./src/clear-board.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board-logic */ "./src/board-logic.js");\n/* harmony import */ var _remove_knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-knight */ "./src/remove-knight.js");\n\n\n\nlet clearBoard = () => {\n  let boardCells = document.querySelectorAll(".cell");\n  console.log("clearBoard triggered");\n  (0,_remove_knight__WEBPACK_IMPORTED_MODULE_1__["default"])();\n  _board_logic__WEBPACK_IMPORTED_MODULE_0__["default"].resetBoard();\n  boardCells.forEach((cell) => {\n    cell.classList.contains("lilac")\n      ? (cell.style.backgroundColor = "rgb(193, 182, 217)")\n      : (cell.style.backgroundColor = "rgb(81, 17, 67)");\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearBoard);\n\n\n//# sourceURL=webpack://knight-travails/./src/clear-board.js?',
        );

        /***/
      },

    /***/ "./src/create-knight.js":
      /*!******************************!*\
  !*** ./src/create-knight.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _knight_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight.svg */ "./src/knight.svg");\n\n\nfunction createKnight() {\n  let knight = new Image();\n  knight.src = _knight_svg__WEBPACK_IMPORTED_MODULE_0__;\n  knight.classList.add("knight");\n  return knight;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createKnight);\n\n\n//# sourceURL=webpack://knight-travails/./src/create-knight.js?',
        );

        /***/
      },

    /***/ "./src/get-data-cell.js":
      /*!******************************!*\
  !*** ./src/get-data-cell.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet dataCell = (x, y) => {\n  return document.querySelector(`[data-x="${x}"][data-y="${y}"]`);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataCell);\n\n\n//# sourceURL=webpack://knight-travails/./src/get-data-cell.js?',
        );

        /***/
      },

    /***/ "./src/handle-click.js":
      /*!*****************************!*\
  !*** ./src/handle-click.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board-logic */ "./src/board-logic.js");\n/* harmony import */ var _get_data_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-data-cell */ "./src/get-data-cell.js");\n\n\n\nlet handleClick = (e) => {\n  let boardCells = document.querySelectorAll(".cell");\n  if (_board_logic__WEBPACK_IMPORTED_MODULE_0__["default"].checkValidEnd(e.target)) {\n    _board_logic__WEBPACK_IMPORTED_MODULE_0__["default"].getEndingPoint(e.target);\n    let endCell = (0,_get_data_cell__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target.dataset.x, e.target.dataset.y);\n    endCell.style.backgroundColor = "rgb(180, 224, 180)";\n    boardCells.forEach((cell) => {\n      cell.removeEventListener("click", handleClick);\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleClick);\n\n\n//# sourceURL=webpack://knight-travails/./src/handle-click.js?',
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();\n\n\n//# sourceURL=webpack://knight-travails/./src/index.js?',
        );

        /***/
      },

    /***/ "./src/place-knight.js":
      /*!*****************************!*\
  !*** ./src/place-knight.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clear_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear-board */ "./src/clear-board.js");\n/* harmony import */ var _user_placed_knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-placed-knight */ "./src/user-placed-knight.js");\n\n\n\nlet placeKnight = () => {\n  let boardCells = document.querySelectorAll(".cell");\n  (0,_clear_board__WEBPACK_IMPORTED_MODULE_0__["default"])();\n  boardCells.forEach((cell) => {\n    cell.addEventListener("click", _user_placed_knight__WEBPACK_IMPORTED_MODULE_1__["default"]);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placeKnight);\n\n\n//# sourceURL=webpack://knight-travails/./src/place-knight.js?',
        );

        /***/
      },

    /***/ "./src/randomly-place-knight.js":
      /*!**************************************!*\
  !*** ./src/randomly-place-knight.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board-logic */ "./src/board-logic.js");\n/* harmony import */ var _get_data_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-data-cell */ "./src/get-data-cell.js");\n/* harmony import */ var _remove_knight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-knight */ "./src/remove-knight.js");\n/* harmony import */ var _create_knight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-knight */ "./src/create-knight.js");\n/* harmony import */ var _clear_board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clear-board */ "./src/clear-board.js");\n\n\n\n\n\n\nconst randomlyPlaceKnight = (\n  x = Math.floor(Math.random() * 8),\n  y = Math.floor(Math.random() * 8),\n) => {\n  (0,_remove_knight__WEBPACK_IMPORTED_MODULE_2__["default"])();\n  (0,_clear_board__WEBPACK_IMPORTED_MODULE_4__["default"])();\n  let randomCell = (0,_get_data_cell__WEBPACK_IMPORTED_MODULE_1__["default"])(x, y);\n  randomCell.appendChild((0,_create_knight__WEBPACK_IMPORTED_MODULE_3__["default"])());\n  randomCell.style.backgroundColor = "rgb(0, 91, 0)";\n  _board_logic__WEBPACK_IMPORTED_MODULE_0__["default"].getStartingPoint(randomCell);\n  _board_logic__WEBPACK_IMPORTED_MODULE_0__["default"].getPossibleMoves(_board_logic__WEBPACK_IMPORTED_MODULE_0__["default"].startingX, _board_logic__WEBPACK_IMPORTED_MODULE_0__["default"].startingY);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomlyPlaceKnight);\n\n\n//# sourceURL=webpack://knight-travails/./src/randomly-place-knight.js?',
        );

        /***/
      },

    /***/ "./src/remove-knight.js":
      /*!******************************!*\
  !*** ./src/remove-knight.js ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board-logic */ "./src/board-logic.js");\n\n\nconst removeKnight = () => {\n  let boardCells = document.querySelectorAll(".cell");\n  const knight = document.querySelector(".knight");\n  console.log("removeKnight triggered");\n  _board_logic__WEBPACK_IMPORTED_MODULE_0__["default"].resetBoard();\n  boardCells.forEach((cell) => {\n    if (cell.style.backgroundColor === "rgb(0, 91, 0)") {\n      cell.textContent = "";\n      cell.dataset.originalColor === "lilac"\n        ? (cell.style.backgroundColor = cell.dataset.originalColor)\n        : (cell.style.backgroundColor = "rgb(81, 17, 67)");\n    }\n    if (cell.hasChildNodes()) cell.removeChild(knight);\n  });\n  if (knight) {\n    knight.style.transform = "";\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeKnight);\n\n\n//# sourceURL=webpack://knight-travails/./src/remove-knight.js?',
        );

        /***/
      },

    /***/ "./src/select-ending-cell.js":
      /*!***********************************!*\
  !*** ./src/select-ending-cell.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board-logic */ "./src/board-logic.js");\n/* harmony import */ var _handle_click__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handle-click */ "./src/handle-click.js");\n\n\n\nlet selectEndingCell = () => {\n  let boardCells = document.querySelectorAll(".cell");\n  boardCells.forEach((cell) => {\n    if (cell.style.backgroundColor === "rgb(180, 224, 180)") {\n      _board_logic__WEBPACK_IMPORTED_MODULE_0__["default"].resetEnd();\n      cell.classList.contains("lilac")\n        ? (cell.style.backgroundColor = "lilac")\n        : (cell.style.backgroundColor = "purple");\n    }\n    cell.addEventListener("click", _handle_click__WEBPACK_IMPORTED_MODULE_1__["default"]);\n    console.log("selectEndingCell triggered");\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectEndingCell);\n\n\n//# sourceURL=webpack://knight-travails/./src/select-ending-cell.js?',
        );

        /***/
      },

    /***/ "./src/user-placed-knight.js":
      /*!***********************************!*\
  !*** ./src/user-placed-knight.js ***!
  \***********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _remove_knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-knight */ "./src/remove-knight.js");\n/* harmony import */ var _create_knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-knight */ "./src/create-knight.js");\n/* harmony import */ var _board_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board-logic */ "./src/board-logic.js");\n/* harmony import */ var _get_data_cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-data-cell */ "./src/get-data-cell.js");\n\n\n\n\n\nlet userPlaceKnight = (e) => {\n  let boardCells = document.querySelectorAll(".cell");\n  (0,_remove_knight__WEBPACK_IMPORTED_MODULE_0__["default"])();\n  console.log("userPlaceKnight");\n  let parent = (0,_get_data_cell__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target.dataset.x, e.target.dataset.y);\n  parent.appendChild((0,_create_knight__WEBPACK_IMPORTED_MODULE_1__["default"])());\n  parent.style.backgroundColor = "rgb(0, 91, 0)";\n  _board_logic__WEBPACK_IMPORTED_MODULE_2__["default"].getStartingPoint(parent);\n  _board_logic__WEBPACK_IMPORTED_MODULE_2__["default"].getPossibleMoves(_board_logic__WEBPACK_IMPORTED_MODULE_2__["default"].startingX, _board_logic__WEBPACK_IMPORTED_MODULE_2__["default"].startingY);\n  boardCells.forEach((cell) => {\n    cell.removeEventListener("click", userPlaceKnight);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userPlaceKnight);\n\n\n//# sourceURL=webpack://knight-travails/./src/user-placed-knight.js?',
        );

        /***/
      },

    /***/ "./src/website.js":
      /*!************************!*\
  !*** ./src/website.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board-display */ "./src/board-display.js");\n/* harmony import */ var _remove_knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-knight */ "./src/remove-knight.js");\n/* harmony import */ var _randomly_place_knight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./randomly-place-knight */ "./src/randomly-place-knight.js");\n/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation */ "./src/animation.js");\n/* harmony import */ var _clear_board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clear-board */ "./src/clear-board.js");\n/* harmony import */ var _place_knight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place-knight */ "./src/place-knight.js");\n/* harmony import */ var _select_ending_cell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select-ending-cell */ "./src/select-ending-cell.js");\n/* harmony import */ var _board_logic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board-logic */ "./src/board-logic.js");\n\n\n\n\n\n\n\n\n\nfunction initialize() {\n  const placeKnightBtn = document.querySelector(".place-knight-btn");\n  const clearBoardBtn = document.querySelector(".clear-board-btn");\n  const randomlyPlaceBtn = document.querySelector(".randomly-place-btn");\n  const selectEndingBtn = document.querySelector(".select-ending-btn");\n  const startBtn = document.querySelector(".start-btn");\n  let handleRandom = () => {\n    (0,_remove_knight__WEBPACK_IMPORTED_MODULE_1__["default"])();\n    (0,_randomly_place_knight__WEBPACK_IMPORTED_MODULE_2__["default"])();\n  };\n\n  let knightTravails = () => {\n    (0,_animation__WEBPACK_IMPORTED_MODULE_3__["default"])(_board_logic__WEBPACK_IMPORTED_MODULE_7__["default"].findPath());\n    _board_logic__WEBPACK_IMPORTED_MODULE_7__["default"].chainReset();\n  };\n  (0,_board_display__WEBPACK_IMPORTED_MODULE_0__["default"])();\n  clearBoardBtn.addEventListener("click", _clear_board__WEBPACK_IMPORTED_MODULE_4__["default"]);\n  placeKnightBtn.addEventListener("click", _place_knight__WEBPACK_IMPORTED_MODULE_5__["default"]);\n  randomlyPlaceBtn.addEventListener("click", handleRandom);\n  selectEndingBtn.addEventListener("click", _select_ending_cell__WEBPACK_IMPORTED_MODULE_6__["default"]);\n  startBtn.addEventListener("click", knightTravails);\n  console.log("initialized");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);\n\n\n//# sourceURL=webpack://knight-travails/./src/website.js?',
        );

        /***/
      },

    /***/ "./src/knight.svg":
      /*!************************!*\
  !*** ./src/knight.svg ***!
  \************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "7a21f1583bc57f5d103d.svg";\n\n//# sourceURL=webpack://knight-travails/./src/knight.svg?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
