<?php

/**
 * Write a function, reverseList, that takes in the head of a linked list as an argument.
 * The function should reverse the order of the nodes in the linked list in-place and
 * return the new head of the reversed linked list.
 */

use LinkedList\NodeDefinition\Node;


function reverseLL(Node $head): Node
{
    $currentNode = $head;
    $prevNode = null;

    while ($currentNode !== null) {
        $next = $currentNode->next;
        $currentNode->next = $prevNode;
        $prevNode = $currentNode;
        $currentNode = $next;
    }

    return $prevNode;
}