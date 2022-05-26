/*
  - scrabble class
  - constructor arg -> string
    -> `word` property?
  - `score` method returns integer
    - input: string from `this.word` prop
      - case insensitive
    - output: integer

    1: [A, E, I, O, U, L, N, R, S, T],
    2: [D, G],
    3: [B, C, M, P],
    4: [F, H, V, W, Y],
    5: [K],
    8: [J, X],
    10: [Q, Z],

    const POINTS = {
      'aeioulnrst': 1,
      'dg': 2,
      'bcmp': 3,
      'fhvwy': 4,
      'k': 5,
      'jx': 8,
      'qz': 10,
    };

    CABBAGE -> ['c', 'a', 'b', 'b', 'a', 'g', 'e'] -> [3, 1, 3, 3, 2, 1] -> 14
    str.map(letter => {
      for (key in POINTS) {
        if (key.split('').includes(letter)) return POINTS[key];
      }
    });

    - convert the `word` prop to lowercase
    - split the word into individual letters
    - iterate through the array of letters
      - iterate through the data structure
        - if the current letter is in the key of the DS
          - return the integer of that key
        - else
          - return 0
    - find the sum of the array of integers
    - return the sum
*/

class Scrabble {
  static POINTS = {
    aeioulnrst: 1,
    dg: 2,
    bcmp: 3,
    fhvwy: 4,
    k: 5,
    jx: 8,
    qz: 10,
  }

  static score(str) {
    if (!str) return 0;

    let letters = str.toLowerCase().split('');
    let points = letters.map(letter => {
      for (let key in Scrabble.POINTS) {
        if (key.split('').includes(letter)) return Scrabble.POINTS[key];
      }
      return 0;
    });

    return points.reduce((acc, val) => acc + val, 0);
  }

  constructor(word) {
    this.word = word;
  }

  score() {
    return Scrabble.score(this.word);
  }
}

module.exports = Scrabble;