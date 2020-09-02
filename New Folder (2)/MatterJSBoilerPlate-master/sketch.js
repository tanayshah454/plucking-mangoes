
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree, stone,boy,mangoe1,mangoe2,mangoe3,mangoe4,mangoe5,mangoe6;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    tree=new Tree(600,400,400,600)
    stone = new Stone(100,650,100)
    mangoe1= new Mangoes(700,200,50)
    mangoe2= new Mangoes(780,300,50)
    mangoe3= new Mangoes(500,250,50)
    mangoe4= new Mangoes(600,150,50)
    mangoe5= new Mangoes(640,380,50)
    mangoe6= new Mangoes(600,260,50)
    boy=new Thrower(stone,{x:50,y:400})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  tree.display()
  stone.display();
  mangoe1.display()
  mangoe2.display()
  mangoe3.display()
  mangoe4.display()
  mangoe5.display()
  mangoe6.display()
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    boy.fly();
}
function keyPressed(){
    if(keyCode===32){
        boy.attach(bird.body);
    }
}


