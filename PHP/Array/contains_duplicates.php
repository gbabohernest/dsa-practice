<?php

/**
 * LeetCode: 217. Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears at least
 * twice in the array, and return false if every element is distinct.
 *
 * Example 1:
 * input: nums = [1, 2, 3, 1]
 * output: true
 */


/**
 * @param Integer[] $nums
 * @return Boolean
 */
$containsDuplicates = function (array $nums): bool {
    $tempArr = [];

    foreach ($nums as $num) {
        if (isset($tempArr[$num])) return true;
        $tempArr[$num] = 1;
    }

    return false;
};


# Test
$vals = [1, 2, 3, 1, 3, 2];
$ans = $containsDuplicates($vals);
var_dump($ans); # true