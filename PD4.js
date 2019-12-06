/* ZADANIE 1 
Extend String type with the reverse() function. The function is to reverse the value of the string on which it was called. */

// String.prototype.reverseString = function() {
//   console.log(
//     this.split("") //zamienia string na tablice
//       .reverse() //odrawca tablice
//       .join("") //łaczy tablice w string
//   );
// };
// "Krzysiek".reverseString();

/* ZADANIE 2
Extend Number type with the reverse() function. The function is to reverse the value of the Number on which it was called. */

// Number.prototype.reverseNumber = function() {
//   let numberToString = this.toString(); // zamina number w string
//   console.log(
//     parseInt(
//       // zamiana stringa w number
//       numberToString
//         .split("")
//         .reverse()
//         .join("")
//     )
//   );
// };
// (123456789).reverseNumber();

/* ZADANIE 3
Based on included JSON file. 
a.	Create a function that will return Json from the file. a
b.	Create a structures to hold data from the file. b
c.	Map data from function a to structure from b.
d.	Create object that will give us data about:
i.	How much money was spend in 2014
ii.	What company was earning how much
iii.	What type on transaction was having what spending’s.
iv.	Values of the spending in each month
v.	Values of the spending in each day of the week. */

// Create a function that will return Json from the file. a
const jsonObject = require("./Data.json");

// Create a structures to hold data from the file. b
function DetailsOfPayment(type, company, date) {
  this.type = type;
  this.company = company;
  this.date = new Date(date);
}

function MainEntry(id, cost, type, company, date) {
  this.id = id;
  this.cost = parseFloat(cost);
  this.details = new DetailsOfPayment(type, company, date);
}

// Map data from function a to structure from b.
const paymentsData = jsonObject.map(
  item =>
    new MainEntry(
      item._id,
      item.cost,
      item.detailsOfPayent.Type,
      item.detailsOfPayent.company,
      item.detailsOfPayent.date
    )
);

// Create object that will give us data about:
function PaymentsInfo(paymentsData) {
  this.paymentsData = paymentsData;
  this.transactionTypes = [];
  this.months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  this.weekDays = [0, 1, 2, 3, 4, 5, 6];

  // How much money was spend in 2014
  this.getMoneySpentIn2014 = function() {
    return this.paymentsData
      .filter(entry => entry.details.date.getFullYear() === 2014)
      .reduce((acc, item) => acc + parseFloat(item.cost), 0);
  };

  this.setCompanies = function() {
    this.companies = this.paymentsData
      .map(item => item.details.company)
      .filter((item, index, array) => array.indexOf(item) === index);
  };

  this.setTransactionTypes = function() {
    this.transactionTypes = this.paymentsData
      .map(item => item.details.type)
      .filter((item, index, array) => array.indexOf(item) === index);
  };

  // What company was earning how much
  this.getCompaniesEarnings = function() {
    this.setCompanies();
    return this.companies.map(company => ({
      companyName: company,
      earnings: this.paymentsData.reduce((acc, item) => {
        if (item.details.company === company) {
          return acc + item.cost;
        }
        return acc;
      }, 0)
    }));
  };

  // What type on transaction was having what spending’s.
  this.getTransactionsEarnings = function() {
    this.setTransactionTypes();
    return this.transactionTypes.map(transactionType => ({
      transactionType,
      earnings: this.paymentsData.reduce((acc, item) => {
        if (item.details.type === transactionType) {
          return acc + item.cost;
        }
        return acc;
      }, 0)
    }));
  };

  // Values of the spending in each month
  this.getMonthlyEarnings = function() {
    return this.months.map(month => ({
      month,
      earnings: this.paymentsData.reduce((acc, item) => {
        if (item.details.date.getMonth() === month) {
          return acc + item.cost;
        }
        return acc;
      }, 0)
    }));
  };

  // Values of the spending in each day of the week
  this.getDailyEarnings = function() {
    return this.weekDays.map(day => ({
      day,
      earnings: this.paymentsData.reduce((acc, item) => {
        if (item.details.date.getDay() === day) {
          return acc + item.cost;
        }
        return acc;
      }, 0)
    }));
  };
}

const paymentInfo = new PaymentsInfo(paymentsData);

console.log(paymentInfo.getMoneySpentIn2014());
console.log(paymentInfo.getCompaniesEarnings());
console.log(paymentInfo.getTransactionsEarnings());
console.log(paymentInfo.getMonthlyEarnings());
console.log(paymentInfo.getDailyEarnings());
