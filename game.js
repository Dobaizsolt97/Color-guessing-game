var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay= document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetB = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");
var numSquares = 6;

easyBtn.addEventListener('click', function(){
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	numSquares=3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent= pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
});

hardBtn.addEventListener('click', function(){
	easyBtn.classList.remove('selected');
	hardBtn.classList.add('selected');
	numSquares=6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent= pickedColor;
	for(var i=0; i<squares.length; i++){
		
		squares[i].style.backgroundColor = colors[i];
		
		squares[i].style.display = 'block';
		}
});

resetB.addEventListener('click',function(){
	messageDisplay.textContent = '';
	resetB.textContent= 'New Colors';
	h1.style.backgroundColor = 'steelblue';
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i =0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){

	squares[i].style.background = colors[i];
	squares[i].addEventListener('click', function(){
		// grab color of picked square and compare
		var clickedColor= this.style.background;
		if (clickedColor === pickedColor){
			messageDisplay.textContent= 'You win!'
			changeCollors(clickedColor);
			h1.style.background = clickedColor;
			resetB.textContent = 'Play again?';
		}else{
			this.style.background = '#232323'
			messageDisplay.textContent= 'Try again'
		}
	});	
}



function changeCollors(color){
	for(var i =0; i< squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length );
	return colors[random];
}

function generateRandomColors(num){
	// make an arr
	var arr=[];
	//
	for(var i = 0; i<num; i++){
		arr.push(randomColor());
	}
	// return arr
	return arr;
}
function randomColor(){
	// pick a red from 0 to 255
	// green and blue
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

