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
