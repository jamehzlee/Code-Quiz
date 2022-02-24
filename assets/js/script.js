var quizArray = [
    {
        "question1" : "Commonly used data types DO NOT include",
        "answers" : ["numbers","string", "boolean", "alert"]
    },
    {
        "question2" : "How to write and IF statement in JavaScript",
        "answers" : ["if i = 0 then", "if(i == 0)", "if i = 0", "if i == 0 then"],

    },  
    {
        "question3" : "Which event occurs when the user clicks on an HTML element",
        "answers" : ["onchange", "onmouseover", "onclick", "onmouseclick"]
    },
    {
        "question4" : "Which operator is used to set a variable",
        "answers" : ["==", "-", "=", "--"]
    }  
] 

var timeLeftEl = $("#time-left");
var timeLeft = 60;
var timer;

var a1 = $("#a1");
var a2 = $("#a2");
var a3 = $("#a3");
var a4 = $("#a4");

function firstQ() {
    a1.text(quizArray[0].answers[0])
    a2.text(quizArray[0].answers[1])
    a3.text(quizArray[0].answers[2])
    a4.text(quizArray[0].answers[3])

    
}



function startTimer() {
    timer = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            timeLeftEl.text(timeLeft);
        }
        else {
            timeLeftEl.text("You lose")
            clearInterval(timer);
        }
    }, 1000);
}

function userAnswer() {
    if (click() === quizArray[0].answers[3]) {
        timeLeft = 100;
    }
    else {
        if(timeLeft > 0){
            timeLeft -= 10;
        }
        else {
            // gameOver();
        }
        // wrong();
    }
}


function run() {
    startTimer();
    firstQ();
    userAnswer();
}
run();
// a2.click(userAnswer);

// a3.click(userAnswer);

// a4.click(userAnswer);
