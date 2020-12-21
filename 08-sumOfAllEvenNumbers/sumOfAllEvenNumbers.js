function sumOfAllEvenNumbers(nums) {
  let count = 0;
  for (const num of nums) {
    count += num % 2 ? 0 : 1;
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
