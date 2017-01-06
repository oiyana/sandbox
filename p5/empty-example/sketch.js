function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  }
  else {
    fill (3,252,186);
    noStroke();
  }
  ellipse(mouseX, mouseY, 20, 20);
}

function mousePressed() {
  clear();
}
