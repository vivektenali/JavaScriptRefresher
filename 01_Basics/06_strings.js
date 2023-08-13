const name = "Vivek";
const repoCount = 50;
const myName = new String("Vivek");

// console.log(`Hi my name is ${name} and my repo count is ${repoCount}`);
// console.table([typeof name, typeof myName]);
// console.log(myName.__proto__);
// console.log(name.__proto__);

// console.log(name.toLowerCase());
// console.log(myName.charAt(1));
// console.log(myName.indexOf("i"));

// const newString = myName.substring(0, 2); //substring doesnt allow negative values
// console.log(newString);

const anotherString = myName.slice(0, 3);
console.log(anotherString);

const newAnotherString = "     Hello      ";
console.log(newAnotherString.trim()); //trim works only on white lines and line terminators
console.log(newAnotherString);

const url = "www.google.com/demo%20user"; //browser doesnt understand spaces it converts into %20 by default i.e url encoding
console.log(url.replace("%20", "-"));
console.log(url.includes("demo"));

const randomString = "how-are-you";
console.log(randomString.split("-"));
