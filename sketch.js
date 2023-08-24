const Engine = Matter.Engine; //const = var, porem voce nao consegue alterar o valor armazenado em qualquer lugar no programa
const World = Matter.World;// engine e usado para criar um motor de fisica
const Bodies = Matter.Bodies;// world e usado para criar um mundo fisico e addicionar objetos a ele
const Body = Matter.Body;//e usado para criar objetos fisicos que habitam no mundo     


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var block1,block2,block3;



function setup() {
  
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,//seginifica o tao saltitaote a bola e
    frictionAir : 0.01// atrito do ar
  }

  var ground_options = {
    isStatic : true
  }

 var plane_options={
  isStatic: true
 } 

 plane = Bodies.rectangle(600,580,1200,2,plane_options);
 World.add(world,plane);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  

//criando multiplos corpos diffeentes

var block1_options = {
  restitution: 0.5,
  friction: 0.02,
  frictionAir: 0.1
}

  var block2_options = {
    restitution: 0.7,
    friction: 0.01,
    frictionAir: 0.1
}
var block3_options = {
  restitution: 0.01,
  friction: 1,
  frictionAir: 0.3
}
block1 = Bodies.circle(220,10,10,block1_options);
World.add(world,block1);

block2 = Bodies.rectangle(110,50,10,10,block2_options);
World.add(world,block2);

block3 = Bodies.rectangle(350,50,10,10,block3_options);
World.add(world,block3);




  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background ("green");
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);
  

ellipse(block1.position.x,block1.position.y,30);
rect(block2.position.x,block2.position.y,50,50)
rect(block3.position.x,block3.position.y,100,50)
}

//Podemos ter mais propriedades como weight (peso), stiffness (rigidez) , drag (arrasto), etc., mas vamos explorá-los nas aulas futuras.