const Writer = (value, log = []) => ({
  value,
  log,
  map: (fn) => Writer(fn(value), log),
  chain: (fn) => {
    const result = fn(value);
    return Writer(result.value, [...log, ...result.log, `value is now ${result.value}`]);
  },
});

Writer.of = (value, log = [`Initalization at ${value}`]) => Writer(value, log);

/* Très bon exemple d'application d'une HOF `add`

 1.  premier argument renvoie une fonction qui prend un nombre en argument.
     Celu-ci sera la nouveau nombre à ajouter. Regardez bien la fonction add quand
     on l'utilise dans le chain à l'instanciation de Writer : un seul argument est donné.

 2.  le deuxième argument est sera la value contenue dans Writer. Et vu qu'on a composer 
     la fonction add, il est possible de réappeler la fonction ( add(num1)(value) ) et celle-ci
     retournera le résultat de l'addition. Comme on peut le constater dans la méthode chain. */

const add = (num1) => (num2) => {
  const result = num1 + num2;
  return Writer(result, [`add ${num1} to ${num2}`]);
};

const minus = (num1) => (num2) => {
  const result = num2 - num1;
  return Writer(result, [`remove ${num1} from ${num2}`]);
};

const result = Writer.of(5).chain(add(3)).chain(add(2)).chain(minus(8));

console.log(result.value); // 2
console.log(result.log);
// Sortie :
/* [
  'Initalization at 5',
  'add 3 to 5',
  'value is now 8',
  'add 2 to 8',
  'value is now 10',
  'remove 8 from 10',
  'value is now 2'
] */
