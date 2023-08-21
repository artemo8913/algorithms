// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export function reverseList(head) {
  const listStack = [];
  createListStack(head, listStack);

  return createReversedList(listStack);
}
function createListStack(node, listStack) {
  listStack.unshift({ val: node.val, next: null });
  if (node.next) {
    createListStack(node.next, listStack);
  }
}
function createReversedList(listStack) {
  let lastNode = listStack[0];
  for (let i = 1; i < listStack.length; i++) {
    lastNode.next = listStack[i];
    lastNode = listStack[i];
  }
  return listStack[0];
}
