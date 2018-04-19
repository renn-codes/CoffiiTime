//tracks timers currently created

var tNum = 1;

//screen dimensions

var vportX = null;
var vportY = null;

// Convert milliseconds to format [ minutes : seconds ]
// Code from StackOverflow users 'maerics' and 'Michael Simonitsch'

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

//pre-initialize our timers, because bad code practive is my favourite kind

var coffiiCup1 = new Timer({
//  onstop  : add code later because lazy
    tick    : 1,
    ontick  : function(ms) {
        console.log(ms + ' milliseconds left');
        var div = document.getElementById('1');
        div.innerHTML = millisToMinutesAndSeconds(ms).toString();
    }
});

var coffiiCup2 = new Timer({
//  onstop  : add code later because lazy
    tick    : 1,
    ontick  : function(ms) {
        console.log(ms + ' ms timer(2) started');
        var div = document.getElementById('2');
        div.innerHTML = millisToMinutesAndSeconds(ms).toString();
    }
});
var coffiiCup3 = new Timer({
//  onstop  : add code later because lazy
    tick    : 1,
    ontick  : function(ms) {
        console.log(ms + ' ms timer(3) started');
        var div = document.getElementById('3');
        div.innerHTML = millisToMinutesAndSeconds(ms).toString();
    }
});
var coffiiCup4 = new Timer({
//  onstop  : add code later because lazy
    tick    : 1,
    ontick  : function(ms) {
        console.log(ms + ' mms timer(4) started');
        var div = document.getElementById('4');
        div.innerHTML = millisToMinutesAndSeconds(ms).toString();
    }
});