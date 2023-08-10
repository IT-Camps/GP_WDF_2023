let spielfeld = [];
let blocks;
let current_level = "Kaffeeecke";
let floor;
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

function ladeBlocksInArray(levelName) {
    const level = LEVEL.find(l => l.name == levelName);
    switch (levelName) {
        case "foyer":
            floor = 'FBKP';
            break;
        case "serverraum":
            floor = 'SRB';
            break;
        case "Kaffeeecke":
            floor = 'KTB';
            break;
        default:
            break;
    }
    for (let x = 0; x < HOEHE; x++) {
        spielfeld[x] = [];
        for (let y = 0; y < BREITE; y++) {
            spielfeld[x][y] = level.data.find(block => block.x == x && block.y == y) || { x: x, y: y, material: floor, solid: false, interactive: false };
        }
    }
}

function zeigeSpielfeld() {
    for (let x = 0; x < HOEHE; x++) {
        for (let y = 0; y < BREITE; y++) {
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
    let current;
    for (let y = 0; y < HOEHE; y++) {
        for (let x = 0; x < BREITE; x++) {
            current = document.getElementById(x + '/' + y);
            current.remove();
        }
    }
}

function starteEngine() {
    let levelNamen = LEVEL.map(l => l.name);
    console.log("Starte engine...");
    console.log(`Geladene level: ` + levelNamen.join(', '));

    ladeBlocksInArray(current_level);
    zeigeSpielfeld();

    console.log(spielfeld);
    setStartingPosition();
    setInterval(movePlayer, 150);
}


$(document).ready(function () {
    starteEngine();
});

function movePlayer() {
    if (player.isMovingUp && !istBetretbar(player.positionX, player.positionY - 1)) setPosition(player.positionX, player.positionY - 1);
    if (player.isMovingDown && !istBetretbar(player.positionX, player.positionY + 1)) setPosition(player.positionX, player.positionY + 1);
    if (player.isMovingLeft && !istBetretbar(player.positionX - 1, player.positionY)) setPosition(player.positionX - 1, player.positionY);
    if (player.isMovingRight && !istBetretbar(player.positionX + 1, player.positionY)) setPosition(player.positionX + 1, player.positionY);
}

function setStartingPosition() {
    setPosition(0, 0);
}

function setPosition(x, y) {
    // X orientation
    if (x < player.positionX) $('#spielfigur').css('transform', 'scaleX(-1)');
    if (x > player.positionX) $('#spielfigur').css('transform', 'scaleX(1)')

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
        console.log(e.code)
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
    if (x < 0 || y < 0 || x >= BREITE || y >= HOEHE) return true;
    return spielfeld[x][y].solid;
}