class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(arr) {
    /*
    input:
      - array of strings
    output:
      - array of strings that contains anagrams of `word` only

    rules:
      - is an anagram if its a word created with same letters rearranged
      - case insensitive
      - identical word is not an anagram
      - no match returns empty array

    ant -> tan
    master -> maters, stream X bers
    corn -> cron
    listens -> inlets
    allergy -> gallery, largely, regally

    - create empty array []
    - iterate through each word of the input array
      - split the word into an array
      - iterate through the letters of the word property
        - if the current letter is in the array,
          - remove it from the array
          else
          -  break
        - if the split word length is 0, then push the word to result array
    */
    let result = [];
    let baseWord = this.word.toLowerCase();
    for (let idx = 0; idx < arr.length; idx += 1) {
      let word = arr[idx].toLowerCase();
      if (word === baseWord) continue;

      let letters = word.split('');
      for (let idy = 0; idy < baseWord.length; idy += 1) {
        let currentChar = baseWord[idy];
        let idxOfMatch = letters.indexOf(currentChar);

        if (idxOfMatch >= 0) {
          letters.splice(idxOfMatch, 1);
        } else {
          break;
        }
      }

      if (letters.length === 0) result.push(arr[idx]);
    }
    return result;
  }
}

module.exports = Anagram;

let word = new Anagram('master');
console.log(word.match(['stream', 'pigeon', 'maters', 'master']));