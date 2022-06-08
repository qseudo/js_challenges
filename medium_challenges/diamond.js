/* eslint-disable max-lines-per-function */
/*
  - class diamond
    - no constructor function
    - static function `makeDiamond`
      input: char
      output: string (diamond)
      - first + last row are the input
      - all rows, except first and last, have 2 same letters
      - symmetrical all ways
      - square (length === width)

    ..A (2, letter)
    .B.B (1, letter, 1, letter)
    C...C (0, letter, 3, letter)
    .B.B (1, letter, 1, letter)
    ..A (2, letter)

    ....A (4, [0])
    ...B.B (3, [1], 1, [1])
    ..C...C (2, [2], 3, [2])
    .D.....D (1, [3], 5, [3])
    E.......E (0, [4], 7, [4])
    .D.....D (1, [3], 5, [3])
    ..C...C (2, [2], 3, [2])
    ...B.B (3, [1], 1, [1])
    ....A (4, [0])

  ABCDE (5), IDX: 4
  'ABCDEFGHIJKLMNOPQRSTVUWXYZ'.indexOf('E') = numOfLeadingSpaces
  - set result to ''
  - numOfLeadingSpaces = LETTERS.indexOf(input)
  - numOfBetweenSpaces = 0
  - iterate through indicies 0-4 (inclusive)
    - if index === 0
      - result += " ".repeat(numOfLeadingSpaces) + LETTERS[idx]
    - else
      - result += " ".repeat(numOfLeadingSpaces) + LETTERS[idx] + " ".repeat(numOfBetweenSpaces) + LETTERS[idx]
    - numOfLeadingSpaces -= 1
    - numOfBetweenSpaces -= 2
*/

class Diamond {
  static LETTERS = 'ABCDEFGHIJKLMNOPQRSTVUWXYZ';

  static firstHalfOfDiamond(char) {
    let firstHalfOfDiamond = [];
    let idxOfChar = Diamond.LETTERS.indexOf(char);
    let numOfLeadingSpaces = idxOfChar;
    let numOfBetweenSpaces = 1;

    for (let idx = 0; idx <= idxOfChar; idx += 1) {
      let row;
      if (idx === 0) {
        row = " ".repeat(numOfLeadingSpaces) + Diamond.LETTERS[idx] + " ".repeat(numOfLeadingSpaces);
      } else {
        row = " ".repeat(numOfLeadingSpaces) + Diamond.LETTERS[idx] + " ".repeat(numOfBetweenSpaces) +
          Diamond.LETTERS[idx] + " ".repeat(numOfLeadingSpaces);
        numOfBetweenSpaces += 2;
      }
      firstHalfOfDiamond.push(row + '\n');
      numOfLeadingSpaces -= 1;
    }

    return firstHalfOfDiamond;
  }

  static makeDiamond(char) {
    let firstHalfOfDiamond = Diamond.firstHalfOfDiamond(char);
    let secondHalfOfDiamond = firstHalfOfDiamond
      .slice(0, firstHalfOfDiamond.length - 1)
      .reverse();

    return firstHalfOfDiamond.concat(secondHalfOfDiamond).join('');
  }
}

module.exports = Diamond;

console.log(Diamond.makeDiamond("E"));