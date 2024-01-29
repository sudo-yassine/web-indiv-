function verif() {
  var resultat = true;

  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var email = document.getElementById("email").value;
  var motdepasse = document.getElementById("motdepasse").value;
  var datef = document.getElementById("datef").value;
  var nbrmembre = document.getElementById("nbrmembre").value;
  var categorie = document.getElementById("categorie").value;

  //   regex(regular expression)
  var Regexnom = /^[A-Z][a-z]+$/;
  var Regexemail = /@esprit\.tn$/;
  var Regexmotdepasse = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  var datecourante = new Date().toISOString().split("T")[0];

  if (!Regexnom.test(nom) || !Regexnom.test(prenom)) {
    alert("nom prenom invalid");
    resultat = false;
  }
  if (!Regexemail.test(email)) {
    alert("email invalid");
    resultat = false;
  }
  if (!Regexmotdepasse.test(motdepasse)) {
    alert("motdepasse invalid");
    resultat = false;
  }

  if (datef > datecourante) {
    alert("date invalide");
    resultat = false;
  }

  if (nbrmembre > 100 || nbrmembre < 10) {
    alert("nombre invalide");
    resultat = false;
  }

  if (categorie === "") {
    alert("Veuillez choisir une catégorie");
    resultat = false;
  }
  var c = 0;
  var activites = document.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < activites.length; i++) {
    if (activites[i].checked) {
      c++;
    }
  }
  if (c === 0) {
    alert("Veuillez choisir au moins une activité");
    resultat = false;
  }

  return resultat;
}

function confirmationmail() {
  var email = document.getElementById("email").value;
  var confirmemail = document.getElementById("confirmemail").value;
  if (email != confirmemail) {
    alert("email confirmatoin incorrect");
    resultat = false;
  }
}
