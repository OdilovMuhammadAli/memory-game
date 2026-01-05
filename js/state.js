// settings
// Tema – raqamlar yoki ikonlar
export let theme = "numbers";

// Oyinchilar soni, default 1
export let playersCount = 1;

// Grid hajmi (4x4 yoki 6x6)
export let gridSize = 4;

// Oyinda ishlatiladigan barcha kartalar
export let allCards = [];

// Hozir ochilgan kartalar
export let openCards = [];

// Topilgan juftliklar soni
export let foundPairs = 0;

// Bosilgan harakatlar soni
export let movesCount = 0;

// Oyin davomiyligi (sekundlarda)
export let timeSeconds = 0;

// Taymerni saqlash
export let timerInterval = null;

// Hozirgi oyinchi indeksi (0,1,2...)
export let currentPlayerIndex = 0;

// Har bir oyinchi uchun juftliklar soni
export let playerScores = [];

// Kartalarni tekshiryapmizmi (true/false)
export let isChecking = false;

// ========================================
//       Sozlamalarni yangilash
// ========================================

export function setTheme(value) {
  // Tema ozgartirish (numbers/icons)
  theme = value;
}

export function setPlayersCount(value) {
  // Oyinchilar sonini ozgartirish
  playersCount = value;
}

export function setGridSize(value) {
  // Grid olchamini ozgartirish
  gridSize = value;
}

// ========================================
//       Oyin holatini yangilash
// ========================================

export function setAllCards(cards) {
  // Barcha kartalarni oyin holatiga qoyish
  allCards = cards;
}

export function addOpenCard(index) {
  // Hozir ochilgan kartani qoshish
  openCards.push(index);
}

export function clearOpenCards() {
  // Ochilgan kartalarni boshatish
  openCards = [];
}

export function incrementFoundPairs() {
  // Topilgan juftliklar sonini 1 ga oshirish
  foundPairs++;
}

export function incrementMoves() {
  // Harakatlar sonini 1 ga oshirish
  movesCount++;
}

export function incrementTime() {
  // Taymerni 1 sekundga oshirish
  timeSeconds++;
}

export function setTimerInterval(interval) {
  // Taymerni saqlash
  timerInterval = interval;
}

export function clearTimer() {
  // Agar taymer ishlayotgan bolsa, uni toxtatish
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

export function setIsChecking(value) {
  // Kartalarni tekshiryapmizmi, flagni ozgartirish
  isChecking = value;
}

export function incrementPlayerScore(index) {
  // Berilgan oyinchi juftliklar sonini 1 ga oshirish
  playerScores[index]++;
}

export function nextPlayer() {
  // Navbatdagi oyinchiga otish
  currentPlayerIndex = (currentPlayerIndex + 1) % playersCount;
}

export function initPlayerScores() {
  // Har bir oyinchi uchun skorlarni 0 ga ornatish
  playerScores = [];
  for (let i = 0; i < playersCount; i++) {
    playerScores.push(0);
  }
}

// ========================================
//           Holatni tozalash
// ========================================

export function resetGame() {
  // Oyinni tozalash: ochilgan kartalar, topilgan juftliklar, moves, vaqt, navbat
  openCards = [];
  foundPairs = 0;
  movesCount = 0;
  timeSeconds = 0;
  currentPlayerIndex = 0;
  isChecking = false;

  // Taymer ishlayotgan bolsa uni toxtatish
  clearTimer();
}
