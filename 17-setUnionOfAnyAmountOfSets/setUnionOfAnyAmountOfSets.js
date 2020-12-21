function setUnionOfAnyAmountOfSets(...args) {
  let newSet = new Set();
  for (const set of args) {
    for (let el of set) {
      newSet.add(el);
    }
  }
  return newSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
