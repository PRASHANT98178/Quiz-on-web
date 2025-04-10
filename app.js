const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const startScreen = document.querySelector(".start-screen");
const quizContainer = document.querySelector(".quiz-container");

let currentQuestionIndex = 0;
let score = 0;

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correctAnswer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats"
    ],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    correctAnswer: "1995"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tool Multi Language"],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    correctAnswer: "1995"
  },
  {
    question: "Which company developed the React library?",
    options: ["Google", "Microsoft", "Facebook", "Twitter"],
    correctAnswer: "Facebook"
  },
  {
    question: "What is the largest planet in our Solar System?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    correctAnswer: "Jupiter"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Iron"],
    correctAnswer: "Oxygen"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correctAnswer: "8"
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    options: ["Asia", "Africa", "Australia", "South America"],
    correctAnswer: "Africa"
  }
];

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function startQuiz() {
  startScreen.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.options.forEach(option => {
    const li = document.createElement("li");
    li.innerText = option;
    li.addEventListener("click", () => selectAnswer(li, currentQuestion.correctAnswer));
    optionsElement.appendChild(li);
  });
}

function resetState() {
  nextBtn.classList.add("hidden");
  optionsElement.innerHTML = "";
}

function selectAnswer(selectedOption, correctAnswer) {
  const allOptions = optionsElement.children;
  Array.from(allOptions).forEach(option => {
    option.style.pointerEvents = "none"; 
    if (option.innerText === correctAnswer) {
      option.classList.add("correct");
    }
  });

  if (selectedOption.innerText === correctAnswer) {
    score++;
    selectedOption.classList.add("correct");
  } else {
    selectedOption.classList.add("incorrect");
  }

  nextBtn.classList.remove("hidden");
}

function showResult() {
  quizContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} / ${quizQuestions.length}</p>
    <button onclick="location.reload()" class="btn">Restart Quiz</button>
  `;
}
