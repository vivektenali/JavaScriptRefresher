const user = {
  username: "vivek",
  id: 1,

  welcomeMessage: function () {
    console.log(`${this.username} Welcome`);
    console.log(this); // gives all the values in the object
  },
};

//user.welcomeMessage();
// user.username = "Kirat";
// user.welcomeMessage();
//console.log(this); // give empty object {}

function chai() {
  let username = "Chai";
  console.log(this.username);
  console.log(this); // gives a few objects
}

chai(); //give undefined in function it only works in object

const Tea = () => {
  let username = "Tea";
  console.log(this.username); // gives undefined
  console.log(this); // give empty object {}
};

Tea(); //give undefined

//explicitly return
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(9, 9));

const subTwo = (num1, num2) => num2 - num1;
//const subTwo = (num1, num2) => (num2 - num1);

console.log(subTwo(2, 3));

const myName = () => ({ name: "Vivek" });
console.log(myName());
