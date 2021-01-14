var hr,min,sec
var hrAngle,minAngle,secAngle

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES)
  
}

function draw() {
  background(255,255,255);  
  translate (400,400)
  rotate (-90)
  hr=hour()
  min=minute()
  sec=second ()
  secAngle=map(sec,0,60,0,360)
  minAngle=map(min,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)

push ()
  rotate(secAngle)
  stroke ("blue")
  strokeWeight (5)
  line (0,0,160,0)
  pop ()

  push ()
  rotate(minAngle)
  stroke ("red")
  strokeWeight (5)
  line (0,0,150,0)
 pop ()

 push()
  rotate(hrAngle)
  stroke ("green")
  strokeWeight (5)
  line (0,0,100,0)
  pop ()
  strokeWeight(7)
  point (0,0)
  noFill()
  stroke ("blue")
  arc (0,0,300,300,0,secAngle)
  stroke("red")
  arc(0,0,280,280,0,minAngle)
  stroke("green")
  arc(0,0,260,260,0,hrAngle)
}