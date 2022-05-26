/*
  - constructor function
    - input: string, that's set to `strand` property
    - output: DNA object with `hammingDistance` method
      - `hammingDistance` takes string similar to `strand`

  - hammingDistance
    -input: another strand
    -output: integer
    -rules:
      - hammingDistance is an integer representing # of differences
      between two strands
      - if lengths !=, then find differences up until the shorter length
      - no input validation?

  - set `hammingDistance` = 0
  - set `length` to shorter of the two strands
  - iterate through the idx of the strings up until `length`
    - if the char at idx of both strings match, hammingDistance += 1
  - return hammingDistance
*/

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(secondStrand) {
    let hammingDistance = 0;
    let length = this.strand.length <= secondStrand.length ?
      this.strand.length : secondStrand.length;

    for (let idx = 0; idx < length; idx += 1) {
      if (this.strand[idx] !== secondStrand[idx]) hammingDistance += 1;
    }
    return hammingDistance;
  }
}

module.exports = DNA;