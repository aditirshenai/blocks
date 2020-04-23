const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1, pig2,pig4,pig3;
var bgimg,bg,platform;
var bird,score, slingshot;

var gameState = "onSling";

function preload() {
    
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    
    pig1 = new Pig(810, 350);
    
    
    pig3 = new Pig(810, 220);

    
   
    bird = new Bird(200,50);
    pig3 = new Pig(810, 220);
    pig2  = new Pig(810,356);
    pig4 = new Pig(810,157);
    pig4 = new Pig(810,107);
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    
}

function draw(){
    if(bgimg){
    
    background(bgimg);
}
    textSize(35);
    fill("white");
    text("score:"+score,900,50);
    Engine.update(engine);
    //strokeWeight(4);
   
    ground.display();
    pig1.display();
    pig1.score();
    

    
    pig3.display();
    pig3.score();
    
    

    bird.display();
    platform.display();
    
    slingshot.display();    

    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }}
    
    async function getTime(){
        var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON= await response.json();
        
        var dt= responseJSON.datetime;
        var hr=dt.slice(11,13);
        if(hr>=06&&hr<=19){
         bg = "sprites/bg.png";


        }
        else{
            bg = "sprites/bg2.jpg";

        }
        bgimg = loadImage(bg);
    }
    