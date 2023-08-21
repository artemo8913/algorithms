const arr = [5, 3, 4, 24, 1, 3];

function insertionSort(arr) {
  const result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    for (let j = result.length - 1; j >= 0; j--) {
      const valFromResult = result[j];
      if (valFromResult <= val && j === result.length - 1) {
        result.push(val);
        break;
      } else if (valFromResult <= val) {
        result.splice(j, 0, val);
        break;
      }
      if (j === 0) {
        result.unshift(val);
      }
    }
  }
  return result;
}
console.log(insertionSort(arr));
