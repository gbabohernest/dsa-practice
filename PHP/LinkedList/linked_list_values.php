<?php

/**
 * Write a function that add the values of a linked list to an array
 * and return the array containing all the values of a linked list
 */



class Node {
    public string $value;
    public $next;

    public function __construct(string $value)
    {
        $this->value = $value;
        $this->next = null;
    }

    public static function LL_values_to_array (Node $head) : array
    {
        $LL_values = [];
        $current_node = $head;

        while ($current_node !== null)
        {
            $LL_values[] = $current_node->value;
            $current_node = $current_node->next;
        }
        return $LL_values;
    }

    public static function LL_values_to_array_recursively(?Node $head) : array
    {
        if ($head === null) return [];
        return [$head->value, ...self::LL_values_to_array_recursively($head->next)];
    }


}

$a = new Node('A');
$b = new Node('B');
$c = new Node('C');
$d = new Node('D');

$a->next = $b;
$b->next = $c;
$c->next = $d;

echo "<pre>";
var_dump(Node::LL_values_to_array($a)); # output: ['A', 'B', 'C', 'D'];
echo "</pre>";

echo "<pre>";
var_dump(Node::LL_values_to_array_recursively($a)); # output: ['A', 'B', 'C', 'D'];
echo "</pre>";