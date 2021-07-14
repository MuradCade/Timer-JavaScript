var second = 00;
var tens = 00;

var appendTens = document.getElementById('tens');
var appendSecond = document.getElementById("seconds");


var buttonStart = document.getElementById("start");
var buttonStop = document.getElementById("stop");
var buttonreset = document.getElementById("reset");

var interval;  // to store timer value

// this function will run when click on start

function startTimer(){
    tens++;
    if(tens<9){
        appendTens.innerHTML = "0" + tens;

    }

    if(tens>9){
        appendTens.innerHTML = tens;
    }

    if(tens>99){
         second++;
         appendSecond.innerHTML = "0" + second;
         tens = 0;
         appendTens.innerHTML = "0" + 0;
    }
    if(second > 9){
        appendSecond.innerHTML = second;
    }
}

buttonStart.onclick = function(){
    interval = setInterval(startTimer);
};


buttonStop.onclick = function(){
    clearInterval(interval);
};

buttonreset.onclick = function(){
    clearInterval(interval);
    tens = "00";
    second = "00";
    appendSecond.innerHTML = second;
    appendTens.innerHTML = tens;
}