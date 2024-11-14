#!/usr/bin/python3

"""
Leetcode:

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

input: head = [1, 2, 3, 4, 5]
output: [3, 4, 5]
Explanation: The middle node of the list is node 3
"""

from Node.Node import Node


def middle_node(head: Node) -> Node:
    """
    Return the middle node of a LL
    :param head:
    :return: middle node
    """

    fast_pointer = head
    slow_pointer = head

    while fast_pointer is not None and fast_pointer.next is not None:
        fast_pointer = fast_pointer.next.next
        slow_pointer = slow_pointer.next

    return slow_pointer


def middle_node_rec(head: Node) -> Node:
    """
      Return the middle node of a linked list using a recursive approach.
      :param head: The head node of the linked list.
      :return: The middle node.
    """

    def rec_helper(slow_pointer: Node, fast_pointer: Node) -> Node:
        # Base case: if fast pointer reaches at the end, slow
        # pointer is at the middle
        if fast_pointer is None or fast_pointer.next is None:
            return slow_pointer

        return rec_helper(slow_pointer.next, fast_pointer.next.next)

    return rec_helper(head, head)
