const flashcards = document.querySelector(".flashcards");
const save = document.querySelector(".btn-save");
const close = document.querySelector(".btn-close");
const question = document.querySelector(".text-question");
const answer = document.querySelector(".text-answer");
const btnRemove = document.querySelector(".btn-remove");
const btnAdd = document.querySelector(".btn-add");

const cardContainer = document.querySelector(".card-container");
let cards = localStorage.getItem("item")
  ? JSON.parse(localStorage.getItem("item"))
  : [];

save.addEventListener("click", function () {
  addFlashCard();
});

function flashcardMaker(text) {
  const flashcard = document.createElement("div");
  const flashcardTitle = document.createElement("h3");
  const flashcardMessage = document.createElement("h3");

  flashcard.className = "flashcard";
  flashcardTitle.className = "flashcard-title";
  flashcardMessage.className = "flashcard-message";
  flashcardTitle.textContent = text.question;
  flashcardMessage.textContent = text.answer;
  flashcard.appendChild(flashcardTitle);
  flashcard.appendChild(flashcardMessage);

  flashcardMessage.setAttribute("style", "display:none");
  flashcards.appendChild(flashcard);

  question.value = "";
  answer.value = "";
  flashcard.addEventListener("click", function () {
    if (flashcardMessage.style.display == "none") {
      flashcardMessage.style.display = "block";
    } else {
      flashcardMessage.style.display = "none";
    }
  });
}
close.addEventListener("click", function () {
  cardContainer.classList.add("display");
});
btnAdd.addEventListener("click", function () {
  cardContainer.classList.remove("display");
});
btnRemove.addEventListener("click", function () {
  localStorage.clear();
  flashcards.innerHTML = "";
  cards = [];
});
function addFlashCard() {
  const flashcard_info = {
    question: question.value,
    answer: answer.value,
  };
  cards.push(flashcard_info);
  localStorage.setItem("item", JSON.stringify(cards));
  flashcardMaker(cards[cards.length - 1]);
}

cards.forEach(flashcardMaker);
