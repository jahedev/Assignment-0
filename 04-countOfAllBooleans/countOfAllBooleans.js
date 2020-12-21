function countOfAllBooleans(arr) {
  let numBools = 0;
  for (const el of arr) {
    numBools += typeof el === 'boolean' ? 1 : 0;
  }
  return numBools;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
