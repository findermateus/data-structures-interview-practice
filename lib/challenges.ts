import { threeSum } from "@/lib/challenges/three-sum";
import { ListNode, reverseBetween } from "./challenges/reverse-between";
import { simplifyPath } from "./challenges/simplify-path";
import { baseballGame } from "@/lib/challenges/baseball-game";
import { insertGreatestCommonDivisors } from "@/lib/challenges/insert-gcd-list";
import { summaryRanges } from "@/lib/challenges/summary-ranges";

export type Difficulty = "Easy" | "Medium" | "Hard";
export type Category = "Arrays" | "Listas Encadeadas" | "Pilhas";

export interface Challenge {
  id: string;
  title: string;
  number: number;
  difficulty: Difficulty;
  category: Category;
  description: string;
  translation: string;
  url: string;
  run: () => Promise<ChallengeResult>;
}

export interface ChallengeResult {
  payload: unknown;
  result: unknown;
  timeMs: number;
}

const arrayChallenges: Challenge[] = [
  {
    id: "three-sum",
    number: 15,
    title: "3Sum",
    difficulty: "Medium",
    category: "Arrays",
    url: "https://leetcode.com/problems/3sum/",
    description:
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.",
    translation:
      "Dado um array de inteiros nums, retorne todos os trios [nums[i], nums[j], nums[k]] tais que i != j, i != k, j != k, e a soma nums[i] + nums[j] + nums[k] seja igual a 0.",
    run: async () => {
      const start = performance.now();
      const payload = [-4, -3, -2, -1, 0, 1, 2, 3, 4, -1, -2, 3, 1, 0, -4, 2, -3, 1, 4, 0];
      const result = threeSum(payload);
      return { payload: payload, result, timeMs: +(performance.now() - start).toFixed(2) };
    },
  },
  {
    id: "summary-ranges",
    number: 228,
    title: "Summary Ranges",
    difficulty: "Easy",
    category: "Arrays",
    url: "https://leetcode.com/problems/summary-ranges/",
    description:
      "Given a sorted unique integer array, return the smallest sorted list of ranges that cover all the numbers in the array exactly.",
    translation:
      "Dado um array de inteiros únicos e ordenados, retorne a menor lista ordenada de intervalos que cubra todos os números do array exatamente.",
    run: async () => {
      const payload = { nums: [0, 1, 2, 4, 5, 7] };
      const start = performance.now();
      const result = summaryRanges(payload.nums);
      return { payload, result, timeMs: +(performance.now() - start).toFixed(2) };
    },
  },
];

const linkedListChallenges: Challenge[] = [
  {
    id: "reverse-between",
    number: 92,
    title: "Reverse Between",
    difficulty: "Medium",
    category: "Listas Encadeadas",
    url: "https://leetcode.com/problems/reverse-linked-list-ii/",
    description:
      "Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.",
    translation:
      "Dado o nó inicial (head) de uma lista encadeada simples e dois inteiros left e right onde left <= right, reverta os nós da lista da posição left até a posição right e retorne a lista resultante.",
    run: async () => {
      const start = performance.now();
      const toList = (arr: number[]): ListNode | null => {
        const dummy = new ListNode(0);
        let curr = dummy;
        for (const val of arr) {
          curr.next = new ListNode(val);
          curr = curr.next;
        }
        return dummy.next;
      };

      const head = toList([1, 2, 3, 4, 5]);
      const left = 2;
      const right = 4;

      const result = reverseBetween(head, left, right);

      return {
        payload: { head: [1, 2, 3, 4, 5], left, right },
        result: result?.toArray() ?? [],
        timeMs: +(performance.now() - start).toFixed(2),
      };
    },
  },
  {
    id: "insert-gcd-list",
    number: 2807,
    title: "Insert Greatest Common Divisors in Linked List",
    difficulty: "Medium",
    category: "Listas Encadeadas",
    url: "https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/",
    description:
      "Given the head of a linked list, insert a new node between every pair of adjacent nodes with a value equal to the greatest common divisor of them.",
    translation:
      "Dado o nó inicial de uma lista encadeada, insira um novo nó entre cada par de nós adjacentes com valor igual ao máximo divisor comum entre eles.",
    run: async () => {
      const toList = (arr: number[]): ListNode | null => {
        const dummy = new ListNode(0);
        let curr = dummy;
        for (const val of arr) {
          curr.next = new ListNode(val);
          curr = curr.next;
        }
        return dummy.next;
      };

      const input = [18, 6, 10, 3];
      const start = performance.now();
      const result = insertGreatestCommonDivisors(toList(input));

      return {
        payload: { head: input },
        result: result?.toArray() ?? [],
        timeMs: +(performance.now() - start).toFixed(2),
      };
    },
  },
];

const stackChallenges: Challenge[] = [
  {
    id: "simplify-path",
    number: 71,
    title: "Simplify Path",
    difficulty: "Medium",
    category: "Pilhas",
    url: "https://leetcode.com/problems/simplify-path/",
    description:
      "You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.",
    translation:
      "Você recebe um caminho absoluto de um sistema de arquivos no estilo Unix, que sempre começa com '/'. Sua tarefa é transformar esse caminho em sua forma canônica simplificada.",
    run: async () => {
      const payloads = ["/home/", "/home//foo/", "/home/user/Documents/../Pictures", "/../", "/.../a/../b/c/../d/./"];

      const payload = payloads[Math.floor(Math.random() * payloads.length)];

      const start = performance.now();
      const result = simplifyPath(payload);

      return {
        payload,
        result,
        timeMs: +(performance.now() - start).toFixed(2),
      };
    },
  },
  {
    id: "baseball-game",
    number: 682,
    title: "Baseball Game",
    difficulty: "Easy",
    category: "Pilhas",
    url: "https://leetcode.com/problems/baseball-game/",
    description:
      "You are keeping the scores for a baseball game with strange rules. Given a list of operations, return the sum of all scores on the record after applying all operations.",
    translation:
      "Você está registrando pontuações de um jogo de baseball com regras especiais. Dado uma lista de operações, retorne a soma de todas as pontuações após aplicar todas as operações.",
    run: async () => {
      const payload = { operations: ["5", "2", "C", "D", "+"] };
      const start = performance.now();
      const result = baseballGame(payload.operations);
      return { payload, result, timeMs: +(performance.now() - start).toFixed(2) };
    },
  },
];

export const challenges: Challenge[] = [...arrayChallenges, ...linkedListChallenges, ...stackChallenges];

export const categories: Category[] = ["Arrays", "Listas Encadeadas", "Pilhas"];

export function getChallengesByCategory(category: Category): Challenge[] {
  return challenges.filter((c) => c.category === category);
}
