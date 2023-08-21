import {reverseList} from './reverse-linked-list';

describe('Reverse Linked List', () => {
    test('Reverse Linked List', () => {
        const list = {
            val: 1,
            next: {
                val: 2,
                next: {
                    val: 3,
                    next: {
                        val: 4,
                        next: {
                            val: 5,
                            next: null
                        }
                    }
                }
            }
        };
        const reversedList = reverseList(list);
        const vals = [];
        let node = reversedList;
        while (node) {
            vals.push(node.val);
            node = node.next;
        }
        expect(vals).toEqual([5,4,3,2,1]);
    });
});
