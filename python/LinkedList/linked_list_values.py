#!/usr/bin/python3

"""
Write a function that add the values of a linked list to an array
and return the array containing all the values of a linked list
"""

from Node.Node import Node
from typing import List, Any


def linked_list_values(head: Node) -> List[Any]:
    current_node = head
    values = []

    while current_node is not None:
        values.append(current_node.data)
        current_node = current_node.next

    return values


def linked_list_values_recursively(head: Node) -> List[Any]:
    if head is None: return []
    return [head.data] + linked_list_values_recursively(head.next)
