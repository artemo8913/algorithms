import { bfs } from "./breadth-first-search";

describe('Breadth First Search', () => {
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

    test('Breadth First Search', () => {
        expect(bfs(tree)).toEqual([1,2,3,4,5,6,7]);
    });
});
