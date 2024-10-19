/**
 * A function that takes the head of Linked List and a target value. The function should return a boolean indicating whether or not the linked list contains the target.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(10);
const c = new Node(15);
const d = new Node(30);

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d -> null

/**
 *
 * @param {Node} head
 * @param {Number} target
 * @return {Boolean}
 */
const linkedListFind = (head, target) => {
  let currentNode = head;

  while (currentNode !== null) {
    if (currentNode.value === target) return true;
    currentNode = currentNode.next;
  }
  // we didn't find the target
  return false;
};

/********************************************* */

// Recursive Approach
const recursiveApproach = (head, target) => {
  if (head === null) return false;
  if (head.value === target) return true;

  return recursiveApproach(head.next, target);
};

console.log(linkedListFind(a, 15)); // true
console.log(recursiveApproach(a, 35)); // false
