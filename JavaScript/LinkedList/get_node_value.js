/**
 * Write a function, getNodeVal, that takes in the head of a linked list and an index.
 * The Function should return the value of the linked list at the specified index. If
 * there is no node at the given index, then return null.
 */

export const getNodeVal = (head, index) => {
  let currentNode = head;
  let currentIndex = 0;

  while (currentNode !== null) {
    if (currentIndex === index) return currentNode.data;
    currentNode = currentNode.next;
    currentIndex++;
  }

  return null;
};

// Recursive Approach

export const getNodeValRec = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.data;

  return getNodeValRec(head.next, index - 1);
};
