// Même exemples que tout à l'heure

const add10 = (num) => num + 10;
const add7 = (num) => num + 7;
const add42 = (num) => num + 42;

const Boiboite = (x) => ({
  fold: (f) => f(x),
  map: (f) => Boiboite(f(x)),
  toString: () => `Actual value : Boiboite(${x})`,
});

// Exemples d'applications

// const example1 = Boiboite(10).map(add10).map(add7).map(add42);
// console.log(example1);
// console.log(example1.toString());

const example2 = Boiboite(10).map(add10).map(add7).fold(add42);
console.log(example2);
// console.log(example2.map(add42)); // Error
