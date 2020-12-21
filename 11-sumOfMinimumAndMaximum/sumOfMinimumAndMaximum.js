function sumOfMinimumAndMaximum(nums) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;

  for (const num of nums) {
    if (num < min) {
      min = num;
    }

    if (num > max) {
      max = num;
    }
  }

  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
