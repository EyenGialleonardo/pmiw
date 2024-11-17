//https://youtu.be/lAL_srV8LDQ

let sakura;
let estrellas = [];
let enemigos = [];
let estrellasAtrapadas = 0;
let vidas = 3;
let velocidad = 2;
let estado = "inicio";
let tiempo = 0;
let caidaBuena = 0;
let caidaMala = 0;
let intervaloBuenos = 1500;
let intervaloMalos = 2000;
let pantallaInicio, pantallaPerdiste, pantallaGanaste, fondo, imgIzquierda, imgDerecha, imgGolpe, estrella, enemigo, creditos, corazon, puntos;

let miFuente;

let song;
let sonando=false;

function preload() {
  pantallaInicio = loadImage("/data/pinicio.jpeg");
  pantallaPerdiste = loadImage("/data/perdiste.jpeg");
  pantallaGanaste = loadImage ("/data/Ganar.jpg");
  creditos= loadImage("/data/creditos.png");
  fondo = loadImage("/data/fondo2.png");
  imgIzquierda = loadImage("/data/sakura1.png");
  imgDerecha = loadImage("/data/sakura2.png");
  imgGolpe = loadImage("/data/sakura3.png");
  estrella= loadImage("/data/Estrella.png");
  enemigo= loadImage("/data/Enemigo.png");
  corazon = loadImage("/data/vidas.png");
  puntos = loadImage("/data/puntos.png");
  miFuente = loadFont("/data/fuente.ttf");

  soundFormats('mp3');
  song = loadSound("/data/musiquita.mp3");
}

function setup() {
  createCanvas(640, 480);
  sakura = new Sakura();
  reiniciarObjetos();
  song.setVolume(0.2);
  song.play();
}

function draw() {
  background(200, 220, 255);
  /*if (!sonando) {
        song.play();
        sonando = true;
    }*/

  if (estado === "inicio") {
    mostrarInicio();
  } else if (estado === "jugando") {
    jugar();
  } else if (estado === "resultado") {
    mostrarPantallaResultado();
  } else if (estado === "creditos") {
    mostrarCreditos();

  }
}