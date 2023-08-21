const arr = [5, 3, 4, 24, 1, 3];

function selectionSort(arr) {
  const result = [];
  for (let i = 0; i < arr.length;) {
    const min = Math.min(...arr.slice(i));
    const minIndex = arr.indexOf(min);
    result.push(...arr.splice(minIndex, 1));
  }
  return result;
}
console.log(selectionSort(arr));
