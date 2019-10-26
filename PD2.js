/* ZADANIE 1

ARRAY: [1,6,23,8,4,8,3,7]

1)	Create a function that returns the sum of all elements passed in array as parameter. Function (array)=>number */


// let tab = [1, 6, 23, 8, 4, 8, 3, 7];

// function add(a, b) {
//   return a + b;
// }
// console.log(tab.reduce(add));

/* ZADANIE 2
2)	Create a function that returns sum of first and last elements of given array. */

// let tab = [1, 6, 23, 8, 4, 8, 3, 7];

// function suma(tab) {
//   let a = tab[0] + tab.length - 1;
//   return a;
// }
// console.log(suma(tab));



/* ZADANIE 3
3)	Create a function that takes a number and return factorial of that number. */


// let tab = [1, 6, 23, 8, 4, 8, 3, 7];


// for(i=0; i<tab.length; i++) {
// let n = tab[i]

// function factorial(n) {
  
//   if ((n === 0) || (n === 1))
//     return 1;
//   else
//     return (n * factorial(n - 1));
    
// }
// console.log(factorial(n));
// }


/* ZADANIE 4
4)	Create a function that returns given array in reverse order. // no build in functions  tab.reverse() */

// let items = [1, 6, 23, 8, 4, 8, 3, 7];
// console.log(reverseItems(items));

// function reverseItems(items) {
//   let result = [];
//   for (let i = items.length - 1; i >= 0; i--) {
//     result.push(items[i]);
//   }
//   return result;
// }


/* ZADANIE 5
5)	Create a function that based on given array returns new array in pattern 
[a,b,c,d,e,f] -> [a+b, c+d, e+f] 
[1,3,4,1,0,3] => [4,5,3] function(array)=>array */


// let items = [1, 6, 23, 8, 4, 8, 3, 7];

// console.log(retNewArray(items));

// function retNewArray(items) {
//   let result = [];
//   for (let i = 0; i < items.length; i += 2) {
//     result.push(items[i] + items[i + 1]);
//   }
//   return result;
// }




/* ZADANIE 6
6)	For time of this example remove last element from the given array.
 Create a function that based on given array return new array in pattern [a,b,c,d,e] -> [a+b, c+d, e+e] */

//  let items = [1, 6, 23, 8, 4,];

//  console.log(retNewArray(items));
 
//  function retNewArray(items) {
//    let result = [];
//    for (let i = 0; i < items.length; i += 2) {
//      if (i + 1 < items.length) {
//        result.push(items[i] + items[i + 1]);
//      } else {
//        result.push(items[i] * 2);
//      }
//    }
//    return result;
//  }

/* ZADANIE 7 
7)	Create a function the return one random element from given array. */

// let items = [1, 6, 23, 8, 4, 8, 3, 7];

// function randomNumber(items) {

//   return items[Math.floor(Math.random()*items.length)]; 
// }
// console.log(randomNumber(items));




/* ZADANIE 8 
8)	Create a function that takes two parameters: array and number off attempts.
Based on number of attempts choose a random number from table that many times and return lowest one. */

// let items = [1, 6, 23, 8, 4, 8, 3, 7];
// let numOffAtempts = 3;

// function a(items, numOffAtempts) {

//   return items[Math.floor(Math.random()*numOffAtempts)
// }

// console.log(Math.min(a))

/* ZADANIE 9
9)	Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. 
This takes place as long as there are elements in source array. */

// let items = [1, 6, 23, 8, 4, 8, 3, 7];
// let resultArray = [];

// while (items.length) {
//   let randomIndex = items[Math.floor(Math.random()*items.length)];
//   resultArray.push(items[randomIndex]);
//   items.splice(randomIndex, 1);
// }
// console.log(resultArray);




/* ZADANIE 11
 11) Create a function that will return the current day name in Polish. */


// function retPolishDayName() {
//   let days = [
//     "Niedziela",
//     "Poniedziałek",
//     "Wtorek",
//     "Środa",
//     "Czwartek",
//     "Piątek",
//     "Sobota"
//   ];

//   return days[new Date().getDay()];
// }
// console.log(retPolishDayName());

/* ZADANIE 12
12) Create a function that tells us how many days till Friday. */


// function kiedyPiatek() {
//   return 5 - new Date().getDay();
// }
// console.log(kiedyPiatek());

/* ZADANIE 13
13) Create a function that take two numbers and return the object with 4 fields 
 Result on 4 basic arithmetic operations.  */

// let x = 1, y = 2;

// function createObject(x, y) {
//   return { add: x + y, sub: x - y, mul: x * y, div: x / y };
// }
// console.log(createObject(x, y));