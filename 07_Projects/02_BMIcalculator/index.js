const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const output = document.getElementById("output");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi <= 18.6) {
      output.innerHTML = `<p>${"Under Weight"}</p>`;
    } else if (bmi >= 18.6 || bmi <= 24.9) {
      output.innerHTML = `<p>${"Normal Range"}</p>`;
    } else if (bmi >= 24.9) {
      output.innerHTML = `<p>${"Overweight"}</p>`;
    }
  }
});
