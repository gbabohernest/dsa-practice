#!/usr/bin/python3

"""
Write a function that takes the head of Linked List and a target value.
The function should return a boolean indicating weather or not the linked list contains the target.
"""

class Node:
    def __init__(self, value: int):
        self.value = value
        self.next = None


a = Node(5)
b = Node(10)
c = Node(15)
d = Node(20)

a.next = b; b.next = c; c.next = d


def linked_list_find_target(head: Node, target: int) -> bool:
    current_node = head

    while current_node is not None:
        if current_node.value == target: return True
        current_node = current_node.next

    return False


# Recursive Approach

def linked_list_find_target_recursively(head: Node, target: int) -> bool:
    if head is None: return False
    if head.value == target: return True

    return linked_list_find_target_recursively(head.next, target)

# Test run
print(linked_list_find_target(a, 15)) # True
print(linked_list_find_target_recursively(a, 25)) # False