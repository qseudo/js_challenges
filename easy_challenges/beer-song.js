/**
  req:
    - `BeerSong` object
      - `verse` method
        input:
          - integer 0-99
        output:
          - string
      - `verses` method
        input:
          - 2 integers, (larger, smaller), both from 0-99, inclusive
        output:
          - string
      - `lyrics` method (entire song)
    - clauses separated by \n\n
    - 'bottles' for all cases except 1, then 'bottle'
    - 0 bottles has its own special clause

    single verse:
    "1 bottle of beer on the wall, 1 bottle of beer.\n" +
    "Take it down and pass it around, no more bottles " +
    "of beer on the wall.\n"

    multi verse (note \n\n):
    "99 bottles of beer on the wall, 99 bottles of beer.\n" +
    "Take one down and pass it around, 98 bottles of beer " +
    "on the wall.\n\n98 bottles of beer on the wall, " +
    "98 bottles of beer.\nTake one down and pass it " +
    "around, 97 bottles of beer on the wall.\n"

    - single verse template:
    "${number} bottles of beer on the wall, ${number} bottles of beer.\n" +
    "Take it down and pass it around, ${number} bottles " +
    "of beer on the wall.\n"

    verse:
      - return the template, but with number replaced with the number
 */

let BeerSong = {
  singleVerseTemplate: `number bottles of beer on the wall, number bottles of beer.\n` +
  `Take one down and pass it around, nextNumber bottles ` +
  `of beer on the wall.\n`,

  noBottlesVerse: "No more bottles of beer on the wall, no more " +
  "bottles of beer.\nGo to the store and buy some " +
  "more, 99 bottles of beer on the wall.\n",

  oneBottleVerse: "1 bottle of beer on the wall, 1 bottle of beer.\n" +
  "Take it down and pass it around, no more bottles " +
  "of beer on the wall.\n",

  verse(number) {
    let verse;
    if (number === 0) {
      verse = this.noBottlesVerse;
    } else if (number === 1) {
      verse = this.oneBottleVerse;
    } else {
      verse = this.singleVerseTemplate;
      verse = verse.replace(/\bnumber\b/gi, number);
      verse = verse.replace(/\bnextNumber\b/gi, number - 1);
    }

    return number === 2 ? verse.replace(/\b1 bottles\b/gi, '1 bottle') : verse;
  },

  verses(from, to) {
    let verses = this.verse(from);
    for (let verseNumber = from - 1; verseNumber >= to; verseNumber -= 1) {
      verses += '\n' + this.verse(verseNumber);
    }
    return verses;
  },

  lyrics() {
    return this.verses(99, 0);
  }
};

module.exports = BeerSong;