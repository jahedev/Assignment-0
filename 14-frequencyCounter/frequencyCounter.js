function frequencyCounter(word) {
  let chars = new Map();
  for (const c of word) {
    if (chars.has(c)) {
      chars.set(c, chars.get(c) + 1);
    } else {
      chars.set(c, 1);
    }
  }
  return Object.fromEntries(chars);
}

// Do not edit this line;
module.exports = frequencyCounter;
