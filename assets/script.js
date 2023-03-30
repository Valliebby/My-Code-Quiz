const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-button");
let shuffledQuestions, currentQuestionIndex;
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let winCounter = 0;
let loseCounter = 0;
let isWin = false;
let timer;
let timerCount = 60;
const restartButton = document.getElementById("restart-btn");
let user = document.querySelector("#userNameInput");

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  console.log('game starting')
  startButton.classList.add("hide");
  shuffledQuestions = question.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  startTimer()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  console.log(question)
  console.log(currentQuestionIndex)
  questionElement.innerText = question.question;
  question.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("button");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button);
  });
}
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  // console.log(shuffledQuestions,currentQuestionIndex)
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    isWin = true
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const question = [
  {
    question:
      "Endpoints: are important aspects of interacting with server-side web APIs, as they specify where resources lie that can be accessed by third party software. Is this true or false?",
    answer: [
      { text: "true", correct: "true" },
      { text: "false", correct: false },
    ],
    correctAnswer: "true",
  },
  {
    question:
      "In software development, agile practices include requirements discovery and solutions improvement through the collaborative effort of self-organizing and cross-functional teams with their customer(s)/end user(s),adaptive planning, evolutionary development, early delivery, continual improvement, and flexible responses to changes in requirements, capacity, and understanding of the problems to be solved.",
    answer: [
      { text: "true", correct: true },
      { text: "false", correct: false },
    ],
    correctAnswer: "true",
  },
    {
      question:
        "What does HTML mean?:",
        answer: [
          { text: "(a) Happy Times Make Laughs", correct: false },
          { text: "(b) HyperText Markup Language", correct: true },
          { text: "(c) Hints Tints Moods Length", correct: false }, 
          { text: "(d) HyperText Transfer Protocol", correct: false },      
        ],          
      correctAnswer: "b",
    },
    {
  question:
        "What are display CSS property?:",   
        answer: [
          { text: "(a) Display: block", correct: false },
          { text: "(b) Display: inline", correct: false },
          { text: "(c) Display: flex", correct: false }, 
          { text: "(d) All of the above", correct: true},      
        ],         
      correctAnswer: "d",
    },
    {
  question:
        "What is a media query?:",
        answer: [
          { text: "(a) Hover", correct: true },
          { text: "(b) Position", correct: false },
          { text: "(c) Flex", correct: false }, 
          { text: "(d) All of the above", correct: false},      
        ],                  
      correctAnswer: "a",
    },
    {
  question:
        "The main axis is defined by flex-direction, what are the four possible values?:",
        answer: [
          { text: "(a) Row, row-reverse, column, column-reverse", correct: true },
          { text: "(b) Squares, circles, pi, width", correct: false },
          { text: "(c) Up, down, left, right", correct: false }, 
          { text: "(d) Width, length, down, up", correct: false},      
        ],                 
      correctAnswer: "a",
    },
    {
  question:
        "What is a client-side web API?:",
        answer: [
          { text: "(a) A server-side web API is a functional application", correct: false },
          { text: "(b) A server-side web API consists of one or more publicly exposed endpoints to a defined request response message system, typically expressed in JSON or XML", correct: true },
          { text: "(c) A API is an interface that does not use a browser", correct: false }, 
          { text: "(d) All of the above", correct: false},      
        ],                 
        correctAnswer: "b",
    },
    {
  question:
        "The main axis is defined by flex-direction, what are the four possible values?",
        answer: [
          { text: "(a) Row, row-reverse, column, column-reverse", correct: true },
          { text: "(b) Squares, circles, pi, width", correct: false },
          { text: "(c) Up, down, left, right", correct: false }, 
          { text: "(d) Width, length, down, up", correct: false},      
        ],                  
        correctAnswer: "a",
    },
    {
      question:
            "What is local storage?",
            answer: [
              { text: "(a) The localStorage object stores data with no expiration date.The data is not deleted when the browser is closed, and are available for future sessions.", correct: false},
              { text: "(b) The localStorage reads only property of the window interface and allows to access a Storage object for the Document's origin.", correct: false },
              { text: "(c) Local storage stores data that is saved across browser sessions.", correct: false }, 
              { text: "(d) All the above", correct: true},      
            ],                  
            correctAnswer: "d",
        },
    {
  question:
        "What is an Array?",
        answer: [
          { text: "(a) Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value.", correct: true },
          { text: "(b) is a stored a stored variable", correct: false },
          { text: "(c) A ray of sunlight", correct: false }, 
          { text: "(d) None of the above", correct: false},      
        ],                  
        correctAnswer: "a",
    },
    {
      question:
            "What is considered full stacked?",
            answer: [
              { text: "(a) HTML, CSS, Java, API, NodeJS, , ExpressJS, MYSQL", correct: true },
              { text: "(b) Front and back end", correct: false },
              { text: "(c) Things fully piled up together", correct: false }, 
              { text: "(d) Good stacked paster", correct: false},      
            ],                  
            correctAnswer: "a",
        },
  {
  question:
        "What is a Queue?",
        answer: [
          { text: "(a)The queue() method shows the queue of functions to be executed on the selected elements.", correct: true },
          { text: "(b) A queue is one or more function(s) waiting to run.", correct: false },
          { text: "(c) An element can have several queues. Most often it has only one, the fx queue, which is the default jQuery queue.", correct: false }, 
          { text: "(d) All of the above", correct: false},      
        ],                  
        correctAnswer: "d",
    },
];
function quizOver(){
    let score = timerCount
    localStorage.setItem("score", score)
    document.querySelector("#highScoreDiv").style = "display: block;"
    document.querySelector(".quizSection").style = "display: none;"
    document.querySelector("#score").textContent = localStorage.getItem("score")
    let highScore = document.querySelector("#highScoreDiv")
    prompt('In put user name for high score:')
  //add input for name and score in local storage
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
}

// The setTimer function starts and stops the timer to triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  let timerElement = document.querySelector("#timer");
  let timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin || timerCount < 0) {
        // Clears interval and stops timer
        console.log("clearing timer isWin", timerCount)
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      console.log("clearing timer === 0")
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

// The winGame function is called when the win condition is met
function winGame() {
  quizOver()
  console.log('Game WON!')
}

function gameOver() {
  // clear question container
  
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  quizOver()
  console.log('Game Over')
  setLosses();
}
