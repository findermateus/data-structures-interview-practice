import { insertGreatestCommonDivisors, ListNode } from "@/lib/challenges/insert-gcd-list";

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

describe('insertGreatestCommonDivisors', () => {
  it('insere o MDC entre os nós corretamente', () => {
    const head = createList([18, 6, 10, 3]);
    const result = insertGreatestCommonDivisors(head);
    expect(result?.toArray()).toEqual([18, 6, 6, 2, 10, 1, 3]);
  });

  it('não altera lista com apenas um nó', () => {
    const head = createList([7]);
    const result = insertGreatestCommonDivisors(head);
    expect(result?.toArray()).toEqual([7]);
  });

  it('lida com lista vazia', () => {
    const result = insertGreatestCommonDivisors(null);
    expect(result).toBeNull();
  });
});
