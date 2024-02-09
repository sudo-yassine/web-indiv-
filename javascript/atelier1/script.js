// exercice 1

function calcule(x, y) {
  var pi = 3.14;
  if (x > 0) {
    return (x + y) * pi;
  } else return y * pi;
}

// exercice 2

function parfait(nbr) {
  let count = 0;
  for (var i = 0; i < nbr; i++) {
    if (nbr % i == 0) {
      count += i;
    }
  }
  if (count === nbr) {
    return true;
  } else return false;
}

function nombres_parfait(n) {
  if (n < 0) {
    console.log("n est negative");
  } else {
    for (var i = 1; i <= n; i++) {
      if (parfait(i)) {
        console.log(i);
      }
    }
  }
}

// exercice 3

const string1 = "abc";
const string2 = "de";

function combinelist(string1, string2) {
  var list = [];
  for (var i = 0; i < string1.length; i++) {
    for (var j = 0; j < string2.length; j++) {
      list.push(string1[i] + string2[j]);
    }
  }
  return result;
  // console.log(list);
}

// exercice 4
const table = [17, 38, 10, 25, 72];

table.sort();
// console.log(table);

table.push(12);
// console.log(table);

table.reverse();
// console.log(table);

for (let i = 0; i < table.length; i++) {
  if (table[i] === 38) {
    table.splice(i, 1);
  }
}
// console.log(table);

// console.log(table.slice(1, 3));

// console.log(table.slice(0, 2));

// console.log(table.slice(2));

// exercice 5

function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ex5() {
  count = 0;
  valeur = entierAleatoire(0, 10);
  console.log(valeur);
  var input = prompt("saisir un entier :");
  do {
    count++;
    if (input == valeur) {
      alert("success");
    } else {
      alert("incorrect ");
      input = prompt("saisir un entier :");
    }
  } while (count < 3);
}
// ex5();

// exercie 6

// function modif_paragraph(id) {
//   var ph = document.getElementById(id).innerHTML;
// }

function centrage_h1() {
  var ph = document.getElementsByTagName("h1");

  if (ph.length > 0) {
    ph[0].setAttribute("align", "center");
  }
}
