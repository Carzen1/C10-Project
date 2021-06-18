var seaImg; var sea;
var shipImg; var ship;
var ocean;





function preload(){
 seaImg = loadImage("sea.png");
 shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(1925,825);
  
  sea = createSprite()
  sea.addImage(seaImg);

  ship = createSprite(250, 360, 20, 20);
  ship.addAnimation("moving", shipImg);
  ship.scale = 0.6;
}

function draw() {
  background("blue");
 
  sea.velocityX = -2;
  if(sea.x < 0) {
    sea.x = sea.width/2;
  }


  drawSprites();
}