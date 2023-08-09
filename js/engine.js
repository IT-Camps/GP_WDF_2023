let levelblocks = [ ];
function ladeBlocksInArray(levelName) {

    const level = LEVEL.find(l => l.name == levelName);
    for (let x = 0; x < 20; x++) {
        levelblocks[x]= [];
        for (let y = 0; y < 15; y++) {
            levelblocks[x][y] = level.data.find(block => block.x == x && block.y == y) || {x: x, y: y, material: 'floor', solid: false};
        }
    }
    console.log(levelblocks);
}



function zeichneSpielbrett() {

}

function starteEngine() {
    console.log("Starte engine...");
    console.log(`Geladene level: ${LEVEL.map(l => l.name).join(', ')}`);

    ladeBlocksInArray("demoLevel");
}