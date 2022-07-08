var man;
var coins;


function preload(){

  backgroundImage = loadImage("1etc.gif")

}



function setup(){ 
createCanvas(1200,600);

  bG = createSprite(500,200);
  bG.addImage(backgroundImage)
  bG.scale = 2
 


  man = createSprite(200,140,30,80);
  man.shapeColor = "red"
  
   
   
}


function draw(){ 
  background(180);
  
  if(keyIsDown(UP_ARROW)){
    man.y -= 3
  }
  if(keyIsDown(DOWN_ARROW)){
    man.y += 4
  }
   spawnObstacles(); 
   drawSprites();
   } 
  
  
  function spawnObstacles(){
    
    if(frameCount % 60 === 0){ 
      
       obstacles = createSprite(2000, Math.round(random(30,590)),200,30); 
      obstacles.velocityX = -5;
      obstacles.lifetime = 560;

      coins = createSprite(obstacles.x,obstacles.y- 30, 20, 20);
      coins.shapeColor = "blue";
      coins.velocityX = -5
      coins.lifetime = 560;
    } 
    }

  

