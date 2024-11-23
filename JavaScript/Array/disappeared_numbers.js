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

const findDisappearedNumbers = (nums) => {
  const disappearedNums = [];

  nums.forEach((num) => {
    const index = Math.abs(num) - 1;

    if (nums[index] > 0) {
      nums[index] = -nums[index]; //marked as visited by negating it.
    }
  });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      disappearedNums.push(i + 1);
    }
  }
  return disappearedNums;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findDisappearedNumbers(nums)); // [5, 6];
