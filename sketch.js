
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	// var ball_options = {
	// 	restitution: 0.95,
	// 	frictionAir:0.01
	//   }

	roofObject=new roof(400,250,230,20);

	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	bob3 = new bob(400,575,40)
	bob4 = new bob(440,575,40)
	bob5 = new bob(480,575,40)
	
	

	// ball = Bodies.circle(100,10,20,ball_options);
  	// World.add(world,ball);

	rope1=new rope(bob1.body,roofObject.body,-80)
	rope2=new rope(bob2.body,roofObject.body,-40)
	rope3=new rope(bob3.body,roofObject.body,0)
	rope4=new rope(bob4.body,roofObject.body,40)
	rope5=new rope(bob5.body,roofObject.body,80)

	
	Engine.run(engine);

	
	
	
		
	
}

function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //bob1.display(bob1.xx,bob1.yy);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  //ellipse(ball.position.x,ball.position.y,20);
   //ellipse(bob1.xx,bob1.yy,20);
   //ellipse(320,575,20)

   if(keyDown(UP_ARROW))
	{
		vForce();
	}
}


//WRITE A CORRECT CODE TO APPLY A KEYPRESSED TO CHANGE THE POSITION OF BALL OBJECT TO THE LEFT WHEN UP ARROW KEY IS PRESSED
function vForce()
{
	Matter.Body.applyForce(bob1.body,{x:0,y:0},{x:-10,y:0});
	// Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}