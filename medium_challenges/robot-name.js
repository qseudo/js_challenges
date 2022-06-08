/*
  - when robot is created, a random name is generated
    - e.g. RX837, BC811
  - when robot is reset, name gets wiped, and a new one is generated
  - names must be random, not following a predictable sequence
  - solution should not allow the use of the same name twice

  robot name:
    - /^[A-Z]{2}\d{3}$/

  - Robot class
    - constructor function
      - input: n/a
    - name property
      - private
    - name() method
      - returns robot's name
    - reset() method
      - changes robot's name

  LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  NUMBERS = '0123456789'

  - generateName
    - set `name` to empty string
    - get a random character from LETTERS, twice
    - add each to `name`
    - get a random character from NUMBERS, three times
    - add each to `name`
*/

class Robot {
  static LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static DIGITS = '0123456789';

  static getRandomChar(database) {
    return database[Math.floor(Math.random() * database.length)];
  }

  static generateName() {
    let name = '';
    for (let count = 1; count <= 2; count += 1) {
      name += Robot.getRandomChar(Robot.LETTERS);
    }
    for (let count = 1; count <= 3; count += 1) {
      name += Robot.getRandomChar(Robot.DIGITS);
    }
    return name;
  }

  static TAKEN_NAMES = [];

  static addNameToDatabase(name) {
    Robot.TAKEN_NAMES.push(name);
  }

  static nameTaken(name) {
    return Robot.TAKEN_NAMES.includes(name);
  }

  static removeNameFromDatabase(name) {
    const idx = Robot.TAKEN_NAMES.indexOf(name);
    Robot.TAKEN_NAMES.splice(idx, 1);
  }

  constructor() {
    do {
      this.robotName = Robot.generateName();
    } while (Robot.nameTaken(this.name()));
    Robot.addNameToDatabase(this.name());
  }

  name() {
    return this.robotName;
  }

  reset() {
    const currentName = this.name();
    do {
      this.robotName = Robot.generateName();
    } while (currentName === this.name() && Robot.nameTaken(this.name()));
    Robot.addNameToDatabase(this.name());
    Robot.removeNameFromDatabase(currentName);
  }
}

module.exports = Robot;
