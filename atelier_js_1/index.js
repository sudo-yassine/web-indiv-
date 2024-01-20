//ex1 (fonctions)
function test() {
  console.log(a);
  console.log(four());
  var a = 1;
  function four() {
    return 4;
  }
  test();
}

//ex2 (operateurs)
function closestTo100(x, y) {
  if (Math.abs(100 - x) < Math.abs(100 - y)) {
    return x;
  } else return y;
}

function hailstone(n) {
  do {
    if (n / 2 === 0) {
      n /= 2;
    } else n = n * 3 + 1;
  } while (n != 1);
}

//ex3 (strings)
function makenewstring(ch) {
  if (ch.length === 3) {
    return ch;
  } else return ch.substring(0, 3) + ch.substring(ch.length - 3);
}

function firsthalt(ch) {
  return ch.substring(0, ch.length / 2);
}

function concatenate(string1, string2) {
  return string1 + string2;
}
