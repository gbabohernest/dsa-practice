<?php

/**
 *
 * Write a function that print a given linked list.
 *
 */


class Node {

    public string $value;
    public $next;

    public function __construct(string $value) {
            $this->value = $value;
            $this->next = null;
    }

    public static function print_LL(Node $head): void
    {
        $current_node = $head;

        while ($current_node !== null) {
            echo "$current_node->value";
            $current_node = $current_node->next;
        }
    }
}


$a = new Node('A');
$b = new Node('B');
$c = new Node('C');
$d = new Node ('D');

$a->next = $b;   $b->next = $c;  $c->next = $d;
# a -> b -> c -> d -> null

Node::print_LL($a); # Output : ABCD

