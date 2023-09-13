const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const newNums = myNumers.map((value) => value + 1);
const newNums = myNumers
  .map((value) => value * 10)
  .map((value) => value + 1)
  .filter((value) => value > 50);
console.log(newNums);
