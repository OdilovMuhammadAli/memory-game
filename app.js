let players = 1;
let gridSize = 4;
let currentPlayer = 0;
let scores = [];
let first = null;
let lock = false;
let timer = 0;
let interval;

function setActive(group, value) {
  document.querySelectorAll(group + " button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset[value]);
  });
}

document.querySelectorAll(".players button").forEach((btn) => {
  btn.onclick = () => {
    players = +btn.dataset.players;
    document
      .querySelectorAll(".players button")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  };
});

document.querySelectorAll(".grid button").forEach((btn) => {
  btn.onclick = () => {
    gridSize = +btn.dataset.size;
    document
      .querySelectorAll(".grid button")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  };
});

document.getElementById("start").onclick = startGame;

function startGame() {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  scores = Array(players).fill(0);
  currentPlayer = 0;

  if (players === 1) {
    interval = setInterval(() => {
      timer++;
      updateInfo();
    }, 1000);
  }

  createBoard();
  updateInfo();
}

function updateInfo() {
  let info =
    players === 1
      ? `Time: ${timer}s`
      : `Player ${currentPlayer + 1} | Scores: ${scores.join(" - ")}`;
  document.getElementById("info").innerText = info;
}

function createBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  let total = gridSize * gridSize;
  let values = [];

  for (let i = 1; i <= total / 2; i++) {
    values.push(i, i);
  }

  values.sort(() => Math.random() - 0.5);

  values.forEach((val) => {
    const card = document.createElement("div");
    card.className = "card-item";
    card.dataset.value = val;
    card.onclick = () => flip(card);
    board.appendChild(card);
  });
}

function flip(card) {
  if (lock || card.classList.contains("open")) return;

  card.classList.add("open");
  card.innerText = card.dataset.value;

  if (!first) {
    first = card;
  } else {
    lock = true;
    if (first.dataset.value === card.dataset.value) {
      scores[currentPlayer]++;
      first = null;
      lock = false;
      updateInfo();
    } else {
      setTimeout(() => {
        first.classList.remove("open");
        card.classList.remove("open");
        first.innerText = "";
        card.innerText = "";
        first = null;
        lock = false;

        if (players > 1) {
          currentPlayer = (currentPlayer + 1) % players;
        }
        updateInfo();
      }, 800);
    }
  }
}
