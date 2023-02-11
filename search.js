const poemLineOne = "My heart aches, and a drowsy numbness pains";

const searchString = "heArt";
// const doesExist = poem.includes("heArt");
// console.log(doesExist);
const lowerCaseInOneLine = poemLineOne
  .toLowerCase()
  .includes(searchString.toLowerCase());
// console.log(lowerCaseInOneLine);

//-----------------------------------
//indexOf

const poemLineTwo = "My sense, as though of hemlock I had drunk,";
console.log(poemLineTwo.indexOf("hemlock"));
// Logic
if (poemLineTwo.indexOf("had") != -1) {
  console.log("Exist inside the string");
} else {
  console.log("Can not find it");
}

//startsWith

console.log(poemLineTwo.startsWith("M"));

//endsWith
console.log(poemLineTwo.endsWith(","));
