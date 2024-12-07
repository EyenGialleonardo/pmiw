class Sakura {
  constructor() {
    this.ancho = 100;
    this.alto = 80;
    this.x = 250;
    this.y = 400;
    this.velocidad = 8;
    this.imagenActual = imgIzquierda;
    this.recibiendoGolpe = false;
    this.tiempoGolpe = 0;
  }

  mostrar() {
    if (this.recibiendoGolpe) {
      this.imagenActual = imgGolpe;
      if (millis() - this.tiempoGolpe > 500) {
        this.recibiendoGolpe = false;
        this.imagenActual = imgIzquierda;
      }
    } else if (keyIsDown(LEFT_ARROW)) {
      this.imagenActual = imgIzquierda;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.imagenActual = imgDerecha;
    }

    image(this.imagenActual, this.x, this.y, this.ancho, this.alto);
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad;
    }
    this.x = constrain(this.x, 0, width - this.ancho);
  }

  recibirGolpe() {
    this.recibiendoGolpe = true;
    this.tiempoGolpe = millis();
  }
}
