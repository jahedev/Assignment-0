function fizzBuzz(start, end) {
  let output = [];
  for (let i = start; i <= end; i++)
    output.push(
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i
    );
  return output;
}

// Do not edit this line;
module.exports = fizzBuzz;
