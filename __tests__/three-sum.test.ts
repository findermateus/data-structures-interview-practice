import { threeSum } from "@/lib/challenges/three-sum";

describe('threeSum', () => {
  it('retorna triplas que somam zero', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
  });

  it('retorna array vazio quando não há triplas', () => {
    expect(threeSum([1, 2, 3])).toEqual([]);
  });

  it('retorna array vazio quando input tem menos de 3 elementos', () => {
    expect(threeSum([0, 1])).toEqual([]);
  });

  it('retorna [[0,0,0]] quando todos os elementos são zero', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  it('não retorna triplas duplicadas', () => {
    const result = threeSum([-2, 0, 0, 2, 2]);
    expect(result).toEqual([[-2, 0, 2]]);
  });

  it('lida com array vazio', () => {
    expect(threeSum([])).toEqual([]);
  });

  it('lida com múltiplos zeros', () => {
    expect(threeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  it('lida com números negativos', () => {
    expect(threeSum([-4, -1, -1, 0, 1, 2])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
  });
});