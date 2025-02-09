#!/usr/bin/python3

"""
Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
Return the linked list sorted as well

example: 1 -> 1 -> 2
return: 1 -> 2:

input: head = [1, 1, 2]
output: [1, 2]

example2: 1 -> 1 -> 2 -> 3 -> 3
return : 1 -> 2 -> 3

input: head = [1, 1, 2, 3, 3]
output: [1, 2, 3]
"""

from Node.Node import Node


def remove_dup_recursively(head: Node) -> Node or None:
    """
    Recursively remove duplicates from a sorted List.
    :param head: head node
    :return: new head of sorted list
    """

    if head is None or head.next is None: return head

    if head.data == head.next.data:
        # skip duplicate
        head.next = remove_dup_recursively(head.next.next)
    else:
        head.next = remove_dup_recursively(head.next)

    return head


def remove_duplicates(head: 'Node') -> 'Node' or None:
    """
    Removes duplicates from a sorted single linked list
    :param head: head node of the list:
    :return: new head of sorted list
    """

    if head is None or head.next is None: return head

    current_node = head

    while current_node is not None and current_node.next is not None:
        if current_node.data == current_node.next.data:
            # remove duplicate value
            current_node.next = current_node.next.next

        current_node = current_node.next

    return head
