function validerDateOfBirth() {
  var dob = document.getElementById("datef").value;
  var datecourante = new Date().toISOString().split("T")[0];
  if (dob > datecourante) {
    alert(
      "la date de naissance doit etre anterieure a la date d'aujourd'hui. "
    );
  }
}
