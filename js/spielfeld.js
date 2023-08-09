function erzeugeFeld(x, y, material, solid, interactive) {	
	return {
		x: x,
		y: y,
		material: material,
		solid: solid,
		interactive: interactive,
	}
}

function zeigeSchachbrett (spielfeld) {
	console.log(spielfeld);
	for(let e of spielfeld) {

		for(let k = 0; k < e.length; k++) {
			$('#spielfeld').append('<div class="' + e[k].material +  '" id="'+e[k].x+'/'+e[k].y+'">');
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
				spielfeld[i][j] = erzeugeFeld(y ,x,'black');
			}
			else if (j%2!=0 && i%2!=0) {
				spielfeld[i][j] = erzeugeFeld(y ,x,'black');
			}
			else{
				spielfeld[i][j] = erzeugeFeld(y,x,'white');

			}
		}
	}

zeigeSchachbrett(spielfeld);

});

