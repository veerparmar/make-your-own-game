var zombie, zombie_img
var player, player_img
var varFlag = 0
var zombieGroup
var score=0;
var laser;
let v1;
var gameState = 0

function preload(){
  zombie_img = loadImage("images/zombie.png");
  player_img = loadImage("images/player.png")
}

function setup() {
  createCanvas(600,600);
  stroke(255, 0, 0);
  strokeWeight(10);
  v1 = createVector(490,520);
  player = createSprite(550,550, 200, 200);
  player.addImage("player",player_img)
  player.scale = 0.1
  zombieGroup = createGroup()

  
}

function draw() {
  background(160,100,0);  
  
  drawSprites();
  fill("black")
  text("Score: "+ score, 500,30);
  textSize(20);
  score = score + Math.round(getFrameRate()/60);
  
  if(gameState === 0){
  text("space key to start",250,300)
  if(keyDown("space")){
    gameState = 1
    score = 0
  }
    
}

  else if(gameState === 1){
    spawnZombies();

    if(zombieGroup.isTouching(player)){
      gameState = 0
      zombieGroup.destroyEach()
      
    }

    if (mousePressedOver(zombie)){
      var x = mouseX
      var y = mouseY
      
      zombieGroup.destroyEach()
    }  

    line(v1.x, v1.y, mouseX, mouseY);

  }






}


function spawnZombies(){

  if((frameCount %60 === 0) && zombieGroup.length === 0){
    if(varFlag == 0){
      xPosition = -5
      yPosition = Math.round(random(0,150))
      varFlag = 1

    }
    else{
      yPosition = -5
      xPosition = Math.round(random(0,150))
      varFlag = 0
    }


    zombie = createSprite(xPosition,yPosition,50,50)
    zombie.addImage("zombie",zombie_img)
    zombie.scale = 0.1
    zombie.velocityX = 3
    zombie.velocityY = 3
    
    zombie.lifetime = 300
    zombieGroup.add(zombie)
  }



}





