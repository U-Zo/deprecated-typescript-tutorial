function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 2);

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, cur) => acc + cur, 0);
}

const total: number = sumArray([1, 2, 3, 4, 5]);

console.log(total);

function returnNothing(): void {
  console.log('console');
}
