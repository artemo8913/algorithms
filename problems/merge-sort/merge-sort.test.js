import {mergeSort} from './merge-sort';

describe('Merge sort', () => {
    test('increasing array', () => {
        expect(mergeSort([1,2,3,4,5])).toEqual([1,2,3,4,5]);
    });

    test('decreasing array', () => {
        expect(mergeSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
    });

    test('random array', () => {
        expect(mergeSort([1,-5,20,100,40,-4])).toEqual([-5,-4,1,20,40,100]);
    });
});
