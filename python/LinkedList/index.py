#!/usr/bin/python3

from Node.Node import Node
from get_node_value import get_node_value, get_node_value_recursively

a = Node(1)
b = Node(1)
c = Node(2)
d = Node(3)
e = Node(3)

a.next = b
b.next = c
c.next = d
d.next = e

Node.print_linked_list(a)
print(get_node_value_recursively(a, 2))  # 2
print(get_node_value(a, 3))  # 3
