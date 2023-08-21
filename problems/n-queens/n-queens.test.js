import {solveNQueens} from './n-queens';

describe('N Queens', () => {
    test('4x4', () => {
        const solution = solveNQueens(4);

        expect(solution.length).toEqual(2);
        expect(solution).toContainEqual([".Q..","...Q","Q...","..Q."]);
        expect(solution).toContainEqual(["..Q.","Q...","...Q",".Q.."]);
    });
});
