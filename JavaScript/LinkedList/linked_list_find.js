/**
 * A function that takes the head of Linked List and a target value. The function should return a boolean indicating whether or not the linked list contains the target.
 */

/**
 *
 * @param {Node} head
 * @param {Number} target
 * @return {Boolean}
 */
export const LLFind = (head, target) => {
  let currentNode = head;

  while (currentNode !== null) {
    if (currentNode.data === target) return true;
    currentNode = currentNode.next;
  }
  // we didn't find the target
  return false;
};

/********************************************* */

// Recursive Approach
export const LLFindRec = (head, target) => {
  if (head === null) return false;
  if (head.data === target) return true;

  return LLFindRec(head.next, target);
};
