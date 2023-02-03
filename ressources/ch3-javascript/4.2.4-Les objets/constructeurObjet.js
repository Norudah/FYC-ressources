var citation = {};
citation.titre = "KISS";
citation.description = "keeep it simple stupid";
citation.auteur = "Internet";

function citation(titre, description, auteur) {
  this.titre = titre;
  this.description = description;
  this.auteur = auteur;
}

let _Kiss = new citation("KISS", "keeep it simple stupid", "Internet");
