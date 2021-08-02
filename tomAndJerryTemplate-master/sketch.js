var tom, tomImg1, tomImg2, tomImg3;
var jerry, jerryImg1, jerryImg2, jerryImg3;
var backgroundImage, bgImg;

function preload() {
    //load the images here
    tomImg1 = loadImage("images/cat1.png");
    tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3 = loadImage("images/cat4.png");

    jerryImg1 = loadImage("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3 = loadImage("images/mouse4.png");

    bgImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    

    tom = createSprite(900,700,50,50);
    tom.addImage("tom_1",tomImg1);
    tom.scale = 0.15;

    jerry = createSprite(100,700,50,50);
    jerry.addImage("jerry_1",jerryImg1);
    jerry.scale = 0.15;

    


    

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        
        tom.addAnimation("catHappy",tomImg3);
        tom.changeAnimation("catHappy");
        tom.x = 180;


        jerry.addAnimation("mouseHappy",jerryImg3);
        jerry.changeAnimation("mouseHappy");
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      jerry.addAnimation("mouseTeasing",jerryImg2);
      jerry.changeAnimation("mouseTeasing");
      jerry.frameDelay = 25;

      tom.addAnimation("catWalking",tomImg2);
      tom.changeAnimation("catWalking");
      tom.velocityX = -5;

  } 




}
