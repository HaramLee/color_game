//Sets of color
var colors = generateColors(6);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

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
	//change background of h1 as well
	h1.style.background = color;
}

function pickRandom(){
	return colors[Math.floor(Math.random() * colors.length)];
}

function generateColors(n){
	//Make an array
	var tmpArr = [];
	//add colors to the array
	for(var i =0; i < n;i++){
		//assign random color to the array
		tmpArr.push(randomColor());
	}

	return tmpArr;
}

function randomColor(){
	//Make three variable red, green, blue with num (0-255)
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	return "rgb("+red+", "+green+", "+blue+")";
}