#!/usr/bin/python3

"""
Write a function that add the values of a linked list to an array
and return the array containing all the values of a linked list
"""

from typing import List, Any

class Node:
    def __init__(self, value: Any):
        self.value = value
        self.next = None


a = Node('A')
b = Node('B')
c = Node('C')
d  = Node('D')

a.next = b; b.next = c; c.next = d


def linked_list_values(head: Node) -> List[Any]:
        current_node = head
        values = []

        while current_node is not None:
            values.append(current_node.value)
            current_node = current_node.next

        return values


def linked_list_values_recursively(head: Node) -> List[Any]:
    if head is None: return []
    return [head.value] + linked_list_values_recursively(head.next)

# Test run
print(linked_list_values(a)) # ['A', 'B', 'C', 'D']
print(linked_list_values_recursively(a)) # ['A', 'B', 'C', 'D']