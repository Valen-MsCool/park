
var canvas = new fabric.Canvas("myCanvas");

//Set initial positions for ball and hole images.
ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;


function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight=(50);
		hole_obj.set({
	top:hole_y,
	left:hole_x
	
		});
	canvas.add(hole_obj);
	
		});
		new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
   ball_obj=Img;
   ball_obj.scaleToWidth(50);
   ball_obj.scaleToHeight=(50);
   ball_obj.set({
top:ball_y,
left:ball_x

	});
canvas.add(ball_obj);

	});
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	

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
	console.log(ball_x+" "+ball_y);
	if(ball_y >=0)
	{
		ball_y = ball_y - 5;
		
		canvas.remove(ball_obj);
		load_img();
	}
	if (ball_x==hole_x&&ball_y==hole_y){
document.getElementById("hd3").innerHTML="you win";
console.log("win");

	}
}

function down()
{
	console.log(ball_x+" "+ball_y);
	if(ball_y <=500)
	{
		ball_y = ball_y + 5;
		
		canvas.remove(ball_obj);
		load_img();
	}
	if (ball_x==hole_x&&ball_y==hole_y){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="you win";
		
			}
}

function left()
{
	console.log(ball_x+" "+ball_y);
	if(ball_x >0)
	{
		ball_x = ball_x - 5;
		
		canvas.remove(ball_obj);
		load_img();
	}
	if (ball_x==hole_x&&ball_y==hole_y){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="you win";
		
			}
}

function right()
{
	ball_x = ball_x + 5;
		
	canvas.remove(ball_obj);
	load_img();
	console.log(ball_x+" "+ball_y);
	if (ball_x==hole_x&&ball_y==hole_y){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="you win";
		
			}
}
