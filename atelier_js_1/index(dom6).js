function calculeScore() {
  var score = document.getElementsByName("choix").values;
  var choix = document.querySelectorAll('input[name="choix"]:checked');
  var nbchoix = choix.length;
  if (nbchoix > 3 || nbchoix < 3) {
    alert("choisir 3 choix !!");
  } else {
    if (score > 15) {
      alert("Vous etes deja un joueur expert ");
    } else alert("Vous etes encore un joueur debutant");
  }
}
