/**
 * Write a function, revList, that takes in the head of a linked list as an argument.
 * The function should reverse the order of the nodes in the linked list in-place and
 * return the new head of the reversed linked list.
 */

/**
 * @param {Node} head
 * @return {Node}
 *
 *
 *  null      a   -->   b  -->    c  -->   d  --->  null
 *  prev     curr      next
 *
 *  null <- a  <- b  <-  c  <- d
 *
 * output: d -> c -> b -> a
 */

export const revList = (head) => {
  let prevNode = null;
  let currentNode = head;

  while (currentNode !== null) {
    const nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;

  // Time Complexity = O(n) -> n is num of nodes
  // Space Complexity = O(1) -> constant extra space for variables
};

// Recursive Approach

export const revListRec = (head, prevNode = null) => {
  if (head === null) return prevNode;
  const nextNode = head.next;
  head.next = prevNode;
  return revListRec(nextNode, head);

  //  null   a   ->     b    ->    c   ->   d
  //  prev   head     next

  // Time complexity = O(n) : n = num of nodes
  // Space complexity = O(n) : Due to recursion stack
};
