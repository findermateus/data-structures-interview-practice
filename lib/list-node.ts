export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
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
