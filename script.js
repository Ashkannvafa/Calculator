const display = document.getElementById("display");
 const themeSwitcher = document.getElementById("theme-switcher");
 const body = document.body;
 
 let currentInput = "";
 let operator = "";
 let firstOperand = null;
 
 function appendNumber(number) {
  currentInput += number;
  updateDisplay();
 }

 function appendDot() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

 function appendOperator(op) {
  if (currentInput !== "") {
    if (firstOperand === null) {
      firstOperand = parseFloat(currentInput);
    }
    operator = op;
    currentInput = "";
  }
}

 function calculateResult() {
  if (firstOperand !== null && currentInput !== "") {
    const secondOperand = parseFloat(currentInput);
    switch (operator) {
      case "+":
        firstOperand += secondOperand;
        break;
      case "-":
        firstOperand -= secondOperand;
        break;
      case "*":
        firstOperand *= secondOperand;
        break;
      case "/":
        firstOperand /= secondOperand;
        break;
    }
    currentInput = firstOperand.toString();
    operator = "";
    firstOperand = null;
    updateDisplay();
  }
}

 function deleteNumber() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

 function resetCalculator() {
  currentInput = "";
  operator = "";
  firstOperand = null;
  updateDisplay();
}

 function updateDisplay() {
  display.textContent = currentInput || "0";
}

 themeSwitcher.addEventListener("input", (e) => {
  body.setAttribute("data-theme", e.target.value);
});