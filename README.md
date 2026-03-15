# IA para Desenvolvimento + Revisão de Estruturas de Dados

**Unidade 1** - Atividade Prática de Code Interview

## Sobre o Projeto

Este repositório contém a resolução de **12 desafios de programação** (Code Interview) focados em Estruturas de Dados I. O objetivo central desta atividade é duplo:

1.  **Revisão Técnica:** Reforçar conhecimentos em Arrays, Listas Encadeadas e Pilhas.
2.  **Uso de IA:** Utilizar ferramentas de Inteligência Artificial como parte obrigatória do fluxo de desenvolvimento (planejamento, geração de código, revisão e testes).

O projeto foi desenvolvido inteiramente em **TypeScript** e conta com um **menu interativo (CLI)** para facilitar a execução e correção dos desafios.

## Equipe (PAC)

- Mateus Finder ([@findermateus](https://github.com/findermateus))
- Rafael Pavesi dos Passos ([@cursebearer](https://github.com/cursebearer))
- Lucas Warmling ([@eoCoRe](https://github.com/eoCoRe))
- Felipe Gesser ([@felipeogesser](https://github.com/felipeogesser))

## Adicionando um novo desafio

### 1. Crie o arquivo da implementação

Crie um arquivo em `lib/challenges/` com o nome do desafio em kebab-case exportando a função principal:
```ts
// lib/challenges/two-sum.ts
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (map.has(comp)) return [map.get(comp)!, i];
    map.set(nums[i], i);
  }
  return [];
}
```

### 2. Registre o desafio em `lib/challenges.ts`

Importe a função e adicione uma entrada no array da categoria correspondente (`arrayChallenges`, `linkedListChallenges` ou `stackChallenges`):
```ts
import { twoSum } from "@/lib/challenges/two-sum";

const arrayChallenges: Challenge[] = [
  {
    id: "two-sum",
    number: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays",
    url: "https://leetcode.com/problems/two-sum/",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    run: async () => {
      const payload = { nums: [2, 7, 11, 15], target: 9 };
      const start = performance.now();
      const result = twoSum(payload.nums, payload.target);
      return { payload, result, timeMs: +(performance.now() - start).toFixed(4) };
    },
  },
  // ...
];
```

O desafio aparece automaticamente na interface na aba da categoria escolhida — nenhuma outra alteração é necessária.