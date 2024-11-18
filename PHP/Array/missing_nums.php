<?php


/**
 * LeetCode: 268.Missing Number
 *
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 * Example 1:
 * Input: nums = [3, 0, 1]
 * Output: 2
 *
 * Explanation: n = 3 since there are 3 numbers, so all numbers are in the range
 * [0,3]. 2 is the missing number in the range since it does not appear in nums.
 */


/**
 * @param Integer[] $nums
 * @return Integer
 */
$missingNums = function (array $nums): int {
    $len = count($nums);
    $rangeNum = range(0, $len);
    return array_sum($rangeNum) - array_sum($nums);

    # Time & Space Complexity: 0(n)
};


function missingNum2(array $nums): int
{
    $len = count($nums);
    $expSum = $len * ($len + 1) / 2;
    return $expSum - array_sum($nums);

    # Time complexity: 0(n)
    # space complexity: 0(1)

}


var_dump(missingNum2([3, 0, 1])); # 2