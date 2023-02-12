const addition = (n1, n2) => n1 + n2;

addition(5, 5);
// Retourne 10

addition(addition(2, 3), 5);
// retourne 5 + 5 <=> 10

addition(addition(2, 3), addition(4, 1));
// retourne 5 + 5 <=> 10
