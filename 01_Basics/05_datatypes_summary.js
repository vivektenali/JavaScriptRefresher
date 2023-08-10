// Primitive
//value , when there is a change copy of the value is changed
// 7
//String,number,Boolean,null,undefined,symbol,bigint

const score = 22;
const isLoggedIn = true;
const name = "ram";
const temp = null;
let userem;

const id = Symbol("123");
const anotherid = Symbol("123");
console.log(id === anotherid);

// Reference (non primitive)

//Array , objects , functions

const cars = ["Lamborghini", "Ferrari", "Porsche"];
const person = {
  name: "vivek",
};
const myFunction = function () {
  console.log("hello world");
};

console.log(`Type of another id is` + typeof anotherid);
//symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3
