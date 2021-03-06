

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dro, dropsGroup;

function preload(){
    backgroundImg = loadImage("images/rain.png");
}

function setup(){
 
    var canvas = createCanvas(940,700);
    engine = Engine.create();
    world = engine.world;

    dropsGroup = createGroup();

    
}

function draw(){
 
    background(backgroundImg);
    Engine.update(engine);

    spawnDrops();

    dropsGroup.display();
}   

function spawnDrops() {
    //write code here to spawn the clouds
    if (frameCount % 10 === 0) {
      var dro =  new drop(940);
      dro.x = Math.round(random(1,940));

      //add each cloud to the group
    dropGroup.add(dro);
    }
  }
  