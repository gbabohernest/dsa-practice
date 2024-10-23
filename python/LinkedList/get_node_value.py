#!/usr/bin/python3
"""
Write a function, getNodeValue, that takes in the head of a linked list and an index.
The Function should return the value of the linked list at the specified index. If
there is no node at the given index, then return null.
"""



class Node:
    def __init__(self, value: int):
        self.value = value
        self.next = None


# Create Node
A = Node(20)
B = Node(30)
C = Node(40)
D = Node(50)

A.next = B; B.next = C; C.next = D

def get_node_value(head: Node, index:int) -> int | None:
    current_node = head
    counter = 0

    while current_node is not None:
        if counter == index: return current_node.value
        current_node = current_node.next
        counter = counter + 1

    return None



# Recursive Approach

def get_node_value_recursively(head: Node, index: int) -> int | None:

    if head is None: return None
    if index == 0: return head.value

    return get_node_value(head.next, index - 1)


# Test Run
print(get_node_value(A, 2))  # 40
print(get_node_value_recursively(A, 3)) # 50