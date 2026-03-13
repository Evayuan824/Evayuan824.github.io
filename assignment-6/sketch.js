/*
Prototyping with Code
Eva Yuan | yuan.ev@northeastern.edu
Assignment 6 

Instructions:
- Draw: hold LEFT mouse and drag
- Erase: hold RIGHT mouse and drag
- Clear: press C
- Save: press S
- Colors: R (red), G (green), B (blue), K (black), O (random)
*/

let clr = [0, 0, 0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0, 127);
  strokeWeight(5);
  background(255);
}

function draw() {

// instructions at the top 
  noStroke();
  fill(220, 220);
  rect(10, 10, 380, 55);
  fill(0);
  textSize(12);
  text("Draw: LEFT drag | Erase: RIGHT drag | C = clear | S = save", 20, 30);
  text("R = Red | G = Green | B = Blue | K = Black | O = Random", 20, 50);

// draw / erase
if (mouseIsPressed && mouseButton === LEFT) { 
  let d = dist(mouseX, mouseY, pmouseX, pmouseY);
  stroke(clr);
  strokeWeight(0.2 * d + random(5));
  line(pmouseX, pmouseY, mouseX, mouseY);

} else if (mouseIsPressed && mouseButton === RIGHT) { 
  stroke(255);
  strokeWeight(100);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

}

// board clears if c key is clicked 
function keyPressed() {
  if (key == "C" || key == "c") {
    background(255);

  } else if (key == "S" || key == "s") { 
    saveCanvas("assignment6.png");

  } else if (key == "R" || key == "r") {
    clr = [255, 134, 134];
  } else if (key == "G" || key == "g") {
    clr = [0, 255, 0];
  } else if (key == "B" || key == "b") {
    clr = [200, 200, 255];
  } else if (key == "K" || key == "k") {
    clr = [0, 0, 0];
  } else if (key == "O" || key == "o") {
    clr = [random(255), random(255), random(255)];
  }
}

// updates canvas if window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255);
}
