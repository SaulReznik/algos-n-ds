// // Given an unordered list of 3 integers, write a function to check if they can be arranged to form a valid date.

// // YY/DD/MM
// // YYYY/DD/MM

// // (2000, 14 , 3)
// // valid

// // (2000, 3, 2000)
// // invalid

// // Year: Y > 0
// // Month: M > 0 && M < 13
// // Day: D > 0 && Y % 4 === 0 && M === 2 ? 29 : M 

// const DAYS_IN_MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// const isYear = year => year > 0;

// const isMonth = month => month > 0 && month < 13;

// const isDay = (day, month, year) => {
//   if (isMonth(month) && isYear(year)) throw new Error('Invalid month or year');

//   let daysInCurrentMonth = 0;

//   if (month === 2) {
//     daysInCurrentMonth = year % 4 === 0 ? 29 : 28;
//   } else {
//     daysInCurrentMonth = DAYS_IN_MONTHS[month - 1];
//   }

//   return day > 0 && day <= daysInCurrentMonth;
// };

// const shuffle = arr => {
//   const helper = (index) => {
//     if (index === arr.length) return [[]];

//     const perms = [];
//     const currPerms = helper(index + 1, arr);
//     console.log(currPerms);
//     for (let i = 0; i < currPerms.length; i++) {
//       const currPerm = currPerms[i];

//       for (let j = 0; j <= currPerm.length; j++) {
//         const copyPerm = currPerm.slice();
//         copyPerm.splice(j, 0, arr[index]);
//         perms.push(copyPerm);
//       }
//     }

//     return perms;
//   };

//   return helper(0);
// }

// const isValidDate = (d1, d2, d3) => {
//   const variations = shuffle([d1, d2, d3]);
//   console.log(variations);
//   // if (isYear(d1) && isMonth(d2) && isDay(d3, d2, d1)) return true;
//   // if (isYear(d1) && isMonth(d3) && isDay(d2, d3, d1)) return true;
//   // if (isYear(d2) && isMonth(d3) && isDay(d1, d3, d2)) return true;
//   // if (isYear(d2) && isMonth(d1) && isDay(d3, d1, d2)) return true;
//   // if (isYear(d3) && isMonth(d1) && isDay(d2, d1, d2)) return true;
// };

// console.log(isValidDate(2000, 14, 3));

for(let i = 0; i < 10; i++){
  console.log('test');
};
