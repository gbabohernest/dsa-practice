import Node from './Node/Node.js';
/**
 *
 * Given the head of a LL, an index, and a value. Write a function that insert a given
 * node in the  LL at a given index and return the head of the List.
 *
 */

export const insertNodeAtIndexRec = (head, data, index) => {
  if (index === 0) {
    const newNode = new Node(data);
    newNode.next = head;
    return newNode;
  }

  head.next = insertNodeAtIndexRec(head.next, data, index - 1);
  return head;
};

export const insertNodeAtIndex = (head, index, data) => {
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
    console.log('Index out of bounds!');
    return head;
  }

  const newNode = new Node(data);
  newNode.next = currentNode.next;
  currentNode.next = newNode;

  return head;
};
