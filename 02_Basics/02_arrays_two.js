const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//console.log(marvel_heros.push(dc_heros));
const output = marvel_heros.concat(dc_heros);
console.log(output); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_array = [...marvel_heros, ...dc_heros];
console.log(all_new_array); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const new_output = another_array.flat(Infinity);
console.log(new_output); //[1,2,3,4,5,6,7,6,7,4,5]

console.log(Array.isArray(dc_heros)); //true

console.log(Array.from("vivek")); // ['v','i','v','e','k'];

console.log(Array.from({ name: "vivek" })); // interesting it will not convert and returns empty string

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
