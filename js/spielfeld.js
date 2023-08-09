function erzeugeFeld(farbe, x, y) {	
	return {
		farbe: farbe,
		x: x,
		y: y,
		besetzt: 0
	}
}

function zeigeSchachbrett (spielfeld) {
	for(let e of spielfeld) {
		console.log(e);

		for(let k = 0; k < e.length; k++) {
			console.log("test");
			if(e[k].farbe == 's')	$('#spielfeld').append('<div class="black" id="'+e[k].x+e[k].y+'">');
			if(e[k].farbe == 'w')	$('#spielfeld').append('<div class="white" id="'+e[k].x+e[k].y+'">');
		}
}}

let spielfeld = [];
$(document).ready(function() {
	
	for(let i = 0; i <15; i++) {
		spielfeld[i] = [];
	 	for(let j = 0; j < 20; j++) {
			y = i + 1;
			x = j + 1;
			if(j%2==0 && i%2==0)
			{
				spielfeld[i][j] = erzeugeFeld('s',y ,j);
			}
			else if (j%2!=0 && i%2!=0) {
				spielfeld[i][j] = erzeugeFeld('s',y ,j);
			}
			else{
				spielfeld[i][j] = erzeugeFeld('w',y,j);

			}
		}
	}

zeigeSchachbrett(spielfeld);

});

