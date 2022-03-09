var target1, target2, target3, target4, target5, target6, bomb;
var target1_img, target2_img, target3_img, target4_img, target5_img, target6_img, bomb_img;
var crosshair, crosshair_img;
var bg, bg_img;
var score = 0;
var t1Grp, t2Grp, t3Grp,t4Grp, t5Grp, t6Grp;
var blastSound


function preload(){
    
  target1_img = loadImage("images/black.png");
  target2_img = loadImage("images/blue.png");
  target3_img = loadImage("images/brown.png");
  target4_img = loadImage("images/greeen.png");
  target5_img = loadImage("images/red.png");
  target6_img = loadImage("images/yellow.png");

  crosshair_img = loadImage("images/crosshair.png");


  bg_img = loadImage("images/background4.jpg")

  blastSound = loadSound("smallbonk.mp3");



}

function setup(){
  createCanvas(windowWidth, windowHeight);

  bg = createSprite(0, 0,windowWidth, windowHeight);
  bg.addImage(bg_img);
  bg.scale=6
 bg.velocityX=3

  crosshair = createSprite(windowWidth/2, windowHeight/2 , 30,30);
  crosshair.addImage(crosshair_img);
  crosshair.scale = 0.2;



  t1Grp= new Group();
  t2Grp = new Group();
  t3Grp = new Group();
  t4Grp = new Group();
  t5Grp = new Group();
  t6Grp = new Group();

  
}

function draw(){
 
   


  if(bg.x > 500){
    bg.x=100;
   
   }
   
    
   var spawn = Math.round(random(1,6))

   if(frameCount%50===0){
   if(spawn === 1){
    spawnT1();
   }
   else if(spawn === 2){
    spawnT2();
   }
   else if(spawn === 3){
    spawnT3();
   }
   else if(spawn === 4){
    spawnT4();
   }
   else if(spawn === 5){
    spawnT5();
   }
   else {
     spawnT6();
    }
   }

 
  
    
   crosshair.x = World.mouseX;
   crosshair.y = World.mouseY;
 
   
   if(mousePressedOver(target1)){ 
    blastSound.play();
    score  = score+ 2
    target1.destroy();
   }

   if(mousePressedOver(target2)){
     blastSound.play();
    score = score +1
    //grp will be destroyed
    target2.destroy();
  }

  if(mousePressedOver(target3)){
    blastSound.play();
     score = score+3
    target3.destroy();
  }

  if(mousePressedOver(target4)){
    blastSound.play();
    score = score +1
    target4.destroy();
  }

  if(mousePressedOver(target5)){
    blastSound.play();
    score = score + 2
    target5.destroy();
  }

  if(mousePressedOver(target6)){
    blastSound.play();
    score = score+2
    target6.destroy();
  }




  drawSprites();

  textSize(30);
  fill("white");
  text("score: "+ score, 700,30);

}

function spawnT1(){
 // if(frameCount%200===0){
    target1=createSprite(0,200,20,20);
    target1.addImage("target1",target1_img);
    
    target1.scale=0.125
    target1.y=Math.round(random(50,700));
    target1.velocityX=score+0.5;
    target1.lifetime = windowWidth*2;
    t1Grp.add(target1);
    crosshair.depth= target1.depth+1;
 // }
}

function spawnT2(){
  // if(frameCount%250===0){
     target2=createSprite(0,250,20,20);
     target2.addImage("target2", target2_img);
     
     target2.scale= 0.2
     target2.y=Math.round(random(50,700));
     target2.velocityX = score+1;
     target2.lifetime = windowWidth*2;
     t2Grp.add(target2);
     crosshair.depth= target2.depth+1;
  // }
}

function spawnT3(){
  //if(frameCount%175===0){
    target3=createSprite(windowWidth/2, 300, 20, 20 );
    target3.addImage("target3", target3_img);
    target3.scale=0.2
    
    target3.x=Math.round(random(50,1000));
    target3.velocityY =score+ 1.5;
    target3.lifetime = windowWidth*2;
    t3Grp.add(target3);
    crosshair.depth = target3.depth+1;

  //}
}

function spawnT4(){
   //if(frameCount%275===0){
     target4=createSprite(windowWidth/2,0, 20, 20 );
     target4.addImage("target4", target4_img);
     
     target4.scale=0.3
     target4.x=Math.round(random(250,1000));
     target4.velocityY = score+1.7;
     target4.lifetime = windowWidth*2;
     t4Grp.add(target4);
     crosshair.depth = target4.depth+1;

  // }
 }

 function spawnT5(){
   //if(frameCount%300===0){
     target5=createSprite(windowWidth,windowHeight/2, 20, 20 );
     target5.addImage("target5", target5_img);
    
     target5.scale=0.3
     target5.y=Math.round(random(20,1000));
     target5.velocityX = -score+1;
     target5.lifetime = windowWidth*2;
     t5Grp.add(target5);
     crosshair.depth = target5.depth+1;
 
  // }
 }
 

 function spawnT6(){
   //if(frameCount%345===0){
     target6=createSprite(windowWidth,windowHeight/2, 20, 20 );
     target6.addImage("target6", target6_img);
    
     target6.scale=0.2
     target6.y=Math.round(random(250,1000));
     target6.velocityX =  -score+2;
     target6.lifetime = windowWidth*2;
     t6Grp.add(target6);
     crosshair.depth = target6.depth+1;
  // }
 }
 

