import { numbers, icons } from "./data.js";
import { theme, gridSize } from "./state.js";

// Kartalar yaratish
export function makeCards() {
  let pairsNeeded = (gridSize * gridSize) / 2;
  let source = theme === "numbers" ? numbers : icons;

  // Tasodifiy elementlar tanlash
  let picked = [];
  while (picked.length < pairsNeeded) {
    let randomItem = source[Math.floor(Math.random() * source.length)];
    if (!picked.includes(randomItem)) {
      picked.push(randomItem);
    }
  }

  // Har birini 2 marta qo'shish
  let doubled = [...picked, ...picked];

  // Aralashtirish
  for (let i = doubled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = doubled[i];
    doubled[i] = doubled[j];
    doubled[j] = temp;
  }

  return doubled;
}
