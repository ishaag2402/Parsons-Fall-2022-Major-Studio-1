let eSize = 5;

function setup() {
  createCanvas(400,400);
  rectMode(CENTER);
  textAlign(CENTER);
  imgCP = loadImage('assets/CP.png');
  // imgCPc = loadImage('assets/CPcolours.jpg');
}

function draw() {
  background(220);
  
  push();
  scale(0.305);
  image(imgCP,0,0);
  pop();
  
  //skyscraper blue
  drawColour(170,237,50,71,84,120);
  drawColour(202,249,53,71,84,120);
  drawColour(80,206,10,71,84,120);
  drawColour(128,238,10,71,84,120);
  
  //light beige
  drawColour(273,196,35,234,221,183);
  drawColour(265,220,35,234,221,183);
  drawColour(228,198,40,234,221,183);
  drawColour(252,201,35,234,221,183);
  drawColour(245,182,35,234,221,183);
  drawColour(230,170,22,234,221,183);
  drawColour(199,155,30,234,221,183);
  drawColour(173,182,25,234,221,183);
  drawColour(229,279,30,234,221,183);
  drawColour(220,237,23,234,221,183);
  drawColour(195,271,22,234,221,183);
  drawColour(173,259,23,234,221,183);
  drawColour(187,215,15,234,221,183);
  drawColour(173,208,15,234,221,183);
  drawColour(120,227,25,234,221,183);
  drawColour(107,204,50,234,221,183);
  
  //dark beige
  drawColour(280,280,40,195,181,139);
  drawColour(254,294,30,195,181,139);
  drawColour(272,307,30,195,181,139);
  
  //medium reddish brown
  drawColour(177,137,30,215,195,185);
  drawColour(158,166,30,215,195,185);
  drawColour(298,243,30,215,195,185);
  drawColour(157,203,20,215,195,185);
  drawColour(247,258,30,215,195,185);

  //medium lighter brown
  drawColour(141,130,40,183,125,46);
  drawColour(216,156,20,183,125,46);
  drawColour(304,233,20,183,125,46);
  
  //medium darker brown
  drawColour(125,152,28,183,125,46);
  drawColour(141,164,20,183,125,46);
  drawColour(106,175,24,183,125,46);
  drawColour(130,185,20,183,125,46);
  drawColour(250,151,15,183,125,46);
  drawColour(216,135,10,183,125,46);
  drawColour(273,167,8,183,125,46);
  
  //reddish brown
  drawColour(197,191,27,185,93,58);
  drawColour(141,233,17,185,93,58);
  
  //mustard
  // drawColour(144,204,60,230,178,95);
  
  //medium brown
  // drawColour(248,296,40,148,119,65);

  //yellow built form
  drawColour(91,183,10,255,194,0);
  drawColour(83,215,10,255,194,0);
  drawColour(104,227,12,255,194,0);
  
  //red
  drawColour(292,177,12,255,32,2);
  drawColour(302,172,15,255,32,2);
  drawColour(202,281,10,255,32,2);

  //light grey
  drawColour(299,218,20,223,223,223);
  drawColour(319,229,25,223,223,223);
  
  //tree green - dark
  drawColour(207,125,23,61,117,42);
  drawColour(229,138,15,61,117,42);
  drawColour(259,145,17,61,117,42);
  drawColour(261,161,10,61,117,42);
  drawColour(285,163,25,61,117,42);
  drawColour(111,148,10,61,117,42);
  drawColour(125,175,10,61,117,42);
  drawColour(141,187,10,61,117,42);
  drawColour(304,205,15,61,117,42);
  drawColour(325,216,18,61,117,42);
  drawColour(316,245,13,61,117,42);
  drawColour(305,257,10,61,117,42);
  drawColour(283,240,12,61,117,42);
  
  //tree green - medium
  drawColour(243,139,20,87,165,61);
  drawColour(270,157,16,87,165,61);
  drawColour(309,217,20,87,165,61);
  drawColour(116,171,10,87,165,61);
  drawColour(103,162,10,87,165,61);
  
  //tree green - light
  drawColour(235,127,18,127,179,40);
  
  //tree yellow
  drawColour(222,122,15,255,216,0);
  drawColour(299,183,10,255,216,0);
  
  //white grey
  drawColour(153,116,10,230,230,230);
  drawColour(124,128,10,230,230,230);
  drawColour(181,136,10,230,230,230);
  drawColour(154,173,10,230,230,230);
  drawColour(187,194,10,230,230,230);
  
  //dark reddish brown
  drawColour(137,245,10,132,65,53);
  
  //dark blue
  drawColour(270,182,10,35,66,151);
  drawColour(292,195,10,35,66,151);
  drawColour(235,220,20,35,66,151);
  drawColour(265,235,22,35,66,151);
  
  //sol green
  drawColour(132,114,13,110,190,136);
  drawColour(258,176,15,110,190,136);
  drawColour(279,185,13,110,190,136);
  drawColour(284,209,13,110,190,136);
  drawColour(247,221,13,110,190,136);
  drawColour(287,267,10,110,190,136);
  drawColour(291,303,12,110,190,136);
  drawColour(255,309,10,110,190,136);
  
  //dark grey
  drawColour(139,109,10,68,68,68);
  drawColour(162,128,13,68,68,68);
  drawColour(202,145,17,68,68,68);
  drawColour(254,170,10,68,68,68);
  drawColour(120,138,10,68,68,68);
  drawColour(289,203,10,68,68,68);
  drawColour(112,156,8,68,68,68);
  drawColour(97,170,7,68,68,68);
  drawColour(110,167,10,68,68,68);
  drawColour(132,167,10,68,68,68);
  drawColour(162,184,10,68,68,68);
  drawColour(153,192,8,68,68,68);
  drawColour(204,204,10,68,68,68);
  drawColour(274,226,15,68,68,68);
  drawColour(250,232,10,68,68,68);
  drawColour(239,242,8,68,68,68);
  drawColour(270,256,12,68,68,68);
  drawColour(229,296,8,68,68,68);
  drawColour(139,109,10,68,68,68);
  drawColour(295,293,13,68,68,68);
  drawColour(244,305,13,68,68,68);
  drawColour(276,320,10,68,68,68);
  
//   push();
//   scale(0.343);
//   tint(255,50);
//   image(imgCPc,0,0);
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