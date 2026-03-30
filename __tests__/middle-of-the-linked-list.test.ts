import { middleNode } from "@/lib/challenges/middle-of-the-linked-list";
import { ListNode } from "@/lib/challenges/reverse-between";

function createList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return head;
}

describe('middleNode', () => {
  it('retorna o nó do meio para lista de tamanho ímpar', () => {
    const head = createList([1, 2, 3, 4, 5]);
    const result = middleNode(head);
    expect(result?.val).toBe(3);
  });

  it('retorna o segundo nó do meio para lista de tamanho par', () => {
    const head = createList([1, 2, 3, 4, 5, 6]);
    const result = middleNode(head);
    expect(result?.val).toBe(4);
  });

  it('retorna o único nó para lista de tamanho 1', () => {
    const head = createList([1]);
    const result = middleNode(head);
    expect(result?.val).toBe(1);
  });
});
