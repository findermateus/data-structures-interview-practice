import { MinStack } from "@/lib/challenges/min-stack";

describe('MinStack', () => {
  it('realiza operações básicas de pilha e mantém o valor mínimo', () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toBe(-3);
    minStack.pop();
    expect(minStack.top()).toBe(0);
    expect(minStack.getMin()).toBe(-2);
  });

  it('funcuna com elementos iguais', () => {
    const minStack = new MinStack();
    minStack.push(1);
    minStack.push(1);
    minStack.push(1);
    expect(minStack.getMin()).toBe(1);
    minStack.pop();
    expect(minStack.getMin()).toBe(1);
  });
});
