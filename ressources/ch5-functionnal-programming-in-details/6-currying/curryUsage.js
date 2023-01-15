// Fonction de base, retourne la somme de 3 nombres
const sum3 = (num1, num2, num3) => num1 + num2 + num3;

// Avec la currying, on transforme sum3 comme suit :
// En imaginant que "curry" est une fonction qui prend en paramètre une fonction et qui retourne une fonction curried
curry(sum3)(num1)(num2)(num3);
