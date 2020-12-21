function productOfAnyAmountOfNumbers(...args) {
  let product = 1;
  for (const arg of args) product *= arg;
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
