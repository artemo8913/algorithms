// https://ru.wikipedia.org/wiki/Обход_дерева#Поиск_в_ширину

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export function bfs(tree) {
  const result = [tree.val];
  listOfNodes(tree, result);
  return result;
}
function listOfNodes(node, listArray) {
  const { left, right } = node;
  if (left) {
    listArray.push(left.val);
  }
  if (right) {
    listArray.push(right.val);
  }
  if (left) {
    listOfNodes(left, listArray);
  }
  if (right) {
    listOfNodes(right, listArray);
  }
}
