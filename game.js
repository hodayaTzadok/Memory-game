const cards = ["🍉", "🍹", "☀️", "🌊", "🤿", "🍉", "🍹", "☀️", "🌊", "🤿"];
let score1 = 0;
let score2 = 0;

const cardBack = "o";
let arrayId = [];
const board = document.getElementById("board");
const win = document.getElementById("win");

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const $score_player1 = document.getElementById("score_player1");
const $score_player2 = document.getElementById("score_player2");
let toggle = true;
let player_class = "player1_class";

// function changeClassName(className) {
//   console.log("in func");
//   // player1.classList.add("player1_class");
//   if (className == "player1") {
//     player1.classList.(`player1_class`);
//   } else {
//     player2.classList.replace(`player2_class`);
//   }
// }
// changeClassName("player1");

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }
  return arr;
}

function createCard(card) {
  const cardEl = document.createElement("div");
  cardEl.innerHTML = cardBack;
  cardEl.id = i;
  cardEl.className = "card";
  return cardEl;
}
shuffle(cards);
for (i in cards) {
  const cardBack1 = createCard(i);
  board.appendChild(cardBack1);
}

board.addEventListener("click", (e) => {
  if (e.target == board) {
  } else {
    e.target.innerHTML = cards[e.target.id];
    const cardId = e.target;
    arrayId.push(cardId);
    if (arrayId.length == 2) {
      if (arrayId[0].innerHTML == arrayId[1].innerHTML) {
        if (toggle) {
          score1++;
          $score_player1.textContent = `score: ${score1}`;

          // changeClassName("player1");
        } else {
          score2++;
          $score_player2.textContent = `score: ${score2}`;
          // changeClassName("player2");
        }
        toggle = !toggle;
        arrayId = [];
      } else {
        setTimeout(() => {
          arrayId[0].innerHTML = cardBack;
          arrayId[1].innerHTML = cardBack;
          arrayId = [];
        }, 300);
      }
    }
  }
  if (score1 + score2 == cards.length / 2) {
    if (score1 > score2) {
      win.textContent = "player 1 you win";
    } else {
      win.textContent = "player 2 you win";
    }
  }
});