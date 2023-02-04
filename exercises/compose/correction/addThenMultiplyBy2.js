import { compose } from "./compose.js";

const add = (x) => x + x;
const multiplyBy2 = (x) => x * 2;
const addThenMultiplyBy2 = compose(multiplyBy2, add);

console.log(add(7)); // 14
console.log(multiplyBy2(14)); // 28

console.log(addThenMultiplyBy2(7)); // 28
