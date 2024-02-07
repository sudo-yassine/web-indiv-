function validerDateOfBirth(submit) {
  var dob = document.getElementById("datef").value;
  var datecourante = new Date().toISOString().split("T")[0];
  if (dob > datecourante) {
    alert("la date de naissance doit être antérieure à la date d'aujourd'hui.");
    submit.preventDefault();
    return false;
  } else return true;
}

let formulaire = document.getElementById("inscription");

formulaire.addEventListener("submit", function (submit) {
  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  // var email = document.getElementById("email").value;
  var telephone = document.getElementById("telephone").value;
  var motdepasse = document.getElementById("motdepasse").value;

  const regexnom = /^[a-zA-Z]+$/;
  const regexprenom = /.+/;
  const regextelephone = /^\d{8}$/;
  const regexmotdepasse = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  document.getElementById("success_nom").innerHTML = "";
  document.getElementById("success_prenom").innerHTML = "";
  document.getElementById("success_motdepasse").innerHTML = "";
  document.getElementById("success_telephone").innerHTML = "";
  document.getElementById("success_datedenaissance").innerHTML = "";

  document.getElementById("erreur_nom").innerHTML = "";
  document.getElementById("error_prenom").innerHTML = "";
  document.getElementById("erreur_motdepasse").innerHTML = "";
  document.getElementById("erreur_telephone").innerHTML = "";
  document.getElementById("erreur_datedenaissance").innerHTML = "";

  if (!regexnom.test(nom)) {
    document.getElementById("erreur_nom").innerHTML =
      "veuillez entrer un nom valide (lettres uniquement)";
    submit.preventDefault();
  } else {
    document.getElementById("success_nom").innerHTML = "correct";
    submit.preventDefault();
  }
  if (!regexprenom.test(prenom)) {
    document.getElementById("error_prenom").innerHTML =
      "veuillez entrer un prénom valide (lettres uniquement)";
    submit.preventDefault();
  } else {
    document.getElementById("success_prenom").innerHTML = "correct";
    submit.preventDefault();
  }
  if (!regexmotdepasse.test(motdepasse)) {
    document.getElementById("erreur_motdepasse").innerHTML =
      "veuillez entrer un mot de passe valide (8 chiffres)";
    submit.preventDefault();
  } else {
    document.getElementById("success_motdepasse").innerHTML = "correct";
    submit.preventDefault();
  }
  if (!regextelephone.test(telephone)) {
    document.getElementById("erreur_telephone").innerHTML =
      "veuillez entrer un numéro de téléphone valide";
    submit.preventDefault();
  } else {
    document.getElementById("success_telephone").innerHTML = "correct";
    submit.preventDefault();
  }
  if (!validerDateOfBirth(submit)) {
    document.getElementById("erreur_datedenaissance").innerHTML =
      "la date de naissance doit être antérieure à la date d'aujourd'hui";
    submit.preventDefault();
  } else {
    document.getElementById("success_datedenaissance").innerHTML = "correct";
    submit.preventDefault();
  }
});
