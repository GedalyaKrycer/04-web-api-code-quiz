// Global Scope Variables For DOM Element

// Targets Correct Feedback for Questions
let correctFeedback = document.querySelector("#correctFeedback");

// Targets Wrong Feedback for Questions
let wrongFeedback = document.querySelector("#wrongFeedback");

// Targets Timer
let timeLeft = document.querySelector("#timeLeft");

// Target Display Sections
let startQuizDisplay = document.querySelector(".start-content");
let q1Display = document.querySelector("#question-1");
let q2Display = document.querySelector("#question-2");
let q3Display = document.querySelector("#question-3");
let q4Display = document.querySelector("#question-4");
let q5Display = document.querySelector("#question-5");
let completedDisplay = document.querySelector("#completedDisplay");


// Target Buttons
let startQuizBtn = document.querySelector("#startQuiz");
let code = document.querySelectorAll("code");
let q2Click = [code, q2Display];


// —————————————————————————————————————————————————————


// Object that holds all the answers  
let answers = {
    question1: {
        answer1: document.querySelector("#q1A1"),
        answer2: document.querySelector("#q1A2"),
        answer3: document.querySelector("#q1A3"),
        answer4: document.querySelector("#q1A4")
    },
    question2: {
        answer1: document.querySelector("#q2A1"),
        answer2: document.querySelector("#q2A2"),
        answer3: document.querySelector("#q2A3"),
        answer4: document.querySelector("#q2A4")
    },
    question3: {
        answer1: document.querySelector("#q3A1"),
        answer2: document.querySelector("#q3A2"),
        answer3: document.querySelector("#q3A3"),
        answer4: document.querySelector("#q3A4")
    },
    question4: {
        answer1: document.querySelector("#q4A1"),
        answer2: document.querySelector("#q4A2"),
        answer3: document.querySelector("#q4A3"),
        answer4: document.querySelector("#q4A4")
    },
    question5: {
        answer1: document.querySelector("#q5A1"),
        answer2: document.querySelector("#q5A2"),
        answer3: document.querySelector("#q5A3"),
        answer4: document.querySelector("#q5A4")
    }
};


// —————————————————————————————————————————————————————


// Start Time 
let timerAmount = 100;
timeLeft.textContent = timerAmount;


// Count Down Function
function timer() {
    // Sets up count down
    let countDown = setInterval(count, 1000);

    // Sets up conditionals for when counter hits 0
    function count() {
        if (timerAmount <= 0) {
            clearInterval(countDown);

            // Skips to completed screen
            quizComplete();

        } else {
            timerAmount--;
            timeLeft.textContent = timerAmount;
        }
    }
};


// —————————————————————————————————————————————————————


// Correct/Wrong Feedback Controls

function showCorrect() {

    // Clears Wrong Answer
    wrongFeedback.style.display = "none";

    // Shows Correct Text
    correctFeedback.style.display = "block";

    // Removes Correct text after 1 sec
    setTimeout(function () {
        correctFeedback.style.display = "none";
    }, 1000)

}

function showWrong() {
    // Clears Wrong Answer
    correctFeedback.style.display = "none";

    // Shows Wrong Text
    wrongFeedback.style.display = "block";

    // Reduces Timer
    for (let i = 0; i < 5; i++) {
        timerAmount--;
    }
    timeLeft.textContent = timerAmount;

    // Removes Wrong text after 1 sec
    setTimeout(function () {
        wrongFeedback.style.display = "none";
    }, 1000)
}


// —————————————————————————————————————————————————————




// —————————————————————————————————————————————————————


startQuizDisplay.addEventListener("click", function (event) {
    
    // This only works if the Start button is clicked
    if (event.target.type === "button" && event.target === startQuizBtn) {

        // Hide Start Section 
        startQuizDisplay.style.display = "none";

        // Start Timer 
        timer();

        // Shows Question 1
        question1();
    }
});


// —————————————————————————————————————————————————————


// This runs Question 1
function question1() {
    
    // Displays Section Content
    q1Display.classList.add("show");
    q1Display.classList.remove("hide");

    q1Display.addEventListener("click", function (event) {
        // Coniditionals to validate if the correct answer is selected
    if (event.target.type === "button" && event.target === answers.question1.answer2) {

        // Flashes correct text
        showCorrect();

        // Hides Current Question Section
        q1Display.classList.remove("show"); 
        q1Display.classList.add("hide");

        // Goes to next question
        question2();

    } else if (event.target.type === "button" &&
        event.target === answers.question1.answer1 ||
        event.target === answers.question1.answer3 ||
        event.target === answers.question1.answer4) {

        // Flashes wrong text
        showWrong();

        // Hides Current Question Section
        q1Display.classList.remove("show"); 
        q1Display.classList.add("hide");

        // Goes to next question
        question2();
    }
    });
}


