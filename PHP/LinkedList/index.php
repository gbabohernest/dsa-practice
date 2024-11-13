<?php

require_once "../LinkedList/NodeDefinition/Node.php";
require_once "../LinkedList/get_node_value.php";
require_once "../LinkedList/remove_dup_from_sorted_list.php";
require_once "../LinkedList/insert_at_a_given_index.php";
require_once "../LinkedList/linked_find.php";
require_once "../LinkedList/linked_list_values.php";
require_once "../LinkedList/reverse_a_linked_list.php";
require_once "../LinkedList/sum_of_a_linked_list.php";

use LinkedList\NodeDefinition\Node;

// create the LL
$a = new Node(1);
$b = new Node(1);
$c = new Node(3);
$d = new Node(3);

$a->next = $b;
$b->next = $c;
$c->next = $d;

// Test the LL functions
