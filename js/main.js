var tNum = 2;

$(document).ready(function(){
    $("#add-button").click(function(){
        if(tNum <= 3) {
            $("#center-me").prepend(function(){
                return '<div id="game' + tNum + '" class="box-timer" "game-timer"><div id="' + tNum + '" class="clock-face">00:00</div><button id="' + tNum + '" class="start-button clock-button"></button><button id="' + tNum + '" class="stop-button clock-button"></button><button id="' + tNum + '" class="rem-button clock-button"></button></div>';
            });
            tNum++;
        }else if(tNum == 4){
            $("#center-me").prepend(function(){
                return '<div id="game' + tNum + '" class="box-timer" "game-timer"><div id="' + tNum + '" class="clock-face">00:00</div><button id="' + tNum + '" class="start-button clock-button"></button><button id="' + tNum + '" class="stop-button clock-button"></button><button id="' + tNum + '" class="rem-button clock-button"></button></div>';
            });
            $("#add-button").hide();
        }
    });
});