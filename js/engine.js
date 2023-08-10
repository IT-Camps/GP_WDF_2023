let spielfeld = [];
let blocks;
const BREITE = 20;
const HOEHE = 15;

function ladeBlocksInArray(levelName) {
    const level = LEVEL.find(l => l.name == levelName);
    for (let x = 0; x < HOEHE; x++) {
        spielfeld[x]= [];
        for (let y = 0; y < BREITE; y++) {
            spielfeld[x][y] = level.data.find(block => block.x == x && block.y == y) || {x: x, y: y, material: 'floor', solid: false, interactive: false};
        }
    }
    return spielfeld;
}


function zeigeSpielfeld() {
	for(let x = 0; x < HOEHE; x++) {
		for(let y = 0; y < BREITE; y++) {
			$('#spielfeld').append('<div class="' + spielfeld[x][y].material +  '" id="' + x + '/' + y + '"></div>');
		}
}}

function blockAuswechseln(spielfeld, x, y, material, solid, interactive) {
    delete spielfeld[y][x];
    spielfeld[y][x] = {x: x, y: y, material: material, solid: solid, interactive: interactive}

    return spielfeld;
}

function spielfeldLeeren() {
    let current;
    for(let y = 0; y < HOEHE; y++) {
     	for(let x = 0; x < BREITE; x++) {
            current = document.getElementById(y + '/' + x);
            current.remove();
     	}
    }
}

function starteEngine() {
    let level = LEVEL.map(l => l.name).join(', ');
    console.log("Starte engine...");
    console.log(`Geladene level: `+level);

    let levelblocks = ladeBlocksInArray("serverraum");
    zeigeSpielfeld();

}


$(document).ready(function() {
    starteEngine();
    //spielfeldLeeren();
    //spielfeld = blockAuswechseln(spielfeld, 1, 2, 'black', true, true);
    //zeigeSpielfeld(spielfeld); 
});
