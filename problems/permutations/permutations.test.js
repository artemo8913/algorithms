import {permutations} from './permutations';

describe('permutations', () => {
    test('3', () => {
        const perms = permutations(3);
        expect(perms).toContainEqual([1,2,3]);
        expect(perms).toContainEqual([1,3,2]);
        expect(perms).toContainEqual([2,1,3]);
        expect(perms).toContainEqual([2,3,1]);
        expect(perms).toContainEqual([3,2,1]);
        expect(perms).toContainEqual([3,1,2]);
    });

    test('2', () => {
        const perms = permutations(2);
        expect(perms).toContainEqual([1,2]);
        expect(perms).toContainEqual([2,1]);
    })
});
