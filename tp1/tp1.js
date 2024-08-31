// Eyen gialleonardo com 2  https://youtu.be/_8ZS4Pt48ug

let a;
let estado=false;
let cant=48;
let cant2=20;
let tam;
let tamh;
let bx=50;
let by=300;
let bAncho=100;
let bAlto=30;

function preload(){
  a=loadImage("data/a.jpg");
  }

function setup() {
 createCanvas (800, 400);
background(0);

  tam=width/cant;
  tamh=cant2;
fondo(cant,tam,estado);

}
function draw() {
  image(a, 0, 0, 400, 400);
  fondo(cant, tam, estado);
  dibujarboton();
  lineas(0, 0);
  cuadrados();
}

function dibujarboton() {
  fill(200, 30, 23);
  rect(bx, by, bAncho, bAlto);
  fill(0);
  textAlign(CENTER, CENTER);
  text("REINICIO", bx + bAncho / 2, by + bAlto / 2);
}

function keyPressed() {

  if (keyCode === DOWN_ARROW) {
    estado = !estado;
  }
}


function mousePressed() {
  if (mouseX > bx && mouseX < bx + bAncho && mouseY > by && mouseY < by + bAlto) {
    estado = false;
    background(255);
  }
}
