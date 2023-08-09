let mainArray = [];
// Spielbrett erstellen
$(function() {
	for (var i = 15; i>0; i--){
		mainArray[i] = [];

		for (var j = 0; j<20; j++){
			if (i%2 == 0){
                console.log('Schwarz!!!');
				if (j % 2 == 0){
					mainArray[i][j] = 's';
				} else {
					mainArray[i][j] = 'w';
				}
                
			} else {
                console.log('Weiß!');
				if (j % 2 == 0){
					mainArray[i][j]= 'w';
				} else {
					mainArray[i][j]= 's';
				}
			}
		}
        

	}
    console.log(mainArray);
// Border erstellen
    for (let i = 0; i<15; i++){
        for (let j = 0; j<20; j++){
            if ((i == 0) || (i == 14)){
                mainArray[i][j] = "o";
            } else {
                mainArray[i][0] = "o";
                mainArray[i][19] = "o";
            }
        }
    }

    zeigeSchachbrett (mainArray);

	console.log(mainArray);
});
//
function zeigeSchachbrett (spielfeld) {
	for(let a of spielfeld) {
		for (let i of a){
			if(i == "s"){
				$('#spielfeld').append('<div class="black">');
			}	
			if(i == 'w'){
				$('#spielfeld').append('<div class="white">');
			}
            if(i == "o"){
				$('#spielfeld').append('<div class="orange">');
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
    x: 0,
    y: 0,
    top: 0, 
    left: 0
}



$(document).ready(function() {
    $(document).keydown(function(event){
        bewegeFigur(event);
    });
    $(document).keyup(function(event){
        bewegeFigurNicht(event);
    });
    
    setStartingPosition(9, 9, 450, 450)
    setInterval(movePlayer, 50);
});	

function bewegeFigur(event) {
    console.log("bewege Figur")
    console.log(event.key);
    console.log(event.code);
    switch (event.code) {
        case "KeyW":

            console.log(player);
            console.log(mainArray);
            if (mainArray[player.y - 1][player.x] == 'w'){ //Warte auf Spielbrett gruppe dann anpassen
                player.y = player.y - 1;
                player.top = player.top - 50;
                player.isMovingUp = true;
            } else {

            }
            break;
        case "KeyS":
            if (mainArray[player.y + 1][player.x] == 'w'){
                player.y = player.y + 1;
                player.top = player.top + 50;
                player.isMovingDown = true;
            }
            break;
        case "KeyA":
            if (mainArray[player.y][player.x - 1] == 'w'){
                player.x = player.x - 1;
                player.left = player.left - 50;
                player.isMovingLeft = true;
            }
            break;
        case "KeyD":
            if (mainArray[player.y][player.x + 1] == 'w'){
                player.x = player.x + 1;
                player.left = player.left + 50;
                player.isMovingRight = true;
            }
            break;
    }
}

function bewegeFigurNicht(event) {
    switch (event.code) {
        case "KeyW":
            player.isMovingUp = false;
            break;
        case "KeyS":
            player.isMovingDown = false;
            break;
        case "KeyA":
            player.isMovingLeft = false;
            break;
        case "KeyD":
            player.isMovingRight = false;
            break;
    }
}

function movePlayer() {
    if (player.isMovingUp) setPosition(player.top, player.left);
    if (player.isMovingDown) setPosition(player.top, player.left);
    if (player.isMovingLeft) setPosition(player.top, player.left);
    if (player.isMovingRight) setPosition(player.top, player.left);
}

function setStartingPosition(x, y, top, left) {
    player.top = top;
    player.left = left;
    player.x = x;
    player.y = y;
    setPosition(top, left)
};

function setPosition(top, left) {
    $("#spielfigur")
        .css("top", top)
        .css("left", left)
}

