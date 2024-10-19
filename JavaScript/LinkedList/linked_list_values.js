/**
 * A  function that add the values of a linked list to an array
 * and return the array containing all the values of a linked list
 *
 * Iterative & Recursive approach
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(4);
const c = new Node(22);
const d = new Node(55);

a.next = b;
b.next = c;
c.next = d;

/**
 * Iterative Approach
 * @param {Node} head
 * @return {Array} values
 */
const addLinkedListValueToArray = (head) => {
  let currentNode = head;
  let values = [];

  while (currentNode !== null) {
    values.push(currentNode.value);
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

const linkedListValues = (head) => {
  const values = [];
  recursiveHelper(head, values);
  return values;
};

/**
 *
 * @param {Node} head
 * @param {Array} values
 */
const recursiveHelper = (head, values) => {
  if (head === null) return;
  values.push(head.value);
  recursiveHelper(head.next, values);
};

// Recursive version with shorter syntax
const recursionShorterVersion = (head) => {
  if (head === null) return [];
  return [head.value, ...recursionShorterVersion(head.next)];
};
console.log(addLinkedListValueToArray(a));
console.log(linkedListValues(a));
console.log(recursionShorterVersion(a));

// Output: [2, 4, 22, 55]
