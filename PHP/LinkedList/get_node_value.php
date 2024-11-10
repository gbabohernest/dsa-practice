<?php
/**
 * Write a function, getNodeValue, that takes in the head of a linked list and an index.
 * The Function should return the value of the linked list at the specified index. If
 * there is no node at the given index, then return null.
 */

use LinkedList\NodeDefinition\Node;

function getNodeValue(Node $head, int $index): ?int
{

    $currentNode = $head;
    $currentIndex = 0;

    while ($currentNode !== null)
    {
        if ($currentIndex === $index) return $currentNode->data;
        $currentNode = $currentNode->next;
        $currentIndex += 1;
    }

    return null;
}
