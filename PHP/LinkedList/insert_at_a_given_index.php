<?php

/*
 ** Given the head of a LL, an index, and a value. Write a function that insert a given
 ** node in the  LL at a given index and return the head of the List.
 */


use LinkedList\NodeDefinition\Node;


/**
 * @param Node $head : Head of the LL
 * @param int $index : Index to insert the new node
 * @param int $value : New node's value
 * @return Node: The Head of the LL
 */
function insertNodeAtIndexIteratively(Node $head, int $index, int $value): Node
{
    if ($index === 0) {
        # insert at the beginning of the LL
        $newNode = new Node($value);
        $newNode->next = $head;
        return $newNode;
    }

    $currentNode = $head;
    $counter = 0;

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


/**
 * @param Node|null $head : Head of the LL
 * @param int $value : New node's value
 * @param int $index : Index to insert the new node
 * @return Node
 */

function insertNodeAtIndexRecursively(?Node $head, int $value, int $index): Node
{

    if ($index === 0) {
        $newNode = new Node($value);
        $newNode->next = $head;
        return $newNode;
    }

    $head->next = insertNodeAtIndexRecursively($head->next, $value, $index - 1);
    return $head;
}