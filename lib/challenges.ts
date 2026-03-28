import { threeSum } from "@/lib/challenges/three-sum";
import { ListNode, reverseBetween } from "./challenges/reverse-between";
import { simplifyPath } from "./challenges/simplify-path";

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
];

export const challenges: Challenge[] = [...arrayChallenges, ...linkedListChallenges, ...stackChallenges];

export const categories: Category[] = ["Arrays", "Listas Encadeadas", "Pilhas"];

export function getChallengesByCategory(category: Category): Challenge[] {
  return challenges.filter((c) => c.category === category);
}
