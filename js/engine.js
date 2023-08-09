function zeichneSpielbrett(levelName) {
    //  Spielbrett team implentiert logik hier
}

function starteEngine() {
    console.log("Starte engine...");
    console.log(`Geladene level: ${LEVEL.map(l => l.name).join(', ')}`);

    zeichneSpielbrett("demoLevel");
}