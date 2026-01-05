import * as state from "./state.js";
import * as ui from "./ui.js";
import { startGame } from "./game.js";

// Theme tugmalari
export function setupThemeButtons() {
  document.getElementById("themeNumbers").onclick = function () {
    document.getElementById("themeNumbers").classList.add("active");
    document.getElementById("themeIcons").classList.remove("active");
    state.setTheme("numbers");
  };

  document.getElementById("themeIcons").onclick = function () {
    document.getElementById("themeIcons").classList.add("active");
    document.getElementById("themeNumbers").classList.remove("active");
    state.setTheme("icons");
  };
}

// Players tugmalari
export function setupPlayersButtons() {
  document.getElementById("players1").onclick = function () {
    document.getElementById("players1").classList.add("active");
    document.getElementById("players2").classList.remove("active");
    document.getElementById("players3").classList.remove("active");
    document.getElementById("players4").classList.remove("active");
    state.setPlayersCount(1);
  };

  document.getElementById("players2").onclick = function () {
    document.getElementById("players2").classList.add("active");
    document.getElementById("players1").classList.remove("active");
    document.getElementById("players3").classList.remove("active");
    document.getElementById("players4").classList.remove("active");
    state.setPlayersCount(2);
  };

  document.getElementById("players3").onclick = function () {
    document.getElementById("players3").classList.add("active");
    document.getElementById("players1").classList.remove("active");
    document.getElementById("players2").classList.remove("active");
    document.getElementById("players4").classList.remove("active");
    state.setPlayersCount(3);
  };

  document.getElementById("players4").onclick = function () {
    document.getElementById("players4").classList.add("active");
    document.getElementById("players1").classList.remove("active");
    document.getElementById("players2").classList.remove("active");
    document.getElementById("players3").classList.remove("active");
    state.setPlayersCount(4);
  };
}

// Size tugmalari
export function setupSizeButtons() {
  document.getElementById("size4").onclick = function () {
    document.getElementById("size4").classList.add("active");
    document.getElementById("size6").classList.remove("active");
    state.setGridSize(4);
  };

  document.getElementById("size6").onclick = function () {
    document.getElementById("size6").classList.add("active");
    document.getElementById("size4").classList.remove("active");
    state.setGridSize(6);
  };
}

// Boshqa tugmalar
export function setupGameButtons() {
  document.getElementById("startBtn").onclick = startGame;
  document.getElementById("restartBtn").onclick = startGame;

  document.getElementById("newGameBtn").onclick = function () {
    ui.hideResult();
    ui.showSettings();
  };

  document.getElementById("resultRestartBtn").onclick = function () {
    ui.hideResult();
    startGame();
  };

  document.getElementById("resultNewBtn").onclick = function () {
    ui.hideResult();
    ui.showSettings();
  };
}
// Eventlar