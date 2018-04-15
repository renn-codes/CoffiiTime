$(document).ready(function(){
    
    //Add a new timer
    $("#add-button").click(function(){
        $("#center-me").prepend(function(){
                return '<div id="game' + tNum + '" class="box-timer" "game-timer"><div id="' + tNum + '" class="clock-face">00:00</div><button id="' + tNum + '" class="start-button clock-button">Start</button><button id="' + tNum + '" class="stop-button clock-button">Stop/Pause</button><button id="' + tNum + '" class="rem-button clock-button">Close Me</button></div>';
        });
        if(tNum <= 3) {
            tNum++;
        }else if(tNum == 4){
            $("#add-button").hide();
        }

    });
    
    $(".start-button").click(function(){
        switch(tNum) {
            case 1:
                coffiiCup1.start(40);
                break;
            case 2:
                coffiiCup2.start(40);
                break;
            case 3:
                coffiiCup3.start(40);
                break;
            case 4:
                coffiiCup4.start(40);
                break;
        }
    });
    $(".stop-button").click(function(){
        switch(tNum) {
            case 1:
                coffiiCup1.pause();
                break;
            case 2:
                coffiiCup2.pause();
                break;
            case 3:
                coffiiCup3.pause();
                break;
            case 4:
                coffiiCup4.pause();
                break;
        }
    });
    /* adjust timer(s) size on browser window resize
    $(window).resize(function(){                
        vportSet();
    });
    */
});