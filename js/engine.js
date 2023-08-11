let spielfeld = [];
let blocks;
let current_level = "foyer";
let level = LEVEL.find(l => l.name == current_level);
const BREITE = 20;
const HOEHE = 15;

let player = {
    positionX: 0,
    positionY: 0,
    isMovingUp: false,
    isMovingDown: false,
    isMovingLeft: false,
    isMovingRight: false,
    inventory : []
};

function ladeBlocksInArray() {
    const level = LEVEL.find(l => l.name == current_level);
    switch (current_level) {
        case "foyer":
            floor = 'fu';
            console.log($("#spielfeld"));
            $("#spielfeld").css("background-image", "url('./img/hintergrund/Foyer_Hintergrund.png')");
            //Hintergrund Spielfeld
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

function zeigeSpielfeld() {
    for (let y = 0; y < HOEHE; y++) {
        for (let x = 0; x < BREITE; x++) {
            $("#spielfeld").append(`<div class="${spielfeld[x][y].material}" id="${x}/${y}"></div>`)
        }
    }
}

function blockAuswechseln(x, y, material, solid, interactive) {
    spielfeld[x][y] = { x: x, y: y, material: material, solid: solid, interactive: interactive }

    spielfeldLeeren();
    zeigeSpielfeld();
}

function spielfeldLeeren() {
    for (let y = 0; y < HOEHE; y++) {
        for (let x = 0; x < BREITE; x++) {
            document.getElementById(x + '/' + y).remove();
        }
    }
}

function starteEngine() {
    let levelNamen = LEVEL.map(l => l.name);

    ladeBlocksInArray();
    zeigeSpielfeld();

    console.log(spielfeld);
    setStartingPosition();
    setInterval(movePlayer, 150);
}


$(document).ready(function () {
    starteEngine();


    // DIV der Nachricht und des Inventars verstecken
    $("#message").hide();
    $('#inventory').hide();

    // Informationen des Items
    let item= {
        x : 110,
        y : 610,
        name: "Keycard",

    }
    // Position der Tür
    let tuer_pos = {
        x : 10,
        y : 460

    }
    // Position der Nachricht
    let message_pos = {
        x : 50,
        y : 50,
    }

    // Funktion für das setzen der Item position
    function setItemOnPosition(x,y) {
        $('#item')
        .css('margin-top', x )
        .css('margin-left', y );
    }

    // Funktion für das setzen der Tür position
    function setTuerOnPosition(x,y) {
        $('#tuer')
        .css('margin-top', x )
        .css('margin-left', y );
    }

    // Funktion für das setzen der Item-pick-up-Message position
    function setMessageOnPosition(x,y) {
        $('#message')
        .css('margin-top', x )
        .css('margin-left', y );
    }

    // Funktionen zum Nachricht erstellen und anzeigen
    function showMessage(input) {
        $('#message_content').text(input + " wurde aufgesammelt.");
        $('#message').append()
        $("#message").show();
        setTimeout(function() {
            $('#message').fadeOut('fast');
        }, 5000); // <-- time in milliseconds
    }

    // Alle Spielobjekte Platzieren
    function setPositions() {
        setItemOnPosition(item.x+"px", item.y+"px");
        setTuerOnPosition(tuer_pos.x+"px", tuer_pos.y+"px");
        setMessageOnPosition(message_pos.x+"px", message_pos.y+"px");
    }

    // Objekte auf Überlappungen überprüfen
    function checkOverlap(playerDummy, item) {
        // Überprüfen ob X-Koordinaten sich überlappen
        if (playerDummy[0] + 50 > item[0] && playerDummy[0] < item[0] + 50) {
            // Überprüfen ob Y-Koordinaten sich überlappen
            if (playerDummy[1] + 50 > item[1] && playerDummy[1] < item[1] + 50) {
                // Spieler und Item überlappen sich
                return true;
            	}
        }
        // Spieler und Item überlappen sich nicht
        return false;
    }

    // Item zu Inventar hinzufügen
    function addItemInv (item, inventory) {
        inventory.push(item)
        let $div = $("<div>", {id: item});
        $("#inventory").append($div);
        $("#"+item)
            .css('height', '50px')
            .css('width', '50px')
            .css('background-image', 'url(./img/KeyCards/KeycardBobRoss.png)')
            .css('position', 'absolute')
            .css('display','inline-block')
            .css('z-index', '4');
        console.log(item)
    }

    // Item vom Inventar entfernen
    function removeItemInv (item, inventory) {
        let index = inventory.indexOf(item);
        if (index > -1) {
            inventory.splice(index, 1);
            }
        $("#", item.name).remove();
        }
    
    // Spiel Objekte erscheinen lassen
    setPositions();

    // Intervall festlegen
    setInterval( function(){
        
        // Überprüfen ob die DIVs des Items und des Spielers sich überlappen
        if (checkOverlap([player.positionX, player.positionY], [item.x, item.y]) == true) {
            // Item wird aufgesammelt
            $("#item").hide();
            addItemInv(item.name, player.inventory)
            item.x = 0;
            item.y = 0;
            showMessage(item.name);
        }


        if(checkOverlap([tuer_pos.x,tuer_pos.y], [player.positionX, player.positionY]) == true && player.inventory.includes(item.name) == true){
            // Tür wird geöffnet
            console.log("Tür öffnet")
            tuer_pos.x = 0;
            tuer_pos.x = 0;
            $("#tuer").hide();
            removeItemInv(item.name, player.inventory)
        }
    },33);
});

function movePlayer() {
    if (player.isMovingUp && istBetretbar(player.positionX, player.positionY - 1)) setPosition(player.positionX, player.positionY - 1);
    if (player.isMovingDown && istBetretbar(player.positionX, player.positionY + 1)) setPosition(player.positionX, player.positionY + 1);
    if (player.isMovingLeft && istBetretbar(player.positionX - 1, player.positionY)) setPosition(player.positionX - 1, player.positionY);
    if (player.isMovingRight && istBetretbar(player.positionX + 1, player.positionY)) setPosition(player.positionX + 1, player.positionY);
}

function setStartingPosition() {
    level = LEVEL.find(l => l.name == current_level);

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
            case "KeyE": //E Taste   (Inventar)
                $('#inventory').show();
                setTimeout(function() {
                    $('#inventory').fadeOut('fast');
                }, 7000); // <-- time in milliseconds
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
    }
});


