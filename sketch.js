let points = []; 
let numPoints = 30;
let margin = 50; 

function setup() {
  createCanvas(800, 800);
  noLoop();
  generatePoints(); }

function draw() {
  background(30); 
  drawConnections(); 
  drawPoints(); 
}

function generatePoints() {
  points = [];
  for (let i = 0; i < numPoints; i++) {
    let x = random(margin, width - margin);
    let y = random(margin, height - margin);
    points.push(createVector(x, y));
  }
}

function drawConnections() {
  strokeWeight(2);

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let p1 = points[i];
      let p2 = points[j];
      let d = dist(p1.x, p1.y, p2.x, p2.y);

      stroke(
        map(d, 0, width, 255, 50),
        map(d, 0, height, 50, 255),
        map(d, 0, width, 150, 255),
        200
      );

      if (random() < 0.5) {
        line(p1.x, p1.y, p2.x, p2.y);
      } else {
        bezier(
          p1.x,
          p1.y,
          random(p1.x, p2.x),
          random(0, height),
          random(p1.x, p2.x),
          random(0, height),
          p2.x,
          p2.y
        );
      }
    }
  }
}

function drawPoints() {
  noStroke();
  for (let p of points) {
    fill(random(255), random(255), random(255), 200);
    ellipse(p.x, p.y, 12, 12); 
  }
}

function mousePressed() {
  generatePoints();
  redraw();
}
