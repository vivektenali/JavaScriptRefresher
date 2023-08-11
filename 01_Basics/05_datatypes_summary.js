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

/*******************stack and heap****************************** */

/*
Primitive DataType and Stack Memory:
Imagine you have a box (like a storage space) called "Stack." In this box, you can put simple things like numbers and letters. 
These simple things are called "Primitive DataTypes." When you put a primitive thing in the box, you make a copy of it. 
If you change something in the copy, the original thing remains the same.

Non-Primitive DataType and Heap Memory:
Now, think of another bigger storage area called "Heap." In this place, you can keep more complex things, 
like big lists of items. These complex things are called "Non-Primitive DataTypes." 
When you put a complex thing in the heap, you get a tag or label that points to it. 
This tag is like a reference to the real thing. If you change something using this tag, 
both the original thing and the tagged thing change.

Primitive dataType goes in stack memory; And it provides copy of that element.
So when we change something (through assigned variable) it gets changed in copy of element  not in original.
Opposite of this. Non primitive dataType get stored in HEAP memory. 
And it gives reference value to assigned elements. 
So when assigned variable makes changes it changes the both values(original and assigned one. 
 
 */

let myName = "Vivek";
let otherName = myName;
otherName = "a differnet name";
console.log(otherName);
console.log(myName);

let user = {
  userName: "Ram",
  isExpired: false,
};

let userTwo = user;
userTwo.userName = "Ramesh";
console.log(user.userName);
