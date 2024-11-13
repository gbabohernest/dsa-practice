import Node from './Node/Node.js';
import { getNodeVal, getNodeValRec } from './get_node_value.js';
import { LLFind, LLFindRec } from './linked_list_find.js';
import { revList, revListRec } from './reverse_a_linked_list.js';
import { getSumOfLL, getSumOfLLRec } from './sum_of_a_linked_list.js';
import {
  insertNodeAtIndexRec,
  insertNodeAtIndex,
} from './insert_a_node_at_index.js';
import {
  removeDupFromSortedLLRecursively,
  removeDuplicatesFromSortedLLIteratively,
} from './remove_duplicates_LL.js';
import {
  addLinkedListValueToArray,
  linkedListValues,
  recursionShorterVersion,
} from './linked_list_values.js';

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

//console.log(getNodeVal(a, 2)); // 2
//console.log(getNodeValRec(a, 3)); // 3

// console.log('\n');
// insert a new node at index 1
let newHead = insertNodeAtIndexRec(a, 0, 0);
//Node.printList(newHead); // 0 -> 1 -> 1 -> 2 -> 3 -> 3
console.log('------------------------------------');
newHead = insertNodeAtIndex(newHead, 6, 4);
//Node.printList(newHead); // 0 -> 1 -> 1 -> 2 -> 3 -> 3 ->4

/***************************************************** */

/*
console.log('Sum of linked list:');
console.log(getSumOfLL(newHead)); // 14
console.log(getSumOfLLRec(newHead)); // 14
*/

//console.log('\nReversed linked list:');
// let reversedHead = revList(newHead);
//Node.printList(revList(newHead)); // 4->3->3->2->1->1->0

//console.log(addLinkedListValueToArray(newHead)); //[0, 1, 1, 2, 3, 3, 4]
//console.log(linkedListValues(newHead));
//console.log(recursionShorterVersion(newHead));

console.log(LLFind(newHead, 4)); // true
console.log(LLFindRec(newHead, 10)); // false
