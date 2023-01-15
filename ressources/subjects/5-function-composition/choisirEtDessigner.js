const crayons = ["rouge", "bleu", "vert"];

function choisirCrayon(numeroCrayon) {
  return crayons[numeroCrayon - 1];
}

function dessinerAvecCrayon(couleurCrayon) {
  console.log(`Dessine avec un crayon de couleur ${couleurCrayon}`);
}

const choisirEtDessiner = (numeroCrayon) => {
  const couleur = choisirCrayon(numeroCrayon);
  dessinerAvecCrayon(couleur);
};

console.log(choisirEtDessiner(1));
console.log(choisirEtDessiner(3));
