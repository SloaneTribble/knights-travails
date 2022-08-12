import { possibleMoves } from "./index";

test("possibleMoves will not generate out-of-bounds moves", () => {
  const moves = possibleMoves([0, 0]);

  expect(moves).toStrictEqual([[1,2], [2,1]])
});
