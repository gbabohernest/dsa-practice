/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
 * Return the linked list sorted as well

 * example: 1 -> 1 -> 2
 *  return: 1 -> 2:
 * 
 *  input: head = [1, 1, 2]
 *  output: [1, 2]
 */

export const removeDupFromSortedLLRecursively = (head) => {
  // empty or single node list
  if (head === null || head.next === null) return head;

  if (head.data === head.next.data) {
    // skip the duplicate
    head.next = removeDupFromSortedLLRecursively(head.next.next);
  } else {
    head.next = removeDupFromSortedLLRecursively(head.next);
  }

  return head;
};

/**
 * Removes duplicates from a LL
 * @param {*} head: Head of the LinkedList
 */
export const removeDuplicatesFromSortedLLIteratively = (head) => {
  if (head === null || head.next === null) return head;

  let currentNode = head;

  while (currentNode !== null && currentNode.next !== null) {
    if (currentNode.data === currentNode.next.data) {
      // skip this value, since they are the same.
      currentNode.next = currentNode.next.next;
    }
    currentNode = currentNode.next;
  }

  return head;
};

// export default removeDupFromSortedLLRecursively;
