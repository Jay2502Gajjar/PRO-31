const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var man01
var rain = []

function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;
    
    for(var i=0; i<maxDrops; i++)
    {
       rain.push(new Drops(random(0,400) , random(0,400)));

    }

    man01 = new man(200,460,27);
    
}

function draw(){
    background("black");

    Engine.update(engine);
   
    for(var i=0; i<maxDrops; i++)
    {
       
       rain[i].display();
    } 

    
    man01.display();

    drawSprites();
}   


