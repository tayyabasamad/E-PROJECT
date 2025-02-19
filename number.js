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

// Addition & Subtraction Section
const answerInput = document.getElementById("answer");
const resultMessage = document.getElementById("result-message");

let num1, num2, operation;

function generateMathProblem() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;

    // Randomize the operation (addition or subtraction)
    if (operation === "+") {
        document.getElementById("operation").textContent = "+";
        document.getElementById("number1").textContent = num1;
        document.getElementById("number2").textContent = num2;
    } else {
        document.getElementById("operation").textContent = "-";
        document.getElementById("number1").textContent = num1;
        document.getElementById("number2").textContent = num2;
    }
}

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    let correctAnswer;

    if (operation === "+") {
        correctAnswer = num1 + num2;
    } else {
        correctAnswer = num1 - num2;
    }

    if (userAnswer === correctAnswer) {
        resultMessage.textContent = "Great job! That's correct!";
        resultMessage.classList.add("correct");
        resultMessage.classList.remove("incorrect");
    } else {
        resultMessage.textContent = "Oops! That's not right. Try again!";
        resultMessage.classList.add("incorrect");
        resultMessage.classList.remove("correct");
    }

    setTimeout(() => {
        resultMessage.textContent = "";
        answerInput.value = "";
        generateMathProblem();
    }, 1500);
}

document.getElementById("addButton").addEventListener("click", () => {
    operation = "+";
    generateMathProblem();
});

document.getElementById("subtractButton").addEventListener("click", () => {
    operation = "-";
    generateMathProblem();
});

answerInput.addEventListener("input", () => {
    if (answerInput.value !== "") {
        checkAnswer();
    }
});

