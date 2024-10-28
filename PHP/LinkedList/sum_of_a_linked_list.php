<?php

/**
 * Calculate and return sum of a given LinkedList.
 * Iterative & Recursive Approach.
 */


class Node
{
    public int $value;
    public $next;

    public function __construct(int $value)
    {
        $this->value = $value;
        $this->next = null;
    }

    public static function get_LL_sum(Node $head): int
    {
        $sum = 0;
        $current_node = $head;

        while ($current_node !== null) {
            $sum += $current_node->value;
            $current_node = $current_node->next;
        }

        return $sum;
    }

    public static function get_LL_sum_recursively(?Node $head): int
    {
        if ($head === null) return 0;
        return $head->value += self::get_LL_sum_recursively($head->next);
    }
}


$a = new Node(10);
$b = new Node(30);
$c = new Node(40);
$d = new Node(50);

$a->next = $b;
$b->next = $c;
$c->next = $d;

var_dump(Node::get_LL_sum($a)); # Output: 130
var_dump(Node::get_LL_sum_recursively($a)); # Output: 130
