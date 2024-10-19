/**
 * Write a function, reverseList, that takes in the head of a linked list as an argument.
 * The function should reverse the order of the nodes in the linked list in-place and
 * return the new head of the reversed linked list.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

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

const reverseList = (head) => {
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

const printList = (head) => {
  let currentNode = head;
  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
};

// Recursive Approach

const reverseListRecursively = (head, prevNode = null) => {
  if (head === null) return prevNode;
  const nextNode = head.next;
  head.next = prevNode;
  return reverseListRecursively(nextNode, head);

  //  null   a   ->     b    ->    c   ->   d
  //  prev   head     next

  // Time complexity = O(n) : n = num of nodes
  // Space complexity = O(n) : Due to recursion stack
};

printList(a); // output: A -> B -> C -> D
console.log('---------- Reverse List output--------------');
printList(reverseList(a)); // output: D -> C -> B -> A
console.log('-------Reverse List Output Recursion--------');
printList(reverseListRecursively(a)); // output: D -> C -> B -> A
