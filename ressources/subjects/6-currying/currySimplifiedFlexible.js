const sum3 = (num1, num2, num3) => num1 + num2 + num3;

const curry = (fn) => {
  return function (num1) {
    return function (num2) {
      return function (num3) {
        return fn(num1, num2, num3);
      };
    };
  };
};

const curriedSum3 = curry(sum3);

const notTheResultButAlmost = curry(sum3)(1)(2);
console.log("notTheResultButAlmost", notTheResultButAlmost);

// Make some process... and get the final parameter anyway
const finalparam = 3;

const result = notTheResultButAlmost(finalparam);
console.log("result", result);
// Sortie : curriedAddVersion 6
