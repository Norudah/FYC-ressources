import { curry } from "./curry.js";

const sum = (num1, num2, num3) => num1 + num2 + num3;

const curriedSum = curry(sum);

const sum7 = curriedSum(7);
const sum7And20 = sum7(20);
const result = sum7And20(42);

console.log(sum7); // Fonction, manque 2 paramètres avant d'être exécutée
console.log(sum7And20); // Fonction, manque 1 paramètre avant d'être exécutée
console.log(result); // 69;
