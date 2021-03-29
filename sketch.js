function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
    //Translation and rotation 
    translate(200,200)
    rotate(-90)
  
  hr=hour();
  /*if(hr>12){
    hr=hr-12;
  }*/
  mins=minute();
  sec=second();
  
  secAngle=map(sec,0,60,0,360);
  minsAngle=map(mins,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);
  
  
  strokeWeight(3);
 
  push();
  stroke(0,0,255);
  rotate(hrAngle)
 // rotate(hrAngle);
  line(0,0,50,0);
  pop();
  push();

  //rotate(radians(minsAngle))
  rotate(minsAngle)
  stroke(255,0,0)
  line(0,0,75,0);
  pop();
  push();
  //rotate(radians(secAngle))
  rotate(secAngle);
  stroke(0,255,0)
  line(0,0,100,0);
  //rotate()
  pop();

//console.log(hr)
 
 drawSprites();
}