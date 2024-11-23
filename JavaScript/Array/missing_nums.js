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

const missingNumber = (nums) => {
  const len = nums.length;
  const totalSum = (len * (len + 1)) / 2;
  const sum = nums.reduce((acc, num) => acc + num, 0);
  //   console.log(len);
  //   console.log(sum);
  //   console.log(totalSum);
  return totalSum - sum;
};

console.log(missingNumber([3, 0, 1])); // 2
