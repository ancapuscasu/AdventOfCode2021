//expected answer: 1226
const { readFileSync } = require("fs");
const path = require("path");

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);

  return arr;
}

const arr = syncReadFile(path.resolve(__dirname, "input.txt"));

console.log(arr);

let numIncreases = 0;

for (let i = 1; i < arr.length; i++) {
  if (parseInt(arr[i]) > parseInt(arr[i - 1])) {
    numIncreases++;
  }
}

console.log(numIncreases);
console.log(arr[arr.length - 1]);
