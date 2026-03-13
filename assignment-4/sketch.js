/* 
Prototyping with Code
Eva Yuan | yuan.ev@northeastern.edu
Assignment 4 | Valentine's Day Wrapping Paper
*/ 

function setup() {
  createCanvas(1024, 1024);
  noLoop();
}

function draw() {
  Background();
  Pattern();
}
  
// gradient background
function Background() {
  noStroke();

  for (let y = 0; y < height; y++) {
    let r = map(y, 0, height, 255, 255);
    let g = map(y, 0, height, 180, 80);
    let b = map(y, 0, height, 220, 120);
    fill(r, g, b);
    rect(0, y, width, 1);
  }
}
  
function Pattern() {
  // spacing of shapes
  let spacing = 51;
  let size = 25;

  for (let x = spacing / 2; x < width; x += spacing) {
    for (let y = spacing / 2; y < height; y += spacing) {

      // color selector
      if (random() < 0.5) {
        fill(255, 255, 255, 180); // white
      } else {
        fill(255, 52, 116, 180); // pink
      }
      noStroke();

      // circle & diamond placement
      if (Math.floor(x / spacing) % 2 === 0) {
        circle(x, y, size);
      } else {
        push();
        translate(x, y);
        rotate(PI / 4);
        rectMode(CENTER);
        square(0, 0, size);
        pop();
      }
    }
  }
}

function keyPressed() {
  if (key === 'S' || key === 's') {
    saveCanvas('assignment4_pattern_yuan_eva', 'png');
  }
}
