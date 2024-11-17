import { sum } from "../lib/sum";
import { expect, test } from "vitest";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, 5.5)).toBe(4.5);
});
