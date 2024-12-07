class Juego {
  ejecutar() {

    if (estrellasAtrapadas >= 10) {
      estado = "resultado";
      tiempo = millis();
    } else if (vidas <= 0) {
      estado = "resultado";
      tiempo = millis();
    } else {
      sakura.mostrar();
      sakura.mover();

      if (millis() - caidaBuena > intervaloBuenos) {
        estrellas.push(new ObjetoBueno());
        caidaBuena = millis();
      }

      if (millis() - caidaMala > intervaloMalos) {
        enemigos.push(new Enemigo());
        caidaMala = millis();
      }

      for (let i = estrellas.length - 1; i >= 0; i--) {
        estrellas[i].mostrar();
        estrellas[i].mover();
        if (estrellas[i].colision(sakura)) {
          estrellasAtrapadas++;
          estrellas.splice(i, 1);
          velocidad += 0.5;
        } else if (estrellas[i].fueraPantalla()) {
          vidas--;
          estrellas.splice(i, 1);
        }
      }

      for (let i = enemigos.length - 1; i >= 0; i--) {
        enemigos[i].mostrar();
        enemigos[i].mover();
        if (enemigos[i].colision(sakura)) {
          vidas--;
          sakura.recibirGolpe();
          enemigos.splice(i, 1);
        } else if (enemigos[i].fueraPantalla()) {
          enemigos.splice(i, 1);
        }
      }
    }
  }
}
