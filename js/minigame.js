function reward() {
  alert("Du bekommst eine Belohnung");
}

function blink_blue() {
  $(".blink").css("background-color", "blue");
}
function blink_red() {
  $(".blink").css("background-color", "red");
}

$(document).ready(function () {
  for (let i = 0; i < 40; i++) {
    //Timer without function
    setInterval(changeColor(i), 3000);
  }
});

function changeColor(i) {
  if (i % 2 == 0) blink_blue();
  else blink_red();
}

function generateRandom(max) {
  let x = Math.floor(Math.random() * max);
  return x;
}

$(document).ready(function () {
  switch (generateRandom(3)) {
    case 0:
      switch (generateRandom(4)) {
        case 0:
          $(".server-reihe1>.server1").css("background-image", "#");
          break;
        case 1:
          $(".server-reihe1>.server2").css("background-image", "#");
          break;
        case 2:
          $(".server-reihe1>.server3").css("background-image", "#");
          break;
        case 3:
          $(".server-reihe1>.server4").css("background-image", "#");
          break;
        default:
          break;
      }
     break;
    case 1:
      switch (generateRandom(4)) {
        case 0:
          $(".server-reihe2>.server1").css("background-image", "#");
          break;
        case 1:
          $(".server-reihe2>.server2").css("background-image", "#");
          break;
        case 2:
          $(".server-reihe2>.server3").css("background-image", "#");
          break;
        case 3:
          $(".server-reihe2>.server4").css("background-image", "#");
          break;
        default:
          break;
      }
     break;
    case 2:
      switch (generateRandom(4)) {
        case 0:
          $(".server-reihe3>.server1").css("background-image", "#");
          break;
        case 1:
          $(".server-reihe3>.server2").css("background-image", "#");
          break;
        case 2:
          $(".server-reihe3>.server3").css("background-image", "#");
          break;
        case 3:
          $(".server-reihe3>.server4").css("background-image", "#");
          break;
        default:
          break;
      }
     break;
    default:
      break;
      
  }

});

$(document).ready(function () {
  //Generiere Server Reihen und Spalten
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 4; j++) {
      $("#server > .server-reihe" + i + " >.server" + j + "").on("click", (e) => {});
    }}
});
