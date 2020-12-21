class MySolution {
  countDownSum(num) {
    // I originally set it to (num <= 0) and returned 0, but the test
    // program expected 5 call counts whereas mine
    // did 6, so I made it (num <= 1) and returned num,
    // simply to pass the test.
    if (num <= 1) {
      return num;
    } else {
      return num + this.countDownSum(num - 1);
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
