import { reverseBetween, ListNode } from "@/lib/challenges/reverse-between";

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

describe('reverseBetween', () => {
  it('inverte uma porção da lista encadeada', () => {
    const head = createList([1, 2, 3, 4, 5]);
    const result = reverseBetween(head, 2, 4);
    expect(result?.toArray()).toEqual([1, 4, 3, 2, 5]);
  });

  it('inverte la lista inteira', () => {
    const head = createList([1, 2, 3]);
    const result = reverseBetween(head, 1, 3);
    expect(result?.toArray()).toEqual([3, 2, 1]);
  });

  it('lida com lista de um único nó', () => {
    const head = createList([5]);
    const result = reverseBetween(head, 1, 1);
    expect(result?.toArray()).toEqual([5]);
  });
});
