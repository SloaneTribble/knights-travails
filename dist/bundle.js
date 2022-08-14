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
/**
 * The goal of this program is to determine the shortest path for a knight to travel from one spot to another on a chess board:

Given a knight node:
  1. Compare that node's coordinates to the destination coordinates
  2. If the coordinates match, a path has been found, and the program logs the coordinates which have been visited
  3. If the coordinates don't match, determine the next possible moves
  4. Use each possible move to generate a new node, and assign each node as a child of the given knight node
  5. Push each new node to the queue
  6. Dequeue a node, repeat steps 1-5
 */

// Treat knight as a node which stores its current location and possible moves

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

  const validCoord = valid(coord);
  const validDest = valid(destination);

  if (!validCoord || !validDest) {
    return `Invalid input`;
  }

  knightNode.map.push(coord);
  let queue = [];
  let found = false;

  if (coord[0] === destination[0] && coord[1] === destination[1]) {
    found = true;
    return;
  } else {
    generateNextSpots(knightNode, coord, queue);

    while (found === false) {
      let currentNode = queue.shift();
      coord = currentNode.coord;
      currentNode.map.push(coord);

      if (coord[0] === destination[0] && coord[1] === destination[1]) {
        found = true;
        console.log(currentNode.map);
      } else {
        generateNextSpots(currentNode, coord, queue);
      }
    }
  }
};

const generateNextSpots = function findNewMovesAndMakeNodes(
  currentNode,
  coord,
  queue
) {
  let possibleNextMoves = possibleMoves(coord);

  for (let move in possibleNextMoves) {
    let newKnight = knight(possibleNextMoves[move]);
    let prevMap = currentNode.map;
    for (coord of prevMap) {
      newKnight.map.push(coord);
    }
    currentNode[`node${move}`] = newKnight;
    queue.push(newKnight);
  }
};

const valid = function checkValidity(coord) {
  for (let i of coord) {
    if (i < 0 || i > 7) {
      console.log("Invalid input");
      return false;
    }
  }
  return true;
};

const newKnight = knight([7, 7]);

knightMoves(newKnight, [7, 6]);



/******/ })()
;
//# sourceMappingURL=bundle.js.map