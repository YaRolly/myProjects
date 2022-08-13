function Calc(operations, a, b) {
  switch (operations) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;

    default:
      return 'Неправильная операция!';
  }
}

console.log(Calc('+', 5, 5));
console.log(Calc('-', 5, 5));
console.log(Calc('/', 5, 5));
console.log(Calc('*', 5, 5));
