module.exports = function solveEquation(equation) {
  let breakstring = equation.split (' ');
  let a = Number(breakstring[0]);
  let b = Number(breakstring[3]+breakstring[4]);
  let c = Number(breakstring[7]+breakstring[8]);
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  return [Math.round(Math.min(x1, x2)), Math.round(Math.max(x1, x2))];
}
