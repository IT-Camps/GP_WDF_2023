//<div>
//$(document).getElementById("myDIV").style.boxShadow = "10px 20px 30px blue";
//</div>
/*function myFunction() {
    document.getElementById("#spielfigur").style.boxShadow = "30px 30px 30px 30px black"; //verbunden mit Spielfeld.css 
}*/

function shadowFolgtFigur() {
    $("sichteinschraenkung.png").css("top",+1125 );
    $("sichteinschraenkung.png").css("left",+875);
}
$(document).on('keydown', (function(){//hier wird auf keydown bezogern weil beoim bewegen der figur eine taste geklickt wird
    mausFolgtZeiger()
}));