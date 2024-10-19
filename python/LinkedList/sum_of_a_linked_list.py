#!/usr/bin/python3
"""
Write a function that calculate all the values in a given linked list and return the sum.
"""

class Node:
    def __init__(self, value: int):
        self.value = value
        self.next = None


# create node
a = Node(2)
b = Node(3)
c = Node(5)
d = Node(4)

a.next = b; b.next = c;  c.next = d

# a ---> b ---> c ---> d

# iterative approach
def calculate_sum_of_linked_list (head: Node):
    current_node = head
    sum_of_list = 0
    while current_node is not None:
        sum_of_list = sum_of_list +  current_node.value
        current_node = current_node.next

    return sum_of_list


# recursive approach
def cal_sum_of_ll_recursively (head: Node):
    if head is None: return 0
    return head.value + calculate_sum_of_linked_list(head.next)

print(calculate_sum_of_linked_list(a)) # output: 14
print(cal_sum_of_ll_recursively(a))    # output: 14