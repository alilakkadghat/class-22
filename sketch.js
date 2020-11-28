const Engine = Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var engine,ground,world,ball;

function setup() {

  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  
  ground=Bodies.rectangle(200,390,50,50,options);
  World.add(world,ground);
  var option={
    restitution:1.5
  }
  ball=Bodies.circle(200,200,25,option);
  fill("red");
  World.add(world,ball);

}

function draw() {
  background(0);  
Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,50);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,25)
  drawSprites();
}

