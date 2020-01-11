let array = [1, 1, 1, 2, 1, 1, 1, 1];
let arrayObject = array.map((val, ind) => {
  return { value: val, index: ind };
});
// console.log(arrayObject);
let a = [];
let b = [];
let c = [];

for (i = 0; i < 3; i++) {
  const randomId = Math.floor(Math.random() * arrayObject.length);
  a.push(arrayObject.splice(randomId, 1));
}

for (i = 0; i < 3; i++) {
  const randomId = Math.floor(Math.random() * arrayObject.length);
  b.push(arrayObject.splice(randomId, 1));
}

for (i = 0; i < 2; i++) {
  const randomId = Math.floor(Math.random() * arrayObject.length);
  c.push(arrayObject.splice(randomId, 1));
}

a = a.flat();
b = b.flat();
c = c.flat();

// console.log(a, b, c);

let sumA = 0;
let sumB = 0;

for (i = 0; i < a.length; i++) {
  sumA += a[i].value;
}
for (j = 0; j < b.length; j++) {
  sumB += b[j].value;
}
// console.log(sumA);
// console.log(sumB);
// console.log("Two weighing’s: ");
if (sumA === sumB && c[0].value === c[1].value) {
  console.log(`All balls are the same weight.`);
} else if (sumA === sumB) {
  //   console.log(`The heavier ball is in array C: ${c}.`);
  if (c[0].value > c[1].value) {
    console.log(`The heavier ball is in array index: ${c[0].index}.`);
  } else {
    console.log(`The heavier ball is in array index: ${c[1].index}.`);
  }
} else if (sumA > sumB) {
  //   console.log(`The heavier ball is in array A: ${a}.`);
  if (a[0].value === a[1].value) {
    console.log(`The heavier ball is in array index: ${a[2].index}.`);
  } else if (a[0].value > a[1].value) {
    console.log(`The heavier ball is in array index: ${a[0].index}.`);
  } else {
    console.log(`The heavier ball is in array index: ${a[1].index}.`);
  }
} else if (sumB > sumA) {
  //   console.log(`The heavier ball is in array B: ${b}.`);
  if (b[0].value === b[1].value) {
    console.log(`The heavier ball is in array index: ${b[2].index}.`);
  } else if (b[0].value > b[1].value) {
    console.log(`The heavier ball is in array index: ${b[0].index}.`);
  } else {
    console.log(`The heavier ball is in array index: ${b[1].index}.`);
  }
}
