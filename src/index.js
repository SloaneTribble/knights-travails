const gameBoard = function generateBoardCoords() {
  let coords = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      coords.push([i, j]);
    }
  }

  return coords;
};

// Attempt to treat knight as a node which stores its current location

const knight = function knightNode(coord = null) {
  const knight = {};

  knight.coord = coord;

  // Maximum eight possible moves for any given coordinate

  knight.tl1 = null;
  knight.tl2 = null;
  knight.tr1 = null;
  knight.tr2 = null;
  knight.br1 = null;
  knight.br2 = null;
  knight.bl1 = null;
  knight.bl2 = null;
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

export { possibleMoves };
