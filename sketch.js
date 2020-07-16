var car1,car2,car3,car4,wall;
var speed,weight;


function setup() {
  createCanvas(1100,500);
  wall=createSprite(1000,250,50,500);
  speed=random(55,90);
  weight=random(400,1500);
 car1= createSprite(50,100,  50, 50);
 car2= createSprite(50,200,  50, 50);
 car3= createSprite(50,300,  50, 50);
 car4= createSprite(50,400, 50, 50);
 car1.velocityX=speed;
 car2.velocityX=speed;
 car3.velocityX=speed;
 car4.velocityX=speed;

}

function draw() {
  background(255,255,255); 
  
  if (wall.x-car1.x<(car1.width+wall.width)/2 &&
  wall.x-car2.x<(car2.width+wall.width)/2 &&
  wall.x-car3.x<(car3.width+wall.width)/2 &&
  wall.x-car4.x<(car4.width+wall.width)/2 ) {
 car1.velocityX=0;
 car2.velocityX=0;
 car3.velocityX=0;
 car4.velocityX=0;
 var deformation=0.5*weight*speed*speed/22500;
 if (deformation>180) {
  car1.shapeColor=("red")
  car2.shapeColor=("red")
  car3.shapeColor=("red")
  car4.shapeColor=("red")
 
 }
 if (deformation<180&&deformation>100) {
  car1.shapeColor=("yellow")
  car2.shapeColor=("yellow")
  car3.shapeColor=("yellow")
  car4.shapeColor=("yellow")
 }
 if(deformation<180){
  car1.shapeColor=("green")
  car2.shapeColor=("green")
  car3.shapeColor=("green")
  car4.shapeColor=("green")
 }
 }
 


  drawSprites();
}