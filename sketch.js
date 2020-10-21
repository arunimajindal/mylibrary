var fixedRect, movingRect;
var gameobj1,gameobj2,gameobj3,gameobj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobj1 = createSprite(100,100,50,50);
  gameobj1.shapeColor = "green";

  gameobj2 = createSprite(200,100,50,50);
  gameobj2.shapeColor = "green";

  gameobj3 = createSprite(300,100,50,50);
  gameobj3.shapeColor = "green";

  gameobj4 = createSprite(400,100,50,50);
  gameobj4.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if( isTouching(movingRect,gameobj3)){
movingRect.shapeColor = "red";
gameobj3.shapeColor = "red";

}
else {
  movingRect.shapeColor = "green";
  gameobj3.shapeColor = "green";
}
  
  drawSprites();
}

