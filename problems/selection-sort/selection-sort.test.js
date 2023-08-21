import { selectionSort } from "./selection-sort";

describe('Selection Sort', () => {
    test('increasing array', () => {
        expect(selectionSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
    });

    test('decreasing array', () => {
        expect(selectionSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
    });

    test('random array', () => {
        expect(selectionSort([1,-5,20,100,40,-4])).toEqual([-5,-4,1,20,40,100]);
    });
});
