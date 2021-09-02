const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ball,blower,blowerMouth,button;

function setup() {
  createCanvas(500,500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(320,180,50,50);

  blower = new Blower(320,270,100,100);

  blowerMouth = new BlowerMouth(170,315,200,10);

  button = createButton("Click to blow");
  button.position(width/2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);

}

function draw() {
  background(0);  
  Engine .update(engine);

  text (mouseX + "," + mouseY,mouseX,mouseY);

  ball.show();
  blower.show();
  blowerMouth.show();
  //drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body, { x:0, y:0} , {x:0 , y:0.05});
}