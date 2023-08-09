$(function() {
	//let array = [];
	let mainArray = [];
	for (var i = 0; i<15; i++){
		mainArray[i] = [];
		console.log(mainArray);
		for (var j = 0; j<20; j++){
			if (i%2 == 0){
				if (j % 2 == 0){
					mainArray[i][j] = 's';
				} else {
					mainArray[i][j] = 'w';
				}
			} else {
				if (j % 2 == 0){
					mainArray[i][j]= 'w';
				} else {
					mainArray[i][j]= 's';
				}
			}
		}
		console.log(mainArray[i])

	}
    zeigeSchachbrett (mainArray);

	console.log(mainArray);
});

function zeigeSchachbrett (spielfeld) {
	for(let a of spielfeld) {
		for (let i of a){
			console.log(i)
			if(i == "s"){
				console.log("fhecegkcj")
				$('#spielfeld').append('<div class="black">');
			}	
			if(i == 'w'){
				$('#spielfeld').append('<div class="white">');
			}	
		}
	}
}

function erzeugeFeld(farbe, reihe, spalte) {
	return {
		farbe: farbe,
		reihe: reihe,
		spalte: spalte,
		besetzt: 0,
		text: ""
	}
}

let player = {
    top: 0,
    left: 0
}

$(document).ready(function() {
    $(document).keydown(function(event){
        bewegeFigur(event);
        if (checkCollision()) {
            alert("Spieler 1 und Spieler 2 haben sich berührt!");
        }
    });
    
    setStartingPosition(300, 300)
});	

function bewegeFigur(event) {
    console.log("bewege Figur")
    console.log(event.key);
    console.log(event.code);
    switch (event.code) {
        case "KeyW":
            player.top = player.top - 50;
            setPosition(player.left, player.top)
            break;
        case "KeyS":
            player.top = player.top + 50;
            setPosition(player.left, player.top)
            break;
        case "KeyA":
            player.left = player.left - 50;
            setPosition(player.left, player.top)
            break;
        case "KeyD":
            player.left = player.left + 50;
            setPosition(player.left, player.top)
            break;
    }
}

function setStartingPosition(x, y) {
    player.top = y;
    player.left = x;
    setPosition(x, y)
};

function setPosition(x, y) {
    $("#spielfigur")
        .css("margin-top", y)
        .css("margin-left", x)
}

function checkCollision() {
    if (
        Math.abs(player.top - player2.top) < 20 &&
        Math.abs(player.e - player2.left) < 20
    ) {
        return true; // Kollision gefunden
    }
    return false; // Keine Kollision
}