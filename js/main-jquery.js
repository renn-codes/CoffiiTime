$(document).ready(function(){
    
    //Add a new timer
    $("#add-button").click(function(){
        $("#center-me").prepend(function(){
            tNum++;
            return '<div id="game' + tNum + '" class="box-timer" "game-timer"><div id="' + tNum + '" class="clock-face">00:00</div><button id="start' + tNum + '" class="start-button clock-button">Start</button><button id="stop' + tNum + '" class="stop-button clock-button">Stop/Pause</button><button id="close' + tNum + '" class="rem-button clock-button">Close Me</button></div>';
        }); 
        
        if(tNum <= 3) {
        }else if(tNum == 4){
            $("#add-button").hide();
        }

    });
    $("#start1").click(function(){
        coffiiCup1.start(150);
    });
    $("#start2").click(function(){
        coffiiCup2.start(150);
    });
    $("#start3").click(function(){
        coffiiCup3.start(150);
    });
    $("#start4").click(function(){
        coffiiCup4.start(150);
    });
    $("#stop1").click(function(){
        coffiiCup1.stop();
    });
    $("#stop2").click(function(){
        coffiiCup2.stop();
    });
    $("#stop3").click(function(){
        coffiiCup3.stop();
    });
    $("#stop4").click(function(){
        coffiiCup4.stop();
    });
    //var div = document.getElementById(this.);
    
    /* adjust timer(s) size on browser window resize
    $(window).resize(function(){                
        vportSet();
    });
    */
});