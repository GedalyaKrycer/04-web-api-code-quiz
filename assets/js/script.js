// Variable For DOM Elements
let mainContentSect = document.querySelectorAll("div");
let startQuizBtn = document.querySelector("#startQuiz");


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

// console.log(answers.question1.answer1);

for (let i = 0; i < mainContentSect.length; i++) {
    mainContentSect[i].addEventListener("click", function(event) {
        if (event.target.type == "button" && event.target === startQuizBtn) {
            console.log("Button start");
        }
        
    });
};
 

