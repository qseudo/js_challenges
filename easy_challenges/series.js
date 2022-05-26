/*
  - series class
    - constructor function
      input: string of digits
      output: object with series prop set to input
    - slices method
      input: integer
      output: array of sub arrs w/ nums
      - if integer > output max idx, throw error
      - return all possible consecutive digits of n length
      - input is n

     01234567
    '98273463'.slices(2) =>
    [[9, 8], [8, 2], [2, 7], [7, 3], [3, 4], [4, 6], [6, 3]]
    - length: 8, max idx: 7
    [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]
    last item idx = length - sliceLength

     01234
    '31001'.slices(3) =>
    [[3, 1, 0], [1, 0, 0], [0, 0, 1]]
    - length: 5, max idx: 6
    [[0, 1, 2], [1, 2, 3], [2, 3, 4]]
    idx = length - sliceLength

    - split the input string into an array
    - convert the array into array of nums
    - create a result array []
    - iterate through the series digits string
      (start 0 idx, run while idx <= length - sliceLength)
      - create a copy of array from current index, with sliceLength of elements
      - push that array to the result array
    - return result array
*/
class Series {
  constructor(digits) {
    this.digits = digits;
  }

  slices(sliceLength) {
    if (sliceLength > this.digits.length) throw new Error();
    let digits = this.digits.split('').map(digit => Number(digit));
    let result = [];

    for (let idx = 0; idx <= digits.length - sliceLength; idx += 1) {
      result.push(digits.slice(idx, idx + sliceLength));
    }

    return result;
  }
}

let series = new Series('01234');
series.slices(1);
series.slices(2);

module.exports = Series;