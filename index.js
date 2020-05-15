//===============================================
//! First trial run working (without callbacks)

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
