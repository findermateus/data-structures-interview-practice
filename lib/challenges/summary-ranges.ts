export function summaryRanges(nums: number[]): string[] {
  const result: string[] = [];
  let i = 0;

  while (i < nums.length) {
    let start = i;

    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
    }

    result.push(start === i ? `${nums[start]}` : `${nums[start]}->${nums[i]}`);
    i++;
  }

  return result;
}