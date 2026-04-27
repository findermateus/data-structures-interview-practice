import { ListNode } from "@/lib/list-node";

export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let prev: ListNode = dummy;

  for (let i = 1; i < left; i++) {
    prev = prev.next!;
  }

  const curr: ListNode | null = prev.next;

  for (let i = 0; i < right - left; i++) {
    const next = curr!.next!;
    curr!.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummy.next;
}
