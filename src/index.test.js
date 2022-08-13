import { possibleMoves, knight, findPath, removeVisited } from "./index";

test("possibleMoves will not generate out-of-bounds moves", () => {
  const moves = possibleMoves([0, 0]);

  expect(moves).toStrictEqual([
    [1, 2],
    [2, 1],
  ]);
});

test("A generated knight will have a property representing its possible moves", () => {
  const knightMan = knight([0, 0]);

  expect(knightMan.move0).toStrictEqual([1, 2]);
  expect(knightMan.move1).toStrictEqual([2, 1]);
});

test("findPath will correctly detect a path of length 1", () => {
  const knightMan = knight([0, 0]);

  expect(findPath(knightMan, [1, 2])).toBe("Path found!");
});

test("removeVisited will remove correct coordinates from an array", () => {
  let visited = [
    [1, 2],
    [3, 4],
  ];
  let possibleCoords = [
    [0, 0],
    [2, 1],
    [1, 2],
    [3, 4],
  ];

  let filtered = removeVisited(possibleCoords, visited);

  expect(filtered).toStrictEqual([[0,0],[2,1]]);
});
