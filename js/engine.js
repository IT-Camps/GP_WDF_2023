let spielfeld = [];
let blocks;
let currentLevel = "foyer";
const BREITE = 20;
const HOEHE = 15;
var inventory = [];

let player = {
    positionX: 0,
    positionY: 0,
    isMovingUp: false,
    isMovingDown: false,
    isMovingLeft: false,
    isMovingRight: false,
};

function ladeBlocksInArray() {
    const level = LEVEL.find(l => l.name == currentLevel);
    switch (currentLevel) {
        case "foyer":
            floor = 'FBKP';
            break;
        case "serverraum":
            floor = 'SRB';
            break;
        case "kaffeeecke":
            floor = 'Holzboden';
            break;
        case "office":
            floor = 'fu';
            console.log($("#spielfeld"));
            $("#spielfeld").css("background-image", "url('img/hintergrund/mathis spiel.png')");
            //CSS FÜR eigenes büro setzen
            break;
        case "ceo":
            floor = 'fu';
            console.log($("#spielfeld"));
            $("#spielfeld").css("background-image", "url('img/hintergrund/endbildschir_bearbeitet_final.png')");
            //CSS FÜR ENDBILDSCHIRM setzen
            break;
        default:
            break;
    }
    
    for (let x = 0; x < BREITE; x++) {
        spielfeld[x] = [];
        for (let y = 0; y < HOEHE; y++) {
            spielfeld[x][y] = level.data.find(block => block.x == x && block.y == y) || { x: x, y: y, material: floor, solid: false, interactive: false };
        }
    }
}

//  Fügt alle Blöcke aus 'spielfeld' reihenweise (wegen flexbox layout) als div zu #spielfeld hinzu,
//  wobei das Material die Klasse des div und die Koordinaten im Format X/Y die ID sind
function zeigeSpielfeld() {
    for (let y = 0; y < HOEHE; y++) {
        for (let x = 0; x < BREITE; x++) {
            $("#spielfeld").append(`<div class="${spielfeld[x][y].material}" id="${x}/${y}"></div>`)
        }
    }
}

//  Ersetzt einen einzelnen Block an den gegebenen Koordinaten und rendert das spielfeld neu
function blockAuswechseln(x, y, material, solid, interactive) {
    spielfeld[x][y] = { x: x, y: y, material: material, solid: solid, interactive: interactive }

    spielfeldLeeren();
    zeigeSpielfeld();
}


//  Leert #spieldfeld in DOM; NICHT 'spielfeld' array
function spielfeldLeeren() {
    for (let y = 0; y < HOEHE; y++) {
        for (let x = 0; x < BREITE; x++) {
            document.getElementById(x + '/' + y).remove();
        }
    }
}

function starteEngine() {
    ladeBlocksInArray();
    zeigeSpielfeld();

    console.log(spielfeld);
    setStartingPosition();
    setInterval(movePlayer, 150);
}


$(document).ready(function () {
    starteEngine();
});

function movePlayer() {
    if (player.isMovingUp && istBetretbar(player.positionX, player.positionY - 1)) setPosition(player.positionX, player.positionY - 1);
    if (player.isMovingDown && istBetretbar(player.positionX, player.positionY + 1)) setPosition(player.positionX, player.positionY + 1);
    if (player.isMovingLeft && istBetretbar(player.positionX - 1, player.positionY)) setPosition(player.positionX - 1, player.positionY);
    if (player.isMovingRight && istBetretbar(player.positionX + 1, player.positionY)) setPosition(player.positionX + 1, player.positionY);
}

function setStartingPosition() {
    let level = LEVEL.find(l => l.name == currentLevel);

    console.log(level);
    forceSetPosition(level.start_x, level.start_y);
}

function setPosition(x, y) {

    if(checkInteraktion(x, y))

    forceSetPosition(x, y);
}


function forceSetPosition(x, y) 
{
    if (x < player.positionX) $('#spielfigur').css('transform', 'scaleX(-1)');
    if (x > player.positionX) $('#spielfigur').css('transform', 'scaleX(1)');

    console.log(x);
    console.log(y);

    player.positionX = x;
    player.positionY = y;
    x *= 50;
    y *= 50;
    $("#spielfigur").css("left", x).css("top", y);
}

$(document).on("keydown", (e) => {
    if (!e.originalEvent.repeat) {
        switch (e.code) {
            case "KeyW":
                player.isMovingUp = true;
                break;
            case "KeyS":
                player.isMovingDown = true;
                break;
            case "KeyA":
                player.isMovingLeft = true;
                break;
            case "KeyD":
                player.isMovingRight = true;
                break;
        }
       // console.log(e.code)
    }
});

$(document).on("keyup", (e) => {
    switch (e.code) {
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
        case "KeyE":
            $('#inventory').show();
            setTimeout(function () {
                $('#inventory').fadeOut('fast');
            }, 7000);
            break;
        default:
            console.log("Default case");
            break;
    }
});


function istBetretbar(x, y) {
    //  False wenn Koordinaten außerhalb des Spielfeldes sind
    if (x < 0 || y < 0 || x >= BREITE || y >= HOEHE) return false;

    //  False wenn Block an Koordinaten solid ist
    return !spielfeld[x][y].solid;
}


function checkInteraktion(x, y) {
    if (!spielfeld[x][y].interactive) {
        return true;
    }
    else {
        if (spielfeld[x][y].material == "door") {
            //  player keycard check
            currentLevel = spielfeld[x][y].interaction.replace('teleport_', '');
            console.log("neues level");

            spielfeldLeeren();
            ladeBlocksInArray();
            zeigeSpielfeld();
            console.log('Level change??');
            setStartingPosition();
            return false;
        }
        if (spielfeld.material == ""){
             
        }
    }
}


/*
To do liste
    Sebastian:
        -teleport logic
        -interaktion
    Maksim:
        -interaktion mit items
        -keycards aufheben und oben rechts im bildschirm als inventar anzeigen
*/


function addToInventory(item) {
    inventory.push(item);
    console.log(item + " wurde dem Inventar hinzugefügt.");
  }
  

function removeFromInventory(item) {
    var index = inventory.indexOf(item);
    if (index > -1) {
        inventory.splice(index, 1);
        console.log(item + " wurde aus dem Inventar entfernt.");
    } else {
        console.log(item + " konnte nicht gefunden werden.");
    }
}


function checkInventory(item) {
    if (inventory.indexOf(item) > -1) {
        console.log(item + " ist im Inventar.");
        return true;
    } else {
        console.log(item + " ist nicht im Inventar.");
        return false;
    }
}

setInterval(function () {

    // Überprüfen ob die DIVs des Items und des Spielers sich überlappen
    if (checkOverlap([player.x, player.y], [item.x, item.y]) == true) {
        // Item wird aufgesammelt
        $("#item").hide();
        addItemInv(item.name, player.inventory)
        item.x = 0;
        item.y = 0;
        showMessage(item.name);
    }


    if (checkOverlap([tuer_pos.x, tuer_pos.y], [player.x, player.y]) == true && player.inventory.includes(item.name) == true) {
        // Tür wird geöffnet
        console.log("Tür öffnet")
        tuer_pos.x = 0;
        tuer_pos.x = 0;
        $("#tuer").hide();
        removeItemInv(item.name, player.inventory)
    }
}, 33);