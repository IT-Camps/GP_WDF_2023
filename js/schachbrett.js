function erzeugeFeld(farbe, reihe, spalte) {	
	return {
		farbe: farbe,
		reihe: reihe,
		spalte: spalte,
		besetzt: 0
	}
}

function zeigeSchachbrett (spielfeld) {
	for(let e of spielfeld) {
		console.log(e);

		for(let k = 0; k < e.length; k++) {
			console.log("test");
			if(e[k].farbe == 's')	$('#spielfeld').append('<div class="black" id="'+e[k].reihe+e[k].spalte+'">');
			if(e[k].farbe == 'w')	$('#spielfeld').append('<div class="white" id="'+e[k].reihe+e[k].spalte+'">');
		}
}}

let spielfeld = [];
$(document).ready(function() {
	
	for(let i = 0; i <15; i++) {
		spielfeld[i] = [];
	 	for(let j = 0; j < 20; j++) {
			spalte = i + 1
			if(j%2==0 && i%2==0)
			{
				spielfeld[i][j] = erzeugeFeld('s',spalte ,String.fromCharCode(65+j));
			}
			else if (j%2!=0 && i%2!=0) {
				spielfeld[i][j] = erzeugeFeld('s',spalte ,String.fromCharCode(65+j));
			}
			else{
				spielfeld[i][j] = erzeugeFeld('w',spalte,String.fromCharCode(65+j));

			}
		}
	}

zeigeSchachbrett(spielfeld);

});

