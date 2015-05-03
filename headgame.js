


$(document).ready(function  (argument) {
	// body...

document.addEventListener("keydown",keyDownHandler, false);	
		//document.addEventListener("keyup",keyUpHandler, false);	
function keyDownHandler(event)
{
	var keyPressed = String.fromCharCode(event.keyCode);
	var gWindowHeight = document.documentElement.clientHeight;
	var gWindowWidth = document.documentElement.clientWidth;

	
	var moveObj = (keyPressed == "W" ||
				   keyPressed == "A" ||
				   keyPressed == "S" ||
				   keyPressed == "D") ? "#head" : "#vic"; 

	var top =  parseInt($(moveObj).css("top"));
	var height = parseInt($(moveObj).css("height"));
	var left =  parseInt($(moveObj).css("left"));
	var width = parseInt($(moveObj).css("width"));
	switch (keyPressed) {
		case "A":
		case "J":
		{	
			console.log("Left : " + left);
			if (left - 50 >= 0) {
				left -= 50;
				$(moveObj).css("left", left);
			}
			break;
		}
		case "D":
		case "L":
		{
			console.log("Right : " + left);
			if (left + width < gWindowWidth) {
				left += 50;
				$(moveObj).css("left", left);
			}
			break;
		}
		case "W":
		case "I":
		{
			if (top - 50 >= 0) {
				top -= 50;
				$(moveObj).css("top", top);
			}
			break;
		}
		case "S":
		case "K":
		{
			if (top + height < gWindowHeight) {
				top += 50;
				$(moveObj).css("top", top);
			} 
			break;	
		}
		default: 
		{
			console.log("key = " + parseInt(event.keyCode) + ", keypressed = " + keyPressed);
		}
	}
}

	console.log("123");
	console.log();

});