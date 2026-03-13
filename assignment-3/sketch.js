function setup() {
  createCanvas(600, 600);
}

function draw() {
  noLoop();
  background("#c6e6ff");
  
  // hair 
  fill(0);
  rect(200, 200, 200, 300, 70);
  
  // neck
  fill("#ffe7d8");
  rect(275, 370, 50, 40);
  
  // body
  fill(200);
  rect(225, 395, 150, 400, 20);
  rect(200, 410, 30, 200, 20);
  rect(370, 410, 30, 200, 20);
  
  // hands
  fill("#ffe7d8");
  circle(215, 590, 35);
  circle(385, 590, 35);
  
  // face
  circle(width/2, height/2, 150);
  
  // bangs
  fill(0);
  ellipse(300, 225, 125, 50);
  
  // eyes 
  circle(270, 285, 15);
  circle(330, 285, 15);
  
  // brows 
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(255, 270);
  quadraticVertex(270, 260, 285, 270);
  endShape();
  
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(315, 270);
  quadraticVertex(330, 260, 345, 270);
  endShape();
  
  // nose
  fill(0);
  triangle(300, 300, 295, 310, 305, 310);
  
  // mouth 
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(270, 340);
  quadraticVertex(300, 360, 330, 340);
  endShape();
  
  // blush
  noStroke();
  fill("#ffd8f2");
  ellipse(255, 310, 45, 20);
  ellipse(345, 310, 45, 20);
  
  // glasses 
  noFill();
  stroke(0);
  strokeWeight(3);
  square(245, 260, 45, 10);
  square(310, 260, 45, 10);
  line(290, 285, 310, 285);
  
  // shirt text
  fill("#db2100");
  textSize(17);
  strokeWeight(1);
  text("Northeastern", 250, 485);
  text("University", 265, 515);
  
  // description
  fill(0);
  text("Northeastern Student!", 420, 580);
  
  saveCanvas();
}
