function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0;
  for (const num of nums) {
    count += num < target ? 1 : 0;
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
