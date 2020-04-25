// Global Scope Variables For DOM Elements
let mainContentSect = document.querySelectorAll("div");


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
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false
    },
    question4: {
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false
    },
    question5: {
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false
    }
};


// —————————————————————————————————————————————————————


// Event Listener For Button Clicks
for (let i = 0; i < mainContentSect.length; i++) {
    mainContentSect[i].addEventListener("click", function(event) {
        startScreen();
        question1()
        
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

        // Shows Question 1
        return question1();
    }
}
 

// —————————————————————————————————————————————————————

function question1() {
    const q1Display = document.querySelector(".question-1");
    
    // Displays Question 1
    q1Display.style.display = "block";

    // Coniditionals to validate if the correct answer is selected
    if (event.target.type == "button" && event.target === answers.question1.answer2) {
        console.log("Correct answer");
        
        // startQuizDisplay.style.display = "none";
        // question1();

    } else if (event.target.type == "button" && 
    event.target === answers.question1.answer1 || 
    event.target === answers.question1.answer3 || 
    event.target === answers.question1.answer4) {
        console.log("Wrong answer");
    } 
    
    

}