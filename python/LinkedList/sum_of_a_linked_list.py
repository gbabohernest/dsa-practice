#!/usr/bin/python3
"""
Write a function that calculate all the values in a given linked list and return the sum.
"""

from Node.Node import Node


# iterative approach
def cal_sum_of_linked_list(head: Node):
    current_node = head
    sum_of_list = 0
    while current_node is not None:
        sum_of_list = sum_of_list + current_node.data
        current_node = current_node.next

    return sum_of_list


# recursive approach
def cal_sum_of_ll_rec(head: Node):
    if head is None: return 0
    return head.data + cal_sum_of_linked_list(head.next)
