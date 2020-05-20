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

//* =======================
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

//* ===============================================
//! Promises

// let promise = new Promise(function (resolve, reject) {
//   // not taking our time to do the job
//   resolve(123); // immediately give the result: 123
//   reject(new Error("…")); // ignored
//   setTimeout(() => resolve(123), 5000); // ignored
// });

// console.log(promise);

//* ===========================
//* .then

//? The first argument of .then is a function that runs when the promise is resolved, and receives the result.
//? The second argument of.then is a function that runs when the promise is rejected, and receives the error.
//? For instance, here’s a reaction to a successfully resolved promise:

// let promise = new Promise(function (resolve, reject) {
//   // setTimeout(() => resolve("done!"), 1000);
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// // resolve runs the first function in .then
// promise.then(
//   (result) => console.log(result), // shows "done!" after 1 second
//   (error) => console.log(error) // doesn't run
// );

//======
//? If we’re interested only in successful completions, then we can provide only one function argument to.then:

// let promise = new Promise((resolve) => {
//   setTimeout(() => resolve("done!"), 1000);
// });

// promise.then((result) => console.log(result)); // shows "done!" after 1 second

//* ===========================
//* .catch

//? If we’re interested only in errors, then we can use null as the first argument: .then(null, errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("whoops!"), 1000));
// });

// //? .catch(f) is the same as promise.then(null, f)
// promise.catch((error) => console.log(error));
// promise.then(null, () => {
//   console.log(promise);
// });

//* ===========================
//* .finally

//? Just like there’s a finally clause in a regular try {...} catch {...}, there’s finally in promises.
//? The call.finally(f) is similar to.then(f, f) in the sense that f always runs when the promise is settled: be it resolve or reject.

//? finally is a good handler for performing cleanup, e.g.stopping our loading indicators, as they are not needed anymore, no matter what the outcome is.

// new Promise((res, rej) => {
//   // Do Something that takes time, and then call resolve/reject
// })
//   // Runs when the promise is settled, doesn't matter successfully or not
//   .finally(() => /* Stop loading indicator*/)
//   .then((result) => /* Show Results, err => show error */)

//* ===========================
//* Promise Practice

// let p = new Promise((res, rej) => {
//   let a = 2;
//   if (a == 2) {
//     console.log("success: a = 2");
//     res("success");
//   } else {
//     console.log(`fail: a = ${a}`);
//     rej("failed");
//   }
// });

// p.then((message) => {
//   console.log(`this is in the then: ${message}`);
// }).catch((message) => {
//   console.log("error in catch: " + message);
// });

// let p = new Promise((res, rej) => {
//   let a = 2;
//   if (a == 2) {
//     console.log("success: a = 2");
//     res("success");
//   } else {
//     console.log(`fail: a = ${a}`);
//     rej("failed");
//   }
// });

// p.then((message) => {
//   console.log(`this is in the then: ${message}`);
// }).catch((message) => {
//   console.log("error in catch: " + message);
// });

//=============

// const recordVideoOne = new Promise((res, rej) => {
//   res("video 1 recorded");
// });
// const recordVideoTwo = new Promise((res, rej) => {
//   res("video 2 recorded");
// });
// const recordVideoThree = new Promise((res, rej) => {
//   res("video 3 recorded");
// });

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (message) => {
//     console.log("recordings: " + message);
//   }
// );
// Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (message) => {
//     console.log("recordings: " + message);
//   }
// );

//===============
//! Promise Test: Write a promise that logs 1,2,3 in order

// let numberOne = new Promise((res, rej) => {
//   res("1");
//   rej("err");
// });
// let numberTwo = new Promise((res, rej) => {
//   res("2");
//   rej("err");
// });
// let numberThree = new Promise((res, rej) => {
//   res("3");
//   rej("err");
// });

// Promise.all([numberOne, numberTwo, numberThree])
//   .then((messages) => {
//     console.log(messages);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// numberOne.then((message) => {
//   if (message == "2") {
//     console.log(`numberOne working: ${message}`);
//   } else {
//     console.log(`numberOne failed: ${message} != 2`);
//   }
// });

//*===============================================================
//* Async/Await Section.

function makeRequest(location) {
  return new Promise((res, rej) => {
    console.log("making request to " + location);
    if (location == "google") {
      res("Google says Hi!");
    } else {
      rej("Sorry, we can only speak with google at this time");
    }
  });
}
function processRequest(response) {
  return new Promise((res, rej) => {
    console.log("processing response");
    res(`Extra Information + ${response}`);
  });
}

//! This code gets replaced by async await (below)
// makeRequest("google")
//   .then((response) => {
//     console.log("response received");
//     return processRequest(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//!=================================

//* now with Async Await -----------
//* You will find that using Async/await creates cleaner code. Instead of .then/.catch, we use try/catch

async function doWork() {
  try {
    console.log("- response received -");
    const response = await makeRequest("facebook");
    // Returns logs + "Resolve" section of Promise ("making request to google" + "Google says Hi!")
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork();

//? Step 1: create promises (new Promis((response, reject) => {})) like normal
//? Step 2: When calling on a function with a promise, using Async Await w/ try/catch (cleaner than .then/.catch)

//! NOW GET OUT THERE AND PRACTICE IN REAL WORLD PROJECTS!!!!
//===============================================
//! My Personal First trial Run - working (without callbacks). Totals pushed to "newIncome" array
//! Though this is not how callbacks work, I still managed to get this working properly!!!

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
