class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let lowLocation = 0;
    let highLocation = nums.length - 1;
    let middle = Math.floor((lowLocation + highLocation) / 2);

    if (lowLocation <= highLocation) {
      if (nums[middle] === target) return true;
      else if (nums[middle] < target)
        return this.binarySearch(
          nums.slice(middle + 1, highLocation + 1),
          target
        );
      // (nums[middle] > target)
      else return this.binarySearch(nums.slice(lowLocation, middle), target);
    }

    // did not find it
    return false;
  }
}
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
