

var car ,wall1,wall2,wall3,wall4;
var speed,weight;

var zenia,tourus,cyclap;



function setup() {
  createCanvas(800,400);
  
 // createSprite(400, 200, 50, 50);


  speed =  random(5,6);
  
  weight =  random( 400,1500);



   
    car =  createSprite(50,150,15,15);
    
  
   
   zenia = createSprite(50,50,15,15);
   tourus = createSprite(50,250,15,15);
   cyclap = createSprite(50,350,15,15);

   wall1 =  createSprite(735,50,15,50);
   wall2 = createSprite(735,150,15,50);    
   wall3 = createSprite(735,250,15,50);
   wall4 = createSprite(735,350,15,50);

   car .velocityX = speed;
   zenia.velocityX = (3,3);
   tourus.velocityX = (5,5);
   cyclap.velocityX = (4.5,5);

}

function draw() {
  background("black");  
  drawSprites();

  car.display();
  wall1.display();
  zenia.display();
  wall2.display();
  wall3.display();
  tourus.display();
  wall4.display();
  cyclap.display();
}