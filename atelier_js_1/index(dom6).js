function calculeScore() {
  var score = 0;
  var choix1 = document.getElementsByName("choix1");

  var choix = document.querySelectorAll('input[name="choix"]:checked');
  var nbchoix = choix.length;
  for (let i = 0; i < nbchoix; i++) {
    score += parseInt(choix1[i].nodeValue);
  }
  console.log(score);
  console.log(choix1);
  console.log(nbchoix);
  if (nbchoix > 3 || nbchoix < 3) {
    alert("choisir 3 choix !!");
  } else {
    if (score > 15) {
      alert("Vous etes deja un joueur expert ");
    } else alert("Vous etes encore un joueur debutant");
  }
}
