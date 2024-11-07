/**
 *
 * Given the head of a LL, an index, and a value. Write a function that insert a given
 * node in the  LL at a given index and return the head of the List.
 *
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  static printLL(head) {
    let currentNode = head;

    while (currentNode !== null) {
      console.log(currentNode.data); // Print the data of the current node
      currentNode = currentNode.next;
    }
  }

  static insertNodeAtIndex(head, index, data) {
    let counter = 0;
    let currentNode = head;

    if (index === 0) {
      const newNode = new Node(data);
      newNode.next = head;
      return newNode;
    }

    while (currentNode !== null && counter < index - 1) {
      currentNode = currentNode.next;
      counter++;
    }

    if (currentNode === null) {
      console.log('index is out bound, cannot insert a new node');
      exit();
    }

    const newNode = new Node(data);
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return head;
  }
}

const A = new Node(1);
const B = new Node(2);
const C = new Node(3);
const D = new Node(4);

A.next = B;
B.next = C;
C.next = D;
// a -> b -> c -> d

console.log('Original Linked List:');
Node.printLL(A); // 1 2 3 4

console.log('After inserting a new node at index 2 with value 5:');
const newHead = Node.insertNodeAtIndex(A, 0, 0);
Node.printLL(newHead); // 0 1 2 3 4
