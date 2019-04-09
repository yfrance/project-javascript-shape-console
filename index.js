const sideA = 25;
const sideB = 20;
const sideC = 15;
const perimeter = (sideA + sideB + sideC) / 2;
const area = Math.sqrt(
  perimeter * ((perimeter - sideA) * (perimeter - sideB) * (perimeter - sideC))
);

console.log(area);
