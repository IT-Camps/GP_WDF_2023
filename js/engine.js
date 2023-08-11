let spielfeld = [];
let blocks;
let currentLevel = "foyer";
const BREITE = 20;
const HOEHE = 15;
var inventory = [];

let posX;
let posY;

let aufgesammelteItems = [];

//  damit movement interval gestoppt werden kann
let movementIntervalID;

let player = {
    positionX: 0,
    positionY: 0,
    isMovingUp: false,
    isMovingDown: false,
    isMovingLeft: false,
    isMovingRight: false,
};

function ladeBlocksInArray(levelName) {
    const level = LEVEL.find(l => l.name == currentLevel);

    //  TODO: Vollkommen auf level.meta.default_material umsteigen
    //  mit ausnahme von background-image und level spezifischen stylesheets
    switch (currentLevel) {
        case "kaffeeecke":
            //  blackout effect

            setTimeout(() => alert("Du bist extrem müde! Trinke einen starken Kaffe."), 20);
            break;
        case "office":
            //floor = 'fu';
            $("#spielfeld").css("background-image", "url('img/hintergrund/mathis spiel.png')");
            //CSS FÜR eigenes büro setzen
            break;
        case "ceo":
            floor = 'fu';
            $("#spielfeld")
                .css("background-image", "url('img/hintergrund/endbildschir_bearbeitet_final.png')")
                .css('background-size', 'cover')
                .css('background-repeat', 'no-repeat')
                .css('background-position-x', '100%');
            $("#spielfigur").hide();
            $(".startseite").css("visibility", "visible");
            break;
    }

    //  level.data Blöcke in 2D array 'spielfeld' speichern
    for (let x = 0; x < BREITE; x++) {
        spielfeld[x] = [];
        for (let y = 0; y < HOEHE; y++) {
            spielfeld[x][y] = level.data.find(block => block.x == x && block.y == y) || { x: x, y: y, material: level.meta.default_material, solid: false, interactive: false };
        }
    }
}

//  Fügt alle Blöcke aus 'spielfeld' reihenweise (wegen flexbox layout) als div zu #spielfeld hinzu,
//  wobei das Material die Klasse des div und die Koordinaten im Format X_Y die ID sind
function zeigeSpielfeld() {
    for (let y = 0; y < HOEHE; y++) {
        for (let x = 0; x < BREITE; x++) {
            const block = spielfeld[x][y];
            //  Render div
            $("#spielfeld").append(`<div class="${block.material}" id="${x}_${y}"></div>`)

            //  Render items
            if (block.interactive && block.interaction?.startsWith('item_') && !aufgesammelteItems.includes(block.interaction.replace('item_', ''))) {
                setBlockItem(x, y, block.interaction.replace('item_', ''), ITEM_TEXTURE_ATLAS[block.interaction], true);
            }
        }
    }
}

//  Ersetzt einen einzelnen Block an den gegebenen Koordinaten und rendert das spielfeld neu
function blockAuswechseln(x, y, material, solid, interactive) {
    spielfeld[x][y] = { x: x, y: y, material: material, solid: solid, interactive: interactive }

    spielfeldLeeren();
    zeigeSpielfeld();
}

//  Beispiel: setBlockItem(19, 7, 'keycard_bob', './img/keyCards/keycard_bob.png', true); 
function setBlockItem(x, y, itemName, itemTextureLocation, animate) {
    const block = spielfeld[x][y];
    block.interactive = true;
    block.interaction = `item_${itemName}`;
    $(`#${block.x}_${block.y}`).append(`<div id='${block.interaction}' style='background-image: url("${itemTextureLocation}"); height: 50px; scale: 0.7; rotate: 45deg; position: relative; top: 0px; filter: drop-shadow(0 0 6px black);'></div>`);
    if (animate != false) {
        document.getElementById(block.interaction).animate([
            {
                top: "-5px",
            },
            {
                top: "0px",
            },
            {
                top: "-5px",
            },
        ], { duration: 1000, easing: "ease-in-out", iterations: Infinity })
    }

}

//  Leert #spieldfeld in DOM; NICHT 'spielfeld' array
function spielfeldLeeren() {
    for (let y = 0; y < HOEHE; y++) {
        for (let x = 0; x < BREITE; x++) {
            document.getElementById(`${x}_${y}`)?.remove();
        }
    }
}

//  Läd level bei Namen
function ladeLevel(levelName) {
    if (!LEVEL.some(level => level.name === levelName)) throw new Error(`Level '${levelName}' existiert nicht!"`);

    //  disable movement
    if (movementIntervalID) clearInterval(movementIntervalID);
    movementIntervalID = null;

    currentLevel = levelName;
    spielfeldLeeren();
    ladeBlocksInArray(levelName);
    zeigeSpielfeld();

    //  Workaround: 1ms delay auf setStartingPosition(),
    //  da zeigeSpielfeld() anscheinend noch nicht fertig ist, während
    //  setStartingPosition() aufgerüfen wird
    setTimeout(setStartingPosition, 1);

    //  Enable movement
    movementIntervalID = setInterval(movePlayer, 150);
}

