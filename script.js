// 1 WHEN I click the start button
// THEN a timer starts and I am presented with a question

// 2 WHEN I answer a question
// THEN I am presented with another question

// 3 WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// 4 WHEN all questions are answered or the timer reaches 0
// THEN the game is over

// 5 WHEN the game is over
// THEN I can save my initials and score

//data for the quiz
var questions = [
    {
        title: " What is a JavaScript Data Type?",

        choices: ["string", "var", "forLoop", "css"],

        answer: "String"
    }, {
        title: "When a user views a page containing a JavaScript program, which machine actually executes the script?",

        choices: [" The User's machine running a Web browser", "The Web server", "A central machine deep within Netscape's corporate offices", "None of the above"],

        answer: "The User's machine running a Web browser"
    }, {
        title: "What are variables used for in JavaScript Programs?",

        choices: [" Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks", " None of the above"],

        answer: "Storing numbers, dates, or other values"
    }, {
        title: "Which of the following can't be done with client-side JavaScript?",

        choices: ["validating a form", "Sending a form's contents by email", "Storing the form's contents to a database file on the server", "Storing the form's contents to a database file on the server"],

        answer: "Storing the form's contents to a database file on the server"
    }, {
        title: " Which of the following are capabilities of functions in JavaScript?",

        choices: ["Return a value", "Accept parameters and Return a value", "Accept parameters", "None of the above"],

        answer: "Accept parameters"
    }
]

//variable to keep track of the state of our quiz
var currentQuestionIndex = 0;
var time = questions.length * 20;
var timerId;
var startQuiz;
var timeInterval;

function startQuiz() {
    //1) need to hide the start button
    document.getElementById("startBtn").setAttribute("class", "hide");
    //2) unhide questions section
    document.getElementById("questions").removeAttribute("class");
    //3) set the timer interval
    timerId = setInterval(clockTick, 1000);
    //4) display the time to user
    document.getElementById("time").textContent = time;
    //5) call a a get question function
    getQuestion();
}

function getQuestion() {

    //get current question from array
    var currentQuestion = questions[currentQuestionIndex];
    //update html with the current question
    document.getElementById("question-title").textContent = currentQuestion.title;
    // clear out div containing any previous choices
    document.getElementById("choices").innerHTML = "";
    // loop over your choices
    for (i = 0; i < currentQuestion.choices.length; i++) {
        //create a btn for eat choice
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", currentQuestion.choices[i]);
        choiceBtn.textContent = i + 1 + "- " + currentQuestion.choices[i];
        //attach a click event listener
        choiceBtn.onclick = questionClick;
        //display on the page
        document.getElementById("choices").appendChild(choiceBtn);
    }

}

function questionClick() {
    //check if the user guessed wrong
    if (ch) {
        //penalize time
        time -= 20
        if (time < 0) {
            time = 0;
        }

        //display new time on page
        document.getElementById("time").textContent = time;
        //display "wrong"
        document.getElementById("time").textContent = time;
        //display "correct"
    }

    //move on to the next question
    currentQuestionIndex++;

    //check if we have run out of questions
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    //stop timer

    //show end screen

    //show final score

    //hide the question section
}

function clockTick() {
    //update time
    time--;
    document.getElementById("time").textContent = time;

    //check if user ran out of time
    if (time <= 0) {
        quizEnd();
    }
}

function saveHighScore() {
    //grab value of your input box

    //optional validate to make sure field wasnt empty

    //format the score for the current user

    //save the score to localstorage

    //redirect to high score page
}


//click event for start
document.getElementById("startBtn").onclick = startQuiz;

//click event for choices

//click event for saving highscore