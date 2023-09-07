//for of

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  //console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  //console.log(greet);
}

//MAP -> unique values , order , key&value

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

//console.log(map);

for (const [key] of map) {
  //console.log(key);
}
for (const [key, value] of map) {
  // console.log(key + " : " + value);
}

const myObj = {
  game1: "NFS",
  game2: "Call of Duty",
};

for (const [key] of myObj) {
  console.log(key); //gives myobj is not iterable
}
