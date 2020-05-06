// variable Cache
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
var randomBtn = document.getElementById("random");

// set the background color and h3 text to colors chosen through color input
function setGradient() {
	body.style.background = "linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// from stack overflow: get random hexadecimal color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// use the getRandomColor function instead of the values from the color input
function setRandomColor() {
	body.style.background = "linear-gradient(to right," 
	+ getRandomColor()
	+ ", " 
	+ getRandomColor() 
	+ ")";

	css.textContent = body.style.background + ";";
}


// Event Listeners:

randomBtn.addEventListener("click", setRandomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);