// —————————————————————————————————————————————————————


// This runs Question 2
function question2() {
    
    // Displays Section Content
    q2Display.classList.add("show");
    q2Display.classList.remove("hide");

    q2Display.addEventListener("click", function (event) {
        // Conditionals to validate if the correct answer is selected
        if (event.target.type === "button" && event.target === answers.question2.answer1) {

            // Flashes correct text
            showCorrect();

            // Hides Current Question Section
            q2Display.classList.remove("show"); 
            q2Display.classList.add("hide");

            // Goes to next question
            question3();

        } else if (event.target.type === "button" &&
            event.target === answers.question2.answer2 ||
            event.target === answers.question2.answer3 ||
            event.target === answers.question2.answer4) {

            // Flashes wrong text
            showWrong();

            // Hides Current Question Section
            q2Display.classList.remove("show"); 
            q2Display.classList.add("hide");

            // Goes to next question
            question3();
        }
    });
}

// —————————————————————————————————————————————————————


// This runs Question 3
function question3() {
    
    // Displays Section Content
    q3Display.classList.add("show");
    q3Display.classList.remove("hide");

    q3Display.addEventListener("click", function (event) {
        // Coniditionals to validate if the correct answer is selected
        if (event.target.type === "button" && event.target === answers.question3.answer1) {

            // Flashes correct text
            showCorrect();

            // Hides Current Question Section
            q3Display.classList.remove("show"); 
            q3Display.classList.add("hide");

            // Goes to next question
            question4();

        } else if (event.target.type === "button" &&
            event.target === answers.question3.answer2 ||
            event.target === answers.question3.answer3 ||
            event.target === answers.question3.answer4) {

            // Flashes wrong text
            showWrong();

            // Hides Current Question Section
            q3Display.classList.remove("show"); 
            q3Display.classList.add("hide");

            // Goes to next question
            question4();
        }
    });
}

// —————————————————————————————————————————————————————

// This runs Question 4
function question4() {
    
    // Displays Section Content
    q4Display.classList.add("show");
    q4Display.classList.remove("hide");

    q4Display.addEventListener("click", function (event) {
        // Coniditionals to validate if the correct answer is selected
        if (event.target.type === "button" && 
        event.target === answers.question4.answer1) {

            // Flashes correct text
            showCorrect();

            // Hides Current Question Section
            q4Display.classList.remove("show"); 
            q4Display.classList.add("hide");

            // Goes to next question
            question5();

        } else if (event.target.type === "button" &&
            event.target === answers.question4.answer2 ||
            event.target === answers.question4.answer3 ||
            event.target === answers.question4.answer4) {

            // Flashes wrong text
            showWrong();

            // Hides Current Question Section
            q4Display.classList.remove("show"); 
            q4Display.classList.add("hide");

            // Goes to next question
            question5();
        }
    });
}

// —————————————————————————————————————————————————————

// This runs Question 5
function question5() {
    
    // Displays Section Content
    q5Display.classList.add("show");
    q5Display.classList.remove("hide");

    q5Display.addEventListener("click", function (event) {
        // Coniditionals to validate if the correct answer is selected
        if (event.target.type === "button" && event.target === answers.question5.answer1) {

            // Flashes correct text
            showCorrect();

            // Hides Current Question Section
            q5Display.classList.remove("show"); 
            q5Display.classList.add("hide");

            // Goes to completed screen
            quizComplete();

        } else if (event.target.type === "button" &&
            event.target === answers.question5.answer2 ||
            event.target === answers.question5.answer3 ||
            event.target === answers.question5.answer4) {

            // Flashes wrong text
            showWrong();

            // Hides Current Question Section
            q5Display.classList.remove("show"); 
            q5Display.classList.add("hide");

            // Goes to completed screen
            quizComplete();
        }
    });
}

// —————————————————————————————————————————————————————

// This runs the Completed Screen
function quizComplete() {
    
    // Hide all Sections

    // Displays Section Content
    completedDisplay.classList.add("show");
    completedDisplay.classList.remove("hide");

    completedDisplay.addEventListener("click", function (event) {
        // Coniditionals to validate if the correct answer is selected
        if (event.target.type === "submit") {
            event.preventDefault();

            alert("Hello");
            

        }
    });
}

// —————————————————————————————————————————————————————