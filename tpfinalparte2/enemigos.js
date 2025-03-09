class Enemigo {
  constructor(x, y, tamano = 30, velocidad = 3) {
    this.x = x || random(width);  
    this.y = y || 0; 
    this.tamano = tamano;  
    this.velocidad = velocidad;  
   
  }

  mostrar() {
    fill(255, 0, 0);
    image(enemigo, this.x, this.y, this.tamano, this.tamano);  
  }

  mover() {
    this.y += this.velocidad;  
    if (this.x + this.tamano > width) {
      this.x = width - this.tamano; 
  }
}

  colision (sakura) {
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
