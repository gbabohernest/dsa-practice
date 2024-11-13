/**
 * A  function that add the values of a linked list to an array
 * and return the array containing all the values of a linked list
 *
 * Iterative & Recursive approach
 */

/**
 * Iterative Approach
 * @param {Node} head
 * @return {Array} values
 */
export const addLinkedListValueToArray = (head) => {
  let currentNode = head;
  let values = [];

  while (currentNode !== null) {
    values.push(currentNode.data);
    currentNode = currentNode.next;
  }

  return values;

  // Time complexity: O(n) -> n is the number of nodes
  // Space complexity: O(n) -> due to the extra space used to store the values array
};

/****************************************** */

/**
 * Recursive Approach
 * @param {Node} head
 * @return {Array} values
 */

export const linkedListValues = (head) => {
  const values = [];
  recursiveHelper(head, values);
  return values;
};

/**
 *
 * @param {Node} head
 * @param {Array} values
 */
export const recursiveHelper = (head, values) => {
  if (head === null) return;
  values.push(head.data);
  recursiveHelper(head.next, values);
};

// Recursive version with shorter syntax
export const recursionShorterVersion = (head) => {
  if (head === null) return [];
  return [head.data, ...recursionShorterVersion(head.next)];
};
