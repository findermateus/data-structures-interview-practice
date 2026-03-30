export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const res = new Array(n).fill(1);

  let left = 1;
  for (let i = 0; i < n; i++) {
    res[i] *= left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }

  return res.map((n) => n || 0);
}
