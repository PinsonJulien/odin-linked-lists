import { mergeSort } from "./merge-sort";

describe('Merge sort', () => {

  test('Sort a given array of numbers', () => {
    const arr = [10, 6, -2, -1, 3, -2, 4];
    const expected = [-2, -2, -1, 3, 4, 6, 10];
    expect(mergeSort(arr)).toEqual(expected);
  });

  test('Returns an empty array when given one', () => {
    expect(mergeSort([])).toEqual([]);
  });
});