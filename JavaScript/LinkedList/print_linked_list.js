/**
 * print a given linked list
 * Iterative & Recursive approach
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

/**
 *
 * @param {Node} head
 */

//  a  ->  b ->  c ->  d -> null
//                          curr
const printLinkedList = (head) => {
  let currentNode = head;

  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }

  // Time complexity: O(n) -> n = num of nodes
  // space complexity: O(1) -> fixed amount of extra space for variable (currentNode)
};

/************************************************ */

//Recursive Approach
const printLinkedListRecursively = (head) => {
  if (head === null) return;
  console.log(head.value);
  printLinkedListRecursively(head.next);

  // Time complexity: O(n) -> total function calls is proportional to num of nodes
  // Space complexity: O(n) -> Due to the recursive call stack. Each call is add to the stack.
};
printLinkedList(a);
printLinkedListRecursively(a);
