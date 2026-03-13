/* 
Prototyping with Code
Eva Yuan | yuan.ev@northeastern.edu
Assignment 5 | Ocean Waves
*/ 

// global variables 
let t = 0; // time 
let layers = 10; // number of waves 

let amplitude = [];
let frequency = [];
let speed = [];
let phase = [];
let baseY = [];
let waveColor = [];

// runs on any sized canvas 
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
  let waveAmplitude = height * 0.05;
  let waveFrequency = 0.01;
  
  for (let i = 0; i < layers; i++) {
    amplitude[i] = waveAmplitude;
    frequency[i] = waveFrequency;
    speed[i] = random(0.01, 0.02);
    phase[i] = random(TWO_PI);

    baseY[i] = map(i, 0, layers - 1, height * 0.2, height * 0.85);

    // gradient waves 
    waveColor[i] = lerpColor(
      color(20, 70, 140), // dark blue
      color(150, 200, 240), // light blue
      i / (layers - 1)
    );
  }
}

// creating the waves 
function draw() {
  background(200, 220, 240);
  
  for (let i = 0; i < layers; i++) {

    fill(waveColor[i]);

    beginShape();
    vertex(0, height);

    for (let x = 0; x <= width; x += 10) {
      let waveHeight =
        sin(x * frequency[i] + t * speed[i] + phase[i]) * amplitude[i];
      let y = baseY[i] + waveHeight;
      vertex(x, y);
    }
    vertex(width, height);
    endShape(CLOSE);
  }

// speed of waves 
  t += 1;
}

// resizes with browser 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
