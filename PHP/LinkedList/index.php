<?php

require_once "../LinkedList/NodeDefinition/Node.php";
require_once "../LinkedList/get_node_value.php";


use LinkedList\NodeDefinition\Node;


// create the LL
$a = new Node(1);
$b = new Node(2);
$c = new Node(3);
$d = new Node(4);


$a->next = $b;
$b->next = $c;
$c->next = $d;


$nodeValue = getNodeValue($a, 2);
echo "$nodeValue"; # 3