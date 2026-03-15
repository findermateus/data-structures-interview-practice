import { threeSum } from "@/lib/challenges/three-sum";

export type Difficulty = "Easy" | "Medium" | "Hard";
export type Category = "Arrays" | "Listas Encadeadas" | "Pilhas";

export interface Challenge {
  id: string;
  title: string;
  number: number;
  difficulty: Difficulty;
  category: Category;
  description: string;
  url: string;
  run: () => Promise<ChallengeResult>;
}

export interface ChallengeResult {
  payload: unknown;
  result: unknown;
  timeMs: number;
}

function mockRun(payload: unknown, result: unknown, delayMs = 120): () => Promise<ChallengeResult> {
  return async () => {
    const start = performance.now();
    await new Promise((r) => setTimeout(r, delayMs));
    return { payload, result, timeMs: +(performance.now() - start).toFixed(10) };
  };
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
    id: "reverse-linked-list",
    number: 206,
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Listas Encadeadas",
    url: "https://leetcode.com/problems/reverse-linked-list/",
    description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    run: mockRun({ head: [1, 2, 3, 4, 5] }, [5, 4, 3, 2, 1]),
  },
  {
    id: "merge-two-lists",
    number: 21,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Listas Encadeadas",
    url: "https://leetcode.com/problems/merge-two-sorted-lists/",
    description:
      "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list and return the head of the merged linked list.",
    run: mockRun({ list1: [1, 2, 4], list2: [1, 3, 4] }, [1, 1, 2, 3, 4, 4]),
  },
];

const stackChallenges: Challenge[] = [
  {
    id: "min-stack",
    number: 155,
    title: "Min Stack",
    difficulty: "Medium",
    category: "Pilhas",
    url: "https://leetcode.com/problems/min-stack/",
    description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    run: mockRun({ operations: ["push(-2)", "push(0)", "push(-3)", "getMin()", "pop()", "top()", "getMin()"] }, [
      null,
      null,
      null,
      -3,
      null,
      0,
      -2,
    ]),
  },
  {
    id: "evaluate-rpn",
    number: 150,
    title: "Evaluate Reverse Polish Notation",
    difficulty: "Medium",
    category: "Pilhas",
    url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    description:
      "You are given an array of strings tokens that represents an arithmetic expression in Reverse Polish Notation. Evaluate the expression and return an integer.",
    run: mockRun({ tokens: ["2", "1", "+", "3", "*"] }, 9),
  },
];

export const challenges: Challenge[] = [...arrayChallenges, ...linkedListChallenges, ...stackChallenges];

export const categories: Category[] = ["Arrays", "Listas Encadeadas", "Pilhas"];

export function getChallengesByCategory(category: Category): Challenge[] {
  return challenges.filter((c) => c.category === category);
}
