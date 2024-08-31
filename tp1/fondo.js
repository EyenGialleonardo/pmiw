function fondo( cant3,  tam, estadocambio) {
  let fondodibujado=false;
  push();
  cant3=15;
  for (let i =0; i<cant3; i++) {
    tam=map(i, 0, cant3-1, width/2, 20);

    if (estadocambio) {

      if (i%2==0) {
        fill(0, 185, 255);
      } else {
        fill(255, 0, 183);
      }
    } else {
      if (i%2==0) {
        fill(0);
      } else {
        fill(255);
      }
    }

    rectMode(CENTER);
    rect(600, height/2, tam, tam);
    fondodibujado=true;
  }

  pop();
  return fondodibujado;
}
