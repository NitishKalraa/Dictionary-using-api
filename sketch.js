var bg;
var font;
var meaning, synonym;
var footer;
var res;
var form;

function preload() {
  bg = loadImage("images/bg.png");
  font = loadFont("font/LemonMilk.otf");
  footer = loadImage("images/name.png");
}
function setup() {
  createCanvas(innerWidth, innerHeight);
  form = new Form();
}
function draw() {
  background(bg);
  form.display();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
