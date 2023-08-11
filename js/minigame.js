$(document).ready(function () {
  //const meinScore = document.getElementById("score");
  const meinDiv = document.getElementById("timer");
  var score = 0;
  var timeleft = 15;
  let server1 = true;
  let server2 = true;
  let server3 = true;
  let server4 = true;
  let server5 = true;
  let server6 = true;
  let server7 = true;
  let server8 = true;
  let server9 = true;
  let server10 = true;
  let server11 = true;
  let server12 = true;
  function Spielgewinnen() {
    console.log(server1);
    if (
      server1 == true &&
      server2 == true &&
      server3 == true &&
      server4 == true &&
      server5 == true &&
      server6 == true &&
      server7 == true &&
      server8 == true &&
      server9 == true &&
      server10 == true &&
      server11 == true &&
      server12 == true &&
      timeleft < 2
    ) {
      // HIER Programm Code wie es weiter gehen soll , wenn das Spiel gemeistert worden ist
      window.location.replace("../index.html");
    }
  }

  meinDiv.innerHTML = `<p> Zeit:${timeleft}</p>`;
  //meinScore.innerHTML = `<p>Score:${score}</p>`;
  if (
    $("#button").on("click", (e) => {
      if (timeleft >= 15 || timeleft <= 1) {
        alleServerNeu();
        timeleft = 15;
        var downloadTimer = setInterval(function () {
          timeleft = timeleft - 1;
          if (timeleft <= 0) {
            clearInterval(downloadTimer);
          }
          meinDiv.innerHTML = `<p>Zeit:${timeleft}</p>`;
          serverRandomZerstören();
        }, 1000);
      }
    })
  );

  //Generiere Server Reihen und Spalten
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 4; j++) {
      $("#server > .server-reihe" + i + " >.server" + j + "").on(
        "click",
        (e) => {
          let zahl = 1;
          if (zahl == 2) {
            $("#server" + j + "").css(
              "background-image",
              "url(../img/spielFeld/SSF.png)"
            );
            zahl--;
            console.log(zahl + "von zahl2");
          }
          if (zahl == 1) {
            $("#server" + j).css(
              "background-image",
              "url(../img/spielFeld/SSF.png)"
            );
            zahl++;
            console.log(zahl + "von zahl1");
          }
        }
      );
    }
  }
  $("#server1").click(function () {
    if (timeleft != 0) {
      console.log(server1);
      if (server1) {
        console.log("server 1 wurde angeklickt");
        $("#server1").css("background-image", "url(../img/spielFeld/SSF.png)");
        console.log("Bild richtig" + server1);
        server1 = true;
        Spielgewinnen();
      }
    }
  });
  $("#server2").click(function () {
    if (timeleft != 0) {
      if (server2) {
        $("#server2").css("background-image", "url(../img/spielFeld/SSF.png)");
        server2 = true;
        Spielgewinnen();
      }
    }
  });
  $("#server3").click(function () {
    if (timeleft != 0) {
      if (server3) {
        $("#server3").css("background-image", "url(../img/spielFeld/SSF.png)");
        server3 = true;
        Spielgewinnen();
      }
    }
  });
  $("#server4").click(function () {
    if (timeleft != 0) {
      if (server4) {
        $("#server4").css("background-image", "url(../img/spielFeld/SSF.png)");
        server4 = true;
        Spielgewinnen();
      }
    }
  });
  $("#server5").click(function () {
    if (timeleft != 0) {
      if (server5) {
        $("#server5").css("background-image", "url(../img/spielFeld/SSF.png)");
        server5 = true;
        Spielgewinnen();
      }
    }
  });
  $("#server6").click(function () {
    if (timeleft != 0) {
      if (server6) {
        $("#server6").css("background-image", "url(../img/spielFeld/SSF.png)");
        server6 = true;
        Spielgewinnen();
      }
    }
  });
  $("#server7").click(function () {
    if (timeleft != 0) {
      if (server7) {
        $("#server7").css("background-image", "url(../img/spielFeld/SSF.png)");
        server7 = true;
        Spielgewinnen();
      }
    }
  });
  $("#server8").click(function () {
    if (timeleft != 0) {
      if (server8) {
        $("#server8").css("background-image", "url(../img/spielFeld/SSF.png)");
        server8 = true;
        Spielgewinnen();
      }
    }
  });
  $("#server9").click(function () {
    if (timeleft != 0) {
      if (server9) {
        $("#server9").css("background-image", "url(../img/spielFeld/SSF.png)");
        server9 = true;
        Spielgewinnen();
      }
    }
  });
  $("#server10").click(function () {
    if (timeleft != 0) {
      if (server10) {
        $("#server10").css("background-image", "url(../img/spielFeld/SSF.png)");
        server10 = true;
        Spielgewinnen();
      }
    }
  });
  $("#server11").click(function () {
    if (timeleft != 0) {
      if (server11) {
        $("#server11").css("background-image", "url(../img/spielFeld/SSF.png)");
        server11 = true;
        Spielgewinnen();
      }
    }
  });
  $("#server12").click(function () {
    if (timeleft != 0) {
      if (server12) {
        $("#server12").css("background-image", "url(../img/spielFeld/SSF.png)");
        server12 = true;
        Spielgewinnen();
      }
    }
  });
});

