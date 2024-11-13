/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
 * Return the linked list sorted as well

 * example: 1 -> 1 -> 2
 *  return: 1 -> 2:
 * 
 *  input: head = [1, 1, 2]
 *  output: [1, 2]
 */

const removeDupFromSortedLLRecursively = (head) => {
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

export default removeDupFromSortedLLRecursively;
