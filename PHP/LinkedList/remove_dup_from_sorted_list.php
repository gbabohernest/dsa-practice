<?php
/**
 * Given the head of a sorted linked list, delete all duplicates such
 * that each element appears only once.
 * Return the linked list sorted as well
 *
 * */

use LinkedList\NodeDefinition\Node;

/**
 * Removes duplicates values from a sorted LL
 * @param Node $head -> head of LL
 * @return Node -> head of the new sorted LL
 */

function remove_duplicates_sorted_LL(Node $head): Node
{
    $currentNode = $head;

    while ($currentNode !== null) {
        $nextNode = $currentNode->next;

        if ($nextNode !== null) {
            if ($currentNode->data === $nextNode->data) {
                # skip the node, since the values are equal
                $currentNode->next = $nextNode->next;
            }
        }

        $currentNode = $nextNode;


    }
    return $head;
}
