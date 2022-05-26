/*
  - constructor function
    - input:
      - x number of integers
      - if x = 0, then default to [3, 5]
      - set to prop `multiplesOf`
  - `to` method:
    - input:
      - integer
    - output:
      - integer
      - sum of all the natural numbers up to input that are multiples
        of any numbers in the `multiplesOf` array
      - does not include input integer

  - [3, 5].to(20) -> [3, 5, 6, 9, 10, 12, 15, 18] -> 78
  - if ([3,5].find(elem => elem % count === 0)) result.push(count});

  - set sum to 0
  - set count to 1
  - while count is < the input number
  - if the count is a multiple of any of the numbers in the `multiples` array
    - add the count to `sum`
  - return `sum`
*/

class SumOfMultiples {
  static to(number) {
    return new SumOfMultiples().to(number);
  }

  constructor(nums) {
    this.multiples = nums ? [...arguments] : [3, 5];
  }

  to(number) {
    let sum = 0;
    for (let count = 1; count < number; count += 1) {
      if (this.multiples.find(elem => count % elem === 0)) sum += count;
    }
    return sum;
  }
}

module.exports = SumOfMultiples;