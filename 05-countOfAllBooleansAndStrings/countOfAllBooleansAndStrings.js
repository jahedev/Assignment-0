function countOfAllBooleansAndStrings(arr) {
  let count = 0;
  for (const el of arr) {
    const type = typeof el;
    if (type === 'boolean' || type === 'string') {
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
