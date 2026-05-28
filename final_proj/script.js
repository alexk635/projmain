document.addEventListener("DOMContentLoaded", function () {

    let button = document.getElementById("showQuizBtn");

    let quiz = document.getElementById("quizBlock");
    let answerButton = document.getElementById("answerBtn");

    button.addEventListener("click", function () {

        if (quiz.classList.contains("hidden")) {

            quiz.classList.remove("hidden");

            button.textContent = "Скрыть викторину";

        } else {

            quiz.classList.add("hidden");

            button.textContent = "Угадать игрока по цитате";
        }
    });

    answerButton.addEventListener("click", function () {

        alert("Это Майкл Джордан");

    });

});