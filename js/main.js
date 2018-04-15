function vportSet() {
    //Get the screen resolution
    vportX = screen.width;
    vportY = screen.height;
    console.log("Width : " + vportX + ", Height: " + vportY);
    
    //will add screen resolution adjust code later...
}

function makeCoffii() {
    //Set our screen resolution for adjustment later
    vportSet();
    //increment tNum by one so we only have 4 total timers not 5
    tNum++;
}