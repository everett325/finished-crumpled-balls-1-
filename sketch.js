const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(1200,300);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
       isStatic:false,
        restitution: 0.3,
        friction:0.5,
        density:1.2
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);


    
    
    dustbinBottom = new 
    Dustbin(800,275,200,20);
    dustbinLeft = new
    Dustbin(700,235,20,100);
    dustbinRight = new
    Dustbin(900,235,20,100);
    
    ground = new Ground(600,height,1200,20)

    dustbin = new Dustbin(700,320,70,70);
}
function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    dustbinBottom.display();
    dustbinLeft.display();
    dustbinRight.display();
    

   
    
}
function keyPressed() {
        if (keyCode === UP_ARROW){
            Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
        }
    }






