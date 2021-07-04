var cities;

function preload(){
  cities = loadTable("cities.csv", "header");
}

function setup(){
  createCanvas(650,450);
  noStroke();
  frameRate(2); // slowing down the rate of the loop
}

function draw(){
  
  r = random(0,200); // r is a random number between 0 - 200
  g = random(0,200); // g is a random number betwen 0 - 200
  b = random(0,200); // b is a random number between 0 - 200
  bgr = random(200,255); // r is a random number between 200 - 255
  bgg = random(200,255); // g is a random number betwen 200 - 255
  bgb = random(200,255); // b is a random number between 200 - 255
  
  background(bgr,bgg,bgb); // randomly generated colors within parameters determined by variables above
  fill(r*3,g,b,25); // randomly generated colors within parameters determined by variables above, with some transparency
  translate(2,0); // centering the bulk of the map within the frame
  scale(1); // changing the scale
  "// noprotect"
  for(var i=0; i<cities.getRowCount();i++){
    var waterness=cities.getNum(i,"Water Area");
    var landness=cities.getNum(i,"Land Area");
    setXY(landness,waterness);
  }
}

function setXY(landness,waterness) {
  var d = (landness/waterness)
  var x = map(d, mouseY, width, 25, 75);
  var y = map(mouseX, d, width, 25, 75);
  rect(x,y,2,20);
}

  

//// save image ////
// this function saves a picture of the canvas 
// when the "s" key is pressed
// place this at the end of your sketch.js file
// after the closing bracket of the draw() function
function keyTyped() {
  if (key === 's') {
    saveCanvas('myCanvas'+hour()+minute()+second()+'-'+frameCount, 'png');
  }
}