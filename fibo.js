// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610.

const fibo = [0, 1];
for (let i = 2; i <= 15; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
