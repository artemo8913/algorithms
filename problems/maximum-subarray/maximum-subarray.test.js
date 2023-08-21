import {maximumSubarray} from './maximum-subarray';

describe('Maximum subarray', () => {
    test('Maximum subarray', () => {
        expect(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
        expect(maximumSubarray([1])).toEqual(1);
        expect(maximumSubarray([5, 4, -1, 7, 8])).toEqual(23);
        expect(maximumSubarray([-2, -1])).toEqual(-1);
        expect(maximumSubarray([-2, 1])).toEqual(1);
        expect(maximumSubarray([1, 2, 3, 4, 10, -100, 5, 4, -1, 7, 8])).toEqual(23);
    })
});
