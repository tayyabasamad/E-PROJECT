const container = document.getElementById("cardContainer");
for (let i = 1; i <= 100; i++) {
    let card = document.createElement("div");
    card.className = "card";
    card.textContent = i;
    container.appendChild(card);
}

const tables = [2, 3, 4, 5];
const tableContainer = document.getElementById("tableContainer");
tables.forEach(num => {
    let card = document.createElement("div");
    card.className = "table-card";
    let content = `<h3>Table of ${num}</h3>`;
    for (let i = 1; i <= 10; i++) {
        content += `<p>${num} × ${i} = ${num * i}</p>`;
    }
    card.innerHTML = content;
    tableContainer.appendChild(card);
});

const answerInput = document.getElementById("answer");
const resultMessage = document.getElementById("result-message");
let num1, num2, operation;

function generateMathProblem() {
  // Generate two random numbers between 1 and 10
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  
  // Set the problem display based on the current operation
  document.getElementById("number1").textContent = num1;
  document.getElementById("number2").textContent = num2;
  document.getElementById("operation").textContent = operation;
  answerInput.value = "";
  answerInput.focus();
}

function checkAnswer() {
  const userAnswer = parseInt(answerInput.value);
  let correctAnswer = (operation === "+") ? num1 + num2 : num1 - num2;
  
  // Provide animated feedback for toddlers
  if (userAnswer === correctAnswer) {
    resultMessage.textContent = "Yay! Great job!";
    resultMessage.classList.remove("incorrect");
    resultMessage.classList.add("correct");
    // Animate the feedback
    resultMessage.style.transform = "scale(1.2)";
    setTimeout(() => {
      resultMessage.style.transform = "scale(1)";
    }, 500);
  } else {
    resultMessage.textContent = "Oops! Try again!";
    resultMessage.classList.remove("correct");
    resultMessage.classList.add("incorrect");
    resultMessage.style.transform = "rotate(-5deg)";
    setTimeout(() => {
      resultMessage.style.transform = "rotate(0deg)";
    }, 500);
  }
  
  // Clear message and generate new problem after 1.5 seconds
  setTimeout(() => {
    resultMessage.textContent = "";
    generateMathProblem();
  }, 1500);
}

// Button event listeners to set the operation and generate a problem
document.getElementById("addButton").addEventListener("click", () => {
  operation = "+";
  generateMathProblem();
});

document.getElementById("subtractButton").addEventListener("click", () => {
  operation = "-";
  generateMathProblem();
});

// Listen for user input; when complete, check answer
answerInput.addEventListener("keydown", (e) => {
  // Allow check when the user presses Enter
  if (e.key === "Enter" && answerInput.value.trim() !== "") {
    checkAnswer();
  }
});
