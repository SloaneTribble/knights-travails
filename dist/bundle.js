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
/* harmony export */   "findPath": () => (/* binding */ findPath),
/* harmony export */   "knight": () => (/* binding */ knight),
/* harmony export */   "possibleMoves": () => (/* binding */ possibleMoves),
/* harmony export */   "removeVisited": () => (/* binding */ removeVisited)
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

const findPath = function generateAllPossiblePaths(
  knightNode,
  dest,
  visited = []
) {
  let visitedLocations = visited;
  let coord = knightNode.coord;
  let currentPossibilities = possibleMoves(coord);
  visitedLocations.push(coord);

  currentPossibilities = removeVisited(currentPossibilities, visitedLocations);

  if (
    currentPossibilities.containsArray(dest) ||
    visitedLocations.containsArray(dest)
  ) {
    visitedLocations.push(dest);
    console.log(visitedLocations);
    return;
  } else {
    // For each possible coordinate, create a node and connect it to current knightNode

    for (const move in currentPossibilities) {
      let currentMove = currentPossibilities[move];
      let propName = `move${move}`;
      if (!propName.includes("Array") && !propName.includes("coord"))
        knightNode[`${propName}`] = knight(currentMove);
    }

    // For each child node of the current knightNode, call findPath with updated visited locations

    for (const move in knightNode) {
      if (knightNode[move].coord) {
        findPath(knightNode[move], dest, visitedLocations);
      }
    }
  }
};

const removeVisited = function compareTwoNestedArrays(
  possibleCoords,
  visitedCoords
) {
  let filtered = [];

  for (const coord of possibleCoords) {
    if (!visitedCoords.containsArray(coord)) {
      filtered.push(coord);
    }
  }

  return filtered;
};

Array.prototype.containsArray = function (val) {
  let hash = {};
  for (let i = 0; i < this.length; i++) {
    hash[this[i]] = i;
  }
  return hash.hasOwnProperty(val);
};

let knightMan = knight([0, 0]);

console.log(findPath(knightMan, [4, 3]));



/******/ })()
;
//# sourceMappingURL=bundle.js.map