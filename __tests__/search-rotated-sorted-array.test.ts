import { searchRotatedSortedArray } from "@/lib/challenges/search-rotated-sorted-array";

describe('searchRotatedSortedArray', () => {
  it('encontra o alvo em um array rotacionado', () => {
    expect(searchRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  it('retorna -1 se o alvo não existir', () => {
    expect(searchRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  it('retorna -1 para array vazio', () => {
    expect(searchRotatedSortedArray([], 5)).toBe(-1);
  });

  it('funciona com array não rotacionado', () => {
    expect(searchRotatedSortedArray([1, 3, 5], 5)).toBe(2);
  });
});
