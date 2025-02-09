#!/usr/bin/python3

from Node.Node import Node
from get_node_value import get_node_value, get_node_value_recursively
from insert_at_a_given_index import insert_at_given_index, insert_at_given_index_recursively
from linked_list_find import linked_list_find_target, linked_list_find_target_recursively
from linked_list_values import linked_list_values, linked_list_values_recursively
from middle_node import middle_node, middle_node_rec
from remove_duplicates_sorted_LL import remove_duplicates, remove_dup_recursively
from reverse_a_linked_list import reverse_list, reverse_list_recursively
from sum_of_a_linked_list import cal_sum_of_linked_list, cal_sum_of_ll_rec

a = Node(1)
b = Node(1)
c = Node(2)
d = Node(3)
e = Node(3)

a.next = b
b.next = c
c.next = d
d.next = e

Node.print_linked_list(a)  # 1 ==> 1 ==> 2 ==> 3 ==> 3
sumLL = cal_sum_of_ll_rec(a)
print(sumLL)  # 10

# print(get_node_value_recursively(a, 2))  # 2
# print(get_node_value(a, 3))  # 3

insert_at_given_index(a, 2, 2)
# Node.print_linked_list(a)  # 1 ==> 1 ==> 2 ==> 2 ==> 3 ==> 3
insert_at_given_index_recursively(a, 4, 6)
Node.print_linked_list(a)  # 1 ==> 1 ==> 2 ==> 2 ==> 3 ==> 3 ==> 4

# print(linked_list_find_target(a, 4)) # True
# print(linked_list_values(a)) # [1, 1, 2, 2, 3, 3, 4]
middle = middle_node_rec(a)
# print(middle.data) # 2

newHead = remove_dup_recursively(a)
print("New list without duplicates")
Node.print_linked_list(newHead)  # 1 ==> 2 ==> 3 ==> 4
Node.print_linked_list(reverse_list(a))  # 4 ==> 3 ==> 2 ==> 1
