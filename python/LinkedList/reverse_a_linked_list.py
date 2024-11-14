#!/usr/bin/python3

"""
Write a function, reverseList, that takes in the head of a linked list as an argument.
The function should reverse the order of the nodes in the linked list in-place and
return the new head of the reversed linked list.
"""

from Node.Node import Node


def reverse_list(head: Node) -> Node | None:
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


def reverse_list_recursively(head: Node, prev_node=None):
    if head is None: return prev_node
    next_node = head.next
    head.next = prev_node

    return reverse_list_recursively(next_node, head)
