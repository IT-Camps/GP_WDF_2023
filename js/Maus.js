$(document).ready(function(){
    alert ('verfolge die Geschäftsanfragen um Punkte zu sammeln solange die Zeit läuft,aber Achtung manche sind vom falschem anbieter!')
    MausfolgtZeiger();
    var timeleft = 60;
    var downloadTimer = setInterval(function(){
    timeleft--;
    if(timeleft >= 0){
        console.log('IF-Statement');
        document.getElementById("seconds").textContent = timeleft + "s";
    }else{
        console.log('Else-Statement');
        document.getElementById("seconds").textContent = 0 + "s";
    }
   
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        console.log(timeleft);
        timeleft = 0;
    }
        
        if(timeleft == 0){ //Checke wenn Scoreboard == 0 -> dann verstecke Logo
            versteckeSapLogo(); 
            versteckeOracleLogo();
            versteckeSalesforceLogo();
            versteckeAppleLogo();

           
            
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
            if (timeleft != 0) {                //Prüfe bevor Score hochzählt ob Zeit > 0 ist
                platziereSAPlogo();
                platziereOracleLogo();
                platziereSalesForceLogo();
                platziereAppleLogo();
                Scoregehthoch();
                christianFreutSich();
            }else{
                versteckeSapLogo();
                versteckeOracleLogo();
                versteckeSalesforceLogo();
                versteckeAppleLogo();
            }
        });
        $("#oracle-logo").click(function(){
            if (timeleft != 0) {                     //Prüfe bevor Score hochzählt ob Zeit > 0 ist
                platziereSAPlogo();
                platziereOracleLogo();
                platziereSalesForceLogo();
                platziereAppleLogo();
                Scoregehtrunter();

            }else{
                versteckeSapLogo();
                versteckeOracleLogo();
                versteckeSalesforceLogo();
                platziereAppleLogo();
                versteckeAppleLogo();
            }
        });
        $("#salesforce-logo").click(function(){
            if (timeleft != 0) {                     //Prüfe bevor Score hochzählt ob Zeit > 0 ist
                platziereSAPlogo();
                platziereOracleLogo();
                platziereSalesForceLogo();
                platziereAppleLogo();
                Scoregehtrunter();
                console.log(SalesForceClicked);
            }else{
                versteckeSapLogo();
                versteckeOracleLogo();
                versteckeSalesforceLogo();
                versteckeAppleLogo();
            }
        });
        $("#apple-logo").click(function(){
            if (timeleft != 0) {                        //Prüfe bevor Score hochzählt ob Zeit > 0 ist
                platziereSAPlogo();
                platziereOracleLogo();
                platziereSalesForceLogo();
                platziereAppleLogo();
                Scoregehthoch();
                christianFreutSich();
                console.log(appleClicked);
            }else{
                versteckeSapLogo();
                versteckeOracleLogo();
                versteckeSalesforceLogo();
                versteckeAppleLogo();
                
            }
        });

    function platziereSAPlogo()                         // Logos werden zufällig platziert
    {
        console.log($("#hintergrundbild"));
        console.log($("#hintergrundbild")[0].offsetLeft);
        let x = Math.floor(Math.random()*700)+$("#hintergrundbild")[0].offsetTop;
        let y = Math.floor(Math.random()*950)+$("#hintergrundbild")[0].offsetLeft;

        $("#SAP-logo").css("top", x);
        $("#SAP-logo").css("left", y);
    } 
    function platziereOracleLogo()                         
    {
        let x = Math.floor(Math.random()*700)+$("#hintergrundbild")[0].offsetTop;
        let y = Math.floor(Math.random()*950)+$("#hintergrundbild")[0].offsetLeft;

        $("#oracle-logo").css("top", x);
        $("#oracle-logo").css("left", y);
    }
    function platziereSalesForceLogo()                        
    {
        let x = Math.floor(Math.random()*700)+$("#hintergrundbild")[0].offsetTop;
        let y = Math.floor(Math.random()*950)+$("#hintergrundbild")[0].offsetLeft;

        $("#salesforce-logo").css("top", x);
        $("#salesforce-logo").css("left", y);
    }
    function platziereAppleLogo()                        
    {
        let x = Math.floor(Math.random()*700)+$("#hintergrundbild")[0].offsetTop;
        let y = Math.floor(Math.random()*950)+$("#hintergrundbild")[0].offsetLeft;

        $("#apple-logo").css("top", x);
        $("#apple-logo").css("left", y);
    }

    function versteckeSapLogo(){      //verstecken der verschiedenen Logos
        $("#SAP-logo").hide()                            
    }                                       
    function versteckeOracleLogo(){
        $("#oracle-logo").hide();
    }
    function versteckeSalesforceLogo(){
        $("#salesforce-logo").hide();
    }
    function versteckeAppleLogo(){
        $("#apple-logo").hide();
    }

    
    
    
   function MausfolgtZeiger()
    {
        
      $(document).mousemove(function(e)   {
        $("#Geschäftsmann").css("top" , e.pageY+5);
        $("#Geschäftsmann").css("left" , e.pageX+5);
         });

    }

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
        window.open("ende.html");
        versteckeAppleLogo();
        versteckeOracleLogo();
        versteckeSalesforceLogo();
        versteckeSapLogo();
        timeleft = 0;
        a = 0;
        
    }else if ( a == 0){
        window.open("ende.html");
        versteckeAppleLogo();
        versteckeOracleLogo();
        versteckeSalesforceLogo();
        versteckeSapLogo();
        timeleft = 0;
        a = 0;
        
    }
}
});


