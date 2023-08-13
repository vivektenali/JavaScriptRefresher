const name = "Vivek";
const repoCount = 50;
const myName = new String("Vivek");

// console.log(`Hi my name is ${name} and my repo count is ${repoCount}`);
// console.table([typeof name, typeof myName]);
// console.log(myName.__proto__);
// console.log(name.__proto__);

// console.log(name.toLowerCase());
// console.log(myName.charAt(1));
console.log(myName.indexOf("V", 0));

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

//14 Most useful JavaScript String Methods
/*


string.indexOf(substr, [start]) — returns the index position of character value passed with method. 
If not found, -1 is returned.

string.lastIndexOf(substr, [end]) — returns the last index position of character value passed with method. 
If not found, -1 is returned.

string.replace(originalstr,newstr) — search for a specified regular expression in a given string and then replace it if the match occurs.

string.slice(start, [end]) — returns a substring of the string based on the “start” and “end” index arguments.

string. split() — converts a string into an array. You have to pass a character such as a comma (,) or space to tell where to split the string.

string.trim() — returns a new string with removed white space from the start and end of the string.

string.trimStart() — returns a new string with removed white space from the start of the string.

string.trimEtart() — returns a new string with removed white space from the end of the string.

string.charAt(x) — Returns the character at the “x” position within the string.

string.concat(string1, string2, …) — Combines one or more strings into the existing one and returns the combined string.
Note: Original string is not modified.

string.includes(searchString) — returns whether searching String may be found in the source string.

string.toUpperCase() — Returns the string with all of its characters converted to uppercase.
Note: Original string is not modified.

string.toLowerCase() — Returns the string with all of its characters converted to lowercase.
  Note: Original string is not modified.

string.ends With(searchString[, length]) — returns whether the source string ends with the searching string.












*/
