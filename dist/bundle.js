/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "knight": () => (/* binding */ knight),
/* harmony export */   "possibleMoves": () => (/* binding */ possibleMoves)
/* harmony export */ });
const gameBoard = function generateBoardCoords() {
  let coords = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      coords.push([i, j]);
    }
  }

  return coords;
};

// Attempt to treat knight as a node which stores its current location and possible moves

const knight = function knightNode(coord = null) {
  const knight = {};

  knight.coord = coord;

  knight.map = [];

  // Maximum eight possible moves for any given coordinate, can be assigned on the spot

  return knight;
};

// Given a coordinate, generate a list of the immediate possible moves (up to 8)

const possibleMoves = function generateImmediatePossibilities(coord) {
  const x = coord[0];
  const y = coord[1];

  let possibleMoves = [
    [x - 2, y + 1],
    [x - 1, y + 2],
    [x + 1, y + 2],
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x + 1, y - 2],
    [x - 1, y - 2],
    [x - 2, y - 1],
  ];

  let acceptedMoves = [];

  for (let i = 0; i < 8; i++) {
    let current = possibleMoves[i];
    let x = current[0];
    let y = current[1];

    if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
      acceptedMoves.push(current);
    }
  }

  return acceptedMoves;
};

const knightMoves = function findPath(knightNode, destination) {
  let coord = knightNode.coord;
  knightNode.map.push(coord);
  let queue = [];
  let found = false;

  if (coord[0] === destination[0] && coord[1] === destination[1]) {
    found = true;
    return;
  } else {
    let possibleNextMoves = possibleMoves(coord);

    for (let move in possibleNextMoves) {
      let newKnight = knight(possibleNextMoves[move]);
      let prevMap = knightNode.map;
      for (coord of prevMap) {
        newKnight.map.push(coord);
      }
      knightNode[`node${move}`] = newKnight;
      queue.push(newKnight);
    }
    while (found === false) {
      let currentNode = queue.shift();
      coord = currentNode.coord;
      currentNode.map.push(coord);

      if (coord[0] === destination[0] && coord[1] === destination[1]) {
        found = true;
        console.log(currentNode.map);
      } else {
        possibleNextMoves = possibleMoves(coord);

        for (let move in possibleNextMoves) {
          let newKnight = knight(possibleNextMoves[move]);
          let prevMap = currentNode.map;
          for (coord of prevMap) {
            newKnight.map.push(coord);
          }
          currentNode[`node${move}`] = newKnight;
          queue.push(newKnight);
        }
      }
    }
  }
};

const newKnight = knight([0, 0]);

knightMoves(newKnight, [1, 0]);



/******/ })()
;
//# sourceMappingURL=bundle.js.map