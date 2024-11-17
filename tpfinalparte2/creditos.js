function mostrarCreditos() {

  image(creditos,0,0,640,480);
   textFont(miFuente);
  textSize(18);
  fill(255);
  textAlign(CENTER);
  text("¡GRACIAS POR JUGAR!\nCreado por\nIsabella Guerrero  y  Eyen Gialleonardo ", width / 2, 260);

  fill(255, 147, 205);
   noStroke();
  rect(width / 2 - 75, height / 2 + 80, 150, 50);
  textSize(25);
  fill(255);
  text("Reiniciar", width / 2, height / 2 + 115);
}
