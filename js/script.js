function zeigeSpielfeld() {
    for (let y = 0; y < HOEHE; y++) {
        for (let x = 0; x < BREITE; x++) {
            $("#spielfeld").append(`<div class="${spielfeld[x][y].material}" id="${x}/${y}"></div>`)
            //$('#spielfeld').append('<div class="' + spielfeld[x][y].material + '" id="' + x + '/' + y + '"></div>');
        }
    }
}

function blockAuswechseln(x, y, material, solid, interactive) {
    //  Warum?
    delete spielfeld[x][y];
    spielfeld[x][y] = { x: x, y: y, material: material, solid: solid, interactive: interactive }

    spielfeldLeeren();
    zeigeSpielfeld();

    //return spielfeld;
}

function spielfeldLeeren() {
    let current;
    for (let y = 0; y < HOEHE; y++) {
        for (let x = 0; x < BREITE; x++) {
            current = document.getElementById(x + '/' + y);
            current.remove();
        }
    }
}