// function reverseString(text) {
//   for (let i = text.length - 1; i >= 0; i--) {
//     const element = text[i];
//     console.log(element);
//   }
// }

// const myString = "I am a good boy";
// const reversed = reverseString(myString);
// function reverseString(text) {
//   for (let i = 0; i < text.length; i++) {
//     const element = text[i];
//     console.log(element);
//   }
// }

// const myString = "I am a good boy";
// const reversed = reverseString(myString);

// // Another------------------------

// function reverseString(text) {
//   let reversed = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     const element = text[i];
//     reversed = reversed + element;
//     console.log(element, reversed);
//   }
//   return reversed;
// }

// const myString = "I am a good boy";
// const reversed = reverseString(myString);
// console.log(reversed);
// reverse words------------------------
function reverseWords(str) {
  const words = str.split(" ");
  const result = [];
  for (let i = words.length - 1; i >= 0; i--) {
    const element = words[i];
    result.push(element);
  }
  console.log(result);
}
const myString = "I am a good boy";
const reverse = reverseWords(myString);
console.log(reverse);
