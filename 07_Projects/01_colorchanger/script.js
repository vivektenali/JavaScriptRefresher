// const greyButton = document.getElementById("grey");
// const bodycolor = document.querySelector("body");

// greyButton.addEventListener("click", (e) => {
//   bodycolor.style.backgroundColor = e.target.id;
// });

// const whiteButton = document.getElementById("white");
// whiteButton.addEventListener("click", (e) => {
//   bodycolor.style.backgroundColor = e.target.id;
// });

// const blueButton = document.getElementById("blue");
// blueButton.addEventListener("click", (e) => {
//   bodycolor.style.backgroundColor = e.target.id;
// });

// const yellowButton = document.getElementById("yellow");
// yellowButton.addEventListener("click", (e) => {
//   bodycolor.style.backgroundColor = e.target.id;
// });

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
