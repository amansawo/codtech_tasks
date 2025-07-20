const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
    answer: "Bill Gates"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  }
];

let currentIndex = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  const current = questions[currentIndex];
  document.getElementById("question").innerText = current.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  current.options.forEach(option => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = option;
    btn.onclick = () => checkAnswer(btn, option);
    optionsDiv.appendChild(btn);
  });
  document.getElementById("scoreBox").innerText = "";
  answered = false;
}

function checkAnswer(element, selected) {
  if (answered) return;
  const correct = questions[currentIndex].answer;
  if (selected === correct) {
    element.classList.add("correct");
    score++;
  } else {
    element.classList.add("wrong");
    const options = document.querySelectorAll(".option");
    options.forEach(opt => {
      if (opt.innerText === correct) opt.classList.add("correct");
    });
  }
  answered = true;
}

function nextQuestion() {
  if (!answered) {
    alert("Please select an answer first!");
    return;
  }
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.querySelector(".btn").style.display = "none";
    document.getElementById("scoreBox").innerText = `Your Score: ${score}/${questions.length}`;
  }
}

window.onload = loadQuestion;
