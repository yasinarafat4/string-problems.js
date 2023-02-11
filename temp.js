let first = 5;
let second = 7;

//approach 1
// const temp = first;
// first = second;
// second = temp;

//approach 2 ---------------- Destructuring

[first, second] = [second, first];
console.log(first, second);
