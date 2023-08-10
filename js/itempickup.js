$(document).ready(function() {
    $("#message").hide();
    let player = document.getElementById("player");
    let item = document.getElementById("item");
    let tür = document.getElementById("tuer");
    var inventory = [];
    let message =  document.getElementById("message");

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

    let tuer_pos = {
        x : 600,
        y : 600

    }

    let message_pos = {
        x : 50,
        y : 50,
        name: Keycard

    }


    function setStartPosition() {
        setPlayerOnPosition("800px", "800px");
        setItemOnPosition("400px", "400px");
        setTuerOnPosition("600px", "600px");
        setMessageOnPosition("50px", "50px");
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

    function setTuerOnPosition(x,y) {
        $('#tuer')
        .css('margin-top', x )
        .css('margin-left', y );
    }

    function setMessageOnPosition(x,y) {
        $('#message')
        .css('margin-top', x )
        .css('margin-left', y );
    }

    function message(input) {
        $('#message_content').text(input + "wurde aufgesammelt");
        $("#message").show();
            
           
    }
    
    function checkOverlap(player, item) {
        // Check if the x coordinates overlap
        if (player.x + 50 > item.x && player.x < item.x + 50) {
        // Check if the y coordinates overlap
        if (player.y + 50 > item.y && player.y < item.y + 50) {
            // The player and the item overlap
            return true;
        }
        }
        // The player and the item do not overlap
        return false;
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
        // setPlayerOnPosition(player_pos.x, player_pos.y);
            console.log("Set Start");
        // setStartPosition();
        }
            
        }
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
        
            if (checkOverlap(player_pos, item_pos) == true) {
                // Treffen der DIVs

            $("#item").hide();  //item sollte aufgesammelt werden wenn man drüber geht
            item_pos.x = 0;
            item_pos.y = 0;
            message(item_pos.name);
            
            
            }
            if(checkOverlap(tuer_pos, player_pos) == true && item_pos.x == 0){
                console.log("Tür öffnet")
                tuer_pos.x = 0;
                tuer_pos.x = 0;
            }
        },33);
        $(document).keydown(function(event){
            movePlayer(event);
        });

    });


       
    
