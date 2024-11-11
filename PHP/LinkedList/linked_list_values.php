<?php

/**
 * Write a function that add the values of a linked list to an array
 * and return the array containing all the values of a linked list
 */

use LinkedList\NodeDefinition\Node;

/**
 * @param Node $head : Head of the LL
 * @return array: An array of LL values
 */

function LLValuesToArray(Node $head): array
{
    $LLValues = [];
    $currentNode = $head;

    while ($currentNode !== null) {
        $LLValues[] = $currentNode->data;
        $currentNode = $currentNode->next;
    }
    return $LLValues;
}


function LLValuesToArrayRecursively(?Node $head): array
{
    if ($head === null) return [];
    return [$head->data, ...LLValuesToArrayRecursively($head->next)];
}