$(document).ready(function(){
    
    //Add a new timer
    $("#add-button").click(function(){
        $("#center-me").prepend(function(){
                return '<div id="game' + tNum + '" class="box-timer" "game-timer"><div id="' + tNum + '" class="clock-face">00:00</div><button id="' + tNum + '" class="start-button clock-button"></button><button id="' + tNum + '" class="stop-button clock-button"></button><button id="' + tNum + '" class="rem-button clock-button"></button></div>';
        });
        if(tNum <= 3) {
            tNum++;
        }else if(tNum == 4){
            $("#add-button").hide();
        }

    });
    
    /* adjust timer(s) size on browser window resize
    $(window).resize(function(){                
        vportSet();
    });
    */
});