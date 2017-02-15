//Sets of color
var colors = ["rgb(255, 0, 0)",
			  "rgb(255, 255, 0)",
			  "rgb(0, 255, 0)",
			  "rgb(0, 255, 255)",
			  "rgb(0, 0, 255)",
			  "rgb(255, 0, 255)"]

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

//Letting rgb(0,255,255) be the selector answer.
var pickedColor = pickRandom();

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//Add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColor(clickedColor);
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}

	});
}

function changeColor(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color of every box to given color
		squares[i].style.background = color;
	}
}

function pickRandom(){
	return colors[Math.floor(Math.random() * colors.length)];
}