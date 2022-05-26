/*
  - constructor function
    input:
      - integer >= 3000
    output:
      - `number` property set to input
      - `toRoman` method returns string

  - toRoman
    - input: n/a, use `number` property. will not exceed 3000
    - output: string

    - letters repeat only up to 3 times in a row
    - 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, D = 500, M = 1000

    1000 -> M
    900 -> CM (100 before 1000), not DCCCC
      900 -> 500 + 400 X
          -> 1000 - 900
    90 -> XC (10 before 100), not LXXX
    8 -> VIII (5 and 3)
    1998 -> MCMXCVIII

    1998 -> ['1000', '900', '90', '5', '1', '1', '1']
    1998 / 1000 = 1.998 ['1000']
    1998 - 1000 = 998
    998 / 1000 = <1
    998 / 900 = >1 ['1000', '900']
    998 - 900
    98 / 1000 = <1
    98 / 900 = <1
    98 / 500 = <1
    98 / 400 = <1
    98 / 100 = <1
    98 / 90 = >1 ['1000', '900', '90']
    98 - 90
    8 / ...
    etc.

    let result = [];
    increments = Object.keys(data)
    number = this.number
    while number > 0
      iterate through the keys of the data structure
        - if number / key is greater than 1,
          push that key to result
          subtract key from the number
          break to start from the beginning of the increments
    map increments to be the letter corresponding to the key
    return increments joined without spaces

    {
      1000: M,
      900: CM,
      500: D,
      400: CD,
      100: C,
      90: XC,
      50: L,
      40: XL,
      10: X,
      9: IX,
      5: V,
      4: IV,
      1: I,

    }

*/

class RomanNumeral {
  static LEGEND = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
  }

  constructor(integer) {
    this.number = integer;
  }

  toRoman() {
    let num = this.number;

    let result = [];
    let increments = Object.keys(RomanNumeral.LEGEND)
      .map(string => Number(string));

    while (num > 0) {
      for (let idx = increments.length - 1; idx >= 0; idx -= 1) {
        let increment = increments[idx];

        if (num / increment >= 1) {
          result.push(String(increment));
          num -= increment;
          break;
        }
      }
    }

    result = result.map(num => RomanNumeral.LEGEND[num]);
    return result.join('');
  }
}

module.exports = RomanNumeral;