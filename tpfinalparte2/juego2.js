/*class Juego {
  constructor() {
    this.sakura = new Sakura();
    this.enemigo || [];
    this.enemigo = new Enemigo();
    this.estrellas = [];
    this.caidaBuena = 0;
    this.caidaMala = 0;
    this.estrellasAtrapadas = 0;
    this.vidas = 3;
    this.velocidad = 5; 
    this.intervaloBuenos = 1500; 
    this.intervaloMalos = 2000; 
  }

  ejecutar() {
     image(fondo, 0, 0, width, height);
    if (this.estrellasAtrapadas >= 10 || this.vidas <= 0) {
      estado = "resultado";
      tiempo = millis();
    } else {
      this.sakura.mostrar();
      this.sakura.mover();

      for (let estrella of estrellas) {
        this.estrellas.mostrar();
        this.estrellas.mover();
      }
  
      for (let enemigo of enemigos) {
        this.enemigos.mostrar();
        this.enemigos.mover();
      }

      //estrellas
      if (millis() - caidaBuena > intervaloBuenos) {
        this.estrellas.push(new ObjetoBueno());
        this.caidaBuena = millis();
      }

      //enemigoscrear
      if (millis() - caidaMala > intervaloMalos) {
        this.enemigo.push(new Enemigo());
        this.caidaMala = millis();
      }
    }

    // manejar estrellas
    for (let i = estrellas.length - 1; i >= 0; i--) {
      estrellas[i].mostrar();
      estrellas[i].mover();
      if (estrellas[i].colision(this.sakura)) {
        this.estrellasAtrapadas++;
        this.estrellas.splice(i, 1);
        this.velocidad += 0.5;
      } else if (estrellas[i].fueraPantalla()) {
        this.vidas--;
        this.estrellas.splice(i, 1);
      }
    }

    // Manejar enemigos
    for (let i = enemigos.length - 1; i >= 0; i--) {
      enemigos[i].mostrar();
      enemigos[i].mover();
      if (enemigos[i].colision(this.sakura)) {
        this.vidas--;
        this.sakura.recibirGolpe();
        this.enemigos.splice(i, 1);
      } else if (enemigos[i].fueraPantalla()) {
        this.enemigos.splice(i, 1);
      }
    }

  }
}*/
class Juego {
  constructor(pantallas) {
    this.sakura = new Sakura();
    this.enemigos = [];
    this.estrellas = [];
    this.caidaBuena = 0;
    this.caidaMala = 0;
    this.estrellasAtrapadas = 0;
    this.vidas = 3;
    this.velocidad = 5; 
    this.intervaloBuenos = 1500; 
    this.intervaloMalos = 2000; 
    this.pantallas = pantallas;  // ✅ Se guarda la referencia de Pantallas
  }

  ejecutar() {
    image(fondo, 0, 0, width, height);

    // ✅ Verifica si el jugador ha ganado o perdido y cambia de pantalla
    if (this.estrellasAtrapadas >= 10) {
      this.pantallas.cambiarEstado("ganaste");  // ✅ Cambia a la pantalla de ganar
      return;
    } else if (this.vidas <= 0) {
      this.pantallas.cambiarEstado("perdiste");  // ✅ Cambia a la pantalla de perder
      return;
    }

    // ✅ Ejecutar el juego si está en estado "jugando"
    this.sakura.mostrar();
    this.sakura.mover();

    for (let estrella of this.estrellas) {
      estrella.mostrar();
      estrella.mover();
    }

    for (let enemigo of this.enemigos) {
      enemigo.mostrar();
      enemigo.mover();
    }

    if (millis() - this.caidaBuena > this.intervaloBuenos) {
      this.estrellas.push(new ObjetoBueno());
      this.caidaBuena = millis();
    }

    if (millis() - this.caidaMala > this.intervaloMalos) {
      this.enemigos.push(new Enemigo());
      this.caidaMala = millis();
    }
  }
}
