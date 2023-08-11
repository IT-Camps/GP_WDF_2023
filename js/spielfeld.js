let spielfeld = [];
let width = 20;
let height = 15;

function erzeugeFeld(x, y, material, solid, interactive) {	
	return {
		x: x,
		y: y,
		material: material,
		solid: solid,
		interactive: interactive,
	}
}

function zeigeSpielfeld (spielfeld) {
	console.log(spielfeld);
	for(let y = 1; y <= height; y++) {
		for(let x = 1; x <= width; x++) {
			$('#spielfeld').append('<div class="' + spielfeld[y][x].material +  '" id="' + spielfeld[y][x].x + '/' + spielfeld[y][x].y + '">');
		}
}}

function standartSpielfeld() {
	for(let y = 1; y <= height; y++) {
		spielfeld[y] = [];
	 	for(let x = 1; x <= width; x++) {
			spielfeld[y][x] = erzeugeFeld(y, x, 'floor', false, false);
		}
	}
}


$(document).ready(function() {
	standartSpielfeld();
	zeigeSpielfeld(spielfeld);

});

