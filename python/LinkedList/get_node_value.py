#!/usr/bin/python3
"""
Write a function, getNodeValue, that takes in the head of a linked list and an index.
The Function should return the value of the linked list at the specified index. If
there is no node at the given index, then return null.
"""

from Node.Node import Node


def get_node_value(head: Node, index:int) -> int | None:
    current_node = head
    counter = 0

    while current_node is not None:
        if counter == index: return current_node.data
        current_node = current_node.next
        counter = counter + 1

    return None



# Recursive Approach

def get_node_value_recursively(head: Node, index: int) -> int | None:

    if head is None: return None
    if index == 0: return head.data

    return get_node_value(head.next, index - 1)
