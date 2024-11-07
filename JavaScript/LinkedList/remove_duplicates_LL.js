/**
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
 * Return the linked list sorted as well

 * example: 1 -> 1 -> 2
 *  return: 1 -> 2:
 * 
 *  input: head = [1, 1, 2]
 *  output: [1, 2]
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  static printLL(head) {
    let currentNode = head;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  static removeDupFromSortedLLRecursively(head) {
    // empty or single node list
    if (head === null || head.next === null) return head;

    if (head.data === head.next.data) {
      // skip the duplicates
      head.next = Node.removeDupFromSortedLLRecursively(head.next.next);
    } else {
      // move to the next node
      head.next = Node.removeDupFromSortedLLRecursively(head.next);
    }

    return head;
  }
  static removeDuplicatesFromSortedLLIteratively(head) {
    if (head === null || head.next === null) return head; // empty or single node list

    let currentNode = head;
    while (currentNode !== null && currentNode.next !== null) {
      if (currentNode.data === currentNode.next.data) {
        //skip this value, since they are the same.
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    }

    return head;
  }
}

const a = new Node(1);
const b = new Node(1);
const c = new Node(2);
const d = new Node(3);
const e = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
// a -> b -> c -> d -> e

//const sortedList = Node.removeDuplicatesFromSortedLLIteratively(a);
const sortedList = Node.removeDupFromSortedLLRecursively(a);
Node.printLL(sortedList); // output:  1 -> 2 -> 3
