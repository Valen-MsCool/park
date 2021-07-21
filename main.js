//Create a reference for canvas 

//Give specific height and width to the car image


//Set initial position for a car image.
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
background_image = "parkingLot.jpg";
greencar_image = "car2.png";



random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 90;
rover_height = 90;



greencar_image = "car2.png";

rover_x = 10;
rover_y = 220;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = greencar_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
	if(rover_y>260 || rover_y<50){
		document.getElementById("txt").innerHTML="You crashed your car";
		rover_x=10;
		rover_y=220
		uploadBackground();
		uploadrover();
		
			}else{


				document.getElementById("txt").innerHTML="Valet Parking";
	
	
			}
	if(rover_x==420 && rover_y==90){
		document.getElementById("txt").innerHTML="You win";
		
		
		
			}else{


				document.getElementById("txt").innerHTML="Valet Parking";
	
	
			}
		
			
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
	if(rover_x==420 && rover_y==90){
		document.getElementById("txt").innerHTML="You win";
		
		
		
			}else{


				document.getElementById("txt").innerHTML="Valet Parking";
	
	
			}
			if(rover_y>260 || rover_y<50){
				document.getElementById("txt").innerHTML="You crashed your car";
				rover_x=10;
				rover_y=220
				uploadBackground();
				uploadrover();
				
					}else{
		
		
						document.getElementById("txt").innerHTML="Valet Parking";
			
			
					}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
	if(rover_x==420 && rover_y==90){
		document.getElementById("txt").innerHTML="You win";
		
		
		
			}else{


				document.getElementById("txt").innerHTML="Valet Parking";
	
	
			}
			if(rover_y>260 || rover_y<50){
				document.getElementById("txt").innerHTML="You crashed your car";
				rover_x=10;
				rover_y=220
				uploadBackground();
				uploadrover();
				
					}else{
		
		
						document.getElementById("txt").innerHTML="Valet Parking";
			
			
					}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
   if(rover_x==420 && rover_y==90){
	document.getElementById("txt").innerHTML="You win";
	
	
	
		}else{


			document.getElementById("txt").innerHTML="Valet Parking";


		}
		if(rover_y>260 || rover_y<50){
			document.getElementById("txt").innerHTML="You crashed your car";
			rover_x=10;
			rover_y=220
			uploadBackground();
			uploadrover();
			
				}else{
	
	
					document.getElementById("txt").innerHTML="Valet Parking";
		
		
				}
}
