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

// Test LL functions
