const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var object;

function setup(){
    createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
    

    ground = Bodies.rectangle(200,200,900,20,{isStatic:true});

    World.add(world,ground);

    var ball_options={
        restitution:1
    }
    object=Bodies.circle(200,100,80,ball_options);
    World.add(world,object);
    
}

function draw(){
    background("black");
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,900,20);
    ellipse(object.position.x,object.position.y,80);
}