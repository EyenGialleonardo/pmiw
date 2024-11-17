function mousePressed() {
  if (estado === "inicio") {
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 && mouseY < height / 2 + 50) {
      estado = "jugando";
      reiniciarObjetos();
    }
  } else if (estado === "creditos") {
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 + 80 && mouseY < height / 2 + 130) {
      estado = "inicio";
        song.jump(0);

    }
  }
}
