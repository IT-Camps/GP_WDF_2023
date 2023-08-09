let blocks;
const HEIGHT = 15;
const WIDTH = 20;

function ladeBlocksInArray(levelName) {
    let levelblocks = [];
    const level = LEVEL.find(l => l.name == levelName);
    for (let x = 0; x < WIDTH; x++) {
        levelblocks[x]= [];
        for (let y = 0; y < HEIGHT; y++) {
            levelblocks[x][y] = level.data.find(block => block.x == x && block.y == y) || {x: x, y: y, material: 'floor', solid: false};
        }
    }

    // Alternative:

    // for(let y = 1; y <= height; y++) {
	// 	spielfeld[y] = [];
	//  	for(let x = 1; x <= width; x++) {
	// 		spielfeld[y][x] = erzeugeFeld(y, x, 'floor', false, false);
	// 	}
	// }

    return levelblocks;
}

function zeigeSpielfeld(spielfeld) {
    console.log(spielfeld)
	for(let y = 0; y < HEIGHT; y++) {
		for(let x = 0; x < WIDTH; x++) {
            //console.log(spielfeld[x][y]);
			$('#spielfeld').append('<div class="' + spielfeld[x][y].material +  '" id="' + spielfeld[x][y].x + '/' + spielfeld[x][y].y + '">');
		}
}}
function starteEngine() {
    console.log("Starte engine...");
    console.log(`Geladene level: ${LEVEL.map(l => l.name).join(', ')}`);

    blocks = ladeBlocksInArray("demoLevel");
    zeigeSpielfeld(blocks);
}