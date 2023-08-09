function erzeugeFeld(farbe, reihe, spalte) {	
	return {
		farbe: farbe,
		reihe: reihe,
		spalte: spalte,
		besetzt: 0
	}
}

function zeigeSchachbrett (spielfeld) {
	for(let reihe of spielfeld) {
		console.log(reihe);
		console.log(reihe.farbe);

		for(let spalte of reihe) {
		if(spalte.farbe == 's')	$('#spielfeld').append('<div class="black">');
		if(spalte.farbe == 'w')	$('#spielfeld').append('<div class="white">');
	}
}
}

let spielfeld = [];
$(document).ready(function() {
	
	for(let i = 0; i < 8; i++) {
		spielfeld[i] = [];
	 	for(let j = 0; j < 8; j++) {
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

