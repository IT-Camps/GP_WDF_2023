$(document).ready(function(){
    alert ('verfolge die Geschäftsanfragen um Punkte zu sammmeln solange die Zeit läuft!')
    let days = 0;
    let hours = 0;
    let minutes = 1;
    let seconds = 0; 

    let totalSeconds =
    days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;


    let tempSeconds = totalSeconds;

    const convert = (value, inSeconds) => {
    if (value > inSeconds) {
        let x = value % inSeconds;
        tempSeconds = x;
        return (value - x) / inSeconds;
    } else {
        return 0;
    }
    };

    const setSeconds = (s) => {
    document.querySelector("#seconds").textContent = s + "s";
    };

    const setMinutes = (m) => {
    document.querySelector("#minutes").textContent = m + "m";
    };

    const setHours = (h) => {
    document.querySelector("#hours").textContent = h + "h";
    };

    const setDays = (d) => {
    document.querySelector("#days").textContent = d + "d";
    };

    var x = setInterval(() => {
    if (totalSeconds <= 0) {
        clearInterval(x);
    }
    setDays(convert(tempSeconds, 24 * 60 * 60));
    setHours(convert(tempSeconds, 60 * 60));
    setMinutes(convert(tempSeconds, 60));
    setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
    totalSeconds--;
    tempSeconds = totalSeconds;
    }, 1000);

    var a = 0
    /*
    $("#SAP-logo").click(function(){
       if (minutes ==0 && seconds == 0) {
        
       }    
       else {
        platziereKaese();
        Scoregehthoch();
       }
    });
    */
    //Schöne Code
        //Test
        $("#SAP-logo").click(function(){
            console.log(minutes);
            console.log(seconds);
            if (minutes != 0 && seconds != 0) {
                console.log("clicked");
                platziereKaese();
                Scoregehthoch();
            }else{
                console.log("else");
            }
        });


    function platziereKaese()
    {
        let x = Math.floor(Math.random()*1000);
        let y = Math.floor(Math.random()*1000);

        $("#SAP-logo").css("top", x);
        $("#SAP-logo").css("left", y);

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


