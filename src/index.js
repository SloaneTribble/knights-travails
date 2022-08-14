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

const newKnight = knight([0, 0]);

knightMoves(newKnight, [7, 7]);

export { possibleMoves, knight };
