//array

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[0]);

const arr = new Array(1, 2, 3, 4);
console.log(arr);

//array methods

// myArr.push(6);
// myArr.push(7);
// myArr.push(8);
// myArr.pop(); //removes element from last
//myArr.unshift(1); // adds value at the start
myArr.shift();
myArr.shift(); // removes value from the start
console.log(myArr);

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);

//slice,splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
