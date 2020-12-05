const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine,world;

var man;
var dropArray = [];
var maxDrops = 100;

function preload(){
    
}

function setup(){
    createCanvas(700,700)

    engine = Engine.create();
    world = engine.world;

    man = new Umbrella(350,550,250,250)

    
   
    
}

function draw(){
    background("black")

    Engine.update(engine);

    if(frameCount % 1 === 0){
        dropArray.push(new Drop(random(0,700),1,5))
      }
    
    for(var p = 0 ; p < dropArray.length ; p++){
        dropArray[p].display();
       }

    man.display();
    
}   

