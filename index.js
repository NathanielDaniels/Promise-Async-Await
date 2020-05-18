//* Step 1

// function getIncome(callback) {
//   // (#2) The callback is then called with 650 as it's argument
//   callback(650);
// }

// // (#1) call getIncome function with a callback as an argument
// getIncome(function (income) {
//   // (#3) income is set to 650
//   console.log(income); //650
// });

//=======================
//* Step 2

// function getIncome(callback) {
//   callback(650);
// }

// function payRent(income, callback) {
//   callback(income - 200);
// }

// function payUtilityBills(income, callback) {
//   callback(income - 87);
// }

// function payInternetBill(income, callback) {
//   callback(income - 50);
// }
// function payPhoneCharges(income, callback) {
//   callback(income - 75);
// }
// function payForRepairs(income, callback) {
//   callback(income - 66);
// }

// getIncome(function (income) {
//   // call payRent inside "getIncome" callback
//   payRent(income, function (incomeAfterRent) {
//     console.log("Income after Rent: ", incomeAfterRent); //450
//     // return (income = incomeAfterRent);
//     payUtilityBills(incomeAfterRent, function (incomeAfterUtility) {
//       console.log("Income after Utilities", incomeAfterUtility); //363
//       // return (income = incomeAfterUtility);
//       payInternetBill(incomeAfterUtility, function (incomeAfterInternet) {
//         console.log("Income after internet", incomeAfterInternet); //313
//         // return (income = incomeAfterInternet);
//         payPhoneCharges(incomeAfterInternet, function (incomeAfterPhone) {
//           console.log("Income after Phone:", incomeAfterPhone);
//           payForRepairs(incomeAfterPhone, function (incomeAfterRepairs) {
//             console.log(`Income after Repairs:`, incomeAfterRepairs);
//             console.log(`Total left: $${incomeAfterRepairs}`);
//           });
//         });
//       });
//     });
//   });
// });

//===============================================
//! Promises

let promise = new Promise(function (resolve, reject) {
  // not taking our time to do the job
  // resolve(123); // immediately give the result: 123
  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});

console.log(promise);

//===============================================
//! First trial run working (without callbacks). Totals pushed to "newIncome" array

// let newIncome = [];
// const getIncome = (income, callback) => {
//   const bills = {
//     payRent: 200,
//     payUtilityBills: 87,
//     payInternetBill: 50,
//     payPhoneCharges: 75,
//     payForRepairs: 66,
//   };
//   for (bill in bills) {
//     newIncome.push(income - bills[bill]);
//     income = income - bills[bill];
//   }
//   console.log(newIncome);
//   console.log("What's left: ", income); //172
// };

// getIncome(650, function () {});

//===============================================
//!Testing Callback knowledge.
// let Hello = (name, callback) => {
//   console.log(callback(), name)
// }

// Hello('Mr. Daniels', function () {
//   return 'working'
// })
