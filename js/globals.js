//tracks timers currently created
var tNum = 1;

//screen dimensions
var vportX = null;
var vportY = null;

//pre-initialize our timers, because bad code practive is my favourite kind
var coffiiCup1 = new Timer({
//  onstop  : add code later because lazy
    tick    : 1,
    ontick  : function(ms) {
        console.log(ms + ' milliseconds left');
        var sec = ms.toString().slice(0, -3);
        if(ms.toString().length <= 5) {
            var min = "00";
        }
        var div = document.getElementById('1');
        div.innerHTML = min + ':' + sec;
    }
});
var coffiiCup2 = new Timer({
//  onstop  : add code later because lazy
    tick    : 1,
    ontick  : function(ms) { console.log(ms + ' milliseconds left') }
});
var coffiiCup3 = new Timer({
//  onstop  : add code later because lazy
    tick    : 1,
    ontick  : function(ms) { console.log(ms + ' milliseconds left') }
});
var coffiiCup4 = new Timer({
//  onstop  : add code later because lazy
    tick    : 1,
    ontick  : function(ms) { console.log(ms + ' milliseconds left') }
});