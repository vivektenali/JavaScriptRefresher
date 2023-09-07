//for in

const myObject = {
  js: "Javascript",
  py: "Python",
  rb: "Ruby",
};

for (const key in myObject) {
  // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const arr = ["js", "py", "rb"];
for (const key in arr) {
  console.log(arr[key]);
}
