var speed,weight;
var car,wall,deformation;
function setup() {
  createCanvas(1600,400);
 car=createSprite(50, 200, 50, 50);
 speed=random(55,90);
 weight=random(400,1500);
 wall=createSprite(1500, 200, 60,height/2);
 car.velocityX=speed;
 
wall.shapeColor=(80,80,80);

deformation=0.5*weight*speed*speed/22500;
}

function draw() {
  background(255,255,255);  
 
  if(wall.x-car.x<wall.width/2+car.width){
    car.velocityX=0;
    if (deformation<180) {
    car.shapeColor=("red");
    }
    if (deformation>=180 && deformation<=100) {
      car.shapeColor=("yellow");
      
      }
      if (deformation<100) {
        car.shapeColor=("green");
        
        }
       
  }

  
  
  drawSprites();
}