function reward() {
  alert("Du bekommst eine Belohnung");
}

function blink_blue() {
  $(".blink").css("background-color", "blue");
}
function blink_red() {
  $(".blink").css("background-color", "red");
}

function changeColor(i) {
  if (i % 2 == 0) blink_blue();
  else blink_red();
}

function generateRandom(max) {
  let x = Math.floor(Math.random() * max);
  return x;
}

function serverRandomZerstören() {
  switch (generateRandom(3)) {
    case 0:
      switch (generateRandom(4)) {
        case 0:
          $(".server-reihe1>#server1").css(
            "background-image",
            "url(../img/spielFeld/SRF.png)"
          );
          console.log("Server1 auf false versuc");
          server1 = false;
          console.log("Server1 auf false?" + server1);
          break;
        case 1:
          $(".server-reihe1>#server2").css(
            "background-image",
            "url(../img/spielFeld/SRF.png)"
          );
          server2 = false;
          break;
        case 2:
          $(".server-reihe1>#server3").css(
            "background-image",
            "url(../img/spielFeld/SRF.png)"
          );
          server3 = false;
          break;
        case 3:
          $(".server-reihe1>#server4").css(
            "background-image",
            "url(../img/spielFeld/SRF.png)"
          );
          server4 = false;
          break;
        default:
          break;
      }
      break;
    case 1:
      switch (generateRandom(4)) {
        case 0:
          $(".server-reihe2>#server5").css(
            "background-image",
            "url(../img/spielFeld/SRF.png)"
          );
          server5 = false;
          break;
        case 1:
          $(".server-reihe2>#server6").css(
            "background-image",
            "url(../img/spielFeld/SRF.png)"
          );
          server6 = false;
          break;
        case 2:
          $(".server-reihe2>#server7").css(
            "background-image",
            "url(../img/spielFeld/SRF.png)"
          );
          server7 = false;
          break;
        case 3:
          $(".server-reihe2>#server8").css(
            "background-image",
            "url(../img/spielFeld/SRF.png)"
          );
          server8 = false;
          break;
        default:
          break;
      }
      break;
    case 2:
      switch (generateRandom(4)) {
        case 0:
          $(".server-reihe3>#server9").css(
            "background-image",
            "url(../img/spielFeld/SRF.png)"
          );
          server9 = false;
          break;
        case 1:
          $(".server-reihe3>#server10").css(
            "background-image",
            "url(../img/spielFeld/SRF.png)"
          );
          server10 = false;
          break;
        case 2:
          $(".server-reihe3>#server11").css(
            "background-image",
            "url(../img/spielFeld/SRF.png)"
          );
          server11 = false;
          break;
        case 3:
          $(".server-reihe3>#server12").css(
            "background-image",
            "url(../img/spielFeld/SRF.png)"
          );
          server12 = false;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
}

function alleServerNeu() {
  for (let i = 1; i <= 12; i++) {
    $("#server" + i + "").css(
      "background-image",
      "url(../img/spielFeld/SSF.png)"
    );
  }
}
