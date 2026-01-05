// Sozlamalar
export let theme = "numbers";
export let playersCount = 1;
export let gridSize = 4;

// O'yin holati
export let allCards = [];
export let openCards = [];
export let foundPairs = 0;
export let movesCount = 0;
export let timeSeconds = 0;
export let timerInterval = null;
export let currentPlayerIndex = 0;
export let playerScores = [];
export let isChecking = false;

// Sozlamalarni yangilash
export function setTheme(value) {
  theme = value;
}

export function setPlayersCount(value) {
  playersCount = value;
}

export function setGridSize(value) {
  gridSize = value;
}

// O'yin holatini yangilash
export function setAllCards(cards) {
  allCards = cards;
}

export function addOpenCard(index) {
  openCards.push(index);
}

export function clearOpenCards() {
  openCards = [];
}

export function incrementFoundPairs() {
  foundPairs++;
}

export function incrementMoves() {
  movesCount++;
}

export function incrementTime() {
  timeSeconds++;
}

export function setTimerInterval(interval) {
  timerInterval = interval;
}

export function clearTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

export function setIsChecking(value) {
  isChecking = value;
}

export function incrementPlayerScore(index) {
  playerScores[index]++;
}

export function nextPlayer() {
  currentPlayerIndex = (currentPlayerIndex + 1) % playersCount;
}

export function initPlayerScores() {
  playerScores = [];
  for (let i = 0; i < playersCount; i++) {
    playerScores.push(0);
  }
}

// Holatni tozalash
export function resetGame() {
  openCards = [];
  foundPairs = 0;
  movesCount = 0;
  timeSeconds = 0;
  currentPlayerIndex = 0;
  isChecking = false;
  clearTimer();
}
