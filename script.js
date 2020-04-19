var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start-button");
var quizScreenEl = document.getElementById("quiz-screen");
var choicesEl = document.getElementById("choices")
var timerEl = document.getElementById("timer")

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
//Timer 
var Q = 0;
var correct = [];
var time = 60;
var timerId;

function clockTick() {

  time--;
  timerEl.textContent = time;
}

timerId = setInterval(clockTick, 1000);
startBtn.addEventListener("click", startGame);

// Starts game, switches from start screen to questions
function startGame() {
  startScreenEl.setAttribute("class", "hide")
  quizScreenEl.removeAttribute("class");
  buildQuestionCard();
}

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

function questionClick() {
  if (this.value !== questions[Q].answer) {
    //penalize timer
    //show word wrong on screen (for a few seconds)
    console.log("wrong")
  } else {
    correct.push(questions[Q]);
    console.log("correct");
  }
  Q++;
  if (Q === questions.length) {
    //end quiz
    endQuiz();
  } else {
    buildQuestionCard();
  }
  buildQuestionCard();

}
function endQuiz() {
  console.log("game over")
  // setAttribute to hide quiz screen and show end screen
  endQuizEl.setAttribute("class", "hide")
  quizScreenEl.removeAttribute("class");
  buildQuestionCard();
}

