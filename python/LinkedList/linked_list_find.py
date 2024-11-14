#!/usr/bin/python3

"""
Write a function that takes the head of Linked List and a target value.
The function should return a boolean indicating weather or not the linked list contains the target.
"""

from Node.Node import Node


def linked_list_find_target(head: Node, target: int) -> bool:
    current_node = head

    while current_node is not None:
        if current_node.data == target: return True
        current_node = current_node.next

    return False


# Recursive Approach

def linked_list_find_target_recursively(head: Node, target: int) -> bool:
    if head is None: return False
    if head.data == target: return True

    return linked_list_find_target_recursively(head.next, target)
