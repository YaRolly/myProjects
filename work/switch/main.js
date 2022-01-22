// Calc on Switch

let result = "";
let err = "";
function calc(c,a,b) {
  switch(typeof a) {
    case 'number':
      break;
    default:
      err = 'Error';
  }
  switch(typeof b) {
    case 'number':
      break;
    default:
      err = 'Error';
  }
  if (!err) {
    switch(c) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      result = 'Unknown operation'
    }
    return console.log(result)
  }
  return console.log(err);
}
calc("+", 4, 5);
calc("", 4, 5);
calc("-", '', 5);

// Calc on if
function Calc(c,a,b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error';
  }
  if (c == "+") {
    return a + b;
  }
  if (c == "-") {
    return a - b;
  }
  if (c == "*") {
    return a * b;
  }
  if (c == "/") {
    return a / b;
  }
  else {
    return "Unknown operation"
  }
}

console.log(Calc("-",9,10));
console.log(Calc("", 4, 5));
console.log(Calc("-", '', 5));
