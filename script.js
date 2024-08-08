document.addEventListener("DOMContentLoaded", function () {
  let score = 0;
  const scoreDisplay = document.getElementById("score");

  const handleMultipleChoiceQuestions = () => {
    const multipleChoiceQuestions =
      document.querySelectorAll(".question .answer");

    multipleChoiceQuestions.forEach((button) => {
      button.addEventListener("click", function () {
        const correct = button.getAttribute("data-correct") === "true";
        const message = button.parentElement.querySelector(".message");

        if (correct) {
          button.style.backgroundColor = "lightgreen";
          message.textContent = "Correct!";
          message.style.color = "green";
          score++;
        } else {
          button.style.backgroundColor = "lightcoral";
          message.textContent = "Incorrect";
          message.style.color = "red";
        }

        disableAnswerButtons(button.parentElement);

        scoreDisplay.textContent = score;
      });
    });
  };

  const handleFreeResponseQuestions = () => {
    const freeResponseQuestions = document.querySelectorAll(
      ".question[data-question-id]"
    );

    freeResponseQuestions.forEach((question) => {
      const inputField = question.querySelector(".response");
      const confirmButton = question.querySelector(".confirm");
      const message = question.querySelector(".message");

      confirmButton.addEventListener("click", function () {
        const userAnswer = inputField.value.trim().toLowerCase();
        const correctAnswer = getCorrectAnswer(question);

        if (userAnswer === correctAnswer.toLowerCase()) {
          inputField.style.backgroundColor = "lightgreen";
          message.textContent = "Correct!";
          message.style.color = "green";
          score++;
        } else {
          inputField.style.backgroundColor = "lightcoral";
          message.textContent = "Incorrect";
          message.style.color = "red";
        }

        inputField.disabled = true;
        confirmButton.disabled = true;

        y;
        scoreDisplay.textContent = score;
      });
    });
  };

  const getCorrectAnswer = (questionElement) => {
    const questionId = questionElement.getAttribute("data-question-id");
    const correctAnswers = {
      1: "Adrenal",
      2: "Neuron",
      3: "Meter",
      4: "Yellow",
      5: "Law of inertia",
    };

    return correctAnswers[questionId] || "";
  };

  const disableAnswerButtons = (questionElement) => {
    const answerButtons = questionElement.querySelectorAll(".answer");
    answerButtons.forEach((button) => {
      button.disabled = true;
    });
  };

  handleMultipleChoiceQuestions();
  handleFreeResponseQuestions();
});
