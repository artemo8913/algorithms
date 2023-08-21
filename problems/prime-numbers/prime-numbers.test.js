import { primeNumbers } from './prime-numbers';

describe('Prime Numbers', () => {
    test('Prime Numbers', () => {
        expect(primeNumbers(2)).toEqual([2]);
        expect(primeNumbers(6)).toEqual([2, 3, 5]);
        expect(primeNumbers(13)).toEqual([2, 3, 5, 7, 11, 13]);
        expect(primeNumbers(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });
});
