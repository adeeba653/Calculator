document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.querySelector(".input"); // Selecting the input field
  const buttons = document.querySelectorAll("button"); // Selecting all buttons

  buttons.forEach(button => {
      button.addEventListener("click", function () {
          let buttonText = this.innerText;

          if (buttonText === "A") {
              inputField.value = ""; // Clears everything
          } else if (buttonText === "C") {
              inputField.value = inputField.value.slice(0, -1); // Deletes last character
          } else if (buttonText === "=") {
              try {
                  inputField.value = eval(inputField.value); // Evaluates the expression
              } catch (error) {
                  inputField.value = "Error"; // Catches errors like division by zero
              }
          } else if (buttonText === "×") {
              inputField.value += "*"; // Replaces '×' with '*' for multiplication
          } else if (buttonText === "÷") {
              inputField.value += "/"; // Replaces '÷' with '/' for division
          } else {
              inputField.value += buttonText; // Appends clicked button text
          }
      });
  });
});
