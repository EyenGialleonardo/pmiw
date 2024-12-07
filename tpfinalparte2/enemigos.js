class Enemigo {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.tamano = 30;
  }

  mostrar() {
    fill(255, 0, 0);
    image(enemigo,this.x, this.y, 30,30);
  }

  mover() {
    this.y += velocidad;
  }

  colision(sakura) {
    return (
      this.y + this.tamano / 2 > sakura.y &&
      this.y - this.tamano / 2 < sakura.y + sakura.alto &&
      this.x > sakura.x &&
      this.x < sakura.x + sakura.ancho
    );
  }

  fueraPantalla() {
    return this.y > height;
  }
}
