window.onload = function() {
    let countdown = document.getElementById("timer"),
        target_date = new Date().getTime() + (3*3600*1000 + 38*60*1000 + 12*1000),
        hours, minutes, seconds;
 
    function getCountdown(){
        let current_date = new Date().getTime(),
            seconds_left = (target_date - current_date) / 1000;
            
        hours = pad(parseInt(seconds_left / 3600));
        seconds_left = seconds_left % 3600;
            
        minutes = pad(parseInt(seconds_left / 60));
        seconds = pad(parseInt(seconds_left % 60));
    
        countdown.innerHTML = hours + ':' + minutes + ':' + seconds; 
    }
    
    function pad(n) {
        return (n < 10 ? '0' : '') + n;
    }

    setInterval(function () { 
        getCountdown(); 
    }, 1000);
}