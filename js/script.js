let mainArray = [];

$(function() {
	//let array = [];
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
    x: 0,
    y: 0,
    top: 0, 
    left: 0
}


$(document).ready(function() {
    $(document).keydown(function(event){
        bewegeFigur(event);
    });
    
    setStartingPosition(10, 10, 500, 500)
});	

function bewegeFigur(event) {
    console.log("bewege Figur")
    console.log(event.key);
    console.log(event.code);
    switch (event.code) {
        case "KeyW":
            console.log(player);
            console.log(mainArray);
            if (mainArray[player.y - 1][player.x].solid != 's'){ //Warte auf Spielbrett gruppe dann anpassen
                player.y = player.y - 1;
                player.top = player.top - 50;
                setPosition(player.top, player.left)
            } else {

            }
            break;
        case "KeyS":
            if (mainArray[player.y + 1][player.x] != 's'){
                player.y = player.y + 1;
                player.top = player.top + 50;
                setPosition(player.top, player.left)
            }
            break;
        case "KeyA":
            if (mainArray[player.y][player.x - 1] != 's'){
                player.x = player.x - 1;
                player.left = player.left - 50;
                setPosition(player.top, player.left)
            }
            break;
        case "KeyD":
            if (mainArray[player.y][player.x + 1] != 's'){
                player.x = player.x + 1;
                player.left = player.left + 50;
                setPosition(player.top, player.left)
            }
            break;

// --------------- Diagoal ---------------------\\
        case "KeyE":
            if (mainArray[player.y - 1][player.x + 1] != 's'){ //Warte auf Spielbrett gruppe dann anpassen
                player.x = player.x + 1;
                player.y = player.y - 1;
                player.top = player.top - 50;
                player.left = player.left + 50;
                setPosition(player.top, player.left)
            }
            break;
        case "KeyC":
            if (mainArray[player.y + 1][player.x + 1] != 's'){ //Warte auf Spielbrett gruppe dann anpassen
                player.x = player.x + 1;
                player.y = player.y + 1;
                player.top = player.top + 50;
                player.left = player.left + 50;
                setPosition(player.top, player.left)
            }
            break;
        case "KeyZ":
            if (mainArray[player.y + 1][player.x - 1] != 's'){ //Warte auf Spielbrett gruppe dann anpassen
                player.x = player.x - 1;
                player.y = player.y + 1;
                player.top = player.top + 50;
                player.left = player.left - 50;
                setPosition(player.top, player.left)
            }
            break;
        case "KeyQ":
            if (mainArray[player.y - 1][player.x - 1] != 's'){ //Warte auf Spielbrett gruppe dann anpassen
                player.x = player.x - 1;
                player.y = player.y - 1;
                player.top = player.top - 50;
                player.left = player.left - 50;
                setPosition(player.top, player.left)
            }
            break;
    }
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
        .css("margin-top", top)
        .css("margin-left", left)
}

