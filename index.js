// Given a date, return how many days date is away from next year (end date not included). date will be in mm/dd/yyyy format.

// Examples
// daysUntilNextYear("12/28/2022") ➞ "4 days"
// daysUntilNextYear("1/1/2022") ➞ "365 days"
// daysUntilNextYear("2/28/2022") ➞ "307 days"

function daysUntilNextYear(day) {
    //the new Date constructor sets up how the user will input the date and to set up the date you are comparing to
  const newYear = new Date('1/1/2023').getTime()
  const dayTime = new Date(day).getTime()
  //the number of milliseconds within one day
  const dayInMilli = 1000 * 60 * 60 * 24
  return ((newYear - dayTime) / dayInMilli) - 1
}