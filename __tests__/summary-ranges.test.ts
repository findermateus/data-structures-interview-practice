import { summaryRanges } from "@/lib/challenges/summary-ranges";

describe('summaryRanges', () => {
  it('agrupa números consecutivos em intervalos', () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(["0->2", "4->5", "7"]);
  });

  it('funciona com números negativos e intervalos de um elemento', () => {
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual(["0", "2->4", "6", "8->9"]);
  });

  it('retorna array vazio para input vazio', () => {
    expect(summaryRanges([])).toEqual([]);
  });

  it('funciona para um único elemento', () => {
    expect(summaryRanges([-1])).toEqual(["-1"]);
  });
});
