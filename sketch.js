const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone, tree, boy;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12, mango13, mango14, mango15, mango16, mango17;
var slingshot;
var gameState = "onSling";

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 690, 800, 30);

	tree = new Tree(650, 460, 250, 500);

	boy = new Boy(300, 600, 150, 300);

	stone = new Stone(260, 535, 50, 50);

	mango1 = new Mango(600, 370, 30, 30);
	mango2 = new Mango(570, 345, 40, 40);
	mango3 = new Mango(640, 290, 30, 30);
	mango4 = new Mango(675, 270, 30, 30);
	mango5 = new Mango(690, 325, 40, 40);
	mango6 = new Mango(635, 330, 50, 50);
	mango7 = new Mango(615, 295, 30, 30);
	mango8 = new Mango(570, 390, 30, 30);
	mango9 = new Mango(570, 400, 50, 50);
	mango10 = new Mango(600, 410, 40, 40);
	mango11 = new Mango(630, 390, 30, 30);
	mango12 = new Mango(640, 430, 40, 40);
	mango13 = new Mango(670, 380, 50, 50);
	mango14 = new Mango(690, 420, 40, 40);
	mango15 = new Mango(710, 360, 40, 40);
	mango16 = new Mango(730, 380, 40, 40);
	mango17 = new Mango(740, 430, 45, 45);

	slingshot = new Slingshot(stone.body, {x:240, y:535});
}

function draw() {
  Engine.update(engine);
  background(255, 255, 255);

  ground.display();

  tree.display();

  boy.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  
  slingshot.display();
  
  drawSprites();
}

function mouseDragged(){
	if(gameState == "launched"){
		Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
	}
}

function mouseReleased(){
	slingshot.fly();
	gameState = "launched";
}

