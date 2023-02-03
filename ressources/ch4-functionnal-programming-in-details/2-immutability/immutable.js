/** VARIABLES PRIMAIRES **/

var pata = "pouet";
// Incorrect : Car on peut toujours réaffecter la variable ultérieurement

let pata = "pouet";
// Incorrect : Pour les mêmes raisons, mais avec un scope différent

const pata = "pouet";
// Correct : La valeur est primaire. Elle ne peut être modifiée. On considère alors que cette valeur est une constante et par conséquent immuable

/** VARIABLES OBJETS **/

const pata = ["p", "o", "u", "e", "t"]; // Correcte mais...
pata[0] = "c"; // Ne produit pas d'erreur. La référence de la constante pata est la même (le tableau) mais son contenu peut changer

const pata = { pouet: true }; // Correct mais...
pata.crepe = true; // Ne produit pas d'erreur non plus, pour les mêmes raison que le tableau ci-dessus

Object.freeze(pata); // Seule façon de véritablement rendre immuable une variable comme les objets
