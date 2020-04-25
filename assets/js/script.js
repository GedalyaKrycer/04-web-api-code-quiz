// Global Scope Variables For DOM Elements
let mainContentSect = document.querySelectorAll("div");


// Object that holds all the answers  
let answers = {
    question1: {
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false
    },
    question2: {
        answer1: false,
        answer2: false,
        answer3: false,
        answer4: false
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



// Event Listener For Button Clicks
for (let i = 0; i < mainContentSect.length; i++) {
    mainContentSect[i].addEventListener("click", function(event) {
        startScreen();
        
    });
};


// This starts the quiz
function startScreen() {
    const startQuizBtn = document.querySelector("#startQuiz");
    const startQuizDisplay = document.querySelector(".start-content");
    
    if (event.target.type == "button" && event.target === startQuizBtn) {
        console.log("Button start");
        startQuizDisplay.style.display = "none";
    }
}
 

