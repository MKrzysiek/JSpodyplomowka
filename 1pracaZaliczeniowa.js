let array = [1, 1, 1, 2, 1, 1, 1, 1];
// console.log(array);
let a = [];
let b = [];
let c = [];

for (i = 0; i < 3; i++) {
  const randomId = Math.floor(Math.random() * array.length);
  a.push(array.splice(randomId, 1));
}

for (i = 0; i < 3; i++) {
  const randomId = Math.floor(Math.random() * array.length);
  b.push(array.splice(randomId, 1));
}

for (i = 0; i < 2; i++) {
  const randomId = Math.floor(Math.random() * array.length);
  c.push(array.splice(randomId, 1));
}

a = a.flat();
b = b.flat();
c = c.flat();

console.log(a, b, c);

let sumA = 0;
let sumB = 0;

for (i = 0; i < a.length; i++) {
  sumA += a[i];
}
for (let j = 0; j < b.length; j++) {
  sumB += b[j];
}
// console.log(sumA);
// console.log(sumB);
console.log("Two weighing’s: ");
if (sumA === sumB && c[0] === c[1]) {
  console.log(`All balls are the same weight.`);
} else if (sumA === sumB) {
  console.log(`The heavier ball is in array C: ${c}.`);
  if (c[0] > c[1]) {
    console.log(`The heavier ball is in array C index 0: ${c[0]}.`);
  } else {
    console.log(`The heavier ball is in array C index 1: ${c[1]}.`);
  }
} else if (sumA > sumB) {
  console.log(`The heavier ball is in array A: ${a}.`);
  if (a[0] === a[1]) {
    console.log(`The heavier ball is in array A index 2: ${a[2]}.`);
  } else if (a[0] > a[1]) {
    console.log(`The heavier ball is in array A index 0: ${a[0]}.`);
  } else {
    console.log(`The heavier ball is in array A index 1: ${a[1]}.`);
  }
} else if (sumB > sumA) {
  console.log(`The heavier ball is in array B: ${b}.`);
  if (b[0] === b[1]) {
    console.log(`The heavier ball is in array B index 2: ${b[2]}.`);
  } else if (b[0] > b[1]) {
    console.log(`The heavier ball is in array B index 0: ${b[0]}.`);
  } else {
    console.log(`The heavier ball is in array B index 1: ${b[1]}.`);
  }
}
