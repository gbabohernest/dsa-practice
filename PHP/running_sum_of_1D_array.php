<?php

/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

*/
class Solution {
    /**
     * @param int[] $nums
     * @return int[]
     */
    function runningSum(array $nums) : array {
        $currentSum = 0;
        $runningSumArray = [];

        foreach ($nums as $num) {
            $currentSum += $num;
            $runningSumArray[] = $currentSum;
        }

        return $runningSumArray;
    }

    # time complexity  = O(n)
    # space complexity = O(n)
}