function istBetretbar(x, y) {
    if (x < 0 || y < 0 || x >= BREITE || y >= HOEHE) return false;
    return !spielfeld[x][y].solid;
}


function checkInteraktion(x, y) {
    if (!spielfeld[x][y].interactive) {
        return true;
    }
    else {
        if (spielfeld[x][y].material == "door") {
            //  player keycard check
            current_level = spielfeld[x][y].interaction.replace('teleport_', '');
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



//items unsichtbar
//items werden platziert, wenn der benötigte Raum geladen ist und Bedingungen erfüllt sind
//platzieren: zugewiesene Koordinaten im Array auslesen
//items werden aufgehoben, aber anstelle item.hide oben rechts in die ecke und kleiner
//Stelle im array wo item war mit floor ersetzen
//items fallen lassen nicht einbauen weil warum

function itemSichtbar(item){
    switch (item){
        case "keycard1":
            itemSetPosition(item)
            $(item).show()

    }
}
let arrayKeycards= [false,false,false,false]
function itemSetPosition(item, inventar){
    switch(item){
        case "keycard1":
            if (inventar == true){
                
                $('#item')
                    .css('top',  )//Koordinaten anpassen
                    .css('left',  );
            }
            else{
                blockAuswechseln(x, y, "keycard1", false, true) //Koordinaten auswechseln
            }
        case "keycard2":
            if (inventar == true){
                $('#item')
                    .css('top',  )//Koordinaten anpassen
                    .css('left',  );
            }
            else{
                blockAuswechseln(x, y, "keycard2", false, true) //Koordinaten auswechseln
            }
        case "keycard3":
            if (inventar == true){
                $('#item')
                    .css('top',  )//Koordinaten anpassen
                    .css('left',  );
            }
            else{
                blockAuswechseln(x, y, "keycard3", false, true) //Koordinaten auswechseln
            }
        case "keycard4":
            if (inventar == true){
                $('#item')
                    .css('top',  )//Koordinaten anpassen
                    .css('left',  );
            }
            else{
                blockAuswechseln(x, y, "keycard4", false, true) //Koordinaten auswechseln
            }
    }
}
