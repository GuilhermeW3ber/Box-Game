//Aparentemente de novo estão ocorrendo erros com o P5...
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, ground2, ground3, ground4;
var cube;
var obstacle;
obstacles= new Group();

function setup(){
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(200,400,600,20);
  ground2 = new Ground(200,0,600,20);
  ground3 = new Ground(-10,200,20,400);
  ground4 = new Ground(400,200,20,400);

  cube= new Cube(60,335,60,60);


}

function draw(){
  background(51);
  Engine.update(engine);
  
  if(frameCount %20===0){
    obstacle.createSprite(420,350,40,randomNumber(90,200));
  }





  cube.display();
  ground.display();
}

function keyPressed(){
  if(keyCode===38){
    Matter.Body.applyForce(cube.body, {x:0, y:0}, {x:0, y:-0.1});
    console.log("ForceApplied");
  }
  if(keyCode===37){
    Matter.Body.applyForce(cube.body, {x:0, y:0}, {x:-0.05, y:0});
    console.log("ForceApplied2");
  }
  if(keyCode===39){
    Matter.Body.applyForce(cube.body, {x:0, y:0}, {x:0.05, y:0});
    console.log("ForceApplied3");
  }


}
