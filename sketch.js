var fixedRect , movingRect,o1,o2;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";

  fixedRect.debug=true;
  movingRect.debug=true;

o1=createSprite(200,100,50,50);
 o1.shapecolor="green";
 o1.debug=true;

 o2=createSprite(300,100,50,50);
 o2.shapecolor="green";
 o2.debug=true;

}

function draw() {
  background(0,0,0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  
if(isTouching(movingRect,fixedRect)){

  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

}

else{

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

}


  drawSprites();
}


