import Node from './Node/Node.js';
import { getNodeValue, getNodeValueRecursive } from './get_node_value.js';
import {
  removeDupFromSortedLLRecursively,
  removeDuplicatesFromSortedLLIteratively,
} from './remove_duplicates_LL.js';

// create nodes
const a = new Node(1);
const b = new Node(1);
const c = new Node(2);
const d = new Node(3);
const e = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// Node.printList(removeDupFromSortedLLRecursively(a)); // 1 -> 2 -> 3
// Node.printList(removeDuplicatesFromSortedLLIteratively(a)); // 1 -> 2 -> 3

console.log(getNodeValue(a, 2)); // 2
console.log(getNodeValueRecursive(a, 3)); // 3
