import { missingNumber } from "@/lib/challenges/missing-number";

describe('missingNumber', () => {
  it('encontra o número faltando em um array de 0 a n', () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });

  it('encontra o número faltando para n=2', () => {
    expect(missingNumber([0, 1])).toBe(2);
  });

  it('encontra o número faltando em um array maior', () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });

  it('funciona com array de um elemento [0]', () => {
    expect(missingNumber([0])).toBe(1);
  });

  it('funciona com array de um elemento [1]', () => {
    expect(missingNumber([1])).toBe(0);
  });
});
