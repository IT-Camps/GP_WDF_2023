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
});
