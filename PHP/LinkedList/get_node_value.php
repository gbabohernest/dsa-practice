<?php
/**
 * Write a function, getNodeValue, that takes in the head of a linked list and an index.
 * The Function should return the value of the linked list at the specified index. If
 * there is no node at the given index, then return null.
 */

use LinkedList\NodeDefinition\Node;


/**
 * Return node's value or null at a given index.
 * @param Node $head
 * @param int $index
 * @return int|null
 */
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

/**
 * Recursively get the value of a node at a given index.
 * @param Node|null $head
 * @param int $index
 * @return int|null
 */
function getNodeValueRecursively(?Node $head, int $index) : ?int
{
    if ($head === null) return null;
    if ($index === 0) return $head->data;
    return getNodeValueRecursively($head->next, $index - 1);

}