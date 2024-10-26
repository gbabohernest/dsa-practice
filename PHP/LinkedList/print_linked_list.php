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

    public static function print_LL_Recursively(?Node $head): void {
        # Base case
        if ($head === null) return;
        echo "$head->value";
        self::print_LL_Recursively($head->next);
    }
}


$a = new Node('A');
$b = new Node('B');
$c = new Node('C');
$d = new Node ('D');

$a->next = $b;   $b->next = $c;  $c->next = $d;
# a -> b -> c -> d -> null

Node::print_LL($a); # Output : ABCD
echo "<br/>";
Node::print_LL_Recursively($a); # Output : ABCD


