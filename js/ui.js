import { gridSize, playersCount, playerScores } from "./state.js";

export function hideSettings() {
  document.getElementById("settingsModal").classList.add("hidden");
  document.getElementById("gameContainer").classList.add("active");
}

export function showSettings() {
  document.getElementById("settingsModal").classList.remove("hidden");
  document.getElementById("gameContainer").classList.remove("active");
}

export function renderCards(cards, clickHandler) {
  let grid = document.getElementById("cardsGrid");
  grid.innerHTML = "";
  grid.className = "cards-grid size-" + gridSize + "x" + gridSize;

  for (let i = 0; i < cards.length; i++) {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = '<span class="card-content">' + cards[i] + "</span>";
    card.onclick = function () {
      clickHandler(i);
    };
    grid.appendChild(card);
  }
}

export function updateTime(seconds) {
  document.getElementById("timeValue").textContent = formatTime(seconds);
}

export function updateMoves(moves) {
  document.getElementById("movesValue").textContent = moves;
}

export function renderPlayers() {
  if (playersCount === 1) {
    document.getElementById("playersPanel").classList.remove("active");
    document.getElementById("statusPanel").classList.add("active");
  } else {
    let panel = document.getElementById("playersPanel");
    panel.innerHTML = "";
    panel.classList.add("active");
    document.getElementById("statusPanel").classList.remove("active");

    for (let i = 0; i < playersCount; i++) {
      let playerCard = document.createElement("div");
      playerCard.className = "player-card" + (i === 0 ? " active" : "");
      playerCard.innerHTML =
        '<div class="player-name">Player ' +
        (i + 1) +
        '</div><div class="player-score">0</div>';
      panel.appendChild(playerCard);
    }
  }
}

export function setActivePlayer(index) {
  let playerCards = document.querySelectorAll(".player-card");
  for (let i = 0; i < playerCards.length; i++) {
    if (i === index) {
      playerCards[i].classList.add("active");
    } else {
      playerCards[i].classList.remove("active");
    }
  }
}

export function updatePlayerScore(index, score) {
  let playerCards = document.querySelectorAll(".player-card");
  playerCards[index].querySelector(".player-score").textContent = score;
}

// Bu funksiya kartani ochadi
export function flipCard(index) {
  let cards = document.querySelectorAll(".card");
  cards[index].classList.add("flipped"); // kartani ochish uchun class qo‘shamiz
}

export function unflipCard(index) {
  let cards = document.querySelectorAll(".card");
  cards[index].classList.remove("flipped");
}

export function markCardAsMatched(index) {
  let cards = document.querySelectorAll(".card");
  cards[index].classList.add("matched");
  cards[index].classList.remove("flipped");
}

export function isCardActive(index) {
  let cards = document.querySelectorAll(".card");
  return (
    cards[index].classList.contains("flipped") ||
    cards[index].classList.contains("matched")
  );
}

export function showResult(timeStr, moves) {
  let modal = document.getElementById("resultModal");
  let title = document.getElementById("resultTitle");
  let stats = document.getElementById("resultStats");

  if (playersCount === 1) {
    title.textContent = "You did it!";
    stats.innerHTML =
      '<div class="stat-item"><span class="stat-label">Time Elapsed</span><span class="stat-value">' +
      timeStr +
      "</span></div>" +
      '<div class="stat-item"><span class="stat-label">Moves Taken</span><span class="stat-value">' +
      moves +
      " Moves</span></div>";
  } else {
    let maxScore = 0;
    for (let i = 0; i < playerScores.length; i++) {
      if (playerScores[i] > maxScore) {
        maxScore = playerScores[i];
      }
    }

    let winners = [];
    for (let i = 0; i < playerScores.length; i++) {
      if (playerScores[i] === maxScore) {
        winners.push(i);
      }
    }

    if (winners.length > 1) {
      title.textContent = "It's a tie!";
    } else {
      title.textContent = "Player " + (winners[0] + 1) + " Wins!";
    }

    let sorted = [];
    for (let i = 0; i < playerScores.length; i++) {
      sorted.push({ index: i, score: playerScores[i] });
    }
    sorted.sort(function (a, b) {
      return b.score - a.score;
    });

    let html = "";
    for (let i = 0; i < sorted.length; i++) {
      let p = sorted[i];
      let isWinner = p.score === maxScore;
      html +=
        '<div class="stat-item' +
        (isWinner ? " winner" : "") +
        '">' +
        '<span class="stat-label">Player ' +
        (p.index + 1) +
        "</span>" +
        '<span class="stat-value">' +
        p.score +
        " Pairs</span></div>";
    }
    stats.innerHTML = html;
  }

  modal.classList.add("active");
}

export function hideResult() {
  document.getElementById("resultModal").classList.remove("active");
}

export function formatTime(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return mins + ":" + (secs < 10 ? "0" : "") + secs;
}

// export function renderCards(cards, clickHandler) {
//   let grid = document.getElementById("cardsGrid");
//   grid.innerHTML = "";
//   grid.className = "cards-grid size-" + gridSize + "x" + gridSize;

//   for (let i = 0; i < cards.length; i++) {
//     let card = document.createElement("div");
//     card.className = "card";
//     card.innerHTML = '<span class="card-content">' + cards[i] + "</span>";

//     card.onclick = function () {
//       clickHandler(i);
//     };
//     grid.appendChild(card);
//   }
// }
// Kartani bosganda nima bolishini belgilaydi va  Kartaning ichida nimani korsatishini yozadi va bu kotda  yangi karta yaratiladi
//Kartalar qanday qilib joylashishini belgilanadi
//gridni tozalaymiz.Eski kartalar ketadi oshanda
// ozi bu func.Kartalarni ekranga qoyadi
// Vaqtni formatlash (sekundan->>>>>>>>>>>>>>>>>>> minutga:sekund)
