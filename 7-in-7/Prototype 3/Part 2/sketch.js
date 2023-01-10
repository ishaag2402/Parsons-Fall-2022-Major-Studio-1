let peopleX = 0;
let peopleY = 322;
let peopleW = 10;
let peopleH = 40;
let peopleCounter = 0;
let sf = 0.335;

function setup() {
  createCanvas(600,400);
  imgSec = loadImage('assets/CPsec.png');
  imgElev = loadImage('assets/CPelev.png');
}

function draw() {
  background(210);
  
  push();
  scale(sf);
  image(imgElev,0,0);
  pop();
  
  people(255,255,255,0.35);
  people(0,0,0,0.9);
  people(150,150,150,0.8);
  people(0,0,0,1.155);
  people(0,0,0,1.2);
  people(0,0,0,0.2);
  people(110,0,31,0.755);
  people(0,125,255,0.25);
  people(0,0,0,1.3);
  people(0,0,0,1.4);
  people(255,0,191,0.45);
  people(0,125,255,0.65);
  people(255,255,255,0.85);
  people(255,0,0,0.15);
  people(0,0,0,0.5);
  people(255,255,255,1);
  people(0,0,0,1.65);
  people(0,0,0,1.75);
  people(0,125,255,0.3);
  people(0,125,255,0.1);
  people(168,127,2,0.65);
  people(0,185,0,0.25);
  
  push();
  scale(sf);
  image(imgSec,0,0);
  pop();
  
}

function people(r,g,b,peopleSpeed){
  push();
  noStroke();
  fill(r,g,b);
  rect(peopleX,peopleY,peopleW,peopleH);
  peopleX+=peopleSpeed;
  peopleX = peopleCounter*peopleSpeed%width;
  peopleCounter+=0.18;
  pop();
}