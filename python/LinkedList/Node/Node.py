"""
Node Definition Class.
"""

class Node:
    def __init__(self, data: int ):
        self.data = data
        self.next = None


    @staticmethod
    def print_linked_list(head: 'Node') -> None:
        """
        Print a LinkedList
        :param head: Head Node
        :return:
        """

        current_node = head

        while current_node is not None:
            print(current_node.data, end=" ==> ")

            if current_node.next is None:
                print(current_node.data)
            current_node = current_node.next


