const coding = ["js", "ruby", "java"];
coding.forEach((a) => {
  console.log(a);
});
coding.forEach(function (val) {
  console.log(val);
});
function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);
coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    test1: "test1",
  },
  {
    test2: "test2",
  },
  {
    test3: "test3",
  },
];

myCoding.forEach((v) => {
  console.log(v);
});

const myCoding1 = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding1.forEach((v) => {
  console.log(v.languageFileName);
});
