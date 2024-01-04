var timeEl = document.querySelector(".time");
var questions = [
  {
      prompt: "Inside which HTML element do we put the JavaScript?",
      options: ["<javascript>", "<js>", "<script>", "<scripting>"],
      answer: "<script>"
  },

  {
      prompt: "How do you call a function named myFunction?",
      options: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction"],
      answer: "myFunction()"
  },

  {
      prompt: "How does a for loop start?",
      options: ["for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", " for (i <= 5; i++)"],
      answer: "for (i = 0; i <= 5; i++)"
  },

  {
      prompt: "In JavaScript, which of the following is a logical operator?",
      options: ["|", "&&", "%", "/"],
      answer: "&&" 
  },

  {
      prompt: "A named element in a JavaScript program that is used to store and retrieve data is a _____.",
      options: ["method", "assignment operator", "variable", "string"],
      answer: "variable"
  }];
// Selects element by id
var mainEl = document.getElementById("main");
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var choicesEl = document.querySelector("#options");
var submitBtn = document.querySelector("#submit-score");
var startBtn = document.querySelector("#start");
var nameEl = document.querySelector("#name");
var feedbackEl = document.querySelector("#feedback");
var reStartBtn = document.querySelector("#restart");

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;


function setTime() {
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  var landingScreenEl = document.getElementById("start-screen");
  landingScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  getQuestion();

  function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 22) {
      quizEnd();
    }
      }
    }

  
    function saveHighscore() {
      var name = nameEl.value.trim();
      if (name !== "") {
        var highscores =
          JSON.parse(window.localStorage.getItem("highscores")) || [];
        var newScore = {
          score: time,
          name: name
        };
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
      }
  }
  
  // Save users' score after pressing enter
  
  function checkForEnter(event) {
      if (event.key === "Enter") {
          saveHighscore();
      }
  }
  nameEl.onkeyup = checkForEnter;
  
  // Save users' score after clicking submit
  
  submitBtn.onclick = saveHighscore;
  
  // Start quiz after clicking start quiz
  
  startBtn.onclick = quizStart;
  
  

