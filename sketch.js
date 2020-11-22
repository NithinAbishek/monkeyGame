var path;
var monkey , monkey_running
var banana ,bananaImage, stone, stoneImage
var FoodGroup, stoneGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
  
 
 
}



function setup() {
  createCanvas(500,350);

      path = createSprite(200,340,600,20);
      path.shapeColor = ("#66ff00");
      
      monkey = createSprite(50,300,40,50);
      monkey.addAnimation("monkeyAction",monkey_running);
      monkey.scale = 0.1;
      
      foodGroup = createGroup();
      stoneGroup = createGroup();
    
}


function draw() {
  background("black");
  
      path.velocityX = - 7;
      path.x = path.width/2;
     
       if(path.x < 0){
          path.x = path.width/2;
          }

         if(keyDown("space") && monkey.y >= 136){
            monkey.velocityY = -12;
          } 
          monkey.velocityY = monkey.velocityY + 1;
  
         if(monkey.isTouching(foodGroup)){
            foodGroup.destroyEach();
            }
  
          if(monkey.isTouching(stoneGroup)){
             stoneGroup.setVelocityXEach(0);
             }
          textSize(20);
          fill("white"); 
  
          food();
          obstacle();
  
  monkey.collide(path);
  drawSprites();
  
}

function food(){
  if(frameCount % 100 === 0){
     banana =  
     createSprite(500,Math.round(random(120,200)),0,0);
     banana.addImage(bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -8;
     banana.lifetime = 60;
     foodGroup.add(banana);
  }
}
function obstacle(){
  if(frameCount % 300 === 10){
    stone = createSprite(500,315,40,10);
    stone.addImage(stoneImage);
    stone.scale = 0.1;
    stone.lifetime = 60;
    stone.velocityX = - 8 ;
    stoneGroup.add(stone);
  }
}


