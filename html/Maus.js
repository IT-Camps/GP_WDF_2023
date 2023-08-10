$(document).ready(function(){
    alert ('verfolge die Geschäftsanfragen um Punkte zu sammeln solange die Zeit läuft,aber Achtung manche sind vom falschem anbieter!')

    var timeleft = 60;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("seconds").textContent = timeleft + "s";
    if(timeleft <= 0)
        clearInterval(downloadTimer);
        console.log(timeleft);
        if(timeleft == 0){ //Checke wenn Scoreboard == 0 -> dann verstecke Logo
            versteckeSapLogo(); 
            versteckeOracleLogo();
            versteckeSalesforceLogo();

           
            
            if (a< 10){                             //alört um die Punkte anzugeben
            alert ('Die Zeit is um! Deine punkte sind: '+a+' Versuchs nochmal!');
            }
            else if (a <20) {
                alert ('Die Zeit is um! Deine punkte sind: '+a+' Du wirst besser!');
            }
            else if (a <30) {
                alert ('Die Zeit is um! Deine punkte sind: '+a+' Unglaublich!');
            }
            else if (a <40) {
                alert ('Die Zeit is um! Deine punkte sind: '+a+' Super! Aber schaffst du die 50?');
            }
            else if (a <50) {
                alert ('Die Zeit is um! Deine punkte sind: '+a+' Echt schnell, WOW!');
            }
            else if (a <60){
                alert ('Die Zeit is um! Deine punkte sind: '+a+' Hast du schon überlegt proffesionell Videospiele zu spielen?');
            }
            else if (a <70) {
                alert ('Die Zeit is um! Deine punkte sind: '+a+' Du hast mehr als 1 klick pro sekunde, WOW!');
            }
            else if (a >70) {
                alert ('Die Zeit is um! Deine punkte sind: '+a+' Cheatest du?');
            }


        }
    },1000);
    

    var a = 0 //Variable für Score
        $("#SAP-logo").click(function(){
            if (timeleft != 0) { //Prüfe bevor Score hochzählt ob Zeit > 0 ist
                platziereSAPlogo();
                platziereOracleLogo();
                platziereSalesForceLogo();
                Scoregehthoch();
            }else{
                versteckeSapLogo();
                versteckeOracleLogo();
                versteckeSalesforceLogo();
            }
        });
        $("#oracle-logo").click(function(){
            if (timeleft != 0) { //Prüfe bevor Score hochzählt ob Zeit > 0 ist
                platziereSAPlogo();
                platziereOracleLogo();
                platziereSalesForceLogo();
                Scoregehtrunter();
            }else{
                versteckeSapLogo();
                versteckeOracleLogo();
                versteckeSalesforceLogo();
            }
        });
        $("#salesforce-logo").click(function(){
            if (timeleft != 0) { //Prüfe bevor Score hochzählt ob Zeit > 0 ist
                platziereSAPlogo();
                platziereOracleLogo();
                platziereSalesForceLogo();
                Scoregehtrunter();
            }else{
                versteckeSapLogo();
                versteckeOracleLogo();
                versteckeSalesforceLogo();
            }
        });

    function platziereSAPlogo()                         // Logos werden zufällig platziert
    {
        let x = Math.floor(Math.random()*1000);
        let y = Math.floor(Math.random()*1000);

        $("#SAP-logo").css("top", x);
        $("#SAP-logo").css("left", y);
    } 
    function platziereOracleLogo()                         
    {
        let x = Math.floor(Math.random()*1000);
        let y = Math.floor(Math.random()*1000);

        $("#oracle-logo").css("top", x);
        $("#oracle-logo").css("left", y);
    }
    function platziereSalesForceLogo()                        
    {
        let x = Math.floor(Math.random()*1000);
        let y = Math.floor(Math.random()*1000);

        $("#salesforce-logo").css("top", x);
        $("#salesforce-logo").css("left", y);
    }

    function versteckeSapLogo(){
        $("#SAP-logo").hide();
                                        //verstecken der verschiedenen Logos
    }                                       
    function versteckeOracleLogo(){
        $("#oracle-logo").hide();
    }
    function versteckeSalesforceLogo(){
        $("#salesforce-logo").hide();
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

function Scoregehtrunter(){
        a--;
        $("#score").text("Score:" +a);
        checkScore();
    }
function checkScore(){
    if( a < 0){
        alert('OH NEIN! - verloren :( ')
    }else if ( a == 0){
        alert('OH NEIN! - verloren :( ')

    }
}
});


