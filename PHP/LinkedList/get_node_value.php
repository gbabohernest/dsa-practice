<?php
/**
 * Write a function, getNodeValue, that takes in the head of a linked list and an index.
 * The Function should return the value of the linked list at the specified index. If
 * there is no node at the given index, then return null.
 */



class Node {
    public int $value;
    public $next;

    public function __construct(int $value) {
        $this->value = $value;
        $this->next = null;
    }

    public static function getNodeValue(Node $head, int $index) : ?int
    {
        $current_node = $head;
        $current_index = 0;

        while ($current_node !== null) {
            if ($current_index === $index) return $current_node->value;
            $current_node = $current_node->next;
            $current_index +=1;
        }

        return null;

    }

    public static function getNodeValueRecursively(?Node $head, int $index): ?int {

        if ($head === null) return null;
        if ($index === 0) return $head->value;

        return self::getNodeValueRecursively($head->next, $index - 1);
    }
}


$a = new Node(1);
$b = new Node(2);
$c = new Node(3);
$d = new Node (4);

$a->next = $b;   $b->next = $c;  $c->next = $d;
# a -> b -> c -> d -> null

$result = Node::getNodeValue($a, 1); # Output : 2
echo "$result";

echo "<br/>";
$result2 = Node::getNodeValueRecursively($a, 0); # Output: 1
echo "$result2";


