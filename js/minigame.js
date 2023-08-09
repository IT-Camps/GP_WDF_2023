function reward() {
  alert("Du bekommst eine Belohnung");
}

function blinkeZufällig() {
  let wartezeit = Math.floor(Math.random() * 10);
  setTimeout(wartezeit);
}

function blink() {
  setInterval(function () {
    element.innerHTML += "Hello";
  }, 1000);
}

$(document).ready(function () {
  $(".blink").click(function () {
    $(".blink").blink();
    alert("blinkt");
  });
});
