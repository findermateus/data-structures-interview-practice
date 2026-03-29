export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }

  toArray(): number[] {
    const result: number[] = [];
    let curr: ListNode | null = this;
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    return result;
  }
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let curr = head;

  while (curr !== null && curr.next !== null) {
    const gcdNode = new ListNode(gcd(curr.val, curr.next.val), curr.next);
    curr.next = gcdNode;
    curr = gcdNode.next;
  }

  return head;
}