/**
 * Write a function, getNodeValue, that takes in the head of a linked list and an index.
 * The Function should return the value of the linked list at the specified index. If
 * there is no node at the given index, then return null.
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
 * @param {Node} head
 * @param {Number} index
 * @return {Number|null}
 */
const getNodeValue = (head, index) => {
  let currentNode = head;
  let currentIndex = 0;

  while (currentNode !== null) {
    if (currentIndex === index) return currentNode.value;
    currentNode = currentNode.next;
    currentIndex++;
  }

  return null;
};

// Recursive Approach

const getNodeValueRecursive = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.value;

  return getNodeValueRecursive(head.next, index - 1);
};
console.log(getNodeValue(a, 2)); // Output: 22
console.log(getNodeValueRecursive(a, 1)); // output 4
