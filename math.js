// pow(power)

const result = Math.pow(3, 2);
console.log(result);

// problem

// const firstPersonsNumber = 80;
// const secondPersonsNumber = 70;

// const gap = firstPersonsNumber - secondPersonsNumber;

// if (gap < 5) {
//   console.log("you guys can be friends");
// } else {
//   console.log("you guys stay apart");
// }

// if above number is smaller
//abs (absolute)
const firstPersonsNumber = 60;
const secondPersonsNumber = 70;

const gap = Math.abs(firstPersonsNumber - secondPersonsNumber);

if (gap < 5) {
  console.log("you guys can be friends");
} else {
  console.log("you guys stay apart");
}

// round

// const number = 2.4657;
// const fullNumber = Math.round(number);

// console.log(fullNumber);
//ceil
// const number = 2.475;
// const fullNumber = Math.ceil(number);

// console.log(fullNumber);

// //floor
// const number = 2.999;
// const fullNumber = Math.floor(number);

// console.log(fullNumber);

// random

// console.log(Math.random());

// const random = Math.random() * 100;
// console.log(random);

// for (let i = 0; i < 20; i++) {
//   const random = Math.random() * 6;
//   console.log(random);
// }

for (let i = 0; i < 20; i++) {
  const random = Math.round(Math.random() * 6);
  console.log(random);
}
