// Split

const poemLine =
  "My heart aches, and a drowsy numbness pains. My sense, as though of hemlock I had drunk,";
const parts = poemLine.split(" ");
// console.log(parts);

const sentence = poemLine.split(".");
// console.log(sentence);

const character = poemLine.split("");
// console.log(character);

// Slice

// const poemLineOne = "My heart aches, and a drowsy numbness pains.";

// const partial = poemLineOne.substring(2, 14);
// console.log(partial);

//Join
const LineOne = ["My heart aches. A drowsy numbness. Pains."];
const joinSentence = LineOne.join(":");
console.log(joinSentence);
