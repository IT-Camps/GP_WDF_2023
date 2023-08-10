let spielfeld = [];
let blocks;
const BREITE = 20;
const HOEHE = 15;

function ladeBlocksInArray(levelName) {
    const level = LEVEL.find(l => l.name == levelName);
    for (let x = 0; x < BREITE; x++) {
        spielfeld[x] = [];
        for (let y = 0; y < HOEHE; y++) {
            spielfeld[x][y] = level.data.find(block => block.x == x && block.y == y) || { x: x, y: y, material: 'floor', solid: false, interactive: false };
        }
    }
}

function zeigeSpielfeld() {
    for (let y = 0; y < HOEHE; y++) {
        for (let x = 0; x < BREITE; x++) {
            $("#spielfeld").append(`<div class="${spielfeld[x][y].material}" id="${x}/${y}"></div>`)
            //$('#spielfeld').append('<div class="' + spielfeld[x][y].material + '" id="' + x + '/' + y + '"></div>');
        }
    }
}

function blockAuswechseln(x, y, material, solid, interactive) {
    //  Warum?
    delete spielfeld[x][y];
    spielfeld[x][y] = { x: x, y: y, material: material, solid: solid, interactive: interactive }

    spielfeldLeeren();
    zeigeSpielfeld();

    //return spielfeld;
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

    ladeBlocksInArray("serverraum");
    zeigeSpielfeld();

}


$(document).ready(function () {
    starteEngine();
    //spielfeldLeeren();
    //spielfeld = blockAuswechseln(spielfeld, 1, 2, 'black', true, true);
    //zeigeSpielfeld(spielfeld); 
});
