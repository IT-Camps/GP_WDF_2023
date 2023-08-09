$(document).ready(function(){
    //alert ('verfolge die Geschäftsanfragen um Punkte zu sammeln solange die Zeit läuft!')

    var timeleft = 60;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("seconds").textContent = timeleft + "s";
    if(timeleft <= 0)
        clearInterval(downloadTimer);
        console.log(timeleft);
        if(timeleft == 0){ //Checke wenn Scoreboard == 0 -> dann verstecke Logo
            versteckeSapLogo(); 
        }
    },1000);
    

    var a = 0 //Variable für Score
        $("#SAP-logo").click(function(){
            if (timeleft != 0) { //Prüfe bevor Score hochzählt ob Zeit > 0 ist
                platziereKaese();
                Scoregehthoch();
            }else{
                versteckeSapLogo();
            }
        });


    function platziereKaese()
    {
        let x = Math.floor(Math.random()*1000);
        let y = Math.floor(Math.random()*1000);

        $("#SAP-logo").css("top", x);
        $("#SAP-logo").css("left", y);

    }

    function versteckeSapLogo(){
        $("#SAP-logo").hide();
    }

    
    
    
   function MausfolgtZeiger()
    {
        
      $(document).mousemove(function(e)   {
        $("#Geschäftsmann").css("top" , e.pageY+5);
        $("#Geschäftsmann").css("left" , e.pageX+5);
         });



    }
    $(document).ready(function(){
        MausfolgtZeiger();
    })

    function Scoregehthoch()
    {
        a++;
        $("#score").text("Score: "+a);
        }

    
});


