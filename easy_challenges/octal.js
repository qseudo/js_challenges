/*
  - octal to decimal conversion
  - decimal is base 10
    - sum of all digits
  - octal is base 8
  0 1 1
  8^2 * 0 = 0
  8^1 * 1 = 8
  8^0 * 1 = 1
  = 9
  [0, 1, 1] -> [1, 1, 0] -> 8 ** idx

  130
  8^2 * 1 = 64
  8^1 * 3 = 24
  8^0 * 0 = 0
  = 88

  - leading 0s are valid
  - cannot have digit 8 or 9 in them
  - cannot have non-num chars

  isValidOctal(str):
    return !!str.match(^[0-7]+$);

  - Octal class
  - constructor input -> string
  - toDecimal:
    - input: string (obj prop)
    - output: integer

  - if input is not valid octal, return 0

  - split input str into an array
  - reverse the array
  - iterate through the array to construct a new array,
    - return (String(current element)) + (8 ** current index)
  - return the sum of the array
*/

class Octal {
  static OCTAL_BASE = 8;

  constructor(octalNum) {
    this.number = octalNum;
  }

  isValidOctal() {
    return !!this.number.match(/^[0-7]+$/);
  }

  toDecimal() {
    if (!this.isValidOctal()) return 0;

    let digits = this.number.split('').reverse();
    digits = digits.map((digit, index) => {
      return Number(digit) * (Octal.OCTAL_BASE ** index);
    });
    return digits.reduce((acc, val) => acc + val, 0);
  }
}

let num1 = new Octal('1234567');
let num2 = new Octal('7777');
console.log(num1.toDecimal());
console.log(num2.toDecimal());

module.exports = Octal;
