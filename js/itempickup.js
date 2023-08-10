let player = document.getElementById("player");
let item = document.getElementById("item");
let tür = document.getElementById("tür");
var inventory = [];
// Platzhalter für Position des Spielers
let player_pos = {
    x : 800,
    y : 800
}
// Platzhalter für Position des Items
let item_pos = {
    x : 400,
    y : 400

}

let tür_pos = {
    x : 400,
    y : 400

}


 function setStartPosition() {
    setPlayerOnPosition("800px", "800px");
    setItemOnPosition("400px", "400px");
    //setTürOnPosition("600px", "600px");
}


 function setItemOnPosition(x,y) {
    $('#item')
    .css('margin-top', x )
    .css('margin-left', y );
}

 function setPlayerOnPosition(x,y) {
    $('#player')
    .css('margin-top', x )
    .css('margin-left', y );


}

function seTürOnPosition(x,y) {
    $('#tür')
    .css('margin-top', x )
    .css('margin-left', y );


}



 function movePlayer(event){
    if(player_pos.x > 10 && player_pos.y > 10) {
        switch(event.code) {
            case "KeyW": //W Taste
                player_pos.x -=10
                break;
            
            case "KeyS": //S Taste
                player_pos.x +=10
                break;

            case "KeyA": //A Taste
                player_pos.y -=10
                break;

            case "KeyD": //D Taste
                player_pos.y +=10
                break;

            case "KeyE": //E Taste   (Inventar)
                player_pos.y +=10
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
        console.log(itemTop);
    
        if (itemHeight == charHeight && charTop == itemTop || itemHeight == charHeight || itemHeight == charHeight) {
            // Treffen der DIVs

           $("#item").hide();  //item sollte aufgesammelt werden wenn man drüber geht 
           
        }
            });
            
            
     if(itemHeight == türHeight && türTop == itemTop || itemHeight == türHeight || itemHeight == türHeight){
        console.log("Tür öffnet")
     }
        
    });//,33);

    $(document).keydown(function(event){
        movePlayer(event);
    });

       
    