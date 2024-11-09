#!/usr/bin/python3


"""
LeetCode: 448.Find all numbers disappeared in an array

Given an array nums of n integers where nums[i] is in the range [1, n],
return an array of all integers in the range [1, n] that do not appear in nums

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
"""

from typing import List


def find_disappeared_numbers(nums: List[int]) -> List[int]:
    """
    Return the disappeared number(s) in a list.
    :param nums: List of numbers
    :return: Disappeared number(s)
    """

    length = len(nums)
    uniq_nums = set(nums)

    return [val for val in range(1, length + 1) if val not in uniq_nums]


# Time Complexity: O(n)
# Space Complexity: O(n)


if __name__ == "__main__":
    numbs = [4, 3, 2, 7, 8, 2, 3, 1]  # [5, 6]
    nms = [1, 1]  # 2
    print(find_disappeared_numbers(numbs))
    print(find_disappeared_numbers(nms))
