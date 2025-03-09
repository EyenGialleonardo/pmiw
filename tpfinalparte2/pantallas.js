/*class Pantallas {
 constructor() {
    this.estadoActual = "inicio"; // Estado inicial
  }*/class Pantallas {
  constructor(juego) {
    if (!juego) {
      console.error("Error: No se pasó un objeto Juego a Pantallas.");
    }
    this.juego = juego; // Guardamos la referencia al objeto Juego
    this.estadoActual = "inicio";
  }

  cambiarEstado(nuevoEstado) {
    this.estadoActual = nuevoEstado;
  }

  dibujar() {
    switch (this.estadoActual) {
      case "inicio":
        this.dibujarInicio();
        break;
      case "jugando":
        this.dibujarJuego();
        break;
      case "resultado":
        this.dibujarResultado();
        break;
      case "creditos":
        this.dibujarCreditos();
        break;
    }
  }

  dibujarInicio() {
    image(pantallaInicio, 0, 0, 640, 480);
    textFont(miFuente);
    textSize(100);
    fill(255, 211, 240);
    textAlign(CENTER);
    text("SakuraStar", width / 2, height / 2 - 50);

    fill(255, 167, 225);
    noStroke();
    rect(width / 2 - 75, height / 2, 150, 50);
    textSize(35);
    fill(255);
    text("Iniciar", width / 2, height / 2 + 35);
  }

  dibujarJuego() {
    if (this.juego) {
      this.juego.ejecutar(); // Ejecuta el juego
    }
  }

  dibujarResultado() {
    if (this.juego.vidas > 0) {
      image(pantallaGanaste, 0, 0, 640, 480);
      textSize(140);
      fill(0, 255, 0);
      textAlign(CENTER);
      text("¡GANASTE!", width / 2, height / 2);
    } else {
      image(pantallaPerdiste, 0, 0, 640, 480);
      textSize(140);
      fill(247, 5, 9);
      textAlign(CENTER);
      text("PERDISTE", width / 2, height / 2);
    }

    if (millis() - tiempo > 3000) {
      this.cambiarEstado("creditos");
    }
  }

  dibujarCreditos() {
    image(creditos, 0, 0, 640, 480);
    textFont(miFuente);
    textSize(18);
    fill(255);
    textAlign(CENTER);
    text("¡GRACIAS POR JUGAR!\nCreado por\nIsabela Guerrero y Eyen Gialleonardo", width / 2, 260);

    fill(255, 147, 205);
    noStroke();
    rect(width / 2 - 75, height / 2 + 80, 150, 50);
    textSize(25);
    fill(255);
    text("Reiniciar", width / 2, height / 2 + 115);
  }

  manejarClick() {
    if (this.estadoActual === "inicio") {
      if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 && mouseY < height / 2 + 50) {
        this.cambiarEstado("jugando");
        reiniciarObjetos();
        song.jump(0);
      }
    } else if (this.estadoActual === "creditos") {
      if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 + 80 && mouseY < height / 2 + 130) {
        this.cambiarEstado("inicio");
      }
    }
  }
}

// Agregar evento de clic
function mousePressed() {
  pantallas.manejarClick();
}
