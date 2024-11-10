<?php

/**
 * LinkedList Definition
 */

namespace LinkedList\NodeDefinition;

class Node
{
    public $next = null;

    public function __construct(
        public int $data,
    )
    {

    }

    /**
     * Print the LL
     * @param Node $head : First node in the LL
     * @return void
     */
    public static function printLL(Node $head): void
    {
        $currentNode = $head;

        while ($currentNode !== null) {
            echo "$currentNode->data";
            $currentNode = $currentNode->next;

            if ($currentNode !== null) echo " --> ";
        }
    }

}