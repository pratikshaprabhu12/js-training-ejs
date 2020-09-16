/*
Fermat’s Last Theorem says that there are no positive integers a, b, and c such that
a^n + b^n = c^n 
for any values of n greater than 2.
Write a function named checkFermat that takes four parameters— a, b, c and n—and checks to see if Fermat’s theorem holds. 
If n is greater than 2 and
a^n + b^n = c^n
the program should print, “Holy smokes, Fermat was wrong!” Otherwise the program should print, “No, that doesn’t work.”
*/


let power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};


let checkFermat = function (a, b, c, n) {
  if ((n > 2) && (power(a, n) + power(b, n) === power(c, n))) {
    console.log("Holy smokes, Fermat was wrong!");
  }
  else {
    console.log("No, that doesn’t work.");
  }
  return;
};

checkFermat(3, 4, 5, 3);