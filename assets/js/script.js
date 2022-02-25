var quizArray = [
    {
        question : "Commonly used data types DO NOT include",
        a: "numbers",
        b: "string",
        c: "boolean",
        d:  "alert",
        answer : 4
    },
    {
        question : "How to write and IF statement in JavaScript",
        a: "if i = 0 then",
        b: "if(i == 0)",
        c: "if i = 0",
        d: "if i == 0 else",
        answer : 2

    },  
    {
        question : "Which event occurs when the user clicks on an HTML element",
        a: "onchange", 
        b: "onmouseover",
        c: "onclick", 
        d: "onmouseclick",
        answer : 3
    },
    {
        question : "Which operator is used to set a variable",
        a: "==",
        b: "-",
        c: "=",
        d: "--",
        answer : 3
    }  
] 

var timeLeftEl = $("#time-left");
var timeLeft = 60;
var timer;
var choiceEl = $("#choice");
var currentQuestionEl = $("#question")
var qNum = 0
var displayScoreEl = $("#display-score");
var highscoreListItemEl = $("#highscore-item");
var highscoreLinkEl = $("#highscore-link")

$("#a1").click(function() {
    var a1 = 1;
    if (a1 == rightAnswer) {
        timeLeft += 3;
        choiceEl.text("Correct!");
        qNum++;
        setQuestion();
    }
    else {
        timeLeft -= 10;
        choiceEl.text("Wrong!");
    }
});
$("#a2").click(function() {
    var a2 = 2;
    if (a2 == rightAnswer) {
        timeLeft += 3;
        choiceEl.text("Correct!");
        qNum++;
        setQuestion();
    }
    else {
        timeLeft -= 10;
        choiceEl.text("Wrong!");
    }
});
$("#a3").click(function() {
    var a3 = 3;
    if (a3 == rightAnswer) {
        timeLeft += 3;
        choiceEl.text("Correct!");
        qNum++;
        setQuestion();
    }
    else {
        timeLeft -= 10;
        choiceEl.text("Wrong!");
    }
});
$("#a4").click(function() {
    var a4 = 4
    if (a4 == rightAnswer) {
        timeLeft += 3;
        choiceEl.text("Correct!");
        qNum++;
        setQuestion();
    }
    else {
        timeLeft -= 10;
        choiceEl.text("Wrong!");
    }
});

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

function setQuestion() {
    if (qNum < 4) {   
        currentQuestionEl.text(quizArray[qNum].question);
        rightAnswer = quizArray[qNum].answer;
        $("#a1").text(quizArray[qNum].a)
        $("#a2").text(quizArray[qNum].b)
        $("#a3").text(quizArray[qNum].c)
        $("#a4").text(quizArray[qNum].d)
    }
    else {
        winGame();
    }
}

function finalScore() {
    displayScoreEl.text("Your final score is " + timeLeft + "!");
}

function writeName() {
    $("div:visible").hide();
    $("#time-left:hidden").show();
    $("#done:hidden").show();
    finalScore();
    $("#name-form:hidden").show();
}
function submitName() {
    var winner = $("#enter-name");
    highscoreListItemEl.append($("<li>").text(winner));
}

$("#highscore-link").click(function() {
    printLeaderboard();
    submitName();
})
$("#go-back").click(function() {
    reset();
    run();
})
function printLeaderboard() {
    $("div:visible").hide();
    $("#time-left:hidden").show(); 
    $("#highscore:hidden").show();
}

function winGame() {
    clearInterval(timer);
    writeName();
}

function enterName() {
    $("#highscore-item").append("<li>");
}

function reset() {
    $("div:visible").hide();
    $("#time-left:hidden").show();
    timeLeft = 60;
    qNum = 0;
    rightAnswer = 4;
}
function run() {
    startTimer();
    setQuestion();
}
// run();
