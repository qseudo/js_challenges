/*
  abundant / perfect / deficient
  positive divisors:
    - numbers that can be evenly divided into a target number with no remainder,
    excluding the target number itself
  aliquot sum:
    - sum of the positive divisors
  aliquot sum === num -> perfect
  aliquot sum < num -> deficient
  aliquot sum > num -> abundant

  prime numbers are always deficient

  - PerfectNumber class
  - no constructor
  - static method classify
    - input: integer
    - output: string -> 'deficient', 'perfect', 'abundant'
    - throws error if input is < 1

  examples ->
  -1 -> throws, nums must be > 0?
  13 -> deficient
  28 -> perfect
  12 -> abundant

  - if input number is less than 1 - throw an error
  - set `count` to 1
  - set `sum` to 0
  - while `count` is less than the input number
    - if input number % `count` is 0, then add `count` to `sum`
  - if sum < input print 'deficient'
  - else if sum > input print 'abundant'
  - else print 'perfect'
*/

class PerfectNumber {
  static classify(int) {
    if (int < 1) throw new Error('Input must be a positive integer!');

    let sum = 0;
    for (let count = 1; count < int; count += 1) {
      if (int % count === 0) sum += count;
    }

    if (sum < int) {
      return 'deficient';
    } else if (sum > int) {
      return 'abundant';
    } else {
      return 'perfect';
    }
  }
}

module.exports = PerfectNumber;