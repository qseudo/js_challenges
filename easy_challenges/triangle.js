let Triangle = (function() {
  let sideA;
  let sideB;
  let sideC;

  let kind;

  function allSidesGreaterThanZero() {
    return [sideA, sideB, sideC].every(side => side > 0);
  }

  function validSides() {
    return (sideA + sideB > sideC) &&
           (sideA + sideC > sideB) &&
           (sideB + sideC > sideA);
  }

  function validTriangle() {
    return validSides() && allSidesGreaterThanZero();
  }

  function getSideCounts() {
    let sideCount = {};
    let sides = [sideA, sideB, sideC];
    sides = sides.map(side => String(side));
    sides.forEach(side => {
      if (sideCount.hasOwnProperty(side)) {
        sideCount[side] += 1;
      } else {
        sideCount[side] = 1;
      }
    });
    return sideCount;
  }

  function determineKind(sideCounts) {
    let numOfDifferentSides = Object.keys(sideCounts).length;
    if (numOfDifferentSides === 3) {
      return 'scalene';
    } else if (numOfDifferentSides === 2) {
      return 'isosceles';
    } else {
      return 'equilateral';
    }
  }

  return function Triangle(input1, input2, input3) {
    sideA = input1;
    sideB = input2;
    sideC = input3;

    if (validTriangle()) {
      console.log('valid!');
    } else {
      throw Error('Invalid sides for a triangle!');
    }

    let sideCounts = getSideCounts();
    kind = determineKind(sideCounts);

    this.kind = function() {
      return kind;
    };
  };
})();

module.exports = Triangle;