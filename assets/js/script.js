var quizArray = [
    {
        "question1" : "Commonly used data types DO NOT include",
        "answers" : ["numbers","string", "boolean", "alert"]
    },
    {
        "question2" : "How to write and IF statement in JavaScript",
        "answers" : ["if i = 0 then", "if(i == 0)", "if i = 0", "if i == 0 then"]

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
var currentQuestion = $("#question")
var rightAnswer = 0;

function ques1() {
    a1.text(quizArray[0].answers[0])
    a2.text(quizArray[0].answers[1])
    a3.text(quizArray[0].answers[2])
    a4.text(quizArray[0].answers[3])
    currentQuestion.text(quizArray[0].question1)
    rightAnswer = 4;
}
function ques2() {
    a1.text(quizArray[1].answers[0])
    a2.text(quizArray[1].answers[1])
    a3.text(quizArray[1].answers[2])
    a4.text(quizArray[1].answers[3])
    currentQuestion.text(quizArray[1].question2)
    rightAnswer = 2;
}
function ques3() {
    a1.text(quizArray[2].answers[0])
    a2.text(quizArray[2].answers[1])
    a3.text(quizArray[2].answers[2])
    a4.text(quizArray[2].answers[3])
    currentQuestion.text(quizArray[2].question3)
    rightAnswer = 3;
}
function ques4() {
    a1.text(quizArray[3].answers[0])
    a2.text(quizArray[3].answers[1])
    a3.text(quizArray[3].answers[2])
    a4.text(quizArray[3].answers[3])
    currentQuestion.text(quizArray[3].question4)
    rightAnswer = 3;
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
        console.log(timeLeft);
    }, 1000);
}

function nextQuestion() {
    if (currentQuestion == currentQuestion.text(quizArray[0].question1)) {
        ques2();
    }
    else if (currentQuestion == currentQuestion.text(quizArray[1].question2)) {
        ques3();
    }
    else {
        ques4();
    }
}



$("#a1").click(function() {
    if (rightAnswer == 1) {
        timeLeft += 10;
        nextQuestion();
    }
    else {
        timeLeft -= 10;
    }
});

$("#a2").click(function() {
    if (rightAnswer == 2) {
        timeLeft += 10;
        nextQuestion();
    }
    else {
        timeLeft -= 10;
    }
});

$("#a3").click(function() {
    if (rightAnswer == 3) {
        timeLeft += 10;
        nextQuestion();
    }
    else {
        timeLeft -= 10;
    }
});

$("#a4").click(function() {
    if (rightAnswer == 4) {
        timeLeft += 10;
        nextQuestion();
    }
    else {
        timeLeft -= 10;
    }
});

function run() {
    startTimer();
    ques1();
}
run();