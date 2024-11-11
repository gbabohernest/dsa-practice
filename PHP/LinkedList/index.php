<?php

require_once "../LinkedList/NodeDefinition/Node.php";
require_once "../LinkedList/get_node_value.php";
require_once "../LinkedList/remove_dup_from_sorted_list.php";
require_once "../LinkedList/insert_at_a_given_index.php";
require_once  "../LinkedList/linked_find.php";


use LinkedList\NodeDefinition\Node;


// create the LL
$a = new Node(1);
$b = new Node(1);
$c = new Node(3);
$d = new Node(3);


$a->next = $b;
$b->next = $c;
$c->next = $d;


$nodeValue = getNodeValue($a, 2);
$nodeValueRec = getNodeValueRecursively($a, 7);
#echo "$nodeValue"; # 3
#var_dump($nodeValueRec); # NULL


# Node::printLL(remove_duplicates_sorted_LL($a)); # 1 -> 3
# Node::printLL(remove_duplicates_recursive($a)); # 1 -> 3
# Node::printLL(insertNodeAtIndexIteratively($a, 0, 0)); # 0 -> 1 -> 1 -> 3 -> 3
# echo "<br/>";
# Node::printLL(insertNodeAtIndexRecursively($a, 4, 4));# 1 --> 1 --> 3 --> 3 --> 4

Node::printLL($a);
echo "<br/>";
var_dump(LLFindValue($a, 1));# true
var_dump(LLFindValueRecursively($a, 5)); # false