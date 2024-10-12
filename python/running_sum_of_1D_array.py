"""Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

"""

from typing import List

class Solution:

    def running_sum(self, nums: List[int]) -> List[int]:
        result = []
        current_sum = 0

        for item in nums:
            current_sum += item
            result.append(current_sum)

        return result

    # time complexity  = O(n)
    # space complexity = O(n)