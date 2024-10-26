<?php

/**
 * Write a function that takes the head of Linked List and a target value.
 * The function should return a boolean indicating weather or not the linked list contains the target.
 */


class Node {
    public int $value;
    public $next;

    public function __construct( int $value)
    {
        $this->value = $value;
        $this->next = null;
    }

    public static function LL_find_value(Node $head, int  $target): bool
    {
        $current_node = $head;

        while ($current_node !== null) {
            if ($current_node->value === $target) return true;
            $current_node = $current_node->next;
        }

        return false;
    }
}

$a = new Node(20);
$b = new Node(30);
$c = new Node(40);
$d = new Node(50);

$a->next = $b;  $b->next = $c;  $c->next = $d;

var_dump(Node::LL_find_value($a, 40)); # Output: true
