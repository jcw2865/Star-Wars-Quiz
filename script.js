$(document).ready(function () {
    var questions = [
        {
            question: "Which of the following is a story the Jedi won't tell you?",
            choices: ["The Jedi Civil War", "The Tragedy of Darth Plagueis the Wise", "The First Great Schism"],
            answer: 2,
        },
        {
            question: "Which of Mace Windu's hands was cut off by Anakin Skywalker?",
            choices: ["Left", "Right", "Both", "Neither"],
            answer: 2,
        },
        {
            question: "Which of Luke Skywalker's hands was cut off by Darth Vader?",
            choices: ["Left", "Right", "Both", "Neither"],
            answer: 2,
        },
        {
            question: "What is the name of the creature that loses an arm to Luke Skywalker on Planet Hoth?",
            choices: ["Wampa", "Tauntaun", "Rancor"],
            answer: 1,
        },
        {
            question: "In which of the first six Star Wars movies does no one lose a hand?",
            choices: ["Episode I", "Episode II", "Episode III", "Episode IV", "Episode V", "Episode VI"],
            answer: 1,
        }
    ]

    // Declare variables

    var startButton = document.getElementById("startbutton");

    var welcome = document.getElementById("welcome");

    var choiceList = document.querySelector(".choiceList");

    var scoreDiv = document.querySelector(".score");

    var lastQuestion = questions.length - 1;

    var currentQuestion = 0;

    var count = 0;

    var result = document.querySelector(".result");

    var score = 0;
    // Set index to zero so we can increase it by one later with each click
    var index = 0;
    // function generateQuestionWithAnswers(index) {
    //     document.querySelector(".question").textContent = questions[index].question;
    //     // Display answer options.
    //     for (var i = 0; i < questions[index].choices.length; i++) {
    //         var buttons0 = document.createElement("button");
    //         buttons0.setAttribute('data-index', i + 1)
    //         buttons0.textContent = questions[index].choices[i];
    //         choiceList.appendChild(buttons0);
    //         buttons0.addEventListener('click', function (evt) {
    //             var currentAnswerValue = evt.target.getAttribute('data-index');
    //             if (+currentAnswerValue === questions[index].answer) {
    //                 //Answered correctly
    //                 console.log('Correct')
    //             }
    //             else {
    //                 //answered incorrectly
    //                 console.log('InCorrect')

    //             }
    //             //check to see if answer is right, 
    //             //keep track of score, ina variable
    //         });

    //     }
    // }
    // Event listener: click start button, hide home page, reveal first question.
    startButton.addEventListener("click", function () {
        // alert("You clicked the start button");
        // Hide welcome element
        welcome.style.display = ("none");
        // generateQuestionWithAnswers(index);
        // Put first question into the question container
        document.querySelector(".question").textContent = questions[index].question;
        // Display answer options
        for (var i = 0; i < questions[index].choices.length; i++) {
            var buttons = document.createElement("button");
            buttons.textContent = questions[index].choices[i];
            choiceList.appendChild(buttons);
        }

    })

    // Event listener: click answer choice, hide current question, reveal subsequent questions.
    choiceList.addEventListener("click", function () {

        // Hide welcome element
        welcome.style.display = ("none");

        // Remove previous answer options from choice list
        $(choiceList).empty();

        // Increase index by one each time the button is clicked
        index++;

        // Put second question into the question container
        document.querySelector(".question").textContent = questions[index].question;

        // Display answer options.
        for (var i = 0; i < questions[index].choices.length; i++) {
            var buttons = document.createElement("button");
            buttons.textContent = questions[index].choices[i];
            choiceList.appendChild(buttons);
        }
        //     // Function to stop displaying question and answers
        // })

        // Third event listener: recognizes correct answers (?)
    });
});