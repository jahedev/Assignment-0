function sumOfNumsWithinARange(nums, start, end) {
  let count = 0;
  for (const num of nums) {
    count += num >= start && num <= end ? 1 : 0;
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
