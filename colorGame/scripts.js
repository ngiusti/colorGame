var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeBtn = document.querySelectorAll('.mode')


init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function () {
            //grabbed color of clicked square
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play again?";
            } else {
                this.style.background = "#232323"
                messageDisplay.textContent = "try again";
            }
        });
    }
}

function setUpModeButtons() {
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener('click', function () {

            modeBtn[0].classList.remove('selected');
            modeBtn[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    }
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares)
    //pick a new random color from array
    pickedColor = pickColor();
    //change color of display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "inline-block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener('click', function () {
    reset();
})

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
        //grabbed color of clicked square
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play again?";
        } else {
            this.style.background = "#232323"
            messageDisplay.textContent = "try again";
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change them all to the same color
        squares[i].style.background = color;
    }
}

function pickColor() {
    // pick a random number
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    //return array
    return arr;
}

function randomColors() {
    // pick a red 0-255
    var r = Math.floor(Math.random() *256)
    //pick a green 0-255
    var g = Math.floor(Math.random() * 256)
    //pick a blue 0-255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g +", " + b +")"
}