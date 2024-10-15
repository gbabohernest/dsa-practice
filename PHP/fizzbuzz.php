<?php

/*
    Given an integer n, return a string array answer (1-indexed) where:

    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.

    Example 1:

    Input: n = 3
    Output: ["1","2","Fizz"]
*/

/**
 * @param int $number
 * @return string []
 */
function FizzBuzz(int $number): array
{
    $fizzBuzzArray = [];

    for ($counter = 1; $counter <= $number; $counter++) {
        $fizzBuzzString = "";

        if ($counter % 3 === 0) {
            $fizzBuzzString .= 'Fizz';
        }

        if ($counter % 5 === 0) {
            $fizzBuzzString .= 'Buzz';
        }

        if (!$fizzBuzzString) {
            $fizzBuzzString .= (string)$counter;
        }

        $fizzBuzzArray [] = $fizzBuzzString;
    }

    return $fizzBuzzArray;
}