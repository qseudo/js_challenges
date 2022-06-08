'use strict';

/*
  - class `Meetup`

    - constructor
      - input: month number, year

    - `day` method
      - input: day (string), schedule (string)
        - day can be 'monday', 'tuesday', 'wednesday', etc.
          - case insensitive
        - schedule can be 'first', 'second', 'third', 'fourth', 'fifth', 'last', 'teenth'
          - 'teenth' means 13-19 day (inclusive)
          - case insensitive
      - output: date as string

  - static DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  - datesOfDays = [];
  - iterate through the dates of the month
    - if the current date is a (DAY)
      - push date to datesOfDays
    - return schedule - 1 index
  - 
*/
class Meetup {
  static DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  static SCHEDULES = ['first', 'second', 'third', 'fourth', 'fifth'];
  static TEENTH_DATES = [13, 14, 15, 16, 17, 18, 19];

  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  findAllDatesOfDay(day) {
    const datesOfDay = [];
    const fullDate = new Date(this.year, this.month - 1);
    const idxOfDay = Meetup.DAYS.indexOf(day);

    let currentDate = 1;
    while (new Date(this.year, this.month - 1, currentDate).getMonth() === this.month - 1) {
      fullDate.setDate(currentDate);
      if (fullDate.getDay() === idxOfDay) datesOfDay.push(currentDate);
      currentDate += 1;
    }
    return datesOfDay;
  }

  findTeenthDateOfDay(day) {
    const fullDate = new Date(this.year, this.month - 1);
    const idxOfDay = Meetup.DAYS.indexOf(day);

    for (let idx = 0; idx < Meetup.TEENTH_DATES.length; idx += 1) {
      let currentDate = Meetup.TEENTH_DATES[idx];
      fullDate.setDate(currentDate);
      if (fullDate.getDay() === idxOfDay) return currentDate;
    }
  }

  day(day, schedule) {
    day = day.toLowerCase();
    schedule = schedule.toLowerCase();

    if (schedule === 'teenth') return new Date(this.year, this.month - 1, this.findTeenthDateOfDay(day));
    const datesOfDay = this.findAllDatesOfDay(day);
    if (schedule === 'last') return new Date(this.year, this.month - 1, datesOfDay[datesOfDay.length - 1]);

    if (schedule === 'first') return new Date(this.year, this.month - 1, datesOfDay[0]);
    if (schedule === 'second') return new Date(this.year, this.month - 1, datesOfDay[1]);
    if (schedule === 'third') return new Date(this.year, this.month - 1, datesOfDay[2]);
    if (schedule === 'fourth') return new Date(this.year, this.month - 1, datesOfDay[3]);
    if (schedule === 'fifth') return datesOfDay.length < 5 ? null : new Date(this.year, this.month - 1, datesOfDay[4]);
  }
}

let day = new Meetup(2015, 10);
console.log(day.day('wednesday', 'fifth'));

module.exports = Meetup;