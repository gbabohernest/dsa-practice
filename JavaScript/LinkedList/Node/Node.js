/**
 * LinkedList Definition
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  /**
   * Print a LinkedList
   * @param {*} head: Head Node of LL
   */
  static printList(head) {
    let currentNode = head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

export default Node;
