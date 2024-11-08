<?php
/**
 * Given the head of a sorted linked list, delete all duplicates such
 * that each element appears only once.
 * Return the linked list sorted as well
 *
 * */


class Node
{
    public int $data;
    public $next;

    public function __construct(int $data)
    {
        $this->data = $data;
        $this->next = null;
    }


    /**
     * Removes duplicates values from a sorted LL
     * @param Node $head -> head of LL
     * @return Node -> head of the new sorted LL
     */
    public static function remove_duplicates_sorted_LL(Node $head): Node
    {
        $current_node = $head;

        while ($current_node !== null) {
            $next_node = $current_node->next;

            if ($next_node !== null) {
                if ($current_node->data === $next_node->data) {
                    # skip the node, since the values are equal
                    $current_node->next = $next_node->next;
                }
            }

            $current_node = $next_node;

        }
        return $head;
    }

    public static function print_LL(Node $head): void
    {
        $current_node = $head;

        while ($current_node !== null) {
            if ($current_node->next !== null) {
                echo "$current_node->data" . " ==> ";
            } else {
                echo "$current_node->data";

            }

            $current_node = $current_node->next;
        }
    }
}


$a = new Node(1);
$b = new Node(1);
$c = new Node(2);
$d = new Node(2);
$e = new Node(3);
$a->next = $b;
$b->next = $c;
$c->next = $d;
$d->next = $e;


Node::print_LL($a);

echo "<br/>";
echo "After sorting";
echo "<br/>";

$new_head = Node::remove_duplicates_sorted_LL($a);
Node::print_LL($new_head); # 1 -> 2 -> 3