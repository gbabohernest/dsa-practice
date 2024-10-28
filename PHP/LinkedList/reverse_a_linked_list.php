<?php

/**
 * Write a function, reverseList, that takes in the head of a linked list as an argument.
 * The function should reverse the order of the nodes in the linked list in-place and
 * return the new head of the reversed linked list.
 */


class Node {
    public string $value;
    public $next;

    public function __construct(string $value)
    {
        $this->value = $value;
        $this->next = null;
    }
    public static function reverse_LL(Node $head): Node
    {
        $current_node = $head;
        $prev_node = null;

        while($current_node !== null) {
            $next = $current_node->next;
            $current_node->next = $prev_node;
            $prev_node = $current_node;
            $current_node = $next;
        }

        return $prev_node;
    }
}

$a = new Node('A');
$b = new Node('B');
$c = new Node('C');
$d = new Node('D');

$a->next = $b;
$b->next = $c;
$c->next = $d;


$result = Node::reverse_LL($a);

echo "<pre>";
var_dump($result); # D -> C --> B --> A --> NULL
echo "</pre>";