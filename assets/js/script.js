var timer;
var timeLeft = 60;

var a1 = $("#a1");
var a2 = $("#a2");
var a3 = $("#a3");
var a4 = $("#a4");
var question = false;


var timeLeftEl = $("#time-left");
// var highscore = document.getElementById("highscore").hidden;
// highscore.hidden = true;


function startTimer() {
    timer = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            timeLeftEl.text(timeLeft);
            console.log(timeLeft);
        }
        else {
            timeLeftEl.text("You lose")
            clearInterval(timer);
        }
    }, 1000);
}

function userAnswer() {
    if (question == true) {
        // correct();
        // nextQuestion();
    }
    else {
        if(timeLeft > 0){
            timeLeft -= 10;
            console.log(timeLeft);
        }
        else {
            gameOver();
        }
        // wrong();
    }
}
function viewHighScore() {
    
}

a1.click(userAnswer);
startTimer();