function mostrarPantallaResultado() {
  if (vidas > 0) {
     textFont(miFuente);
         image(pantallaGanaste, 0, 0, 640, 480);
    textSize(140);
    fill(0, 255, 0);
    textAlign(CENTER);
    text("¡GANASTE!", width / 2, height / 2);
  } else {
     textFont(miFuente);
    image(pantallaPerdiste, 0, 0, 640, 480);
    textSize(140);
    fill(247,5,9);
    textAlign(CENTER);
    text("PERDISTE", width / 2, height / 2);
  }

  if (millis() - tiempo > 3000) {
    estado = "creditos";

  }
}
