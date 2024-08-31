function lineas( px,  py) {

  push();
  noStroke();
  for (let i =0; i< cant; i++) {
    for (let j =0; j< cant2; j++) {
     
      px=400+i*tam;
      py=80;
      if (i%2==0) {
        fill(0);
      } else {
        fill(255);
      }
      rect( px, 160, 400, 80);

      if (j%2==0) {

        fill(0);
        rect(560, j*tamh+1, py, 400/cant2);
      } else {
        fill(255);
        rect(560, j*tamh, py, 400/cant2);
      }
    }
  }

  if (keyIsPressed) {
    if ( keyIsPressed) {
      if ( keyCode==UP_ARROW) {

        //  translate(600,400);
        //   rotate(radians(frameCount));


        for (let i =0; i< cant; i++) {
          for (let j =0; j< cant2; j++) {

            if (i%2==0) {
              fill(0);
            } else {
              fill(254, 0, 255);
            }
            rect( px, mouseY, 400, 80);

            if (j%2==0) {

              fill(0);
              rect(mouseX, j*tamh+1, py, 400/cant2);
            } else {
              fill(254, 0, 255);
              rect(mouseX, j*tamh, py, 400/cant2);
            }
          }
        }
      }
    }
  }


  pop();
}
