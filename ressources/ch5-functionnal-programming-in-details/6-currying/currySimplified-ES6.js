const sum3 = (num1, num2, num3) => num1 + num2 + num3;

// Fonction curryfiée (simplifié, seulement 3 paramètres)
const curryES6 = (fn) => (num1) => (num2) => (num3) => fn(num1, num2, num3);

// Fonction "sum3" curryfiée
const curriedSum3 = curryES6(sum3);

console.log("curriedSum3", curriedSum3(1)(2)(3));
// Sortie : curriedAddVersion 6
