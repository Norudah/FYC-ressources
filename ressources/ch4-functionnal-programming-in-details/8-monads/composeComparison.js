import { compose } from "ramda";

// addX étant toujours une fonction retournant la somme d'un nombre avec X
// Hypothèse : compose(addX, addY, addZ)  === compose(addZ, addX, addY)

// Exemple concret

const add10 = (num) => num + 10;
const add7 = (num) => num + 7;
const add42 = (num) => num + 42;

const addComp1 = compose(add10, add7, add42);
const addComp2 = compose(add7, add42, add10);
const addComp3 = compose(add42, add10, add7);

// Les additions respectent la loi d'associativité, donc :

console.log(addComp1(10), addComp2(10), addComp3(10)); // 69 69 69
console.log(addComp1(10) === addComp2(10), addComp3(10) === addComp2(10), addComp1(10) === addComp3(10)); // true
