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

var currentQuestion = $("#question")
var qNum = 0

function setQuestion() {
    currentQuestion.text(quizArray[qNum].question);
    rightAnswer = quizArray[qNum].answer;
    $("#a1").text(quizArray[qNum].a)
    $("#a2").text(quizArray[qNum].b)
    $("#a3").text(quizArray[qNum].c)
    $("#a4").text(quizArray[qNum].d)
}

$("#a1").click(function() {
    var a1 = 1;
    if (a1 == rightAnswer) {
        timeLeft += 10;
        qNum++;
        setQuestion();
    }
    else {
        timeLeft -= 5;
    }
});
$("#a2").click(function() {
    var a2 = 2;
    if (a2 == rightAnswer) {
        timeLeft += 10;
        qNum++;
        setQuestion();
    }
    else {
        timeLeft -= 5;
    }
});
$("#a3").click(function() {
    var a3 = 3;
    if (a3 == rightAnswer) {
        timeLeft += 10;
        qNum++;
        setQuestion();
    }
    else {
        timeLeft -= 5;
    }
});
$("#a4").click(function() {
    var a4 = 4
    if (a4 == rightAnswer) {
        timeLeft += 10;
        qNum++;
        setQuestion();
    }
    else {
        timeLeft -= 5;
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

function run() {
    startTimer();
    setQuestion();
}
run();