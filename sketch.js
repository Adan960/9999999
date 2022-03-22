const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var world, engine;
var ground;
var backgroundImg,food,rabbit,blink,eat,sad;
var rope,button,bunny,fruit,fruitCon,fruitCon2;

function preload(){
 
  backgroundImg = loadImage("background.png");
  food = loadImage("melon.png");
  rabbit = loadImage("Rabbit-01.png");
  blink = loadAnimation("blink_1.png","blink_2.png","blink_3.png");
  eat = loadAnimation("eat_0.png","eat_1.png","eat_2.png","eat_3.png","eat_4.png");
  sad = loadAnimation("sad_1.png","sad_2.png","sad_3.png");

  blink.playing = true;
  eat.playing = true;
  sad.playing = true;
  eat.looping = false;
  sad.looping = false;

}

function setup() {
  createCanvas(500,700);

  engine = Engine.create();
  world = engine.world;

  blink.frameDelay = 20;
  eat.frameDelay = 20;
  sad.frameDelay = 20;

 button = createImg("cut_btn.png");
 button.position(200,30);
 button.size(100,100);

 button.mouseCliked(drop);

  ground = new Ground(250,690,500,30);
  
  bunny = createSprite(250,550,20,20);
  bunny.scale = 0.3;
  
  bunny.addAnimation("blinking",blink);
  bunny.addAnimation("eating",eat);
  bunny.addAnimation("sad",sad);

  bunny.changeAnimation("blinking");

  fruit = createSprite(250,300,20,20);
  fruit.addImage(food);
  fruit.scale = 0.18;
  //rope = new Rope(7,{x: 250,y: 30});
  //Matter.Composite.add(rope.body,fruit);
  //fruitCon = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(51);
  image(backgroundImg,width/2,height/2,500,700);

  Engine.update(engine);

  ground.show();

  drawSprites();
}

function drop(){

}

function collide(body,sprite){
 
}
