let c = document.getElementById("canvas");
let isi = c.getContext("2d");
let y = 40;
let x = 170;

function karakter() {
  make_base();

  function make_base() {
    foto_image = new Image();
    foto_image.src = "foto.png";
    foto_image.onload = function () {
      isi.drawImage(foto_image, y, x);
    };
  }
}

function mulai() {
  return karakter();
}

function naik() {
  x -= 20;
  clear();
  return karakter();
}

function turun() {
  x += 20;
  clear();
  return karakter();
}
function kanan() {
  y += 20;
  clear();
  return karakter();
}
function kiri() {
  y -= 20;
  clear();
  return karakter();
}

function clear() {
  isi.clearRect(0, 0, 400, 200);
}
