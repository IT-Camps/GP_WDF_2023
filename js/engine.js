let spielfeld = [];
let blocks;
let current_level = "serverraum";
const BREITE = 20;
const HOEHE = 15;


let player = {
    positionX: 0,
    positionY: 0,
    top: 0,
    left: 0,
    speed: 150
};

function ladeBlocksInArray(levelName) {
    const level = LEVEL.find(l => l.name == levelName);
    for (let x = 0; x < HOEHE; x++) {
        spielfeld[x]= [];
        for (let y = 0; y < BREITE; y++) {
            spielfeld[x][y] = level.data.find(block => block.x == x && block.y == y) || {x: x, y: y, material: 'floor', solid: false, interactive: false};
        }
    }
    console.log(spielfeld)
}


function zeigeSpielfeld() {
	for(let x = 0; x < HOEHE; x++) {
		for(let y = 0; y < BREITE; y++) {
			$('#spielfeld').append('<div class="' + spielfeld[x][y].material +  '" id="' + x + '/' + y + '"></div>');
		}
}}

function starteEngine() {
    let level = LEVEL.map(l => l.name).join(', ');
    console.log("Starte engine...");
    console.log(`Geladene level: `+level);

    ladeBlocksInArray(current_level);
    zeigeSpielfeld();
}


$(document).ready(function() {
    starteEngine();
    console.log(spielfeld);
    setStartingPosition();
});

function movePlayer() {
    if (player.isMovingUp) setPosition(player.left, player.top - 50);
    if (player.isMovingDown) setPosition(player.left, player.top + 50);
    if (player.isMovingLeft) setPosition(player.left - 50, player.top);
    if (player.isMovingRight) setPosition(player.left + 50, player.top);
}

function setStartingPosition() {
    setPosition(0, 0);
}

function setPosition(top, left) {
    $("#spielfigur").css("top", top).css("left", left);
}

$(document).on("keydown", (e) => {
    if (!e.repeat) {
        switch (e.code) {
            case "KeyW":
                if (!askSolid(player.positionX, player.positionY - 1) && (player.top - 50 >= 0)){
                    player.positionY -= 1;
                    player.top = player.top - 50;
                    setPosition(player.top, player.left)
                    break;
                } else{
                    console.log("Kolision oben")
                    break;
                }
                
            case "KeyS":
                if (!askSolid(player.positionX, player.positionY + 1) && (player.top + 50 < 750)){
                    player.positionY += 1;
                    player.top = player.top + 50;
                    setPosition(player.top, player.left)
                    break;
                } else{
                    console.log("Kolision unten")
                    break;
                }
            case "KeyA":
                if (!askSolid(player.positionX - 1, player.positionY) && (player.left - 50 >= 0)){
                    player.positionX -= 1;
                    player.left = player.left - 50;
                    setPosition(player.top, player.left)
                    break;
                } else{
                    console.log("Kolision links")
                    break;
                }
            case "KeyD":
                if ((!askSolid(player.positionX + 1, player.positionY) && (player.left + 50 < 1000))){
                    player.positionX += 1;
                    player.left = player.left + 50;
                    setPosition(player.top, player.left)
                    break;
                } else{
                    console.log("Kolision rechts")
                    break;
                }
        }
    }
    console.log(e.code)

});


function askSolid(x, y){
    let leveldaten = LEVEL.find(einzel => einzel.name == current_level);
    console.log("Leveldaten unter mir")
    console.log(leveldaten);
    console.log("x unter mir")
    console.log(x);
    console.log("y unter mir")
    console.log(y);
    let block = leveldaten.data.find(block => block.x == y && block.y == x);
    console.log(block);
    if (block){
        return true
    } else {
        return false 
    }
}