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

  // Har birini 2 marta qoshish chunki 1 bita bolmasligi kerak 
  let doubled = [...picked, ...picked];

  // Aralashtirish
  for (let i = doubled.length - 1; i > 0; i--) {
    let Val = Math.floor(Math.random() * (i + 1));
    let temp = doubled[i];
    doubled[i] = doubled[Val];
    doubled[Val] = temp;
  }

  return doubled;
}
// let picked = [];

// while (picked.length < pairsNeeded)
// Bu – “takrorla shuni, har doim tanlangan narsalar soni kerakli juftlikdan kam bolsa” degani.
// Masalan, agar kerak bolsa 8 juftlik, u 8 taga yetguncha ishlaydi.
// let randomItem = source[Math.floor(Math.random() * source.length)];
// Bu – tasodifiy bir narsani tanlaydi source degan royxatdan.
// Math.random() 0 va 1 orasida son beradi, * source.length bilan kattalashtiriladi va Math.floor bilan butun qilib olinadi.
//  shuni dasdidan  royxatdan tasodifiy element chiqadi.
// if (!picked.includes(randomItem)) { picked.push(randomItem); }
// // Bu – bosh quti. Biz unga tanlangan kartalarni yoki narsalarni qoyamiz.
// // Agar bu element allaqachon tanlanmagan bolsa, uni picked qutiga qoshadi.
// Shuning uchun hech qachon bir element ikki marta qoshilmaydi.