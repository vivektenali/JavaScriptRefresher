//Singleton
//Object.create();

//object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "Vivek",
  "full name": "Vivek Tenali",
  age: 18,
  location: "Hyderabad",
  email: "vivek@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
  [mySym]: "this is symbol",
};

console.log(jsUser["full name"]);
console.log(jsUser.name);
console.log(jsUser);

jsUser.email = "vivek@google.com";
//Object.freeze(jsUser);
jsUser.email = "test@gmail.com";
console.log(jsUser);

jsUser.greeting = function () {
  console.log(`Hi, there? `);
};

jsUser.greetingTwo = function () {
  console.log(`Hi ${this.name}, there? `);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
