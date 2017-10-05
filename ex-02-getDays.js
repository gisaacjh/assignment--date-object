/**
 * Write a JavaScript function to get the number of days in a month.
 */



function daysInMonth(year, month) {
  let monthIndex;

  switch (month) {
    case "January": {
      monthIndex = 1;
      break;
    }
    case "February": {
      monthIndex = 2;
      break;
    }
    case "March": {
      monthIndex = 3;
      break;
    }
    case "April": {
      monthIndex = 4;
      break;
    }
    case "May": {
      monthIndex = 5;
      break;
    }
    case "June": {
      monthIndex = 6;
      break;
    }
    case "July": {
      monthIndex = 7;
      break;
    }
    case "August": {
      monthIndex = 8;
      break;
    }
    case "September": {
      monthIndex = 9;
      break;
    }
    case "October": {
      monthIndex = 10;
      break;
    }
    case "November": {
      monthIndex = 11;
      break;
    }
    case "December": {
      monthIndex = 12;
      break;
    }
  }

  return new Date(year, monthIndex, 0).getDate();
}



console.log("[1] Check that `daysInMonth` is a function ")
console.assert( typeof daysInMonth === 'function' )
console.log("[1] ==================================================")
console.log()

console.log("[2] Should return 29 when asking for February, 2008")
console.assert( daysInMonth(2008, "February") === 29 )
console.log("[2] ==================================================")
console.log()

console.log("[3] Should return 31 when asking for January, 2016")
console.assert( daysInMonth(2016, "January") === 31 )
console.log("[3] ==================================================")
console.log()

console.log("[4] Should return 30 when asking for November, 1991")
console.assert( daysInMonth(1991, "November") === 30 )
console.log("[4] ==================================================")
console.log()

console.log("[5] Should return 29 when asking for February, 1996")
console.assert( daysInMonth(1996, "February") === 29 )
console.log("[5] ==================================================")
console.log()
