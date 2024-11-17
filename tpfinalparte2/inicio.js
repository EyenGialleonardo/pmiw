function mostrarInicio() {
  image(pantallaInicio, 0, 0, 640, 480);
   textFont(miFuente);
  textSize(100);
  fill(255,211,240);
  textAlign(CENTER);
  text("SakuraStar", width / 2, height / 2 - 50);
 
  fill(255, 167, 225);
  noStroke();
  rect(width / 2 - 75, height / 2, 150, 50);
  textSize(35);
  fill(255);
  text("Iniciar", width / 2, height / 2 + 35);
}
