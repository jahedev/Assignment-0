function isPalindrome(word) {
  if (word.trim() === "") return false;

  let middle = Math.floor(word.length / 2);
  for (let i = 0; i < middle; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
