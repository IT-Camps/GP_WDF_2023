let player = document.getElementById("player");
let item = document.getElementById("item");
let tür = document.getElementById("tür");
var inventory = [];
// Platzhalter für Position des Spielers
let player_pos = {
    x: 800,
    y: 800
}
// Platzhalter für Position des Items
let item_pos = {
    x: 400,
    y: 400

}

let tür_pos = {
    x: 400,
    y: 400

}


function setStartPosition() {
    setPlayerOnPosition("800px", "800px");
    setItemOnPosition("400px", "400px");
    //setTürOnPosition("600px", "600px");
}


function setItemOnPosition(x, y) {
    $('#item')
        .css('margin-top', x)
        .css('margin-left', y);
}

function setPlayerOnPosition(x, y) {
    $('#player')
        .css('margin-top', x)
        .css('margin-left', y);


}

function seTürOnPosition(x, y) {
    $('#tür')
        .css('margin-top', x)
        .css('margin-left', y);


}



function movePlayer(event) {
    if (player_pos.x > 10 && player_pos.y > 10) {
        switch (event.code) {
            case "KeyW": //W Taste
                player_pos.x -= 10
                break;

            case "KeyS": //S Taste
                player_pos.x += 10
                break;

            case "KeyA": //A Taste
                player_pos.y -= 10
                break;

            case "KeyD": //D Taste
                player_pos.y += 10
                break;

            case "KeyE": //E Taste   (Inventar)
                player_pos.y += 10
                break;

            case "KeyL": //L Taste Item wegwerfen ->   -> 

                $("#item").show();
                setItemOnPosition(player_pos.x, player_pos.y);

                break;

            default:
                console.log("Default case");
                break;
        }

        setPlayerOnPosition(player_pos.x, player_pos.y);
    } else {
        console.log("Set Start");
        setStartPosition();
    }

}


$(document).ready(function () {

    // DIV der Nachricht und des Inventars verstecken
    $("#message").hide();
    $('#inventory').hide();

    // Inventar wird angezeigt
    let showingInventory = false;

    // Informationen des Spielers
    let player = {
        x: 800,
        y: 800,
        inventory: [] // Inventar anlegen
    }
    // Informationen des Items
    let item = {
        x: 400,
        y: 400,
        name: "Keycard",

    }
    // Position der Tür
    let tuer_pos = {
        x: 600,
        y: 600

    }
    // Position der Nachricht
    let message_pos = {
        x: 50,
        y: 50,
    }

    // Funktion für das setzen der Item position
    function setItemOnPosition(x, y) {
        $('#item')
            .css('margin-top', x)
            .css('margin-left', y);
    }

    // Funktion für das setzen der Spieler position
    function setPlayerOnPosition(x, y) {
        $('#player')
            .css('margin-top', x)
            .css('margin-left', y);
    }

    // Funktion für das setzen der Tür position
    function setTuerOnPosition(x, y) {
        $('#tuer')
            .css('margin-top', x)
            .css('margin-left', y);
    }

    // Funktion für das setzen der Item-pick-up-Message position
    function setMessageOnPosition(x, y) {
        $('#message')
            .css('margin-top', x)
            .css('margin-left', y);
    }

    // Funktionen zum Nachricht erstellen und anzeigen
    function showMessage(input) {
        $('#message_content').text(input + " wurde aufgesammelt.");
        $('#message').append()
        $("#message").show();
        setTimeout(function () {
            $('#message').fadeOut('fast');
        }, 5000); // <-- time in milliseconds
    }

    // Alle Spielobjekte Platzieren
    function setPositions() {
        setPlayerOnPosition(player.x + "px", player.y + "px");
        setItemOnPosition(item.x + "px", item.y + "px");
        setTuerOnPosition(tuer_pos.x + "px", tuer_pos.y + "px");
        setMessageOnPosition(message_pos.x + "px", message_pos.y + "px");
    }

    // Objekte auf Überlappungen überprüfen
    function checkOverlap(player, item) {
        // Überprüfen ob X-Koordinaten sich überlappen
        if (player[0] + 50 > item[0] && player[0] < item[0] + 50) {
            // Überprüfen ob Y-Koordinaten sich überlappen
            if (player[1] + 50 > item[1] && player[1] < item[1] + 50) {
                // Spieler und Item überlappen sich
                return true;
            }
        }
        // Spieler und Item überlappen sich nicht
        return false;
    }

    // Item zu Inventar hinzufügen
    function addItemInv(item, inventory) {
        inventory.push(item)
        let $div = $("<div>", { id: item });
        $("#inventory").append($div);
        $("#" + item)
            .css('height', '50px')
            .css('width', '50px')
            .css('background-image', 'url(./img/KeyCards/KeycardBobRoss.png)')
            .css('position', 'absolute')
            .css('display', 'inline-block')
            .css('z-index', '4');
        console.log(item)
    }

    // Item vom Inventar entfernen
    function removeItemInv(item, inventory) {
        let index = inventory.indexOf(item);
        if (index > -1) {
            inventory.splice(index, 1);
        }
        $("#", item.name).remove();
    }

    // Funktion für die Spieler bewegung
    function movePlayer(event) {
        if (player.x > 10 && player.y > 10) {
            switch (event.code) {
                case "KeyW": //W Taste
                    player.x -= 10
                    break;

                case "KeyS": //S Taste
                    player.x += 10
                    break;

                case "KeyA": //A Taste
                    player.y -= 10
                    break;

                case "KeyD": //D Taste
                    player.y += 10
                    break;

                case "KeyE": //E Taste   (Inventar)
                    $('#inventory').show();
                    setTimeout(function () {
                        $('#inventory').fadeOut('fast');
                    }, 7000); // <-- time in milliseconds
                    break;

                default:
                    console.log("Default case");
                    break;
            }

            setPlayerOnPosition(player.x, player.y);
        } else {
            console.log("Set Start");
        }
    }

    // Spiel Objekte erscheinen lassen
    setPositions();

    // Intervall festlegen
    setInterval(function () {

        //Get the height and position of the player
        let charTop = parseInt(player_pos.x);
        let charHeight = parseInt(player_pos.y);
        console.log(charTop, charHeight)
        //and the top of the item
        let itemTop = parseInt(item_pos.x);
        let itemHeight = parseInt(item_pos.y);
        console.log(itemTop);

        if (itemHeight == charHeight && charTop == itemTop || itemHeight == charHeight || itemHeight == charHeight) {
            // Treffen der DIVs

            $("#item").hide();  //item sollte aufgesammelt werden wenn man drüber geht 

        }
    });


    if (itemHeight == türHeight && türTop == itemTop || itemHeight == türHeight || itemHeight == türHeight) {
        console.log("Tür öffnet")
    }

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
$(document).keydown(function (event) {
    movePlayer(event);
});






