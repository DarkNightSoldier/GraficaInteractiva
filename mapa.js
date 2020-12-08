//Script hecho por Alejandro Higuera Castro para la clase de Gráfica Interactiva

var fondo, tarjeta, tarjeta1, tarjeta2, tarjeta3, tarjeta4, tarjeta5;
var botonAtras, botonAdelante, botonAdelanteAlpha, botonAtrasAlpha;
var boton1 = false, boton2 = false, boton3 = false, boton4 = false, boton5 = false;
var posX=0;
var canvas;
var widthWindow;

function preload(){
  fondo = loadImage("archivos/fondo.png");
  tarjeta = loadImage("archivos/vacio.png");
  tarjeta1 = loadImage("archivos/tarjeta1.png");
  tarjeta2 = loadImage("archivos/tarjeta2.png");
  tarjeta3 = loadImage("archivos/tarjeta3.png");
  tarjeta4 = loadImage("archivos/tarjeta4.png");
  tarjeta5 = loadImage("archivos/tarjeta5.png");
  botonAtras = loadImage("archivos/atras.png");
  botonAdelanteAlpha = loadImage("archivos/opacadelante.png");
  botonAtrasAlpha = loadImage("archivos/opacatras.png");
  botonAdelante = loadImage("archivos/adelante.png");
}

function setup() {
  canvas = createCanvas(360,400);
  // Vincula al elemento con id canvas, el lienzo generado por p5.js
  canvas.parent("map");
  fondo.resize(0,800);
}

function adjustCanvas(){
  document.getElementById("defaultCanvas0").style = "width:400px; height:400px; margin:auto; display:block;"
}

function draw() {
  adjustCanvas();
  background(220);
  pasarFondo();
  image(fondo,0,-150);
  botonesAvance();
  botonBarril();
  botonDepJaimito();
  botonDepFlorinda();
  botonDepClotilde();
  botonDepRamon();
  displayTarjetas();
}

function pasarFondo(){
  if(keyIsPressed){
    if(keyCode==39 & posX>=-885){
      posX -=5;
    }else if(keyCode==37 & posX<0){
      posX +=5;
    }
  }
  translate(posX,0);
}

function botonesAvance(){
  if(mouseIsPressed & (20<=mouseX & 40>=mouseX) & (360<=mouseY & 400>=mouseY)){
    image(botonAtras,20-posX,350);
    if(posX<0){
      posX +=5;
    }
  }else{
    image(botonAtrasAlpha,20-posX,350);
  }
  if(mouseIsPressed & (width-60<=mouseX & width-20>=mouseX) & (360<=mouseY & 400>=mouseY)){
    image(botonAdelante,width-60-posX,350);
    if(posX>=-885){
      posX -=5;
    }
  }else{
    image(botonAdelanteAlpha,width-60-posX,350);
  }
}

function botonBarril(){
  var x = 300;
  var y = 320;
  push();
  fill('orange');
  if(mouseIsPressed & (x+posX-20<=mouseX & x+posX+20>=mouseX) & (y-20<=mouseY & y+20>=mouseY)){
    boton1 = true;
    tarjeta = tarjeta1;
  }
  if(boton1){
    if(mouseIsPressed & (20<=mouseX & 40>=mouseX) & (20<=mouseY & 40>=mouseY)){
      boton1 = false;
    }
    fill('red');
  }
  circle(x,y,20);
  pop();
}

function botonDepJaimito(){
  var x = 310;
  var y = 200;
  push();
  fill('orange');
  if(mouseIsPressed & (x+posX-20<=mouseX & x+posX+20>=mouseX) & (y-20<=mouseY & y+20>=mouseY)){
    boton2 = true;
    tarjeta = tarjeta2;
  }
  if(boton2){
    if(mouseIsPressed & (20<=mouseX & 40>=mouseX) & (20<=mouseY & 40>=mouseY)){
      boton2 = false;
    }
    fill('red');
  }
  circle(x,y,20);
  pop();
}

function botonDepFlorinda(){
  var x = 460;
  var y = 280;
  push();
  fill('orange');
  if(mouseIsPressed & (x+posX-20<=mouseX & x+posX+20>=mouseX) & (y-20<=mouseY & y+20>=mouseY)){
    boton3 = true;
    tarjeta = tarjeta3;
  }
  if(boton3){
    if(mouseIsPressed & (20<=mouseX & 40>=mouseX) & (20<=mouseY & 40>=mouseY)){
      boton3 = false;
    }
    fill('red');
  }
  circle(x,y,20);
  pop();
}

function botonDepClotilde(){
  var x = 510;
  var y = 280;
  push();
  fill('orange');
  if(mouseIsPressed & (x+posX-20<=mouseX & x+posX+20>=mouseX) & (y-20<=mouseY & y+20>=mouseY)){
    boton4 = true;
    tarjeta = tarjeta4;
  }
  if(boton4){
    if(mouseIsPressed & (20<=mouseX & 40>=mouseX) & (20<=mouseY & 40>=mouseY)){
      boton4 = false;
    }
    fill('red');
  }
  circle(x,y,20);
  pop();
}

function botonDepRamon(){
  var x = 780;
  var y = 280;
  push();
  fill('orange');
  if(mouseIsPressed & (x+posX-20<=mouseX & x+posX+20>=mouseX) & (y-20<=mouseY & y+20>=mouseY)){
    boton5 = true;
    tarjeta = tarjeta5;
  }
  if(boton5){
    if(mouseIsPressed & (20<=mouseX & 40>=mouseX) & (20<=mouseY & 40>=mouseY)){
      boton5 = false;
    }
    fill('red');
  }
  circle(x,y,20);
  pop();
}

function displayTarjetas(){
  if(boton1 | boton2 | boton3 | boton4 | boton5 ){
    image(tarjeta,20-posX,20);
 }
}