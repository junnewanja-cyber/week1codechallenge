function speedDetector (speed){
    if (speed < 70){
        console.log ("ok");
    } else {

        let demeritsPoints = Math.floor((speed - 70 ) /5);
        if (demeritsPoints < 12) {

        }else {
                console.log(`points:${demeritPoints}`);

        }
    }
}