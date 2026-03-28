export function baseballGame(operations: string[]): number {
  const record: number[] = [];

  for (const op of operations) {
    if (op === 'C') {
      record.pop();
    } else if (op === 'D') {
      record.push(record[record.length - 1] * 2);
    } else if (op === '+') {
      record.push(record[record.length - 1] + record[record.length - 2]);
    } else {
      record.push(parseInt(op));
    }
  }

  return record.reduce((sum, score) => sum + score, 0);
}