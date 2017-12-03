// alert("CONNECTED!");

////////////////////////////////
/////////////    SETUP    //////
////////////////////////////////

// Game Title
var h1 = document.querySelector("h1");

// Tiles Area
var colors = assignRandomColors(6);
var pickedColor = pickColor(); // Solution Tile
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplayID");
var statusDisplay = document.querySelector("#statusDisplayID");
var mode = 6; // easy = 3 and hard = 6

// Status Bar with Buttons
var newGameBtn = document.getElementById("newGameBtn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


//////////////////////////////////
/////////////    BUTTONS    //////
//////////////////////////////////

// Button 2: Easy button
// show button level Easy if buttonSelected
easyBtn.addEventListener("click", function() {
  mode = 3;
  easyBtn.classList.add("buttonSelected");
  hardBtn.classList.remove("buttonSelected");

  this.style.background = "#232323";
  statusDisplay.textContent = "You picked: Easy Mode"

  // general new tiles, new colors, set title to new solution
  colors = assignRandomColors(mode);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  // show 3 tiles in gamePlay
  for (var i=0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      // hide the tiles with no random colors[i]
      squares[i].style.display = "none"; // Element will not be displayed
    }
  }
});

// Button 3: Hard Button
hardBtn.addEventListener("click", function(){
  mode = 6;
  easyBtn.classList.remove("buttonSelected");
  hardBtn.classList.add("buttonSelected");

  this.style.background = "#232323";
  statusDisplay.textContent = "You picked: Hard Mode"

  // general new tiles, new colors, set title to new solution
  colors = assignRandomColors(mode);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  // show 6 tiles in gamePlay
  for (var i=0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";  // Element is rendered as a block-level element, but any value that renders the element will do

  }
});



// Button 1: newGameBtn resets game
newGameBtn.addEventListener("click", function(){
  this.style.background = "#232323";
  statusDisplay.textContent = "Let's start!"

  // general new tiles, new colors, set title to new solution
  colors = assignRandomColors(mode);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  // change colors of the squares
  for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function() {
      // grab color of clicked squares
      var userSelected = this.style.backgroundColor;

      // compare selected color with pickedColor
      if (userSelected === pickedColor) {
        // alert("Correct!");
        statusDisplay.textContent = "You guessed correctly!";
        newGameBtn.textContent = "Play Again?";
        changeColors(pickedColor);
        h1.style.background = pickedColor;
      } else {
        // alert("Wrong! " + userSelected + " is incorrect.");
        this.style.background = "#232323";
        statusDisplay.textContent = "Try Again!"
      }
    });
  }

});

// Game Play with pickedColor as our Solution Tile
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function() {
    // grab color of clicked squares
    var userSelected = this.style.backgroundColor;

    // compare selected color with pickedColor
    if (userSelected === pickedColor) {
      // alert("Correct!");
      changeColors(pickedColor);
      h1.style.background = pickedColor;
      statusDisplay.textContent = "You guessed correctly!"
    } else {
      // alert("Wrong! " + userSelected + " is incorrect.");
      this.style.background = "#232323";
      statusDisplay.textContent = "Try Again!"
    }
  });
}





// function will set all squares to WINNING color
function changeColors(color) {
  // loop through all squares
  for (var i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

// function will randomly pick a tile to be the SOLUTION
function pickColor() {
  var randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

// function populate tile with random color
function assignRandomColors(num) {
  var arr = [];
  for(var i=0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

// function generate RANDOM COLORS
function randomColor() {
  // pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * (255 + 1));
  // pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * (255 + 1));
  // pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * (255 + 1));

  // make sure rgb(0, 0, 0) have space after the comma
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
