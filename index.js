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

function getIncome(callback) {
  callback(650);
}

function payRent(income, callback) {
  callback(income - 200);
}

function payUtilityBills(income, callback) {
  callback(income - 87);
}

function payInternetBill(income, callback) {
  callback(income - 50);
}

getIncome(function (income, incomeAfterRent) {
  // call payRent inside "getIncome" callback
  payRent(income, function (incomeAfterRent) {
    console.log("Income after Rent: ", incomeAfterRent); //450
  });
  //! Below not correct, must change income (after bills) before calling next function
  payUtilityBills(incomeAfterRent, function (incomeAfterUtility) {
    console.log("Income after Utilities", incomeAfterUtility); //!563 (should be 363)
  });
  payInternetBill(incomeAfterInternet, function (incomeAfterInternet) {
    console.log("Income after internet", incomeAfterInternet); //!600 (should be 313)
  });
});

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
