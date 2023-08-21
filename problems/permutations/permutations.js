// https://leetcode.com/problems/permutations/

function permutations(n) {
  const array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }

  return createPermutations(array);
}
function createPermutations(inputArr) {
  const result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };
  permute(inputArr);
  return result;
}
