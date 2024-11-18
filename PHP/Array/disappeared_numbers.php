<?php

/**
 * LeetCode: 448.Find all numbers disappeared in an array
 *
 * Given an array nums of n integers where nums[i] is in the range [1, n],
 * return an array of all integers in the range [1, n] that do not appear in nums
 *
 * Example 1:
 * Input: nums = [4,3,2,7,8,2,3,1]
 * Output: [5,6]
 */


/**
 * @param Integer[] $nums
 * @return Integer[]
 */

function findDisappearedNumbers(array &$nums): array
{
    $length = count($nums);

    // Mark numbers as visited
    foreach ($nums as $num) {
        $index = abs($num) - 1; //convert to zero based index

        if ($nums[$index] > 0) {
            $nums[$index] = -$nums[$index]; // Negate to mark as visited
        }
    }
//    echo "<pre>";
//    var_dump($nums);
//    echo "</pre>";

    $result = [];

    // Find indices that are still positive
    for ($i = 0; $i < $length; $i++) {
        if ($nums[$i] > 0) {
            $result [] = $i + 1; // Convert back to 1-based index
        }
    }

    return $result;
}

$vv = [4, 3, 2, 7, 8, 2, 3, 1];
var_dump(findDisappearedNumbers($vv)); # [5, 6]