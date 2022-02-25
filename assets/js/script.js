var quizArray = [
    {
        question : "Commonly used data types DO NOT include:",
        a: "numbers",
        b: "string",
        c: "boolean",
        d:  "alert",
        answer : 4
    },
    {
        question : "How to write and IF statement in JavaScript:",
        a: "if i = 0 then",
        b: "if(i == 0)",
        c: "if i = 0",
        d: "if i == 0 else",
        answer : 2

    },  
    {
        question : "Which event occurs when the user clicks on an HTML element?",
        a: "onchange", 
        b: "onmouseover",
        c: "onclick", 
        d: "onmouseclick",
        answer : 3
    },
    {
        question : "Which operator is used to set a variable?",
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
var questionEl = $("#question");
var rightAnswer = 0;
var qNum = 0;
var displayScoreEl = $("#display-score");
var highscoreListItemEl = $("#highscore-item");
var highscoreLinkEl = $("#highscore-link");
var highscoreFormEl = $("#highscore-form");
var nameInputEl = $("#nameInput");


// Event listeners for multiple choice button clicks
$("#a1").click(function() {
    var a1 = 1;
    if (a1 == rightAnswer) {
        timeLeft += 3;
        choiceEl.text("Correct!");
        qNum++;
        nextQuestion();
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
        nextQuestion();
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
        nextQuestion();
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
        nextQuestion();
    }
    else {
        timeLeft -= 10;
        choiceEl.text("Wrong!");
    }
});

//Event listener for clicking "View Highscore" to display highscores
$("#highscore-link").click(function() {
    printLeaderboard();
})

//Event listener for "Go Back" button
$("#go-back").click(function() {
    beginning();
})
//
$("#start-button").click(function() {
    reset();
    startGame();
})

// Starts timer
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

//Displays next multiple choice question
function nextQuestion() {
    if (qNum < 4) {   
        questionEl.text(quizArray[qNum].question);
        rightAnswer = quizArray[qNum].answer;
        $("#a1").text(quizArray[qNum].a);
        $("#a2").text(quizArray[qNum].b);
        $("#a3").text(quizArray[qNum].c);
        $("#a4").text(quizArray[qNum].d);
    }
    else {
        winGame();
    }
}

//Show user their score and allows them to record it
function victoryScreen() {
    $("div:visible").hide();
    $("#time-left:hidden").show();
    $("#done:hidden").show();
    $("#name-form:hidden").show();
    $("#name-input:hidden").show();
    displayScoreEl.text("Your final score is " + timeLeft + "!");
}


function printLeaderboard() {
    $("div:visible").hide();
    $("#time-left:hidden").show(); 
    $("#highscore:hidden").show();
}

$("form").submit(function(event) {
    event.preventDefault();
    highscoreListItemEl.append($("<li>").text(nameInputEl.val()));
})


//Executes when user completes quiz
function winGame() {
    clearInterval(timer);
    timeLeftEl.text(timeLeft);
    victoryScreen();
}

function beginning() {
    $("div:visible").hide();
    $("#main-page:hidden").show();
    $("#title:hidden").show();
    $("#start-button:hidden").show();
}
//Resets global variables
function reset() {
    qNum = 0;
    timeLeft = 60;
    $("div:visible").hide();
    $("#time-left:hidden").show();
    $("#quiz:hidden").show();
    $("#question:hidden").show();
    $("#buttons:hidden").show();
    nextQuestion();
}
//Starts Game
function startGame() {
    reset();
    startTimer();
    nextQuestion();
}
