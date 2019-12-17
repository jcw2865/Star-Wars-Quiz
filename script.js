var questions = [
    {
        question: "Which of the following is a story the Jedi won't tell you?",
        choices: ["The Jedi Civil War", "The Tragedy of Darth Plagueis the Wise", "The First Great Schism"],
        answer: 2,
    },
    {
        question: "Which of Mace Windu's hands was cut off by Darth Sidious?",
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

startButton.addEventListener("click", function () {
    // alert("You clicked the start button");
    // Hide welcome element, display first question.
    welcome.style.display = ("none");
    document.querySelector(".question").textContent = questions[0].question;
    // Display answer options.
    // document.querySelector(".choiceList").textContent = questions[0].choices;
    for (var i = 0; i < questions[0].choices.length; i++) {
        var newLi = document.createElement("li");
        newLi.textContent = questions[0].choices[i];
        choiceList.appendChild(newLi);
    }
})


// Below is what I started with. I copied and pasted it below in case I needed to reference it, but I believe what is written above is correct.


// 
// Establish variables
// 

// var startButton = document.getElementById("startbutton");
// // console.log(startButton);
// var row1 = document.getElementById("row-1");
// // console.log(row1);
// var questionSet1 = document.getElementById("questionset-1");
// // console.log(question1);
// var questionSet2 = document.getElementById("questionset-2");
// // console.log(question2);
// var questionSet3 = document.getElementById("questionset-3");
// // console.log(question3);
// var questionSet4 = document.getElementById("questionset-4");
// // console.log(question4);
// var questionSet5 = document.getElementById("questionset-5");
// // console.log(question5);

// 
// Click event listeners
// 

// startButton.addEventListener("click", function () {
//     // alert("You clicked the start button");
//     row1.style.display = ("none");
//     questionSet1.style.display = ("block");
// })

// document.querySelector("button").addEventListener("click", function () {
//     // alert("You clicked the start button");
//     questionSet1.style.display = ("none");
//     questionSet2.style.display = ("block");
// })