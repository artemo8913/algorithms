import { dfs } from "./depth-first-search";

describe('Depth First Search', () => {
    const tree = {
        val: 1,
        left: {
            val: 2,
            left: {
                val: 4,
                left: null,
                right: null
            },
            right: {
                val: 5,
                left: null,
                right: null
            }
        },
        right: {
            val: 3,
            left: {
                val: 6,
                left: null,
                right: null
            },
            right: {
                val: 7,
                left: null,
                right: null
            }
        }
    }

    test('Depth First Search', () => {
        expect(dfs(tree)).toEqual([1,2,4,5,3,6,7]);
    });
});
