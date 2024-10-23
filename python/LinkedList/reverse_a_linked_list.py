#!/usr/bin/python3

"""
Write a function, reverseList, that takes in the head of a linked list as an argument.
The function should reverse the order of the nodes in the linked list in-place and
return the new head of the reversed linked list.
"""


from typing import Any

class Node:
    def __init__(self, value: Any):
        self.value = value
        self.next = None


# Nodes
a = Node('A')
b = Node('B')
c = Node('C')
d = Node('D')

a.next = b; b.next = c; c.next = d   # a  --->  b ---> c ---> d ---> None


def  reverse_list(head : Node) -> Node | None:
    """
    Reverse a Linked List
    None <--- a  <--- b  <---  c  <--- d
    None      a --->  b --->   c --->  d ----> None
                                      prev     curr     next
    :param head:
    :return: new head Node
    """

    prev_node = None
    current_node = head

    while current_node is not None:
        next_node = current_node.next
        current_node.next = prev_node
        prev_node = current_node
        current_node = next_node

    return prev_node




def reverse_list_recursively(head: Node, prev_node = None) :
    if head is None: return prev_node
    next_node = head.next
    head.next = prev_node

    return reverse_list_recursively(next_node, head)


def print_list(head : Node):
    current = head
    while current is not None:
        print(current.value)
        current = current.next



print_list(reverse_list(a))  # D C B A

val = reverse_list_recursively(a)
print_list(val)  # D C B A
