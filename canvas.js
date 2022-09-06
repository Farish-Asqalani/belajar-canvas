// tangkap canvas menggunakan id dan masukkan ke variable
let c = document.getElementById("canvas");
// context
let isi = c.getContext("2d");
// untuk value x, y object lingkaran
let y = 40;
let x = 170;

// untuk value x, y object kotak
// let y = 40;
// let x = 120;
// let sepeda;

function karakter() {
  isi.drawImage(x, y, "foto.png", 10, 120, "image");

  // object lingkaran
  // isi.beginPath();
  // // isi.fillStyle = "red";
  // isi.arc(y, x, "foto.png", 20, 0, 2 * "image");
  // // isi.fill();
  // isi.closePath();
  // window.addEventListener("keyup", ChangeDirection);
  // window.addEventListener("down", ChangeDirection);
  // object kotak
  //   isi.beginPath();
  //   isi.fillStyle = "blue";
  //   isi.fillRect(y, x, 50, 50);
  //   isi.fill();
  //   isi.closePath();
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

function ChangeDirection(e) {
  if (e.code == "ArrowUp" && y != 1) {
    x = 0;
    y = -1;
  } else if (e.code == "ArrowDown" && y != -1) {
    x = 0;
    y = 1;
  } else if (e.code == "ArrowLeft" && x != 1) {
    x = -1;
    y = 0;
  } else if (e.code == "ArrowRight" && x != -1) {
    x = 1;
    y = 0;
  }
}
// function updateGameArea() {
//   myGameArea.clear();
//   myGamePiece.speedX = 0;
//   myGamePiece.speedY = 0;
//   if (myGameArea.keys && myGameArea.keys[37]) {
//     myGamePiece.speedX = -1;
//   }
//   if (myGameArea.keys && myGameArea.keys[39]) {
//     myGamePiece.speedX = 1;
//   }
//   if (myGameArea.keys && myGameArea.keys[38]) {
//     myGamePiece.speedY = -1;
//   }
//   if (myGameArea.keys && myGameArea.keys[40]) {
//     myGamePiece.speedY = 1;
//   }
//   myGamePiece.newPos();
//   myGamePiece.update();
// }
