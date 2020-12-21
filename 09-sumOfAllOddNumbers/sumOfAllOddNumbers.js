function sumOfAllOddNumbers(nums) {
  let count = 0;
  for (const num of nums) {
    count += num % 2 ? 1 : 0;
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
