function pairSum(nums, target) {
  if (nums.length <= 1) throw Error;
  let prev_nums = new Set();
  for (const num of nums) {
    let compliment = target - num;
    if (prev_nums.has(compliment)) {
      return true;
    }
    prev_nums.add(num);
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
