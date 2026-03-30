import { mergeTwoLists } from "@/lib/challenges/merge-two-sorted-lists";
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

describe('mergeTwoLists', () => {
  it('mescla duas listas ordenadas', () => {
    const l1 = createList([1, 2, 4]);
    const l2 = createList([1, 3, 4]);
    const result = mergeTwoLists(l1, l2);
    expect(result?.toArray()).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it('mescla com uma lista vazia', () => {
    const l1 = null;
    const l2 = createList([0]);
    const result = mergeTwoLists(l1, l2);
    expect(result?.toArray()).toEqual([0]);
  });

  it('mescla duas listas vazias', () => {
    expect(mergeTwoLists(null, null)).toBeNull();
  });
});
