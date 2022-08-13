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

  if (currentPossibilities.containsArray(dest)) {
    console.log(visitedLocations);
    return visitedLocations;
  }
  // Else, remove visited locations from possible next moves

  currentPossibilities = removeVisited(currentPossibilities, visitedLocations);

  // For each possible coordinate, create a node and connect it to current knightNode node

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

console.log(findPath(knightMan, [3, 2]));

export { possibleMoves, knight, findPath, removeVisited };
