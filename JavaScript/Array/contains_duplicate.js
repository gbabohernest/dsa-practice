/**
 *  LeetCode: 217. Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears at least
 * twice in the array, and return false if every element is distinct.
 *
 * Example 1:
 * input: nums = [1, 2, 3, 1]
 * output: true
 */

const containsDuplicates = (nums) => {
  const s = new Set(nums);
  return nums.length > s.size;
};

console.log(containsDuplicates([1, 2, 3, 1])); // true
