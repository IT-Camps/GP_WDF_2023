let spielfeld = [];
let blocks;
let current_level = "foyer";
const BREITE = 20;
const HOEHE = 15;


let player = {
    positionX: 0,
    positionY: 0,
    isMovingUp: false,
    isMovingDown: false,
    isMovingLeft: false,
    isMovingRight: false,
};

function ladeBlocksInArray() {
    const level = LEVEL.find(l => l.name == current_level);
    switch (current_level) {
        case "foyer":
            floor = 'FBKP';
            break;
        case "serverraum":
            floor = 'SRB';
            break;
        case "kaffeeecke":
            floor = 'Holzboden';
            break;
        case "office":
            floor = 'fu';
            console.log($("#spielfeld"));
            $("#spielfeld").css("background-image", "url('img/hintergrund/mathis spiel.png')");
            //CSS FÜR eigenes büro setzen
            break;
        case "ceo":
            floor = 'fu';
            console.log($("#spielfeld"));
            $("#spielfeld").css("background-image", "url('img/hintergrund/endbildschir_bearbeitet_final.png')");
            //CSS FÜR ENDBILDSCHIRM setzen
            break;
        default:
            break;
    }
    
    for (let x = 0; x < BREITE; x++) {
        spielfeld[x] = [];
        for (let y = 0; y < HOEHE; y++) {
            spielfeld[x][y] = level.data.find(block => block.x == x && block.y == y) || { x: x, y: y, material: floor, solid: false, interactive: false };
        }
    }
}

function zeigeSpielfeld() {
    for (let y = 0; y < HOEHE; y++) {
        for (let x = 0; x < BREITE; x++) {
            $("#spielfeld").append(`<div class="${spielfeld[x][y].material}" id="${x}/${y}"></div>`)
        }
    }
}

function blockAuswechseln(x, y, material, solid, interactive) {
    spielfeld[x][y] = { x: x, y: y, material: material, solid: solid, interactive: interactive }

    spielfeldLeeren();
    zeigeSpielfeld();
}

function spielfeldLeeren() {
    for (let y = 0; y < HOEHE; y++) {
        for (let x = 0; x < BREITE; x++) {
            document.getElementById(x + '/' + y).remove();
        }
    }
}

function starteEngine() {
    let levelNamen = LEVEL.map(l => l.name);

    ladeBlocksInArray();
    zeigeSpielfeld();

    console.log(spielfeld);
    setStartingPosition();
    setInterval(movePlayer, 150);
}


$(document).ready(function () {
    starteEngine();
});

function movePlayer() {
    if (player.isMovingUp && istBetretbar(player.positionX, player.positionY - 1)) setPosition(player.positionX, player.positionY - 1);
    if (player.isMovingDown && istBetretbar(player.positionX, player.positionY + 1)) setPosition(player.positionX, player.positionY + 1);
    if (player.isMovingLeft && istBetretbar(player.positionX - 1, player.positionY)) setPosition(player.positionX - 1, player.positionY);
    if (player.isMovingRight && istBetretbar(player.positionX + 1, player.positionY)) setPosition(player.positionX + 1, player.positionY);
}

function setStartingPosition() {
    let level = LEVEL.find(l => l.name == current_level);

    console.log(level);
    forceSetPosition(level.start_x, level.start_y);
}

function setPosition(x, y) {

    if(checkInteraktion(x, y))

    forceSetPosition(x, y);
}


function forceSetPosition(x, y) 
{
    if (x < player.positionX) $('#spielfigur').css('transform', 'scaleX(-1)');
    if (x > player.positionX) $('#spielfigur').css('transform', 'scaleX(1)');

    console.log(x);
    console.log(y);

    player.positionX = x;
    player.positionY = y;
    x *= 50;
    y *= 50;
    $("#spielfigur").css("left", x).css("top", y);
}

$(document).on("keydown", (e) => {
    if (!e.originalEvent.repeat) {
        switch (e.code) {
            case "KeyW":
                player.isMovingUp = true;
                break;
            case "KeyS":
                player.isMovingDown = true;
                break;
            case "KeyA":
                player.isMovingLeft = true;
                break;
            case "KeyD":
                player.isMovingRight = true;
                break;
        }
       // console.log(e.code)
    }
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


function istBetretbar(x, y) {
    if (x < 0 || y < 0 || x >= BREITE || y >= HOEHE) return false;
    return !spielfeld[x][y].solid;
}


function checkInteraktion(x, y) {
    if (!spielfeld[x][y].interactive) {
        return true;
    }
    else {
        if (spielfeld[x][y].material == "door") {
            //  player keycard check
            current_level = spielfeld[x][y].interaction.replace('teleport_', '');
            console.log("neues level");

            spielfeldLeeren();
            ladeBlocksInArray();
            zeigeSpielfeld();
            console.log('Level change??');
            setStartingPosition();
            return false;
        }
        if (spielfeld.material == ""){
             
        }
    }
}



