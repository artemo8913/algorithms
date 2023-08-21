// https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
// https://ru.wikipedia.org/wiki/Обход_дерева#Поиск_в_глубину

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export function dfs(tree) {
  const listArray = [];
  listNodes(tree, listArray);
  return listArray;
}
function listNodes(node, listArray) {
  const val = node.val;
  listArray.push(val);
  if (node.left) {
    listNodes(node.left, listArray);
  }
  if (node.right) {
    listNodes(node.right, listArray);
  }
}
