


$(document).ready(function  (argument) {


	var start = 0;
	
	$("h1").click(function(){

		$("h1").hide();
		$("p").hide();
		$(".cover").hide();
		start = 1;

		$("#head").css("left",100).css("top",200);
		$("#wig").css("left",1000).css("top",200);

		
		

		setTimeout(function()
			{ 
				alert("head win");
				
			 }, 10000);
	})


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
				   keyPressed == "D") ? "#head" : "#wig"; 

	var top =  parseInt($(moveObj).css("top"));
	var height = parseInt($(moveObj).css("height"));
	var left =  parseInt($(moveObj).css("left"));
	var width = parseInt($(moveObj).css("width"));


	switch (keyPressed) {
		case "A":
		case "J":
		{	
			
			if (left - 50 >= 0) {
				left -= 50;
				$(moveObj).css("left", left);
			}
			break;
		}
		case "D":
		case "L":
		{
			
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

		if(
		   $("#head").css("top") == $("#wig").css("top")
		&& $("#head").css("left") == $("#wig").css("left")
	  )	{
				if(start == 1)
				{
					alert("wig win");
				}
				
		}

		console.log("head top:" + $("#head").css("top") + "head left:" + $("#head").css("left"));
		console.log("vic top:" + $("#wig").css("top") + "vic left:" + $("#vic").css("left"));

}

	

});