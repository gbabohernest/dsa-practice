<?php

/**
 * Calculate and return sum of a given LinkedList.
 * Iterative & Recursive Approach.
 */


use LinkedList\NodeDefinition\Node;

/**
 * Return the sum of the LL values
 * @param Node $head : Head Node
 * @return int: Sum of LL values
 */
function getLLSum(Node $head): int
{
    $sum = 0;
    $currentNode = $head;

    while ($currentNode !== null) {
        $sum += $currentNode->data;
        $currentNode = $currentNode->next;
    }

    return $sum;
}


function getLLSumRecursively(?Node $head): int
{
    if ($head === null) return 0;
    return $head->data += getLLSumRecursively($head->next);
}