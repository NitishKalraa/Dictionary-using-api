var bg;
var font;
var meaning, synonym;
var res;
var form;

function preload() {
  bg = loadImage("images/bg.png");
  font = loadFont("font/LemonMilk.otf");
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
