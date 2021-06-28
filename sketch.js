var ship, shipImg, edges;
var seaImg;
var sea;

function preload(){
 shipImg = loadAnimation("ship-1.png","ship-4.png","ship-2.png", "ship-3.png");
 seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
 
  // creating sea
 sea = createSprite(1,60,400,10);
  sea.addImage("largeSea",seaImg);
  sea.velocityX=-5;

  ship = createSprite(103,286,30,10);
  ship.addAnimation("waving",shipImg);
  ship.scale = 0.3;
 ship.x = 103;
  edges = createEdgeSprites();

}

function draw() {
  background("blue");
  if (sea.x < 0){
    sea.x = sea.width/2
    
  }
 
  drawSprites();
}