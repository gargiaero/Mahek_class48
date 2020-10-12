var playground, bow, r_group, b_group, g_group, y_group, arrow_group;
var scoreB=0;
var bg_img, ar_img, bow_img, r_img, y_img, g_img, b_img;
var whoosh;
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var scoreT=0;
var gameOver, restart;

localStorage["HighestScore"] = 0;
var choose;
function preload()
{
  ar_img=loadImage("Arrow.png");
bg_img=loadImage("BG.png");
bow_img=loadImage("bow.png");
r_img=loadImage("RB.png");
y_img=loadImage("YB.png");
g_img=loadImage("GB.png");
b_img=loadImage("BB.png");
whoosh=loadSound("whoosh_sound.flac")
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(400,400);
  playground= createSprite(displayWidth,displayHeight,displayWidth-100,displayHeight-100);
  playground.addImage(bg_img);
  playground.velocityX=-2;
  playground.scale=10;
  
  bow=createSprite(350,200,10,10);
  bow.scale= 0.08;
  bow.addImage(bow_img);
  textSize(20);
 arrow_group=new Group();
 r_group=new Group();
 b_group=new Group();
 g_group=new Group();
 y_group=new Group();


 trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();

  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;
}

function draw() {
  background(255,255,255);  

  choose = Math.round(random(1,2));
  textSize(30);
  text("Your Game :" + choose,200,200);

  if(choose===1)
  {
    BallonGame();
  }

  if(choose ===2)
  {
    TrexGame();
  }

  drawSprites();
}

function TrexGame()
{
  text("Score: "+ score, 500,50);
  
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  
    if(keyDown("space") && trex.y >= 159) {
      trex.velocityY = -12;
    }
  
    trex.velocityY = trex.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    trex.collide(invisibleGround);
    spawnClouds();
    spawnObstacles();
  
    if(obstaclesGroup.isTouching(trex)){
        gameState = END;
    }
  }
  else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    trex.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    
    //change the trex animation
    trex.changeAnimation("collided",trex_collided);
    
    //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    if(mousePressedOver(restart)) 
    {
      reset();
    }
  }
  
}

function BallonGame()
{
  bow.y=World.mouseY;
  
  if(playground.x<0) 
  {
    playground.x=playground.width/2;
  }
 
  
  if (keyDown("space"))
{
  createarrow();
  whoosh.play()
}
if(World.frameCount%80===0)
{
var r = Math.round(random(1,4));
{
 if (r===1)
 {
 rballoons();
 }
  else if (r===2){
 gballoons();
 }
  else if (r===3){
 bballoons();
 }
 else  if (r===4){
 yballoons();
 }
  console.log(r);
}
}
if (arrow_group.isTouching(r_group)){
  scoreB=scoreB+1;
  arrow_group.destroyEach();
  r_group.destroyEach();
}
if (arrow_group.isTouching(g_group)){
  scoreB=scoreB+3;
  arrow_group.destroyEach();
  g_group.destroyEach();
}
if (arrow_group.isTouching(b_group)){
  scoreB=scoreB+5;
  arrow_group.destroyEach();
  b_group.destroyEach();
}
if (arrow_group.isTouching(y_group)){
  scoreB=scoreB+7;
  arrow_group.destroyEach();
  y_group.destroyEach();
}

text("score:"+scoreB,50,50);
}

