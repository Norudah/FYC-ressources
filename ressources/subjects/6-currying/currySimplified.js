const sum3 = (num1, num2, num3) => num1 + num2 + num3;

// Fonction curryfiée (simplifié, seulement 3 paramètres)
const curry = (fn) => {
  return function (num1) {
    return function (num2) {
      return function (num3) {
        return fn(num1, num2, num3);
      };
    };
  };
};

// Fonction "sum3" curryfiée
const curriedSum3 = curryES6(sum3);

console.log("curriedSum3", curriedSum3(1)(2)(3));
// Sortie : curriedAddVersion 6
