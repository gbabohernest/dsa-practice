/**
 * Calculate and return sum of a given LinkedList.
 * Iterative & Recursive Approach.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// create nodes
const a = new Node(2);
const b = new Node(4);
const c = new Node(6);
const d = new Node(8);

// build up the linked list
a.next = b;
b.next = c;
c.next = d;

//  a  -> b -> c -> d -> null

/**
 * Iterative Approach
 * @param: {Node} head
 * @return {number} sum
 */
const getSumOfLinkedList = (head) => {
  let sum = 0;
  let currentNode = head;

  while (currentNode !== null) {
    sum += currentNode.value;
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
const getSumOfLinkedListRecursive = (head) => {
  if (head === null) return 0;
  return head.value + getSumOfLinkedListRecursive(head.next);
};

console.log(getSumOfLinkedList(a));
console.log(getSumOfLinkedListRecursive(a));
