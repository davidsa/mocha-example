const assert = require("assert");

module.exports.div = function (a, b) {
  if (a === 0 && b === 0) return "you cannot divide 0 by 0";
  return a / b;
};

module.exports.counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};
