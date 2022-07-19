var garden,rabbit;
var gardenImg,rabbitImg;
var maça, appleImg
var orange, orangeImg
var red, redImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 

}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApple();
  createOrange();
  createRed();
  drawSprites();
  
}

function createApple(){
maça=createSprite(random(50, 300),40,10,10);
maça.addImage(appleImg);
maça.scale = 0,05;
maça.velocityY = 3;
maça.lifetime = 150;


}

function createOrange(){
  orange=createSprite(random(50, 300),40,10,10);
  orange.addImage(orangeImg);
  orange.scale = 0,06;
  orange.velocityY = 3;
  orange.lifetime = 150;
}

function createRed(){
  red=createSprite(random(50, 300),40,10,10);
  red.addImage(redImg);
  red.scale = 0,07;
  red.velocityY = 3;
  red.lifetime = 150;
}

