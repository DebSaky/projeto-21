
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball,leftside,rightside

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var  ball_options={ 
		isStatic:false, restitution:0.3, friction:0, density:1.2 
		}
		var  ground_options={ 
			isStatic:true
			}
		  ground=Bodies.rectangle(width/2,670,width,20,ground_options)	
			World.add(world,ground)

			leftside=Bodies.rectangle(1000,600,20,120,ground_options)	
			World.add(world,leftside)

			rightside=Bodies.rectangle(1250,600,20,120,ground_options)	
			World.add(world,rightside)
        ball=Bodies.circle(270,100,40,ball_options)
       World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,width,20)
  rect(leftside.position.x,leftside.position.y,20,120)
  rect(rightside.position.x,rightside.position.y,20,120)
  ellipse(ball.position.x,ball.position.y,40)

  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); }
 }


