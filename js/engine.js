let blocks;
const HEIGHT = 15;
const WIDTH = 20;

function ladeBlocksInArray(levelName) {
    let levelblocks = [];
    const level = LEVEL.find(l => l.name == levelName);
    for (let x = 0; x < WIDTH; x++) {
        levelblocks[x]= [];
        for (let y = 0; y < HEIGHT; y++) {
            levelblocks[x][y] = level.data.find(block => block.x == x && block.y == y) || {x: x, y: y, material: 'floor', solid: false, interactive: false};
        }
    }

    // Alternative:

    // 

    return levelblocks;
}

function zeigeSpielfeld(spielfeld) {
    //console.log(spielfeld)
	for(let x = 0; x < WIDTH; x++) {
		for(let y = 0; y < HEIGHT; y++) {
            //console.log(spielfeld[x][y]);
			$('#spielfeld').append('<div class="' + spielfeld[x][y].material +  '" id="' + spielfeld[x][y].x + '/' + spielfeld[x][y].y + '">');
		}
}}

function blockAuswechseln(spielfeld, x, y, material, solid, interactive) {
    delete spielfeld[y][x];
    console.log(spielfeld);
    spielfeld[y][x] = {x: x, y: y, material: material, solid: solid, interactive: interactive}

    return spielfeld
}

function spielfeldLeeren() {
    let current;
    for(let y = 0; y < HEIGHT; y++) {
     	spielfeld[y] = [];
     	for(let x = 0; x < WIDTH; x++) {
            current = document.getElementById(x + '/' + y);
            current.remove();
     	}
    }
}

function starteEngine() {
    console.log("Starte engine...");
    console.log(`Geladene level: ${LEVEL.map(l => l.name).join(', ')}`);

    let levelblocks = ladeBlocksInArray("demoLevel");
    zeigeSpielfeld(levelblocks);
    spielfeldLeeren();
    levelblocks = blockAuswechseln(levelblocks, 0, 0, 'server', true, true);
    zeigeSpielfeld(levelblocks);

}
