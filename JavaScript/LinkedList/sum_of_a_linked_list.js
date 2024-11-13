/**
 * Calculate and return sum of a given LinkedList.
 * Iterative & Recursive Approach.
 */

/**
 * Iterative Approach
 * @param: {NodeDefinition} head
 * @return {number} sum
 */
export const getSumOfLinkedList = (head) => {
  let sum = 0;
  let currentNode = head;

  while (currentNode !== null) {
    sum += currentNode.data;
    currentNode = currentNode.next;
  }

  return sum;

  // Time complexity: O(n) -> n is the number of nodes
  // space complexity: O(1)
};

/****************************************** */

/**
 * Recursive Approach

  Time complexity: O(n) -> n is the number of nodes
  space complexity: O(n) -> due to the recursion stack 
*/
export const getSumOfLinkedListRecursive = (head) => {
  if (head === null) return 0;
  return head.data + getSumOfLinkedListRecursive(head.next);
};
