let spielfeld = [];
let blocks;
const BREITE = 20;
const HOEHE = 15;

function ladeBlocksInArray(levelName) {
    const level = LEVEL.find(l => l.name == levelName);
    for (let x = 0; x < HOEHE; x++) {
        spielfeld[x] = [];
        for (let y = 0; y < BREITE; y++) {
            spielfeld[x][y] = level.data.find(block => block.x == x && block.y == y) || { x: x, y: y, material: 'floor', solid: false, interactive: false };
        }
    }

}

function zeigeSpielfeld() {
    for (let x = 0; x < HOEHE; x++) {
        for (let y = 0; y < BREITE; y++) {
            $('#spielfeld').append('<div class="' + spielfeld[x][y].material + '" id="' + x + '/' + y + '"></div>');
        }
    }
}

function blockAuswechseln(spielfeld, x, y, material, solid, interactive) {
    delete spielfeld[y][x];
    console.log(spielfeld);
    spielfeld[y][x] = { x: x, y: y, material: material, solid: solid, interactive: interactive }

    return spielfeld
}

function spielfeldLeeren() {
    let current;
    for (let y = 0; y < HOEHE; y++) {
        spielfeld[y] = [];
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
    /*
    spielfeldLeeren();
    levelblocks = blockAuswechseln(levelblocks, 0, 0, 'server', true, true);
    zeigeSpielfeld(levelblocks); */

}


$(document).ready(function () {
    starteEngine();
    console.log(spielfeld);
});
