function sayMyName() {
  console.log("V");
  console.log("I");
  console.log("V");
  console.log("E");
  console.log("K");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "test") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("vivek"))
//console.log(loginUserMessage(""));

//REST
function calculateCartPrice(...price) {
  return `${price}`;
}

//console.log(calculateCartPrice(200, 300, 400));

function calculateCartPrice(val, ...price) {
  return `${price}`;
}

console.log(calculateCartPrice(200, 300, 400));

const user = {
  username: "test",
  price: "free",
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handleObject(user);

const arr = ["apple", "ball", "cat"];

function returnSecondValue(anyAray) {
  return `${anyAray[1]}`;
}

console.log(returnSecondValue(arr));
