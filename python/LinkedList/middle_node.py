#!/usr/bin/python3

"""
Leetcode:

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

input: head = [1, 2, 3, 4, 5]
output: [3, 4, 5]
Explanation: The middle node of the list is node 3
"""


class ListNode:
    def __init__(self, val = 0, next =None):
        self.val = val
        self.next = next


    @staticmethod
    def middle_node(head: 'ListNode') -> 'ListNode':
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



a = ListNode(1)
b = ListNode(2)
c = ListNode(3)
d = ListNode(4)
e = ListNode(5)

a.next = b; b.next = c; c.next = d; d.next = e

middle = ListNode.middle_node(a)
print(middle.val) # 3