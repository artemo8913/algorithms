// https://en.wikipedia.org/wiki/Binary_search_algorithm

export function binarySearch(arr, value) {
  if (arr.length === 0) {
    return undefined;
  }
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (rightIndex - leftIndex > 1) {
    const midIndex = Math.floor((rightIndex + leftIndex) / 2);
    const midVal = arr[midIndex];
    if (midVal >= value) {
      rightIndex = midIndex;
    } else {
      leftIndex = midIndex;
    }
  }
  console.log(`rightIndex: ${rightIndex}, val: ${arr[rightIndex]}`);
  return rightIndex;
}
