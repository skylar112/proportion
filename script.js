var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start-button");
var quizScreenEl = document.getElementById("quiz-screen");
var choicesEl = document.getElementById("choices");
var timerEl = document.getElementById("timer");
var endQuizEl = document.getElementById("end-screen");
var scoreEl = document.getElementById("scoring-container");
var scoreBtn = document.getElementById("score-submit")


//5 questions and choices
var questions = [{
  question: "What does HTML stand for?",
  choices: ["Help The Mammals Live", "Hyper Text Markup Language", "Hot Tomatoes Melt Lips", "Hello To My Lady"],
  answer: "Hyper Text Markup Language"
}, {
  question: "What does CSS stand for?",
  choices: ["Crap Slides Sideways", "Capture Screen Shots", "Cascading Style Sheets", "Coffee Stains Suck"],
  answer: "Cascading Style Sheets"
}, {
  question: "What is a Javascript?",
  choices: ["Official language of Starbucks", "Ancient papyrus scripture about coffee", "A foreign car brand", "A web programming language"],
  answer: "A web programming language"

}, {
  question: "What is a Javascript command?",
  choices: ["Git Pull", "Switch", "log(message)", "Get in the chopper!"],
  answer: "log(message)"

}, {
  question: "What is a Javascript condition",
  choices: ["IF/else", "Addition", "Pseudo Coding", "Mickey Mouse"],
  answer: "IF/else"
},
]
//Timer parameters, counting down from 60
var Q = 0;
var correct = [];
var time = 60;
var timerId;
//
function clockTick() {

  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    endQuiz();
    endQuizEl.textContent = "time out"
  }
}
//Timer counting down starts per 1000ms=1second, tied into the click of the start button
timerId = setInterval(clockTick, 1000);
startBtn.addEventListener("click", startGame);
scoreBtn.addEventListener("click", function () {


});



// Starts game, switches from start screen to questions
function startGame() {
  startScreenEl.setAttribute("class", "hide")
  quizScreenEl.removeAttribute("class");
  buildQuestionCard();
}
// Switches from start screen to questions
function buildQuestionCard() {
  var currentQuestion = questions[Q];
  var questionTitle = document.getElementById("question-title");

  choicesEl.innerHTML = "";
  questionTitle.textContent = currentQuestion.question;

  currentQuestion.choices.forEach(function (choice, i) {
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);

    choiceButton.textContent = choice;
    choiceButton.onclick = questionClick;
    choicesEl.append(choiceButton);
  })

}
// This function dictates what to do if the user answers the question correctly or incorrectly 
function questionClick() {
  if (this.value !== questions[Q].answer) {

    console.log("wrong")
  } else {
    correct.push(questions[Q]);
    console.log("correct");
  }
  Q++;
  console.log(questions.length)
  if (Q === questions.length) {

    endQuiz();
  } else {
    buildQuestionCard();
  }
}
//This function will clear out the time and display a game over message as the last question is answered
function endQuiz() {

  console.log("game over")
  clearInterval(timerId);
  endQuizEl.removeAttribute("class")
  quizScreenEl.setAttribute("class", "hide");
  scoreEl.textContent = correct.length;
}
//This function is supposed to allow the scores and name saved into local storage and to be put into a scoreboard
function saveScore() {
  var score = correct.length
  var name = document.getElementById('name').value;
  console.log(name);
  localStorage.setItem({
    "name": name,
    "score": score,
  });
  console.log(localStorage)
}
