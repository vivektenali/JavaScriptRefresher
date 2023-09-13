const coding = ["js", "ruby", "java", "python", "cpp"];

let values = coding.forEach((value) => {
  return value;
});
//console.log(values);

/*
forEach method does not return an array or a new value. It is used for iterating over the elements of an array and performing a specified action for each element, but it does not create a new array or return any values.
*/

newArr = [];
coding.forEach((value) => {
  newArr.push(value);
});
//console.log(newArr);

//FILTER
/*
the filter method is used to create a new array from an existing array by filtering out elements that don't meet a certain condition. The filter method takes a callback function as its argument, and this callback function should return true or false for each element in the array. If the callback function returns true for an element, that element is included in the new array; if it returns false, the element is excluded.
*/

const newArray = coding.filter((value) => value);
//console.log(newArray);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = [];
userBooks = books.filter((book) => {
  return book.edition < 2000 && book.genre === "Non-Fiction";
});
console.log(userBooks);
