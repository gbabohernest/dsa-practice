#!/usr/bin/python3

"""
LeetCode: 268.Missing Number

Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array.

Example 1:
Input: nums = [3, 0, 1]
Output: 2

Explanation: n = 3 since there are 3 numbers, so all numbers are in the range
[0,3]. 2 is the missing number in the range since it does not appear in nums.
"""

from typing import List


def missing_number(nums: List[int]) -> int:
    """
    A function that return the missing number of a list.
    :param nums:  List of numbers
    :return: The missing number
    """

    array_len = len(nums)

    for num in range(0,array_len + 1):
        if num in nums:
            continue
        else:
            return num

    # Time complexity: O(n)
    # Space complexity: O(1)



def missing_number_approach_2(nums: List[int]) -> int:
    array_len = len(nums)
    return sum(range(array_len + 1)) - sum(nums)



if __name__ == "__main__":
    numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1]
    numbs = [0, 3, 1]
    print(missing_number(numbers)) # 8
    print(missing_number_approach_2(numbs)) # 2