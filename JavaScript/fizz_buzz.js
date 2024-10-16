/**
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
 *
 * @param {number} n
 * @return {string []}
 */
const fizzBuzz = (n) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let fizzString = '';

    if (i % 3 === 0) {
      fizzString += 'Fizz';
    }

    if (i % 5 === 0) {
      fizzString += 'Buzz';
    }

    if (!fizzString) {
      fizzString += i.toString();
    }

    result.push(fizzString);
  }

  return result;
};

const ans = fizzBuzz(15);
console.log(ans);
