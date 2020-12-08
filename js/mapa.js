var fondo;
var posX=0;

function preload(){
  fondo = loadImage("../archivos/fondo.png");
}

function setup() {
  var canvas = createCanvas(600, 400);
  canvas.parent("map");
  fondo.resize(0,800);
}

function draw() {
  background(220);
  if(keyIsPressed){
    if(keyCode==39){
      posX -=5;
    }else if(keyCode==37){
      posX +=5;
    }
  }
  image(fondo,posX,-150);
}