const arr = [5, 3, 4, 24, 1, 3];

function bubbleSort(arr) {
  let needToContinue = true;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      const val = arr[i];
      const nextVal = arr[i + 1];
      if (val > nextVal) {
        arr[i] = nextVal;
        arr[i + 1] = val;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));
