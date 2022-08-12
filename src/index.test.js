import { possibleMoves, knight, findPath } from "./index";

test("possibleMoves will not generate out-of-bounds moves", () => {
  const moves = possibleMoves([0, 0]);

  expect(moves).toStrictEqual([
    [1, 2],
    [2, 1],
  ]);
});

test("A generated knight will have a property representing its possible moves", () => {
  const knightMan = knight([0, 0]);

  expect(knightMan.move0).toStrictEqual([1,2]);
  expect(knightMan.move1).toStrictEqual([2,1]);

});

test("findPath will correctly detect a path of length 1", () => {
  const knightMan = knight([0, 0]);

  expect(findPath(knightMan.coord, [1, 2])).toBe("Path found!");
});
