<?php

/**
 * Write a function that takes the head of Linked List and a target value.
 * The function should return a boolean indicating weather or not the linked list contains the target.
 */


use LinkedList\NodeDefinition\Node;

/**
 * @param Node $head: LinkedList Head Node
 * @param int $target: Target value
 * @return bool: Return true if target is found else false
 */
function LLFindValue(Node $head, int $target): bool
{
    $currentNode = $head;

    while ($currentNode !== null) {
        if ($currentNode->data === $target){
            return true;
        }
        $currentNode = $currentNode->next;
    }

    return false;
}