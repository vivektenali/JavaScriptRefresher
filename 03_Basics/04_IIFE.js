// Immediately Invoked Function Expressions (IIFE)
/*
IIFE (Immediately Invoked Function Expression) in JavaScript to create a small, private workspace or scope where we can define variables and functions without polluting the global environment.

3 Reasons 
Privacy
Avoiding Conflicts
Cleaner Code
*/

//Named IIFE
(function hello() {
  console.log(`Hello`);
})();

((name) => {
  console.log(`Hello ${name}`);
})("Kirat");
