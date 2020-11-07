var fixedRect, movingRect;

var a ,b,c;



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100,200,60,40);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
 // fixedRect.velocityX = 5;

  movingRect =createSprite(600, 200,40,60);
  movingRect.shapeColor ="green";
  movingRect.debug = true;
  movingRect.velocityX = -5;

  a = createSprite(100,100,20,20);
  a.shapeColor ="green";
  a.debug = true;
  a.velocityX = 5;
  a.y = 200;

  b = createSprite(200,100,20,20);
  b.shapeColor ="green";
  b.debug = true;

  c = createSprite(300,100,20,20);
  c.shapeColor ="green";
  c.debug = true;

  
  
}

function draw() {
  background(0); 
  //movingRect.x = mouseX ;
  //movingRect.y = mouseY;

if (isTouching(a, movingRect)){
  movingRect.shapeColor = "pink";
  a.shapeColor ="pink" ;
}
else {

  a.shapeColor ="yellow";
  movingRect.shapeColor = "yellow";


}

 bounceOff(a,movingRect);

  drawSprites();


 
}

