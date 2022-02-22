var timer;
var timeLeft = 60;

var timeLeftEl = document.querySelector(".time-left");

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        timeLeftEl.textContext = timeLeft;

        // if (timeLeft < 0) {
        //     loseGame();
        // }
    }, 1000);
}

startTimer();