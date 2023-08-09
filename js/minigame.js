
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
    let x = Math.floor((Math.random() * max) + 1);
    return x;
}

$(document).ready(function () {
  let zufall;
  zufall = generateRandom(3);
  if (zufall == 1) {
    console.log("zufall==1");
    zufall = generateRandom(5);
    if (zufall == 0) {
        
    }
    if (zufall == 1) {

    }
    if (zufall == 2) {

    }
    if (zufall == 3) {

    }
  }
});
