
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var obj1;
var obj2;
var obj3;
var obj4;
var obj5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

  roof = new Roof(800,40,1600,80);

object1= new Bob(500,400,50);
object2= new Bob(600,400,50);
object3= new Bob(700,400,50);
object4= new Bob(800,400,50);
object5= new Bob(900,400,50);

rope1 = new Rope(object1.body,roof.body,-300,0);
rope2 = new Rope(object2.body,roof.body,-200,00);
rope3 = new Rope(object3.body,roof.body,-100,00);
rope4 = new Rope(object4.body,roof.body,0,0);
rope5 = new Rope(object5.body,roof.body,100,0);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  rope1.display();
  rope2.display();
  rope3.display();	
  rope4.display();
  rope5.display();
 
  object1.display();
  object2.display();
  object3.display();
  object4.display();
  object5.display();

  roof.display();
}

  function keyPressed() {
    if (keyCode === UP_ARROW) {
       Matter.Body.applyForce(object1.body,object1.body.position,{x:-50,y:-45});
    }
}

  




