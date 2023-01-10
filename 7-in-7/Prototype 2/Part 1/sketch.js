let eSize = 5;

function setup() {
  createCanvas(400,400);
  rectMode(CENTER);
  textAlign(CENTER);
  imgMSP = loadImage('assets/MSP.png');
  // imgMSPc = loadImage('assets/MSPcolours.jpg');
}

function draw() {
  background(220);
  
  push();
  scale(0.287);
  image(imgMSP,0,0);
  pop();
  
  //light beige
  drawColour(85,179,40,234,221,183);
  drawColour(278,300,50,234,221,183); 
  drawColour(200,250,50,234,221,183);
  drawColour(217,267,50,234,221,183);
  drawColour(159,245,30,234,221,183); 
  
  //dark beige
  drawColour(316,240,40,195,181,139);
  drawColour(333,213,35,195,181,139);
  drawColour(292,222,30,195,181,139);
  drawColour(273,225,30,195,181,139);
  drawColour(260,210,40,195,181,139);
  drawColour(228,201,30,195,181,139);
  drawColour(292,192,35,195,181,139);
  drawColour(272,173,30,195,181,139);
  drawColour(250,160,32,195,181,139);
  drawColour(125,144,10,195,181,139);
  
  //mustard
  drawColour(144,204,60,230,178,95);
  drawColour(235,246,36,230,178,95);
  drawColour(289,276,40,230,178,95);
  
  //medium brown
  drawColour(248,296,40,148,119,65);
  
  //medium lighter brown
  drawColour(267,253,22,183,125,46);
  drawColour(315,195,25,183,125,46);
  drawColour(249,239,15,183,125,46);
  
  //blue
  drawColour(258,277,42,90,190,194);
  
  //yellow umbrellas
  drawColour(116,101,20,255,194,0);
  drawColour(114,116,20,255,194,0);
  drawColour(104,126,20,255,194,0);
  drawColour(165,230,16,255,194,0);
  
  //orange
  drawColour(123,81,10,255,139,0);
  drawColour(117,129,10,255,139,0);
  drawColour(70,206,12,255,139,0);
  drawColour(216,225,25,255,139,0);
  
  //magenta
  drawColour(125,101,12,138,54,75);
  drawColour(93,132,12,138,54,75);
  drawColour(202,191,18,138,54,75);
  
  //red
  drawColour(103,109,10,255,32,2);
  drawColour(124,108,10,255,32,2);
  drawColour(298,173,10,255,32,2);
  
  //scaffolding green
  drawColour(125,92,10,48,115,73);
  drawColour(113,138,10,48,115,73);
  drawColour(85,147,15,48,115,73);
  drawColour(60,196,17,48,115,73);
  drawColour(96,210,20,48,115,73);
  
  //tree green - dark
  drawColour(170,155,30,61,117,42);
  drawColour(209,168,25,61,117,42);
  
  //tree green - medium
  drawColour(184,176,23,87,165,61);
  drawColour(139,116,20,87,165,61);
  
  //tree green - light
  drawColour(146,141,23,127,179,40);
  drawColour(228,148,15,127,179,40);
  
  //grey
  drawColour(192,153,25,153,153,153);
  drawColour(312,275,21,153,153,153);
  drawColour(207,287,21,153,153,153);
  drawColour(179,265,18,153,153,153);
  
  //tree yellow
  drawColour(213,149,17,255,216,0);
  
  //dark brown
  drawColour(130,136,10,144,89,31);
  drawColour(150,160,13,144,89,31);
  drawColour(76,156,10,144,89,31);
  drawColour(108,168,13,144,89,31);
  drawColour(82,203,10,144,89,31);
  drawColour(189,278,15,144,89,31);
  drawColour(221,295,15,144,89,31);
  
  //blue grey
  drawColour(232,183,28,122,145,152);
  
  //sol green
  drawColour(244,146,10,78,125,85);
  drawColour(267,159,12,78,125,85);
  drawColour(305,181,15,78,125,85);
  drawColour(348,210,15,78,125,85);
  drawColour(290,240,25,78,125,85);
  drawColour(242,216,20,78,125,85);
  drawColour(212,205,10,78,125,85);
  drawColour(236,301,15,78,125,85);
  drawColour(230,166,10,78,125,85);
  
  //light grey
  drawColour(197,212,20,223,223,223);
  
  //dark blue
  drawColour(182,200,20,71,113,187);
  
  //dark grey
  drawColour(130,125,10,68,68,68);
  drawColour(166,175,13,68,68,68);
  drawColour(131,151,13,68,68,68);
  drawColour(225,160,13,68,68,68);
  drawColour(235,139,10,68,68,68);
  drawColour(102,155,20,68,68,68);
  drawColour(127,169,21,68,68,68);
  drawColour(132,235,20,68,68,68);
  drawColour(185,222,20,68,68,68);
  drawColour(229,227,13,68,68,68);
  drawColour(282,326,13,68,68,68);
  drawColour(241,193,13,68,68,68);
  drawColour(261,227,13,68,68,68);
  drawColour(320,258,20,68,68,68);
  drawColour(340,226,13,68,68,68);
  drawColour(326,192,13,68,68,68);
  
//   push();
//   scale(0.287);
//   tint(255,50);
//   image(imgMSPc,0,0);
//   pop();
  
//   text(mouseX,50,50);
//   text(mouseY,50,70);
  
}

function drawColour(x,y,s,r,g,b){
  
  push();
  translate(x,y); 
  fill(r,g,b);
  noStroke();
  ellipse(0,0,s);
  pop();
    
  let d = dist(x,y,mouseX,mouseY);
  if(d<s/2){
    noStroke();
    fill(220);
    rect(mouseX,mouseY-30,90,40,10);
    triangle(mouseX-7,mouseY-10,mouseX+7,mouseY-10,mouseX,mouseY)
    fill(0);
    text(r + ", " + g + ", " + b,mouseX,mouseY-25);
  }
  
}