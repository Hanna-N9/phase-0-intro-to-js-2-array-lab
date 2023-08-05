// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

// appends a cat to the end of the cats array - destructive
function destructivelyAppendCat(name) {
  cats.push(name);
}

//prepends a cat to the beginning of the cats array - destructive
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

//removes the last cat from the cats array - destructive
function destructivelyRemoveLastCat() {
  cats.pop();
}

//removes the first cat from the cats array - destructive
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// appends a cat to the end of the cats array - nondestructive
function appendCat(name) {
  const copyCats = [...cats];
  copyCats.push(name);
  return copyCats;
}

// prepends a cat to the cats array and returns a new array, leaving the cats array unchanged - nondestructive
function prependCat(name) {
  const copyCats = [...cats];
  copyCats.unshift(name);
  return copyCats;
}

// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged - nondestructive
function removeLastCat() {
  const copyCats = [...cats];
  copyCats.pop();
  return copyCats;
}

// removes the first cat from the cats array and returns a new array, leaving the cats array unchanged - nondestructive
function removeFirstCat() {
  const copyCats = [...cats];
  copyCats.shift();
  return copyCats;
}
