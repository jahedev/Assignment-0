/*
var nocapital = new Set([
  "above",
  "across",
  "after",
  "at",
  "around",
  "before",
  "behind",
  "below",
  "beside",
  "between",
  "by",
  "down",
  "during",
  "for",
  "from",
  "in",
  "inside",
  "onto",
  "of",
  "off",
  "on",
  "out",
  "through",
  "in",
  "inside",
  "onto",
  "of",
  "off",
  "on",
  "out",
  "through",
  "to",
  "under",
  "up",
  "with",
  "a",
  "an",
  "the",
  "who",
  "for",
  "and",
  "nor",
  "but",
  "or",
  "yet",
  "so",
]);
*/
function titleCaseEdit(title) {
  let words = title.split(" ");
  let newTitle = "";
  for (const word of words) {
    newTitle =
      newTitle +
      word.charAt(0).toUpperCase() +
      word.slice(1).toLowerCase() +
      " ";
  }
  return newTitle.trim();
}

// Do not edit this line;
module.exports = titleCaseEdit;
