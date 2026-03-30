import { productExceptSelf } from "@/lib/challenges/product-of-array-except-self";

describe('productExceptSelf', () => {
  it('calcula o produto de todos os elementos exceto o atual', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it('lida com zeros no array', () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  });

  it('lida com múltiplos zeros', () => {
    expect(productExceptSelf([0, 0])).toEqual([0, 0]);
  });
});
