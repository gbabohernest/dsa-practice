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


class Node:
    def __init__(self, data: int):
        self.data = data
        self.next = None

    @staticmethod
    def remove_duplicates_frm_sorted_linked_list(head: 'Node') -> 'Node' or None:
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

    @staticmethod
    def print_ll(head: 'Node') -> None:
        current = head

        while current is not None:
            if current.next is None:
                # last node in the list
                print(current.data, end="")
            else:

                print(current.data, end=" ==> ")

            current = current.next

        print()


a = Node(1)
b = Node(1)
c = Node(2)
d = Node(2)
e = Node(3)
a.next = b
b.next = c
c.next = d
d.next = e

new_sorted_list = Node.remove_duplicates_frm_sorted_linked_list(a)
Node.print_ll(new_sorted_list) # output: 1 ==> 2 ==> 3
