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
