/*
  - clock class
    - constructor function
      - input: two integers
        - int1 0-23 inclusive (hours)
        - int2 0-59 inclusive (minutes)
          - if int2 is not supplied, def value is 0

        - clock with integers as its corresponding hours/minutes

    - static `at` method
      - input: two integers
      - returns instance object of clock with args passed in

    - `add` method
      - input: integer (minutes)
      - adds minutes to `time` property

    - `subtract` method
      - iput: integer (minutes)
      - subtracts minutes from `time` property

    - `toString` method
      - input: n.a
      - return string version of time in 'HH:MM' format

    23:30 + 45 -> 00:15
*/

class Clock {
  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  add(minutes) {
    let count = minutes;
    for (count; count > 0; count -= 1) {
      this.minutes += 1;
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours += 1;
        if (this.hours === 24) this.hours = 0;
      }
    }
    return this;
  }

  subtract(minutes) {
    let count = minutes;
    for (count; count > 0; count -= 1) {
      this.minutes -= 1;
      if (this.minutes === -1) {
        this.minutes = 59;
        this.hours -= 1;
        if (this.hours === -1) this.hours = 23;
      }
    }
    return this;
  }

  toString() {
    const hours = String(this.hours).padStart(2, '0');
    const minutes = String(this.minutes).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  isEqual(clock) {
    return (this.toString() === clock.toString());
  }
}

module.exports = Clock;
