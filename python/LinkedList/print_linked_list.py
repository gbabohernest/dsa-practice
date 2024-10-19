#!/usr/bin/python3

"""
Write a function that print a given linked list.
"""

from typing import Any

class Node:
    def __init__(self, value: Any):
        self.value = value
        self.next = None


# Create nodes
a = Node('A')
b = Node('B')
c = Node('C')
d = Node('D')

a.next = b
b.next = c
c.next = d

# a ---> b ---> c ---> d

def print_linked_list(head: Node):
    current_node = head

    while current_node is not None:
        print(current_node.value)
        current_node = current_node.next


def print_linked_list_recursively(head: Node):
    # base case
    if head is None: return
    print(head.value)
    print_linked_list_recursively(head.next)


# Test run
print_linked_list(a)
print_linked_list_recursively(a)


