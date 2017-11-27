// alert("CONNECTED!");

// NB NOTE rgb(255, 0, 0) need the space after comma

// TODO six non-random colours for our squares
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 255, 255)",
  "rgb(0, 255, 0)",  // set as pickedColor
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplayID");
colorDisplay.textContent = pickedColor;

// NOTE use style.backgroundColor (work in all browsers) instead of style.background (does not work in firefox)

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function() {
    // grab color of clicked squares
    var userSelected = this.style.backgroundColor;

    // compare selected color with pickedColor
    if (userSelected === pickedColor) {
      alert("Correct!");
    } else {
      alert("Wrong! " + userSelected + " is incorrect.");
    }
  });

}
