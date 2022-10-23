export function mergeSort(arr: Array<number>): Array<number> {
  const len = arr.length;
  if (len <= 1) return arr;

  // Find the middle value of the given array to get sides
  const mid = Math.floor(len / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // Merge both sides
  const merged: number[] = [];
  while (left.length > 0 && right.length > 0) {
    // Find array side with the lowest first value;
    const lowestValueArray = (left[0] < right[0]) ? left : right;

    // Remove the first element from the given array side and insert in the final array;
    const firstValue = lowestValueArray.shift();
    merged.push(firstValue);
  }

  // Insert what's left from the comparisons
  return [...merged, ...left, ...right];
}