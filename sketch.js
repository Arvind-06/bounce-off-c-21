var fixedRect, movingRect;
var ball,bat;
var ob1,ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  bat = createSprite(600, 200, 50, 80);
  bat.shapeColor = "brown";
  bat.debug = true;
  ball = createSprite(100,200,20,20);
  ball.shapeColor = "red";
  ball.debug = true;
  ball.velocityX=3;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
    
 BounceOff(ball,bat);
     
     
   

 
 
  drawSprites();
}

