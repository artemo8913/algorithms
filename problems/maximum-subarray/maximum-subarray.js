// https://leetcode.com/problems/maximum-subarray/

export function maximumSubarray(arr) {
  const prefSum = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    const numAndPref = num + prefSum[prefSum.length - 1];
    prefSum.push(Math.max(num, numAndPref));
  }
  return Math.max(...prefSum);
}
