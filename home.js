var numSquares = 6;
var colors = generatesRandomColors(numSquares);
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBTN = document.querySelector("#easyBTN");
var hardBTN = document.querySelector("#hardBTN");


init();

function init() {

   easyBTN.addEventListener("click",function(){
    hardBTN.classList.remove("selected");
    easyBTN.classList.add("selected");
    numSquares = 3;
    colors = generatesRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
   
    for (var i = 0; i < squares.length; i++){
        // if number of colors is 3
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
   });

   hardBTN.addEventListener("click",function(){
    easyBTN.classList.remove("selected");
    hardBTN.classList.add("selected");
    numSquares = 6;
    colors = generatesRandomColors(numSquares);
    pickedColor = pickColor();
    
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    
    }
   });

 
    // loop through all the squares to change the color
    for (var i = 0; i < squares.length; i++) {
        //add initial colors to square

        // add click listeners to all squares
        squares[i].addEventListener("click", function () {
            // the clicked color will be the color of the background
            var clickedColor = this.style.backgroundColor;
            console.log(clickedColor, pickedColor);
            // check if clicked color is the color that is picked (span)
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?"
                // calls change colors function to change the background of all the squares
                // to be the correct colors
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;

            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again"
            }
        });

    }
    reset();
}


function reset() {
    // generate all new colors
    colors = generatesRandomColors(numSquares);
    // pick a new random color from array 
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    // loop tochange colors of the squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";

}


resetButton.addEventListener("click", function () {
    reset();
});





function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generatesRandomColors(num) {
    // make an array
    var arr = [];

    // add num random colors to array
    // repeat num times
    for (var i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(makeRandomColor());
    }
    //return array
    return arr;

}

function makeRandomColor() {
    // pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}