// Global Scope Variables For DOM Elements
let mainContentSect = document.querySelectorAll("div");
let correctFeedback = document.querySelector("#correctFeedback");
let wrongFeedback = document.querySelector("#wrongFeedback");
let timeLeft = document.querySelector("#timeLeft"); 

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

            // Will go to final score later on
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
    setTimeout(function() {
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
    setTimeout(function() {
        wrongFeedback.style.display = "none";
    }, 1000)
}



// —————————————————————————————————————————————————————


// Event Listener For Button Clicks
for (let i = 0; i < mainContentSect.length; i++) {
    mainContentSect[i].addEventListener("click", function(event) {
        startScreen();
        question1();
        question2();
    });
};


// —————————————————————————————————————————————————————


// This starts the quiz
function startScreen() {
    const startQuizBtn = document.querySelector("#startQuiz");
    const startQuizDisplay = document.querySelector(".start-content");
    
    // This only works if the Start button is clicked
    if (event.target.type == "button" && event.target === startQuizBtn) {

        // Hide Start Section 
        startQuizDisplay.style.display = "none";

        // Start Timer 
        timer();

        // Shows Question 1
        question1();
    }
}
 

// —————————————————————————————————————————————————————


// This runs Question 1
function question1() {
    const q1Display = document.querySelector(".question-1");
    
    // Displays Question 1
    q1Display.style.display = "block";

    // Coniditionals to validate if the correct answer is selected
    if (event.target.type == "button" && event.target === answers.question1.answer2) {
        
        // Flashes correct text
        showCorrect();

        // Hides Current Question Section 
        q1Display.style.display = "none";

        // Goes to next question
        question2();

    } else if (event.target.type == "button" && 
    event.target === answers.question1.answer1 || 
    event.target === answers.question1.answer3 || 
    event.target === answers.question1.answer4) {

        // Flashes wrong text
        showWrong();

        // Hides Current Question Section 
        q1Display.style.display = "none";

        // Goes to next question
        question2();
    } 
}


// —————————————————————————————————————————————————————


// This runs Question 2
function question2() {
    const q2Display = document.querySelector(".question-2");
    
    // Displays Question 1
    q2Display.style.display = "block";

    // Coniditionals to validate if the correct answer is selected
    if (event.target.type == "button" && event.target === answers.question2.answer1) {
        
        // Flashes correct text
        showCorrect();

        // Goes to next question
        // question3();

    } else if (event.target.type == "button" && 
    event.target === answers.question2.answer2 || 
    event.target === answers.question2.answer3 || 
    event.target === answers.question2.answer4) {

        // Flashes wrong text
        showWrong();

        // Goes to next question
        // question3();
    } 
}

