import { baseballGame } from "@/lib/challenges/baseball-game";

describe('baseballGame', () => {
  it('calcula o placar corretamente para o exemplo 1', () => {
    expect(baseballGame(["5", "2", "C", "D", "+"])).toBe(30);
  });

  it('calcula o placar corretamente para o exemplo 2', () => {
    expect(baseballGame(["5", "-2", "4", "C", "D", "9", "+", "+"])).toBe(27);
  });

  it('retorna 0 para array vazio', () => {
    expect(baseballGame([])).toBe(0);
  });

  it('lida com apenas um número', () => {
    expect(baseballGame(["1"])).toBe(1);
  });
});
