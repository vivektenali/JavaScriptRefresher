const score = 100;
console.log(score);

const myScore = new Number(100);
console.log(typeof myScore);

console.log(myScore.toString().length);
console.log(myScore.toFixed(2));

const hundreds = 1000000000;
console.log(hundreds.toLocaleString("en-IN"));

/*MATHS*/

console.log(Math.abs(-3));
console.log(Math.round(3.4)); // below 5 < , above 5 >
console.log(Math.ceil(3.4)); // above
console.log(Math.round(4.5)); //below
console.log(Math.max(1, 2, 3, 4));
console.log(Math.min(1, 2, 3, 4));

console.log(Math.random());
console.log(Math.random() * 10 + 1); // *10 for left shit, +1 is to avoid 0 value incase
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10 + 1));

const min = 100;
const max = 500;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
