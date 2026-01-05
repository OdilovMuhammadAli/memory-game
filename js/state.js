// settings
// Tema – raqamlar yoki ikonlar
export let theme = "numbers";

// Oyinchilar soni,ozi 1
export let playersCount = 1;

// 4x4 yoki 6x6
export let gridSize = 4;

// cardlarni hammasi
export let allCards = [];

//ui da ochib korgan cardlar
export let openCards = [];

// Topganizdegi points
export let foundPairs = 0;

// nechta hod qilganingiz
export let movesCount = 0;

// oyin davomiliigi
export let timeSeconds = 0;

// taymer
export let timerInterval = null;

//qaysi oyinchi index orqali korsatvolamiz
export let currentPlayerIndex = 0;

// Har bir oyinchi uchun juftliklar soni
export let playerScores = [];

// Kartalarni tekshiryapmizmi
export let isChecking = false;

//       Settings yangilash

export function setTheme(value) {
  // numbers yoki icon temasi
  theme = value;
}

export function setPlayersCount(value) {
  //  1-2-3-4 oyinchilarning necta bolishini tanlash
  playersCount = value;
}

export function setGridSize(value) {
  // 4x4 yoki 6x6?
  gridSize = value;
}

//       Oyin holatini yangilash

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
  // Topillsa +1
  foundPairs++;
}

export function incrementMoves() {
  // Harakatlar soni+1
  movesCount++;
}

export function incrementTime() {
  // Taymerni +1
  timeSeconds++;
}

export function setTimerInterval(interval) {
  // Taymerni saqlash
  timerInterval = interval;
}

export function clearTimer() {
  // Agar taymer islarsa ochirish infiniti bolib ketmasligi kerak
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

export function setIsChecking(value) {
  // Kartalarni tekshiryapmizmi
  isChecking = value;
}

export function incrementPlayerScore(index) {
  // Berilgan oyinchi juftliklar sonini +1
  playerScores[index]++;
}

export function nextPlayer() {
  // Navbatdagi oyinchiga otish
  currentPlayerIndex = (currentPlayerIndex + 1) % playersCount;
}

export function initPlayerScores() {
  // Har bir oyinchi uchun skorlarni 0 ga ornatish boshlanishi chunki
  playerScores = [];
  for (let i = 0; i < playersCount; i++) {
    playerScores.push(0);
  }
}

//           Holatni tozalash

export function resetGame() {
  // Oyinni tozalash: ochilgan kartalar, topilgan juftliklar, moves, vaqt, navbat...
  openCards = [];
  foundPairs = 0;
  movesCount = 0;
  timeSeconds = 0;
  currentPlayerIndex = 0;
  isChecking = false;

  // Taymer ishlayotgan bolsa uni toxtatish
  clearTimer();
}
