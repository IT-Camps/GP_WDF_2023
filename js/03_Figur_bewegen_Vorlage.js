let player = {
    marginLeft: 0,
    marginTop: 0
}

function setStartingPosition(x, y) {
    player.marginLeft= x;
    player.marginTop=  y;
    $(".spielfigur").css("left",x).css("top", y);
};

function setPosition(x, y) {
    $(".spielfigur").css("left",x).css("top", y);
};

setTimeout(function() {
    player.marginTop +45;
}, 1000);

$(document).ready(function(){
    setStartingPosition(500,500);
    $(document).keydown(function(event){
        console.log(event.code);
        switch (event.code) {
            
        case "ArrowUp":
        case "KeyW": //W Knopf gedrückt
            player.marginTop -=10;
            console.log("top");
            break;
        case "ArrowLeft": 
        case "KeyA": //A Knopf gedrückt
            player.marginLeft -=10;
            console.log("left");
            break;
        case "ArrowDown":    
        case "KeyS":
            player.marginTop +=10;
            console.log("Down");
            break;
        case "ArrowRight": 
        case "KeyD":
            player.marginLeft +=10;
            console.log("right");
            break;
        case "Space":
            player.marginTop -=20;
            console.log("jump");
        //case "Space":
            //setTimeout();
        }
    setPosition(player.marginLeft,player.marginTop)
    });
});	
