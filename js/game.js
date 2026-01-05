import * as state from "./state.js";
import * as ui from "./ui.js";
import { makeCards } from "./cards.js";

// Oyinni boshlash

export function startGame() {
  // Oyinni reset qilish
  state.resetGame();

  // Kartalarni yaratish va saqlash
  let cards = makeCards();
  state.setAllCards(cards);

  // UI-ni yangilash
  ui.hideSettings();
  ui.renderCards(cards, clickCard);
  ui.updateTime(0);
  ui.updateMoves(0);

  if (state.playersCount > 1) {
    state.initPlayerScores();
  }
  ui.renderPlayers();

  // Timer ishga tushadi (1 soniya interval bilan)
  let interval = setInterval(() => {
    state.incrementTime();
    ui.updateTime(state.timeSeconds);
  }, 1000);
  state.setTimerInterval(interval);
}

// - Kartaga bosish
export function clickCard(index) {
  // Agar karta allaqachon ochilgan yoki tekshirish jarayoni bolsa, hech narsa qilmaymiz
  if (ui.isCardActive(index) || state.isChecking) return;

  // Kartani ochish va state-ga qoshish
  ui.flipCard(index);
  state.addOpenCard(index);

  // Agar 2 karta ochilgan bolsa, tekshiramiz
  if (state.openCards.length === 2) {
    state.setIsChecking(true);
    checkCards();
  }
}

// - Kartalarni tekshirish
function checkCards() {
  const [index1, index2] = state.openCards;

  // Harakatlar sonini oshiramiz
  state.incrementMoves();
  ui.updateMoves(state.movesCount);

  const isMatch = state.allCards[index1] === state.allCards[index2];

  // Kichik delay bilan tekshirish
  setTimeout(() => {
    if (isMatch) {
      // Togri juftlik
      ui.markCardAsMatched(index1);
      ui.markCardAsMatched(index2);
      state.incrementFoundPairs();

      // Kop oyinchi rejimi bolsa
      if (state.playersCount > 1) {
        state.incrementPlayerScore(state.currentPlayerIndex);
        ui.updatePlayerScore(
          state.currentPlayerIndex,
          state.playerScores[state.currentPlayerIndex]
        );
      }

      // Agar barcha kartalar topilgan bolsa, oyinni tugatish
      if (state.foundPairs === state.allCards.length / 2) {
        finishGame();
      }
    } else {
      // Notogri juftlik, kartalarni yopish
      ui.unflipCard(index1);
      ui.unflipCard(index2);

      // Kop oyinchi bolsa, navbatni ozgartirish
      if (state.playersCount > 1) {
        state.nextPlayer();
        ui.setActivePlayer(state.currentPlayerIndex);
      }
    }

    // Ochilgan kartalarni tozalash va tekshirish tugadi
    state.clearOpenCards();
    state.setIsChecking(false);
  }, 600); // 0.6 soniya delay yetarli
}

// Oyinni tugatish
function finishGame() {
  // Timerni toxtatish
  state.clearTimer();

  // Natijani korsatish
  setTimeout(() => {
    let timeStr = ui.formatTime(state.timeSeconds);
    ui.showResult(timeStr, state.movesCount);
  }, 300); // kichik delay bilan modalni korsatish
}
// delay bir ishni biroz vaqtga toxtatib turish dgani vazifasi esa ishlarni bosqichma-bosqich qilish
