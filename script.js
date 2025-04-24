const flashcards = [
  {
    question: "Формула разности квадратов?",
    answer: "a² - b² = (a - b)(a + b)"
  },
  {
    question: "Что такое a^(-n)?",
    answer: "1 / a^n"
  },
  {
    question: "Как выглядит формула квадрата суммы?",
    answer: "(a + b)² = a² + 2ab + b²"
  }
];

let currentIndex = 0;
const card = document.getElementById("flashcard");
const questionDiv = document.getElementById("question");
const answerDiv = document.getElementById("answer");

function showCard(index) {
  const flashcard = flashcards[index];
  questionDiv.textContent = flashcard.question;
  answerDiv.textContent = flashcard.answer;
  card.classList.remove("flipped");
}

function flipCard() {
  card.classList.toggle("flipped");
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showCard(currentIndex);
}

window.onload = () => {
  showCard(currentIndex);
};
