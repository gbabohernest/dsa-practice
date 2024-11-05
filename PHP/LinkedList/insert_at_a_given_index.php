<?php

/*
 ** Given the head of a LL, an index, and a value. Write a function that insert a given
 ** node in the  LL at a given index and return the head of the List.
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

    public static function insertNodeAtIndexRecursively(Node|null $head, int $value, int $index): Node
    {

        if ($index === 0) {
            $newNode = new Node($value);
            $newNode->next = $head;
            return $newNode;
        }

        $head->next = Node::insertNodeAtIndexRecursively($head->next, $value, $index - 1);
        return $head;
    }

    public static function insertNodeAtIndexIteratively(Node $head, int $value, int $index): Node
    {
        $counter = 0;
        $currentNode = $head;

        if ($index === 0) {
            # insert at the beginning of the LL
            $newNode = new Node($value);
            $newNode->next = $head;
            return $newNode;
        }
        while ($currentNode !== null && $counter < $index - 1) {
            # Traverse through the LL, get to the node before insertion point
            # OR index is out of bound.
            $currentNode = $currentNode->next;
            $counter++;
        }

        if ($currentNode === null) {
            echo "Index out of bound, cannot insert a new node";
            exit();
        }

        # We find the insertion point
        $newNode = new Node($value);
        $newNode->next = $currentNode->next;
        $currentNode->next = $newNode;

        return $head;
    }

    public static function printLL(Node $head): void
    {
        $currentNode = $head;
        while ($currentNode !== null) {
            echo "$currentNode->value";
            $currentNode = $currentNode->next;

            if ($currentNode !== null) echo " --> ";
        }
    }
}

$a = new Node(2);
$b = new Node(4);
$c = new Node(6);
$d = new Node(8);

# a -> b -> c -> d
$a->next = $b;
$b->next = $c;
$c->next = $d;

# Test Run

$headNode = Node::insertNodeAtIndexRecursively($a, 100, 0);
Node::printLL($headNode); # output: 100 -> 2 -> 4 -> 6 -> 8
echo "<br>";
echo "<br>";
$headNode = Node::insertNodeAtIndexRecursively($headNode, 500, 4);
Node::printLL($headNode); # output: 100 -> 2 -> 4 -> 6 -> 500 -> 8

echo "<br>";
echo "<br>";
$headNode = Node::insertNodeAtIndexIteratively($headNode, 20, 0);
Node::printLL($headNode); # output: 20 -> 100 -> 2 -> 4 -> 6 -> 500 -> 8

echo "<br>";
echo "<br>";
$headNode = Node::insertNodeAtIndexIteratively($headNode, 5, 2);
Node::printLL($headNode); # output: 20 -> 100 -> 5 -> 2 -> 4 -> 6 -> 500 -> 8
