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

const moveTree = function findPathsToDestination(knightNode, destination) {
  let coord = knightNode.coord;

  if (coord[0] === destination[0] && coord[1] === destination[1]) {
    return;
  } else {
    let nextMoves = possibleMoves(coord);
    let nodeArray = [];

    for (let move of nextMoves) {
      nodeArray.push(knight(move));
    }

    // For each knight in array, attach to current knight as a node
    for (let i = 0; i < nodeArray.length; i++) {
      let currentNode = nodeArray[i];
      let propName = `move${i}`;
      if (!propName.includes("Array") && !propName.includes("coord"))
        knightNode[`${propName}`] = currentNode;
    }

    // For each node attached to current knight, find a path from it to the destination, and attach that path as a subtree

    
  }

  return knightNode;
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

const newKnight = knight([0, 0]);

const newTree = moveTree(newKnight, [2, 4]);

console.log(newTree);

export { possibleMoves, knight, moveTree, removeVisited };
