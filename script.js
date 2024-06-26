"use strict";
const buttons = document.querySelectorAll(".icon");
const modals = document.querySelectorAll(".model");
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const setDefalut = function (index) {
  answers.forEach((answer, i) => {
    if (i != index) {
      buttons[i].textContent = "➕";
      answer.style.display = "none";
    }
  });
};
buttons.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    setDefalut(index);
    if (btn.textContent === "➕") {
      answers[index].style.display = "inline";

      btn.textContent = "✖️";
    } else {
      answers[index].style.display = "none";
      btn.textContent = "➕";
    }
  });
});
