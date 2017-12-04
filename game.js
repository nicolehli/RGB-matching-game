var mode = 6; // Game starts with 6 tiles in Hard Mode
var colors = [];
var pickedColor; // Solution Tile
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplayID");
var statusDisplay = document.querySelector("#statusDisplayID");
var newGameBtn = document.getElementById("newGameBtn"); // Status Bar Variables
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {

  setupModeListeners();
  setupSquareListeners();



  reset();
}

function setupModeListeners() {
  // Mode - Easy or Hard - Event Listeners
  for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function() {
      modeBtn[0].classList.remove("buttonSelected");
      modeBtn[1].classList.remove("buttonSelected");

      this.classList.add("buttonSelected");
      this.textContent === "Easy" ? mode = 3 : mode = 6;

      reset();
    });
  }
}

function setupSquareListeners() {
  // Square Listeners
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      var userSelected = this.style.background;

      if (userSelected === pickedColor) {
        statusDisplay.textContent = "Correct!";
        newGameBtn.textContent = "Play Again?";
        changeColors(userSelected);
        h1.style.background = userSelected;
      } else {
        this.style.background = "#232323";
        statusDisplay.textContent = "Try Again";
      }
    });
  };
}


// New Game
newGameBtn.addEventListener("click", function() {
  reset();
});


// function will set all squares to WINNING color
function changeColors(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

// function will randomly pick a solution tile
function pickColor() {
  var randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

// function populate tile with random color
function assignRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

// function will generate random color to be assign to squares
function randomColor() {
  // pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * (255 + 1));
  // pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * (255 + 1));
  // pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * (255 + 1));

  // NB make sure rgb(0, 0, 0) have space after the comma,
  // and rgb is lowercase
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// function will update game play
function reset() {
  colors = assignRandomColors(mode);
  pickedColor = pickColor();

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }

  newGameBtn.textContent = "New Colors";
  h1.style.background = "steelblue";
  colorDisplay.textContent = pickedColor;
  statusDisplay.textContent = "";
}
