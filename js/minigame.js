function reward() {
  alert("Du bekommst eine Belohnung");
}

function blinkeZufällig() {
  let wartezeit = Math.floor(Math.random() * 10);
  setTimeout(wartezeit);
}

function blink() {
  $(".blink").addClass("blink2");
  setTimeout(function () {
    $(".blink").removeClass("blink2");
  }, 2000);
}

$(document).ready(function () {
  console.log("geladen");
  $(".blink").click(function () {
    console.log("wurde angeklickt");
    $(".blink").css("background-color", "red");
    alert("blinkt");
  });
});
