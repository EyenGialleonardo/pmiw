//https://youtu.be/eVcueuLuThg

let pantactual = 0
  let ima = []
  let textos = []
  let SongInicio
  let SongColegio
  let SongEstruendo
  let SongInstrumental

  function preload () {

  soundFormats('mp3');
  SongInicio = loadSound('/data/Inicio.mp3');
  SongColegio = loadSound('/data/Campana.mp3');
  SongEstruendo = loadSound('/data/Estruendo.mp3');
  SongInstrumental = loadSound ('/data/Instrumental.mp3')


    ima[0] = loadImage("/data/1.jpg");
  ima[1] = loadImage("/data/2.jpg");
  ima[2] = loadImage("/data/3.jpg");
  ima[3] = loadImage("/data/4.jpg");
  ima[4] = loadImage("/data/5.jpg");
  ima[5] = loadImage("/data/6.jpg");
  ima[6] = loadImage("/data/7.jpg");
  ima[7] = loadImage("/data/8.jpg");
  ima[8] = loadImage("/data/9.jpg");
  ima[9] = loadImage("/data/10.jpg");
  ima[10] = loadImage("/data/11.jpg");
  ima[11] = loadImage("/data/12.jpg");

  textos[0] = "EL LARGO SUEÑO DE SAKURA Y SUS AMIGOS"
    textos[1] = "Era un día tranquilo de escuela. Sakura se encontraba con sus amigas"
    textos[2] = "De pronto se escucha un estruendo"
    textos[3] = "De la nada se hace de noche y todos se quedan dormidos excepto Sakura"
    textos[4] = "Sakura se queda dormida junto a sus amigos pero por suerte Eriol llega y rescata \na todos"
    textos[5] = "Sakura decide ir a investigar. Se encuentra con unas luces \ny se da cuenta que es una carta mágica que debe atrapar"
    textos[6] = "Sakura vuela por los pasillos intentando atrapar las luces sin mucho éxito"
    textos[7] = "Shaoran aparece y le ofrece su ayuda"
    textos[8] = "Sakura rechaza a Shaoran y por más que lo intenta no lo logra sola. \nTodos se quedan dormidos en un sueño eterno"
    textos[9] = "Sakura acepta la ayuda de Shaoran y trabajan juntos"
    textos[10] = "Logran conseguir la carta y todos despiertan"
    textos[11] = "Créditos \nGialleonardo Eyen \nGuerrero Anaisabela"
}

function setup() {
  createCanvas(640, 480)
    SongInicio.setVolume(0.2);
  SongColegio.setVolume(0.2);
  SongEstruendo.setVolume(0.9);
  SongInstrumental.setVolume(0.1);
}


function draw() {
  background(255)
    if (pantactual < ima.length) {
    image(ima[pantactual], 0, 0, width, height);
    dibujaBotonesPrincipales()
      dibujaBotonesDecision()
      cuadroConTextos()
  }
}

function dibujaBotonesPrincipales () {
  if (pantactual===0 || pantactual===1 ||pantactual===2||pantactual===4||pantactual===5||pantactual===6||pantactual===8||pantactual===9||pantactual===10||pantactual===11 ) {
    noStroke()
      fill(235, 30, 170)
      rect (520, 420, 100, 40);
  }

  textSize(20)
    fill(250, 246, 246)

    if (pantactual===0) {
    text("iniciar", 535, 445)
  } else if (pantactual===11) {
    text("Reiniciar", 535, 445)
  } else if (pantactual===1 ||pantactual===2||pantactual===4||pantactual===5||pantactual===6||pantactual===8||pantactual===9||pantactual===10) {
    text("Siguiente", 535, 445)
  }
}

function dibujaBotonesDecision () {
  if (pantactual===3||pantactual===7 ) {
    noStroke()
      fill(235, 30, 170)
      rect (80, 220, 200, 40);
    rect (360, 220, 200, 40);
  }
  textSize(15)
    fill(250, 246, 246)

    if (pantactual===3) {
    text("Quedarse\ny cuidar a los demás", 90, 235)
      text("Ir a investigar", 400, 245)
  } else if (pantactual === 7) {
    text("Rechazarlo y seguir\nintentando sola", 90, 235)
      text("Aceptar la ayuda de\nShaoran", 400, 235)
  }
}

function cuadroConTextos () {
  noStroke()
    fill(235, 30, 170)

    if (pantactual===0) {
    text ("Haz click en la pantalla para activar el sonido", 20, 460)
      rect(20, 340, 600, 60)
      textSize(20)
      fill(250, 246, 246)
      text(textos[pantactual], width/8, 380)
  } else if (pantactual===11) {
    rect (180, 300, 280, 100)
      fill(250, 246, 246)
      textSize(25)
      text(textos[pantactual], width/3, 325)
  } else if (pantactual >=1 && pantactual <=10) {
    rect(20, 20, 600, 60)
      fill(250, 246, 246)
      text(textos[pantactual], 40,40)
  }

}


function mousePressed() {

  if ((pantactual===0 || pantactual===1 ||pantactual===2||pantactual===5||pantactual===6||pantactual===9||pantactual===10) && sobreboton (520, 420, 100, 40)) {
    pantactual++;
  } else if ((pantactual===11) && sobreboton (520, 420, 100, 40)) {
    pantactual = 0;
  }


  if ((pantactual === 3 || pantactual=== 7) && sobreboton(80, 220, 200, 40)) {
    pantactual++;
  } else if ((pantactual === 3)  && sobreboton(360, 220, 200, 40)) {
    pantactual=5;
  } else if ((pantactual===7) && sobreboton(360, 220, 200, 40)) {
    pantactual=9;
  }


  if ((pantactual===4||pantactual===8) && sobreboton(520, 420, 100, 40)) {
    pantactual=11;
  }

  if (pantactual===0 ) {
    SongInicio.play();
    SongColegio.stop();
    SongEstruendo.stop();
    SongInstrumental.stop()
  } else if (pantactual===1) {
    SongInstrumental.play()
      SongColegio.play();
    SongInicio.stop();
    SongEstruendo.stop();
  } else if (pantactual===2) {
    SongEstruendo.play();
    SongColegio.stop();
    SongInicio.stop();
  }
}

function sobreboton(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
