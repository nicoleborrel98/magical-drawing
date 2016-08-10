var myred = 10;
var mygreen = 0;
var myblue = 255;

function setup() {
  createCanvas(600, 480);
 background(100, 200, 100);
}
  
function draw() {
  noStroke();
  myred = myred + 5;
  if (myred > 200) {
    myred = 0;
  }
  myblue = myblue - 1;
  if (myblue <= 0) {
    myblue = 255;
  }
  fill(myred, mygreen, myblue);
  ellipse(mouseX, mouseY, 20, 20);
  
  if (mouseIsPressed){
    fill(255,255,255);
    ellipse(mouseX,mouseY,40);
    
    function circle(x,y,diameter) {
ellipse(x,y,diameter);
    }
}
  
 
  
  
}