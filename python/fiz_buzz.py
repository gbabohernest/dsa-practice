"""
Given an integer n, return a string array answer (1-indexed) where:

    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]

"""

from typing import List

class Solution:
    def fizz_buzz(self, n: int) -> List[str]:
        result_list = []
        for num in range(1, n + 1):
            fizz_buzz_str = ""

            if num % 3 == 0:
                fizz_buzz_str += 'Fizz'

            if num % 5 == 0:
                fizz_buzz_str += 'Buzz'

            if not fizz_buzz_str:
                fizz_buzz_str += str(num)

            result_list.append(fizz_buzz_str)

        return result_list

    # Time complexity = O(n)
    # Space complexity = 0(n)
