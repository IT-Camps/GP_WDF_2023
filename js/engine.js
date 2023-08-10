let spielfeld = [];
let blocks;
const BREITE = 20;
const HOEHE = 15;

let player = {
    positionX: 0,
    PositionY: 0,
    isMovingUp: false,
    isMovingDown: false,
    isMovingLeft: false,
    isMovingRight: false
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

    ladeBlocksInArray('serverraum');
    zeigeSpielfeld();
}


$(document).ready(function() {
    starteEngine();
    console.log(spielfeld);
    setStartingPosition();
    setInterval(movePlayer, 10);
});

function movePlayer() {
    if (player.isMovingUp) setPosition(player.x, player.y - 2);
    if (player.isMovingDown) setPosition(player.x, player.y + 2);
    if (player.isMovingLeft) setPosition(player.x - 2, player.y);
    if (player.isMovingRight) setPosition(player.x + 2, player.y);
}

function setStartingPosition() {
    setPosition(0, 0);
}

function setPosition(x, y) {
    player.x = x;
    player.y = y;
    $("#spielfigur").css("top", y).css("left", x);
}

$(document).on("keydown", (e) => {
    if (!e.repeat) {
        switch (e.code) {
            case "KeyW":
                console.log(spielfeld[player.positionX][player.positionY - 1]);
                if (){
                    player.isMovingUp = true;
                    break;
                } else{
                    console.log("Kolision oben")
                    break;
                }
                
            case "KeyS":
                if (!spielfeld[player.positionX][player.positionY + 1].solid){
                    player.isMovingDown = true;
                    break;
                } else{
                    console.log("Kolision unten")
                    break;
                }
            case "KeyA":
                if (spielfeld[PositionX - 1][PositionY].solid === false){
                    player.isMovingLeft = true;
                    break;
                } else{
                    console.log("Kolision links")
                    break;
                }
            case "KeyD":
                if (spielfeld[PositionX + 1][PositionY].solid === false){
                    player.isMovingRight = true;
                    break;
                } else{
                    console.log("Kolision rechts")
                    break;
                }
        }
    }
    console.log(e.code)

});

$(document).on("keyup", (e) => {
    switch (e.code) {
        case "KeyW":
            player.isMovingUp = false;
            break;
        case "KeyS":
            player.isMovingDown = false;
            break;
        case "KeyA":
            player.isMovingLeft = false;
            break;
        case "KeyD":
            player.isMovingRight = false;
            break;
    }
});



//to do Maksim:
//  if abfrage ob solid
//  bewegung anpassen das man sich im array bewegt
//  
//
//
//
//
//