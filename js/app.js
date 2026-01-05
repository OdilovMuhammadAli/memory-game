// events.js-dan barcha kerakli setup funksiyalarini import qilamiz
import * as events from "./events.js";

// Bitta funksiyada barcha setuplarni ishga tushiramiz
export function initializeGameUI() {
  // Tema tugmalarini tayorlash
  events.setupThemeButtons();

  // Oyinchilar soni tugmalarini tayyorlash bu
  events.setupPlayersButtons();

  // 4x4 va 6x6 olchamlarini tanlash tugmalarini tayyorlash
  events.setupSizeButtons();

  // startni boshlash va boshqa tugmalar
  events.setupGameButtons();
}

// Sahifa yuklanganda ishga tushirish
document.addEventListener("DOMContentLoaded", () => {
  initializeGameUI();
});
//./events da bir nechta funksiyalar borligi uchun (setupThemeButtons, setupPlayersButtons............)
// *as bu shunchaki nom berar ekan 
// Assalomu alykum ustoz kopini ai oarqali nma qilishini va bersa bermasa qilishini xomentga yozzib ketganman