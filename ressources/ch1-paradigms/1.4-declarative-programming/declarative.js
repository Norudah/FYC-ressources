// Imperative Programming
const arr = [1, 2, 3, 4, 5, 6]
let evenNumbers = [];

for (let i = 0; i < arr.length; i++) {

  if (arr[i] % 2 == 0)
    evenNumbers.push(arr[i])

}

console.log(evenNumbers); // [2, 4, 6]

____________

// Declarative Programming
const arr = [1, 2, 3, 4, 5, 6];
const evenNumbers = arr.filter(n => n % 2 == 0);
console.log(evenNumbers); // affiche [2, 4, 6]