function starteEngine() {
    ladeLevel('foyer');
}

function shadowFolgtFigur() {
    posX = player.positionX * 50;
    posY = player.positionY * 50;
    
    if (currentLevel != 'kaffeeecke') {
        $("#sichteinschraenkung").hide();
    }
    else if (currentLevel == 'kaffeeecke') {
        console.log(currentLevel);
        $("#sichteinschraenkung").show();
    }

    $("#sichteinschraenkung").css("top",posY - 850);
    $("#sichteinschraenkung").css("left", posX - 1050);
}

$(document).ready(function () {
    starteEngine();
    shadowFolgtFigur();

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
    forceSetPosition(level.meta.start_x, level.meta.start_y);
}

function setPosition(x, y) {
    checkInteraktion(x, y);
    forceSetPosition(x, y);
}


function forceSetPosition(x, y) {
    if (x < player.positionX) $('#spielfigur').css('background-image', "url('./img/spielFigur/Christian Links.png')");
    if (x > player.positionX) $('#spielfigur').css('background-image', "url('./img/spielFigur/Christian Rechts.png')");

    player.positionX = x;
    player.positionY = y;
    x *= 50;
    y *= 50;
    $("#spielfigur").css("left", x).css("top", y);
}

$(document).on("keydown", (e) => {
    shadowFolgtFigur();
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

function itempPickupAnimation(elementID) {
    let elementHTML = document.getElementById(elementID)?.outerHTML;
    document.getElementById(elementID)?.remove();
    console.log(elementHTML)
    $('#spielfigur').append(elementHTML);
    $(`#${elementID}`).css('scale', 0.4).css('left', '18px').css('top', '10px');
    document.getElementById(elementID).animate([
        {
            scale: 0.4,
            top: "10px",
        },
        {
            top: "-10px",
            scale: 1.5,
            transform: "rotateY(180deg)"
        },
        {
            scale: 0.4,
            top: "10px",
            transform: "rotateY(0deg)"
        }
    ], { duration: 750 })
}

function checkInteraktion(x, y) {
    const block = spielfeld[x][y]
    if (!block.interactive) return false;
    switch (block.interaction.split('_')[0]) {
        case "teleport": // Door
            //  player keycard check
            console.log(`Door Interaktion @ x=${x}, y=${y}`);
            teleportDestionation = block.interaction.replace('teleport_', '');
            //  Keycard check
            if (block.keycard && !aufgesammelteItems.includes(block.keycard)) return true;
            else if (block.keycard && aufgesammelteItems.includes(block.keycard)) {

                inventory.splice(inventory.indexOf(block.keycard), 1);
                document.getElementById(`item_${block.keycard}`)?.remove();

            }



            console.log(`Lade Level '${teleportDestionation}'`);

            ladeLevel(teleportDestionation);
            return true;
            break;

        case "item": // item
            const item = block.interaction.replace('item_', '');
            if (aufgesammelteItems.includes(item)) return true;
            itempPickupAnimation(block.interaction);
            console.log(item);
            addToInventory(item);
            aufgesammelteItems.push(item);
            blockAuswechseln(block.x, block.y, LEVEL.find(l => l.name === currentLevel).meta.default_material, false, false);
            spielfeld[block.x][block.y] = { x: block.x, y: block.y, material: LEVEL.find(l => l.name === currentLevel).meta.default_material, solid: false, interactive: false };
            break;

        case "game":
            if (block.interaction == "game_server") {
                //  Start server game
                console.log("server mini game...")
            }
            break;

        case "coffee":
            console.log("coffee interaction")
            if (movementIntervalID) clearInterval(movementIntervalID)
            movementIntervalID = null;

            setTimeout(() => forceSetPosition(1, 12), 20);

            document.getElementById(`${x}_${y}`).animate([
                {
                    scale: 1.0
                },
                {
                    scale: 1.2
                },
                {
                    scale: 1.0
                },
            ], { duration: 500, iterations: 5 })

            break;
    }
}



// setInterval(function () {

//     // Überprüfen ob die DIVs des Items und des Spielers sich überlappen
//     if (checkOverlap([player.x, player.y], [item.x, item.y]) == true) {
//         // Item wird aufgesammelt
//         $("#item").hide();
//         addItemInv(item.name, player.inventory)
//         item.x = 0;
//         item.y = 0;
//         showMessage(item.name);
//     }


//     if (checkOverlap([tuer_pos.x, tuer_pos.y], [player.x, player.y]) == true && player.inventory.includes(item.name) == true) {
//         // Tür wird geöffnet
//         console.log("Tür öffnet")
//         tuer_pos.x = 0;
//         tuer_pos.x = 0;
//         $("#tuer").hide();
//         removeItemInv(item.name, player.inventory)
//     }
// }, 33);
