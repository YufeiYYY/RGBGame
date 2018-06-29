var numofSquares = 9;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
colordisplay.textContent = pickedColor;
var messagedisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();
function init(){
setModeButton();
for(var i = 0; i < squares.length; i++){

squares[i].addEventListener("click", function(){
	var clicked = this.style.backgroundColor;
	console.log(clicked,pickedColor);
	if(clicked===pickedColor){
		messagedisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeColors(clicked);
		h1.style.backgroundColor = clicked;
	}else{
		this.style.backgroundColor = "#232323";
		messagedisplay.textContent = "Try Again";
	}
});
}
reset(numofSquares);
}

for(var i = 0; i<modeBtns.length;i++){
modeBtns[i].addEventListener("click",function(){
	modeBtns[0].classList.remove("selected");
	modeBtns[1].classList.remove("selected");
	this.classList.add("selected");
	if (this.textContent === "Easy"){
      numofSquares = 3;
    }else if (this.textContent === "Medium"){
    numofSquares = 6;
    }else if(this.textCorxdxdttddtrxddtrtrxxxdrtntent === "Hard"){
    numofSquares = 9;
    }
    reset(numofSquares);
});
}

function reset(numofSquares){
colors = generateRandomColors(numofSquares);
pickedColor = randomPick();
colordisplay.textContent = pickedColor;
resetButton.textContent = "New Colors";
messagedisplay.textContent = "";
for(var i = 0; i < squares.length; i++){
	if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}else{
		squares[i].style.display = "none";
	}
}
h1.style.backgroundColor = "rgb(236, 172, 43)";
}

resetButton.addEventListener("click", function(){
reset(numofSquares);
})

for(var i = 0; i < squares.length; i++){

squares[i].addEventListener("click", function(){
	var clicked = this.style.backgroundColor;
	console.log(clicked,pickedColor);
	if(clicked===pickedColor){
		messagedisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeColors(clicked);
		h1.style.backgroundColor = clicked;
	}else{
		this.style.backgroundColor = "#232323";
		messagedisplay.textContent = "Try Again";
	}
});
}

function changeColors(color){
for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = color;
}
}

function randomPick(){
var random = Math.floor(Math.random()*colors.length);
return colors[random];
}

function generateRandomColors(num){
var arr = [];
for(var i = 0; i<num; i++){
	arr.push(randomColor());
}
return arr;
}

function randomColor(){
var r = Math.floor(Math.random()*256);
var g = Math.floor(Math.random()*256);
var b = Math.floor(Math.random()*256);
return "rgb(" + r +", "+g+", "+ b+")";
}


function setModeButton(){
for(var i = 0; i<modeBtns.length;i++){
modeBtns[i].addEventListener("click",function(){
	modeBtns[0].classList.remove("selected");
	modeBtns[1].classList.remove("selected");
	modeBtns[2].classList.remove("selected");
	this.classList.add("selected");
	if (this.textContent === "Easy"){
      numofSquares = 3;
    }else if (this.textContent === "Medium"){
    numofSquares = 6;
    }else if(this.textContent === "Hard"){
    numofSquares = 9;
    }
    reset(numofSquares);
});
}
}




