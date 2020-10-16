var bullet, wall;

var speed, weight;



function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 50, 50);

  wall = createSprite(1500, 200, 60, height/2);

speed = random(55, 90);
weight = random(400, 52);

}

function draw() {
  background(255,255,255);  
 bullet.velocityX = speed;

 wall.shapeColor = color(80, 80, 80);

if (hasCollided(bullet, wall)) {
  bullet.velocityX = 0;

  var deformation = 0.5*weight*speed*speed/22500;

if(deformation<100) {
   bullet.shapeColor = color(0, 255, 0);   
}

if(deformation<180 && deformation>100) {
   bullet.shapeColor = color(230, 230, 0);
}

if(deformation>180) {
   bullet.shapeColor = color(255, 0, 0);
}

}


 drawSprites();
}

function hasCollided(lbullet, lwall) {
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;
   if(bulletRightEdge >= wallLeftEdge) {
   
   return true
   }
   
   return false;
   
   }
   
   