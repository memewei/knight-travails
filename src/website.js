import generateBoard from "./board-display";
import removeKnight from "./remove-knight";
import randomlyPlaceKnight from "./randomly-place-knight";
import animatePath from "./animation";
import clearBoard from "./clear-board";
import placeKnight from "./place-knight";
import selectEndingCell from "./select-ending-cell";
import Board from "./board-logic";

const placeKnightBtn = document.querySelector(".place-knight-btn");
const clearBoardBtn = document.querySelector(".clear-board-btn");
const randomlyPlaceBtn = document.querySelector(".randomly-place-btn");
const selectEndingBtn = document.querySelector(".select-ending-btn");
const startBtn = document.querySelector(".start-btn");

function initialize() {
  let handleRandom = () => {
    removeKnight();
    randomlyPlaceKnight();
  };

  let knightTravails = () => {
    animatePath(Board.findPath());
    Board.chainReset();
  };

  clearBoardBtn.addEventListener("click", clearBoard);
  placeKnightBtn.addEventListener("click", placeKnight);
  randomlyPlaceBtn.addEventListener("click", handleRandom);
  selectEndingBtn.addEventListener("click", selectEndingCell);
  startBtn.addEventListener("click", knightTravails);
  generateBoard();
}

export default initialize;
