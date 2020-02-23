/* 1)	Write a program that prints all prime numbers in given range. Take sub from 1-100. */
// "use strict";

// function primeNumbers(max) {
//   let store = [],
//     i,
//     j,
//     primes = [];

//   for (i = 2; i <= max; ++i) {
//     if (!store[i]) {
//       primes.push(i);
//       for (j = i <= 1; j <= max; j += i) {
//         store[j] = true;
//       }
//     }
//   }
//   return primes;
// }

// console.log(primeNumbers(100));

/* 2)	Write a guessing game where the user has to guess a secret number.
 After every guess the program tells the user whether their number was too large or too small. 
 At the end the number of tries needed should be printed. 
 It counts only as one try if they input the same number multiple times consecutively. 
Range 1-100. */

/* 3)	Write a function that rotates a list by k elements.
 For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
  Try solving this without creating a copy of the list. */

// "use strict";

// let array = [1, 2, 3, 4, 5, 6, 7, 8];

// function rotateArray(max) {
//   for (let i = 0; i < max; i++) {
//     array.push(array[0]);
//     array.splice(0, 1);
//   }
//   console.log(array);
// }
// rotateArray(4);

/* 4)	Write a class that prints the list of the first n Fibonacci numbers. 
The first two Fibonacci numbers are 1 and 1. 
The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. 
The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8. */

// "use strict";
// let fibonacci = function(n) {
//   if (n === 1) {
//     return [0, 1];
//   } else {
//     let s = fibonacci(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };

// console.log(fibonacci(6));

/* 5)	Write a code that takes a number/string and returns a list of its digits.
 So for 2342 it should return [2,3,4,2].’A243b’ -> [2,4,3]. */

// "use strict";

// let number = 173459;
// let word = "s455fgs73eyh90";

// let array = number
//   .toString()
//   .split("")
//   .map(function(item, index) {
//     return parseInt(item);
//   });

// let array1 = word.split("").map(function(item, index) {
//   return parseInt(item);
// });
// console.log(array);
// console.log(array1);

/* 6)	Write function that translates a text to Pig Latin and back.
 English is translated to Pig Latin by taking the first letter of every word,
  moving it to the end of the word and adding ‘ay’. 
  “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”. */

//   "use strict";
// const data = "The quick brown fox";

// function pigLatin(inputData) {
//   inputData = inputData.split(" ");

//   inputData = inputData.map(word => {
//     const array = word.split("");
//     array.push(array[0]);
//     array.splice(0, 1);
//     return array.join("") + "ay";
//   });

//   inputData = inputData.join(" ");

//   return inputData;
// }

// const resoult = pigLatin(data);
// console.log(resoult);
