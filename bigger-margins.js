function setup() {
  createCanvas(400, 400);
  frameRate(20);
}

function draw() {
  background(255);

  for (var x =50; x < width-50; x = x + 10) {
    line(x, height/2, mouseX, mouseY);
  }
}
