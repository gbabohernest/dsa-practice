#!/usr/bin/python3

"""
LeetCode: 217. Contains Duplicate

Given an integer array nums, return true if any value appears at least
twice in the array, and return false if every element is distinct.

Example 1:
input: nums = [1, 2, 3, 1]
output: true
"""


from typing import List

def contain_duplicate(nums: List[int]) -> bool:
    """Return True, if array contains duplicate(s)"""

    array_len = len(nums)

    if array_len == len(set(nums)):
        return False
    else:
        return True



def ans (nums: List[int]) -> bool:
    # return len(nums) != len(set(nums))
    return False if len(nums) == len(set(nums)) else True


if __name__ == "__main__":
    numbers = [1, 2, 3, 1]
    print(contain_duplicate(numbers))
    print(ans(numbers))