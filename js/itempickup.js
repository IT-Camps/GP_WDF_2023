let player = document.getElementById("player");
let item = document.getElementById("item");

let player_pos = {
    x : 800,
    y : 800
}

let item_pos = {
    x : 400,
    y : 400
}

function setStartPosition() {
    setPlayerOnPosition("800px", "800px");
    setItemOnPosition("400px", "400px")
}

function setItemOnPosition(x,y) {
    $('#item')
    .css('margin-top', x)
    .css('margin-left', y);
}

function setPlayerOnPosition(x,y) {
    $('#player')
    .css('margin-top', x)
    .css('margin-left', y);
}

function movePlayer(event){
    if(player_pos.x > 10 && player_pos.y > 10) {
        switch(event.code) {
            case "KeyW": //Wasted Taste
                player_pos.x -=10
                break;
            
            case "KeyS": //Slow Taste
                player_pos.x +=10
                break;

            case "KeyA": //Accurate Taste
                player_pos.y -=10
                break;

            case "KeyD": //Drum Taste
                player_pos.y +=10
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

$(document).ready(function() {
    
    setStartPosition();

    setInterval( function(){
    
        //Get the height and position of the player
        let charTop = parseInt(player_pos.x);
        let charHeight = parseInt(player_pos.y);
        console.log(charTop, charHeight)
        //and the top of the item
        let itemTop = parseInt(item_pos.x);
        let itemHeight = parseInt(item_pos.y);
        console.log(itemTop)

        if (itemHeight == charHeight && charTop == itemTop || itemHeight == charHeight || itemHeight == charHeight) {
            // Treffen der DIVs
            
            console.log("Treffer")
        }
    
        
    },33);

    $(document).keydown(function(event){
        movePlayer(event);
    });
})
   
